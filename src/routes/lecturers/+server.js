import { databaseLecturers, databaseInst } from "../db.js";
import { v4 as uuidv4 } from "uuid";

export const POST = async ({ request, url }) => {
  var save = databaseLecturers();
  let Database = databaseInst();
  let body = await request.json();

  url.searchParams.get("uuid");

  let saved = Database.getClusterByName("Lecturers");
  let obj = {};
  obj = body;
  obj.uuid = uuidv4();

  Database.updateClusterByName(saved.clusterName, saved);
  console.log("yo mama so fat");
  console.log(Database.getClusterByName("Lecturers"));
  return new Response(JSON.stringify(obj), { status: 200 });
};

export const GET = async ({ request }) => {
  let Database = databaseInst();

  let res = Database.getClusterByName("Lecturers");
  console.log(res);
  return new Response(JSON.stringify(res.data), { status: 200 });
};
