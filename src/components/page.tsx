import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Images from "../common/images";
import styles from "../common/styles";

const { width, height } = Dimensions.get('window');

interface pageProps {
  image: string,
  title: string,
  subtitle: string,
}

const Page = (props: pageProps) => (
  <View style={{ width, height }}>
    <Image source={Images[props.image]} style={styles.images}/>
    <View style={styles.wrapper}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  </View>
);

export default Page;