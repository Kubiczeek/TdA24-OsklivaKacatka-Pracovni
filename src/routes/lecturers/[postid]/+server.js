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
      JSON.stringify({
        code: 404,
        message: "User not found",
      })
    );
  }
};
