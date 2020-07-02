import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import { enLocale } from './en/index'
import { zhLocale } from './zh/index'

Vue.use(VueI18n)

const localMessages = {
  en: {
    ...enLocale,
    ...elementEnLocale // 将enLocale和elementEnLocale两个JSON格式的内容合并成一个JSON格式的内容
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale // 将zhLocal和elementZhLocale两个JSON格式的内容合并成一个JSON格式的内容
  }
}
const i18n = new VueI18n({
  locale: 'zh', // 提供默认语言
  messages: localMessages
})

export default i18n
