import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right,Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment-jalaali';
import * as Common from './../../Common';
//moment.loadPersian({ dialect : 'persian-modern' });

export default class Video extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    const { video } = this.props;
    console.log(`product page , product : ${video}`);
    return (
      <Card style={{ flex: 0,backgroundColor:Common.BRAND_COLOR_1 }}>

        <CardItem>
          <Left />
          <Right>
            <Thumbnail source={{ uri: video.image }} />
            <Body>
              <Text style={{ fontFamily:'IRANSansMobile',fontSize:13 }}>{ video.title }</Text>
              {/* <Text note>{ moment(product.updated_at).format('jYYYY/jM/jD') }</Text> */}
              <Text note>{ moment(video.updated_at).fromNow() }</Text>
            </Body>
          </Right>
        </CardItem>

        <CardItem cardBody>
            <Image
              source={{ uri: video.image }}
              style={{ height: 200, width: null,flex: 1 }}
            />
        </CardItem>

        <CardItem>
            <Text numberOfLines={3}  style={{ fontFamily:'IRANSansMobile',fontSize:14 }}>
              { video.body }
            </Text>
        </CardItem>

        <CardItem>
          <Left>
            <Button style={{ height:30,backgroundColor:Common.BRAND_COLOR_1 }} onPress={ ()=> Actions.push('playVideo',{ video }) } rounded>
              {/* <Text style={{ fontFamily:'IRANSansMobile',fontSize:13 }}>مشاهده </Text> */}
              <Icon name="play" size={40} color={Common.BRAND_COLOR_1} />
            </Button>
          </Left>
          <Right />
        </CardItem>

      </Card>
    );
  }
}
