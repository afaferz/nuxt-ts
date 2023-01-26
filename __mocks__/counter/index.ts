import { ECounterActions, ECounterMutations } from "../../store/counter/types"
import * as CounterModuleStore from '../../store/counter'

const counterModule = {
    namespaced: true,
    ...CounterModuleStore,
    actions: {
        [ECounterActions.ASYNC_INCREMENT_COUNTER]: jest.fn(),
        [ECounterActions.ASYNC_DECREMENT_COUNTER]: jest.fn(),
    },
    mutations: {
        [ECounterMutations.INCREMENT_COUNTER]: jest.fn(),
        [ECounterMutations.DECREMENT_COUNTER]: jest.fn(),
    },
}

export default counterModule
