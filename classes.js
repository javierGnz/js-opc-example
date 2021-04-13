"use strict";
(function () {

  // Basicamente tanto la funcion y la clase son los mismo

  // function Person(firstName, lastName, age) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  //   this.isAdult = function() {
  //     return this.age >= 18
  //   }
  //   Object.defineProperty(this, "fullName", {
  //     get: function () {
  //       return this.firstName + " " + this.lastName;
  //     },
  //     set: function (fullName) {
  //       let nameParts = fullNamesplit(" ");
  //       this.firstName = nameParts[0];
  //       this.lastName = nameParts[1];
  //     },
  //     enumerable: true
  //   });
  // }

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
    set fullName(fullName) {
      let nameParts = fullName.split(" ");
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
    isAdult() {
      return this.age >= 18
    }
  }

  let jim = new Person("Jim", "Cooper", 29);
  // jim.fullName = 'Fred Jones'

  // display(jim.fullName);
  // display(jim.isAdult());

  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age)
      this._enrolledCourses = [];
    }

    static fromPerson(person) {
      return new Student(person.firstName, person.lastName, person.age)
    }

    enroll(courseId) {
      this._enrolledCourses.push(courseId);
    };

    getCourses() {
      return (
        this.fullName +
        " esta enrolado en los cursos " +
        this._enrolledCourses.join(", ")
      );
    };
  }

  // let jim = new Student('Jim', 'Cooper', 29)
  let jimStudent = Student.fromPerson(jim)

  // jim.enroll('CS201')
  // display(jim.getCourses())

  display(jimStudent)
})();
