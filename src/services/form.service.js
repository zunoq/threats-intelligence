import { axios, api } from "boot/axios";
import UserService from "./user.service";
import { Notify, LocalStorage } from "quasar"
function authHeader() {
  var token = LocalStorage.getItem("token");

  if (token) {
    return {
      Authorization: "Bearer " + token.access_token,
      "Content-Type": "application/x-www-form-urlencoded"
    };
  } else {
    return {
      "Content-Type": "application/x-www-form-urlencoded"
    };
  }
}

class RESTService {
  async get(link, params = {}, thisComponent = undefined) {
    try {
      if (Object.keys(params).length > 0) {
        var response = await api.get(link, { params, headers: authHeader() });

      }
      else {
        var response = await api.get(link, { headers: authHeader() });
      }
      if (thisComponent) {
        Notify.create({
          message: "Thành công",
          color: "green",
          position: "top"
        });
      }
      return response.data;
    } catch (error) {
      if (error.status) {
        if (error.response.status == 401) UserService.logout();
        else if (thisComponent) {
          Notify.create({
            message: "Lỗi xác thực",
            color: "red",
            position: "top"
          });
        }
      }
      else {
        if (error.message) {
          Notify.create({
            message: error.message,
            color: "red",
            position: "top"
          });
        }
        else {
          Notify.create({
            message: error.message,
            color: "red",
            position: "top"
          });
        }
      }
    }
  }

  async post(link, body, thisComponent = undefined) {
    try {
      var response = await api.post(link, body, { headers: authHeader() });
      if (thisComponent) {
        thisComponent.$q.notify({
          message: "Thành công",
          color: "green",
          position: "top"
        });
      }
      return response.data;
    } catch (error) {
      if (error.status) {
        if (error.response.status == 403) UserService.logout();
        else if (thisComponent) {
          thisComponent.$q.notify({
            message: "Lỗi xác thực",
            color: "red",
            position: "top"
          });
        }
      }
    }
  }

}

export default new RESTService();