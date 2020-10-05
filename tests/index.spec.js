import { render, screen } from "../utils/tests";
import HomePage from "../pages";
import HeaderComponent from "../components/header/header";

describe("HomePage", () => {
  it("renders with button", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("button", { title: "Show More Beer" })
    ).toBeInTheDocument();
  });

  it("render header with title correctly", () => {
    const tree = render(<HeaderComponent title="The Random Beer App" />);
    expect(tree).toMatchSnapshot();
  });
});
