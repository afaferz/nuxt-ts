import CounterComponent from '../CounterComponent.vue'
import { makeShallowMountComponent } from '~/utils/PageBuilder.utils'
import CounterModuleStoreMock from '~/__mocks__/counter'
import { WrapperEl } from '~/types/VueTypes'

// const localVue = createLocalVue()
// localVue.use(Vuex)

describe('Test Counter Component', () => {
    // let store: Store<State>;
    // let state;
    // let mutations: MutationTree<State>;
    // let actions: ActionTree<State, State>;
    let wrapperEl: WrapperEl
    beforeEach(() => {
        // state = {
        //     count: 0
        // }
        // mutations = {
        //     [ECounterMutations.DECREMENT_COUNTER]: jest.fn(),
        //     [ECounterMutations.INCREMENT_COUNTER]: jest.fn(),
        // }
        // actions = {
        //     [ECounterActions.ASYNC_DECREMENT_COUNTER]: jest.fn(),
        //     [ECounterActions.ASYNC_INCREMENT_COUNTER]: jest.fn(),
        // }
        // store = new Vuex.Store({
        //     modules: {
        //         counter: {
        //             namespaced: true,
        //             state,
        //             getters: gettersCounter,
        //             mutations,
        //             actions
        //         }
        //     }
        // })
        wrapperEl = makeShallowMountComponent(CounterComponent, {})()
    })

    afterEach(() => {
        wrapperEl.destroy()
    })

    it('should be mounted', () => {
        expect(wrapperEl.vm).toBeTruthy()
    })
    it('should decrement the counter', async () => {
        const buttonDecrement = wrapperEl.find('[data-test="button-decrement"]')
        buttonDecrement.vm.$emit('click')
        await wrapperEl.vm.$nextTick()
        expect(
            CounterModuleStoreMock.mutations.DECREMENT_COUNTER
        ).toHaveBeenCalled()
    })
    it('should decrement the counter async ', async () => {
        const buttonDecrement = wrapperEl.find(
            '[data-test="button-decrement-async"]'
        )
        buttonDecrement.vm.$emit('click')
        await wrapperEl.vm.$nextTick()
        expect(
            CounterModuleStoreMock.actions.ASYNC_DECREMENT_COUNTER
        ).toHaveBeenCalled()
    })
    it('should increment the counter', async () => {
        const buttonIncrement = wrapperEl.find('[data-test="button-increment"]')
        buttonIncrement.vm.$emit('click')
        await wrapperEl.vm.$nextTick()
        expect(
            CounterModuleStoreMock.mutations.INCREMENT_COUNTER
        ).toHaveBeenCalled()
    })
    it('should increment the counter async ', async () => {
        const buttonIncrementAsync = wrapperEl.find(
            '[data-test="button-increment-async"]'
        )
        buttonIncrementAsync.vm.$emit('click')
        await wrapperEl.vm.$nextTick()
        expect(
            CounterModuleStoreMock.actions.ASYNC_INCREMENT_COUNTER
        ).toHaveBeenCalled()
    })
})
