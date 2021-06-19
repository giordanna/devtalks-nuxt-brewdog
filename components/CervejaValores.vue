<template>
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
</template>

<script>
export default {
  props: ['cerveja'],
}
</script>
