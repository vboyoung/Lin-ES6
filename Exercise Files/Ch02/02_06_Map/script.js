let course = new Map();

course.set("react", { description: "ui" });
course.set("jest", { description: "testing" });

console.log(course);
// console.log(course.react);  //Map은 객체를 가져올때 get을 사용해서 가져와야한다.
console.log(course.get("react"));

let details = new Map([
  [new Date(), "today"],
  [2, { javascript: ["js", "node", "react"] }],
  ["items", [1, 2]]
]);

console.log(details.size);

details.forEach(function (item) {
  console.log(item);
});
