import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home/index';
import New from '../pages/New';
import Profile from '../pages/Perfil';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrawer.Navigator

    drawerContent={(props) => <CustomDrawer {...props} />}


    screenOptions={{

        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#00b94a',
        drawerInactiveBackgroundColor: '#2f424f',
        drawerInactiveTintColor: '#ddd',
        

        drawerStyle: {backgroundColor: '#2f424f'},
        drawerItemStyle: {marginVertical: 5},
        drawerLabelStyle: {fontWeight: 'bold'},
        
    
    }} 
    
    >
        <AppDrawer.Screen name="Home" component={Home} options={{title: 'Home', headerTitle:'', headerStyle: {backgroundColor: '#2f424f'}, headerTintColor: '#fff' }}/>

        <AppDrawer.Screen name="Registrar" component={New} options={{title: 'Registrar', headerTitle:'', headerStyle: {backgroundColor: '#2f424f'}, headerTintColor: '#fff' }}/>

        <AppDrawer.Screen name="Perfil" component={Profile} options={{title: 'Perfil', headerTitle:'', headerStyle: {backgroundColor: '#2f424f'}, headerTintColor: '#fff' }}/>


    </AppDrawer.Navigator>
    );
}

export default AppRoutes;
