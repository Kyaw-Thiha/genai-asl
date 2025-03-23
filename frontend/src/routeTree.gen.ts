/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as Holistic1Import } from './routes/holistic_1'
import { Route as HolisticOldImport } from './routes/holistic-old'
import { Route as HolisticImport } from './routes/holistic'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as UnitsIndexImport } from './routes/units/index'
import { Route as UnitsIntroIndexImport } from './routes/units/intro/index'
import { Route as UnitsFruitsIndexImport } from './routes/units/fruits/index'
import { Route as UnitsColoursIndexImport } from './routes/units/colours/index'
import { Route as UnitsIntroPleaseImport } from './routes/units/intro/please'
import { Route as UnitsIntroHelloImport } from './routes/units/intro/hello'

// Create/Update Routes

const Holistic1Route = Holistic1Import.update({
  id: '/holistic_1',
  path: '/holistic_1',
  getParentRoute: () => rootRoute,
} as any)

const HolisticOldRoute = HolisticOldImport.update({
  id: '/holistic-old',
  path: '/holistic-old',
  getParentRoute: () => rootRoute,
} as any)

const HolisticRoute = HolisticImport.update({
  id: '/holistic',
  path: '/holistic',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UnitsIndexRoute = UnitsIndexImport.update({
  id: '/units/',
  path: '/units/',
  getParentRoute: () => rootRoute,
} as any)

const UnitsIntroIndexRoute = UnitsIntroIndexImport.update({
  id: '/units/intro/',
  path: '/units/intro/',
  getParentRoute: () => rootRoute,
} as any)

const UnitsFruitsIndexRoute = UnitsFruitsIndexImport.update({
  id: '/units/fruits/',
  path: '/units/fruits/',
  getParentRoute: () => rootRoute,
} as any)

const UnitsColoursIndexRoute = UnitsColoursIndexImport.update({
  id: '/units/colours/',
  path: '/units/colours/',
  getParentRoute: () => rootRoute,
} as any)

const UnitsIntroPleaseRoute = UnitsIntroPleaseImport.update({
  id: '/units/intro/please',
  path: '/units/intro/please',
  getParentRoute: () => rootRoute,
} as any)

const UnitsIntroHelloRoute = UnitsIntroHelloImport.update({
  id: '/units/intro/hello',
  path: '/units/intro/hello',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/holistic': {
      id: '/holistic'
      path: '/holistic'
      fullPath: '/holistic'
      preLoaderRoute: typeof HolisticImport
      parentRoute: typeof rootRoute
    }
    '/holistic-old': {
      id: '/holistic-old'
      path: '/holistic-old'
      fullPath: '/holistic-old'
      preLoaderRoute: typeof HolisticOldImport
      parentRoute: typeof rootRoute
    }
    '/holistic_1': {
      id: '/holistic_1'
      path: '/holistic_1'
      fullPath: '/holistic_1'
      preLoaderRoute: typeof Holistic1Import
      parentRoute: typeof rootRoute
    }
    '/units/': {
      id: '/units/'
      path: '/units'
      fullPath: '/units'
      preLoaderRoute: typeof UnitsIndexImport
      parentRoute: typeof rootRoute
    }
    '/units/intro/hello': {
      id: '/units/intro/hello'
      path: '/units/intro/hello'
      fullPath: '/units/intro/hello'
      preLoaderRoute: typeof UnitsIntroHelloImport
      parentRoute: typeof rootRoute
    }
    '/units/intro/please': {
      id: '/units/intro/please'
      path: '/units/intro/please'
      fullPath: '/units/intro/please'
      preLoaderRoute: typeof UnitsIntroPleaseImport
      parentRoute: typeof rootRoute
    }
    '/units/colours/': {
      id: '/units/colours/'
      path: '/units/colours'
      fullPath: '/units/colours'
      preLoaderRoute: typeof UnitsColoursIndexImport
      parentRoute: typeof rootRoute
    }
    '/units/fruits/': {
      id: '/units/fruits/'
      path: '/units/fruits'
      fullPath: '/units/fruits'
      preLoaderRoute: typeof UnitsFruitsIndexImport
      parentRoute: typeof rootRoute
    }
    '/units/intro/': {
      id: '/units/intro/'
      path: '/units/intro'
      fullPath: '/units/intro'
      preLoaderRoute: typeof UnitsIntroIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/holistic': typeof HolisticRoute
  '/holistic-old': typeof HolisticOldRoute
  '/holistic_1': typeof Holistic1Route
  '/units': typeof UnitsIndexRoute
  '/units/intro/hello': typeof UnitsIntroHelloRoute
  '/units/intro/please': typeof UnitsIntroPleaseRoute
  '/units/colours': typeof UnitsColoursIndexRoute
  '/units/fruits': typeof UnitsFruitsIndexRoute
  '/units/intro': typeof UnitsIntroIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/holistic': typeof HolisticRoute
  '/holistic-old': typeof HolisticOldRoute
  '/holistic_1': typeof Holistic1Route
  '/units': typeof UnitsIndexRoute
  '/units/intro/hello': typeof UnitsIntroHelloRoute
  '/units/intro/please': typeof UnitsIntroPleaseRoute
  '/units/colours': typeof UnitsColoursIndexRoute
  '/units/fruits': typeof UnitsFruitsIndexRoute
  '/units/intro': typeof UnitsIntroIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/holistic': typeof HolisticRoute
  '/holistic-old': typeof HolisticOldRoute
  '/holistic_1': typeof Holistic1Route
  '/units/': typeof UnitsIndexRoute
  '/units/intro/hello': typeof UnitsIntroHelloRoute
  '/units/intro/please': typeof UnitsIntroPleaseRoute
  '/units/colours/': typeof UnitsColoursIndexRoute
  '/units/fruits/': typeof UnitsFruitsIndexRoute
  '/units/intro/': typeof UnitsIntroIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/holistic'
    | '/holistic-old'
    | '/holistic_1'
    | '/units'
    | '/units/intro/hello'
    | '/units/intro/please'
    | '/units/colours'
    | '/units/fruits'
    | '/units/intro'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/holistic'
    | '/holistic-old'
    | '/holistic_1'
    | '/units'
    | '/units/intro/hello'
    | '/units/intro/please'
    | '/units/colours'
    | '/units/fruits'
    | '/units/intro'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/holistic'
    | '/holistic-old'
    | '/holistic_1'
    | '/units/'
    | '/units/intro/hello'
    | '/units/intro/please'
    | '/units/colours/'
    | '/units/fruits/'
    | '/units/intro/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  HolisticRoute: typeof HolisticRoute
  HolisticOldRoute: typeof HolisticOldRoute
  Holistic1Route: typeof Holistic1Route
  UnitsIndexRoute: typeof UnitsIndexRoute
  UnitsIntroHelloRoute: typeof UnitsIntroHelloRoute
  UnitsIntroPleaseRoute: typeof UnitsIntroPleaseRoute
  UnitsColoursIndexRoute: typeof UnitsColoursIndexRoute
  UnitsFruitsIndexRoute: typeof UnitsFruitsIndexRoute
  UnitsIntroIndexRoute: typeof UnitsIntroIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  HolisticRoute: HolisticRoute,
  HolisticOldRoute: HolisticOldRoute,
  Holistic1Route: Holistic1Route,
  UnitsIndexRoute: UnitsIndexRoute,
  UnitsIntroHelloRoute: UnitsIntroHelloRoute,
  UnitsIntroPleaseRoute: UnitsIntroPleaseRoute,
  UnitsColoursIndexRoute: UnitsColoursIndexRoute,
  UnitsFruitsIndexRoute: UnitsFruitsIndexRoute,
  UnitsIntroIndexRoute: UnitsIntroIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/holistic",
        "/holistic-old",
        "/holistic_1",
        "/units/",
        "/units/intro/hello",
        "/units/intro/please",
        "/units/colours/",
        "/units/fruits/",
        "/units/intro/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/holistic": {
      "filePath": "holistic.tsx"
    },
    "/holistic-old": {
      "filePath": "holistic-old.tsx"
    },
    "/holistic_1": {
      "filePath": "holistic_1.tsx"
    },
    "/units/": {
      "filePath": "units/index.tsx"
    },
    "/units/intro/hello": {
      "filePath": "units/intro/hello.tsx"
    },
    "/units/intro/please": {
      "filePath": "units/intro/please.tsx"
    },
    "/units/colours/": {
      "filePath": "units/colours/index.tsx"
    },
    "/units/fruits/": {
      "filePath": "units/fruits/index.tsx"
    },
    "/units/intro/": {
      "filePath": "units/intro/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
