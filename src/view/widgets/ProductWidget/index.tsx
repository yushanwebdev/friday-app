import * as React from 'react';
import {View} from 'react-native';
import {SCREENS} from '../../../constants/screen';
import ROUTER from '../../../navigators/router';
import {Card} from '../../elements/layout';
import ProductDisplay from '../../elements/productDisplay';
import SectionTitle from '../../elements/section/title';
import {GLOBAL} from '../../styles/global';

export interface Props {
  componentId: string;
}

const ProductWidget = ({componentId}: Props) => {
  const onClick = () => {
    ROUTER.push({componentId}, SCREENS.Listings);
  };

  return (
    <Card>
      <SectionTitle title="Best Selling" subTitle="See all" onClick={onClick} />
      <View style={GLOBAL.LAYOUT.productWidgetInner}>
        <ProductDisplay width="48%" />
        <ProductDisplay width="48%" />
      </View>
    </Card>
  );
};

export default ProductWidget;
