<script setup lang="ts">
const { footerLinks } = useFooterLinks()
</script>

<template>
  <USeparator icon="i-simple-icons-nuxtdotjs" class="h-px" />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="footerLinks">
          <template #right>
            <NewsletterForm />
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        Copyright © 2016-{{ new Date().getFullYear() }} LaoMuJi - <NuxtLink class="hover:underline" to="https://go.nuxt.com/license" target="_blank">
          MIT License
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://twitter.com/liaozh1"
        target="_blank"
        icon="i-simple-icons-x"
      >
        <span class="sr-only">Nuxt on X</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/bluesky"
        target="_blank"
        icon="i-simple-icons-bluesky"
      >
        <span class="sr-only">Lzh on BlueSky</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/linkedin"
        target="_blank"
        icon="i-simple-icons-linkedin"
      >
        <span class="sr-only">Lzh on LinkedIn</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/discord"
        target="_blank"
        icon="i-simple-icons-discord"
      >
        <span class="sr-only">Lzh on Discord</span>
      </UButton>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/lzh06550107"
        target="_blank"
        icon="i-simple-icons-github"
      >
        <span class="sr-only">Lzh on GitHub</span>
      </UButton>
    </template>
  </UFooter>
</template>
