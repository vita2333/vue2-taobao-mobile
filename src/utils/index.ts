import Vue from 'vue'

export const isServer: boolean = Vue.prototype.$isServer

/**
 * is defined
 */
export function isDef(value: any): boolean {
  return value !== undefined && value !== null
}
