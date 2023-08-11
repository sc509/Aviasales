export default function addDurationToDate(startDate, duration) {
  const startDateObj = new Date(startDate);
  const durationInMinutes = duration;
  startDateObj.setMinutes(startDateObj.getMinutes() + durationInMinutes);

  const hours = startDateObj.getHours().toString().padStart(2, '0');
  const minutes = startDateObj.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}
