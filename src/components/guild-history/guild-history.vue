<template>
    <div class="guild-history-wrapper">
        <div class="our-history-wrapper">
            <h2 class="our-history-text">
                {{ ourHistoryString }}
            </h2>
            <ul class="history-list">
                <li>{{ earlyDays }}</li>
                <li>{{ transitionToDalaran }}</li>
                <li>{{ todayStory }}</li>
            </ul>
        </div>
        <div class="guild-history-image">
            <img class="guild-fellowship" alt="Guild fellowship image" src="../../assets/GuildHistoryImage.png">

        </div>
    </div>

</template>

<script lang="ts">

export default {

    data() {
        return {
            ourHistoryString: "Our History",
            earlyDays: "TF&BT started on Ghostlands during WotLK with a simple goal of seeking fellowship and fun over stress in WoW",
            transitionToDalaran: "During Legion, the guild transferred to Dalaran, and we have grown to be a vibrant community striving to demonstrate Christ in all we do",
            todayStory: "Today we are raiding regularly with 20-30 players with a strong M+ group and lots of good discussion on Discord"
        }
    }

}

</script>

<style scope>
.guild-history-wrapper {
    display: flex;
    flex-direction: row-reverse;
    gap: 15px;
    justify-content: space-evenly;
    align-items: center;

    .our-history-text {
        font-family: 'EB Garamond', serif;
        font-weight: 700;
    }

    .history-list {
        list-style: disc;
        list-style-position: outside;
        max-width: 45ch;
        margin: 0.5rem auto 1.5rem;
        padding-left: 1.25rem;
        text-align: left;

        li {
            font-size: 1.125rem;
            line-height: 1.4;
            margin-bottom: 0.5rem;
        }

        li::marker {
            color: #ffc857;
        }
    }

    .guild-history-image {
        .guild-fellowship {
            width: 200px;
            height: 200px;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(255, 180, 60, 0.1);
            transition: box-shadow 0.3s ease;
        }

        .guild-fellowship:hover {
            box-shadow: 0 6px 16px rgba(255, 180, 60, 0.2);
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
        }
    }
}
</style>
