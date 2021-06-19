<template>
  <form @submit.prevent="mudarQuery" class="flex gap-2 md:inline-flex">
    <input
      class="
        border border-gray-200
        p-2
        flex-auto
        transition
        focus:outline-none focus:border-black
      "
      type="search"
      :value="value"
      placeholder="Busque aqui..."
      @input="$emit('input', $event.target.value)"
    />
    <button
      class="
        uppercase
        p-2
        flex-none
        border border-black
        bg-black
        text-white
        transition
        focus:outline-none
      "
      title="Pesquisar"
      type="submit"
    >
      <span class="hidden md:inline">Pesquisar</span>
      <IconChevronRight class="md:hidden inline" />
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
