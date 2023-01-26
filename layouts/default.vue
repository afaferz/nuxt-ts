<template>
    <v-app>
        <v-main>
            <v-container class="to-center" fluid>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
}
</script>
<style lang="scss">
.to-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
}
</style>
