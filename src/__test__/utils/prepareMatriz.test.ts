import { prepareMatriz } from "@/lib/utils";

describe("prepareMatriz", () => {
  it("Completa los items faltantes con un '*'", () => {
    const input = [
      [1, 2],
      [3, 4, 5, 6, 7, 8, 9],
    ];
    const output = [
      [1, 2, "*", "*", "*", "*", "*"],
      [3, 4, 5, 6, 7, 8, 9],
    ];
    expect(prepareMatriz(input)).toEqual(output);
  });
});
