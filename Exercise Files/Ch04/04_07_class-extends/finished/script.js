
let attendance = {
  _list : [],
  set addName(name) {
    this._list.push(name);
  },
  get list() {
    return this._list.join(", ");
  }
};

attendance.addName = "Joanne Starr";
console.log(attendance.list);

attendance.addName = "Joanne Starr";
attendance.addName = "Benkelman";
attendance.addName = "Charlie Charlson";
console.log(attendance.list);




class Hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }
  get lengthInHours() {
    return `${this.calcLength()} hours`;
  }
  calcLength() {
    return this.distance / this.pace;
  }
}

const mtTallac = new Hike(10, 2);

console.log(mtTallac.lengthInHours);
 