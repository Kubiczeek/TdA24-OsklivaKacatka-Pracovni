export const GET = async ({ request, url }) => {
  const authHeader = request.headers.get("Authorization");
  console.log(authHeader);
  if (!authHeader) {
    return new Response(JSON.stringify({ message: "INvalid credentials" }), {
      status: 401,
    });
  }

  const limit = Number(url.searchParams.get("limit") ?? "10");
  console.log(limit);

  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  return new Response(JSON.stringify(data), { status: 200 });
};

export const POST = async ({ request }) => {
  const body = await request.json();
  console.log(body);
  return new Response(JSON.stringify("thingy created"), { status: 200 });
};
