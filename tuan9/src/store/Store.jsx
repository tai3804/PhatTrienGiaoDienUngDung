// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterRedux from '../1_counter_app/hook/HookCounterReducer';
import counterToolkit  from '../1_counter_app/toolkit/CounterSlice';
const store = configureStore({
  reducer: {
    counterReducer: counterRedux,  // Thực hiện với reducer thông thường
    counterToolkit: counterToolkit, // Thực hiện với reducer toolkit
  },
});

export default store;
