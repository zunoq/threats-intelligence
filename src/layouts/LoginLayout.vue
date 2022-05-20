<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="flex flex-center container">
        <div class="row">
          <div class="col-12 justify-center">
            <q-card class="loginform" flat dark>
              <div
                class="text-center text-accent text-uppercase text-bold text-h4 q-mb-xl"
              >
                Chào mừng
              </div>
              <q-form class="q-gutter-md" @submit.prevent="submitForm">
                <q-input
                  dark
                  label="Email"
                  v-model="login.email"
                  color="accent"
                >
                  <q-tooltip v-model="showing">
                    Nhập địa chỉ email của bạn
                  </q-tooltip>
                </q-input>
                <q-input
                  label="Mật khẩu"
                  type="password"
                  v-model="login.password"
                  dark
                  color="accent"
                  autocomplete="off"
                >
                  <q-tooltip v-model="showing">
                    Nhập mật khẩu của bạn
                  </q-tooltip>
                </q-input>
                <q-checkbox
                  dark
                  dense
                  right-label
                  v-model="rememberMe"
                  label="Ghi nhớ đăng nhập"
                  color="accent"
                  class="q-mt-lg"
                />
                <div class="text-right">
                  <q-btn
                    class="q-mt-md"
                    color="accent"
                    label="Đăng nhập"
                    type="submit"
                    size="lg"
                    outline
                  ></q-btn>
                </div>
              </q-form>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
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
      rememberMe: false,
    };
  },
  methods: {
    submitForm() {
      if (!this.login.email || !this.login.password) {
        this.$q.notify({
          type: "negative",
          message: "Bạn chưa nhập email hoặc mật khẩu ",
        });
      } else {
        try {
          userService.login(this.login).then(() => {
            if (localStorage.getItem("token")) {
              this.$router.push("/dashboard");
            } else {
              this.$q.notify({
                type: "negative",
                message: "Sai tên đăng nhập hoặc mật khẩu",
              });
            }
          });
        } catch (err) {}
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  background-image: url(../assets/login-bg.jpg);
  position: relative;
  background-size: cover;
  z-index: 1;
}
.container::before {
  content: "";
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(10, 25, 41, 0),
    rgba(10, 25, 41, 0.5),
    rgba(10, 25, 41, 0.8),
    rgba(10, 25, 41, 1)
  );
}
.loginform {
  width: 500px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 50px;
}
</style>
