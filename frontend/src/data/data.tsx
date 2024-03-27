interface Time {
  value: string;
  label: string;
}

interface Event {
  endDate: string;
  endTime: Time;
  startDate: string;
  startTime: Time;
  location: string;
  label: string;
  eventName: string;
}

const eventsArray: Event[] = [];

export const addEvent = (event: Event) => {
  eventsArray.push(event);
};
