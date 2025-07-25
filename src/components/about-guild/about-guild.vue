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
        <div class="guild-cozy-image">
            <img class="campfire" alt="Cozy Guild Image" src="../../assets/GuildCozyImage.png" />
        </div>
    </div>
    <hr class="horizontal-divider" />
</template>


<script lang="ts">

export default {

    data() {
        return {
            aboutTfabt: "About the Guild",
            guildDescription: "TF&BT is a Christian and family-friendly guild focused on fellowship and playing together to succeed",
            extraInformation: "We are located on the Dalaran server, happily accepting both Horde and Alliance players",
            guildFocusInformation: "We are an AOTC focused guild with raiding on Tuesday and Saturday at 8 PM EST"
        }
    }
}
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
            font-family: 'EB Garamond', serif;
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
        .campfire {
            width: 200px;
            height: 200px;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(255, 180, 60, 0.1);
            transition: box-shadow 0.3s ease;
        }

        .campfire:hover {
            box-shadow: 0 6px 16px rgba(255, 180, 60, 0.2);
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
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
