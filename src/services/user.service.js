import { api } from "boot/axios";
import querystring from "querystring";
import { LocalStorage } from "quasar";

function authHeader() {
  var token = LocalStorage.getItem("token");
  if (token) {
    return {
      Authorization: "Bearer " + token.access,
      "Content-Type": "application/json",
    };
  } else {
    return {};
  }
}
class userService {
  async login(user) {
    try {
      await api.post(
        "/login",
        {
          email: user.email,
          password: user.password
        },
        { headers: { "Content-Type": "application/json" } }
      ).then(response => {
        LocalStorage.set("token", response.data);
      }).catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      });
    } catch (error) {
      console.log(error);
    }
  }
  async getSelf() {
    try {
      await api.get("/users", { headers: authHeader() }).then(response => {
        LocalStorage.set("perm", response.data)
      });
    } catch (error) {
      console.log(error)
    }
  }
  logout() {
    window.location.href = '/login';
    LocalStorage.remove("token");
    LocalStorage.remove("perm");
  }
}

export default new userService();
