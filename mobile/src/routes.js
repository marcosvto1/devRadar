import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "DevRadar",
          headerTitleAlign: "center"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Perfil do Github",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#24292e",
            borderBottomWidth: 0
          },
          headerTintColor: "#fff"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#7d4"
        }
      }
    }
  )
);

export default Routes;
