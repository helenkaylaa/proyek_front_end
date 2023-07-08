<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-left">
        <div class="background-image">El Coffee</div>
        <img src="@/assets/image4.png" alt="Login Image" class="enlarged-image" />
      </div>
      <div class="login-right">
        <h2>Welcome</h2>
        <form @submit.prevent="login">
          <div>
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" placeholder="Username" />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div class="login-options">
          <a href="#">Register</a>
          <button class="google-login">Login with Google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      // Contoh validasi sederhana
      if (this.username === "admin" && this.password === "password") {
        // Redirect ke halaman utama setelah login berhasil
        this.$router.push("/");
      } else {
        alert("Login gagal! Periksa username dan password Anda.");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 91vh;
  background-color: #f7efe9;
}

.login-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 800px;
}

.login-left {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #985e49;
}

.enlarged-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.login-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}

h2 {
  text-align: center;
  color: #985e49;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
}

label {
  margin-bottom: 10px;
  color: #985e49;
}

input {
  padding: 5px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #985e49;
  width: 100%;
}

button {
  padding: 10px;
  background-color: #985e49;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #784935;
}

button:active {
  background-color: #5c3726;
}

.login-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.login-options a {
  margin-bottom: 10px;
  color: #985e49;
  text-decoration: none;
}

.google-login {
  padding: 10px;
  background-color: #fff;
  color: #985e49;
  border: 1px solid #985e49;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.google-login:hover {
  background-color: #f2f2f2;
}
</style>
