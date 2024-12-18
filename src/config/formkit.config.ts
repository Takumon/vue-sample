import { ja } from '@formkit/i18n'
import { defaultConfig, plugin } from '@formkit/vue'
import type { App } from 'vue'
import '@formkit/themes/genesis'
import { genesisIcons } from '@formkit/icons'
import { dayjsOutsideSFC } from './dayjs.config'
import type { FormKitValidationRule, FormKitValidationMessage } from '@formkit/validation'

const greaterOrEqual: { rule: FormKitValidationRule; message: FormKitValidationMessage } = {
  rule: (node, otherName: string) => {
    const parent = node.at('$parent')
    if (!parent || !parent.value || typeof parent.value !== 'object') return true

    const otherValue = parent.value[otherName]
    if (otherValue === '' || isNaN(Number(otherValue))) return true
    if (node.value === '' || isNaN(Number(node.value))) return true

    return Number(node.value) >= Number(otherValue)
  },
  message: ({ name, args, node }) => {
    const otherLabel = node.at('$parent').children.find((c) => c.name === args[0]).context.label
    return `${name}は${otherLabel}以上を指定してください`
  },
}

export function useFormkit(app: App<Element>) {
  app.use(
    plugin,
    defaultConfig({
      locales: { ja },
      locale: 'ja',
      icons: { ...genesisIcons },
      rules: { greaterOrEqual: greaterOrEqual.rule },
      messages: {
        ja: {
          validation: {
            ...ja.validation,
            greaterOrEqual: greaterOrEqual.message,
            required({ name }) {
              return `${name}は必須項目です`
            },
            length({ name, args }) {
              if (args.length === 2) return `${name}は${args[0]}～${args[1]}文字で入力してください`
              return `${name}は${args[0]}文字で入力してください`
            },
            date_after_or_equal({ name, args }) {
              return `${name}は${dayjsOutsideSFC(args[0]).format('YYYY-MM-DD')}以後の日付を指定してください。`
            },
            date_before_or_equal({ name, args }) {
              return `${name}は${dayjsOutsideSFC(args[0]).format('YYYY-MM-DD')}以前の日付を指定してください。`
            },
          },
        },
      },
    }),
  )
}
