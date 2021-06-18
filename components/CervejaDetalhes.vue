<template>
  <div>
    <section class="my-5">
      <h3 class="font-bold text-2xl mb-3">Dica</h3>
      <p>
        {{ cerveja.brewers_tips }}
      </p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <section class="my-5">
        <h3 class="font-bold text-2xl mb-3">Densidades</h3>
        <ul class="list-disc ml-4">
          <li>Original: {{ (cerveja.target_og - 1000) / 10.0 }} %</li>
          <li>Final: {{ (cerveja.target_fg - 1000) / 10.0 }} %</li>
        </ul>
      </section>

      <section class="my-5">
        <h3 class="font-bold text-2xl mb-3">Malte(s)</h3>
        <ul class="list-disc ml-4">
          <li v-for="malte in cerveja.ingredients.malt" :key="malte.name">
            {{ malte.amount.value }} {{ unidade(malte.amount.unit) }} de
            <strong class="font-bold">{{ malte.name }}</strong>
          </li>
        </ul>
      </section>

      <section class="my-5">
        <h3 class="font-bold text-2xl mb-3">Lúpulo(s)</h3>
        <ul class="list-disc ml-4">
          <li v-for="(lupulo, index) in cerveja.ingredients.hops" :key="index">
            {{ adiciona(lupulo.add) }}: {{ lupulo.amount.value }}
            {{ unidade(lupulo.amount.unit) }} de
            <strong class="font-bold">{{ lupulo.name }}</strong> para
            {{ utilidade(lupulo.attribute) }}
          </li>
        </ul>
      </section>

      <section class="my-5">
        <h3 class="font-bold text-2xl mb-3">Fermento</h3>

        <p>{{ cerveja.ingredients.yeast }}</p>
      </section>

      <section class="my-5">
        <h3 class="font-bold text-2xl mb-3">Volume</h3>
        <ul class="list-disc ml-4">
          <li>
            Fervura: {{ cerveja.boil_volume.value }}
            {{ unidade(cerveja.boil_volume.unit) }}
          </li>
          <li>
            Final: {{ cerveja.volume.value }}
            {{ unidade(cerveja.volume.unit) }}
          </li>
        </ul>
      </section>

      <section class="my-5">
        <h3 class="font-bold text-2xl mb-3">Método</h3>
        <ul class="list-disc ml-4">
          <li>
            Brassagem(s):
            <ul class="list-disc ml-4">
              <li
                v-for="(brassagem, index) in cerveja.method.mash_temp"
                :key="index"
              >
                {{ brassagem.temp.value }}
                {{ unidade(brassagem.temp.unit) }} por
                {{ brassagem.duration }} minutos
              </li>
            </ul>
          </li>
          <li>
            Fermentação: {{ cerveja.method.fermentation.temp.value }}
            {{ unidade(cerveja.method.fermentation.temp.unit) }}
          </li>
          <li v-if="!!cerveja.method.twist">
            Mistura: {{ cerveja.method.twist }}
          </li>
        </ul>
      </section>

      <section class="my-5">
        <h3 class="font-bold text-2xl mb-3">Combina com</h3>
        <ul class="list-disc ml-4">
          <li v-for="comida in cerveja.food_pairing" :key="comida">
            {{ comida }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cerveja'],
  methods: {
    unidade(unidade) {
      switch (unidade) {
        case 'grams': {
          return 'g'
        }
        case 'celsius': {
          return 'Cº'
        }
        case 'litres': {
          return 'litros'
        }
        case 'kilograms': {
          return 'kg'
        }
        default: {
          return unidade[0]
        }
      }
    },
    adiciona(tempo) {
      switch (tempo) {
        case 'start': {
          return 'Início'
        }
        case 'middle': {
          return 'Meio'
        }
        case 'end': {
          return 'Fim'
        }
        case 'dry hop': {
          return 'Dry Hop'
        }
        default: {
          return tempo
        }
      }
    },
    utilidade(utilidade) {
      switch (utilidade) {
        case 'bitter': {
          return 'amargor'
        }
        case 'flavour': {
          return 'sabor'
        }
        default: {
          return utilidade
        }
      }
    },
  },
}
</script>
