import { render } from "@testing-library/react-native";
import { SectionHeader } from "./SectionHeader.tsx";
const mocktittle = 'Breakfast'
describe("SectionHeader ", () => {
    test('Should Add button on the screen', () => {
        const { getByText } = render(<SectionHeader title={mocktittle} />)
        const addButton = getByText('Add')
        expect(addButton).toBeTruthy();
    })
    test('should Breakfast on the screen', () => {
        const { getByText } = render(<SectionHeader title={mocktittle} />)
        const tittle = getByText('Breakfast')
        expect(tittle).toBeOnTheScreen();
    })
})
