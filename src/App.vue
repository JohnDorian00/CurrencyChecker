<template>
  <v-app>
    <v-main class="d-flex flex-column justify-center align-center fill-height">
      <v-container v-for="(value, currency) in currencyList" :key="currency">
        <v-row align="center" justify="center">
          <v-text class="text-h4">{{ currency }}</v-text>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <CurrencyOutput :value="value" @input="onInput($event, currency)" @click="clearInput(currency)" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { debounce } from 'lodash'
import CurrencyOutput from './components/CurrencyOutput.vue'

const currencyList = ref({
  EUR: '',
  TRY: '',
  RSD: '',
  RUB: ''
})
const debounceSetValue = debounce((value, currency) => {
  updateAllValues(value, currency)
}, 500)

const updateAllValues = (value, currency) => {
  for (let key in currencyList.value) {
    currencyList.value[key] = fx(value).from(currency).to(key).toFixed(2)
  }
}

const onInput = (value, currency) => {
  if (value && typeof value === 'string') {
    debounceSetValue(value, currency)
  }
}

const clearInput = key => {
  currencyList.value[key] = ''
}
</script>

<style scoped>
.currency-block {
  display: flex;
}
</style>
