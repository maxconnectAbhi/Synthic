import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, TouchableRipple } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "@/constants/GlobalStyles";
import CommonInput from "@/components/ui/CommonInput";
import CommonButton from "@/components/ui/CommonButton";
import {
  RootStackParamList,
  Routes,
} from "@/components/navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoader] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const loginUser = async () => {
    setLoader(true);
    navigation.navigate(Routes.Signup);
    setLoader(false);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ justifyContent: "center", flex: 1 }}
      style={GlobalStyles.container}
    >
      <View style={GlobalStyles.alCenter}>
        <Text style={GlobalStyles.header}>Synthic.AI</Text>
      </View>
      <CommonInput
        label="Username"
        value={username}
        onChangeText={(text: React.SetStateAction<string>) => setUsername(text)}
      />
      <CommonInput
        label="Password"
        value={password}
        onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
        secureTextEntry={secureTextEntry}
        right={
          <TextInput.Icon
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            icon={secureTextEntry ? "eye" : "eye-off"}
          />
        }
      />

      <TouchableRipple
        style={GlobalStyles.flexEnd}
        onPress={() => navigation.navigate(Routes.ForgotPassword)}
      >
        <Text>Forgot Passsword?</Text>
      </TouchableRipple>

      <CommonButton
        title={"Login"}
        loading={loading}
        disabled={!(username.length > 0 && password.length > 0)}
        onPress={loginUser}
      />

      <TouchableRipple
        style={[GlobalStyles.alCenter, { marginTop: 10 }]}
        onPress={() => navigation.navigate(Routes.Signup)}
      >
        <Text>New account? Create one</Text>
      </TouchableRipple>
    </KeyboardAwareScrollView>
  );
};

export default Login;
