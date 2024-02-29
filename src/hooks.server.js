import {
  reinitializeDB,
  findTagsUuid,
  findTagsName,
  lecturerSchema,
} from "$lib/server/db/db.js";
import Database from "db-quickly-js";
import { redirect } from "@sveltejs/kit";
import { ADMIN_LOGIN } from "$env/static/private";

export const handle = async ({ event, resolve }) => {
  // Stage 1
  const { cookies } = event;
  const bisc = cookies.get("auth");
  console.log(bisc);
  event.locals.user = valCookie(bisc);

  const url = new URL(event.request.url);
  console.log("ewre in");
  if (url.pathname.startsWith("/api")) {
    const auth = "TdA:d8Ef6!dGG_pv";

    if (auth !== `Basic ${btoa(ADMIN_LOGIN)}`) {
      return new Response("Not authorized", {
        status: 401,
        headers: {
          "WWW-Authenticate":
            'Basic realm="User Visible Realm", charset="UTF-8"',
        },
      });
    }
  }

  if (event.url.pathname.startsWith("/app")) {
    if (bisc === undefined) {
      console.log("biscuit undefined");

      throw redirect(303, "/login");
    }
    if (!event.locals.user) {
      console.log("biscuit wrong");

      throw redirect(303, "/login");
    }
  } else if (event.url.pathname.startsWith("/login")) {
    if (bisc !== undefined && event.locals.user) {
      console.log("Login not needed - already loged in");

      throw redirect(303, "/app/reservation");
    }
    console.log("Login needed - not loged in");
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
