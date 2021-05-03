import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, TextInput } from 'react-native-paper';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
            <Avatar.Icon style={{ backgroundColor: "#00C33F" }} color={"#FFFFFF"} icon="check" />
            <View style={{ width: "100%" }}>
            <TextInput
                        mode={"flat"}
                        label="E-mail"
                        left={<TextInput.Icon name="email-outline" color="#FF00FF" />}
                        keyboardType={"email-address"}
                        returnKeyType={"done"}
                        blurOnSubmit={true}
                    />
            </View>
        </View>
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

export default App;
