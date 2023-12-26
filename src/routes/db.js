// src/hooks/setup.js
import Database from "db-quickly-js";
Database.initializeDatabase(
  "Great Database",
  "This database is used to store the greatest data",
  false
);
let dataLecturers;
dataLecturers = Database.createCluster("Lecturers", "list of lecturers");
Database.addCluster(dataLecturers);

export function databaseLecturers() {
  return dataLecturers;
}
export function databaseInst() {
  return Database;
}
