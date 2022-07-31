/**
 * Thunks are a great place for application business logic
 */
import {AppDispatch} from '../store';
import {searchInitiated} from '../actions/search';
import {SearchState} from '../types/stores/search';
import {SearchService} from '../../services/search';

export const searchRequested =
  (data: SearchState) => async (dispatch: AppDispatch) => {
    dispatch(searchInitiated(data));

    try {
      const result = await SearchService.getData(data.query);

      return result.Search;
    } catch (error: any) {
      console.log('error', error.message);

      return error.message;
    }
  };
