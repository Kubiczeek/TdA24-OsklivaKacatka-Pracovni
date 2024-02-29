export async function load({ cookies, fetch }) {
  const uuid = cookies.get("uuid");
  const response = await fetch(`/api/lecturers/${uuid}`);
  const response2 = await fetch(`/api/reservation`);
  const data = await response.json();
  const data2 = await response2.json();
  return { data, reservation: data2 };
}
