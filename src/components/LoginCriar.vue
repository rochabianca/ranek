<template>
  <div>
    <h2>Crie a sua conta</h2>
    <button @click="criar = true">Criar Conta</button>
    <UsuarioForm />
  </div>
</template>

<script>
import UsuarioForm from '@/components/UsuarioForm'
export default {
  name: 'LoginCriar',
  components: {
    UsuarioForm,
  }
}
</script>

<style lang="scss" scoped>
</style>