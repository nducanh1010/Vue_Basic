<template>
  <div>
    <div>Homepage is here</div>
    <button @click="getUserData">Click data</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },

  methods: {
    async getUserData() {
      let res = await axios.get(
        "https://6348bcf4a59874146b0fdadc.mockapi.io/user/username"
      );
      let data = res && res.data ? res.data : [];
      if (data && data.length > 0) {
        let reverseData = data.slice(0, 10);
        this.users = reverseData;
        reverseData.map((item) => { 
          console.log(item.username,'------', item.password);
        });
      } else {
        this.users = [];
      }
    },
  },
};
</script>
