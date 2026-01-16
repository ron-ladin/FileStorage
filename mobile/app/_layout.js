import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider } from "../context/ThemeContext";

//it wraps all screens with necessary providers.
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/*authProvider makes the login state available to all screens */}
      <AuthProvider>
        <ThemeProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
        {/* the Stack navigator handles the transition between screens */}
      </AuthProvider>
    </SafeAreaProvider>
  );
}
