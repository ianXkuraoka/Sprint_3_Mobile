import { ScrollView, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types"

const Recomendation = ({navigation}: NativeStackScreenProps<RootStack>) => {
    return(
        <ScrollView>
            <View>
                <Text>Recomendações:</Text>
            </View>
        </ScrollView>
    )
};



export default Recomendation