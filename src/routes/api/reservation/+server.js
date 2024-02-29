import Database from "db-quickly-js";
import { sendConfClient } from "$lib/server/nodemailer/nodemailer.js";
import {
  reinitializeDB,
  findTagsUuid,
  findTagsName,
  resSchema,
} from "$lib/server/db/db.js";
import { v4 as uuidv4 } from "uuid";
import sanitizeHtml from "sanitize-html";

export const GET = async () => {
  try {
    // Initialize the database
    reinitializeDB();

    // Get the "Lecturers" cluster from the database
    const cluster = Database.getClusterByName("Reservations");

    // Return the modified data as a JSON response with a status code of 200
    return new Response(JSON.stringify(cluster.data), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error("An error occurred:", error);
    // Return a JSON response with a status code of 500 in case of an error
    return new Response({
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
};

/**
 * Handles HTTP POST requests by modifying and validating a JSON object
 * before saving it to the "Lecturers" cluster in the database.
 * @param {Object} options - The options object.
 * @param {Request} options.request - The HTTP request object containing the JSON payload.
 * @returns {Response} - The response object with the modified JSON object and status code.
 */
export const POST = async ({ request }) => {
  // Initialize the database
  reinitializeDB();

  // Parse the JSON payload from the request body
  const obj = await request.json();

  // Retrieve the "Reservations" cluster from the database
  let saved = Database.getClusterByName("Reservations");
  // Generate a UUID for the object
  obj.uuid = uuidv4();
  obj.status = "verifyingClient";
  // Validate the object against the resSchema
  const { error } = resSchema.validate(obj);

  if (
    !obj.timeStart ||
    !obj.timeEnd ||
    !obj.clientEmail ||
    !obj.clientName ||
    !obj.clientSurname ||
    !obj.clientNote ||
    !obj.date ||
    !obj.theme ||
    !obj.clientAge ||
    !obj.lectorUuid ||
    obj.telNumber.length === 0
  ) {
    return new Response(
      JSON.stringify({
        code: 400,
        message: "Missing information, check you input",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 400,
      }
    );
  }
  const cluster = Database.getClusterByName("Lecturers");

  // Iterate through each object in the cluster data
  for (const ob of cluster.data) {
    const { uuid } = ob;

    ob.tags = ob.tags.map((tag) => {
      return { name: findTagsName(tag), uuid: tag };
    });
    const namen =
      ob.title_before +
      " " +
      ob.first_name +
      " " +
      ob.middle_name +
      " " +
      ob.last_name;
    if (uuid === obj.lectorUuid) {
      sendConfClient(
        ob.price_per_hour,
        ob.contact.telephone_numbers[0],
        ob.contact.emails[0],
        namen,
        obj.theme,
        obj.clientEmail,
        obj.timeStart,
        obj.date
      );
    }
  }

  // Push the object to the "Lecturers" cluster
  saved.data.push(obj);

  // Update the "Lecturers" cluster in the database
  Database.updateClusterByName(saved.clusterName, saved);

  // Return the modified object as a JSON string with status code 200
  return new Response(JSON.stringify(obj), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
};
