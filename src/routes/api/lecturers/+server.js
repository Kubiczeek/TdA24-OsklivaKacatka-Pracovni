import Database from "db-quickly-js";
import {
  reinitializeDB,
  findTagsUuid,
  findTagsName,
  lecturerSchema,
} from "$lib/server/db/db.js";
import { v4 as uuidv4 } from "uuid";
import sanitizeHtml from "sanitize-html";

/**
 * Retrieves data from the "Lecturers" cluster and modifies it by replacing each tag with an object containing the tag name and UUID.
 * @returns {Response} - The modified data from the "Lecturers" cluster as a JSON response with a status code of 200.
 */
export const GET = async () => {
  try {
    // Initialize the database
    reinitializeDB();

    // Get the "Lecturers" cluster from the database
    const cluster = Database.getClusterByName("Lecturers");

    // Modify the data by replacing each tag with an object containing the tag name and UUID
    const modifiedData = cluster.data.map((obj) => {
      const modifiedTags = obj.tags.map((tag) => {
        return { name: findTagsName(tag), uuid: tag };
      });
      return { ...obj, tags: modifiedTags };
    });

    // Return the modified data as a JSON response with a status code of 200
    return new Response(JSON.stringify(modifiedData), { status: 200 });
  } catch (error) {
    console.error("An error occurred:", error);
    // Return a JSON response with a status code of 500 in case of an error
    return new Response({ status: 500 });
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

  try {
    // Parse the JSON payload from the request body
    const obj = await request.json();

    // Replace tags with corresponding UUIDs
    for (const tag of obj.tags) {
      tag.uuid = findTagsUuid(tag.name);
    }

    // Retrieve the "Lecturers" cluster from the database
    let saved = Database.getClusterByName("Lecturers");

    // Generate a UUID for the object
    obj.uuid = uuidv4();
    const tagsCopy = obj.tags;

    // Replace the tags array with an array of UUIDs
    obj.tags = obj.tags.map((tag) => tag.uuid);

    // Validate the object against the lecturerSchema
    const { error } = lecturerSchema.validate(obj);
    obj.bio = sanitizeHtml(obj.bio, {
      allowedTags: [
        "address",
        "article",
        "aside",
        "footer",
        "header",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "hgroup",
        "main",
        "nav",
        "section",
        "blockquote",
        "dd",
        "div",
        "dl",
        "dt",
        "figcaption",
        "figure",
        "hr",
        "li",
        "main",
        "ol",
        "p",
        "pre",
        "ul",
        "a",
        "abbr",
        "b",
        "bdi",
        "bdo",
        "br",
        "cite",
        "code",
        "data",
        "dfn",
        "em",
        "i",
        "kbd",
        "mark",
        "q",
        "rb",
        "rp",
        "rt",
        "rtc",
        "ruby",
        "s",
        "samp",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "time",
        "u",
        "var",
        "wbr",
        "caption",
        "col",
        "colgroup",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "tr",
      ],
    });
    if (error) {
      // Log the validation error details
      console.error("Validation error:", error.details);
      return new Response(
        JSON.stringify({ code: 400, message: "Bad Request" }),
        { status: 400 }
      );
    } else {
      // Push the object to the "Lecturers" cluster
      saved.data.push(obj);

      // Update the "Lecturers" cluster in the database
      Database.updateClusterByName(saved.clusterName, saved);

      obj.tags = tagsCopy;

      // Return the modified object as a JSON string with status code 200
      return new Response(JSON.stringify(obj), { status: 200 });
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error("An error occurred:", error);
    return new Response(
      JSON.stringify({ code: 500, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
