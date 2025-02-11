import DefaultTheme from "vitepress/theme";
import Card from "./components/Card.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Card", Card);
  },
};