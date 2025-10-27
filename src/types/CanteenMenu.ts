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
export type MenuItemProps = {
    item: menuItem
}
export type sectionHeader = {
    title: string
}