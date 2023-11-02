import { setDateAtMidnight } from "./day";

export const getFirstDayOfWeek = () => {
  const nowDate = new Date();
  const dayOfWeek = nowDate.getDay();
  const firstOfWeek = new Date();
  firstOfWeek.setDate(nowDate.getDate() - dayOfWeek + 1);
  return setDateAtMidnight(firstOfWeek);
};
