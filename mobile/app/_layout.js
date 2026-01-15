import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "../src/context/AuthContext";

//it wraps all screens with necessary providers.
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/*authProvider makes the login state available to all screens */}
      <AuthProvider>
        {/* the Stack navigator handles the transition between screens */}
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </SafeAreaProvider>
  );
}