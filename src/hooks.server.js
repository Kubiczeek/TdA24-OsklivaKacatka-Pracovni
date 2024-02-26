import { ADMIN_LOGIN } from "$env/static/private";

export const handle = async ({ event, resolve }) => {
  const url = new URL(event.request.url);
  console.log("ewre in");
  if (url.pathname.startsWith("/api")) {
    const auth = event.request.headers.get("Authorization");

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
  const response = await resolve(event);

  return response;
};
