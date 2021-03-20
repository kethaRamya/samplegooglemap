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

// import React, {Component} from 'react';
// import {View, Image, Text, StyleSheet} from 'react-native';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

// export default class GooglePlacesInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       address: null,
//       lat: null,
//       lng: null,
//     };
//   }

//   getAdd(data) {
//     console.log('add', data);
//     this.setState({
//       address: data.formatted_address, // selected address
//       lat: data.geometry.location.lat, //  selected coordinates latitude
//       lng: data.geometry.location.lng, //  selected coordinates longitute
//     });
//     console.log('this.state.address', this.state.address); ///to console address
//     console.log('this.state.coordinates', this.state.lat, this.state.lng); /// to console coordinates
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.top}>
//           <GooglePlacesAutocomplete
//             placeholder="Search"
//              minLength={2} // minimum length of text to search
//             autoFocus={false}
//             fetchDetails={true}
//             returnKeyType={'default'}
//             onPress={(data, details = null) => {
//               // 'details' is provided when fetchDetails = true
//               console.log('dghfgdf', data, details);
//               var data = details;
//               this.getAdd(data);
//             }}
//             query={{
//               // available options: https://developers.google.com/places/web-service/autocomplete
//               key: 'AIzaSyBnBxu53CwuTMYnbTxtFq2XDUvB94Ao_y8',
//               language: 'en',
//               types: 'geocode', // default: 'geocode'
//             }}
//             listViewDisplayed={this.state.showPlacesList}
//             textInputProps={{
//               onFocus: () => this.setState({showPlacesList: true}),
//               onBlur: () => this.setState({showPlacesList: false}),
//             }}
//             styles={{
//               textInputContainer: {
//                 width: '100%',
//               },
//               description: {
//                 fontWeight: 'bold',
//               },
//               predefinedPlacesDescription: {
//                 color: '#1faadb',
//               },
//             }}
//             currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
//             currentLocationLabel="Current location"
//             nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
//             filterReverseGeocodingByTypes={[
//               'locality',
//               'administrative_area_level_3',
//             ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
//             // predefinedPlaces={[]}

//             predefinedPlacesAlwaysVisible={true}
//           />
//         </View>

//         {this.state.address != null ? (
//           <View style={styles.container2}>
//             <Text>Address: {this.state.address}</Text>
//           </View>
//         ) : null}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//   },
//   welcome: {
//     fontSize: 40,
//     textAlign: 'center',
//     margin: 10,
//     color: 'black',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: 5,
//   },
//   top: {
//     height: '50%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   container2: {
//     height: '75%',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255,255, 0.5)',
//     padding: 1,
//     margin: 50,
//     borderRadius: 25,
//     borderWidth: 2,
//     borderColor: '#0B0B3B',
//   },
//   textoboton: {
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: 5,
//     fontSize: 12,
//   },
// });

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
// import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const latitudeDelta = 0.025;
const longitudeDelta = 0.025;
export default class GooglePlacesInput extends React.Component {
  searchText;
  mapView;
  state = {
    region: {
      latitudeDelta,
      longitudeDelta,
      latitude: 12.840575,
      longitude: 77.651787,
    },
    listViewDisplayed: true,
    address: '',
    showAddress: false,
    search: '',
    currentLat: '',
    currentLng: '',
    forceRefresh: 0,
  };
  goToInitialLocation = region => {
    let initialRegion = Object.assign({}, region);
    initialRegion['latitudeDelta'] = 0.005;
    initialRegion['longitudeDelta'] = 0.005;
    this.mapView.animateToRegion(initialRegion, 2000);
  };
  onRegionChange = region => {
    this.setState(
      {
        region: region,
        forceRefresh: Math.floor(Math.random() * 100),
      },
      //this.getCurrentAddress, //callback
    );
  };

  // getAddress({
  //     fetch("https://maps.googleapis.com/maps/api/geocode/json?     address=" + this.state.region.latitude+"," +this.state.region.longitude +"&key=" + AIzaSyBnBxu53CwuTMYnbTxtFq2XDUvB94Ao_y8).then((response) => response.json()).then((responseJson) => {
  //   console.log("ADDRESS GEOCODE is BACK!! => " +
  // JSON.stringify(responseJson));
  //    this.setState(
  //      { address:         JSON.stringify(responseJson.results[0].formatted_address)
  //       .replace(/"/g, "")
  //      });
  //    });
  // }

  getAddress = () => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        this.state.region.latitude +
        ',' +
        this.state.region.longitude +
        '&key=AIzaSyBnBxu53CwuTMYnbTxtFq2XDUvB94Ao_y8',
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('ADDRESS GEOCODE is BACK!! => ' + responseJson);
        JSON.stringify(responseJson);
        this.setState({
          address: JSON.stringify(
            responseJson.results[0].formatted_address,
          ).replace(/"/g, ''),
        });
      });
  };
  render() {
    const {region} = this.state;

    return (
      <View style={styles.map}>
        {/* <MapView
         ref={(ref) => (this.mapView = ref)}
         onMapReady={() =>
         this.goToInitialLocation(this.state.region)}
         style={styles.map}
         initialRegion={this.state.region}
         onRegionChangeComplete={this.onRegionChange}
       /> */}
        <View style={styles.panel}>
          <View
            style={[
              styles.panelHeader,
              this.state.listViewDisplayed ? styles.panelFill : styles.panel,
            ]}>
            <GooglePlacesAutocomplete
              currentLocation={false}
              enableHighAccuracyLocation={true}
              ref={c => (this.searchText = c)}
              placeholder="Search for a location"
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={'search'}
              listViewDisplayed={this.state.listViewDisplayed}
              fetchDetails={true}
              renderDescription={row => row.description}
              enablePoweredByContainer={false}
              listUnderlayColor="lightgrey"
              onPress={(data, details) => {
                this.setState({
                  listViewDisplayed: false,
                  address: data.description,
                  currentLat: details.geometry.location.lat,
                  currentLng: details.geometry.location.lng,
                  region: {
                    latitudeDelta,
                    longitudeDelta,
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  },
                });
                this.searchText.setAddressText('');
                this.goToInitialLocation(this.state.region);
              }}
              textInputProps={{
                onChangeText: text => {
                  console.log(text);
                  this.setState({listViewDisplayed: true});
                },
              }}
              getDefaultValue={() => {
                return ''; // text input default value
              }}
              query={{
                key: 'AIzaSyBnBxu53CwuTMYnbTxtFq2XDUvB94Ao_y8',
                language: 'en', // language of the results
                components: 'country:ind',
              }}
              styles={{
                description: {
                  fontFamily: 'Calibri',
                  color: 'black',
                  fontSize: 12,
                },
                predefinedPlacesDescription: {
                  color: 'black',
                },
                listView: {
                  position: 'absolute',
                  marginTop: 44,
                  backgroundColor: 'white',
                  borderBottomEndRadius: 15,
                  elevation: 2,
                },
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              GooglePlacesSearchQuery={{
                rankby: 'distance',
                types: 'building',
              }}
              filterReverseGeocodingByTypes={[
                'locality',
                'administrative_area_level_3',
              ]}
              debounce={200}
            />
          </View>
        </View>

        <KeyboardAvoidingView style={styles.footer}>
          <View style={{flexDirection: 'row', margin: 10}}>
            {/* <Icon
              name="ios-home"
              size={24}
              color="#DC2B6B"
              type="ionicon"
              style={{
                padding: 10,
              }}
            /> */}
            <Text style={styles.addressText}>Address</Text>
          </View>
          <TextInput
            multiline={true}
            clearButtonMode="while-editing"
            style={{
              marginBottom: 5,
              width: '90%',
              minHeight: 70,
              alignSelf: 'center',
              borderColor: 'lightgrey',
              borderWidth: 1.5,
              fontSize: 12,
              borderRadius: 5,
              flex: 0.5,
              alignContent: 'flex-start',
              textAlignVertical: 'top',
              fontFamily: 'Calibri',
            }}
            onChangeText={text => this.setState({address: text})}
            value={this.state.address}
          />
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: '30%',
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: 'lightgreen',
              borderRadius: 16.5,
              shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: {height: 1, width: 1}, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
              elevation: 2, // Android
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Calibri',
                fontSize: 12,
                paddingVertical: 4,
              }}>
              SAVE
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  addressText: {
    color: 'black',
    margin: 3,
    fontFamily: 'Calibri',
  },
  footer: {
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '30%',
  },
  panelFill: {
    position: 'absolute',
    top: 0,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
  },
  panel: {
    position: 'absolute',
    top: 0,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
    flex: 1,
  },
  panelHeader: {
    //add custom header
  },
});
