import { View, Text, Button, TextInput } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

import { useState } from "react";

import {
  TextInput as TextInputPaper,
  Button as ButtonPaper,
  List as ListPaper,
  Card,
  Portal,
  Modal,
} from "react-native-paper";

function Tab1() {
  const [visible, setVisible] = useState(false);
  const hide = () => setVisible(false);

  return (
    <View className="flex-1">
      <View className="flex flex-1 items-center justify-center">
        <Button
          title="Show modal"
          onPress={() => {
            setVisible(true);
          }}
        />
      
      </View>

      <Modal
        dismissable={true}
        dismissableBackButton={true}
        visible={visible}
        onDismiss={hide}
      >
        <View className="flex flex-1 flex-col items-center justify-center">
          <Card className="flex items-center justify-center h-[350px] w-[300px] p-8 gap-3">
            <View>
              <Text className="text-2xl font-bold">Cash in</Text>
            </View>
            <View className="flex flex-col w-[230px] space-y-3">
              <TextInputPaper
                type="outlined"
                label="Description"
                placeholder="Enter details"
                dense={true}
                className="rounded-lg h-[50px] bg-[#ff0f9]"
                right={<TextInputPaper.Icon icon="pencil" />}
              />
              <TextInputPaper
                type="outlined"
                label="Date"
                placeholder="Enter details"
                dense={true}
                keyboardType="number-pad"
                className="rounded-lg h-[50px] bg-[#ff0f9]"
                right={<TextInputPaper.Icon icon="calendar" />}
              />

              <TextInputPaper
                type="outlined"
                label="Amount"
                placeholder="Enter amount"
                dense={true}
                keyboardType="number-pad"
                className="rounded-lg h-[50px] bg-[#ff0f9]"
                right={<TextInputPaper.Icon icon="currency-php" />}
              />
            </View>
            <View className="flex items-center justify-center mt-8">
              <ButtonPaper mode="contained" className="w-[100px]">
                Save
              </ButtonPaper>
            </View>
          </Card>
        </View>
      </Modal>
    </View>
  );
}

function Tab2() {
  const theme = useTheme();
  return (
    <View>
      <Text style={{ backgroundColor: theme.colors.secondary }}>Tab 2</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Dashboard({ navigation }) {
  return (
    <Tab.Navigator
      className="h-[200px]"
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 8,
          fontStyle: "normal",
          fontWeight: "bold",
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#1877F2",
        tabBarStyle: {
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Cash in") {
            iconName = "bank-transfer-in";
          } else if (route.name === "Cash out") {
            iconName = "bank-transfer-out";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={24}
              color={focused ? "#1877F2" : "grey"}
            />
          );
        },
        tabBarActiveTintColor: "#1877F2",
      })}
    >
      <Tab.Screen name="Cash in" component={Tab1} />
      <Tab.Screen name="Cash out" component={Tab2} />
    </Tab.Navigator>
  );
}
