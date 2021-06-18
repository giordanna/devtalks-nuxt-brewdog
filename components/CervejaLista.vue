<template>
  <article
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
  >
    <CervejaItem
      v-for="cerveja in cervejas"
      :key="cerveja.id"
      :cerveja="cerveja"
    />
    <section class="col-span-4 py-5 flex justify-center items-center h-96 text-2xl" v-if="cervejas.length === 0">
      Não há nenhuma receita de cerveja aqui :/
    </section>  
  </article>
</template>

<script>
export default {
  props: ['cervejas'],
}
</script>
