import Database from "db-quickly-js";
import { reinitializeDB, findTagsUuid } from "$lib/server/db/db.js";
import Joi from "joi";

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

export const PUT = async ({ params, request }) => {
  reinitializeDB();
  let obj = await request.json();
  let temporaryContainerForDataInObjTags = obj.tags;
  obj.tags = [];
  console.log(temporaryContainerForDataInObjTags.length);
  console.log(temporaryContainerForDataInObjTags);
  console.log(temporaryContainerForDataInObjTags.length);

  for (let i = 0; i < temporaryContainerForDataInObjTags.length; i++) {
    console.log("i      " + i);
    obj.tags.push(findTagsUuid(temporaryContainerForDataInObjTags[i].name));
  }
  console.log("obj.tags");
  console.log(obj.tags);
  obj.uuid = params.uuid;
  const { error, value } = lecturerSchema.validate(obj);

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
