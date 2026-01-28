export type Matriz = (number|string)[][];
export type MatrizItem = (number|string)[];

// Tipo usado para definir los datos
export type FormMatriz = {
  matriz: Matriz;
};

// Tipo usado para definir los forms
export type FormMatrizValues = {
  matriz: string;
};