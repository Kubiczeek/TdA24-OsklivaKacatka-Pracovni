export async function load({ cookies, fetch }) {
  const uuid = cookies.get("uuid");
  const response = await fetch(`/api/lecturers/${uuid}`);
  const data = await response.json();
  return data;
}
