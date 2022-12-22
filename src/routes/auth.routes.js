import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SingIn/index';
import SignUp from '../pages/SignUp/index';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />

        
            <AuthStack.Screen name="SignUp" component={SignUp} options={{ headerStyle:{
                backgroundColor: '#2f424f',
                borderBottomWidth: 1,
                borderBottomColor: '#00b94a'
            },
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerTitle: 'Voltar'
            }} />
        </AuthStack.Navigator>


    );
}

export default AuthRoutes;
