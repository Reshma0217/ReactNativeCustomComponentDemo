import { PixelRatio, Platform, Dimensions } from "react-native";

const scale = (Dimensions.get("window").width / 320);

export const normalize = (size) => {

    const newSize = size * scale

    return Math.round(PixelRatio.roundToNearestPixel(newSize))

}

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');