import * as React from 'react';
import {
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {CTEXT} from '../../elements/custom';
import SectionTitle from '../../elements/section/title';
import {GLOBAL} from '../../styles/global';
import Header from '../../widgets/header';

type onSubmitEvent = ({
  nativeEvent,
}: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;

interface Props {
  componentId: string;
}

interface State {
  recentSearches: string[];
}

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      recentSearches: [],
    };
  }

  onSubmit: onSubmitEvent = ({nativeEvent}) => {
    console.log('>>> nativeEvent.text', nativeEvent.text);
    const {recentSearches} = this.state;
    recentSearches.push(nativeEvent.text);
    this.setState({recentSearches}, () => {
      console.log('recentSearches', this.state.recentSearches);
    });
  };

  render() {
    const {recentSearches} = this.state;

    return (
      <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
        <View style={GLOBAL.LAYOUT.pageContainer}>
          <Header onSubmit={this.onSubmit} />
          <View>
            <SectionTitle title="Recent Searches" />
            {recentSearches.map((search, i) => (
              <CTEXT key={`search_${i}`}>{search}</CTEXT>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Search;
