<template>
    <div class="about-guild-wrapper">
        <div class="about-text-wrapper">
            <h2 class="about-tfbt-header">{{ aboutTfabt }}</h2>
            <ul class="about-list">
                <li>{{ guildDescription }}</li>
                <li>{{ extraInformation }}</li>
                <li>{{ guildFocusInformation }}</li>
            </ul>
        </div>

        <div class="guild-cozy-image" @pointerenter="resetShowBibleVerse" @pointerleave="resetShowBibleVerse">
            <img class="campfire" alt="Cozy Guild Image" src="../../../assets/GuildCozyImage.png" />
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
            aboutTfabt: "About the Guild",
            guildDescription:
                "TF&BT is a Christian and family-friendly guild focused on fellowship and playing together to succeed",
            extraInformation:
                "We are located on the Dalaran server, happily accepting both Horde and Alliance players",
            guildFocusInformation:
                "We are an AOTC focused guild with raiding on Tuesday and Saturday at 8 PM EST",
            bibleVerse:
                "For where two or three gather in my name, there am I with them.",
            verseReference: "Matthew 18:20",
        };
    },

    methods: {
        resetShowBibleVerse() {
            this.showBibleVerseOnImageHover = !this.showBibleVerseOnImageHover;
        },
    },
};
</script>

<style scoped>
.about-guild-wrapper {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: space-evenly;
    align-items: center;

    .about-text-wrapper {
        display: flex;
        flex-direction: column;

        .about-tfbt-header {
            font-family: "EB Garamond", serif;
            font-weight: 700;
        }

        .about-list {
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
    }

    .guild-cozy-image {
        position: relative;
        display: inline-block;

        .campfire {
            width: 200px;
            height: 200px;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(255, 180, 60, 0.1);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        &:hover .campfire {
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
