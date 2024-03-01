import Database from "db-quickly-js";

export const GET = async ({ params }) => {
  const cluster = Database.getClusterByName("Reservations");
  const filteredEvents = cluster.data.filter((even) => {
    return even.lectorUuid === params.uuid;
  });

  const r = [];

  filteredEvents.forEach((event) => {
    const date = event.date.split(".").reverse();
    const time = event.timeStart.split(":");
    const status = ["TENTATIVE", "CANCELLED", "CONFIRMED"][
      ["denied", "accepted", "verifyingClient"].indexOf(event.status)
    ];
    r.push({
      start: [
        parseInt(date[0]),
        parseInt(date[1]),
        parseInt(date[2]),
        parseInt(time[0]),
        parseInt(time[1]),
      ],
      duration: {
        //TODO: fix duration
        hours: parseInt(time[0]),
        minutes: parseInt(time[1]),
      },
      title: event.clientName + " " + event.clientSurname + " - " + event.theme,
      description: event.clientNote,
      location: event.place,
      status: status,
    });
  });

  return new Response(JSON.stringify(r), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
};
