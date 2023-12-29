import Database from "db-quickly-js";
import { reinitializeDB, findTagsUuid } from "$lib/server/db/db.js";
import { v4 as uuidv4 } from "uuid";
import Joi from "joi";

// Define schema for the Contact_info object
const contactInfoSchema = Joi.object({
  telephone_numbers: Joi.array().items(Joi.string()).unique().min(1).required(),
  emails: Joi.array().items(Joi.string().email()).unique().min(1).required(),
});

// Define schema for the Lecturer object
const lecturerSchema = Joi.object({
  uuid: Joi.string().uuid().required(),
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
  contact: contactInfoSchema.required(),
});

export const POST = async ({ request, url }) => {
  reinitializeDB();
  const obj = await request.json();
  url.searchParams.get("uuid");
  for (let i = 0; i < obj.tags.length; i++) {
    obj.tags[i] = findTagsUuid(obj.tags[i].name);
  }
  let saved = Database.getClusterByName("Lecturers");
  obj.uuid = uuidv4();
  const { error, value } = lecturerSchema.validate(obj);

  if (error) {
    console.error("Validation error:", error.details);
    return new Response({ status: 400 });
  } else {
    saved.data.push(obj);

    Database.updateClusterByName(saved.clusterName, saved);
    return new Response(JSON.stringify(obj), { status: 200 });
  }
};

export const GET = async ({ request }) => {
  reinitializeDB();
  let res = Database.getClusterByName("Lecturers");
  return new Response(JSON.stringify(res.data), { status: 200 });
};
export const DELETE = async ({ request }) => {
  reinitializeDB();
  let res = [];
  Database.updateClusterByName("Lecturers", res);
  return new Response(JSON.stringify(res), { status: 200 });
};
