<template>
  <div>
    <div
      class="
        mb-5
        flex
        justify-between
        items-center
        flex-col
        md:flex-row
        gap-y-5
      "
    >
      <InputPesquisa v-model.trim="pesquisa" caminho="/cervejas" />
      <Paginacao
        :paginaAtual="pagina"
        caminho="/cervejas"
        :itens="cervejas.length"
      />
    </div>

    <CervejaLista :cervejas="cervejas" />

    <div class="mt-5 flex items-center justify-center md:justify-end">
      <Paginacao
        :paginaAtual="pagina"
        caminho="/cervejas"
        :itens="cervejas.length"
      />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.tituloHead,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.descricaoHead,
        },
        // tags do opengraph
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Receitas Brewdog | ${this.tituloHead}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.descricaoHead,
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
  computed: {
    tituloHead() {
      return `${
        this.$route.query.q ? `"${this.$route.query.q}" - ` : ''
      }Página ${this.$route.query.p ? this.$route.query.p : 1}`
    },
    descricaoHead() {
      return `Página ${this.$route.query.p ? this.$route.query.p : 1}${
        this.$route.query.q ? ` da busca "${this.$route.query.q}"` : ''
      }, com ${this.cervejas.length} cervejas.`
    },
  },
}
</script>
