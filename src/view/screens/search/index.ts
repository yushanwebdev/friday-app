import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../../../shared/redux/reducers';
import Component from './Component';

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default SearchContainer;
