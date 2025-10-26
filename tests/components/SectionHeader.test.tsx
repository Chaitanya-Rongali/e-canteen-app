import { fireEvent, render, screen } from "@testing-library/react-native";
import { SectionHeader } from "../../src/components/SectionHeader";
import { menuSection } from "../../src/types/canteen-menu";
const mockSetMenuItems = jest.fn();
const mockMenuItems: menuSection[] = [];
const mockData: any = [];
const mockTitle = "EverestCanteen";
describe(SectionHeader, () => {
    test("should text and add button on the screen", () => {
        const { getByText } = render(<SectionHeader title={mockTitle} SetMenuItems={mockSetMenuItems} menuItems={mockMenuItems}
            data={mockData} />)
        expect(getByText("Add")).toBeTruthy();
        expect(getByText("EverestCanteen")).toBeTruthy();
    })
    test("should open the modal when click the add button", () => {
        const { getByText } = render(<SectionHeader title={mockTitle} SetMenuItems={mockSetMenuItems} menuItems={mockMenuItems}
            data={mockData} />)
        expect(screen.queryByTestId('modal')).toBeNull();
        const addButton = getByText("Add");
        fireEvent.press(addButton);
        expect(screen.getByTestId('modal')).toBeVisible();
    })

})


