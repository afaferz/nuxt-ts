import { GetterTree, ActionTree, MutationTree } from 'vuex'

enum EGetters {
    GET_TITLE = 'GET_TITLE',
}

enum EMutations {
    SET_TITLE = 'SET_TITLE',
}

export const state = () => ({
    title: 'Hello MOVA',
})

export type State = ReturnType<typeof state>

export const getters: GetterTree<State, State> = {
    [EGetters.GET_TITLE]: state => state.title,
}

export const mutations: MutationTree<State> = {
    [EMutations.SET_TITLE]: (state, newName: string) => (state.title = newName),
}

export const actions: ActionTree<State, State> = {
    // nuxtServerInit ({ commit }, _context: Context) {
    //     commit(MutationType.CHANGE_DESCRIPTION, "I'm defined by server side")
    //   }
}



// export const store: Store<unknown> = new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions
// });

// export default store;
