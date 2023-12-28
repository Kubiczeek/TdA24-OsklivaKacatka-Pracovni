import Database from "db-quickly-js";

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
