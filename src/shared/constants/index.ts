import { createI18n } from 'vue-i18n'
import * as HomePage from "./home-page"
const messages =  {
  en:{
      ...HomePage
  }
}
console.log(JSON.stringify(messages))
const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!
  messages
})

export default i18n