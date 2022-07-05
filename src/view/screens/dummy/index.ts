import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';

import Component from './Component';
import {RootState} from '../../../../shared/redux/reducers';
import {NavigationComponentProps} from 'react-native-navigation';

export interface Props extends NavigationComponentProps {
  dummyText: string;
  componentId: string;
}

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({});

const dummyContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default dummyContainer;
