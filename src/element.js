console.log('element.js geladen');
import { createApp } from 'vue';
import wrap from '@vue/web-component-wrapper';
import SearchWidget from './components/SearchWidget.vue';

// Erstelle die Vue-Anwendung
const app = createApp(SearchWidget);

// Wickle die Vue-Komponente als Web-Komponente
const SearchWidgetElement = wrap(app, SearchWidget);

// Definiere das benutzerdefinierte Web-Element
if (!customElements.get('search-widget')) {
  customElements.define('search-widget', SearchWidgetElement);
  console.log('Web-Komponente "search-widget" definiert.');
} else {
  console.log('Web-Komponente "search-widget" bereits definiert.');
}