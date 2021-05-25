<template>
  <v-container id="subscribe">
    <v-card dark>
      <v-row>
        <v-col>
          <h1 class="text-center">Inscrição</h1>
          <v-divider />
        </v-col>
      </v-row>
      <v-container>
        <v-row>
          <v-col md="6">
            <v-text-field
              type="text"
              label="Nome"
              color="purple darken-3"
              hint="Preencha com o seu nome completo"
              persistent-hint
            />
          </v-col>
          <v-col md="6">
            <v-text-field
              type="email"
              label="E-mail"
              hint="Preencha com o seu e-mail"
              persistent-hint
            />
          </v-col>
        </v-row>
        <v-row>
          <v-spacer />
          <v-col md="2">
            <v-btn small color="purple darken-3 " class="white--text">
              <v-icon small class="mr-2">fas fa-check-square</v-icon>Finalizar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Subscribe",
  data: () => ({}),
};
</script>

<style scoped>
#subscribe {
  height: 70vh;
}

#subscribe .flower-logo {
  margin: 0 auto;
}

#subscribe h1 {
  font-family: "League Gothic", sans-serif;
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#subscribe h3.button {
  text-align: center;
  border: white 2px solid;
  border-radius: 20px;
  font-family: "League Gothic", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 3px;
}

#subscribe span {
  width: 60%;
  margin: 0 auto;
  font-family: "League Gothic", sans-serif;
}

@media only screen and (min-width: 599px) {
  #subscribe h3.button {
    margin: 0 auto;
    width: 60%;
  }
}
</style>