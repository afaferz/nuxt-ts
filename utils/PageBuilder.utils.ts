import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import { VueConstructor } from 'vue'
import type { Store } from 'vuex'
import { State } from '~/store'
import store from '~/__mocks__/store'
import { WrapperEl } from '~/types/VueTypes'

type Options = {
    store?: Store<State>
    stubs?: any
}

const localVue = createLocalVue()

// Mount component without stubs
export function makeMountComponent<T extends Vue>(
    component: VueConstructor,
    options: Options
) {
    return (): WrapperEl => {
        return mount<T>(component, { ...options, localVue, store })
    }
}

// Mount page without stubs
export function makeMountPage<T extends Vue>(
    layout: VueConstructor,
    page: VueConstructor,
    options: Options
) {
    return (): WrapperEl => {
        const mountLayout = mount<T>(layout, { ...options, localVue, store })
        const mountedPage = mountLayout.findComponent(page)
        return mountedPage as WrapperEl
    }
}

// Shallow Mount component with stubs
export function makeShallowMountComponent<T extends Vue>(
    component: VueConstructor,
    options: Options
) {
    return (): WrapperEl => {
        return shallowMount<T>(component, { ...options, localVue, store })
    }
}

// Shallow Mount page with stubs
export function makeShallowMountPage<T extends Vue>(
    layout: VueConstructor,
    page: VueConstructor,
    options: Options
) {
    return (): WrapperEl => {
        const mountLayout = shallowMount<T>(layout, {
            ...options,
            localVue,
            store,
        })
        const mountedPage = mountLayout.findComponent(page)
        return mountedPage as WrapperEl
    }
}
