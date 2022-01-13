import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View } from 'react-native';
import styles from './src/common/styles';
import Page from './src/components/page';

const App = () => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const { width } = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width );
    if(indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  }

  const { currentPage: pageIndex } = sliderState;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        horizontal={true}
        pagingEnabled={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}
        contentInsetAdjustmentBehavior="automatic">
          <Page 
            image={'pageOne'}
            title='Escolha o destino da sua viagem'
            subtitle='Use nosso mapa para escolher o destino da sua viagem.'/>
          <Page 
            image={'pageTwo'}
            title='Escolha um pacote de viagens'
            subtitle='Selecione um dos pacotes que criamos especialmente para você!'/>
          <Page 
            image={'pageThree'}
            title='Aproveite a sua viagem!'
            subtitle='Deixe a burocracia com a gente e aproveite sua viagem.'/>
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(3)).map((element, index) => (
          <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1.0 : 0.2}]} key={index}/>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;
