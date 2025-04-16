// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"n0fw4":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5e0263af3c14d121";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kTBnD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _chromaJs = require("chroma-js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const color3Input = document.getElementById("color3");
const color4Input = document.getElementById("color4");
const button = document.getElementById("mixBtn");
const pixelContainer = document.querySelector(".pixel-container");
let quadraticScale = [];
// antar kvadrat
const rows = 200;
const columns = 200;
for(let i = 0; i < rows; i++){
    let row = [];
    let pixelRow = document.createElement("div");
    pixelRow.classList.add("pixelrow");
    for(let j = 0; j < columns; j++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.id = "pixel" + i.toString() + '-' + j.toString();
        pixelRow.appendChild(pixel);
        row.push(pixel);
    }
    pixelContainer.appendChild(pixelRow);
    quadraticScale.push(row);
}
button.addEventListener("click", ()=>{
    const color1 = {
        "value": color1Input.value,
        "x": 0,
        "y": 0
    };
    const color2 = {
        "value": color2Input.value,
        "x": columns,
        "y": 0
    };
    const color3 = {
        "value": color3Input.value,
        "x": 0,
        "y": rows
    };
    const color4 = {
        "value": color4Input.value,
        "x": columns,
        "y": rows
    };
    //   if(resultScale.length > 1) {
    //     for(let i =0; i<resultScale.length; i++) {
    //         resultScale[i].remove()
    //     }
    //     resultScale = []
    //   }
    let colors = [
        color1.value,
        color2.value,
        color3.value,
        color4.value
    ];
    for(let i = 0; i < rows; i++)for(let j = 0; j < columns; j++){
        let pixel = quadraticScale[i][j];
        let weights = calculateWeight(calculateDistances(i, j));
        let color = (0, _chromaJsDefault.default).average(colors, 'lch', [
            weights[0],
            weights[1],
            weights[2],
            weights[3]
        ]);
        pixel.style.backgroundColor = color;
    }
});
let calculateDistances = (x, y)=>{
    let distances = [];
    let c1dist = Math.sqrt(x ** 2 + y ** 2);
    let c2dist = Math.sqrt((columns - x) ** 2 + y ** 2);
    let c3dist = Math.sqrt(x ** 2 + (rows - y) ** 2);
    let c4dist = Math.sqrt((columns - x) ** 2 + (rows - y) ** 2);
    distances.push(c1dist);
    distances.push(c2dist);
    distances.push(c3dist);
    distances.push(c4dist);
    return distances;
};
let calculateWeight = (distances)=>{
    let maxDistance = Math.sqrt(rows ** 2);
    let weights = [];
    for(let i = 0; i < distances.length; i++)weights.push(distances[i] / maxDistance);
    return weights;
};

},{"chroma-js":"jSIg1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jSIg1":[function(require,module,exports,__globalThis) {
// feel free to comment out anything to rollup
// a smaller chroma.js bundle
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "analyze", ()=>(0, _analyzeJs.analyze));
parcelHelpers.export(exports, "average", ()=>(0, _averageJsDefault.default));
parcelHelpers.export(exports, "bezier", ()=>(0, _bezierJsDefault.default));
parcelHelpers.export(exports, "blend", ()=>(0, _blendJsDefault.default));
parcelHelpers.export(exports, "brewer", ()=>(0, _colorbrewerJsDefault.default));
parcelHelpers.export(exports, "Color", ()=>(0, _colorJsDefault.default));
parcelHelpers.export(exports, "colors", ()=>(0, _w3Cx11JsDefault.default));
parcelHelpers.export(exports, "contrast", ()=>(0, _contrastJsDefault.default));
parcelHelpers.export(exports, "contrastAPCA", ()=>(0, _contrastAPCAJsDefault.default));
parcelHelpers.export(exports, "cubehelix", ()=>(0, _cubehelixJsDefault.default));
parcelHelpers.export(exports, "deltaE", ()=>(0, _deltaEJsDefault.default));
parcelHelpers.export(exports, "distance", ()=>(0, _distanceJsDefault.default));
parcelHelpers.export(exports, "input", ()=>(0, _inputJsDefault.default));
parcelHelpers.export(exports, "limits", ()=>(0, _analyzeJs.limits));
parcelHelpers.export(exports, "mix", ()=>(0, _mixJsDefault.default));
parcelHelpers.export(exports, "interpolate", ()=>(0, _mixJsDefault.default));
parcelHelpers.export(exports, "random", ()=>(0, _randomJsDefault.default));
parcelHelpers.export(exports, "scale", ()=>(0, _scaleJsDefault.default));
parcelHelpers.export(exports, "scales", ()=>(0, _scalesJsDefault.default));
parcelHelpers.export(exports, "valid", ()=>(0, _validJsDefault.default));
var _chromaJs = require("./src/chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
// io --> convert colors
var _indexJs = require("./src/io/named/index.js");
// operators --> modify existing Colors
var _alphaJs = require("./src/ops/alpha.js");
var _clippedJs = require("./src/ops/clipped.js");
var _darkenJs = require("./src/ops/darken.js");
var _getJs = require("./src/ops/get.js");
var _luminanceJs = require("./src/ops/luminance.js");
var _mixJs = require("./src/ops/mix.js");
var _premultiplyJs = require("./src/ops/premultiply.js");
var _saturateJs = require("./src/ops/saturate.js");
var _setJs = require("./src/ops/set.js");
var _shadeJs = require("./src/ops/shade.js");
// interpolators
var _rgbJs = require("./src/interpolator/rgb.js");
var _lrgbJs = require("./src/interpolator/lrgb.js");
var _labJs = require("./src/interpolator/lab.js");
var _lchJs = require("./src/interpolator/lch.js");
var _numJs = require("./src/interpolator/num.js");
var _hcgJs = require("./src/interpolator/hcg.js");
var _hsiJs = require("./src/interpolator/hsi.js");
var _hslJs = require("./src/interpolator/hsl.js");
var _hsvJs = require("./src/interpolator/hsv.js");
var _oklabJs = require("./src/interpolator/oklab.js");
var _oklchJs = require("./src/interpolator/oklch.js");
// generators -- > create new colors
var _averageJs = require("./src/generator/average.js");
var _averageJsDefault = parcelHelpers.interopDefault(_averageJs);
var _bezierJs = require("./src/generator/bezier.js");
var _bezierJsDefault = parcelHelpers.interopDefault(_bezierJs);
var _blendJs = require("./src/generator/blend.js");
var _blendJsDefault = parcelHelpers.interopDefault(_blendJs);
var _cubehelixJs = require("./src/generator/cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);
var _mixJs1 = require("./src/generator/mix.js");
var _mixJsDefault = parcelHelpers.interopDefault(_mixJs1);
var _randomJs = require("./src/generator/random.js");
var _randomJsDefault = parcelHelpers.interopDefault(_randomJs);
var _scaleJs = require("./src/generator/scale.js");
var _scaleJsDefault = parcelHelpers.interopDefault(_scaleJs);
// other utility methods
var _analyzeJs = require("./src/utils/analyze.js");
var _contrastJs = require("./src/utils/contrast.js");
var _contrastJsDefault = parcelHelpers.interopDefault(_contrastJs);
var _contrastAPCAJs = require("./src/utils/contrastAPCA.js");
var _contrastAPCAJsDefault = parcelHelpers.interopDefault(_contrastAPCAJs);
var _deltaEJs = require("./src/utils/delta-e.js");
var _deltaEJsDefault = parcelHelpers.interopDefault(_deltaEJs);
var _distanceJs = require("./src/utils/distance.js");
var _distanceJsDefault = parcelHelpers.interopDefault(_distanceJs);
var _validJs = require("./src/utils/valid.js");
var _validJsDefault = parcelHelpers.interopDefault(_validJs);
var _inputJs = require("./src/io/input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
// scale
var _scalesJs = require("./src/utils/scales.js");
var _scalesJsDefault = parcelHelpers.interopDefault(_scalesJs);
// colors
var _w3Cx11Js = require("./src/colors/w3cx11.js");
var _w3Cx11JsDefault = parcelHelpers.interopDefault(_w3Cx11Js);
var _colorbrewerJs = require("./src/colors/colorbrewer.js");
var _colorbrewerJsDefault = parcelHelpers.interopDefault(_colorbrewerJs);
var _colorJs = require("./src/Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _indexJs1 = require("./src/io/cmyk/index.js");
parcelHelpers.exportAll(_indexJs1, exports);
var _indexJs2 = require("./src/io/css/index.js");
parcelHelpers.exportAll(_indexJs2, exports);
var _indexJs3 = require("./src/io/gl/index.js");
parcelHelpers.exportAll(_indexJs3, exports);
var _indexJs4 = require("./src/io/hcg/index.js");
parcelHelpers.exportAll(_indexJs4, exports);
var _indexJs5 = require("./src/io/hex/index.js");
parcelHelpers.exportAll(_indexJs5, exports);
var _indexJs6 = require("./src/io/hsi/index.js");
parcelHelpers.exportAll(_indexJs6, exports);
var _indexJs7 = require("./src/io/hsl/index.js");
parcelHelpers.exportAll(_indexJs7, exports);
var _indexJs8 = require("./src/io/hsv/index.js");
parcelHelpers.exportAll(_indexJs8, exports);
var _indexJs9 = require("./src/io/lab/index.js");
parcelHelpers.exportAll(_indexJs9, exports);
var _indexJs10 = require("./src/io/lch/index.js");
parcelHelpers.exportAll(_indexJs10, exports);
var _indexJs11 = require("./src/io/num/index.js");
parcelHelpers.exportAll(_indexJs11, exports);
var _indexJs12 = require("./src/io/rgb/index.js");
parcelHelpers.exportAll(_indexJs12, exports);
var _indexJs13 = require("./src/io/temp/index.js");
parcelHelpers.exportAll(_indexJs13, exports);
var _indexJs14 = require("./src/io/oklab/index.js");
parcelHelpers.exportAll(_indexJs14, exports);
var _indexJs15 = require("./src/io/oklch/index.js");
parcelHelpers.exportAll(_indexJs15, exports);
Object.assign((0, _chromaJsDefault.default), {
    analyze: (0, _analyzeJs.analyze),
    average: (0, _averageJsDefault.default),
    bezier: (0, _bezierJsDefault.default),
    blend: (0, _blendJsDefault.default),
    brewer: (0, _colorbrewerJsDefault.default),
    Color: (0, _colorJsDefault.default),
    colors: (0, _w3Cx11JsDefault.default),
    contrast: (0, _contrastJsDefault.default),
    contrastAPCA: (0, _contrastAPCAJsDefault.default),
    cubehelix: (0, _cubehelixJsDefault.default),
    deltaE: (0, _deltaEJsDefault.default),
    distance: (0, _distanceJsDefault.default),
    input: (0, _inputJsDefault.default),
    interpolate: (0, _mixJsDefault.default),
    limits: (0, _analyzeJs.limits),
    mix: (0, _mixJsDefault.default),
    random: (0, _randomJsDefault.default),
    scale: (0, _scaleJsDefault.default),
    scales: (0, _scalesJsDefault.default),
    valid: (0, _validJsDefault.default)
});
exports.default = (0, _chromaJsDefault.default);

},{"./src/chroma.js":"2Aasu","./src/io/named/index.js":"1A98e","./src/ops/alpha.js":"grhWS","./src/ops/clipped.js":"eWwyG","./src/ops/darken.js":"dkeTB","./src/ops/get.js":"lj5Ds","./src/ops/luminance.js":"9WKuE","./src/ops/mix.js":"kxFBu","./src/ops/premultiply.js":"fN6ln","./src/ops/saturate.js":"lAwbd","./src/ops/set.js":"cstEi","./src/ops/shade.js":"bQDXg","./src/interpolator/rgb.js":"jubma","./src/interpolator/lrgb.js":"j6IyH","./src/interpolator/lab.js":"g0Kwb","./src/interpolator/lch.js":"hDk4r","./src/interpolator/num.js":"2j5rZ","./src/interpolator/hcg.js":"jip9I","./src/interpolator/hsi.js":"9FVFa","./src/interpolator/hsl.js":"h47hp","./src/interpolator/hsv.js":"lecQJ","./src/interpolator/oklab.js":"5OCFy","./src/interpolator/oklch.js":"lDgXn","./src/generator/average.js":"fnEtx","./src/generator/bezier.js":"7x2Jq","./src/generator/blend.js":"3x1ja","./src/generator/cubehelix.js":"4o2XX","./src/generator/mix.js":"foq1J","./src/generator/random.js":"24BSy","./src/generator/scale.js":"2aKFN","./src/utils/analyze.js":"1h07X","./src/utils/contrast.js":"aC4aE","./src/utils/contrastAPCA.js":"gaIvF","./src/utils/delta-e.js":"5Ic5x","./src/utils/distance.js":"bF7kw","./src/utils/valid.js":"9u1UL","./src/io/input.js":"6uG1f","./src/utils/scales.js":"3cYAQ","./src/colors/w3cx11.js":"5jSNQ","./src/colors/colorbrewer.js":"eIDB0","./src/Color.js":"iEdmQ","./src/io/cmyk/index.js":"eLRqy","./src/io/css/index.js":"lLDXK","./src/io/gl/index.js":"ePoQj","./src/io/hcg/index.js":"5gVUp","./src/io/hex/index.js":"8TFfV","./src/io/hsi/index.js":"cC5hJ","./src/io/hsl/index.js":"fd8sJ","./src/io/hsv/index.js":"lxtnp","./src/io/lab/index.js":"dk46t","./src/io/lch/index.js":"huczT","./src/io/num/index.js":"7miyd","./src/io/rgb/index.js":"6g6ex","./src/io/temp/index.js":"cgnpL","./src/io/oklab/index.js":"bcuUU","./src/io/oklch/index.js":"6qN8H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2Aasu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("./Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _versionJs = require("./version.js");
const chroma = (...args)=>{
    return new (0, _colorJsDefault.default)(...args);
};
chroma.version = (0, _versionJs.version);
exports.default = chroma;

},{"./Color.js":"iEdmQ","./version.js":"2nwKW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iEdmQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./utils/index.js");
var _inputJs = require("./io/input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
class Color {
    constructor(...args){
        const me = this;
        if ((0, _indexJs.type)(args[0]) === 'object' && args[0].constructor && args[0].constructor === this.constructor) // the argument is already a Color instance
        return args[0];
        // last argument could be the mode
        let mode = (0, _indexJs.last)(args);
        let autodetect = false;
        if (!mode) {
            autodetect = true;
            if (!(0, _inputJsDefault.default).sorted) {
                (0, _inputJsDefault.default).autodetect = (0, _inputJsDefault.default).autodetect.sort((a, b)=>b.p - a.p);
                (0, _inputJsDefault.default).sorted = true;
            }
            // auto-detect format
            for (let chk of (0, _inputJsDefault.default).autodetect){
                mode = chk.test(...args);
                if (mode) break;
            }
        }
        if ((0, _inputJsDefault.default).format[mode]) {
            const rgb = (0, _inputJsDefault.default).format[mode].apply(null, autodetect ? args : args.slice(0, -1));
            me._rgb = (0, _indexJs.clip_rgb)(rgb);
        } else throw new Error('unknown format: ' + args);
        // add alpha channel
        if (me._rgb.length === 3) me._rgb.push(1);
    }
    toString() {
        if ((0, _indexJs.type)(this.hex) == 'function') return this.hex();
        return `[${this._rgb.join(',')}]`;
    }
}
exports.default = Color;

},{"./utils/index.js":"56eUN","./io/input.js":"6uG1f","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"56eUN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clip_rgb", ()=>(0, _clipRgbJsDefault.default));
parcelHelpers.export(exports, "limit", ()=>(0, _limitJsDefault.default));
parcelHelpers.export(exports, "type", ()=>(0, _typeJsDefault.default));
parcelHelpers.export(exports, "unpack", ()=>(0, _unpackJsDefault.default));
parcelHelpers.export(exports, "last", ()=>(0, _lastJsDefault.default));
parcelHelpers.export(exports, "PI", ()=>PI);
parcelHelpers.export(exports, "TWOPI", ()=>TWOPI);
parcelHelpers.export(exports, "PITHIRD", ()=>PITHIRD);
parcelHelpers.export(exports, "DEG2RAD", ()=>DEG2RAD);
parcelHelpers.export(exports, "RAD2DEG", ()=>RAD2DEG);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "rnd2", ()=>rnd2);
parcelHelpers.export(exports, "rnd3", ()=>rnd3);
parcelHelpers.export(exports, "reverse3", ()=>reverse3);
var _clipRgbJs = require("./clip_rgb.js");
var _clipRgbJsDefault = parcelHelpers.interopDefault(_clipRgbJs);
var _limitJs = require("./limit.js");
var _limitJsDefault = parcelHelpers.interopDefault(_limitJs);
var _typeJs = require("./type.js");
var _typeJsDefault = parcelHelpers.interopDefault(_typeJs);
var _unpackJs = require("./unpack.js");
var _unpackJsDefault = parcelHelpers.interopDefault(_unpackJs);
var _lastJs = require("./last.js");
var _lastJsDefault = parcelHelpers.interopDefault(_lastJs);
const { PI, min, max } = Math;
const rnd2 = (a)=>Math.round(a * 100) / 100;
const rnd3 = (a)=>Math.round(a * 100) / 100;
const TWOPI = PI * 2;
const PITHIRD = PI / 3;
const DEG2RAD = PI / 180;
const RAD2DEG = 180 / PI;
/**
 * Reverse the first three elements of an array
 *
 * @param {any[]} arr
 * @returns {any[]}
 */ function reverse3(arr) {
    return [
        ...arr.slice(0, 3).reverse(),
        ...arr.slice(3)
    ];
}

},{"./clip_rgb.js":"6gkgh","./limit.js":"gHAQ0","./type.js":"fOTxv","./unpack.js":"6yPV5","./last.js":"86Rtw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6gkgh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _limitJs = require("./limit.js");
var _limitJsDefault = parcelHelpers.interopDefault(_limitJs);
exports.default = (rgb)=>{
    rgb._clipped = false;
    rgb._unclipped = rgb.slice(0);
    for(let i = 0; i <= 3; i++){
        if (i < 3) {
            if (rgb[i] < 0 || rgb[i] > 255) rgb._clipped = true;
            rgb[i] = (0, _limitJsDefault.default)(rgb[i], 0, 255);
        } else if (i === 3) rgb[i] = (0, _limitJsDefault.default)(rgb[i], 0, 1);
    }
    return rgb;
};

},{"./limit.js":"gHAQ0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gHAQ0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const { min, max } = Math;
exports.default = (x, low = 0, high = 1)=>{
    return min(max(low, x), high);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fOTxv":[function(require,module,exports,__globalThis) {
// ported from jQuery's $.type
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || 'object';
    });
const classToType = {};
for (let name of [
    'Boolean',
    'Number',
    'String',
    'Function',
    'Array',
    'Date',
    'RegExp',
    'Undefined',
    'Null'
])classToType[`[object ${name}]`] = name.toLowerCase();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6yPV5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeJs = require("./type.js");
var _typeJsDefault = parcelHelpers.interopDefault(_typeJs);
exports.default = (args, keyOrder = null)=>{
    // if called with more than 3 arguments, we return the arguments
    if (args.length >= 3) return Array.prototype.slice.call(args);
    // with less than 3 args we check if first arg is object
    // and use the keyOrder string to extract and sort properties
    if ((0, _typeJsDefault.default)(args[0]) == 'object' && keyOrder) return keyOrder.split('').filter((k)=>args[0][k] !== undefined).map((k)=>args[0][k]);
    // otherwise we just return the first argument
    // (which we suppose is an array of args)
    return args[0].slice(0);
};

},{"./type.js":"fOTxv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"86Rtw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeJs = require("./type.js");
var _typeJsDefault = parcelHelpers.interopDefault(_typeJs);
exports.default = (args)=>{
    if (args.length < 2) return null;
    const l = args.length - 1;
    if ((0, _typeJsDefault.default)(args[l]) == 'string') return args[l].toLowerCase();
    return null;
};

},{"./type.js":"fOTxv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6uG1f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    format: {},
    autodetect: []
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2nwKW":[function(require,module,exports,__globalThis) {
// this gets updated automatically
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = '3.1.2';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1A98e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _indexJs = require("../../utils/index.js");
var _w3Cx11Js = require("../../colors/w3cx11.js");
var _w3Cx11JsDefault = parcelHelpers.interopDefault(_w3Cx11Js);
var _hex2RgbJs = require("../hex/hex2rgb.js");
var _hex2RgbJsDefault = parcelHelpers.interopDefault(_hex2RgbJs);
var _rgb2HexJs = require("../hex/rgb2hex.js");
var _rgb2HexJsDefault = parcelHelpers.interopDefault(_rgb2HexJs);
(0, _colorJsDefault.default).prototype.name = function() {
    const hex = (0, _rgb2HexJsDefault.default)(this._rgb, 'rgb');
    for (let n of Object.keys((0, _w3Cx11JsDefault.default))){
        if ((0, _w3Cx11JsDefault.default)[n] === hex) return n.toLowerCase();
    }
    return hex;
};
(0, _inputJsDefault.default).format.named = (name)=>{
    name = name.toLowerCase();
    if ((0, _w3Cx11JsDefault.default)[name]) return (0, _hex2RgbJsDefault.default)((0, _w3Cx11JsDefault.default)[name]);
    throw new Error('unknown color name: ' + name);
};
(0, _inputJsDefault.default).autodetect.push({
    p: 5,
    test: (h, ...rest)=>{
        if (!rest.length && (0, _indexJs.type)(h) === 'string' && (0, _w3Cx11JsDefault.default)[h.toLowerCase()]) return 'named';
    }
});

},{"../../Color.js":"iEdmQ","../input.js":"6uG1f","../../utils/index.js":"56eUN","../../colors/w3cx11.js":"5jSNQ","../hex/hex2rgb.js":"dcRRX","../hex/rgb2hex.js":"3njBP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5jSNQ":[function(require,module,exports,__globalThis) {
/**
	X11 color names

	http://www.w3.org/TR/css3-color/#svg-color
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const w3cx11 = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    laserlemon: '#ffff54',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrod: '#fafad2',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    maroon2: '#7f0000',
    maroon3: '#b03060',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    purple2: '#7f007f',
    purple3: '#a020f0',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
};
exports.default = w3cx11;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dcRRX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
const hex2rgb = (hex)=>{
    if (hex.match(RE_HEX)) {
        // remove optional leading #
        if (hex.length === 4 || hex.length === 7) hex = hex.substr(1);
        // expand short-notation to full six-digit
        if (hex.length === 3) {
            hex = hex.split('');
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        const u = parseInt(hex, 16);
        const r = u >> 16;
        const g = u >> 8 & 0xff;
        const b = u & 0xff;
        return [
            r,
            g,
            b,
            1
        ];
    }
    // match rgba hex format, eg #FF000077
    if (hex.match(RE_HEXA)) {
        if (hex.length === 5 || hex.length === 9) // remove optional leading #
        hex = hex.substr(1);
        // expand short-notation to full eight-digit
        if (hex.length === 4) {
            hex = hex.split('');
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        }
        const u = parseInt(hex, 16);
        const r = u >> 24 & 0xff;
        const g = u >> 16 & 0xff;
        const b = u >> 8 & 0xff;
        const a = Math.round((u & 0xff) / 0xff * 100) / 100;
        return [
            r,
            g,
            b,
            a
        ];
    }
    // we used to check for css colors here
    // if _input.css? and rgb = _input.css hex
    //     return rgb
    throw new Error(`unknown hex color: ${hex}`);
};
exports.default = hex2rgb;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3njBP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const { round } = Math;
const rgb2hex = (...args)=>{
    let [r, g, b, a] = (0, _indexJs.unpack)(args, 'rgba');
    let mode = (0, _indexJs.last)(args) || 'auto';
    if (a === undefined) a = 1;
    if (mode === 'auto') mode = a < 1 ? 'rgba' : 'rgb';
    r = round(r);
    g = round(g);
    b = round(b);
    const u = r << 16 | g << 8 | b;
    let str = '000000' + u.toString(16); //#.toUpperCase();
    str = str.substr(str.length - 6);
    let hxa = '0' + round(a * 255).toString(16);
    hxa = hxa.substr(hxa.length - 2);
    switch(mode.toLowerCase()){
        case 'rgba':
            return `#${str}${hxa}`;
        case 'argb':
            return `#${hxa}${str}`;
        default:
            return `#${str}`;
    }
};
exports.default = rgb2hex;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"grhWS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _indexJs = require("../utils/index.js");
(0, _colorJsDefault.default).prototype.alpha = function(a, mutate = false) {
    if (a !== undefined && (0, _indexJs.type)(a) === 'number') {
        if (mutate) {
            this._rgb[3] = a;
            return this;
        }
        return new (0, _colorJsDefault.default)([
            this._rgb[0],
            this._rgb[1],
            this._rgb[2],
            a
        ], 'rgb');
    }
    return this._rgb[3];
};

},{"../Color.js":"iEdmQ","../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eWwyG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
(0, _colorJsDefault.default).prototype.clipped = function() {
    return this._rgb._clipped || false;
};

},{"../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dkeTB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _indexJs = require("../io/lab/index.js");
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _labConstantsJs = require("../io/lab/lab-constants.js");
var _labConstantsJsDefault = parcelHelpers.interopDefault(_labConstantsJs);
(0, _colorJsDefault.default).prototype.darken = function(amount = 1) {
    const me = this;
    const lab = me.lab();
    lab[0] -= (0, _labConstantsJsDefault.default).Kn * amount;
    return new (0, _colorJsDefault.default)(lab, 'lab').alpha(me.alpha(), true);
};
(0, _colorJsDefault.default).prototype.brighten = function(amount = 1) {
    return this.darken(-amount);
};
(0, _colorJsDefault.default).prototype.darker = (0, _colorJsDefault.default).prototype.darken;
(0, _colorJsDefault.default).prototype.brighter = (0, _colorJsDefault.default).prototype.brighten;

},{"../io/lab/index.js":"dk46t","../Color.js":"iEdmQ","../io/lab/lab-constants.js":"jZW48","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dk46t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lab", ()=>lab);
parcelHelpers.export(exports, "getLabWhitePoint", ()=>(0, _labConstantsJs.getLabWhitePoint));
parcelHelpers.export(exports, "setLabWhitePoint", ()=>(0, _labConstantsJs.setLabWhitePoint));
var _indexJs = require("../../utils/index.js");
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _lab2RgbJs = require("./lab2rgb.js");
var _lab2RgbJsDefault = parcelHelpers.interopDefault(_lab2RgbJs);
var _rgb2LabJs = require("./rgb2lab.js");
var _rgb2LabJsDefault = parcelHelpers.interopDefault(_rgb2LabJs);
var _labConstantsJs = require("./lab-constants.js");
(0, _colorJsDefault.default).prototype.lab = function() {
    return (0, _rgb2LabJsDefault.default)(this._rgb);
};
const lab = (...args)=>new (0, _colorJsDefault.default)(...args, 'lab');
Object.assign((0, _chromaJsDefault.default), {
    lab,
    getLabWhitePoint: (0, _labConstantsJs.getLabWhitePoint),
    setLabWhitePoint: (0, _labConstantsJs.setLabWhitePoint)
});
(0, _inputJsDefault.default).format.lab = (0, _lab2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 2,
    test: (...args)=>{
        args = (0, _indexJs.unpack)(args, 'lab');
        if ((0, _indexJs.type)(args) === 'array' && args.length === 3) return 'lab';
    }
});

},{"../../utils/index.js":"56eUN","../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","./lab2rgb.js":"fFSlu","./rgb2lab.js":"bEuhm","./lab-constants.js":"jZW48","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fFSlu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xyz2rgb", ()=>xyz2rgb);
var _labConstantsJs = require("./lab-constants.js");
var _labConstantsJsDefault = parcelHelpers.interopDefault(_labConstantsJs);
var _indexJs = require("../../utils/index.js");
/*
 * L* [0..100]
 * a [-100..100]
 * b [-100..100]
 */ const lab2rgb = (...args)=>{
    args = (0, _indexJs.unpack)(args, 'lab');
    const [L, a, b] = args;
    const [x, y, z] = lab2xyz(L, a, b);
    const [r, g, b_] = xyz2rgb(x, y, z);
    return [
        r,
        g,
        b_,
        args.length > 3 ? args[3] : 1
    ];
};
const lab2xyz = (L, a, b)=>{
    const { kE, kK, kKE, Xn, Yn, Zn } = (0, _labConstantsJsDefault.default);
    const fy = (L + 16.0) / 116.0;
    const fx = 0.002 * a + fy;
    const fz = fy - 0.005 * b;
    const fx3 = fx * fx * fx;
    const fz3 = fz * fz * fz;
    const xr = fx3 > kE ? fx3 : (116.0 * fx - 16.0) / kK;
    const yr = L > kKE ? Math.pow((L + 16.0) / 116.0, 3.0) : L / kK;
    const zr = fz3 > kE ? fz3 : (116.0 * fz - 16.0) / kK;
    const x = xr * Xn;
    const y = yr * Yn;
    const z = zr * Zn;
    return [
        x,
        y,
        z
    ];
};
const compand = (linear)=>{
    /* sRGB */ const sign = Math.sign(linear);
    linear = Math.abs(linear);
    return (linear <= 0.0031308 ? linear * 12.92 : 1.055 * Math.pow(linear, 1.0 / 2.4) - 0.055) * sign;
};
const xyz2rgb = (x, y, z)=>{
    const { MtxAdaptMa, MtxAdaptMaI, MtxXYZ2RGB, RefWhiteRGB, Xn, Yn, Zn } = (0, _labConstantsJsDefault.default);
    const As = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
    const Bs = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
    const Cs = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
    const Ad = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
    const Bd = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
    const Cd = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
    const X1 = (x * MtxAdaptMa.m00 + y * MtxAdaptMa.m10 + z * MtxAdaptMa.m20) * (Ad / As);
    const Y1 = (x * MtxAdaptMa.m01 + y * MtxAdaptMa.m11 + z * MtxAdaptMa.m21) * (Bd / Bs);
    const Z1 = (x * MtxAdaptMa.m02 + y * MtxAdaptMa.m12 + z * MtxAdaptMa.m22) * (Cd / Cs);
    const X2 = X1 * MtxAdaptMaI.m00 + Y1 * MtxAdaptMaI.m10 + Z1 * MtxAdaptMaI.m20;
    const Y2 = X1 * MtxAdaptMaI.m01 + Y1 * MtxAdaptMaI.m11 + Z1 * MtxAdaptMaI.m21;
    const Z2 = X1 * MtxAdaptMaI.m02 + Y1 * MtxAdaptMaI.m12 + Z1 * MtxAdaptMaI.m22;
    const r = compand(X2 * MtxXYZ2RGB.m00 + Y2 * MtxXYZ2RGB.m10 + Z2 * MtxXYZ2RGB.m20);
    const g = compand(X2 * MtxXYZ2RGB.m01 + Y2 * MtxXYZ2RGB.m11 + Z2 * MtxXYZ2RGB.m21);
    const b = compand(X2 * MtxXYZ2RGB.m02 + Y2 * MtxXYZ2RGB.m12 + Z2 * MtxXYZ2RGB.m22);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
exports.default = lab2rgb;

},{"./lab-constants.js":"jZW48","../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jZW48":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setLabWhitePoint", ()=>setLabWhitePoint);
parcelHelpers.export(exports, "getLabWhitePoint", ()=>getLabWhitePoint);
const labConstants = {
    // Corresponds roughly to RGB brighter/darker
    Kn: 18,
    // D65 standard referent
    labWhitePoint: 'd65',
    Xn: 0.95047,
    Yn: 1,
    Zn: 1.08883,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 0.008856452,
    kE: 216.0 / 24389.0,
    kKE: 8.0,
    kK: 24389.0 / 27.0,
    RefWhiteRGB: {
        // sRGB
        X: 0.95047,
        Y: 1,
        Z: 1.08883
    },
    MtxRGB2XYZ: {
        m00: 0.4124564390896922,
        m01: 0.21267285140562253,
        m02: 0.0193338955823293,
        m10: 0.357576077643909,
        m11: 0.715152155287818,
        m12: 0.11919202588130297,
        m20: 0.18043748326639894,
        m21: 0.07217499330655958,
        m22: 0.9503040785363679
    },
    MtxXYZ2RGB: {
        m00: 3.2404541621141045,
        m01: -0.9692660305051868,
        m02: 0.055643430959114726,
        m10: -1.5371385127977166,
        m11: 1.8760108454466942,
        m12: -0.2040259135167538,
        m20: -0.498531409556016,
        m21: 0.041556017530349834,
        m22: 1.0572251882231791
    },
    // used in rgb2xyz
    As: 0.9414285350000001,
    Bs: 1.040417467,
    Cs: 1.089532651,
    MtxAdaptMa: {
        m00: 0.8951,
        m01: -0.7502,
        m02: 0.0389,
        m10: 0.2664,
        m11: 1.7135,
        m12: -0.0685,
        m20: -0.1614,
        m21: 0.0367,
        m22: 1.0296
    },
    MtxAdaptMaI: {
        m00: 0.9869929054667123,
        m01: 0.43230526972339456,
        m02: -0.008528664575177328,
        m10: -0.14705425642099013,
        m11: 0.5183602715367776,
        m12: 0.04004282165408487,
        m20: 0.15996265166373125,
        m21: 0.0492912282128556,
        m22: 0.9684866957875502
    }
};
exports.default = labConstants;
// taken from https://de.mathworks.com/help/images/ref/whitepoint.html
const ILLUMINANTS = new Map([
    // ASTM E308-01
    [
        'a',
        [
            1.0985,
            0.35585
        ]
    ],
    // Wyszecki & Stiles, p. 769
    [
        'b',
        [
            1.0985,
            0.35585
        ]
    ],
    // C ASTM E308-01
    [
        'c',
        [
            0.98074,
            1.18232
        ]
    ],
    // D50 (ASTM E308-01)
    [
        'd50',
        [
            0.96422,
            0.82521
        ]
    ],
    // D55 (ASTM E308-01)
    [
        'd55',
        [
            0.95682,
            0.92149
        ]
    ],
    // D65 (ASTM E308-01)
    [
        'd65',
        [
            0.95047,
            1.08883
        ]
    ],
    // E (ASTM E308-01)
    [
        'e',
        [
            1,
            1,
            1
        ]
    ],
    // F2 (ASTM E308-01)
    [
        'f2',
        [
            0.99186,
            0.67393
        ]
    ],
    // F7 (ASTM E308-01)
    [
        'f7',
        [
            0.95041,
            1.08747
        ]
    ],
    // F11 (ASTM E308-01)
    [
        'f11',
        [
            1.00962,
            0.6435
        ]
    ],
    [
        'icc',
        [
            0.96422,
            0.82521
        ]
    ]
]);
function setLabWhitePoint(name) {
    const ill = ILLUMINANTS.get(String(name).toLowerCase());
    if (!ill) throw new Error('unknown Lab illuminant ' + name);
    labConstants.labWhitePoint = name;
    labConstants.Xn = ill[0];
    labConstants.Zn = ill[1];
}
function getLabWhitePoint() {
    return labConstants.labWhitePoint;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bEuhm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgb2xyz", ()=>rgb2xyz);
var _labConstantsJs = require("./lab-constants.js");
var _labConstantsJsDefault = parcelHelpers.interopDefault(_labConstantsJs);
var _indexJs = require("../../utils/index.js");
const rgb2lab = (...args)=>{
    const [r, g, b, ...rest] = (0, _indexJs.unpack)(args, 'rgb');
    const [x, y, z] = rgb2xyz(r, g, b);
    const [L, a, b_] = xyz2lab(x, y, z);
    return [
        L,
        a,
        b_,
        ...rest.length > 0 && rest[0] < 1 ? [
            rest[0]
        ] : []
    ];
};
function xyz2lab(x, y, z) {
    const { Xn, Yn, Zn, kE, kK } = (0, _labConstantsJsDefault.default);
    const xr = x / Xn;
    const yr = y / Yn;
    const zr = z / Zn;
    const fx = xr > kE ? Math.pow(xr, 1.0 / 3.0) : (kK * xr + 16.0) / 116.0;
    const fy = yr > kE ? Math.pow(yr, 1.0 / 3.0) : (kK * yr + 16.0) / 116.0;
    const fz = zr > kE ? Math.pow(zr, 1.0 / 3.0) : (kK * zr + 16.0) / 116.0;
    return [
        116.0 * fy - 16.0,
        500.0 * (fx - fy),
        200.0 * (fy - fz)
    ];
}
function gammaAdjustSRGB(companded) {
    const sign = Math.sign(companded);
    companded = Math.abs(companded);
    const linear = companded <= 0.04045 ? companded / 12.92 : Math.pow((companded + 0.055) / 1.055, 2.4);
    return linear * sign;
}
const rgb2xyz = (r, g, b)=>{
    // normalize and gamma adjust
    r = gammaAdjustSRGB(r / 255);
    g = gammaAdjustSRGB(g / 255);
    b = gammaAdjustSRGB(b / 255);
    const { MtxRGB2XYZ, MtxAdaptMa, MtxAdaptMaI, Xn, Yn, Zn, As, Bs, Cs } = (0, _labConstantsJsDefault.default);
    let x = r * MtxRGB2XYZ.m00 + g * MtxRGB2XYZ.m10 + b * MtxRGB2XYZ.m20;
    let y = r * MtxRGB2XYZ.m01 + g * MtxRGB2XYZ.m11 + b * MtxRGB2XYZ.m21;
    let z = r * MtxRGB2XYZ.m02 + g * MtxRGB2XYZ.m12 + b * MtxRGB2XYZ.m22;
    const Ad = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
    const Bd = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
    const Cd = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
    let X = x * MtxAdaptMa.m00 + y * MtxAdaptMa.m10 + z * MtxAdaptMa.m20;
    let Y = x * MtxAdaptMa.m01 + y * MtxAdaptMa.m11 + z * MtxAdaptMa.m21;
    let Z = x * MtxAdaptMa.m02 + y * MtxAdaptMa.m12 + z * MtxAdaptMa.m22;
    X *= Ad / As;
    Y *= Bd / Bs;
    Z *= Cd / Cs;
    x = X * MtxAdaptMaI.m00 + Y * MtxAdaptMaI.m10 + Z * MtxAdaptMaI.m20;
    y = X * MtxAdaptMaI.m01 + Y * MtxAdaptMaI.m11 + Z * MtxAdaptMaI.m21;
    z = X * MtxAdaptMaI.m02 + Y * MtxAdaptMaI.m12 + Z * MtxAdaptMaI.m22;
    return [
        x,
        y,
        z
    ];
};
exports.default = rgb2lab;

},{"./lab-constants.js":"jZW48","../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lj5Ds":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
(0, _colorJsDefault.default).prototype.get = function(mc) {
    const [mode, channel] = mc.split('.');
    const src = this[mode]();
    if (channel) {
        const i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
        if (i > -1) return src[i];
        throw new Error(`unknown channel ${channel} in mode ${mode}`);
    } else return src;
};

},{"../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9WKuE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _indexJs = require("../utils/index.js");
const { pow } = Math;
const EPS = 1e-7;
const MAX_ITER = 20;
(0, _colorJsDefault.default).prototype.luminance = function(lum, mode = 'rgb') {
    if (lum !== undefined && (0, _indexJs.type)(lum) === 'number') {
        if (lum === 0) // return pure black
        return new (0, _colorJsDefault.default)([
            0,
            0,
            0,
            this._rgb[3]
        ], 'rgb');
        if (lum === 1) // return pure white
        return new (0, _colorJsDefault.default)([
            255,
            255,
            255,
            this._rgb[3]
        ], 'rgb');
        // compute new color using...
        let cur_lum = this.luminance();
        let max_iter = MAX_ITER;
        const test = (low, high)=>{
            const mid = low.interpolate(high, 0.5, mode);
            const lm = mid.luminance();
            if (Math.abs(lum - lm) < EPS || !max_iter--) // close enough
            return mid;
            return lm > lum ? test(low, mid) : test(mid, high);
        };
        const rgb = (cur_lum > lum ? test(new (0, _colorJsDefault.default)([
            0,
            0,
            0
        ]), this) : test(this, new (0, _colorJsDefault.default)([
            255,
            255,
            255
        ]))).rgb();
        return new (0, _colorJsDefault.default)([
            ...rgb,
            this._rgb[3]
        ]);
    }
    return rgb2luminance(...this._rgb.slice(0, 3));
};
const rgb2luminance = (r, g, b)=>{
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    r = luminance_x(r);
    g = luminance_x(g);
    b = luminance_x(b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const luminance_x = (x)=>{
    x /= 255;
    return x <= 0.03928 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
};

},{"../Color.js":"iEdmQ","../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kxFBu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _mixJs = require("../generator/mix.js");
var _mixJsDefault = parcelHelpers.interopDefault(_mixJs);
(0, _colorJsDefault.default).prototype.mix = (0, _colorJsDefault.default).prototype.interpolate = function(col2, f = 0.5, ...rest) {
    return (0, _mixJsDefault.default)(this, col2, f, ...rest);
};

},{"../Color.js":"iEdmQ","../generator/mix.js":"foq1J","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"foq1J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _indexJs = require("../utils/index.js");
var _indexJs1 = require("../interpolator/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
exports.default = (col1, col2, f = 0.5, ...rest)=>{
    let mode = rest[0] || 'lrgb';
    if (!(0, _indexJsDefault.default)[mode] && !rest.length) // fall back to the first supported mode
    mode = Object.keys((0, _indexJsDefault.default))[0];
    if (!(0, _indexJsDefault.default)[mode]) throw new Error(`interpolation mode ${mode} is not defined`);
    if ((0, _indexJs.type)(col1) !== 'object') col1 = new (0, _colorJsDefault.default)(col1);
    if ((0, _indexJs.type)(col2) !== 'object') col2 = new (0, _colorJsDefault.default)(col2);
    return (0, _indexJsDefault.default)[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
};

},{"../Color.js":"iEdmQ","../utils/index.js":"56eUN","../interpolator/index.js":"iUxVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iUxVc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fN6ln":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
(0, _colorJsDefault.default).prototype.premultiply = function(mutate = false) {
    const rgb = this._rgb;
    const a = rgb[3];
    if (mutate) {
        this._rgb = [
            rgb[0] * a,
            rgb[1] * a,
            rgb[2] * a,
            a
        ];
        return this;
    } else return new (0, _colorJsDefault.default)([
        rgb[0] * a,
        rgb[1] * a,
        rgb[2] * a,
        a
    ], 'rgb');
};

},{"../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lAwbd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _indexJs = require("../io/lch/index.js");
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _labConstantsJs = require("../io/lab/lab-constants.js");
var _labConstantsJsDefault = parcelHelpers.interopDefault(_labConstantsJs);
(0, _colorJsDefault.default).prototype.saturate = function(amount = 1) {
    const me = this;
    const lch = me.lch();
    lch[1] += (0, _labConstantsJsDefault.default).Kn * amount;
    if (lch[1] < 0) lch[1] = 0;
    return new (0, _colorJsDefault.default)(lch, 'lch').alpha(me.alpha(), true);
};
(0, _colorJsDefault.default).prototype.desaturate = function(amount = 1) {
    return this.saturate(-amount);
};

},{"../io/lch/index.js":"huczT","../Color.js":"iEdmQ","../io/lab/lab-constants.js":"jZW48","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"huczT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lch", ()=>lch);
parcelHelpers.export(exports, "hcl", ()=>hcl);
var _indexJs = require("../../utils/index.js");
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _lch2RgbJs = require("./lch2rgb.js");
var _lch2RgbJsDefault = parcelHelpers.interopDefault(_lch2RgbJs);
var _hcl2RgbJs = require("./hcl2rgb.js");
var _hcl2RgbJsDefault = parcelHelpers.interopDefault(_hcl2RgbJs);
var _rgb2LchJs = require("./rgb2lch.js");
var _rgb2LchJsDefault = parcelHelpers.interopDefault(_rgb2LchJs);
(0, _colorJsDefault.default).prototype.lch = function() {
    return (0, _rgb2LchJsDefault.default)(this._rgb);
};
(0, _colorJsDefault.default).prototype.hcl = function() {
    return (0, _indexJs.reverse3)((0, _rgb2LchJsDefault.default)(this._rgb));
};
const lch = (...args)=>new (0, _colorJsDefault.default)(...args, 'lch');
const hcl = (...args)=>new (0, _colorJsDefault.default)(...args, 'hcl');
Object.assign((0, _chromaJsDefault.default), {
    lch,
    hcl
});
(0, _inputJsDefault.default).format.lch = (0, _lch2RgbJsDefault.default);
(0, _inputJsDefault.default).format.hcl = (0, _hcl2RgbJsDefault.default);
[
    'lch',
    'hcl'
].forEach((m)=>(0, _inputJsDefault.default).autodetect.push({
        p: 2,
        test: (...args)=>{
            args = (0, _indexJs.unpack)(args, m);
            if ((0, _indexJs.type)(args) === 'array' && args.length === 3) return m;
        }
    }));

},{"../../utils/index.js":"56eUN","../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","./lch2rgb.js":"hgyhX","./hcl2rgb.js":"9zttc","./rgb2lch.js":"lkhqE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hgyhX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
var _lch2LabJs = require("./lch2lab.js");
var _lch2LabJsDefault = parcelHelpers.interopDefault(_lch2LabJs);
var _lab2RgbJs = require("../lab/lab2rgb.js");
var _lab2RgbJsDefault = parcelHelpers.interopDefault(_lab2RgbJs);
const lch2rgb = (...args)=>{
    args = (0, _indexJs.unpack)(args, 'lch');
    const [l, c, h] = args;
    const [L, a, b_] = (0, _lch2LabJsDefault.default)(l, c, h);
    const [r, g, b] = (0, _lab2RgbJsDefault.default)(L, a, b_);
    return [
        r,
        g,
        b,
        args.length > 3 ? args[3] : 1
    ];
};
exports.default = lch2rgb;

},{"../../utils/index.js":"56eUN","./lch2lab.js":"kWzAw","../lab/lab2rgb.js":"fFSlu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kWzAw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const { sin, cos } = Math;
const lch2lab = (...args)=>{
    /*
    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
    These formulas were invented by David Dalrymple to obtain maximum contrast without going
    out of gamut if the parameters are in the range 0-1.

    A saturation multiplier was added by Gregor Aisch
    */ let [l, c, h] = (0, _indexJs.unpack)(args, 'lch');
    if (isNaN(h)) h = 0;
    h = h * (0, _indexJs.DEG2RAD);
    return [
        l,
        cos(h) * c,
        sin(h) * c
    ];
};
exports.default = lch2lab;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9zttc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
var _lch2RgbJs = require("./lch2rgb.js");
var _lch2RgbJsDefault = parcelHelpers.interopDefault(_lch2RgbJs);
const hcl2rgb = (...args)=>{
    const hcl = (0, _indexJs.reverse3)((0, _indexJs.unpack)(args, 'hcl'));
    return (0, _lch2RgbJsDefault.default)(...hcl);
};
exports.default = hcl2rgb;

},{"../../utils/index.js":"56eUN","./lch2rgb.js":"hgyhX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lkhqE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
var _rgb2LabJs = require("../lab/rgb2lab.js");
var _rgb2LabJsDefault = parcelHelpers.interopDefault(_rgb2LabJs);
var _lab2LchJs = require("./lab2lch.js");
var _lab2LchJsDefault = parcelHelpers.interopDefault(_lab2LchJs);
const rgb2lch = (...args)=>{
    const [r, g, b, ...rest] = (0, _indexJs.unpack)(args, 'rgb');
    const [l, a, b_] = (0, _rgb2LabJsDefault.default)(r, g, b);
    const [L, c, h] = (0, _lab2LchJsDefault.default)(l, a, b_);
    return [
        L,
        c,
        h,
        ...rest.length > 0 && rest[0] < 1 ? [
            rest[0]
        ] : []
    ];
};
exports.default = rgb2lch;

},{"../../utils/index.js":"56eUN","../lab/rgb2lab.js":"bEuhm","./lab2lch.js":"7qT7w","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7qT7w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const { sqrt, atan2, round } = Math;
const lab2lch = (...args)=>{
    const [l, a, b] = (0, _indexJs.unpack)(args, 'lab');
    const c = sqrt(a * a + b * b);
    let h = (atan2(b, a) * (0, _indexJs.RAD2DEG) + 360) % 360;
    if (round(c * 10000) === 0) h = Number.NaN;
    return [
        l,
        c,
        h
    ];
};
exports.default = lab2lch;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cstEi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _indexJs = require("../utils/index.js");
(0, _colorJsDefault.default).prototype.set = function(mc, value, mutate = false) {
    const [mode, channel] = mc.split('.');
    const src = this[mode]();
    if (channel) {
        const i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
        if (i > -1) {
            if ((0, _indexJs.type)(value) == 'string') switch(value.charAt(0)){
                case '+':
                    src[i] += +value;
                    break;
                case '-':
                    src[i] += +value;
                    break;
                case '*':
                    src[i] *= +value.substr(1);
                    break;
                case '/':
                    src[i] /= +value.substr(1);
                    break;
                default:
                    src[i] = +value;
            }
            else if ((0, _indexJs.type)(value) === 'number') src[i] = value;
            else throw new Error(`unsupported value for Color.set`);
            const out = new (0, _colorJsDefault.default)(src, mode);
            if (mutate) {
                this._rgb = out._rgb;
                return this;
            }
            return out;
        }
        throw new Error(`unknown channel ${channel} in mode ${mode}`);
    } else return src;
};

},{"../Color.js":"iEdmQ","../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bQDXg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _indexJs = require("../io/lab/index.js");
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _mixJs = require("../generator/mix.js");
var _mixJsDefault = parcelHelpers.interopDefault(_mixJs);
(0, _colorJsDefault.default).prototype.tint = function(f = 0.5, ...rest) {
    return (0, _mixJsDefault.default)(this, 'white', f, ...rest);
};
(0, _colorJsDefault.default).prototype.shade = function(f = 0.5, ...rest) {
    return (0, _mixJsDefault.default)(this, 'black', f, ...rest);
};

},{"../io/lab/index.js":"dk46t","../Color.js":"iEdmQ","../generator/mix.js":"foq1J","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jubma":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
const rgb = (col1, col2, f)=>{
    const xyz0 = col1._rgb;
    const xyz1 = col2._rgb;
    return new (0, _colorJsDefault.default)(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), 'rgb');
};
// register interpolator
(0, _indexJsDefault.default).rgb = rgb;
exports.default = rgb;

},{"../Color.js":"iEdmQ","./index.js":"iUxVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j6IyH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _indexJs = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
const { sqrt, pow } = Math;
const lrgb = (col1, col2, f)=>{
    const [x1, y1, z1] = col1._rgb;
    const [x2, y2, z2] = col2._rgb;
    return new (0, _colorJsDefault.default)(sqrt(pow(x1, 2) * (1 - f) + pow(x2, 2) * f), sqrt(pow(y1, 2) * (1 - f) + pow(y2, 2) * f), sqrt(pow(z1, 2) * (1 - f) + pow(z2, 2) * f), 'rgb');
};
// register interpolator
(0, _indexJsDefault.default).lrgb = lrgb;
exports.default = lrgb;

},{"../Color.js":"iEdmQ","./index.js":"iUxVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g0Kwb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../io/lab/index.js");
var _indexJs1 = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
const lab = (col1, col2, f)=>{
    const xyz0 = col1.lab();
    const xyz1 = col2.lab();
    return new (0, _colorJsDefault.default)(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), 'lab');
};
// register interpolator
(0, _indexJsDefault.default).lab = lab;
exports.default = lab;

},{"../io/lab/index.js":"dk46t","./index.js":"iUxVc","../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hDk4r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../io/lch/index.js");
var _hsxJs = require("./_hsx.js");
var _hsxJsDefault = parcelHelpers.interopDefault(_hsxJs);
var _indexJs1 = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
const lch = (col1, col2, f)=>{
    return (0, _hsxJsDefault.default)(col1, col2, f, 'lch');
};
// register interpolator
(0, _indexJsDefault.default).lch = lch;
(0, _indexJsDefault.default).hcl = lch;
exports.default = lch;

},{"../io/lch/index.js":"huczT","./_hsx.js":"9HgJa","./index.js":"iUxVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9HgJa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
exports.default = (col1, col2, f, m)=>{
    let xyz0, xyz1;
    if (m === 'hsl') {
        xyz0 = col1.hsl();
        xyz1 = col2.hsl();
    } else if (m === 'hsv') {
        xyz0 = col1.hsv();
        xyz1 = col2.hsv();
    } else if (m === 'hcg') {
        xyz0 = col1.hcg();
        xyz1 = col2.hcg();
    } else if (m === 'hsi') {
        xyz0 = col1.hsi();
        xyz1 = col2.hsi();
    } else if (m === 'lch' || m === 'hcl') {
        m = 'hcl';
        xyz0 = col1.hcl();
        xyz1 = col2.hcl();
    } else if (m === 'oklch') {
        xyz0 = col1.oklch().reverse();
        xyz1 = col2.oklch().reverse();
    }
    let hue0, hue1, sat0, sat1, lbv0, lbv1;
    if (m.substr(0, 1) === 'h' || m === 'oklch') {
        [hue0, sat0, lbv0] = xyz0;
        [hue1, sat1, lbv1] = xyz1;
    }
    let sat, hue, lbv, dh;
    if (!isNaN(hue0) && !isNaN(hue1)) {
        // both colors have hue
        if (hue1 > hue0 && hue1 - hue0 > 180) dh = hue1 - (hue0 + 360);
        else if (hue1 < hue0 && hue0 - hue1 > 180) dh = hue1 + 360 - hue0;
        else dh = hue1 - hue0;
        hue = hue0 + f * dh;
    } else if (!isNaN(hue0)) {
        hue = hue0;
        if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') sat = sat0;
    } else if (!isNaN(hue1)) {
        hue = hue1;
        if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') sat = sat1;
    } else hue = Number.NaN;
    if (sat === undefined) sat = sat0 + f * (sat1 - sat0);
    lbv = lbv0 + f * (lbv1 - lbv0);
    return m === 'oklch' ? new (0, _colorJsDefault.default)([
        lbv,
        sat,
        hue
    ], m) : new (0, _colorJsDefault.default)([
        hue,
        sat,
        lbv
    ], m);
};

},{"../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2j5rZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../io/num/index.js");
var _indexJs1 = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
const num = (col1, col2, f)=>{
    const c1 = col1.num();
    const c2 = col2.num();
    return new (0, _colorJsDefault.default)(c1 + f * (c2 - c1), 'num');
};
// register interpolator
(0, _indexJsDefault.default).num = num;
exports.default = num;

},{"../io/num/index.js":"7miyd","./index.js":"iUxVc","../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7miyd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "num", ()=>num);
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _indexJs = require("../../utils/index.js");
var _num2RgbJs = require("./num2rgb.js");
var _num2RgbJsDefault = parcelHelpers.interopDefault(_num2RgbJs);
var _rgb2NumJs = require("./rgb2num.js");
var _rgb2NumJsDefault = parcelHelpers.interopDefault(_rgb2NumJs);
(0, _colorJsDefault.default).prototype.num = function() {
    return (0, _rgb2NumJsDefault.default)(this._rgb);
};
const num = (...args)=>new (0, _colorJsDefault.default)(...args, 'num');
Object.assign((0, _chromaJsDefault.default), {
    num
});
(0, _inputJsDefault.default).format.num = (0, _num2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 5,
    test: (...args)=>{
        if (args.length === 1 && (0, _indexJs.type)(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xffffff) return 'num';
    }
});

},{"../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","../../utils/index.js":"56eUN","./num2rgb.js":"5pgls","./rgb2num.js":"4vCXs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5pgls":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const num2rgb = (num)=>{
    if ((0, _indexJs.type)(num) == 'number' && num >= 0 && num <= 0xffffff) {
        const r = num >> 16;
        const g = num >> 8 & 0xff;
        const b = num & 0xff;
        return [
            r,
            g,
            b,
            1
        ];
    }
    throw new Error('unknown num color: ' + num);
};
exports.default = num2rgb;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4vCXs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const rgb2num = (...args)=>{
    const [r, g, b] = (0, _indexJs.unpack)(args, 'rgb');
    return (r << 16) + (g << 8) + b;
};
exports.default = rgb2num;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jip9I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../io/hcg/index.js");
var _hsxJs = require("./_hsx.js");
var _hsxJsDefault = parcelHelpers.interopDefault(_hsxJs);
var _indexJs1 = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
const hcg = (col1, col2, f)=>{
    return (0, _hsxJsDefault.default)(col1, col2, f, 'hcg');
};
// register interpolator
(0, _indexJsDefault.default).hcg = hcg;
exports.default = hcg;

},{"../io/hcg/index.js":"5gVUp","./_hsx.js":"9HgJa","./index.js":"iUxVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5gVUp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hcg", ()=>hcg);
var _indexJs = require("../../utils/index.js");
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _hcg2RgbJs = require("./hcg2rgb.js");
var _hcg2RgbJsDefault = parcelHelpers.interopDefault(_hcg2RgbJs);
var _rgb2HcgJs = require("./rgb2hcg.js");
var _rgb2HcgJsDefault = parcelHelpers.interopDefault(_rgb2HcgJs);
(0, _colorJsDefault.default).prototype.hcg = function() {
    return (0, _rgb2HcgJsDefault.default)(this._rgb);
};
const hcg = (...args)=>new (0, _colorJsDefault.default)(...args, 'hcg');
(0, _chromaJsDefault.default).hcg = hcg;
(0, _inputJsDefault.default).format.hcg = (0, _hcg2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 1,
    test: (...args)=>{
        args = (0, _indexJs.unpack)(args, 'hcg');
        if ((0, _indexJs.type)(args) === 'array' && args.length === 3) return 'hcg';
    }
});

},{"../../utils/index.js":"56eUN","../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","./hcg2rgb.js":"jSyu5","./rgb2hcg.js":"oCOiW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jSyu5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const { floor } = Math;
/*
 * this is basically just HSV with some minor tweaks
 *
 * hue.. [0..360]
 * chroma .. [0..1]
 * grayness .. [0..1]
 */ const hcg2rgb = (...args)=>{
    args = (0, _indexJs.unpack)(args, 'hcg');
    let [h, c, _g] = args;
    let r, g, b;
    _g = _g * 255;
    const _c = c * 255;
    if (c === 0) r = g = b = _g;
    else {
        if (h === 360) h = 0;
        if (h > 360) h -= 360;
        if (h < 0) h += 360;
        h /= 60;
        const i = floor(h);
        const f = h - i;
        const p = _g * (1 - c);
        const q = p + _c * (1 - f);
        const t = p + _c * f;
        const v = p + _c;
        switch(i){
            case 0:
                [r, g, b] = [
                    v,
                    t,
                    p
                ];
                break;
            case 1:
                [r, g, b] = [
                    q,
                    v,
                    p
                ];
                break;
            case 2:
                [r, g, b] = [
                    p,
                    v,
                    t
                ];
                break;
            case 3:
                [r, g, b] = [
                    p,
                    q,
                    v
                ];
                break;
            case 4:
                [r, g, b] = [
                    t,
                    p,
                    v
                ];
                break;
            case 5:
                [r, g, b] = [
                    v,
                    p,
                    q
                ];
                break;
        }
    }
    return [
        r,
        g,
        b,
        args.length > 3 ? args[3] : 1
    ];
};
exports.default = hcg2rgb;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"oCOiW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const rgb2hcg = (...args)=>{
    const [r, g, b] = (0, _indexJs.unpack)(args, 'rgb');
    const minRgb = (0, _indexJs.min)(r, g, b);
    const maxRgb = (0, _indexJs.max)(r, g, b);
    const delta = maxRgb - minRgb;
    const c = delta * 100 / 255;
    const _g = minRgb / (255 - delta) * 100;
    let h;
    if (delta === 0) h = Number.NaN;
    else {
        if (r === maxRgb) h = (g - b) / delta;
        if (g === maxRgb) h = 2 + (b - r) / delta;
        if (b === maxRgb) h = 4 + (r - g) / delta;
        h *= 60;
        if (h < 0) h += 360;
    }
    return [
        h,
        c,
        _g
    ];
};
exports.default = rgb2hcg;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9FVFa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../io/hsi/index.js");
var _hsxJs = require("./_hsx.js");
var _hsxJsDefault = parcelHelpers.interopDefault(_hsxJs);
var _indexJs1 = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
const hsi = (col1, col2, f)=>{
    return (0, _hsxJsDefault.default)(col1, col2, f, 'hsi');
};
// register interpolator
(0, _indexJsDefault.default).hsi = hsi;
exports.default = hsi;

},{"../io/hsi/index.js":"cC5hJ","./_hsx.js":"9HgJa","./index.js":"iUxVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cC5hJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hsi", ()=>hsi);
var _indexJs = require("../../utils/index.js");
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _hsi2RgbJs = require("./hsi2rgb.js");
var _hsi2RgbJsDefault = parcelHelpers.interopDefault(_hsi2RgbJs);
var _rgb2HsiJs = require("./rgb2hsi.js");
var _rgb2HsiJsDefault = parcelHelpers.interopDefault(_rgb2HsiJs);
(0, _colorJsDefault.default).prototype.hsi = function() {
    return (0, _rgb2HsiJsDefault.default)(this._rgb);
};
const hsi = (...args)=>new (0, _colorJsDefault.default)(...args, 'hsi');
(0, _chromaJsDefault.default).hsi = hsi;
(0, _inputJsDefault.default).format.hsi = (0, _hsi2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 2,
    test: (...args)=>{
        args = (0, _indexJs.unpack)(args, 'hsi');
        if ((0, _indexJs.type)(args) === 'array' && args.length === 3) return 'hsi';
    }
});

},{"../../utils/index.js":"56eUN","../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","./hsi2rgb.js":"lxHBQ","./rgb2hsi.js":"OxdPj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lxHBQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const { cos } = Math;
/*
 * hue [0..360]
 * saturation [0..1]
 * intensity [0..1]
 */ const hsi2rgb = (...args)=>{
    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
    */ args = (0, _indexJs.unpack)(args, 'hsi');
    let [h, s, i] = args;
    let r, g, b;
    if (isNaN(h)) h = 0;
    if (isNaN(s)) s = 0;
    // normalize hue
    if (h > 360) h -= 360;
    if (h < 0) h += 360;
    h /= 360;
    if (h < 1 / 3) {
        b = (1 - s) / 3;
        r = (1 + s * cos((0, _indexJs.TWOPI) * h) / cos((0, _indexJs.PITHIRD) - (0, _indexJs.TWOPI) * h)) / 3;
        g = 1 - (b + r);
    } else if (h < 2 / 3) {
        h -= 1 / 3;
        r = (1 - s) / 3;
        g = (1 + s * cos((0, _indexJs.TWOPI) * h) / cos((0, _indexJs.PITHIRD) - (0, _indexJs.TWOPI) * h)) / 3;
        b = 1 - (r + g);
    } else {
        h -= 2 / 3;
        g = (1 - s) / 3;
        b = (1 + s * cos((0, _indexJs.TWOPI) * h) / cos((0, _indexJs.PITHIRD) - (0, _indexJs.TWOPI) * h)) / 3;
        r = 1 - (g + b);
    }
    r = (0, _indexJs.limit)(i * r * 3);
    g = (0, _indexJs.limit)(i * g * 3);
    b = (0, _indexJs.limit)(i * b * 3);
    return [
        r * 255,
        g * 255,
        b * 255,
        args.length > 3 ? args[3] : 1
    ];
};
exports.default = hsi2rgb;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"OxdPj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const { min, sqrt, acos } = Math;
const rgb2hsi = (...args)=>{
    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
    */ let [r, g, b] = (0, _indexJs.unpack)(args, 'rgb');
    r /= 255;
    g /= 255;
    b /= 255;
    let h;
    const min_ = min(r, g, b);
    const i = (r + g + b) / 3;
    const s = i > 0 ? 1 - min_ / i : 0;
    if (s === 0) h = NaN;
    else {
        h = (r - g + (r - b)) / 2;
        h /= sqrt((r - g) * (r - g) + (r - b) * (g - b));
        h = acos(h);
        if (b > g) h = (0, _indexJs.TWOPI) - h;
        h /= (0, _indexJs.TWOPI);
    }
    return [
        h * 360,
        s,
        i
    ];
};
exports.default = rgb2hsi;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h47hp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../io/hsl/index.js");
var _hsxJs = require("./_hsx.js");
var _hsxJsDefault = parcelHelpers.interopDefault(_hsxJs);
var _indexJs1 = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
const hsl = (col1, col2, f)=>{
    return (0, _hsxJsDefault.default)(col1, col2, f, 'hsl');
};
// register interpolator
(0, _indexJsDefault.default).hsl = hsl;
exports.default = hsl;

},{"../io/hsl/index.js":"fd8sJ","./_hsx.js":"9HgJa","./index.js":"iUxVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fd8sJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hsl", ()=>hsl);
var _indexJs = require("../../utils/index.js");
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _hsl2RgbJs = require("./hsl2rgb.js");
var _hsl2RgbJsDefault = parcelHelpers.interopDefault(_hsl2RgbJs);
var _rgb2HslJs = require("./rgb2hsl.js");
var _rgb2HslJsDefault = parcelHelpers.interopDefault(_rgb2HslJs);
(0, _colorJsDefault.default).prototype.hsl = function() {
    return (0, _rgb2HslJsDefault.default)(this._rgb);
};
const hsl = (...args)=>new (0, _colorJsDefault.default)(...args, 'hsl');
(0, _chromaJsDefault.default).hsl = hsl;
(0, _inputJsDefault.default).format.hsl = (0, _hsl2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 2,
    test: (...args)=>{
        args = (0, _indexJs.unpack)(args, 'hsl');
        if ((0, _indexJs.type)(args) === 'array' && args.length === 3) return 'hsl';
    }
});

},{"../../utils/index.js":"56eUN","../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","./hsl2rgb.js":"hWWTp","./rgb2hsl.js":"9vdNf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hWWTp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const hsl2rgb = (...args)=>{
    args = (0, _indexJs.unpack)(args, 'hsl');
    const [h, s, l] = args;
    let r, g, b;
    if (s === 0) r = g = b = l * 255;
    else {
        const t3 = [
            0,
            0,
            0
        ];
        const c = [
            0,
            0,
            0
        ];
        const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const t1 = 2 * l - t2;
        const h_ = h / 360;
        t3[0] = h_ + 1 / 3;
        t3[1] = h_;
        t3[2] = h_ - 1 / 3;
        for(let i = 0; i < 3; i++){
            if (t3[i] < 0) t3[i] += 1;
            if (t3[i] > 1) t3[i] -= 1;
            if (6 * t3[i] < 1) c[i] = t1 + (t2 - t1) * 6 * t3[i];
            else if (2 * t3[i] < 1) c[i] = t2;
            else if (3 * t3[i] < 2) c[i] = t1 + (t2 - t1) * (2 / 3 - t3[i]) * 6;
            else c[i] = t1;
        }
        [r, g, b] = [
            c[0] * 255,
            c[1] * 255,
            c[2] * 255
        ];
    }
    if (args.length > 3) // keep alpha channel
    return [
        r,
        g,
        b,
        args[3]
    ];
    return [
        r,
        g,
        b,
        1
    ];
};
exports.default = hsl2rgb;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9vdNf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
/*
 * supported arguments:
 * - rgb2hsl(r,g,b)
 * - rgb2hsl(r,g,b,a)
 * - rgb2hsl([r,g,b])
 * - rgb2hsl([r,g,b,a])
 * - rgb2hsl({r,g,b,a})
 */ const rgb2hsl = (...args)=>{
    args = (0, _indexJs.unpack)(args, 'rgba');
    let [r, g, b] = args;
    r /= 255;
    g /= 255;
    b /= 255;
    const minRgb = (0, _indexJs.min)(r, g, b);
    const maxRgb = (0, _indexJs.max)(r, g, b);
    const l = (maxRgb + minRgb) / 2;
    let s, h;
    if (maxRgb === minRgb) {
        s = 0;
        h = Number.NaN;
    } else s = l < 0.5 ? (maxRgb - minRgb) / (maxRgb + minRgb) : (maxRgb - minRgb) / (2 - maxRgb - minRgb);
    if (r == maxRgb) h = (g - b) / (maxRgb - minRgb);
    else if (g == maxRgb) h = 2 + (b - r) / (maxRgb - minRgb);
    else if (b == maxRgb) h = 4 + (r - g) / (maxRgb - minRgb);
    h *= 60;
    if (h < 0) h += 360;
    if (args.length > 3 && args[3] !== undefined) return [
        h,
        s,
        l,
        args[3]
    ];
    return [
        h,
        s,
        l
    ];
};
exports.default = rgb2hsl;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lecQJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../io/hsv/index.js");
var _hsxJs = require("./_hsx.js");
var _hsxJsDefault = parcelHelpers.interopDefault(_hsxJs);
var _indexJs1 = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
const hsv = (col1, col2, f)=>{
    return (0, _hsxJsDefault.default)(col1, col2, f, 'hsv');
};
// register interpolator
(0, _indexJsDefault.default).hsv = hsv;
exports.default = hsv;

},{"../io/hsv/index.js":"lxtnp","./_hsx.js":"9HgJa","./index.js":"iUxVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lxtnp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hsv", ()=>hsv);
var _indexJs = require("../../utils/index.js");
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _hsv2RgbJs = require("./hsv2rgb.js");
var _hsv2RgbJsDefault = parcelHelpers.interopDefault(_hsv2RgbJs);
var _rgb2HsvJs = require("./rgb2hsv.js");
var _rgb2HsvJsDefault = parcelHelpers.interopDefault(_rgb2HsvJs);
(0, _colorJsDefault.default).prototype.hsv = function() {
    return (0, _rgb2HsvJsDefault.default)(this._rgb);
};
const hsv = (...args)=>new (0, _colorJsDefault.default)(...args, 'hsv');
(0, _chromaJsDefault.default).hsv = hsv;
(0, _inputJsDefault.default).format.hsv = (0, _hsv2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 2,
    test: (...args)=>{
        args = (0, _indexJs.unpack)(args, 'hsv');
        if ((0, _indexJs.type)(args) === 'array' && args.length === 3) return 'hsv';
    }
});

},{"../../utils/index.js":"56eUN","../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","./hsv2rgb.js":"7jQXq","./rgb2hsv.js":"33fRh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7jQXq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const { floor } = Math;
const hsv2rgb = (...args)=>{
    args = (0, _indexJs.unpack)(args, 'hsv');
    let [h, s, v] = args;
    let r, g, b;
    v *= 255;
    if (s === 0) r = g = b = v;
    else {
        if (h === 360) h = 0;
        if (h > 360) h -= 360;
        if (h < 0) h += 360;
        h /= 60;
        const i = floor(h);
        const f = h - i;
        const p = v * (1 - s);
        const q = v * (1 - s * f);
        const t = v * (1 - s * (1 - f));
        switch(i){
            case 0:
                [r, g, b] = [
                    v,
                    t,
                    p
                ];
                break;
            case 1:
                [r, g, b] = [
                    q,
                    v,
                    p
                ];
                break;
            case 2:
                [r, g, b] = [
                    p,
                    v,
                    t
                ];
                break;
            case 3:
                [r, g, b] = [
                    p,
                    q,
                    v
                ];
                break;
            case 4:
                [r, g, b] = [
                    t,
                    p,
                    v
                ];
                break;
            case 5:
                [r, g, b] = [
                    v,
                    p,
                    q
                ];
                break;
        }
    }
    return [
        r,
        g,
        b,
        args.length > 3 ? args[3] : 1
    ];
};
exports.default = hsv2rgb;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"33fRh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const { min, max } = Math;
/*
 * supported arguments:
 * - rgb2hsv(r,g,b)
 * - rgb2hsv([r,g,b])
 * - rgb2hsv({r,g,b})
 */ const rgb2hsl = (...args)=>{
    args = (0, _indexJs.unpack)(args, 'rgb');
    let [r, g, b] = args;
    const min_ = min(r, g, b);
    const max_ = max(r, g, b);
    const delta = max_ - min_;
    let h, s, v;
    v = max_ / 255.0;
    if (max_ === 0) {
        h = Number.NaN;
        s = 0;
    } else {
        s = delta / max_;
        if (r === max_) h = (g - b) / delta;
        if (g === max_) h = 2 + (b - r) / delta;
        if (b === max_) h = 4 + (r - g) / delta;
        h *= 60;
        if (h < 0) h += 360;
    }
    return [
        h,
        s,
        v
    ];
};
exports.default = rgb2hsl;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5OCFy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../io/oklab/index.js");
var _indexJs1 = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
const oklab = (col1, col2, f)=>{
    const xyz0 = col1.oklab();
    const xyz1 = col2.oklab();
    return new (0, _colorJsDefault.default)(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), 'oklab');
};
// register interpolator
(0, _indexJsDefault.default).oklab = oklab;
exports.default = oklab;

},{"../io/oklab/index.js":"bcuUU","./index.js":"iUxVc","../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bcuUU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "oklab", ()=>oklab);
var _indexJs = require("../../utils/index.js");
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _oklab2RgbJs = require("./oklab2rgb.js");
var _oklab2RgbJsDefault = parcelHelpers.interopDefault(_oklab2RgbJs);
var _rgb2OklabJs = require("./rgb2oklab.js");
var _rgb2OklabJsDefault = parcelHelpers.interopDefault(_rgb2OklabJs);
(0, _colorJsDefault.default).prototype.oklab = function() {
    return (0, _rgb2OklabJsDefault.default)(this._rgb);
};
const oklab = (...args)=>new (0, _colorJsDefault.default)(...args, 'oklab');
Object.assign((0, _chromaJsDefault.default), {
    oklab
});
(0, _inputJsDefault.default).format.oklab = (0, _oklab2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 2,
    test: (...args)=>{
        args = (0, _indexJs.unpack)(args, 'oklab');
        if ((0, _indexJs.type)(args) === 'array' && args.length === 3) return 'oklab';
    }
});

},{"../../utils/index.js":"56eUN","../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","./oklab2rgb.js":"yUJeU","./rgb2oklab.js":"cnIOz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"yUJeU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
var _multiplyMatricesJs = require("../../utils/multiply-matrices.js");
var _multiplyMatricesJsDefault = parcelHelpers.interopDefault(_multiplyMatricesJs);
var _lab2RgbJs = require("../lab/lab2rgb.js");
const oklab2rgb = (...args)=>{
    args = (0, _indexJs.unpack)(args, 'lab');
    const [L, a, b, ...rest] = args;
    const [X, Y, Z] = OKLab_to_XYZ([
        L,
        a,
        b
    ]);
    const [r, g, b_] = (0, _lab2RgbJs.xyz2rgb)(X, Y, Z);
    return [
        r,
        g,
        b_,
        ...rest.length > 0 && rest[0] < 1 ? [
            rest[0]
        ] : []
    ];
};
// from https://www.w3.org/TR/css-color-4/#color-conversion-code
function OKLab_to_XYZ(OKLab) {
    // Given OKLab, convert to XYZ relative to D65
    var LMStoXYZ = [
        [
            1.2268798758459243,
            -0.5578149944602171,
            0.2813910456659647
        ],
        [
            -0.0405757452148008,
            1.112286803280317,
            -0.0717110580655164
        ],
        [
            -0.0763729366746601,
            -0.4214933324022432,
            1.5869240198367816
        ]
    ];
    var OKLabtoLMS = [
        [
            1.0,
            0.3963377773761749,
            0.2158037573099136
        ],
        [
            1.0,
            -0.1055613458156586,
            -0.0638541728258133
        ],
        [
            1.0,
            -0.0894841775298119,
            -1.2914855480194092
        ]
    ];
    var LMSnl = (0, _multiplyMatricesJsDefault.default)(OKLabtoLMS, OKLab);
    return (0, _multiplyMatricesJsDefault.default)(LMStoXYZ, LMSnl.map((c)=>c ** 3));
}
exports.default = oklab2rgb;

},{"../../utils/index.js":"56eUN","../../utils/multiply-matrices.js":"ewuMU","../lab/lab2rgb.js":"fFSlu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ewuMU":[function(require,module,exports,__globalThis) {
// from https://www.w3.org/TR/css-color-4/multiply-matrices.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>multiplyMatrices);
function multiplyMatrices(A, B) {
    let m = A.length;
    if (!Array.isArray(A[0])) // A is vector, convert to [[a, b, c, ...]]
    A = [
        A
    ];
    if (!Array.isArray(B[0])) // B is vector, convert to [[a], [b], [c], ...]]
    B = B.map((x)=>[
            x
        ]);
    let p = B[0].length;
    let B_cols = B[0].map((_, i)=>B.map((x)=>x[i])); // transpose B
    let product = A.map((row)=>B_cols.map((col)=>{
            if (!Array.isArray(row)) return col.reduce((a, c)=>a + c * row, 0);
            return row.reduce((a, c, i)=>a + c * (col[i] || 0), 0);
        }));
    if (m === 1) product = product[0]; // Avoid [[a, b, c, ...]]
    if (p === 1) return product.map((x)=>x[0]); // Avoid [[a], [b], [c], ...]]
    return product;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cnIOz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
var _multiplyMatricesJs = require("../../utils/multiply-matrices.js");
var _multiplyMatricesJsDefault = parcelHelpers.interopDefault(_multiplyMatricesJs);
var _rgb2LabJs = require("../lab/rgb2lab.js");
const rgb2oklab = (...args)=>{
    const [r, g, b, ...rest] = (0, _indexJs.unpack)(args, 'rgb');
    const xyz = (0, _rgb2LabJs.rgb2xyz)(r, g, b);
    const oklab = XYZ_to_OKLab(xyz);
    return [
        ...oklab,
        ...rest.length > 0 && rest[0] < 1 ? [
            rest[0]
        ] : []
    ];
};
// from https://www.w3.org/TR/css-color-4/#color-conversion-code
function XYZ_to_OKLab(XYZ) {
    // Given XYZ relative to D65, convert to OKLab
    const XYZtoLMS = [
        [
            0.819022437996703,
            0.3619062600528904,
            -0.1288737815209879
        ],
        [
            0.0329836539323885,
            0.9292868615863434,
            0.0361446663506424
        ],
        [
            0.0481771893596242,
            0.2642395317527308,
            0.6335478284694309
        ]
    ];
    const LMStoOKLab = [
        [
            0.210454268309314,
            0.7936177747023054,
            -0.0040720430116193
        ],
        [
            1.9779985324311684,
            -2.42859224204858,
            0.450593709617411
        ],
        [
            0.0259040424655478,
            0.7827717124575296,
            -0.8086757549230774
        ]
    ];
    const LMS = (0, _multiplyMatricesJsDefault.default)(XYZtoLMS, XYZ);
    // JavaScript Math.cbrt returns a sign-matched cube root
    // beware if porting to other languages
    // especially if tempted to use a general power function
    return (0, _multiplyMatricesJsDefault.default)(LMStoOKLab, LMS.map((c)=>Math.cbrt(c)));
// L in range [0,1]. For use in CSS, multiply by 100 and add a percent
}
exports.default = rgb2oklab;

},{"../../utils/index.js":"56eUN","../../utils/multiply-matrices.js":"ewuMU","../lab/rgb2lab.js":"bEuhm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lDgXn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../io/lch/index.js");
var _hsxJs = require("./_hsx.js");
var _hsxJsDefault = parcelHelpers.interopDefault(_hsxJs);
var _indexJs1 = require("./index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
const oklch = (col1, col2, f)=>{
    return (0, _hsxJsDefault.default)(col1, col2, f, 'oklch');
};
// register interpolator
(0, _indexJsDefault.default).oklch = oklch;
exports.default = oklch;

},{"../io/lch/index.js":"huczT","./_hsx.js":"9HgJa","./index.js":"iUxVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fnEtx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _indexJs = require("../utils/index.js");
const { pow, sqrt, PI, cos, sin, atan2 } = Math;
exports.default = (colors, mode = 'lrgb', weights = null)=>{
    const l = colors.length;
    if (!weights) weights = Array.from(new Array(l)).map(()=>1);
    // normalize weights
    const k = l / weights.reduce(function(a, b) {
        return a + b;
    });
    weights.forEach((w, i)=>{
        weights[i] *= k;
    });
    // convert colors to Color objects
    colors = colors.map((c)=>new (0, _colorJsDefault.default)(c));
    if (mode === 'lrgb') return _average_lrgb(colors, weights);
    const first = colors.shift();
    const xyz = first.get(mode);
    const cnt = [];
    let dx = 0;
    let dy = 0;
    // initial color
    for(let i = 0; i < xyz.length; i++){
        xyz[i] = (xyz[i] || 0) * weights[0];
        cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
        if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
            const A = xyz[i] / 180 * PI;
            dx += cos(A) * weights[0];
            dy += sin(A) * weights[0];
        }
    }
    let alpha = first.alpha() * weights[0];
    colors.forEach((c, ci)=>{
        const xyz2 = c.get(mode);
        alpha += c.alpha() * weights[ci + 1];
        for(let i = 0; i < xyz.length; i++)if (!isNaN(xyz2[i])) {
            cnt[i] += weights[ci + 1];
            if (mode.charAt(i) === 'h') {
                const A = xyz2[i] / 180 * PI;
                dx += cos(A) * weights[ci + 1];
                dy += sin(A) * weights[ci + 1];
            } else xyz[i] += xyz2[i] * weights[ci + 1];
        }
    });
    for(let i = 0; i < xyz.length; i++)if (mode.charAt(i) === 'h') {
        let A = atan2(dy / cnt[i], dx / cnt[i]) / PI * 180;
        while(A < 0)A += 360;
        while(A >= 360)A -= 360;
        xyz[i] = A;
    } else xyz[i] = xyz[i] / cnt[i];
    alpha /= l;
    return new (0, _colorJsDefault.default)(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
};
const _average_lrgb = (colors, weights)=>{
    const l = colors.length;
    const xyz = [
        0,
        0,
        0,
        0
    ];
    for(let i = 0; i < colors.length; i++){
        const col = colors[i];
        const f = weights[i] / l;
        const rgb = col._rgb;
        xyz[0] += pow(rgb[0], 2) * f;
        xyz[1] += pow(rgb[1], 2) * f;
        xyz[2] += pow(rgb[2], 2) * f;
        xyz[3] += rgb[3] * f;
    }
    xyz[0] = sqrt(xyz[0]);
    xyz[1] = sqrt(xyz[1]);
    xyz[2] = sqrt(xyz[2]);
    if (xyz[3] > 0.9999999) xyz[3] = 1;
    return new (0, _colorJsDefault.default)((0, _indexJs.clip_rgb)(xyz));
};

},{"../Color.js":"iEdmQ","../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7x2Jq":[function(require,module,exports,__globalThis) {
//
// interpolates between a set of colors uzing a bezier spline
//
// @requires utils lab
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _indexJs = require("../io/lab/index.js");
var _scaleJs = require("./scale.js");
var _scaleJsDefault = parcelHelpers.interopDefault(_scaleJs);
// nth row of the pascal triangle
const binom_row = function(n) {
    let row = [
        1,
        1
    ];
    for(let i = 1; i < n; i++){
        let newrow = [
            1
        ];
        for(let j = 1; j <= row.length; j++)newrow[j] = (row[j] || 0) + row[j - 1];
        row = newrow;
    }
    return row;
};
const bezier = function(colors) {
    let I, lab0, lab1, lab2;
    colors = colors.map((c)=>new (0, _colorJsDefault.default)(c));
    if (colors.length === 2) {
        // linear interpolation
        [lab0, lab1] = colors.map((c)=>c.lab());
        I = function(t) {
            const lab = [
                0,
                1,
                2
            ].map((i)=>lab0[i] + t * (lab1[i] - lab0[i]));
            return new (0, _colorJsDefault.default)(lab, 'lab');
        };
    } else if (colors.length === 3) {
        // quadratic bezier interpolation
        [lab0, lab1, lab2] = colors.map((c)=>c.lab());
        I = function(t) {
            const lab = [
                0,
                1,
                2
            ].map((i)=>(1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
            return new (0, _colorJsDefault.default)(lab, 'lab');
        };
    } else if (colors.length === 4) {
        // cubic bezier interpolation
        let lab3;
        [lab0, lab1, lab2, lab3] = colors.map((c)=>c.lab());
        I = function(t) {
            const lab = [
                0,
                1,
                2
            ].map((i)=>(1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
            return new (0, _colorJsDefault.default)(lab, 'lab');
        };
    } else if (colors.length >= 5) {
        // general case (degree n bezier)
        let labs, row, n;
        labs = colors.map((c)=>c.lab());
        n = colors.length - 1;
        row = binom_row(n);
        I = function(t) {
            const u = 1 - t;
            const lab = [
                0,
                1,
                2
            ].map((i)=>labs.reduce((sum, el, j)=>sum + row[j] * u ** (n - j) * t ** j * el[i], 0));
            return new (0, _colorJsDefault.default)(lab, 'lab');
        };
    } else throw new RangeError('No point in running bezier with only one color.');
    return I;
};
exports.default = (colors)=>{
    const f = bezier(colors);
    f.scale = ()=>(0, _scaleJsDefault.default)(f);
    return f;
};

},{"../Color.js":"iEdmQ","../io/lab/index.js":"dk46t","./scale.js":"2aKFN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2aKFN":[function(require,module,exports,__globalThis) {
// minimal multi-purpose interface
// @requires utils color analyze
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(colors) {
        // constructor
        let _mode = 'rgb';
        let _nacol = (0, _chromaJsDefault.default)('#ccc');
        let _spread = 0;
        // const _fixed = false;
        let _domain = [
            0,
            1
        ];
        let _pos = [];
        let _padding = [
            0,
            0
        ];
        let _classes = false;
        let _colors = [];
        let _out = false;
        let _min = 0;
        let _max = 1;
        let _correctLightness = false;
        let _colorCache = {};
        let _useCache = true;
        let _gamma = 1;
        // private methods
        const setColors = function(colors) {
            colors = colors || [
                '#fff',
                '#000'
            ];
            if (colors && (0, _indexJs.type)(colors) === 'string' && (0, _chromaJsDefault.default).brewer && (0, _chromaJsDefault.default).brewer[colors.toLowerCase()]) colors = (0, _chromaJsDefault.default).brewer[colors.toLowerCase()];
            if ((0, _indexJs.type)(colors) === 'array') {
                // handle single color
                if (colors.length === 1) colors = [
                    colors[0],
                    colors[0]
                ];
                // make a copy of the colors
                colors = colors.slice(0);
                // convert to chroma classes
                for(let c = 0; c < colors.length; c++)colors[c] = (0, _chromaJsDefault.default)(colors[c]);
                // auto-fill color position
                _pos.length = 0;
                for(let c = 0; c < colors.length; c++)_pos.push(c / (colors.length - 1));
            }
            resetCache();
            return _colors = colors;
        };
        const getClass = function(value) {
            if (_classes != null) {
                const n = _classes.length - 1;
                let i = 0;
                while(i < n && value >= _classes[i])i++;
                return i - 1;
            }
            return 0;
        };
        let tMapLightness = (t)=>t;
        let tMapDomain = (t)=>t;
        // const classifyValue = function(value) {
        //     let val = value;
        //     if (_classes.length > 2) {
        //         const n = _classes.length-1;
        //         const i = getClass(value);
        //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
        //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
        //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
        //     }
        //     return val;
        // };
        const getColor = function(val, bypassMap) {
            let col, t;
            if (bypassMap == null) bypassMap = false;
            if (isNaN(val) || val === null) return _nacol;
            if (!bypassMap) {
                if (_classes && _classes.length > 2) {
                    // find the class
                    const c = getClass(val);
                    t = c / (_classes.length - 2);
                } else if (_max !== _min) // just interpolate between min/max
                t = (val - _min) / (_max - _min);
                else t = 1;
            } else t = val;
            // domain map
            t = tMapDomain(t);
            if (!bypassMap) t = tMapLightness(t); // lightness correction
            if (_gamma !== 1) t = pow(t, _gamma);
            t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
            t = (0, _indexJs.limit)(t, 0, 1);
            const k = Math.floor(t * 10000);
            if (_useCache && _colorCache[k]) col = _colorCache[k];
            else {
                if ((0, _indexJs.type)(_colors) === 'array') //for i in [0.._pos.length-1]
                for(let i = 0; i < _pos.length; i++){
                    const p = _pos[i];
                    if (t <= p) {
                        col = _colors[i];
                        break;
                    }
                    if (t >= p && i === _pos.length - 1) {
                        col = _colors[i];
                        break;
                    }
                    if (t > p && t < _pos[i + 1]) {
                        t = (t - p) / (_pos[i + 1] - p);
                        col = (0, _chromaJsDefault.default).interpolate(_colors[i], _colors[i + 1], t, _mode);
                        break;
                    }
                }
                else if ((0, _indexJs.type)(_colors) === 'function') col = _colors(t);
                if (_useCache) _colorCache[k] = col;
            }
            return col;
        };
        var resetCache = ()=>_colorCache = {};
        setColors(colors);
        // public interface
        const f = function(v) {
            const c = (0, _chromaJsDefault.default)(getColor(v));
            if (_out && c[_out]) return c[_out]();
            else return c;
        };
        f.classes = function(classes) {
            if (classes != null) {
                if ((0, _indexJs.type)(classes) === 'array') {
                    _classes = classes;
                    _domain = [
                        classes[0],
                        classes[classes.length - 1]
                    ];
                } else {
                    const d = (0, _chromaJsDefault.default).analyze(_domain);
                    if (classes === 0) _classes = [
                        d.min,
                        d.max
                    ];
                    else _classes = (0, _chromaJsDefault.default).limits(d, 'e', classes);
                }
                return f;
            }
            return _classes;
        };
        f.domain = function(domain) {
            if (!arguments.length) return _domain;
            _min = domain[0];
            _max = domain[domain.length - 1];
            _pos = [];
            const k = _colors.length;
            if (domain.length === k && _min !== _max) // update positions
            for (let d of Array.from(domain))_pos.push((d - _min) / (_max - _min));
            else {
                for(let c = 0; c < k; c++)_pos.push(c / (k - 1));
                if (domain.length > 2) {
                    // set domain map
                    const tOut = domain.map((d, i)=>i / (domain.length - 1));
                    const tBreaks = domain.map((d)=>(d - _min) / (_max - _min));
                    if (!tBreaks.every((val, i)=>tOut[i] === val)) tMapDomain = (t)=>{
                        if (t <= 0 || t >= 1) return t;
                        let i = 0;
                        while(t >= tBreaks[i + 1])i++;
                        const f = (t - tBreaks[i]) / (tBreaks[i + 1] - tBreaks[i]);
                        const out = tOut[i] + f * (tOut[i + 1] - tOut[i]);
                        return out;
                    };
                }
            }
            _domain = [
                _min,
                _max
            ];
            return f;
        };
        f.mode = function(_m) {
            if (!arguments.length) return _mode;
            _mode = _m;
            resetCache();
            return f;
        };
        f.range = function(colors, _pos) {
            setColors(colors, _pos);
            return f;
        };
        f.out = function(_o) {
            _out = _o;
            return f;
        };
        f.spread = function(val) {
            if (!arguments.length) return _spread;
            _spread = val;
            return f;
        };
        f.correctLightness = function(v) {
            if (v == null) v = true;
            _correctLightness = v;
            resetCache();
            if (_correctLightness) tMapLightness = function(t) {
                const L0 = getColor(0, true).lab()[0];
                const L1 = getColor(1, true).lab()[0];
                const pol = L0 > L1;
                let L_actual = getColor(t, true).lab()[0];
                const L_ideal = L0 + (L1 - L0) * t;
                let L_diff = L_actual - L_ideal;
                let t0 = 0;
                let t1 = 1;
                let max_iter = 20;
                while(Math.abs(L_diff) > 1e-2 && max_iter-- > 0)(function() {
                    if (pol) L_diff *= -1;
                    if (L_diff < 0) {
                        t0 = t;
                        t += (t1 - t) * 0.5;
                    } else {
                        t1 = t;
                        t += (t0 - t) * 0.5;
                    }
                    L_actual = getColor(t, true).lab()[0];
                    return L_diff = L_actual - L_ideal;
                })();
                return t;
            };
            else tMapLightness = (t)=>t;
            return f;
        };
        f.padding = function(p) {
            if (p != null) {
                if ((0, _indexJs.type)(p) === 'number') p = [
                    p,
                    p
                ];
                _padding = p;
                return f;
            } else return _padding;
        };
        f.colors = function(numColors, out) {
            // If no arguments are given, return the original colors that were provided
            if (arguments.length < 2) out = 'hex';
            let result = [];
            if (arguments.length === 0) result = _colors.slice(0);
            else if (numColors === 1) result = [
                f(0.5)
            ];
            else if (numColors > 1) {
                const dm = _domain[0];
                const dd = _domain[1] - dm;
                result = __range__(0, numColors, false).map((i)=>f(dm + i / (numColors - 1) * dd));
            } else {
                // returns all colors based on the defined classes
                colors = [];
                let samples = [];
                if (_classes && _classes.length > 2) for(let i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--)samples.push((_classes[i - 1] + _classes[i]) * 0.5);
                else samples = _domain;
                result = samples.map((v)=>f(v));
            }
            if ((0, _chromaJsDefault.default)[out]) result = result.map((c)=>c[out]());
            return result;
        };
        f.cache = function(c) {
            if (c != null) {
                _useCache = c;
                return f;
            } else return _useCache;
        };
        f.gamma = function(g) {
            if (g != null) {
                _gamma = g;
                return f;
            } else return _gamma;
        };
        f.nodata = function(d) {
            if (d != null) {
                _nacol = (0, _chromaJsDefault.default)(d);
                return f;
            } else return _nacol;
        };
        return f;
    });
var _chromaJs = require("../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _indexJs = require("../utils/index.js");
const { pow } = Math;
function __range__(left, right, inclusive) {
    let range = [];
    let ascending = left < right;
    let end = !inclusive ? right : ascending ? right + 1 : right - 1;
    for(let i = left; ascending ? i < end : i > end; ascending ? i++ : i--)range.push(i);
    return range;
}

},{"../chroma.js":"2Aasu","../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3x1ja":[function(require,module,exports,__globalThis) {
/*
 * interpolates between a set of colors uzing a bezier spline
 * blend mode formulas taken from https://web.archive.org/web/20180110014946/http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../io/rgb/index.js");
var _chromaJs = require("../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
const blend = (bottom, top, mode)=>{
    if (!blend[mode]) throw new Error('unknown blend mode ' + mode);
    return blend[mode](bottom, top);
};
const blend_f = (f)=>(bottom, top)=>{
        const c0 = (0, _chromaJsDefault.default)(top).rgb();
        const c1 = (0, _chromaJsDefault.default)(bottom).rgb();
        return (0, _chromaJsDefault.default).rgb(f(c0, c1));
    };
const each = (f)=>(c0, c1)=>{
        const out = [];
        out[0] = f(c0[0], c1[0]);
        out[1] = f(c0[1], c1[1]);
        out[2] = f(c0[2], c1[2]);
        return out;
    };
const normal = (a)=>a;
const multiply = (a, b)=>a * b / 255;
const darken = (a, b)=>a > b ? b : a;
const lighten = (a, b)=>a > b ? a : b;
const screen = (a, b)=>255 * (1 - (1 - a / 255) * (1 - b / 255));
const overlay = (a, b)=>b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
const burn = (a, b)=>255 * (1 - (1 - b / 255) / (a / 255));
const dodge = (a, b)=>{
    if (a === 255) return 255;
    a = 255 * (b / 255) / (1 - a / 255);
    return a > 255 ? 255 : a;
};
// # add = (a,b) ->
// #     if (a + b > 255) then 255 else a + b
blend.normal = blend_f(each(normal));
blend.multiply = blend_f(each(multiply));
blend.screen = blend_f(each(screen));
blend.overlay = blend_f(each(overlay));
blend.darken = blend_f(each(darken));
blend.lighten = blend_f(each(lighten));
blend.dodge = blend_f(each(dodge));
blend.burn = blend_f(each(burn));
// blend.add = blend_f(each(add));
exports.default = blend;

},{"../io/rgb/index.js":"6g6ex","../chroma.js":"2Aasu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6g6ex":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgb", ()=>rgb);
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _indexJs = require("../../utils/index.js");
const { round } = Math;
(0, _colorJsDefault.default).prototype.rgb = function(rnd = true) {
    if (rnd === false) return this._rgb.slice(0, 3);
    return this._rgb.slice(0, 3).map(round);
};
(0, _colorJsDefault.default).prototype.rgba = function(rnd = true) {
    return this._rgb.slice(0, 4).map((v, i)=>{
        return i < 3 ? rnd === false ? v : round(v) : v;
    });
};
const rgb = (...args)=>new (0, _colorJsDefault.default)(...args, 'rgb');
Object.assign((0, _chromaJsDefault.default), {
    rgb
});
(0, _inputJsDefault.default).format.rgb = (...args)=>{
    const rgba = (0, _indexJs.unpack)(args, 'rgba');
    if (rgba[3] === undefined) rgba[3] = 1;
    return rgba;
};
(0, _inputJsDefault.default).autodetect.push({
    p: 3,
    test: (...args)=>{
        args = (0, _indexJs.unpack)(args, 'rgba');
        if ((0, _indexJs.type)(args) === 'array' && (args.length === 3 || args.length === 4 && (0, _indexJs.type)(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) return 'rgb';
    }
});

},{"../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4o2XX":[function(require,module,exports,__globalThis) {
// cubehelix interpolation
// based on D.A. Green "A colour scheme for the display of astronomical intensity images"
// http://astron-soc.in/bulletin/11June/289392011.pdf
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(start = 300, rotations = -1.5, hue = 1, gamma = 1, lightness = [
        0,
        1
    ]) {
        let dh = 0, dl;
        if ((0, _indexJs.type)(lightness) === 'array') dl = lightness[1] - lightness[0];
        else {
            dl = 0;
            lightness = [
                lightness,
                lightness
            ];
        }
        const f = function(fract) {
            const a = (0, _indexJs.TWOPI) * ((start + 120) / 360 + rotations * fract);
            const l = pow(lightness[0] + dl * fract, gamma);
            const h = dh !== 0 ? hue[0] + fract * dh : hue;
            const amp = h * l * (1 - l) / 2;
            const cos_a = cos(a);
            const sin_a = sin(a);
            const r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
            const g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
            const b = l + amp * (1.97294 * cos_a);
            return (0, _chromaJsDefault.default)((0, _indexJs.clip_rgb)([
                r * 255,
                g * 255,
                b * 255,
                1
            ]));
        };
        f.start = function(s) {
            if (s == null) return start;
            start = s;
            return f;
        };
        f.rotations = function(r) {
            if (r == null) return rotations;
            rotations = r;
            return f;
        };
        f.gamma = function(g) {
            if (g == null) return gamma;
            gamma = g;
            return f;
        };
        f.hue = function(h) {
            if (h == null) return hue;
            hue = h;
            if ((0, _indexJs.type)(hue) === 'array') {
                dh = hue[1] - hue[0];
                if (dh === 0) hue = hue[1];
            } else dh = 0;
            return f;
        };
        f.lightness = function(h) {
            if (h == null) return lightness;
            if ((0, _indexJs.type)(h) === 'array') {
                lightness = h;
                dl = h[1] - h[0];
            } else {
                lightness = [
                    h,
                    h
                ];
                dl = 0;
            }
            return f;
        };
        f.scale = ()=>(0, _chromaJsDefault.default).scale(f);
        f.hue(hue);
        return f;
    });
var _indexJs = require("../utils/index.js");
var _chromaJs = require("../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
const { pow, sin, cos } = Math;

},{"../utils/index.js":"56eUN","../chroma.js":"2Aasu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"24BSy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
const digits = '0123456789abcdef';
const { floor, random } = Math;
exports.default = ()=>{
    let code = '#';
    for(let i = 0; i < 6; i++)code += digits.charAt(floor(random() * 16));
    return new (0, _colorJsDefault.default)(code, 'hex');
};

},{"../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1h07X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "analyze", ()=>analyze);
parcelHelpers.export(exports, "limits", ()=>limits);
var _typeJs = require("./type.js");
var _typeJsDefault = parcelHelpers.interopDefault(_typeJs);
const { log, pow, floor, abs } = Math;
function analyze(data, key = null) {
    const r = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
    };
    if ((0, _typeJsDefault.default)(data) === 'object') data = Object.values(data);
    data.forEach((val)=>{
        if (key && (0, _typeJsDefault.default)(val) === 'object') val = val[key];
        if (val !== undefined && val !== null && !isNaN(val)) {
            r.values.push(val);
            r.sum += val;
            if (val < r.min) r.min = val;
            if (val > r.max) r.max = val;
            r.count += 1;
        }
    });
    r.domain = [
        r.min,
        r.max
    ];
    r.limits = (mode, num)=>limits(r, mode, num);
    return r;
}
function limits(data, mode = 'equal', num = 7) {
    if ((0, _typeJsDefault.default)(data) == 'array') data = analyze(data);
    const { min, max } = data;
    const values = data.values.sort((a, b)=>a - b);
    if (num === 1) return [
        min,
        max
    ];
    const limits1 = [];
    if (mode.substr(0, 1) === 'c') {
        // continuous
        limits1.push(min);
        limits1.push(max);
    }
    if (mode.substr(0, 1) === 'e') {
        // equal interval
        limits1.push(min);
        for(let i = 1; i < num; i++)limits1.push(min + i / num * (max - min));
        limits1.push(max);
    } else if (mode.substr(0, 1) === 'l') {
        // log scale
        if (min <= 0) throw new Error('Logarithmic scales are only possible for values > 0');
        const min_log = Math.LOG10E * log(min);
        const max_log = Math.LOG10E * log(max);
        limits1.push(min);
        for(let i = 1; i < num; i++)limits1.push(pow(10, min_log + i / num * (max_log - min_log)));
        limits1.push(max);
    } else if (mode.substr(0, 1) === 'q') {
        // quantile scale
        limits1.push(min);
        for(let i = 1; i < num; i++){
            const p = (values.length - 1) * i / num;
            const pb = floor(p);
            if (pb === p) limits1.push(values[pb]);
            else {
                // p > pb
                const pr = p - pb;
                limits1.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
            }
        }
        limits1.push(max);
    } else if (mode.substr(0, 1) === 'k') {
        // k-means clustering
        /*
        implementation based on
        http://code.google.com/p/figue/source/browse/trunk/figue.js#336
        simplified for 1-d input values
        */ let cluster;
        const n = values.length;
        const assignments = new Array(n);
        const clusterSizes = new Array(num);
        let repeat = true;
        let nb_iters = 0;
        let centroids = null;
        // get seed values
        centroids = [];
        centroids.push(min);
        for(let i = 1; i < num; i++)centroids.push(min + i / num * (max - min));
        centroids.push(max);
        while(repeat){
            // assignment step
            for(let j = 0; j < num; j++)clusterSizes[j] = 0;
            for(let i = 0; i < n; i++){
                const value = values[i];
                let mindist = Number.MAX_VALUE;
                let best;
                for(let j = 0; j < num; j++){
                    const dist = abs(centroids[j] - value);
                    if (dist < mindist) {
                        mindist = dist;
                        best = j;
                    }
                    clusterSizes[best]++;
                    assignments[i] = best;
                }
            }
            // update centroids step
            const newCentroids = new Array(num);
            for(let j = 0; j < num; j++)newCentroids[j] = null;
            for(let i = 0; i < n; i++){
                cluster = assignments[i];
                if (newCentroids[cluster] === null) newCentroids[cluster] = values[i];
                else newCentroids[cluster] += values[i];
            }
            for(let j = 0; j < num; j++)newCentroids[j] *= 1 / clusterSizes[j];
            // check convergence
            repeat = false;
            for(let j = 0; j < num; j++)if (newCentroids[j] !== centroids[j]) {
                repeat = true;
                break;
            }
            centroids = newCentroids;
            nb_iters++;
            if (nb_iters > 200) repeat = false;
        }
        // finished k-means clustering
        // the next part is borrowed from gabrielflor.it
        const kClusters = {};
        for(let j = 0; j < num; j++)kClusters[j] = [];
        for(let i = 0; i < n; i++){
            cluster = assignments[i];
            kClusters[cluster].push(values[i]);
        }
        let tmpKMeansBreaks = [];
        for(let j = 0; j < num; j++){
            tmpKMeansBreaks.push(kClusters[j][0]);
            tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
        }
        tmpKMeansBreaks = tmpKMeansBreaks.sort((a, b)=>a - b);
        limits1.push(tmpKMeansBreaks[0]);
        for(let i = 1; i < tmpKMeansBreaks.length; i += 2){
            const v = tmpKMeansBreaks[i];
            if (!isNaN(v) && limits1.indexOf(v) === -1) limits1.push(v);
        }
    }
    return limits1;
}

},{"./type.js":"fOTxv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aC4aE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _luminanceJs = require("../ops/luminance.js");
exports.default = (a, b)=>{
    // WCAG contrast ratio
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
    a = new (0, _colorJsDefault.default)(a);
    b = new (0, _colorJsDefault.default)(b);
    const l1 = a.luminance();
    const l2 = b.luminance();
    return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
};

},{"../Color.js":"iEdmQ","../ops/luminance.js":"9WKuE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gaIvF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _mixJs = require("../generator/mix.js");
var _mixJsDefault = parcelHelpers.interopDefault(_mixJs);
/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */ // constants
const W_offset = 0.027;
const P_in = 0.0005;
const P_out = 0.1;
const R_scale = 1.14;
const B_threshold = 0.022;
const B_exp = 1.414;
exports.default = (text, bg)=>{
    // parse input colors
    text = new (0, _colorJsDefault.default)(text);
    bg = new (0, _colorJsDefault.default)(bg);
    // if text color has alpha, blend against background
    if (text.alpha() < 1) text = (0, _mixJsDefault.default)(bg, text, text.alpha(), 'rgb');
    const l_text = lum(...text.rgb());
    const l_bg = lum(...bg.rgb());
    // soft clamp black levels
    const Y_text = l_text >= B_threshold ? l_text : l_text + Math.pow(B_threshold - l_text, B_exp);
    const Y_bg = l_bg >= B_threshold ? l_bg : l_bg + Math.pow(B_threshold - l_bg, B_exp);
    // normal polarity (dark text on light background)
    const S_norm = Math.pow(Y_bg, 0.56) - Math.pow(Y_text, 0.57);
    // reverse polarity (light text on dark background)
    const S_rev = Math.pow(Y_bg, 0.65) - Math.pow(Y_text, 0.62);
    // clamp noise then scale
    const C = Math.abs(Y_bg - Y_text) < P_in ? 0 : Y_text < Y_bg ? S_norm * R_scale : S_rev * R_scale;
    // clamp minimum contrast then offset
    const S_apc = Math.abs(C) < P_out ? 0 : C > 0 ? C - W_offset : C + W_offset;
    // scale to 100
    return S_apc * 100;
};
function lum(r, g, b) {
    return 0.2126729 * Math.pow(r / 255, 2.4) + 0.7151522 * Math.pow(g / 255, 2.4) + 0.072175 * Math.pow(b / 255, 2.4);
}

},{"../Color.js":"iEdmQ","../generator/mix.js":"foq1J","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Ic5x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b, Kl = 1, Kc = 1, Kh = 1) {
        // Delta E (CIE 2000)
        // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html
        var rad2deg = function(rad) {
            return 360 * rad / (2 * PI);
        };
        var deg2rad = function(deg) {
            return 2 * PI * deg / 360;
        };
        a = new (0, _colorJsDefault.default)(a);
        b = new (0, _colorJsDefault.default)(b);
        const [L1, a1, b1] = Array.from(a.lab());
        const [L2, a2, b2] = Array.from(b.lab());
        const avgL = (L1 + L2) / 2;
        const C1 = sqrt(pow(a1, 2) + pow(b1, 2));
        const C2 = sqrt(pow(a2, 2) + pow(b2, 2));
        const avgC = (C1 + C2) / 2;
        const G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
        const a1p = a1 * (1 + G);
        const a2p = a2 * (1 + G);
        const C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
        const C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
        const avgCp = (C1p + C2p) / 2;
        const arctan1 = rad2deg(atan2(b1, a1p));
        const arctan2 = rad2deg(atan2(b2, a2p));
        const h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
        const h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
        const avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
        const T = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
        let deltaHp = h2p - h1p;
        deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
        deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
        const deltaL = L2 - L1;
        const deltaCp = C2p - C1p;
        const sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
        const sc = 1 + 0.045 * avgCp;
        const sh = 1 + 0.015 * avgCp * T;
        const deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
        const Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
        const Rt = -Rc * sin(2 * deg2rad(deltaTheta));
        const result = sqrt(pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh)));
        return max(0, min(100, result));
    });
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
const { sqrt, pow, min, max, atan2, abs, cos, sin, exp, PI } = Math;

},{"../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bF7kw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// simple Euclidean distance
parcelHelpers.export(exports, "default", ()=>function(a, b, mode = 'lab') {
        // Delta E (CIE 1976)
        // see http://www.brucelindbloom.com/index.html?Equations.html
        a = new (0, _colorJsDefault.default)(a);
        b = new (0, _colorJsDefault.default)(b);
        const l1 = a.get(mode);
        const l2 = b.get(mode);
        let sum_sq = 0;
        for(let i in l1){
            const d = (l1[i] || 0) - (l2[i] || 0);
            sum_sq += d * d;
        }
        return Math.sqrt(sum_sq);
    });
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);

},{"../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9u1UL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
exports.default = (...args)=>{
    try {
        new (0, _colorJsDefault.default)(...args);
        return true;
    // eslint-disable-next-line
    } catch (e) {
        return false;
    }
};

},{"../Color.js":"iEdmQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3cYAQ":[function(require,module,exports,__globalThis) {
// some pre-defined color scales:
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chromaJs = require("../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _indexJs = require("../io/hsl/index.js");
var _scaleJs = require("../generator/scale.js");
var _scaleJsDefault = parcelHelpers.interopDefault(_scaleJs);
exports.default = {
    cool () {
        return (0, _scaleJsDefault.default)([
            (0, _chromaJsDefault.default).hsl(180, 1, 0.9),
            (0, _chromaJsDefault.default).hsl(250, 0.7, 0.4)
        ]);
    },
    hot () {
        return (0, _scaleJsDefault.default)([
            '#000',
            '#f00',
            '#ff0',
            '#fff'
        ], [
            0,
            0.25,
            0.75,
            1
        ]).mode('rgb');
    }
};

},{"../chroma.js":"2Aasu","../io/hsl/index.js":"fd8sJ","../generator/scale.js":"2aKFN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eIDB0":[function(require,module,exports,__globalThis) {
/**
    ColorBrewer colors for chroma.js

    Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
    Pennsylvania State University.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software distributed
    under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
    CONDITIONS OF ANY KIND, either express or implied. See the License for the
    specific language governing permissions and limitations under the License.
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const colorbrewer = {
    // sequential
    OrRd: [
        '#fff7ec',
        '#fee8c8',
        '#fdd49e',
        '#fdbb84',
        '#fc8d59',
        '#ef6548',
        '#d7301f',
        '#b30000',
        '#7f0000'
    ],
    PuBu: [
        '#fff7fb',
        '#ece7f2',
        '#d0d1e6',
        '#a6bddb',
        '#74a9cf',
        '#3690c0',
        '#0570b0',
        '#045a8d',
        '#023858'
    ],
    BuPu: [
        '#f7fcfd',
        '#e0ecf4',
        '#bfd3e6',
        '#9ebcda',
        '#8c96c6',
        '#8c6bb1',
        '#88419d',
        '#810f7c',
        '#4d004b'
    ],
    Oranges: [
        '#fff5eb',
        '#fee6ce',
        '#fdd0a2',
        '#fdae6b',
        '#fd8d3c',
        '#f16913',
        '#d94801',
        '#a63603',
        '#7f2704'
    ],
    BuGn: [
        '#f7fcfd',
        '#e5f5f9',
        '#ccece6',
        '#99d8c9',
        '#66c2a4',
        '#41ae76',
        '#238b45',
        '#006d2c',
        '#00441b'
    ],
    YlOrBr: [
        '#ffffe5',
        '#fff7bc',
        '#fee391',
        '#fec44f',
        '#fe9929',
        '#ec7014',
        '#cc4c02',
        '#993404',
        '#662506'
    ],
    YlGn: [
        '#ffffe5',
        '#f7fcb9',
        '#d9f0a3',
        '#addd8e',
        '#78c679',
        '#41ab5d',
        '#238443',
        '#006837',
        '#004529'
    ],
    Reds: [
        '#fff5f0',
        '#fee0d2',
        '#fcbba1',
        '#fc9272',
        '#fb6a4a',
        '#ef3b2c',
        '#cb181d',
        '#a50f15',
        '#67000d'
    ],
    RdPu: [
        '#fff7f3',
        '#fde0dd',
        '#fcc5c0',
        '#fa9fb5',
        '#f768a1',
        '#dd3497',
        '#ae017e',
        '#7a0177',
        '#49006a'
    ],
    Greens: [
        '#f7fcf5',
        '#e5f5e0',
        '#c7e9c0',
        '#a1d99b',
        '#74c476',
        '#41ab5d',
        '#238b45',
        '#006d2c',
        '#00441b'
    ],
    YlGnBu: [
        '#ffffd9',
        '#edf8b1',
        '#c7e9b4',
        '#7fcdbb',
        '#41b6c4',
        '#1d91c0',
        '#225ea8',
        '#253494',
        '#081d58'
    ],
    Purples: [
        '#fcfbfd',
        '#efedf5',
        '#dadaeb',
        '#bcbddc',
        '#9e9ac8',
        '#807dba',
        '#6a51a3',
        '#54278f',
        '#3f007d'
    ],
    GnBu: [
        '#f7fcf0',
        '#e0f3db',
        '#ccebc5',
        '#a8ddb5',
        '#7bccc4',
        '#4eb3d3',
        '#2b8cbe',
        '#0868ac',
        '#084081'
    ],
    Greys: [
        '#ffffff',
        '#f0f0f0',
        '#d9d9d9',
        '#bdbdbd',
        '#969696',
        '#737373',
        '#525252',
        '#252525',
        '#000000'
    ],
    YlOrRd: [
        '#ffffcc',
        '#ffeda0',
        '#fed976',
        '#feb24c',
        '#fd8d3c',
        '#fc4e2a',
        '#e31a1c',
        '#bd0026',
        '#800026'
    ],
    PuRd: [
        '#f7f4f9',
        '#e7e1ef',
        '#d4b9da',
        '#c994c7',
        '#df65b0',
        '#e7298a',
        '#ce1256',
        '#980043',
        '#67001f'
    ],
    Blues: [
        '#f7fbff',
        '#deebf7',
        '#c6dbef',
        '#9ecae1',
        '#6baed6',
        '#4292c6',
        '#2171b5',
        '#08519c',
        '#08306b'
    ],
    PuBuGn: [
        '#fff7fb',
        '#ece2f0',
        '#d0d1e6',
        '#a6bddb',
        '#67a9cf',
        '#3690c0',
        '#02818a',
        '#016c59',
        '#014636'
    ],
    Viridis: [
        '#440154',
        '#482777',
        '#3f4a8a',
        '#31678e',
        '#26838f',
        '#1f9d8a',
        '#6cce5a',
        '#b6de2b',
        '#fee825'
    ],
    // diverging
    Spectral: [
        '#9e0142',
        '#d53e4f',
        '#f46d43',
        '#fdae61',
        '#fee08b',
        '#ffffbf',
        '#e6f598',
        '#abdda4',
        '#66c2a5',
        '#3288bd',
        '#5e4fa2'
    ],
    RdYlGn: [
        '#a50026',
        '#d73027',
        '#f46d43',
        '#fdae61',
        '#fee08b',
        '#ffffbf',
        '#d9ef8b',
        '#a6d96a',
        '#66bd63',
        '#1a9850',
        '#006837'
    ],
    RdBu: [
        '#67001f',
        '#b2182b',
        '#d6604d',
        '#f4a582',
        '#fddbc7',
        '#f7f7f7',
        '#d1e5f0',
        '#92c5de',
        '#4393c3',
        '#2166ac',
        '#053061'
    ],
    PiYG: [
        '#8e0152',
        '#c51b7d',
        '#de77ae',
        '#f1b6da',
        '#fde0ef',
        '#f7f7f7',
        '#e6f5d0',
        '#b8e186',
        '#7fbc41',
        '#4d9221',
        '#276419'
    ],
    PRGn: [
        '#40004b',
        '#762a83',
        '#9970ab',
        '#c2a5cf',
        '#e7d4e8',
        '#f7f7f7',
        '#d9f0d3',
        '#a6dba0',
        '#5aae61',
        '#1b7837',
        '#00441b'
    ],
    RdYlBu: [
        '#a50026',
        '#d73027',
        '#f46d43',
        '#fdae61',
        '#fee090',
        '#ffffbf',
        '#e0f3f8',
        '#abd9e9',
        '#74add1',
        '#4575b4',
        '#313695'
    ],
    BrBG: [
        '#543005',
        '#8c510a',
        '#bf812d',
        '#dfc27d',
        '#f6e8c3',
        '#f5f5f5',
        '#c7eae5',
        '#80cdc1',
        '#35978f',
        '#01665e',
        '#003c30'
    ],
    RdGy: [
        '#67001f',
        '#b2182b',
        '#d6604d',
        '#f4a582',
        '#fddbc7',
        '#ffffff',
        '#e0e0e0',
        '#bababa',
        '#878787',
        '#4d4d4d',
        '#1a1a1a'
    ],
    PuOr: [
        '#7f3b08',
        '#b35806',
        '#e08214',
        '#fdb863',
        '#fee0b6',
        '#f7f7f7',
        '#d8daeb',
        '#b2abd2',
        '#8073ac',
        '#542788',
        '#2d004b'
    ],
    // qualitative
    Set2: [
        '#66c2a5',
        '#fc8d62',
        '#8da0cb',
        '#e78ac3',
        '#a6d854',
        '#ffd92f',
        '#e5c494',
        '#b3b3b3'
    ],
    Accent: [
        '#7fc97f',
        '#beaed4',
        '#fdc086',
        '#ffff99',
        '#386cb0',
        '#f0027f',
        '#bf5b17',
        '#666666'
    ],
    Set1: [
        '#e41a1c',
        '#377eb8',
        '#4daf4a',
        '#984ea3',
        '#ff7f00',
        '#ffff33',
        '#a65628',
        '#f781bf',
        '#999999'
    ],
    Set3: [
        '#8dd3c7',
        '#ffffb3',
        '#bebada',
        '#fb8072',
        '#80b1d3',
        '#fdb462',
        '#b3de69',
        '#fccde5',
        '#d9d9d9',
        '#bc80bd',
        '#ccebc5',
        '#ffed6f'
    ],
    Dark2: [
        '#1b9e77',
        '#d95f02',
        '#7570b3',
        '#e7298a',
        '#66a61e',
        '#e6ab02',
        '#a6761d',
        '#666666'
    ],
    Paired: [
        '#a6cee3',
        '#1f78b4',
        '#b2df8a',
        '#33a02c',
        '#fb9a99',
        '#e31a1c',
        '#fdbf6f',
        '#ff7f00',
        '#cab2d6',
        '#6a3d9a',
        '#ffff99',
        '#b15928'
    ],
    Pastel2: [
        '#b3e2cd',
        '#fdcdac',
        '#cbd5e8',
        '#f4cae4',
        '#e6f5c9',
        '#fff2ae',
        '#f1e2cc',
        '#cccccc'
    ],
    Pastel1: [
        '#fbb4ae',
        '#b3cde3',
        '#ccebc5',
        '#decbe4',
        '#fed9a6',
        '#ffffcc',
        '#e5d8bd',
        '#fddaec',
        '#f2f2f2'
    ]
};
const colorbrewerTypes = Object.keys(colorbrewer);
const typeMap = new Map(colorbrewerTypes.map((key)=>[
        key.toLowerCase(),
        key
    ]));
// use Proxy to allow case-insensitive access to palettes
const colorbrewerProxy = typeof Proxy === 'function' ? new Proxy(colorbrewer, {
    get (target, prop) {
        const lower = prop.toLowerCase();
        if (typeMap.has(lower)) return target[typeMap.get(lower)];
    },
    getOwnPropertyNames () {
        return Object.getOwnPropertyNames(colorbrewerTypes);
    }
}) : colorbrewer;
exports.default = colorbrewerProxy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eLRqy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cmyk", ()=>cmyk);
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _indexJs = require("../../utils/index.js");
var _cmyk2RgbJs = require("./cmyk2rgb.js");
var _cmyk2RgbJsDefault = parcelHelpers.interopDefault(_cmyk2RgbJs);
var _rgb2CmykJs = require("./rgb2cmyk.js");
var _rgb2CmykJsDefault = parcelHelpers.interopDefault(_rgb2CmykJs);
(0, _colorJsDefault.default).prototype.cmyk = function() {
    return (0, _rgb2CmykJsDefault.default)(this._rgb);
};
const cmyk = (...args)=>new (0, _colorJsDefault.default)(...args, 'cmyk');
Object.assign((0, _chromaJsDefault.default), {
    cmyk
});
(0, _inputJsDefault.default).format.cmyk = (0, _cmyk2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 2,
    test: (...args)=>{
        args = (0, _indexJs.unpack)(args, 'cmyk');
        if ((0, _indexJs.type)(args) === 'array' && args.length === 4) return 'cmyk';
    }
});

},{"../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","../../utils/index.js":"56eUN","./cmyk2rgb.js":"egluv","./rgb2cmyk.js":"a0Wgk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egluv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const cmyk2rgb = (...args)=>{
    args = (0, _indexJs.unpack)(args, 'cmyk');
    const [c, m, y, k] = args;
    const alpha = args.length > 4 ? args[4] : 1;
    if (k === 1) return [
        0,
        0,
        0,
        alpha
    ];
    return [
        c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
        m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
        y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
        alpha
    ];
};
exports.default = cmyk2rgb;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a0Wgk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const { max } = Math;
const rgb2cmyk = (...args)=>{
    let [r, g, b] = (0, _indexJs.unpack)(args, 'rgb');
    r = r / 255;
    g = g / 255;
    b = b / 255;
    const k = 1 - max(r, max(g, b));
    const f = k < 1 ? 1 / (1 - k) : 0;
    const c = (1 - r - k) * f;
    const m = (1 - g - k) * f;
    const y = (1 - b - k) * f;
    return [
        c,
        m,
        y,
        k
    ];
};
exports.default = rgb2cmyk;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lLDXK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "css", ()=>css);
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _indexJs = require("../../utils/index.js");
var _rgb2CssJs = require("./rgb2css.js");
var _rgb2CssJsDefault = parcelHelpers.interopDefault(_rgb2CssJs);
var _css2RgbJs = require("./css2rgb.js");
var _css2RgbJsDefault = parcelHelpers.interopDefault(_css2RgbJs);
(0, _colorJsDefault.default).prototype.css = function(mode) {
    return (0, _rgb2CssJsDefault.default)(this._rgb, mode);
};
const css = (...args)=>new (0, _colorJsDefault.default)(...args, 'css');
(0, _chromaJsDefault.default).css = css;
(0, _inputJsDefault.default).format.css = (0, _css2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 5,
    test: (h, ...rest)=>{
        if (!rest.length && (0, _indexJs.type)(h) === 'string' && (0, _css2RgbJsDefault.default).test(h)) return 'css';
    }
});

},{"../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","../../utils/index.js":"56eUN","./rgb2css.js":"1NFz6","./css2rgb.js":"ltD89","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1NFz6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
var _hsl2CssJs = require("./hsl2css.js");
var _hsl2CssJsDefault = parcelHelpers.interopDefault(_hsl2CssJs);
var _rgb2HslJs = require("../hsl/rgb2hsl.js");
var _rgb2HslJsDefault = parcelHelpers.interopDefault(_rgb2HslJs);
var _lab2CssJs = require("./lab2css.js");
var _lab2CssJsDefault = parcelHelpers.interopDefault(_lab2CssJs);
var _rgb2LabJs = require("../lab/rgb2lab.js");
var _rgb2LabJsDefault = parcelHelpers.interopDefault(_rgb2LabJs);
var _lch2CssJs = require("./lch2css.js");
var _lch2CssJsDefault = parcelHelpers.interopDefault(_lch2CssJs);
var _rgb2LchJs = require("../lch/rgb2lch.js");
var _rgb2LchJsDefault = parcelHelpers.interopDefault(_rgb2LchJs);
var _rgb2OklabJs = require("../oklab/rgb2oklab.js");
var _rgb2OklabJsDefault = parcelHelpers.interopDefault(_rgb2OklabJs);
var _oklab2CssJs = require("./oklab2css.js");
var _oklab2CssJsDefault = parcelHelpers.interopDefault(_oklab2CssJs);
var _rgb2OklchJs = require("../oklch/rgb2oklch.js");
var _rgb2OklchJsDefault = parcelHelpers.interopDefault(_rgb2OklchJs);
var _oklch2CssJs = require("./oklch2css.js");
var _oklch2CssJsDefault = parcelHelpers.interopDefault(_oklch2CssJs);
var _labConstantsJs = require("../lab/lab-constants.js");
const { round } = Math;
/*
 * supported arguments:
 * - rgb2css(r,g,b)
 * - rgb2css(r,g,b,a)
 * - rgb2css([r,g,b], mode)
 * - rgb2css([r,g,b,a], mode)
 * - rgb2css({r,g,b,a}, mode)
 */ const rgb2css = (...args)=>{
    const rgba = (0, _indexJs.unpack)(args, 'rgba');
    let mode = (0, _indexJs.last)(args) || 'rgb';
    if (mode.substr(0, 3) === 'hsl') return (0, _hsl2CssJsDefault.default)((0, _rgb2HslJsDefault.default)(rgba), mode);
    if (mode.substr(0, 3) === 'lab') {
        // change to D50 lab whitepoint since this is what W3C is using for CSS Lab colors
        const prevWhitePoint = (0, _labConstantsJs.getLabWhitePoint)();
        (0, _labConstantsJs.setLabWhitePoint)('d50');
        const cssColor = (0, _lab2CssJsDefault.default)((0, _rgb2LabJsDefault.default)(rgba), mode);
        (0, _labConstantsJs.setLabWhitePoint)(prevWhitePoint);
        return cssColor;
    }
    if (mode.substr(0, 3) === 'lch') {
        // change to D50 lab whitepoint since this is what W3C is using for CSS Lab colors
        const prevWhitePoint = (0, _labConstantsJs.getLabWhitePoint)();
        (0, _labConstantsJs.setLabWhitePoint)('d50');
        const cssColor = (0, _lch2CssJsDefault.default)((0, _rgb2LchJsDefault.default)(rgba), mode);
        (0, _labConstantsJs.setLabWhitePoint)(prevWhitePoint);
        return cssColor;
    }
    if (mode.substr(0, 5) === 'oklab') return (0, _oklab2CssJsDefault.default)((0, _rgb2OklabJsDefault.default)(rgba));
    if (mode.substr(0, 5) === 'oklch') return (0, _oklch2CssJsDefault.default)((0, _rgb2OklchJsDefault.default)(rgba));
    rgba[0] = round(rgba[0]);
    rgba[1] = round(rgba[1]);
    rgba[2] = round(rgba[2]);
    if (mode === 'rgba' || rgba.length > 3 && rgba[3] < 1) {
        rgba[3] = '/ ' + (rgba.length > 3 ? rgba[3] : 1);
        mode = 'rgba';
    }
    return `${mode.substr(0, 3)}(${rgba.slice(0, mode === 'rgb' ? 3 : 4).join(' ')})`;
};
exports.default = rgb2css;

},{"../../utils/index.js":"56eUN","./hsl2css.js":"4kW0n","../hsl/rgb2hsl.js":"9vdNf","./lab2css.js":"9q7Nc","../lab/rgb2lab.js":"bEuhm","./lch2css.js":"jYxUR","../lch/rgb2lch.js":"lkhqE","../oklab/rgb2oklab.js":"cnIOz","./oklab2css.js":"hW5OU","../oklch/rgb2oklch.js":"8SOKf","./oklch2css.js":"adSjz","../lab/lab-constants.js":"jZW48","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4kW0n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
/*
 * supported arguments:
 * - hsl2css(h,s,l)
 * - hsl2css(h,s,l,a)
 * - hsl2css([h,s,l], mode)
 * - hsl2css([h,s,l,a], mode)
 * - hsl2css({h,s,l,a}, mode)
 */ const hsl2css = (...args)=>{
    const hsla = (0, _indexJs.unpack)(args, 'hsla');
    let mode = (0, _indexJs.last)(args) || 'lsa';
    hsla[0] = (0, _indexJs.rnd2)(hsla[0] || 0) + 'deg';
    hsla[1] = (0, _indexJs.rnd2)(hsla[1] * 100) + '%';
    hsla[2] = (0, _indexJs.rnd2)(hsla[2] * 100) + '%';
    if (mode === 'hsla' || hsla.length > 3 && hsla[3] < 1) {
        hsla[3] = '/ ' + (hsla.length > 3 ? hsla[3] : 1);
        mode = 'hsla';
    } else hsla.length = 3;
    return `${mode.substr(0, 3)}(${hsla.join(' ')})`;
};
exports.default = hsl2css;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9q7Nc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
/*
 * supported arguments:
 * - lab2css(l,a,b)
 * - lab2css(l,a,b,alpha)
 * - lab2css([l,a,b], mode)
 * - lab2css([l,a,b,alpha], mode)
 */ const lab2css = (...args)=>{
    const laba = (0, _indexJs.unpack)(args, 'lab');
    let mode = (0, _indexJs.last)(args) || 'lab';
    laba[0] = (0, _indexJs.rnd2)(laba[0]) + '%';
    laba[1] = (0, _indexJs.rnd2)(laba[1]);
    laba[2] = (0, _indexJs.rnd2)(laba[2]);
    if (mode === 'laba' || laba.length > 3 && laba[3] < 1) laba[3] = '/ ' + (laba.length > 3 ? laba[3] : 1);
    else laba.length = 3;
    return `lab(${laba.join(' ')})`;
};
exports.default = lab2css;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jYxUR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
/*
 * supported arguments:
 * - lab2css(l,a,b)
 * - lab2css(l,a,b,alpha)
 * - lab2css([l,a,b], mode)
 * - lab2css([l,a,b,alpha], mode)
 */ const lch2css = (...args)=>{
    const lcha = (0, _indexJs.unpack)(args, 'lch');
    let mode = (0, _indexJs.last)(args) || 'lab';
    lcha[0] = (0, _indexJs.rnd2)(lcha[0]) + '%';
    lcha[1] = (0, _indexJs.rnd2)(lcha[1]);
    lcha[2] = isNaN(lcha[2]) ? 'none' : (0, _indexJs.rnd2)(lcha[2]) + 'deg'; // add deg unit to hue
    if (mode === 'lcha' || lcha.length > 3 && lcha[3] < 1) lcha[3] = '/ ' + (lcha.length > 3 ? lcha[3] : 1);
    else lcha.length = 3;
    return `lch(${lcha.join(' ')})`;
};
exports.default = lch2css;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hW5OU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const oklab2css = (...args)=>{
    const laba = (0, _indexJs.unpack)(args, 'lab');
    laba[0] = (0, _indexJs.rnd2)(laba[0] * 100) + '%';
    laba[1] = (0, _indexJs.rnd3)(laba[1]);
    laba[2] = (0, _indexJs.rnd3)(laba[2]);
    if (laba.length > 3 && laba[3] < 1) laba[3] = '/ ' + (laba.length > 3 ? laba[3] : 1);
    else laba.length = 3;
    return `oklab(${laba.join(' ')})`;
};
exports.default = oklab2css;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8SOKf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
var _rgb2OklabJs = require("../oklab/rgb2oklab.js");
var _rgb2OklabJsDefault = parcelHelpers.interopDefault(_rgb2OklabJs);
var _lab2LchJs = require("../lch/lab2lch.js");
var _lab2LchJsDefault = parcelHelpers.interopDefault(_lab2LchJs);
const rgb2oklch = (...args)=>{
    const [r, g, b, ...rest] = (0, _indexJs.unpack)(args, 'rgb');
    const [l, a, b_] = (0, _rgb2OklabJsDefault.default)(r, g, b);
    const [L, c, h] = (0, _lab2LchJsDefault.default)(l, a, b_);
    return [
        L,
        c,
        h,
        ...rest.length > 0 && rest[0] < 1 ? [
            rest[0]
        ] : []
    ];
};
exports.default = rgb2oklch;

},{"../../utils/index.js":"56eUN","../oklab/rgb2oklab.js":"cnIOz","../lch/lab2lch.js":"7qT7w","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"adSjz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
const oklch2css = (...args)=>{
    const lcha = (0, _indexJs.unpack)(args, 'lch');
    lcha[0] = (0, _indexJs.rnd2)(lcha[0] * 100) + '%';
    lcha[1] = (0, _indexJs.rnd3)(lcha[1]);
    lcha[2] = isNaN(lcha[2]) ? 'none' : (0, _indexJs.rnd2)(lcha[2]) + 'deg'; // add deg unit to hue
    if (lcha.length > 3 && lcha[3] < 1) lcha[3] = '/ ' + (lcha.length > 3 ? lcha[3] : 1);
    else lcha.length = 3;
    return `oklch(${lcha.join(' ')})`;
};
exports.default = oklch2css;

},{"../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ltD89":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hsl2RgbJs = require("../hsl/hsl2rgb.js");
var _hsl2RgbJsDefault = parcelHelpers.interopDefault(_hsl2RgbJs);
var _lab2RgbJs = require("../lab/lab2rgb.js");
var _lab2RgbJsDefault = parcelHelpers.interopDefault(_lab2RgbJs);
var _lch2RgbJs = require("../lch/lch2rgb.js");
var _lch2RgbJsDefault = parcelHelpers.interopDefault(_lch2RgbJs);
var _oklab2RgbJs = require("../oklab/oklab2rgb.js");
var _oklab2RgbJsDefault = parcelHelpers.interopDefault(_oklab2RgbJs);
var _oklch2RgbJs = require("../oklch/oklch2rgb.js");
var _oklch2RgbJsDefault = parcelHelpers.interopDefault(_oklch2RgbJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _limitJs = require("../../utils/limit.js");
var _limitJsDefault = parcelHelpers.interopDefault(_limitJs);
var _labConstantsJs = require("../lab/lab-constants.js");
const INT_OR_PCT = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source;
const FLOAT_OR_PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source;
const PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source;
const RE_S = /\s*/.source;
const SEP = /\s+/.source;
const COMMA = /\s*,\s*/.source;
const ANLGE = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source;
const ALPHA = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source;
// e.g. rgb(250 20 0), rgb(100% 50% 20%), rgb(100% 50% 20% / 0.5)
const RE_RGB = new RegExp('^rgba?\\(' + RE_S + [
    INT_OR_PCT,
    INT_OR_PCT,
    INT_OR_PCT
].join(SEP) + ALPHA + '\\)$');
const RE_RGB_LEGACY = new RegExp('^rgb\\(' + RE_S + [
    INT_OR_PCT,
    INT_OR_PCT,
    INT_OR_PCT
].join(COMMA) + RE_S + '\\)$');
const RE_RGBA_LEGACY = new RegExp('^rgba\\(' + RE_S + [
    INT_OR_PCT,
    INT_OR_PCT,
    INT_OR_PCT,
    FLOAT_OR_PCT
].join(COMMA) + RE_S + '\\)$');
const RE_HSL = new RegExp('^hsla?\\(' + RE_S + [
    ANLGE,
    PCT,
    PCT
].join(SEP) + ALPHA + '\\)$');
const RE_HSL_LEGACY = new RegExp('^hsl?\\(' + RE_S + [
    ANLGE,
    PCT,
    PCT
].join(COMMA) + RE_S + '\\)$');
const RE_HSLA_LEGACY = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
const RE_LAB = new RegExp('^lab\\(' + RE_S + [
    FLOAT_OR_PCT,
    FLOAT_OR_PCT,
    FLOAT_OR_PCT
].join(SEP) + ALPHA + '\\)$');
const RE_LCH = new RegExp('^lch\\(' + RE_S + [
    FLOAT_OR_PCT,
    FLOAT_OR_PCT,
    ANLGE
].join(SEP) + ALPHA + '\\)$');
const RE_OKLAB = new RegExp('^oklab\\(' + RE_S + [
    FLOAT_OR_PCT,
    FLOAT_OR_PCT,
    FLOAT_OR_PCT
].join(SEP) + ALPHA + '\\)$');
const RE_OKLCH = new RegExp('^oklch\\(' + RE_S + [
    FLOAT_OR_PCT,
    FLOAT_OR_PCT,
    ANLGE
].join(SEP) + ALPHA + '\\)$');
const { round } = Math;
const roundRGB = (rgb)=>{
    return rgb.map((v, i)=>i <= 2 ? (0, _limitJsDefault.default)(round(v), 0, 255) : v);
};
const percentToAbsolute = (pct, min = 0, max = 100, signed = false)=>{
    if (typeof pct === 'string' && pct.endsWith('%')) {
        pct = parseFloat(pct.substring(0, pct.length - 1)) / 100;
        if (signed) // signed percentages are in the range -100% to 100%
        pct = min + (pct + 1) * 0.5 * (max - min);
        else pct = min + pct * (max - min);
    }
    return +pct;
};
const noneToValue = (v, noneValue)=>{
    return v === 'none' ? noneValue : v;
};
const css2rgb = (css)=>{
    css = css.toLowerCase().trim();
    if (css === 'transparent') return [
        0,
        0,
        0,
        0
    ];
    let m;
    if ((0, _inputJsDefault.default).format.named) try {
        return (0, _inputJsDefault.default).format.named(css);
    // eslint-disable-next-line
    } catch (e) {}
    // rgb(250 20 0) or rgb(250,20,0)
    if ((m = css.match(RE_RGB)) || (m = css.match(RE_RGB_LEGACY))) {
        let rgb = m.slice(1, 4);
        for(let i = 0; i < 3; i++)rgb[i] = +percentToAbsolute(noneToValue(rgb[i], 0), 0, 255);
        rgb = roundRGB(rgb);
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha; // default alpha
        return rgb;
    }
    // rgba(250,20,0,0.4)
    if (m = css.match(RE_RGBA_LEGACY)) {
        const rgb = m.slice(1, 5);
        for(let i = 0; i < 4; i++)rgb[i] = +percentToAbsolute(rgb[i], 0, 255);
        return rgb;
    }
    // hsl(0,100%,50%)
    if ((m = css.match(RE_HSL)) || (m = css.match(RE_HSL_LEGACY))) {
        const hsl = m.slice(1, 4);
        hsl[0] = +noneToValue(hsl[0].replace('deg', ''), 0);
        hsl[1] = +percentToAbsolute(noneToValue(hsl[1], 0), 0, 100) * 0.01;
        hsl[2] = +percentToAbsolute(noneToValue(hsl[2], 0), 0, 100) * 0.01;
        const rgb = roundRGB((0, _hsl2RgbJsDefault.default)(hsl));
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha;
        return rgb;
    }
    // hsla(0,100%,50%,0.5)
    if (m = css.match(RE_HSLA_LEGACY)) {
        const hsl = m.slice(1, 4);
        hsl[1] *= 0.01;
        hsl[2] *= 0.01;
        const rgb = (0, _hsl2RgbJsDefault.default)(hsl);
        for(let i = 0; i < 3; i++)rgb[i] = round(rgb[i]);
        rgb[3] = +m[4]; // default alpha = 1
        return rgb;
    }
    if (m = css.match(RE_LAB)) {
        const lab = m.slice(1, 4);
        lab[0] = percentToAbsolute(noneToValue(lab[0], 0), 0, 100);
        lab[1] = percentToAbsolute(noneToValue(lab[1], 0), -125, 125, true);
        lab[2] = percentToAbsolute(noneToValue(lab[2], 0), -125, 125, true);
        // convert to D50 Lab whitepoint
        const wp = (0, _labConstantsJs.getLabWhitePoint)();
        (0, _labConstantsJs.setLabWhitePoint)('d50');
        const rgb = roundRGB((0, _lab2RgbJsDefault.default)(lab));
        // convert back to original Lab whitepoint
        (0, _labConstantsJs.setLabWhitePoint)(wp);
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha;
        return rgb;
    }
    if (m = css.match(RE_LCH)) {
        const lch = m.slice(1, 4);
        lch[0] = percentToAbsolute(lch[0], 0, 100);
        lch[1] = percentToAbsolute(noneToValue(lch[1], 0), 0, 150, false);
        lch[2] = +noneToValue(lch[2].replace('deg', ''), 0);
        // convert to D50 Lab whitepoint
        const wp = (0, _labConstantsJs.getLabWhitePoint)();
        (0, _labConstantsJs.setLabWhitePoint)('d50');
        const rgb = roundRGB((0, _lch2RgbJsDefault.default)(lch));
        // convert back to original Lab whitepoint
        (0, _labConstantsJs.setLabWhitePoint)(wp);
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha;
        return rgb;
    }
    if (m = css.match(RE_OKLAB)) {
        const oklab = m.slice(1, 4);
        oklab[0] = percentToAbsolute(noneToValue(oklab[0], 0), 0, 1);
        oklab[1] = percentToAbsolute(noneToValue(oklab[1], 0), -0.4, 0.4, true);
        oklab[2] = percentToAbsolute(noneToValue(oklab[2], 0), -0.4, 0.4, true);
        const rgb = roundRGB((0, _oklab2RgbJsDefault.default)(oklab));
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha;
        return rgb;
    }
    if (m = css.match(RE_OKLCH)) {
        const oklch = m.slice(1, 4);
        oklch[0] = percentToAbsolute(noneToValue(oklch[0], 0), 0, 1);
        oklch[1] = percentToAbsolute(noneToValue(oklch[1], 0), 0, 0.4, false);
        oklch[2] = +noneToValue(oklch[2].replace('deg', ''), 0);
        const rgb = roundRGB((0, _oklch2RgbJsDefault.default)(oklch));
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha;
        return rgb;
    }
};
css2rgb.test = (s)=>{
    return(// modern
    RE_RGB.test(s) || RE_HSL.test(s) || RE_LAB.test(s) || RE_LCH.test(s) || RE_OKLAB.test(s) || RE_OKLCH.test(s) || // legacy
    RE_RGB_LEGACY.test(s) || RE_RGBA_LEGACY.test(s) || RE_HSL_LEGACY.test(s) || RE_HSLA_LEGACY.test(s) || s === 'transparent');
};
exports.default = css2rgb;

},{"../hsl/hsl2rgb.js":"hWWTp","../lab/lab2rgb.js":"fFSlu","../lch/lch2rgb.js":"hgyhX","../oklab/oklab2rgb.js":"yUJeU","../oklch/oklch2rgb.js":"hqhpU","../input.js":"6uG1f","../../utils/limit.js":"gHAQ0","../lab/lab-constants.js":"jZW48","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hqhpU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../utils/index.js");
var _lch2LabJs = require("../lch/lch2lab.js");
var _lch2LabJsDefault = parcelHelpers.interopDefault(_lch2LabJs);
var _oklab2RgbJs = require("../oklab/oklab2rgb.js");
var _oklab2RgbJsDefault = parcelHelpers.interopDefault(_oklab2RgbJs);
const oklch2rgb = (...args)=>{
    args = (0, _indexJs.unpack)(args, 'lch');
    const [l, c, h, ...rest] = args;
    const [L, a, b_] = (0, _lch2LabJsDefault.default)(l, c, h);
    const [r, g, b] = (0, _oklab2RgbJsDefault.default)(L, a, b_);
    return [
        r,
        g,
        b,
        ...rest.length > 0 && rest[0] < 1 ? [
            rest[0]
        ] : []
    ];
};
exports.default = oklch2rgb;

},{"../../utils/index.js":"56eUN","../lch/lch2lab.js":"kWzAw","../oklab/oklab2rgb.js":"yUJeU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ePoQj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gl", ()=>gl);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _indexJs = require("../../utils/index.js");
(0, _inputJsDefault.default).format.gl = (...args)=>{
    const rgb = (0, _indexJs.unpack)(args, 'rgba');
    rgb[0] *= 255;
    rgb[1] *= 255;
    rgb[2] *= 255;
    return rgb;
};
const gl = (...args)=>new (0, _colorJsDefault.default)(...args, 'gl');
(0, _chromaJsDefault.default).gl = gl;
(0, _colorJsDefault.default).prototype.gl = function() {
    const rgb = this._rgb;
    return [
        rgb[0] / 255,
        rgb[1] / 255,
        rgb[2] / 255,
        rgb[3]
    ];
};

},{"../../Color.js":"iEdmQ","../../chroma.js":"2Aasu","../input.js":"6uG1f","../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8TFfV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hex", ()=>hex);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _indexJs = require("../../utils/index.js");
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _hex2RgbJs = require("./hex2rgb.js");
var _hex2RgbJsDefault = parcelHelpers.interopDefault(_hex2RgbJs);
var _rgb2HexJs = require("./rgb2hex.js");
var _rgb2HexJsDefault = parcelHelpers.interopDefault(_rgb2HexJs);
(0, _colorJsDefault.default).prototype.hex = function(mode) {
    return (0, _rgb2HexJsDefault.default)(this._rgb, mode);
};
const hex = (...args)=>new (0, _colorJsDefault.default)(...args, 'hex');
(0, _chromaJsDefault.default).hex = hex;
(0, _inputJsDefault.default).format.hex = (0, _hex2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 4,
    test: (h, ...rest)=>{
        if (!rest.length && (0, _indexJs.type)(h) === 'string' && [
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ].indexOf(h.length) >= 0) return 'hex';
    }
});

},{"../../Color.js":"iEdmQ","../../chroma.js":"2Aasu","../../utils/index.js":"56eUN","../input.js":"6uG1f","./hex2rgb.js":"dcRRX","./rgb2hex.js":"3njBP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cgnpL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "temp", ()=>temp);
parcelHelpers.export(exports, "kelvin", ()=>temp);
parcelHelpers.export(exports, "temperature", ()=>temp);
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _temperature2RgbJs = require("./temperature2rgb.js");
var _temperature2RgbJsDefault = parcelHelpers.interopDefault(_temperature2RgbJs);
var _rgb2TemperatureJs = require("./rgb2temperature.js");
var _rgb2TemperatureJsDefault = parcelHelpers.interopDefault(_rgb2TemperatureJs);
(0, _colorJsDefault.default).prototype.temp = (0, _colorJsDefault.default).prototype.kelvin = (0, _colorJsDefault.default).prototype.temperature = function() {
    return (0, _rgb2TemperatureJsDefault.default)(this._rgb);
};
const temp = (...args)=>new (0, _colorJsDefault.default)(...args, 'temp');
Object.assign((0, _chromaJsDefault.default), {
    temp,
    kelvin: temp,
    temperature: temp
});
(0, _inputJsDefault.default).format.temp = (0, _inputJsDefault.default).format.kelvin = (0, _inputJsDefault.default).format.temperature = (0, _temperature2RgbJsDefault.default);

},{"../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","./temperature2rgb.js":"lz2SR","./rgb2temperature.js":"2DgQF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lz2SR":[function(require,module,exports,__globalThis) {
/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const { log } = Math;
const temperature2rgb = (kelvin)=>{
    const temp = kelvin / 100;
    let r, g, b;
    if (temp < 66) {
        r = 255;
        g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
        b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
    } else {
        r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
        g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
        b = 255;
    }
    return [
        r,
        g,
        b,
        1
    ];
};
exports.default = temperature2rgb;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2DgQF":[function(require,module,exports,__globalThis) {
/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature
 **/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _temperature2RgbJs = require("./temperature2rgb.js");
var _temperature2RgbJsDefault = parcelHelpers.interopDefault(_temperature2RgbJs);
var _indexJs = require("../../utils/index.js");
const { round } = Math;
const rgb2temperature = (...args)=>{
    const rgb = (0, _indexJs.unpack)(args, 'rgb');
    const r = rgb[0], b = rgb[2];
    let minTemp = 1000;
    let maxTemp = 40000;
    const eps = 0.4;
    let temp;
    while(maxTemp - minTemp > eps){
        temp = (maxTemp + minTemp) * 0.5;
        const rgb = (0, _temperature2RgbJsDefault.default)(temp);
        if (rgb[2] / rgb[0] >= b / r) maxTemp = temp;
        else minTemp = temp;
    }
    return round(temp);
};
exports.default = rgb2temperature;

},{"./temperature2rgb.js":"lz2SR","../../utils/index.js":"56eUN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6qN8H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "oklch", ()=>oklch);
var _indexJs = require("../../utils/index.js");
var _chromaJs = require("../../chroma.js");
var _chromaJsDefault = parcelHelpers.interopDefault(_chromaJs);
var _colorJs = require("../../Color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _inputJs = require("../input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _oklch2RgbJs = require("./oklch2rgb.js");
var _oklch2RgbJsDefault = parcelHelpers.interopDefault(_oklch2RgbJs);
var _rgb2OklchJs = require("./rgb2oklch.js");
var _rgb2OklchJsDefault = parcelHelpers.interopDefault(_rgb2OklchJs);
(0, _colorJsDefault.default).prototype.oklch = function() {
    return (0, _rgb2OklchJsDefault.default)(this._rgb);
};
const oklch = (...args)=>new (0, _colorJsDefault.default)(...args, 'oklch');
Object.assign((0, _chromaJsDefault.default), {
    oklch
});
(0, _inputJsDefault.default).format.oklch = (0, _oklch2RgbJsDefault.default);
(0, _inputJsDefault.default).autodetect.push({
    p: 2,
    test: (...args)=>{
        args = (0, _indexJs.unpack)(args, 'oklch');
        if ((0, _indexJs.type)(args) === 'array' && args.length === 3) return 'oklch';
    }
});

},{"../../utils/index.js":"56eUN","../../chroma.js":"2Aasu","../../Color.js":"iEdmQ","../input.js":"6uG1f","./oklch2rgb.js":"hqhpU","./rgb2oklch.js":"8SOKf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["n0fw4","kTBnD"], "kTBnD", "parcelRequirea7aa", {})

//# sourceMappingURL=Chroma.3c14d121.js.map
