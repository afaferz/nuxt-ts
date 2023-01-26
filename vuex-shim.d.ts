import { Store } from 'vuex'

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $store: Store<any>
    }

    interface Context {
        $store: Store<any>
    }
}
