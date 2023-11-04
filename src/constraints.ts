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
