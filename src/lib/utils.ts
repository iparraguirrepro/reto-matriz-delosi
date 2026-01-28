import { Matriz, MatrizItem } from "@/types/Matriz";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Recorre la matriz para evaluar si todos son de la misma longitud
// Si - no tienen la misma longitud
// Entonces - completa los faltantes con un "*"
export function prepareMatriz(i: Matriz) {
  const maxLength = Math.max(...i.map((item) => item.length));

  return i.map((item) => {
    const _item = [...item];
    while (_item.length < maxLength) {
      _item.push("*");
    }
    return _item;
  });
}

// Evaluamos la matriz de entrada
export function rotate(i: Matriz): Matriz {
  const m = i.length;
  const n = i[0].length;
  const result: Matriz = [];

  for (let col = n - 1; col >= 0; col--) {
    const _item: MatrizItem = [];
    for (let e = 0; e < m; e++) {
      _item.push(i[e][col]);
    }
    result.push(_item);
  }

  return result;
}
