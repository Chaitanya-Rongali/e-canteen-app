import { RouteProp } from "@react-navigation/native";

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
    role: string;
}
export type sectionHeader = {
    title: string
    SetMenuItems?: (items:menuSection[] ) => void;
    menuItems: menuSection[]
    data: any
    role: string
}
type NavigationParams = {
  role: string; 
};
export type RootStackParamList = {
  navigate(role: string, navigate:NavigationParams): void;
  WelcomeScreen: undefined;
  LoginScreen: { role: "user" | "admin" };
  RegistrationScreen: { role: "user" | "admin" };
  AdminTabNavigation(): React.JSX.Element;
  UserTabNavigation: () => React.JSX.Element

};
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;
export type RegistarationScreenRouteProp=RouteProp<RootStackParamList, 'RegistrationScreen'>;
export type CustomButtonProps={
     onPress: () => void;
     title: string;
     style: any;
    }
export type CustomInputProps={
    placeholder:string;
    onChangeText: (text: any) => void;
    secureTextEntry?:boolean;
    value:string;
    style: any;
}





