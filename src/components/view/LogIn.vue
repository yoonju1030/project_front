<template>
    <v-card class="mx-auto px-6 py-8" max-width="688">
        <h1 align="center"> {{item}} </h1>
        <br/>
        <v-form
            v-model="form"
            @submit.prevent="onSubmit"
        >
        <v-text-field
          v-model="id"
          :rules="[required]"
          class="mb-2"
          clearable
          label="ID"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <br/>

        <v-btn
          :disabled="!form"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
        </v-form>
    </v-card>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        const item = ref("login")
        const form = ref(false)
        const id = ref(null)
        const password = ref(null)

        const onSubmit = async() => {
            if (!form.value) return
            else {
                await store.commit("setLogin", true)
                router.push({name:"Home"})
            }
        }

        const required = (v) => {
        return !!v || "Field is required";
      };
        return {
            item, form, id, password, onSubmit, required
        }
    }
  }
</script>

<style></style>