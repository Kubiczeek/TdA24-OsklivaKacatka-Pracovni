export async function load({ cookies, fetch }) {
  const uuid = cookies.get("uuid");
  const response = await fetch(`/api/lecturers/${uuid}`, {
    headers: {
      Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
    },
  });
  const response2 = await fetch(`/api/reservation`, {
    headers: {
      Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
    },
  });
  const data = await response.json();
  const data2 = await response2.json();
  return { data, reservation: data2 };
}
