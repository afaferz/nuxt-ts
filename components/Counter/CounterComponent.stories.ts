import CounterComponent from './CounterComponent.vue'
import { storyFactory, makeStorie } from '~/.storybook/helpers'

const optionsConfig = {
    title: 'Example/CounterComponent',
    component: CounterComponent,
}
const anotherConfigs = { excludeStories: /.*Data$/ }
const meta = storyFactory<typeof CounterComponent>({ options: optionsConfig, ...anotherConfigs })
export default meta;

// // Template to Stories
const template = '<CounterComponent />'
export const Default = makeStorie<typeof CounterComponent>(CounterComponent, template)
Default.parameters = {
    jest: 'CounterComponent.spec.ts'
}
