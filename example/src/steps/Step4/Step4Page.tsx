import React from 'react';
import {useFlow} from '@bam.tech/flow-navigator';
import {Button, StyleSheet, Text, View} from 'react-native';
import {FlowInfos} from '../FlowInfos';

export const Step4Page = () => {
  const {goPreviousStep} = useFlow();

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Current page: 4</Text>
      <FlowInfos />
      <Button title="back" onPress={goPreviousStep} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 30,
  },
});
