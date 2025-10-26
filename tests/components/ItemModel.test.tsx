import { fireEvent, render } from "@testing-library/react-native";
import { ItemMOdal } from "../../src/components/ItemModal";
import { menuSection } from "../../src/types/canteen-menu";
import { Alert } from "react-native";
const mockmodalVisible = true;
const mockOnClose = jest.fn();
const SetMenuItems = jest.fn();
const mockTitle = "Snacks";
const mockMenuItems: menuSection[] = [];
describe("ItemMOdal", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("calls SetMenuItems and closes modal when valid item is added", () => {
        const { getByText, getByPlaceholderText } = render(
            <ItemMOdal
                modalVisible={mockmodalVisible}
                onClose={mockOnClose}
                title={mockTitle}
                SetMenuItems={SetMenuItems}
                menuItems={mockMenuItems}
            />
        );
        fireEvent.changeText(getByPlaceholderText("Item Name"), "LemonRice");
        fireEvent.changeText(getByPlaceholderText("Price"), "60");
        fireEvent.press(getByText("Add"));
        expect(SetMenuItems).toHaveBeenCalled();
        expect(mockOnClose).toHaveBeenCalled();
    });
    test("displays alert if fields are empty", () => {
        const alertSpy = jest.spyOn(Alert, "alert");
        const { getByText } = render(
            <ItemMOdal
                modalVisible={mockmodalVisible}
                onClose={mockOnClose}
                title={mockTitle}
                SetMenuItems={SetMenuItems}
                menuItems={mockMenuItems}
            />
        )

        fireEvent.press(getByText("Add"));
        expect(alertSpy).toHaveBeenCalledWith("Please Enter all values");
    });

})
