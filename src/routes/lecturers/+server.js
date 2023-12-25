import Database from "db-quickly-js";
import uuidv4 from "uuid";

export const POST = async ({ request }) => {
  let body = await request.json();
  console.log(body);
  //body.uuid = uuidv4();
  let saved = Database.getClusterByName("Lecturers");
  saved.data.push(body);

  Database.updateClusterByName(saved.clusterName, saved);

  return new Response(JSON.stringify("thingy created"), { status: 200 });
};
/*
var obj = {};
var save = dataLecturers;
console.log(save);
obj = req.body;
save.data.push(obj);
obj.uuid = uuidv4();
console.log(obj);

Database.updateClusterByName("Lecturers", save);

res.send("Complete");
*/
