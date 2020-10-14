// =>

//함수
let studentList = function (students) {
  console.log(students);
};

//arrow 함수
let studentList = (students) =>
  console.log(students);


studentList(["A", "B", "C"]);



// callback 함수
let list = ["apple", "banana", "strawberry"];
list.map((item) => console.log(item));
