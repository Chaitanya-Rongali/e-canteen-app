import { render } from "@testing-library/react-native";
import { MenuItem } from "../../src/components/MenuItem";
import { menuItem } from "../../src/types/CanteenMenu";
const mockItem: menuItem = {
    id: '1',
    name: "Idly",
    cost: 30,
    image: ''
}
describe('MenuItem', () => {
    test('should item name and item price on the canteen-menu page screen', () => {
        const { getByTestId } = render(<MenuItem item={mockItem} />)
        const itemName = getByTestId('name')
        expect(itemName).toBeOnTheScreen();
        const itemCost=getByTestId("cost")
        expect(itemCost).toBeOnTheScreen();
    })
})