import React from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';

class GooglePlacesInput extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      text: '',
    };
  }

  fetchGoogleData = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.text}&key=AIzaSyBnBxu53CwuTMYnbTxtFq2XDUvB94Ao_y8`,
    )
      .then(response => response.json())
      .then(res => {
        this.setState({data: res.result});
      })
      .catch(error => {
        console.log('error', error.message);
      });
  };

  handleSearch = text => {
    let data = this.state.data.filter(items => { 
      let itemData = items.formatted_address.toUpperCase()
      let textData = text.toUpperCase()
      return item.indexOf(textData) > -1

    })
    this.setState({data,text});
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '5%',
        }}
      />
    );
  };
  render() {
    return (
      <View style={{marginTop: 30}}>
        <View>
          <Text style={{textAlign: 'center', fontSize: 15}}>
            Google Search Address
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            padding: 5,
            //alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 40,
            flexDirection: "row"
          }}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.handleSearch}
            status="info"
            placeholder="Search"
            style={{
              borderColor: '#333',
              backgroundColor: '#fff',
            }}
            textStyle={{color: '#000'}}
          />
          <TouchableOpacity
          style={{backgroundColor:'#ddd'}}
          onPress={this.fetchGoogleData}
          ><Text>search</Text></TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View style={{padding: 15}}>
                <Text>{item.formatted_address}</Text>
              </View>
            )}
            keyExtractor={item => item.formatted_address}
            ItemSeparatorComponent={this.renderSeparator}
          />
         
        </View>
      </View>
    )
  }
}

export default GooglePlacesInput;
