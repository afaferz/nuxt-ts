import type { Meta, StoryObj } from '@storybook/vue'
import store from '../__mocks__/store.storybook'
import Vue, { VueConstructor } from 'vue'

export function storyFactory<T>({
    options,
    ...addictional
}: OptionsParameters): Meta<T> {
    const { title, component, args, description } = options
    const preConfig = {
        title,
        component,
        args: {
            dark: true,
            ...args,
        },
        argTypes: {
            dark: {
                control: { type: 'boolean' },
            },
        },
        parameters: {
            docs: {
                description: {
                    component: description,
                },
            },
        },
    }
    const addictionalConfig = { ...addictional }
    const config = { ...preConfig, ...addictionalConfig } as Meta<T>
    return config
}

export function makeStorie<T>(
    component: VueConstructor,
    template: string
): StoryObj<T> {
    // Normalize the template
    let componentName: string
    const closedComponentTemplate = template.split(/<\//gi)
    if (closedComponentTemplate.length > 1) {
        componentName = closedComponentTemplate[0]
            .trim()
            .replace(/[^a-z0-9]/gi, '')
    } else if (closedComponentTemplate)
        componentName = template.trim().replace(/[^a-z0-9]/gi, '')
    else throw new Error('Invalid template component')

    // Define component
    Vue.component(componentName, component)
    return {
        render: (args, { argTypes }) => ({
            props: Object.keys(argTypes),
            components: { component },
            template,
            store,
        }),
        args: {},
    }
}

type Options = {
    title: string
    component: VueConstructor
    description?: string
    [key: string]: any
}

type OptionsParameters = { options: Options; addictional?: any[] }
