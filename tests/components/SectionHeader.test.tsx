import { render } from "@testing-library/react-native";
import { SectionHeader } from "../../src/components/SectionHeader";
const mocktittle = 'Breakfast'
describe("SectionHeader ", () => {
    test('Should Add button on the screen', () => {
        const { getByText } = render(<SectionHeader title={mocktittle} />)
        const addButton = getByText('Add')
        expect(addButton).toBeTruthy();
    })
    test('should section tittle on the screen', () => {
        const { getByTestId } = render(<SectionHeader title={mocktittle} />)
        const tittle = getByTestId('title')
        expect(tittle).toBeOnTheScreen();
    })
})