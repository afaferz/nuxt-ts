import { Wrapper } from "@vue/test-utils";

export type RelaxedVue = Vue & { [key: string]: any }
export type WrapperEl = Wrapper<RelaxedVue, Element>;
