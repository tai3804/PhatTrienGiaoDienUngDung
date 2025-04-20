import React from 'react'
import { Provider } from 'react-redux'

import store from "../store/Store"

import { CounterProvider } from "../1_counter_app/hook/HookCounterContext"
import { TodoProvider } from '../2_to_do_list/hook/ToDoContext'

export default function RootProvider({children}) {
    return (
        <Provider store={store}>
            <CounterProvider>
                <TodoProvider>
                    {children}
                </TodoProvider>
            </CounterProvider>
        </Provider>
    )
}
