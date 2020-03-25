<template>
  <div id="contentAdmin" :class="{ 'nav-open': navVisibility }">
    <admin-header></admin-header>
    <router-view />
  </div>
</template>
<script>
import AdminHeader from '@/components/Admin/header'
export default {
  name: 'admin',
  components: {
    AdminHeader
  },
  computed: {
    navVisibility () {
      return this.$store.state.admin.navVisibility
    }
  }
}
</script>
<style lang="scss" scoped>
#contentAdmin {
  &.nav-open {
    padding-left: 250px;
  }
}
</style>
