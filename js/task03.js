function calcRectangleArea(width, height) {
  try {
    if (isNaN(width) || isNaN(height)) {
      throw new Error("Invalid values!");
    }
    return width * height;
  } catch (error) {
    console.log(error.message);
  }
}

calcRectangleArea(4, 23);
