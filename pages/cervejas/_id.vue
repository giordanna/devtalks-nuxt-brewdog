<template>
  <article>
    <CervejaDetalhesHeader :cerveja="cerveja" />
    <CervejaDetalhes :cerveja="cerveja" />
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: this.cerveja.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.cerveja.tagline,
        },
        // tags do opengraph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.cerveja.name,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.cerveja.tagline,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.cerveja.image_url,
        },
      ],
    }
  },
  async asyncData({ $axios, params, error }) {
    try {
      const cervejas = await $axios.$get(`/beers/${params.id}`)
      return {
        cerveja: cervejas[0],
      }
    } catch {
      return error({ statusCode: 404 })
    }
  },
  data() {
    return {
      cerveja: null,
    }
  },
}
</script>
