import ical, { ICalCalendarMethod } from "ical-generator";
import { getVtimezoneComponent } from "@touch4it/ical-timezones";

export function getical(uuid, data) {
  const calendar = ical({ name: "Clients" });
  calendar.method(ICalCalendarMethod.REQUEST);

  // Filter events based on the provided uuid
  const filteredEvents = data.filter((event) => event.lectorUuid === uuid);
  // console.log(data);
  // Create events in the calendar only for matching uuid and lectorUuid
  filteredEvents.forEach((event) => {
    calendar.createEvent({
      start: event.startTime,
      end: event.endTime,
      summary: event.theme,
      description: event.clientNote,
      location: event?.place,
    });
  });
  return calendar.toString();
}
