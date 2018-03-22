import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  StatusBar
} from 'react-native';

import ImageElement from './app/components/ImageElement';

export default class MovieSearch extends React.Component {

  state = {
    images: [
      { title: 'Shutter Island', img: require('./app/img/img1.jpg')},
      { title: 'Jurassic Park', img: require('./app/img/img2.jpg')},
      { title: 'Lincoln', img: require('./app/img/img3.jpg')},
      { title: 'Batman', img: require('./app/img/img4.jpg')},
      { title: 'Bird', img: require('./app/img/img5.jpg')},
      { title: 'Obsessed', img: require('./app/img/img6.jpg')},
      { title: 'The Keeper', img: require('./app/img/img7.jpg')},
      { title: '13 Hours', img: require('./app/img/img8.jpg')},
      { title: 'Jurassic Park', img: require('./app/img/img2.jpg')},
      { title: 'Bird', img: require('./app/img/img5.jpg')},
    ],
    imagesReference: [],
    text: '',
  }

  componentDidMount() {
    this.setState({ imagesReference: this.state.images });
  }

  search(text) {
    this.setState({ text: text });
    let imgArr = this.state.images;

    for (var i = 0; i < imgArr.length; i++) {
      if (text === imgArr[i].title) {
        this.setState({ images: [ imgArr[i] ] })
      }
    }

    if (!text) {
      this.setState({ images: this.state.imagesReference })
    }

  }

  render() {

    let images = this.state.images.map((val, key) => {
      return <View key={key} style={styles.imagewrap}>
                <ImageElement imgsource={val.img} />
             </View>
    });

    return (
      <View style={styles.container}>
        <StatusBar hidden/>


        <TextInput style={styles.textinput} underlineColorAndroid='transparent'
          placeholder="search titles" onChangeText={ (text) => this.search(text) } value={this.state.text} />

          <View style={styles.photogrid}>
            {images}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525'
  },
  textinput: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  photogrid: {
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagewrap: {
    padding: 2,
    height: 120,
    width: (Dimensions.get('window').width / 2) - 2,
  }
});
