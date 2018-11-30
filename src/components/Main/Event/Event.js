import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right,Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment-jalaali';
import * as Common from './../../Common';



export default class Event extends Component {

    constructor(props) {
        super(props);
    }

   

    render() {
        const { event } = this.props;
        console.log(`product page , product : ${event}`);
        return (
          <Card style={{ flex: 0,backgroundColor:Common.BRAND_COLOR_1 }}>
    
            <CardItem>
              <Left />
              <Right>
                <Thumbnail source={{ uri: event.ImgUrl }} />
                <Body>
                  <Text style={{ fontFamily:'IRANSansMobile',fontSize:13 }}>{ event.title }</Text>
                  {/* <Text note>{ moment(product.updated_at).format('jYYYY/jM/jD') }</Text> */}
                  <Text note>{ moment(event.updated_at).fromNow() }</Text>
                </Body>
              </Right>
            </CardItem>
    
            <CardItem cardBody>
                <Image
                  source={{ uri: event.ImgUrl }}
                  style={{ height: 200, width: null,flex: 1 }}
                />
            </CardItem>
    
            <CardItem>
                <Text  style={{ fontFamily:'IRANSansMobile',fontSize:14 }}>
                  { event.Description }
                </Text>
            </CardItem>
    
            <CardItem>
              <Left>
                <Button style={{ height:30,backgroundColor:Common.BRAND_COLOR_1 }}  rounded>
                  {/* <Text style={{ fontFamily:'IRANSansMobile',fontSize:13 }}>مشاهده </Text> */}
                  <Icon name="eye" size={40} color={Common.BRAND_COLOR_1} />
                </Button>
              </Left>
              <Right />
            </CardItem>
    
          </Card>
        );
      }
    }
    