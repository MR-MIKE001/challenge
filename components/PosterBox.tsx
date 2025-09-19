import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

type PosterImgBoxProps = {
  img: ImageSourcePropType; 
  name: string;
  color: string;
};

const PosterImgBox: React.FC<PosterImgBoxProps> = ({ img, name, color }) => {
  const words = name.split(" ");

  return (
    <View style={styles.box}>
      <Image source={img} style={styles.image} />
      <View style={[styles.textWrapper, { backgroundColor: color }]}>
        {words.length > 1 ? (
          <View style={styles.doubleText}>
            <Text>{words[0]}</Text>
            <Text style={styles.textDoub}>{words[1]}</Text>
          </View>
        ) : (
          <Text>{name}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 180,
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 90,
    height: 180,
    borderRadius: 8,
    marginBottom: 5,
  },
  textWrapper: {
    position: "absolute",
    bottom: -6,
    left: 10,
    width: 90,
    borderRadius: 5,
    alignItems: "center",
  },
  doubleText: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 20,
  },
  textDoub: {
    marginLeft: 15,
  },
});

export default PosterImgBox;
