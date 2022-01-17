import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={{ marginRight: 10 }}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  mainContainer: {
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});

export default ImageInputList;
