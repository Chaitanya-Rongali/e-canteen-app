import { fireEvent, render } from "@testing-library/react-native";
import { MenuItem } from "../../src/components/MenuItem";

const mockItem:any=[];
const handleDelete=jest.fn();
const sectionTitle:string=''

describe(MenuItem,()=>{
    test('When click the delete button then menuitem will be deleted',()=>{
        const{getByText}=render(< MenuItem item={mockItem}handleDelete={handleDelete} sectionTitle={ sectionTitle}/>)
        const deletButton=getByText('Delete')
        fireEvent.press(deletButton)
        expect(handleDelete).toHaveBeenCalled();

    })
})