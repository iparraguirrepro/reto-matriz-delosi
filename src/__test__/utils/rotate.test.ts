import { rotate } from "@/lib/utils";

describe("rotate", () => {
  it("Aplica la rotación (90 grados)", () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    const output = [
      [2, 4],
      [1, 3],
    ];
    expect(rotate(input)).toEqual(output);
  });
});
