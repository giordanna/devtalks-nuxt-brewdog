<template>
  <div class="flex justify-end items-center gap-3">
    <NuxtLink
      class="p-2 border border-gray-200"
      v-if="paginaAtual - 1 > 0"
      :title="`Página ${paginaAtual - 1}`"
      :to="{ path: caminho, query: { ...$route.query, p: paginaAtual - 1 } }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline align-middle"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </NuxtLink>

    <span class="p-2 border border-black bg-black text-white">
      Página atual: {{ paginaAtual }}
    </span>

    <NuxtLink
      class="p-2 border border-gray-200"
      v-if="itens >= 20"
      :title="`Página ${paginaAtual + 1}`"
      :to="{ path: caminho, query: { ...$route.query, p: paginaAtual + 1 } }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline align-middle"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['paginaAtual', 'caminho', 'itens'],
}
</script>

<style></style>
