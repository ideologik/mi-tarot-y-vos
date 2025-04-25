export const reduceToArcano = (num: number): number => {
  while (num > 22) {
    num = num
      .toString()
      .split("")
      .reduce((acc, d) => acc + parseInt(d), 0);
  }
  return num;
};

export const calculateTarotNumbers = (
  birthDate: Date
): {
  regente: number;
  desafio: number;
  ciclo: number;
} => {
  const digits = birthDate
    .toISOString()
    .split("T")[0]
    .replace(/-/g, "")
    .split("")
    .map(Number);

  const regente = reduceToArcano(digits.reduce((a, b) => a + b, 0));

  const today = new Date();
  let edad = today.getFullYear() - birthDate.getFullYear();
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    edad--; // esto está bien
  }

  const ciclo = reduceToArcano(
    edad
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0)
  );

  const desafio = reduceToArcano(regente <= 12 ? regente + 10 : regente - 10);

  return { regente, desafio, ciclo };
};
