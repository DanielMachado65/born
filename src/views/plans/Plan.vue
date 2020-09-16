<template>
  <v-container id="plan">
    <v-card dark>
      <v-row>
        <v-col>
          <h1 class="text-center">Investimento - Padrinhos</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-img :src="florI" width="150px" height="150px" class="flower-logo mb-5" alt="Flor" />
          <h3 class="button mb-4">Amarelo - Basic</h3>
          <span>R$ 34,99 mensal, incluso 1 camiseta</span>
        </v-col>
        <v-col class="text-center">
          <v-img :src="florII" width="150px" height="150px" class="flower-logo mb-5" alt="Flor" />
          <h3 class="button mb-4">Vermelho - Medium</h3>
          <span>R$ 99,99 mensal, incluso 1 camiseta + 1 inscrição</span>
        </v-col>
        <v-col class="text-center">
          <v-img :src="florIII" width="150px" height="150px" class="flower-logo mb-5" alt="Flor" />
          <h3 class="button mb-4">Roxo - Big Dreams</h3>
          <span>R$ 199,99 mensal, incluso 1 camiseta + 2 inscrições +1 bíblia comentada por</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <btn-submit text="Quero Assinar" />
        </v-col>
      </v-row>
    </v-card>

    <div class="lateral-left">Projeto que transforma</div>
    <div class="lateral-right">Projeto que transforma</div>
  </v-container>
</template>

<script>
import florI from "../../assets/imgs/flor-1.png";
import florII from "../../assets/imgs/flor-3.png";
import florIII from "../../assets/imgs/flor-2.png";
import { BtnSubmit } from "@/components/";

export default {
  name: "Plan",
  data: () => ({
    florI,
    florII,
    florIII,
  }),
  components: {
    BtnSubmit,
  },
};
</script>

<style scoped>
#plan {
  height: 70vh;
}

#plan .flower-logo {
  margin: 0 auto;
}

#plan h1 {
  font-family: "League Gothic", sans-serif;
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#plan h3.button {
  text-align: center;
  border: white 2px solid;
  border-radius: 20px;
  font-family: "League Gothic", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 3px;
}

#plan .lateral-right,
#plan .lateral-left {
  position: absolute;
  font-family: "League Gothic", sans-serif;
  font-size: 1.4rem;
}

#plan .lateral-left {
  top: 380px;
  left: -45px;
  transform: rotate(-90deg);
}

#plan .lateral-right {
  top: 380px;
  right: -45px;
  transform: rotate(-90deg);
}

#plan span {
  width: 60%;
  margin: 0 auto;
  font-family: "League Gothic", sans-serif;
}

@media only screen and (min-width: 599px) {
  #plan h3.button {
    margin: 0 auto;
    width: 60%;
  }
}
</style>