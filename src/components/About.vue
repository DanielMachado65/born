<template>
  <v-container class="mt-10">
    <v-card dark>
      <v-row>
        <v-col md="7">
          <v-img :src="start" class="born-start" height="400" alt="Apresentação" />
        </v-col>
        <v-col md="5">
          <v-row>
            <v-col md="12">
              <h3>O projeto</h3>
              <hr />
              <span>
                O born surgiu da necessidade que
                encontramos inicialmente nas igrejas de viver uma
                experiência única e transformadora com Cristo através de
                novos formatos e realidades do cristianismo
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import start from "@/assets/imgs/start.png";

export default {
  name: "About",
  data: () => ({
    start,
  }),
};
</script>

<style scoped>
hr {
  width: 90%;
}

h3,
span {
  font-family: "League Gothic", sans-serif;
  font-size: 2rem;
}

span {
  font-size: 1.2rem;
  letter-spacing: 0.6px;
}

h3 {
  letter-spacing: 3px;
}
</style>