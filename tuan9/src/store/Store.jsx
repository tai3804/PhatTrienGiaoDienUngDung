// store.js
import { configureStore } from '@reduxjs/toolkit';

import counterRedux from '../1_counter_app/hook/HookCounterReducer';
import counterToolkit  from '../1_counter_app/toolkit/CounterSlice';

import ToDoRedux from '../2_to_do_list/hook/ToDoReducer';
import ToDoToolkit from '../2_to_do_list/toolkit/ToDoSlice';

const store = configureStore({
  reducer: {
    counterReducer: counterRedux,  // Thực hiện với reducer thông thường
    counterToolkit: counterToolkit, // Thực hiện với reducer toolkit
    toDoRedux: ToDoRedux,
    toDoToolkit: ToDoToolkit, // Thực hiện với reducer toolkit
  },
});

export default store;
