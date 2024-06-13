import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const ACCOUNT_TYPES = [
  { label: "Advenced", value: "Advenced" },
  { label: "Manual", value: "Manual" },
];

export default function HomeScreen() {
  const [accountType, setAccountType] = useState(ACCOUNT_TYPES[0]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Account Type:</Text>

        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={ACCOUNT_TYPES}
          labelField="label"
          valueField="value"
          // placeholder={!isFocus ? "Select item" : "..."}
          searchPlaceholder="Search..."
          value={accountType}
          // onFocus={() => setIsFocus(true)}
          // onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            // setValue(item.value);
            // setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.row}>
        <Text>User Name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="name@example.com"
          textContentType="username"
          placeholderTextColor="gray"
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
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={() => {}} />
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
  },

  dropdown: {
    height: 25,
    width: 200,

    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
