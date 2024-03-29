import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    interface State {
        count: number
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $store: Store<any>
    }

    interface Context {
        $store: Store<any>
    }
}
