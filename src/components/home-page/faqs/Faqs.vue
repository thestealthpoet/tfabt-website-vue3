<template>
    <div class="faqs-wrapper">
        <div v-for="faq in guildFaqs" class="question-answer-container">
            <div class="question-container">
                <v-btn
                icon
                size="x-small"
                variant="text"
                @click="faq.openPanel = !faq.openPanel"
                >
                    <v-icon 
                    :icon="faq.openPanel ? 'mdi-chevron-down' : 'mdi-chevron-up'" 
                    />
                </v-btn>
                <div class="question">{{ faq.question }}</div>
            </div>
            <div v-if="faq.openPanel" class="answer-container">
                <span class="answer">
                    {{ faq.answer }}
                </span>
                <span class="link" v-if="faq.link">
                    <a :href="faq.link" target="_blank" rel="noopener noreferrer">{{ faq.link }}</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {

    data() {
        return {
            guildFaqs: [
                {
                    question: "What is The Fish and Bread Trick?",
                    answer: "The Fish and Bread Trick is a Horde and Alliance Christian and family-friendly guild on the Dalaran-US-EST server. Our guild is focused on solid community through gaming and encouraging each other in our faiths.  People of all faiths or non-faiths are welcome to join. The only thing we ask is mutual respect towards each other and keeping the language to a PG level in guild chat and Discord.",
                    openPanel: false
                },
                {
                    question: "How do I join the guild?",
                    answer: "Fill out our application linked above, and a guild officer will contact you after and get you connected with the guild through Discord.",
                    openPanel: false
                },
                {
                    question: "How do I get a hold of someone to invite me to the guild?",
                    answer: "On Discord, ping/notify members who have ginvite privledges by typing '@invites' and asking if anyone could invite you. Someone will most likely be able to get to you, but please be patient if no one is available immediately.",
                    openPanel: false
                },
                {
                    question: "What kind of guild are you in game?",
                    answer: "We do all kinds of things together, but we are principally a casual guild with lots of folks who like to raid or do mythic+ together.  Our raid team aims to clear heroic level content.",
                    openPanel: false
                },
                {
                    question: "When do you raid?",
                    answer: "We raid every Tuesday and Saturday at 8 PM to about 10 PM EST.",
                    openPanel: false
                },
                {
                    question: "What do you need for raids?",
                    answer: "Our response to this question is always 'Play what you like!' because generally we have all major roles covered every season, but we are happy to try out new members to different roles every season.",
                    openPanel: false
                },
                {
                    question: "Is there an in-game community?",
                    answer: "YES, you can join it at: ",
                    link: "https://www.worldofwarcraft.com/invite/LG07R7yhyD5?region=US",
                    openPanel: false
                }
            ]
        }
    },
}

</script>

<style scoped>

.faqs-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 775px;

    .question-answer-container {
        display: flex;
        flex-direction: column;

        .question-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
            margin: 8px;

            .question {
                font-size: 20px;
                font-weight: 700;
            }
        }

        .answer-container {
            text-align: start;
            padding-left: 64px;

            .link {
                padding-left: 2px;
            }
        }
    }
}

</style>