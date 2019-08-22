<template>
  <div>{{ produto.descricao }}</div>
</template>

<script>
export default {
  name: 'ProdutoItem',
  props: ["produto"]
};
</script>

<style>
</style>
