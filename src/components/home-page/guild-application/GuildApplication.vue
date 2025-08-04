<template>
    <div class="guild-application-wrapper">
        <div class="our-history-wrapper">
            <h2 class="application-process-text">
                {{ guildApplicationProcessTitle }}
            </h2>
            <ul class="app-process-list">
                <li>{{ basics }}</li>
                <li>
                    <a :href="guildApplicationLink" target="_blank" rel="noopener noreferrer">
                        {{ fillOutApplication }}
                    </a>
                </li>
                <li>{{ everyOneIsWelcome }}</li>
                <li>{{ officerContact }}</li>
                <li>{{ joinDiscord }}</li>
                <li>{{ discordPrivledges }}</li>
            </ul>
        </div>
        <div class="guild-application-image" @pointerenter="resetShowBibleVerse" @pointerleave="resetShowBibleVerse">
            <img class="guild-application" alt="Guild Application image"
                src="../../../assets/GuildApplicationImage.png">
            <div v-if="showBibleVerseOnImageHover" class="verse-wrapper">
                <p class="verse">
                    {{ bibleVerse }}
                </p>
                <span class="reference">
                    {{ verseReference }}
                </span>
            </div>
        </div>
    </div>

</template>

<script lang="ts">

export default {

    data() {
        return {
            showBibleVerseOnImageHover: false,
            guildApplicationProcessTitle: "Guild Application Process",
            guildApplicationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdD4K9geGi6xl5NzT7hn-W7YkZcQk5O340SRf52pr5a5xv8vg/viewform",
            basics: "TF&BT requires an application before joining the guild in game",
            fillOutApplication: "Please fill out an application on our Google form",
            everyOneIsWelcome: "Everyone is welcome to join, those of faith and those of no faith. We are glad you're here!",
            officerContact: "An officer will contact you via email or Discord and welcome you and answer any questions you have",
            joinDiscord: "Please join our Discord and when you're ready to join the guild, send a message in General chat with the tag '@invites', and an officer will try to jump on in game to ginvite you",
            discordPrivledges: "Once you're in, officers will set you as a member on Discord, and you'll be able to see guild-member only channels",
            bibleVerse: "Therefore welcome one another as Christ has welcomed you, for the glory of God",
            verseReference: "Romans 15:7"
        }
    },

    methods: {
        resetShowBibleVerse() {
            this.showBibleVerseOnImageHover = !this.showBibleVerseOnImageHover;
        }
    }

}

</script>

<style scoped>
.guild-application-wrapper {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: space-evenly;
    align-items: center;

    .application-process-text {
        font-family: 'EB Garamond', serif;
        font-weight: 700;
    }

    .app-process-list {
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

    .guild-application-image {
        position: relative;
        display: inline-block;

        .guild-application {
            width: 200px;
            height: 200px;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(255, 180, 60, 0.1);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        &:hover .guild-application {
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
</style>
