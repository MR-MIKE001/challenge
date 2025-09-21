import React, { useState } from 'react';
import { Text, StyleSheet, StatusBar, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import SmarctScript from './components/SmarctScript';
import AdvanceScript from './components/Advance';
import Footer from './components/Footer';



type SectionType = 'Smart script' | 'Advance script';

const App: React.FC = () => {

  const [isActive, setIsActive] = useState<SectionType>('Smart script');
  const section: SectionType[] = ['Smart script', 'Advance script'];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
       <View style={styles.wrapper}>
      
          <View style={styles.iconContainer}>
            <Ionicons name="close" size={60} color="white" />
          </View>

       
          <View style={styles.scriptContainer}>
            {section.map((item) => (
              <TouchableOpacity key={item} onPress={() => setIsActive(item)}>
                <View>
                  <Text style={isActive === item ? styles.bold : styles.normal}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View 
          style={{ 
          flex: 1,
          marginTop: -300,
          paddingLeft:8,
          paddingRight:8, }}>
            {isActive==="Smart script"?<SmarctScript/>:<AdvanceScript/>}
          </View>
        </View>
        
            <View>
            <Footer/>
                  </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  
  container: { 
    flex: 1,
    backgroundColor: '#000000',
  },
  wrapper: {
    flex: 1,
    paddingLeft:8,
    paddingRight:8,
  },
  iconContainer: { 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 16,
  },  
  scriptContainer: {
    top: 80,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  normal: {
    fontWeight: 'normal',
    borderBottomWidth: 0,
    borderBottomColor: '#FFFFFF',
    paddingBottom: 4,
    color: '#FFFFFF',
    paddingLeft: 18,
    paddingRight: 18,
    fontSize: 20,
    marginLeft: 8,
    marginRight: 8,
  },
  bold: {
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#76aae6ff',
    paddingBottom: 4,
    color: '#FFFFFF',
    fontSize: 20,
    paddingLeft: 18,
    paddingRight: 18,
    marginLeft: 8,
    marginRight: 8,
  },
   
});

export default App;
