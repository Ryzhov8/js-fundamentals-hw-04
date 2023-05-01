function checkAge() {
  const name = prompt("Please input youre name");
  const age = Number(prompt("Please input youre age"));
  const status = prompt(
    "Please input youre status (адмін, модератор, користувач)"
  );
  try {
    if (!name) {
      throw new Error("The field is empty! Please enter your name");
    }
    if (!age) {
      throw new Error("The field is empty! Please enter your age");
    }
    if (!status) {
      throw new Error("The field is empty! Please enter your status");
    }
    if (age < 18 || age > 70 || isNaN(age)) {
      throw new RangeError("Age is incorrect!");
    }
    if (
      status !== "адмін" &&
      status !== "модератор" &&
      status !== "користувач"
    ) {
      throw new EvalError("Status is incorrect!");
    }
    alert("Access allowed");
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

checkAge();
