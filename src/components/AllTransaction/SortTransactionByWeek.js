import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
export function getWeekRange(date) {
  const startOfTheWeek = startOfWeek(new Date(date)).toLocaleDateString(
    "en-US"
  );
  const endOfTheWeek = endOfWeek(new Date(date)).toLocaleDateString("en-US");

  return `${startOfTheWeek} - ${endOfTheWeek}`;
}
export function groupByWeek(arr) {
  const result = {};
  arr.forEach((item) => {
    const range = getWeekRange(item);

    if (result[range] === undefined) result[range] = [];
    result[range].push(item);
  });
  return Object.entries(result);
}
