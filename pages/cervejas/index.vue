<template>
  <div>
    <div class="flex justify-between items-center">
      <InputPesquisa v-model.trim="pesquisa" caminho="/cervejas" />
      <Paginacao
        :paginaAtual="pagina"
        caminho="/cervejas"
        class="mb-5"
        :itens="cervejas.length"
      />
    </div>

    <CervejaLista :cervejas="cervejas" />

    <Paginacao
      :paginaAtual="pagina"
      caminho="/cervejas"
      class="mt-5"
      :itens="cervejas.length"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Cervejas - Página ${this.pagina}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Página ${this.pagina} com ${this.cervejas.length} cervejas.`,
        },
        // tags do opengraph
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Cervejas - Página ${this.pagina}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Página ${this.pagina} com ${this.cervejas.length} cervejas.`,
        },
      ],
    }
  },
  watchQuery: ['p', 'q'],
  async asyncData({ $axios, query, error }) {
    try {
      const pagina = parseInt(query.p)
      const pesquisa = query.q

      let queryExtra = ''

      if (pesquisa) {
        queryExtra = '?beer_name=' + pesquisa
        if (pagina && !isNaN(pagina)) {
          queryExtra += '&page=' + pagina
        }
      } else if (pagina && !isNaN(pagina)) {
        queryExtra = '?page=' + pagina
      }

      const cervejas = await $axios.$get(`/beers${queryExtra}`)

      return {
        cervejas,
        pagina: pagina && !isNaN(pagina) ? pagina : 1,
        pesquisa: pesquisa ? pesquisa : '',
      }
    } catch {
      return error({ statucCode: 404 })
    }
  },
  data() {
    return {
      cervejas: [],
      pagina: 1,
      pesquisa: '',
    }
  },
}
</script>
