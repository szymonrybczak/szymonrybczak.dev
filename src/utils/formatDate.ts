export default function formatDate(date: string) {
  let targetDate = new Date(date);

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return fullDate;
}
