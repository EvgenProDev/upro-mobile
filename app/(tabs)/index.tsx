import AuthScreen from "@/components/AuthScreen";
import TopNavbar from "@/components/TopNavBar";
import { useAuth } from "@/contexts/AuthContext";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { user, account, loading, signOut, currentProfile } = useAuth();

  // React.useEffect(() => {
  //   signOut()
  //     .then(() => {
  //       console.log("User signed out successfully.");
  //     })
  //     .catch((error) => {
  //       console.error("Error signing out:", error);
  //     });
  // }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text className="mt-4 text-gray-600">Loading...</Text>
      </View>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  if (!account) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <Text className="text-lg">No account found. Please log in again.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <TopNavbar />
      <View className="flex-1 items-center px-6">
        <View className=" flex items-center justify-center w-[80%] h-[60%] mt-20">
          <View className="flex-row justify-between items-center w-full mb-6">
            <View className="flex-row items-center">
              <Text className="text-lg font-semibold italic">
                {currentProfile?.name}{" "}
              </Text>
              <Text className="text-lg font-semibold italic">
                <MaterialCommunityIcons
                  name="crown"
                  size={20}
                  color="gold"
                  style={{ marginLeft: 5 }}
                />
                {currentProfile?.upro_gold}{" "}
              </Text>
            </View>
            <TouchableOpacity className="flex-row items-center gap-1">
              <FontAwesome5 name="user-friends" size={24} color="black" />
              <Text className="text-lg font-semibold italic">COUNT</Text>
            </TouchableOpacity>
          </View>
          <View className="w-full flex-1 flex items-center justify-center bg-white rounded-lg shadow-lg">
            <Text>Div for avatar section.</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
