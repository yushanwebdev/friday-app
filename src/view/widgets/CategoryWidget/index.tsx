import * as React from 'react';
import {View} from 'react-native';
import {BUTTON_CATEGORY} from '../../elements/buttons';
import {CTEXT} from '../../elements/custom';
import {Carousel} from '../../elements/layout';
import SectionTitle from '../../elements/section/title';
import {GLOBAL} from '../../styles/global';

interface Props {
  data: any[];
}

const CategoryWidget: React.FC<Props> = props => {
  const renderItem = ({item}: any) => {
    return (
      <View style={GLOBAL.WIDGETS.categoryWidgetItem}>
        <BUTTON_CATEGORY
          icon={item.icon}
          onClick={() => {}}
          style={GLOBAL.WIDGETS.categoryWidgetIcon}
        />
        <CTEXT style={GLOBAL.TEXT.body}>{item.name}</CTEXT>
      </View>
    );
  };

  return (
    <View>
      <SectionTitle title="Categories" />
      <Carousel data={props.data} item={renderItem} />
    </View>
  );
};

export default CategoryWidget;
