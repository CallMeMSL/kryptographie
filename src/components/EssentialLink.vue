<template>
  <router-link v-if='!extern' class='routerLink' :to='link'>
    <q-item
      clickable
      tag='a'
      target='_blank'
    >

      <q-item-section
        v-if='icon'
        avatar
      >
        <q-icon :name='icon' />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>{{ caption }}</q-item-label>
      </q-item-section>
    </q-item>
  </router-link>

  <q-item v-else
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>


</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },
    extern: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang='sass'>
a:link
  text-decoration: none
  color: $dark
a:visited
  text-decoration: none
  color: $dark

</style>
