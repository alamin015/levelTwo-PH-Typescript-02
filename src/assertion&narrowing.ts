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
