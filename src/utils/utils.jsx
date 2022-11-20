export default function convertime(datetoconvert) {
  const currentDate = new Date(datetoconvert);
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  let dateString;
  if (currentMonth < 10 && currentDayOfMonth < 10) {
    dateString = `0${currentMonth}/0${currentDayOfMonth}/${currentYear}`;
  } else if (currentDayOfMonth < 10) {
    dateString = `${currentMonth}/0${currentDayOfMonth}/${currentYear}`;
  } else if (currentMonth < 10) {
    dateString = `0${currentMonth}/${currentDayOfMonth}/${currentYear}`;
  } else {
    dateString = `${currentMonth}/${currentDayOfMonth}/${currentYear}`;
  }
  return dateString;
}
