<template>
    <div class="guild-emblem-wrapper">
        <img class="guild-emblem" alt="Guild Emblem" src="../../assets/TFABT_Shield_Small_transparent.png" />
        <div class="guild-name-wrapper">
            <h1 class="guild-name">{{ guildName }}</h1>
            <h2 class="guild-subtitle">{{ guildSubtitle }}</h2>
        </div>
    </div>
</template>

<script lang="ts">

export default {

    data() {
        return {
            guildName: "The Fish and Bread Trick",
            guildSubtitle: "A Christian WoW Guild on Dalaran"
        }
    }
}
</script>

<style scoped>
.guild-emblem-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    .guild-emblem {
        width: 180px;
        height: 200px;
    }

    .guild-name-wrapper {
        display: flex;
        flex-direction: column;

        .guild-name {
            font-family: 'Cinzel Decorative', serif;
            font-size: 2.5rem;
            color: #e5c88c;
            text-shadow: 2px 2px 4px #000;
            margin: 0;
        }

        .guild-subtitle {
            font-family: 'EB Garamond', serif;
            font-weight: 700;
            color: #f7f0e3
        }
    }

}
</style>
