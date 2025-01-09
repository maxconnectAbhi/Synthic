import * as React from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";

interface CommonDialogProps {
  title: string;
  content: string;
  onPress: () => void;
  isVisible: boolean;
}

const CommonDialog: React.FC<CommonDialogProps> = ({
  title,
  content,
  isVisible,
  onPress,
}) => {
  const [visible, setVisible] = React.useState<boolean>(isVisible);

  const hideDialog = () => {
    setVisible(false);
    onPress();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{content}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default CommonDialog;
