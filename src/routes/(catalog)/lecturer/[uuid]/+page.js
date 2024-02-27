export async function load({ fetch, params }) {
  const response = await fetch(`/api/lecturers/${params.uuid}`);
  const data = await response.json();
  return data;
}
