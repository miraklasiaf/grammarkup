/**
 * Returns the siblings of a specific route (that is the previous and next routes).
 */
export function getRouteContext(currentRoute, routes, ctx = {}) {
  if (!currentRoute) {
    return ctx
  }

  const { path } = currentRoute
  const { parent } = ctx

  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i]

    if (route.routes) {
      ctx.parent = route
      ctx = getRouteContext(currentRoute, route.routes, ctx)

      // If the active route and the next route was found in nested routes, return it
      if (ctx.nextRoute) return ctx
    }

    if (!route) continue
    if (!route.path) continue

    if (ctx.route) {
      // const isNext = parent && i === 0
      ctx.nextRoute = route
      return ctx
    }

    if (route && route.path === path) {
      ctx.route = {
        ...currentRoute,
        title:
          parent && !parent.heading
            ? `${parent.title}: ${currentRoute.title}`
            : currentRoute.title
      }
      // Continue the loop until we know the next route
      continue
    }

    // const isPrev = parent && !parent.heading && !routes[i + 1]?.path
    ctx.prevRoute = route
  }

  // The loop ended and the previous route was found, or nothing
  return ctx
}
