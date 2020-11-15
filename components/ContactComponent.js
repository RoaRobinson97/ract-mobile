import React, { Component } from 'react';
import { View, FlatList, Text} from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    };

    render(){

    return(
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>                
        <Card title="Contact Information">
            <Text style={{  padding: 10, lineHeight:30 }}>
                121, Clear Water Bay Road{"\n"}
                Clear Water Bay, Kowloon{"\n"}
                HONG KONG{"\n"}
                Tel: +852 1234 5678{"\n"}
                Fax: +852 8765 4321{"\n"}
                Email:confusion@food.net{"\n"}
            </Text>
        </Card>
         </Animatable.View>
    )

    }

}

export default Contact