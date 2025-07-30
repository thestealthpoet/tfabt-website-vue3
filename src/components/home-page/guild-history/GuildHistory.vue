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
        <div class="guild-history-image" @pointerenter="resetShowBibleVerse" @pointerleave="resetShowBibleVerse">
            <img class="guild-fellowship" alt="Guild fellowship image" src="../../../assets/GuildHistoryImage.png">
            <div v-if="showBibleVerseOnImageHover" class="verse-wrapper">
                <p class="verse">{{ bibleVerse }}</p>
                <span class="reference">{{ verseReference }}</span>
            </div>
        </div>
    </div>
    <hr class="horizontal-divider" />
</template>

<script lang="ts">

export default {

    data() {
        return {
            showBibleVerseOnImageHover: false,
            ourHistoryString: "Our History",
            earlyDays: "TF&BT started on Ghostlands during WotLK with a simple goal of seeking fellowship and fun over stress in WoW",
            transitionToDalaran: "During Legion, the guild transferred to Dalaran, and we have grown to be a vibrant community striving to demonstrate Christ in all we do",
            todayStory: "Today we are raiding regularly with 20-30 players with a strong M+ group and lots of good discussion on Discord",
            bibleVerse: "We will tell the next generation the praiseworthy deeds of the Lord",
            verseReference: "Psalm 78:4"
        }
    },

    methods: {
        resetShowBibleVerse() {
            this.showBibleVerseOnImageHover = !this.showBibleVerseOnImageHover;
        },
    }

}

</script>

<style scoped>
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
        position: relative;
        display: inline-block;

        .guild-fellowship {
            width: 200px;
            height: 200px;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(255, 180, 60, 0.1);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        &:hover .guild-fellowship {
            box-shadow: 0 6px 16px rgba(255, 180, 60, 0.2);
            transform: scale(1.02);
        }

        .verse-wrapper {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            max-width: 80%;
            text-align: center;
            opacity: 0;
            transition: opacity 0.4s ease, transform 0.4s ease;
            pointer-events: none;
        }

        &:hover .verse-wrapper {
            opacity: 1;
            transform: translate(-50%, -4px);
        }

        .verse,
        .reference {
            color: #e5c88c;
            font-size: 0.9rem;
            line-height: 1.3;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
        }
    }
}

.horizontal-divider {
    border: none;
    height: 3px;
    background: linear-gradient(to right,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent);
    margin: 24px 0;
}
</style>
