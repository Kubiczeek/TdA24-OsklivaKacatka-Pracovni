import {
  reinitializeDB,
  findTagsUuid,
  findTagsName,
  lecturerSchema,
} from "$lib/server/db/db.js";
import Database from "db-quickly-js";
import { redirect } from "@sveltejs/kit";

export const handle = async ({ event, resolve }) => {
  // Stage 1
  const { cookies } = event;
  const bisc = cookies.get("auth");
  event.locals.user = valCookie(bisc);
  if (event.url.pathname.startsWith("/app")) {
    if (!event.locals.user) {
      throw redirect(303, "/login");
    }
  }

  const response = await resolve(event); // Stage 2

  // Stage 3
  return response;
};

function valCookie(cookie) {
  reinitializeDB();
  const cluster = Database.getClusterByName("Lecturers");
  let listOfPossbls = [];
  for (const obj of cluster.data) {
    listOfPossbls.push(obj.password);
  }

  for (const h of listOfPossbls) {
    if (h === cookie) {
      return true;
    }
  }
  return false;
}
