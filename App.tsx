import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Musang from './Musang.png';
import Keranjang from './Keranjang.png';
import Musang2 from './Musang2.png';
import Musang3 from './Musang3.png';
import Musang4 from './Musang4.png';
import share from './share.png';
import Fav from './Fav.png';
import Chat from './chat.png';

function App() {
  return <StylingComponent />;
}

const StylingComponent = () => {
  return (
    <View style={styles.WarnaLatar}>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Image
          source={{uri: 'https://tmpfiles.nohat.cc/m2i8b1K9H7H7N4Z5.png'}}
          style={{width: 25, height: 20, marginTop: 6}}
        />
        <Text style={styles.Text}>Jual Beli Musang</Text>
        <Image source={Keranjang} style={{width: 40, height: 35}} />
      </View>

      <View
        style={{
          width: 360,
          height: 350,
          backgroundColor: '#fffaf0',
          marginTop: 10,
        }}>
        <Image
          source={Musang}
          style={{
            width: 300,
            height: 300,
            alignSelf: 'center',
            marginVertical: 25,
          }}
        />
      </View>

      <View
        style={{
          width: 360,
          height: 70,
          backgroundColor: '#d3d3d3',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image
          source={Musang2}
          style={{
            width: 60,
            height: 60,
            marginVertical: 5,
            marginHorizontal: 10,
            borderRadius: 10,
          }}
        />
        <Image
          source={Musang3}
          style={{
            width: 60,
            height: 60,
            marginVertical: 5,
            marginHorizontal: 10,
            borderRadius: 10,
          }}
        />
        <Image
          source={Musang4}
          style={{
            width: 60,
            height: 60,
            marginVertical: 5,
            marginHorizontal: 10,
            borderRadius: 10,
          }}
        />
      </View>

      <View
        style={{
          width: 360,
          height: 40,
          flexDirection: 'row',
          marginLeft: 5,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: '400',
          }}>
          Musang Jantan
        </Text>
        <Image
          source={share}
          style={{
            width: 30,
            height: 30,
            marginLeft: 60,
            marginTop: 10,
            alignSelf: 'center',
          }}
        />
        <Image
          source={Fav}
          style={{
            width: 30,
            height: 30,
            marginLeft: 20,
            marginTop: 10,
            alignSelf: 'center',
          }}
        />
      </View>

      <Text style={{color: 'black', marginLeft: 5}}>Anakan asli Afrika</Text>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderBlockColor: 'grey',
          marginLeft: 5,
        }}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            color: '#006400',
            fontWeight: '400',
          }}>
          Rp.350.000
        </Text>
      </View>

      <View style={{width: 360, height: 107, marginLeft: 5}}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            color: 'black',
            fontWeight: '400',
          }}>
          Description
        </Text>
        <ScrollView>
          <Text style={{color: 'black'}}>
            Musang luak atau Luwak adalah hewan menyusui (mamalia) yang termasuk
            suku musang dan garangan (Viverridae). Nama ilmiahnya adalah
            Paradoxurus hermaphroditus dan di Malaysia dikenal sebagai musang
            pulut. Hewan ini juga dipanggil dengan berbagai sebutan lain seperti
            musang (nama umum, Betawi), musang pandan, lasun (Sunda), luak atau
            luwak (Jawa), serta common palm civet, common musang, house musang,
            atau toddy cat dalam bahasa Inggris.
          </Text>
        </ScrollView>
      </View>

      <View
        style={{
          width: 360,
          height: 70,
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderBlockColor: '#696969',
            width: 50,
            height: 50,
            borderWidth: 2,
            borderRadius: 6,
            justifyContent: 'center',
            alignSelf: 'center',
            marginLeft: 25,
          }}>
          <Image
            source={Chat}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
        </View>
        <View
          style={{
            borderBlockColor: '#000000',
            backgroundColor: '#696969',
            width: 250,
            height: 50,
            borderWidth: 2,
            borderRadius: 6,
            justifyContent: 'center',
            alignSelf: 'center',
            marginLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#FFFFFF',
              alignSelf: 'center',
            }}>
            Add To Chart
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 70,
  },
  View: {
    width: 400,
    height: 800,
    backgroundColor: 'white',
  },
  WarnaLatar: {
    width: 360,
    height: 800,
    backgroundColor: 'white',
  },
});

//=========================================//
//ini komponen yang sudah dibuat sebelumnya
function SampleComponent() {
  return (
    <View>
      <ImageBackground
        source={image}
        style={{
          width: 360,
          height: 750,
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 10,
        }}>
        <View
          style={{
            width: 280,
            height: 30,
            backgroundColor: '#fffaf0',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Nanda Subekti
          </Text>
        </View>
        <View
          style={{
            width: 280,
            height: 370,
            backgroundColor: '#fff8dc',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            gap: 10,
          }}>
          <Image
            source={{
              uri: 'https://media.licdn.com/dms/image/D5603AQG1yQeRV7cOUg/profile-displayphoto-shrink_800_800/0/1671601409935?e=2147483647&v=beta&t=EF2FLqN-gtJZqnqQRIq3qgcWlyHzh6sEuXUPz4c3Xx0',
            }}
            style={{
              width: 200,
              height: 140,
              alignSelf: 'center',
              borderRadius: 100,
              borderWidth: 100,
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 13,
              textAlign: 'center',
              textAlignVertical: 'bottom',
            }}>
            Ini adalah sebuah testing App dengan framework React Native
            menggunakan bahasa TypeSript
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              color: '#000000',
              height: 40,
              fontSize: 13,
              textAlignVertical: 'bottom',
            }}
          />
          <KotakPhoto />
        </View>
      </ImageBackground>
    </View>
  );
}
//=============================================//

//ini adalah contoh functional component:
function Nanda() {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Nanda Subekti</Text>
      <Text>Elecreical Engineering</Text>
    </View>
  );
}

//ini adalah contoh class component:
class KotakPhoto extends Component {
  render(): React.ReactNode {
    return (
      <View>
        <Text style={{color: 'black'}}>Hobi:</Text>
        <Image
          source={{
            uri: 'https://www.ibanez.com/common/product_artist_file/file/p_region_JEMJR_WH_1P_03.png',
          }}
          style={{width: 300, height: 90, alignSelf: 'center'}}
        />
      </View>
    );
  }
}

const image = {
  uri: 'https://images.unsplash.com/photo-1546471180-335a013cb87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
};
{
  /* <View style={styles.container}>
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Text style={styles.text}>Inside</Text>
  </ImageBackground>
</View>; */
}

// function Background() {
//     return (
//   <ImageBackground
//   source={{
//       uri: 'https://www.torproject.org/static/images/tor-project-logo-onions.png',
//       resize.Mode='cover'
//     }}></ImageBackground>;
//   )
// }

function Photo() {
  return (
    <Image
      source={{
        uri: 'https://www.torproject.org/static/images/tor-project-logo-onions.png',
      }}
      style={{width: 100, height: 100}}
    />
    //style={{width: 200, height: 200}}
  );
}

//ini adalah component yang tidak terpakai atau tidak jadi di pakai
// <View style={{alignItems: 'center'}}>
//   <View style={{width: 80, height: 80, backgroundColor: '#ffff'}}>
//     <Text style={{color: '#b8860b', textAlign: 'center'}}>Test bang</Text>
//   </View>
//   <Text>Helo World</Text>
//   <Text>First App</Text>
//   <Nanda />
//   <View style={{width: 80, height: 18, backgroundColor: '#fffaf0'}}>
//     <Text style={{color: '#9400d3', textAlign: 'center'}}>Halo</Text>
//   </View>
// </View>

export default App;
