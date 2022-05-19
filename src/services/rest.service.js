import { axios, api } from "boot/axios";
import UserService from "./user.service";
import { Notify, LocalStorage } from "quasar"
function authHeader() {
  var token = LocalStorage.getItem("token");

  if (token) {
    return {
      Authorization: "Bearer " + token.access_token,
      "Content-Type": "application/json"
    };
  } else {
    return {
      "Content-Type": "application/json"
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
        Notify.create({
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
          Notify.create({
            message: "Lỗi xác thực",
            color: "red",
            position: "top",
          });
        }
      }
    }
  }
  async put(link, body, thisComponent = undefined) {
    try {
      var response = await api.put(link, body, { headers: authHeader() });
      if (thisComponent) {
        Notify.create({
          message: "Thành công",
          color: "green",
          position: "top",
        });
      }
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status == 401) {
          Notify.create({
            message: "Chưa đang nhập vào hệ thống",
            color: "red",
            position: "top",
          });
          if (token) {
            UserService.logout(token.refresh_token);
          } else {
            UserService.logout();
            window.location.href = "/login";
          }
        } else {
          if (error.response.status == 403) {
            Notify.create({
              message: "Không có quyền thực thi",
              color: "red",
              position: "top",
            });
          } else {
            if (error.response.status >= 500) {
              Notify.create({
                message: "Lỗi hệ thống",
                color: "red",
                position: "top",
              });
              window.location.href = "/system-error";
            } else {
              if (error.response.status == 404) {
                Notify.create({
                  message: "Lỗi không tìm thấy trang",
                  color: "red",
                  position: "top",
                });
                window.location.href = "/notfound";
              } else {
                Notify.create({
                  message: error.response.data.message,
                  color: "red",
                  position: "top",
                });
              }
            }
          }
        }
      } else {
        if (error) {
          if (error.message === "Network Error") {
            Notify.create({
              message: error.message,
              color: "red",
              position: "top",
            });
            window.location.href = "/network-error";
          } else {
            Notify.create({
              message: error.message,
              color: "red",
              position: "top",
            });
            window.location.href = "/system-error";
          }
        } else {
          if (token) {
            UserService.logout(token.refresh_token);
          } else {
            UserService.logout();
            window.location.href = "/login";
          }
        }
      }
    }
  }
  async delete(link, thisComponent = undefined) {
    try {
      var response = await api.delete(link, { headers: authHeader() });
      if (thisComponent) {
        Notify.create({
          message: "Thành công",
          color: "green",
          position: "top",
        });
      }
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status == 401) {
          Notify.create({
            message: "Chưa đang nhập vào hệ thống",
            color: "red",
            position: "top",
          });
          if (token) {
            UserService.logout(token.refresh_token);
          } else {
            UserService.logout();
            window.location.href = "/login";
          }
        } else {
          if (error.response.status == 403) {
            Notify.create({
              message: "Không có quyền thực thi",
              color: "red",
              position: "top",
            });
          } else {
            if (error.response.status >= 500) {
              Notify.create({
                message: "Lỗi hệ thống",
                color: "red",
                position: "top",
              });
              window.location.href = "/system-error";
            } else {
              if (error.response.status == 404) {
                Notify.create({
                  message: "Lỗi không tìm thấy trang",
                  color: "red",
                  position: "top",
                });
                window.location.href = "/notfound";
              } else {
                Notify.create({
                  message: error.response.data.message,
                  color: "red",
                  position: "top",
                });
              }
            }
          }
        }
      } else {
        if (error) {
          if (error.message === "Network Error") {
            Notify.create({
              message: error.message,
              color: "red",
              position: "top",
            });
            window.location.href = "/network-error";
          } else {
            Notify.create({
              message: error.message,
              color: "red",
              position: "top",
            });
            window.location.href = "/system-error";
          }
        } else {
          if (token) {
            UserService.logout(token.refresh_token);
          } else {
            UserService.logout();
            window.location.href = "/login";
          }
        }
      }
    }
  }
}

export default new RESTService();