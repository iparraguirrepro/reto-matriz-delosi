import BlockMatrizComponent from "@/components/block-matriz";
import { FORM_MESSAGES } from "@/lib/messages";
import { render, screen, fireEvent, act } from "@testing-library/react";

describe("MatrixForm component", () => {
  it("Rotación de Matriz correctamente", async () => {
    render(<BlockMatrizComponent />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: JSON.stringify([[1, 2], [3, 4]]) } });
    fireEvent.click(screen.getByText("Procesar Matriz"));

    const rElement = await screen.findByTestId('rotate-result');
    expect(rElement).toHaveTextContent(/\[\[2,4\],\[1,3\]\]/);
  });

  it("Control de errores", async () => {
    render(<BlockMatrizComponent />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "xyz[a, []]" } });

    expect(await screen.findByText(FORM_MESSAGES.inputError)).toBeInTheDocument();
  });
});
