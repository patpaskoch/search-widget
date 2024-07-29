<template>
  <div id="app" class="bg-unsplash-background bg-cover bg-center min-h-screen">
    <search-widget
      :app-id="'CC14BU6E4Y'"
      :api-key="'62f84edececbca44cb0078e3b0094b5b'"
      :index-name="'wp_searchable_posts'"
    ></search-widget>
  </div>
</template>

<script>
import SearchWidget from './components/SearchWidget.vue';

export default {
  name: 'App',
  components: {
    SearchWidget
  }
}
</script>

<style>
/* Hier kannst du zusätzliche Styles hinzufügen, falls nötig */
</style>