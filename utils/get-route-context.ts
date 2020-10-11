export interface RouteItem {
  title: string
  path?: string
  open?: boolean
  heading?: boolean
  routes: RouteItem[]
}

export interface Routes {
  routes: RouteItem[]
}

export interface Page {
  id: string
  html: string
  title: string
  toc: any
}

export interface Post {
  slug: string
  content: string
  title: string
  date: string
  author: string
  toc: any
  ogImage: {
    url: string
  }
  coverImage: string
}

export interface RouteContext {
  parent?: RouteItem
  prevRoute?: RouteItem
  nextRoute?: RouteItem
  route?: RouteItem
}

export function getRouteContext(
  currentRoute: RouteItem,
  routes: RouteItem[],
  ctx: RouteContext = {},
) {
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
            : currentRoute.title,
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
