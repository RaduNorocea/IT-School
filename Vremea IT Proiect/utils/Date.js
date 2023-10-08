function getDayOfTheWeek(utc) {
  const currentDateInMiliseconds = utc * 1000; //utc is in seconds
  const date = new Date(currentDateInMiliseconds);

  const currentDayIndex = date.getDay();

  let day;
  switch (currentDayIndex) {
    case 0:
      day = "Duminica";
      break;
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marti";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sambata";
      break;
    default:
      throw new Error("Indexul trebuie sa fie intre 1 si 6");
  }
  return day;
}

function getTime(utc) {
  const currentDateInMiliseconds = utc * 1000;
  const date = new Date(currentDateInMiliseconds);

  let hour = date.getHours();
  let minutes = date.getMinutes();

  return `${hour}:${minutes}`;
}
