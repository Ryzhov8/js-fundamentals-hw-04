function sumSliceArray(arr, first, second) {
  try {
    for (const el of arr) {
      if (isNaN(el)) {
        throw new RangeError("Array is incorrect!");
      }
    }

    if (
      first > arr.length ||
      second > arr.length ||
      isNaN(first) ||
      isNaN(second)
    ) {
      throw new RangeError("One of the numbers is incorrect!");
    }
    const res = arr[first - 1] + arr[second - 1];
    return res;
  } catch (error) {
    console.log(error.message);
  }
}

sumSliceArray([1, 5, 32, 23, 63, 1], 1, 5);
