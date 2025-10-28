import { fireEvent, render } from "@testing-library/react-native";
import { MenuItem } from '/Users/chaithu/Documents/CanteenApp/src/components/menuItem/MenuItem.tsx'
import { menuItem } from "../../types/CanteenMenu";
const handleDelete = jest.fn();
const sectionTitle: string = ''
const mockItem: menuItem = {
    id: '1',
    name: "Idly",
    cost: 30,
    image: ''
}
describe('MenuItem', () => {
    test('should idly and cost on the canteen-menu page screen', () => {
        const { getByTestId, getByText } = render(<MenuItem item={mockItem} handleDelete={handleDelete} sectionTitle={sectionTitle} />)
        const itemName = getByText('Idly')
        expect(itemName).toBeOnTheScreen();
        const itemCost = getByText('₹30')
        expect(itemCost).toBeOnTheScreen();
    })
    test('When click the delete button then menuitem will be deleted', () => {
        const { getByText } = render(< MenuItem item={mockItem} handleDelete={handleDelete} sectionTitle={sectionTitle} />)
        const deletButton = getByText('Delete')
        fireEvent.press(deletButton)
        expect(handleDelete).toHaveBeenCalled();

    })
})