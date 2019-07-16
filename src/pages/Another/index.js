import React, { Component } from 'react';
import { Button } from 'react-native';

export default class Another extends Component {

    static navigationOptions = {
        drawerLabel: 'ANOTHER'
      };
    
      render() {
        return (
          <Button
            title="ANOTHER"
          />
        );
      }
}