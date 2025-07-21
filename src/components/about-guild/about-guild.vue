<template>
    <div class="about-guild-wrapper">
        <div class="about-text-wrapper">
            <h2>{{aboutTfabt}}</h2>
            <p class="guild-description">{{ guildDescription }}</p>
            <p class="guild-extra-info">{{ extraInformation }}</p>
        </div>
        <div class="guild-cozy-image">
            <img 
            class="cozy-image"
            alt="Cozy Guild Image"
            src="../../assets/GuildCozyImage.png"
            />
        </div>
    </div>
</template>

<script lang="ts">

export default {

    data() {
        return {
            aboutTfabt: "About TF&BT",
            guildDescription: "TF&BT is a Christian and family-friendly guild focused on fellowship and playing together to succeed",
            extraInformation: "We are located on the Dalaran server, happily accepting both Horde and Alliance players"
        }
    }
}
</script>

<style scoped>

.about-guild-wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;

    .about-text-wrapper {
        display: flex;
        flex-direction: column;
    }

    .guild-cozy-image {
        .cozy-image {
            width: 200px;
            height: 200px;
        }
    }
}


</style>

