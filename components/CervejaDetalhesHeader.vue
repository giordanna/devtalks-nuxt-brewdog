<template>
  <header class="text-center mb-8">
    <img
      class="block mx-auto h-96 mb-3"
      :src="cerveja.image_url"
      :alt="cerveja.name"
    />

    <h1 class="font-black text-5xl uppercase mb-1">
      {{ cerveja.name }}
    </h1>
    <h2 class="italic font-light mb-3">
      {{ cerveja.tagline }}
    </h2>

    <p class="my-3">
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

    <HopIcon
      class="inline-block text-seagreen-600"
      v-for="ibu in Math.ceil(cerveja.ibu / 10)"
      :key="ibu"
    />

    <p class="my-3 text-left">
      {{ cerveja.description }}
    </p>

    <p class="text-left text-blue-600 text-sm my-1 font-bold block mx-auto">
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
