/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerMixcloud"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/Mixcloud.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Mixcloud.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Mixcloud_exports = {};\n__export(Mixcloud_exports, {\n  default: () => Mixcloud\n});\nmodule.exports = __toCommonJS(Mixcloud_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://widget.mixcloud.com/media/js/widgetApi.js\";\nconst SDK_GLOBAL = \"Mixcloud\";\nclass Mixcloud extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"duration\", null);\n    __publicField(this, \"currentTime\", null);\n    __publicField(this, \"secondsLoaded\", null);\n    __publicField(this, \"mute\", () => {\n    });\n    __publicField(this, \"unmute\", () => {\n    });\n    __publicField(this, \"ref\", (iframe) => {\n      this.iframe = iframe;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url) {\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Mixcloud2) => {\n      this.player = Mixcloud2.PlayerWidget(this.iframe);\n      this.player.ready.then(() => {\n        this.player.events.play.on(this.props.onPlay);\n        this.player.events.pause.on(this.props.onPause);\n        this.player.events.ended.on(this.props.onEnded);\n        this.player.events.error.on(this.props.error);\n        this.player.events.progress.on((seconds, duration) => {\n          this.currentTime = seconds;\n          this.duration = duration;\n        });\n        this.props.onReady();\n      });\n    }, this.props.onError);\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"seek\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n  }\n  getDuration() {\n    return this.duration;\n  }\n  getCurrentTime() {\n    return this.currentTime;\n  }\n  getSecondsLoaded() {\n    return null;\n  }\n  render() {\n    const { url, config } = this.props;\n    const id = url.match(import_patterns.MATCH_URL_MIXCLOUD)[1];\n    const style = {\n      width: \"100%\",\n      height: \"100%\"\n    };\n    const query = (0, import_utils.queryString)({\n      ...config.options,\n      feed: `/${id}/`\n    });\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"iframe\",\n      {\n        key: id,\n        ref: this.ref,\n        style,\n        src: `https://www.mixcloud.com/widget/iframe/?${query}`,\n        frameBorder: \"0\",\n        allow: \"autoplay\"\n      }\n    );\n  }\n}\n__publicField(Mixcloud, \"displayName\", \"Mixcloud\");\n__publicField(Mixcloud, \"canPlay\", import_patterns.canPlay.mixcloud);\n__publicField(Mixcloud, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvTWl4Y2xvdWQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxtRkFBTztBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyw4RUFBVTtBQUNyQyxzQkFBc0IsbUJBQU8sQ0FBQyxvRkFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEdBQUc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxNQUFNO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL01peGNsb3VkLmpzP2QyYmEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIE1peGNsb3VkX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KE1peGNsb3VkX2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gTWl4Y2xvdWRcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoTWl4Y2xvdWRfZXhwb3J0cyk7XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGltcG9ydF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBpbXBvcnRfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5jb25zdCBTREtfVVJMID0gXCJodHRwczovL3dpZGdldC5taXhjbG91ZC5jb20vbWVkaWEvanMvd2lkZ2V0QXBpLmpzXCI7XG5jb25zdCBTREtfR0xPQkFMID0gXCJNaXhjbG91ZFwiO1xuY2xhc3MgTWl4Y2xvdWQgZXh0ZW5kcyBpbXBvcnRfcmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY2FsbFBsYXllclwiLCBpbXBvcnRfdXRpbHMuY2FsbFBsYXllcik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImR1cmF0aW9uXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJjdXJyZW50VGltZVwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwic2Vjb25kc0xvYWRlZFwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibXV0ZVwiLCAoKSA9PiB7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInVubXV0ZVwiLCAoKSA9PiB7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInJlZlwiLCAoaWZyYW1lKSA9PiB7XG4gICAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uTW91bnQgJiYgdGhpcy5wcm9wcy5vbk1vdW50KHRoaXMpO1xuICB9XG4gIGxvYWQodXJsKSB7XG4gICAgKDAsIGltcG9ydF91dGlscy5nZXRTREspKFNES19VUkwsIFNES19HTE9CQUwpLnRoZW4oKE1peGNsb3VkMikgPT4ge1xuICAgICAgdGhpcy5wbGF5ZXIgPSBNaXhjbG91ZDIuUGxheWVyV2lkZ2V0KHRoaXMuaWZyYW1lKTtcbiAgICAgIHRoaXMucGxheWVyLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBsYXllci5ldmVudHMucGxheS5vbih0aGlzLnByb3BzLm9uUGxheSk7XG4gICAgICAgIHRoaXMucGxheWVyLmV2ZW50cy5wYXVzZS5vbih0aGlzLnByb3BzLm9uUGF1c2UpO1xuICAgICAgICB0aGlzLnBsYXllci5ldmVudHMuZW5kZWQub24odGhpcy5wcm9wcy5vbkVuZGVkKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZXZlbnRzLmVycm9yLm9uKHRoaXMucHJvcHMuZXJyb3IpO1xuICAgICAgICB0aGlzLnBsYXllci5ldmVudHMucHJvZ3Jlc3Mub24oKHNlY29uZHMsIGR1cmF0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlYWR5KCk7XG4gICAgICB9KTtcbiAgICB9LCB0aGlzLnByb3BzLm9uRXJyb3IpO1xuICB9XG4gIHBsYXkoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGxheVwiKTtcbiAgfVxuICBwYXVzZSgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwYXVzZVwiKTtcbiAgfVxuICBzdG9wKCkge1xuICB9XG4gIHNlZWtUbyhzZWNvbmRzLCBrZWVwUGxheWluZyA9IHRydWUpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZWVrXCIsIHNlY29uZHMpO1xuICAgIGlmICgha2VlcFBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH1cbiAgc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gIH1cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVyYXRpb247XG4gIH1cbiAgZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWU7XG4gIH1cbiAgZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1cmwsIGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpZCA9IHVybC5tYXRjaChpbXBvcnRfcGF0dGVybnMuTUFUQ0hfVVJMX01JWENMT1VEKVsxXTtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICB9O1xuICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIGltcG9ydF91dGlscy5xdWVyeVN0cmluZykoe1xuICAgICAgLi4uY29uZmlnLm9wdGlvbnMsXG4gICAgICBmZWVkOiBgLyR7aWR9L2BcbiAgICB9KTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImlmcmFtZVwiLFxuICAgICAge1xuICAgICAgICBrZXk6IGlkLFxuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgc3JjOiBgaHR0cHM6Ly93d3cubWl4Y2xvdWQuY29tL3dpZGdldC9pZnJhbWUvPyR7cXVlcnl9YCxcbiAgICAgICAgZnJhbWVCb3JkZXI6IFwiMFwiLFxuICAgICAgICBhbGxvdzogXCJhdXRvcGxheVwiXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuX19wdWJsaWNGaWVsZChNaXhjbG91ZCwgXCJkaXNwbGF5TmFtZVwiLCBcIk1peGNsb3VkXCIpO1xuX19wdWJsaWNGaWVsZChNaXhjbG91ZCwgXCJjYW5QbGF5XCIsIGltcG9ydF9wYXR0ZXJucy5jYW5QbGF5Lm1peGNsb3VkKTtcbl9fcHVibGljRmllbGQoTWl4Y2xvdWQsIFwibG9vcE9uRW5kZWRcIiwgdHJ1ZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/Mixcloud.js\n"));

/***/ })

}]);