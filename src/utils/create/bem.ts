/**
 * BEM规范:
 * block 更高级别的抽象或组件。
 * block__element 代表 .block 的后代，用于形成一个完整的 .block 的整体。
 * block--modifier 代表 .block 不同状态或不同版本。
 */
export type Mod = string | { [key: string]: any }
export type Mods = Mod | Mod[]

const ELEMENT = '__'
const MODS = '--'

/**
 * join('name')                 =>  "name",
 * join('name', 'el', MODS)     =>  "name--el",
 * join('name', 'el', ELEMENT)  =>  "name__el
 */
function join(name: string, el?: string, symbol?: string): string {
  return el ? name + symbol + el : name
}

/**
 * prefix('name', 'header')   => name--header
 * prefix('name', ['header', 'body'])  =>  ["name--header", "name--body"]
 * prefix('name', { header: 'header', body: 'body' })  =>
 * {name--header: "header",name--body: "body"}
 */
function prefix(name: string, mods: Mods): Mods {
  if (typeof mods === 'string') {
    return join(name, mods, MODS)
  }

  if (Array.isArray(mods)) {
    return mods.map((item) => <Mods>prefix(name, item))
  }

  const ret: Mods = {}

  if (mods) {
    Object.keys(mods).forEach((key) => {
      ret[name + MODS + key] = mods[key]
    })
  }

  return ret
}

/**
 * var bem = createBEM('name')
 * bem('el')  =>  name__el
 * bem('el', 'mods')  =>  ["name__el", "name__el--mods"]
 * bem(['mod1', 'mod2'])  =>  ["name", ["name--mod1", "name--mod2"]
 */
function createBEM(name: string) {
  return function(el?: Mods, mods?: Mods): Mods {
    if (el && typeof el !== 'string') {
      mods = el
      el = ''
    }

    el = join(name, <string>el, ELEMENT)
    return mods ? [el, prefix(el, mods)] : el
  }
}

export type BEM = ReturnType<typeof createBEM>
