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

const searchTerm = {
  searchTerm: 'Earphones',
};
export const SearchContext = React.createContext(searchTerm);

const Search: React.FC<Props> = props => {
  const [recentSearches, setRecentSearches] = React.useState<string[]>([]);

  const onSubmit: onSubmitEvent = ({nativeEvent}) => {
    setRecentSearches([...recentSearches, nativeEvent.text]);
  };

  React.useEffect(() => {
    async function thatAPICall() {
      setRecentSearches(['Speakers']);
    }

    if (!recentSearches.length) thatAPICall();

    console.log('render!');

    return () => console.log('unmounting...');
  }, [recentSearches]);

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <SearchContext.Provider value={searchTerm}>
        <View style={GLOBAL.LAYOUT.pageContainer}>
          <Header onSubmit={onSubmit} />
          <View>
            <SectionTitle title="Recent Searches" />
            {recentSearches.map((search, i) => (
              <CTEXT key={`search_${i}`}>{search}</CTEXT>
            ))}
          </View>
        </View>
      </SearchContext.Provider>
    </SafeAreaView>
  );
};

export default Search;
