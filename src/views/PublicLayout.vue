<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer>
        <v-list>
          <v-list-item
            prepend-avatar="https://lh3.googleusercontent.com/ogw/AAEL6sinwH-a2ev21AomEHA6fhOmbTnkHVJzxJFF9tHPNA=s64-c-mo"
            title="TheoAhga"
            subtitle="theo.clere@gmailcom"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-group
            expand-icon="mdi-plus"
            collapse-icon="mdi-minus"
            value="Friends"
          >
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Friends"></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon], i) in friends"
              :key="i"
              :title="title"
              :prepend-avatar="icon"
              :value="title"
            ></v-list-item>
          </v-list-group>

          <v-list-item
            prepend-icon="mdi-star"
            title="Servers"
            value="servers"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script>
import { KJUR, b64utoutf8 } from "jsrsasign";
import "../assets/css2.css";
export default {
  name: "PublicLayout",
  beforeRouteEnter(to, from, next) {
    if (!localStorage.getItem("token")) {
      next("/register");
    } else {
      next();
    }
  },
  async mounted() {
    let token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aGVvQWhnYSIsImlhdCI6MTY3ODEzOTI5NywiZXhwIjoxNjc4MTQwODI5fQ.dDf2dr0wlqVAgBZxjzOqt5h_SD2j55BT5x3J6bU3EQo";
    console.log("Encoded token: " + token);
    let secret_key =
      "404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970";
    console.log(
      KJUR.jws.JWS.readSafeJSONString(b64utoutf8(token.split(".")[0]))
    );
    let z = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(token.split(".")[1]));
    console.log(z);
    console.log(new Date(z.iat * 1000));
    let now = Date.now();
    console.log(new Date(z.exp * 1000));
    console.log(now > z.exp);
    console.log(KJUR.jws.JWS.verifyJWT(token, secret_key, { alg: ["HS256"] }));
  },
  data: () => ({
    friends: [
      [
        "Bob",
        "https://lh3.googleusercontent.com/ogw/AAEL6sinwH-a2ev21AomEHA6fhOmbTnkHVJzxJFF9tHPNA=s64-c-mo",
      ],
      [
        "Julieng",
        "https://lh3.googleusercontent.com/ogw/AAEL6sinwH-a2ev21AomEHA6fhOmbTnkHVJzxJFF9tHPNA=s64-c-mo",
      ],
    ],
  }),
};
</script>
