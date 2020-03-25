<template>
  <div class="home">
    <div :class="{'active' : $route.name === 'admin'}">
      <router-link to="/admin">Home</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>
