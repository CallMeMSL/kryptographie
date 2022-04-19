<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Krypto Zeugs
        </q-toolbar-title>

        <div>SS 22</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Erweiterter Euklidischer Algorithmus',
    icon: 'school',
    link: '/eea'
  },
  {
    title: 'Chinesischer Restsatz',
    icon: 'precision_manufacturing',
    caption: 'TODO',
    link: '/cr'
  },
  {
    title: 'Frettlöh Kryptographie SS22',
    caption: 'Übungen + Script',
    icon: 'apple',
    link: 'https://www.math.uni-bielefeld.de/~frettloe/teach/krypto22.html',
    extern: true
  },
  {
    title: 'Frettlöh Kryptographie SS21',
    caption: 'Videos + alte Aufgaben',
    icon: 'play_circle',
    link: 'https://www.math.uni-bielefeld.de/~frettloe/teach/krypto21.html',
    extern: true
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
