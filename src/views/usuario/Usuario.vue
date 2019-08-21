<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'usuario' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'compras' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'vendas' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'usuario-editar' }"
            >Editar Usuario</router-link
          >
        </li>
        <li>
          <button @click.prevent="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'Usuario',
  methods: {
    deslogar() {
      this.$store.dispatch('deslogarUsuario')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .usuario {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}

.sidenav a,
.sidenav button {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
  &.router-link-exact-active,
  &:hover {
    background: #87f;
    color: white;
  }
}

.sidenav button {
  border: none;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;
}
</style>