{
  /**
   * in array,function or normal variable we use type and only in object we use interface
   */

  // using type
  type userName = string;
  let name: userName = "hasim";

  // array
  type users = string[];
  let usersName: users = ["sahin", "kharul", "etc"];
  // function

  type addFunc = (numb1: number, num2: number) => number;
  const myFunc: addFunc = (a, d) => {
    return 0;
  };

  //   object
  type tetObj = {
    name: string;
    age: number;
    phone?: string;
  };
  let myObj: tetObj = {
    name: "alamin",
    age: 78,
  };

  //   type intersection

  //   array
  interface testArr {
    [index: number]: number;
  }

  let myArr: testArr = [7, 8, 8];

  //   function

  interface testFunc {
    (a: number, b: number): number;
  }

  let hello: testFunc = (a, b) => {
    return a;
  };
  console.log(hello(9, 8));

  // object
  type obj1 = {
    name: string;
  };

  type obj2 = {
    age: number;
  };

  type realObj = obj1 & obj2;
  let fobj: realObj = { age: 76, name: "hhhsh" };

  //   Interface
  interface student {
    name: string;
    age: number;
    phone?: string;
  }

  let student1: student = {
    name: "alamin",
    age: 22,
    phone: "018283y28",
  };

  //   interface extends
  interface allStudents extends student {
    isMarried: boolean;
  }

  let student2: allStudents = {
    name: "jj",
    age: 43,
    isMarried: true,
    phone: "888",
  };
  console.log(student2);
}
