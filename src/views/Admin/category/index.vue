<template>
  <div class="mainCategory">
    <header-section @addFairEvent="showModelHandelr">
      <template #title>There is title here</template>
    </header-section>
    <h1>category</h1>
    <ve-model :show="showModel" :width="800" @close="hideModelHandelr">
      <categoryForm></categoryForm>
      <ve-button @click="hideModelHandelr">
        <template>Close</template>
      </ve-button>
    </ve-model>
  </div>
</template>
<script>
import HeaderSection from '@/components/Admin/HeaderSection.vue'
import categoryForm from '@/views/Admin/category/categoryForm.vue'
export default {
  name: 'category',
  components: {
    HeaderSection,
    categoryForm
  },
  data () {
    return {
      showModel: false
    }
  },
  methods: {
    showModelHandelr () {
      this.showModel = true
    },
    hideModelHandelr () {
      this.showModel = false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
