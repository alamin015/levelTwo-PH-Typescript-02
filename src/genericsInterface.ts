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
