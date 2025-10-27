import { render } from "@testing-library/react-native";
import CanteenMenu from "./CanteenMenu.tsx";
describe("should dispaly the content on the homescreen", () => {
    test("renders EverestCanteen message on the canteen-menu page", () => {
        const { getByText } = render(<CanteenMenu />);
        const header = getByText('EverestCanteen');
        expect(header).toBeTruthy()
    });

});