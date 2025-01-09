import ForgotPassword from "@/app/auth/ForgotPassword";
import Login from "@/app/auth/Login";
import Signup from "@/app/auth/Signup";

import { createStackNavigator } from "@react-navigation/stack";

export enum Routes {
  Login = "Login",
  Signup = "Signup",
  ForgotPassword = "ForgotPassword",
}

export type RootStackParamList = {
  [Routes.Login]: undefined;
  [Routes.Signup]: undefined;
  [Routes.ForgotPassword]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Signup} component={Signup} />
      <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassword} />
    </Stack.Navigator>
  );
}
