<template>
  <header
    class="
      sticky
      top-0
      z-50
      w-full
      bg-brand
      shadow
      h-16
      flex
      items-center
      justify-center
    "
  >
    <NuxtLink
      to="/cervejas"
      class="mx-auto flex items-center justify-center gap-5"
    >
      <img class="w-8 align-middle" src="shield.png" alt="Logo Brewdog" />
      <h1 class="font-bold uppercase text-lg md:text-2xl">
        Receitas Brewdog 🤘
      </h1>
    </NuxtLink>
  </header>
</template>
