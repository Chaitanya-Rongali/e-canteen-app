export type menuItem = {
    id: string;
    name: string;
    cost: number;
    image:string;
}
export type menuSection = {
    title: string;
    data: menuItem[];
}