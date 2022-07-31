import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';

import Component from './Component';
import {RootState} from '../../../../shared/redux/reducers';
import {searchRequested} from '../../../../shared/redux/thunk/search';
import {AppDispatch} from '../../../../shared/redux/store';

interface IStateToProps {}

interface IDispatchToProps {
  search: (query: string) => (dispatch: AppDispatch) => Promise<any>;
}

export interface Props extends IStateToProps, IDispatchToProps {
  componentId: string;
  query: string;
}

const mapStateToProps = (state: RootState): IStateToProps => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
): IDispatchToProps => ({
  search: (query: string) => dispatch(searchRequested({query})),
});

const ListingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default ListingsContainer;
