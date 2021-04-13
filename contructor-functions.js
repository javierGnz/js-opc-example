"use strict";
(function () {
  // let person = {
  //   fistName: 'Javier',
  //   lastName: 'Gonzalez',
  //   age: 27
  // }

  // let person1 = {
  //   fistName: 'Javier',
  //   lastName: 'Gonzalez',
  //   age: 27,
  //   // Este es un shorthand de una funcion dentro del objeto, no se puede llamar desde afuera
  //   isAdult() {
  //     return this.age >= 18
  //   }
  // }

  // // Una manera de crear una funcion
  // // person.isAdult = function() {
  // //   return this.age >= 18
  // // }

  // // Asi se llama a la funcion
  // display(person1.isAdult())

  // // Para mostrar las propiedades de un objeto se puede utilizar lo siguiente:
  // display(Object.keys(person1))

  // for (let propertyName in person1) {
  //   display(propertyName)
  // }

  // // Un shorthand, evita ser redundante como name: name
  // function registerUser(firstName, lastName) {
  //   let person = {
  //     firstName,
  //     lastName
  //   }
  //   display(person)
  // }

  // registerUser('Javier', 'Gonzalez')

  // // Equals types in js
  // // El == deberia evitarse, no es exacto
  // // El === y Object.is() son basicamente iguales escepto comparando Nan y -0
  // let obj1 = 'Name'
  // let obj2 = 'Data'
  // Object.is(obj1, obj2)

  // let person2 = {}
  // Object.assign(person2, person1)
  // display(person2)

  // let stats = {
  //   height: 68,
  //   weight: 80
  // }

  // // Para evitar sobrescribir al primer objeto de se puede agregar un objeto vacio, ya que el primer parametro se modificara
  // function assingPerson(person, stats) {
  //   return Object.assign({}, person, stats)
  // }

  // let mutedPerson = assingPerson(person1, stats)

  // display(mutedPerson)
  // display(person1)

  // // Constructor functions
  // // function Person(firstName, lastName, age) {
  // //   this.firstName = firstName,
  // //   this.lastName = lastName,
  // //   this.age = age
  // // }

  // // let javier = new Person('javier', 'gonzalez', 27)
  // // let valeria = new Person('valeria', 'gonzalez', 24)

  // // display(javier)
  // // display(valeria)

  // let propertyLastName = 'lastName'

  // display(person1[propertyLastName])

  // for (let personProperty in person) {
  //   display(personProperty + ': ' + person[personProperty])
  // }

  // // Creacion de propiedades en objetos, son get y set en ellas
  // let human = {
  //   name: {
  //     first: 'Javier',
  //     last: 'Gonzalez'
  //   },
  //   age: 27
  // }

  // Object.defineProperty(human, 'fullName', {
  //   get: function() {
  //     return this.name.first + ' ' + this.name.last
  //   },
  //   set: function(value){
  //     let nameParts = value.split(' ')
  //     this.name.first = nameParts[0]
  //     this.name.last = nameParts[1]
  //   }
  // })

  // human.fullName = 'Gonzalo Rojas'

  // display(human.fullName)

  // display(Person.prototype)

  //Prototype Creation
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, "fullName", {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      enumerable: true,
    });
  }

  function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this._enrolledCourses = [];

    this.enroll = function (courseId) {
      this._enrolledCourses.push(courseId);
    };

    this.getCourses = function () {
      return (
        this.fullName +
        " esta enrolado en los cursos " +
        this._enrolledCourses.join(", ")
      );
    };
  }

  // Crea un Student con herencia de Person, asi no se sobreescribe y por ende no se gasta mas memoria
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  Student.fromPerson = function(person) {
    return new Student(person.firstName, person.lastName, person.age)
  }

  let jim = new Student("Jim", "Cooper", 29);

  jim.enroll("CS205");
  jim.enroll("MA101");
  jim.enroll("PS101");

  display(jim);
  display(jim.getCourses());
  display(jim.__proto__);
  display(jim.__proto__.__proto__);
})();
