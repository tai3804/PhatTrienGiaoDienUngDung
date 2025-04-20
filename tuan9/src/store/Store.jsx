// store.js
import { configureStore } from '@reduxjs/toolkit';

import counterRedux from '../1_counter_app/hook/HookCounterReducer';
import counterToolkit  from '../1_counter_app/toolkit/CounterSlice';

import ToDoRedux from '../2_to_do_list/hook/ToDoReducer';
import ToDoToolkit from '../2_to_do_list/toolkit/ToDoSlice';

import  ThemeReducer from '../3_toggle_theme/hook/ThemeReducer';
import ThemeToolkit from '../3_toggle_theme/toolkit/ThemeSlice';

const store = configureStore({
  reducer: {
    counterReducer: counterRedux,  // Thực hiện với reducer thông thường
    counterToolkit: counterToolkit, // Thực hiện với reducer toolkit
    toDoRedux: ToDoRedux,
    toDoToolkit: ToDoToolkit, // Thực hiện với reducer toolkit
    themeRedux: ThemeReducer,
    themeToolkit: ThemeToolkit, // Thực hiện với reducer toolkit
  },
});

export default store;
