import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

const FloatingButton = ({ onPress }) => {
  //Hook into the theme for colors
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8} // Slight fade effect when pressed
      // HitSlop increases the touchable area without changing the UI size.
      // Helps users with large fingers not to miss the button.
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={[
        styles.fab,
        {
          backgroundColor: colors.primary, // Purple/Blue from theme
          shadowColor: "#000", // Shadow is always dark
        },
      ]}
    >
      {/* The Plus Icon*/}
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    //POSITIONING (The "Floating" Magic)
    position: "absolute", // Detaches from normal layout flow
    bottom: 24, // Distance from the bottom edge
    right: 24, // Distance from the right edge
    zIndex: 999, // Ensures it sits ON TOP of everything else

    //SHAPE AND SIZE
    width: 56, // Standard Material Design size
    height: 56,
    borderRadius: 28, // Half of width = Perfect Circle

    //ALIGNMENT
    justifyContent: "center", // Vertically center the '+'
    alignItems: "center", // Horizontally center the '+'

    //SHADOWS
    // Android:
    elevation: 6,
    // iOS:
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  icon: {
    color: "white",
    fontSize: 32,
    marginTop: -2, // Visual correction to center the text perfectly
    fontWeight: "300",
  },
});

export default FloatingButton;
