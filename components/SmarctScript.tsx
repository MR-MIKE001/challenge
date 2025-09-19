import React from 'react'
import PosterImgBox from '../components/PosterBox'
import { 
    FlatList,
    ScrollView, 
    StyleSheet, 
    Text, 
    View } from 'react-native'

import TextBox from './TextBox'
import Setting from './Setting'
import Generate from './Generate'


import displayImg from '../assets/display.png'
import promotionImg from '../assets/promotion.png'
import announcementImg from '../assets/annoucment.png'
import brandImg from '../assets/brand.png'


type PosterData = {
  img: any
  name: string
  color: string
}

const SmarctScript: React.FC = () => {
  const data: PosterData[] = [
    {
      img: displayImg,
      color: '#eff0c0ff',
      name: 'display product',
    },
    {
      img: promotionImg,
      color: '#a2c6fcff',
      name: 'promotion',
    },
    {
      img: announcementImg,
      name: 'annoucement',
      color: '#3f2f86ff',
    },
    {
      img: brandImg,
      name: 'branding',
      color: '#edf0dfff',
    },
  ]

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      
    >
      <Text style={styles.text}>What type of poster do you want to create?</Text>

      <View style={styles.wrapperflat}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ marginVertical: 10 }}
          renderItem={({ item }) => (
            <PosterImgBox
             img={item.img} 
             name={item.name} 
             color={item.color} />
          )}
        />
      </View>

      <View style={styles.textWrapper}>
        <TextBox />
      </View>

      <View style={styles.textWrapper}>
        <Setting
          text1="Size"
          text2="1080 x 1920px"
          text3="Category"
          text4="Foods and beverage"
        />
      </View>
      <View style={styles.down}>
        <View style={styles.genWrapper}>
        <Generate />
      </View>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    down:{
        marginTop:50,
    },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  wrapperflat: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  textWrapper: {
    flex: 1,
    marginTop:20
  },
  genWrapper: {
    flex: 1,

  },
})


export default SmarctScript
