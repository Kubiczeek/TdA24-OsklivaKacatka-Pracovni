import Database from "db-quickly-js";
import { reinitializeDB } from "$lib/server/db/db.js";
import { v4 as uuidv4 } from "uuid";

export const POST = async ({ request, url }) => {
  reinitializeDB();
  const obj = await request.json();
  url.searchParams.get("uuid");

  let saved = Database.getClusterByName("Lecturers");
  obj.uuid = uuidv4();
  saved.data.push(obj);

  Database.updateClusterByName(saved.clusterName, saved);
  return new Response(JSON.stringify(obj), { status: 200 });
};

export const GET = async ({ request }) => {
  reinitializeDB();
  let res = Database.getClusterByName("Lecturers");
  return new Response(JSON.stringify(res.data), { status: 200 });
};
