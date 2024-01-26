import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import SingUp from '../screens/SingUp'
import LogIn from '../screens/LogIn'



const Stack = createNativeStackNavigator()

const AuthtNavitagor = () => {
    return (
        <Stack.Navigator

            initialRouteName='LogIn'
            screenOptions={({ navigation, route }) => ({
                header: () => <Header title={route.name} navigation={navigation} />
            })}
        >
            <Stack.Screen
                name="SingUp"
                component={SingUp}
                options={{
                    title: "SingUp",
                }}
            />
            <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{
                    title: "LogIn",
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthtNavitagor