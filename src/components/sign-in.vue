<template>
  <div class="p-5 rounded-3" style="background-color: white">
    <div class="d-flex align-center justify-center">
      <img class="mb-1" style="width: 20%" src="../assets/logo.jpg" alt="" />
    </div>

    <h1>Se connecter</h1>

    <div class="mt-3 mb-3">
      <label class="fw-bold" for="name">Adresse Mail</label>
      <div class="mt-2 mb-2">
        <input
          class="form-control customInput"
          type="text"
          v-model="username"
          placeholder="E-mail"
        />
      </div>

      <div class="button_action">
        <button
          class="btn btn-light customBtnInput"
          v-on:click="username = ' @gmail.com'"
        >
          @gmail.com
        </button>
        <button
          class="btn btn-light customBtnInput"
          v-on:click="username = '@yahoo.com'"
        >
          @yahoo.com
        </button>
        <button
          class="btn btn-light customBtnInput"
          v-on:click="username = '@outlook.com'"
        >
          @outlook.com
        </button>
        <button
          class="btn btn-light customBtnInput"
          v-on:click="username = '@aol.com'"
        >
          @aol.com
        </button>
      </div>
    </div>

    <label class="fw-bold" for="name">Mot de passe</label>
    <div class="mt-2 mb-2">
      <input
        class="form-control customInput"
        v-model="password"
        type="password"
        :name="string"
        placeholder="Entrer votre mot de passe"
        required
      />
    </div>

    <div class="mt-2 mb-2 d-flex justify-content-between">
      <div v-on:click="checked = !checked">
        <input
          class="customInput me-2"
          type="checkbox"
          name=""
          id=""
          v-model="checked"
        />
        <label class="user-select-none" for="">Se souvenir de moi</label>
      </div>
      <div>
        <a href="" class="purpleColor resetLink">Mot de passe oublié ? </a>
      </div>
    </div>

    <div class="d-flex justify-content-center mt-2 mb-2">
      <button class="w-50 btn btn-primary align-items-center customSubmitBtn">
        Se connecter
      </button>
    </div>
    <div class="d-flex justify-content-center">
      <span
        >Pas encore de compte ?
        <a href="/register" class="purpleColor resetLink">S'inscrire</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingInComponent",
  data() {
    return {
      password: "",
      userLoggedIn: false,
      username: "",
      isActive: false,
    };
  },

  toggle() {
    this.isActive = !this.enable;
  },
};
</script>
