// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8ojwV":[function(require,module,exports,__globalThis) {
var _asyncToGenerator = require("@swc/helpers/_/_async_to_generator");
var _toConsumableArray = require("@swc/helpers/_/_to_consumable_array");
var _tsGenerator = require("@swc/helpers/_/_ts_generator");
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "ddb6ac7c9a3a9178";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "26cad52b13aeb1d6";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
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
    // $FlowFixMe
    ws.onmessage = /*#__PURE__*/ function() {
        var _ref = (0, _asyncToGenerator._)(function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */ , assets, handled, processedAssets, i, id, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ansiDiagnostic, stack, overlay;
            return (0, _tsGenerator._)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        checkedAssets = {} /*: {|[string]: boolean|} */ ;
                        disposedAssets = {} /*: {|[string]: boolean|} */ ;
                        assetsToAccept = [];
                        assetsToDispose = [];
                        data = JSON.parse(event.data);
                        if (!(data.type === 'reload')) return [
                            3,
                            1
                        ];
                        fullReload();
                        return [
                            3,
                            4
                        ];
                    case 1:
                        if (!(data.type === 'update')) return [
                            3,
                            4
                        ];
                        // Remove error overlay if there is one
                        if (typeof document !== 'undefined') removeErrorOverlay();
                        assets = data.assets.filter(function(asset) {
                            return asset.envHash === HMR_ENV_HASH;
                        });
                        // Handle HMR Update
                        handled = assets.every(function(asset) {
                            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                        });
                        if (!handled) return [
                            3,
                            3
                        ];
                        console.clear();
                        // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                        if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                        return [
                            4,
                            hmrApplyUpdates(assets)
                        ];
                    case 2:
                        _state.sent();
                        hmrDisposeQueue();
                        // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                        processedAssets = {};
                        for(i = 0; i < assetsToAccept.length; i++){
                            id = assetsToAccept[i][1];
                            if (!processedAssets[id]) {
                                hmrAccept(assetsToAccept[i][0], id);
                                processedAssets[id] = true;
                            }
                        }
                        return [
                            3,
                            4
                        ];
                    case 3:
                        fullReload();
                        _state.label = 4;
                    case 4:
                        if (data.type === 'error') {
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                // Log parcel errors to console
                                for(_iterator = data.diagnostics.ansi[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    ansiDiagnostic = _step.value;
                                    stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                                    console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            if (typeof document !== 'undefined') {
                                // Render the fancy html overlay
                                removeErrorOverlay();
                                overlay = createErrorOverlay(data.diagnostics.html);
                                // $FlowFixMe
                                document.body.appendChild(overlay);
                            }
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return function(event) {
            return _ref.apply(this, arguments);
        };
    }();
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
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
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = diagnostics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var diagnostic = _step.value;
            var stack = diagnostic.frames.length ? diagnostic.frames.reduce(function(p, frame) {
                return "".concat(p, '\n<a href="/__parcel_launch_editor?file=').concat(encodeURIComponent(frame.location), '" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">').concat(frame.location, "</a>\n").concat(frame.code);
            }, '') : diagnostic.stack;
            errorHTML += '\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          \uD83D\uDEA8 '.concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return "<div>\uD83D\uDCA1 " + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? '<div>\uD83D\uDCDD <a style="color: violet" href="'.concat(diagnostic.documentation, '" target="_blank">Learn more</a></div>') : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    if (cssTimeout) return;
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
            var script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise(function(resolve, reject) {
                var _document$head;
                script.onload = function() {
                    return resolve(script);
                };
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise(function(resolve, reject) {
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
function hmrApplyUpdates(assets) {
    return _hmrApplyUpdates.apply(this, arguments);
}
function _hmrApplyUpdates() {
    _hmrApplyUpdates = (0, _asyncToGenerator._)(function(assets) {
        var scriptsToRemove, promises;
        return (0, _tsGenerator._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    global.parcelHotUpdate = Object.create(null);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        ,
                        4,
                        5
                    ]);
                    if (!!supportsSourceURL) return [
                        3,
                        3
                    ];
                    promises = assets.map(function(asset) {
                        var _hmrDownload;
                        return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch(function(err) {
                            // Web extension fix
                            if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                                extCtx.runtime.reload();
                                return;
                            }
                            throw err;
                        });
                    });
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 2:
                    scriptsToRemove = _state.sent();
                    _state.label = 3;
                case 3:
                    assets.forEach(function(asset) {
                        hmrApply(module.bundle.root, asset);
                    });
                    return [
                        3,
                        5
                    ];
                case 4:
                    delete global.parcelHotUpdate;
                    if (scriptsToRemove) scriptsToRemove.forEach(function(script) {
                        if (script) {
                            var _document$head2;
                            (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
                        }
                    });
                    return [
                        7
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return _hmrApplyUpdates.apply(this, arguments);
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            var fn = global.parcelHotUpdate[asset.id];
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
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            var _parents;
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            (_parents = parents).push.apply(_parents, (0, _toConsumableArray._)(p));
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
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(var i = 0; i < assetsToDispose.length; i++){
        var id = assetsToDispose[i][1];
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
        var assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            var _assetsToAlsoAccept;
            var additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) (_assetsToAlsoAccept = assetsToAlsoAccept).push.apply(_assetsToAlsoAccept, (0, _toConsumableArray._)(additionalAssets));
        });
        if (assetsToAlsoAccept.length) {
            var handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{"@swc/helpers/_/_async_to_generator":"cKNxR","@swc/helpers/_/_to_consumable_array":"4hSnh","@swc/helpers/_/_ts_generator":"amoyQ"}],"cKNxR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _async_to_generator;
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"hyCVi":[function(require,module,exports,__globalThis) {
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
            get: function get() {
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

},{}],"4hSnh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _to_consumable_array;
});
var _arrayWithoutHolesJs = require("./_array_without_holes.js");
var _iterableToArrayJs = require("./_iterable_to_array.js");
var _nonIterableSpreadJs = require("./_non_iterable_spread.js");
var _unsupportedIterableToArrayJs = require("./_unsupported_iterable_to_array.js");
function _to_consumable_array(arr) {
    return (0, _arrayWithoutHolesJs._)(arr) || (0, _iterableToArrayJs._)(arr) || (0, _unsupportedIterableToArrayJs._)(arr) || (0, _nonIterableSpreadJs._)();
}

},{"./_array_without_holes.js":"1C3Al","./_iterable_to_array.js":"kOxUi","./_non_iterable_spread.js":"fpqcW","./_unsupported_iterable_to_array.js":"3cHFn","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"1C3Al":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _array_without_holes;
});
var _arrayLikeToArrayJs = require("./_array_like_to_array.js");
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return (0, _arrayLikeToArrayJs._)(arr);
}

},{"./_array_like_to_array.js":"do0Di","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"do0Di":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _array_like_to_array;
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"kOxUi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _iterable_to_array;
});
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"fpqcW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _non_iterable_spread;
});
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"3cHFn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _unsupported_iterable_to_array;
});
var _arrayLikeToArrayJs = require("./_array_like_to_array.js");
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, _arrayLikeToArrayJs._)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, _arrayLikeToArrayJs._)(o, minLen);
}

},{"./_array_like_to_array.js":"do0Di","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"amoyQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return 0, _tslib.__generator;
});
var _tslib = require("tslib");

},{"tslib":"7nZGt","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"7nZGt":[function(require,module,exports,__globalThis) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", function() {
    return __extends;
});
parcelHelpers.export(exports, "__assign", function() {
    return __assign;
});
parcelHelpers.export(exports, "__rest", function() {
    return __rest;
});
parcelHelpers.export(exports, "__decorate", function() {
    return __decorate;
});
parcelHelpers.export(exports, "__param", function() {
    return __param;
});
parcelHelpers.export(exports, "__esDecorate", function() {
    return __esDecorate;
});
parcelHelpers.export(exports, "__runInitializers", function() {
    return __runInitializers;
});
parcelHelpers.export(exports, "__propKey", function() {
    return __propKey;
});
parcelHelpers.export(exports, "__setFunctionName", function() {
    return __setFunctionName;
});
parcelHelpers.export(exports, "__metadata", function() {
    return __metadata;
});
parcelHelpers.export(exports, "__awaiter", function() {
    return __awaiter;
});
parcelHelpers.export(exports, "__generator", function() {
    return __generator;
});
parcelHelpers.export(exports, "__createBinding", function() {
    return __createBinding;
});
parcelHelpers.export(exports, "__exportStar", function() {
    return __exportStar;
});
parcelHelpers.export(exports, "__values", function() {
    return __values;
});
parcelHelpers.export(exports, "__read", function() {
    return __read;
});
/** @deprecated */ parcelHelpers.export(exports, "__spread", function() {
    return __spread;
});
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", function() {
    return __spreadArrays;
});
parcelHelpers.export(exports, "__spreadArray", function() {
    return __spreadArray;
});
parcelHelpers.export(exports, "__await", function() {
    return __await;
});
parcelHelpers.export(exports, "__asyncGenerator", function() {
    return __asyncGenerator;
});
parcelHelpers.export(exports, "__asyncDelegator", function() {
    return __asyncDelegator;
});
parcelHelpers.export(exports, "__asyncValues", function() {
    return __asyncValues;
});
parcelHelpers.export(exports, "__makeTemplateObject", function() {
    return __makeTemplateObject;
});
parcelHelpers.export(exports, "__importStar", function() {
    return __importStar;
});
parcelHelpers.export(exports, "__importDefault", function() {
    return __importDefault;
});
parcelHelpers.export(exports, "__classPrivateFieldGet", function() {
    return __classPrivateFieldGet;
});
parcelHelpers.export(exports, "__classPrivateFieldSet", function() {
    return __classPrivateFieldSet;
});
parcelHelpers.export(exports, "__classPrivateFieldIn", function() {
    return __classPrivateFieldIn;
});
parcelHelpers.export(exports, "__addDisposableResource", function() {
    return __addDisposableResource;
});
parcelHelpers.export(exports, "__disposeResources", function() {
    return __disposeResources;
});
parcelHelpers.export(exports, "__rewriteRelativeImportExtension", function() {
    return __rewriteRelativeImportExtension;
});
var _typeOf = require("@swc/helpers/_/_type_of");
var extendStatics = function extendStatics1(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function __assign1() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeOf._)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || (typeof result === "undefined" ? "undefined" : (0, _typeOf._)(result)) !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return (typeof x === "undefined" ? "undefined" : (0, _typeOf._)(x)) === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if ((typeof name === "undefined" ? "undefined" : (0, _typeOf._)(name)) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeOf._)(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function get() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function __setModuleDefault(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function ownKeys1(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver === "undefined" ? "undefined" : (0, _typeOf._)(receiver)) !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if ((typeof value === "undefined" ? "undefined" : (0, _typeOf._)(value)) !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function dispose() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function _SuppressedError(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __esDecorate: __esDecorate,
    __runInitializers: __runInitializers,
    __propKey: __propKey,
    __setFunctionName: __setFunctionName,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
    __rewriteRelativeImportExtension: __rewriteRelativeImportExtension
};

},{"@swc/helpers/_/_type_of":"7dHw6","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"7dHw6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _type_of;
});
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"da3sq":[function(require,module,exports,__globalThis) {
var _asyncToGenerator = require("@swc/helpers/_/_async_to_generator");
var _toConsumableArray = require("@swc/helpers/_/_to_consumable_array");
var _tsGenerator = require("@swc/helpers/_/_ts_generator");
var _localstorageSession = require("./js/localstorageSession");
//demineur-game-settings-form
var settingsSetup = function(main) {
    var frame = main.querySelector('#demineur-game-settings-form');
    var inputs = (0, _toConsumableArray._)(frame.querySelectorAll('select'));
    var start = frame.querySelector('#start-game');
    start.onclick = function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        var settings = {};
        inputs.map(function(i) {
            var name = i.name;
            settings[name] = i.value;
        });
        var session = new (0, _localstorageSession.SessionManager)();
        session.setProperty('settings', JSON.stringify(settings));
    };
};
var initDemineurGame = /*#__PURE__*/ function() {
    var _ref = (0, _asyncToGenerator._)(function($el) {
        var container, req, getSettings;
        return (0, _tsGenerator._)(this, function(_state) {
            switch(_state.label){
                case 0:
                    container = document.querySelector($el);
                    req = new Request('/demineur');
                    getSettings = /*#__PURE__*/ function() {
                        var _ref = (0, _asyncToGenerator._)(function() {
                            return (0, _tsGenerator._)(this, function(_state) {
                                return [
                                    2,
                                    fetch(req).then(function(response) {
                                        return response.text();
                                    }).then(function(data) {
                                        return "".concat(data);
                                    }).catch(function(error) {
                                        console.log("Error: ", error);
                                        return "Une erreur est survenue.";
                                    })
                                ];
                            });
                        });
                        return function getSettings() {
                            return _ref.apply(this, arguments);
                        };
                    }();
                    return [
                        4,
                        getSettings()
                    ];
                case 1:
                    container.innerHTML = _state.sent();
                    settingsSetup(container);
                    return [
                        2
                    ];
            }
        });
    });
    return function initDemineurGame($el) {
        return _ref.apply(this, arguments);
    };
}();
initDemineurGame('#demineur');

},{"@swc/helpers/_/_async_to_generator":"cKNxR","@swc/helpers/_/_to_consumable_array":"4hSnh","@swc/helpers/_/_ts_generator":"amoyQ","./js/localstorageSession":"53VUX"}],"53VUX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SessionManager", function() {
    return SessionManager;
});
var _classCallCheck = require("@swc/helpers/_/_class_call_check");
var _classPrivateFieldGet = require("@swc/helpers/_/_class_private_field_get");
var _classPrivateFieldInit = require("@swc/helpers/_/_class_private_field_init");
var _classPrivateFieldSet = require("@swc/helpers/_/_class_private_field_set");
var _createClass = require("@swc/helpers/_/_create_class");
var _defineProperty = require("@swc/helpers/_/_define_property");
var _uuid = require("uuid");
var _session = /*#__PURE__*/ new WeakMap();
var SessionManager = /*#__PURE__*/ function() {
    "use strict";
    function SessionManager() {
        (0, _classCallCheck._)(this, SessionManager);
        (0, _classPrivateFieldInit._)(this, _session, {
            writable: true,
            value: void 0
        });
        (0, _defineProperty._)(this, "propList", {});
        // Génère une clé unique aléatoire
        if (localStorage.getItem('demineur-session-id')) (0, _classPrivateFieldSet._)(this, _session, this.getSession());
        else this.setSession();
    }
    (0, _createClass._)(SessionManager, [
        {
            key: "setSession",
            value: function setSession() {
                (0, _classPrivateFieldSet._)(this, _session, (0, _uuid.v4)());
                localStorage.setItem('demineur-session-id', "".concat((0, _classPrivateFieldGet._)(this, _session)));
            }
        },
        {
            key: "getSession",
            value: function getSession() {
                return localStorage.getItem('demineur-session-id');
            }
        },
        {
            key: "setProperty",
            value: function setProperty(key, value) {
                this.propList[key] = value;
                localStorage.setItem("demineur-".concat(key), "".concat(value));
            }
        },
        {
            key: "getProperty",
            value: function getProperty(key) {
                var store = localStorage.getItem("demineur-".concat(key));
                if (!store) return null;
                return store;
            }
        },
        {
            key: "getProps",
            value: function getProps() {
                var props = {};
                for(var key in this.propList)props[key] = localStorage.getItem("demineur-".concat(key));
                return props;
            }
        }
    ]);
    return SessionManager;
}();

},{"@swc/helpers/_/_class_call_check":"cUvdT","@swc/helpers/_/_class_private_field_get":"ja8Qf","@swc/helpers/_/_class_private_field_init":"lhdBf","@swc/helpers/_/_class_private_field_set":"mHFll","@swc/helpers/_/_create_class":"aFUX5","@swc/helpers/_/_define_property":"2kM9N","uuid":"baC7R","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"cUvdT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _class_call_check;
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"ja8Qf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _class_private_field_get;
});
var _classApplyDescriptorGetJs = require("./_class_apply_descriptor_get.js");
var _classExtractFieldDescriptorJs = require("./_class_extract_field_descriptor.js");
function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0, _classExtractFieldDescriptorJs._)(receiver, privateMap, "get");
    return (0, _classApplyDescriptorGetJs._)(receiver, descriptor);
}

},{"./_class_apply_descriptor_get.js":"gsfNy","./_class_extract_field_descriptor.js":"6LJ7F","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"gsfNy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _class_apply_descriptor_get;
});
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"6LJ7F":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _class_extract_field_descriptor;
});
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"lhdBf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _class_private_field_init;
});
var _checkPrivateRedeclarationJs = require("./_check_private_redeclaration.js");
function _class_private_field_init(obj, privateMap, value) {
    (0, _checkPrivateRedeclarationJs._)(obj, privateMap);
    privateMap.set(obj, value);
}

},{"./_check_private_redeclaration.js":"aAbKJ","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"aAbKJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _check_private_redeclaration;
});
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"mHFll":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _class_private_field_set;
});
var _classApplyDescriptorSetJs = require("./_class_apply_descriptor_set.js");
var _classExtractFieldDescriptorJs = require("./_class_extract_field_descriptor.js");
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0, _classExtractFieldDescriptorJs._)(receiver, privateMap, "set");
    (0, _classApplyDescriptorSetJs._)(receiver, descriptor, value);
    return value;
}

},{"./_class_apply_descriptor_set.js":"41Jaw","./_class_extract_field_descriptor.js":"6LJ7F","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"41Jaw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _class_apply_descriptor_set;
});
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"aFUX5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _create_class;
});
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"2kM9N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _define_property;
});
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"baC7R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAX", function() {
    return 0, _maxJsDefault.default;
});
parcelHelpers.export(exports, "NIL", function() {
    return 0, _nilJsDefault.default;
});
parcelHelpers.export(exports, "parse", function() {
    return 0, _parseJsDefault.default;
});
parcelHelpers.export(exports, "stringify", function() {
    return 0, _stringifyJsDefault.default;
});
parcelHelpers.export(exports, "v1", function() {
    return 0, _v1JsDefault.default;
});
parcelHelpers.export(exports, "v1ToV6", function() {
    return 0, _v1ToV6JsDefault.default;
});
parcelHelpers.export(exports, "v3", function() {
    return 0, _v3JsDefault.default;
});
parcelHelpers.export(exports, "v4", function() {
    return 0, _v4JsDefault.default;
});
parcelHelpers.export(exports, "v5", function() {
    return 0, _v5JsDefault.default;
});
parcelHelpers.export(exports, "v6", function() {
    return 0, _v6JsDefault.default;
});
parcelHelpers.export(exports, "v6ToV1", function() {
    return 0, _v6ToV1JsDefault.default;
});
parcelHelpers.export(exports, "v7", function() {
    return 0, _v7JsDefault.default;
});
parcelHelpers.export(exports, "validate", function() {
    return 0, _validateJsDefault.default;
});
parcelHelpers.export(exports, "version", function() {
    return 0, _versionJsDefault.default;
});
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v1ToV6Js = require("./v1ToV6.js");
var _v1ToV6JsDefault = parcelHelpers.interopDefault(_v1ToV6Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _v6Js = require("./v6.js");
var _v6JsDefault = parcelHelpers.interopDefault(_v6Js);
var _v6ToV1Js = require("./v6ToV1.js");
var _v6ToV1JsDefault = parcelHelpers.interopDefault(_v6ToV1Js);
var _v7Js = require("./v7.js");
var _v7JsDefault = parcelHelpers.interopDefault(_v7Js);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);

},{"./max.js":false,"./nil.js":false,"./parse.js":false,"./stringify.js":false,"./v1.js":false,"./v1ToV6.js":false,"./v3.js":false,"./v4.js":"jh0G9","./v5.js":false,"./v6.js":false,"./v6ToV1.js":false,"./v7.js":false,"./validate.js":false,"./version.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"4Pf2K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", function() {
    return unsafeStringify;
});
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = unsafeStringify(arr, offset);
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"kSfdG","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"kSfdG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === 'string' && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"fsSQv","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"fsSQv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"jh0G9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    var _options_rng;
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    var _options_random, _ref;
    var rnds = (_ref = (_options_random = options.random) !== null && _options_random !== void 0 ? _options_random : (_options_rng = options.rng) === null || _options_rng === void 0 ? void 0 : _options_rng.call(options)) !== null && _ref !== void 0 ? _ref : (0, _rngJsDefault.default)();
    if (rnds.length < 16) throw new Error('Random bytes length must be >= 16');
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) throw new RangeError("UUID byte range ".concat(offset, ":").concat(offset + 15, " is out of buffer bounds"));
        for(var i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"7iqAS","./rng.js":"hYt8E","./stringify.js":"4Pf2K","@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"7iqAS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID: randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}],"hYt8E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", function() {
    return rng;
});
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hyCVi"}]},["8ojwV","da3sq"], "da3sq", "parcelRequire94c2")

//# sourceMappingURL=app.js.map
