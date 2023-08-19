<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img
                src="/img/ill2.svg"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Baixar Demonstração</h1>
              <h1 class="font-weight-light">
                Os repositórios de frontend e backend funcionam separadamente ambos com
                seus frameworks, sendo o backend em Java com Spring e o frontend em
                javascript com vue
              </h1>
              <v-btn
                rounded
                outlined
                href="https://github.com/AntiKevin/LoanGeniusAPI"
                target="_blank"
                large
                color="white"
                class="mt-4"
              >
                <v-icon class="mr-2"> mdi-github </v-icon>
                Backend
              </v-btn>
              <v-btn
                rounded
                outlined
                href="https://github.com/AntiKevin/LoanGeniusFrontend"
                target="_blank"
                large
                color="white"
                class="mt-4"
              >
                <v-icon class="mr-2"> mdi-github </v-icon>
                Frontend
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>
