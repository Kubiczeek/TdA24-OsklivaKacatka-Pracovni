export async function load({ cookies, fetch }) {
  const uuid = cookies.get("uuid");
  const response = await fetch(`/api/lecturers/${uuid}`, {
    headers: {
      Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
    },
  });
  const data = await response.json();
  return data;
}
