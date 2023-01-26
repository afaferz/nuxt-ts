import path from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

export default {
    stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-jest',
        '@socheatsok78/storybook-addon-vuetify',
    ],
    framework: '@storybook/vue',
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop: any) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
    features: {
        postcss: false,
    },
    webpackFinal: async (config: any) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/*': path.resolve(__dirname, '../'),
            '~/*': path.resolve(__dirname, '../'),
            vue: 'vue/dist/vue.js',
        }
        config.resolve.plugins = config.resolve.plugins || []
        config.resolve.plugins.push(
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, '../tsconfig.json'),
            })
        )

        config.module.rules.push({
            test: /\.sass$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            indentedSyntax: true,
                        },
                        prependData: "@import '@/sass/variables.sass'",
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        })

        return config
    },
}
