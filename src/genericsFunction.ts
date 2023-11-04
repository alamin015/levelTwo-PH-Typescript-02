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
