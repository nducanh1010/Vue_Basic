<template>
  <NavigationVue
    ><div>
      <div>Homepage is here</div>
      <button @click="getUserData">Click data</button>
    </div>
  </NavigationVue>
</template>
<script>
import NavigationVue from '@/components/Navigation.vue';
import axios from 'axios';
export default {
  name: 'Home',
  components: { NavigationVue },
  data() {
    return {
      users: [],
    };
  },

  methods: {
    async getUserData() {
      let res = await axios.get('https://635f4c88ca0fe3c21a993f1b.mockapi.io/v1/userdata');
      let data = res && res.data ? res.data : [];
      if (data && data.length > 0) {
        let reverseData = data.slice(0, 10);
        this.users = reverseData;
        reverseData.map(item => {
          console.log(item.username, '------', item.password);
        });
      } else {
        this.users = [];
      }
    },
  },
};
</script>
