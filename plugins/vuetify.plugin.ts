import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify)

const themeDark = {
    primary: colors.blue.base,
};
const themeLight = {
    primary: colors.purple.base,
}
export const options = {
    customVariables: ['~/assets/variables.scss'],
    theme: {
        themes: {
            light: themeLight,
            dark: themeDark,
        }
    }
}
const vuetify = new Vuetify(options)

export default vuetify
