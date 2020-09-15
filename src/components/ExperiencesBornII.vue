<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <v-row>
          <v-col md="4">
            <v-img :src="experience1" class="born-ministerio-logo" alt="Apresentação" />
            <h3>Espaço</h3>
            <span>
              Realizado em Fevereiro de 2019 na cidade de
              Curitiba a primeira edição do BORN trouxe
              muita entrega e espiritualidade para nossos
              participantes, além de acomodar todos em
              um ambiente confortável e preparado.
            </span>
          </v-col>
          <v-col md="4">
            <v-img :src="experience2" class="born-ministerio-logo" alt="Apresentação" />
            <h3>Evento</h3>
            <span>
              Dentre todos os valores aprendidos no
              evento como colaboração, desenvolvimento
              pessoal e espiritualidade notamos que
              muitos jovens saíram impactados a mudar
              suas vidas.
            </span>
          </v-col>
          <v-col md="4">
            <v-img :src="experience3" class="born-ministerio-logo" alt="Apresentação" />
            <h3>Participantes</h3>
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
import experience1 from "@/assets/imgs/experience-4.png";
import experience2 from "@/assets/imgs/experience-5.png";
import experience3 from "@/assets/imgs/experience-6.png";
export default {
  name: "ExperiencesBornII",
  data: () => ({
    experience1,
    experience2,
    experience3,
  }),
};
</script>

<style>
</style>