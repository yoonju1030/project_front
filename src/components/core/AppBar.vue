<template>
    <div>  
    <v-app-bar>
      <ul class="menu">
        <li>
          <v-btn @click="pageLinkToHome()">Home</v-btn>
        </li>
        <li>
          <v-btn @click="pageLingToLogin()">Login</v-btn>
        </li>
      </ul>
    </v-app-bar>
  </div>
</template>

<script>
export default {
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