<template>
    <div>  
    <v-app-bar>
      <ul class="menu">
        <li>
          <v-btn @click="pageLinkToHome()">Home</v-btn>
        </li>
        <li v-if="$store.state.isLogined">
          <v-btn @click="logout()">logout</v-btn>
        </li>
        <li v-else>
          <v-btn @click="pageLingToLogin()">login</v-btn>
        </li>
      </ul>
    </v-app-bar>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const logout = async () => {
      await store.commit("setLogin", false)
      router.push({name:"Home"})
    }
    return {logout}
  },
  methods: {
      pageLinkToHome() {
          this.$router.push({ path: "/" });
      },
      pageLingToLogin() {
          this.$router.push({ path: "/login" });
      }
  }
}

</script>

<style>
ul.menu li {
  display: inline;
}
</style>