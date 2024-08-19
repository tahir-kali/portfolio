import { createI18n } from 'vue-i18n'
import * as HomePage from "./home-page"
const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!
  messages: {
    en:{
        ...HomePage
    }
}
})

export default i18n