import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { ECounterActions, ECounterGetters, ECounterMutations, State } from './types'
import { sleep } from '~/utils/Promise.utils'

export const state = () => ({
    count: 0,
})
export const getters: GetterTree<State, State> = {
    [ECounterGetters.GET_COUNTER]: state => state.count,
}

export const mutations: MutationTree<State> = {
    [ECounterMutations.INCREMENT_COUNTER]: (state, newValue: number) => (state.count += newValue),
    [ECounterMutations.DECREMENT_COUNTER]: (state, newValue: number) => (state.count -= newValue),
}

export const actions: ActionTree<State, State> = {
    async [ECounterActions.ASYNC_INCREMENT_COUNTER]({ commit }, payload) {
        await sleep()
        commit(ECounterMutations.INCREMENT_COUNTER, payload)
    },
    async [ECounterActions.ASYNC_DECREMENT_COUNTER]({ commit }, payload) {
        await sleep()
        commit(ECounterMutations.DECREMENT_COUNTER, payload)
    }
}
