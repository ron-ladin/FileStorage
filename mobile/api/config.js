//configuration for the API connection
import { Platform } from "react-native";
import * as Device from "expo-device";

const LAN_IP = "172.16.22.26";

const isAndroidEmulator =
  Platform.OS === "android" && !Device.isDevice;

export const API_BASE = isAndroidEmulator
  ? "http://10.0.2.2:5000/api"
  : `http://${LAN_IP}:5000/api`;
