import {configureStore} from '@reduxjs/toolkit';
import MainStore from './main.store';

export const store = configureStore({
  reducer: {
    main: MainStore,
  },
});
