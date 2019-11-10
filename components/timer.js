import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TimerText extends Component {
  render() {
    const { temprature, ...rest } = this.props;

    return (
      <View {...rest}>
        <View style={styles.timerContainer}>
          <Text style={styles.time}>{temprature}&deg; C</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  time: {
    color: 'white',
    fontSize: 55,
    fontWeight: '300'
  },
  span: {
    marginLeft: 10
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 5
  }
});
