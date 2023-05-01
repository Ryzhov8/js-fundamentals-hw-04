function showUser(id) {
  try {
    if (id < 0) {
      throw new Error("ID must not be negative");
    }
    if (typeof id !== "number") {
      throw new Error("ID must be number");
    }
    return { id: id };
  } catch (error) {
    console.log(`Error: ${error.message} (${id})`);
  }
}

function showUsers(ids) {
  const res = [];
  for (const id of ids) {
    if (showUser(id)) {
      res.push(showUser(id));
    }
  }
  return res;
}

console.log(showUsers([7, true, -12, 44, "asd", 22]));
