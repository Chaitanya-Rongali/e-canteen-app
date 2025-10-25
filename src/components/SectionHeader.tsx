import { Text } from "react-native"
import { styles } from "../styles/canteen-menu"

type sectionHeader = {
    title: string
}
export const SectionHeader: React.FC<sectionHeader> = ({ title }) => {
    return (
        <>
            <Text style={styles.header}>{title}</Text>
        </>
    )
}