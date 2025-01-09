import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

interface CommonButtonProps {
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  style?: any; // Adjust type based on your use case
  title: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  loading,
  disabled,
  onPress,
  style,
  ...props
}) => {
  return (
    <Button
      {...props}
      loading={loading}
      onPress={loading ? undefined : onPress}
      mode="contained"
      style={[styles.button, style]}
      labelStyle={{ fontSize: 17 }}
      disabled={disabled}
    >
      {loading ? null : title}
    </Button>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    height: 52,
    justifyContent: "center",
    zIndex: -1,
  },
});
