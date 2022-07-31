import * as React from 'react';
import {
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputSubmitEditingEventData,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import ROUTER from '../../../navigators/router';
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

const searchTerm = {
  searchTerm: 'Knight',
};
export const SearchContext = React.createContext(searchTerm);

const Search: React.FC<Props> = props => {
  const [recentSearches, setRecentSearches] = React.useState<string[]>([]);

  const onSubmit: onSubmitEvent = ({nativeEvent}) => {
    setRecentSearches([...recentSearches, nativeEvent.text]);
  };

  React.useEffect(() => {
    async function thatAPICall() {
      setRecentSearches(['Avengers']);
    }

    if (!recentSearches.length) thatAPICall();
  }, [recentSearches]);

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <SearchContext.Provider value={searchTerm}>
        <View style={GLOBAL.LAYOUT.pageContainer}>
          <Header onSubmit={onSubmit} />
          <View>
            <SectionTitle title="Recent Searches" />
            {recentSearches.map((search, i) => (
              <TouchableOpacity
                onPress={() =>
                  ROUTER.showListingsScreen(
                    {
                      componentId: props.componentId,
                      passProps: {
                        query: search,
                      },
                    },
                    search,
                  )
                }
                key={`search_${i}`}>
                <CTEXT>{search}</CTEXT>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SearchContext.Provider>
    </SafeAreaView>
  );
};

export default Search;
