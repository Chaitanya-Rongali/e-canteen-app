export type menuItem = {
    id: string;
    name: string;
    cost: number;
    image: string;
}
export type menuSection = {
    title: string;
    data: menuItem[];
}
export type ItemModalprops = {
    modalVisible: boolean,
    onClose: () => void;
    title: string
    SetMenuItems: React.Dispatch<React.SetStateAction<menuSection[]>>
    menuItems: menuSection[]
}
export type MenuItemprops = {
    item: menuItem
    handleDelete: (sectionTitle: string, id: string) => void
    sectionTitle: string;
}
export type sectionHeader = {
    title: string
    SetMenuItems: React.Dispatch<React.SetStateAction<menuSection[]>>
    menuItems: menuSection[]
    data: any
}
export type RootStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: { role: "user" | "admin" };
  RegistrationScreen: { role: "user" | "admin" };
};