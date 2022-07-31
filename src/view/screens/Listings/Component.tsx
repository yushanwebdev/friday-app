import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {GLOBAL} from '../../styles/global';
import {CTEXT} from '../../elements/custom';

import {Props} from './index';
import {BUTTON_DEFAULT} from '../../elements/buttons';
import {Navigation} from 'react-native-navigation';
import ProductDisplay from '../../elements/productDisplay';

const Listings: React.FC<Props> = (props: Props) => {
  const [result, setResult] = React.useState<any>(null);

  React.useEffect(() => {
    const getAPIData = async () => {
      const response = await props.search(props.query);
      setResult(response);
    };

    getAPIData();
  }, []);

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView
        style={GLOBAL.LAYOUT.pageContainer}
        contentContainerStyle={{
          ...GLOBAL.LAYOUT.scrollViewInner,
          ...GLOBAL.LAYOUT.listing,
        }}>
        {result &&
          result.map((item: any, i: number) => (
            <ProductDisplay
              key={i}
              width="48%"
              title={item.Title}
              img={item.Poster}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Listings;
