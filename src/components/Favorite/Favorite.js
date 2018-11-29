import React, { Component } from 'react';

import { Container,
         Header,
         Content,
         List,
         ListItem,
         Text,
         Icon,
         Left,
         Body,
         Right,
         Switch,
         Button,
         CheckBox,
         Thumbnail } from 'native-base';

import styles from './Favorite.css';      
import { Image, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as OHApi from './../OHApi';

export default class Favorite extends Component {
  
  constructor(props) {
      super(props);
      this.state = { 
          favoriteList : '',
          userToken : ''
      };
  }

  async componentWillMount() {
     try {
     AsyncStorage.getItem('User_Token').then((userToken) => {
      console.log('Favorite_Component getUserToken AsyncStorage : ');
      console.log(userToken);
      if (userToken !== null) {
        this.setState({ userToken: userToken });
      } else {
         throw { message : 'شماره تلفن را کامل وارد نمائید' };
      }
    }).catch((error) => {
      console.log('Favorite_Component catch AsyncStorage userToken : ');
      console.log(error);
      throw error;
    });
     //---------
     const list = await OHApi.getFavoriteList();
     console.log('favoriteList : ');
     console.log(favoriteList);

     this.setState({ favoriteList : list });
     } catch(error) {
        console.log('favorite form : ');
        console.log(error);

        showMessage({ description: error.message, message: "بروز مشکل", type: "danger" }) 
     }
  }

  
  // _getFavoriteList() {
  //   return (

  //   );
  // }
  
  render() {
    return (
      <Container style={styles.container}>

        <Header>
            <Left>
                 <Icon active name="md-bookmark" style={styles.headerIcon} />
            </Left>
            {/* <Body /> */}
            <Right>
                <Text style={styles.headerText}>علاقه مندیها</Text>
            </Right>
        </Header>

        <Content style={styles.content}>

          <ListItem icon>
            <Left>
              {/* <Button> */}
                {/* <Icon active name="briefcase" /> */}
                <Switch onValueChange={ (value) => this.setState({ toggled_1: value }) } value={ this.state.toggled_1 } />
                {/* <Image source={{uri:'https://s.cafebazaar.ir/1/icons/net.s.n.d.kasbokar.hadafmand_512x512.png'}} /> */}
              {/* </Button> */}
            </Left>
            <Body style={styles.body}>
              <Text style={styles.text}>کسب و کار</Text>
            </Body>
            <Right>
              <Thumbnail small source={{uri: 'https://s.cafebazaar.ir/1/icons/net.s.n.d.kasbokar.hadafmand_512x512.png'}} />
                 {/* <CheckBox checked={true} /> */}
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              {/* <Button> */}
                {/* <Icon active name="briefcase" /> */}
                <Switch onValueChange={ (value) => this.setState({ toggled_2: value }) } value={ this.state.toggled_2 } />
                {/* <Image source={{uri:'https://s.cafebazaar.ir/1/icons/net.s.n.d.kasbokar.hadafmand_512x512.png'}} /> */}
              {/* </Button> */}
            </Left>
            <Body style={styles.body}>
              <Text style={styles.text}>اقتصاد</Text>
            </Body>
            <Right>
              <Thumbnail small source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa223yYFShSxyM57Egr2MsykYn1W6n9xRGB6bJE7KIQgauHDVe'}} />
                 {/* <CheckBox checked={true} /> */}
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              {/* <Button> */}
                {/* <Icon active name="briefcase" /> */}
                {/* <Image source={{uri:'https://s.cafebazaar.ir/1/icons/net.s.n.d.kasbokar.hadafmand_512x512.png'}} /> */}
              {/* </Button> */}
              <Switch onValueChange={ (value) => this.setState({ toggled_3: value }) } value={ this.state.toggled_3 } />
            </Left>
            <Body style={styles.body}>
              <Text style={styles.text}>فن آوری</Text>
            </Body>
            <Right>
            <Thumbnail small source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvGfqByqyhoz4T3XBjk5PXawg8_MAmIN6Myns8bCSKfDPEXn1X4w'}} />
                 {/* <CheckBox checked={true} /> */}
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              {/* <Button> */}
                {/* <Icon active name="briefcase" /> */}
                <Switch onValueChange={ (value) => this.setState({ toggled_4: value }) } value={ this.state.toggled_4 } />
                {/* <Image source={{uri:'https://s.cafebazaar.ir/1/icons/net.s.n.d.kasbokar.hadafmand_512x512.png'}} /> */}
              {/* </Button> */}
            </Left>
            <Body style={styles.body}>
              <Text style={styles.text}>مدیریت</Text>
            </Body>
            <Right>
              <Thumbnail small source={{uri: 'data:image/jpeg;base64,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'}} />
                 {/* <CheckBox checked={true} /> */}
            </Right>
          </ListItem>


           <ListItem icon>
            <Left>
              {/* <Button> */}
                {/* <Icon active name="briefcase" /> */}
                {/* <Image source={{uri:'https://s.cafebazaar.ir/1/icons/net.s.n.d.kasbokar.hadafmand_512x512.png'}} /> */}
              {/* </Button> */}
              <Switch onValueChange={ (value) => this.setState({ toggled_5: value }) } value={ this.state.toggled_5 } />
            </Left>
            <Body style={styles.body}>
              <Text style={styles.text}>دانش روز</Text>
            </Body>
            <Right>
              <Thumbnail small source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNFV1g5hpBEeajwsA2jWYdnJ1damTifgcK6Xpxf2jXCzkz1u4og'}} />
                 {/* <CheckBox checked={true} /> */}
            </Right>
          </ListItem>


          <ListItem icon>
            <Left>
              {/* <Button> */}
                {/* <Icon active name="briefcase" /> */}
                {/* <Image source={{uri:'https://s.cafebazaar.ir/1/icons/net.s.n.d.kasbokar.hadafmand_512x512.png'}} /> */}
              {/* </Button> */}
               <Switch onValueChange={ (value) => this.setState({ toggled_6: value }) } value={ this.state.toggled_6 } />
            </Left>
            <Body style={styles.body}>
              <Text style={styles.text}>فنی و مهندسی</Text>
            </Body>
            <Right>
              
                              <Thumbnail small source={{uri: 'data:image/jpeg;base64,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'}} />

                 {/* <CheckBox checked={true} /> */}
            </Right>
          </ListItem>
          
        </Content>

        <Button full>
            <Text style={styles.buttonText} onPress={ ()=> Actions.replace('tabbar') }>ادامه</Text>
          </Button>
      </Container>
    );
  }
}