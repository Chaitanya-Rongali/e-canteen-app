import { render } from "@testing-library/react-native";
import { MenuItem } from "./MenuItem.tsx";
import { menuItem } from "../../types/CanteenMenu";
const mockItem: menuItem = {
    id: '1',
    name: "Idly",
    cost: 30,
    image: ''
}
describe('MenuItem', () => {
    test('should idly and cost on the canteen-menu page screen', () => {
        const { getByTestId, getByText } = render(<MenuItem item={mockItem} />)
        const itemName = getByText('Idly')
        expect(itemName).toBeOnTheScreen();
        const itemCost = getByText('₹30')
        expect(itemCost).toBeOnTheScreen();
    })
})