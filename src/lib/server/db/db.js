import Database from "db-quickly-js";
import { transformWithEsbuild } from "vite";
import { v4 as uuidv4 } from "uuid";

export function reinitializeDB() {
  Database.initializeDatabase(
    "Great Database",
    "This database is used to store the greatest data",
    false
  );
  if (!Database.getClusterByName("Lecturers")) {
    Database.addCluster(
      Database.createCluster("Lecturers", "List of lecturers")
    );
  }
  if (!Database.getClusterByName("Tags")) {
    Database.addCluster(Database.createCluster("Tags", "List of tags"));
  }
}
export function findTagsUuid(name) {
  let cl = Database.getClusterByName("Tags");
  let found = false;
  console.log(cl.data);

  for (let i = 0; i < cl.data.length; i++) {
    let body = cl.data[i];
    let cName = body.name;

    if (cName == name) {
      return body.uuid;
    }
  }
  let obj = {
    uuid: uuidv4(),
    name: name,
  };

  cl.data.push(obj);

  Database.updateClusterByName(cl.clusterName, cl);
  return obj.uuid;
}
export function findTagsName(uuid) {
  let cl = Database.getClusterByName("Tags");
  let found = false;
  console.log("uuid =" + uuid);

  for (let i = 0; i < cl.data.length; i++) {
    let body = cl.data[i];
    let cUuid = body.uuid;
    console.log(cUuid == uuid);
    console.log("uuid  ==" + uuid);
    console.log("cl uid==" + cUuid);
    console.log("wtf");
    if (cUuid == uuid) {
      return body.name;
    }
  }

  return false;
}
