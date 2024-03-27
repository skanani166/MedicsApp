import { Button, Text, TouchableOpacity, View } from "react-native"
import Home from "./Home"
import { useNavigation } from "@react-navigation/native"


const Register = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Register</Text>
            <TouchableOpacity>
                <Button title='Sign up' color={'#199A8E'} onPress={() => navigation.navigate(Home)} />
            </TouchableOpacity>
        </View>
    )
}

export default Register