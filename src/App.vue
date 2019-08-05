<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>


<style lang="scss">
</style>
