export async function load({ fetch, params }) {
  const response = await fetch(`/api/lecturers/${params.uuid}`, {
    headers: {
      Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
    },
  });
  const data = await response.json();
  return data;
}
