<template>
  <div class="p-5 rounded-3" style="background-color: white">
    <div class="d-flex align-center justify-center">
      <img class="mb-1" style="width: 20%" src="../assets/logo.jpg" alt="" />
    </div>

    <h1>S'inscrire</h1>

    <div class="mt-3">
      <label class="fw-bold" for="name">Pseudo</label>
      <div class="mt-2 mb-2">
        <input
          class="form-control customInput"
          type="text"
          v-model="username"
          placeholder="Entrer votre pseudo"
        />
      </div>

      <label class="fw-bold" for="name">Adresse Mail</label>
      <div class="mb-3">
        <div class="mt-2 mb-2">
          <input
            class="form-control customInput"
            type="text"
            v-model="mail"
            placeholder="Entrer votre adresse mail"
          />
          <p v-if="mail.length >= 6" class="purpleColor">Email valide</p>
        </div>

        <div class="button_action">
          <button
            class="btn btn-light customBtnInput"
            v-on:click="mail = ' @gmail.com'"
          >
            @gmail.com
          </button>
          <button
            class="btn btn-light customBtnInput"
            v-on:click="mail = '@yahoo.com'"
          >
            @yahoo.com
          </button>
          <button
            class="btn btn-light customBtnInput"
            v-on:click="mail = '@outlook.com'"
          >
            @outlook.com
          </button>
          <button
            class="btn btn-light customBtnInput"
            v-on:click="mail = '@aol.com'"
          >
            @aol.com
          </button>
        </div>
      </div>

      <label class="fw-bold" for="name">Confirmer l'adresse mail</label>
      <div class="mt-2 mb-2">
        <input
          class="form-control customInput"
          type="text"
          v-model="mail_confirm"
          placeholder="Confirmer l'adresse mail ..."
        />
      </div>
      <label class="fw-bold" for="name">Mot de passe</label>
      <div class="mt-2 mb-2">
        <input
          class="form-control customInput"
          v-model="password_confirmation"
          type="password"
          placeholder="8 caracteres minimum"
          required
        />
      </div>
      <div>
        <div
          :class="{ bar: true, green: password_confirmation.length > 1 }"
        ></div>
        <div
          :class="{ bar: true, green: password_confirmation.length > 3 }"
        ></div>
        <div
          :class="{ bar: true, green: password_confirmation.length > 5 }"
        ></div>
        <div
          :class="{ bar: true, green: password_confirmation.length > 7 }"
        ></div>
      </div>
      <label class="fw-bold" for="name">Confirmer le mot de passe</label>
      <div class="mt-2 mb-2">
        <input
          class="form-control customInput"
          v-model="password"
          type="password"
          placeholder="Confirmer le mot de passe ..."
          required
        />
      </div>
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
        <label for="" class="user-select-none">Se souvenir de moi</label>
      </div>
      <div>
        <a href="" class="purpleColor resetLink">Mot de passe oublié ? </a>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-2 mb-2">
      <button class="w-50 btn btn-primary align-items-center customSubmitBtn" @click="this.register">
        Se connecter
      </button>
    </div>

    <div class="d-flex justify-content-center">
      <span
        >Déja inscrit ?
        <a href="/login" class="purpleColor resetLink">Se connecter</a>
      </span>
    </div>
  </div>
</template>

<script>
import { useAuthModule } from '@/stores/AuthStore'
import { mapStores } from 'pinia'
import { RegisterRequestImpl } from "@/types/RegisterRequest";


export default {
  computed: {
    ...mapStores(useAuthModule)
  },
  data() {
    return {
      password: "",
      userLoggedIn: false,
      username: "",
      mail: "",
      mail_confirm: "",
      password_confirmation: "",
      isActive: false,
      checked: false,
    };
  },
  methods: {
    register: async function() {
      const registerRequest = new RegisterRequestImpl(this.username, this.username, this.mail, this.password, this.username);

      if (this.authStore.register(registerRequest)) {
        console.log(this.authStore.token)
      }

    }
  }
};
</script>
