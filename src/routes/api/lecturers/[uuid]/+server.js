import Database from "db-quickly-js";
import {
  reinitializeDB,
  findTagsUuid,
  findTagsName,
  lecturerSchema,
  removeUnusedTags,
} from "$lib/server/db/db.js";
import sanitizeHtml from "sanitize-html";

/**
 * Retrieves data from a database based on the provided UUID.
 * @param {Object} options - The options object.
 * @param {Object} options.params - An object containing the UUID of the user to retrieve.
 * @returns {Promise<Response>} - A promise that resolves to a JSON response with the retrieved object or an error message.
 */
export const GET = async ({ params }) => {
  // Reinitialize the database
  reinitializeDB();

  // Get the cluster named "Lecturers" from the database
  const cluster = Database.getClusterByName("Lecturers");

  // Iterate through each object in the cluster data
  for (const obj of cluster.data) {
    const { uuid } = obj;

    obj.tags = obj.tags.map((tag) => {
      return { name: findTagsName(tag), uuid: tag };
    });

    // Check if the `uuid` of the current object matches the provided UUID
    if (uuid === params.uuid) {
      // If a match is found, return a JSON response with the retrieved object and a 200 status code
      return new Response(JSON.stringify(obj), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      });
    }
  }

  // If no match is found, return a JSON response with a 404 status code and an error message
  return new Response(
    JSON.stringify({ code: 404, message: "User not found" }),
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    }
  );
};

/**
 * Handles the HTTP PUT request to update a user's data in the database.
 * @param {Object} options - The options object.
 * @param {Object} options.params - An object containing the UUID of the user to update.
 * @param {Object} options.request - An object representing the HTTP request.
 * @returns {Promise<Response>} - A promise that resolves to a JSON response with the updated object or an error message.
 */
export const PUT = async ({ params, request }) => {
  // Reinitialize the database
  reinitializeDB();

  try {
    // Retrieve the JSON data from the request body
    const obj = await request.json();

    let copyTags = [];

    if (obj.tags) {
      // Replace tags with corresponding UUIDs
      for (const tag of obj.tags) {
        tag.uuid = findTagsUuid(tag.name);
      }

      copyTags = obj.tags;

      obj.tags = obj.tags.map((tag) => tag.uuid);
    }

    // If the UUID property is present in the object, rename it to `uuid`
    if (obj.UUID) {
      obj.uuid = obj.UUID;
      delete obj.UUID;
    }

    // Set the UUID from the params object to the object
    obj.uuid = params.uuid;

    // Validate the object against the `lecturerSchema`
    const { error } = lecturerSchema.validate(obj);

    // Retrieve the cluster named "Lecturers" from the database
    const cluster = Database.getClusterByName("Lecturers");

    // Search for the user with the matching UUID in the cluster
    const user = cluster.data.find((item) => item.uuid === params.uuid);

    if (obj.active) {
      user.active = true;
    } else {
      user.active = false;
    }

    // If obj is missing some properties, add the missing properties from the user object
    for (const key in user) {
      if (!obj[key]) {
        obj[key] = user[key];
      }
    }

    if (copyTags.length === 0) {
      copyTags = obj.tags.map((tag) => {
        return { name: findTagsName(tag), uuid: tag };
      });
    }

    obj.bio = sanitizeHtml(obj.bio, {
      allowedTags: ["b", "i", "em", "strong", "a"],
      allowedAttributes: {
        a: ["href"],
      },
      allowedIframeHostnames: ["www.youtube.com"],
    });

    if (user) {
      // Update the user's data with the new object
      Object.assign(user, obj);

      // Update the cluster in the database
      Database.updateClusterByName(cluster.clusterName, cluster);

      user.tags = copyTags;
      removeUnusedTags();
      // Return a 200 response with the updated object
      return new Response(JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      });
    } else {
      // Return a 404 response with an error message if the user is not found
      return new Response(
        JSON.stringify({ code: 404, message: "User not found" }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          status: 404,
        }
      );
    }
  } catch (error) {
    console.log(error);
    // Return a 400 response if there is an error parsing the request body
    return new Response(
      JSON.stringify({ code: 400, message: "Invalid request body" }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 400,
      }
    );
  }
};

/**
 * Deletes a user from the database based on the provided UUID.
 * @param {Object} params - An object containing the UUID of the user to delete.
 * @returns {Response} - A response with status 204 if the user is found and deleted, or a response with status 404 if the user is not found.
 */
export const DELETE = async ({ params }) => {
  reinitializeDB();
  let cluster = Database.getClusterByName("Lecturers");

  const userIndex = cluster.data.findIndex((user) => user.uuid === params.uuid);

  if (userIndex !== -1) {
    cluster.data.splice(userIndex, 1);
    Database.updateClusterByName(cluster.clusterName, cluster);
    removeUnusedTags();
    return new Response(null, {
      headers: {
        "Content-Type": "application/json",
      },
      status: 204,
    });
  }

  Database.updateClusterByName(cluster.clusterName, cluster);
  return new Response(
    JSON.stringify({ code: 404, message: "User not found" }),
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    }
  );
};
