// // import React from 'react';
// // import {View, Text} from 'react-native';
// // export default class SearchAddress extends React.Component {
// //   render() {
// //     return <View></View>;
// //   }
// // }

// import React from 'react';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import {View, Text, TextInput} from 'react-native';

// const GooglePlacesInput = () => {
//   const handleSearch = text => {
//     const formattedQuery = text.toLowerCase();
//     // const data = filter(this.state.fullData, user => {
//     //   return this.contains(user, formattedQuery)
//     // })
//     //this.setState({ data, query: text })
//   };
//   return (
//     // <GooglePlacesAutocomplete
//     //   placeholder="Search"
//     //   onPress={(data, details = null) => {
//     //     // 'details' is provided when fetchDetails = true
//     //     console.log(data, details);
//     //   }}
//     //   query={{
//     //     key: 'YOUR API KEY',
//     //     language: 'en',
//     //   }}
//     // />
//     // <View>
//     //   <Text>jhgjkl</Text>
//     // </View>
//     <View style={{marginTop: 30}}>
//       <View>
//         <Text style={{textAlign: 'center', fontSize: 15}}>
//           Google Search Address
//         </Text>
//       </View>

//       <View
//         style={{
//           backgroundColor: '#fff',
//           padding: 5,
//           //alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 40,
//         }}>
//         <TextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           onChangeText={handleSearch}
//           status="info"
//           placeholder="Search"
//           style={{
//             borderColor: '#333',
//             backgroundColor: '#fff',
//           }}
//           textStyle={{color: '#000'}}
//         />
//       </View>
//     </View>
//   );
// };

// export default GooglePlacesInput;

import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default class GooglePlacesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      lat: null,
      lng: null,
    };
  }

  getAdd(data) {
    console.log('add', data);
    this.setState({
      address: data.formatted_address, // selected address
      lat: data.geometry.location.lat, //  selected coordinates latitude
      lng: data.geometry.location.lng, //  selected coordinates longitute
    });
    console.log('this.state.address', this.state.address); ///to console address
    console.log('this.state.coordinates', this.state.lat, this.state.lng); /// to console coordinates
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            minLength={2} // minimum length of text to search
            autoFocus={false}
            fetchDetails={true}
            returnKeyType={'default'}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log('dghfgdf', data, details);
              var data = details;
              this.getAdd(data);
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyBnBxu53CwuTMYnbTxtFq2XDUvB94Ao_y8',
              language: 'en',
              types: 'geocode', // default: 'geocode'
            }}
            listViewDisplayed={this.state.showPlacesList}
            textInputProps={{
              onFocus: () => this.setState({showPlacesList: true}),
              onBlur: () => this.setState({showPlacesList: false}),
            }}
            styles={{
              textInputContainer: {
                width: '100%',
              },
              description: {
                fontWeight: 'bold',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3',
            ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            // predefinedPlaces={[]}

            predefinedPlacesAlwaysVisible={true}
          />
        </View>

        {this.state.address != null ? (
          <View style={styles.container2}>
            <Text>Address: {this.state.address}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  top: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container2: {
    height: '75%',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255,255, 0.5)',
    padding: 1,
    margin: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#0B0B3B',
  },
  textoboton: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    fontSize: 12,
  },
});
