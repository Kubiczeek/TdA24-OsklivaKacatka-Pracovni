import { getical } from "$lib/server/export/export.js";
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
import { json } from "@sveltejs/kit";

export const GET = async ({ params, events }) => {
  reinitializeDB();

  // Get the cluster named "Lecturers" from the database
  const cluster = Database.getClusterByName("Reservations");

  const jsonData = cluster.data;
  console.log(jsonData);
  const { uuid } = params;

  const ikar = await getical(uuid, jsonData);
  console.log(ikar);
  return new Response(JSON.stringify({ ikar }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 404,
  });
};
