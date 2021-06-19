<template>
  <NuxtLink
    class="
      flex
      items-center
      justify-start
      flex-col
      p-5
      text-center
      transition
      group
      hover:bg-gray-200
    "
    :to="'/cervejas/' + cerveja.id"
  >
    <img
      class="block mx-auto mb-2 h-40"
      :src="cerveja.image_url"
      :alt="cerveja.name"
    />

    <h1
      class="
        max-w-full
        font-bold
        relative
        inline-block
        mx-auto
        text-lg
        md:text-xl
        uppercase
        mb-1
      "
    >
      <span class="relative z-10 block truncate">
        {{ cerveja.name }}
      </span>
      <span
        class="
          z-0
          w-full
          left-0
          right-0
          absolute
          bottom-0
          bg-brand bg-opacity-30
          h-2
          transition-all
          group-hover:h-7
        "
      ></span>
    </h1>
    <h2 class="italic font-thin mb-3 text-sm md:text-base">
      {{ cerveja.tagline }}
    </h2>

    <p>
      <strong class="font-bold">ABV</strong>
      {{ cerveja.abv ? cerveja.abv : '???' }}% |
      <strong class="font-bold">IBU</strong>
      {{ cerveja.ibu ? cerveja.ibu : '???' }} |
      <strong class="font-bold">EBC</strong>
      {{
        cerveja.ebc
          ? `${cerveja.ebc} (${cerveja.ebc >= 20 ? 'escura' : 'clara'})`
          : '???'
      }}
    </p>
  </NuxtLink>
</template>

<script>
export default {
  props: ['cerveja'],
}
</script>
