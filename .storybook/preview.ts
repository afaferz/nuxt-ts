import {
    withVuetify,
    withThemeProvider,
} from '@socheatsok78/storybook-addon-vuetify/dist/decorators'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { options } from '../plugins/vuetify.plugin'
import { withTests } from '@storybook/addon-jest'
import results from '../.jest-test-results.json'

Vue.use(Vuetify)
const vuetify = new Vuetify(options)

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'dark',
        dark: true,
    },
}

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    (story: any, context: any) => {
        const wrapped = story(context)
        return Vue.extend({
            vuetify,
            components: { wrapped },
            props: {
                dark: {
                    type: Boolean,
                    default: context.args.dark,
                },
            },
            watch: {
                dark: {
                    immediate: true,
                    handler(val) {
                        this.$vuetify.theme.dark = val
                    },
                },
            },
            template: `
                <v-app>
                    <v-container fluid>
                        <wrapped />
                    </v-container>
                </v-app>
            `,
        })
    },
    withVuetify,
    withThemeProvider,
    withTests({ results, filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$' }),
]
