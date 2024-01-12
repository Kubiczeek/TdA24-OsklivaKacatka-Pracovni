export async function load({ fetch }) {
  const response = await fetch(`/api/lecturers`);
  const data = await response.json();
  return { data };
}
