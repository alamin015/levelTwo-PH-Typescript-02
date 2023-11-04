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
