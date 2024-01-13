export async function load({ fetch }) {
  const response = await fetch(`/api/lecturers`);
  const response2 = await fetch(`/api/tags`);
  const data = await response.json();
  const data2 = await response2.json();
  return {
    data,
    tags: 
    data2,
  };
}
