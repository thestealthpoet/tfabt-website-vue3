<template>
    <h2>Test test</h2>
    <img src="../../assets/shield_emblem_transparent.png" />
</template>

<script lang="ts">

export default {
    data() {
        return {
            routeToGuildEmblem: '../../assets/shield_emblem_transparent.png'
        }
    },

    methods: {
        saySomething() {
            console.log(this.routeToGuildEmblem)
        }
    }


}


</script>

<style scoped>

</style>
