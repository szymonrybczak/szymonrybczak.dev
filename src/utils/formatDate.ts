export default function formatDate(date: string, showDiff: boolean = true) {
  let targetDate = new Date(date);
  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!showDiff) {
    return fullDate;
  }

  let currentDate = new Date();
  let diffInMilliseconds = currentDate.getTime() - targetDate.getTime();
  let diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  // Formatting the difference
  let formattedDifference;
  if (diffInDays >= 365) {
    const years = Math.floor(diffInDays / 365);
    formattedDifference = years + (years === 1 ? " year" : " years") + " ago";
  } else if (diffInDays >= 30) {
    const months = Math.floor(diffInDays / 30);
    formattedDifference =
      months + (months === 1 ? " month" : " months") + " ago";
  } else if (diffInDays > 0) {
    formattedDifference =
      diffInDays + (diffInDays === 1 ? " day" : " days") + " ago";
  } else {
    formattedDifference = "today";
  }

  return fullDate + " (" + formattedDifference + ")";
}
