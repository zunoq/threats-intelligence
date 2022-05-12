<template>
  <div class="container q-pa-md">
    <div class="loginform">
      <q-form class="q-gutter-md" @submit.prevent="submitForm">
        <q-input label="Email" v-model="login.email"> </q-input>
        <q-input label="Password" type="password" v-model="login.password">
        </q-input>
        <div>
          <q-btn
            class="full-width"
            color="accent"
            label="Login"
            type="submit"
            rounded
          ></q-btn>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import userService from "../services/user.service";
const $q = useQuasar();
export default {
  name: "LoginPage",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.login.email || !this.login.password) {
        this.$q.notify({
          type: "negative",
          position: "top",
          message: "Bạn chưa nhập email hoặc mật khẩu ",
        });
      } else {
        try {
          console.log(this.login);
          userService.login(this.login).then(() => {
            if (localStorage.getItem("token")) {
              this.$router.push("/dashboard");
            } else {
              this.$q.notify({
                type: "negative",
                message: "Sai tên đăng nhập hoặc mật khẩu",
                position: "top",
              });
            }
          });
        } catch (err) {}
      }
    },
  },
  updated() {
    if (localStorage.getItem("token")) {
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  height: auto;
  justify-content: center;
  .loginform {
    width: 500px;
  }
}
</style>
