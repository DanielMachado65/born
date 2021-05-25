<template>
  <div class="story-line">
    <v-container>
      <v-row md="12">
        <v-col>
          <StoryLineCard />
        </v-col>
        <v-spacer />
      </v-row>
      <v-row md="12">
        <v-spacer />
        <v-col>
          <StoryLineCard />
        </v-col>
      </v-row>
      <v-row md="12">
        <v-col>
          <StoryLineCard />
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { StoryLineCard } from "./index";

export default {
  name: "StoryLine",
  components: { StoryLineCard },
};
</script>

<style scoped>
.story-line {
  height: 100vh;
}
</style>