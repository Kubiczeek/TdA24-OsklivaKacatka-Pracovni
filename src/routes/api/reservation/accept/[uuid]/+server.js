import Database from "db-quickly-js";
import {
  reinitializeDB,
  findTagsUuid,
  findTagsName,
  lecturerSchema,
  removeUnusedTags,
  resSchema,
} from "$lib/server/db/db.js";
import { lectorConfSendClient } from "$lib/server/nodemailer/nodemailer.js";

export const POST = async ({ params, request }) => {
  // Initialize the database
  reinitializeDB();
  try {
    //obj.decision, obj.message, obj.place
    // Parse the JSON payload from the request body
    const obj = await request.json();
    if (obj.decision) {
      let cluster = Database.getClusterByName("Reservations");

      let user = cluster.data.find((item) => item.uuid === params.uuid);
      user.place = obj.place;

      console.log(user);
      const c = Database.getClusterByName("Lecturers");

      for (const ob of c.data) {
        const { uuid } = ob;

        const namen =
          ob.title_before +
          " " +
          ob.first_name +
          " " +
          ob.middle_name +
          " " +
          ob.last_name;
        if (uuid === user.lectorUuid) {
          lectorConfSendClient(
            ob.price_per_hour,
            ob.contact.telephone_numbers[0],
            ob.contact.emails[0],
            namen,
            obj.theme,
            "mikulic.tablet.kluci@gmail.com",
            obj.message,
            obj.place
          );
        }
      }
      Database.updateClusterByName(cluster.clusterName, cluster);
    } else {
      /*   let cluster = Database.getClusterByName("Reservations");

      let user = cluster.data.find((item) => item.uuid === params.uuid);
      user.place = obj.place;
      console.log(user);

      const c = Database.getClusterByName("Lecturers");

      for (const ob of c.data) {
        const { uuid } = ob;

        const namen =
          ob.title_before +
          " " +
          ob.first_name +
          " " +
          ob.middle_name +
          " " +
          ob.last_name;
        if (uuid === user.lectorUuid) {
          lectorConfSendClient(
            ob.price_per_hour,
            ob.contact.telephone_numbers[0],
            ob.contact.emails[0],
            namen,
            obj.theme,
            "mikulic.tablet.kluci@gmail.com",
            obj.message,
            obj.place
          );
        }
      }*/
    }

    return new Response(JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch {
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
};

/**
 * Deletes a user from the database based on the provided UUID.
 * @param {Object} params - An object containing the UUID of the user to delete.
 * @returns {Response} - A response with status 204 if the user is found and deleted, or a response with status 404 if the user is not found.
 */
export const DELETE = async ({ params }) => {
  reinitializeDB();
  let cluster = Database.getClusterByName("Reservations");

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
