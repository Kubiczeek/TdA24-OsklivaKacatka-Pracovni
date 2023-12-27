import { databaseLecturers, databaseInst } from "/src/routes/db.js";

export const GET = async ({ params }) => {
  var save = databaseLecturers();
  let Database = databaseInst();

  let cluster = Database.getClusterByName("Lecturers");
  let resbody = {};
  var i = 0,
    len = cluster.data.length;
  let found = false;
  while (i < len) {
    let lmao = cluster.data[i].uuid;

    if (lmao == params.postid) {
      resbody = cluster.data[i];
      found = true;
      break;
    }
    ++i;
  }
  if (found) {
    return new Response(JSON.stringify(resbody));
  } else {
    return new Response(
      JSON.stringify(
        {
          code: 404,
          message: "User not found",
        },
        { status: 404 }
      )
    );
  }
};
export const PUT = async ({ params, request }) => {
  var save = databaseLecturers();
  let Database = databaseInst();
  let obj = {};
  let body = await request.json();
  obj = body;
  obj.uuid = params.postid;

  let cluster = Database.getClusterByName("Lecturers");
  let resbody = {};
  var i = 0,
    len = cluster.data.length;
  let found = false;
  while (i < len) {
    let lmao = cluster.data[i].uuid;

    if (lmao == params.postid) {
      resbody = cluster.data[i];
      cluster.data.splice(i, 1);
      cluster.data.push(obj);
      found = true;
      break;
    }
    ++i;
  }
  Database.updateClusterByName(cluster.clusterName, cluster);

  if (found) {
    return new Response(JSON.stringify(obj));
  } else {
    return new Response(
      JSON.stringify(
        {
          code: 404,
          message: "User not found",
        },
        { status: 404 }
      )
    );
  }
};
export const DELETE = async ({ params }) => {
  var save = databaseLecturers();
  let Database = databaseInst();
  let obj = {};

  let cluster = Database.getClusterByName("Lecturers");
  var i = 0,
    len = cluster.data.length;
  let found = false;
  while (i < len) {
    let lmao = cluster.data[i].uuid;

    if (lmao == params.postid) {
      cluster.data.splice(i, 1);
      found = true;
      break;
    }
    ++i;
  }
  Database.updateClusterByName(cluster.clusterName, cluster);

  if (found) {
    return new Response(JSON.stringify({ status: 204 }));
  } else {
    return new Response(
      JSON.stringify(
        {
          code: 404,
          message: "User not found",
        },
        { status: 404 }
      )
    );
  }
};
