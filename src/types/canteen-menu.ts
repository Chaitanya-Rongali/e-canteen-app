export type menuItem = {
    id: string;
    name: string;
    cost: number;
    image: any;
}
export type menuSection = {
    title: string;
    data: menuItem[];
}