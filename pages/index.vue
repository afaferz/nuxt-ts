<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <CounterComponent />
        </v-col>
    </v-row>
</template>

<script lang="ts">
import CounterComponent from '~/components/Counter/CounterComponent.vue'
export default {
    name: 'IndexPage',
    components: {
        CounterComponent,
    },
}
</script>
