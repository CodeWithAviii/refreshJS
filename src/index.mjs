import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

let user1 = {
  name: "Arvind Kumar",
  age: 21,
};

console.log(user1.name);
console.log(user1.age);

const users = ["Arvind", "Dilip", "Yashwant"];
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

function reversed(str) {
  return str.split("").reverse().join("");
}

console.log(reversed("hello"));

function sumAll(startIndex, endIndex) {
  let sum = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    sum += i;
  }
  return sum;
}

let total = sumAll(1, 142);
console.log(total);
