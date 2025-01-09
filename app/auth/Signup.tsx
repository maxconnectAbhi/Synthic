import React, { useState } from "react";
import { Avatar } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "@/constants/GlobalStyles";
import CommonInput from "@/components/ui/CommonInput";
import CommonButton from "@/components/ui/CommonButton";
import { RootStackParamList } from "@/components/navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert } from "react-native";
import CommonDialog from "@/components/ui/CommonDialog";

// Type for error state
type ErrorState = {
  username?: string;
  mobile_number?: string;
  email?: string;
};

const Signup: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [error, setError] = useState<ErrorState | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onVerify = (): void => {
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const contactValidate = /^[0-9]*$/;

    if (username.length < 3) {
      setError({ username: "Length should be more than 3" });
    } else if (
      !contactValidate.test(mobileNumber) ||
      mobileNumber.length < 10
    ) {
      setError({ mobile_number: "Enter a valid mobile number" });
    } else if (!emailValidate.test(email)) {
      setError({ email: "Enter a valid email address" });
    } else {
      setError(null); // Clear errors if validation passes
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    return (
      <CommonDialog
        isVisible={true}
        title="User Detail"
        content={`Name: ${firstName} ${lastName}\nUsername: ${username}\nEmail: ${email}\nPhone Number: ${mobileNumber}`}
        onPress={() => navigation.goBack()}
      />
    );
  }
  return (
    <KeyboardAwareScrollView
      style={GlobalStyles.container}
      contentContainerStyle={GlobalStyles.container}
    >
      <Avatar.Icon
        size={90}
        icon="account-edit"
        style={{ alignSelf: "center" }}
      />
      <CommonInput
        label="First name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <CommonInput
        label="Last name"
        value={lastName}
        onChangeText={setLastName}
      />
      <CommonInput
        label="Username"
        value={username}
        error={error?.username}
        onChangeText={setUsername}
      />
      <CommonInput
        label="Phone Number"
        keyboardType="number-pad"
        maxLength={10}
        value={mobileNumber}
        error={error?.mobile_number}
        onChangeText={setMobileNumber}
      />
      <CommonInput
        label="Email"
        value={email}
        error={error?.email}
        onChangeText={setEmail}
      />
      <CommonButton
        title="Continue"
        disabled={
          !(
            username.length > 0 &&
            mobileNumber.length > 0 &&
            email.length > 0 &&
            firstName.length > 0 &&
            lastName.length > 0
          )
        }
        onPress={onVerify}
      />
    </KeyboardAwareScrollView>
  );
};

export default Signup;
