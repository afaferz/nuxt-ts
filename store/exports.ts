import * as CounterModule from './counter'
import * as IndexModule from '.'

export const store = {
    ...IndexModule,
    modules: {
        counter: {
            namespaced: true,
            ...CounterModule,
        },
    },
}
