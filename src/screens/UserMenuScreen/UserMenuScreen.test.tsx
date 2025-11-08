import { render } from "@testing-library/react-native";
import UserMenuScreen from "./UserMenuScreen";

describe("should dispaly the content on the homescreen", () => {
    test("renders EverestCanteen message on the canteen-menu page", () => {
        const { getByText } = render(<UserMenuScreen />);
        const header = getByText('Our Menu');
        expect(header).toBeTruthy()
    });
    test("renders EverestCanteen message on the canteen-menu page", () => {
        const { getByText } = render(<UserMenuScreen />);
        const LogoutButtton= getByText('LogOut');
        expect(LogoutButtton).toBeTruthy()
    });

});