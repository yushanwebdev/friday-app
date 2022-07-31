import * as React from 'react';
import {View} from 'react-native';
import {GLOBAL} from '../styles/global';
import {CIMAGE, CTEXT, CTEXTPRICE} from './custom';

interface Props {
  width?: string;
  title?: string;
  img?: string;
}

const ProductDisplay: React.FC<Props> = (props: Props) => {
  return (
    <View
      style={{
        width: props.width,
      }}>
      <CIMAGE
        style={{width: '100%', height: 288}}
        uri={
          props.img ??
          'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80'
        }
      />
      <CTEXT style={GLOBAL.TEXT.subTitle}>
        {props.title ?? 'BeoPlay Speaker'}
      </CTEXT>
      <CTEXT style={GLOBAL.TEXT.body}>Bang and Olufsen</CTEXT>
      <CTEXTPRICE>$755</CTEXTPRICE>
    </View>
  );
};

export default ProductDisplay;
