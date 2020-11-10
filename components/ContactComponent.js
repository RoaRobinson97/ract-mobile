import React, { Component } from 'react';
import { View, FlatList, Text} from 'react-native';
import { ListItem, Card } from 'react-native-elements';

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
    )

    }

}

export default Contact