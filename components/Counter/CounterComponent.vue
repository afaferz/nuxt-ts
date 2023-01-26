<template>
    <div>
        <h1
            class="text-center my-3"
            style="font-size: 7rem"
            data-test="count-value"
        >
            {{ count }}
        </h1>
        <v-text-field
            v-model.number="valueToCount"
            outlined
            label="Set a value"
            color="white"
        />
        <div class="d-flex justify-space-around aling-items-center gap-4">
            <v-btn
                elevation="2"
                class="mx-2"
                data-test="button-decrement"
                @click="decrement(valueToCount)"
            >
                Decrement
                <v-icon>mdi-minus</v-icon>
            </v-btn>
            <v-btn
                elevation="2"
                class="mx-2"
                data-test="button-decrement-async"
                @click="decrementAsync(valueToCount)"
            >
                Decrement Async
                <v-icon>mdi-minus</v-icon>
            </v-btn>
            <v-btn
                elevation="2"
                class="mx-2"
                data-test="button-increment"
                @click="increment(valueToCount)"
            >
                Increment
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn
                elevation="2"
                class="mx-2"
                data-test="button-increment-async"
                @click="incrementAsync(valueToCount)"
            >
                Increment Async
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapMutations } from 'vuex'
import {
    ECounterActions,
    ECounterGetters,
    ECounterMutations,
} from '~/store/counter/types'

export default Vue.extend({
    name: 'CounterComponent',
    data() {
        return {
            valueToCount: 1,
        }
    },
    computed: {
        count(): number {
            return this.$store.getters[`counter/${ECounterGetters.GET_COUNTER}`]
        },
    },
    methods: {
        ...mapMutations({
            increment: `counter/${ECounterMutations.INCREMENT_COUNTER}`,
            decrement: `counter/${ECounterMutations.DECREMENT_COUNTER}`,
        }),
        ...mapActions({
            incrementAsync: `counter/${ECounterActions.ASYNC_INCREMENT_COUNTER}`,
            decrementAsync: `counter/${ECounterActions.ASYNC_DECREMENT_COUNTER}`,
        }),

        async _increment(value: number) {
            await this.incrementAsync(value)
        },
        async _decrement(value: number) {
            await this.decrementAsync(value)
        },
    },
})
</script>

<style></style>
