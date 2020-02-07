type ScrollElement = HTMLElement | Window

export function getVisibleHeight(element: ScrollElement) {
  return element === window
    ? element.innerHeight
    : (<HTMLElement>element).getBoundingClientRect().top
}
