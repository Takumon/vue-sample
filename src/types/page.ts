import type { VBreadcrumbs } from 'vuetify/components'

export type BreadcrumbsItems = Array<(typeof VBreadcrumbs)['items']>

export type PageContainerProps = {
  title: string
  breadcrumbs: BreadcrumbsItems
}
