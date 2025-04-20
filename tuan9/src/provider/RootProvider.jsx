import React from 'react'
import { Provider } from 'react-redux'

import { CounterProvider } from "../1_counter_app/hook/HookCounterContext"
import store from "../store/store"


export default function RootProvider({children}) {
    return (
        <Provider store={store}>
            <CounterProvider>
                {children}
            </CounterProvider>
        </Provider>
    )
}
