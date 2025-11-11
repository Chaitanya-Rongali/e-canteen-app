import { menuItem, menuSection } from "./types/CanteenMenu";

export const fetchMenuItems=async()=>{
    const response = await fetch("http://localhost:3001/menuItems");
     const data = await response.json();
     return data;
}
export const addMenuItems=async(neItem:menuItem,sectionName:string)=>{
    const response=await fetch("http://localhost:3001/addMenuItems",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({neItem,sectionName})
    });
    return response.json();
}
export const deleteMenuItem = async (id: string) => {
  const response = await fetch(`http://localhost:3001/deleteMenuItem/${id}`, {
    method: "DELETE"
  });
  return response.json();
};
