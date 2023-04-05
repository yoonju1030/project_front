<template>
  <v-app>
    <core-app-bar/>
    <core-app-view/>
  </v-app>
</template>

<script>
import CoreAppBar from "@/components/core/AppBar.vue"
import CoreAppView from "@/components/core/AppView.vue"
export default {
  name: "App",
  components: {CoreAppBar, CoreAppView}
}
</script>
