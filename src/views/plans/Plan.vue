<template>
  <v-container id="plan">
    <v-card dark>
      <v-row>
        <v-col>
          <h1 class="text-center">Investimento - Padrinhos</h1>
          <v-divider class="center" dark size="2px" width="50%" />
        </v-col>
      </v-row>
      <v-container>
        <v-row>
          <v-col class="text-center box-select" @click="_onChangePlan('basic')">
            <v-img :src="florI" width="150px" height="150px" class="flower-logo mb-5" alt="Flor" />
            <h3 class="button mb-4" :style="isActive('basic')">Amarelo - Basic</h3>
            <span>R$ 34,99 mensal, incluso 1 camiseta</span>
          </v-col>
          <v-col class="text-center box-select" @click="_onChangePlan('medium')">
            <v-img :src="florII" width="150px" height="150px" class="flower-logo mb-5" alt="Flor" />
            <h3 class="button mb-4" :style="isActive('medium')">Vermelho - Medium</h3>
            <span>R$ 99,99 mensal, incluso 1 camiseta + 1 inscrição</span>
          </v-col>
          <v-col class="text-center box-select" @click="_onChangePlan('highest')">
            <v-img :src="florIII" width="150px" height="150px" class="flower-logo mb-5" alt="Flor" />
            <h3 class="button mb-4" :style="isActive('highest')">Roxo - Big Dreams</h3>
            <span>R$ 199,99 mensal, incluso 1 camiseta + 2 inscrições +1 bíblia comentada por</span>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col>
          <btn-submit text="Quero Assinar" :disabled="readyForSubmit" />
        </v-col>
      </v-row>
    </v-card>
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
    plan: null,
  }),
  computed: {
    readyForSubmit() {
      return !this.plan;
    },
  },
  components: {
    BtnSubmit,
  },
  methods: {
    isActive(plan) {
      console.log(plan);
      return this.plan == plan
        ? { background: "#6a1b9a", borderColor: "#6a1b9a" }
        : {};
    },
    _onChangePlan(state) {
      this.plan = state;
    },
  },
};
</script>

<style scoped>
#plan {
  height: 70vh;
}

#plan .center {
  margin: 0 auto;
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
  font-size: 0.875rem;
  text-align: center;
  border: white 2px solid;
  border-radius: 20px;
  font-family: "League Gothic", sans-serif;
  letter-spacing: 3px;
}

#plan span {
  width: 60%;
  margin: 0 auto;
  font-family: "League Gothic", sans-serif;
}

#plan .box-select:hover {
  opacity: 0.6;
  cursor: pointer;
}

@media only screen and (min-width: 599px) {
  #plan h3.button {
    margin: 0 auto;
    width: 60%;
  }
}
</style>