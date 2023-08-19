<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2">Sobre</h1>
              <h1 class="font-weight-light display-1 mb-3">
                Calcule e preveja possiveis perdas!
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img src="/img/icon1.svg" max-width="60px" class="mr-4" />
                  <p class="text-justify">
                    O LoanGenius é um software feito para calcular e prever preços e
                    valores dos seus investimentos ou empréstimos pessoais utilizando boas
                    práticas no desenvolvimento de software
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img src="/img/icon2.svg" max-width="60px" class="mr-4" />
                  <p class="text-justify">
                    o LoanGenius oferece previsões precisas e confiáveis, capacitando você
                    a tomar decisões financeiras mais informadas do que nunca.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img src="/img/icon3.svg" max-width="60px" class="mr-4" />
                  <p class="text-justify">
                    Simplifique a complexidade, alçando novos patamares de sabedoria
                    financeira e trilhando o caminho do sucesso com o LoanGenius.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
