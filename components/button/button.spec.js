import { render } from "../../utils/tests";
import ButtonComponent from "./button";

describe("ButtonComponent", () => {

  it("should match snapshot", () => {
    const { container } = render(<ButtonComponent />);

    expect(container).toMatchSnapshot();
  });
});
