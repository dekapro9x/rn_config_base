//Library:
import React from 'react';
import {View} from 'react-native';

//Component:
import PolicyHTML from './items/PolicyHTML';
import {AppHeader} from '../../elements/AppHeader';

export default function Policy() {
  return (
    <>
      <AppHeader title={'POLICY'} leftGoBack={false}></AppHeader>
      <PolicyHTML />
    </>
  );
}
