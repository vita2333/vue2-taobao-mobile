import { createComponent } from '@/utils/create/components'
import { BEM, createBEM } from '@/utils/create/bem'

type CreateNamespaceReturn = [ReturnType<typeof createComponent>, BEM]

export function createNamespace(name: string): CreateNamespaceReturn {
  name = 'vita-' + name
  return [createComponent(name), createBEM(name)]
}
