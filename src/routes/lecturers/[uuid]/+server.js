import Database from "db-quickly-js";
import { reinitializeDB } from "$lib/server/db/db.js";

export const GET = async ({ params }) => {
  reinitializeDB();
  let cluster = Database.getClusterByName("Lecturers");
  for (let i = 0; i < cluster.data.length; i++) {
    let uuid = cluster.data[i].uuid;

    if (uuid == params.uuid) {
      return new Response(JSON.stringify(cluster.data[i]), { status: 200 });
    }
  }
  return new Response(
    JSON.stringify({ code: 404, message: "User not found" }),
    { status: 404 }
  );
};

export const PUT = async ({ params, request }) => {
  reinitializeDB();
  let obj = await request.json();
  obj.uuid = params.uuid;
  let cluster = Database.getClusterByName("Lecturers");
  for (let i = 0; i < cluster.data.length; i++) {
    let uuid = cluster.data[i].uuid;

    if (uuid == params.uuid) {
      cluster.data[i] = obj;
      Database.updateClusterByName(cluster.clusterName, cluster);
      return new Response(JSON.stringify(obj), { status: 200 });
    }
  }
  return new Response(
    JSON.stringify({ code: 404, message: "User not found" }),
    { status: 404 }
  );
};
export const DELETE = async ({ params }) => {
  reinitializeDB();
  let cluster = Database.getClusterByName("Lecturers");

  for (let i = 0; i < cluster.data.length; i++) {
    let uuid = cluster.data[i].uuid;

    if (uuid == params.uuid) {
      cluster.data.splice(i, 1);
      Database.updateClusterByName(cluster.clusterName, cluster);
      return new Response(null, { status: 204 });
    }
  }
  Database.updateClusterByName(cluster.clusterName, cluster);

  return new Response(
    JSON.stringify({ code: 404, message: "User not found" }),
    { status: 404 }
  );
};
