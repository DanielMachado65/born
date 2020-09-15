<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <v-row>
          <v-col md="4 text-center box-center">
            <v-img
              :src="experience4"
              width="300px"
              class="experience img-center"
              alt="Foto da Experiencia"
            />
            <h3 class="mt-2">Espaço</h3>
            <span>
              Realizado em Fevereiro de 2019 na cidade de
              Curitiba a primeira edição do BORN trouxe
              muita entrega e espiritualidade para nossos
              participantes, além de acomodar todos em
              um ambiente confortável e preparado.
            </span>
          </v-col>
          <v-col md="4 text-center box-center">
            <v-img
              :src="experience5"
              width="300px"
              class="experience img-center"
              alt="Foto da Experiencia"
            />
            <h3 class="mt-2">Evento</h3>
            <span>
              Dentre todos os valores aprendidos no
              evento como colaboração, desenvolvimento
              pessoal e espiritualidade notamos que
              muitos jovens saíram impactados a mudar
              suas vidas.
            </span>
          </v-col>
          <v-col md="4 text-center box-center">
            <v-img
              :src="experience6"
              width="300px"
              class="experience img-center"
              alt="Foto da Experiencia"
            />
            <h3 class="mt-2">Participantes</h3>
            <span>
              Com aproximadamente 70 participantes
              presentes fora os colaboradores tivemos
              atividades radicais complementares como o
              passeio de raft. Jovens de diferentes estados e
              cidades dos 18 aos 35 anos.
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import experience4 from "@/assets/imgs/experience-4.png";
import experience5 from "@/assets/imgs/experience-5.png";
import experience6 from "@/assets/imgs/experience-6.png";
export default {
  name: "ExperiencesBornI",
  data: () => ({
    experience4,
    experience5,
    experience6,
  }),
};
</script>

<style scoped>
h3 {
  font-family: "League Gothic", sans-serif;
  font-size: 2rem;
}

.img-center {
  margin: 0 auto;
}

.box-center {
  border-top: 1px solid white;
  border-right: 1px solid white;
  padding: 20px;
}

.box-center:last-child {
  border-right: 0;
}
</style>