import {Middleware} from 'redux';

export const logger: Middleware = store => next => action => {
  console.log('Initial State', store.getState());
  let result = next(action);

  console.log('Next State', store.getState());

  return result;
};

export const crashReporter: Middleware = store => next => action => {
  console.log('>>> Crash Reporter', action.type);

  try {
    return next(action);
  } catch (error) {
    console.error('err', error);
    // Push this to Error Logging dashboard

    throw error;
  }
};
