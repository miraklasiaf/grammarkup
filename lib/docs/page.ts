import { removeFromLast } from './utils'
import { RouteItem } from './get-route-context'

export function findRouteByPath(path: string, routes: RouteItem[]): RouteItem {
  // eslint-disable-next-line
  for (const route of routes) {
    if (route.path && removeFromLast(route.path, '.') === path) {
      return route
    }
    const childPath = route.routes && findRouteByPath(path, route.routes)
    if (childPath) return childPath
  }
}

export function getPaths(nextRoutes, carry = [{ params: { slug: [] } }]) {
  nextRoutes.forEach(({ path, routes }) => {
    if (path) {
      carry.push(removeFromLast(path, '.'))
    } else if (routes) {
      getPaths(routes, carry)
    }
  })

  return carry
}
