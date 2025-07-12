<template>
    <div class="about-guild-wrapper">
        <div class="about-text-wrapper">
            <h2>{{aboutTfabt}}</h2>
            <p class="guild-description">{{ guildDescription }}</p>
        </div>
    </div>
</template>

<script lang="ts">

export default {

    data() {
        return {
            aboutTfabt: "About TF&BT",
            guildDescription: "TF&BT is a Christian and family-friendly guild focused on fellowship and playing together to succeed."
        }
    }
}
</script>

<style scoped>

.about-guild-wrapper {
    display: flex;
    flex-direction: row;
}


</style>

