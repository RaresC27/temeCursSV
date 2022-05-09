console.log("Problema 1");
const problemaUnu = (n) => {
  if (n % 2 === 0) {
    // daca restul impartirii lui n la 2 este = 0 => n este par
    return n - 2;
  } else {
    // daca nu => n este impar
    return n * 2;
  }
};
console.log(problemaUnu(3)); // printeaza 6 deoarece este un nummar impar (3*2=6)
console.log(problemaUnu(4)); // printeaza 2 deoarece este un numar par (4-2=2)
console.log(
  "-----------------------------------------------------------------------------"
);

console.log("Problema 2");
let num = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]; // initializam arrayul pe care vrem sa il parcurgem
let saveStrings = []; // initializam lista vida pentru rezultat
function problemaDoi(num) {
  if (num < 2) return false; // daca numerele sunt mai mici decat 2 return false

  for (let k = 2; k < num; k++) {
    // parcurgem arrayul
    if (num % k == 0) {
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = problemaDoi(element);
  if (item) {
    saveStrings.push(element);
  }
});
console.log(saveStrings);
console.log(
  "-----------------------------------------------------------------------------"
);

console.log("Problema 3");
let arr = ["1", 2, "rares", true, 4, 5, false, "javascript"]; // initializam arrayul din care vom extrage
let onlyString = []; // initializare array gol pentru a stoca doar stringurile

arr.forEach(problemaTrei);

function problemaTrei(item) {
  if (typeof item === "string") {
    // comparam fiecare element din lista 'arr' cu tipul de data string
    onlyString.push(item); // daca este string il adaugam la lista onlyString
  }
}
console.log(onlyString);
console.log(
  "-----------------------------------------------------------------------------"
);
console.log("Problema 4");
function problemaPatru(digits) {
  let sumDigits = 0; // initializam cu 0 suma cifrelor
  for (let index = 0; index < digits.length; index++) {
    // parcurgem sirul
    if (isNaN(digits[index])) {
      // daca sirul este un numar - >
      continue; // continuam
    }
    sumDigits += Number(digits[index]) % 2 != 0 ? Number(digits[index]) : 0; // cautam doar cifrele impare
  }
  console.log("Suma cifrelor impare din string este:", sumDigits); // afisam suma lor
}
problemaPatru("123rar95es"); // stringul din care va extrage cifrele impare si le va aduna
console.log(
  "-----------------------------------------------------------------------------"
);

console.log("Problema 5");
const day = "friday";
console.log("Today is", day, "and we are going to learn");
switch (day) {
  case "monday":
    console.log("JavaScript Variables");
    break;
  case "tuesday":
    console.log("JavaScirpt Operators");
    break;
  case "wednesday":
    console.log("JavaScript Data Types");
    break;
  case "thursday":
    console.log("JavaScript Statemenets");
  case "friday":
  case "saturday":
    console.log("JavaScript Function");
    break;
  case "sunday":
    console.log("Rest day");
    break;
  default:
    console.log("Invalid day!");
}
console.log(
  "-----------------------------------------------------------------------------"
);
