import { fireEvent, render, screen } from "@testing-library/react-native";
import { SectionHeader } from "/Users/chaithu/Documents/CanteenApp/src/components/sectionHeader/SectionHeader.tsx";
import { menuSection } from "../../types/CanteenMenu.ts";
const mocktittle = 'Breakfast'
const mockSetMenuItems = jest.fn();
const mockMenuItems: menuSection[] = [];
const mockData: any = [];
const mockTitle = "EverestCanteen";

describe("SectionHeader ", () => {
    test('Should Add button on the screen', () => {
        const { getByText } = render(<SectionHeader title={mocktittle} SetMenuItems={mockSetMenuItems} menuItems={mockMenuItems} data={mockData} role="admin" />)
        const addButton = getByText('Add')
        expect(addButton).toBeTruthy();
    })
    test('should Breakfast on the screen', () => {
        const { getByText } = render(<SectionHeader title={mocktittle} SetMenuItems={mockSetMenuItems} menuItems={mockMenuItems} role="admin"
            data={mockData} />)
        const tittle = getByText('Breakfast')
        expect(tittle).toBeOnTheScreen();
    })
    test('should Breakfast on the user screen', () => {
        const { getByText } = render(<SectionHeader title={mocktittle} SetMenuItems={mockSetMenuItems} menuItems={mockMenuItems} role="user"
            data={mockData} />)
        const tittle = getByText('Breakfast')
        expect(tittle).toBeOnTheScreen();
    })
    
    test("should text and add button on the screen", () => {
        const { getByText } = render(<SectionHeader title={mockTitle} SetMenuItems={mockSetMenuItems} menuItems={mockMenuItems} role="admin"
            data={mockData} />)
        expect(getByText("Add")).toBeTruthy();
        expect(getByText("EverestCanteen")).toBeTruthy();
    })
    test("should open the modal when click the add button", () => {
        const { getByText } = render(<SectionHeader title={mockTitle} SetMenuItems={mockSetMenuItems} menuItems={mockMenuItems} role="admin"
            data={mockData} />)
        expect(screen.queryByTestId('modal')).toBeNull();
        const addButton = getByText("Add");
        fireEvent.press(addButton);
        expect(screen.getByTestId('modal')).toBeVisible();
    })
})
