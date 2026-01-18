import React, { useEffect, useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

//custom modal component to replace alert.prompt for android support
export default function RenameModal({ visible, initialValue = "", onClose, onSave }) {
  const { theme } = useTheme();
  const { colors, radius, spacing, font } = theme;
  //local state for input field
  const [value, setValue] = useState(initialValue);
  
  useEffect(() => {
    //sync state with props when modal opens
    setValue(initialValue || "");
  }, [initialValue, visible]);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View
          style={[
            styles.card,
            { backgroundColor: colors.card, borderRadius: radius.m, borderColor: colors.border },
          ]}>
          <Text style={{ color: colors.text, fontSize: font.body, fontWeight: "800" }}>
            Rename
          </Text>

          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder="Enter new name"
            placeholderTextColor={colors.muted}
            autoCapitalize="none"
            style={[
              styles.input,
              { color: colors.text, borderColor: colors.border, borderRadius: radius.s },
            ]}
          />

          <View style={styles.row}>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.btn, { borderColor: colors.border, borderRadius: radius.s }]}>
              <Text style={{ color: colors.muted, fontSize: font.body, fontWeight: "700" }}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              //pass trimmed value back to parent
              onPress={() => onSave(String(value || "").trim())}
              style={[styles.btn, { backgroundColor: colors.primary, borderRadius: radius.s }]}>
              <Text style={{ color: "#fff", fontSize: font.body, fontWeight: "800" }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
  },
  btn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
  },
});