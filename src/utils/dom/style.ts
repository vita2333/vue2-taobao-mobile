export function isHidden(element: HTMLElement) {
  const style = window.getComputedStyle(element)
  const isHidden = style.display === 'none'
  const isParentHidden = element.offsetParent === null && style.position !== 'fixed'
  return isHidden || isParentHidden
}
