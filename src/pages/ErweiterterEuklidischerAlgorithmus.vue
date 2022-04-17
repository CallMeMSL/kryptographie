<template>
  <q-page>
    <div class="col q-ma-md">

      <div class="row">
        <q-input class="col-6" label="k" v-model="k"></q-input>
        <q-input class="col-6" label="m" v-model="m"></q-input>
      </div>

      <div class="row justify-center q-ma-lg">
        <q-btn @click="updateData" :disable="!isValidInput">Berechnen</q-btn>
      </div>

      <q-markup-table>
        <thead>
        <tr>
          <th class="text-left">n</th>
          <th class="text-right">q</th>
          <th class="text-right">a</th>
          <th class="text-right">c</th>
          <th class="text-right">d</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(entry,n) in data_filtered" :key="entry[0]">
          <td class="text-left">{{ n + 1 }}</td>
          <td class="text-right" v-for="num in entry" :key="num">
            {{ num }}
          </td>

        </tr>

        </tbody>


      </q-markup-table>
    </div>
  </q-page>

</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import {erweiterterEuklidischerAlgorithmus,} from 'src/algorithms';

const k = ref('')
const m = ref('')

function isPositiveInteger(str: string) {
  str = str.trim();
  if (!str) {
    return false;
  }
  str = str.replace(/^0+/, "") || "0";
  const n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n >= 0;
}

const isValidInput = computed(() =>
  isPositiveInteger(k.value) && isPositiveInteger(m.value) && Number(k.value) > Number(m.value)
)


const data = ref([] as [number, number, number, number][]);
const data_filtered = computed(() =>
  data.value.map(entry =>
    entry.map(num => {
      if (isNaN(num)) {
        return '-';
      } else {
        return num;
      }
    })
  )
)

function updateData() {
  data.value = erweiterterEuklidischerAlgorithmus(parseInt(k.value), parseInt(m.value))
}

</script>

<style scoped>

</style>
