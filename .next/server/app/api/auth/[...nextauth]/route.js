"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5Cmonash-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5Cmonash-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5Cmonash-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5Cmonash-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_User_Desktop_monash_app_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\User\\\\Desktop\\\\monash-app\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_User_Desktop_monash_app_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVc2VyJTVDRGVza3RvcCU1Q21vbmFzaC1hcHAlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1VzZXIlNUNEZXNrdG9wJTVDbW9uYXNoLWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM2QjtBQUMxRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZvbHVudGVlci1hcHAvP2MxZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXG1vbmFzaC1hcHBcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXG1vbmFzaC1hcHBcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5Cmonash-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5Cmonash-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    secret: process.env.SECRET,\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"Your username\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                console.log(\"credentials\", credentials);\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials?.username\n                    }\n                });\n                if (!user) {\n                    throw new Error(\"username or password is incorrect\");\n                }\n                if (!credentials?.password) {\n                    throw new Error(\"password is required\");\n                }\n                const isPasswordValid = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    throw new Error(\"username or password is incorrect\");\n                }\n                if (!user.emailVerified) {\n                    throw new Error(\"Please verify your email before signing in\");\n                }\n                const { password, ...rest } = user;\n                return rest;\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.user = user;\n            }\n            return token;\n        },\n        async session ({ token, session }) {\n            session.user = token.user;\n            return session;\n        }\n    },\n    theme: {\n        colorScheme: \"light\"\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0M7QUFDRDtBQUNpQztBQUN0QztBQUVyQixNQUFNSSxjQUFjO0lBQ3pCQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLE1BQU07SUFDMUJDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVFgsMkVBQW1CQSxDQUFDO1lBQ2xCWSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLFVBQVU7b0JBQ1JDLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLGFBQWE7Z0JBQ2Y7Z0JBQ0FDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXO2dCQUN6Qk8sUUFBUUMsR0FBRyxDQUFDLGVBQWVSO2dCQUMzQixNQUFNUyxPQUFPLE1BQU14QixtREFBTUEsQ0FBQ3dCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN4Q0MsT0FBTzt3QkFDTEMsT0FBT1osYUFBYUM7b0JBQ3RCO2dCQUNGO2dCQUNBLElBQUksQ0FBQ1EsTUFBTTtvQkFDVCxNQUFNLElBQUlJLE1BQU07Z0JBQ2xCO2dCQUNBLElBQUksQ0FBQ2IsYUFBYUssVUFBVTtvQkFDMUIsTUFBTSxJQUFJUSxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxrQkFBa0IsTUFBTTFCLHFEQUFjLENBQzFDWSxZQUFZSyxRQUFRLEVBQ3BCSSxLQUFLSixRQUFRO2dCQUdmLElBQUksQ0FBQ1MsaUJBQWlCO29CQUNwQixNQUFNLElBQUlELE1BQU07Z0JBQ2xCO2dCQUVBLElBQUksQ0FBQ0osS0FBS08sYUFBYSxFQUFFO29CQUN2QixNQUFNLElBQUlILE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU0sRUFBRVIsUUFBUSxFQUFFLEdBQUdZLE1BQU0sR0FBR1I7Z0JBQzlCLE9BQU9RO1lBQ1Q7UUFDRjtLQUNEO0lBRURDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVgsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JXLE1BQU1YLElBQUksR0FBR0E7WUFDZjtZQUNBLE9BQU9XO1FBQ1Q7UUFDQSxNQUFNeEIsU0FBUSxFQUFFd0IsS0FBSyxFQUFFeEIsT0FBTyxFQUFFO1lBQzlCQSxRQUFRYSxJQUFJLEdBQUdXLE1BQU1YLElBQUk7WUFDekIsT0FBT2I7UUFDVDtJQUNGO0lBQ0F5QixPQUFPO1FBQ0xDLGFBQWE7SUFDZjtBQUNGLEVBQUU7QUFFRixNQUFNQyxVQUFVckMsZ0RBQVFBLENBQUNHO0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdm9sdW50ZWVyLWFwcC8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzP2RhMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46IFwiL2F1dGgvc2lnbmluXCIsXHJcbiAgfSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICB1c2VybmFtZToge1xyXG4gICAgICAgICAgbGFiZWw6IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiWW91ciB1c2VybmFtZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlZGVudGlhbHNcIiwgY3JlZGVudGlhbHMpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscz8udXNlcm5hbWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlcm5hbWUgb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxyXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJuYW1lIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdXNlci5lbWFpbFZlcmlmaWVkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdmVyaWZ5IHlvdXIgZW1haWwgYmVmb3JlIHNpZ25pbmcgaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnJlc3QgfSA9IHVzZXI7XHJcbiAgICAgICAgcmV0dXJuIHJlc3Q7XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG5cclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi51c2VyID0gdXNlcjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHRva2VuLCBzZXNzaW9uIH0pIHtcclxuICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjtcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGhlbWU6IHtcclxuICAgIGNvbG9yU2NoZW1lOiBcImxpZ2h0XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJwYWdlcyIsInNpZ25JbiIsInNlc3Npb24iLCJzdHJhdGVneSIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJFcnJvciIsImlzUGFzc3dvcmRWYWxpZCIsImNvbXBhcmUiLCJlbWFpbFZlcmlmaWVkIiwicmVzdCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidGhlbWUiLCJjb2xvclNjaGVtZSIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { PrismaClient } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n// Ensure Prisma client is a singleton\nlet prisma;\nif (false) {} else {\n    // In development, reuse existing instance (if it exists) to prevent memory leaks\n    if (!global.prisma) {\n        global.prisma = new PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUVBLFlBQVksRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxzQ0FBZ0I7QUFFakQsc0NBQXNDO0FBQ3RDLElBQUlDO0FBRUosSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsaUZBQWlGO0lBQ2pGLElBQUksQ0FBQ0MsT0FBT0YsTUFBTSxFQUFFO1FBQ2xCRSxPQUFPRixNQUFNLEdBQUcsSUFBSUY7SUFDdEI7SUFDQUUsU0FBU0UsT0FBT0YsTUFBTTtBQUN4QjtBQUNBLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdm9sdW50ZWVyLWFwcC8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFByaXNtYUNsaWVudCB9ID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpO1xyXG5cclxuLy8gRW5zdXJlIFByaXNtYSBjbGllbnQgaXMgYSBzaW5nbGV0b25cclxubGV0IHByaXNtYTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7IC8vIENyZWF0ZSBuZXcgaW5zdGFuY2UgZm9yIHByb2R1Y3Rpb25cclxufSBlbHNlIHtcclxuICAvLyBJbiBkZXZlbG9wbWVudCwgcmV1c2UgZXhpc3RpbmcgaW5zdGFuY2UgKGlmIGl0IGV4aXN0cykgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcclxuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcclxuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgfVxyXG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxdWlyZSIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5Cmonash-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5Cmonash-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();