import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Checkbox from "expo-checkbox";
import { ACCOUNT_TYPES } from "@/constants/constants";
import { useFormV1 } from "@/hooks/useFormV1";

export default function HomeScreen() {
  const {
    accountType,
    isUsedSSL,
    userName,
    password,
    setUserName,
    setPassword,
    setIsUsedSSL,
    setAccountType,
    onSubmit,
  } = useFormV1();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Account Type:</Text>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={ACCOUNT_TYPES}
          labelField="label"
          valueField="value"
          value={accountType}
          onChange={setAccountType}
        />
      </View>
      <View style={styles.row}>
        <Text>User Name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="name@example.com"
          textContentType="username"
          placeholderTextColor="gray"
          value={userName}
          onChangeText={setUserName}
        />
      </View>
      <View style={styles.row}>
        <Text>Password:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Required"
          textContentType="password"
          secureTextEntry
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.row}>
        <Text>Server Address:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="example.com"
          textContentType="URL"
          placeholderTextColor="gray"
        />
      </View>
      {accountType.value === "Advenced" && (
        <>
          <View style={styles.row}>
            <Text>Server Path:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="/calendars/user/"
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <Text>Port:</Text>
              <TextInput
                style={[styles.textInput, { width: 60 }]}
                keyboardType="number-pad"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.row}>
              <Checkbox value={isUsedSSL} onValueChange={setIsUsedSSL} />
              <Text>Use SSL</Text>
            </View>
          </View>
        </>
      )}
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  textInput: {
    height: 25,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    padding: 4,
  },
  focused: {
    borderColor: "orange",
    borderWidth: 2,
  },

  dropdown: {
    height: 25,
    width: 200,

    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
