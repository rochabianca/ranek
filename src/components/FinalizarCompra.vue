<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UsuarioForm>
      <button @click.prevent="finalizarCompra" class="btn">
        Finalizar Compra
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from '@/components/UsuarioForm.vue';

export default {
  name: 'FinalizarCompra',
  props: ["produto"],
  components: {
    UsuarioForm,
  }
};
</script>

<style lang="scss" scoped>
</style>
