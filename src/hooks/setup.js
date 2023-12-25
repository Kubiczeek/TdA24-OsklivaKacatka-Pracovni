// src/hooks/setup.js
import Database from "db-quickly-js";

let dataLecturers;
export function context() {
  Database.initializeDatabase(
    "Great Database",
    "This database is used to store the greatest data",
    false
  );

  dataLecturers = Database.createCluster("Lecturers", "list of lecturers");
  Database.addCluster(dataLecturers);
  console.log("lm,ao");
}
