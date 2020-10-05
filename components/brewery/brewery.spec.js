import { render } from "../../utils/tests";
import BreweryComponent from "./brewery";

describe("BreweryComponent", () => {
  it("should match snapshot", () => {
    const { container } = render(<BreweryComponent />);

    expect(container).toMatchSnapshot();
  });
});
