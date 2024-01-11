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

  let yearDiff = currentDate.getFullYear() - targetDate.getFullYear();
  let monthDiff = currentDate.getMonth() - targetDate.getMonth();
  let dayDiff = currentDate.getDate() - targetDate.getDate();

  // Adjust for month and year differences
  if (dayDiff < 0) {
    monthDiff -= 1;
    dayDiff += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    ).getDate();
  }
  if (monthDiff < 0) {
    yearDiff -= 1;
    monthDiff += 12;
  }

  // Formatting the difference
  let formattedDifference;
  if (yearDiff > 0 && !(yearDiff === 1 && monthDiff < 12)) {
    formattedDifference =
      yearDiff + (yearDiff === 1 ? " year" : " years") + " ago";
  } else if (monthDiff > 0) {
    formattedDifference =
      monthDiff + (monthDiff === 1 ? " month" : " months") + " ago";
  } else if (dayDiff > 0) {
    formattedDifference = dayDiff + (dayDiff === 1 ? " day" : " days") + " ago";
  } else {
    formattedDifference = "today";
  }

  return fullDate + " (" + formattedDifference + ")";
}
