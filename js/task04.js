class MonthException {
  constructor(message) {
    this.message = message;
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  try {
    if (month < 1 || month > 12 || isNaN(month)) {
      throw new MonthException("Input value is incorrect!");
      return;
    }

    return monthNames[month - 1];
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

console.log(showMonthName(3));
