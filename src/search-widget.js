import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import SearchWidget from './components/SearchWidget.vue';

// Registriere das Vue-Element als benutzerdefiniertes Web-Element
const SearchWidgetElement = vueCustomElement(Vue, SearchWidget);

window.customElements.define('search-widget', SearchWidgetElement);