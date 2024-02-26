import Database from "db-quickly-js";
import { v4 as uuidv4 } from "uuid";
import Joi from "joi";

// Define schema for the Contact_info object
export const contactInfoSchema = Joi.object({
  telephone_numbers: Joi.array().items(Joi.string()).unique().min(1).required(),
  emails: Joi.array().items(Joi.string().email()).unique().min(1).required(),
});

// Define schema for the Lecturer object
export const lecturerSchema = Joi.object({
  uuid: Joi.string().uuid().default(uuidv4()).required(),
  title_before: Joi.string(),
  first_name: Joi.string().required(),
  middle_name: Joi.string(),
  last_name: Joi.string().required(),
  title_after: Joi.string(),
  picture_url: Joi.string().uri(),
  location: Joi.string(),
  claim: Joi.string(),
  bio: Joi.string(),
  tags: Joi.array().items(Joi.string().uuid()).unique(),
  price_per_hour: Joi.number().integer().min(0),
  calendar: Joi.array().items(calendarEntrySchema),

  contact: contactInfoSchema.required(),
});
const calendarEntrySchema = Joi.object({
  day: Joi.string().valid("Po", "Út", "St", "Čt", "Pá", "So", "Ne"),
  from: Joi.string().regex(/^\d{2}:\d{2}$/),
  to: Joi.string().regex(/^\d{2}:\d{2}$/),
  break: Joi.string().regex(/^\d+$/),
  length: Joi.string().regex(/^\d+$/),
});
export const resSchema = Joi.object({
  timeStart: Joi.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),
  timeEnd: Joi.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),
  clientEmail: Joi.string().email().required(),
  clientName: Joi.string().required(),
  clientSurname: Joi.string().required(),
  clientNote: Joi.string(),
  telNumber: Joi.string().pattern(/^\d{9}$/),
  date: Joi.string()
    .regex(/^\d{2}.\d{2}.\d{4}$/)
    .required(),
  theme: Joi.string().required(),
  clientAge: Joi.number().integer().min(0),
  uuid: Joi.string().uuid().default(uuidv4()).required(),
  lectorUuid: Joi.string().uuid().required(),
  lectorPlace: Joi.string(),
  lectorMessage: Joi.string(),
});
/**
 * Reinitializes the database by initializing it with a name and description,
 * and creating two specific clusters if they don't exist.
 */
export function reinitializeDB() {
  const databaseName = "Great Database";
  const databaseDescription =
    "This database is used to store the greatest data";

  // Initialize the database
  Database.initializeDatabase(databaseName, databaseDescription, false);

  // Check if the "Lecturers" cluster exists, create it if it doesn't
  const lecturersClusterName = "Lecturers";
  const lecturersClusterDescription = "List of lecturers";
  if (!Database.getClusterByName(lecturersClusterName)) {
    const lecturersCluster = Database.createCluster(
      lecturersClusterName,
      lecturersClusterDescription
    );
    Database.addCluster(lecturersCluster);
  }

  // Check if the "Tags" cluster exists, create it if it doesn't
  const tagsClusterName = "Tags";
  const tagsClusterDescription = "List of tags";
  if (!Database.getClusterByName(tagsClusterName)) {
    const tagsCluster = Database.createCluster(
      tagsClusterName,
      tagsClusterDescription
    );
    Database.addCluster(tagsCluster);
  }
}

/**
 * Searches for a tag by its name in a database cluster. If the tag is found, returns its UUID. If the tag is not found, generates a new UUID, creates a new tag object with the given name and generated UUID, adds it to the cluster's data array, updates the cluster in the database, and finally returns the generated UUID.
 * @param {string} name - The name of the tag to search for or create.
 * @returns {string} - The UUID of the tag found or created.
 */
export function findTagsUuid(name) {
  const cluster = Database.getClusterByName("Tags");

  for (const data of cluster.data) {
    if (data.name === name) {
      return data.uuid;
    }
  }

  const newTag = {
    uuid: uuidv4(),
    name: name,
  };

  cluster.data.push(newTag);
  Database.updateClusterByName(cluster.clusterName, cluster);
  return newTag.uuid;
}

/**
 * Retrieves the name corresponding to a given UUID from the "Tags" database cluster.
 * @param {string} uuid - The UUID to search for in the database.
 * @returns {string|boolean} - The name corresponding to the input UUID if a match is found. Otherwise, false.
 */
export function findTagsName(uuid) {
  const cluster = Database.getClusterByName("Tags");

  for (const dataItem of cluster.data) {
    if (dataItem.uuid === uuid) {
      return dataItem.name;
    }
  }

  return false;
}

/**
 * Removes all tags from the "Tags" database cluster that are not used by any lecturer.
 */
export function removeUnusedTags() {
  const cluster = Database.getClusterByName("Tags");

  for (const dataItem of cluster.data) {
    let found = false;

    for (const lecturer of Database.getClusterByName("Lecturers").data) {
      if (lecturer.tags.includes(dataItem.uuid)) {
        found = true;
        break;
      }
    }

    if (!found) {
      const index = cluster.data.indexOf(dataItem);
      cluster.data.splice(index, 1);
    }
  }
  Database.updateClusterByName(cluster.clusterName, cluster);
}
