<template>
  <header class="text-center mb-8">
    <img
      class="block mx-auto h-52 md:h-96 mb-3"
      :src="
        !!cerveja.image_url ? cerveja.image_url : 'no-image-placeholder.png'
      "
      :alt="cerveja.name"
      @error="$event.target.src = 'no-image-placeholder.png'"
    />

    <h1 class="font-black text-xl md:text-5xl uppercase mb-1">
      {{ cerveja.name }}
    </h1>
    <h2 class="italic font-light mb-3">
      {{ cerveja.tagline }}
    </h2>

    <CervejaValores :cerveja="cerveja" />

    <HopIcon
      class="inline-block text-seagreen-600"
      v-for="ibu in Math.ceil(cerveja.ibu / 10)"
      :key="ibu"
    />

    <p class="my-3 text-left text-sm md:text-base">
      {{ cerveja.description }}
    </p>

    <p
      class="
        text-left text-blue-600 text-xs
        md:text-sm
        my-1
        font-bold
        block
        mx-auto
      "
    >
      {{ cerveja.contributed_by }} | Primeira Fabricação:
      {{ cerveja.first_brewed }}
    </p>
  </header>
</template>

<script>
export default {
  props: ['cerveja'],
}
</script>
