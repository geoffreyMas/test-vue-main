<script
  setup
  lang="ts"
>
import {marked}   from 'marked';
import {computed} from 'vue';


const MARKDOWN = `
# Test technique Vue3

## Prérequis
1. Installer node + npm

## Commandes
\`\`\`shell
npm install

# Pour lancer le serveur local
npm run dev
\`\`\`
`;

const markdownToHtml = computed(() => {
  return marked(MARKDOWN);
});
</script>

<template>
  <div v-html="markdownToHtml"></div>
</template>
