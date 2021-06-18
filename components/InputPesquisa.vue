<template>
  <form @submit.prevent="mudarQuery">
    <input
      class="
        border border-gray-200
        p-2
        mr-2
        transition
        focus:outline-none focus:border-black
      "
      type="search"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <button class="uppercase  p-2 border border-black bg-black text-white transition focus:outline-none" type="submit">
      Pesquisar
    </button>
  </form>
</template>

<script>
export default {
  props: ['caminho', 'value'],
  methods: {
    mudarQuery() {
      if (this.value !== '') {
        this.$router.push({
          path: this.caminho,
          query: { ...this.$route.query, q: this.value },
        })
      } else {
        this.$router.push({
          path: this.caminho,
          query: { ...this.$route.query, q: undefined },
        })
      }
    },
  },
}
</script>
