var titleText = " " + document.title + " ";

function titleMarquee() {
    titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
    document.title = titleText;
    setTimeout(titleMarquee, 500);
}

window.onload = titleMarquee;


!function() {
    /**
     * @param {number} type
     * @return {?}
     */
    function t(type) {
      var module = modules[type];
      if (void 0 !== module) {
        return module.exports;
      }
      var val = modules[type] = {
        exports : {}
      };
      return data[type](val, val.exports, t), val.exports;
    }
    var data = {
      /**
       * @param {Object} module
       * @param {?} dataAndEvents
       * @param {?} getCallback
       * @return {undefined}
       */
      888 : function(module, dataAndEvents, getCallback) {
        /**
         * @return {undefined}
         */
        function lvl() {
        }
        /**
         * @return {undefined}
         */
        function o() {
        }
        var callback = getCallback(47);
        /** @type {function (): undefined} */
        o.resetWarningCache = lvl;
        /**
         * @return {?}
         */
        module.exports = function() {
          /**
           * @param {string} val
           * @param {?} obj
           * @param {?} x
           * @param {?} path
           * @param {?} chunk
           * @param {?} cb
           * @return {undefined}
           */
          function type(val, obj, x, path, chunk, cb) {
            if (cb !== callback) {
              /** @type {Error} */
              var backtrace = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              throw backtrace.name = "Invariant Violation", backtrace;
            }
          }
          /**
           * @return {?}
           */
          function cube() {
            return type;
          }
          /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
          type.isRequired = type;
          var left = {
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            array : type,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            bigint : type,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            bool : type,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            func : type,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            number : type,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            object : type,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            string : type,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            symbol : type,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            any : type,
            /** @type {function (): ?} */
            arrayOf : cube,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            element : type,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            elementType : type,
            /** @type {function (): ?} */
            instanceOf : cube,
            /** @type {function (string, ?, ?, ?, ?, ?): undefined} */
            node : type,
            /** @type {function (): ?} */
            objectOf : cube,
            /** @type {function (): ?} */
            oneOf : cube,
            /** @type {function (): ?} */
            oneOfType : cube,
            /** @type {function (): ?} */
            shape : cube,
            /** @type {function (): ?} */
            exact : cube,
            /** @type {function (): undefined} */
            checkPropTypes : o,
            /** @type {function (): undefined} */
            resetWarningCache : lvl
          };
          return left.PropTypes = left, left;
        };
      },
      /**
       * @param {Object} module
       * @param {?} dataAndEvents
       * @param {?} $sanitize
       * @return {undefined}
       */
      7 : function(module, dataAndEvents, $sanitize) {
        module.exports = $sanitize(888)();
      },
      /**
       * @param {Object} module
       * @return {undefined}
       */
      47 : function(module) {
        /** @type {string} */
        module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      /**
       * @param {?} dataAndEvents
       * @param {Object} o
       * @param {?} r
       * @return {undefined}
       */
      463 : function(dataAndEvents, o, r) {
        /**
         * @param {number} opt_attributes
         * @return {?}
         */
        function callback(opt_attributes) {
          /** @type {string} */
          var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + opt_attributes;
          /** @type {number} */
          var i = 1;
          for (;i < arguments.length;i++) {
            n += "&args[]=" + encodeURIComponent(arguments[i]);
          }
          return "Minified React error #" + opt_attributes + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        /**
         * @param {string} name
         * @param {Array} timestep
         * @return {undefined}
         */
        function it(name, timestep) {
          print(name, timestep);
          print(name + "Capture", timestep);
        }
        /**
         * @param {?} s
         * @param {?} n
         * @return {undefined}
         */
        function print(s, n) {
          a[s] = n;
          /** @type {number} */
          s = 0;
          for (;s < n.length;s++) {
            t.add(n[s]);
          }
        }
        /**
         * @param {string} src
         * @param {number} eventType
         * @param {?} client
         * @param {(Array|number)} attributeName
         * @param {boolean} details
         * @param {?} contentsOnly
         * @param {?} path
         * @return {undefined}
         */
        function Image(src, eventType, client, attributeName, details, contentsOnly, path) {
          /** @type {boolean} */
          this.acceptsBooleans = 2 === eventType || (3 === eventType || 4 === eventType);
          /** @type {(Array|number)} */
          this.attributeName = attributeName;
          /** @type {boolean} */
          this.attributeNamespace = details;
          this.mustUseProperty = client;
          /** @type {string} */
          this.propertyName = src;
          /** @type {number} */
          this.type = eventType;
          this.sanitizeURL = contentsOnly;
          this.removeEmptyString = path;
        }
        /**
         * @param {number} m
         * @return {?}
         */
        function boundary(m) {
          return m[1].toUpperCase();
        }
        /**
         * @param {Object} node
         * @param {string} key
         * @param {(Object|string)} value
         * @param {boolean} t
         * @return {undefined}
         */
        function test(node, key, value, t) {
          var event = $cookies.hasOwnProperty(key) ? $cookies[key] : null;
          if (null !== event ? 0 !== event.type : t || (!(2 < key.length) || ("o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1]))) {
            if (function(node, end, startEvent, deepDataAndEvents) {
              if (null === end || ("undefined" === typeof end || function(dataAndEvents, value, e, deepDataAndEvents) {
                if (null !== e && 0 === e.type) {
                  return false;
                }
                switch(typeof value) {
                  case "function":
                  ;
                  case "symbol":
                    return true;
                  case "boolean":
                    return!deepDataAndEvents && (null !== e ? !e.acceptsBooleans : "data-" !== (dataAndEvents = dataAndEvents.toLowerCase().slice(0, 5)) && "aria-" !== dataAndEvents);
                  default:
                    return false;
                }
              }(node, end, startEvent, deepDataAndEvents))) {
                return true;
              }
              if (deepDataAndEvents) {
                return false;
              }
              if (null !== startEvent) {
                switch(startEvent.type) {
                  case 3:
                    return!end;
                  case 4:
                    return false === end;
                  case 5:
                    return isNaN(end);
                  case 6:
                    return isNaN(end) || 1 > end;
                }
              }
              return false;
            }(key, value, event, t)) {
              /** @type {null} */
              value = null;
            }
            if (t || null === event) {
              if (function(name) {
                return!!__hasProp.call(matchers, name) || !__hasProp.call(pairs, name) && (rparentsprev.test(name) ? matchers[name] = true : (pairs[name] = true, false));
              }(key)) {
                if (null === value) {
                  node.removeAttribute(key);
                } else {
                  node.setAttribute(key, "" + value);
                }
              }
            } else {
              if (event.mustUseProperty) {
                node[event.propertyName] = null === value ? 3 !== event.type && "" : value;
              } else {
                key = event.attributeName;
                t = event.attributeNamespace;
                if (null === value) {
                  node.removeAttribute(key);
                } else {
                  /** @type {string} */
                  value = 3 === (event = event.type) || 4 === event && true === value ? "" : "" + value;
                  if (t) {
                    node.setAttributeNS(t, key, value);
                  } else {
                    node.setAttribute(key, value);
                  }
                }
              }
            }
          }
        }
        /**
         * @param {Object} obj
         * @return {?}
         */
        function keys(obj) {
          return null === obj || "object" !== typeof obj ? null : "function" === typeof(obj = special && obj[special] || obj["@@iterator"]) ? obj : null;
        }
        /**
         * @param {string} obj
         * @return {?}
         */
        function type(obj) {
          if (void 0 === str) {
            try {
              throw Error();
            } catch (error) {
              var matches = error.stack.trim().match(/\n( *(at )?)/);
              str = matches && matches[1] || "";
            }
          }
          return "\n" + str + obj;
        }
        /**
         * @param {boolean} func
         * @param {(Function|string)} data
         * @return {?}
         */
        function setup(func, data) {
          if (!func || U) {
            return "";
          }
          /** @type {boolean} */
          U = true;
          var v8 = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (data) {
              if (data = function() {
                throw Error();
              }, Object.defineProperty(data.prototype, "props", {
                /**
                 * @return {?}
                 */
                set : function() {
                  throw Error();
                }
              }), "object" === typeof Reflect && Reflect.construct) {
                try {
                  Reflect.construct(data, []);
                } catch (err_msg) {
                  var msg = err_msg;
                }
                Reflect.construct(func, [], data);
              } else {
                try {
                  data.call();
                } catch (arg1) {
                  msg = arg1;
                }
                func.call(data.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (n) {
                msg = n;
              }
              func();
            }
          } catch (ex) {
            if (ex && (msg && "string" === typeof ex.stack)) {
              /** @type {Array.<string>} */
              var attrList = ex.stack.split("\n");
              var y = msg.stack.split("\n");
              /** @type {number} */
              var i = attrList.length - 1;
              /** @type {number} */
              var j = y.length - 1;
              for (;1 <= i && (0 <= j && attrList[i] !== y[j]);) {
                j--;
              }
              for (;1 <= i && 0 <= j;i--, j--) {
                if (attrList[i] !== y[j]) {
                  if (1 !== i || 1 !== j) {
                    do {
                      if (i--, 0 > --j || attrList[i] !== y[j]) {
                        /** @type {string} */
                        var def = "\n" + attrList[i].replace(" at new ", " at ");
                        return func.displayName && (def.includes("<anonymous>") && (def = def.replace("<anonymous>", func.displayName))), def;
                      }
                    } while (1 <= i && 0 <= j);
                  }
                  break;
                }
              }
            }
          } finally {
            /** @type {boolean} */
            U = false;
            Error.prepareStackTrace = v8;
          }
          return(func = func ? func.displayName || func.name : "") ? type(func) : "";
        }
        /**
         * @param {?} options
         * @return {?}
         */
        function dump(options) {
          switch(options.tag) {
            case 5:
              return type(options.type);
            case 16:
              return type("Lazy");
            case 13:
              return type("Suspense");
            case 19:
              return type("SuspenseList");
            case 0:
            ;
            case 2:
            ;
            case 15:
              return options = setup(options.type, false);
            case 11:
              return options = setup(options.type.render, false);
            case 1:
              return options = setup(options.type, true);
            default:
              return "";
          }
        }
        /**
         * @param {Object} self
         * @return {?}
         */
        function animate(self) {
          if (null == self) {
            return null;
          }
          if ("function" === typeof self) {
            return self.displayName || (self.name || null);
          }
          if ("string" === typeof self) {
            return self;
          }
          switch(self) {
            case string:
              return "Fragment";
            case LOCATION_CHANGED_EVENT:
              return "Portal";
            case elementType:
              return "Profiler";
            case left:
              return "StrictMode";
            case right:
              return "Suspense";
            case center:
              return "SuspenseList";
          }
          if ("object" === typeof self) {
            switch(self.$$typeof) {
              case numericpassword:
                return(self.displayName || "Context") + ".Consumer";
              case Point:
                return(self._context.displayName || "Context") + ".Provider";
              case checkbox:
                var item = self.render;
                return(self = self.displayName) || (self = "" !== (self = item.displayName || (item.name || "")) ? "ForwardRef(" + self + ")" : "ForwardRef"), self;
              case radio:
                return null !== (item = self.displayName || null) ? item : animate(self.type) || "Memo";
              case OPEN_EXTERNAL_EVENT:
                item = self._payload;
                self = self._init;
                try {
                  return animate(self(item));
                } catch (t) {
                }
              ;
            }
          }
          return null;
        }
        /**
         * @param {Object} e
         * @return {?}
         */
        function draw(e) {
          var self = e.type;
          switch(e.tag) {
            case 24:
              return "Cache";
            case 9:
              return(self.displayName || "Context") + ".Consumer";
            case 10:
              return(self._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return e = (e = self.render).displayName || (e.name || ""), self.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
              return "Fragment";
            case 5:
              return self;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return animate(self);
            case 8:
              return self === left ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            ;
            case 0:
            ;
            case 17:
            ;
            case 2:
            ;
            case 14:
            ;
            case 15:
              if ("function" === typeof self) {
                return self.displayName || (self.name || null);
              }
              if ("string" === typeof self) {
                return self;
              }
            ;
          }
          return null;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        function toString(value) {
          switch(typeof value) {
            case "boolean":
            ;
            case "number":
            ;
            case "string":
            ;
            case "undefined":
            ;
            case "object":
              return value;
            default:
              return "";
          }
        }
        /**
         * @param {Object} n
         * @return {?}
         */
        function browserTrigger(n) {
          var type = n.type;
          return(n = n.nodeName) && ("input" === n.toLowerCase() && ("checkbox" === type || "radio" === type));
        }
        /**
         * @param {Object} d
         * @return {undefined}
         */
        function create(d) {
          if (!d._valueTracker) {
            d._valueTracker = function(node) {
              /** @type {string} */
              var prop = browserTrigger(node) ? "checked" : "value";
              /** @type {(ObjectPropertyDescriptor|undefined)} */
              var desc = Object.getOwnPropertyDescriptor(node.constructor.prototype, prop);
              var ret = "" + node[prop];
              if (!node.hasOwnProperty(prop) && ("undefined" !== typeof desc && ("function" === typeof desc.get && "function" === typeof desc.set))) {
                var getter = desc.get;
                var callback = desc.set;
                return Object.defineProperty(node, prop, {
                  configurable : true,
                  /**
                   * @return {?}
                   */
                  get : function() {
                    return getter.call(this);
                  },
                  /**
                   * @param {?} event
                   * @return {undefined}
                   */
                  set : function(event) {
                    /** @type {string} */
                    ret = "" + event;
                    callback.call(this, event);
                  }
                }), Object.defineProperty(node, prop, {
                  enumerable : desc.enumerable
                }), {
                  /**
                   * @return {?}
                   */
                  getValue : function() {
                    return ret;
                  },
                  /**
                   * @param {string} event
                   * @return {undefined}
                   */
                  setValue : function(event) {
                    /** @type {string} */
                    ret = "" + event;
                  },
                  /**
                   * @return {undefined}
                   */
                  stopTracking : function() {
                    /** @type {null} */
                    node._valueTracker = null;
                    delete node[prop];
                  }
                };
              }
            }(d);
          }
        }
        /**
         * @param {Object} node
         * @return {?}
         */
        function click(node) {
          if (!node) {
            return false;
          }
          var parent = node._valueTracker;
          if (!parent) {
            return true;
          }
          var tail = parent.getValue();
          /** @type {string} */
          var fragment = "";
          return node && (fragment = browserTrigger(node) ? node.checked ? "true" : "false" : node.value), (node = fragment) !== tail && (parent.setValue(node), true);
        }
        /**
         * @param {Node} doc
         * @return {?}
         */
        function getSelection(doc) {
          if ("undefined" === typeof(doc = doc || ("undefined" !== typeof document ? document : void 0))) {
            return null;
          }
          try {
            return doc.activeElement || doc.body;
          } catch (n) {
            return doc.body;
          }
        }
        /**
         * @param {Object} ast
         * @param {Object} data
         * @return {?}
         */
        function eval(ast, data) {
          var value = data.checked;
          return trigger({}, data, {
            defaultChecked : void 0,
            defaultValue : void 0,
            value : void 0,
            checked : null != value ? value : ast._wrapperState.initialChecked
          });
        }
        /**
         * @param {Object} src
         * @param {Element} elem
         * @return {undefined}
         */
        function fixNode(src, elem) {
          var str = null == elem.defaultValue ? "" : elem.defaultValue;
          var initialChecked = null != elem.checked ? elem.checked : elem.defaultChecked;
          str = toString(null != elem.value ? elem.value : str);
          src._wrapperState = {
            initialChecked : initialChecked,
            initialValue : str,
            controlled : "checkbox" === elem.type || "radio" === elem.type ? null != elem.checked : null != elem.value
          };
        }
        /**
         * @param {Object} name
         * @param {string} element
         * @return {undefined}
         */
        function hasClass(name, element) {
          if (null != (element = element.checked)) {
            test(name, "checked", element, false);
          }
        }
        /**
         * @param {Object} elem
         * @param {Object} input
         * @return {?}
         */
        function append(elem, input) {
          hasClass(elem, input);
          var text = toString(input.value);
          var type = input.type;
          if (null != text) {
            if ("number" === type) {
              if (0 === text && "" === elem.value || elem.value != text) {
                /** @type {string} */
                elem.value = "" + text;
              }
            } else {
              if (elem.value !== "" + text) {
                /** @type {string} */
                elem.value = "" + text;
              }
            }
          } else {
            if ("submit" === type || "reset" === type) {
              return void elem.removeAttribute("value");
            }
          }
          if (input.hasOwnProperty("value")) {
            getType(elem, input.type, text);
          } else {
            if (input.hasOwnProperty("defaultValue")) {
              getType(elem, input.type, toString(input.defaultValue));
            }
          }
          if (null == input.checked) {
            if (null != input.defaultChecked) {
              /** @type {boolean} */
              elem.defaultChecked = !!input.defaultChecked;
            }
          }
        }
        /**
         * @param {Object} element
         * @param {string} value
         * @param {Object} id
         * @return {undefined}
         */
        function getValue(element, value, id) {
          if (value.hasOwnProperty("value") || value.hasOwnProperty("defaultValue")) {
            var type = value.type;
            if (!("submit" !== type && "reset" !== type || void 0 !== value.value && null !== value.value)) {
              return;
            }
            /** @type {string} */
            value = "" + element._wrapperState.initialValue;
            if (!id) {
              if (!(value === element.value)) {
                /** @type {string} */
                element.value = value;
              }
            }
            /** @type {string} */
            element.defaultValue = value;
          }
          if ("" !== (id = element.name)) {
            /** @type {string} */
            element.name = "";
          }
          /** @type {boolean} */
          element.defaultChecked = !!element._wrapperState.initialChecked;
          if ("" !== id) {
            /** @type {Object} */
            element.name = id;
          }
        }
        /**
         * @param {Object} elem
         * @param {string} kind
         * @param {string} value
         * @return {undefined}
         */
        function getType(elem, kind, value) {
          if (!("number" === kind && getSelection(elem.ownerDocument) === elem)) {
            if (null == value) {
              /** @type {string} */
              elem.defaultValue = "" + elem._wrapperState.initialValue;
            } else {
              if (elem.defaultValue !== "" + value) {
                /** @type {string} */
                elem.defaultValue = "" + value;
              }
            }
          }
        }
        /**
         * @param {Object} options
         * @param {Object} option
         * @param {?} index
         * @param {boolean} recurring
         * @return {?}
         */
        function remove(options, option, index, recurring) {
          if (options = options.options, option) {
            option = {};
            /** @type {number} */
            var i = 0;
            for (;i < index.length;i++) {
              /** @type {boolean} */
              option["$" + index[i]] = true;
            }
            /** @type {number} */
            index = 0;
            for (;index < options.length;index++) {
              /** @type {boolean} */
              i = option.hasOwnProperty("$" + options[index].value);
              if (options[index].selected !== i) {
                /** @type {boolean} */
                options[index].selected = i;
              }
              if (i) {
                if (recurring) {
                  /** @type {boolean} */
                  options[index].defaultSelected = true;
                }
              }
            }
          } else {
            /** @type {string} */
            index = "" + toString(index);
            /** @type {null} */
            option = null;
            /** @type {number} */
            i = 0;
            for (;i < options.length;i++) {
              if (options[i].value === index) {
                return options[i].selected = true, void(recurring && (options[i].defaultSelected = true));
              }
              if (!(null !== option)) {
                if (!options[i].disabled) {
                  option = options[i];
                }
              }
            }
            if (null !== option) {
              /** @type {boolean} */
              option.selected = true;
            }
          }
        }
        /**
         * @param {Object} var_args
         * @param {Object} data
         * @return {?}
         */
        function send(var_args, data) {
          if (null != data.dangerouslySetInnerHTML) {
            throw Error(callback(91));
          }
          return trigger({}, data, {
            value : void 0,
            defaultValue : void 0,
            children : "" + var_args._wrapperState.initialValue
          });
        }
        /**
         * @param {Object} arr
         * @param {Object} parent
         * @return {undefined}
         */
        function insert(arr, parent) {
          var node = parent.value;
          if (null == node) {
            if (node = parent.children, parent = parent.defaultValue, null != node) {
              if (null != parent) {
                throw Error(callback(92));
              }
              if (isArray(node)) {
                if (1 < node.length) {
                  throw Error(callback(93));
                }
                node = node[0];
              }
              parent = node;
            }
            if (null == parent) {
              /** @type {string} */
              parent = "";
            }
            /** @type {Object} */
            node = parent;
          }
          arr._wrapperState = {
            initialValue : toString(node)
          };
        }
        /**
         * @param {Object} element
         * @param {Object} input
         * @return {undefined}
         */
        function setValue(element, input) {
          var value = toString(input.value);
          var id = toString(input.defaultValue);
          if (null != value) {
            if ((value = "" + value) !== element.value) {
              /** @type {string} */
              element.value = value;
            }
            if (null == input.defaultValue) {
              if (element.defaultValue !== value) {
                /** @type {string} */
                element.defaultValue = value;
              }
            }
          }
          if (null != id) {
            /** @type {string} */
            element.defaultValue = "" + id;
          }
        }
        /**
         * @param {Object} element
         * @return {undefined}
         */
        function _forEach(element) {
          var text = element.textContent;
          if (text === element._wrapperState.initialValue) {
            if ("" !== text) {
              if (null !== text) {
                element.value = text;
              }
            }
          }
        }
        /**
         * @param {string} keepData
         * @return {?}
         */
        function inArray(keepData) {
          switch(keepData) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        /**
         * @param {string} recurring
         * @param {string} name
         * @return {?}
         */
        function enforce(recurring, name) {
          return null == recurring || "http://www.w3.org/1999/xhtml" === recurring ? inArray(name) : "http://www.w3.org/2000/svg" === recurring && "foreignObject" === name ? "http://www.w3.org/1999/xhtml" : recurring;
        }
        /**
         * @param {HTMLElement} node
         * @param {string} content
         * @return {?}
         */
        function createElement(node, content) {
          if (content) {
            var child = node.firstChild;
            if (child && (child === node.lastChild && 3 === child.nodeType)) {
              return void(child.nodeValue = content);
            }
          }
          /** @type {string} */
          node.textContent = content;
        }
        /**
         * @param {string} key
         * @param {number} value
         * @param {string} el
         * @return {?}
         */
        function css(key, value, el) {
          return null == value || ("boolean" === typeof value || "" === value) ? "" : el || ("number" !== typeof value || (0 === value || defaults.hasOwnProperty(key) && defaults[key])) ? ("" + value).trim() : value + "px";
        }
        /**
         * @param {Object} style
         * @param {Object} element
         * @return {undefined}
         */
        function setStyle(style, element) {
          var property;
          for (property in style = style.style, element) {
            if (element.hasOwnProperty(property)) {
              /** @type {boolean} */
              var failuresLink = 0 === property.indexOf("--");
              var value = css(property, element[property], failuresLink);
              if ("float" === property) {
                /** @type {string} */
                property = "cssFloat";
              }
              if (failuresLink) {
                style.setProperty(property, value);
              } else {
                style[property] = value;
              }
            }
          }
        }
        /**
         * @param {Object} key
         * @param {Object} name
         * @return {undefined}
         */
        function emit(key, name) {
          if (name) {
            if (internalValues[key] && (null != name.children || null != name.dangerouslySetInnerHTML)) {
              throw Error(callback(137, key));
            }
            if (null != name.dangerouslySetInnerHTML) {
              if (null != name.children) {
                throw Error(callback(60));
              }
              if ("object" !== typeof name.dangerouslySetInnerHTML || !("__html" in name.dangerouslySetInnerHTML)) {
                throw Error(callback(61));
              }
            }
            if (null != name.style && "object" !== typeof name.style) {
              throw Error(callback(62));
            }
          }
        }
        /**
         * @param {string} type
         * @param {?} target
         * @return {?}
         */
        function log(type, target) {
          if (-1 === type.indexOf("-")) {
            return "string" === typeof target.is;
          }
          switch(type) {
            case "annotation-xml":
            ;
            case "color-profile":
            ;
            case "font-face":
            ;
            case "font-face-src":
            ;
            case "font-face-uri":
            ;
            case "font-face-format":
            ;
            case "font-face-name":
            ;
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        /**
         * @param {Object} target
         * @return {?}
         */
        function getTarget(target) {
          return(target = target.target || (target.srcElement || window)).correspondingUseElement && (target = target.correspondingUseElement), 3 === target.nodeType ? target.parentNode : target;
        }
        /**
         * @param {Object} entry
         * @return {undefined}
         */
        function wrapped(entry) {
          if (entry = parseInt(entry)) {
            if ("function" !== typeof listener) {
              throw Error(callback(280));
            }
            var element = entry.stateNode;
            if (element) {
              element = removeListener(element);
              listener(entry.stateNode, entry.type, element);
            }
          }
        }
        /**
         * @param {string} a
         * @return {undefined}
         */
        function MAP(a) {
          if (fromIndex) {
            if (parents) {
              parents.push(a);
            } else {
              /** @type {Array} */
              parents = [a];
            }
          } else {
            /** @type {string} */
            fromIndex = a;
          }
        }
        /**
         * @return {undefined}
         */
        function setTitle() {
          if (fromIndex) {
            var i = fromIndex;
            var codeSegments = parents;
            if (parents = fromIndex = null, wrapped(i), codeSegments) {
              /** @type {number} */
              i = 0;
              for (;i < codeSegments.length;i++) {
                wrapped(codeSegments[i]);
              }
            }
          }
        }
        /**
         * @param {Function} cb
         * @param {Array} evt
         * @return {?}
         */
        function makeCallback(cb, evt) {
          return cb(evt);
        }
        /**
         * @return {undefined}
         */
        function defaultStep() {
        }
        /**
         * @param {Function} callback
         * @param {Array} result
         * @param {?} mongoObject
         * @return {?}
         */
        function blur(callback, result, mongoObject) {
          if (Te) {
            return callback(result, mongoObject);
          }
          /** @type {boolean} */
          Te = true;
          try {
            return makeCallback(callback, result, mongoObject);
          } finally {
            /** @type {boolean} */
            Te = false;
            if (null !== fromIndex || null !== parents) {
              defaultStep();
              setTitle();
            }
          }
        }
        /**
         * @param {Object} name
         * @param {string} key
         * @return {?}
         */
        function dataAttr(name, key) {
          var listener = name.stateNode;
          if (null === listener) {
            return null;
          }
          var cur = removeListener(listener);
          if (null === cur) {
            return null;
          }
          listener = cur[key];
          e: {
            switch(key) {
              case "onClick":
              ;
              case "onClickCapture":
              ;
              case "onDoubleClick":
              ;
              case "onDoubleClickCapture":
              ;
              case "onMouseDown":
              ;
              case "onMouseDownCapture":
              ;
              case "onMouseMove":
              ;
              case "onMouseMoveCapture":
              ;
              case "onMouseUp":
              ;
              case "onMouseUpCapture":
              ;
              case "onMouseEnter":
                if (!(cur = !cur.disabled)) {
                  /** @type {boolean} */
                  cur = !("button" === (name = name.type) || ("input" === name || ("select" === name || "textarea" === name)));
                }
                /** @type {boolean} */
                name = !cur;
                break e;
              default:
                /** @type {boolean} */
                name = false;
            }
          }
          if (name) {
            return null;
          }
          if (listener && "function" !== typeof listener) {
            throw Error(callback(231, key, typeof listener));
          }
          return listener;
        }
        /**
         * @param {?} str
         * @param {Function} fn
         * @param {?} context
         * @param {?} arr
         * @param {?} value
         * @param {?} asserter
         * @param {?} data
         * @param {?} arg
         * @param {?} alias
         * @return {undefined}
         */
        function method(str, fn, context, arr, value, asserter, data, arg, alias) {
          /** @type {Array.<?>} */
          var newArgs = Array.prototype.slice.call(arguments, 3);
          try {
            fn.apply(context, newArgs);
          } catch (suiteView) {
            this.onError(suiteView);
          }
        }
        /**
         * @param {?} b
         * @param {?} a
         * @param {?} arg
         * @param {?} x
         * @param {?} p
         * @param {?} number
         * @param {?} event
         * @param {?} methods
         * @param {?} m
         * @return {undefined}
         */
        function f2(b, a, arg, x, p, number, event, methods, m) {
          /** @type {boolean} */
          Fe = false;
          /** @type {null} */
          ary = null;
          method.apply(_this, arguments);
        }
        /**
         * @param {Object} n
         * @return {?}
         */
        function replace(n) {
          /** @type {Object} */
          var i = n;
          /** @type {Object} */
          var d = n;
          if (n.alternate) {
            for (;i.return;) {
              i = i.return;
            }
          } else {
            n = i;
            do {
              if (0 !== (4098 & (i = n).flags)) {
                d = i.return;
              }
              n = i.return;
            } while (n);
          }
          return 3 === i.tag ? d : null;
        }
        /**
         * @param {Object} object
         * @return {?}
         */
        function walk(object) {
          if (13 === object.tag) {
            var length = object.memoizedState;
            if (null === length && (null !== (object = object.alternate) && (length = object.memoizedState)), null !== length) {
              return length.dehydrated;
            }
          }
          return null;
        }
        /**
         * @param {Object} value
         * @return {undefined}
         */
        function url(value) {
          if (replace(value) !== value) {
            throw Error(callback(188));
          }
        }
        /**
         * @param {?} selector
         * @return {?}
         */
        function child(selector) {
          return null !== (selector = function(node) {
            var root = node.alternate;
            if (!root) {
              if (null === (root = replace(node))) {
                throw Error(callback(188));
              }
              return root !== node ? null : node;
            }
            /** @type {Object} */
            var o = node;
            var value = root;
            for (;;) {
              var result = o.return;
              if (null === result) {
                break;
              }
              var n = result.alternate;
              if (null === n) {
                if (null !== (value = result.return)) {
                  o = value;
                  continue;
                }
                break;
              }
              if (result.child === n.child) {
                n = result.child;
                for (;n;) {
                  if (n === o) {
                    return url(result), node;
                  }
                  if (n === value) {
                    return url(result), root;
                  }
                  n = n.sibling;
                }
                throw Error(callback(188));
              }
              if (o.return !== value.return) {
                o = result;
                value = n;
              } else {
                /** @type {boolean} */
                var i = false;
                var item = result.child;
                for (;item;) {
                  if (item === o) {
                    /** @type {boolean} */
                    i = true;
                    o = result;
                    value = n;
                    break;
                  }
                  if (item === value) {
                    /** @type {boolean} */
                    i = true;
                    value = result;
                    o = n;
                    break;
                  }
                  item = item.sibling;
                }
                if (!i) {
                  item = n.child;
                  for (;item;) {
                    if (item === o) {
                      /** @type {boolean} */
                      i = true;
                      o = n;
                      value = result;
                      break;
                    }
                    if (item === value) {
                      /** @type {boolean} */
                      i = true;
                      value = n;
                      o = result;
                      break;
                    }
                    item = item.sibling;
                  }
                  if (!i) {
                    throw Error(callback(189));
                  }
                }
              }
              if (o.alternate !== value) {
                throw Error(callback(190));
              }
            }
            if (3 !== o.tag) {
              throw Error(callback(188));
            }
            return o.stateNode.current === o ? node : root;
          }(selector)) ? fix(selector) : null;
        }
        /**
         * @param {Object} event
         * @return {?}
         */
        function fix(event) {
          if (5 === event.tag || 6 === event.tag) {
            return event;
          }
          event = event.child;
          for (;null !== event;) {
            var obj = fix(event);
            if (null !== obj) {
              return obj;
            }
            event = event.sibling;
          }
          return null;
        }
        /**
         * @param {number} value
         * @return {?}
         */
        function scanPunctuator(value) {
          switch(value & -value) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            ;
            case 128:
            ;
            case 256:
            ;
            case 512:
            ;
            case 1024:
            ;
            case 2048:
            ;
            case 4096:
            ;
            case 8192:
            ;
            case 16384:
            ;
            case 32768:
            ;
            case 65536:
            ;
            case 131072:
            ;
            case 262144:
            ;
            case 524288:
            ;
            case 1048576:
            ;
            case 2097152:
              return 4194240 & value;
            case 4194304:
            ;
            case 8388608:
            ;
            case 16777216:
            ;
            case 33554432:
            ;
            case 67108864:
              return 130023424 & value;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return value;
          }
        }
        /**
         * @param {string} data
         * @param {number} err
         * @return {?}
         */
        function error(data, err) {
          var c = data.pendingLanes;
          if (0 === c) {
            return 0;
          }
          /** @type {number} */
          var e = 0;
          var l = data.suspendedLanes;
          var pdataCur = data.pingedLanes;
          /** @type {number} */
          var pdataOld = 268435455 & c;
          if (0 !== pdataOld) {
            /** @type {number} */
            var udataCur = pdataOld & ~l;
            if (0 !== udataCur) {
              e = scanPunctuator(udataCur);
            } else {
              if (0 !== (pdataCur &= pdataOld)) {
                e = scanPunctuator(pdataCur);
              }
            }
          } else {
            if (0 !== (pdataOld = c & ~l)) {
              e = scanPunctuator(pdataOld);
            } else {
              if (0 !== pdataCur) {
                e = scanPunctuator(pdataCur);
              }
            }
          }
          if (0 === e) {
            return 0;
          }
          if (0 !== err && (err !== e && (0 === (err & l) && ((l = e & -e) >= (pdataCur = err & -err) || 16 === l && 0 !== (4194240 & pdataCur))))) {
            return err;
          }
          if (0 !== (4 & e) && (e |= 16 & c), 0 !== (err = data.entangledLanes)) {
            data = data.entanglements;
            err &= e;
            for (;0 < err;) {
              /** @type {number} */
              l = 1 << (c = 31 - reject(err));
              e |= data[c];
              err &= ~l;
            }
          }
          return e;
        }
        /**
         * @param {number} arr
         * @param {number} item
         * @return {?}
         */
        function _indexOf(arr, item) {
          switch(arr) {
            case 1:
            ;
            case 2:
            ;
            case 4:
              return item + 250;
            case 8:
            ;
            case 16:
            ;
            case 32:
            ;
            case 64:
            ;
            case 128:
            ;
            case 256:
            ;
            case 512:
            ;
            case 1024:
            ;
            case 2048:
            ;
            case 4096:
            ;
            case 8192:
            ;
            case 16384:
            ;
            case 32768:
            ;
            case 65536:
            ;
            case 131072:
            ;
            case 262144:
            ;
            case 524288:
            ;
            case 1048576:
            ;
            case 2097152:
              return item + 5E3;
            default:
              return-1;
          }
        }
        /**
         * @param {number} _xhr
         * @return {?}
         */
        function getter(_xhr) {
          return 0 !== (_xhr = -1073741825 & _xhr.pendingLanes) ? _xhr : 1073741824 & _xhr ? 1073741824 : 0;
        }
        /**
         * @return {?}
         */
        function getLocation() {
          var YYSTATE = YY_START;
          return 0 === (4194240 & (YY_START <<= 1)) && (YY_START = 64), YYSTATE;
        }
        /**
         * @param {number} exclude
         * @return {?}
         */
        function _set(exclude) {
          /** @type {Array} */
          var updated = [];
          /** @type {number} */
          var t = 0;
          for (;31 > t;t++) {
            updated.push(exclude);
          }
          return updated;
        }
        /**
         * @param {Object} s
         * @param {number} deepDataAndEvents
         * @param {Object} value
         * @return {undefined}
         */
        function h(s, deepDataAndEvents, value) {
          s.pendingLanes |= deepDataAndEvents;
          if (536870912 !== deepDataAndEvents) {
            /** @type {number} */
            s.suspendedLanes = 0;
            /** @type {number} */
            s.pingedLanes = 0;
          }
          /** @type {Object} */
          (s = s.eventTimes)[deepDataAndEvents = 31 - reject(deepDataAndEvents)] = value;
        }
        /**
         * @param {number} dataAndEvents
         * @param {number} deepDataAndEvents
         * @return {undefined}
         */
        function fun(dataAndEvents, deepDataAndEvents) {
          /** @type {number} */
          var rvar = dataAndEvents.entangledLanes |= deepDataAndEvents;
          dataAndEvents = dataAndEvents.entanglements;
          for (;rvar;) {
            /** @type {number} */
            var unlock = 31 - reject(rvar);
            /** @type {number} */
            var b = 1 << unlock;
            if (b & deepDataAndEvents | dataAndEvents[unlock] & deepDataAndEvents) {
              dataAndEvents[unlock] |= deepDataAndEvents;
            }
            rvar &= ~b;
          }
        }
        /**
         * @param {number} value
         * @return {?}
         */
        function setState(value) {
          return 1 < (value &= -value) ? 4 < value ? 0 !== (268435455 & value) ? 16 : 536870912 : 4 : 1;
        }
        /**
         * @param {?} v22
         * @param {Object} deepDataAndEvents
         * @return {undefined}
         */
        function setTouchAware(v22, deepDataAndEvents) {
          switch(v22) {
            case "focusin":
            ;
            case "focusout":
              /** @type {null} */
              qualifier = null;
              break;
            case "dragenter":
            ;
            case "dragleave":
              /** @type {null} */
              event = null;
              break;
            case "mouseover":
            ;
            case "mouseout":
              /** @type {null} */
              ev = null;
              break;
            case "pointerover":
            ;
            case "pointerout":
              m.delete(deepDataAndEvents.pointerId);
              break;
            case "gotpointercapture":
            ;
            case "lostpointercapture":
              instance.delete(deepDataAndEvents.pointerId);
          }
        }
        /**
         * @param {Object} event
         * @param {Object} data
         * @param {?} e
         * @param {number} deepDataAndEvents
         * @param {?} f
         * @param {Object} eventName
         * @return {?}
         */
        function fire(event, data, e, deepDataAndEvents, f, eventName) {
          return null === event || event.nativeEvent !== eventName ? (event = {
            blockedOn : data,
            domEventName : e,
            eventSystemFlags : deepDataAndEvents,
            nativeEvent : eventName,
            targetContainers : [f]
          }, null !== data && (null !== (data = parseInt(data)) && onload(data)), event) : (event.eventSystemFlags |= deepDataAndEvents, data = event.targetContainers, null !== f && (-1 === data.indexOf(f) && data.push(f)), event);
        }
        /**
         * @param {Object} data
         * @return {?}
         */
        function toHtml(data) {
          var i = push(data.target);
          if (null !== i) {
            var e = replace(i);
            if (null !== e) {
              if (13 === (i = e.tag)) {
                if (null !== (i = walk(e))) {
                  return data.blockedOn = i, void sync(data.priority, function() {
                    reset(e);
                  });
                }
              } else {
                if (3 === i && e.stateNode.current.memoizedState.isDehydrated) {
                  return void(data.blockedOn = 3 === e.tag ? e.stateNode.containerInfo : null);
                }
              }
            }
          }
          /** @type {null} */
          data.blockedOn = null;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        function triggerEvent(event) {
          if (null !== event.blockedOn) {
            return false;
          }
          var e = event.targetContainers;
          for (;0 < e.length;) {
            var input = addClass(event.domEventName, event.eventSystemFlags, e[0], event.nativeEvent);
            if (null !== input) {
              return null !== (e = parseInt(input)) && onload(e), event.blockedOn = input, false;
            }
            var inputEvent = new (input = event.nativeEvent).constructor(input.type, input);
            unload = inputEvent;
            input.target.dispatchEvent(inputEvent);
            /** @type {null} */
            unload = null;
            e.shift();
          }
          return true;
        }
        /**
         * @param {?} event
         * @param {?} id
         * @param {Object} context
         * @return {undefined}
         */
        function form(event, id, context) {
          if (triggerEvent(event)) {
            context.delete(id);
          }
        }
        /**
         * @return {undefined}
         */
        function after() {
          /** @type {boolean} */
          Nn = false;
          if (null !== qualifier) {
            if (triggerEvent(qualifier)) {
              /** @type {null} */
              qualifier = null;
            }
          }
          if (null !== event) {
            if (triggerEvent(event)) {
              /** @type {null} */
              event = null;
            }
          }
          if (null !== ev) {
            if (triggerEvent(ev)) {
              /** @type {null} */
              ev = null;
            }
          }
          m.forEach(form);
          instance.forEach(form);
        }
        /**
         * @param {?} event
         * @param {Object} text
         * @return {undefined}
         */
        function cancel(event, text) {
          if (event.blockedOn === text) {
            /** @type {null} */
            event.blockedOn = null;
            if (!Nn) {
              /** @type {boolean} */
              Nn = true;
              cell.unstable_scheduleCallback(cell.unstable_NormalPriority, after);
            }
          }
        }
        /**
         * @param {Object} name
         * @return {undefined}
         */
        function removeClass(name) {
          /**
           * @param {?} event
           * @return {?}
           */
          function start(event) {
            return cancel(event, name);
          }
          if (0 < resultItems.length) {
            cancel(resultItems[0], name);
            /** @type {number} */
            var i = 1;
            for (;i < resultItems.length;i++) {
              var v = resultItems[i];
              if (v.blockedOn === name) {
                /** @type {null} */
                v.blockedOn = null;
              }
            }
          }
          if (null !== qualifier) {
            cancel(qualifier, name);
          }
          if (null !== event) {
            cancel(event, name);
          }
          if (null !== ev) {
            cancel(ev, name);
          }
          m.forEach(start);
          instance.forEach(start);
          /** @type {number} */
          i = 0;
          for (;i < arr.length;i++) {
            if ((v = arr[i]).blockedOn === name) {
              /** @type {null} */
              v.blockedOn = null;
            }
          }
          for (;0 < arr.length && null === (i = arr[0]).blockedOn;) {
            toHtml(i);
            if (null === i.blockedOn) {
              arr.shift();
            }
          }
        }
        /**
         * @param {?} expr
         * @param {?} ref
         * @param {?} triggerRoute
         * @param {?} deepDataAndEvents
         * @return {undefined}
         */
        function count(expr, ref, triggerRoute, deepDataAndEvents) {
          var src = unpipedSource;
          var transition = support.transition;
          /** @type {null} */
          support.transition = null;
          try {
            /** @type {number} */
            unpipedSource = 1;
            make(expr, ref, triggerRoute, deepDataAndEvents);
          } finally {
            unpipedSource = src;
            support.transition = transition;
          }
        }
        /**
         * @param {?} expr
         * @param {?} obj
         * @param {?} triggerRoute
         * @param {?} deepDataAndEvents
         * @return {undefined}
         */
        function dot(expr, obj, triggerRoute, deepDataAndEvents) {
          var src = unpipedSource;
          var transition = support.transition;
          /** @type {null} */
          support.transition = null;
          try {
            /** @type {number} */
            unpipedSource = 4;
            make(expr, obj, triggerRoute, deepDataAndEvents);
          } finally {
            unpipedSource = src;
            support.transition = transition;
          }
        }
        /**
         * @param {?} c
         * @param {number} token
         * @param {?} triggerRoute
         * @param {Object} deepDataAndEvents
         * @return {undefined}
         */
        function make(c, token, triggerRoute, deepDataAndEvents) {
          if (clockseq) {
            var content = addClass(c, token, triggerRoute, deepDataAndEvents);
            if (null === content) {
              initialize(c, token, deepDataAndEvents, typePattern, triggerRoute);
              setTouchAware(c, deepDataAndEvents);
            } else {
              if (function(data, x, deepDataAndEvents, opt_obj2, touch) {
                switch(x) {
                  case "focusin":
                    return qualifier = fire(qualifier, data, x, deepDataAndEvents, opt_obj2, touch), true;
                  case "dragenter":
                    return event = fire(event, data, x, deepDataAndEvents, opt_obj2, touch), true;
                  case "mouseover":
                    return ev = fire(ev, data, x, deepDataAndEvents, opt_obj2, touch), true;
                  case "pointerover":
                    var id = touch.pointerId;
                    return m.set(id, fire(m.get(id) || null, data, x, deepDataAndEvents, opt_obj2, touch)), true;
                  case "gotpointercapture":
                    return id = touch.pointerId, instance.set(id, fire(instance.get(id) || null, data, x, deepDataAndEvents, opt_obj2, touch)), true;
                }
                return false;
              }(content, c, token, triggerRoute, deepDataAndEvents)) {
                deepDataAndEvents.stopPropagation();
              } else {
                if (setTouchAware(c, deepDataAndEvents), 4 & token && -1 < whitespace.indexOf(c)) {
                  for (;null !== content;) {
                    var result = parseInt(content);
                    if (null !== result && completed(result), null === (result = addClass(c, token, triggerRoute, deepDataAndEvents)) && initialize(c, token, deepDataAndEvents, typePattern, triggerRoute), result === content) {
                      break;
                    }
                    content = result;
                  }
                  if (null !== content) {
                    deepDataAndEvents.stopPropagation();
                  }
                } else {
                  initialize(c, token, deepDataAndEvents, null, triggerRoute);
                }
              }
            }
          }
        }
        /**
         * @param {Object} element
         * @param {Object} e
         * @param {Object} triggerRoute
         * @param {Object} value
         * @return {?}
         */
        function addClass(element, e, triggerRoute, value) {
          if (typePattern = null, null !== (element = push(element = getTarget(value)))) {
            if (null === (e = replace(element))) {
              /** @type {null} */
              element = null;
            } else {
              if (13 === (triggerRoute = e.tag)) {
                if (null !== (element = walk(e))) {
                  return element;
                }
                /** @type {null} */
                element = null;
              } else {
                if (3 === triggerRoute) {
                  if (e.stateNode.current.memoizedState.isDehydrated) {
                    return 3 === e.tag ? e.stateNode.containerInfo : null;
                  }
                  /** @type {null} */
                  element = null;
                } else {
                  if (e !== element) {
                    /** @type {null} */
                    element = null;
                  }
                }
              }
            }
          }
          return typePattern = element, null;
        }
        /**
         * @param {string} action
         * @return {?}
         */
        function init(action) {
          switch(action) {
            case "cancel":
            ;
            case "click":
            ;
            case "close":
            ;
            case "contextmenu":
            ;
            case "copy":
            ;
            case "cut":
            ;
            case "auxclick":
            ;
            case "dblclick":
            ;
            case "dragend":
            ;
            case "dragstart":
            ;
            case "drop":
            ;
            case "focusin":
            ;
            case "focusout":
            ;
            case "input":
            ;
            case "invalid":
            ;
            case "keydown":
            ;
            case "keypress":
            ;
            case "keyup":
            ;
            case "mousedown":
            ;
            case "mouseup":
            ;
            case "paste":
            ;
            case "pause":
            ;
            case "play":
            ;
            case "pointercancel":
            ;
            case "pointerdown":
            ;
            case "pointerup":
            ;
            case "ratechange":
            ;
            case "reset":
            ;
            case "resize":
            ;
            case "seeked":
            ;
            case "submit":
            ;
            case "touchcancel":
            ;
            case "touchend":
            ;
            case "touchstart":
            ;
            case "volumechange":
            ;
            case "change":
            ;
            case "selectionchange":
            ;
            case "textInput":
            ;
            case "compositionstart":
            ;
            case "compositionend":
            ;
            case "compositionupdate":
            ;
            case "beforeblur":
            ;
            case "afterblur":
            ;
            case "beforeinput":
            ;
            case "blur":
            ;
            case "fullscreenchange":
            ;
            case "focus":
            ;
            case "hashchange":
            ;
            case "popstate":
            ;
            case "select":
            ;
            case "selectstart":
              return 1;
            case "drag":
            ;
            case "dragenter":
            ;
            case "dragexit":
            ;
            case "dragleave":
            ;
            case "dragover":
            ;
            case "mousemove":
            ;
            case "mouseout":
            ;
            case "mouseover":
            ;
            case "pointermove":
            ;
            case "pointerout":
            ;
            case "pointerover":
            ;
            case "scroll":
            ;
            case "toggle":
            ;
            case "touchmove":
            ;
            case "wheel":
            ;
            case "mouseenter":
            ;
            case "mouseleave":
            ;
            case "pointerenter":
            ;
            case "pointerleave":
              return 4;
            case "message":
              switch(x()) {
                case pdataCur:
                  return 1;
                case textAlt:
                  return 4;
                case txt:
                ;
                case td:
                  return 16;
                case attr:
                  return 536870912;
                default:
                  return 16;
              }
            ;
            default:
              return 16;
          }
        }
        /**
         * @return {?}
         */
        function factory() {
          if (pt) {
            return pt;
          }
          var j;
          var start;
          var result = destination;
          var length = result.length;
          var ret = "value" in element ? element.value : element.textContent;
          var i = ret.length;
          /** @type {number} */
          j = 0;
          for (;j < length && result[j] === ret[j];j++) {
          }
          /** @type {number} */
          var n = length - j;
          /** @type {number} */
          start = 1;
          for (;start <= n && result[length - start] === ret[i - start];start++) {
          }
          return pt = ret.slice(j, 1 < start ? 1 - start : void 0);
        }
        /**
         * @param {number} e
         * @return {?}
         */
        function fixEvent(e) {
          var c = e.keyCode;
          return "charCode" in e ? 0 === (e = e.charCode) && (13 === c && (e = 13)) : e = c, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
        }
        /**
         * @return {?}
         */
        function returnTrue() {
          return true;
        }
        /**
         * @return {?}
         */
        function returnFalse() {
          return false;
        }
        /**
         * @param {?} type
         * @return {?}
         */
        function Event(type) {
          /**
           * @param {?} r
           * @param {?} eventType
           * @param {?} opt_target
           * @param {Object} args
           * @param {Object} target
           * @return {?}
           */
          function Event(r, eventType, opt_target, args, target) {
            var i;
            for (i in this._reactName = r, this._targetInst = opt_target, this.type = eventType, this.nativeEvent = args, this.target = target, this.currentTarget = null, type) {
              if (type.hasOwnProperty(i)) {
                r = type[i];
                this[i] = r ? r(args) : args[i];
              }
            }
            return this.isDefaultPrevented = (null != args.defaultPrevented ? args.defaultPrevented : false === args.returnValue) ? returnTrue : returnFalse, this.isPropagationStopped = returnFalse, this;
          }
          return trigger(Event.prototype, {
            /**
             * @return {undefined}
             */
            preventDefault : function() {
              /** @type {boolean} */
              this.defaultPrevented = true;
              var event = this.nativeEvent;
              if (event) {
                if (event.preventDefault) {
                  event.preventDefault();
                } else {
                  if ("unknown" !== typeof event.returnValue) {
                    /** @type {boolean} */
                    event.returnValue = false;
                  }
                }
                /** @type {function (): ?} */
                this.isDefaultPrevented = returnTrue;
              }
            },
            /**
             * @return {undefined}
             */
            stopPropagation : function() {
              var event = this.nativeEvent;
              if (event) {
                if (event.stopPropagation) {
                  event.stopPropagation();
                } else {
                  if ("unknown" !== typeof event.cancelBubble) {
                    /** @type {boolean} */
                    event.cancelBubble = true;
                  }
                }
                /** @type {function (): ?} */
                this.isPropagationStopped = returnTrue;
              }
            },
            /**
             * @return {undefined}
             */
            persist : function() {
            },
            /** @type {function (): ?} */
            isPersistent : returnTrue
          }), Event;
        }
        /**
         * @param {Text} event
         * @return {?}
         */
        function mouseup(event) {
          var fixHook = this.nativeEvent;
          return fixHook.getModifierState ? fixHook.getModifierState(event) : !!(event = events[event]) && !!fixHook[event];
        }
        /**
         * @return {?}
         */
        function getModifierState() {
          return mouseup;
        }
        /**
         * @param {string} type
         * @param {Object} event
         * @return {?}
         */
        function put(type, event) {
          switch(type) {
            case "keyup":
              return-1 !== hotkeys.indexOf(event.keyCode);
            case "keydown":
              return 229 !== event.keyCode;
            case "keypress":
            ;
            case "mousedown":
            ;
            case "focusout":
              return true;
            default:
              return false;
          }
        }
        /**
         * @param {Object} e
         * @return {?}
         */
        function dispatchEvent(e) {
          return "object" === typeof(e = e.detail) && "data" in e ? e.data : null;
        }
        /**
         * @param {Object} elem
         * @return {?}
         */
        function getName(elem) {
          var name = elem && (elem.nodeName && elem.nodeName.toLowerCase());
          return "input" === name ? !!types[elem.type] : "textarea" === name;
        }
        /**
         * @param {Array} result
         * @param {Object} c
         * @param {string} e
         * @param {string} t
         * @return {undefined}
         */
        function notify(result, c, e, t) {
          MAP(t);
          if (0 < (c = label(c, "onChange")).length) {
            e = new CustomEvent("onChange", "change", null, e, t);
            result.push({
              event : e,
              listeners : c
            });
          }
        }
        /**
         * @param {string} mod
         * @return {undefined}
         */
        function restoreScript(mod) {
          onLoad(mod, 0);
        }
        /**
         * @param {?} array
         * @return {?}
         */
        function makeArray(array) {
          if (click(assert(array))) {
            return array;
          }
        }
        /**
         * @param {string} keepData
         * @param {?} object
         * @return {?}
         */
        function seal(keepData, object) {
          if ("change" === keepData) {
            return object;
          }
        }
        /**
         * @return {undefined}
         */
        function unlisten() {
          if (capturedNode) {
            capturedNode.detachEvent("onpropertychange", onFocus);
            /** @type {null} */
            elem = capturedNode = null;
          }
        }
        /**
         * @param {Object} e
         * @return {undefined}
         */
        function onFocus(e) {
          if ("value" === e.propertyName && makeArray(elem)) {
            /** @type {Array} */
            var expectationResult = [];
            notify(expectationResult, elem, e, getTarget(e));
            blur(restoreScript, expectationResult);
          }
        }
        /**
         * @param {string} data
         * @param {Function} target
         * @param {?} selector
         * @return {undefined}
         */
        function listen(data, target, selector) {
          if ("focusin" === data) {
            unlisten();
            elem = selector;
            (capturedNode = target).attachEvent("onpropertychange", onFocus);
          } else {
            if ("focusout" === data) {
              unlisten();
            }
          }
        }
        /**
         * @param {string} key
         * @return {?}
         */
        function fireKey(key) {
          if ("selectionchange" === key || ("keyup" === key || "keydown" === key)) {
            return makeArray(elem);
          }
        }
        /**
         * @param {string} keepData
         * @param {?} checkSet
         * @return {?}
         */
        function controls(keepData, checkSet) {
          if ("click" === keepData) {
            return makeArray(checkSet);
          }
        }
        /**
         * @param {string} name
         * @param {?} checkSet
         * @return {?}
         */
        function background(name, checkSet) {
          if ("input" === name || "change" === name) {
            return makeArray(checkSet);
          }
        }
        /**
         * @param {Object} obj
         * @param {Object} object
         * @return {?}
         */
        function isUndefined(obj, object) {
          if (value(obj, object)) {
            return true;
          }
          if ("object" !== typeof obj || (null === obj || ("object" !== typeof object || null === object))) {
            return false;
          }
          /** @type {Array.<string>} */
          var keys = Object.keys(obj);
          /** @type {Array.<string>} */
          var k = Object.keys(object);
          if (keys.length !== k.length) {
            return false;
          }
          /** @type {number} */
          k = 0;
          for (;k < keys.length;k++) {
            /** @type {string} */
            var key = keys[k];
            if (!__hasProp.call(object, key) || !value(obj[key], object[key])) {
              return false;
            }
          }
          return true;
        }
        /**
         * @param {Object} node
         * @return {?}
         */
        function finishNode(node) {
          for (;node && node.firstChild;) {
            node = node.firstChild;
          }
          return node;
        }
        /**
         * @param {number} start
         * @param {number} date
         * @return {?}
         */
        function move(start, date) {
          var end;
          var node = finishNode(start);
          /** @type {number} */
          start = 0;
          for (;node;) {
            if (3 === node.nodeType) {
              if (end = start + node.textContent.length, start <= date && end >= date) {
                return{
                  node : node,
                  offset : date - start
                };
              }
              start = end;
            }
            e: {
              for (;node;) {
                if (node.nextSibling) {
                  node = node.nextSibling;
                  break e;
                }
                node = node.parentNode;
              }
              node = void 0;
            }
            node = finishNode(node);
          }
        }
        /**
         * @param {Node} container
         * @param {Node} element
         * @return {?}
         */
        function contains(container, element) {
          return!(!container || !element) && (container === element || (!container || 3 !== container.nodeType) && (element && 3 === element.nodeType ? contains(container, element.parentNode) : "contains" in container ? container.contains(element) : !!container.compareDocumentPosition && !!(16 & container.compareDocumentPosition(element))));
        }
        /**
         * @return {?}
         */
        function getData() {
          /** @type {Window} */
          var context = window;
          var data = getSelection();
          for (;data instanceof context.HTMLIFrameElement;) {
            try {
              /** @type {boolean} */
              var is_wildcard = "string" === typeof data.contentWindow.location.href;
            } catch (r) {
              /** @type {boolean} */
              is_wildcard = false;
            }
            if (!is_wildcard) {
              break;
            }
            data = getSelection((context = data.contentWindow).document);
          }
          return data;
        }
        /**
         * @param {Object} elem
         * @return {?}
         */
        function setField(elem) {
          var name = elem && (elem.nodeName && elem.nodeName.toLowerCase());
          return name && ("input" === name && ("text" === elem.type || ("search" === elem.type || ("tel" === elem.type || ("url" === elem.type || "password" === elem.type)))) || ("textarea" === name || "true" === elem.contentEditable));
        }
        /**
         * @param {Object} target
         * @return {undefined}
         */
        function start(target) {
          var node = getData();
          var el = target.focusedElem;
          var y = target.selectionRange;
          if (node !== el && (el && (el.ownerDocument && contains(el.ownerDocument.documentElement, el)))) {
            if (null !== y && setField(el)) {
              if (node = y.start, void 0 === (target = y.end) && (target = node), "selectionStart" in el) {
                el.selectionStart = node;
                /** @type {number} */
                el.selectionEnd = Math.min(target, el.value.length);
              } else {
                if ((target = (node = el.ownerDocument || document) && node.defaultView || window).getSelection) {
                  target = target.getSelection();
                  var start = el.textContent.length;
                  /** @type {number} */
                  var x = Math.min(y.start, start);
                  /** @type {number} */
                  y = void 0 === y.end ? x : Math.min(y.end, start);
                  if (!target.extend) {
                    if (x > y) {
                      /** @type {number} */
                      start = y;
                      /** @type {number} */
                      y = x;
                      /** @type {number} */
                      x = start;
                    }
                  }
                  start = move(el, x);
                  var self = move(el, y);
                  if (start) {
                    if (self) {
                      if (1 !== target.rangeCount || (target.anchorNode !== start.node || (target.anchorOffset !== start.offset || (target.focusNode !== self.node || target.focusOffset !== self.offset)))) {
                        (node = node.createRange()).setStart(start.node, start.offset);
                        target.removeAllRanges();
                        if (x > y) {
                          target.addRange(node);
                          target.extend(self.node, self.offset);
                        } else {
                          node.setEnd(self.node, self.offset);
                          target.addRange(node);
                        }
                      }
                    }
                  }
                }
              }
            }
            /** @type {Array} */
            node = [];
            target = el;
            for (;target = target.parentNode;) {
              if (1 === target.nodeType) {
                node.push({
                  element : target,
                  left : target.scrollLeft,
                  top : target.scrollTop
                });
              }
            }
            if ("function" === typeof el.focus) {
              el.focus();
            }
            /** @type {number} */
            el = 0;
            for (;el < node.length;el++) {
              (target = node[el]).element.scrollLeft = target.left;
              target.element.scrollTop = target.top;
            }
          }
        }
        /**
         * @param {Array} result
         * @param {string} event
         * @param {Object} obj
         * @return {undefined}
         */
        function select(result, event, obj) {
          var selection = obj.window === obj ? obj.document : 9 === obj.nodeType ? obj : obj.ownerDocument;
          if (!br) {
            if (!(null == object)) {
              if (!(object !== getSelection(selection))) {
                if ("selectionStart" in (selection = object) && setField(selection)) {
                  selection = {
                    start : selection.selectionStart,
                    end : selection.selectionEnd
                  };
                } else {
                  selection = {
                    anchorNode : (selection = (selection.ownerDocument && selection.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset : selection.anchorOffset,
                    focusNode : selection.focusNode,
                    focusOffset : selection.focusOffset
                  };
                }
                if (!(suiteView && isUndefined(suiteView, selection))) {
                  suiteView = selection;
                  if (0 < (selection = label(id, "onSelect")).length) {
                    event = new CustomEvent("onSelect", "select", null, event, obj);
                    result.push({
                      event : event,
                      listeners : selection
                    });
                    event.target = object;
                  }
                }
              }
            }
          }
        }
        /**
         * @param {string} name
         * @param {string} eventName
         * @return {?}
         */
        function prefix(name, eventName) {
          var _ = {};
          return _[name.toLowerCase()] = eventName.toLowerCase(), _["Webkit" + name] = "webkit" + eventName, _["Moz" + name] = "moz" + eventName, _;
        }
        /**
         * @param {string} name
         * @return {?}
         */
        function compiled(name) {
          if (obj[name]) {
            return obj[name];
          }
          if (!$this[name]) {
            return name;
          }
          var i;
          var old = $this[name];
          for (i in old) {
            if (old.hasOwnProperty(i) && i in arr2) {
              return obj[name] = old[i];
            }
          }
          return name;
        }
        /**
         * @param {string} type
         * @param {string} label
         * @return {undefined}
         */
        function sendEvent(type, label) {
          base.set(type, label);
          it(label, [type]);
        }
        /**
         * @param {Event} e
         * @param {?} thisArg
         * @param {EventTarget} el
         * @return {undefined}
         */
        function invoke(e, thisArg, el) {
          var udataCur = e.type || "unknown-event";
          /** @type {EventTarget} */
          e.currentTarget = el;
          (function(value, thisArg, opt_attributes, edge, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, textAlt, keepData) {
            if (f2.apply(this, arguments), Fe) {
              if (!Fe) {
                throw Error(callback(198));
              }
              var until = ary;
              /** @type {boolean} */
              Fe = false;
              /** @type {null} */
              ary = null;
              if (!De) {
                /** @type {boolean} */
                De = true;
                selector = until;
              }
            }
          })(udataCur, thisArg, void 0, e);
          /** @type {null} */
          e.currentTarget = null;
        }
        /**
         * @param {string} data
         * @param {number} x
         * @return {undefined}
         */
        function onLoad(data, x) {
          /** @type {boolean} */
          x = 0 !== (4 & x);
          /** @type {number} */
          var d = 0;
          for (;d < data.length;d++) {
            var e = data[d];
            var event = e.event;
            e = e.listeners;
            e: {
              var currentView = void 0;
              if (x) {
                /** @type {number} */
                var i = e.length - 1;
                for (;0 <= i;i--) {
                  var self = e[i];
                  var view = self.instance;
                  var currentTarget = self.currentTarget;
                  if (self = self.listener, view !== currentView && event.isPropagationStopped()) {
                    break e;
                  }
                  invoke(event, self, currentTarget);
                  currentView = view;
                }
              } else {
                /** @type {number} */
                i = 0;
                for (;i < e.length;i++) {
                  if (view = (self = e[i]).instance, currentTarget = self.currentTarget, self = self.listener, view !== currentView && event.isPropagationStopped()) {
                    break e;
                  }
                  invoke(event, self, currentTarget);
                  currentView = view;
                }
              }
            }
          }
          if (De) {
            throw data = selector, De = false, selector = null, data;
          }
        }
        /**
         * @param {string} type
         * @param {Object} el
         * @return {undefined}
         */
        function bind(type, el) {
          var c = el[k];
          if (void 0 === c) {
            c = el[k] = new Set;
          }
          /** @type {string} */
          var key = type + "__bubble";
          if (!c.has(key)) {
            enable(el, type, 2, false);
            c.add(key);
          }
        }
        /**
         * @param {string} type
         * @param {boolean} recurring
         * @param {Object} el
         * @return {undefined}
         */
        function attach(type, recurring, el) {
          /** @type {number} */
          var applyArgs = 0;
          if (recurring) {
            applyArgs |= 4;
          }
          enable(el, type, applyArgs, recurring);
        }
        /**
         * @param {Object} element
         * @return {undefined}
         */
        function match(element) {
          if (!element[NODE_TYPE]) {
            /** @type {boolean} */
            element[NODE_TYPE] = true;
            t.forEach(function(result) {
              if ("selectionchange" !== result) {
                if (!BASE_TYPES.has(result)) {
                  attach(result, false, element);
                }
                attach(result, true, element);
              }
            });
            var failuresLink = 9 === element.nodeType ? element : element.ownerDocument;
            if (!(null === failuresLink)) {
              if (!failuresLink[NODE_TYPE]) {
                /** @type {boolean} */
                failuresLink[NODE_TYPE] = true;
                attach("selectionchange", false, failuresLink);
              }
            }
          }
        }
        /**
         * @param {Object} b
         * @param {string} event
         * @param {(Object|string)} c
         * @param {boolean} recurring
         * @return {undefined}
         */
        function enable(b, event, c, recurring) {
          switch(init(event)) {
            case 1:
              /** @type {function (?, ?, ?, ?): undefined} */
              var l = count;
              break;
            case 4:
              /** @type {function (?, ?, ?, ?): undefined} */
              l = dot;
              break;
            default:
              /** @type {function (?, number, ?, Object): undefined} */
              l = make;
          }
          c = l.bind(null, event, c, b);
          l = void 0;
          if (!!Me) {
            if (!("touchstart" !== event && ("touchmove" !== event && "wheel" !== event))) {
              /** @type {boolean} */
              l = true;
            }
          }
          if (recurring) {
            if (void 0 !== l) {
              b.addEventListener(event, c, {
                capture : true,
                passive : l
              });
            } else {
              b.addEventListener(event, c, true);
            }
          } else {
            if (void 0 !== l) {
              b.addEventListener(event, c, {
                passive : l
              });
            } else {
              b.addEventListener(event, c, false);
            }
          }
        }
        /**
         * @param {string} type
         * @param {number} term
         * @param {string} e
         * @param {Object} args
         * @param {?} container
         * @return {undefined}
         */
        function initialize(type, term, e, args, container) {
          /** @type {Object} */
          var value = args;
          if (0 === (1 & term) && (0 === (2 & term) && null !== args)) {
            e: for (;;) {
              if (null === args) {
                return;
              }
              var result = args.tag;
              if (3 === result || 4 === result) {
                var element = args.stateNode.containerInfo;
                if (element === container || 8 === element.nodeType && element.parentNode === container) {
                  break;
                }
                if (4 === result) {
                  result = args.return;
                  for (;null !== result;) {
                    var tag = result.tag;
                    if ((3 === tag || 4 === tag) && ((tag = result.stateNode.containerInfo) === container || 8 === tag.nodeType && tag.parentNode === container)) {
                      return;
                    }
                    result = result.return;
                  }
                }
                for (;null !== element;) {
                  if (null === (result = push(element))) {
                    return;
                  }
                  if (5 === (tag = result.tag) || 6 === tag) {
                    args = value = result;
                    continue e;
                  }
                  element = element.parentNode;
                }
              }
              args = args.return;
            }
          }
          blur(function() {
            var array = value;
            var obj = getTarget(e);
            /** @type {Array} */
            var res = [];
            e: {
              var elem = base.get(type);
              if (void 0 !== elem) {
                var ret = CustomEvent;
                /** @type {string} */
                var t = type;
                switch(type) {
                  case "keypress":
                    if (0 === fixEvent(e)) {
                      break e;
                    }
                  ;
                  case "keydown":
                  ;
                  case "keyup":
                    ret = i;
                    break;
                  case "focusin":
                    /** @type {string} */
                    t = "focus";
                    ret = defValue;
                    break;
                  case "focusout":
                    /** @type {string} */
                    t = "blur";
                    ret = defValue;
                    break;
                  case "beforeblur":
                  ;
                  case "afterblur":
                    ret = defValue;
                    break;
                  case "click":
                    if (2 === e.button) {
                      break e;
                    }
                  ;
                  case "auxclick":
                  ;
                  case "dblclick":
                  ;
                  case "mousedown":
                  ;
                  case "mousemove":
                  ;
                  case "mouseup":
                  ;
                  case "mouseout":
                  ;
                  case "mouseover":
                  ;
                  case "contextmenu":
                    ret = NULL;
                    break;
                  case "drag":
                  ;
                  case "dragend":
                  ;
                  case "dragenter":
                  ;
                  case "dragexit":
                  ;
                  case "dragleave":
                  ;
                  case "dragover":
                  ;
                  case "dragstart":
                  ;
                  case "drop":
                    ret = ignore;
                    break;
                  case "touchcancel":
                  ;
                  case "touchend":
                  ;
                  case "touchmove":
                  ;
                  case "touchstart":
                    ret = EMPTY_STRING;
                    break;
                  case actual:
                  ;
                  case out:
                  ;
                  case HTMLCanvasElement:
                    ret = token;
                    break;
                  case onblur:
                    ret = allProps;
                    break;
                  case "scroll":
                    ret = b;
                    break;
                  case "wheel":
                    ret = deps;
                    break;
                  case "copy":
                  ;
                  case "cut":
                  ;
                  case "paste":
                    ret = errorName;
                    break;
                  case "gotpointercapture":
                  ;
                  case "lostpointercapture":
                  ;
                  case "pointercancel":
                  ;
                  case "pointerdown":
                  ;
                  case "pointermove":
                  ;
                  case "pointerout":
                  ;
                  case "pointerover":
                  ;
                  case "pointerup":
                    ret = v;
                }
                /** @type {boolean} */
                var p = 0 !== (4 & term);
                /** @type {boolean} */
                var item = !p && "scroll" === type;
                var node = p ? null !== elem ? elem + "Capture" : null : elem;
                /** @type {Array} */
                p = [];
                var data;
                var event = array;
                for (;null !== event;) {
                  var result = (data = event).stateNode;
                  if (5 === data.tag && (null !== result && (data = result, null !== node && (null != (result = dataAttr(event, node)) && p.push(block(event, result, data))))), item) {
                    break;
                  }
                  event = event.return;
                }
                if (0 < p.length) {
                  elem = new ret(elem, t, null, e, obj);
                  res.push({
                    event : elem,
                    listeners : p
                  });
                }
              }
            }
            if (0 === (7 & term)) {
              if (ret = "mouseout" === type || "pointerout" === type, (!(elem = "mouseover" === type || "pointerover" === type) || (e === unload || (!(t = e.relatedTarget || e.fromElement) || !push(t) && !t[prop]))) && ((ret || elem) && (elem = obj.window === obj ? obj : (elem = obj.ownerDocument) ? elem.defaultView || elem.parentWindow : window, ret ? (ret = array, null !== (t = (t = e.relatedTarget || e.toElement) ? push(t) : null) && ((t !== (item = replace(t)) || 5 !== t.tag && 6 !== t.tag) && 
              (t = null))) : (ret = null, t = array), ret !== t))) {
                if (p = NULL, result = "onMouseLeave", node = "onMouseEnter", event = "mouse", "pointerout" !== type && "pointerover" !== type || (p = v, result = "onPointerLeave", node = "onPointerEnter", event = "pointer"), item = null == ret ? elem : assert(ret), data = null == t ? elem : assert(t), (elem = new p(result, event + "leave", ret, e, obj)).target = item, elem.relatedTarget = data, result = null, push(obj) === array && ((p = new p(node, event + "enter", t, e, obj)).target = data, p.relatedTarget = 
                item, result = p), item = result, ret && t) {
                  e: {
                    node = t;
                    /** @type {number} */
                    event = 0;
                    /** @type {boolean} */
                    data = p = ret;
                    for (;data;data = parser(data)) {
                      event++;
                    }
                    /** @type {number} */
                    data = 0;
                    result = node;
                    for (;result;result = parser(result)) {
                      data++;
                    }
                    for (;0 < event - data;) {
                      p = parser(p);
                      event--;
                    }
                    for (;0 < data - event;) {
                      node = parser(node);
                      data--;
                    }
                    for (;event--;) {
                      if (p === node || null !== node && p === node.alternate) {
                        break e;
                      }
                      p = parser(p);
                      node = parser(node);
                    }
                    /** @type {null} */
                    p = null;
                  }
                } else {
                  /** @type {null} */
                  p = null;
                }
                if (null !== ret) {
                  reduce(res, elem, ret, p, false);
                }
                if (null !== t) {
                  if (null !== item) {
                    reduce(res, item, t, p, true);
                  }
                }
              }
              if ("select" === (ret = (elem = array ? assert(array) : window).nodeName && elem.nodeName.toLowerCase()) || "input" === ret && "file" === elem.type) {
                /** @type {function (string, ?): ?} */
                var callback = seal
              } else {
                if (getName(elem)) {
                  if (tab) {
                    /** @type {function (string, ?): ?} */
                    callback = background;
                  } else {
                    /** @type {function (string): ?} */
                    callback = fireKey;
                    /** @type {function (string, Function, ?): undefined} */
                    var parent = listen;
                  }
                } else {
                  if (ret = elem.nodeName) {
                    if ("input" === ret.toLowerCase()) {
                      if ("checkbox" === elem.type || "radio" === elem.type) {
                        /** @type {function (string, ?): ?} */
                        callback = controls;
                      }
                    }
                  }
                }
              }
              switch(callback && (callback = callback(type, array)) ? notify(res, callback, e, obj) : (parent && parent(type, elem, array), "focusout" === type && ((parent = elem._wrapperState) && (parent.controlled && ("number" === elem.type && getType(elem, "number", elem.value))))), parent = array ? assert(array) : window, type) {
                case "focusin":
                  if (getName(parent) || "true" === parent.contentEditable) {
                    object = parent;
                    id = array;
                    /** @type {null} */
                    suiteView = null;
                  }
                  break;
                case "focusout":
                  /** @type {null} */
                  suiteView = id = object = null;
                  break;
                case "mousedown":
                  /** @type {boolean} */
                  br = true;
                  break;
                case "contextmenu":
                ;
                case "mouseup":
                ;
                case "dragend":
                  /** @type {boolean} */
                  br = false;
                  select(res, e, obj);
                  break;
                case "selectionchange":
                  if (useQSA) {
                    break;
                  }
                ;
                case "keydown":
                ;
                case "keyup":
                  select(res, e, obj);
              }
              var err;
              if (inst) {
                e: {
                  switch(type) {
                    case "compositionstart":
                      /** @type {string} */
                      var ev = "onCompositionStart";
                      break e;
                    case "compositionend":
                      /** @type {string} */
                      ev = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      /** @type {string} */
                      ev = "onCompositionUpdate";
                      break e;
                  }
                  ev = void 0;
                }
              } else {
                if (onCompositionStart) {
                  if (put(type, e)) {
                    /** @type {string} */
                    ev = "onCompositionEnd";
                  }
                } else {
                  if ("keydown" === type) {
                    if (229 === e.keyCode) {
                      /** @type {string} */
                      ev = "onCompositionStart";
                    }
                  }
                }
              }
              if (ev) {
                if (elementEvent) {
                  if ("ko" !== e.locale) {
                    if (onCompositionStart || "onCompositionStart" !== ev) {
                      if ("onCompositionEnd" === ev) {
                        if (onCompositionStart) {
                          err = factory();
                        }
                      }
                    } else {
                      destination = "value" in (element = obj) ? element.value : element.textContent;
                      /** @type {boolean} */
                      onCompositionStart = true;
                    }
                  }
                }
                if (0 < (parent = label(array, ev)).length) {
                  ev = new Player(ev, type, null, e, obj);
                  res.push({
                    event : ev,
                    listeners : parent
                  });
                  if (err) {
                    ev.data = err;
                  } else {
                    if (null !== (err = dispatchEvent(e))) {
                      ev.data = err;
                    }
                  }
                }
              }
              if (err = message ? function(type, e) {
                switch(type) {
                  case "compositionend":
                    return dispatchEvent(e);
                  case "keypress":
                    return 32 !== e.which ? null : (todoText = true, ENTER_KEY);
                  case "textInput":
                    return(type = e.data) === ENTER_KEY && todoText ? null : type;
                  default:
                    return null;
                }
              }(type, e) : function(type, event) {
                if (onCompositionStart) {
                  return "compositionend" === type || !inst && put(type, event) ? (type = factory(), pt = destination = element = null, onCompositionStart = false, type) : null;
                }
                switch(type) {
                  case "paste":
                  ;
                  default:
                    return null;
                  case "keypress":
                    if (!(event.ctrlKey || (event.altKey || event.metaKey)) || event.ctrlKey && event.altKey) {
                      if (event.char && 1 < event.char.length) {
                        return event.char;
                      }
                      if (event.which) {
                        return String.fromCharCode(event.which);
                      }
                    }
                    return null;
                  case "compositionend":
                    return elementEvent && "ko" !== event.locale ? null : event.data;
                }
              }(type, e)) {
                if (0 < (array = label(array, "onBeforeInput")).length) {
                  obj = new Player("onBeforeInput", "beforeinput", null, e, obj);
                  res.push({
                    event : obj,
                    listeners : array
                  });
                  obj.data = err;
                }
              }
            }
            onLoad(res, term);
          });
        }
        /**
         * @param {Object} type
         * @param {Object} listener
         * @param {EventTarget} data
         * @return {?}
         */
        function block(type, listener, data) {
          return{
            instance : type,
            listener : listener,
            currentTarget : data
          };
        }
        /**
         * @param {Object} v
         * @param {string} name
         * @return {?}
         */
        function label(v, name) {
          /** @type {string} */
          var camelKey = name + "Capture";
          /** @type {Array} */
          var results = [];
          for (;null !== v;) {
            /** @type {Object} */
            var a = v;
            var i = a.stateNode;
            if (5 === a.tag) {
              if (null !== i) {
                a = i;
                if (null != (i = dataAttr(v, camelKey))) {
                  results.unshift(block(v, i, a));
                }
                if (null != (i = dataAttr(v, name))) {
                  results.push(block(v, i, a));
                }
              }
            }
            v = v.return;
          }
          return results;
        }
        /**
         * @param {Object} s
         * @return {?}
         */
        function parser(s) {
          if (null === s) {
            return null;
          }
          do {
            s = s.return;
          } while (s && 5 !== s.tag);
          return s || null;
        }
        /**
         * @param {Array} result
         * @param {Object} key
         * @param {Object} name
         * @param {Object} index
         * @param {boolean} memo
         * @return {undefined}
         */
        function reduce(result, key, name, index, memo) {
          var camelKey = key._reactName;
          /** @type {Array} */
          var listeners = [];
          for (;null !== name && name !== index;) {
            /** @type {Object} */
            var info = name;
            var data = info.alternate;
            var headers = info.stateNode;
            if (null !== data && data === index) {
              break;
            }
            if (5 === info.tag) {
              if (null !== headers) {
                info = headers;
                if (memo) {
                  if (null != (data = dataAttr(name, camelKey))) {
                    listeners.unshift(block(name, data, info));
                  }
                } else {
                  if (!memo) {
                    if (null != (data = dataAttr(name, camelKey))) {
                      listeners.push(block(name, data, info));
                    }
                  }
                }
              }
            }
            name = name.return;
          }
          if (0 !== listeners.length) {
            result.push({
              event : key,
              listeners : listeners
            });
          }
        }
        /**
         * @param {string} str
         * @return {?}
         */
        function escapeString(str) {
          return("string" === typeof str ? str : "" + str).replace(r20, "\n").replace(rreturn, "");
        }
        /**
         * @param {?} key
         * @param {(Array|string)} value
         * @param {boolean} a
         * @return {undefined}
         */
        function stringify(key, value, a) {
          if (value = escapeString(value), escapeString(key) !== value && a) {
            throw Error(callback(425));
          }
        }
        /**
         * @return {undefined}
         */
        function height() {
        }
        /**
         * @param {string} name
         * @param {Object} item
         * @return {?}
         */
        function handler(name, item) {
          return "textarea" === name || ("noscript" === name || ("string" === typeof item.children || ("number" === typeof item.children || "object" === typeof item.dangerouslySetInnerHTML && (null !== item.dangerouslySetInnerHTML && null != item.dangerouslySetInnerHTML.__html))));
        }
        /**
         * @param {?} failing_message
         * @return {undefined}
         */
        function report(failing_message) {
          setTimeout(function() {
            throw failing_message;
          });
        }
        /**
         * @param {Object} items
         * @param {Object} node
         * @return {?}
         */
        function format(items, node) {
          /** @type {Object} */
          var before = node;
          /** @type {number} */
          var r = 0;
          do {
            var cur = before.nextSibling;
            if (items.removeChild(before), cur && 8 === cur.nodeType) {
              if ("/$" === (before = cur.data)) {
                if (0 === r) {
                  return items.removeChild(cur), void removeClass(node);
                }
                r--;
              } else {
                if (!("$" !== before && ("$?" !== before && "$!" !== before))) {
                  r++;
                }
              }
            }
            before = cur;
          } while (before);
          removeClass(node);
        }
        /**
         * @param {Object} node
         * @return {?}
         */
        function text(node) {
          for (;null != node;node = node.nextSibling) {
            var type = node.nodeType;
            if (1 === type || 3 === type) {
              break;
            }
            if (8 === type) {
              if ("$" === (type = node.data) || ("$!" === type || "$?" === type)) {
                break;
              }
              if ("/$" === type) {
                return null;
              }
            }
          }
          return node;
        }
        /**
         * @param {Object} cur
         * @return {?}
         */
        function sibling(cur) {
          cur = cur.previousSibling;
          /** @type {number} */
          var n = 0;
          for (;cur;) {
            if (8 === cur.nodeType) {
              var obj = cur.data;
              if ("$" === obj || ("$!" === obj || "$?" === obj)) {
                if (0 === n) {
                  return cur;
                }
                n--;
              } else {
                if ("/$" === obj) {
                  n++;
                }
              }
            }
            cur = cur.previousSibling;
          }
          return null;
        }
        /**
         * @param {Object} elem
         * @return {?}
         */
        function push(elem) {
          var item = elem[name];
          if (item) {
            return item;
          }
          var node = elem.parentNode;
          for (;node;) {
            if (item = node[prop] || node[name]) {
              if (node = item.alternate, null !== item.child || null !== node && null !== node.child) {
                elem = sibling(elem);
                for (;null !== elem;) {
                  if (node = elem[name]) {
                    return node;
                  }
                  elem = sibling(elem);
                }
              }
              return item;
            }
            node = (elem = node).parentNode;
          }
          return null;
        }
        /**
         * @param {Object} object
         * @return {?}
         */
        function parseInt(object) {
          return!(object = object[name] || object[prop]) || 5 !== object.tag && (6 !== object.tag && (13 !== object.tag && 3 !== object.tag)) ? null : object;
        }
        /**
         * @param {Object} x
         * @return {?}
         */
        function assert(x) {
          if (5 === x.tag || 6 === x.tag) {
            return x.stateNode;
          }
          throw Error(callback(33));
        }
        /**
         * @param {?} listener
         * @return {?}
         */
        function removeListener(listener) {
          return listener[key] || null;
        }
        /**
         * @param {number} recurring
         * @return {?}
         */
        function normalize(recurring) {
          return{
            current : recurring
          };
        }
        /**
         * @param {?} source
         * @return {undefined}
         */
        function forEach(source) {
          if (!(0 > best_int)) {
            source.current = instrument[best_int];
            /** @type {null} */
            instrument[best_int] = null;
            best_int--;
          }
        }
        /**
         * @param {?} source
         * @param {Object} message
         * @return {undefined}
         */
        function split(source, message) {
          best_int++;
          instrument[best_int] = source.current;
          /** @type {Object} */
          source.current = message;
        }
        /**
         * @param {Object} s
         * @param {?} object
         * @return {?}
         */
        function decodeURIComponent(s, object) {
          var testSource = s.type.contextTypes;
          if (!testSource) {
            return ret;
          }
          var result = s.stateNode;
          if (result && result.__reactInternalMemoizedUnmaskedChildContext === object) {
            return result.__reactInternalMemoizedMaskedChildContext;
          }
          var name;
          var old = {};
          for (name in testSource) {
            old[name] = object[name];
          }
          return result && ((s = s.stateNode).__reactInternalMemoizedUnmaskedChildContext = object, s.__reactInternalMemoizedMaskedChildContext = old), old;
        }
        /**
         * @param {Object} object
         * @return {?}
         */
        function clone(object) {
          return null !== (object = object.childContextTypes) && void 0 !== object;
        }
        /**
         * @return {undefined}
         */
        function shift() {
          forEach(resources);
          forEach(source);
        }
        /**
         * @param {number} recurring
         * @param {Object} start
         * @param {boolean} errorMessage
         * @return {undefined}
         */
        function runTest(recurring, start, errorMessage) {
          if (source.current !== ret) {
            throw Error(callback(168));
          }
          split(source, start);
          split(resources, errorMessage);
        }
        /**
         * @param {Object} e
         * @param {Object} value
         * @param {?} type
         * @return {?}
         */
        function loaded(e, value, type) {
          var options = e.stateNode;
          if (value = value.childContextTypes, "function" !== typeof options.getChildContext) {
            return type;
          }
          var k;
          for (k in options = options.getChildContext()) {
            if (!(k in value)) {
              throw Error(callback(108, draw(e) || "Unknown", k));
            }
          }
          return trigger({}, type, options);
        }
        /**
         * @param {Object} namespace
         * @return {?}
         */
        function tmpl(namespace) {
          return namespace = (namespace = namespace.stateNode) && namespace.__reactInternalMemoizedMergedChildContext || ret, array = source.current, split(source, namespace), split(resources, resources.current), true;
        }
        /**
         * @param {string} args
         * @param {?} id
         * @param {boolean} recurring
         * @return {undefined}
         */
        function go(args, id, recurring) {
          var store = args.stateNode;
          if (!store) {
            throw Error(callback(169));
          }
          if (recurring) {
            args = loaded(args, id, array);
            /** @type {string} */
            store.__reactInternalMemoizedMergedChildContext = args;
            forEach(resources);
            forEach(source);
            split(source, args);
          } else {
            forEach(resources);
          }
          split(resources, recurring);
        }
        /**
         * @param {Function} path
         * @return {undefined}
         */
        function when(path) {
          if (null === paths) {
            /** @type {Array} */
            paths = [path];
          } else {
            paths.push(path);
          }
        }
        /**
         * @return {?}
         */
        function apply() {
          if (!Al && null !== paths) {
            /** @type {boolean} */
            Al = true;
            /** @type {number} */
            var i = 0;
            var src = unpipedSource;
            try {
              /** @type {Array} */
              var resultItems = paths;
              /** @type {number} */
              unpipedSource = 1;
              for (;i < resultItems.length;i++) {
                var result = resultItems[i];
                do {
                  result = result(true);
                } while (null !== result);
              }
              /** @type {null} */
              paths = null;
              /** @type {boolean} */
              Ul = false;
            } catch (l) {
              throw null !== paths && (paths = paths.slice(i + 1)), mixin(pdataCur, apply), l;
            } finally {
              unpipedSource = src;
              /** @type {boolean} */
              Al = false;
            }
          }
          return null;
        }
        /**
         * @param {string} data
         * @param {number} i
         * @return {undefined}
         */
        function decode(data, i) {
          files[ti++] = page;
          files[ti++] = file;
          /** @type {string} */
          file = data;
          /** @type {number} */
          page = i;
        }
        /**
         * @param {string} message
         * @param {number} xhr
         * @param {number} ignored
         * @return {undefined}
         */
        function errorHandler(message, xhr, ignored) {
          result[ri++] = e;
          result[ri++] = msg;
          result[ri++] = from;
          /** @type {string} */
          from = message;
          var exception = e;
          message = msg;
          /** @type {number} */
          var length = 32 - reject(exception) - 1;
          exception &= ~(1 << length);
          ignored += 1;
          /** @type {number} */
          var indentation = 32 - reject(xhr) + length;
          if (30 < indentation) {
            /** @type {number} */
            var i = length - length % 5;
            /** @type {string} */
            indentation = (exception & (1 << i) - 1).toString(32);
            exception >>= i;
            length -= i;
            /** @type {number} */
            e = 1 << 32 - reject(xhr) + length | ignored << length | exception;
            /** @type {string} */
            msg = indentation + message;
          } else {
            /** @type {number} */
            e = 1 << indentation | ignored << length | exception;
            /** @type {string} */
            msg = message;
          }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function getJSON(data) {
          if (null !== data.return) {
            decode(data, 1);
            errorHandler(data, 1, 0);
          }
        }
        /**
         * @param {string} key
         * @return {undefined}
         */
        function encode(key) {
          for (;key === file;) {
            file = files[--ti];
            /** @type {null} */
            files[ti] = null;
            page = files[--ti];
            /** @type {null} */
            files[ti] = null;
          }
          for (;key === from;) {
            from = result[--ri];
            /** @type {null} */
            result[ri] = null;
            msg = result[--ri];
            /** @type {null} */
            result[ri] = null;
            e = result[--ri];
            /** @type {null} */
            result[ri] = null;
          }
        }
        /**
         * @param {string} result
         * @param {(Object|string)} error
         * @return {undefined}
         */
        function handle(result, error) {
          var data = val(5, null, null, 0);
          /** @type {string} */
          data.elementType = "DELETED";
          /** @type {(Object|string)} */
          data.stateNode = error;
          /** @type {string} */
          data.return = result;
          if (null === (error = result.deletions)) {
            /** @type {Array} */
            result.deletions = [data];
            result.flags |= 16;
          } else {
            error.push(data);
          }
        }
        /**
         * @param {Object} obj
         * @param {Object} root
         * @return {?}
         */
        function query(obj, root) {
          switch(obj.tag) {
            case 5:
              var s = obj.type;
              return null !== (root = 1 !== root.nodeType || s.toLowerCase() !== root.nodeName.toLowerCase() ? null : root) && (obj.stateNode = root, max = obj, el = text(root.firstChild), true);
            case 6:
              return null !== (root = "" === obj.pendingProps || 3 !== root.nodeType ? null : root) && (obj.stateNode = root, max = obj, el = null, true);
            case 13:
              return null !== (root = 8 !== root.nodeType ? null : root) && (s = null !== from ? {
                id : e,
                overflow : msg
              } : null, obj.memoizedState = {
                dehydrated : root,
                treeContext : s,
                retryLane : 1073741824
              }, (s = val(18, null, null, 0)).stateNode = root, s.return = obj, obj.child = s, max = obj, el = null, true);
            default:
              return false;
          }
        }
        /**
         * @param {Object} o
         * @return {?}
         */
        function getKey(o) {
          return 0 !== (1 & o.mode) && 0 === (128 & o.flags);
        }
        /**
         * @param {Object} val
         * @return {undefined}
         */
        function save(val) {
          if (truth) {
            var node = el;
            if (node) {
              var next = node;
              if (!query(val, node)) {
                if (getKey(val)) {
                  throw Error(callback(418));
                }
                node = text(next.nextSibling);
                var i = max;
                if (node && query(val, node)) {
                  handle(i, next);
                } else {
                  /** @type {number} */
                  val.flags = -4097 & val.flags | 2;
                  /** @type {boolean} */
                  truth = false;
                  /** @type {Object} */
                  max = val;
                }
              }
            } else {
              if (getKey(val)) {
                throw Error(callback(418));
              }
              /** @type {number} */
              val.flags = -4097 & val.flags | 2;
              /** @type {boolean} */
              truth = false;
              /** @type {Object} */
              max = val;
            }
          }
        }
        /**
         * @param {Object} i
         * @return {undefined}
         */
        function handleError(i) {
          i = i.return;
          for (;null !== i && (5 !== i.tag && (3 !== i.tag && 13 !== i.tag));) {
            i = i.return;
          }
          /** @type {Object} */
          max = i;
        }
        /**
         * @param {Object} e
         * @return {?}
         */
        function get(e) {
          if (e !== max) {
            return false;
          }
          if (!truth) {
            return handleError(e), truth = true, false;
          }
          var target;
          if ((target = 3 !== e.tag) && (!(target = 5 !== e.tag) && (target = "head" !== (target = e.type) && ("body" !== target && !handler(e.type, e.memoizedProps)))), target && (target = el)) {
            if (getKey(e)) {
              throw expand(), Error(callback(418));
            }
            for (;target;) {
              handle(e, target);
              target = text(target.nextSibling);
            }
          }
          if (handleError(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) {
              throw Error(callback(317));
            }
            e: {
              e = e.nextSibling;
              /** @type {number} */
              target = 0;
              for (;e;) {
                if (8 === e.nodeType) {
                  var code = e.data;
                  if ("/$" === code) {
                    if (0 === target) {
                      el = text(e.nextSibling);
                      break e;
                    }
                    target--;
                  } else {
                    if (!("$" !== code && ("$!" !== code && "$?" !== code))) {
                      target++;
                    }
                  }
                }
                e = e.nextSibling;
              }
              /** @type {null} */
              el = null;
            }
          } else {
            el = max ? text(e.stateNode.nextSibling) : null;
          }
          return true;
        }
        /**
         * @return {undefined}
         */
        function expand() {
          var elem = el;
          for (;elem;) {
            elem = text(elem.nextSibling);
          }
        }
        /**
         * @return {undefined}
         */
        function _each() {
          /** @type {null} */
          el = max = null;
          /** @type {boolean} */
          truth = false;
        }
        /**
         * @param {?} str
         * @return {undefined}
         */
        function range(str) {
          if (null === values) {
            /** @type {Array} */
            values = [str];
          } else {
            values.push(str);
          }
        }
        /**
         * @param {Object} b
         * @param {Object} a
         * @return {?}
         */
        function require(b, a) {
          if (b && b.defaultProps) {
            var key;
            for (key in a = trigger({}, a), b = b.defaultProps) {
              if (void 0 === a[key]) {
                a[key] = b[key];
              }
            }
            return a;
          }
          return a;
        }
        /**
         * @return {undefined}
         */
        function Deferred() {
          /** @type {null} */
          testNode = selected = mode = null;
        }
        /**
         * @param {?} event
         * @return {undefined}
         */
        function end(event) {
          var elem = member.current;
          forEach(member);
          event._currentValue = elem;
        }
        /**
         * @param {Object} context
         * @param {?} selector
         * @param {Object} s
         * @return {undefined}
         */
        function jQuery(context, selector, s) {
          for (;null !== context;) {
            var j = context.alternate;
            if ((context.childLanes & selector) !== selector ? (context.childLanes |= selector, null !== j && (j.childLanes |= selector)) : null !== j && ((j.childLanes & selector) !== selector && (j.childLanes |= selector)), context === s) {
              break;
            }
            context = context.return;
          }
        }
        /**
         * @param {Object} options
         * @param {string} e
         * @return {undefined}
         */
        function fail(options, e) {
          /** @type {Object} */
          mode = options;
          /** @type {null} */
          testNode = selected = null;
          if (null !== (options = options.dependencies)) {
            if (null !== options.firstContext) {
              if (0 !== (options.lanes & e)) {
                /** @type {boolean} */
                ref$ = true;
              }
              /** @type {null} */
              options.firstContext = null;
            }
          }
        }
        /**
         * @param {Object} item
         * @return {?}
         */
        function makeIterator(item) {
          var src = item._currentValue;
          if (testNode !== item) {
            if (item = {
              context : item,
              memoizedValue : src,
              next : null
            }, null === selected) {
              if (null === mode) {
                throw Error(callback(308));
              }
              /** @type {Object} */
              selected = item;
              mode.dependencies = {
                lanes : 0,
                firstContext : item
              };
            } else {
              selected = selected.next = item;
            }
          }
          return src;
        }
        /**
         * @param {?} object
         * @return {undefined}
         */
        function getEnumerableProperties(object) {
          if (null === list) {
            /** @type {Array} */
            list = [object];
          } else {
            list.push(object);
          }
        }
        /**
         * @param {Object} obj
         * @param {?} value
         * @param {?} node
         * @param {number} deepDataAndEvents
         * @return {?}
         */
        function cloneNode(obj, value, node, deepDataAndEvents) {
          var o = value.interleaved;
          return null === o ? (node.next = node, getEnumerableProperties(value)) : (node.next = o.next, o.next = node), value.interleaved = node, onsuccess(obj, deepDataAndEvents);
        }
        /**
         * @param {Object} o
         * @param {number} deepDataAndEvents
         * @return {?}
         */
        function onsuccess(o, deepDataAndEvents) {
          o.lanes |= deepDataAndEvents;
          var p = o.alternate;
          if (null !== p) {
            p.lanes |= deepDataAndEvents;
          }
          /** @type {Object} */
          p = o;
          o = o.return;
          for (;null !== o;) {
            o.childLanes |= deepDataAndEvents;
            if (null !== (p = o.alternate)) {
              p.childLanes |= deepDataAndEvents;
            }
            /** @type {Object} */
            p = o;
            o = o.return;
          }
          return 3 === p.tag ? p.stateNode : null;
        }
        /**
         * @param {boolean} obj
         * @return {undefined}
         */
        function isDefined(obj) {
          obj.updateQueue = {
            baseState : obj.memoizedState,
            firstBaseUpdate : null,
            lastBaseUpdate : null,
            shared : {
              pending : null,
              interleaved : null,
              lanes : 0
            },
            effects : null
          };
        }
        /**
         * @param {Object} opts
         * @param {Object} optionsString
         * @return {undefined}
         */
        function setOptions(opts, optionsString) {
          opts = opts.updateQueue;
          if (optionsString.updateQueue === opts) {
            optionsString.updateQueue = {
              baseState : opts.baseState,
              firstBaseUpdate : opts.firstBaseUpdate,
              lastBaseUpdate : opts.lastBaseUpdate,
              shared : opts.shared,
              effects : opts.effects
            };
          }
        }
        /**
         * @param {number} value
         * @param {Object} array
         * @return {?}
         */
        function slice(value, array) {
          return{
            eventTime : value,
            lane : array,
            tag : 0,
            payload : null,
            callback : null,
            next : null
          };
        }
        /**
         * @param {Object} data
         * @param {?} item
         * @param {number} deepDataAndEvents
         * @return {?}
         */
        function spawn(data, item, deepDataAndEvents) {
          var value = data.updateQueue;
          if (null === value) {
            return null;
          }
          if (value = value.shared, 0 !== (2 & errorMessage)) {
            var target = value.pending;
            return null === target ? item.next = item : (item.next = target.next, target.next = item), value.pending = item, onsuccess(data, deepDataAndEvents);
          }
          return null === (target = value.interleaved) ? (item.next = item, getEnumerableProperties(value)) : (item.next = target.next, target.next = item), value.interleaved = item, onsuccess(data, deepDataAndEvents);
        }
        /**
         * @param {Object} dataAndEvents
         * @param {Object} data
         * @param {number} index
         * @return {undefined}
         */
        function bindContent(dataAndEvents, data, index) {
          if (null !== (data = data.updateQueue) && (data = data.shared, 0 !== (4194240 & index))) {
            var method = data.lanes;
            index |= method &= dataAndEvents.pendingLanes;
            /** @type {number} */
            data.lanes = index;
            fun(dataAndEvents, index);
          }
        }
        /**
         * @param {Object} data
         * @param {?} id
         * @return {?}
         */
        function Node(data, id) {
          var message = data.updateQueue;
          var opts = data.alternate;
          if (null !== opts && message === (opts = opts.updateQueue)) {
            /** @type {null} */
            var ring = null;
            /** @type {null} */
            var ret = null;
            if (null !== (message = message.firstBaseUpdate)) {
              do {
                var next = {
                  eventTime : message.eventTime,
                  lane : message.lane,
                  tag : message.tag,
                  payload : message.payload,
                  callback : message.callback,
                  next : null
                };
                if (null === ret) {
                  ring = ret = next;
                } else {
                  ret = ret.next = next;
                }
                message = message.next;
              } while (null !== message);
              if (null === ret) {
                ring = ret = id;
              } else {
                ret = ret.next = id;
              }
            } else {
              ring = ret = id;
            }
            return message = {
              baseState : opts.baseState,
              firstBaseUpdate : ring,
              lastBaseUpdate : ret,
              shared : opts.shared,
              effects : opts.effects
            }, void(data.updateQueue = message);
          }
          if (null === (data = message.lastBaseUpdate)) {
            message.firstBaseUpdate = id;
          } else {
            data.next = id;
          }
          message.lastBaseUpdate = id;
        }
        /**
         * @param {Object} object
         * @param {Object} fn
         * @param {?} type
         * @param {string} endpoint
         * @return {undefined}
         */
        function done(object, fn, type, endpoint) {
          var self = object.updateQueue;
          /** @type {boolean} */
          tok = false;
          var prev = self.firstBaseUpdate;
          var i = self.lastBaseUpdate;
          var data = self.shared.pending;
          if (null !== data) {
            /** @type {null} */
            self.shared.pending = null;
            var state = data;
            var current = state.next;
            /** @type {null} */
            state.next = null;
            if (null === i) {
              prev = current;
            } else {
              i.next = current;
            }
            i = state;
            var e = object.alternate;
            if (null !== e) {
              if ((data = (e = e.updateQueue).lastBaseUpdate) !== i) {
                if (null === data) {
                  e.firstBaseUpdate = current;
                } else {
                  data.next = current;
                }
                e.lastBaseUpdate = state;
              }
            }
          }
          if (null !== prev) {
            var text = self.baseState;
            /** @type {number} */
            i = 0;
            /** @type {null} */
            e = current = state = null;
            data = prev;
            for (;;) {
              var options = data.lane;
              var msg = data.eventTime;
              if ((endpoint & options) === options) {
                if (null !== e) {
                  e = e.next = {
                    eventTime : msg,
                    lane : 0,
                    tag : data.tag,
                    payload : data.payload,
                    callback : data.callback,
                    next : null
                  };
                }
                e: {
                  /** @type {Object} */
                  var context = object;
                  var config = data;
                  switch(options = fn, msg = type, config.tag) {
                    case 1:
                      if ("function" === typeof(context = config.payload)) {
                        text = context.call(msg, text, options);
                        break e;
                      }
                      text = context;
                      break e;
                    case 3:
                      /** @type {number} */
                      context.flags = -65537 & context.flags | 128;
                    case 0:
                      if (null === (options = "function" === typeof(context = config.payload) ? context.call(msg, text, options) : context) || void 0 === options) {
                        break e;
                      }
                      text = trigger({}, text, options);
                      break e;
                    case 2:
                      /** @type {boolean} */
                      tok = true;
                  }
                }
                if (null !== data.callback) {
                  if (0 !== data.lane) {
                    object.flags |= 64;
                    if (null === (options = self.effects)) {
                      /** @type {Array} */
                      self.effects = [data];
                    } else {
                      options.push(data);
                    }
                  }
                }
              } else {
                msg = {
                  eventTime : msg,
                  lane : options,
                  tag : data.tag,
                  payload : data.payload,
                  callback : data.callback,
                  next : null
                };
                if (null === e) {
                  current = e = msg;
                  state = text;
                } else {
                  e = e.next = msg;
                }
                i |= options;
              }
              if (null === (data = data.next)) {
                if (null === (data = self.shared.pending)) {
                  break;
                }
                data = (options = data).next;
                /** @type {null} */
                options.next = null;
                self.lastBaseUpdate = options;
                /** @type {null} */
                self.shared.pending = null;
              }
            }
            if (null === e && (state = text), self.baseState = state, self.firstBaseUpdate = current, self.lastBaseUpdate = e, null !== (fn = self.shared.interleaved)) {
              /** @type {Object} */
              self = fn;
              do {
                i |= self.lane;
                self = self.next;
              } while (self !== fn);
            } else {
              if (null === prev) {
                /** @type {number} */
                self.shared.lanes = 0;
              }
            }
            inParens |= i;
            /** @type {number} */
            object.lanes = i;
            object.memoizedState = text;
          }
        }
        /**
         * @param {Object} b
         * @param {?} a
         * @param {?} obj
         * @return {undefined}
         */
        function addEventListener(b, a, obj) {
          if (b = a.effects, a.effects = null, null !== b) {
            /** @type {number} */
            a = 0;
            for (;a < b.length;a++) {
              var self = b[a];
              var fn = self.callback;
              if (null !== fn) {
                if (self.callback = null, self = obj, "function" !== typeof fn) {
                  throw Error(callback(191, fn));
                }
                fn.call(self);
              }
            }
          }
        }
        /**
         * @param {Object} optionsString
         * @param {Object} x
         * @param {(Object|string)} b
         * @param {string} v
         * @return {undefined}
         */
        function strictEqual(optionsString, x, b, v) {
          b = null === (b = b(v, x = optionsString.memoizedState)) || void 0 === b ? x : trigger({}, x, b);
          /** @type {(Object|string)} */
          optionsString.memoizedState = b;
          if (0 === optionsString.lanes) {
            /** @type {(Object|string)} */
            optionsString.updateQueue.baseState = b;
          }
        }
        /**
         * @param {(Function|string)} el
         * @param {Function} func
         * @param {Object} obj
         * @param {boolean} value
         * @param {Object} target
         * @param {Object} fn
         * @param {?} key
         * @return {?}
         */
        function wrap(el, func, obj, value, target, fn, key) {
          return "function" === typeof(el = el.stateNode).shouldComponentUpdate ? el.shouldComponentUpdate(value, fn, key) : !func.prototype || (!func.prototype.isPureReactComponent || (!isUndefined(obj, value) || !isUndefined(target, fn)));
        }
        /**
         * @param {Object} x
         * @param {Function} node
         * @param {Array} value
         * @return {?}
         */
        function copy(x, node, value) {
          /** @type {boolean} */
          var result = false;
          var which = ret;
          var iterator = node.contextType;
          return "object" === typeof iterator && null !== iterator ? iterator = makeIterator(iterator) : (which = clone(node) ? array : source.current, iterator = (result = null !== (result = node.contextTypes) && void 0 !== result) ? decodeURIComponent(x, which) : ret), node = new node(value, iterator), x.memoizedState = null !== node.state && void 0 !== node.state ? node.state : null, node.updater = History, x.stateNode = node, node._reactInternals = x, result && ((x = x.stateNode).__reactInternalMemoizedUnmaskedChildContext = 
          which, x.__reactInternalMemoizedMaskedChildContext = iterator), node;
        }
        /**
         * @param {(Function|string)} value
         * @param {(Object|string)} data
         * @param {boolean} msg
         * @param {?} func
         * @return {undefined}
         */
        function ok(value, data, msg, func) {
          value = data.state;
          if ("function" === typeof data.componentWillReceiveProps) {
            data.componentWillReceiveProps(msg, func);
          }
          if ("function" === typeof data.UNSAFE_componentWillReceiveProps) {
            data.UNSAFE_componentWillReceiveProps(msg, func);
          }
          if (data.state !== value) {
            History.enqueueReplaceState(data, data.state, null);
          }
        }
        /**
         * @param {Object} options
         * @param {Object} value
         * @param {Object} item
         * @param {string} context
         * @return {undefined}
         */
        function cb(options, value, item, context) {
          var data = options.stateNode;
          /** @type {Object} */
          data.props = item;
          data.state = options.memoizedState;
          data.refs = originalrefs;
          isDefined(options);
          var iterator = value.contextType;
          if ("object" === typeof iterator && null !== iterator) {
            data.context = makeIterator(iterator);
          } else {
            iterator = clone(value) ? array : source.current;
            data.context = decodeURIComponent(options, iterator);
          }
          data.state = options.memoizedState;
          if ("function" === typeof(iterator = value.getDerivedStateFromProps)) {
            strictEqual(options, value, iterator, item);
            data.state = options.memoizedState;
          }
          if (!("function" === typeof value.getDerivedStateFromProps)) {
            if (!("function" === typeof data.getSnapshotBeforeUpdate)) {
              if (!("function" !== typeof data.UNSAFE_componentWillMount && "function" !== typeof data.componentWillMount)) {
                value = data.state;
                if ("function" === typeof data.componentWillMount) {
                  data.componentWillMount();
                }
                if ("function" === typeof data.UNSAFE_componentWillMount) {
                  data.UNSAFE_componentWillMount();
                }
                if (value !== data.state) {
                  History.enqueueReplaceState(data, data.state, null);
                }
                done(options, item, data, context);
                data.state = options.memoizedState;
              }
            }
          }
          if ("function" === typeof data.componentDidMount) {
            options.flags |= 4194308;
          }
        }
        /**
         * @param {?} value
         * @param {Object} e
         * @param {Object} data
         * @return {?}
         */
        function call(value, e, data) {
          if (null !== (value = data.ref) && ("function" !== typeof value && "object" !== typeof value)) {
            if (data._owner) {
              if (data = data._owner) {
                if (1 !== data.tag) {
                  throw Error(callback(309));
                }
                var destination = data.stateNode;
              }
              if (!destination) {
                throw Error(callback(147, value));
              }
              var result = destination;
              /** @type {string} */
              var key = "" + value;
              return null !== e && (null !== e.ref && ("function" === typeof e.ref && e.ref._stringRef === key)) ? e.ref : (e = function(value) {
                var locals = result.refs;
                if (locals === originalrefs) {
                  locals = result.refs = {};
                }
                if (null === value) {
                  delete locals[key];
                } else {
                  /** @type {number} */
                  locals[key] = value;
                }
              }, e._stringRef = key, e);
            }
            if ("string" !== typeof value) {
              throw Error(callback(284));
            }
            if (!data._owner) {
              throw Error(callback(290, value));
            }
          }
          return value;
        }
        /**
         * @param {string} result
         * @param {Object} argv
         * @return {?}
         */
        function func(result, argv) {
          throw result = Object.prototype.toString.call(argv), Error(callback(31, "[object Object]" === result ? "object with keys {" + Object.keys(argv).join(", ") + "}" : result));
        }
        /**
         * @param {?} config
         * @return {?}
         */
        function color(config) {
          return(0, config._init)(config._payload);
        }
        /**
         * @param {boolean} recurring
         * @return {?}
         */
        function exports(recurring) {
          /**
           * @param {string} message
           * @param {?} obj
           * @return {undefined}
           */
          function debug(message, obj) {
            if (recurring) {
              var readyList = message.deletions;
              if (null === readyList) {
                /** @type {Array} */
                message.deletions = [obj];
                message.flags |= 16;
              } else {
                readyList.push(obj);
              }
            }
          }
          /**
           * @param {string} message
           * @param {Object} obj
           * @return {?}
           */
          function log(message, obj) {
            if (!recurring) {
              return null;
            }
            for (;null !== obj;) {
              debug(message, obj);
              obj = obj.sibling;
            }
            return null;
          }
          /**
           * @param {(Node|string)} data
           * @param {Object} options
           * @return {?}
           */
          function load(data, options) {
            data = new Map;
            for (;null !== options;) {
              if (null !== options.key) {
                data.set(options.key, options);
              } else {
                data.set(options.index, options);
              }
              options = options.sibling;
            }
            return data;
          }
          /**
           * @param {Object} item
           * @param {Object} next
           * @return {?}
           */
          function fn(item, next) {
            return(item = self(item, next)).index = 0, item.sibling = null, item;
          }
          /**
           * @param {Object} o
           * @param {Object} n
           * @param {Object} i
           * @return {?}
           */
          function remove(o, n, i) {
            return o.index = i, recurring ? null !== (i = o.alternate) ? (i = i.index) < n ? (o.flags |= 2, n) : i : (o.flags |= 2, n) : (o.flags |= 1048576, n);
          }
          /**
           * @param {Object} option
           * @return {?}
           */
          function f(option) {
            return recurring && (null === option.alternate && (option.flags |= 2)), option;
          }
          /**
           * @param {Object} v
           * @param {Object} result
           * @param {string} index
           * @param {string} name
           * @return {?}
           */
          function emit(v, result, index, name) {
            return null === result || 6 !== result.tag ? ((result = read(index, v.mode, name)).return = v, result) : ((result = fn(result, index)).return = v, result);
          }
          /**
           * @param {Object} v
           * @param {Object} e
           * @param {Object} data
           * @param {?} result
           * @return {?}
           */
          function render(v, e, data, result) {
            var c = data.type;
            return c === string ? callback(v, e, data.props.children, result, data.key) : null !== e && (e.elementType === c || "object" === typeof c && (null !== c && (c.$$typeof === OPEN_EXTERNAL_EVENT && color(c) === e.type))) ? ((result = fn(e, data.props)).ref = call(v, e, data), result.return = v, result) : ((result = $(data.type, data.key, data.props, null, v.mode, result)).ref = call(v, e, data), result.return = v, result);
          }
          /**
           * @param {Object} v
           * @param {Object} result
           * @param {Object} context
           * @param {string} name
           * @return {?}
           */
          function next(v, result, context, name) {
            return null === result || (4 !== result.tag || (result.stateNode.containerInfo !== context.containerInfo || result.stateNode.implementation !== context.implementation)) ? ((result = validator(context, v.mode, name)).return = v, result) : ((result = fn(result, context.children || [])).return = v, result);
          }
          /**
           * @param {Object} v
           * @param {Object} result
           * @param {Object} data
           * @param {?} key
           * @param {Object} recurring
           * @return {?}
           */
          function callback(v, result, data, key, recurring) {
            return null === result || 7 !== result.tag ? ((result = find(data, v.mode, key, recurring)).return = v, result) : ((result = fn(result, data)).return = v, result);
          }
          /**
           * @param {Object} data
           * @param {Object} value
           * @param {string} key
           * @return {?}
           */
          function validate(data, value, key) {
            if ("string" === typeof value && "" !== value || "number" === typeof value) {
              return(value = read("" + value, data.mode, key)).return = data, value;
            }
            if ("object" === typeof value && null !== value) {
              switch(value.$$typeof) {
                case CLOSE_EVENT:
                  return(key = $(value.type, value.key, value.props, null, data.mode, key)).ref = call(data, null, value), key.return = data, key;
                case LOCATION_CHANGED_EVENT:
                  return(value = validator(value, data.mode, key)).return = data, value;
                case OPEN_EXTERNAL_EVENT:
                  return validate(data, (0, value._init)(value._payload), key);
              }
              if (isArray(value) || keys(value)) {
                return(value = find(value, data.mode, key, null)).return = data, value;
              }
              func(data, value);
            }
            return null;
          }
          /**
           * @param {(Object|string)} result
           * @param {Object} results
           * @param {Object} data
           * @param {string} arg
           * @return {?}
           */
          function done(result, results, data, arg) {
            var key = null !== results ? results.key : null;
            if ("string" === typeof data && "" !== data || "number" === typeof data) {
              return null !== key ? null : emit(result, results, "" + data, arg);
            }
            if ("object" === typeof data && null !== data) {
              switch(data.$$typeof) {
                case CLOSE_EVENT:
                  return data.key === key ? render(result, results, data, arg) : null;
                case LOCATION_CHANGED_EVENT:
                  return data.key === key ? next(result, results, data, arg) : null;
                case OPEN_EXTERNAL_EVENT:
                  return done(result, results, (key = data._init)(data._payload), arg);
              }
              if (isArray(data) || keys(data)) {
                return null !== key ? null : callback(result, results, data, arg, null);
              }
              func(result, data);
            }
            return null;
          }
          /**
           * @param {(Object|string)} arr
           * @param {(Object|string)} name
           * @param {Object} from
           * @param {Object} data
           * @param {string} arg
           * @return {?}
           */
          function filter(arr, name, from, data, arg) {
            if ("string" === typeof data && "" !== data || "number" === typeof data) {
              return emit(name, arr = arr.get(from) || null, "" + data, arg);
            }
            if ("object" === typeof data && null !== data) {
              switch(data.$$typeof) {
                case CLOSE_EVENT:
                  return render(name, arr = arr.get(null === data.key ? from : data.key) || null, data, arg);
                case LOCATION_CHANGED_EVENT:
                  return next(name, arr = arr.get(null === data.key ? from : data.key) || null, data, arg);
                case OPEN_EXTERNAL_EVENT:
                  return filter(arr, name, from, (0, data._init)(data._payload), arg);
              }
              if (isArray(data) || keys(data)) {
                return callback(name, arr = arr.get(from) || null, data, arg, null);
              }
              func(name, data);
            }
            return null;
          }
          /**
           * @param {string} data
           * @param {Object} n
           * @param {Object} buf
           * @param {string} opt_key
           * @return {?}
           */
          function update(data, n, buf, opt_key) {
            /** @type {null} */
            var context = null;
            /** @type {null} */
            var value = null;
            /** @type {Object} */
            var obj = n;
            /** @type {number} */
            var i = n = 0;
            /** @type {null} */
            var node = null;
            for (;null !== obj && i < buf.length;i++) {
              if (obj.index > i) {
                node = obj;
                /** @type {null} */
                obj = null;
              } else {
                node = obj.sibling;
              }
              var item = done(data, obj, buf[i], opt_key);
              if (null === item) {
                if (null === obj) {
                  /** @type {null} */
                  obj = node;
                }
                break;
              }
              if (recurring) {
                if (obj) {
                  if (null === item.alternate) {
                    debug(data, obj);
                  }
                }
              }
              n = remove(item, n, i);
              if (null === value) {
                context = item;
              } else {
                value.sibling = item;
              }
              value = item;
              /** @type {null} */
              obj = node;
            }
            if (i === buf.length) {
              return log(data, obj), truth && decode(data, i), context;
            }
            if (null === obj) {
              for (;i < buf.length;i++) {
                if (null !== (obj = validate(data, buf[i], opt_key))) {
                  n = remove(obj, n, i);
                  if (null === value) {
                    context = obj;
                  } else {
                    value.sibling = obj;
                  }
                  value = obj;
                }
              }
              return truth && decode(data, i), context;
            }
            obj = load(data, obj);
            for (;i < buf.length;i++) {
              if (null !== (node = filter(obj, data, i, buf[i], opt_key))) {
                if (recurring) {
                  if (null !== node.alternate) {
                    obj.delete(null === node.key ? i : node.key);
                  }
                }
                n = remove(node, n, i);
                if (null === value) {
                  context = node;
                } else {
                  value.sibling = node;
                }
                value = node;
              }
            }
            return recurring && obj.forEach(function(walkers) {
              return debug(data, walkers);
            }), truth && decode(data, i), context;
          }
          /**
           * @param {string} data
           * @param {Object} n
           * @param {Object} value
           * @param {string} opt_key
           * @return {?}
           */
          function cb(data, n, value, opt_key) {
            var values = keys(value);
            if ("function" !== typeof values) {
              throw Error(callback(150));
            }
            if (null == (value = values.call(value))) {
              throw Error(callback(151));
            }
            /** @type {null} */
            var options = values = null;
            /** @type {Object} */
            var results = n;
            /** @type {number} */
            var i = n = 0;
            /** @type {null} */
            var newResults = null;
            var val = value.next();
            for (;null !== results && !val.done;i++, val = value.next()) {
              if (results.index > i) {
                newResults = results;
                /** @type {null} */
                results = null;
              } else {
                newResults = results.sibling;
              }
              var item = done(data, results, val.value, opt_key);
              if (null === item) {
                if (null === results) {
                  /** @type {null} */
                  results = newResults;
                }
                break;
              }
              if (recurring) {
                if (results) {
                  if (null === item.alternate) {
                    debug(data, results);
                  }
                }
              }
              n = remove(item, n, i);
              if (null === options) {
                values = item;
              } else {
                options.sibling = item;
              }
              options = item;
              /** @type {null} */
              results = newResults;
            }
            if (val.done) {
              return log(data, results), truth && decode(data, i), values;
            }
            if (null === results) {
              for (;!val.done;i++, val = value.next()) {
                if (null !== (val = validate(data, val.value, opt_key))) {
                  n = remove(val, n, i);
                  if (null === options) {
                    values = val;
                  } else {
                    options.sibling = val;
                  }
                  options = val;
                }
              }
              return truth && decode(data, i), values;
            }
            results = load(data, results);
            for (;!val.done;i++, val = value.next()) {
              if (null !== (val = filter(results, data, i, val.value, opt_key))) {
                if (recurring) {
                  if (null !== val.alternate) {
                    results.delete(null === val.key ? i : val.key);
                  }
                }
                n = remove(val, n, i);
                if (null === options) {
                  values = val;
                } else {
                  options.sibling = val;
                }
                options = val;
              }
            }
            return recurring && results.forEach(function(walkers) {
              return debug(data, walkers);
            }), truth && decode(data, i), values;
          }
          return function process(message, result, data, key) {
            if ("object" === typeof data && (null !== data && (data.type === string && (null === data.key && (data = data.props.children)))), "object" === typeof data && null !== data) {
              switch(data.$$typeof) {
                case CLOSE_EVENT:
                  e: {
                    var name = data.key;
                    /** @type {Object} */
                    var e = result;
                    for (;null !== e;) {
                      if (e.key === name) {
                        if ((name = data.type) === string) {
                          if (7 === e.tag) {
                            log(message, e.sibling);
                            /** @type {Object} */
                            (result = fn(e, data.props.children)).return = message;
                            /** @type {Object} */
                            message = result;
                            break e;
                          }
                        } else {
                          if (e.elementType === name || "object" === typeof name && (null !== name && (name.$$typeof === OPEN_EXTERNAL_EVENT && color(name) === e.type))) {
                            log(message, e.sibling);
                            (result = fn(e, data.props)).ref = call(message, e, data);
                            /** @type {Object} */
                            result.return = message;
                            /** @type {Object} */
                            message = result;
                            break e;
                          }
                        }
                        log(message, e);
                        break;
                      }
                      debug(message, e);
                      e = e.sibling;
                    }
                    if (data.type === string) {
                      /** @type {Object} */
                      (result = find(data.props.children, message.mode, key, data.key)).return = message;
                      /** @type {Object} */
                      message = result;
                    } else {
                      (key = $(data.type, data.key, data.props, null, message.mode, key)).ref = call(message, result, data);
                      /** @type {Object} */
                      key.return = message;
                      /** @type {Object} */
                      message = key;
                    }
                  }
                  return f(message);
                case LOCATION_CHANGED_EVENT:
                  e: {
                    e = data.key;
                    for (;null !== result;) {
                      if (result.key === e) {
                        if (4 === result.tag && (result.stateNode.containerInfo === data.containerInfo && result.stateNode.implementation === data.implementation)) {
                          log(message, result.sibling);
                          /** @type {Object} */
                          (result = fn(result, data.children || [])).return = message;
                          /** @type {Object} */
                          message = result;
                          break e;
                        }
                        log(message, result);
                        break;
                      }
                      debug(message, result);
                      result = result.sibling;
                    }
                    /** @type {Object} */
                    (result = validator(data, message.mode, key)).return = message;
                    /** @type {Object} */
                    message = result;
                  }
                  return f(message);
                case OPEN_EXTERNAL_EVENT:
                  return process(message, result, (e = data._init)(data._payload), key);
              }
              if (isArray(data)) {
                return update(message, result, data, key);
              }
              if (keys(data)) {
                return cb(message, result, data, key);
              }
              func(message, data);
            }
            return "string" === typeof data && "" !== data || "number" === typeof data ? (data = "" + data, null !== result && 6 === result.tag ? (log(message, result.sibling), (result = fn(result, data)).return = message, message = result) : (log(message, result), (result = read(data, message.mode, key)).return = message, message = result), f(message)) : log(message, result);
          };
        }
        /**
         * @param {?} str
         * @return {?}
         */
        function trim(str) {
          if (str === data) {
            throw Error(callback(174));
          }
          return str;
        }
        /**
         * @param {Object} first
         * @param {Object} a
         * @return {undefined}
         */
        function merge(first, a) {
          switch(split(params, a), split(src, first), split(config, data), first = a.nodeType) {
            case 9:
            ;
            case 11:
              a = (a = a.documentElement) ? a.namespaceURI : enforce(null, "");
              break;
            default:
              a = enforce(a = (first = 8 === first ? a.parentNode : a).namespaceURI || null, first = first.tagName);
          }
          forEach(config);
          split(config, a);
        }
        /**
         * @return {undefined}
         */
        function unique() {
          forEach(config);
          forEach(src);
          forEach(params);
        }
        /**
         * @param {Object} v
         * @return {undefined}
         */
        function style(v) {
          trim(params.current);
          var recurring = trim(config.current);
          var mySecret = enforce(recurring, v.type);
          if (recurring !== mySecret) {
            split(src, v);
            split(config, mySecret);
          }
        }
        /**
         * @param {Object} s
         * @return {undefined}
         */
        function setter(s) {
          if (src.current === s) {
            forEach(config);
            forEach(src);
          }
        }
        /**
         * @param {Object} list
         * @return {?}
         */
        function write(list) {
          /** @type {Object} */
          var self = list;
          for (;null !== self;) {
            if (13 === self.tag) {
              var ele = self.memoizedState;
              if (null !== ele && (null === (ele = ele.dehydrated) || ("$?" === ele.data || "$!" === ele.data))) {
                return self;
              }
            } else {
              if (19 === self.tag && void 0 !== self.memoizedProps.revealOrder) {
                if (0 !== (128 & self.flags)) {
                  return self;
                }
              } else {
                if (null !== self.child) {
                  self.child.return = self;
                  self = self.child;
                  continue;
                }
              }
            }
            if (self === list) {
              break;
            }
            for (;null === self.sibling;) {
              if (null === self.return || self.return === list) {
                return null;
              }
              self = self.return;
            }
            self.sibling.return = self.return;
            self = self.sibling;
          }
          return null;
        }
        /**
         * @return {undefined}
         */
        function promote() {
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            /** @type {null} */
            codeSegments[i]._workInProgressVersionPrimary = null;
          }
          /** @type {number} */
          codeSegments.length = 0;
        }
        /**
         * @return {?}
         */
        function each() {
          throw Error(callback(321));
        }
        /**
         * @param {Array} args
         * @param {Object} codeSegments
         * @return {?}
         */
        function pop(args, codeSegments) {
          if (null === codeSegments) {
            return false;
          }
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length && i < args.length;i++) {
            if (!value(args[i], codeSegments[i])) {
              return false;
            }
          }
          return true;
        }
        /**
         * @param {Object} data
         * @param {boolean} optionsString
         * @param {?} fn
         * @param {Object} item
         * @param {?} key
         * @param {number} iterator
         * @return {?}
         */
        function map(data, optionsString, fn, item, key, iterator) {
          if (bitFlag = iterator, option = optionsString, optionsString.memoizedState = null, optionsString.updateQueue = null, optionsString.lanes = 0, that.current = null === data || null === data.memoizedState ? parameterMap : current, data = fn(item, key), stack) {
            /** @type {number} */
            iterator = 0;
            do {
              if (stack = false, noaccum = 0, 25 <= iterator) {
                throw Error(callback(301));
              }
              iterator += 1;
              /** @type {null} */
              tail = opt = null;
              /** @type {null} */
              optionsString.updateQueue = null;
              that.current = c;
              data = fn(item, key);
            } while (stack);
          }
          if (that.current = conf, optionsString = null !== opt && null !== opt.next, bitFlag = 0, tail = opt = option = null, memory = false, optionsString) {
            throw Error(callback(300));
          }
          return data;
        }
        /**
         * @return {?}
         */
        function ensureCallback() {
          /** @type {boolean} */
          var value = 0 !== noaccum;
          return noaccum = 0, value;
        }
        /**
         * @return {?}
         */
        function flag() {
          var next = {
            memoizedState : null,
            baseState : null,
            baseQueue : null,
            queue : null,
            next : null
          };
          return null === tail ? option.memoizedState = tail = next : tail = tail.next = next, tail;
        }
        /**
         * @return {?}
         */
        function synchronize() {
          if (null === opt) {
            var next = option.alternate;
            next = null !== next ? next.memoizedState : null;
          } else {
            next = opt.next;
          }
          var head = null === tail ? option.memoizedState : tail.next;
          if (null !== head) {
            tail = head;
            opt = next;
          } else {
            if (null === next) {
              throw Error(callback(310));
            }
            next = {
              memoizedState : (opt = next).memoizedState,
              baseState : opt.baseState,
              baseQueue : opt.baseQueue,
              queue : opt.queue,
              next : null
            };
            if (null === tail) {
              option.memoizedState = tail = next;
            } else {
              tail = tail.next = next;
            }
          }
          return tail;
        }
        /**
         * @param {string} value
         * @param {string} fn
         * @return {?}
         */
        function iterator(value, fn) {
          return "function" === typeof fn ? fn(value) : fn;
        }
        /**
         * @param {Object} func
         * @return {?}
         */
        function dispatch(func) {
          var self = synchronize();
          var that = self.queue;
          if (null === that) {
            throw Error(callback(311));
          }
          /** @type {Object} */
          that.lastRenderedReducer = func;
          var x = opt;
          var current = x.baseQueue;
          var item = that.pending;
          if (null !== item) {
            if (null !== current) {
              var tmp = current.next;
              current.next = item.next;
              item.next = tmp;
            }
            x.baseQueue = current = item;
            /** @type {null} */
            that.pending = null;
          }
          if (null !== current) {
            item = current.next;
            x = x.baseState;
            /** @type {null} */
            var element = tmp = null;
            /** @type {null} */
            var $scope = null;
            var v = item;
            do {
              var bit = v.lane;
              if ((bitFlag & bit) === bit) {
                if (null !== $scope) {
                  $scope = $scope.next = {
                    lane : 0,
                    action : v.action,
                    hasEagerState : v.hasEagerState,
                    eagerState : v.eagerState,
                    next : null
                  };
                }
                x = v.hasEagerState ? v.eagerState : func(x, v.action);
              } else {
                var data = {
                  lane : bit,
                  action : v.action,
                  hasEagerState : v.hasEagerState,
                  eagerState : v.eagerState,
                  next : null
                };
                if (null === $scope) {
                  element = $scope = data;
                  tmp = x;
                } else {
                  $scope = $scope.next = data;
                }
                option.lanes |= bit;
                inParens |= bit;
              }
              v = v.next;
            } while (null !== v && v !== item);
            if (null === $scope) {
              tmp = x;
            } else {
              /** @type {null} */
              $scope.next = element;
            }
            if (!value(x, self.memoizedState)) {
              /** @type {boolean} */
              ref$ = true;
            }
            self.memoizedState = x;
            /** @type {null} */
            self.baseState = tmp;
            /** @type {(null|{action: ??, eagerState: ??, hasEagerState: ??, lane: number, next: (null|?|{action: ??, eagerState: ??, hasEagerState: ??, lane: ??, next: null})})} */
            self.baseQueue = $scope;
            that.lastRenderedState = x;
          }
          if (null !== (func = that.interleaved)) {
            /** @type {Object} */
            current = func;
            do {
              item = current.lane;
              option.lanes |= item;
              inParens |= item;
              current = current.next;
            } while (current !== func);
          } else {
            if (null === current) {
              /** @type {number} */
              that.lanes = 0;
            }
          }
          return[self.memoizedState, that.dispatch];
        }
        /**
         * @param {Object} func
         * @return {?}
         */
        function run(func) {
          var item = synchronize();
          var result = item.queue;
          if (null === result) {
            throw Error(callback(311));
          }
          /** @type {Object} */
          result.lastRenderedReducer = func;
          var msg = result.dispatch;
          var start = result.pending;
          var x = item.memoizedState;
          if (null !== start) {
            /** @type {null} */
            result.pending = null;
            var end = start = start.next;
            do {
              x = func(x, end.action);
              end = end.next;
            } while (end !== start);
            if (!value(x, item.memoizedState)) {
              /** @type {boolean} */
              ref$ = true;
            }
            item.memoizedState = x;
            if (null === item.baseQueue) {
              item.baseState = x;
            }
            result.lastRenderedState = x;
          }
          return[x, msg];
        }
        /**
         * @return {undefined}
         */
        function useMutableSource() {
        }
        /**
         * @param {Object} func
         * @param {Object} fn
         * @return {?}
         */
        function off(func, fn) {
          var args = option;
          var el = synchronize();
          var response = fn();
          /** @type {boolean} */
          var o = !value(el.memoizedState, response);
          if (o && (el.memoizedState = response, ref$ = true), el = el.queue, injectDependencies(plugin.bind(null, args, el, func), [func]), el.getSnapshot !== fn || (o || null !== tail && 1 & tail.memoizedState.tag)) {
            if (args.flags |= 2048, stream(9, me.bind(null, args, el, response, fn), void 0, null), null === p) {
              throw Error(callback(349));
            }
            if (!(0 !== (30 & bitFlag))) {
              exec(args, fn, response);
            }
          }
          return response;
        }
        /**
         * @param {Object} item
         * @param {Object} text
         * @param {Object} data
         * @return {undefined}
         */
        function exec(item, text, data) {
          item.flags |= 16384;
          item = {
            getSnapshot : text,
            value : data
          };
          if (null === (text = option.updateQueue)) {
            text = {
              lastEffect : null,
              stores : null
            };
            /** @type {Object} */
            option.updateQueue = text;
            /** @type {Array} */
            text.stores = [item];
          } else {
            if (null === (data = text.stores)) {
              /** @type {Array} */
              text.stores = [item];
            } else {
              data.push(item);
            }
          }
        }
        /**
         * @param {Object} req
         * @param {(Object|string)} a
         * @param {?} e
         * @param {?} cb
         * @return {undefined}
         */
        function me(req, a, e, cb) {
          a.value = e;
          a.getSnapshot = cb;
          if (is(a)) {
            index(req);
          }
        }
        /**
         * @param {Object} req
         * @param {(Object|string)} res
         * @param {?} original
         * @return {?}
         */
        function plugin(req, res, original) {
          return original(function() {
            if (is(res)) {
              index(req);
            }
          });
        }
        /**
         * @param {(Object|string)} el
         * @return {?}
         */
        function is(el) {
          var s = el.getSnapshot;
          el = el.value;
          try {
            var key = s();
            return!value(el, key);
          } catch (r) {
            return true;
          }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function index(data) {
          var fragment = onsuccess(data, 1);
          if (null !== fragment) {
            getAll(fragment, data, 1, -1);
          }
        }
        /**
         * @param {Object} func
         * @return {?}
         */
        function defer(func) {
          var obj = flag();
          return "function" === typeof func && (func = func()), obj.memoizedState = obj.baseState = func, func = {
            pending : null,
            interleaved : null,
            lanes : 0,
            dispatch : null,
            /** @type {function (string, string): ?} */
            lastRenderedReducer : iterator,
            lastRenderedState : func
          }, obj.queue = func, func = func.dispatch = fetch.bind(null, option, func), [obj.memoizedState, func];
        }
        /**
         * @param {Object} context
         * @param {Object} name
         * @param {Object} options
         * @param {Object} next
         * @return {?}
         */
        function stream(context, name, options, next) {
          return context = {
            tag : context,
            create : name,
            destroy : options,
            deps : next,
            next : null
          }, null === (name = option.updateQueue) ? (name = {
            lastEffect : null,
            stores : null
          }, option.updateQueue = name, name.lastEffect = context.next = context) : null === (options = name.lastEffect) ? name.lastEffect = context.next = context : (next = options.next, options.next = context, context.next = next, name.lastEffect = context), context;
        }
        /**
         * @return {?}
         */
        function module() {
          return synchronize().memoizedState;
        }
        /**
         * @param {number} opt_attributes
         * @param {number} expectedNumberOfNonCommentArgs
         * @param {Object} object
         * @param {Object} args
         * @return {undefined}
         */
        function addListener(opt_attributes, expectedNumberOfNonCommentArgs, object, args) {
          var obj = flag();
          option.flags |= opt_attributes;
          obj.memoizedState = stream(1 | expectedNumberOfNonCommentArgs, object, void 0, void 0 === args ? null : args);
        }
        /**
         * @param {number} expectedNumberOfNonCommentArgs
         * @param {number} opt_attributes
         * @param {Object} config
         * @param {Object} args
         * @return {?}
         */
        function clean(expectedNumberOfNonCommentArgs, opt_attributes, config, args) {
          var s = synchronize();
          args = void 0 === args ? null : args;
          var opts = void 0;
          if (null !== opt) {
            var data = opt.memoizedState;
            if (opts = data.destroy, null !== args && pop(args, data.deps)) {
              return void(s.memoizedState = stream(opt_attributes, config, opts, args));
            }
          }
          option.flags |= expectedNumberOfNonCommentArgs;
          s.memoizedState = stream(1 | opt_attributes, config, opts, args);
        }
        /**
         * @param {Object} func
         * @param {Object} keepData
         * @return {?}
         */
        function once(func, keepData) {
          return addListener(8390656, 8, func, keepData);
        }
        /**
         * @param {Object} func
         * @param {Object} keepData
         * @return {?}
         */
        function injectDependencies(func, keepData) {
          return clean(2048, 8, func, keepData);
        }
        /**
         * @param {Object} func
         * @param {Object} keepData
         * @return {?}
         */
        function runs(func, keepData) {
          return clean(4, 2, func, keepData);
        }
        /**
         * @param {Object} func
         * @param {Object} keepData
         * @return {?}
         */
        function xit(func, keepData) {
          return clean(4, 4, func, keepData);
        }
        /**
         * @param {Object} data
         * @param {Object} callback
         * @return {?}
         */
        function view(data, callback) {
          return "function" === typeof callback ? (data = data(), callback(data), function() {
            callback(null);
          }) : null !== callback && void 0 !== callback ? (data = data(), callback.current = data, function() {
            /** @type {null} */
            callback.current = null;
          }) : void 0;
        }
        /**
         * @param {Object} func
         * @param {Object} keepData
         * @param {Object} node
         * @return {?}
         */
        function visit(func, keepData, node) {
          return node = null !== node && void 0 !== node ? node.concat([func]) : null, clean(4, 4, view.bind(null, keepData, func), node);
        }
        /**
         * @return {undefined}
         */
        function useDebugValue() {
        }
        /**
         * @param {Object} func
         * @param {Object} keepData
         * @return {?}
         */
        function queue(func, keepData) {
          var context = synchronize();
          keepData = void 0 === keepData ? null : keepData;
          var j = context.memoizedState;
          return null !== j && (null !== keepData && pop(keepData, j[1])) ? j[0] : (context.memoizedState = [func, keepData], func);
        }
        /**
         * @param {Object} func
         * @param {Object} keepData
         * @return {?}
         */
        function iterate(func, keepData) {
          var context = synchronize();
          keepData = void 0 === keepData ? null : keepData;
          var j = context.memoizedState;
          return null !== j && (null !== keepData && pop(keepData, j[1])) ? j[0] : (func = func(), context.memoizedState = [func, keepData], func);
        }
        /**
         * @param {?} obj
         * @param {?} val
         * @param {Object} func
         * @return {?}
         */
        function binder(obj, val, func) {
          return 0 === (21 & bitFlag) ? (obj.baseState && (obj.baseState = false, ref$ = true), obj.memoizedState = func) : (value(func, val) || (func = getLocation(), option.lanes |= func, inParens |= func, obj.baseState = true), val);
        }
        /**
         * @param {?} done
         * @param {?} onComplete
         * @return {undefined}
         */
        function finish(done, onComplete) {
          var src = unpipedSource;
          unpipedSource = 0 !== src && 4 > src ? src : 4;
          done(true);
          var i = first.transition;
          first.transition = {};
          try {
            done(false);
            onComplete();
          } finally {
            unpipedSource = src;
            first.transition = i;
          }
        }
        /**
         * @return {?}
         */
        function restart() {
          return synchronize().memoizedState;
        }
        /**
         * @param {Object} val
         * @param {?} children
         * @param {Object} node
         * @return {undefined}
         */
        function node(val, children, node) {
          var deepDataAndEvents = Number(val);
          if (node = {
            lane : deepDataAndEvents,
            action : node,
            hasEagerState : false,
            eagerState : null,
            next : null
          }, unfoldSoak(val)) {
            appendChild(children, node);
          } else {
            if (null !== (node = cloneNode(val, children, node, deepDataAndEvents))) {
              getAll(node, val, deepDataAndEvents, toLowerCase());
              traverseNode(node, children, deepDataAndEvents);
            }
          }
        }
        /**
         * @param {Object} o
         * @param {?} options
         * @param {string} node
         * @return {?}
         */
        function fetch(o, options, node) {
          var deepDataAndEvents = Number(o);
          var next = {
            lane : deepDataAndEvents,
            action : node,
            hasEagerState : false,
            eagerState : null,
            next : null
          };
          if (unfoldSoak(o)) {
            appendChild(options, next);
          } else {
            var cb = o.alternate;
            if (0 === o.lanes && ((null === cb || 0 === cb.lanes) && null !== (cb = options.lastRenderedReducer))) {
              try {
                var val = options.lastRenderedState;
                var x = cb(val, node);
                if (next.hasEagerState = true, next.eagerState = x, value(x, val)) {
                  var state = options.interleaved;
                  return null === state ? (next.next = next, getEnumerableProperties(options)) : (next.next = state.next, state.next = next), void(options.interleaved = next);
                }
              } catch (s) {
              }
            }
            if (null !== (node = cloneNode(o, options, next, deepDataAndEvents))) {
              getAll(node, o, deepDataAndEvents, next = toLowerCase());
              traverseNode(node, options, deepDataAndEvents);
            }
          }
        }
        /**
         * @param {boolean} o
         * @return {?}
         */
        function unfoldSoak(o) {
          var oL = o.alternate;
          return o === option || null !== oL && oL === option;
        }
        /**
         * @param {?} child
         * @param {?} node
         * @return {undefined}
         */
        function appendChild(child, node) {
          /** @type {boolean} */
          stack = memory = true;
          var o = child.pending;
          if (null === o) {
            node.next = node;
          } else {
            node.next = o.next;
            o.next = node;
          }
          child.pending = node;
        }
        /**
         * @param {?} node
         * @param {?} options
         * @param {number} deepDataAndEvents
         * @return {undefined}
         */
        function traverseNode(node, options, deepDataAndEvents) {
          if (0 !== (4194240 & deepDataAndEvents)) {
            var async = options.lanes;
            deepDataAndEvents |= async &= node.pendingLanes;
            /** @type {number} */
            options.lanes = deepDataAndEvents;
            fun(node, deepDataAndEvents);
          }
        }
        /**
         * @param {Object} x
         * @param {Object} v
         * @return {?}
         */
        function debug(x, v) {
          try {
            /** @type {string} */
            var dumped_text = "";
            /** @type {Object} */
            var value = v;
            do {
              dumped_text += dump(value);
              value = value.return;
            } while (value);
            /** @type {string} */
            var stack = dumped_text;
          } catch (ex) {
            /** @type {string} */
            stack = "\nError generating stack: " + ex.message + "\n" + ex.stack;
          }
          return{
            value : x,
            source : v,
            stack : stack,
            digest : null
          };
        }
        /**
         * @param {Object} req
         * @param {string} dataAndEvents
         * @param {Object} opt_attributes
         * @return {?}
         */
        function fallback(req, dataAndEvents, opt_attributes) {
          return{
            value : req,
            source : null,
            stack : null != opt_attributes ? opt_attributes : null,
            digest : null != dataAndEvents ? dataAndEvents : null
          };
        }
        /**
         * @param {number} recurring
         * @param {?} message
         * @return {undefined}
         */
        function equals(recurring, message) {
          try {
            console.error(message.value);
          } catch (t) {
            setTimeout(function() {
              throw t;
            });
          }
        }
        /**
         * @param {number} recurring
         * @param {Element} obj
         * @param {Object} args
         * @return {?}
         */
        function hook(recurring, obj, args) {
          /** @type {number} */
          (args = slice(-1, args)).tag = 3;
          args.payload = {
            element : null
          };
          var mask = obj.value;
          return args.callback = function() {
            if (!Hu) {
              /** @type {boolean} */
              Hu = true;
              transformed = mask;
            }
            equals(0, obj);
          }, args;
        }
        /**
         * @param {Object} event
         * @param {?} item
         * @param {Object} args
         * @return {?}
         */
        function filter(event, item, args) {
          /** @type {number} */
          (args = slice(-1, args)).tag = 3;
          var func = event.type.getDerivedStateFromError;
          if ("function" === typeof func) {
            var name = item.value;
            /**
             * @return {?}
             */
            args.payload = function() {
              return func(name);
            };
            /**
             * @return {undefined}
             */
            args.callback = function() {
              equals(0, item);
            };
          }
          var related = event.stateNode;
          return null !== related && ("function" === typeof related.componentDidCatch && (args.callback = function() {
            equals(0, item);
            if ("function" !== typeof func) {
              if (null === s) {
                s = new Set([this]);
              } else {
                s.add(this);
              }
            }
            var stacktrace = item.stack;
            this.componentDidCatch(item.value, {
              componentStack : null !== stacktrace ? stacktrace : ""
            });
          })), args;
        }
        /**
         * @param {Function} callback
         * @param {?} self
         * @param {number} data
         * @return {undefined}
         */
        function change(callback, self, data) {
          var cache = callback.pingCache;
          if (null === cache) {
            cache = callback.pingCache = new Rule;
            var result = new Set;
            cache.set(self, result);
          } else {
            if (void 0 === (result = cache.get(self))) {
              result = new Set;
              cache.set(self, result);
            }
          }
          if (!result.has(data)) {
            result.add(data);
            callback = open.bind(null, callback, self, data);
            self.then(callback, callback);
          }
        }
        /**
         * @param {Object} i
         * @return {?}
         */
        function toArray(i) {
          do {
            var d;
            if ((d = 13 === i.tag) && (d = null === (d = i.memoizedState) || null !== d.dehydrated), d) {
              return i;
            }
            i = i.return;
          } while (null !== i);
          return null;
        }
        /**
         * @param {?} a
         * @param {?} args
         * @param {Object} node
         * @param {number} recurring
         * @param {?} e
         * @return {?}
         */
        function post(a, args, node, recurring, e) {
          return 0 === (1 & a.mode) ? (a === args ? a.flags |= 65536 : (a.flags |= 128, node.flags |= 131072, node.flags &= -52805, 1 === node.tag && (null === node.alternate ? node.tag = 17 : ((args = slice(-1, 1)).tag = 2, spawn(node, args, 1))), node.lanes |= 1), a) : (a.flags |= 65536, a.lanes = e, a);
        }
        /**
         * @param {Object} item
         * @param {Object} options
         * @param {?} data
         * @param {?} level
         * @return {undefined}
         */
        function request(item, options, data, level) {
          options.child = null === item ? createOptions(options, null, data, level) : indexOf(options, item.child, data, level);
        }
        /**
         * @param {Object} args
         * @param {Object} options
         * @param {Object} fn
         * @param {Object} result
         * @param {string} value
         * @return {?}
         */
        function check(args, options, fn, result, value) {
          fn = fn.render;
          var userId = options.ref;
          return fail(options, value), result = map(args, options, fn, result, userId, value), fn = ensureCallback(), null === args || ref$ ? (truth && (fn && getJSON(options)), options.flags |= 1, request(args, options, result, value), options.child) : (options.updateQueue = args.updateQueue, options.flags &= -2053, args.lanes &= ~value, resolve(args, options, value));
        }
        /**
         * @param {Object} result
         * @param {Object} options
         * @param {Object} b
         * @param {(Object|string)} value
         * @param {string} base
         * @return {?}
         */
        function extend(result, options, b, value, base) {
          if (null === result) {
            var fn = b.type;
            return "function" !== typeof fn || (hasKey(fn) || (void 0 !== fn.defaultProps || (null !== b.compare || void 0 !== b.defaultProps))) ? ((result = $(b.type, null, value, options, options.mode, base)).ref = options.ref, result.return = options, options.child = result) : (options.tag = 15, options.type = fn, execute(result, options, fn, value, base));
          }
          if (fn = result.child, 0 === (result.lanes & base)) {
            var fl = fn.memoizedProps;
            if ((b = null !== (b = b.compare) ? b : isUndefined)(fl, value) && result.ref === options.ref) {
              return resolve(result, options, base);
            }
          }
          return options.flags |= 1, (result = self(fn, value)).ref = options.ref, result.return = options, options.child = result;
        }
        /**
         * @param {Object} data
         * @param {Object} options
         * @param {?} callback
         * @param {(Object|string)} config
         * @param {string} value
         * @return {?}
         */
        function execute(data, options, callback, config, value) {
          if (null !== data) {
            var suiteView = data.memoizedProps;
            if (isUndefined(suiteView, config) && data.ref === options.ref) {
              if (ref$ = false, options.pendingProps = config = suiteView, 0 === (data.lanes & value)) {
                return options.lanes = data.lanes, resolve(data, options, value);
              }
              if (0 !== (131072 & data.flags)) {
                /** @type {boolean} */
                ref$ = true;
              }
            }
          }
          return load(data, options, callback, config, value);
        }
        /**
         * @param {Object} id
         * @param {Object} options
         * @param {number} context
         * @return {?}
         */
        function evaluate(id, options, context) {
          var c = options.pendingProps;
          var pdataCur = c.children;
          var baseLanes = null !== id ? id.memoizedState : null;
          if ("hidden" === c.mode) {
            if (0 === (1 & options.mode)) {
              options.memoizedState = {
                baseLanes : 0,
                cachePool : null,
                transitions : null
              };
              split(Enumerable, part);
              part |= context;
            } else {
              if (0 === (1073741824 & context)) {
                return id = null !== baseLanes ? baseLanes.baseLanes | context : context, options.lanes = options.childLanes = 1073741824, options.memoizedState = {
                  baseLanes : id,
                  cachePool : null,
                  transitions : null
                }, options.updateQueue = null, split(Enumerable, part), part |= id, null;
              }
              options.memoizedState = {
                baseLanes : 0,
                cachePool : null,
                transitions : null
              };
              c = null !== baseLanes ? baseLanes.baseLanes : context;
              split(Enumerable, part);
              part |= c;
            }
          } else {
            if (null !== baseLanes) {
              /** @type {number} */
              c = baseLanes.baseLanes | context;
              /** @type {null} */
              options.memoizedState = null;
            } else {
              /** @type {number} */
              c = context;
            }
            split(Enumerable, part);
            part |= c;
          }
          return request(id, options, pdataCur, context), options.child;
        }
        /**
         * @param {Object} b
         * @param {Object} args
         * @return {undefined}
         */
        function scroll(b, args) {
          var result = args.ref;
          if (null === b && null !== result || null !== b && b.ref !== result) {
            args.flags |= 512;
            args.flags |= 2097152;
          }
        }
        /**
         * @param {Object} args
         * @param {Object} options
         * @param {?} data
         * @param {Object} callback
         * @param {string} value
         * @return {?}
         */
        function load(args, options, data, callback, value) {
          var content = clone(data) ? array : source.current;
          return content = decodeURIComponent(options, content), fail(options, value), data = map(args, options, data, callback, content, value), callback = ensureCallback(), null === args || ref$ ? (truth && (callback && getJSON(options)), options.flags |= 1, request(args, options, data, value), options.child) : (options.updateQueue = args.updateQueue, options.flags &= -2053, args.lanes &= ~value, resolve(args, options, value));
        }
        /**
         * @param {Object} opts
         * @param {Object} options
         * @param {Object} obj
         * @param {boolean} name
         * @param {string} e
         * @return {?}
         */
        function loop(opts, options, obj, name, e) {
          if (clone(obj)) {
            /** @type {boolean} */
            var failuresLink = true;
            tmpl(options);
          } else {
            /** @type {boolean} */
            failuresLink = false;
          }
          if (fail(options, e), null === options.stateNode) {
            ajax(opts, options);
            copy(options, obj, name);
            cb(options, obj, name, e);
            /** @type {boolean} */
            name = true;
          } else {
            if (null === opts) {
              var data = options.stateNode;
              var val = options.memoizedProps;
              data.props = val;
              var iterator = data.context;
              var key = obj.contextType;
              if ("object" === typeof key && null !== key) {
                key = makeIterator(key);
              } else {
                key = decodeURIComponent(options, key = clone(obj) ? array : source.current);
              }
              var params = obj.getDerivedStateFromProps;
              /** @type {boolean} */
              var initial = "function" === typeof params || "function" === typeof data.getSnapshotBeforeUpdate;
              if (!initial) {
                if (!("function" !== typeof data.UNSAFE_componentWillReceiveProps && "function" !== typeof data.componentWillReceiveProps)) {
                  if (val !== name || iterator !== key) {
                    ok(options, data, name, key);
                  }
                }
              }
              /** @type {boolean} */
              tok = false;
              var i = options.memoizedState;
              data.state = i;
              done(options, name, data, e);
              iterator = options.memoizedState;
              if (val !== name || (i !== iterator || (resources.current || tok))) {
                if ("function" === typeof params) {
                  strictEqual(options, obj, params, name);
                  iterator = options.memoizedState;
                }
                if (val = tok || wrap(options, obj, val, name, i, iterator, key)) {
                  if (!initial) {
                    if (!("function" !== typeof data.UNSAFE_componentWillMount && "function" !== typeof data.componentWillMount)) {
                      if ("function" === typeof data.componentWillMount) {
                        data.componentWillMount();
                      }
                      if ("function" === typeof data.UNSAFE_componentWillMount) {
                        data.UNSAFE_componentWillMount();
                      }
                    }
                  }
                  if ("function" === typeof data.componentDidMount) {
                    options.flags |= 4194308;
                  }
                } else {
                  if ("function" === typeof data.componentDidMount) {
                    options.flags |= 4194308;
                  }
                  /** @type {boolean} */
                  options.memoizedProps = name;
                  options.memoizedState = iterator;
                }
                /** @type {boolean} */
                data.props = name;
                data.state = iterator;
                data.context = key;
                name = val;
              } else {
                if ("function" === typeof data.componentDidMount) {
                  options.flags |= 4194308;
                }
                /** @type {boolean} */
                name = false;
              }
            } else {
              data = options.stateNode;
              setOptions(opts, options);
              val = options.memoizedProps;
              key = options.type === options.elementType ? val : require(options.type, val);
              data.props = key;
              initial = options.pendingProps;
              i = data.context;
              if ("object" === typeof(iterator = obj.contextType) && null !== iterator) {
                iterator = makeIterator(iterator);
              } else {
                iterator = decodeURIComponent(options, iterator = clone(obj) ? array : source.current);
              }
              var d = obj.getDerivedStateFromProps;
              if (!(params = "function" === typeof d || "function" === typeof data.getSnapshotBeforeUpdate)) {
                if (!("function" !== typeof data.UNSAFE_componentWillReceiveProps && "function" !== typeof data.componentWillReceiveProps)) {
                  if (val !== initial || i !== iterator) {
                    ok(options, data, name, iterator);
                  }
                }
              }
              /** @type {boolean} */
              tok = false;
              i = options.memoizedState;
              data.state = i;
              done(options, name, data, e);
              var next = options.memoizedState;
              if (val !== initial || (i !== next || (resources.current || tok))) {
                if ("function" === typeof d) {
                  strictEqual(options, obj, d, name);
                  next = options.memoizedState;
                }
                if (key = tok || (wrap(options, obj, key, name, i, next, iterator) || false)) {
                  if (!params) {
                    if (!("function" !== typeof data.UNSAFE_componentWillUpdate && "function" !== typeof data.componentWillUpdate)) {
                      if ("function" === typeof data.componentWillUpdate) {
                        data.componentWillUpdate(name, next, iterator);
                      }
                      if ("function" === typeof data.UNSAFE_componentWillUpdate) {
                        data.UNSAFE_componentWillUpdate(name, next, iterator);
                      }
                    }
                  }
                  if ("function" === typeof data.componentDidUpdate) {
                    options.flags |= 4;
                  }
                  if ("function" === typeof data.getSnapshotBeforeUpdate) {
                    options.flags |= 1024;
                  }
                } else {
                  if (!("function" !== typeof data.componentDidUpdate)) {
                    if (!(val === opts.memoizedProps && i === opts.memoizedState)) {
                      options.flags |= 4;
                    }
                  }
                  if (!("function" !== typeof data.getSnapshotBeforeUpdate)) {
                    if (!(val === opts.memoizedProps && i === opts.memoizedState)) {
                      options.flags |= 1024;
                    }
                  }
                  /** @type {boolean} */
                  options.memoizedProps = name;
                  options.memoizedState = next;
                }
                /** @type {boolean} */
                data.props = name;
                data.state = next;
                data.context = iterator;
                name = key;
              } else {
                if (!("function" !== typeof data.componentDidUpdate)) {
                  if (!(val === opts.memoizedProps && i === opts.memoizedState)) {
                    options.flags |= 4;
                  }
                }
                if (!("function" !== typeof data.getSnapshotBeforeUpdate)) {
                  if (!(val === opts.memoizedProps && i === opts.memoizedState)) {
                    options.flags |= 1024;
                  }
                }
                /** @type {boolean} */
                name = false;
              }
            }
          }
          return step(opts, options, obj, name, failuresLink, e);
        }
        /**
         * @param {Object} settings
         * @param {Object} options
         * @param {?} name
         * @param {Object} action
         * @param {boolean} el
         * @param {string} value
         * @return {?}
         */
        function step(settings, options, name, action, el, value) {
          scroll(settings, options);
          /** @type {boolean} */
          var opt_value = 0 !== (128 & options.flags);
          if (!action && !opt_value) {
            return el && go(options, name, false), resolve(settings, options, value);
          }
          action = options.stateNode;
          /** @type {Object} */
          storage.current = options;
          var pdataCur = opt_value && "function" !== typeof name.getDerivedStateFromError ? null : action.render();
          return options.flags |= 1, null !== settings && opt_value ? (options.child = indexOf(options, settings.child, null, value), options.child = indexOf(options, null, pdataCur, value)) : request(settings, options, pdataCur, value), options.memoizedState = action.state, el && go(options, name, true), options.child;
        }
        /**
         * @param {Object} options
         * @return {undefined}
         */
        function main(options) {
          var opts = options.stateNode;
          if (opts.pendingContext) {
            runTest(0, opts.pendingContext, opts.pendingContext !== opts.context);
          } else {
            if (opts.context) {
              runTest(0, opts.context, false);
            }
          }
          merge(options, opts.containerInfo);
        }
        /**
         * @param {Object} target
         * @param {Object} options
         * @param {?} source
         * @param {?} level
         * @param {?} a
         * @return {?}
         */
        function _extend(target, options, source, level, a) {
          return _each(), range(a), options.flags |= 256, request(target, options, source, level), options.child;
        }
        /**
         * @param {(Object|string)} keepData
         * @return {?}
         */
        function serialize(keepData) {
          return{
            baseLanes : keepData,
            cachePool : null,
            transitions : null
          };
        }
        /**
         * @param {Object} value
         * @param {Object} parent
         * @param {(Object|string)} key
         * @return {?}
         */
        function update(value, parent, key) {
          var fn;
          var node = parent.pendingProps;
          var name = item.current;
          /** @type {boolean} */
          var child = false;
          /** @type {boolean} */
          var children = 0 !== (128 & parent.flags);
          if ((fn = children) || (fn = (null === value || null !== value.memoizedState) && 0 !== (2 & name)), fn ? (child = true, parent.flags &= -129) : null !== value && null === value.memoizedState || (name |= 1), split(item, 1 & name), null === value) {
            return save(parent), null !== (value = parent.memoizedState) && null !== (value = value.dehydrated) ? (0 === (1 & parent.mode) ? parent.lanes = 1 : "$!" === value.data ? parent.lanes = 8 : parent.lanes = 1073741824, null) : (children = node.children, value = node.fallback, child ? (node = parent.mode, child = parent.child, children = {
              mode : "hidden",
              children : children
            }, 0 === (1 & node) && null !== child ? (child.childLanes = 0, child.pendingProps = children) : child = show(children, node, 0, null), value = find(value, node, key, null), child.return = parent, value.return = parent, child.sibling = value, parent.child = child, parent.child.memoizedState = serialize(key), parent.memoizedState = q, value) : join(parent, children));
          }
          if (null !== (name = value.memoizedState) && null !== (fn = name.dehydrated)) {
            return function(data, options, o, node, elem, event, key) {
              if (o) {
                return 256 & options.flags ? (options.flags &= -257, generate(data, options, key, node = fallback(Error(callback(422))))) : null !== options.memoizedState ? (options.child = data.child, options.flags |= 128, null) : (event = node.fallback, elem = options.mode, node = show({
                  mode : "visible",
                  children : node.children
                }, elem, 0, null), (event = find(event, elem, key, null)).flags |= 2, node.return = options, event.return = options, node.sibling = event, options.child = node, 0 !== (1 & options.mode) && indexOf(options, data.child, null, key), options.child.memoizedState = serialize(key), options.memoizedState = q, event);
              }
              if (0 === (1 & options.mode)) {
                return generate(data, options, key, null);
              }
              if ("$!" === elem.data) {
                if (node = elem.nextSibling && elem.nextSibling.dataset) {
                  var newNonElement = node.dgst
                }
                return node = newNonElement, generate(data, options, key, node = fallback(event = Error(callback(419)), node, void 0));
              }
              if (newNonElement = 0 !== (key & data.childLanes), ref$ || newNonElement) {
                if (null !== (node = p)) {
                  switch(key & -key) {
                    case 4:
                      /** @type {number} */
                      elem = 2;
                      break;
                    case 16:
                      /** @type {number} */
                      elem = 8;
                      break;
                    case 64:
                    ;
                    case 128:
                    ;
                    case 256:
                    ;
                    case 512:
                    ;
                    case 1024:
                    ;
                    case 2048:
                    ;
                    case 4096:
                    ;
                    case 8192:
                    ;
                    case 16384:
                    ;
                    case 32768:
                    ;
                    case 65536:
                    ;
                    case 131072:
                    ;
                    case 262144:
                    ;
                    case 524288:
                    ;
                    case 1048576:
                    ;
                    case 2097152:
                    ;
                    case 4194304:
                    ;
                    case 8388608:
                    ;
                    case 16777216:
                    ;
                    case 33554432:
                    ;
                    case 67108864:
                      /** @type {number} */
                      elem = 32;
                      break;
                    case 536870912:
                      /** @type {number} */
                      elem = 268435456;
                      break;
                    default:
                      /** @type {number} */
                      elem = 0;
                  }
                  if (0 !== (elem = 0 !== (elem & (node.suspendedLanes | key)) ? 0 : elem)) {
                    if (elem !== event.retryLane) {
                      /** @type {number} */
                      event.retryLane = elem;
                      onsuccess(data, elem);
                      getAll(node, data, elem, -1);
                    }
                  }
                }
                return html(), generate(data, options, key, node = fallback(Error(callback(421))));
              }
              return "$?" === elem.data ? (options.flags |= 128, options.child = data.child, options = $$.bind(null, data), elem._reactRetry = options, null) : (data = event.treeContext, el = text(elem.nextSibling), max = options, truth = true, values = null, null !== data && (result[ri++] = e, result[ri++] = msg, result[ri++] = from, e = data.id, msg = data.overflow, from = options), options = join(options, node.children), options.flags |= 4096, options);
            }(value, parent, children, node, fn, name, key);
          }
          if (child) {
            child = node.fallback;
            children = parent.mode;
            fn = (name = value.child).sibling;
            var data = {
              mode : "hidden",
              children : node.children
            };
            return 0 === (1 & children) && parent.child !== name ? ((node = parent.child).childLanes = 0, node.pendingProps = data, parent.deletions = null) : (node = self(name, data)).subtreeFlags = 14680064 & name.subtreeFlags, null !== fn ? child = self(fn, child) : (child = find(child, children, key, null)).flags |= 2, child.return = parent, node.return = parent, node.sibling = child, parent.child = node, node = child, child = parent.child, children = null === (children = value.child.memoizedState) ? 
            serialize(key) : {
              baseLanes : children.baseLanes | key,
              cachePool : null,
              transitions : children.transitions
            }, child.memoizedState = children, child.childLanes = value.childLanes & ~key, parent.memoizedState = q, node;
          }
          return value = (child = value.child).sibling, node = self(child, {
            mode : "visible",
            children : node.children
          }), 0 === (1 & parent.mode) && (node.lanes = key), node.return = parent, node.sibling = null, null !== value && (null === (key = parent.deletions) ? (parent.deletions = [value], parent.flags |= 16) : key.push(value)), parent.child = node, parent.memoizedState = null, node;
        }
        /**
         * @param {string} obj
         * @param {(Function|string)} items
         * @return {?}
         */
        function join(obj, items) {
          return(items = show({
            mode : "visible",
            children : items
          }, obj.mode, 0, null)).return = obj, obj.child = items;
        }
        /**
         * @param {Object} config
         * @param {string} options
         * @param {(Object|string)} docs
         * @param {Object} A
         * @return {?}
         */
        function generate(config, options, docs, A) {
          return null !== A && range(A), indexOf(options, config.child, null, docs), (config = join(options, options.pendingProps.children)).flags |= 2, options.memoizedState = null, config;
        }
        /**
         * @param {Object} options
         * @param {?} context
         * @param {Object} el
         * @return {undefined}
         */
        function teardown(options, context, el) {
          options.lanes |= context;
          var async = options.alternate;
          if (null !== async) {
            async.lanes |= context;
          }
          jQuery(options.return, context, el);
        }
        /**
         * @param {Object} o
         * @param {boolean} recurring
         * @param {Object} text
         * @param {Object} item
         * @param {string} input
         * @return {undefined}
         */
        function eventType(o, recurring, text, item, input) {
          var data = o.memoizedState;
          if (null === data) {
            o.memoizedState = {
              isBackwards : recurring,
              rendering : null,
              renderingStartTime : 0,
              last : item,
              tail : text,
              tailMode : input
            };
          } else {
            /** @type {boolean} */
            data.isBackwards = recurring;
            /** @type {null} */
            data.rendering = null;
            /** @type {number} */
            data.renderingStartTime = 0;
            /** @type {Object} */
            data.last = item;
            /** @type {Object} */
            data.tail = text;
            /** @type {string} */
            data.tailMode = input;
          }
        }
        /**
         * @param {Object} options
         * @param {Object} option
         * @param {Object} data
         * @return {?}
         */
        function template(options, option, data) {
          var params = option.pendingProps;
          var text = params.revealOrder;
          var format = params.tail;
          if (request(options, option, params.children, data), 0 !== (2 & (params = item.current))) {
            /** @type {number} */
            params = 1 & params | 2;
            option.flags |= 128;
          } else {
            if (null !== options && 0 !== (128 & options.flags)) {
              options = option.child;
              e: for (;null !== options;) {
                if (13 === options.tag) {
                  if (null !== options.memoizedState) {
                    teardown(options, data, option);
                  }
                } else {
                  if (19 === options.tag) {
                    teardown(options, data, option);
                  } else {
                    if (null !== options.child) {
                      /** @type {Object} */
                      options.child.return = options;
                      options = options.child;
                      continue;
                    }
                  }
                }
                if (options === option) {
                  break e;
                }
                for (;null === options.sibling;) {
                  if (null === options.return || options.return === option) {
                    break e;
                  }
                  options = options.return;
                }
                options.sibling.return = options.return;
                options = options.sibling;
              }
            }
            params &= 1;
          }
          if (split(item, params), 0 === (1 & option.mode)) {
            /** @type {null} */
            option.memoizedState = null;
          } else {
            switch(text) {
              case "forwards":
                data = option.child;
                /** @type {null} */
                text = null;
                for (;null !== data;) {
                  if (null !== (options = data.alternate)) {
                    if (null === write(options)) {
                      /** @type {Object} */
                      text = data;
                    }
                  }
                  data = data.sibling;
                }
                if (null === (data = text)) {
                  text = option.child;
                  /** @type {null} */
                  option.child = null;
                } else {
                  text = data.sibling;
                  /** @type {null} */
                  data.sibling = null;
                }
                eventType(option, false, text, data, format);
                break;
              case "backwards":
                /** @type {null} */
                data = null;
                text = option.child;
                /** @type {null} */
                option.child = null;
                for (;null !== text;) {
                  if (null !== (options = text.alternate) && null === write(options)) {
                    option.child = text;
                    break;
                  }
                  options = text.sibling;
                  /** @type {Object} */
                  text.sibling = data;
                  data = text;
                  /** @type {Object} */
                  text = options;
                }
                eventType(option, true, data, null, format);
                break;
              case "together":
                eventType(option, false, null, null, void 0);
                break;
              default:
                /** @type {null} */
                option.memoizedState = null;
            }
          }
          return option.child;
        }
        /**
         * @param {Object} params
         * @param {Object} option
         * @return {undefined}
         */
        function ajax(params, option) {
          if (0 === (1 & option.mode)) {
            if (null !== params) {
              /** @type {null} */
              params.alternate = null;
              /** @type {null} */
              option.alternate = null;
              option.flags |= 2;
            }
          }
        }
        /**
         * @param {Object} options
         * @param {Object} s
         * @param {(Object|string)} obj
         * @return {?}
         */
        function resolve(options, s, obj) {
          if (null !== options && (s.dependencies = options.dependencies), inParens |= s.lanes, 0 === (obj & s.childLanes)) {
            return null;
          }
          if (null !== options && s.child !== options.child) {
            throw Error(callback(153));
          }
          if (null !== s.child) {
            obj = self(options = s.child, options.pendingProps);
            /** @type {(Object|string)} */
            s.child = obj;
            /** @type {Object} */
            obj.return = s;
            for (;null !== options.sibling;) {
              options = options.sibling;
              /** @type {Object} */
              (obj = obj.sibling = self(options, options.pendingProps)).return = s;
            }
            /** @type {null} */
            obj.sibling = null;
          }
          return s.child;
        }
        /**
         * @param {Object} node
         * @param {boolean} recurring
         * @return {undefined}
         */
        function checkConditional(node, recurring) {
          if (!truth) {
            switch(node.tailMode) {
              case "hidden":
                recurring = node.tail;
                /** @type {null} */
                var ctx = null;
                for (;null !== recurring;) {
                  if (null !== recurring.alternate) {
                    /** @type {boolean} */
                    ctx = recurring;
                  }
                  recurring = recurring.sibling;
                }
                if (null === ctx) {
                  /** @type {null} */
                  node.tail = null;
                } else {
                  /** @type {null} */
                  ctx.sibling = null;
                }
                break;
              case "collapsed":
                ctx = node.tail;
                /** @type {null} */
                var cb = null;
                for (;null !== ctx;) {
                  if (null !== ctx.alternate) {
                    cb = ctx;
                  }
                  ctx = ctx.sibling;
                }
                if (null === cb) {
                  if (recurring || null === node.tail) {
                    /** @type {null} */
                    node.tail = null;
                  } else {
                    /** @type {null} */
                    node.tail.sibling = null;
                  }
                } else {
                  /** @type {null} */
                  cb.sibling = null;
                }
              ;
            }
          }
        }
        /**
         * @param {Object} self
         * @return {?}
         */
        function onError(self) {
          /** @type {boolean} */
          var n = null !== self.alternate && self.alternate.child === self.child;
          /** @type {number} */
          var compassResult = 0;
          /** @type {number} */
          var subtreeFlags = 0;
          if (n) {
            var options = self.child;
            for (;null !== options;) {
              compassResult |= options.lanes | options.childLanes;
              subtreeFlags |= 14680064 & options.subtreeFlags;
              subtreeFlags |= 14680064 & options.flags;
              /** @type {Object} */
              options.return = self;
              options = options.sibling;
            }
          } else {
            options = self.child;
            for (;null !== options;) {
              compassResult |= options.lanes | options.childLanes;
              subtreeFlags |= options.subtreeFlags;
              subtreeFlags |= options.flags;
              /** @type {Object} */
              options.return = self;
              options = options.sibling;
            }
          }
          return self.subtreeFlags |= subtreeFlags, self.childLanes = compassResult, n;
        }
        /**
         * @param {Object} p
         * @param {Object} self
         * @param {Object} type
         * @return {?}
         */
        function parse(p, self, type) {
          var data = self.pendingProps;
          switch(encode(self), self.tag) {
            case 2:
            ;
            case 16:
            ;
            case 15:
            ;
            case 0:
            ;
            case 11:
            ;
            case 7:
            ;
            case 8:
            ;
            case 12:
            ;
            case 9:
            ;
            case 14:
              return onError(self), null;
            case 1:
            ;
            case 17:
              return clone(self.type) && shift(), onError(self), null;
            case 3:
              return data = self.stateNode, unique(), forEach(resources), forEach(source), promote(), data.pendingContext && (data.context = data.pendingContext, data.pendingContext = null), null !== p && null !== p.child || (get(self) ? self.flags |= 4 : null === p || (p.memoizedState.isDehydrated && 0 === (256 & self.flags) || (self.flags |= 1024, null !== values && (flatten(values), values = null)))), onError(self), null;
            case 5:
              setter(self);
              var i = trim(params.current);
              if (type = self.type, null !== p && null != self.stateNode) {
                add(p, self, type, data);
                if (p.ref !== self.ref) {
                  self.flags |= 512;
                  self.flags |= 2097152;
                }
              } else {
                if (!data) {
                  if (null === self.stateNode) {
                    throw Error(callback(166));
                  }
                  return onError(self), null;
                }
                if (p = trim(config.current), get(self)) {
                  data = self.stateNode;
                  type = self.type;
                  var node = self.memoizedProps;
                  switch(data[name] = self, data[key] = node, p = 0 !== (1 & self.mode), type) {
                    case "dialog":
                      bind("cancel", data);
                      bind("close", data);
                      break;
                    case "iframe":
                    ;
                    case "object":
                    ;
                    case "embed":
                      bind("load", data);
                      break;
                    case "video":
                    ;
                    case "audio":
                      /** @type {number} */
                      i = 0;
                      for (;i < rest.length;i++) {
                        bind(rest[i], data);
                      }
                      break;
                    case "source":
                      bind("error", data);
                      break;
                    case "img":
                    ;
                    case "image":
                    ;
                    case "link":
                      bind("error", data);
                      bind("load", data);
                      break;
                    case "details":
                      bind("toggle", data);
                      break;
                    case "input":
                      fixNode(data, node);
                      bind("invalid", data);
                      break;
                    case "select":
                      data._wrapperState = {
                        wasMultiple : !!node.multiple
                      };
                      bind("invalid", data);
                      break;
                    case "textarea":
                      insert(data, node);
                      bind("invalid", data);
                  }
                  var obj;
                  for (obj in emit(type, node), i = null, node) {
                    if (node.hasOwnProperty(obj)) {
                      var value = node[obj];
                      if ("children" === obj) {
                        if ("string" === typeof value) {
                          if (data.textContent !== value) {
                            if (true !== node.suppressHydrationWarning) {
                              stringify(data.textContent, value, p);
                            }
                            /** @type {Array} */
                            i = ["children", value];
                          }
                        } else {
                          if ("number" === typeof value) {
                            if (data.textContent !== "" + value) {
                              if (true !== node.suppressHydrationWarning) {
                                stringify(data.textContent, value, p);
                              }
                              /** @type {Array} */
                              i = ["children", "" + value];
                            }
                          }
                        }
                      } else {
                        if (a.hasOwnProperty(obj)) {
                          if (null != value) {
                            if ("onScroll" === obj) {
                              bind("scroll", data);
                            }
                          }
                        }
                      }
                    }
                  }
                  switch(type) {
                    case "input":
                      create(data);
                      getValue(data, node, true);
                      break;
                    case "textarea":
                      create(data);
                      _forEach(data);
                      break;
                    case "select":
                    ;
                    case "option":
                      break;
                    default:
                      if ("function" === typeof node.onClick) {
                        /** @type {function (): undefined} */
                        data.onclick = height;
                      }
                    ;
                  }
                  /** @type {null} */
                  data = i;
                  /** @type {null} */
                  self.updateQueue = data;
                  if (null !== data) {
                    self.flags |= 4;
                  }
                } else {
                  obj = 9 === i.nodeType ? i : i.ownerDocument;
                  if ("http://www.w3.org/1999/xhtml" === p) {
                    p = inArray(type);
                  }
                  if ("http://www.w3.org/1999/xhtml" === p) {
                    if ("script" === type) {
                      /** @type {string} */
                      (p = obj.createElement("div")).innerHTML = "<script>\x3c/script>";
                      p = p.removeChild(p.firstChild);
                    } else {
                      if ("string" === typeof data.is) {
                        p = obj.createElement(type, {
                          is : data.is
                        });
                      } else {
                        p = obj.createElement(type);
                        if ("select" === type) {
                          /** @type {Object} */
                          obj = p;
                          if (data.multiple) {
                            /** @type {boolean} */
                            obj.multiple = true;
                          } else {
                            if (data.size) {
                              obj.size = data.size;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    p = obj.createElementNS(p, type);
                  }
                  /** @type {Object} */
                  p[name] = self;
                  p[key] = data;
                  createNode(p, self);
                  /** @type {Object} */
                  self.stateNode = p;
                  e: {
                    switch(obj = log(type, data), type) {
                      case "dialog":
                        bind("cancel", p);
                        bind("close", p);
                        i = data;
                        break;
                      case "iframe":
                      ;
                      case "object":
                      ;
                      case "embed":
                        bind("load", p);
                        i = data;
                        break;
                      case "video":
                      ;
                      case "audio":
                        /** @type {number} */
                        i = 0;
                        for (;i < rest.length;i++) {
                          bind(rest[i], p);
                        }
                        i = data;
                        break;
                      case "source":
                        bind("error", p);
                        i = data;
                        break;
                      case "img":
                      ;
                      case "image":
                      ;
                      case "link":
                        bind("error", p);
                        bind("load", p);
                        i = data;
                        break;
                      case "details":
                        bind("toggle", p);
                        i = data;
                        break;
                      case "input":
                        fixNode(p, data);
                        i = (0,eval)(p, data);
                        bind("invalid", p);
                        break;
                      case "option":
                      ;
                      default:
                        i = data;
                        break;
                      case "select":
                        p._wrapperState = {
                          wasMultiple : !!data.multiple
                        };
                        i = trigger({}, data, {
                          value : void 0
                        });
                        bind("invalid", p);
                        break;
                      case "textarea":
                        insert(p, data);
                        i = send(p, data);
                        bind("invalid", p);
                    }
                    for (node in emit(type, i), value = i) {
                      if (value.hasOwnProperty(node)) {
                        var val = value[node];
                        if ("style" === node) {
                          setStyle(p, val);
                        } else {
                          if ("dangerouslySetInnerHTML" === node) {
                            if (null != (val = val ? val.__html : void 0)) {
                              expect(p, val);
                            }
                          } else {
                            if ("children" === node) {
                              if ("string" === typeof val) {
                                if ("textarea" !== type || "" !== val) {
                                  createElement(p, val);
                                }
                              } else {
                                if ("number" === typeof val) {
                                  createElement(p, "" + val);
                                }
                              }
                            } else {
                              if ("suppressContentEditableWarning" !== node) {
                                if ("suppressHydrationWarning" !== node) {
                                  if ("autoFocus" !== node) {
                                    if (a.hasOwnProperty(node)) {
                                      if (null != val) {
                                        if ("onScroll" === node) {
                                          bind("scroll", p);
                                        }
                                      }
                                    } else {
                                      if (null != val) {
                                        test(p, node, val, obj);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    switch(type) {
                      case "input":
                        create(p);
                        getValue(p, data, false);
                        break;
                      case "textarea":
                        create(p);
                        _forEach(p);
                        break;
                      case "option":
                        if (null != data.value) {
                          p.setAttribute("value", "" + toString(data.value));
                        }
                        break;
                      case "select":
                        /** @type {boolean} */
                        p.multiple = !!data.multiple;
                        if (null != (node = data.value)) {
                          remove(p, !!data.multiple, node, false);
                        } else {
                          if (null != data.defaultValue) {
                            remove(p, !!data.multiple, data.defaultValue, true);
                          }
                        }
                        break;
                      default:
                        if ("function" === typeof i.onClick) {
                          /** @type {function (): undefined} */
                          p.onclick = height;
                        }
                      ;
                    }
                    switch(type) {
                      case "button":
                      ;
                      case "input":
                      ;
                      case "select":
                      ;
                      case "textarea":
                        /** @type {boolean} */
                        data = !!data.autoFocus;
                        break e;
                      case "img":
                        /** @type {boolean} */
                        data = true;
                        break e;
                      default:
                        /** @type {boolean} */
                        data = false;
                    }
                  }
                  if (data) {
                    self.flags |= 4;
                  }
                }
                if (null !== self.ref) {
                  self.flags |= 512;
                  self.flags |= 2097152;
                }
              }
              return onError(self), null;
            case 6:
              if (p && null != self.stateNode) {
                unbind(0, self, p.memoizedProps, data);
              } else {
                if ("string" !== typeof data && null === self.stateNode) {
                  throw Error(callback(166));
                }
                if (type = trim(params.current), trim(config.current), get(self)) {
                  if (data = self.stateNode, type = self.memoizedProps, data[name] = self, (node = data.nodeValue !== type) && null !== (p = max)) {
                    switch(p.tag) {
                      case 3:
                        stringify(data.nodeValue, type, 0 !== (1 & p.mode));
                        break;
                      case 5:
                        if (true !== p.memoizedProps.suppressHydrationWarning) {
                          stringify(data.nodeValue, type, 0 !== (1 & p.mode));
                        }
                      ;
                    }
                  }
                  if (node) {
                    self.flags |= 4;
                  }
                } else {
                  /** @type {Object} */
                  (data = (9 === type.nodeType ? type : type.ownerDocument).createTextNode(data))[name] = self;
                  self.stateNode = data;
                }
              }
              return onError(self), null;
            case 13:
              if (forEach(item), data = self.memoizedState, null === p || null !== p.memoizedState && null !== p.memoizedState.dehydrated) {
                if (truth && (null !== el && (0 !== (1 & self.mode) && 0 === (128 & self.flags)))) {
                  expand();
                  _each();
                  self.flags |= 98560;
                  /** @type {boolean} */
                  node = false;
                } else {
                  if (node = get(self), null !== data && null !== data.dehydrated) {
                    if (null === p) {
                      if (!node) {
                        throw Error(callback(318));
                      }
                      if (!(node = null !== (node = self.memoizedState) ? node.dehydrated : null)) {
                        throw Error(callback(317));
                      }
                      /** @type {Object} */
                      node[name] = self;
                    } else {
                      _each();
                      if (0 === (128 & self.flags)) {
                        /** @type {null} */
                        self.memoizedState = null;
                      }
                      self.flags |= 4;
                    }
                    onError(self);
                    /** @type {boolean} */
                    node = false;
                  } else {
                    if (null !== values) {
                      flatten(values);
                      /** @type {null} */
                      values = null;
                    }
                    /** @type {boolean} */
                    node = true;
                  }
                }
                if (!node) {
                  return 65536 & self.flags ? self : null;
                }
              }
              return 0 !== (128 & self.flags) ? (self.lanes = type, self) : ((data = null !== data) !== (null !== p && null !== p.memoizedState) && (data && (self.child.flags |= 8192, 0 !== (1 & self.mode) && (null === p || 0 !== (1 & item.current) ? 0 === now && (now = 3) : html()))), null !== self.updateQueue && (self.flags |= 4), onError(self), null);
            case 4:
              return unique(), null === p && match(self.stateNode.containerInfo), onError(self), null;
            case 10:
              return end(self.type._context), onError(self), null;
            case 19:
              if (forEach(item), null === (node = self.memoizedState)) {
                return onError(self), null;
              }
              if (data = 0 !== (128 & self.flags), null === (obj = node.rendering)) {
                if (data) {
                  checkConditional(node, false);
                } else {
                  if (0 !== now || null !== p && 0 !== (128 & p.flags)) {
                    p = self.child;
                    for (;null !== p;) {
                      if (null !== (obj = write(p))) {
                        self.flags |= 128;
                        checkConditional(node, false);
                        if (null !== (data = obj.updateQueue)) {
                          self.updateQueue = data;
                          self.flags |= 4;
                        }
                        /** @type {number} */
                        self.subtreeFlags = 0;
                        /** @type {Object} */
                        data = type;
                        type = self.child;
                        for (;null !== type;) {
                          p = data;
                          (node = type).flags &= 14680066;
                          if (null === (obj = node.alternate)) {
                            /** @type {number} */
                            node.childLanes = 0;
                            /** @type {Object} */
                            node.lanes = p;
                            /** @type {null} */
                            node.child = null;
                            /** @type {number} */
                            node.subtreeFlags = 0;
                            /** @type {null} */
                            node.memoizedProps = null;
                            /** @type {null} */
                            node.memoizedState = null;
                            /** @type {null} */
                            node.updateQueue = null;
                            /** @type {null} */
                            node.dependencies = null;
                            /** @type {null} */
                            node.stateNode = null;
                          } else {
                            node.childLanes = obj.childLanes;
                            node.lanes = obj.lanes;
                            node.child = obj.child;
                            /** @type {number} */
                            node.subtreeFlags = 0;
                            /** @type {null} */
                            node.deletions = null;
                            node.memoizedProps = obj.memoizedProps;
                            node.memoizedState = obj.memoizedState;
                            node.updateQueue = obj.updateQueue;
                            node.type = obj.type;
                            p = obj.dependencies;
                            /** @type {(null|{firstContext: ?, lanes: ?})} */
                            node.dependencies = null === p ? null : {
                              lanes : p.lanes,
                              firstContext : p.firstContext
                            };
                          }
                          type = type.sibling;
                        }
                        return split(item, 1 & item.current | 2), self.child;
                      }
                      p = p.sibling;
                    }
                  }
                  if (null !== node.tail) {
                    if (getTime() > $u) {
                      self.flags |= 128;
                      /** @type {boolean} */
                      data = true;
                      checkConditional(node, false);
                      /** @type {number} */
                      self.lanes = 4194304;
                    }
                  }
                }
              } else {
                if (!data) {
                  if (null !== (p = write(obj))) {
                    if (self.flags |= 128, data = true, null !== (type = p.updateQueue) && (self.updateQueue = type, self.flags |= 4), checkConditional(node, true), null === node.tail && ("hidden" === node.tailMode && (!obj.alternate && !truth))) {
                      return onError(self), null;
                    }
                  } else {
                    if (2 * getTime() - node.renderingStartTime > $u) {
                      if (1073741824 !== type) {
                        self.flags |= 128;
                        /** @type {boolean} */
                        data = true;
                        checkConditional(node, false);
                        /** @type {number} */
                        self.lanes = 4194304;
                      }
                    }
                  }
                }
                if (node.isBackwards) {
                  obj.sibling = self.child;
                  self.child = obj;
                } else {
                  if (null !== (type = node.last)) {
                    type.sibling = obj;
                  } else {
                    self.child = obj;
                  }
                  node.last = obj;
                }
              }
              return null !== node.tail ? (self = node.tail, node.rendering = self, node.tail = self.sibling, node.renderingStartTime = getTime(), self.sibling = null, type = item.current, split(item, data ? 1 & type | 2 : 1 & type), self) : (onError(self), null);
            case 22:
            ;
            case 23:
              return abort(), data = null !== self.memoizedState, null !== p && (null !== p.memoizedState !== data && (self.flags |= 8192)), data && 0 !== (1 & self.mode) ? 0 !== (1073741824 & part) && (onError(self), 6 & self.subtreeFlags && (self.flags |= 8192)) : onError(self), null;
            case 24:
            ;
            case 25:
              return null;
          }
          throw Error(callback(156, self.tag));
        }
        /**
         * @param {number} next
         * @param {Object} node
         * @return {?}
         */
        function publish(next, node) {
          switch(encode(node), node.tag) {
            case 1:
              return clone(node.type) && shift(), 65536 & (next = node.flags) ? (node.flags = -65537 & next | 128, node) : null;
            case 3:
              return unique(), forEach(resources), forEach(source), promote(), 0 !== (65536 & (next = node.flags)) && 0 === (128 & next) ? (node.flags = -65537 & next | 128, node) : null;
            case 5:
              return setter(node), null;
            case 13:
              if (forEach(item), null !== (next = node.memoizedState) && null !== next.dehydrated) {
                if (null === node.alternate) {
                  throw Error(callback(340));
                }
                _each();
              }
              return 65536 & (next = node.flags) ? (node.flags = -65537 & next | 128, node) : null;
            case 19:
              return forEach(item), null;
            case 4:
              return unique(), null;
            case 10:
              return end(node.type._context), null;
            case 22:
            ;
            case 23:
              return abort(), null;
            default:
              return null;
          }
        }
        /**
         * @param {Object} options
         * @param {Object} obj
         * @return {undefined}
         */
        function clear(options, obj) {
          var callback = options.ref;
          if (null !== callback) {
            if ("function" === typeof callback) {
              try {
                callback(null);
              } catch (until) {
                isFunction(options, obj, until);
              }
            } else {
              /** @type {null} */
              callback.current = null;
            }
          }
        }
        /**
         * @param {Object} op
         * @param {Object} obj
         * @param {?} callback
         * @return {undefined}
         */
        function exists(op, obj, callback) {
          try {
            callback();
          } catch (until) {
            isFunction(op, obj, until);
          }
        }
        /**
         * @param {number} opt_attributes
         * @param {Object} o
         * @param {?} target
         * @return {undefined}
         */
        function aug(opt_attributes, o, target) {
          var start = o.updateQueue;
          if (null !== (start = null !== start ? start.lastEffect : null)) {
            var end = start = start.next;
            do {
              if ((end.tag & opt_attributes) === opt_attributes) {
                var restoreScript = end.destroy;
                end.destroy = void 0;
                if (void 0 !== restoreScript) {
                  exists(o, target, restoreScript);
                }
              }
              end = end.next;
            } while (end !== start);
          }
        }
        /**
         * @param {number} opt_attributes
         * @param {Object} b
         * @return {undefined}
         */
        function equal(opt_attributes, b) {
          if (null !== (b = null !== (b = b.updateQueue) ? b.lastEffect : null)) {
            var a = b = b.next;
            do {
              if ((a.tag & opt_attributes) === opt_attributes) {
                var d = a.create;
                a.destroy = d();
              }
              a = a.next;
            } while (a !== b);
          }
        }
        /**
         * @param {Object} item
         * @return {undefined}
         */
        function has(item) {
          var callback = item.ref;
          if (null !== callback) {
            var element = item.stateNode;
            item.tag;
            item = element;
            if ("function" === typeof callback) {
              callback(item);
            } else {
              /** @type {Object} */
              callback.current = item;
            }
          }
        }
        /**
         * @param {Object} node
         * @return {undefined}
         */
        function detachEvent(node) {
          var doc = node.alternate;
          if (null !== doc) {
            /** @type {null} */
            node.alternate = null;
            detachEvent(doc);
          }
          /** @type {null} */
          node.child = null;
          /** @type {null} */
          node.deletions = null;
          /** @type {null} */
          node.sibling = null;
          if (5 === node.tag) {
            if (null !== (doc = node.stateNode)) {
              delete doc[name];
              delete doc[key];
              delete doc[k];
              delete doc[DEFAULT_VIEW];
              delete doc[local];
            }
          }
          /** @type {null} */
          node.stateNode = null;
          /** @type {null} */
          node.return = null;
          /** @type {null} */
          node.dependencies = null;
          /** @type {null} */
          node.memoizedProps = null;
          /** @type {null} */
          node.memoizedState = null;
          /** @type {null} */
          node.pendingProps = null;
          /** @type {null} */
          node.stateNode = null;
          /** @type {null} */
          node.updateQueue = null;
        }
        /**
         * @param {?} obj
         * @return {?}
         */
        function isString(obj) {
          return 5 === obj.tag || (3 === obj.tag || 4 === obj.tag);
        }
        /**
         * @param {Object} node
         * @return {?}
         */
        function isEmpty(node) {
          e: for (;;) {
            for (;null === node.sibling;) {
              if (null === node.return || isString(node.return)) {
                return null;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
            for (;5 !== node.tag && (6 !== node.tag && 18 !== node.tag);) {
              if (2 & node.flags) {
                continue e;
              }
              if (null === node.child || 4 === node.tag) {
                continue e;
              }
              /** @type {Object} */
              node.child.return = node;
              node = node.child;
            }
            if (!(2 & node.flags)) {
              return node.stateNode;
            }
          }
        }
        /**
         * @param {Object} node
         * @param {Object} target
         * @param {Object} el
         * @return {undefined}
         */
        function highlight(node, target, el) {
          var tag = node.tag;
          if (5 === tag || 6 === tag) {
            node = node.stateNode;
            if (target) {
              if (8 === el.nodeType) {
                el.parentNode.insertBefore(node, target);
              } else {
                el.insertBefore(node, target);
              }
            } else {
              if (8 === el.nodeType) {
                (target = el.parentNode).insertBefore(node, el);
              } else {
                (target = el).appendChild(node);
              }
              if (!(null !== (el = el._reactRootContainer) && void 0 !== el)) {
                if (!(null !== target.onclick)) {
                  /** @type {function (): undefined} */
                  target.onclick = height;
                }
              }
            }
          } else {
            if (4 !== tag && null !== (node = node.child)) {
              highlight(node, target, el);
              node = node.sibling;
              for (;null !== node;) {
                highlight(node, target, el);
                node = node.sibling;
              }
            }
          }
        }
        /**
         * @param {Object} node
         * @param {?} position
         * @param {Element} el
         * @return {undefined}
         */
        function removeNode(node, position, el) {
          var tag = node.tag;
          if (5 === tag || 6 === tag) {
            node = node.stateNode;
            if (position) {
              el.insertBefore(node, position);
            } else {
              el.appendChild(node);
            }
          } else {
            if (4 !== tag && null !== (node = node.child)) {
              removeNode(node, position, el);
              node = node.sibling;
              for (;null !== node;) {
                removeNode(node, position, el);
                node = node.sibling;
              }
            }
          }
        }
        /**
         * @param {Object} tag
         * @param {Object} code
         * @param {Object} options
         * @return {undefined}
         */
        function close(tag, code, options) {
          options = options.child;
          for (;null !== options;) {
            destroy(tag, code, options);
            options = options.sibling;
          }
        }
        /**
         * @param {Object} node
         * @param {Object} obj
         * @param {Object} data
         * @return {undefined}
         */
        function destroy(node, obj, data) {
          if (response && "function" === typeof response.onCommitFiberUnmount) {
            try {
              response.onCommitFiberUnmount(content, data);
            } catch (i) {
            }
          }
          switch(data.tag) {
            case 5:
              if (!prev) {
                clear(data, obj);
              }
            ;
            case 6:
              var item = target;
              var v = min;
              /** @type {null} */
              target = null;
              close(node, obj, data);
              min = v;
              if (null !== (target = item)) {
                if (min) {
                  node = target;
                  data = data.stateNode;
                  if (8 === node.nodeType) {
                    node.parentNode.removeChild(data);
                  } else {
                    node.removeChild(data);
                  }
                } else {
                  target.removeChild(data.stateNode);
                }
              }
              break;
            case 18:
              if (null !== target) {
                if (min) {
                  node = target;
                  data = data.stateNode;
                  if (8 === node.nodeType) {
                    format(node.parentNode, data);
                  } else {
                    if (1 === node.nodeType) {
                      format(node, data);
                    }
                  }
                  removeClass(node);
                } else {
                  format(target, data.stateNode);
                }
              }
              break;
            case 4:
              item = target;
              v = min;
              target = data.stateNode.containerInfo;
              /** @type {boolean} */
              min = true;
              close(node, obj, data);
              target = item;
              min = v;
              break;
            case 0:
            ;
            case 11:
            ;
            case 14:
            ;
            case 15:
              if (!prev && (null !== (item = data.updateQueue) && null !== (item = item.lastEffect))) {
                v = item = item.next;
                do {
                  var b = v;
                  var restoreScript = b.destroy;
                  b = b.tag;
                  if (void 0 !== restoreScript) {
                    if (0 !== (2 & b) || 0 !== (4 & b)) {
                      exists(data, obj, restoreScript);
                    }
                  }
                  v = v.next;
                } while (v !== item);
              }
              close(node, obj, data);
              break;
            case 1:
              if (!prev && (clear(data, obj), "function" === typeof(item = data.stateNode).componentWillUnmount)) {
                try {
                  item.props = data.memoizedProps;
                  item.state = data.memoizedState;
                  item.componentWillUnmount();
                } catch (until) {
                  isFunction(data, obj, until);
                }
              }
              close(node, obj, data);
              break;
            case 21:
              close(node, obj, data);
              break;
            case 22:
              if (1 & data.mode) {
                prev = (item = prev) || null !== data.memoizedState;
                close(node, obj, data);
                prev = item;
              } else {
                close(node, obj, data);
              }
              break;
            default:
              close(node, obj, data);
          }
        }
        /**
         * @param {Object} scope
         * @return {undefined}
         */
        function link(scope) {
          var flags = scope.updateQueue;
          if (null !== flags) {
            /** @type {null} */
            scope.updateQueue = null;
            var doc = scope.stateNode;
            if (null === doc) {
              doc = scope.stateNode = new AudioPlayer;
            }
            flags.forEach(function(el) {
              var spy = writeFile.bind(null, scope, el);
              if (!doc.has(el)) {
                doc.add(el);
                el.then(spy, spy);
              }
            });
          }
        }
        /**
         * @param {(Function|string)} data
         * @param {Object} obj
         * @return {undefined}
         */
        function onSuccess(data, obj) {
          var codeSegments = obj.deletions;
          if (null !== codeSegments) {
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              var item = codeSegments[i];
              try {
                /** @type {(Function|string)} */
                var id = data;
                /** @type {Object} */
                var suiteView = obj;
                var self = suiteView;
                e: for (;null !== self;) {
                  switch(self.tag) {
                    case 5:
                      target = self.stateNode;
                      /** @type {boolean} */
                      min = false;
                      break e;
                    case 3:
                    ;
                    case 4:
                      target = self.stateNode.containerInfo;
                      /** @type {boolean} */
                      min = true;
                      break e;
                  }
                  self = self.return;
                }
                if (null === target) {
                  throw Error(callback(160));
                }
                destroy(id, suiteView, item);
                /** @type {null} */
                target = null;
                /** @type {boolean} */
                min = false;
                var wrapper = item.alternate;
                if (null !== wrapper) {
                  /** @type {null} */
                  wrapper.return = null;
                }
                /** @type {null} */
                item.return = null;
              } catch (until) {
                isFunction(item, obj, until);
              }
            }
          }
          if (12854 & obj.subtreeFlags) {
            obj = obj.child;
            for (;null !== obj;) {
              set(obj, data);
              obj = obj.sibling;
            }
          }
        }
        /**
         * @param {Object} item
         * @param {(Function|string)} data
         * @return {undefined}
         */
        function set(item, data) {
          var p = item.alternate;
          var selector = item.flags;
          switch(item.tag) {
            case 0:
            ;
            case 11:
            ;
            case 14:
            ;
            case 15:
              if (onSuccess(data, item), validate(item), 4 & selector) {
                try {
                  aug(3, item, item.return);
                  equal(3, item);
                } catch (until) {
                  isFunction(item, item.return, until);
                }
                try {
                  aug(5, item, item.return);
                } catch (ex) {
                  isFunction(item, item.return, ex);
                }
              }
              break;
            case 1:
              onSuccess(data, item);
              validate(item);
              if (512 & selector) {
                if (null !== p) {
                  clear(p, p.return);
                }
              }
              break;
            case 5:
              if (onSuccess(data, item), validate(item), 512 & selector && (null !== p && clear(p, p.return)), 32 & item.flags) {
                var node = item.stateNode;
                try {
                  createElement(node, "");
                } catch (onsuccess) {
                  isFunction(item, item.return, onsuccess);
                }
              }
              if (4 & selector && null != (node = item.stateNode)) {
                var value = item.memoizedProps;
                var i = null !== p ? p.memoizedProps : value;
                var t = item.type;
                var args = item.updateQueue;
                if (item.updateQueue = null, null !== args) {
                  try {
                    if ("input" === t) {
                      if ("radio" === value.type) {
                        if (null != value.name) {
                          hasClass(node, value);
                        }
                      }
                    }
                    log(t, i);
                    var result = log(t, value);
                    /** @type {number} */
                    i = 0;
                    for (;i < args.length;i += 2) {
                      var path = args[i];
                      var e = args[i + 1];
                      if ("style" === path) {
                        setStyle(node, e);
                      } else {
                        if ("dangerouslySetInnerHTML" === path) {
                          expect(node, e);
                        } else {
                          if ("children" === path) {
                            createElement(node, e);
                          } else {
                            test(node, path, e, result);
                          }
                        }
                      }
                    }
                    switch(t) {
                      case "input":
                        append(node, value);
                        break;
                      case "textarea":
                        setValue(node, value);
                        break;
                      case "select":
                        var o = node._wrapperState.wasMultiple;
                        /** @type {boolean} */
                        node._wrapperState.wasMultiple = !!value.multiple;
                        var c = value.value;
                        if (null != c) {
                          remove(node, !!value.multiple, c, false);
                        } else {
                          if (o !== !!value.multiple) {
                            if (null != value.defaultValue) {
                              remove(node, !!value.multiple, value.defaultValue, true);
                            } else {
                              remove(node, !!value.multiple, value.multiple ? [] : "", false);
                            }
                          }
                        }
                      ;
                    }
                    node[key] = value;
                  } catch (html) {
                    isFunction(item, item.return, html);
                  }
                }
              }
              break;
            case 6:
              if (onSuccess(data, item), validate(item), 4 & selector) {
                if (null === item.stateNode) {
                  throw Error(callback(162));
                }
                node = item.stateNode;
                value = item.memoizedProps;
                try {
                  node.nodeValue = value;
                } catch (re) {
                  isFunction(item, item.return, re);
                }
              }
              break;
            case 3:
              if (onSuccess(data, item), validate(item), 4 & selector && (null !== p && p.memoizedState.isDehydrated)) {
                try {
                  removeClass(data.containerInfo);
                } catch (base64) {
                  isFunction(item, item.return, base64);
                }
              }
              break;
            case 4:
            ;
            default:
              onSuccess(data, item);
              validate(item);
              break;
            case 13:
              onSuccess(data, item);
              validate(item);
              if (8192 & (node = item.child).flags) {
                /** @type {boolean} */
                value = null !== node.memoizedState;
                /** @type {boolean} */
                node.stateNode.isHidden = value;
                if (!!value) {
                  if (!(null !== node.alternate && null !== node.alternate.memoizedState)) {
                    timestamp = getTime();
                  }
                }
              }
              if (4 & selector) {
                link(item);
              }
              break;
            case 22:
              if (path = null !== p && null !== p.memoizedState, 1 & item.mode ? (prev = (result = prev) || path, onSuccess(data, item), prev = result) : onSuccess(data, item), validate(item), 8192 & selector) {
                if (result = null !== item.memoizedState, (item.stateNode.isHidden = result) && (!path && 0 !== (1 & item.mode))) {
                  /** @type {Object} */
                  options = item;
                  path = item.child;
                  for (;null !== path;) {
                    e = options = path;
                    for (;null !== options;) {
                      switch(c = (o = options).child, o.tag) {
                        case 0:
                        ;
                        case 11:
                        ;
                        case 14:
                        ;
                        case 15:
                          aug(4, o, o.return);
                          break;
                        case 1:
                          clear(o, o.return);
                          var s = o.stateNode;
                          if ("function" === typeof s.componentWillUnmount) {
                            selector = o;
                            p = o.return;
                            try {
                              data = selector;
                              s.props = data.memoizedProps;
                              s.state = data.memoizedState;
                              s.componentWillUnmount();
                            } catch (storeName) {
                              isFunction(selector, p, storeName);
                            }
                          }
                          break;
                        case 5:
                          clear(o, o.return);
                          break;
                        case 22:
                          if (null !== o.memoizedState) {
                            isObject(e);
                            continue;
                          }
                        ;
                      }
                      if (null !== c) {
                        c.return = o;
                        options = c;
                      } else {
                        isObject(e);
                      }
                    }
                    path = path.sibling;
                  }
                }
                /** @type {null} */
                path = null;
                /** @type {Object} */
                e = item;
                e: for (;;) {
                  if (5 === e.tag) {
                    if (null === path) {
                      path = e;
                      try {
                        node = e.stateNode;
                        if (result) {
                          if ("function" === typeof(value = node.style).setProperty) {
                            value.setProperty("display", "none", "important");
                          } else {
                            /** @type {string} */
                            value.display = "none";
                          }
                        } else {
                          t = e.stateNode;
                          i = void 0 !== (args = e.memoizedProps.style) && (null !== args && args.hasOwnProperty("display")) ? args.display : null;
                          t.style.display = css("display", i);
                        }
                      } catch (srcProp) {
                        isFunction(item, item.return, srcProp);
                      }
                    }
                  } else {
                    if (6 === e.tag) {
                      if (null === path) {
                        try {
                          e.stateNode.nodeValue = result ? "" : e.memoizedProps;
                        } catch (firstEnd) {
                          isFunction(item, item.return, firstEnd);
                        }
                      }
                    } else {
                      if ((22 !== e.tag && 23 !== e.tag || (null === e.memoizedState || e === item)) && null !== e.child) {
                        e.child.return = e;
                        e = e.child;
                        continue;
                      }
                    }
                  }
                  if (e === item) {
                    break e;
                  }
                  for (;null === e.sibling;) {
                    if (null === e.return || e.return === item) {
                      break e;
                    }
                    if (path === e) {
                      /** @type {null} */
                      path = null;
                    }
                    e = e.return;
                  }
                  if (path === e) {
                    /** @type {null} */
                    path = null;
                  }
                  e.sibling.return = e.return;
                  e = e.sibling;
                }
              }
              break;
            case 19:
              onSuccess(data, item);
              validate(item);
              if (4 & selector) {
                link(item);
              }
            ;
            case 21:
            ;
          }
        }
        /**
         * @param {Object} c
         * @return {undefined}
         */
        function validate(c) {
          var cl = c.flags;
          if (2 & cl) {
            try {
              e: {
                var target = c.return;
                for (;null !== target;) {
                  if (isString(target)) {
                    var parent = target;
                    break e;
                  }
                  target = target.return;
                }
                throw Error(callback(160));
              }
              switch(parent.tag) {
                case 5:
                  var template = parent.stateNode;
                  if (32 & parent.flags) {
                    createElement(template, "");
                    parent.flags &= -33;
                  }
                  removeNode(c, isEmpty(c), template);
                  break;
                case 3:
                ;
                case 4:
                  var failuresLink = parent.stateNode.containerInfo;
                  highlight(c, isEmpty(c), failuresLink);
                  break;
                default:
                  throw Error(callback(161));;
              }
            } catch (until) {
              isFunction(c, c.return, until);
            }
            c.flags &= -3;
          }
          if (4096 & cl) {
            c.flags &= -4097;
          }
        }
        /**
         * @param {Object} result
         * @param {Document} deepDataAndEvents
         * @param {?} a
         * @return {undefined}
         */
        function assertEquals(result, deepDataAndEvents, a) {
          /** @type {Object} */
          options = result;
          enter(result, deepDataAndEvents, a);
        }
        /**
         * @param {Object} obj
         * @param {(Document|Range|TextRange)} deepDataAndEvents
         * @param {?} v02
         * @return {undefined}
         */
        function enter(obj, deepDataAndEvents, v02) {
          /** @type {boolean} */
          var r = 0 !== (1 & obj.mode);
          for (;null !== options;) {
            var params = options;
            var opts = params.child;
            if (22 === params.tag && r) {
              var x = null !== params.memoizedState || err;
              if (!x) {
                var ex = params.alternate;
                var c = null !== ex && null !== ex.memoizedState || prev;
                ex = err;
                var temp = prev;
                if (err = x, (prev = c) && !temp) {
                  options = params;
                  for (;null !== options;) {
                    c = (x = options).child;
                    if (22 === x.tag && null !== x.memoizedState) {
                      register(params);
                    } else {
                      if (null !== c) {
                        c.return = x;
                        options = c;
                      } else {
                        register(params);
                      }
                    }
                  }
                }
                for (;null !== opts;) {
                  options = opts;
                  enter(opts, deepDataAndEvents, v02);
                  opts = opts.sibling;
                }
                options = params;
                err = ex;
                prev = temp;
              }
              redo(obj);
            } else {
              if (0 !== (8772 & params.subtreeFlags) && null !== opts) {
                opts.return = params;
                options = opts;
              } else {
                redo(obj);
              }
            }
          }
        }
        /**
         * @param {Object} obj
         * @return {undefined}
         */
        function redo(obj) {
          for (;null !== options;) {
            var item = options;
            if (0 !== (8772 & item.flags)) {
              var result = item.alternate;
              try {
                if (0 !== (8772 & item.flags)) {
                  switch(item.tag) {
                    case 0:
                    ;
                    case 11:
                    ;
                    case 15:
                      if (!prev) {
                        equal(5, item);
                      }
                      break;
                    case 1:
                      var jQuery = item.stateNode;
                      if (4 & item.flags && !prev) {
                        if (null === result) {
                          jQuery.componentDidMount();
                        } else {
                          var which = item.elementType === item.type ? result.memoizedProps : require(item.type, result.memoizedProps);
                          jQuery.componentDidUpdate(which, result.memoizedState, jQuery.__reactInternalSnapshotBeforeUpdate);
                        }
                      }
                      var type = item.updateQueue;
                      if (null !== type) {
                        addEventListener(item, type, jQuery);
                      }
                      break;
                    case 3:
                      var config = item.updateQueue;
                      if (null !== config) {
                        if (result = null, null !== item.child) {
                          switch(item.child.tag) {
                            case 5:
                            ;
                            case 1:
                              result = item.child.stateNode;
                          }
                        }
                        addEventListener(item, config, result);
                      }
                      break;
                    case 5:
                      var value = item.stateNode;
                      if (null === result && 4 & item.flags) {
                        result = value;
                        var element = item.memoizedProps;
                        switch(item.type) {
                          case "button":
                          ;
                          case "input":
                          ;
                          case "select":
                          ;
                          case "textarea":
                            if (element.autoFocus) {
                              result.focus();
                            }
                            break;
                          case "img":
                            if (element.src) {
                              result.src = element.src;
                            }
                          ;
                        }
                      }
                      break;
                    case 6:
                    ;
                    case 4:
                    ;
                    case 12:
                    ;
                    case 19:
                    ;
                    case 17:
                    ;
                    case 21:
                    ;
                    case 22:
                    ;
                    case 23:
                    ;
                    case 25:
                      break;
                    case 13:
                      if (null === item.memoizedState) {
                        var context = item.alternate;
                        if (null !== context) {
                          var j = context.memoizedState;
                          if (null !== j) {
                            var rvar = j.dehydrated;
                            if (null !== rvar) {
                              removeClass(rvar);
                            }
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(callback(163));;
                  }
                }
                if (!prev) {
                  if (512 & item.flags) {
                    has(item);
                  }
                }
              } catch (until) {
                isFunction(item, item.return, until);
              }
            }
            if (item === obj) {
              /** @type {null} */
              options = null;
              break;
            }
            if (null !== (result = item.sibling)) {
              result.return = item.return;
              options = result;
              break;
            }
            options = item.return;
          }
        }
        /**
         * @param {?} arg
         * @return {undefined}
         */
        function isObject(arg) {
          for (;null !== options;) {
            var self = options;
            if (self === arg) {
              /** @type {null} */
              options = null;
              break;
            }
            var result = self.sibling;
            if (null !== result) {
              result.return = self.return;
              options = result;
              break;
            }
            options = self.return;
          }
        }
        /**
         * @param {?} p
         * @return {undefined}
         */
        function register(p) {
          for (;null !== options;) {
            var data = options;
            try {
              switch(data.tag) {
                case 0:
                ;
                case 11:
                ;
                case 15:
                  var x = data.return;
                  try {
                    equal(4, data);
                  } catch (until) {
                    isFunction(data, x, until);
                  }
                  break;
                case 1:
                  var method = data.stateNode;
                  if ("function" === typeof method.componentDidMount) {
                    var target = data.return;
                    try {
                      method.componentDidMount();
                    } catch (ex) {
                      isFunction(data, target, ex);
                    }
                  }
                  var a = data.return;
                  try {
                    has(data);
                  } catch (onsuccess) {
                    isFunction(data, a, onsuccess);
                  }
                  break;
                case 5:
                  var expect = data.return;
                  try {
                    has(data);
                  } catch (html) {
                    isFunction(data, expect, html);
                  }
                ;
              }
            } catch (re) {
              isFunction(data, data.return, re);
            }
            if (data === p) {
              /** @type {null} */
              options = null;
              break;
            }
            var c = data.sibling;
            if (null !== c) {
              c.return = data.return;
              options = c;
              break;
            }
            options = data.return;
          }
        }
        /**
         * @return {?}
         */
        function toLowerCase() {
          return 0 !== (6 & errorMessage) ? getTime() : -1 !== stopChange ? stopChange : stopChange = getTime();
        }
        /**
         * @param {Object} data
         * @return {?}
         */
        function Number(data) {
          return 0 === (1 & data.mode) ? 1 : 0 !== (2 & errorMessage) && 0 !== _ ? _ & -_ : null !== pointer.transition ? (0 === targetOrigin && (targetOrigin = getLocation()), targetOrigin) : 0 !== (data = unpipedSource) ? data : data = void 0 === (data = window.event) ? 16 : init(data.type);
        }
        /**
         * @param {string} context
         * @param {Object} fmt
         * @param {number} deepDataAndEvents
         * @param {number} data
         * @return {undefined}
         */
        function getAll(context, fmt, deepDataAndEvents, data) {
          if (50 < Xu) {
            throw Xu = 0, previous = null, Error(callback(185));
          }
          h(context, deepDataAndEvents, data);
          if (!(0 !== (2 & errorMessage) && context === p)) {
            if (context === p) {
              if (0 === (2 & errorMessage)) {
                inPseudo |= deepDataAndEvents;
              }
              if (4 === now) {
                trace(context, _);
              }
            }
            ready(context, data);
            if (1 === deepDataAndEvents) {
              if (0 === errorMessage) {
                if (0 === (1 & fmt.mode)) {
                  $u = getTime() + 500;
                  if (Ul) {
                    apply();
                  }
                }
              }
            }
          }
        }
        /**
         * @param {string} data
         * @param {number} value
         * @return {undefined}
         */
        function ready(data, value) {
          var text = data.callbackNode;
          !function(str, x) {
            var length = str.suspendedLanes;
            var iTop = str.pingedLanes;
            var source = str.expirationTimes;
            var n = str.pendingLanes;
            for (;0 < n;) {
              /** @type {number} */
              var i = 31 - reject(n);
              /** @type {number} */
              var current = 1 << i;
              var min = source[i];
              if (-1 === min) {
                if (!(0 !== (current & length) && 0 === (current & iTop))) {
                  source[i] = _indexOf(current, x);
                }
              } else {
                if (min <= x) {
                  str.expiredLanes |= current;
                }
              }
              n &= ~current;
            }
          }(data, value);
          var result = error(data, data === p ? _ : 0);
          if (0 === result) {
            if (null !== text) {
              isIgnoredComment(text);
            }
            /** @type {null} */
            data.callbackNode = null;
            /** @type {number} */
            data.callbackPriority = 0;
          } else {
            if (value = result & -result, data.callbackPriority !== value) {
              if (null != text && isIgnoredComment(text), 1 === value) {
                if (0 === data.tag) {
                  (function(p) {
                    /** @type {boolean} */
                    Ul = true;
                    when(p);
                  })(onEnd.bind(null, data));
                } else {
                  when(onEnd.bind(null, data));
                }
                every(function() {
                  if (0 === (6 & errorMessage)) {
                    apply();
                  }
                });
                /** @type {null} */
                text = null;
              } else {
                switch(setState(result)) {
                  case 1:
                    text = pdataCur;
                    break;
                  case 4:
                    text = textAlt;
                    break;
                  case 16:
                  ;
                  default:
                    text = txt;
                    break;
                  case 536870912:
                    text = attr;
                }
                text = escape(text, next.bind(null, data));
              }
              /** @type {number} */
              data.callbackPriority = value;
              data.callbackNode = text;
            }
          }
        }
        /**
         * @param {string} data
         * @param {Object} d
         * @return {?}
         */
        function next(data, d) {
          if (stopChange = -1, targetOrigin = 0, 0 !== (6 & errorMessage)) {
            throw Error(callback(327));
          }
          var value = data.callbackNode;
          if (stop() && data.callbackNode !== value) {
            return null;
          }
          var e = error(data, data === p ? _ : 0);
          if (0 === e) {
            return null;
          }
          if (0 !== (30 & e) || (0 !== (e & data.expiredLanes) || d)) {
            d = cleanup(data, e);
          } else {
            d = e;
            var msg = errorMessage;
            errorMessage |= 2;
            var c = $C();
            if (!(p === data && _ === d)) {
              /** @type {null} */
              expectationResult = null;
              $u = getTime() + 500;
              flush(data, d);
            }
            for (;;) {
              try {
                _resolve();
                break;
              } catch (pdataCur) {
                process(data, pdataCur);
              }
            }
            Deferred();
            user.current = c;
            errorMessage = msg;
            if (null !== valid) {
              /** @type {number} */
              d = 0;
            } else {
              /** @type {null} */
              p = null;
              /** @type {number} */
              _ = 0;
              d = now;
            }
          }
          if (0 !== d) {
            if (2 === d && (0 !== (msg = getter(data)) && (e = msg, d = onData(data, msg))), 1 === d) {
              throw value = last, flush(data, 0), trace(data, e), ready(data, getTime()), value;
            }
            if (6 === d) {
              trace(data, e);
            } else {
              if (msg = data.current.alternate, 0 === (30 & e) && (!function(test) {
                var self = test;
                for (;;) {
                  if (16384 & self.flags) {
                    var options = self.updateQueue;
                    if (null !== options && null !== (options = options.stores)) {
                      /** @type {number} */
                      var p = 0;
                      for (;p < options.length;p++) {
                        var val = options[p];
                        var checkDone = val.getSnapshot;
                        val = val.value;
                        try {
                          if (!value(checkDone(), val)) {
                            return false;
                          }
                        } catch (i) {
                          return false;
                        }
                      }
                    }
                  }
                  if (options = self.child, 16384 & self.subtreeFlags && null !== options) {
                    options.return = self;
                    self = options;
                  } else {
                    if (self === test) {
                      break;
                    }
                    for (;null === self.sibling;) {
                      if (null === self.return || self.return === test) {
                        return true;
                      }
                      self = self.return;
                    }
                    self.sibling.return = self.return;
                    self = self.sibling;
                  }
                }
                return true;
              }(msg) && (2 === (d = cleanup(data, e)) && (0 !== (c = getter(data)) && (e = c, d = onData(data, c))), 1 === d))) {
                throw value = last, flush(data, 0), trace(data, e), ready(data, getTime()), value;
              }
              switch(data.finishedWork = msg, data.finishedLanes = e, d) {
                case 0:
                ;
                case 1:
                  throw Error(callback(345));;
                case 2:
                ;
                case 5:
                  success(data, server, expectationResult);
                  break;
                case 3:
                  if (trace(data, e), (130023424 & e) === e && 10 < (d = timestamp + 500 - getTime())) {
                    if (0 !== error(data, 0)) {
                      break;
                    }
                    if (((msg = data.suspendedLanes) & e) !== e) {
                      toLowerCase();
                      data.pingedLanes |= data.suspendedLanes & msg;
                      break;
                    }
                    /** @type {number} */
                    data.timeoutHandle = deepMerge(success.bind(null, data, server, expectationResult), d);
                    break;
                  }
                  success(data, server, expectationResult);
                  break;
                case 4:
                  if (trace(data, e), (4194240 & e) === e) {
                    break;
                  }
                  d = data.eventTimes;
                  /** @type {number} */
                  msg = -1;
                  for (;0 < e;) {
                    /** @type {number} */
                    var a = 31 - reject(e);
                    /** @type {number} */
                    c = 1 << a;
                    if ((a = d[a]) > msg) {
                      msg = a;
                    }
                    e &= ~c;
                  }
                  if (e = msg, 10 < (e = (120 > (e = getTime() - e) ? 120 : 480 > e ? 480 : 1080 > e ? 1080 : 1920 > e ? 1920 : 3E3 > e ? 3E3 : 4320 > e ? 4320 : 1960 * ceil(e / 1960)) - e)) {
                    /** @type {number} */
                    data.timeoutHandle = deepMerge(success.bind(null, data, server, expectationResult), e);
                    break;
                  }
                  success(data, server, expectationResult);
                  break;
                default:
                  throw Error(callback(329));;
              }
            }
          }
          return ready(data, getTime()), data.callbackNode === value ? next.bind(null, data) : null;
        }
        /**
         * @param {Object} data
         * @param {Object} value
         * @return {?}
         */
        function onData(data, value) {
          var result = items;
          return data.current.memoizedState.isDehydrated && (flush(data, value).flags |= 256), 2 !== (data = cleanup(data, value)) && (value = server, server = result, null !== value && flatten(value)), data;
        }
        /**
         * @param {Object} array
         * @return {undefined}
         */
        function flatten(array) {
          if (null === server) {
            /** @type {Object} */
            server = array;
          } else {
            server.push.apply(server, array);
          }
        }
        /**
         * @param {(Array|string)} path
         * @param {number} n
         * @return {undefined}
         */
        function trace(path, n) {
          n &= ~client_flags;
          n &= ~inPseudo;
          path.suspendedLanes |= n;
          path.pingedLanes &= ~n;
          path = path.expirationTimes;
          for (;0 < n;) {
            /** @type {number} */
            var i = 31 - reject(n);
            /** @type {number} */
            var bgid = 1 << i;
            /** @type {number} */
            path[i] = -1;
            n &= ~bgid;
          }
        }
        /**
         * @param {Object} data
         * @return {?}
         */
        function onEnd(data) {
          if (0 !== (6 & errorMessage)) {
            throw Error(callback(327));
          }
          stop();
          var e = error(data, 0);
          if (0 === (1 & e)) {
            return ready(data, getTime()), null;
          }
          var ret = cleanup(data, e);
          if (0 !== data.tag && 2 === ret) {
            var value = getter(data);
            if (0 !== value) {
              e = value;
              ret = onData(data, value);
            }
          }
          if (1 === ret) {
            throw ret = last, flush(data, 0), trace(data, e), ready(data, getTime()), ret;
          }
          if (6 === ret) {
            throw Error(callback(345));
          }
          return data.finishedWork = data.current.alternate, data.finishedLanes = e, success(data, server, expectationResult), ready(data, getTime()), null;
        }
        /**
         * @param {Function} fn
         * @param {Array} context
         * @return {?}
         */
        function on(fn, context) {
          var msg = errorMessage;
          errorMessage |= 1;
          try {
            return fn(context);
          } finally {
            if (0 === (errorMessage = msg)) {
              $u = getTime() + 500;
              if (Ul) {
                apply();
              }
            }
          }
        }
        /**
         * @param {Function} cb
         * @return {?}
         */
        function configure(cb) {
          if (null !== n) {
            if (0 === n.tag) {
              if (0 === (6 & errorMessage)) {
                stop();
              }
            }
          }
          var msg = errorMessage;
          errorMessage |= 1;
          var transition = context.transition;
          var src = unpipedSource;
          try {
            if (context.transition = null, unpipedSource = 1, cb) {
              return cb();
            }
          } finally {
            unpipedSource = src;
            context.transition = transition;
            if (0 === (6 & (errorMessage = msg))) {
              apply();
            }
          }
        }
        /**
         * @return {undefined}
         */
        function abort() {
          part = Enumerable.current;
          forEach(Enumerable);
        }
        /**
         * @param {Object} s
         * @param {Object} c
         * @return {?}
         */
        function flush(s, c) {
          /** @type {null} */
          s.finishedWork = null;
          /** @type {number} */
          s.finishedLanes = 0;
          var d = s.timeoutHandle;
          if (-1 !== d && (s.timeoutHandle = -1, f(d)), null !== valid) {
            d = valid.return;
            for (;null !== d;) {
              var data = d;
              switch(encode(data), data.tag) {
                case 1:
                  if (null !== (data = data.type.childContextTypes)) {
                    if (void 0 !== data) {
                      shift();
                    }
                  }
                  break;
                case 3:
                  unique();
                  forEach(resources);
                  forEach(source);
                  promote();
                  break;
                case 5:
                  setter(data);
                  break;
                case 4:
                  unique();
                  break;
                case 13:
                ;
                case 19:
                  forEach(item);
                  break;
                case 10:
                  end(data.type._context);
                  break;
                case 22:
                ;
                case 23:
                  abort();
              }
              d = d.return;
            }
          }
          if (p = s, valid = s = self(s.current, null), _ = part = c, now = 0, last = null, client_flags = inPseudo = inParens = 0, server = items = null, null !== list) {
            /** @type {number} */
            c = 0;
            for (;c < list.length;c++) {
              if (null !== (data = (d = list[c]).interleaved)) {
                /** @type {null} */
                d.interleaved = null;
                var node = data.next;
                var view = d.pending;
                if (null !== view) {
                  var next = view.next;
                  view.next = node;
                  data.next = next;
                }
                d.pending = data;
              }
            }
            /** @type {null} */
            list = null;
          }
          return s;
        }
        /**
         * @param {string} packet
         * @param {number} data
         * @return {undefined}
         */
        function process(packet, data) {
          for (;;) {
            var module = valid;
            try {
              if (Deferred(), that.current = conf, memory) {
                var context = option.memoizedState;
                for (;null !== context;) {
                  var queue = context.queue;
                  if (null !== queue) {
                    /** @type {null} */
                    queue.pending = null;
                  }
                  context = context.next;
                }
                /** @type {boolean} */
                memory = false;
              }
              if (bitFlag = 0, tail = opt = option = null, stack = false, noaccum = 0, helpers.current = null, null === module || null === module.return) {
                /** @type {number} */
                now = 1;
                /** @type {number} */
                last = data;
                /** @type {null} */
                valid = null;
                break;
              }
              e: {
                /** @type {string} */
                var item = packet;
                var name = module.return;
                var args = module;
                /** @type {number} */
                var value = data;
                if (data = _, args.flags |= 32768, null !== value && ("object" === typeof value && "function" === typeof value.then)) {
                  var f = value;
                  var params = args;
                  var mode = params.tag;
                  if (0 === (1 & params.mode) && (0 === mode || (11 === mode || 15 === mode))) {
                    var l = params.alternate;
                    if (l) {
                      params.updateQueue = l.updateQueue;
                      params.memoizedState = l.memoizedState;
                      params.lanes = l.lanes;
                    } else {
                      /** @type {null} */
                      params.updateQueue = null;
                      /** @type {null} */
                      params.memoizedState = null;
                    }
                  }
                  var a = toArray(name);
                  if (null !== a) {
                    a.flags &= -257;
                    post(a, name, args, 0, data);
                    if (1 & a.mode) {
                      change(item, f, data);
                    }
                    value = f;
                    var seen = (data = a).updateQueue;
                    if (null === seen) {
                      var result = new Set;
                      result.add(value);
                      data.updateQueue = result;
                    } else {
                      seen.add(value);
                    }
                    break e;
                  }
                  if (0 === (1 & data)) {
                    change(item, f, data);
                    html();
                    break e;
                  }
                  /** @type {Error} */
                  value = Error(callback(426));
                } else {
                  if (truth && 1 & args.mode) {
                    var config = toArray(name);
                    if (null !== config) {
                      if (0 === (65536 & config.flags)) {
                        config.flags |= 256;
                      }
                      post(config, name, args, 0, data);
                      range(debug(value, args));
                      break e;
                    }
                  }
                }
                item = value = debug(value, args);
                if (4 !== now) {
                  /** @type {number} */
                  now = 2;
                }
                if (null === items) {
                  /** @type {Array} */
                  items = [item];
                } else {
                  items.push(item);
                }
                item = name;
                do {
                  switch(item.tag) {
                    case 3:
                      item.flags |= 65536;
                      data &= -data;
                      item.lanes |= data;
                      Node(item, hook(0, value, data));
                      break e;
                    case 1:
                      args = value;
                      var type = item.type;
                      var el = item.stateNode;
                      if (0 === (128 & item.flags) && ("function" === typeof type.getDerivedStateFromError || null !== el && ("function" === typeof el.componentDidCatch && (null === s || !s.has(el))))) {
                        item.flags |= 65536;
                        data &= -data;
                        item.lanes |= data;
                        Node(item, filter(item, args, data));
                        break e;
                      }
                    ;
                  }
                  item = item.return;
                } while (null !== item);
              }
              complete(module);
            } catch (tmp) {
              data = tmp;
              if (valid === module) {
                if (null !== module) {
                  valid = module = module.return;
                }
              }
              continue;
            }
            break;
          }
        }
        /**
         * @return {?}
         */
        function $C() {
          var value = user.current;
          return user.current = conf, null === value ? conf : value;
        }
        /**
         * @return {undefined}
         */
        function html() {
          if (!(0 !== now && (3 !== now && 2 !== now))) {
            /** @type {number} */
            now = 4;
          }
          if (!(null === p)) {
            if (!(0 === (268435455 & inParens) && 0 === (268435455 & inPseudo))) {
              trace(p, _);
            }
          }
        }
        /**
         * @param {Object} data
         * @param {Object} o
         * @return {?}
         */
        function cleanup(data, o) {
          var msg = errorMessage;
          errorMessage |= 2;
          var c = $C();
          if (!(p === data && _ === o)) {
            /** @type {null} */
            expectationResult = null;
            flush(data, o);
          }
          for (;;) {
            try {
              all();
              break;
            } catch (pdataCur) {
              process(data, pdataCur);
            }
          }
          if (Deferred(), errorMessage = msg, user.current = c, null !== valid) {
            throw Error(callback(261));
          }
          return p = null, _ = 0, now;
        }
        /**
         * @return {undefined}
         */
        function all() {
          for (;null !== valid;) {
            resolver(valid);
          }
        }
        /**
         * @return {undefined}
         */
        function _resolve() {
          for (;null !== valid && !expr();) {
            resolver(valid);
          }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function resolver(data) {
          var result = render(data.alternate, data, part);
          data.memoizedProps = data.pendingProps;
          if (null === result) {
            complete(data);
          } else {
            valid = result;
          }
          /** @type {null} */
          helpers.current = null;
        }
        /**
         * @param {Object} value
         * @return {?}
         */
        function complete(value) {
          /** @type {Object} */
          var item = value;
          do {
            var result = item.alternate;
            if (value = item.return, 0 === (32768 & item.flags)) {
              if (null !== (result = parse(result, item, part))) {
                return void(valid = result);
              }
            } else {
              if (null !== (result = publish(result, item))) {
                return result.flags &= 32767, void(valid = result);
              }
              if (null === value) {
                return now = 6, void(valid = null);
              }
              value.flags |= 32768;
              /** @type {number} */
              value.subtreeFlags = 0;
              /** @type {null} */
              value.deletions = null;
            }
            if (null !== (item = item.sibling)) {
              return void(valid = item);
            }
            valid = item = value;
          } while (null !== item);
          if (0 === now) {
            /** @type {number} */
            now = 5;
          }
        }
        /**
         * @param {Object} data
         * @param {Object} config
         * @param {Object} result
         * @return {?}
         */
        function success(data, config, result) {
          var udataCur = unpipedSource;
          var transition = context.transition;
          try {
            /** @type {null} */
            context.transition = null;
            /** @type {number} */
            unpipedSource = 1;
            (function(data, a, i, value) {
              do {
                stop();
              } while (null !== n);
              if (0 !== (6 & errorMessage)) {
                throw Error(callback(327));
              }
              i = data.finishedWork;
              var target = data.finishedLanes;
              if (null === i) {
                return null;
              }
              if (data.finishedWork = null, data.finishedLanes = 0, i === data.current) {
                throw Error(callback(177));
              }
              /** @type {null} */
              data.callbackNode = null;
              /** @type {number} */
              data.callbackPriority = 0;
              /** @type {number} */
              var transition = i.lanes | i.childLanes;
              if (function(obj, event) {
                /** @type {number} */
                var state = obj.pendingLanes & ~event;
                /** @type {number} */
                obj.pendingLanes = event;
                /** @type {number} */
                obj.suspendedLanes = 0;
                /** @type {number} */
                obj.pingedLanes = 0;
                obj.expiredLanes &= event;
                obj.mutableReadLanes &= event;
                obj.entangledLanes &= event;
                event = obj.entanglements;
                var old = obj.eventTimes;
                obj = obj.expirationTimes;
                for (;0 < state;) {
                  /** @type {number} */
                  var name = 31 - reject(state);
                  /** @type {number} */
                  var mask = 1 << name;
                  /** @type {number} */
                  event[name] = 0;
                  /** @type {number} */
                  old[name] = -1;
                  /** @type {number} */
                  obj[name] = -1;
                  state &= ~mask;
                }
              }(data, transition), data === p && (valid = p = null, _ = 0), 0 === (2064 & i.subtreeFlags) && 0 === (2064 & i.flags) || (qu || (qu = true, escape(txt, function() {
                return stop(), null;
              }))), transition = 0 !== (15990 & i.flags), 0 !== (15990 & i.subtreeFlags) || transition) {
                transition = context.transition;
                /** @type {null} */
                context.transition = null;
                var src = unpipedSource;
                /** @type {number} */
                unpipedSource = 1;
                var msg = errorMessage;
                errorMessage |= 4;
                /** @type {null} */
                helpers.current = null;
                (function(target, item) {
                  if (_clockseq = clockseq, setField(target = getData())) {
                    if ("selectionStart" in target) {
                      var doc = {
                        start : target.selectionStart,
                        end : target.selectionEnd
                      }
                    } else {
                      e: {
                        var selection = (doc = (doc = target.ownerDocument) && doc.defaultView || window).getSelection && doc.getSelection();
                        if (selection && 0 !== selection.rangeCount) {
                          doc = selection.anchorNode;
                          var index = selection.anchorOffset;
                          var bup = selection.focusNode;
                          selection = selection.focusOffset;
                          try {
                            doc.nodeType;
                            bup.nodeType;
                          } catch (w) {
                            /** @type {null} */
                            doc = null;
                            break e;
                          }
                          /** @type {number} */
                          var i = 0;
                          /** @type {number} */
                          var minIdx = -1;
                          /** @type {number} */
                          var pos = -1;
                          /** @type {number} */
                          var matchedIndex = 0;
                          /** @type {number} */
                          var f = 0;
                          /** @type {Object} */
                          var n = target;
                          /** @type {null} */
                          var a = null;
                          n: for (;;) {
                            var tmp;
                            for (;n !== doc || (0 !== index && 3 !== n.nodeType || (minIdx = i + index)), n !== bup || (0 !== selection && 3 !== n.nodeType || (pos = i + selection)), 3 === n.nodeType && (i += n.nodeValue.length), null !== (tmp = n.firstChild);) {
                              a = n;
                              n = tmp;
                            }
                            for (;;) {
                              if (n === target) {
                                break n;
                              }
                              if (a === doc && (++matchedIndex === index && (minIdx = i)), a === bup && (++f === selection && (pos = i)), null !== (tmp = n.nextSibling)) {
                                break;
                              }
                              a = (n = a).parentNode;
                            }
                            n = tmp;
                          }
                          /** @type {(null|{end: ?, start: ?})} */
                          doc = -1 === minIdx || -1 === pos ? null : {
                            start : minIdx,
                            end : pos
                          };
                        } else {
                          /** @type {null} */
                          doc = null;
                        }
                      }
                    }
                    /** @type {({end: ?, start: ?}|{end: number, start: number})} */
                    doc = doc || {
                      start : 0,
                      end : 0
                    };
                  } else {
                    /** @type {null} */
                    doc = null;
                  }
                  basePrototype = {
                    focusedElem : target,
                    selectionRange : doc
                  };
                  /** @type {boolean} */
                  clockseq = false;
                  /** @type {Object} */
                  options = item;
                  for (;null !== options;) {
                    if (target = (item = options).child, 0 !== (1028 & item.subtreeFlags) && null !== target) {
                      /** @type {Object} */
                      target.return = item;
                      /** @type {Object} */
                      options = target;
                    } else {
                      for (;null !== options;) {
                        item = options;
                        try {
                          var node = item.alternate;
                          if (0 !== (1024 & item.flags)) {
                            switch(item.tag) {
                              case 0:
                              ;
                              case 11:
                              ;
                              case 15:
                              ;
                              case 5:
                              ;
                              case 6:
                              ;
                              case 4:
                              ;
                              case 17:
                                break;
                              case 1:
                                if (null !== node) {
                                  var parent = node.memoizedProps;
                                  var end = node.memoizedState;
                                  var element = item.stateNode;
                                  var source = element.getSnapshotBeforeUpdate(item.elementType === item.type ? parent : require(item.type, parent), end);
                                  element.__reactInternalSnapshotBeforeUpdate = source;
                                }
                                break;
                              case 3:
                                var dom = item.stateNode.containerInfo;
                                if (1 === dom.nodeType) {
                                  /** @type {string} */
                                  dom.textContent = "";
                                } else {
                                  if (9 === dom.nodeType) {
                                    if (dom.documentElement) {
                                      dom.removeChild(dom.documentElement);
                                    }
                                  }
                                }
                                break;
                              default:
                                throw Error(callback(163));;
                            }
                          }
                        } catch (until) {
                          isFunction(item, item.return, until);
                        }
                        if (null !== (target = item.sibling)) {
                          target.return = item.return;
                          /** @type {Object} */
                          options = target;
                          break;
                        }
                        options = item.return;
                      }
                    }
                  }
                  node = fragment;
                  /** @type {boolean} */
                  fragment = false;
                })(data, i);
                set(i, data);
                start(basePrototype);
                /** @type {boolean} */
                clockseq = !!_clockseq;
                /** @type {null} */
                basePrototype = _clockseq = null;
                /** @type {Object} */
                data.current = i;
                assertEquals(i, data, target);
                w();
                errorMessage = msg;
                unpipedSource = src;
                context.transition = transition;
              } else {
                /** @type {Object} */
                data.current = i;
              }
              if (qu && (qu = false, n = data, deep = target), transition = data.pendingLanes, 0 === transition && (s = null), function(data) {
                if (response && "function" === typeof response.onCommitFiberRoot) {
                  try {
                    response.onCommitFiberRoot(content, data, void 0, 128 === (128 & data.current.flags));
                  } catch (n) {
                  }
                }
              }(i.stateNode), ready(data, getTime()), null !== a) {
                value = data.onRecoverableError;
                /** @type {number} */
                i = 0;
                for (;i < a.length;i++) {
                  target = a[i];
                  value(target.value, {
                    componentStack : target.stack,
                    digest : target.digest
                  });
                }
              }
              if (Hu) {
                throw Hu = false, data = transformed, transformed = null, data;
              }
              if (0 !== (1 & deep)) {
                if (0 !== data.tag) {
                  stop();
                }
              }
              transition = data.pendingLanes;
              if (0 !== (1 & transition)) {
                if (data === previous) {
                  Xu++;
                } else {
                  /** @type {number} */
                  Xu = 0;
                  /** @type {Object} */
                  previous = data;
                }
              } else {
                /** @type {number} */
                Xu = 0;
              }
              apply();
            })(data, config, result, udataCur);
          } finally {
            context.transition = transition;
            unpipedSource = udataCur;
          }
          return null;
        }
        /**
         * @return {?}
         */
        function stop() {
          if (null !== n) {
            var t = setState(deep);
            var transition = context.transition;
            var src = unpipedSource;
            try {
              if (context.transition = null, unpipedSource = 16 > t ? 16 : t, null === n) {
                /** @type {boolean} */
                var cleared = false
              } else {
                if (t = n, n = null, deep = 0, 0 !== (6 & errorMessage)) {
                  throw Error(callback(331));
                }
                var msg = errorMessage;
                errorMessage |= 4;
                options = t.current;
                for (;null !== options;) {
                  var o = options;
                  var f = o.child;
                  if (0 !== (16 & options.flags)) {
                    var result = o.deletions;
                    if (null !== result) {
                      /** @type {number} */
                      var i = 0;
                      for (;i < result.length;i++) {
                        var dir = result[i];
                        options = dir;
                        for (;null !== options;) {
                          var doc = options;
                          switch(doc.tag) {
                            case 0:
                            ;
                            case 11:
                            ;
                            case 15:
                              aug(8, doc, o);
                          }
                          var url = doc.child;
                          if (null !== url) {
                            url.return = doc;
                            options = url;
                          } else {
                            for (;null !== options;) {
                              var self = (doc = options).sibling;
                              var target = doc.return;
                              if (detachEvent(doc), doc === dir) {
                                /** @type {null} */
                                options = null;
                                break;
                              }
                              if (null !== self) {
                                self.return = target;
                                options = self;
                                break;
                              }
                              options = target;
                            }
                          }
                        }
                      }
                      var config = o.alternate;
                      if (null !== config) {
                        var node = config.child;
                        if (null !== node) {
                          /** @type {null} */
                          config.child = null;
                          do {
                            var newNonElement = node.sibling;
                            /** @type {null} */
                            node.sibling = null;
                            node = newNonElement;
                          } while (null !== node);
                        }
                      }
                      options = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== f) {
                    f.return = o;
                    options = f;
                  } else {
                    e: for (;null !== options;) {
                      if (0 !== (2048 & (o = options).flags)) {
                        switch(o.tag) {
                          case 0:
                          ;
                          case 11:
                          ;
                          case 15:
                            aug(9, o, o.return);
                        }
                      }
                      var props = o.sibling;
                      if (null !== props) {
                        props.return = o.return;
                        options = props;
                        break e;
                      }
                      options = o.return;
                    }
                  }
                }
                var c = t.current;
                options = c;
                for (;null !== options;) {
                  var d = (f = options).child;
                  if (0 !== (2064 & f.subtreeFlags) && null !== d) {
                    d.return = f;
                    options = d;
                  } else {
                    f = c;
                    e: for (;null !== options;) {
                      if (0 !== (2048 & (result = options).flags)) {
                        try {
                          switch(result.tag) {
                            case 0:
                            ;
                            case 11:
                            ;
                            case 15:
                              equal(9, result);
                          }
                        } catch (until) {
                          isFunction(result, result.return, until);
                        }
                      }
                      if (result === f) {
                        /** @type {null} */
                        options = null;
                        break e;
                      }
                      var map = result.sibling;
                      if (null !== map) {
                        map.return = result.return;
                        options = map;
                        break e;
                      }
                      options = result.return;
                    }
                  }
                }
                if (errorMessage = msg, apply(), response && "function" === typeof response.onPostCommitFiberRoot) {
                  try {
                    response.onPostCommitFiberRoot(content, t);
                  } catch (S) {
                  }
                }
                /** @type {boolean} */
                cleared = true;
              }
              return cleared;
            } finally {
              unpipedSource = src;
              context.transition = transition;
            }
          }
          return false;
        }
        /**
         * @param {Object} node
         * @param {Object} val
         * @param {Object} arg
         * @return {undefined}
         */
        function isNumber(node, val, arg) {
          node = spawn(node, val = hook(0, val = debug(arg, val), 1), 1);
          val = toLowerCase();
          if (null !== node) {
            h(node, 1, val);
            ready(node, val);
          }
        }
        /**
         * @param {Object} val
         * @param {Object} f
         * @param {?} arg
         * @return {undefined}
         */
        function isFunction(val, f, arg) {
          if (3 === val.tag) {
            isNumber(val, val, arg);
          } else {
            for (;null !== f;) {
              if (3 === f.tag) {
                isNumber(f, val, arg);
                break;
              }
              if (1 === f.tag) {
                var args = f.stateNode;
                if ("function" === typeof f.type.getDerivedStateFromError || "function" === typeof args.componentDidCatch && (null === s || !s.has(args))) {
                  f = spawn(f, val = filter(f, val = debug(arg, val), 1), 1);
                  val = toLowerCase();
                  if (null !== f) {
                    h(f, 1, val);
                    ready(f, val);
                  }
                  break;
                }
              }
              f = f.return;
            }
          }
        }
        /**
         * @param {string} data
         * @param {number} id
         * @param {number} flag
         * @return {undefined}
         */
        function open(data, id, flag) {
          var module = data.pingCache;
          if (null !== module) {
            module.delete(id);
          }
          id = toLowerCase();
          data.pingedLanes |= data.suspendedLanes & flag;
          if (p === data) {
            if ((_ & flag) === flag) {
              if (4 === now || 3 === now && ((130023424 & _) === _ && 500 > getTime() - timestamp)) {
                flush(data, 0);
              } else {
                client_flags |= flag;
              }
            }
          }
          ready(data, id);
        }
        /**
         * @param {Object} data
         * @param {number} deepDataAndEvents
         * @return {undefined}
         */
        function setData(data, deepDataAndEvents) {
          if (0 === deepDataAndEvents) {
            if (0 === (1 & data.mode)) {
              /** @type {number} */
              deepDataAndEvents = 1;
            } else {
              deepDataAndEvents = fn;
              if (0 === (130023424 & (fn <<= 1))) {
                /** @type {number} */
                fn = 4194304;
              }
            }
          }
          var pdataOld = toLowerCase();
          if (null !== (data = onsuccess(data, deepDataAndEvents))) {
            h(data, deepDataAndEvents, pdataOld);
            ready(data, pdataOld);
          }
        }
        /**
         * @param {Object} node
         * @return {undefined}
         */
        function $$(node) {
          var len = node.memoizedState;
          /** @type {number} */
          var deepDataAndEvents = 0;
          if (null !== len) {
            deepDataAndEvents = len.retryLane;
          }
          setData(node, deepDataAndEvents);
        }
        /**
         * @param {Object} data
         * @param {?} path
         * @return {undefined}
         */
        function writeFile(data, path) {
          /** @type {number} */
          var modId = 0;
          switch(data.tag) {
            case 13:
              var module = data.stateNode;
              var map = data.memoizedState;
              if (null !== map) {
                modId = map.retryLane;
              }
              break;
            case 19:
              module = data.stateNode;
              break;
            default:
              throw Error(callback(314));;
          }
          if (null !== module) {
            module.delete(path);
          }
          setData(data, modId);
        }
        /**
         * @param {Object} c
         * @param {Function} value
         * @return {?}
         */
        function escape(c, value) {
          return mixin(c, value);
        }
        /**
         * @param {?} html
         * @param {?} event
         * @param {?} fileName
         * @param {?} multiplier
         * @return {undefined}
         */
        function onComplete(html, event, fileName, multiplier) {
          this.tag = html;
          this.key = fileName;
          /** @type {null} */
          this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
          /** @type {number} */
          this.index = 0;
          /** @type {null} */
          this.ref = null;
          this.pendingProps = event;
          /** @type {null} */
          this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
          this.mode = multiplier;
          /** @type {number} */
          this.subtreeFlags = this.flags = 0;
          /** @type {null} */
          this.deletions = null;
          /** @type {number} */
          this.childLanes = this.lanes = 0;
          /** @type {null} */
          this.alternate = null;
        }
        /**
         * @param {number} opt_attributes
         * @param {string} novisibility
         * @param {?} recurring
         * @param {number} callback
         * @return {?}
         */
        function val(opt_attributes, novisibility, recurring, callback) {
          return new onComplete(opt_attributes, novisibility, recurring, callback);
        }
        /**
         * @param {Function} object
         * @return {?}
         */
        function hasKey(object) {
          return!(!(object = object.prototype) || !object.isReactComponent);
        }
        /**
         * @param {Object} options
         * @param {Object} value
         * @return {?}
         */
        function self(options, value) {
          var result = options.alternate;
          return null === result ? ((result = val(options.tag, value, options.key, options.mode)).elementType = options.elementType, result.type = options.type, result.stateNode = options.stateNode, result.alternate = options, options.alternate = result) : (result.pendingProps = value, result.type = options.type, result.flags = 0, result.subtreeFlags = 0, result.deletions = null), result.flags = 14680064 & options.flags, result.childLanes = options.childLanes, result.lanes = options.lanes, result.child = 
          options.child, result.memoizedProps = options.memoizedProps, result.memoizedState = options.memoizedState, result.updateQueue = options.updateQueue, value = options.dependencies, result.dependencies = null === value ? null : {
            lanes : value.lanes,
            firstContext : value.firstContext
          }, result.sibling = options.sibling, result.index = options.index, result.ref = options.ref, result;
        }
        /**
         * @param {Object} value
         * @param {Object} recurring
         * @param {Object} text
         * @param {Object} state
         * @param {number} node
         * @param {?} key
         * @return {?}
         */
        function $(value, recurring, text, state, node, key) {
          /** @type {number} */
          var attributes = 2;
          if (state = value, "function" === typeof value) {
            if (hasKey(value)) {
              /** @type {number} */
              attributes = 1;
            }
          } else {
            if ("string" === typeof value) {
              /** @type {number} */
              attributes = 5;
            } else {
              e: {
                switch(value) {
                  case string:
                    return find(text.children, node, key, recurring);
                  case left:
                    /** @type {number} */
                    attributes = 8;
                    node |= 8;
                    break;
                  case elementType:
                    return(value = val(12, text, recurring, 2 | node)).elementType = elementType, value.lanes = key, value;
                  case right:
                    return(value = val(13, text, recurring, node)).elementType = right, value.lanes = key, value;
                  case center:
                    return(value = val(19, text, recurring, node)).elementType = center, value.lanes = key, value;
                  case UNDOABLE_EVENT:
                    return show(text, node, key, recurring);
                  default:
                    if ("object" === typeof value && null !== value) {
                      switch(value.$$typeof) {
                        case Point:
                          /** @type {number} */
                          attributes = 10;
                          break e;
                        case numericpassword:
                          /** @type {number} */
                          attributes = 9;
                          break e;
                        case checkbox:
                          /** @type {number} */
                          attributes = 11;
                          break e;
                        case radio:
                          /** @type {number} */
                          attributes = 14;
                          break e;
                        case OPEN_EXTERNAL_EVENT:
                          /** @type {number} */
                          attributes = 16;
                          /** @type {null} */
                          state = null;
                          break e;
                      }
                    }
                    throw Error(callback(130, null == value ? value : typeof value, ""));;
                }
              }
            }
          }
          return(recurring = val(attributes, text, recurring, node)).elementType = value, recurring.type = state, recurring.lanes = key, recurring;
        }
        /**
         * @param {Object} value
         * @param {number} elems
         * @param {Object} keepData
         * @param {Object} recurring
         * @return {?}
         */
        function find(value, elems, keepData, recurring) {
          return(value = val(7, value, recurring, elems)).lanes = keepData, value;
        }
        /**
         * @param {Object} value
         * @param {number} elems
         * @param {number} object
         * @param {Object} recurring
         * @return {?}
         */
        function show(value, elems, object, recurring) {
          return(value = val(22, value, recurring, elems)).elementType = UNDOABLE_EVENT, value.lanes = object, value.stateNode = {
            isHidden : false
          }, value;
        }
        /**
         * @param {string} value
         * @param {?} callback
         * @param {string} keepData
         * @return {?}
         */
        function read(value, callback, keepData) {
          return(value = val(6, value, null, callback)).lanes = keepData, value;
        }
        /**
         * @param {Object} context
         * @param {?} text
         * @param {string} keepData
         * @return {?}
         */
        function validator(context, text, keepData) {
          return(text = val(4, null !== context.children ? context.children : [], context.key, text)).lanes = keepData, text.stateNode = {
            containerInfo : context.containerInfo,
            pendingChildren : null,
            implementation : context.implementation
          }, text;
        }
        /**
         * @param {?} tagMap
         * @param {?} tag
         * @param {?} content
         * @param {?} attrs
         * @param {Object} close
         * @return {undefined}
         */
        function tag(tagMap, tag, content, attrs, close) {
          this.tag = tag;
          this.containerInfo = tagMap;
          /** @type {null} */
          this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
          /** @type {number} */
          this.timeoutHandle = -1;
          /** @type {null} */
          this.callbackNode = this.pendingContext = this.context = null;
          /** @type {number} */
          this.callbackPriority = 0;
          this.eventTimes = _set(0);
          this.expirationTimes = _set(-1);
          /** @type {number} */
          this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
          this.entanglements = _set(0);
          this.identifierPrefix = attrs;
          /** @type {Object} */
          this.onRecoverableError = close;
          /** @type {null} */
          this.mutableSourceEagerHydrationData = null;
        }
        /**
         * @param {Object} child
         * @param {number} value
         * @param {boolean} recurring
         * @param {Object} parent
         * @param {number} mayParseLabeledStatementInstead
         * @param {boolean} el
         * @param {number} aDefaultValue
         * @param {string} elem
         * @param {Object} object
         * @return {?}
         */
        function parent(child, value, recurring, parent, mayParseLabeledStatementInstead, el, aDefaultValue, elem, object) {
          return child = new tag(child, value, recurring, elem, object), 1 === value ? (value = 1, true === el && (value |= 8)) : value = 0, el = val(3, null, null, value), child.current = el, el.stateNode = child, el.memoizedState = {
            element : parent,
            isDehydrated : recurring,
            cache : null,
            transitions : null,
            pendingSuspenseBoundaries : null
          }, isDefined(el), child;
        }
        /**
         * @param {?} deepDataAndEvents
         * @param {?} node
         * @param {Object} recurring
         * @return {?}
         */
        function getIndex(deepDataAndEvents, node, recurring) {
          var res = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return{
            $$typeof : LOCATION_CHANGED_EVENT,
            key : null == res ? null : "" + res,
            children : deepDataAndEvents,
            containerInfo : node,
            implementation : recurring
          };
        }
        /**
         * @param {Object} evt
         * @return {?}
         */
        function sort(evt) {
          if (!evt) {
            return ret;
          }
          e: {
            if (replace(evt = evt._reactInternals) !== evt || 1 !== evt.tag) {
              throw Error(callback(170));
            }
            /** @type {Object} */
            var self = evt;
            do {
              switch(self.tag) {
                case 3:
                  self = self.stateNode.context;
                  break e;
                case 1:
                  if (clone(self.type)) {
                    self = self.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
                ;
              }
              self = self.return;
            } while (null !== self);
            throw Error(callback(171));
          }
          if (1 === evt.tag) {
            var method = evt.type;
            if (clone(method)) {
              return loaded(evt, method, self);
            }
          }
          return self;
        }
        /**
         * @param {Object} data
         * @param {Object} callback
         * @param {Object} val
         * @param {number} isXML
         * @param {Object} deepDataAndEvents
         * @param {boolean} args
         * @param {number} recurring
         * @param {string} selector
         * @param {Function} object
         * @return {?}
         */
        function constructor(data, callback, val, isXML, deepDataAndEvents, args, recurring, selector, object) {
          return(data = parent(val, isXML, true, data, 0, args, 0, selector, object)).context = sort(null), val = data.current, (args = slice(isXML = toLowerCase(), deepDataAndEvents = Number(val))).callback = void 0 !== callback && null !== callback ? callback : null, spawn(val, args, deepDataAndEvents), data.current.lanes = deepDataAndEvents, h(data, deepDataAndEvents, isXML), ready(data, isXML), data;
        }
        /**
         * @param {Object} node
         * @param {Object} args
         * @param {Object} recurring
         * @param {Object} callback
         * @return {?}
         */
        function pow(node, args, recurring, callback) {
          var data = args.current;
          var pdataCur = toLowerCase();
          var index = Number(data);
          return recurring = sort(recurring), null === args.context ? args.context = recurring : args.pendingContext = recurring, (args = slice(pdataCur, index)).payload = {
            element : node
          }, null !== (callback = void 0 === callback ? null : callback) && (args.callback = callback), null !== (node = spawn(data, args, index)) && (getAll(node, data, index, pdataCur), bindContent(node, data, index)), index;
        }
        /**
         * @param {Object} options
         * @return {?}
         */
        function dom(options) {
          return(options = options.current).child ? (options.child.tag, options.child.stateNode) : null;
        }
        /**
         * @param {(Function|string)} object
         * @param {number} deepDataAndEvents
         * @return {undefined}
         */
        function forOwn(object, deepDataAndEvents) {
          if (null !== (object = object.memoizedState) && null !== object.dehydrated) {
            var length = object.retryLane;
            object.retryLane = 0 !== length && length < deepDataAndEvents ? length : deepDataAndEvents;
          }
        }
        /**
         * @param {Object} object
         * @param {number} deepDataAndEvents
         * @return {undefined}
         */
        function json(object, deepDataAndEvents) {
          forOwn(object, deepDataAndEvents);
          if (object = object.alternate) {
            forOwn(object, deepDataAndEvents);
          }
        }
        /**
         * @param {string} opt_rightAlign
         * @return {undefined}
         */
        function Renderer(opt_rightAlign) {
          /** @type {string} */
          this._internalRoot = opt_rightAlign;
        }
        /**
         * @param {string} opt_renderer
         * @return {undefined}
         */
        function Item(opt_renderer) {
          /** @type {string} */
          this._internalRoot = opt_renderer;
        }
        /**
         * @param {?} k
         * @return {?}
         */
        function _qwery(k) {
          return!(!k || 1 !== k.nodeType && (9 !== k.nodeType && 11 !== k.nodeType));
        }
        /**
         * @param {Node} dataAndEvents
         * @return {?}
         */
        function _nodeUID(dataAndEvents) {
          return!(!dataAndEvents || 1 !== dataAndEvents.nodeType && (9 !== dataAndEvents.nodeType && (11 !== dataAndEvents.nodeType && (8 !== dataAndEvents.nodeType || " react-mount-point-unstable " !== dataAndEvents.nodeValue))));
        }
        /**
         * @return {undefined}
         */
        function which() {
        }
        /**
         * @param {Object} recurring
         * @param {?} selector
         * @param {Object} node
         * @param {boolean} opt_isDefault
         * @param {Function} test
         * @return {?}
         */
        function compile(recurring, selector, node, opt_isDefault, test) {
          var len = node._reactRootContainer;
          if (len) {
            var i = len;
            if ("function" === typeof test) {
              /** @type {Function} */
              var expected = test;
              /**
               * @return {undefined}
               */
              test = function() {
                var d = dom(i);
                expected.call(d);
              };
            }
            pow(selector, i, recurring, test);
          } else {
            i = function(p, x, recurring, start, c) {
              if (c) {
                if ("function" === typeof start) {
                  /** @type {Function} */
                  var tmp = start;
                  /**
                   * @return {undefined}
                   */
                  start = function() {
                    var d = dom(data);
                    tmp.call(d);
                  };
                }
                var data = constructor(x, start, p, 0, null, false, 0, "", which);
                return p._reactRootContainer = data, p[prop] = data.current, match(8 === p.nodeType ? p.parentNode : p), configure(), data;
              }
              for (;c = p.lastChild;) {
                p.removeChild(c);
              }
              if ("function" === typeof start) {
                /** @type {Function} */
                var block = start;
                /**
                 * @return {undefined}
                 */
                start = function() {
                  var text = dom(val);
                  block.call(text);
                };
              }
              var val = parent(p, 0, false, null, 0, false, 0, "", which);
              return p._reactRootContainer = val, p[prop] = val.current, match(8 === p.nodeType ? p.parentNode : p), configure(function() {
                pow(x, val, recurring, start);
              }), val;
            }(node, selector, recurring, test, opt_isDefault);
          }
          return dom(i);
        }
        var BUI = r(791);
        var cell = r(296);
        var t = new Set;
        var a = {};
        /** @type {boolean} */
        var qsaAvail = !("undefined" === typeof window || ("undefined" === typeof window.document || "undefined" === typeof window.document.createElement));
        /** @type {function (this:Object, *): boolean} */
        var __hasProp = Object.prototype.hasOwnProperty;
        /** @type {RegExp} */
        var rparentsprev = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
        var pairs = {};
        var matchers = {};
        var $cookies = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(key) {
          $cookies[key] = new Image(key, 0, false, key, null, false, false);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(ps) {
          var key = ps[0];
          $cookies[key] = new Image(key, 1, false, ps[1], null, false, false);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(key) {
          $cookies[key] = new Image(key, 2, false, key.toLowerCase(), null, false, false);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(key) {
          $cookies[key] = new Image(key, 2, false, key, null, false, false);
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(key) {
          $cookies[key] = new Image(key, 3, false, key.toLowerCase(), null, false, false);
        });
        ["checked", "multiple", "muted", "selected"].forEach(function(key) {
          $cookies[key] = new Image(key, 3, true, key, null, false, false);
        });
        ["capture", "download"].forEach(function(key) {
          $cookies[key] = new Image(key, 4, false, key, null, false, false);
        });
        ["cols", "rows", "size", "span"].forEach(function(key) {
          $cookies[key] = new Image(key, 6, false, key, null, false, false);
        });
        ["rowSpan", "start"].forEach(function(key) {
          $cookies[key] = new Image(key, 5, false, key.toLowerCase(), null, false, false);
        });
        /** @type {RegExp} */
        var cx = /[\-:]([a-z])/g;
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(text) {
          /** @type {string} */
          var key = text.replace(cx, boundary);
          $cookies[key] = new Image(key, 1, false, text, null, false, false);
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(text) {
          /** @type {string} */
          var key = text.replace(cx, boundary);
          $cookies[key] = new Image(key, 1, false, text, "http://www.w3.org/1999/xlink", false, false);
        });
        ["xml:base", "xml:lang", "xml:space"].forEach(function(text) {
          var key = text.replace(cx, boundary);
          $cookies[key] = new Image(key, 1, false, text, "http://www.w3.org/XML/1998/namespace", false, false);
        });
        ["tabIndex", "crossOrigin"].forEach(function(key) {
          $cookies[key] = new Image(key, 1, false, key.toLowerCase(), null, false, false);
        });
        $cookies.xlinkHref = new Image("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        ["src", "href", "action", "formAction"].forEach(function(key) {
          $cookies[key] = new Image(key, 1, false, key.toLowerCase(), null, true, true);
        });
        var bid = BUI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        var CLOSE_EVENT = Symbol.for("react.element");
        var LOCATION_CHANGED_EVENT = Symbol.for("react.portal");
        var string = Symbol.for("react.fragment");
        var left = Symbol.for("react.strict_mode");
        var elementType = Symbol.for("react.profiler");
        var Point = Symbol.for("react.provider");
        var numericpassword = Symbol.for("react.context");
        var checkbox = Symbol.for("react.forward_ref");
        var right = Symbol.for("react.suspense");
        var center = Symbol.for("react.suspense_list");
        var radio = Symbol.for("react.memo");
        var OPEN_EXTERNAL_EVENT = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        Symbol.for("react.debug_trace_mode");
        var UNDOABLE_EVENT = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden");
        Symbol.for("react.cache");
        Symbol.for("react.tracing_marker");
        var special = Symbol.iterator;
        var str;
        var trigger = Object.assign;
        /** @type {boolean} */
        var U = false;
        /** @type {function (*): boolean} */
        var isArray = Array.isArray;
        var div;
        var Element;
        /** @type {Function} */
        var expect = (Element = function(el, value) {
          if ("http://www.w3.org/2000/svg" !== el.namespaceURI || "innerHTML" in el) {
            /** @type {Object} */
            el.innerHTML = value;
          } else {
            /** @type {string} */
            (div = div || document.createElement("div")).innerHTML = "<svg>" + value.valueOf().toString() + "</svg>";
            value = div.firstChild;
            for (;el.firstChild;) {
              el.removeChild(el.firstChild);
            }
            for (;value.firstChild;) {
              el.appendChild(value.firstChild);
            }
          }
        }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(failures, isXML, dataAndEvents, deepDataAndEvents) {
          MSApp.execUnsafeLocalFunction(function() {
            return Element(failures, isXML);
          });
        } : Element);
        var defaults = {
          animationIterationCount : true,
          aspectRatio : true,
          borderImageOutset : true,
          borderImageSlice : true,
          borderImageWidth : true,
          boxFlex : true,
          boxFlexGroup : true,
          boxOrdinalGroup : true,
          columnCount : true,
          columns : true,
          flex : true,
          flexGrow : true,
          flexPositive : true,
          flexShrink : true,
          flexNegative : true,
          flexOrder : true,
          gridArea : true,
          gridRow : true,
          gridRowEnd : true,
          gridRowSpan : true,
          gridRowStart : true,
          gridColumn : true,
          gridColumnEnd : true,
          gridColumnSpan : true,
          gridColumnStart : true,
          fontWeight : true,
          lineClamp : true,
          lineHeight : true,
          opacity : true,
          order : true,
          orphans : true,
          tabSize : true,
          widows : true,
          zIndex : true,
          zoom : true,
          fillOpacity : true,
          floodOpacity : true,
          stopOpacity : true,
          strokeDasharray : true,
          strokeDashoffset : true,
          strokeMiterlimit : true,
          strokeOpacity : true,
          strokeWidth : true
        };
        /** @type {Array} */
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(defaults).forEach(function(key) {
          prefixes.forEach(function(k) {
            /** @type {string} */
            k = k + key.charAt(0).toUpperCase() + key.substring(1);
            defaults[k] = defaults[key];
          });
        });
        var internalValues = trigger({
          menuitem : true
        }, {
          area : true,
          base : true,
          br : true,
          col : true,
          embed : true,
          hr : true,
          img : true,
          input : true,
          keygen : true,
          link : true,
          meta : true,
          param : true,
          source : true,
          track : true,
          wbr : true
        });
        /** @type {null} */
        var unload = null;
        /** @type {null} */
        var listener = null;
        /** @type {null} */
        var fromIndex = null;
        /** @type {null} */
        var parents = null;
        /** @type {boolean} */
        var Te = false;
        /** @type {boolean} */
        var Me = false;
        if (qsaAvail) {
          try {
            var useCapture = {};
            Object.defineProperty(useCapture, "passive", {
              /**
               * @return {undefined}
               */
              get : function() {
                /** @type {boolean} */
                Me = true;
              }
            });
            window.addEventListener("test", useCapture, useCapture);
            window.removeEventListener("test", useCapture, useCapture);
          } catch (ce) {
            /** @type {boolean} */
            Me = false;
          }
        }
        /** @type {boolean} */
        var Fe = false;
        /** @type {null} */
        var ary = null;
        /** @type {boolean} */
        var De = false;
        /** @type {null} */
        var selector = null;
        var _this = {
          /**
           * @param {Error} obj
           * @return {undefined}
           */
          onError : function(obj) {
            /** @type {boolean} */
            Fe = true;
            /** @type {Error} */
            ary = obj;
          }
        };
        var mixin = cell.unstable_scheduleCallback;
        var isIgnoredComment = cell.unstable_cancelCallback;
        var expr = cell.unstable_shouldYield;
        var w = cell.unstable_requestPaint;
        var getTime = cell.unstable_now;
        var x = cell.unstable_getCurrentPriorityLevel;
        var pdataCur = cell.unstable_ImmediatePriority;
        var textAlt = cell.unstable_UserBlockingPriority;
        var txt = cell.unstable_NormalPriority;
        var td = cell.unstable_LowPriority;
        var attr = cell.unstable_IdlePriority;
        /** @type {null} */
        var content = null;
        /** @type {null} */
        var response = null;
        var reject = Math.clz32 ? Math.clz32 : function(name) {
          return name >>>= 0, 0 === name ? 32 : 31 - (ondata(name) / fround | 0) | 0;
        };
        /** @type {function (*): number} */
        var ondata = Math.log;
        /** @type {number} */
        var fround = Math.LN2;
        /** @type {number} */
        var YY_START = 64;
        /** @type {number} */
        var fn = 4194304;
        /** @type {number} */
        var unpipedSource = 0;
        var completed;
        var onload;
        var reset;
        var throttledUpdate;
        var sync;
        /** @type {boolean} */
        var Nn = false;
        /** @type {Array} */
        var resultItems = [];
        /** @type {null} */
        var qualifier = null;
        /** @type {null} */
        var event = null;
        /** @type {null} */
        var ev = null;
        var m = new Map;
        var instance = new Map;
        /** @type {Array} */
        var arr = [];
        /** @type {Array.<string>} */
        var whitespace = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        var support = bid.ReactCurrentBatchConfig;
        /** @type {boolean} */
        var clockseq = true;
        /** @type {null} */
        var typePattern = null;
        /** @type {null} */
        var element = null;
        /** @type {null} */
        var destination = null;
        /** @type {null} */
        var pt = null;
        var useCnvt;
        var hasCnvt;
        var action;
        var cycle = {
          eventPhase : 0,
          bubbles : 0,
          cancelable : 0,
          /**
           * @param {Event} event
           * @return {?}
           */
          timeStamp : function(event) {
            return event.timeStamp || Date.now();
          },
          defaultPrevented : 0,
          isTrusted : 0
        };
        var CustomEvent = Event(cycle);
        var dblclick = trigger({}, cycle, {
          view : 0,
          detail : 0
        });
        var b = Event(dblclick);
        var ajaxSuccess = trigger({}, dblclick, {
          screenX : 0,
          screenY : 0,
          clientX : 0,
          clientY : 0,
          pageX : 0,
          pageY : 0,
          ctrlKey : 0,
          shiftKey : 0,
          altKey : 0,
          metaKey : 0,
          /** @type {function (): ?} */
          getModifierState : getModifierState,
          button : 0,
          buttons : 0,
          /**
           * @param {Event} event
           * @return {?}
           */
          relatedTarget : function(event) {
            return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
          },
          /**
           * @param {Object} t
           * @return {?}
           */
          movementX : function(t) {
            return "movementX" in t ? t.movementX : (t !== action && (action && "mousemove" === t.type ? (useCnvt = t.screenX - action.screenX, hasCnvt = t.screenY - action.screenY) : hasCnvt = useCnvt = 0, action = t), useCnvt);
          },
          /**
           * @param {Object} event
           * @return {?}
           */
          movementY : function(event) {
            return "movementY" in event ? event.movementY : hasCnvt;
          }
        });
        var NULL = Event(ajaxSuccess);
        var ignore = Event(trigger({}, ajaxSuccess, {
          dataTransfer : 0
        }));
        var defValue = Event(trigger({}, dblclick, {
          relatedTarget : 0
        }));
        var token = Event(trigger({}, cycle, {
          animationName : 0,
          elapsedTime : 0,
          pseudoElement : 0
        }));
        var eventProps = trigger({}, cycle, {
          /**
           * @param {Window} e
           * @return {?}
           */
          clipboardData : function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
          }
        });
        var errorName = Event(eventProps);
        var Player = Event(trigger({}, cycle, {
          data : 0
        }));
        var handlers = {
          Esc : "Escape",
          Spacebar : " ",
          Left : "ArrowLeft",
          Up : "ArrowUp",
          Right : "ArrowRight",
          Down : "ArrowDown",
          Del : "Delete",
          Win : "OS",
          Menu : "ContextMenu",
          Apps : "ContextMenu",
          Scroll : "ScrollLock",
          MozPrintableKey : "Unidentified"
        };
        var keytable = {
          8 : "Backspace",
          9 : "Tab",
          12 : "Clear",
          13 : "Enter",
          16 : "Shift",
          17 : "Control",
          18 : "Alt",
          19 : "Pause",
          20 : "CapsLock",
          27 : "Escape",
          32 : " ",
          33 : "PageUp",
          34 : "PageDown",
          35 : "End",
          36 : "Home",
          37 : "ArrowLeft",
          38 : "ArrowUp",
          39 : "ArrowRight",
          40 : "ArrowDown",
          45 : "Insert",
          46 : "Delete",
          112 : "F1",
          113 : "F2",
          114 : "F3",
          115 : "F4",
          116 : "F5",
          117 : "F6",
          118 : "F7",
          119 : "F8",
          120 : "F9",
          121 : "F10",
          122 : "F11",
          123 : "F12",
          144 : "NumLock",
          145 : "ScrollLock",
          224 : "Meta"
        };
        var events = {
          Alt : "altKey",
          Control : "ctrlKey",
          Meta : "metaKey",
          Shift : "shiftKey"
        };
        var deferred = trigger({}, dblclick, {
          /**
           * @param {Object} e
           * @return {?}
           */
          key : function(e) {
            if (e.key) {
              var j = handlers[e.key] || e.key;
              if ("Unidentified" !== j) {
                return j;
              }
            }
            return "keypress" === e.type ? 13 === (e = fixEvent(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? keytable[e.keyCode] || "Unidentified" : "";
          },
          code : 0,
          location : 0,
          ctrlKey : 0,
          shiftKey : 0,
          altKey : 0,
          metaKey : 0,
          repeat : 0,
          locale : 0,
          /** @type {function (): ?} */
          getModifierState : getModifierState,
          /**
           * @param {Object} e
           * @return {?}
           */
          charCode : function(e) {
            return "keypress" === e.type ? fixEvent(e) : 0;
          },
          /**
           * @param {Object} e
           * @return {?}
           */
          keyCode : function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          /**
           * @param {Object} e
           * @return {?}
           */
          which : function(e) {
            return "keypress" === e.type ? fixEvent(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          }
        });
        var i = Event(deferred);
        var v = Event(trigger({}, ajaxSuccess, {
          pointerId : 0,
          width : 0,
          height : 0,
          pressure : 0,
          tangentialPressure : 0,
          tiltX : 0,
          tiltY : 0,
          twist : 0,
          pointerType : 0,
          isPrimary : 0
        }));
        var EMPTY_STRING = Event(trigger({}, dblclick, {
          touches : 0,
          targetTouches : 0,
          changedTouches : 0,
          altKey : 0,
          metaKey : 0,
          ctrlKey : 0,
          shiftKey : 0,
          /** @type {function (): ?} */
          getModifierState : getModifierState
        }));
        var allProps = Event(trigger({}, cycle, {
          propertyName : 0,
          elapsedTime : 0,
          pseudoElement : 0
        }));
        var nodes = trigger({}, ajaxSuccess, {
          /**
           * @param {Object} event
           * @return {?}
           */
          deltaX : function(event) {
            return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
          },
          /**
           * @param {Object} event
           * @return {?}
           */
          deltaY : function(event) {
            return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
          },
          deltaZ : 0,
          deltaMode : 0
        });
        var deps = Event(nodes);
        /** @type {Array} */
        var hotkeys = [9, 13, 27, 32];
        /** @type {boolean} */
        var inst = qsaAvail && "CompositionEvent" in window;
        /** @type {null} */
        var _ref = null;
        if (qsaAvail) {
          if ("documentMode" in document) {
            _ref = document.documentMode;
          }
        }
        /** @type {boolean} */
        var message = qsaAvail && ("TextEvent" in window && !_ref);
        var elementEvent = qsaAvail && (!inst || _ref && (8 < _ref && 11 >= _ref));
        /** @type {string} */
        var ENTER_KEY = String.fromCharCode(32);
        /** @type {boolean} */
        var todoText = false;
        /** @type {boolean} */
        var onCompositionStart = false;
        var types = {
          color : true,
          date : true,
          datetime : true,
          "datetime-local" : true,
          email : true,
          month : true,
          number : true,
          password : true,
          range : true,
          search : true,
          tel : true,
          text : true,
          time : true,
          url : true,
          week : true
        };
        /** @type {null} */
        var capturedNode = null;
        /** @type {null} */
        var elem = null;
        /** @type {boolean} */
        var tab = false;
        if (qsaAvail) {
          var originTarget;
          if (qsaAvail) {
            /** @type {boolean} */
            var eventCaptureSupported = "oninput" in document;
            if (!eventCaptureSupported) {
              /** @type {Element} */
              var tmp = document.createElement("div");
              tmp.setAttribute("oninput", "return;");
              /** @type {boolean} */
              eventCaptureSupported = "function" === typeof tmp.oninput;
            }
            /** @type {boolean} */
            originTarget = eventCaptureSupported;
          } else {
            /** @type {boolean} */
            originTarget = false;
          }
          /** @type {boolean} */
          tab = originTarget && (!document.documentMode || 9 < document.documentMode);
        }
        /** @type {Function} */
        var value = "function" === typeof Object.is ? Object.is : function(x, y) {
          return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
        };
        /** @type {boolean} */
        var useQSA = qsaAvail && ("documentMode" in document && 11 >= document.documentMode);
        /** @type {null} */
        var object = null;
        /** @type {null} */
        var id = null;
        /** @type {null} */
        var suiteView = null;
        /** @type {boolean} */
        var br = false;
        var $this = {
          animationend : prefix("Animation", "AnimationEnd"),
          animationiteration : prefix("Animation", "AnimationIteration"),
          animationstart : prefix("Animation", "AnimationStart"),
          transitionend : prefix("Transition", "TransitionEnd")
        };
        var obj = {};
        var arr2 = {};
        if (qsaAvail) {
          /** @type {(CSSStyleDeclaration|null)} */
          arr2 = document.createElement("div").style;
          if (!("AnimationEvent" in window)) {
            delete $this.animationend.animation;
            delete $this.animationiteration.animation;
            delete $this.animationstart.animation;
          }
          if (!("TransitionEvent" in window)) {
            delete $this.transitionend.transition;
          }
        }
        var actual = compiled("animationend");
        var out = compiled("animationiteration");
        var HTMLCanvasElement = compiled("animationstart");
        var onblur = compiled("transitionend");
        var base = new Map;
        /** @type {Array.<string>} */
        var words = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        /** @type {number} */
        var j = 0;
        for (;j < words.length;j++) {
          /** @type {string} */
          var word = words[j];
          sendEvent(word.toLowerCase(), "on" + (word[0].toUpperCase() + word.slice(1)));
        }
        sendEvent(actual, "onAnimationEnd");
        sendEvent(out, "onAnimationIteration");
        sendEvent(HTMLCanvasElement, "onAnimationStart");
        sendEvent("dblclick", "onDoubleClick");
        sendEvent("focusin", "onFocus");
        sendEvent("focusout", "onBlur");
        sendEvent(onblur, "onTransitionEnd");
        print("onMouseEnter", ["mouseout", "mouseover"]);
        print("onMouseLeave", ["mouseout", "mouseover"]);
        print("onPointerEnter", ["pointerout", "pointerover"]);
        print("onPointerLeave", ["pointerout", "pointerover"]);
        it("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        it("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        it("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        it("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        it("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        it("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        /** @type {Array.<string>} */
        var rest = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
        var BASE_TYPES = new Set("cancel close invalid load scroll toggle".split(" ").concat(rest));
        /** @type {string} */
        var NODE_TYPE = "_reactListening" + Math.random().toString(36).slice(2);
        /** @type {RegExp} */
        var r20 = /\r\n?/g;
        /** @type {RegExp} */
        var rreturn = /\u0000|\uFFFD/g;
        /** @type {null} */
        var _clockseq = null;
        /** @type {null} */
        var basePrototype = null;
        /** @type {(function ((Function|null|string), number): number|undefined)} */
        var deepMerge = "function" === typeof setTimeout ? setTimeout : void 0;
        /** @type {(function ((null|number|undefined)): ?|undefined)} */
        var f = "function" === typeof clearTimeout ? clearTimeout : void 0;
        var def = "function" === typeof Promise ? Promise : void 0;
        var every = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof def ? function(func) {
          return def.resolve(null).then(func).catch(report);
        } : deepMerge;
        /** @type {string} */
        var port = Math.random().toString(36).slice(2);
        /** @type {string} */
        var name = "__reactFiber$" + port;
        /** @type {string} */
        var key = "__reactProps$" + port;
        /** @type {string} */
        var prop = "__reactContainer$" + port;
        /** @type {string} */
        var k = "__reactEvents$" + port;
        /** @type {string} */
        var DEFAULT_VIEW = "__reactListeners$" + port;
        /** @type {string} */
        var local = "__reactHandles$" + port;
        /** @type {Array} */
        var instrument = [];
        /** @type {number} */
        var best_int = -1;
        var ret = {};
        var source = normalize(ret);
        var resources = normalize(false);
        var array = ret;
        /** @type {null} */
        var paths = null;
        /** @type {boolean} */
        var Ul = false;
        /** @type {boolean} */
        var Al = false;
        /** @type {Array} */
        var files = [];
        /** @type {number} */
        var ti = 0;
        /** @type {null} */
        var file = null;
        /** @type {number} */
        var page = 0;
        /** @type {Array} */
        var result = [];
        /** @type {number} */
        var ri = 0;
        /** @type {null} */
        var from = null;
        /** @type {number} */
        var e = 1;
        /** @type {string} */
        var msg = "";
        /** @type {null} */
        var max = null;
        /** @type {null} */
        var el = null;
        /** @type {boolean} */
        var truth = false;
        /** @type {null} */
        var values = null;
        var pointer = bid.ReactCurrentBatchConfig;
        var member = normalize(null);
        /** @type {null} */
        var mode = null;
        /** @type {null} */
        var selected = null;
        /** @type {null} */
        var testNode = null;
        /** @type {null} */
        var list = null;
        /** @type {boolean} */
        var tok = false;
        var originalrefs = (new BUI.Component).refs;
        var History = {
          /**
           * @param {(Object|string)} array
           * @return {?}
           */
          isMounted : function(array) {
            return!!(array = array._reactInternals) && replace(array) === array;
          },
          /**
           * @param {Object} data
           * @param {(Object|string)} node
           * @param {Object} callback
           * @return {undefined}
           */
          enqueueSetState : function(data, node, callback) {
            data = data._reactInternals;
            var pdataCur = toLowerCase();
            var index = Number(data);
            var args = slice(pdataCur, index);
            /** @type {(Object|string)} */
            args.payload = node;
            if (void 0 !== callback) {
              if (null !== callback) {
                /** @type {Object} */
                args.callback = callback;
              }
            }
            if (null !== (node = spawn(data, args, index))) {
              getAll(node, data, index, pdataCur);
              bindContent(node, data, index);
            }
          },
          /**
           * @param {(Object|string)} data
           * @param {(Object|string)} node
           * @param {Object} callback
           * @return {undefined}
           */
          enqueueReplaceState : function(data, node, callback) {
            data = data._reactInternals;
            var pdataCur = toLowerCase();
            var index = Number(data);
            var args = slice(pdataCur, index);
            /** @type {number} */
            args.tag = 1;
            /** @type {(Object|string)} */
            args.payload = node;
            if (void 0 !== callback) {
              if (null !== callback) {
                /** @type {Object} */
                args.callback = callback;
              }
            }
            if (null !== (node = spawn(data, args, index))) {
              getAll(node, data, index, pdataCur);
              bindContent(node, data, index);
            }
          },
          /**
           * @param {Object} data
           * @param {Object} node
           * @return {undefined}
           */
          enqueueForceUpdate : function(data, node) {
            data = data._reactInternals;
            var pdataCur = toLowerCase();
            var index = Number(data);
            var args = slice(pdataCur, index);
            /** @type {number} */
            args.tag = 2;
            if (void 0 !== node) {
              if (null !== node) {
                /** @type {Object} */
                args.callback = node;
              }
            }
            if (null !== (node = spawn(data, args, index))) {
              getAll(node, data, index, pdataCur);
              bindContent(node, data, index);
            }
          }
        };
        var indexOf = exports(true);
        var createOptions = exports(false);
        var data = {};
        var config = normalize(data);
        var src = normalize(data);
        var params = normalize(data);
        var item = normalize(0);
        /** @type {Array} */
        var codeSegments = [];
        var that = bid.ReactCurrentDispatcher;
        var first = bid.ReactCurrentBatchConfig;
        /** @type {number} */
        var bitFlag = 0;
        /** @type {null} */
        var option = null;
        /** @type {null} */
        var opt = null;
        /** @type {null} */
        var tail = null;
        /** @type {boolean} */
        var memory = false;
        /** @type {boolean} */
        var stack = false;
        /** @type {number} */
        var noaccum = 0;
        /** @type {number} */
        var _i = 0;
        var conf = {
          /** @type {function (Object): ?} */
          readContext : makeIterator,
          /** @type {function (): ?} */
          useCallback : each,
          /** @type {function (): ?} */
          useContext : each,
          /** @type {function (): ?} */
          useEffect : each,
          /** @type {function (): ?} */
          useImperativeHandle : each,
          /** @type {function (): ?} */
          useInsertionEffect : each,
          /** @type {function (): ?} */
          useLayoutEffect : each,
          /** @type {function (): ?} */
          useMemo : each,
          /** @type {function (): ?} */
          useReducer : each,
          /** @type {function (): ?} */
          useRef : each,
          /** @type {function (): ?} */
          useState : each,
          /** @type {function (): ?} */
          useDebugValue : each,
          /** @type {function (): ?} */
          useDeferredValue : each,
          /** @type {function (): ?} */
          useTransition : each,
          /** @type {function (): ?} */
          useMutableSource : each,
          /** @type {function (): ?} */
          useSyncExternalStore : each,
          /** @type {function (): ?} */
          useId : each,
          unstable_isNewReconciler : false
        };
        var parameterMap = {
          /** @type {function (Object): ?} */
          readContext : makeIterator,
          /**
           * @param {Object} func
           * @param {Object} keepData
           * @return {?}
           */
          useCallback : function(func, keepData) {
            return flag().memoizedState = [func, void 0 === keepData ? null : keepData], func;
          },
          /** @type {function (Object): ?} */
          useContext : makeIterator,
          /** @type {function (Object, Object): ?} */
          useEffect : once,
          /**
           * @param {Object} func
           * @param {Object} keepData
           * @param {Object} node
           * @return {?}
           */
          useImperativeHandle : function(func, keepData, node) {
            return node = null !== node && void 0 !== node ? node.concat([func]) : null, addListener(4194308, 4, view.bind(null, keepData, func), node);
          },
          /**
           * @param {Object} func
           * @param {Object} keepData
           * @return {?}
           */
          useLayoutEffect : function(func, keepData) {
            return addListener(4194308, 4, func, keepData);
          },
          /**
           * @param {Object} func
           * @param {Object} keepData
           * @return {?}
           */
          useInsertionEffect : function(func, keepData) {
            return addListener(4, 2, func, keepData);
          },
          /**
           * @param {Object} func
           * @param {Object} keepData
           * @return {?}
           */
          useMemo : function(func, keepData) {
            var obj = flag();
            return keepData = void 0 === keepData ? null : keepData, func = func(), obj.memoizedState = [func, keepData], func;
          },
          /**
           * @param {Object} func
           * @param {Object} keepData
           * @param {(Object|string)} dataAndEvents
           * @return {?}
           */
          useReducer : function(func, keepData, dataAndEvents) {
            var obj = flag();
            return keepData = void 0 !== dataAndEvents ? dataAndEvents(keepData) : keepData, obj.memoizedState = obj.baseState = keepData, func = {
              pending : null,
              interleaved : null,
              lanes : 0,
              dispatch : null,
              lastRenderedReducer : func,
              lastRenderedState : keepData
            }, obj.queue = func, func = func.dispatch = node.bind(null, option, func), [obj.memoizedState, func];
          },
          /**
           * @param {Object} func
           * @return {?}
           */
          useRef : function(func) {
            return func = {
              current : func
            }, flag().memoizedState = func;
          },
          /** @type {function (Object): ?} */
          useState : defer,
          /** @type {function (): undefined} */
          useDebugValue : useDebugValue,
          /**
           * @param {Object} func
           * @return {?}
           */
          useDeferredValue : function(func) {
            return flag().memoizedState = func;
          },
          /**
           * @return {?}
           */
          useTransition : function() {
            var test = defer(false);
            var desc = test[0];
            return test = finish.bind(null, test[1]), flag().memoizedState = test, [desc, test];
          },
          /**
           * @return {undefined}
           */
          useMutableSource : function() {
          },
          /**
           * @param {Object} func
           * @param {Object} keepData
           * @param {(Object|string)} items
           * @return {?}
           */
          useSyncExternalStore : function(func, keepData, items) {
            var args = option;
            var obj = flag();
            if (truth) {
              if (void 0 === items) {
                throw Error(callback(407));
              }
              items = items();
            } else {
              if (items = keepData(), null === p) {
                throw Error(callback(349));
              }
              if (!(0 !== (30 & bitFlag))) {
                exec(args, keepData, items);
              }
            }
            /** @type {(Object|string)} */
            obj.memoizedState = items;
            var options = {
              value : items,
              getSnapshot : keepData
            };
            return obj.queue = options, once(plugin.bind(null, args, options, func), [func]), args.flags |= 2048, stream(9, me.bind(null, args, options, items, keepData), void 0, null), items;
          },
          /**
           * @return {?}
           */
          useId : function() {
            var obj = flag();
            var i = p.identifierPrefix;
            if (truth) {
              var num = msg;
              /** @type {string} */
              i = ":" + i + "R" + (num = (e & ~(1 << 32 - reject(e) - 1)).toString(32) + num);
              if (0 < (num = noaccum++)) {
                i += "H" + num.toString(32);
              }
              i += ":";
            } else {
              /** @type {string} */
              i = ":" + i + "r" + (num = _i++).toString(32) + ":";
            }
            return obj.memoizedState = i;
          },
          unstable_isNewReconciler : false
        };
        var current = {
          /** @type {function (Object): ?} */
          readContext : makeIterator,
          /** @type {function (Object, Object): ?} */
          useCallback : queue,
          /** @type {function (Object): ?} */
          useContext : makeIterator,
          /** @type {function (Object, Object): ?} */
          useEffect : injectDependencies,
          /** @type {function (Object, Object, Object): ?} */
          useImperativeHandle : visit,
          /** @type {function (Object, Object): ?} */
          useInsertionEffect : runs,
          /** @type {function (Object, Object): ?} */
          useLayoutEffect : xit,
          /** @type {function (Object, Object): ?} */
          useMemo : iterate,
          /** @type {function (Object): ?} */
          useReducer : dispatch,
          /** @type {function (): ?} */
          useRef : module,
          /**
           * @return {?}
           */
          useState : function() {
            return dispatch(iterator);
          },
          /** @type {function (): undefined} */
          useDebugValue : useDebugValue,
          /**
           * @param {Object} func
           * @return {?}
           */
          useDeferredValue : function(func) {
            return binder(synchronize(), opt.memoizedState, func);
          },
          /**
           * @return {?}
           */
          useTransition : function() {
            return[dispatch(iterator)[0], synchronize().memoizedState];
          },
          /** @type {function (): undefined} */
          useMutableSource : useMutableSource,
          /** @type {function (Object, Object): ?} */
          useSyncExternalStore : off,
          /** @type {function (): ?} */
          useId : restart,
          unstable_isNewReconciler : false
        };
        var c = {
          /** @type {function (Object): ?} */
          readContext : makeIterator,
          /** @type {function (Object, Object): ?} */
          useCallback : queue,
          /** @type {function (Object): ?} */
          useContext : makeIterator,
          /** @type {function (Object, Object): ?} */
          useEffect : injectDependencies,
          /** @type {function (Object, Object, Object): ?} */
          useImperativeHandle : visit,
          /** @type {function (Object, Object): ?} */
          useInsertionEffect : runs,
          /** @type {function (Object, Object): ?} */
          useLayoutEffect : xit,
          /** @type {function (Object, Object): ?} */
          useMemo : iterate,
          /** @type {function (Object): ?} */
          useReducer : run,
          /** @type {function (): ?} */
          useRef : module,
          /**
           * @return {?}
           */
          useState : function() {
            return run(iterator);
          },
          /** @type {function (): undefined} */
          useDebugValue : useDebugValue,
          /**
           * @param {Object} func
           * @return {?}
           */
          useDeferredValue : function(func) {
            var suiteView = synchronize();
            return null === opt ? suiteView.memoizedState = func : binder(suiteView, opt.memoizedState, func);
          },
          /**
           * @return {?}
           */
          useTransition : function() {
            return[run(iterator)[0], synchronize().memoizedState];
          },
          /** @type {function (): undefined} */
          useMutableSource : useMutableSource,
          /** @type {function (Object, Object): ?} */
          useSyncExternalStore : off,
          /** @type {function (): ?} */
          useId : restart,
          unstable_isNewReconciler : false
        };
        var Rule = "function" === typeof WeakMap ? WeakMap : Map;
        var storage = bid.ReactCurrentOwner;
        /** @type {boolean} */
        var ref$ = false;
        var createNode;
        var add;
        var unbind;
        var q = {
          dehydrated : null,
          treeContext : null,
          retryLane : 0
        };
        /**
         * @param {Object} url
         * @param {Object} item
         * @return {undefined}
         */
        createNode = function(url, item) {
          var options = item.child;
          for (;null !== options;) {
            if (5 === options.tag || 6 === options.tag) {
              url.appendChild(options.stateNode);
            } else {
              if (4 !== options.tag && null !== options.child) {
                options.child.return = options;
                options = options.child;
                continue;
              }
            }
            if (options === item) {
              break;
            }
            for (;null === options.sibling;) {
              if (null === options.return || options.return === item) {
                return;
              }
              options = options.return;
            }
            options.sibling.return = options.return;
            options = options.sibling;
          }
        };
        /**
         * @param {Object} e
         * @param {string} node
         * @param {Object} type
         * @param {Object} data
         * @return {undefined}
         */
        add = function(e, node, type, data) {
          var args = e.memoizedProps;
          if (args !== data) {
            e = node.stateNode;
            trim(config.current);
            var key;
            /** @type {null} */
            var events = null;
            switch(type) {
              case "input":
                args = (0,eval)(e, args);
                data = (0,eval)(e, data);
                /** @type {Array} */
                events = [];
                break;
              case "select":
                args = trigger({}, args, {
                  value : void 0
                });
                data = trigger({}, data, {
                  value : void 0
                });
                /** @type {Array} */
                events = [];
                break;
              case "textarea":
                args = send(e, args);
                data = send(e, data);
                /** @type {Array} */
                events = [];
                break;
              default:
                if ("function" !== typeof args.onClick) {
                  if ("function" === typeof data.onClick) {
                    /** @type {function (): undefined} */
                    e.onclick = height;
                  }
                }
              ;
            }
            for (i in emit(type, data), type = null, args) {
              if (!data.hasOwnProperty(i) && (args.hasOwnProperty(i) && null != args[i])) {
                if ("style" === i) {
                  var expected = args[i];
                  for (key in expected) {
                    if (expected.hasOwnProperty(key)) {
                      if (!type) {
                        type = {};
                      }
                      /** @type {string} */
                      type[key] = "";
                    }
                  }
                } else {
                  if ("dangerouslySetInnerHTML" !== i) {
                    if ("children" !== i) {
                      if ("suppressContentEditableWarning" !== i) {
                        if ("suppressHydrationWarning" !== i) {
                          if ("autoFocus" !== i) {
                            if (a.hasOwnProperty(i)) {
                              if (!events) {
                                /** @type {Array} */
                                events = [];
                              }
                            } else {
                              (events = events || []).push(i, null);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            for (i in data) {
              var actual = data[i];
              if (expected = null != args ? args[i] : void 0, data.hasOwnProperty(i) && (actual !== expected && (null != actual || null != expected))) {
                if ("style" === i) {
                  if (expected) {
                    for (key in expected) {
                      if (!!expected.hasOwnProperty(key)) {
                        if (!(actual && actual.hasOwnProperty(key))) {
                          if (!type) {
                            type = {};
                          }
                          /** @type {string} */
                          type[key] = "";
                        }
                      }
                    }
                    for (key in actual) {
                      if (actual.hasOwnProperty(key)) {
                        if (expected[key] !== actual[key]) {
                          if (!type) {
                            type = {};
                          }
                          type[key] = actual[key];
                        }
                      }
                    }
                  } else {
                    if (!type) {
                      if (!events) {
                        /** @type {Array} */
                        events = [];
                      }
                      events.push(i, type);
                    }
                    type = actual;
                  }
                } else {
                  if ("dangerouslySetInnerHTML" === i) {
                    actual = actual ? actual.__html : void 0;
                    expected = expected ? expected.__html : void 0;
                    if (null != actual) {
                      if (expected !== actual) {
                        (events = events || []).push(i, actual);
                      }
                    }
                  } else {
                    if ("children" === i) {
                      if (!("string" !== typeof actual && "number" !== typeof actual)) {
                        (events = events || []).push(i, "" + actual);
                      }
                    } else {
                      if ("suppressContentEditableWarning" !== i) {
                        if ("suppressHydrationWarning" !== i) {
                          if (a.hasOwnProperty(i)) {
                            if (null != actual) {
                              if ("onScroll" === i) {
                                bind("scroll", e);
                              }
                            }
                            if (!events) {
                              if (!(expected === actual)) {
                                /** @type {Array} */
                                events = [];
                              }
                            }
                          } else {
                            (events = events || []).push(i, actual);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            if (type) {
              (events = events || []).push("style", type);
            }
            /** @type {(Array|null)} */
            var i = events;
            if (node.updateQueue = i) {
              node.flags |= 4;
            }
          }
        };
        /**
         * @param {number} callback
         * @param {string} event
         * @param {?} nextStack
         * @param {?} id
         * @return {undefined}
         */
        unbind = function(callback, event, nextStack, id) {
          if (nextStack !== id) {
            event.flags |= 4;
          }
        };
        /** @type {boolean} */
        var err = false;
        /** @type {boolean} */
        var prev = false;
        var AudioPlayer = "function" === typeof WeakSet ? WeakSet : Set;
        /** @type {null} */
        var options = null;
        /** @type {boolean} */
        var fragment = false;
        /** @type {null} */
        var target = null;
        /** @type {boolean} */
        var min = false;
        var render;
        /** @type {function (*): number} */
        var ceil = Math.ceil;
        var user = bid.ReactCurrentDispatcher;
        var helpers = bid.ReactCurrentOwner;
        var context = bid.ReactCurrentBatchConfig;
        /** @type {number} */
        var errorMessage = 0;
        /** @type {null} */
        var p = null;
        /** @type {null} */
        var valid = null;
        /** @type {number} */
        var _ = 0;
        /** @type {number} */
        var part = 0;
        var Enumerable = normalize(0);
        /** @type {number} */
        var now = 0;
        /** @type {null} */
        var last = null;
        /** @type {number} */
        var inParens = 0;
        /** @type {number} */
        var inPseudo = 0;
        /** @type {number} */
        var client_flags = 0;
        /** @type {null} */
        var items = null;
        /** @type {null} */
        var server = null;
        /** @type {number} */
        var timestamp = 0;
        /** @type {number} */
        var $u = 1 / 0;
        /** @type {null} */
        var expectationResult = null;
        /** @type {boolean} */
        var Hu = false;
        /** @type {null} */
        var transformed = null;
        /** @type {null} */
        var s = null;
        /** @type {boolean} */
        var qu = false;
        /** @type {null} */
        var n = null;
        /** @type {number} */
        var deep = 0;
        /** @type {number} */
        var Xu = 0;
        /** @type {null} */
        var previous = null;
        /** @type {number} */
        var stopChange = -1;
        /** @type {number} */
        var targetOrigin = 0;
        /**
         * @param {Object} opts
         * @param {Object} options
         * @param {string} context
         * @return {?}
         */
        render = function(opts, options, context) {
          if (null !== opts) {
            if (opts.memoizedProps !== options.pendingProps || resources.current) {
              /** @type {boolean} */
              ref$ = true;
            } else {
              if (0 === (opts.lanes & context) && 0 === (128 & options.flags)) {
                return ref$ = false, function(data, options, s) {
                  switch(options.tag) {
                    case 3:
                      main(options);
                      _each();
                      break;
                    case 5:
                      style(options);
                      break;
                    case 1:
                      if (clone(options.type)) {
                        tmpl(options);
                      }
                      break;
                    case 4:
                      merge(options, options.stateNode.containerInfo);
                      break;
                    case 10:
                      var doc = options.type._context;
                      var list = options.memoizedProps.value;
                      split(member, doc._currentValue);
                      doc._currentValue = list;
                      break;
                    case 13:
                      if (null !== (doc = options.memoizedState)) {
                        return null !== doc.dehydrated ? (split(item, 1 & item.current), options.flags |= 128, null) : 0 !== (s & options.child.childLanes) ? update(data, options, s) : (split(item, 1 & item.current), null !== (data = resolve(data, options, s)) ? data.sibling : null);
                      }
                      split(item, 1 & item.current);
                      break;
                    case 19:
                      if (doc = 0 !== (s & options.childLanes), 0 !== (128 & data.flags)) {
                        if (doc) {
                          return template(data, options, s);
                        }
                        options.flags |= 128;
                      }
                      if (null !== (list = options.memoizedState) && (list.rendering = null, list.tail = null, list.lastEffect = null), split(item, item.current), doc) {
                        break;
                      }
                      return null;
                    case 22:
                    ;
                    case 23:
                      return options.lanes = 0, evaluate(data, options, s);
                  }
                  return resolve(data, options, s);
                }(opts, options, context);
              }
              /** @type {boolean} */
              ref$ = 0 !== (131072 & opts.flags);
            }
          } else {
            /** @type {boolean} */
            ref$ = false;
            if (truth) {
              if (0 !== (1048576 & options.flags)) {
                errorHandler(options, page, options.index);
              }
            }
          }
          switch(options.lanes = 0, options.tag) {
            case 2:
              var item = options.type;
              ajax(opts, options);
              opts = options.pendingProps;
              var iterator = decodeURIComponent(options, source.current);
              fail(options, context);
              iterator = map(null, options, item, opts, iterator, context);
              var self = ensureCallback();
              return options.flags |= 1, "object" === typeof iterator && (null !== iterator && ("function" === typeof iterator.render && void 0 === iterator.$$typeof)) ? (options.tag = 1, options.memoizedState = null, options.updateQueue = null, clone(item) ? (self = true, tmpl(options)) : self = false, options.memoizedState = null !== iterator.state && void 0 !== iterator.state ? iterator.state : null, isDefined(options), iterator.updater = History, options.stateNode = iterator, iterator._reactInternals = 
              options, cb(options, item, opts, context), options = step(null, options, item, true, self, context)) : (options.tag = 0, truth && (self && getJSON(options)), request(null, options, iterator, context), options = options.child), options;
            case 16:
              item = options.elementType;
              e: {
                switch(ajax(opts, options), opts = options.pendingProps, item = (iterator = item._init)(item._payload), options.type = item, iterator = options.tag = function(value) {
                  if ("function" === typeof value) {
                    return hasKey(value) ? 1 : 0;
                  }
                  if (void 0 !== value && null !== value) {
                    if ((value = value.$$typeof) === checkbox) {
                      return 11;
                    }
                    if (value === radio) {
                      return 14;
                    }
                  }
                  return 2;
                }(item), opts = require(item, opts), iterator) {
                  case 0:
                    options = load(null, options, item, opts, context);
                    break e;
                  case 1:
                    options = loop(null, options, item, opts, context);
                    break e;
                  case 11:
                    options = check(null, options, item, opts, context);
                    break e;
                  case 14:
                    options = extend(null, options, item, require(item.type, opts), context);
                    break e;
                }
                throw Error(callback(306, item, ""));
              }
              return options;
            case 0:
              return item = options.type, iterator = options.pendingProps, load(opts, options, item, iterator = options.elementType === item ? iterator : require(item, iterator), context);
            case 1:
              return item = options.type, iterator = options.pendingProps, loop(opts, options, item, iterator = options.elementType === item ? iterator : require(item, iterator), context);
            case 3:
              e: {
                if (main(options), null === opts) {
                  throw Error(callback(387));
                }
                item = options.pendingProps;
                iterator = (self = options.memoizedState).element;
                setOptions(opts, options);
                done(options, item, null, context);
                var node = options.memoizedState;
                if (item = node.element, self.isDehydrated) {
                  if (self = {
                    element : item,
                    isDehydrated : false,
                    cache : node.cache,
                    pendingSuspenseBoundaries : node.pendingSuspenseBoundaries,
                    transitions : node.transitions
                  }, options.updateQueue.baseState = self, options.memoizedState = self, 256 & options.flags) {
                    options = _extend(opts, options, item, context, iterator = debug(Error(callback(423)), options));
                    break e;
                  }
                  if (item !== iterator) {
                    options = _extend(opts, options, item, context, iterator = debug(Error(callback(424)), options));
                    break e;
                  }
                  el = text(options.stateNode.containerInfo.firstChild);
                  /** @type {Object} */
                  max = options;
                  /** @type {boolean} */
                  truth = true;
                  /** @type {null} */
                  values = null;
                  context = createOptions(options, null, item, context);
                  /** @type {string} */
                  options.child = context;
                  for (;context;) {
                    /** @type {number} */
                    context.flags = -3 & context.flags | 4096;
                    context = context.sibling;
                  }
                } else {
                  if (_each(), item === iterator) {
                    options = resolve(opts, options, context);
                    break e;
                  }
                  request(opts, options, item, context);
                }
                options = options.child;
              }
              return options;
            case 5:
              return style(options), null === opts && save(options), item = options.type, iterator = options.pendingProps, self = null !== opts ? opts.memoizedProps : null, node = iterator.children, handler(item, iterator) ? node = null : null !== self && (handler(item, self) && (options.flags |= 32)), scroll(opts, options), request(opts, options, node, context), options.child;
            case 6:
              return null === opts && save(options), null;
            case 13:
              return update(opts, options, context);
            case 4:
              return merge(options, options.stateNode.containerInfo), item = options.pendingProps, null === opts ? options.child = indexOf(options, null, item, context) : request(opts, options, item, context), options.child;
            case 11:
              return item = options.type, iterator = options.pendingProps, check(opts, options, item, iterator = options.elementType === item ? iterator : require(item, iterator), context);
            case 7:
              return request(opts, options, options.pendingProps, context), options.child;
            case 8:
            ;
            case 12:
              return request(opts, options, options.pendingProps.children, context), options.child;
            case 10:
              e: {
                if (item = options.type._context, iterator = options.pendingProps, self = options.memoizedProps, node = iterator.value, split(member, item._currentValue), item._currentValue = node, null !== self) {
                  if (value(self.value, node)) {
                    if (self.children === iterator.children && !resources.current) {
                      options = resolve(opts, options, context);
                      break e;
                    }
                  } else {
                    if (null !== (self = options.child)) {
                      /** @type {Object} */
                      self.return = options;
                    }
                    for (;null !== self;) {
                      var prev = self.dependencies;
                      if (null !== prev) {
                        node = self.child;
                        var current = prev.firstContext;
                        for (;null !== current;) {
                          if (current.context === item) {
                            if (1 === self.tag) {
                              /** @type {number} */
                              (current = slice(-1, context & -context)).tag = 2;
                              var cache = self.updateQueue;
                              if (null !== cache) {
                                var tmp = (cache = cache.shared).pending;
                                if (null === tmp) {
                                  current.next = current;
                                } else {
                                  current.next = tmp.next;
                                  tmp.next = current;
                                }
                                cache.pending = current;
                              }
                            }
                            self.lanes |= context;
                            if (null !== (current = self.alternate)) {
                              current.lanes |= context;
                            }
                            jQuery(self.return, context, options);
                            prev.lanes |= context;
                            break;
                          }
                          current = current.next;
                        }
                      } else {
                        if (10 === self.tag) {
                          node = self.type === options.type ? null : self.child;
                        } else {
                          if (18 === self.tag) {
                            if (null === (node = self.return)) {
                              throw Error(callback(341));
                            }
                            node.lanes |= context;
                            if (null !== (prev = node.alternate)) {
                              prev.lanes |= context;
                            }
                            jQuery(node, context, options);
                            node = self.sibling;
                          } else {
                            node = self.child;
                          }
                        }
                      }
                      if (null !== node) {
                        node.return = self;
                      } else {
                        node = self;
                        for (;null !== node;) {
                          if (node === options) {
                            /** @type {null} */
                            node = null;
                            break;
                          }
                          if (null !== (self = node.sibling)) {
                            self.return = node.return;
                            node = self;
                            break;
                          }
                          node = node.return;
                        }
                      }
                      self = node;
                    }
                  }
                }
                request(opts, options, iterator.children, context);
                options = options.child;
              }
              return options;
            case 9:
              return iterator = options.type, item = options.pendingProps.children, fail(options, context), item = item(iterator = makeIterator(iterator)), options.flags |= 1, request(opts, options, item, context), options.child;
            case 14:
              return iterator = require(item = options.type, options.pendingProps), extend(opts, options, item, iterator = require(item.type, iterator), context);
            case 15:
              return execute(opts, options, options.type, options.pendingProps, context);
            case 17:
              return item = options.type, iterator = options.pendingProps, iterator = options.elementType === item ? iterator : require(item, iterator), ajax(opts, options), options.tag = 1, clone(item) ? (opts = true, tmpl(options)) : opts = false, fail(options, context), copy(options, item, iterator), cb(options, item, iterator, context), step(null, options, item, true, opts, context);
            case 19:
              return template(opts, options, context);
            case 22:
              return evaluate(opts, options, context);
          }
          throw Error(callback(156, options.tag));
        };
        var computed = "function" === typeof reportError ? reportError : function(fmt) {
          console.error(fmt);
        };
        /** @type {function (string): undefined} */
        Item.prototype.render = Renderer.prototype.render = function(x) {
          var typePattern = this._internalRoot;
          if (null === typePattern) {
            throw Error(callback(409));
          }
          pow(x, typePattern, null, null);
        };
        /** @type {function (): undefined} */
        Item.prototype.unmount = Renderer.prototype.unmount = function() {
          var e = this._internalRoot;
          if (null !== e) {
            /** @type {null} */
            this._internalRoot = null;
            var originalEvent = e.containerInfo;
            configure(function() {
              pow(null, e, null, null);
            });
            /** @type {null} */
            originalEvent[prop] = null;
          }
        };
        /**
         * @param {Object} item
         * @return {undefined}
         */
        Item.prototype.unstable_scheduleHydration = function(item) {
          if (item) {
            var priority = throttledUpdate();
            item = {
              blockedOn : null,
              target : item,
              priority : priority
            };
            /** @type {number} */
            var i = 0;
            for (;i < arr.length && (0 !== priority && priority < arr[i].priority);i++) {
            }
            arr.splice(i, 0, item);
            if (0 === i) {
              toHtml(item);
            }
          }
        };
        /**
         * @param {Object} data
         * @return {undefined}
         */
        completed = function(data) {
          switch(data.tag) {
            case 3:
              var node = data.stateNode;
              if (node.current.memoizedState.isDehydrated) {
                var t = scanPunctuator(node.pendingLanes);
                if (0 !== t) {
                  fun(node, 1 | t);
                  ready(node, getTime());
                  if (0 === (6 & errorMessage)) {
                    $u = getTime() + 500;
                    apply();
                  }
                }
              }
              break;
            case 13:
              configure(function() {
                var fragment = onsuccess(data, 1);
                if (null !== fragment) {
                  var pdataCur = toLowerCase();
                  getAll(fragment, data, 1, pdataCur);
                }
              });
              json(data, 1);
          }
        };
        /**
         * @param {Object} data
         * @return {undefined}
         */
        onload = function(data) {
          if (13 === data.tag) {
            var fragment = onsuccess(data, 134217728);
            if (null !== fragment) {
              getAll(fragment, data, 134217728, toLowerCase());
            }
            json(data, 134217728);
          }
        };
        /**
         * @param {Object} data
         * @return {undefined}
         */
        reset = function(data) {
          if (13 === data.tag) {
            var deepDataAndEvents = Number(data);
            var fragment = onsuccess(data, deepDataAndEvents);
            if (null !== fragment) {
              getAll(fragment, data, deepDataAndEvents, toLowerCase());
            }
            json(data, deepDataAndEvents);
          }
        };
        /**
         * @return {?}
         */
        throttledUpdate = function() {
          return unpipedSource;
        };
        /**
         * @param {number} src
         * @param {Function} callback
         * @return {?}
         */
        sync = function(src, callback) {
          var t = unpipedSource;
          try {
            return unpipedSource = src, callback();
          } finally {
            unpipedSource = t;
          }
        };
        /**
         * @param {Object} el
         * @param {Object} type
         * @param {Object} element
         * @return {undefined}
         */
        listener = function(el, type, element) {
          switch(type) {
            case "input":
              if (append(el, element), type = element.name, "radio" === element.type && null != type) {
                /** @type {Object} */
                element = el;
                for (;element.parentNode;) {
                  element = element.parentNode;
                }
                element = element.querySelectorAll("input[name=" + JSON.stringify("" + type) + '][type="radio"]');
                /** @type {number} */
                type = 0;
                for (;type < element.length;type++) {
                  var node = element[type];
                  if (node !== el && node.form === el.form) {
                    var format = removeListener(node);
                    if (!format) {
                      throw Error(callback(90));
                    }
                    click(node);
                    append(node, format);
                  }
                }
              }
              break;
            case "textarea":
              setValue(el, element);
              break;
            case "select":
              if (null != (type = element.value)) {
                remove(el, !!element.multiple, type, false);
              }
            ;
          }
        };
        /** @type {function (Function, Array): ?} */
        makeCallback = on;
        /** @type {function (Function): ?} */
        defaultStep = configure;
        var lvl = {
          usingClientEntryPoint : false,
          Events : [parseInt, assert, removeListener, MAP, setTitle, on]
        };
        var pkg = {
          /** @type {function (Object): ?} */
          findFiberByHostInstance : push,
          bundleType : 0,
          version : "18.2.0",
          rendererPackageName : "react-dom"
        };
        var row = {
          bundleType : pkg.bundleType,
          version : pkg.version,
          rendererPackageName : pkg.rendererPackageName,
          rendererConfig : pkg.rendererConfig,
          overrideHookState : null,
          overrideHookStateDeletePath : null,
          overrideHookStateRenamePath : null,
          overrideProps : null,
          overridePropsDeletePath : null,
          overridePropsRenamePath : null,
          setErrorHandler : null,
          setSuspenseHandler : null,
          scheduleUpdate : null,
          currentDispatcherRef : bid.ReactCurrentDispatcher,
          /**
           * @param {?} qualifier
           * @return {?}
           */
          findHostInstanceByFiber : function(qualifier) {
            return null === (qualifier = child(qualifier)) ? null : qualifier.stateNode;
          },
          /** @type {function (Object): ?} */
          findFiberByHostInstance : pkg.findFiberByHostInstance || function() {
            return null;
          },
          findHostInstancesForRefresh : null,
          scheduleRefresh : null,
          scheduleRoot : null,
          setRefreshHandler : null,
          getCurrentFiber : null,
          reconcilerVersion : "18.2.0-next-9e3b772b8-20220608"
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var res = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!res.isDisabled && res.supportsFiber) {
            try {
              content = res.inject(row);
              response = res;
            } catch (ce) {
            }
          }
        }
        o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lvl;
        /**
         * @param {?} deepDataAndEvents
         * @param {?} s
         * @return {?}
         */
        o.createPortal = function(deepDataAndEvents, s) {
          var r20 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!_qwery(s)) {
            throw Error(callback(200));
          }
          return getIndex(deepDataAndEvents, s, null, r20);
        };
        /**
         * @param {Object} s
         * @param {Object} options
         * @return {?}
         */
        o.createRoot = function(s, options) {
          if (!_qwery(s)) {
            throw Error(callback(299));
          }
          /** @type {boolean} */
          var failuresLink = false;
          /** @type {string} */
          var later = "";
          var result = computed;
          return null !== options && (void 0 !== options && (true === options.unstable_strictMode && (failuresLink = true), void 0 !== options.identifierPrefix && (later = options.identifierPrefix), void 0 !== options.onRecoverableError && (result = options.onRecoverableError))), options = parent(s, 1, false, null, 0, failuresLink, 0, later, result), s[prop] = options.current, match(8 === s.nodeType ? s.parentNode : s), new Renderer(options);
        };
        /**
         * @param {Object} content
         * @return {?}
         */
        o.findDOMNode = function(content) {
          if (null == content) {
            return null;
          }
          if (1 === content.nodeType) {
            return content;
          }
          var html = content._reactInternals;
          if (void 0 === html) {
            if ("function" === typeof content.render) {
              throw Error(callback(188));
            }
            throw content = Object.keys(content).join(","), Error(callback(268, content));
          }
          return content = null === (content = child(html)) ? null : content.stateNode;
        };
        /**
         * @param {Function} fd
         * @return {?}
         */
        o.flushSync = function(fd) {
          return configure(fd);
        };
        /**
         * @param {?} options
         * @param {Object} node
         * @param {Function} hook
         * @return {?}
         */
        o.hydrate = function(options, node, hook) {
          if (!_nodeUID(node)) {
            throw Error(callback(200));
          }
          return compile(null, options, node, true, hook);
        };
        /**
         * @param {Object} i
         * @param {Object} data
         * @param {Object} row
         * @return {?}
         */
        o.hydrateRoot = function(i, data, row) {
          if (!_qwery(i)) {
            throw Error(callback(405));
          }
          var codeSegments = null != row && row.hydratedSources || null;
          /** @type {boolean} */
          var typePattern = false;
          /** @type {string} */
          var later = "";
          var result = computed;
          if (null !== row && (void 0 !== row && (true === row.unstable_strictMode && (typePattern = true), void 0 !== row.identifierPrefix && (later = row.identifierPrefix), void 0 !== row.onRecoverableError && (result = row.onRecoverableError))), data = constructor(data, null, i, 1, null != row ? row : null, typePattern, 0, later, result), i[prop] = data.current, match(i), codeSegments) {
            /** @type {number} */
            i = 0;
            for (;i < codeSegments.length;i++) {
              typePattern = (typePattern = (row = codeSegments[i])._getVersion)(row._source);
              if (null == data.mutableSourceEagerHydrationData) {
                /** @type {Array} */
                data.mutableSourceEagerHydrationData = [row, typePattern];
              } else {
                data.mutableSourceEagerHydrationData.push(row, typePattern);
              }
            }
          }
          return new Item(data);
        };
        /**
         * @param {string} context
         * @param {string} node
         * @param {Function} msg
         * @return {?}
         */
        o.render = function(context, node, msg) {
          if (!_nodeUID(node)) {
            throw Error(callback(200));
          }
          return compile(null, context, node, false, msg);
        };
        /**
         * @param {Object} node
         * @return {?}
         */
        o.unmountComponentAtNode = function(node) {
          if (!_nodeUID(node)) {
            throw Error(callback(40));
          }
          return!!node._reactRootContainer && (configure(function() {
            compile(null, null, node, false, function() {
              /** @type {null} */
              node._reactRootContainer = null;
              /** @type {null} */
              node[prop] = null;
            });
          }), true);
        };
        /** @type {function (Function, Array): ?} */
        o.unstable_batchedUpdates = on;
        /**
         * @param {Object} recurring
         * @param {?} until
         * @param {Object} node
         * @param {Function} hook
         * @return {?}
         */
        o.unstable_renderSubtreeIntoContainer = function(recurring, until, node, hook) {
          if (!_nodeUID(node)) {
            throw Error(callback(200));
          }
          if (null == recurring || void 0 === recurring._reactInternals) {
            throw Error(callback(38));
          }
          return compile(recurring, until, node, false, hook);
        };
        /** @type {string} */
        o.version = "18.2.0-next-9e3b772b8-20220608";
      },
      /**
       * @param {?} dataAndEvents
       * @param {?} node
       * @param {?} createElement
       * @return {undefined}
       */
      250 : function(dataAndEvents, node, createElement) {
        var o = createElement(164);
        node.createRoot = o.createRoot;
        node.hydrateRoot = o.hydrateRoot;
      },
      /**
       * @param {Object} module
       * @param {?} dataAndEvents
       * @param {?} factory
       * @return {undefined}
       */
      164 : function(module, dataAndEvents, factory) {
        !function check() {
          if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(check);
            } catch (fmt) {
              console.error(fmt);
            }
          }
        }();
        module.exports = factory(463);
      },
      /**
       * @param {?} dataAndEvents
       * @param {?} e
       * @param {?} require
       * @return {undefined}
       */
      374 : function(dataAndEvents, e, require) {
        /**
         * @param {Object} item
         * @param {Object} b
         * @param {string} x
         * @return {?}
         */
        function remove(item, b, x) {
          var key;
          var a = {};
          /** @type {null} */
          var name = null;
          /** @type {null} */
          var ref = null;
          for (key in void 0 !== x && (name = "" + x), void 0 !== b.key && (name = "" + b.key), void 0 !== b.ref && (ref = b.ref), b) {
            if (hasOwnProperty.call(b, key)) {
              if (!params.hasOwnProperty(key)) {
                a[key] = b[key];
              }
            }
          }
          if (item && item.defaultProps) {
            for (key in b = item.defaultProps) {
              if (void 0 === a[key]) {
                a[key] = b[key];
              }
            }
          }
          return{
            $$typeof : $$typeof,
            type : item,
            key : name,
            ref : ref,
            props : a,
            _owner : $route.current
          };
        }
        var Block = require(791);
        var $$typeof = Symbol.for("react.element");
        var fix = Symbol.for("react.fragment");
        /** @type {function (this:Object, *): boolean} */
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var $route = Block.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
        var params = {
          key : true,
          ref : true,
          __self : true,
          __source : true
        };
        e.Fragment = fix;
        /** @type {function (Object, Object, string): ?} */
        e.jsx = remove;
        /** @type {function (Object, Object, string): ?} */
        e.jsxs = remove;
      },
      /**
       * @param {?} dataAndEvents
       * @param {Object} exports
       * @return {undefined}
       */
      117 : function(dataAndEvents, exports) {
        /**
         * @param {?} props
         * @param {?} value
         * @param {(Object|boolean|number|string)} el
         * @return {undefined}
         */
        function Constructor(props, value, el) {
          this.props = props;
          this.context = value;
          this.refs = createdSoFar;
          this.updater = el || index;
        }
        /**
         * @return {undefined}
         */
        function Empty() {
        }
        /**
         * @param {?} props
         * @param {?} context
         * @param {(Object|boolean|number|string)} loop
         * @return {undefined}
         */
        function Player(props, context, loop) {
          this.props = props;
          this.context = context;
          this.refs = createdSoFar;
          this.updater = loop || index;
        }
        /**
         * @param {Object} type
         * @param {Object} object
         * @param {?} items
         * @return {?}
         */
        function map(type, object, items) {
          var key;
          var obj = {};
          /** @type {null} */
          var name = null;
          /** @type {null} */
          var ref = null;
          if (null != object) {
            for (key in void 0 !== object.ref && (ref = object.ref), void 0 !== object.key && (name = "" + object.key), object) {
              if (hasOwnProperty.call(object, key)) {
                if (!params.hasOwnProperty(key)) {
                  obj[key] = object[key];
                }
              }
            }
          }
          /** @type {number} */
          var l = arguments.length - 2;
          if (1 === l) {
            obj.children = items;
          } else {
            if (1 < l) {
              /** @type {Array} */
              var args = Array(l);
              /** @type {number} */
              var i = 0;
              for (;i < l;i++) {
                args[i] = arguments[i + 2];
              }
              /** @type {Array} */
              obj.children = args;
            }
          }
          if (type && type.defaultProps) {
            for (key in l = type.defaultProps) {
              if (void 0 === obj[key]) {
                obj[key] = l[key];
              }
            }
          }
          return{
            $$typeof : LEVEL_TOP,
            type : type,
            key : name,
            ref : ref,
            props : obj,
            _owner : messages.current
          };
        }
        /**
         * @param {Object} o
         * @return {?}
         */
        function exec(o) {
          return "object" === typeof o && (null !== o && o.$$typeof === LEVEL_TOP);
        }
        /**
         * @param {Object} object
         * @param {(number|string)} result
         * @return {?}
         */
        function success(object, result) {
          return "object" === typeof object && (null !== object && null != object.key) ? function(messageFormat) {
            var buf = {
              "=" : "=0",
              ":" : "=2"
            };
            return "$" + messageFormat.replace(/[=:]/g, function(off) {
              return buf[off];
            });
          }("" + object.key) : result.toString(36);
        }
        /**
         * @param {string} s
         * @param {string} parts
         * @param {string} url
         * @param {string} buffer
         * @param {Object} v
         * @return {?}
         */
        function parse(s, parts, url, buffer, v) {
          /** @type {string} */
          var type = typeof s;
          if (!("undefined" !== type && "boolean" !== type)) {
            /** @type {null} */
            s = null;
          }
          /** @type {boolean} */
          var result = false;
          if (null === s) {
            /** @type {boolean} */
            result = true;
          } else {
            switch(type) {
              case "string":
              ;
              case "number":
                /** @type {boolean} */
                result = true;
                break;
              case "object":
                switch(s.$$typeof) {
                  case LEVEL_TOP:
                  ;
                  case file:
                    /** @type {boolean} */
                    result = true;
                }
              ;
            }
          }
          if (result) {
            return v = v(result = s), s = "" === buffer ? "." + success(result, 0) : buffer, (0,eval)(v) ? (url = "", null != s && (url = s.replace(r20, "$&/") + "/"), parse(v, parts, url, "", function(obj) {
              return obj;
            })) : null != v && (exec(v) && (v = function(object, subKey) {
              return{
                $$typeof : LEVEL_TOP,
                type : object.type,
                key : subKey,
                ref : object.ref,
                props : object.props,
                _owner : object._owner
              };
            }(v, url + (!v.key || result && result.key === v.key ? "" : ("" + v.key).replace(r20, "$&/") + "/") + s)), parts.push(v)), 1;
          }
          if (result = 0, buffer = "" === buffer ? "." : buffer + ":", (0,eval)(s)) {
            /** @type {number} */
            var i = 0;
            for (;i < s.length;i++) {
              /** @type {string} */
              var str = buffer + success(type = s[i], i);
              result += parse(type, parts, url, str, v);
            }
          } else {
            if (str = function(obj) {
              return null === obj || "object" !== typeof obj ? null : "function" === typeof(obj = special && obj[special] || obj["@@iterator"]) ? obj : null;
            }(s), "function" === typeof str) {
              s = str.call(s);
              /** @type {number} */
              i = 0;
              for (;!(type = s.next()).done;) {
                result += parse(type = type.value, parts, url, str = buffer + success(type, i++), v);
              }
            } else {
              if ("object" === type) {
                throw parts = String(s), Error("Objects are not valid as a React child (found: " + ("[object Object]" === parts ? "object with keys {" + Object.keys(s).join(", ") + "}" : parts) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
          }
          return result;
        }
        /**
         * @param {Object} url
         * @param {Function} expected
         * @param {?} sel
         * @return {?}
         */
        function match(url, expected, sel) {
          if (null == url) {
            return url;
          }
          /** @type {Array} */
          var parts = [];
          /** @type {number} */
          var x = 0;
          return parse(url, parts, "", "", function(actual) {
            return expected.call(sel, actual, x++);
          }), parts;
        }
        /**
         * @param {string} obj
         * @return {?}
         */
        function reject(obj) {
          if (-1 === obj._status) {
            var opts = obj._result;
            (opts = opts()).then(function(id) {
              if (!(0 !== obj._status && -1 !== obj._status)) {
                /** @type {number} */
                obj._status = 1;
                obj._result = id;
              }
            }, function(id) {
              if (!(0 !== obj._status && -1 !== obj._status)) {
                /** @type {number} */
                obj._status = 2;
                obj._result = id;
              }
            });
            if (-1 === obj._status) {
              /** @type {number} */
              obj._status = 0;
              obj._result = opts;
            }
          }
          if (1 === obj._status) {
            return obj._result.default;
          }
          throw obj._result;
        }
        var LEVEL_TOP = Symbol.for("react.element");
        var file = Symbol.for("react.portal");
        var localIP = Symbol.for("react.fragment");
        var message = Symbol.for("react.strict_mode");
        var Profiler = Symbol.for("react.profiler");
        var $$typeof = Symbol.for("react.provider");
        var u = Symbol.for("react.context");
        var s = Symbol.for("react.forward_ref");
        var c = Symbol.for("react.suspense");
        var f = Symbol.for("react.memo");
        var d = Symbol.for("react.lazy");
        var special = Symbol.iterator;
        var index = {
          /**
           * @return {?}
           */
          isMounted : function() {
            return false;
          },
          /**
           * @return {undefined}
           */
          enqueueForceUpdate : function() {
          },
          /**
           * @return {undefined}
           */
          enqueueReplaceState : function() {
          },
          /**
           * @return {undefined}
           */
          enqueueSetState : function() {
          }
        };
        var extend = Object.assign;
        var createdSoFar = {};
        Constructor.prototype.isReactComponent = {};
        /**
         * @param {string} val
         * @param {Object} state
         * @return {undefined}
         */
        Constructor.prototype.setState = function(val, state) {
          if ("object" !== typeof val && ("function" !== typeof val && null != val)) {
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, val, state, "setState");
        };
        /**
         * @param {Object} opt_node
         * @return {undefined}
         */
        Constructor.prototype.forceUpdate = function(opt_node) {
          this.updater.enqueueForceUpdate(this, opt_node, "forceUpdate");
        };
        Empty.prototype = Constructor.prototype;
        var me = Player.prototype = new Empty;
        /** @type {function (?, ?, (Object|boolean|number|string)): undefined} */
        me.constructor = Player;
        extend(me, Constructor.prototype);
        /** @type {boolean} */
        me.isPureReactComponent = true;
        /** @type {function (*): boolean} */
        var eval = Array.isArray;
        /** @type {function (this:Object, *): boolean} */
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var messages = {
          current : null
        };
        var params = {
          key : true,
          ref : true,
          __self : true,
          __source : true
        };
        /** @type {RegExp} */
        var r20 = /\/+/g;
        var self = {
          current : null
        };
        var support = {
          transition : null
        };
        var EventEmitter = {
          ReactCurrentDispatcher : self,
          ReactCurrentBatchConfig : support,
          ReactCurrentOwner : messages
        };
        exports.Children = {
          /** @type {function (Object, Function, ?): ?} */
          map : match,
          /**
           * @param {Function} target
           * @param {Function} matcherFunction
           * @param {?} sel
           * @return {undefined}
           */
          forEach : function(target, matcherFunction, sel) {
            match(target, function() {
              matcherFunction.apply(this, arguments);
            }, sel);
          },
          /**
           * @param {Object} name
           * @return {?}
           */
          count : function(name) {
            /** @type {number} */
            var method = 0;
            return match(name, function() {
              method++;
            }), method;
          },
          /**
           * @param {Object} obj
           * @return {?}
           */
          toArray : function(obj) {
            return match(obj, function(value) {
              return value;
            }) || [];
          },
          /**
           * @param {Object} fn
           * @return {?}
           */
          only : function(fn) {
            if (!exec(fn)) {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
            return fn;
          }
        };
        /** @type {function (?, ?, (Object|boolean|number|string)): undefined} */
        exports.Component = Constructor;
        exports.Fragment = localIP;
        exports.Profiler = Profiler;
        /** @type {function (?, ?, (Object|boolean|number|string)): undefined} */
        exports.PureComponent = Player;
        exports.StrictMode = message;
        exports.Suspense = c;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = EventEmitter;
        /**
         * @param {Object} object
         * @param {Object} obj
         * @param {?} str
         * @return {?}
         */
        exports.cloneElement = function(object, obj, str) {
          if (null === object || void 0 === object) {
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + object + ".");
          }
          var props = extend({}, object.props);
          var id = object.key;
          var ref = object.ref;
          var length = object._owner;
          if (null != obj) {
            if (void 0 !== obj.ref && (ref = obj.ref, length = messages.current), void 0 !== obj.key && (id = "" + obj.key), object.type && object.type.defaultProps) {
              var results = object.type.defaultProps
            }
            for (key in obj) {
              if (hasOwnProperty.call(obj, key)) {
                if (!params.hasOwnProperty(key)) {
                  props[key] = void 0 === obj[key] && void 0 !== results ? results[key] : obj[key];
                }
              }
            }
          }
          /** @type {number} */
          var key = arguments.length - 2;
          if (1 === key) {
            props.children = str;
          } else {
            if (1 < key) {
              /** @type {Array} */
              results = Array(key);
              /** @type {number} */
              var i = 0;
              for (;i < key;i++) {
                results[i] = arguments[i + 2];
              }
              /** @type {Array} */
              props.children = results;
            }
          }
          return{
            $$typeof : LEVEL_TOP,
            type : object.type,
            key : id,
            ref : ref,
            props : props,
            _owner : length
          };
        };
        /**
         * @param {Object} context
         * @return {?}
         */
        exports.createContext = function(context) {
          return(context = {
            $$typeof : u,
            _currentValue : context,
            _currentValue2 : context,
            _threadCount : 0,
            Provider : null,
            Consumer : null,
            _defaultValue : null,
            _globalName : null
          }).Provider = {
            $$typeof : $$typeof,
            _context : context
          }, context.Consumer = context;
        };
        /** @type {function (Object, Object, ?): ?} */
        exports.createElement = map;
        /**
         * @param {?} event
         * @return {?}
         */
        exports.createFactory = function(event) {
          var e = map.bind(null, event);
          return e.type = event, e;
        };
        /**
         * @return {?}
         */
        exports.createRef = function() {
          return{
            current : null
          };
        };
        /**
         * @param {?} container
         * @return {?}
         */
        exports.forwardRef = function(container) {
          return{
            $$typeof : s,
            render : container
          };
        };
        /** @type {function (Object): ?} */
        exports.isValidElement = exec;
        /**
         * @param {?} immediate
         * @return {?}
         */
        exports.lazy = function(immediate) {
          return{
            $$typeof : d,
            _payload : {
              _status : -1,
              _result : immediate
            },
            /** @type {function (string): ?} */
            _init : reject
          };
        };
        /**
         * @param {string} key
         * @param {string} fallback
         * @return {?}
         */
        exports.memo = function(key, fallback) {
          return{
            $$typeof : f,
            type : key,
            compare : void 0 === fallback ? null : fallback
          };
        };
        /**
         * @param {?} callback
         * @return {undefined}
         */
        exports.startTransition = function(callback) {
          /** @type {null} */
          var transition = support.transition;
          support.transition = {};
          try {
            callback();
          } finally {
            /** @type {null} */
            support.transition = transition;
          }
        };
        /**
         * @return {?}
         */
        exports.unstable_act = function() {
          throw Error("act(...) is not supported in production builds of React.");
        };
        /**
         * @param {Object} iterator
         * @param {Object} name
         * @return {?}
         */
        exports.useCallback = function(iterator, name) {
          return self.current.useCallback(iterator, name);
        };
        /**
         * @param {Object} iterator
         * @return {?}
         */
        exports.useContext = function(iterator) {
          return self.current.useContext(iterator);
        };
        /**
         * @return {undefined}
         */
        exports.useDebugValue = function() {
        };
        /**
         * @param {Object} iterator
         * @return {?}
         */
        exports.useDeferredValue = function(iterator) {
          return self.current.useDeferredValue(iterator);
        };
        /**
         * @param {Object} iterator
         * @param {Object} name
         * @return {?}
         */
        exports.useEffect = function(iterator, name) {
          return self.current.useEffect(iterator, name);
        };
        /**
         * @return {?}
         */
        exports.useId = function() {
          return self.current.useId();
        };
        /**
         * @param {Object} iterator
         * @param {Object} name
         * @param {(Object|string)} node
         * @return {?}
         */
        exports.useImperativeHandle = function(iterator, name, node) {
          return self.current.useImperativeHandle(iterator, name, node);
        };
        /**
         * @param {Object} iterator
         * @param {Object} name
         * @return {?}
         */
        exports.useInsertionEffect = function(iterator, name) {
          return self.current.useInsertionEffect(iterator, name);
        };
        /**
         * @param {Object} iterator
         * @param {Object} name
         * @return {?}
         */
        exports.useLayoutEffect = function(iterator, name) {
          return self.current.useLayoutEffect(iterator, name);
        };
        /**
         * @param {Object} iterator
         * @param {Object} name
         * @return {?}
         */
        exports.useMemo = function(iterator, name) {
          return self.current.useMemo(iterator, name);
        };
        /**
         * @param {Object} iterator
         * @param {Object} name
         * @param {(Object|string)} node
         * @return {?}
         */
        exports.useReducer = function(iterator, name, node) {
          return self.current.useReducer(iterator, name, node);
        };
        /**
         * @param {Object} iterator
         * @return {?}
         */
        exports.useRef = function(iterator) {
          return self.current.useRef(iterator);
        };
        /**
         * @param {Object} iterator
         * @return {?}
         */
        exports.useState = function(iterator) {
          return self.current.useState(iterator);
        };
        /**
         * @param {Object} iterator
         * @param {Object} name
         * @param {(Object|string)} node
         * @return {?}
         */
        exports.useSyncExternalStore = function(iterator, name, node) {
          return self.current.useSyncExternalStore(iterator, name, node);
        };
        /**
         * @return {?}
         */
        exports.useTransition = function() {
          return self.current.useTransition();
        };
        /** @type {string} */
        exports.version = "18.2.0";
      },
      /**
       * @param {Object} module
       * @param {?} dataAndEvents
       * @param {?} factory
       * @return {undefined}
       */
      791 : function(module, dataAndEvents, factory) {
        module.exports = factory(117);
      },
      /**
       * @param {Object} module
       * @param {?} dataAndEvents
       * @param {?} factory
       * @return {undefined}
       */
      184 : function(module, dataAndEvents, factory) {
        module.exports = factory(374);
      },
      /**
       * @param {?} deepDataAndEvents
       * @param {?} dataAndEvents
       * @return {undefined}
       */
      813 : function(deepDataAndEvents, dataAndEvents) {
        /**
         * @param {Object} context
         * @param {Object} v
         * @return {undefined}
         */
        function finish(context, v) {
          var j = context.length;
          context.push(v);
          e: for (;0 < j;) {
            /** @type {number} */
            var n = j - 1 >>> 1;
            var old = context[n];
            if (!(0 < equal(old, v))) {
              break e;
            }
            /** @type {Object} */
            context[n] = v;
            context[j] = old;
            /** @type {number} */
            j = n;
          }
        }
        /**
         * @param {Array} src
         * @return {?}
         */
        function require(src) {
          return 0 === src.length ? null : src[0];
        }
        /**
         * @param {Array} params
         * @return {?}
         */
        function get(params) {
          if (0 === params.length) {
            return null;
          }
          var fn = params[0];
          var val = params.pop();
          if (val !== fn) {
            params[0] = val;
            /** @type {number} */
            var idx = 0;
            var len = params.length;
            /** @type {number} */
            var idxEnd = len >>> 1;
            e: for (;idx < idxEnd;) {
              /** @type {number} */
              var key = 2 * (idx + 1) - 1;
              var v = params[key];
              /** @type {number} */
              var i = key + 1;
              var param = params[i];
              if (0 > equal(v, val)) {
                if (i < len && 0 > equal(param, v)) {
                  params[idx] = param;
                  params[i] = val;
                  /** @type {number} */
                  idx = i;
                } else {
                  params[idx] = v;
                  params[key] = val;
                  /** @type {number} */
                  idx = key;
                }
              } else {
                if (!(i < len && 0 > equal(param, val))) {
                  break e;
                }
                params[idx] = param;
                params[i] = val;
                /** @type {number} */
                idx = i;
              }
            }
          }
          return fn;
        }
        /**
         * @param {?} a
         * @param {Object} b
         * @return {?}
         */
        function equal(a, b) {
          /** @type {number} */
          var map = a.sortIndex - b.sortIndex;
          return 0 !== map ? map : a.id - b.id;
        }
        /**
         * @param {?} t
         * @return {undefined}
         */
        function callback(t) {
          var data = require(req);
          for (;null !== data;) {
            if (null === data.callback) {
              get(req);
            } else {
              if (!(data.startTime <= t)) {
                break;
              }
              get(req);
              data.sortIndex = data.expirationTime;
              finish(type, data);
            }
            data = require(req);
          }
        }
        /**
         * @param {?} i
         * @return {undefined}
         */
        function play(i) {
          if (end = false, callback(i), !doubleQuotedValue) {
            if (null !== require(type)) {
              /** @type {boolean} */
              doubleQuotedValue = true;
              method(fire);
            } else {
              var args = require(req);
              if (null !== args) {
                fn(play, args.startTime - i);
              }
            }
          }
        }
        /**
         * @param {boolean} e
         * @param {?} obj
         * @return {?}
         */
        function fire(e, obj) {
          /** @type {boolean} */
          doubleQuotedValue = false;
          if (end) {
            /** @type {boolean} */
            end = false;
            isUndefined(suiteView);
            /** @type {number} */
            suiteView = -1;
          }
          /** @type {boolean} */
          singleQoutedValue = true;
          var _data = data;
          try {
            callback(obj);
            options = require(type);
            for (;null !== options && (!(options.expirationTime > obj) || e && !oldfire());) {
              var f = options.callback;
              if ("function" === typeof f) {
                /** @type {null} */
                options.callback = null;
                data = options.priorityLevel;
                var value = f(options.expirationTime <= obj);
                obj = dataAndEvents.unstable_now();
                if ("function" === typeof value) {
                  /** @type {Function} */
                  options.callback = value;
                } else {
                  if (options === require(type)) {
                    get(type);
                  }
                }
                callback(obj);
              } else {
                get(type);
              }
              options = require(type);
            }
            if (null !== options) {
              /** @type {boolean} */
              var _results = true
            } else {
              var request = require(req);
              if (null !== request) {
                fn(play, request.startTime - obj);
              }
              /** @type {boolean} */
              _results = false;
            }
            return _results;
          } finally {
            /** @type {null} */
            options = null;
            data = _data;
            /** @type {boolean} */
            singleQoutedValue = false;
          }
        }
        /**
         * @return {?}
         */
        function oldfire() {
          return!(dataAndEvents.unstable_now() - start < limit);
        }
        /**
         * @return {undefined}
         */
        function func() {
          if (null !== values) {
            var pdataOld = dataAndEvents.unstable_now();
            start = pdataOld;
            /** @type {boolean} */
            var pdataCur = true;
            try {
              pdataCur = values(true, pdataOld);
            } finally {
              if (pdataCur) {
                cb();
              } else {
                /** @type {boolean} */
                E = false;
                /** @type {null} */
                values = null;
              }
            }
          } else {
            /** @type {boolean} */
            E = false;
          }
        }
        /**
         * @param {?} options
         * @return {undefined}
         */
        function method(options) {
          values = options;
          if (!E) {
            /** @type {boolean} */
            E = true;
            cb();
          }
        }
        /**
         * @param {Function} cb
         * @param {number} range
         * @return {undefined}
         */
        function fn(cb, range) {
          /** @type {number} */
          suiteView = nextTick(function() {
            cb(dataAndEvents.unstable_now());
          }, range);
        }
        if ("object" === typeof performance && "function" === typeof performance.now) {
          var S = performance;
          /**
           * @return {?}
           */
          dataAndEvents.unstable_now = function() {
            return S.now();
          };
        } else {
          /** @type {function (new:Date, ?=, ?=, ?=, ?=, ?=, ?=, ?=): string} */
          var clock = Date;
          /** @type {number} */
          var u = clock.now();
          /**
           * @return {?}
           */
          dataAndEvents.unstable_now = function() {
            return clock.now() - u;
          };
        }
        /** @type {Array} */
        var type = [];
        /** @type {Array} */
        var req = [];
        /** @type {number} */
        var equiv_class_id = 1;
        /** @type {null} */
        var options = null;
        /** @type {number} */
        var data = 3;
        /** @type {boolean} */
        var singleQoutedValue = false;
        /** @type {boolean} */
        var doubleQuotedValue = false;
        /** @type {boolean} */
        var end = false;
        /** @type {(function ((Function|null|string), number): number|null)} */
        var nextTick = "function" === typeof setTimeout ? setTimeout : null;
        /** @type {(function ((null|number|undefined)): ?|null)} */
        var isUndefined = "function" === typeof clearTimeout ? clearTimeout : null;
        /** @type {(function (function (): ?): number|null)} */
        var keys = "undefined" !== typeof setImmediate ? setImmediate : null;
        if ("undefined" !== typeof navigator) {
          if (void 0 !== navigator.scheduling) {
            if (void 0 !== navigator.scheduling.isInputPending) {
              navigator.scheduling.isInputPending.bind(navigator.scheduling);
            }
          }
        }
        var cb;
        /** @type {boolean} */
        var E = false;
        /** @type {null} */
        var values = null;
        /** @type {number} */
        var suiteView = -1;
        /** @type {number} */
        var limit = 5;
        /** @type {number} */
        var start = -1;
        if ("function" === typeof keys) {
          /**
           * @return {undefined}
           */
          cb = function() {
            keys(func);
          };
        } else {
          if ("undefined" !== typeof MessageChannel) {
            /** @type {MessageChannel} */
            var channel = new MessageChannel;
            /** @type {MessagePort} */
            var port = channel.port2;
            /** @type {function (): undefined} */
            channel.port1.onmessage = func;
            /**
             * @return {undefined}
             */
            cb = function() {
              port.postMessage(null);
            };
          } else {
            /**
             * @return {undefined}
             */
            cb = function() {
              nextTick(func, 0);
            };
          }
        }
        /** @type {number} */
        dataAndEvents.unstable_IdlePriority = 5;
        /** @type {number} */
        dataAndEvents.unstable_ImmediatePriority = 1;
        /** @type {number} */
        dataAndEvents.unstable_LowPriority = 4;
        /** @type {number} */
        dataAndEvents.unstable_NormalPriority = 3;
        /** @type {null} */
        dataAndEvents.unstable_Profiling = null;
        /** @type {number} */
        dataAndEvents.unstable_UserBlockingPriority = 2;
        /**
         * @param {?} data
         * @return {undefined}
         */
        dataAndEvents.unstable_cancelCallback = function(data) {
          /** @type {null} */
          data.callback = null;
        };
        /**
         * @return {undefined}
         */
        dataAndEvents.unstable_continueExecution = function() {
          if (!doubleQuotedValue) {
            if (!singleQoutedValue) {
              /** @type {boolean} */
              doubleQuotedValue = true;
              method(fire);
            }
          }
        };
        /**
         * @param {number} ns
         * @return {undefined}
         */
        dataAndEvents.unstable_forceFrameRate = function(ns) {
          if (0 > ns || 125 < ns) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          } else {
            /** @type {number} */
            limit = 0 < ns ? Math.floor(1E3 / ns) : 5;
          }
        };
        /**
         * @return {?}
         */
        dataAndEvents.unstable_getCurrentPriorityLevel = function() {
          return data;
        };
        /**
         * @return {?}
         */
        dataAndEvents.unstable_getFirstCallbackNode = function() {
          return require(type);
        };
        /**
         * @param {?} $sanitize
         * @return {?}
         */
        dataAndEvents.unstable_next = function($sanitize) {
          switch(data) {
            case 1:
            ;
            case 2:
            ;
            case 3:
              /** @type {number} */
              var tmp = 3;
              break;
            default:
              tmp = data;
          }
          var _data = data;
          data = tmp;
          try {
            return $sanitize();
          } finally {
            data = _data;
          }
        };
        /**
         * @return {undefined}
         */
        dataAndEvents.unstable_pauseExecution = function() {
        };
        /**
         * @return {undefined}
         */
        dataAndEvents.unstable_requestPaint = function() {
        };
        /**
         * @param {number} transformed
         * @param {?} $sanitize
         * @return {?}
         */
        dataAndEvents.unstable_runWithPriority = function(transformed, $sanitize) {
          switch(transformed) {
            case 1:
            ;
            case 2:
            ;
            case 3:
            ;
            case 4:
            ;
            case 5:
              break;
            default:
              /** @type {number} */
              transformed = 3;
          }
          var _data = data;
          /** @type {number} */
          data = transformed;
          try {
            return $sanitize();
          } finally {
            data = _data;
          }
        };
        /**
         * @param {Object} data
         * @param {Object} callback
         * @param {number} a
         * @return {?}
         */
        dataAndEvents.unstable_scheduleCallback = function(data, callback, a) {
          var b = dataAndEvents.unstable_now();
          switch("object" === typeof a && null !== a ? a = "number" === typeof(a = a.delay) && 0 < a ? b + a : b : a = b, data) {
            case 1:
              /** @type {number} */
              var id = -1;
              break;
            case 2:
              /** @type {number} */
              id = 250;
              break;
            case 5:
              /** @type {number} */
              id = 1073741823;
              break;
            case 4:
              /** @type {number} */
              id = 1E4;
              break;
            default:
              /** @type {number} */
              id = 5E3;
          }
          return data = {
            id : equiv_class_id++,
            callback : callback,
            priorityLevel : data,
            startTime : a,
            expirationTime : id = a + id,
            sortIndex : -1
          }, a > b ? (data.sortIndex = a, finish(req, data), null === require(type) && (data === require(req) && (end ? (isUndefined(suiteView), suiteView = -1) : end = true, fn(play, a - b)))) : (data.sortIndex = id, finish(type, data), doubleQuotedValue || (singleQoutedValue || (doubleQuotedValue = true, method(fire)))), data;
        };
        /** @type {function (): ?} */
        dataAndEvents.unstable_shouldYield = oldfire;
        /**
         * @param {Function} matcherFunction
         * @return {?}
         */
        dataAndEvents.unstable_wrapCallback = function(matcherFunction) {
          var _data = data;
          return function() {
            var newData = data;
            data = _data;
            try {
              return matcherFunction.apply(this, arguments);
            } finally {
              data = newData;
            }
          };
        };
      },
      /**
       * @param {Object} module
       * @param {?} dataAndEvents
       * @param {?} factory
       * @return {undefined}
       */
      296 : function(module, dataAndEvents, factory) {
        module.exports = factory(813);
      }
    };
    var modules = {};
    /**
     * @param {Function} c
     * @return {?}
     */
    t.n = function(c) {
      /** @type {function (): ?} */
      var value = c && c.__esModule ? function() {
        return c.default;
      } : function() {
        return c;
      };
      return t.d(value, {
        /** @type {function (): ?} */
        a : value
      }), value;
    };
    /**
     * @param {Function} ctx
     * @param {Object} props
     * @return {undefined}
     */
    t.d = function(ctx, props) {
      var name;
      for (name in props) {
        if (t.o(props, name)) {
          if (!t.o(ctx, name)) {
            Object.defineProperty(ctx, name, {
              enumerable : true,
              get : props[name]
            });
          }
        }
      }
    };
    /**
     * @param {Function} options
     * @param {string} name
     * @return {?}
     */
    t.o = function(options, name) {
      return Object.prototype.hasOwnProperty.call(options, name);
    };
    /** @type {string} */
    t.p = "/";
    (function() {
      /**
       * @param {Array} b
       * @param {Object} n
       * @return {?}
       */
      function $(b, n) {
        if (null == n || n > b.length) {
          n = b.length;
        }
        /** @type {number} */
        var i = 0;
        /** @type {Array} */
        var a = new Array(n);
        for (;i < n;i++) {
          a[i] = b[i];
        }
        return a;
      }
      /**
       * @param {Object} node
       * @param {number} d
       * @return {?}
       */
      function getType(node, d) {
        if (node) {
          if ("string" === typeof node) {
            return $(node, d);
          }
          /** @type {string} */
          var name = Object.prototype.toString.call(node).slice(8, -1);
          return "Object" === name && (node.constructor && (name = node.constructor.name)), "Map" === name || "Set" === name ? Array.from(node) : "Arguments" === name || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(name) ? $(node, d) : void 0;
        }
      }
      /**
       * @param {Object} child
       * @param {number} opt_attributes
       * @return {?}
       */
      function filter(child, opt_attributes) {
        return function(item) {
          if (Array.isArray(item)) {
            return item;
          }
        }(child) || (function(json, opt_attributes) {
          var object = null == json ? null : "undefined" != typeof Symbol && json[Symbol.iterator] || json["@@iterator"];
          if (null != object) {
            var data;
            var bulk;
            var listener;
            var value;
            /** @type {Array} */
            var matched = [];
            /** @type {boolean} */
            var callback2 = true;
            /** @type {boolean} */
            var s = false;
            try {
              if (listener = (object = object.call(json)).next, 0 === opt_attributes) {
                if (Object(object) !== object) {
                  return;
                }
                /** @type {boolean} */
                callback2 = false;
              } else {
                for (;!(callback2 = (data = listener.call(object)).done) && (matched.push(data.value), matched.length !== opt_attributes);callback2 = true) {
                }
              }
            } catch (fn) {
              /** @type {boolean} */
              s = true;
              bulk = fn;
            } finally {
              try {
                if (!callback2 && (null != object.return && (value = object.return(), Object(value) !== value))) {
                  return;
                }
              } finally {
                if (s) {
                  throw bulk;
                }
              }
            }
            return matched;
          }
        }(child, opt_attributes) || (getType(child, opt_attributes) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()));
      }
      /**
       * @param {Object} s
       * @return {?}
       */
      function fn(s) {
        return function(node) {
          if (Array.isArray(node)) {
            return $(node);
          }
        }(s) || (function(node) {
          if ("undefined" !== typeof Symbol && null != node[Symbol.iterator] || null != node["@@iterator"]) {
            return Array.from(node);
          }
        }(s) || (getType(s) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()));
      }
      /**
       * @param {Object} args
       * @param {Object} name
       * @return {?}
       */
      function test(args, name) {
        var a = "undefined" !== typeof Symbol && args[Symbol.iterator] || args["@@iterator"];
        if (!a) {
          if (Array.isArray(args) || ((a = getType(args)) || name && (args && "number" === typeof args.length))) {
            if (a) {
              args = a;
            }
            /** @type {number} */
            var index = 0;
            /**
             * @return {undefined}
             */
            var x = function() {
            };
            return{
              /** @type {function (): undefined} */
              s : x,
              /**
               * @return {?}
               */
              n : function() {
                return index >= args.length ? {
                  done : true
                } : {
                  done : false,
                  value : args[index++]
                };
              },
              /**
               * @param {?} index
               * @return {?}
               */
              e : function(index) {
                throw index;
              },
              /** @type {function (): undefined} */
              f : x
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var restore;
        /** @type {boolean} */
        var _ref1 = true;
        /** @type {boolean} */
        var u = false;
        return{
          /**
           * @return {undefined}
           */
          s : function() {
            a = a.call(args);
          },
          /**
           * @return {?}
           */
          n : function() {
            var test = a.next();
            return _ref1 = test.done, test;
          },
          /**
           * @param {?} index
           * @return {undefined}
           */
          e : function(index) {
            /** @type {boolean} */
            u = true;
            restore = index;
          },
          /**
           * @return {undefined}
           */
          f : function() {
            try {
              if (!_ref1) {
                if (!(null == a.return)) {
                  a.return();
                }
              }
            } finally {
              if (u) {
                throw restore;
              }
            }
          }
        };
      }
      var d = t(791);
      var results = t(250);
      var text = t(7);
      var root = t.n(text);
      var style = {
        xmlns : "http://www.w3.org/2000/svg",
        width : 24,
        height : 24,
        viewBox : "0 0 24 24",
        fill : "none",
        stroke : "currentColor",
        strokeWidth : 2,
        strokeLinecap : "round",
        strokeLinejoin : "round"
      };
      /** @type {function (Object, string, Object): Object} */
      var defineProperty = Object.defineProperty;
      /** @type {function (Object, Object): Object} */
      var defineProperties = Object.defineProperties;
      var hop = Object.getOwnPropertyDescriptors;
      var _callback = Object.getOwnPropertySymbols;
      /** @type {function (this:Object, *): boolean} */
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      /** @type {function (this:Object, string): boolean} */
      var replacer = Object.prototype.propertyIsEnumerable;
      /**
       * @param {Object} obj
       * @param {string} key
       * @param {string} value
       * @return {?}
       */
      var setValue = function(obj, key, value) {
        return key in obj ? defineProperty(obj, key, {
          enumerable : true,
          configurable : true,
          writable : true,
          value : value
        }) : obj[key] = value;
      };
      /**
       * @param {Object} result
       * @param {Object} value
       * @return {?}
       */
      var callback = function(result, value) {
        var key;
        for (key in value || (value = {})) {
          if (hasOwnProperty.call(value, key)) {
            setValue(result, key, value[key]);
          }
        }
        if (_callback) {
          var _ref;
          var args = test(_callback(value));
          try {
            args.s();
            for (;!(_ref = args.n()).done;) {
              key = _ref.value;
              if (replacer.call(value, key)) {
                setValue(result, key, value[key]);
              }
            }
          } catch (next) {
            args.e(next);
          } finally {
            args.f();
          }
        }
        return result;
      };
      /**
       * @param {string} index
       * @param {string} url
       * @param {Array} opt_attributes
       * @return {?}
       */
      var get = function(index, url, opt_attributes) {
        var self = (0, d.forwardRef)(function(actualObject, docRef) {
          var suiteView;
          var elementSize;
          /** @type {Object} */
          var object = actualObject;
          var value = object.color;
          var computed = void 0 === value ? "currentColor" : value;
          var length = object.size;
          var side = void 0 === length ? 24 : length;
          var type = object.stroke;
          var args = void 0 === type ? 2 : type;
          var grandchildren = object.children;
          var actual = function(value, keys) {
            var obj = {};
            var key;
            for (key in value) {
              if (hasOwnProperty.call(value, key)) {
                if (keys.indexOf(key) < 0) {
                  obj[key] = value[key];
                }
              }
            }
            if (null != value && _callback) {
              var _ref;
              var args = test(_callback(value));
              try {
                args.s();
                for (;!(_ref = args.n()).done;) {
                  key = _ref.value;
                  if (keys.indexOf(key) < 0) {
                    if (replacer.call(value, key)) {
                      obj[key] = value[key];
                    }
                  }
                }
              } catch (next) {
                args.e(next);
              } finally {
                args.f();
              }
            }
            return obj;
          }(object, ["color", "size", "stroke", "children"]);
          return(0, d.createElement)("svg", callback((suiteView = callback({
            ref : docRef
          }, style), elementSize = {
            width : side,
            height : side,
            stroke : computed,
            strokeWidth : args,
            className : "tabler-icon tabler-icon-".concat(index)
          }, defineProperties(suiteView, hop(elementSize))), actual), [].concat(fn(opt_attributes.map(function(me) {
            var dirs = filter(me, 2);
            var dir = dirs[0];
            var r20 = dirs[1];
            return(0, d.createElement)(dir, r20);
          })), fn(grandchildren || [])));
        });
        return self.propTypes = {
          color : root().string,
          size : root().oneOfType([root().string, root().number]),
          stroke : root().oneOfType([root().string, root().number])
        }, self.displayName = "".concat(url), self;
      };
      var children = get("menu-2", "IconMenu2", [["path", {
        d : "M4 6l16 0",
        key : "svg-0"
      }], ["path", {
        d : "M4 12l16 0",
        key : "svg-1"
      }], ["path", {
        d : "M4 18l16 0",
        key : "svg-2"
      }]]);
      var data = get("x", "IconX", [["path", {
        d : "M18 6l-12 12",
        key : "svg-0"
      }], ["path", {
        d : "M6 6l12 12",
        key : "svg-1"
      }]]);
      var nMinutes = t(184);
      /**
       * @return {?}
       */
      var update = function() {
        var dirs = filter((0, d.useState)(false), 2);
        var shallow = dirs[0];
        var dir = dirs[1];
        /**
         * @return {undefined}
         */
        var convert = function() {
          dir(!shallow);
        };
        /** @type {Array} */
        var mod = [{
          name : "Home",
          link : "#home"
        }, {
          name : "About",
          link : "#about"
        }, {
          name : "Projects",
          link : "#projects"
        }, {
          name : "Contact",
          link : "#contact"
        }];
        return(0, nMinutes.jsxs)(nMinutes.Fragment, {
          children : [(0, nMinutes.jsxs)("nav", {
            children : [(0, nMinutes.jsx)("h3", {
              /**
               * @return {undefined}
               */
              onClick : function() {
                window.scrollTo({
                  top : 0,
                  behavior : "smooth"
                });
              },
              className : "logo",
              children : "Made By Rayan"
            }), (0, nMinutes.jsxs)("ul", {
              children : [mod.map(function(params) {
                return(0, nMinutes.jsx)("li", {
                  children : (0, nMinutes.jsx)("a", {
                    href : params.link,
                    children : params.name
                  })
                }, params.name);
              }), (0, nMinutes.jsx)("li", {
                /**
                 * @return {?}
                 */
                onClick : function() {
                  return convert();
                },
                children : (0, nMinutes.jsx)(children, {
                  className : "mobile-menu",
                  width : 30,
                  height : 30
                })
              })]
            })]
          }), (0, nMinutes.jsxs)("div", {
            className : "mobile-nav ".concat(shallow ? "open-menu" : "closed-menu"),
            children : [(0, nMinutes.jsx)("span", {
              /**
               * @return {?}
               */
              onClick : function() {
                return convert();
              },
              children : (0, nMinutes.jsx)(data, {
                width : 30,
                height : 30
              })
            }), (0, nMinutes.jsx)("ul", {
              children : mod.map(function(params) {
                return(0, nMinutes.jsx)("li", {
                  /**
                   * @return {?}
                   */
                  onClick : function() {
                    return convert();
                  },
                  children : (0, nMinutes.jsx)("a", {
                    href : params.link,
                    children : params.name
                  })
                }, params.name);
              })
            })]
          })]
        });
      };
      /** @type {string} */
      var srcTerminal = t.p + "images/waving.1bae5fcfb51082b5c2b4.png";
      var path = get("brand-linkedin", "IconBrandLinkedin", [["path", {
        d : "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",
        key : "svg-0"
      }], ["path", {
        d : "M8 11l0 5",
        key : "svg-1"
      }], ["path", {
        d : "M8 8l0 .01",
        key : "svg-2"
      }], ["path", {
        d : "M12 16l0 -5",
        key : "svg-3"
      }], ["path", {
        d : "M16 16v-3a2 2 0 0 0 -4 0",
        key : "svg-4"
      }]]);
      var storage = get("brand-github", "IconBrandGithub", [["path", {
        d : "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",
        key : "svg-0"
      }]]);
      /** @type {Array} */
      var mod = [{
        img : "https://skillicons.dev/icons?i=js,react&theme=light",
        id : 1
      }, {
        img : "https://skillicons.dev/icons?i=vue,nodejs&theme=light",
        id : 2
      }, {
        img : "https://skillicons.dev/icons?i=java,spring&theme=light",
        id : 3
      }, {
        img :"https://skillicons.dev/icons?i=mysql,php&theme=light",
        id : 4
      }, {
      img : "https://skillicons.dev/icons?i=cs,dotnet&theme=light",
      id: 5
    }];
      /**
       * @return {?}
       */
      var init = function() {
        return(0, nMinutes.jsx)(nMinutes.Fragment, {
          children : (0, nMinutes.jsx)("section", {
            id : "home",
            className : "hero",
            children : (0, nMinutes.jsx)("div", {
              className : "container",
              children : (0, nMinutes.jsxs)("div", {
                className : "content",
                children : [(0, nMinutes.jsxs)("div", {
                  className : "hero-main",
                  children : [(0, nMinutes.jsxs)("div", {
                    className : "hero-text",
                    children : [(0, nMinutes.jsx)("h1", {
                      children : "Junior Software Developer"
                    }), (0, nMinutes.jsx)("img", {
                      src : "images/waving.1bae5fcfb51082b5c2b4.png"
                    }), (0, nMinutes.jsx)("p", {
                      children : "Hi there ! Welcome to my website Portfolio. I'm Rayan, a graduate Software Developer enthusiast from UWE Bristol, now open to work, Im eager to expand my knowledge and expertise."
                    }), (0, nMinutes.jsxs)("span", {
                      children : [(0, nMinutes.jsx)("a", {
                        "aria-label" : "linkedin",
                        rel : "noreferrer",
                        target : "_blank",
                        href : "http://www.linkedin.com/in/rayan-louahche",
                        children : (0, nMinutes.jsx)(path, {
                          width : 32,
                          height : 32
                        })
                      }), (0, nMinutes.jsx)("a", {
                        "aria-label" : "github",
                        rel : "noreferrer",
                        target : "_blank",
                        href : "https://github.com/RyanL2004",
                        children : (0, nMinutes.jsx)(storage, {
                          width : 32,
                          height : 32
                        })
                      })]
                    })]
                  }), (0, nMinutes.jsx)("div", {
                    className : "hero-img"
                  })]
                }), (0, nMinutes.jsxs)("div", {
                  className : "skills",
                  children : [(0, nMinutes.jsx)("p", {
                    children : "Tech Stack"
                  }), (0, nMinutes.jsx)("div", {
                    className : "logos",
                    children : (0, nMinutes.jsx)("ul", {
                      children : mod.map(function(item) {
                        return(0, nMinutes.jsx)("li", {
                          children : (0, nMinutes.jsx)("img", {
                            src : item.img,
                            alt : "skill-icon"
                          })
                        }, item.id);
                      })
                    })
                  })]
                })]
              })
            })
          })
        });
      };
      /** @type {string} */
      var imgSrc = t.p + "images/about-img.62b47e7f183d4b4e9feb.webp";
      /** @type {string} */
      var wscCoreUrl = t.p + "images/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";
      /** @type {string} */
      var scriptLocation = t.p + "images/working-emoji.c5325f52b5be329995a5.png";
      /**
       * @return {?}
       */
      var Redactor = function() {
        return(0, nMinutes.jsx)(nMinutes.Fragment, {
          children : (0, nMinutes.jsx)("section", {
            className : "about",
            id : "about",
            children : (0, nMinutes.jsx)("div", {
              className : "container",
              children : (0, nMinutes.jsxs)("div", {
                className : "about-content",
                children : [(0, nMinutes.jsxs)("div", {
                  className : "img-side",
                  children : [(0, nMinutes.jsx)("img", {
                    src : "images/working-emoji.c5325f52b5be329995a5.png",
                    alt : "emoji",
                    className : "work-emoji"
                  }), (0, nMinutes.jsx)("img", {
                    src : "images/about-img.62b47e7f183d4b4e9feb.webp",
                    alt : "mee",
                    className : "img-side__main-img"
                  }), (0, nMinutes.jsx)("span", {
                    children : (0, nMinutes.jsx)("img", {
                      src : "https://github.com/user-attachments/assets/465f1813-2d40-4e15-9d68-92f0f73c5f30",
                      alt : "text"
                    })
                  })]
                }), (0, nMinutes.jsxs)("div", {
                  className : "text-side",
                  children : [(0, nMinutes.jsx)("h3", {
                    children : "About me"
                  }), (0, nMinutes.jsxs)("h4", {
                    children : ["Motivated Junior Software Developer", (0, nMinutes.jsx)("br", {}), " based in Bristol, UK \ud83d\udccd"]
                  }), (0, nMinutes.jsxs)("p", {
                    children : ["Adaptable graduate with a Second-Class Honours (2:1) bachelor’s degree in Software Engineering for Business from UWE Bristol. Proficient in programming languages such as JavaScript, C#, and Java, with strong interest and hands-on experience in Front-End development and adherence to best practices like SOLID, DRY and Design Patterns. Skilled in managing complex projects, collaborating effectively, and delivering high-quality solutions under tight deadlines. Fluent in French and English, with strong communication skills and a passion for leveraging technology to solve real-world problems.", (0, nMinutes.jsx)("br", {}), (0, nMinutes.jsx)("br", {}), "My main stack currently is | Java Script, React.js, Vue.js, Node.js | Java, Spring Boot | C#, ASP.NET "]
                  })]
                })]
              })
            })
          })
        });
      };
      /**
       * @return {?}
       */


      var create = function() {
        return (0, nMinutes.jsx)(nMinutes.Fragment, {
          children: (0, nMinutes.jsx)("section", {
            id: "projects",
            className: "project1",
            style: { padding: "50px 0", textAlign: "left" },
            children: (0, nMinutes.jsx)("div", {
              className: "container",
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "1200px",
                margin: "0 auto"
              },
              children: [
                // Image side
                (0, nMinutes.jsx)("div", {
                  className: "project-image",
                  style: { flex: "1", paddingRight: "20px" },
                  children: (0, nMinutes.jsx)("img", {
                    src: "https://github.com/user-attachments/assets/726f72a8-9c19-427e-ae7f-860fe44ede54", // Replace with your image path
                    alt: "Project Screenshot",
                    style: {
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                    }
                  })
                }),
                // Text side
                (0, nMinutes.jsx)("div", {
                  className: "project-text",
                  style: { flex: "1", paddingLeft: "20px" },
                  children: [
                    (0, nMinutes.jsx)("h3", {
                      style: { fontSize: "24px", marginBottom: "10px" },
                      children: "GPT Translation SaaS 🤖"
                    }),
                    (0, nMinutes.jsx)("p", {
                      style: { fontSize: "16px", marginBottom: "20px" },
                      children:
                        "A fully functional language translation application with advanced AI capabilities that was built along with UWE Bristol, facilitating seamless communication across language barriers. Enhanced user accessibility with speech-to-text and text-to-speech functionalities, catering to users with disabilities."
                    }),
                    (0, nMinutes.jsxs)("p", {
                      style: { fontSize: "16px", marginBottom: "10px" },
                      children: ["Languages: ", (0, nMinutes.jsx)("b", { children: "JavaScript | C# | HTML | LESS" })]
                    }),
                    (0, nMinutes.jsxs)("p", {
                      style: { fontSize: "16px", marginBottom: "10px" },
                      children: ["Technologies: ", (0, nMinutes.jsx)("b", { children: "React, Node, ASP.NET, OpenAI" })]
                    }),
                    
                    // Code and Demo links
                    (0, nMinutes.jsxs)("div", {
                      style: { display: "flex", alignItems: "center" },
                      children: [
                        (0, nMinutes.jsx)("a", {
                          href: "https://github.com/RyanL2004/ai-react-app", // Replace with your code repository link
                          target: "_blank",
                          rel: "noopener noreferrer",
                          style: {
                            textDecoration: "none",
                            color: "#000",
                            marginRight: "20px",
                            display: "flex",
                            alignItems: "center"
                          },
                          children: [
                            (0, nMinutes.jsx)("i", {
                              className: "fa fa-github",
                              style: { marginRight: "5px" }
                            }),
                            "Code"
                          ]
                        }),
                        (0, nMinutes.jsx)("a", {
                          href: "https://main.d2kq90havoolfb.amplifyapp.com/", // Updated to your Live Demo URL
                          target: "_blank",
                          rel: "noopener noreferrer",
                          style: {
                            textDecoration: "none",
                            color: "#000",
                            display: "flex",
                            alignItems: "center"
                          },
                          children: [
                            (0, nMinutes.jsx)("i", {
                              className: "fa fa-external-link",
                              style: { marginRight: "10px"}
                            }),
                            "Live Demo Here"
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          })
        });
      };
      
      var create2 = function() {
        return(0, nMinutes.jsx)(nMinutes.Fragment, {
          children : (0, nMinutes.jsx)("section", {
            id : "projects",
            className : "project2",
            style: { padding: "50px 0", textAlign: "left" },
            children : (0, nMinutes.jsx)("div", {
              className : "container",
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "1200px",
                margin: "0 auto"
              },
              children : [
                //image side
                (0, nMinutes.jsx)("div", {
                  className: "project-image",
                  style: { flex: "1", paddingRight: "20px" },
                  children: (0, nMinutes.jsx)("img", {
                    src: "https://cdn.discordapp.com/attachments/908815689454858330/1287051903410372708/image.png?ex=66f023fe&is=66eed27e&hm=e559f535aa499dec50a71abc0b31b4b6e09b731063a5d754f9305967ee23a400&", // Replace with your image path
                    alt: "Project Screenshot",
                    style: {
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                    }
                  })
                }),
                  // Text side
                  (0, nMinutes.jsx)("div", {
                    className: "project-text",
                    style: { flex: "1", paddingLeft: "20px" },
                    children: [
                      (0, nMinutes.jsx)("h3", {
                        style: { fontSize: "24px", marginBottom: "10px" },
                        children: "TRESA - Web system & urban map 🌿"
                      }),
                      (0, nMinutes.jsx)("p", {
                        style: { fontSize: "16px", marginBottom: "20px" },
                        children:
                          "Worked alongside a Team to develop a fully integrated web system and Urban map. \nCreated a project plan and Gantt Chart from scratch while applying an agile project methodology.\nGathered technical and functional requirements from client, Created an SRS doc.\nDesigned and handled Database Administration and management.\nCreated a Custom API for Google Maps integration and Database interaction.\nEnabled User Data input and validation on non-declared urban green spaces.\nDelivered an Integration Strategy, Sustainability and Maintainability documents.\nSecured Client sign-off, demonstrating outstanding satisfaction with the project's outcomes."
                      }),
                      (0, nMinutes.jsxs)("p", {
                        style: { fontSize: "16px", marginBottom: "10px" },
                        children: ["Languages: ", (0, nMinutes.jsx)("b", { children: "JavaScript | PhP | MySQL servers 2022" })]
                      }),
                      (0, nMinutes.jsxs)("p", {
                  style: { fontSize: "16px", marginBottom: "10px" },
                        children: ["Technologies: ", (0, nMinutes.jsx)("b", { children: "Vue.js | Laravel | SSMS | Word Press | Google Maps" })]
                      }),
                      (0, nMinutes.jsxs)("div", {
                        style: { display: "flex", alignItems: "center" },
                        children: [
                          (0, nMinutes.jsx)("a", {
                            href: "https://github.com/RyanL2004/tresa-urban-project", // Replace with your code repository link
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                              textDecoration: "none",
                              color: "#000",
                              marginRight: "20px",
                              display: "flex",
                              alignItems: "center"
                            },
                            children: [
                              (0, nMinutes.jsx)("i", {
                                className: "fa fa-github",
                                style: { marginRight: "5px" }
                              }),
                              "Code"
                            ]
                          }),
                          (0, nMinutes.jsx)("a", {
                            href: "https://www.tresa.org.uk", // Updated to your Live Demo URL
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                              textDecoration: "none",
                              color: "#000",
                              display: "flex",
                              alignItems: "center"
                            },
                            children: [
                              (0, nMinutes.jsx)("i", {
                                className: "fa fa-external-link",
                                style: { marginRight: "10px"}
                              }),
                              "Live Demo Here"
                            ]
                          })
                        ]
                      })
                  ]
                })
              ]
            })
          })
        });
      };
      
//////////////////////////
      var selectorElem = get("map-search", "IconMapSearch", [["path", {
        d : "M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5",
        key : "svg-0"
      }], ["path", {
        d : "M9 4v13",
        key : "svg-1"
      }], ["path", {
        d : "M15 7v5",
        key : "svg-2"
      }], ["path", {
        d : "M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
        key : "svg-3"
      }], ["path", {
        d : "M20.2 20.2l1.8 1.8",
        key : "svg-4"
      }]]);

      var phone = get("phone", "IconPhone", [["path", {
        d:"M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z", // phone icon
        key :"svg-0"
      }], ["path", {
        d: "M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z",
        key: "svg-1"
      }]])

      var domain = get("mail", "IconMail", [["path", {
        d : "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",
        key : "svg-0"
      }], ["path", {
        d : "M3 7l9 6l9 -6",
        key : "svg-1"
      }]]);
      
      /**
       * @return {?}
       */
      var parse = function() {
        return(0, nMinutes.jsx)(nMinutes.Fragment, {
          children : (0, nMinutes.jsx)("section", {
            id : "contact",
            className : "contact",
            children : (0, nMinutes.jsx)("div", {
              className : "container",
              children : (0, nMinutes.jsxs)("div", {
                className : "contact__content",
                children : [(0, nMinutes.jsxs)("div", {
                  className : "contact__title",
                  children : [(0, nMinutes.jsx)("p", {
                    children : "contact"
                  }), (0, nMinutes.jsx)("h3", {
                    children : "Don't be shy! Hit me up! \ud83d\udc47"
                  })]
                }), (0, nMinutes.jsxs)("div", {
                  className : "contact__icons",
                  children : [(0, nMinutes.jsxs)("div", {
                    className : "contact__icon-box",
                    children : [(0, nMinutes.jsx)("span", {
                      children : (0, nMinutes.jsx)(selectorElem, {
                        width : 30,
                        height : 30
                      })
                    }), (0, nMinutes.jsxs)("div", {
                      className : "contact__info",
                      children : [(0, nMinutes.jsx)("h3", {
                        children : "Location"
                      }), (0, nMinutes.jsx)("p", {
                        children : "Bristol, UK"
                      })]
                    })]
                  }),
                  (0, nMinutes.jsxs)("div", {
                    className : "contact__icon-box",
                    children : [(0, nMinutes.jsx)("span", {
                      children : (0, nMinutes.jsx)(phone, {
                        width : 30,
                        height : 30
                      })
                    }), (0, nMinutes.jsxs)("div", {
                      className : "contact__info",
                      children : [(0, nMinutes.jsx)("h3", {
                        children : "Phone"
                      }), (0, nMinutes.jsx)("a", {
                        children : "+44 7479 421186"
                      })]
                    }), 
                    ]
                  }),
                  (0, nMinutes.jsxs)("div", {
                    className : "contact__icon-box",
                    children : [(0, nMinutes.jsx)("span", {
                      children : (0, nMinutes.jsx)(domain, {
                        width : 30,
                        height : 30
                      })
                    }), (0, nMinutes.jsxs)("div", {
                      className : "contact__info",
                      children : [(0, nMinutes.jsx)("h3", {
                        children : "Mail"
                      }), (0, nMinutes.jsx)("a", {
                        href : "mailto:rayanlouahche2004@gmail.com",
                        children : "rayanlouahche2004@gmail.com"
                      })]
                    }),]
                  })]
                })]
              })
            })
          })
        });
      };
      /**
       * @return {?}
       */
      var success = function() {
        return(0, nMinutes.jsx)(nMinutes.Fragment, {
          children : (0, nMinutes.jsx)("footer", {
            children : (0, nMinutes.jsx)("div", {
              className : "container",
              children : (0, nMinutes.jsxs)("div", {
                className : "footerc",
                children : [(0, nMinutes.jsxs)("h3", {
                  children : ["Copyright \u00a9 ", (new Date).getFullYear(), ". All rights are reserved"]
                }), (0, nMinutes.jsxs)("div", {
                  className : "footerc__socials",
                  children : [(0, nMinutes.jsx)("a", {
                    "aria-label" : "linkedin",
                    target : "_blank",
                    rel : "noreferrer",
                    href : "http://www.linkedin.com/in/rayan-louahche",
                    children : (0, nMinutes.jsx)(path, {
                      width : 30,
                      height : 30
                    })
                  }), (0, nMinutes.jsx)("a", {
                    "aria-label" : "github",
                    target : "_blank",
                    rel : "noreferrer",
                    href : "https://github.com/RyanL2004",
                    children : (0, nMinutes.jsx)(storage, {
                      width : 30,
                      height : 30
                    })
                  })]
                })]
              })
            })
          })
        });
      };
      /**
       * @return {?}
       */
      var collections = function() {
        return(0, nMinutes.jsxs)(nMinutes.Fragment, {
          children : [(0, nMinutes.jsx)(update, {}), (0, nMinutes.jsx)(init, {}), (0, nMinutes.jsx)(Redactor, {}), (0, nMinutes.jsx)(create, {}),(0, nMinutes.jsx)(create2, {}), (0, nMinutes.jsx)(parse, {}), (0, nMinutes.jsx)(success, {})]
        });
      };
      /**
       * @return {?}
       */
      var r20 = function() {
        return(0, nMinutes.jsx)(nMinutes.Fragment, {
          children : (0, nMinutes.jsx)(collections, {})
        });
      };
      results.createRoot(document.getElementById("root")).render((0, nMinutes.jsx)(d.StrictMode, {
        children : (0, nMinutes.jsx)(r20, {})
      }));
    })();
  }();
  