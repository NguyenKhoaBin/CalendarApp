import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const fDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currMonthCount = 0 - fDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currMonthCount++;
      return dayjs(new Date(year, month, currMonthCount));
    });
  });
  return daysMatrix;
}
