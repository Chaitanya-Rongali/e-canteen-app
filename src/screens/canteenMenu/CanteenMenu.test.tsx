import { render } from "@testing-library/react-native";
import {CanteenMenuScreen} from "./CanteenMenu.tsx";
describe("should dispaly the content on the homescreen", () => {
    test("renders EverestCanteen message on the canteen-menu page", () => {
        const { getByText } = render(<CanteenMenuScreen />);
        const header = getByText('Everest-Canteen👨‍🍳');
        expect(header).toBeTruthy()
    });

});