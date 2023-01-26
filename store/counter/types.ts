import { state } from '.'

export enum ECounterMutations {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    DECREMENT_COUNTER = 'DECREMENT_COUNTER',
}

export enum ECounterActions {
    ASYNC_INCREMENT_COUNTER = 'ASYNC_INCREMENT_COUNTER',
    ASYNC_DECREMENT_COUNTER = 'ASYNC_DECREMENT_COUNTER',
}

export enum ECounterGetters {
    GET_COUNTER = 'GET_COUNTER',
}

export type State = ReturnType<typeof state>
