import { createStore, applyMiddleware, Store as ReduxStore } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';
import rootSaga from '@/redux/root-sage';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

interface CustomStore extends ReduxStore {
  runSaga?: () => void;
  stopSaga?: () => Promise<void>;
  execSagaTasks?: (isServer: boolean, tasks: (dispatch: any) => void) => Promise<void>;
}

export type RootState = ReturnType<typeof rootReducer>;

function initStore(initialState = {}): CustomStore {
  const store: CustomStore = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

//   store.runSaga = () => {
//     if (store.saga) {
//       return;
//     }
//     store.saga = sagaMiddleware.run(rootSaga);
//   };

//   store.stopSaga = async () => {
//     // Avoid running twice
//     if (!store.saga) {
//       return;
//     }
//     store.dispatch(END);
//     await store.saga.done;
//     store.saga = null;
//   };

//   store.execSagaTasks = async (isServer: boolean, tasks: (dispatch: any) => void) => {
//     store.runSaga();
//     tasks(store.dispatch);
//     await store.stopSaga();
//     if (!isServer) {
//       store.runSaga();
//     }
//   };

  // Initial run
//   store.runSaga();

  return store;
}

export default initStore;
