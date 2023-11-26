import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import landingPage from './screens/landingPage'
import login from './screens/login'
import signUp from './screens/signUp'
import scan from './screens/scan'
import cart from './screens/cart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirstTabIcon, SecondTabIcon, ThirdTabIcon, fourthTabIcon, fifthTabIcon } from './component/tabBarIcon';
import Payment from './screens/Payment';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MyTab = () => {
  return(
    <Tab.Navigator initialRouteName='cart'>
      <Tab.Screen name='cart' component={cart} options={{
        tabBarIcon: FirstTabIcon,
        headerShown: false,
      }}
      />
      <Tab.Screen name='landingPage2' component={landingPage} options={{
        tabBarIcon: SecondTabIcon,
      }}
      />
      <Tab.Screen name='landingPage3' component={landingPage} options={{
        tabBarIcon: ThirdTabIcon,
      }}
      />
      <Tab.Screen name='landingPage4' component={landingPage} options={{
        tabBarIcon: fourthTabIcon,
      }}
      />
      <Tab.Screen name='landingPage5' component={landingPage} options={{
        tabBarIcon: fifthTabIcon,
      }}
      />

    </Tab.Navigator>
  )
}
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='payment'>
          <Stack.Screen name = 'payment' component={Payment} options={{
            headerShown: false,
            
          }}/>
          <Stack.Screen name = "MyTab" component={MyTab} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name = "scan"  component={scan} options={
            {
              headerShown: false,
            }
          }/>
          <Stack.Screen name='landingPage' component={landingPage} options={{
            title : '',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerShadowVisible: false,

          }} />
          <Stack.Screen name='login' component={login} options={{
            title: '',
            headerShadowVisible: false,
          }} />
          <Stack.Screen name='signUp' component={signUp} options={{
            title: '',
            headerShadowVisible: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
