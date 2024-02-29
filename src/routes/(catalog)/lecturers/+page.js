export async function load({ fetch }) {
  const response = await fetch("/api/lecturers", {
    headers: {
      Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
    },
  });
  const response2 = await fetch("/api/tags", {
    headers: {
      Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
    },
  });
  const data = await response.json();
  const data2 = await response2.json();
  return {
    data,
    tags: data2,
  };
}
