## Typescript Module-2

### Instructor: Mezba Vai

> [!important]
> Assertion & Type narrowing

```ts
{
  // assertion
  let userName: any;
  userName = "halima";

  (userName as string).includes("a");

  const myFunc = (num: number | string) => {
    if (typeof num === "number") {
      return num;
    }
  };

  let hh = myFunc(9) as number;

  type customError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as customError).message);
  }

  //

  //
}
```

> [!important]
> type vs interface

```ts
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
```

> [!important]
> generics

```ts
{
  // generics
  type genericsArray<T> = Array<T>;
  const users: genericsArray<string> = ["jajshhsg", "rubel"];
  const student: genericsArray<number> = [3, 4];
  const bool: genericsArray<boolean> = [true, false];

  //   object using generics

  interface tryObj {
    name: string;
    age: number;
  }

  const myObj: genericsArray<tryObj> = [
    {
      name: "alamin",
      age: 22,
      //   role:88 error
    },
    {
      name: "tamim",
      age: 99,
    },
  ];
  console.log(myObj);

  //

  //
}
```

> [!important]
> generics with interface

```ts
{
  interface IDeveloper<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      price: number;
    };
    smartWatch: T;
    bike?: X;
  }

  const poorDeveloper: IDeveloper<
    { brand: string; price: number },
    { price: number }
  > = {
    name: "hasin hyder",
    computer: {
      brand: "HP",
      model: "2023 new model",
      price: 70000,
    },
    smartWatch: {
      brand: "Apple",
      price: 3000,
    },
    bike: {
      price: 8999,
    },
  };

  console.log(poorDeveloper);

  /**
   *
   *
   *
   *
   */
}
```

> [!important]
> generics with function

```ts
{
  // function wths generics
  type addFunc = <T>(num: T) => T[];

  const myFunc: addFunc = (a) => {
    return [a];
  };
  console.log(myFunc(3));

  const helloFunction = <T>(id: T): [T] => {
    return [id];
  };

  helloFunction<{ name: string; roll: number }>({ name: "alamin", roll: 45 });
}
```

> [!important]
> constraints

```ts
{
  const student = <T extends { id: number; name: string }>(info: T) => {
    const institute = "Programming Hero";
    return {
      ...info,
      institute,
    };
  };

  const student1 = student<{ id: number; name: string }>({
    id: 12,
    name: "alamin",
  });
}
```
