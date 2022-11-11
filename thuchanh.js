//TASK 1
const reverse = (string) => string.split("").reverse().join("");

console.log(`TASK1
${reverse("abcdef")}
`);

//TASK 2
const duplicate = (arr) =>
  arr.filter((element, index) => arr.indexOf(element) === index);
console.log(`TASK2
${duplicate([1, 2, 3, 5, 4, 2, 6, 4])}
`);

//TASK 3
const coutMaxAppear = (arr) => {
  arr.sort();
  let maxCount = 1,
    arr1 = arr[0],
    count = 1;
  for (let i = 1; i < arr.length; i++) {
    arr[i] === arr[i - 1] ? count++ : (count = 1);

    if (count > maxCount) {
      maxCount = count;

      arr1 = arr[i];
    }
  }
  return `value:${arr1}, count: ${maxCount}`;
};

console.log(`TASK3
${coutMaxAppear([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3])}
`);

//TASK 1 ZALO
console.log(`TASK4`);
const sol1 = (arr) => {
  arr.sort();
  let count = 1,
    res = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
      if (i === arr.length - 1) {
        console.log(`value:${arr[i]}, count: ${count}`);
      }
    } else {
      res = arr[i - 1];
      console.log(`value:${res}, count: ${count}`);
      count = 1;
      if (i === arr.length - 1) {
        console.log(`value:${arr[i]}, count: ${count}`);
      }
    }
  }
};
sol1([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]);
console.log(``);

//TASK 2 ZALO
const findMax = (n) => {
  let maximum = 0;
  while (n) {
    if (maximum < n % 10) {
      maximum = n % 10;
    }
    n = Math.floor(n / 10);
  }
  return maximum;
};
console.log(`TASK5
${findMax("536")}`);
