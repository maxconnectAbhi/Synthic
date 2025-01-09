import React from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import { TextInput, HelperText, TextInputProps } from "react-native-paper";

interface CommonInputProps extends Omit<TextInputProps, "error"> {
  error?: string; 
  containerStyle?: StyleProp<ViewStyle>;
}

const CommonInput: React.FC<CommonInputProps> = ({
  error,
  containerStyle,
  style,
  ...restProps
}) => {
  return (
    <View style={containerStyle}>
      <TextInput
        {...restProps}
        style={[styles.input, style]}
        placeholderTextColor={"#000"}
      />
      {error && (
        <HelperText type="error" visible={true}>
          {error}
        </HelperText>
      )}
    </View>
  );
};

export default CommonInput;

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
  },
});
