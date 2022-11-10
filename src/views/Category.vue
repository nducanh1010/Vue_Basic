<template>
  <NavigationVue>
    <CategoryListVue></CategoryListVue>
    
  </NavigationVue>
</template>
<script>
import NavigationVue from '@/components/Navigation.vue';
import CategoryListVue from './Category/CategoryList.vue';
export default {
  components: { NavigationVue, CategoryListVue },
  name: 'Category',
};
</script>
