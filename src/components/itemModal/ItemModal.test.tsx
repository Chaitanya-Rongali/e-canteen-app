import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { ItemModal } from '/Users/chaithu/Documents/CanteenApp/src/components/itemModal/ItemModal.tsx'
import { Alert } from "react-native";
import { menuSection } from "../../types/CanteenMenu";
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
            <ItemModal
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
            <ItemModal
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
    test("displays alert if price is negative", () => {
        const alertSpy = jest.spyOn(Alert, "alert");
        const { getByText, getByPlaceholderText } = render(
            <ItemModal
                modalVisible={mockmodalVisible}
                onClose={mockOnClose}
                title={mockTitle}
                SetMenuItems={SetMenuItems}
                menuItems={mockMenuItems}
            />

        );
        fireEvent.changeText(getByPlaceholderText("Item Name"), "firedrice");
        fireEvent.changeText(getByPlaceholderText("Price"), "-60");
        fireEvent.press(getByText("Add"));
        expect(alertSpy).toHaveBeenCalledWith("Amount must be postive");
    });
    test("modal close when click the cancel", () => {

        const { getByText, getByPlaceholderText } = render(
            <ItemModal
                modalVisible={mockmodalVisible}
                onClose={mockOnClose}
                title={mockTitle}
                SetMenuItems={SetMenuItems}
                menuItems={mockMenuItems}
            />
        );
        fireEvent.press(getByText("Cancel"));
        expect(mockOnClose).toHaveBeenCalled();


    });


})
