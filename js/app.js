   (function() {
   	var innerGlobal = typeof window != "undefined" ? window : global;
   	var exportTo = {};
   	(function(window, global, module) {
   		var r;

   		function aa(a) {
   			var b = 0;
   			return function() {
   				return b < a.length ? {
   					done: !1,
   					value: a[b++]
   				} : {
   					done: !0
   				}
   			}
   		}
   		var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
   			if (a == Array.prototype || a == Object.prototype) return a;
   			a[b] = c.value;
   			return a
   		};

   		function ca(a) {
   			a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
   			for (var b = 0; b < a.length; ++b) {
   				var c = a[b];
   				if (c && c.Math == Math) return c
   			}
   			throw Error("Cannot find global object");
   		}
   		var da = ca(this);

   		function ea(a, b) {
   			if (b) a: {
   				var c = da;a = a.split(".");
   				for (var d = 0; d < a.length - 1; d++) {
   					var e = a[d];
   					if (!(e in c)) break a;
   					c = c[e]
   				}
   				a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
   					configurable: !0,
   					writable: !0,
   					value: b
   				})
   			}
   		}
   		ea("Symbol", function(a) {
   			function b(f) {
   				if (this instanceof b) throw new TypeError("Symbol is not a constructor");
   				return new c(d + (f || "") + "_" + e++, f)
   			}

   			function c(f, g) {
   				this.g = f;
   				ba(this, "description", {
   					configurable: !0,
   					writable: !0,
   					value: g
   				})
   			}
   			if (a) return a;
   			c.prototype.toString = function() {
   				return this.g
   			};
   			var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
   				e = 0;
   			return b
   		});
   		ea("Symbol.iterator", function(a) {
   			if (a) return a;
   			a = Symbol("Symbol.iterator");
   			for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
   				var d = da[b[c]];
   				"function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
   					configurable: !0,
   					writable: !0,
   					value: function() {
   						return ha(aa(this))
   					}
   				})
   			}
   			return a
   		});

   		function ha(a) {
   			a = {
   				next: a
   			};
   			a[Symbol.iterator] = function() {
   				return this
   			};
   			return a
   		}

   		function t(a) {
   			var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
   			return b ? b.call(a) : {
   				next: aa(a)
   			}
   		}

   		function x(a) {
   			if (!(a instanceof Array)) {
   				a = t(a);
   				for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
   				a = c
   			}
   			return a
   		}
   		var ia = "function" == typeof Object.create ? Object.create : function(a) {
   				function b() {}
   				b.prototype = a;
   				return new b
   			},
   			ja;
   		if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
   		else {
   			var ka;
   			a: {
   				var la = {
   						a: !0
   					},
   					ma = {};
   				try {
   					ma.__proto__ = la;
   					ka = ma.a;
   					break a
   				} catch (a) {}
   				ka = !1
   			}
   			ja = ka ? function(a, b) {
   				a.__proto__ = b;
   				if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
   				return a
   			} : null
   		}
   		var na = ja;

   		function oa(a, b) {
   			a.prototype = ia(b.prototype);
   			a.prototype.constructor = a;
   			if (na) na(a, b);
   			else
   				for (var c in b)
   					if ("prototype" != c)
   						if (Object.defineProperties) {
   							var d = Object.getOwnPropertyDescriptor(b, c);
   							d && Object.defineProperty(a, c, d)
   						} else a[c] = b[c];
   			a.Uj = b.prototype
   		}

   		function pa() {
   			this.o = !1;
   			this.l = null;
   			this.h = void 0;
   			this.g = 1;
   			this.j = this.m = 0;
   			this.A = this.i = null
   		}

   		function qa(a) {
   			if (a.o) throw new TypeError("Generator is already running");
   			a.o = !0
   		}
   		pa.prototype.s = function(a) {
   			this.h = a
   		};

   		function ta(a, b) {
   			a.i = {
   				mg: b,
   				xg: !0
   			};
   			a.g = a.m || a.j
   		}
   		pa.prototype.return = function(a) {
   			this.i = {
   				return: a
   			};
   			this.g = this.j
   		};

   		function E(a, b, c) {
   			a.g = c;
   			return {
   				value: b
   			}
   		}
   		pa.prototype.u = function(a) {
   			this.g = a
   		};

   		function F(a) {
   			a.g = 0
   		}

   		function ua(a, b, c) {
   			a.m = b;
   			void 0 != c && (a.j = c)
   		}

   		function va(a, b) {
   			a.m = 0;
   			a.j = b || 0
   		}

   		function wa(a, b, c) {
   			a.g = b;
   			a.m = c || 0
   		}

   		function ya(a, b) {
   			a.m = b || 0;
   			b = a.i.mg;
   			a.i = null;
   			return b
   		}

   		function za(a) {
   			a.A = [a.i];
   			a.m = 0;
   			a.j = 0
   		}

   		function Ba(a, b) {
   			var c = a.A.splice(0)[0];
   			(c = a.i = a.i || c) ? c.xg ? a.g = a.m || a.j : void 0 != c.u && a.j < c.u ? (a.g = c.u, a.i = null) : a.g = a.j: a.g = b
   		}

   		function Ca(a) {
   			this.g = new pa;
   			this.h = a
   		}

   		function Da(a, b) {
   			qa(a.g);
   			var c = a.g.l;
   			if (c) return Ea(a, "return" in c ? c["return"] : function(d) {
   				return {
   					value: d,
   					done: !0
   				}
   			}, b, a.g.return);
   			a.g.return(b);
   			return Fa(a)
   		}

   		function Ea(a, b, c, d) {
   			try {
   				var e = b.call(a.g.l, c);
   				if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
   				if (!e.done) return a.g.o = !1, e;
   				var f = e.value
   			} catch (g) {
   				return a.g.l = null, ta(a.g, g), Fa(a)
   			}
   			a.g.l = null;
   			d.call(a.g, f);
   			return Fa(a)
   		}

   		function Fa(a) {
   			for (; a.g.g;) try {
   				var b = a.h(a.g);
   				if (b) return a.g.o = !1, {
   					value: b.value,
   					done: !1
   				}
   			} catch (c) {
   				a.g.h = void 0, ta(a.g, c)
   			}
   			a.g.o = !1;
   			if (a.g.i) {
   				b = a.g.i;
   				a.g.i = null;
   				if (b.xg) throw b.mg;
   				return {
   					value: b.return,
   					done: !0
   				}
   			}
   			return {
   				value: void 0,
   				done: !0
   			}
   		}

   		function Ga(a) {
   			this.next = function(b) {
   				qa(a.g);
   				a.g.l ? b = Ea(a, a.g.l.next, b, a.g.s) : (a.g.s(b), b = Fa(a));
   				return b
   			};
   			this.throw = function(b) {
   				qa(a.g);
   				a.g.l ? b = Ea(a, a.g.l["throw"], b, a.g.s) : (ta(a.g, b), b = Fa(a));
   				return b
   			};
   			this.return = function(b) {
   				return Da(a, b)
   			};
   			this[Symbol.iterator] = function() {
   				return this
   			}
   		}

   		function Ha(a) {
   			function b(d) {
   				return a.next(d)
   			}

   			function c(d) {
   				return a.throw(d)
   			}
   			return new Promise(function(d, e) {
   				function f(g) {
   					g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
   				}
   				f(a.next())
   			})
   		}

   		function O(a) {
   			return Ha(new Ga(new Ca(a)))
   		}

   		function Ka() {
   			for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
   			return b
   		}
   		ea("Promise", function(a) {
   			function b(g) {
   				this.h = 0;
   				this.i = void 0;
   				this.g = [];
   				this.o = !1;
   				var h = this.j();
   				try {
   					g(h.resolve, h.reject)
   				} catch (k) {
   					h.reject(k)
   				}
   			}

   			function c() {
   				this.g = null
   			}

   			function d(g) {
   				return g instanceof b ? g : new b(function(h) {
   					h(g)
   				})
   			}
   			if (a) return a;
   			c.prototype.h = function(g) {
   				if (null == this.g) {
   					this.g = [];
   					var h = this;
   					this.i(function() {
   						h.l()
   					})
   				}
   				this.g.push(g)
   			};
   			var e = da.setTimeout;
   			c.prototype.i = function(g) {
   				e(g, 0)
   			};
   			c.prototype.l = function() {
   				for (; this.g && this.g.length;) {
   					var g = this.g;
   					this.g = [];
   					for (var h = 0; h < g.length; ++h) {
   						var k =
   							g[h];
   						g[h] = null;
   						try {
   							k()
   						} catch (l) {
   							this.j(l)
   						}
   					}
   				}
   				this.g = null
   			};
   			c.prototype.j = function(g) {
   				this.i(function() {
   					throw g;
   				})
   			};
   			b.prototype.j = function() {
   				function g(l) {
   					return function(m) {
   						k || (k = !0, l.call(h, m))
   					}
   				}
   				var h = this,
   					k = !1;
   				return {
   					resolve: g(this.F),
   					reject: g(this.l)
   				}
   			};
   			b.prototype.F = function(g) {
   				if (g === this) this.l(new TypeError("A Promise cannot resolve to itself"));
   				else if (g instanceof b) this.H(g);
   				else {
   					a: switch (typeof g) {
   						case "object":
   							var h = null != g;
   							break a;
   						case "function":
   							h = !0;
   							break a;
   						default:
   							h = !1
   					}
   					h ? this.C(g) : this.m(g)
   				}
   			};
   			b.prototype.C = function(g) {
   				var h = void 0;
   				try {
   					h = g.then
   				} catch (k) {
   					this.l(k);
   					return
   				}
   				"function" == typeof h ? this.J(h, g) : this.m(g)
   			};
   			b.prototype.l = function(g) {
   				this.s(2, g)
   			};
   			b.prototype.m = function(g) {
   				this.s(1, g)
   			};
   			b.prototype.s = function(g, h) {
   				if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
   				this.h = g;
   				this.i = h;
   				2 === this.h && this.G();
   				this.A()
   			};
   			b.prototype.G = function() {
   				var g = this;
   				e(function() {
   					if (g.B()) {
   						var h = da.console;
   						"undefined" !== typeof h && h.error(g.i)
   					}
   				}, 1)
   			};
   			b.prototype.B =
   				function() {
   					if (this.o) return !1;
   					var g = da.CustomEvent,
   						h = da.Event,
   						k = da.dispatchEvent;
   					if ("undefined" === typeof k) return !0;
   					"function" === typeof g ? g = new g("unhandledrejection", {
   						cancelable: !0
   					}) : "function" === typeof h ? g = new h("unhandledrejection", {
   						cancelable: !0
   					}) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
   					g.promise = this;
   					g.reason = this.i;
   					return k(g)
   				};
   			b.prototype.A = function() {
   				if (null != this.g) {
   					for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
   					this.g = null
   				}
   			};
   			var f = new c;
   			b.prototype.H = function(g) {
   				var h = this.j();
   				g.Od(h.resolve, h.reject)
   			};
   			b.prototype.J = function(g, h) {
   				var k = this.j();
   				try {
   					g.call(h, k.resolve, k.reject)
   				} catch (l) {
   					k.reject(l)
   				}
   			};
   			b.prototype.then = function(g, h) {
   				function k(p, q) {
   					return "function" == typeof p ? function(u) {
   						try {
   							l(p(u))
   						} catch (v) {
   							m(v)
   						}
   					} : q
   				}
   				var l, m, n = new b(function(p, q) {
   					l = p;
   					m = q
   				});
   				this.Od(k(g, l), k(h, m));
   				return n
   			};
   			b.prototype.catch = function(g) {
   				return this.then(void 0, g)
   			};
   			b.prototype.Od = function(g, h) {
   				function k() {
   					switch (l.h) {
   						case 1:
   							g(l.i);
   							break;
   						case 2:
   							h(l.i);
   							break;
   						default:
   							throw Error("Unexpected state: " + l.h);
   					}
   				}
   				var l = this;
   				null == this.g ? f.h(k) : this.g.push(k);
   				this.o = !0
   			};
   			b.resolve = d;
   			b.reject = function(g) {
   				return new b(function(h, k) {
   					k(g)
   				})
   			};
   			b.race = function(g) {
   				return new b(function(h, k) {
   					for (var l = t(g), m = l.next(); !m.done; m = l.next()) d(m.value).Od(h, k)
   				})
   			};
   			b.all = function(g) {
   				var h = t(g),
   					k = h.next();
   				return k.done ? d([]) : new b(function(l, m) {
   					function n(u) {
   						return function(v) {
   							p[u] = v;
   							q--;
   							0 == q && l(p)
   						}
   					}
   					var p = [],
   						q = 0;
   					do p.push(void 0), q++, d(k.value).Od(n(p.length - 1), m), k = h.next();
   					while (!k.done)
   				})
   			};
   			return b
   		});

   		function La(a, b) {
   			return Object.prototype.hasOwnProperty.call(a, b)
   		}
   		ea("WeakMap", function(a) {
   			function b(k) {
   				this.g = (h += Math.random() + 1).toString();
   				if (k) {
   					k = t(k);
   					for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
   				}
   			}

   			function c() {}

   			function d(k) {
   				var l = typeof k;
   				return "object" === l && null !== k || "function" === l
   			}

   			function e(k) {
   				if (!La(k, g)) {
   					var l = new c;
   					ba(k, g, {
   						value: l
   					})
   				}
   			}

   			function f(k) {
   				var l = Object[k];
   				l && (Object[k] = function(m) {
   					if (m instanceof c) return m;
   					Object.isExtensible(m) && e(m);
   					return l(m)
   				})
   			}
   			if (function() {
   					if (!a || !Object.seal) return !1;
   					try {
   						var k = Object.seal({}),
   							l = Object.seal({}),
   							m = new a([
   								[k, 2],
   								[l, 3]
   							]);
   						if (2 != m.get(k) || 3 != m.get(l)) return !1;
   						m.delete(k);
   						m.set(l, 4);
   						return !m.has(k) && 4 == m.get(l)
   					} catch (n) {
   						return !1
   					}
   				}()) return a;
   			var g = "$jscomp_hidden_" + Math.random();
   			f("freeze");
   			f("preventExtensions");
   			f("seal");
   			var h = 0;
   			b.prototype.set = function(k, l) {
   				if (!d(k)) throw Error("Invalid WeakMap key");
   				e(k);
   				if (!La(k, g)) throw Error("WeakMap key fail: " + k);
   				k[g][this.g] = l;
   				return this
   			};
   			b.prototype.get = function(k) {
   				return d(k) && La(k, g) ? k[g][this.g] : void 0
   			};
   			b.prototype.has = function(k) {
   				return d(k) && La(k,
   					g) && La(k[g], this.g)
   			};
   			b.prototype.delete = function(k) {
   				return d(k) && La(k, g) && La(k[g], this.g) ? delete k[g][this.g] : !1
   			};
   			return b
   		});
   		ea("Map", function(a) {
   			function b() {
   				var h = {};
   				return h.Eb = h.next = h.head = h
   			}

   			function c(h, k) {
   				var l = h.g;
   				return ha(function() {
   					if (l) {
   						for (; l.head != h.g;) l = l.Eb;
   						for (; l.next != l.head;) return l = l.next, {
   							done: !1,
   							value: k(l)
   						};
   						l = null
   					}
   					return {
   						done: !0,
   						value: void 0
   					}
   				})
   			}

   			function d(h, k) {
   				var l = k && typeof k;
   				"object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
   				var m = h.h[l];
   				if (m && La(h.h, l))
   					for (h = 0; h < m.length; h++) {
   						var n = m[h];
   						if (k !== k && n.key !== n.key || k === n.key) return {
   							id: l,
   							list: m,
   							index: h,
   							entry: n
   						}
   					}
   				return {
   					id: l,
   					list: m,
   					index: -1,
   					entry: void 0
   				}
   			}

   			function e(h) {
   				this.h = {};
   				this.g = b();
   				this.size = 0;
   				if (h) {
   					h = t(h);
   					for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
   				}
   			}
   			if (function() {
   					if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
   					try {
   						var h = Object.seal({
   								x: 4
   							}),
   							k = new a(t([
   								[h, "s"]
   							]));
   						if ("s" != k.get(h) || 1 != k.size || k.get({
   								x: 4
   							}) || k.set({
   								x: 4
   							}, "t") != k || 2 != k.size) return !1;
   						var l = k.entries(),
   							m = l.next();
   						if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
   						m = l.next();
   						return m.done || 4 != m.value[0].x ||
   							"t" != m.value[1] || !l.next().done ? !1 : !0
   					} catch (n) {
   						return !1
   					}
   				}()) return a;
   			var f = new WeakMap;
   			e.prototype.set = function(h, k) {
   				h = 0 === h ? 0 : h;
   				var l = d(this, h);
   				l.list || (l.list = this.h[l.id] = []);
   				l.entry ? l.entry.value = k : (l.entry = {
   					next: this.g,
   					Eb: this.g.Eb,
   					head: this.g,
   					key: h,
   					value: k
   				}, l.list.push(l.entry), this.g.Eb.next = l.entry, this.g.Eb = l.entry, this.size++);
   				return this
   			};
   			e.prototype.delete = function(h) {
   				h = d(this, h);
   				return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.entry.Eb.next = h.entry.next,
   					h.entry.next.Eb = h.entry.Eb, h.entry.head = null, this.size--, !0) : !1
   			};
   			e.prototype.clear = function() {
   				this.h = {};
   				this.g = this.g.Eb = b();
   				this.size = 0
   			};
   			e.prototype.has = function(h) {
   				return !!d(this, h).entry
   			};
   			e.prototype.get = function(h) {
   				return (h = d(this, h).entry) && h.value
   			};
   			e.prototype.entries = function() {
   				return c(this, function(h) {
   					return [h.key, h.value]
   				})
   			};
   			e.prototype.keys = function() {
   				return c(this, function(h) {
   					return h.key
   				})
   			};
   			e.prototype.values = function() {
   				return c(this, function(h) {
   					return h.value
   				})
   			};
   			e.prototype.forEach =
   				function(h, k) {
   					for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
   				};
   			e.prototype[Symbol.iterator] = e.prototype.entries;
   			var g = 0;
   			return e
   		});
   		ea("Set", function(a) {
   			function b(c) {
   				this.g = new Map;
   				if (c) {
   					c = t(c);
   					for (var d; !(d = c.next()).done;) this.add(d.value)
   				}
   				this.size = this.g.size
   			}
   			if (function() {
   					if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
   					try {
   						var c = Object.seal({
   								x: 4
   							}),
   							d = new a(t([c]));
   						if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
   								x: 4
   							}) != d || 2 != d.size) return !1;
   						var e = d.entries(),
   							f = e.next();
   						if (f.done || f.value[0] != c || f.value[1] != c) return !1;
   						f = e.next();
   						return f.done || f.value[0] == c || 4 != f.value[0].x ||
   							f.value[1] != f.value[0] ? !1 : e.next().done
   					} catch (g) {
   						return !1
   					}
   				}()) return a;
   			b.prototype.add = function(c) {
   				c = 0 === c ? 0 : c;
   				this.g.set(c, c);
   				this.size = this.g.size;
   				return this
   			};
   			b.prototype.delete = function(c) {
   				c = this.g.delete(c);
   				this.size = this.g.size;
   				return c
   			};
   			b.prototype.clear = function() {
   				this.g.clear();
   				this.size = 0
   			};
   			b.prototype.has = function(c) {
   				return this.g.has(c)
   			};
   			b.prototype.entries = function() {
   				return this.g.entries()
   			};
   			b.prototype.values = function() {
   				return this.g.values()
   			};
   			b.prototype.keys = b.prototype.values;
   			b.prototype[Symbol.iterator] =
   				b.prototype.values;
   			b.prototype.forEach = function(c, d) {
   				var e = this;
   				this.g.forEach(function(f) {
   					return c.call(d, f, f, e)
   				})
   			};
   			return b
   		});

   		function Ma(a, b) {
   			a instanceof String && (a += "");
   			var c = 0,
   				d = !1,
   				e = {
   					next: function() {
   						if (!d && c < a.length) {
   							var f = c++;
   							return {
   								value: b(f, a[f]),
   								done: !1
   							}
   						}
   						d = !0;
   						return {
   							done: !0,
   							value: void 0
   						}
   					}
   				};
   			e[Symbol.iterator] = function() {
   				return e
   			};
   			return e
   		}
   		ea("Array.prototype.keys", function(a) {
   			return a ? a : function() {
   				return Ma(this, function(b) {
   					return b
   				})
   			}
   		});

   		function Na(a, b, c) {
   			a instanceof String && (a = String(a));
   			for (var d = a.length, e = 0; e < d; e++) {
   				var f = a[e];
   				if (b.call(c, f, e, a)) return {
   					vg: e,
   					v: f
   				}
   			}
   			return {
   				vg: -1,
   				v: void 0
   			}
   		}
   		ea("Array.prototype.findIndex", function(a) {
   			return a ? a : function(b, c) {
   				return Na(this, b, c).vg
   			}
   		});
   		ea("Object.is", function(a) {
   			return a ? a : function(b, c) {
   				return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
   			}
   		});
   		ea("Array.prototype.includes", function(a) {
   			return a ? a : function(b, c) {
   				var d = this;
   				d instanceof String && (d = String(d));
   				var e = d.length;
   				c = c || 0;
   				for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
   					var f = d[c];
   					if (f === b || Object.is(f, b)) return !0
   				}
   				return !1
   			}
   		});

   		function Oa(a, b, c) {
   			if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
   			if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
   			return a + ""
   		}
   		ea("String.prototype.includes", function(a) {
   			return a ? a : function(b, c) {
   				return -1 !== Oa(this, b, "includes").indexOf(b, c || 0)
   			}
   		});
   		ea("Array.prototype.find", function(a) {
   			return a ? a : function(b, c) {
   				return Na(this, b, c).v
   			}
   		});
   		ea("String.prototype.startsWith", function(a) {
   			return a ? a : function(b, c) {
   				var d = Oa(this, b, "startsWith"),
   					e = d.length,
   					f = b.length;
   				c = Math.max(0, Math.min(c | 0, d.length));
   				for (var g = 0; g < f && c < e;)
   					if (d[c++] != b[g++]) return !1;
   				return g >= f
   			}
   		});
   		ea("WeakSet", function(a) {
   			function b(c) {
   				this.g = new WeakMap;
   				if (c) {
   					c = t(c);
   					for (var d; !(d = c.next()).done;) this.add(d.value)
   				}
   			}
   			if (function() {
   					if (!a || !Object.seal) return !1;
   					try {
   						var c = Object.seal({}),
   							d = Object.seal({}),
   							e = new a([c]);
   						if (!e.has(c) || e.has(d)) return !1;
   						e.delete(c);
   						e.add(d);
   						return !e.has(c) && e.has(d)
   					} catch (f) {
   						return !1
   					}
   				}()) return a;
   			b.prototype.add = function(c) {
   				this.g.set(c, !0);
   				return this
   			};
   			b.prototype.has = function(c) {
   				return this.g.has(c)
   			};
   			b.prototype.delete = function(c) {
   				return this.g.delete(c)
   			};
   			return b
   		});
   		ea("Array.from", function(a) {
   			return a ? a : function(b, c, d) {
   				c = null != c ? c : function(h) {
   					return h
   				};
   				var e = [],
   					f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
   				if ("function" == typeof f) {
   					b = f.call(b);
   					for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
   				} else
   					for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
   				return e
   			}
   		});
   		var Pa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
   			for (var c = 1; c < arguments.length; c++) {
   				var d = arguments[c];
   				if (d)
   					for (var e in d) La(d, e) && (a[e] = d[e])
   			}
   			return a
   		};
   		ea("Object.assign", function(a) {
   			return a || Pa
   		});
   		ea("Array.prototype.values", function(a) {
   			return a ? a : function() {
   				return Ma(this, function(b, c) {
   					return c
   				})
   			}
   		});
   		ea("Promise.prototype.finally", function(a) {
   			return a ? a : function(b) {
   				return this.then(function(c) {
   					return Promise.resolve(b()).then(function() {
   						return c
   					})
   				}, function(c) {
   					return Promise.resolve(b()).then(function() {
   						throw c;
   					})
   				})
   			}
   		});
   		ea("Array.prototype.entries", function(a) {
   			return a ? a : function() {
   				return Ma(this, function(b, c) {
   					return [b, c]
   				})
   			}
   		});
   		ea("String.prototype.repeat", function(a) {
   			return a ? a : function(b) {
   				var c = Oa(this, null, "repeat");
   				if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
   				b |= 0;
   				for (var d = ""; b;)
   					if (b & 1 && (d += c), b >>>= 1) c += c;
   				return d
   			}
   		});
   		ea("Number.isNaN", function(a) {
   			return a ? a : function(b) {
   				return "number" === typeof b && isNaN(b)
   			}
   		});
   		ea("Number.isFinite", function(a) {
   			return a ? a : function(b) {
   				return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
   			}
   		});
   		ea("Object.values", function(a) {
   			return a ? a : function(b) {
   				var c = [],
   					d;
   				for (d in b) La(b, d) && c.push(b[d]);
   				return c
   			}
   		});
   		ea("Math.log2", function(a) {
   			return a ? a : function(b) {
   				return Math.log(b) / Math.LN2
   			}
   		});
   		ea("Number.MAX_SAFE_INTEGER", function() {
   			return 9007199254740991
   		});
   		ea("Math.trunc", function(a) {
   			return a ? a : function(b) {
   				b = Number(b);
   				if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
   				var c = Math.floor(Math.abs(b));
   				return 0 > b ? -c : c
   			}
   		});
   		ea("Object.entries", function(a) {
   			return a ? a : function(b) {
   				var c = [],
   					d;
   				for (d in b) La(b, d) && c.push([d, b[d]]);
   				return c
   			}
   		});
   		var Ra = this || self;

   		function S(a, b) {
   			a = a.split(".");
   			var c = Ra;
   			a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
   			for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
   		};

   		function Sa() {}

   		function Ta() {};

   		function Ua(a) {
   			this.g = Math.exp(Math.log(.5) / a);
   			this.i = this.h = 0
   		}
   		Ua.prototype.sample = function(a, b) {
   			var c = Math.pow(this.g, a);
   			b = b * (1 - c) + c * this.h;
   			isNaN(b) || (this.h = b, this.i += a)
   		};

   		function Va(a) {
   			return a.h / (1 - Math.pow(a.g, a.i))
   		};

   		function Xa() {
   			this.h = new Ua(2);
   			this.j = new Ua(5);
   			this.g = 0;
   			this.i = 128E3;
   			this.l = 16E3
   		}
   		Xa.prototype.configure = function(a) {
   			this.i = a.minTotalBytes;
   			this.l = a.minBytes;
   			this.h.g = Math.exp(Math.log(.5) / a.fastHalfLife);
   			this.j.g = Math.exp(Math.log(.5) / a.slowHalfLife)
   		};
   		Xa.prototype.sample = function(a, b) {
   			if (!(b < this.l)) {
   				var c = 8E3 * b / a;
   				a /= 1E3;
   				this.g += b;
   				this.h.sample(a, c);
   				this.j.sample(a, c)
   			}
   		};
   		Xa.prototype.getBandwidthEstimate = function(a) {
   			return this.g < this.i ? a : Math.min(Va(this.h), Va(this.j))
   		};

   		function Ya() {}

   		function $a() {}

   		function ab() {}

   		function bb(a) {
   			var b = Ka.apply(1, arguments);
   			cb.has(a) || (cb.add(a), ab.apply(Ya, x(b)))
   		}

   		function db() {}

   		function eb() {}

   		function fb() {}
   		var cb = new Set;
   		window.console && (ab = function() {}, $a = function() {});

   		function gb() {
   			this.g = {}
   		}
   		r = gb.prototype;
   		r.push = function(a, b) {
   			this.g.hasOwnProperty(a) ? this.g[a].push(b) : this.g[a] = [b]
   		};
   		r.get = function(a) {
   			return (a = this.g[a]) ? a.slice() : null
   		};
   		r.remove = function(a, b) {
   			a in this.g && (this.g[a] = this.g[a].filter(function(c) {
   				return c != b
   			}), 0 == this.g[a].length && delete this.g[a])
   		};
   		r.forEach = function(a) {
   			for (var b in this.g) a(b, this.g[b])
   		};
   		r.size = function() {
   			return Object.keys(this.g).length
   		};
   		r.keys = function() {
   			return Object.keys(this.g)
   		};

   		function hb() {
   			this.g = new gb
   		}
   		r = hb.prototype;
   		r.release = function() {
   			this.nb();
   			this.g = null
   		};
   		r.D = function(a, b, c, d) {
   			this.g && (a = new ib(a, b, c, d), this.g.push(b, a))
   		};
   		r.qa = function(a, b, c, d) {
   			function e(g) {
   				f.Hb(a, b, e);
   				c(g)
   			}
   			var f = this;
   			this.D(a, b, e, d)
   		};
   		r.Hb = function(a, b, c) {
   			if (this.g) {
   				var d = this.g.get(b) || [];
   				d = t(d);
   				for (var e = d.next(); !e.done; e = d.next()) e = e.value, e.target != a || c != e.listener && c || (e.Hb(), this.g.remove(b, e))
   			}
   		};
   		r.nb = function() {
   			if (this.g) {
   				var a = this.g,
   					b = [],
   					c;
   				for (c in a.g) b.push.apply(b, x(a.g[c]));
   				a = t(b);
   				for (b = a.next(); !b.done; b = a.next()) b.value.Hb();
   				this.g.g = {}
   			}
   		};
   		S("gowatch.util.EventManager", hb);
   		hb.prototype.removeAll = hb.prototype.nb;
   		hb.prototype.unlisten = hb.prototype.Hb;
   		hb.prototype.listenOnce = hb.prototype.qa;
   		hb.prototype.listen = hb.prototype.D;
   		hb.prototype.release = hb.prototype.release;

   		function ib(a, b, c, d) {
   			this.target = a;
   			this.type = b;
   			this.listener = c;
   			this.g = jb(a, d);
   			this.target.addEventListener(b, c, this.g)
   		}
   		ib.prototype.Hb = function() {
   			this.target.removeEventListener(this.type, this.listener, this.g);
   			this.listener = this.target = null;
   			this.g = !1
   		};

   		function jb(a, b) {
   			if (void 0 == b) return !1;
   			if ("boolean" == typeof b) return b;
   			var c = new Set(["passive", "capture"]);
   			Object.keys(b).filter(function(d) {
   				return !c.has(d)
   			});
   			return kb(a) ? b : b.capture || !1
   		}

   		function kb(a) {
   			var b = lb;
   			if (void 0 == b) {
   				b = !1;
   				try {
   					var c = {},
   						d = {
   							get: function() {
   								b = !0;
   								return !1
   							}
   						};
   					Object.defineProperty(c, "passive", d);
   					Object.defineProperty(c, "capture", d);
   					d = function() {};
   					a.addEventListener("test", d, c);
   					a.removeEventListener("test", d, c)
   				} catch (e) {
   					b = !1
   				}
   				lb = b
   			}
   			return b || !1
   		}
   		var lb = void 0;

   		function mb(a) {
   			if (nb.has(a)) return nb.get(a);
   			if (window.ManagedMediaSource) {
   				var b = ManagedMediaSource.isTypeSupported(a);
   				nb.set(a, b);
   				return b
   			}
   			return window.MediaSource ? (b = MediaSource.isTypeSupported(a), nb.set(a, b), b) : !1
   		}

   		function ob() {
   			return !!window.SourceBuffer && !!SourceBuffer.prototype && !!SourceBuffer.prototype.changeType
   		}
   		var nb = new Map;

   		function pb(a, b) {
   			this.g = a;
   			this.h = b
   		}
   		pb.prototype.toString = function() {
   			return "v" + this.g + "." + this.h
   		};

   		function qb(a, b) {
   			var c = new pb(5, 0),
   				d = rb,
   				e = d.g,
   				f = c.h - e.h;
   			(0 < (c.g - e.g || f) ? d.i : d.h)(d.g, c, a, b)
   		}

   		function sb(a, b, c, d) {
   			ab([c, "has been deprecated and will be removed in", b, ". We are currently at version", a, ". Additional information:", d].join(" "))
   		}

   		function tb(a, b, c, d) {
   			$a([c, "has been deprecated and has been removed in", b, ". We are now at version", a, ". Additional information:", d].join(" "))
   		}
   		var rb = null;

   		function ub() {}
   		ub.prototype.extract = function() {};
   		ub.prototype.decode = function() {
   			return []
   		};
   		ub.prototype.clear = function() {};
   		ub.prototype.getStreams = function() {
   			return []
   		};

   		function vb() {}
   		vb.prototype.init = function() {};
   		vb.prototype.parse = function() {
   			return []
   		};

   		function wb() {}

   		function xb(a, b) {
   			if (!a && !b) return !0;
   			if (!a || !b || a.byteLength != b.byteLength) return !1;
   			if (zb(a) == zb(b) && (a.byteOffset || 0) == (b.byteOffset || 0)) return !0;
   			var c = Ab(a);
   			b = Ab(b);
   			for (var d = 0; d < a.byteLength; d++)
   				if (c[d] != b[d]) return !1;
   			return !0
   		}

   		function zb(a) {
   			return a instanceof ArrayBuffer ? a : a.buffer
   		}

   		function Bb(a) {
   			return a instanceof ArrayBuffer ? a : 0 == a.byteOffset && a.byteLength == a.buffer.byteLength ? a.buffer : (new Uint8Array(a)).buffer
   		}

   		function Ab(a, b, c) {
   			c = void 0 === c ? Infinity : c;
   			return Cb(a, void 0 === b ? 0 : b, c, Uint8Array)
   		}

   		function Db(a, b, c) {
   			c = void 0 === c ? Infinity : c;
   			return Cb(a, void 0 === b ? 0 : b, c, Uint16Array)
   		}

   		function Eb(a, b, c) {
   			c = void 0 === c ? Infinity : c;
   			return Cb(a, void 0 === b ? 0 : b, c, DataView)
   		}

   		function Cb(a, b, c, d) {
   			var e = zb(a),
   				f = 1;
   			"BYTES_PER_ELEMENT" in d && (f = d.BYTES_PER_ELEMENT);
   			var g = ((a.byteOffset || 0) + a.byteLength) / f;
   			a = Math.floor(Math.max(0, Math.min(((a.byteOffset || 0) + b) / f, g)));
   			return new d(e, a, Math.floor(Math.min(a + Math.max(c, 0), g)) - a)
   		}
   		S("gowatch.util.BufferUtils", wb);
   		wb.toDataView = Eb;
   		wb.toUint16 = Db;
   		wb.toUint8 = Ab;
   		wb.toArrayBuffer = Bb;
   		wb.equal = xb;

   		function Fb() {}
   		Fb.prototype.init = function() {};
   		Fb.prototype.i = function() {};
   		Fb.prototype.g = function() {};
   		Fb.prototype.j = function() {};
   		S("gowatch.media.IClosedCaptionParser", Fb);

   		function Gb(a) {
   			this.l = new vb;
   			if (a = Hb[a.toLowerCase()]) this.l = a();
   			this.h = new ub;
   			if (a = Ib) this.h = a()
   		}
   		Gb.prototype.init = function(a, b) {
   			void 0 !== b && b || (this.g(), this.l.init(a))
   		};
   		Gb.prototype.i = function(a) {
   			a = this.l.parse(a);
   			a = t(a);
   			for (var b = a.next(); !b.done; b = a.next()) {
   				b = b.value;
   				var c = Ab(b.packet);
   				0 < c.length && this.h.extract(c, b.pts)
   			}
   			return this.h.decode()
   		};
   		Gb.prototype.g = function() {
   			this.h.clear()
   		};
   		Gb.prototype.j = function() {
   			return this.h.getStreams()
   		};
   		S("gowatch.media.ClosedCaptionParser", Gb);
   		Gb.findDecoder = function() {
   			return Ib
   		};
   		Gb.unregisterDecoder = function() {
   			Ib = null
   		};
   		Gb.registerDecoder = function(a) {
   			Ib = a
   		};
   		Gb.findParser = function(a) {
   			return Hb[a]
   		};
   		Gb.unregisterParser = function(a) {
   			delete Hb[a]
   		};
   		Gb.registerParser = function(a, b) {
   			Hb[a] = b
   		};
   		var Hb = {},
   			Ib = null;

   		function Jb(a, b) {
   			return "number" === typeof a && "number" === typeof b && isNaN(a) && isNaN(b) ? !0 : a === b
   		}

   		function Kb(a, b) {
   			b = a.indexOf(b); - 1 < b && a.splice(b, 1)
   		}

   		function Lb(a, b, c) {
   			c || (c = Jb);
   			if (a.length != b.length) return !1;
   			b = b.slice();
   			var d = {};
   			a = t(a);
   			for (var e = a.next(); !e.done; d = {
   					xe: d.xe
   				}, e = a.next()) {
   				d.xe = e.value;
   				e = b.findIndex(function(f) {
   					return function(g) {
   						return c(f.xe, g)
   					}
   				}(d));
   				if (-1 == e) return !1;
   				b[e] = b[b.length - 1];
   				b.pop()
   			}
   			return 0 == b.length
   		}

   		function Mb(a, b, c) {
   			c || (c = Jb);
   			if (a.length != b.length) return !1;
   			for (var d = 0; d < a.length; d++)
   				if (!c(a[d], b[d])) return !1;
   			return !0
   		};

   		function Nb(a, b, c) {
   			this.startTime = a;
   			this.endTime = b;
   			this.payload = c;
   			this.region = new Ob;
   			this.position = null;
   			this.positionAlign = Pb;
   			this.size = 0;
   			this.textAlign = Qb;
   			this.direction = Rb;
   			this.writingMode = Sb;
   			this.lineInterpretation = Tb;
   			this.line = null;
   			this.lineHeight = "";
   			this.lineAlign = Ub;
   			this.displayAlign = Vb;
   			this.fontSize = this.border = this.backgroundImage = this.backgroundColor = this.color = "";
   			this.fontWeight = Wb;
   			this.fontStyle = Xb;
   			this.linePadding = this.letterSpacing = this.fontFamily = "";
   			this.opacity = 1;
   			this.textCombineUpright =
   				"";
   			this.textDecoration = [];
   			this.textStrokeWidth = this.textStrokeColor = this.textShadow = "";
   			this.wrapLine = !0;
   			this.id = "";
   			this.nestedCues = [];
   			this.lineBreak = this.isContainer = !1;
   			this.rubyTag = null;
   			this.cellResolution = {
   				Vb: 32,
   				rows: 15
   			}
   		}

   		function Yb(a, b) {
   			a = new Nb(a, b, "");
   			a.lineBreak = !0;
   			return a
   		}
   		Nb.prototype.clone = function() {
   			var a = new Nb(0, 0, ""),
   				b;
   			for (b in this) a[b] = this[b], a[b] && a[b].constructor == Array && (a[b] = a[b].slice());
   			return a
   		};

   		function Zb(a, b) {
   			if (a.startTime != b.startTime || a.endTime != b.endTime || a.payload != b.payload) return !1;
   			for (var c in a)
   				if ("startTime" != c && "endTime" != c && "payload" != c)
   					if ("nestedCues" == c) {
   						if (!Mb(a.nestedCues, b.nestedCues, Zb)) return !1
   					} else if ("region" == c || "cellResolution" == c)
   				for (var d in a[c]) {
   					if (a[c][d] != b[c][d]) return !1
   				} else if (Array.isArray(a[c])) {
   					if (!Mb(a[c], b[c])) return !1
   				} else if (a[c] != b[c]) return !1;
   			return !0
   		}
   		S("gowatch.text.Cue", Nb);
   		Nb.equal = Zb;
   		Nb.prototype.clone = Nb.prototype.clone;
   		var Pb = "auto";
   		Nb.positionAlign = {
   			LEFT: "line-left",
   			RIGHT: "line-right",
   			CENTER: "center",
   			AUTO: Pb
   		};
   		var Qb = "center",
   			$b = {
   				LEFT: "left",
   				RIGHT: "right",
   				CENTER: Qb,
   				START: "start",
   				END: "end"
   			};
   		Nb.textAlign = $b;
   		var Vb = "after",
   			ac = {
   				BEFORE: "before",
   				CENTER: "center",
   				AFTER: Vb
   			};
   		Nb.displayAlign = ac;
   		var Rb = "ltr";
   		Nb.direction = {
   			HORIZONTAL_LEFT_TO_RIGHT: Rb,
   			HORIZONTAL_RIGHT_TO_LEFT: "rtl"
   		};
   		var Sb = "horizontal-tb";
   		Nb.writingMode = {
   			HORIZONTAL_TOP_TO_BOTTOM: Sb,
   			VERTICAL_LEFT_TO_RIGHT: "vertical-lr",
   			VERTICAL_RIGHT_TO_LEFT: "vertical-rl"
   		};
   		var Tb = 0;
   		Nb.lineInterpretation = {
   			LINE_NUMBER: Tb,
   			PERCENTAGE: 1
   		};
   		var Ub = "start",
   			bc = {
   				CENTER: "center",
   				START: Ub,
   				END: "end"
   			};
   		Nb.lineAlign = bc;
   		var cc = {
   			white: "white",
   			lime: "lime",
   			cyan: "cyan",
   			red: "red",
   			yellow: "yellow",
   			magenta: "magenta",
   			blue: "blue",
   			black: "black"
   		};
   		Nb.defaultTextColor = cc;
   		var dc = {
   			bg_white: "white",
   			bg_lime: "lime",
   			bg_cyan: "cyan",
   			bg_red: "red",
   			bg_yellow: "yellow",
   			bg_magenta: "magenta",
   			bg_blue: "blue",
   			bg_black: "black"
   		};
   		Nb.defaultTextBackgroundColor = dc;
   		var Wb = 400;
   		Nb.fontWeight = {
   			NORMAL: Wb,
   			BOLD: 700
   		};
   		var Xb = "normal",
   			fc = {
   				NORMAL: Xb,
   				ITALIC: "italic",
   				OBLIQUE: "oblique"
   			};
   		Nb.fontStyle = fc;
   		Nb.textDecoration = {
   			UNDERLINE: "underline",
   			LINE_THROUGH: "lineThrough",
   			OVERLINE: "overline"
   		};

   		function Ob() {
   			this.id = "";
   			this.regionAnchorY = this.regionAnchorX = this.viewportAnchorY = this.viewportAnchorX = 0;
   			this.height = this.width = 100;
   			this.viewportAnchorUnits = this.widthUnits = this.heightUnits = gc;
   			this.scroll = hc
   		}
   		S("gowatch.text.CueRegion", Ob);
   		var gc = 1;
   		Ob.units = {
   			PX: 0,
   			PERCENTAGE: gc,
   			LINES: 2
   		};
   		var hc = "";
   		Ob.scrollMode = {
   			NONE: hc,
   			UP: "up"
   		};

   		function ic() {}
   		ic.prototype.destroy = function() {};

   		function jc(a, b, c) {
   			kc[a.toLowerCase().split(";")[0] + "-" + c] = {
   				priority: c,
   				pe: b
   			}
   		}

   		function lc(a, b) {
   			for (var c = a.toLowerCase().split(";")[0], d = t([mc, nc, oc, pc]), e = d.next(); !e.done; e = d.next())
   				if (e = kc[c + "-" + e.value]) {
   					var f = e.pe(),
   						g = f.isSupported(a, b);
   					f.destroy();
   					if (g) return e.pe
   				} return null
   		}
   		S("gowatch.transmuxer.TransmuxerEngine", ic);
   		ic.findTransmuxer = lc;
   		ic.unregisterTransmuxer = function(a, b) {
   			delete kc[a.toLowerCase().split(";")[0] + "-" + b]
   		};
   		ic.registerTransmuxer = jc;
   		ic.prototype.destroy = ic.prototype.destroy;
   		var kc = {},
   			pc = 1,
   			oc = 2,
   			nc = 3,
   			mc = 4;
   		ic.PluginPriority = {
   			FALLBACK: pc,
   			PREFERRED_SECONDARY: oc,
   			PREFERRED: nc,
   			APPLICATION: mc
   		};
   		var qc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

   		function rc(a) {
   			var b;
   			a instanceof rc ? (sc(this, a.wb), this.oc = a.oc, tc(this, a.zb), uc(this, a.Gc), this.Qa = a.Qa, vc(this, a.g.clone()), this.Wb = a.Wb) : a && (b = String(a).match(qc)) ? (sc(this, b[1] || "", !0), this.oc = wc(b[2] || ""), tc(this, b[3] || "", !0), uc(this, b[4]), this.Qa = wc(b[5] || "", !0), vc(this, b[6] || "", !0), this.Wb = wc(b[7] || "")) : this.g = new xc(null)
   		}
   		r = rc.prototype;
   		r.wb = "";
   		r.oc = "";
   		r.zb = "";
   		r.Gc = null;
   		r.Qa = "";
   		r.Wb = "";
   		r.toString = function() {
   			var a = [],
   				b = this.wb;
   			b && a.push(yc(b, zc, !0), ":");
   			if (b = this.zb) {
   				a.push("//");
   				var c = this.oc;
   				c && a.push(yc(c, zc, !0), "@");
   				a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
   				b = this.Gc;
   				null != b && a.push(":", String(b))
   			}
   			if (b = this.Qa) this.zb && "/" != b.charAt(0) && a.push("/"), a.push(yc(b, "/" == b.charAt(0) ? Ac : Bc, !0));
   			(b = this.g.toString()) && a.push("?", b);
   			(b = this.Wb) && a.push("#", yc(b, Cc));
   			return a.join("")
   		};
   		r.resolve = function(a) {
   			var b = this.clone();
   			"data" === b.wb && (b = new rc);
   			var c = !!a.wb;
   			c ? sc(b, a.wb) : c = !!a.oc;
   			c ? b.oc = a.oc : c = !!a.zb;
   			c ? tc(b, a.zb) : c = null != a.Gc;
   			var d = a.Qa;
   			if (c) uc(b, a.Gc);
   			else if (c = !!a.Qa) {
   				if ("/" != d.charAt(0))
   					if (this.zb && !this.Qa) d = "/" + d;
   					else {
   						var e = b.Qa.lastIndexOf("/"); - 1 != e && (d = b.Qa.substr(0, e + 1) + d)
   					} if (".." == d || "." == d) d = "";
   				else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
   					e = 0 == d.lastIndexOf("/", 0);
   					d = d.split("/");
   					for (var f = [], g = 0; g < d.length;) {
   						var h = d[g++];
   						"." == h ? e && g == d.length && f.push("") : ".." ==
   							h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), e && g == d.length && f.push("")) : (f.push(h), e = !0)
   					}
   					d = f.join("/")
   				}
   			}
   			c ? b.Qa = d : c = "" !== a.g.toString();
   			c ? vc(b, a.g.clone()) : c = !!a.Wb;
   			c && (b.Wb = a.Wb);
   			return b
   		};
   		r.clone = function() {
   			return new rc(this)
   		};

   		function sc(a, b, c) {
   			a.wb = c ? wc(b, !0) : b;
   			a.wb && (a.wb = a.wb.replace(/:$/, ""))
   		}

   		function tc(a, b, c) {
   			a.zb = c ? wc(b, !0) : b
   		}

   		function uc(a, b) {
   			if (b) {
   				b = Number(b);
   				if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
   				a.Gc = b
   			} else a.Gc = null
   		}

   		function vc(a, b, c) {
   			b instanceof xc ? a.g = b : (c || (b = yc(b, Dc)), a.g = new xc(b))
   		}

   		function wc(a, b) {
   			return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
   		}

   		function yc(a, b, c) {
   			return null != a ? (a = encodeURI(a).replace(b, Fc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
   		}

   		function Fc(a) {
   			a = a.charCodeAt(0);
   			return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
   		}
   		var zc = /[#\/\?@]/g,
   			Bc = /[#\?:]/g,
   			Ac = /[#\?]/g,
   			Dc = /[#\?@]/g,
   			Cc = /#/g;

   		function xc(a) {
   			this.g = a || null
   		}

   		function Gc(a) {
   			if (!a.Ea && (a.Ea = {}, a.cd = 0, a.g))
   				for (var b = a.g.split("&"), c = 0; c < b.length; c++) {
   					var d = b[c].indexOf("="),
   						e = null;
   					if (0 <= d) {
   						var f = b[c].substring(0, d);
   						e = b[c].substring(d + 1)
   					} else f = b[c];
   					f = decodeURIComponent(f.replace(/\+/g, " "));
   					e = e || "";
   					a.add(f, decodeURIComponent(e.replace(/\+/g, " ")))
   				}
   		}
   		r = xc.prototype;
   		r.Ea = null;
   		r.cd = null;

   		function Hc(a) {
   			Gc(a);
   			return a.cd
   		}
   		r.add = function(a, b) {
   			Gc(this);
   			this.g = null;
   			var c = this.Ea.hasOwnProperty(a) ? this.Ea[a] : null;
   			c || (this.Ea[a] = c = []);
   			c.push(b);
   			this.cd++;
   			return this
   		};
   		r.set = function(a, b) {
   			Gc(this);
   			this.g = null;
   			this.Ea.hasOwnProperty(a) ? this.Ea[a] = [b] : this.add(a, b);
   			return this
   		};
   		r.get = function(a) {
   			Gc(this);
   			return this.Ea[a] || []
   		};
   		r.toString = function() {
   			if (this.g) return this.g;
   			if (!this.Ea) return "";
   			var a = [],
   				b;
   			for (b in this.Ea)
   				for (var c = encodeURIComponent(b), d = this.Ea[b], e = 0; e < d.length; e++) {
   					var f = c;
   					"" !== d[e] && (f += "=" + encodeURIComponent(d[e]));
   					a.push(f)
   				}
   			return this.g = a.join("&")
   		};
   		r.clone = function() {
   			var a = new xc;
   			a.g = this.g;
   			if (this.Ea) {
   				var b = {},
   					c;
   				for (c in this.Ea) b[c] = this.Ea[c].concat();
   				a.Ea = b;
   				a.cd = this.cd
   			}
   			return a
   		};

   		function T(a, b, c) {
   			var d = Ka.apply(3, arguments);
   			this.severity = a;
   			this.category = b;
   			this.code = c;
   			this.data = d;
   			this.handled = !1;
   			this.message = "gowatch Error " + this.code;
   			if (Ic) try {
   				throw Error(this.message || "gowatch Error");
   			} catch (e) {
   				this.stack = e.stack
   			}
   		}
   		T.prototype.toString = function() {
   			return "gowatch.util.Error " + JSON.stringify(this, null, "  ")
   		};
   		S("gowatch.util.Error", T);
   		var Ic = !0;
   		T.Severity = {
   			RECOVERABLE: 1,
   			CRITICAL: 2
   		};
   		T.Category = {
   			NETWORK: 1,
   			TEXT: 2,
   			MEDIA: 3,
   			MANIFEST: 4,
   			STREAMING: 5,
   			DRM: 6,
   			PLAYER: 7,
   			CAST: 8,
   			STORAGE: 9,
   			ADS: 10
   		};
   		T.Code = {
   			UNSUPPORTED_SCHEME: 1E3,
   			BAD_HTTP_STATUS: 1001,
   			HTTP_ERROR: 1002,
   			TIMEOUT: 1003,
   			MALFORMED_DATA_URI: 1004,
   			REQUEST_FILTER_ERROR: 1006,
   			RESPONSE_FILTER_ERROR: 1007,
   			MALFORMED_TEST_URI: 1008,
   			UNEXPECTED_TEST_REQUEST: 1009,
   			ATTEMPTS_EXHAUSTED: 1010,
   			SEGMENT_MISSING: 1011,
   			INVALID_TEXT_HEADER: 2E3,
   			INVALID_TEXT_CUE: 2001,
   			UNABLE_TO_DETECT_ENCODING: 2003,
   			BAD_ENCODING: 2004,
   			INVALID_XML: 2005,
   			INVALID_MP4_TTML: 2007,
   			INVALID_MP4_VTT: 2008,
   			UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
   			INVALID_MP4_CEA: 2010,
   			TEXT_COULD_NOT_GUESS_MIME_TYPE: 2011,
   			CANNOT_ADD_EXTERNAL_TEXT_TO_SRC_EQUALS: 2012,
   			TEXT_ONLY_WEBVTT_SRC_EQUALS: 2013,
   			MISSING_TEXT_PLUGIN: 2014,
   			CHAPTERS_TRACK_FAILED: 2015,
   			UNSUPPORTED_EXTERNAL_THUMBNAILS_URI: 2017,
   			BUFFER_READ_OUT_OF_BOUNDS: 3E3,
   			JS_INTEGER_OVERFLOW: 3001,
   			EBML_OVERFLOW: 3002,
   			EBML_BAD_FLOATING_POINT_SIZE: 3003,
   			MP4_SIDX_WRONG_BOX_TYPE: 3004,
   			MP4_SIDX_INVALID_TIMESCALE: 3005,
   			MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
   			WEBM_CUES_ELEMENT_MISSING: 3007,
   			WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
   			WEBM_SEGMENT_ELEMENT_MISSING: 3009,
   			WEBM_INFO_ELEMENT_MISSING: 3010,
   			WEBM_DURATION_ELEMENT_MISSING: 3011,
   			WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
   			WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
   			MEDIA_SOURCE_OPERATION_FAILED: 3014,
   			MEDIA_SOURCE_OPERATION_THREW: 3015,
   			VIDEO_ERROR: 3016,
   			QUOTA_EXCEEDED_ERROR: 3017,
   			TRANSMUXING_FAILED: 3018,
   			CONTENT_TRANSFORMATION_FAILED: 3019,
   			MSS_MISSING_DATA_FOR_TRANSMUXING: 3020,
   			MSS_TRANSMUXING_FAILED: 3022,
   			TRANSMUXING_NO_VIDEO_DATA: 3023,
   			UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
   			DASH_INVALID_XML: 4001,
   			DASH_NO_SEGMENT_INFO: 4002,
   			DASH_EMPTY_ADAPTATION_SET: 4003,
   			DASH_EMPTY_PERIOD: 4004,
   			DASH_WEBM_MISSING_INIT: 4005,
   			DASH_UNSUPPORTED_CONTAINER: 4006,
   			DASH_PSSH_BAD_ENCODING: 4007,
   			DASH_NO_COMMON_KEY_SYSTEM: 4008,
   			DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
   			DASH_CONFLICTING_KEY_IDS: 4010,
   			RESTRICTIONS_CANNOT_BE_MET: 4012,
   			HLS_PLAYLIST_HEADER_MISSING: 4015,
   			INVALID_HLS_TAG: 4016,
   			HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
   			DASH_DUPLICATE_REPRESENTATION_ID: 4018,
   			HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
   			HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
   			HLS_REQUIRED_TAG_MISSING: 4024,
   			HLS_COULD_NOT_GUESS_CODECS: 4025,
   			HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
   			DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
   			DASH_XLINK_DEPTH_LIMIT: 4028,
   			CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
   			CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4033,
   			NO_VARIANTS: 4036,
   			PERIOD_FLATTENING_FAILED: 4037,
   			INCONSISTENT_DRM_ACROSS_PERIODS: 4038,
   			HLS_VARIABLE_NOT_FOUND: 4039,
   			HLS_MSE_ENCRYPTED_MP2T_NOT_SUPPORTED: 4040,
   			HLS_MSE_ENCRYPTED_LEGACY_APPLE_MEDIA_KEYS_NOT_SUPPORTED: 4041,
   			NO_WEB_CRYPTO_API: 4042,
   			CANNOT_ADD_EXTERNAL_THUMBNAILS_TO_LIVE_STREAM: 4045,
   			MSS_INVALID_XML: 4046,
   			MSS_LIVE_CONTENT_NOT_SUPPORTED: 4047,
   			AES_128_INVALID_IV_LENGTH: 4048,
   			AES_128_INVALID_KEY_LENGTH: 4049,
   			DASH_CONFLICTING_AES_128: 4050,
   			DASH_UNSUPPORTED_AES_128: 4051,
   			DASH_INVALID_PATCH: 4052,
   			STREAMING_ENGINE_STARTUP_INVALID_STATE: 5006,
   			NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
   			REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
   			FAILED_TO_CREATE_CDM: 6002,
   			FAILED_TO_ATTACH_TO_VIDEO: 6003,
   			INVALID_SERVER_CERTIFICATE: 6004,
   			FAILED_TO_CREATE_SESSION: 6005,
   			FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
   			LICENSE_REQUEST_FAILED: 6007,
   			LICENSE_RESPONSE_REJECTED: 6008,
   			ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
   			NO_LICENSE_SERVER_GIVEN: 6012,
   			OFFLINE_SESSION_REMOVED: 6013,
   			EXPIRED: 6014,
   			SERVER_CERTIFICATE_REQUIRED: 6015,
   			INIT_DATA_TRANSFORM_ERROR: 6016,
   			SERVER_CERTIFICATE_REQUEST_FAILED: 6017,
   			MIN_HDCP_VERSION_NOT_MATCH: 6018,
   			ERROR_CHECKING_HDCP_VERSION: 6019,
   			LOAD_INTERRUPTED: 7E3,
   			OPERATION_ABORTED: 7001,
   			NO_VIDEO_ELEMENT: 7002,
   			OBJECT_DESTROYED: 7003,
   			CONTENT_NOT_LOADED: 7004,
   			SRC_EQUALS_PRELOAD_NOT_SUPPORTED: 7005,
   			CAST_API_UNAVAILABLE: 8E3,
   			NO_CAST_RECEIVERS: 8001,
   			ALREADY_CASTING: 8002,
   			UNEXPECTED_CAST_ERROR: 8003,
   			CAST_CANCELED_BY_USER: 8004,
   			CAST_CONNECTION_TIMED_OUT: 8005,
   			CAST_RECEIVER_APP_UNAVAILABLE: 8006,
   			STORAGE_NOT_SUPPORTED: 9E3,
   			INDEXED_DB_ERROR: 9001,
   			DEPRECATED_OPERATION_ABORTED: 9002,
   			REQUESTED_ITEM_NOT_FOUND: 9003,
   			MALFORMED_OFFLINE_URI: 9004,
   			CANNOT_STORE_LIVE_OFFLINE: 9005,
   			NO_INIT_DATA_FOR_OFFLINE: 9007,
   			LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
   			NEW_KEY_OPERATION_NOT_SUPPORTED: 9011,
   			KEY_NOT_FOUND: 9012,
   			MISSING_STORAGE_CELL: 9013,
   			STORAGE_LIMIT_REACHED: 9014,
   			DOWNLOAD_SIZE_CALLBACK_ERROR: 9015,
   			MODIFY_OPERATION_NOT_SUPPORTED: 9016,
   			INDEXED_DB_INIT_TIMED_OUT: 9017,
   			CS_IMA_SDK_MISSING: 1E4,
   			CS_AD_MANAGER_NOT_INITIALIZED: 10001,
   			SS_IMA_SDK_MISSING: 10002,
   			SS_AD_MANAGER_NOT_INITIALIZED: 10003,
   			CURRENT_DAI_REQUEST_NOT_FINISHED: 10004,
   			MT_AD_MANAGER_NOT_INITIALIZED: 10005
   		};

   		function Jc(a) {
   			this.h = a;
   			this.g = void 0
   		}
   		Jc.prototype.value = function() {
   			void 0 == this.g && (this.g = this.h());
   			return this.g
   		};

   		function Kc(a) {
   			this.h = a;
   			this.g = null
   		}
   		Kc.prototype.W = function(a) {
   			var b = this;
   			this.stop();
   			var c = !0,
   				d = null;
   			this.g = function() {
   				window.clearTimeout(d);
   				c = !1
   			};
   			d = window.setTimeout(function() {
   				c && b.h()
   			}, 1E3 * a);
   			return this
   		};
   		Kc.prototype.stop = function() {
   			this.g && (this.g(), this.g = null)
   		};

   		function Lc(a) {
   			this.h = a;
   			this.g = null
   		}
   		Lc.prototype.mc = function() {
   			this.stop();
   			this.h();
   			return this
   		};
   		Lc.prototype.W = function(a) {
   			var b = this;
   			this.stop();
   			this.g = (new Kc(function() {
   				b.h()
   			})).W(a);
   			return this
   		};
   		Lc.prototype.Ua = function(a) {
   			var b = this;
   			this.stop();
   			this.g = (new Kc(function() {
   				b.g.W(a);
   				b.h()
   			})).W(a);
   			return this
   		};
   		Lc.prototype.stop = function() {
   			this.g && (this.g.stop(), this.g = null)
   		};
   		S("gowatch.util.Timer", Lc);
   		Lc.prototype.stop = Lc.prototype.stop;
   		Lc.prototype.tickEvery = Lc.prototype.Ua;
   		Lc.prototype.tickAfter = Lc.prototype.W;
   		Lc.prototype.tickNow = Lc.prototype.mc;

   		function Mc() {
   			var a = window.ManagedMediaSource || window.MediaSource;
   			return a && a.isTypeSupported ? !0 : !1
   		}

   		function Nc(a) {
   			return "" != Pc().canPlayType(a)
   		}

   		function Qc() {
   			return navigator.userAgent.match(/Edge?\//) ? !0 : !1
   		}

   		function Rc() {
   			return navigator.userAgent.match(/Edge\//) ? !0 : !1
   		}

   		function Sc() {
   			return Tc("Xbox One")
   		}

   		function Uc() {
   			return Tc("Tizen")
   		}

   		function Vc() {
   			return Tc("Tizen 3")
   		}

   		function Wc() {
   			return Tc("Tizen 2")
   		}

   		function Xc() {
   			return Tc("Web0S")
   		}

   		function Yc() {
   			return Xc() && 38 === Zc()
   		}

   		function $c() {
   			return Tc("CrKey")
   		}

   		function Zc() {
   			if (!Tc("Chrome") || Rc()) return null;
   			var a = navigator.userAgent.match(/Chrome\/(\d+)/);
   			return a ? parseInt(a[1], 10) : null
   		}

   		function ad() {
   			return !!navigator.vendor && navigator.vendor.includes("Apple") && !Uc() && !Tc("PC=EOS") && !Tc("PC=APL") && !Tc("VirginMedia") && !bd() && !cd() && !Tc("AFT") && !Tc("WPE") && !Tc("DT_STB_BCM")
   		}

   		function dd() {
   			return Tc("PlayStation 5")
   		}

   		function cd() {
   			return Tc("PlayStation 4")
   		}

   		function ed() {
   			return Tc("Hisense") || Tc("VIDAA")
   		}

   		function bd() {
   			return Tc("SOPOpenBrowser")
   		}

   		function fd() {
   			if (!ad()) return null;
   			var a = navigator.userAgent.match(/Version\/(\d+)/);
   			return a ? parseInt(a[1], 10) : (a = navigator.userAgent.match(/OS (\d+)(?:_\d+)?/)) ? parseInt(a[1], 10) : null
   		}

   		function Tc(a) {
   			return (navigator.userAgent || "").includes(a)
   		}

   		function Pc() {
   			if (gd) return gd;
   			hd || (hd = new Lc(function() {
   				gd = null
   			}));
   			(gd = document.getElementsByTagName("video")[0] || document.getElementsByTagName("audio")[0]) || (gd = document.createElement("video"));
   			hd.W(1);
   			return gd
   		}

   		function id() {
   			var a, b, c, d, e, f, g, h, k, l, m, n, p, q;
   			return O(function(u) {
   				switch (u.g) {
   					case 1:
   						a = {
   							width: Infinity,
   							height: Infinity
   						};
   						if ($c()) {
   							m = window.cast && cast.__platform__ && cast.__platform__.canDisplayType;
   							a.width = 1280;
   							a.height = 720;
   							ua(u, 15);
   							if (!(n = m)) {
   								u.u(17);
   								break
   							}
   							return E(u, cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160'), 18)
   						}
   						if (Uc()) {
   							a.width = 1920;
   							a.height = 1080;
   							try {
   								webapis.systeminfo && webapis.systeminfo.getMaxVideoResolution ? (b = webapis.systeminfo.getMaxVideoResolution(),
   									a.width = b.width, a.height = b.height) : webapis.productinfo.is8KPanelSupported && webapis.productinfo.is8KPanelSupported() ? (a.width = 7680, a.height = 4320) : webapis.productinfo.isUdPanelSupported && webapis.productinfo.isUdPanelSupported() && (a.width = 3840, a.height = 2160)
   							} catch (v) {
   								ab("Tizen: Error detecting screen size, default screen size 1920x1080.")
   							}
   							u.u(3);
   							break
   						}
   						if (Sc()) {
   							c = new Windows.Media.Protection.ProtectionCapabilities;
   							d = Windows.Media.Protection.ProtectionCapabilityResult;
   							e = null;
   							try {
   								do e = c.isTypeSupported('video/mp4;codecs="hvc1,mp4a";features="decode-res-x=3840,decode-res-y=2160,decode-bitrate=20000,decode-fps=30,decode-bpc=10,display-res-x=3840,display-res-y=2160,display-bpc=8"',
   									"com.microsoft.playready.recommendation"); while (e === d.maybe)
   							} catch (v) {
   								e = d.notSupported
   							}
   							e === d.probably ? (a.width = 3840, a.height = 2160) : (a.width = 1920, a.height = 1080);
   							u.u(3);
   							break
   						}
   						if (Xc()) {
   							try {
   								f = JSON.parse(window.PalmSystem.deviceInfo), a.width = Math.max(1920, f.screenWidth), a.height = Math.max(1080, f.screenHeight)
   							} catch (v) {
   								ab("WebOS: Error detecting screen size, default screen size 1920x1080."), a.width = 1920, a.height = 1080
   							}
   							u.u(3);
   							break
   						}
   						if (ed()) {
   							window.Hisense_Get4KSupportState && window.Hisense_Get4KSupportState() ?
   								(a.width = 3840, a.height = 2160) : (a.width = 1920, a.height = 1080);
   							u.u(3);
   							break
   						}
   						if (!cd() && !dd()) {
   							u.u(3);
   							break
   						}
   						g = !1;
   						ua(u, 9);
   						return E(u, window.msdk.device.getDisplayInfo(), 11);
   					case 11:
   						h = u.h;
   						g = "4K" === h.resolution;
   						wa(u, 10);
   						break;
   					case 9:
   						return ya(u), ua(u, 12), E(u, window.msdk.device.getDisplayInfoImmediate(), 14);
   					case 14:
   						k = u.h;
   						g = "4K" === k.resolution;
   						wa(u, 10);
   						break;
   					case 12:
   						l = ya(u), ab("PlayStation: Failed to get the display info:", l);
   					case 10:
   						g ? (a.width = 3840, a.height = 2160) : (a.width = 1920, a.height = 1080);
   						u.u(3);
   						break;
   					case 18:
   						n =
   							u.h;
   					case 17:
   						if (n) {
   							a.width = 3840;
   							a.height = 2160;
   							u.u(19);
   							break
   						}
   						if (!(p = m)) {
   							u.u(20);
   							break
   						}
   						return E(u, cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=1920; height=1080'), 21);
   					case 21:
   						p = u.h;
   					case 20:
   						p && (a.width = 1920, a.height = 1080);
   					case 19:
   						wa(u, 3);
   						break;
   					case 15:
   						q = ya(u), $a("Failed to check canDisplayType:", q);
   					case 3:
   						return u.return(a)
   				}
   			})
   		}
   		var hd = null,
   			gd = null;

   		function jd() {}

   		function kd(a) {
   			if (!a) return "";
   			a = Ab(a);
   			239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
   			if (window.TextDecoder && !cd()) return a = (new TextDecoder).decode(a), a.includes("\ufffd") && $a('Decoded string contains an "unknown character" codepoint.  That probably means the UTF8 encoding was incorrect!'), a;
   			for (var b = "", c = 0; c < a.length; ++c) {
   				var d = 65533;
   				0 == (a[c] & 128) ? d = a[c] : a.length >= c + 2 && 192 == (a[c] & 224) && 128 == (a[c + 1] & 192) ? (d = (a[c] & 31) << 6 | a[c + 1] & 63, c += 1) : a.length >= c + 3 && 224 == (a[c] & 240) && 128 == (a[c + 1] & 192) && 128 ==
   					(a[c + 2] & 192) ? (d = (a[c] & 15) << 12 | (a[c + 1] & 63) << 6 | a[c + 2] & 63, c += 2) : a.length >= c + 4 && 240 == (a[c] & 241) && 128 == (a[c + 1] & 192) && 128 == (a[c + 2] & 192) && 128 == (a[c + 3] & 192) && (d = (a[c] & 7) << 18 | (a[c + 1] & 63) << 12 | (a[c + 2] & 63) << 6 | a[c + 3] & 63, c += 3);
   				if (65535 >= d) b += String.fromCharCode(d);
   				else {
   					d -= 65536;
   					var e = d & 1023;
   					b += String.fromCharCode(55296 + (d >> 10));
   					b += String.fromCharCode(56320 + e)
   				}
   			}
   			return b
   		}

   		function ld(a, b, c) {
   			if (!a) return "";
   			if (!c && 0 != a.byteLength % 2) throw new T(2, 2, 2004);
   			c = Math.floor(a.byteLength / 2);
   			var d = new Uint16Array(c);
   			a = Eb(a);
   			for (var e = 0; e < c; e++) d[e] = a.getUint16(2 * e, b);
   			return md(d)
   		}

   		function nd(a) {
   			function b(d) {
   				return c.byteLength <= d || 32 <= c[d] && 126 >= c[d]
   			}
   			if (!a) return "";
   			var c = Ab(a);
   			if (239 == c[0] && 187 == c[1] && 191 == c[2]) return kd(c);
   			if (254 == c[0] && 255 == c[1]) return ld(c.subarray(2), !1);
   			if (255 == c[0] && 254 == c[1]) return ld(c.subarray(2), !0);
   			if (0 == c[0] && 0 == c[2]) return ld(a, !1);
   			if (0 == c[1] && 0 == c[3]) return ld(a, !0);
   			if (b(0) && b(1) && b(2) && b(3)) return kd(a);
   			throw new T(2, 2, 2003);
   		}

   		function qd(a) {
   			if (window.TextEncoder && !cd()) {
   				var b = new TextEncoder;
   				return Bb(b.encode(a))
   			}
   			a = encodeURIComponent(a);
   			a = unescape(a);
   			b = new Uint8Array(a.length);
   			for (var c = 0; c < a.length; c++) b[c] = a[c].charCodeAt(0);
   			return Bb(b)
   		}

   		function rd(a, b) {
   			for (var c = new ArrayBuffer(2 * a.length), d = new DataView(c), e = 0; e < a.length; ++e) d.setUint16(2 * e, a.charCodeAt(e), b);
   			return c
   		}

   		function md(a) {
   			return td.value()(a)
   		}

   		function ud(a) {
   			var b = {
   					"&amp;": "&",
   					"&lt;": "<",
   					"&gt;": ">",
   					"&quot;": '"',
   					"&#39;": "'",
   					"&apos;": "'",
   					"&nbsp;": "\u00a0",
   					"&lrm;": "\u200e",
   					"&rlm;": "\u200f"
   				},
   				c = /&(?:amp|lt|gt|quot|apos|#(0+)?39|nbsp|lrm|rlm);/g,
   				d = RegExp(c.source);
   			return a && d.test(a) ? a.replace(c, function(e) {
   				return b[e] || "'"
   			}) : a || ""
   		}
   		S("gowatch.util.StringUtils", jd);
   		jd.resetFromCharCode = function() {
   			td.g = void 0
   		};
   		jd.toUTF16 = rd;
   		jd.toUTF8 = qd;
   		jd.fromBytesAutoDetect = nd;
   		jd.fromUTF16 = ld;
   		jd.fromUTF8 = kd;
   		var td = new Jc(function() {
   			function a(c) {
   				try {
   					var d = new Uint8Array(c);
   					return 0 < String.fromCharCode.apply(null, d).length
   				} catch (e) {
   					return !1
   				}
   			}
   			for (var b = {
   					Jb: 65536
   				}; 0 < b.Jb; b = {
   					Jb: b.Jb
   				}, b.Jb /= 2)
   				if (a(b.Jb)) return function(c) {
   					return function(d) {
   						for (var e = "", f = 0; f < d.length; f += c.Jb) e += String.fromCharCode.apply(null, d.subarray(f, f + c.Jb));
   						return e
   					}
   				}(b);
   			return null
   		});

   		function vd() {}

   		function wd(a) {
   			a = md(Ab(a));
   			return btoa(a)
   		}

   		function xd(a, b) {
   			b = void 0 == b ? !0 : b;
   			a = wd(a).replace(/\+/g, "-").replace(/\//g, "_");
   			return b ? a : a.replace(/[=]*$/, "")
   		}

   		function yd(a) {
   			a = window.atob(a.replace(/-/g, "+").replace(/_/g, "/"));
   			for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
   			return b
   		}

   		function zd(a) {
   			for (var b = a.length / 2, c = new Uint8Array(b), d = 0; d < b; d++) c[d] = window.parseInt(a.substr(2 * d, 2), 16);
   			return c
   		}

   		function Ad(a) {
   			var b = Ab(a);
   			a = "";
   			b = t(b);
   			for (var c = b.next(); !c.done; c = b.next()) c = c.value, c = c.toString(16), 1 == c.length && (c = "0" + c), a += c;
   			return a
   		}

   		function Bd() {
   			for (var a = Ka.apply(0, arguments), b = 0, c = 0; c < a.length; ++c) b += a[c].byteLength;
   			b = new Uint8Array(b);
   			for (var d = c = 0; d < a.length; ++d) {
   				var e = a[d];
   				e instanceof Uint8Array ? b.set(e, c) : b.set(Ab(e), c);
   				c += e.byteLength
   			}
   			return b
   		}
   		S("gowatch.util.Uint8ArrayUtils", vd);
   		vd.concat = Bd;
   		vd.toHex = Ad;
   		vd.fromHex = zd;
   		vd.fromBase64 = yd;
   		vd.toBase64 = xd;
   		vd.toStandardBase64 = wd;

   		function Cd(a, b) {
   			if (0 == b.length) return a;
   			if (1 == a.length && 1 == b.length) {
   				var c = new rc(a[0]);
   				b = new rc(b[0]);
   				return [c.resolve(b).toString()]
   			}
   			b = b.map(function(g) {
   				return new rc(g)
   			});
   			c = [];
   			a = t(a);
   			for (var d = a.next(); !d.done; d = a.next()) {
   				d = new rc(d.value);
   				for (var e = t(b), f = e.next(); !f.done; f = e.next()) c.push(d.resolve(f.value).toString())
   			}
   			return c
   		}

   		function Ed(a, b, c) {
   			return {
   				keySystem: a,
   				encryptionScheme: b,
   				licenseServerUri: "",
   				distinctiveIdentifierRequired: !1,
   				persistentStateRequired: !1,
   				audioRobustness: "",
   				videoRobustness: "",
   				serverCertificate: null,
   				serverCertificateUri: "",
   				sessionType: "",
   				initData: c || [],
   				keyIds: new Set
   			}
   		}

   		function Fd(a, b) {
   			b = void 0 === b ? "cenc" : b;
   			var c = [],
   				d = [],
   				e = [];
   			a.forEach(function(g, h) {
   				var k = h;
   				22 != k.length && (k = xd(zd(h), !1));
   				var l = g;
   				22 != l.length && (l = xd(zd(g), !1));
   				g = {
   					kty: "oct",
   					kid: k,
   					k: l
   				};
   				c.push(g);
   				d.push(g.kid);
   				e.push(h)
   			});
   			a = JSON.stringify({
   				keys: c
   			});
   			var f = JSON.stringify({
   				kids: d
   			});
   			f = [{
   				initData: Ab(qd(f)),
   				initDataType: "keyids"
   			}];
   			return {
   				keySystem: "org.w3.clearkey",
   				encryptionScheme: b,
   				licenseServerUri: "data:application/json;base64," + window.btoa(a),
   				distinctiveIdentifierRequired: !1,
   				persistentStateRequired: !1,
   				audioRobustness: "",
   				videoRobustness: "",
   				serverCertificate: null,
   				serverCertificateUri: "",
   				sessionType: "",
   				initData: f,
   				keyIds: new Set(e)
   			}
   		}

   		function Id(a, b) {
   			if (1 == b.length) return b[0];
   			a = Jd(a, b);
   			if (null != a) return a;
   			throw new T(2, 4, 4025, b);
   		}

   		function Jd(a, b) {
   			for (var c = t(Kd[a]), d = c.next(); !d.done; d = c.next()) {
   				d = d.value;
   				for (var e = t(b), f = e.next(); !f.done; f = e.next())
   					if (f = f.value, d.test(f.trim())) return f.trim()
   			}
   			return a == Ld ? "" : null
   		}

   		function Md(a, b) {
   			var c = [];
   			a = t(Kd[a]);
   			for (var d = a.next(); !d.done; d = a.next()) {
   				d = d.value;
   				for (var e = t(b), f = e.next(); !f.done; f = e.next()) f = f.value, d.test(f.trim()) && c.push(f.trim())
   			}
   			return c
   		}
   		var Ld = "text",
   			Nd = {
   				ga: "video",
   				U: "audio",
   				ma: Ld,
   				Ee: "image",
   				Ui: "application"
   			},
   			Kd = {
   				audio: [/^vorbis$/, /^Opus$/, /^opus$/, /^fLaC$/, /^flac$/, /^mp4a/, /^[ae]c-3$/, /^ac-4$/, /^dts[cex]$/, /^iamf/],
   				video: [/^avc/, /^hev/, /^hvc/, /^vvc/, /^vvi/, /^vp0?[89]/, /^av01/, /^dvh/, /^dva/, /^dav/],
   				text: [/^vtt$/, /^wvtt/, /^stpp/]
   			};

   		function Od() {}

   		function Pd(a, b) {
   			var c = a;
   			b && !Qd.includes(a) && (c += '; codecs="' + b + '"');
   			return c
   		}

   		function Rd(a, b) {
   			b && (a += '; codecs="' + b + '"');
   			return a
   		}

   		function Sd(a, b, c) {
   			var d = Pd(a, b);
   			b = Rd(a, b);
   			lc(b) ? (a = lc(b)) ? (a = a(), c = a.convertCodecs(c, b), a.destroy()) : c = b : c = "video/mp2t" != a && "audio" == c ? d.replace("video", "audio") : d;
   			return c
   		}

   		function Td(a, b, c) {
   			var d = [b];
   			Ud.forEach(function(e, f) {
   				var g = a[f];
   				"codecs" == f ? Qd.includes(a.mimeType) || d.push('codecs="' + c + '"') : g && d.push(e + '="' + g + '"')
   			});
   			"PQ" == a.hdr && d.push('eotf="smpte2084"');
   			return d.join(";")
   		}

   		function Vd(a) {
   			return a.split(";")[0].split("/")[1]
   		}

   		function Wd(a) {
   			var b = Xd(a);
   			a = b[0];
   			b = b[1].toLowerCase();
   			switch (!0) {
   				case "mp4a" === a && "69" === b:
   				case "mp4a" === a && "6b" === b:
   				case "mp4a" === a && "40.34" === b:
   					return "mp3";
   				case "mp4a" === a && "66" === b:
   				case "mp4a" === a && "67" === b:
   				case "mp4a" === a && "68" === b:
   				case "mp4a" === a && "40.2" === b:
   				case "mp4a" === a && "40.02" === b:
   				case "mp4a" === a && "40.5" === b:
   				case "mp4a" === a && "40.05" === b:
   				case "mp4a" === a && "40.29" === b:
   				case "mp4a" === a && "40.42" === b:
   					return "aac";
   				case "mp4a" === a && "a5" === b:
   					return "ac-3";
   				case "mp4a" === a && "a6" === b:
   					return "ec-3";
   				case "mp4a" ===
   				a && "b2" === b:
   					return "dtsx";
   				case "mp4a" === a && "a9" === b:
   					return "dtsc";
   				case "avc1" === a:
   				case "avc3" === a:
   					return "avc";
   				case "hvc1" === a:
   				case "hev1" === a:
   					return "hevc";
   				case "dvh1" === a:
   				case "dvhe" === a:
   					return "dovi"
   			}
   			return a
   		}

   		function Yd(a) {
   			var b = [];
   			a = t(a.split(","));
   			for (var c = a.next(); !c.done; c = a.next()) c = Xd(c.value), b.push(c[0]);
   			return b.sort().join(",")
   		}

   		function Zd(a) {
   			return a.split(";")[0]
   		}

   		function $d(a) {
   			a = a.split(/ *; */);
   			a.shift();
   			return (a = a.find(function(b) {
   				return b.startsWith("codecs=")
   			})) ? a.split("=")[1].replace(/^"|"$/g, "") : ""
   		}

   		function ae(a) {
   			return "application/x-mpegurl" === a || "application/vnd.apple.mpegurl" === a
   		}

   		function Xd(a) {
   			a = a.split(".");
   			var b = a[0];
   			a.shift();
   			return [b, a.join(".")]
   		}
   		S("gowatch.util.MimeUtils", Od);
   		Od.getFullTypeWithAllCodecs = Rd;
   		Od.getFullType = Pd;
   		var Ud = (new Map).set("codecs", "codecs").set("frameRate", "framerate").set("bandwidth", "bitrate").set("width", "width").set("height", "height").set("channelsCount", "channels"),
   			Qd = ["audio/aac", "audio/ac3", "audio/ec3", "audio/mpeg"];

   		function ge(a) {
   			this.i = null;
   			this.j = a;
   			this.B = !1;
   			this.l = this.s = 0;
   			this.m = Infinity;
   			this.h = this.g = null;
   			this.C = "";
   			this.A = function() {};
   			this.o = new Map
   		}

   		function he(a) {
   			return ie[a] ? !0 : "application/cea-608" == a || "application/cea-708" == a ? !!Ib : !1
   		}
   		ge.prototype.destroy = function() {
   			this.j = this.i = null;
   			this.o.clear();
   			return Promise.resolve()
   		};

   		function je(a, b, c, d, e) {
   			var f, g, h, k, l, m, n;
   			return O(function(p) {
   				if (1 == p.g) return E(p, Promise.resolve(), 2);
   				if (!a.i || !a.j) return p.return();
   				if (null == c || null == d) return a.i.parseInit(Ab(b)), p.return();
   				f = a.B ? c : a.s;
   				g = {
   					periodStart: a.s,
   					segmentStart: c,
   					segmentEnd: d,
   					vttOffset: f
   				};
   				h = a.i.parseMedia(Ab(b), g, e);
   				k = t(h);
   				for (l = k.next(); !l.done; l = k.next()) m = l.value, a.A(m, e || null, g);
   				n = h.filter(function(q) {
   					return q.startTime >= a.l && q.startTime < a.m
   				});
   				a.j.append(n);
   				null == a.g && (a.g = Math.max(c, a.l));
   				a.h = Math.min(d, a.m);
   				F(p)
   			})
   		}
   		ge.prototype.remove = function(a, b) {
   			var c = this;
   			return O(function(d) {
   				if (1 == d.g) return E(d, Promise.resolve(), 2);
   				!c.j || !c.j.remove(a, b) || null == c.g || b <= c.g || a >= c.h || (a <= c.g && b >= c.h ? c.g = c.h = null : a <= c.g && b < c.h ? c.g = b : a > c.g && b >= c.h && (c.h = a));
   				F(d)
   			})
   		};

   		function le(a, b, c) {
   			a.l = b;
   			a.m = c
   		}

   		function me(a, b, c) {
   			a.C = b;
   			if (b = a.o.get(b))
   				for (var d = t(b.keys()), e = d.next(); !e.done; e = d.next())(e = b.get(e.value).filter(function(f) {
   					return f.endTime <= c
   				})) && a.j.append(e)
   		}

   		function ne(a, b, c) {
   			b.startTime += c;
   			b.endTime += c;
   			b = t(b.nestedCues);
   			for (var d = b.next(); !d.done; d = b.next()) ne(a, d.value, c)
   		}

   		function oe(a, b, c, d, e) {
   			var f = c + " " + d,
   				g = new Map;
   			b = t(b);
   			for (var h = b.next(); !h.done; h = b.next()) {
   				var k = h.value;
   				h = k.stream;
   				k = k.cue;
   				g.has(h) || g.set(h, new Map);
   				g.get(h).has(f) || g.get(h).set(f, []);
   				ne(a, k, e);
   				k.startTime >= a.l && k.startTime < a.m && (g.get(h).get(f).push(k), h == a.C && a.j.append([k]))
   			}
   			e = t(g.keys());
   			for (f = e.next(); !f.done; f = e.next())
   				for (f = f.value, a.o.has(f) || a.o.set(f, new Map), b = t(g.get(f).keys()), h = b.next(); !h.done; h = b.next()) h = h.value, k = g.get(f).get(h), a.o.get(f).set(h, k);
   			a.g = null == a.g ? Math.max(c,
   				a.l) : Math.min(a.g, Math.max(c, a.l));
   			a.h = Math.max(a.h, Math.min(d, a.m))
   		}
   		S("gowatch.text.TextEngine", ge);
   		ge.prototype.destroy = ge.prototype.destroy;
   		ge.findParser = function(a) {
   			return ie[a]
   		};
   		ge.unregisterParser = function(a) {
   			delete ie[a]
   		};
   		ge.registerParser = function(a, b) {
   			ie[a] = b
   		};
   		var ie = {};

   		function pe(a, b) {
   			return a.concat(b)
   		}

   		function qe() {}

   		function re(a) {
   			return null != a
   		};

   		function se() {}

   		function te(a, b) {
   			a = ue(a);
   			b = ue(b);
   			return a.split("-")[0] == b.split("-")[0]
   		}

   		function ve(a, b) {
   			a = ue(a);
   			b = ue(b);
   			a = a.split("-");
   			b = b.split("-");
   			return a[0] == b[0] && 1 == a.length && 2 == b.length
   		}

   		function we(a, b) {
   			a = ue(a);
   			b = ue(b);
   			a = a.split("-");
   			b = b.split("-");
   			return 2 == a.length && 2 == b.length && a[0] == b[0]
   		}

   		function ue(a) {
   			a = t(a.split("-x-"));
   			var b = a.next().value;
   			b = void 0 === b ? "" : b;
   			a = a.next().value;
   			a = void 0 === a ? "" : a;
   			var c = t(b.split("-"));
   			b = c.next().value;
   			b = void 0 === b ? "" : b;
   			c = c.next().value;
   			c = void 0 === c ? "" : c;
   			a = a ? "x-" + a : "";
   			b = b.toLowerCase();
   			b = xe.get(b) || b;
   			c = c.toUpperCase();
   			return (c ? b + "-" + c : b) + (a ? "-" + a : "")
   		}

   		function ye(a, b) {
   			a = ue(a);
   			b = ue(b);
   			return b == a ? 4 : ve(b, a) ? 3 : we(b, a) ? 2 : ve(a, b) ? 1 : 0
   		}

   		function ze(a) {
   			var b = a.indexOf("-");
   			a = 0 <= b ? a.substring(0, b) : a;
   			a = a.toLowerCase();
   			return a = xe.get(a) || a
   		}

   		function Ae(a) {
   			return a.language ? ue(a.language) : a.audio && a.audio.language ? ue(a.audio.language) : a.video && a.video.language ? ue(a.video.language) : "und"
   		}

   		function Be(a, b) {
   			a = ue(a);
   			var c = new Set,
   				d = t(b);
   			for (b = d.next(); !b.done; b = d.next()) c.add(ue(b.value));
   			d = t(c);
   			for (b = d.next(); !b.done; b = d.next())
   				if (b = b.value, b == a) return b;
   			d = t(c);
   			for (b = d.next(); !b.done; b = d.next())
   				if (b = b.value, ve(b, a)) return b;
   			d = t(c);
   			for (b = d.next(); !b.done; b = d.next())
   				if (b = b.value, we(b, a)) return b;
   			c = t(c);
   			for (b = c.next(); !b.done; b = c.next())
   				if (b = b.value, ve(a, b)) return b;
   			return null
   		}
   		S("gowatch.util.LanguageUtils", se);
   		se.findClosestLocale = Be;
   		se.getLocaleForVariant = Ae;
   		se.getLocaleForText = function(a) {
   			return ue(a.language || "und")
   		};
   		se.getBase = ze;
   		se.relatedness = ye;
   		se.areSiblings = function(a, b) {
   			var c = ze(a),
   				d = ze(b);
   			return a != c && b != d && c == d
   		};
   		se.normalize = ue;
   		se.isSiblingOf = we;
   		se.isParentOf = ve;
   		se.areLanguageCompatible = te;
   		se.areLocaleCompatible = function(a, b) {
   			a = ue(a);
   			b = ue(b);
   			return a == b
   		};
   		var xe = new Map([
   			["aar", "aa"],
   			["abk", "ab"],
   			["afr", "af"],
   			["aka", "ak"],
   			["alb", "sq"],
   			["amh", "am"],
   			["ara", "ar"],
   			["arg", "an"],
   			["arm", "hy"],
   			["asm", "as"],
   			["ava", "av"],
   			["ave", "ae"],
   			["aym", "ay"],
   			["aze", "az"],
   			["bak", "ba"],
   			["bam", "bm"],
   			["baq", "eu"],
   			["bel", "be"],
   			["ben", "bn"],
   			["bih", "bh"],
   			["bis", "bi"],
   			["bod", "bo"],
   			["bos", "bs"],
   			["bre", "br"],
   			["bul", "bg"],
   			["bur", "my"],
   			["cat", "ca"],
   			["ces", "cs"],
   			["cha", "ch"],
   			["che", "ce"],
   			["chi", "zh"],
   			["chu", "cu"],
   			["chv", "cv"],
   			["cor", "kw"],
   			["cos", "co"],
   			["cre", "cr"],
   			["cym", "cy"],
   			["cze",
   				"cs"
   			],
   			["dan", "da"],
   			["deu", "de"],
   			["div", "dv"],
   			["dut", "nl"],
   			["dzo", "dz"],
   			["ell", "el"],
   			["eng", "en"],
   			["epo", "eo"],
   			["est", "et"],
   			["eus", "eu"],
   			["ewe", "ee"],
   			["fao", "fo"],
   			["fas", "fa"],
   			["fij", "fj"],
   			["fin", "fi"],
   			["fra", "fr"],
   			["fre", "fr"],
   			["fry", "fy"],
   			["ful", "ff"],
   			["geo", "ka"],
   			["ger", "de"],
   			["gla", "gd"],
   			["gle", "ga"],
   			["glg", "gl"],
   			["glv", "gv"],
   			["gre", "el"],
   			["grn", "gn"],
   			["guj", "gu"],
   			["hat", "ht"],
   			["hau", "ha"],
   			["heb", "he"],
   			["her", "hz"],
   			["hin", "hi"],
   			["hmo", "ho"],
   			["hrv", "hr"],
   			["hun", "hu"],
   			["hye", "hy"],
   			["ibo", "ig"],
   			["ice",
   				"is"
   			],
   			["ido", "io"],
   			["iii", "ii"],
   			["iku", "iu"],
   			["ile", "ie"],
   			["ina", "ia"],
   			["ind", "id"],
   			["ipk", "ik"],
   			["isl", "is"],
   			["ita", "it"],
   			["jav", "jv"],
   			["jpn", "ja"],
   			["kal", "kl"],
   			["kan", "kn"],
   			["kas", "ks"],
   			["kat", "ka"],
   			["kau", "kr"],
   			["kaz", "kk"],
   			["khm", "km"],
   			["kik", "ki"],
   			["kin", "rw"],
   			["kir", "ky"],
   			["kom", "kv"],
   			["kon", "kg"],
   			["kor", "ko"],
   			["kua", "kj"],
   			["kur", "ku"],
   			["lao", "lo"],
   			["lat", "la"],
   			["lav", "lv"],
   			["lim", "li"],
   			["lin", "ln"],
   			["lit", "lt"],
   			["ltz", "lb"],
   			["lub", "lu"],
   			["lug", "lg"],
   			["mac", "mk"],
   			["mah", "mh"],
   			["mal", "ml"],
   			["mao",
   				"mi"
   			],
   			["mar", "mr"],
   			["may", "ms"],
   			["mkd", "mk"],
   			["mlg", "mg"],
   			["mlt", "mt"],
   			["mon", "mn"],
   			["mri", "mi"],
   			["msa", "ms"],
   			["mya", "my"],
   			["nau", "na"],
   			["nav", "nv"],
   			["nbl", "nr"],
   			["nde", "nd"],
   			["ndo", "ng"],
   			["nep", "ne"],
   			["nld", "nl"],
   			["nno", "nn"],
   			["nob", "nb"],
   			["nor", "no"],
   			["nya", "ny"],
   			["oci", "oc"],
   			["oji", "oj"],
   			["ori", "or"],
   			["orm", "om"],
   			["oss", "os"],
   			["pan", "pa"],
   			["per", "fa"],
   			["pli", "pi"],
   			["pol", "pl"],
   			["por", "pt"],
   			["pus", "ps"],
   			["que", "qu"],
   			["roh", "rm"],
   			["ron", "ro"],
   			["rum", "ro"],
   			["run", "rn"],
   			["rus", "ru"],
   			["sag", "sg"],
   			["san",
   				"sa"
   			],
   			["sin", "si"],
   			["slk", "sk"],
   			["slo", "sk"],
   			["slv", "sl"],
   			["sme", "se"],
   			["smo", "sm"],
   			["sna", "sn"],
   			["snd", "sd"],
   			["som", "so"],
   			["sot", "st"],
   			["spa", "es"],
   			["sqi", "sq"],
   			["srd", "sc"],
   			["srp", "sr"],
   			["ssw", "ss"],
   			["sun", "su"],
   			["swa", "sw"],
   			["swe", "sv"],
   			["tah", "ty"],
   			["tam", "ta"],
   			["tat", "tt"],
   			["tel", "te"],
   			["tgk", "tg"],
   			["tgl", "tl"],
   			["tha", "th"],
   			["tib", "bo"],
   			["tir", "ti"],
   			["ton", "to"],
   			["tsn", "tn"],
   			["tso", "ts"],
   			["tuk", "tk"],
   			["tur", "tr"],
   			["twi", "tw"],
   			["uig", "ug"],
   			["ukr", "uk"],
   			["urd", "ur"],
   			["uzb", "uz"],
   			["ven", "ve"],
   			["vie",
   				"vi"
   			],
   			["vol", "vo"],
   			["wel", "cy"],
   			["wln", "wa"],
   			["wol", "wo"],
   			["xho", "xh"],
   			["yid", "yi"],
   			["yor", "yo"],
   			["zha", "za"],
   			["zho", "zh"],
   			["zul", "zu"]
   		]);

   		function Ce(a) {
   			function b(d) {
   				switch (typeof d) {
   					case "undefined":
   					case "boolean":
   					case "number":
   					case "string":
   					case "symbol":
   					case "function":
   						return d;
   					default:
   						if (!d || d.buffer instanceof ArrayBuffer) return d;
   						if (c.has(d)) return null;
   						var e = d.constructor == Array;
   						if (d.constructor != Object && !e) return null;
   						c.add(d);
   						var f = e ? [] : {},
   							g;
   						for (g in d) f[g] = b(d[g]);
   						e && (f.length = d.length);
   						return f
   				}
   			}
   			var c = new WeakSet;
   			return b(a)
   		}

   		function De(a) {
   			var b = {},
   				c;
   			for (c in a) b[c] = a[c];
   			return b
   		};

   		function Ee() {}

   		function Fe(a, b, c, d) {
   			var e = a.variants;
   			if (b.length || c.length) e = Ge(e, b, c);
   			if (d.length) {
   				b = new gb;
   				c = t(e);
   				for (e = c.next(); !e.done; e = c.next()) e = e.value, b.push(String(e.video.width || 0), e);
   				var f = [];
   				b.forEach(function(u, v) {
   					u = 0;
   					var w = [],
   						A = {};
   					v = t(v);
   					for (var z = v.next(); !z.done; A = {
   							Zc: A.Zc
   						}, z = v.next()) A.Zc = z.value, z = d.filter(function(y) {
   						return function(B) {
   							return y.Zc.decodingInfos[0][B]
   						}
   					}(A)).length, z > u ? (u = z, w = [A.Zc]) : z == u && w.push(A.Zc);
   					f.push.apply(f, x(w))
   				});
   				e = f
   			}
   			c = new Set;
   			b = new Set;
   			var g = t(e);
   			for (e = g.next(); !e.done; e =
   				g.next()) e = e.value, e.audio && c.add(e.audio), e.video && b.add(e.video);
   			c = Array.from(c).sort(function(u, v) {
   				return u.bandwidth - v.bandwidth
   			});
   			var h = [];
   			e = new Map;
   			c = t(c);
   			for (g = c.next(); !g.done; g = c.next()) {
   				g = g.value;
   				var k = g.language + (g.channelsCount || 0) + (g.audioSamplingRate || 0) + g.roles.join(",") + g.label + g.groupId + g.fastSwitching,
   					l = e.get(k) || [];
   				if (l.length) {
   					var m = l[l.length - 1],
   						n = Wd(m.codecs),
   						p = Wd(g.codecs);
   					n == p && g.bandwidth > m.bandwidth && (l.push(g), h.push(g.id))
   				} else l.push(g), h.push(g.id);
   				e.set(k, l)
   			}
   			c = Array.from(b).sort(function(u,
   				v) {
   				return u.bandwidth && v.bandwidth ? u.bandwidth - v.bandwidth : u.width - v.width
   			});
   			b = ob();
   			var q = [];
   			e = new Map;
   			c = t(c);
   			for (g = c.next(); !g.done; g = c.next()) {
   				g = g.value;
   				k = Math.round(g.frameRate || 0) + (g.hdr || "") + g.fastSwitching;
   				l = e.get(k) || [];
   				if (l.length) {
   					m = l[l.length - 1];
   					if (!b && (n = Wd(m.codecs), p = Wd(g.codecs), n !== p)) continue;
   					g.width > m.width || g.height > m.height ? (l.push(g), q.push(g.id)) : g.width == m.width && g.height == m.height && (n = Wd(m.codecs), p = Wd(g.codecs), n == p && g.bandwidth > m.bandwidth && (l.push(g), q.push(g.id)))
   				} else l.push(g),
   					q.push(g.id);
   				e.set(k, l)
   			}
   			a.variants = a.variants.filter(function(u) {
   				var v = u.audio;
   				u = u.video;
   				return v && !h.includes(v.id) || u && !q.includes(u.id) ? !1 : !0
   			})
   		}

   		function Ge(a, b, c) {
   			var d = {};
   			b = t(b);
   			for (var e = b.next(); !e.done; d = {
   					De: d.De
   				}, e = b.next())
   				if (d.De = e.value, e = a.filter(function(f) {
   						return function(g) {
   							return g.video && g.video.codecs.startsWith(f.De)
   						}
   					}(d)), e.length) {
   					a = e;
   					break
   				} d = {};
   			c = t(c);
   			for (b = c.next(); !b.done; d = {
   					we: d.we
   				}, b = c.next())
   				if (d.we = b.value, b = a.filter(function(f) {
   						return function(g) {
   							return g.audio && g.audio.codecs.startsWith(f.we)
   						}
   					}(d)), b.length) {
   					a = b;
   					break
   				} return a
   		}

   		function He(a, b, c) {
   			a.variants = a.variants.filter(function(d) {
   				return Ie(d, b, c)
   			})
   		}

   		function Ie(a, b, c) {
   			function d(h, k, l) {
   				return h >= k && h <= l
   			}
   			var e = a.video;
   			if (e && e.width && e.height) {
   				var f = e.width,
   					g = e.height;
   				g > f && (g = t([g, f]), f = g.next().value, g = g.next().value);
   				if (!d(f, b.minWidth, Math.min(b.maxWidth, c.width)) || !d(g, b.minHeight, Math.min(b.maxHeight, c.height)) || !d(e.width * e.height, b.minPixels, b.maxPixels)) return !1
   			}
   			return a && a.video && a.video.frameRate && !d(a.video.frameRate, b.minFrameRate, b.maxFrameRate) || a && a.audio && a.audio.channelsCount && !d(a.audio.channelsCount, b.minChannelsCount, b.maxChannelsCount) ||
   				!d(a.bandwidth, b.minBandwidth, b.maxBandwidth) ? !1 : !0
   		}

   		function Je(a, b, c) {
   			var d = !1;
   			a = t(a);
   			for (var e = a.next(); !e.done; e = a.next()) {
   				e = e.value;
   				var f = e.allowedByApplication;
   				e.allowedByApplication = Ie(e, b, c);
   				f != e.allowedByApplication && (d = !0)
   			}
   			return d
   		}

   		function Ke(a, b, c) {
   			c = void 0 === c ? [] : c;
   			return O(function(d) {
   				if (1 == d.g) return E(d, Le(a, b, 0 < b.offlineSessionIds.length, c), 2);
   				Me(b);
   				return E(d, Ne(b), 0)
   			})
   		}

   		function Le(a, b, c, d) {
   			var e, f;
   			return O(function(g) {
   				if (1 == g.g) return E(g, Oe(b.variants, c, !1, d), 2);
   				e = null;
   				a && (f = a.g) && (e = f.keySystem);
   				b.variants = b.variants.filter(function(h) {
   					var k = Pe(h, e);
   					if (!k) {
   						var l = [];
   						h.audio && l.push(Qe(h.audio));
   						h.video && l.push(Qe(h.video))
   					}
   					return k
   				});
   				F(g)
   			})
   		}

   		function Pe(a, b) {
   			var c = Sc(),
   				d = Tc("Firefox") && Tc("Android"),
   				e = a.video,
   				f = e && e.width || 0,
   				g = e && e.height || 0;
   			if (c && e && (1920 < f || 1080 < g) && (e.codecs.includes("avc1.") || e.codecs.includes("avc3."))) return !1;
   			if (e) {
   				c = Re(e.codecs);
   				if (e.codecs.includes(",")) {
   					f = e.codecs.split(",");
   					c = Id("video", f);
   					c = Re(c);
   					f = Id("audio", f);
   					f = Se(f, e.mimeType);
   					g = Sd(e.mimeType, f, "audio");
   					if (!mb(g)) return !1;
   					c = [c, f].join()
   				}
   				f = Sd(e.mimeType, c, "video");
   				if (!mb(f)) return !1;
   				e.codecs = c
   			}
   			e = a.audio;
   			if (d && e && e.encrypted && e.codecs.toLowerCase().includes("opus")) return !1;
   			if (e) {
   				d = Se(e.codecs, e.mimeType);
   				c = Sd(e.mimeType, d, "audio");
   				if (!mb(c)) return !1;
   				e.codecs = d
   			}
   			return a.decodingInfos.some(function(h) {
   				return !h.supported || b && (h = h.keySystemAccess) && h.keySystem != b ? !1 : !0
   			})
   		}

   		function Te(a) {
   			var b = [];
   			for (c in a) b.push(c);
   			b.sort();
   			var c = [];
   			b = t(b);
   			for (var d = b.next(); !d.done; d = b.next()) {
   				var e = d.value;
   				d = JSON.stringify(e);
   				e = a[e];
   				e instanceof Object ? (e = Te(e), c.push(d + ":" + e)) : (e = JSON.stringify(e), c.push(d + ":" + e))
   			}
   			return "{" + c.join(",") + "}"
   		}

   		function Ue(a, b) {
   			var c, d, e, f, g, h, k;
   			return O(function(l) {
   				if (1 == l.g) {
   					c = function(m, n) {
   						if (m) {
   							var p = De(m);
   							p.supported = m.supported && n.supported;
   							p.powerEfficient = m.powerEfficient && n.powerEfficient;
   							p.smooth = m.smooth && n.smooth;
   							n.keySystemAccess && !p.keySystemAccess && (p.keySystemAccess = n.keySystemAccess);
   							return p
   						}
   						return n
   					};
   					d = null;
   					e = [];
   					f = {};
   					g = t(b);
   					for (h = g.next(); !h.done; f = {
   							Lc: f.Lc,
   							Mc: f.Mc
   						}, h = g.next()) k = h.value, f.Mc = Te(k), f.Lc = Ve, f.Lc[f.Mc] ? d = c(d, f.Lc[f.Mc]) : e.push(We(k).then(function(m) {
   						return function(n) {
   							var p =
   								null;
   							n = t(n || []);
   							for (var q = n.next(); !q.done; q = n.next()) p = c(p, q.value);
   							p && (m.Lc[m.Mc] = p, d = c(d, p))
   						}
   					}(f)));
   					return E(l, Promise.all(e), 2)
   				}
   				d && a.decodingInfos.push(d);
   				F(l)
   			})
   		}

   		function We(a) {
   			var b = [""];
   			a.video && (b = $d(a.video.contentType).split(","));
   			var c = [""];
   			a.audio && (c = $d(a.audio.contentType).split(","));
   			var d = [];
   			b = t(b);
   			for (var e = b.next(); !e.done; e = b.next()) {
   				e = e.value;
   				for (var f = {}, g = t(c), h = g.next(); !h.done; f = {
   						Rb: f.Rb
   					}, h = g.next()) h = h.value, f.Rb = Ce(a), a.video && (f.Rb.video.contentType = Pd(Zd(f.Rb.video.contentType), e)), a.audio && (f.Rb.audio.contentType = Pd(Zd(f.Rb.audio.contentType), h)), d.push(new Promise(function(k) {
   					return function(l, m) {
   						navigator.mediaCapabilities.decodingInfo(k.Rb).then(function(n) {
   							l(n)
   						}).catch(m)
   					}
   				}(f)))
   			}
   			return Promise.all(d).catch(function() {
   				JSON.stringify(a);
   				return null
   			})
   		}

   		function Oe(a, b, c, d) {
   			var e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B;
   			return O(function(C) {
   				switch (C.g) {
   					case 1:
   						if (e = a.some(function(D) {
   								return D.decodingInfos.length
   							})) return C.return();
   						f = {};
   						g = t(d);
   						h = g.next();
   					case 2:
   						if (h.done) {
   							C.u(4);
   							break
   						}
   						f.ye = h.value;
   						k = !1;
   						l = t(a);
   						m = l.next();
   					case 5:
   						if (m.done) {
   							C.u(7);
   							break
   						}
   						n = m.value;
   						p = Xe(n, b, c).filter(function(D) {
   							return function(J) {
   								J = J[0];
   								return (J.keySystemConfiguration && J.keySystemConfiguration.keySystem) === D.ye
   							}
   						}(f));
   						q = t(p);
   						u = q.next();
   					case 8:
   						if (u.done) {
   							C.u(10);
   							break
   						}
   						v = u.value;
   						return E(C, Ue(n, v), 9);
   					case 9:
   						u = q.next();
   						C.u(8);
   						break;
   					case 10:
   						n.decodingInfos.length && (k = !0);
   						m = l.next();
   						C.u(5);
   						break;
   					case 7:
   						if (k) return C.return();
   						f = {
   							ye: f.ye
   						};
   						h = g.next();
   						C.u(2);
   						break;
   					case 4:
   						w = t(a), m = w.next();
   					case 12:
   						if (m.done) {
   							C.u(0);
   							break
   						}
   						A = m.value;
   						z = Xe(A, b, c).filter(function(D) {
   							D = D[0];
   							D = D.keySystemConfiguration && D.keySystemConfiguration.keySystem;
   							return !D || !d.includes(D)
   						});
   						y = t(z);
   						u = y.next();
   					case 15:
   						if (u.done) {
   							m = w.next();
   							C.u(12);
   							break
   						}
   						B = u.value;
   						return E(C, Ue(A, B), 16);
   					case 16:
   						u = y.next(), C.u(15)
   				}
   			})
   		}

   		function Xe(a, b, c) {
   			var d = a.audio,
   				e = a.video,
   				f = [],
   				g = [];
   			if (e)
   				for (var h = t(e.fullMimeTypes), k = h.next(); !k.done; k = h.next()) {
   					k = k.value;
   					var l = $d(k);
   					if (l.includes(",") && !d) {
   						var m = l.split(","),
   							n = Zd(k);
   						l = Id("video", m);
   						m = Id("audio", m);
   						m = Se(m, n);
   						n = Sd(n, m, "audio");
   						g.push({
   							contentType: n,
   							channels: 2,
   							bitrate: a.bandwidth || 1,
   							samplerate: 1,
   							spatialRendering: !1
   						})
   					}
   					l = Re(l);
   					k = {
   						contentType: Sd(Zd(k), l, "video"),
   						width: e.width || 64,
   						height: e.height || 64,
   						bitrate: e.bandwidth || a.bandwidth || 1,
   						framerate: e.frameRate || 1
   					};
   					if (e.hdr) switch (e.hdr) {
   						case "SDR":
   							k.transferFunction =
   								"srgb";
   							break;
   						case "PQ":
   							k.transferFunction = "pq";
   							break;
   						case "HLG":
   							k.transferFunction = "hlg"
   					}
   					e.colorGamut && (k.colorGamut = e.colorGamut);
   					f.push(k)
   				}
   			if (d)
   				for (h = t(d.fullMimeTypes), k = h.next(); !k.done; k = h.next()) l = k.value, k = Zd(l), l = Se($d(l), k), k = Sd(k, l, "audio"), g.push({
   					contentType: k,
   					channels: d.channelsCount || 2,
   					bitrate: d.bandwidth || a.bandwidth || 1,
   					samplerate: d.audioSamplingRate || 1,
   					spatialRendering: d.spatialAudio
   				});
   			h = [];
   			0 == f.length && f.push(null);
   			0 == g.length && g.push(null);
   			f = t(f);
   			for (k = f.next(); !k.done; k = f.next())
   				for (k =
   					k.value, l = t(g), n = l.next(); !n.done; n = l.next()) n = n.value, m = {
   					type: c ? "file" : "media-source"
   				}, k && (m.video = k), n && (m.audio = n), h.push(m);
   			g = (a.video ? a.video.drmInfos : []).concat(a.audio ? a.audio.drmInfos : []);
   			if (!g.length) return [h];
   			a = [];
   			c = new Map;
   			g = t(g);
   			for (var p = g.next(); !p.done; p = g.next()) f = p.value, c.get(f.keySystem) || c.set(f.keySystem, []), c.get(f.keySystem).push(f);
   			g = b ? "required" : "optional";
   			b = b ? ["persistent-license"] : ["temporary"];
   			f = t(c.keys());
   			for (k = f.next(); !k.done; k = f.next()) {
   				k = k.value;
   				l = [];
   				n = t(h);
   				for (m =
   					n.next(); !m.done; m = n.next()) {
   					m = Object.assign({}, m.value);
   					var q = c.get(k),
   						u = {
   							keySystem: k,
   							initDataType: "cenc",
   							persistentState: g,
   							distinctiveIdentifier: "optional",
   							sessionTypes: b
   						};
   					q = t(q);
   					for (p = q.next(); !p.done; p = q.next()) {
   						p = p.value;
   						if (p.initData && p.initData.length) {
   							for (var v = new Set, w = t(p.initData), A = w.next(); !A.done; A = w.next()) v.add(A.value.initDataType);
   							u.initDataType = p.initData[0].initDataType
   						}
   						p.distinctiveIdentifierRequired && (u.distinctiveIdentifier = "required");
   						p.persistentStateRequired && (u.persistentState =
   							"required");
   						p.sessionType && (u.sessionTypes = [p.sessionType]);
   						d && (u.audio ? (u.audio.encryptionScheme = u.audio.encryptionScheme || p.encryptionScheme, u.audio.robustness = u.audio.robustness || p.audioRobustness) : u.audio = {
   							encryptionScheme: p.encryptionScheme,
   							robustness: p.audioRobustness
   						}, "" == u.audio.robustness && delete u.audio.robustness);
   						e && (u.video ? (u.video.encryptionScheme = u.video.encryptionScheme || p.encryptionScheme, u.video.robustness = u.video.robustness || p.videoRobustness) : u.video = {
   							encryptionScheme: p.encryptionScheme,
   							robustness: p.videoRobustness
   						}, "" == u.video.robustness && delete u.video.robustness)
   					}
   					m.keySystemConfiguration = u;
   					l.push(m)
   				}
   				a.push(l)
   			}
   			return a
   		}

   		function Se(a, b) {
   			return "flac" == a.toLowerCase() ? fd() ? "fLaC" : "flac" : "opus" === a.toLowerCase() ? fd() ? "mp4" == Vd(b) ? "Opus" : "opus" : "opus" : a
   		}

   		function Re(a) {
   			if (a.includes("avc1")) {
   				var b = a.split(".");
   				if (3 == b.length) return a = b.shift() + ".", a += parseInt(b.shift(), 10).toString(16), a += ("000" + parseInt(b.shift(), 10).toString(16)).slice(-4)
   			} else if ("vp9" == a) return "vp09.00.41.08";
   			return a
   		}

   		function Me(a) {
   			a.textStreams = a.textStreams.filter(function(b) {
   				b = Pd(b.mimeType, b.codecs);
   				return he(b)
   			})
   		}

   		function Ne(a) {
   			var b, c, d, e, f, g, h, k;
   			return O(function(l) {
   				switch (l.g) {
   					case 1:
   						b = [], c = t(a.imageStreams), d = c.next();
   					case 2:
   						if (d.done) {
   							l.u(4);
   							break
   						}
   						e = d.value;
   						f = e.mimeType;
   						"application/mp4" == f && "mjpg" == e.codecs && (f = "image/jpg");
   						if (Ye.has(f)) {
   							l.u(5);
   							break
   						}
   						g = Ze.get(f);
   						if (!g) {
   							Ye.set(f, !1);
   							l.u(5);
   							break
   						}
   						return E(l, $e(g), 7);
   					case 7:
   						h = l.h, Ye.set(f, h);
   					case 5:
   						(k = Ye.get(f)) && b.push(e);
   						d = c.next();
   						l.u(2);
   						break;
   					case 4:
   						a.imageStreams = b, F(l)
   				}
   			})
   		}

   		function $e(a) {
   			return new Promise(function(b) {
   				var c = new Image;
   				c.src = a;
   				"decode" in c ? c.decode().then(function() {
   					b(!0)
   				}).catch(function() {
   					b(!1)
   				}) : c.onload = c.onerror = function() {
   					b(2 === c.height)
   				}
   			})
   		}

   		function af(a) {
   			var b = a.audio,
   				c = a.video,
   				d = b ? b.mimeType : null,
   				e = c ? c.mimeType : null,
   				f = b ? b.codecs : null,
   				g = c ? c.codecs : null,
   				h = [];
   			g && h.push(g);
   			f && h.push(f);
   			var k = [];
   			c && k.push(c.mimeType);
   			b && k.push(b.mimeType);
   			k = k[0] || null;
   			var l = [];
   			b && l.push(b.kind);
   			c && l.push(c.kind);
   			l = l[0] || null;
   			var m = new Set;
   			if (b)
   				for (var n = t(b.roles), p = n.next(); !p.done; p = n.next()) m.add(p.value);
   			if (c)
   				for (n = t(c.roles), p = n.next(); !p.done; p = n.next()) m.add(p.value);
   			a = {
   				id: a.id,
   				active: !1,
   				type: "variant",
   				bandwidth: a.bandwidth,
   				language: a.language,
   				label: null,
   				kind: l,
   				width: null,
   				height: null,
   				frameRate: null,
   				pixelAspectRatio: null,
   				hdr: null,
   				colorGamut: null,
   				videoLayout: null,
   				mimeType: k,
   				audioMimeType: d,
   				videoMimeType: e,
   				codecs: h.join(", "),
   				audioCodec: f,
   				videoCodec: g,
   				primary: a.primary,
   				roles: Array.from(m),
   				audioRoles: null,
   				forced: !1,
   				videoId: null,
   				audioId: null,
   				channelsCount: null,
   				audioSamplingRate: null,
   				spatialAudio: !1,
   				tilesLayout: null,
   				audioBandwidth: null,
   				videoBandwidth: null,
   				originalVideoId: null,
   				originalAudioId: null,
   				originalTextId: null,
   				originalImageId: null,
   				accessibilityPurpose: null,
   				originalLanguage: null
   			};
   			c && (a.videoId = c.id, a.originalVideoId = c.originalId, a.width = c.width || null, a.height = c.height || null, a.frameRate = c.frameRate || null, a.pixelAspectRatio = c.pixelAspectRatio || null, a.videoBandwidth = c.bandwidth || null, a.hdr = c.hdr || null, a.colorGamut = c.colorGamut || null, a.videoLayout = c.videoLayout || null);
   			b && (a.audioId = b.id, a.originalAudioId = b.originalId, a.channelsCount = b.channelsCount, a.audioSamplingRate = b.audioSamplingRate, a.audioBandwidth = b.bandwidth || null, a.spatialAudio = b.spatialAudio, a.label =
   				b.label, a.audioRoles = b.roles, a.accessibilityPurpose = b.accessibilityPurpose, a.originalLanguage = b.originalLanguage);
   			return a
   		}

   		function bf(a) {
   			return {
   				id: a.id,
   				active: !1,
   				type: Ld,
   				bandwidth: 0,
   				language: a.language,
   				label: a.label,
   				kind: a.kind || null,
   				width: null,
   				height: null,
   				frameRate: null,
   				pixelAspectRatio: null,
   				hdr: null,
   				colorGamut: null,
   				videoLayout: null,
   				mimeType: a.mimeType,
   				audioMimeType: null,
   				videoMimeType: null,
   				codecs: a.codecs || null,
   				audioCodec: null,
   				videoCodec: null,
   				primary: a.primary,
   				roles: a.roles,
   				audioRoles: null,
   				forced: a.forced,
   				videoId: null,
   				audioId: null,
   				channelsCount: null,
   				audioSamplingRate: null,
   				spatialAudio: !1,
   				tilesLayout: null,
   				audioBandwidth: null,
   				videoBandwidth: null,
   				originalVideoId: null,
   				originalAudioId: null,
   				originalTextId: a.originalId,
   				originalImageId: null,
   				accessibilityPurpose: a.accessibilityPurpose,
   				originalLanguage: a.originalLanguage
   			}
   		}

   		function cf(a) {
   			var b = a.width || null,
   				c = a.height || null,
   				d = null;
   			a.segmentIndex && (d = a.segmentIndex.get(0));
   			var e = a.tilesLayout;
   			d && (e = d.tilesLayout || e);
   			e && null != b && (b /= Number(e.split("x")[0]));
   			e && null != c && (c /= Number(e.split("x")[1]));
   			return {
   				id: a.id,
   				active: !1,
   				type: "image",
   				bandwidth: a.bandwidth || 0,
   				language: "",
   				label: null,
   				kind: null,
   				width: b,
   				height: c,
   				frameRate: null,
   				pixelAspectRatio: null,
   				hdr: null,
   				colorGamut: null,
   				videoLayout: null,
   				mimeType: a.mimeType,
   				audioMimeType: null,
   				videoMimeType: null,
   				codecs: a.codecs || null,
   				audioCodec: null,
   				videoCodec: null,
   				primary: !1,
   				roles: [],
   				audioRoles: null,
   				forced: !1,
   				videoId: null,
   				audioId: null,
   				channelsCount: null,
   				audioSamplingRate: null,
   				spatialAudio: !1,
   				tilesLayout: e || null,
   				audioBandwidth: null,
   				videoBandwidth: null,
   				originalVideoId: null,
   				originalAudioId: null,
   				originalTextId: null,
   				originalImageId: a.originalId,
   				accessibilityPurpose: null,
   				originalLanguage: null
   			}
   		}

   		function df(a) {
   			a.__gowatch_id || (a.__gowatch_id = ef++);
   			return a.__gowatch_id
   		}

   		function gf(a) {
   			var b = hf(a);
   			b.active = "disabled" != a.mode;
   			b.type = "text";
   			b.originalTextId = a.id;
   			"captions" == a.kind && (b.mimeType = "unknown");
   			"subtitles" == a.kind && (b.mimeType = "text/vtt");
   			a.kind && (b.roles = [a.kind]);
   			"forced" == a.kind && (b.forced = !0);
   			return b
   		}

   		function jf(a) {
   			var b = hf(a);
   			b.active = a.enabled;
   			b.type = "variant";
   			b.originalAudioId = a.id;
   			"main" == a.kind && (b.primary = !0);
   			a.kind && (b.roles = [a.kind], b.audioRoles = [a.kind], b.label = a.label);
   			return b
   		}

   		function hf(a) {
   			var b = a.language;
   			return {
   				id: df(a),
   				active: !1,
   				type: "",
   				bandwidth: 0,
   				language: ue(b || "und"),
   				label: a.label,
   				kind: a.kind,
   				width: null,
   				height: null,
   				frameRate: null,
   				pixelAspectRatio: null,
   				hdr: null,
   				colorGamut: null,
   				videoLayout: null,
   				mimeType: null,
   				audioMimeType: null,
   				videoMimeType: null,
   				codecs: null,
   				audioCodec: null,
   				videoCodec: null,
   				primary: !1,
   				roles: [],
   				forced: !1,
   				audioRoles: null,
   				videoId: null,
   				audioId: null,
   				channelsCount: null,
   				audioSamplingRate: null,
   				spatialAudio: !1,
   				tilesLayout: null,
   				audioBandwidth: null,
   				videoBandwidth: null,
   				originalVideoId: null,
   				originalAudioId: null,
   				originalTextId: null,
   				originalImageId: null,
   				accessibilityPurpose: null,
   				originalLanguage: b
   			}
   		}

   		function kf(a) {
   			return a.allowedByApplication && a.allowedByKeySystem && 0 == a.disabledUntilTime
   		}

   		function lf(a) {
   			return a.filter(function(b) {
   				return kf(b)
   			})
   		}

   		function mf(a, b, c, d) {
   			var e = a,
   				f = a.filter(function(k) {
   					return k.primary
   				});
   			f.length && (e = f);
   			var g = e.length ? e[0].language : "";
   			e = e.filter(function(k) {
   				return k.language == g
   			});
   			if (b) {
   				var h = Be(ue(b), a.map(function(k) {
   					return k.language
   				}));
   				h && (e = a.filter(function(k) {
   					return ue(k.language) == h
   				}))
   			}
   			e = e.filter(function(k) {
   				return k.forced == d
   			});
   			if (c) {
   				if (a = nf(e, c), a.length) return a
   			} else if (a = e.filter(function(k) {
   					return 0 == k.roles.length
   				}), a.length) return a;
   			a = e.map(function(k) {
   				return k.roles
   			}).reduce(pe, []);
   			return a.length ?
   				nf(e, a[0]) : e
   		}

   		function nf(a, b) {
   			return a.filter(function(c) {
   				return c.roles.includes(b)
   			})
   		}

   		function Qe(a) {
   			return "audio" == a.type ? "type=audio codecs=" + a.codecs + " bandwidth=" + a.bandwidth + " channelsCount=" + a.channelsCount + " audioSamplingRate=" + a.audioSamplingRate : "video" == a.type ? "type=video codecs=" + a.codecs + " bandwidth=" + a.bandwidth + " frameRate=" + a.frameRate + " width=" + a.width + " height=" + a.height : "unexpected stream type"
   		}
   		S("gowatch.util.StreamUtils", Ee);
   		Ee.meetsRestrictions = Ie;
   		var Ve = {},
   			ef = 0,
   			Ye = (new Map).set("image/svg+xml", !0).set("image/png", !0).set("image/jpeg", !0).set("image/jpg", !0),
   			Ze = (new Map).set("image/webp", "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA").set("image/avif", "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=");

   		function of() {
   			var a = this;
   			this.s = null;
   			this.o = !1;
   			this.i = new Xa;
   			this.F = new hb;
   			navigator.connection && navigator.connection.addEventListener && this.F.D(navigator.connection, "change", function() {
   				if (a.o && a.g.useNetworkInformation) {
   					a.i = new Xa;
   					a.g && a.i.configure(a.g.advanced);
   					var b = a.chooseVariant();
   					b && navigator.onLine && a.s(b, a.g.clearBufferSwitch, a.g.safeMarginSwitch)
   				}
   			});
   			this.m = [];
   			this.B = 1;
   			this.G = !1;
   			this.h = this.l = this.g = this.A = null;
   			this.C = new Lc(function() {
   				if (a.g.restrictToElementSize) {
   					var b = a.chooseVariant();
   					b && a.s(b, a.g.clearBufferSwitch, a.g.safeMarginSwitch)
   				}
   			});
   			this.j = null
   		}
   		r = of.prototype;
   		r.stop = function() {
   			this.s = null;
   			this.o = !1;
   			this.m = [];
   			this.B = 1;
   			this.l = this.A = null;
   			this.h && (this.h.disconnect(), this.h = null);
   			this.C.stop();
   			this.j = null
   		};
   		r.release = function() {
   			this.F.release();
   			this.C = null
   		};
   		r.init = function(a) {
   			this.s = a
   		};
   		r.chooseVariant = function(a) {
   			a = void 0 === a ? !1 : a;
   			var b = Infinity,
   				c = Infinity;
   			this.g.restrictToScreenSize && (c = this.g.ignoreDevicePixelRatio ? 1 : window.devicePixelRatio, b = window.screen.height * c, c *= window.screen.width);
   			if (this.h && this.g.restrictToElementSize) {
   				var d = this.g.ignoreDevicePixelRatio ? 1 : window.devicePixelRatio;
   				b = Math.min(b, this.l.clientHeight * d);
   				c = Math.min(c, this.l.clientWidth * d)
   			}
   			var e = this.m.filter(function(l) {
   				return !(l.audio && l.audio.fastSwitching || l.video && l.video.fastSwitching)
   			});
   			e.length || (e =
   				this.m);
   			d = e;
   			a && e.length != this.m.length && (d = this.m.filter(function(l) {
   				return l.audio && l.audio.fastSwitching || l.video && l.video.fastSwitching ? !0 : !1
   			}));
   			a = tf(this, this.g.restrictions, d, Infinity, Infinity);
   			if (Infinity != b || Infinity != c) {
   				a = uf(a);
   				a = t(a);
   				for (e = a.next(); !e.done; e = a.next())
   					if (e = e.value, e.height >= b && e.width >= c) {
   						b = e.height;
   						c = e.width;
   						break
   					} a = tf(this, this.g.restrictions, d, b, c)
   			}
   			b = this.getBandwidthEstimate();
   			d.length && !a.length && (a = tf(this, null, d, Infinity, Infinity), a = [a[0]]);
   			c = a[0] || null;
   			for (d = 0; d < a.length; d++) {
   				e =
   					a[d];
   				for (var f = isNaN(this.B) ? 1 : Math.abs(this.B), g = f * e.bandwidth / this.g.bandwidthDowngradeTarget, h = {
   						bandwidth: Infinity
   					}, k = d + 1; k < a.length; k++)
   					if (e.bandwidth != a[k].bandwidth) {
   						h = a[k];
   						break
   					} f = f * h.bandwidth / this.g.bandwidthUpgradeTarget;
   				b >= g && b <= f && (c.bandwidth != e.bandwidth || c.bandwidth == e.bandwidth && c.video && e.video && (c.video.width < e.video.width || c.video.height < e.video.height)) && (c = e)
   			}
   			this.A = Date.now();
   			return c
   		};
   		r.enable = function() {
   			this.o = !0
   		};
   		r.disable = function() {
   			this.o = !1
   		};
   		r.segmentDownloaded = function(a, b, c) {
   			a < this.g.cacheLoadThreshold || (this.i.sample(a, b), c && null != this.A && this.o && vf(this))
   		};
   		r.trySuggestStreams = function() {
   			null != this.A && this.o && vf(this)
   		};
   		r.getBandwidthEstimate = function() {
   			var a = this.g.defaultBandwidthEstimate;
   			navigator.connection && navigator.connection.downlink && this.g.useNetworkInformation && (a = 1E6 * navigator.connection.downlink);
   			a = this.i.getBandwidthEstimate(a);
   			return this.j ? this.j.getBandwidthEstimate(a) : a
   		};
   		r.setVariants = function(a) {
   			this.m = a
   		};
   		r.playbackRateChanged = function(a) {
   			this.B = a
   		};
   		r.setMediaElement = function(a) {
   			var b = this;
   			this.l = a;
   			this.h && (this.h.disconnect(), this.h = null);
   			this.l && "ResizeObserver" in window && (this.h = new ResizeObserver(function() {
   				b.C.W(wf)
   			}), this.h.observe(this.l))
   		};
   		r.setCmsdManager = function(a) {
   			this.j = a
   		};
   		r.configure = function(a) {
   			this.g = a;
   			this.i && this.g && this.i.configure(this.g.advanced)
   		};

   		function vf(a) {
   			if (!a.G) {
   				var b = a.i;
   				if (!(b.g >= b.i)) return;
   				a.G = !0
   			} else if (Date.now() - a.A < 1E3 * a.g.switchInterval) return;
   			b = a.chooseVariant();
   			a.getBandwidthEstimate();
   			b && a.s(b, a.g.clearBufferSwitch, a.g.safeMarginSwitch)
   		}

   		function tf(a, b, c, d, e) {
   			if (a.j) {
   				var f = a.j.sg();
   				f && (c = c.filter(function(g) {
   					return g.bandwidth && f ? g.bandwidth <= f : !0
   				}))
   			}
   			b && (c = c.filter(function(g) {
   				return Ie(g, b, {
   					width: e,
   					height: d
   				})
   			}));
   			return c.sort(function(g, h) {
   				return g.bandwidth - h.bandwidth
   			})
   		}

   		function uf(a) {
   			var b = [];
   			a = t(a);
   			for (var c = a.next(); !c.done; c = a.next())(c = c.value.video) && c.height && c.width && b.push({
   				height: c.height,
   				width: c.width
   			});
   			return b.sort(function(d, e) {
   				return d.width - e.width
   			})
   		}
   		S("gowatch.abr.SimpleAbrManager", of);
   		of.prototype.configure = of.prototype.configure;
   		of.prototype.setCmsdManager = of.prototype.setCmsdManager;
   		of.prototype.setMediaElement = of.prototype.setMediaElement;
   		of.prototype.playbackRateChanged = of.prototype.playbackRateChanged;
   		of.prototype.setVariants = of.prototype.setVariants;
   		of.prototype.getBandwidthEstimate = of.prototype.getBandwidthEstimate;
   		of.prototype.trySuggestStreams = of.prototype.trySuggestStreams;
   		of.prototype.segmentDownloaded = of.prototype.segmentDownloaded;
   		of.prototype.disable = of.prototype.disable;
   		of.prototype.enable = of.prototype.enable;
   		of.prototype.chooseVariant = of.prototype.chooseVariant;
   		of.prototype.init = of.prototype.init;
   		of.prototype.release = of.prototype.release;
   		of.prototype.stop = of.prototype.stop;
   		var wf = 1;
   		S("gowatch.config.AutoShowText", {
   			NEVER: 0,
   			ALWAYS: 1,
   			IF_PREFERRED_TEXT_LANGUAGE: 2,
   			IF_SUBTITLES_MAY_BE_NEEDED: 3
   		});
   		S("gowatch.config.CodecSwitchingStrategy", {
   			vj: "reload",
   			bh: "smooth"
   		});

   		function xf(a, b, c, d) {
   			c = void 0 === c ? !0 : c;
   			d = void 0 === d ? !1 : d;
   			this.h = a;
   			this.g = new Set([a]);
   			b = b || [];
   			a = t(b);
   			for (b = a.next(); !b.done; b = a.next()) this.add(b.value, c, d)
   		}
   		xf.prototype.add = function(a, b, c) {
   			return yf(this.h, a, void 0 === b ? !0 : b, void 0 === c ? !1 : c) ? (this.g.add(a), !0) : !1
   		};

   		function yf(a, b, c, d) {
   			var e;
   			if (!(e = !!a.audio != !!b.audio || !!a.video != !!b.video || a.language != b.language) && (e = a.audio && b.audio)) {
   				e = a.audio;
   				var f = b.audio;
   				e = !!((!e.channelsCount || !f.channelsCount || 2 < e.channelsCount || 2 < f.channelsCount) && e.channelsCount != f.channelsCount || c && !zf(e, f) || !Af(e.roles, f.roles) || d && e.groupId !== f.groupId)
   			}!(d = e) && (d = a.video && b.video) && (a = a.video, b = b.video, d = !((!c || zf(a, b)) && Af(a.roles, b.roles)));
   			return d ? !1 : !0
   		}
   		xf.prototype.values = function() {
   			return this.g.values()
   		};

   		function zf(a, b) {
   			if (a.mimeType != b.mimeType) return !1;
   			a = a.codecs.split(",").map(function(d) {
   				return Yd(d)
   			});
   			b = b.codecs.split(",").map(function(d) {
   				return Yd(d)
   			});
   			if (a.length != b.length) return !1;
   			a.sort();
   			b.sort();
   			for (var c = 0; c < a.length; c++)
   				if (a[c] != b[c]) return !1;
   			return !0
   		}

   		function Af(a, b) {
   			a = new Set(a);
   			b = new Set(b);
   			a.delete("main");
   			b.delete("main");
   			if (a.size != b.size) return !1;
   			a = t(a);
   			for (var c = a.next(); !c.done; c = a.next())
   				if (!b.has(c.value)) return !1;
   			return !0
   		};

   		function Bf(a, b, c) {
   			b = void 0 === b ? "reload" : b;
   			c = void 0 === c ? !1 : c;
   			this.i = a;
   			this.h = b;
   			this.g = c;
   			this.j = new Cf(a.language, "", a.audio && a.audio.channelsCount ? a.audio.channelsCount : 0, "", !1, "", "", "", b, c)
   		}
   		Bf.prototype.create = function(a) {
   			var b = this,
   				c = "smooth" == this.h && ob(),
   				d = a.filter(function(e) {
   					return yf(b.i, e, !c, b.g)
   				});
   			return d.length ? new xf(d[0], d, !c, this.g) : this.j.create(a)
   		};

   		function Cf(a, b, c, d, e, f, g, h, k, l) {
   			this.s = a;
   			this.A = b;
   			this.h = c;
   			this.i = d;
   			this.B = e;
   			this.l = f;
   			this.g = void 0 === g ? "" : g;
   			this.j = void 0 === h ? "" : h;
   			this.m = void 0 === k ? "reload" : k;
   			this.o = void 0 === l ? !1 : l
   		}
   		Cf.prototype.create = function(a) {
   			var b = [];
   			b = Df(a, this.s);
   			var c = a.filter(function(d) {
   				return d.primary
   			});
   			b = b.length ? b : c.length ? c : a;
   			a = Ef(b, this.A);
   			a.length && (b = a);
   			this.l && (a = Ff(b, this.l), a.length && (b = a));
   			this.i && (a = Gf(b, this.i), a.length && (b = a));
   			this.h && (a = Hf(b, this.h), a.length && (b = a));
   			this.g && (a = If(b, this.g), a.length && (b = a));
   			this.j && (a = Jf(b, this.j), a.length && (b = a));
   			a = Kf(b, this.B);
   			a.length && (b = a);
   			return new xf(b[0], b, !("smooth" == this.m && ob()), this.o)
   		};

   		function Df(a, b) {
   			b = ue(b);
   			var c = Be(b, a.map(function(d) {
   				return Ae(d)
   			}));
   			return c ? a.filter(function(d) {
   				return c == Ae(d)
   			}) : []
   		}

   		function Ef(a, b) {
   			return a.filter(function(c) {
   				return c.audio ? b ? c.audio.roles.includes(b) : 0 == c.audio.roles.length : !1
   			})
   		}

   		function If(a, b) {
   			return a.filter(function(c) {
   				return c.audio && c.audio.label ? c.audio.label.toLowerCase() == b.toLowerCase() : !1
   			})
   		}

   		function Jf(a, b) {
   			return a.filter(function(c) {
   				return c.video && c.video.label ? c.video.label.toLowerCase() == b.toLowerCase() : !1
   			})
   		}

   		function Hf(a, b) {
   			return a.filter(function(c) {
   				return c.audio && c.audio.channelsCount && c.audio.channelsCount != b ? !1 : !0
   			})
   		}

   		function Gf(a, b) {
   			"AUTO" == b && (b = window.matchMedia("(color-gamut: p3)").matches ? "PQ" : "SDR");
   			return a.filter(function(c) {
   				return c.video && c.video.hdr && c.video.hdr != b ? !1 : !0
   			})
   		}

   		function Ff(a, b) {
   			return a.filter(function(c) {
   				return c.video && c.video.videoLayout && c.video.videoLayout != b ? !1 : !0
   			})
   		}

   		function Kf(a, b) {
   			return a.filter(function(c) {
   				return c.audio && c.audio.spatialAudio != b ? !1 : !0
   			})
   		};

   		function Lf() {
   			this.g = Mf;
   			this.i = (new Map).set(Mf, 2).set(Nf, 1);
   			this.h = 0
   		}

   		function Of(a, b, c) {
   			a.i.set(Mf, c).set(Nf, b)
   		}
   		var Nf = 0,
   			Mf = 1;

   		function Pf(a, b) {
   			var c = Qf();
   			this.l = null == a.maxAttempts ? c.maxAttempts : a.maxAttempts;
   			this.j = null == a.baseDelay ? c.baseDelay : a.baseDelay;
   			this.o = null == a.fuzzFactor ? c.fuzzFactor : a.fuzzFactor;
   			this.m = null == a.backoffFactor ? c.backoffFactor : a.backoffFactor;
   			this.g = 0;
   			this.h = this.j;
   			if (this.i = void 0 === b ? !1 : b) this.g = 1
   		}

   		function Rf(a) {
   			var b, c;
   			return O(function(d) {
   				if (1 == d.g) {
   					if (a.g >= a.l)
   						if (a.i) a.g = 1, a.h = a.j;
   						else throw new T(2, 7, 1010);
   					b = a.g;
   					a.g++;
   					if (0 == b) return d.return();
   					c = a.h * (1 + (2 * Math.random() - 1) * a.o);
   					return E(d, new Promise(function(e) {
   						(new Lc(e)).W(c / 1E3)
   					}), 2)
   				}
   				a.h *= a.m;
   				F(d)
   			})
   		}

   		function Qf() {
   			return {
   				maxAttempts: 2,
   				baseDelay: 1E3,
   				backoffFactor: 2,
   				fuzzFactor: .5,
   				timeout: 3E4,
   				stallTimeout: 5E3,
   				connectionTimeout: 1E4
   			}
   		};

   		function Sf() {
   			var a, b, c = new Promise(function(d, e) {
   				a = d;
   				b = e
   			});
   			c.resolve = a;
   			c.reject = b;
   			return c
   		}
   		Sf.prototype.resolve = function() {};
   		Sf.prototype.reject = function() {};

   		function Tf(a, b) {
   			this.promise = a;
   			this.i = b;
   			this.g = !1
   		}

   		function Uf(a) {
   			return new Tf(Promise.reject(a), function() {
   				return Promise.resolve()
   			})
   		}

   		function Vf() {
   			var a = Promise.reject(new T(2, 7, 7001));
   			a.catch(function() {});
   			return new Tf(a, function() {
   				return Promise.resolve()
   			})
   		}

   		function Wf(a) {
   			return new Tf(Promise.resolve(a), function() {
   				return Promise.resolve()
   			})
   		}

   		function Xf(a) {
   			return new Tf(a, function() {
   				return a.catch(function() {})
   			})
   		}
   		Tf.prototype.abort = function() {
   			this.g = !0;
   			return this.i()
   		};

   		function Yf(a) {
   			return new Tf(Promise.all(a.map(function(b) {
   				return b.promise
   			})), function() {
   				return Promise.all(a.map(function(b) {
   					return b.abort()
   				}))
   			})
   		}
   		Tf.prototype.finally = function(a) {
   			this.promise.then(function() {
   				return a(!0)
   			}, function() {
   				return a(!1)
   			});
   			return this
   		};
   		Tf.prototype.va = function(a, b) {
   			function c(h) {
   				return function(k) {
   					if (e.g && h) f.reject(g);
   					else {
   						var l = h ? a : b;
   						l ? d = Zf(l, k, f) : (h ? f.resolve : f.reject)(k)
   					}
   				}
   			}

   			function d() {
   				f.reject(g);
   				return e.abort()
   			}
   			var e = this,
   				f = new Sf,
   				g = new T(2, 7, 7001);
   			this.promise.then(c(!0), c(!1));
   			return new Tf(f, function() {
   				return d()
   			})
   		};

   		function Zf(a, b, c) {
   			try {
   				var d = a(b);
   				if (d && d.promise && d.abort) return c.resolve(d.promise),
   					function() {
   						return d.abort()
   					};
   				c.resolve(d);
   				return function() {
   					return Promise.resolve(d).then(function() {}, function() {})
   				}
   			} catch (e) {
   				return c.reject(e),
   					function() {
   						return Promise.resolve()
   					}
   			}
   		}
   		S("gowatch.util.AbortableOperation", Tf);
   		Tf.prototype.chain = Tf.prototype.va;
   		Tf.prototype["finally"] = Tf.prototype.finally;
   		Tf.all = Yf;
   		Tf.prototype.abort = Tf.prototype.abort;
   		Tf.notAbortable = Xf;
   		Tf.completed = Wf;
   		Tf.aborted = Vf;
   		Tf.failed = Uf;

   		function U(a, b) {
   			if (b)
   				if (b instanceof Map)
   					for (var c = t(b.keys()), d = c.next(); !d.done; d = c.next()) d = d.value, Object.defineProperty(this, d, {
   						value: b.get(d),
   						writable: !0,
   						enumerable: !0
   					});
   				else
   					for (c in b) Object.defineProperty(this, c, {
   						value: b[c],
   						writable: !0,
   						enumerable: !0
   					});
   			this.defaultPrevented = this.cancelable = this.bubbles = !1;
   			this.timeStamp = window.performance && window.performance.now ? window.performance.now() : Date.now();
   			this.type = a;
   			this.isTrusted = !1;
   			this.target = this.currentTarget = null;
   			this.g = !1
   		}

   		function $f(a) {
   			var b = new U(a.type),
   				c;
   			for (c in a) Object.defineProperty(b, c, {
   				value: a[c],
   				writable: !0,
   				enumerable: !0
   			});
   			return b
   		}
   		U.prototype.preventDefault = function() {
   			this.cancelable && (this.defaultPrevented = !0)
   		};
   		U.prototype.stopImmediatePropagation = function() {
   			this.g = !0
   		};
   		U.prototype.stopPropagation = function() {};
   		S("gowatch.util.FakeEvent", U);
   		var ag = {
   			Wi: "abrstatuschanged",
   			Xi: "adaptation",
   			Yi: "buffering",
   			Zi: "complete",
   			$i: "downloadfailed",
   			aj: "downloadheadersreceived",
   			bj: "drmsessionupdate",
   			dj: "emsg",
   			uj: "prft",
   			Error: "error",
   			ej: "expirationupdated",
   			fj: "firstquartile",
   			gj: "gapjumped",
   			jj: "keystatuschanged",
   			lj: "loaded",
   			mj: "loading",
   			oj: "manifestparsed",
   			pj: "manifestupdated",
   			qj: "mediaqualitychanged",
   			Metadata: "metadata",
   			rj: "midpoint",
   			sj: "nospatialvideoinfo",
   			tj: "onstatechange",
   			wj: "ratechange",
   			xj: "segmentappended",
   			yj: "sessiondata",
   			zj: "spatialvideoinfo",
   			Aj: "stalldetected",
   			Bj: "started",
   			Cj: "statechanged",
   			Dj: "streaming",
   			Ej: "textchanged",
   			Fj: "texttrackvisibility",
   			Gj: "thirdquartile",
   			Hj: "timelineregionadded",
   			Ij: "timelineregionenter",
   			Jj: "timelineregionexit",
   			Kj: "trackschanged",
   			Mj: "unloading",
   			Oj: "variantchanged"
   		};

   		function bg() {
   			this.za = new gb;
   			this.le = this
   		}
   		bg.prototype.addEventListener = function(a, b) {
   			this.za && this.za.push(a, b)
   		};
   		bg.prototype.removeEventListener = function(a, b) {
   			this.za && this.za.remove(a, b)
   		};
   		bg.prototype.dispatchEvent = function(a) {
   			if (!this.za) return !0;
   			var b = this.za.get(a.type) || [],
   				c = this.za.get("All");
   			c && (b = b.concat(c));
   			b = t(b);
   			for (c = b.next(); !c.done; c = b.next()) {
   				c = c.value;
   				a.target = this.le;
   				a.currentTarget = this.le;
   				try {
   					c.handleEvent ? c.handleEvent(a) : c.call(this, a)
   				} catch (d) {}
   				if (a.g) break
   			}
   			return a.defaultPrevented
   		};
   		bg.prototype.release = function() {
   			this.za = null
   		};

   		function cg() {
   			this.g = []
   		}

   		function dg(a, b) {
   			a.g.push(b.finally(function() {
   				Kb(a.g, b)
   			}))
   		}
   		cg.prototype.destroy = function() {
   			for (var a = [], b = t(this.g), c = b.next(); !c.done; c = b.next()) c = c.value, c.promise.catch(function() {}), a.push(c.abort());
   			this.g = [];
   			return Promise.all(a)
   		};

   		function eg(a, b, c, d, e, f) {
   			bg.call(this);
   			this.i = !1;
   			this.m = new cg;
   			this.g = new Set;
   			this.h = new Set;
   			this.l = a || null;
   			this.j = b || null;
   			this.A = c || null;
   			this.B = d || null;
   			this.F = e || null;
   			this.C = f || null;
   			this.o = this.s = !1
   		}
   		oa(eg, bg);
   		r = eg.prototype;
   		r.Mf = function(a) {
   			this.s = a
   		};
   		r.Nf = function(a) {
   			this.o = a
   		};

   		function fg(a, b, c, d) {
   			c = c || gg;
   			var e = hg[a];
   			if (!e || c >= e.priority) hg[a] = {
   				priority: c,
   				pe: b,
   				pi: void 0 === d ? !1 : d
   			}
   		}

   		function ig(a, b) {
   			for (var c = t(a.g), d = c.next(); !d.done; d = c.next()) b.g.add(d.value);
   			a = t(a.h);
   			for (d = a.next(); !d.done; d = a.next()) b.h.add(d.value)
   		}
   		r.ti = function(a) {
   			this.g.add(a)
   		};
   		r.Pi = function(a) {
   			this.g.delete(a)
   		};
   		r.oh = function() {
   			this.g.clear()
   		};
   		r.ui = function(a) {
   			this.h.add(a)
   		};
   		r.Qi = function(a) {
   			this.h.delete(a)
   		};
   		r.ph = function() {
   			this.h.clear()
   		};

   		function jg(a, b, c) {
   			return {
   				uris: a,
   				method: "GET",
   				body: null,
   				headers: {},
   				allowCrossSiteCredentials: !1,
   				retryParameters: b,
   				licenseRequestType: null,
   				sessionId: null,
   				drmInfo: null,
   				initData: null,
   				initDataType: null,
   				streamDataCallback: void 0 === c ? null : c
   			}
   		}
   		r.destroy = function() {
   			this.i = !0;
   			this.g.clear();
   			this.h.clear();
   			bg.prototype.release.call(this);
   			return this.m.destroy()
   		};
   		r.request = function(a, b, c) {
   			var d = this,
   				e = new kg;
   			if (this.i) {
   				var f = Promise.reject(new T(2, 7, 7001));
   				f.catch(function() {});
   				return new lg(f, function() {
   					return Promise.resolve()
   				}, e)
   			}
   			b.method = b.method || "GET";
   			b.headers = b.headers || {};
   			b.retryParameters = b.retryParameters ? Ce(b.retryParameters) : Qf();
   			b.uris = Ce(b.uris);
   			f = mg(this, a, b, c);
   			var g = f.va(function() {
   					return ng(d, a, b, c, new Pf(b.retryParameters, !1), 0, null, e)
   				}),
   				h = g.va(function(p) {
   					return og(d, a, p, c)
   				}),
   				k = Date.now(),
   				l = 0;
   			f.promise.then(function() {
   				l = Date.now() - k
   			}, function() {});
   			var m = 0;
   			g.promise.then(function() {
   				m = Date.now()
   			}, function() {});
   			var n = h.va(function(p) {
   				var q = Date.now() - m,
   					u = p.response;
   				u.timeMs += l;
   				u.timeMs += q;
   				p.Wh || !d.l || u.fromCache || "HEAD" == b.method || a != pg || d.l(u.timeMs, u.data.byteLength, qg(c));
   				d.C && d.C(a, u, c);
   				return u
   			}, function(p) {
   				p && (p.severity = 2);
   				throw p;
   			});
   			f = new lg(n.promise, function() {
   				return n.abort()
   			}, e);
   			dg(this.m, f);
   			return f
   		};

   		function mg(a, b, c, d) {
   			function e(h) {
   				f = f.va(function() {
   					c.body && (c.body = Bb(c.body));
   					return h(b, c, d)
   				})
   			}
   			var f = Wf(void 0);
   			a.B && e(a.B);
   			a = t(a.g);
   			for (var g = a.next(); !g.done; g = a.next()) e(g.value);
   			return f.va(void 0, function(h) {
   				if (h instanceof T && 7001 == h.code) throw h;
   				throw new T(2, 1, 1006, h);
   			})
   		}

   		function ng(a, b, c, d, e, f, g, h) {
   			a.s && (c.uris[f] = c.uris[f].replace("https://", "http://"));
   			a.o && (c.uris[f] = c.uris[f].replace("http://", "https://"));
   			0 < f && a.F && a.F(b, d, c.uris[f], c.uris[f - 1]);
   			var k = new rc(c.uris[f]),
   				l = k.wb,
   				m = !1;
   			l || (l = location.protocol, l = l.slice(0, -1), sc(k, l), c.uris[f] = k.toString());
   			l = l.toLowerCase();
   			var n = (l = hg[l]) ? l.pe : null;
   			if (!n) return Uf(new T(2, 1, 1E3, k));
   			var p = l.pi,
   				q = null,
   				u = null,
   				v = !1,
   				w = !1,
   				A;
   			return Xf(Rf(e)).va(function() {
   				if (a.i) return Vf();
   				A = Date.now();
   				var z = 0;
   				c.requestStartTime = Date.now();
   				var y = n(c.uris[f], c, b, function(D, J, K) {
   					q && q.stop();
   					u && u.W(C / 1E3);
   					a.l && b == pg && (z++, c.packetNumber = z, a.l(D, J, qg(d), c), m = !0, h.g = K)
   				}, function(D) {
   					a.j && a.j(D, c, b);
   					w = !0;
   					c.timeToFirstByte = Date.now() - c.requestStartTime
   				});
   				if (!p) return y;
   				var B = c.retryParameters.connectionTimeout;
   				B && (q = new Lc(function() {
   					v = !0;
   					y.abort()
   				}), q.W(B / 1E3));
   				var C = c.retryParameters.stallTimeout;
   				C && (u = new Lc(function() {
   					v = !0;
   					y.abort()
   				}));
   				return y
   			}).va(function(z) {
   				q && q.stop();
   				u && u.stop();
   				void 0 == z.timeMs && (z.timeMs = Date.now() - A);
   				var y = {
   					response: z,
   					Wh: m
   				};
   				!w && a.j && a.j(z.headers, c, b);
   				return y
   			}, function(z) {
   				q && q.stop();
   				u && u.stop();
   				if (a.A) {
   					var y = null,
   						B = 0;
   					z instanceof T && (y = z, 1001 == z.code && (B = z.data[1]));
   					a.A(c, y, B, v)
   				}
   				if (a.i) return Vf();
   				v && (z = new T(1, 1, 1003, c.uris[f], b));
   				if (z instanceof T) {
   					if (7001 == z.code) throw z;
   					if (1010 == z.code) throw g;
   					if (1 == z.severity) return y = (new Map).set("error", z), y = new U("retry", y), a.dispatchEvent(y), f = (f + 1) % c.uris.length, ng(a, b, c, d, e, f, z, h)
   				}
   				throw z;
   			})
   		}

   		function og(a, b, c, d) {
   			var e = Wf(void 0),
   				f = {};
   			a = t(a.h);
   			for (var g = a.next(); !g.done; f = {
   					Ae: f.Ae
   				}, g = a.next()) f.Ae = g.value, e = e.va(function(h) {
   				return function() {
   					var k = c.response;
   					k.data && (k.data = Bb(k.data));
   					return h.Ae(b, k, d)
   				}
   			}(f));
   			return e.va(function() {
   				return c
   			}, function(h) {
   				var k = 2;
   				if (h instanceof T) {
   					if (7001 == h.code) throw h;
   					k = h.severity
   				}
   				throw new T(k, 1, 1007, h);
   			})
   		}

   		function qg(a) {
   			if (a) {
   				var b = a.segment;
   				a = a.stream;
   				if (b && a && a.fastSwitching && b.wd) return !1
   			}
   			return !0
   		}
   		S("gowatch.net.NetworkingEngine", eg);
   		eg.prototype.request = eg.prototype.request;
   		eg.prototype.destroy = eg.prototype.destroy;
   		eg.makeRequest = jg;
   		eg.defaultRetryParameters = function() {
   			return Qf()
   		};
   		eg.prototype.clearAllResponseFilters = eg.prototype.ph;
   		eg.prototype.unregisterResponseFilter = eg.prototype.Qi;
   		eg.prototype.registerResponseFilter = eg.prototype.ui;
   		eg.prototype.clearAllRequestFilters = eg.prototype.oh;
   		eg.prototype.unregisterRequestFilter = eg.prototype.Pi;
   		eg.prototype.registerRequestFilter = eg.prototype.ti;
   		eg.unregisterScheme = function(a) {
   			delete hg[a]
   		};
   		eg.registerScheme = fg;
   		eg.prototype.setForceHTTPS = eg.prototype.Nf;
   		eg.prototype.setForceHTTP = eg.prototype.Mf;

   		function kg() {
   			this.g = 0
   		}
   		eg.NumBytesRemainingClass = kg;

   		function lg(a, b, c) {
   			Tf.call(this, a, b);
   			this.h = c
   		}
   		oa(lg, Tf);
   		eg.PendingRequest = lg;
   		var pg = 1;
   		eg.RequestType = {
   			MANIFEST: 0,
   			SEGMENT: pg,
   			LICENSE: 2,
   			APP: 3,
   			TIMING: 4,
   			SERVER_CERTIFICATE: 5,
   			KEY: 6,
   			ADS: 7,
   			CONTENT_STEERING: 8
   		};
   		eg.AdvancedRequestType = {
   			INIT_SEGMENT: 0,
   			MEDIA_SEGMENT: 1,
   			MEDIA_PLAYLIST: 2,
   			MASTER_PLAYLIST: 3,
   			MPD: 4,
   			MSS: 5
   		};
   		var gg = 3;
   		eg.PluginPriority = {
   			FALLBACK: 1,
   			PREFERRED: 2,
   			APPLICATION: gg
   		};
   		var hg = {};

   		function rg(a) {
   			this.g = !1;
   			this.h = new Sf;
   			this.i = a
   		}
   		rg.prototype.destroy = function() {
   			var a = this;
   			if (this.g) return this.h;
   			this.g = !0;
   			return this.i().then(function() {
   				a.h.resolve()
   			}, function() {
   				a.h.resolve()
   			})
   		};

   		function sg(a, b) {
   			if (a.g) {
   				if (b instanceof T && 7003 == b.code) throw b;
   				throw new T(2, 7, 7003, b);
   			}
   		};

   		function tg(a, b) {
   			var c = [];
   			a = t(a);
   			for (var d = a.next(); !d.done; d = a.next()) c.push(b(d.value));
   			return c
   		}

   		function ug(a, b) {
   			a = t(a);
   			for (var c = a.next(); !c.done; c = a.next())
   				if (!b(c.value)) return !1;
   			return !0
   		};

   		function xg(a) {
   			for (var b = new Map, c = t(Object.keys(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b.set(d, a[d]);
   			return b
   		}

   		function yg(a) {
   			var b = {};
   			a.forEach(function(c, d) {
   				b[d] = c
   			});
   			return b
   		};

   		function zg(a, b) {
   			this.h = Eb(a);
   			this.i = b == Ag;
   			this.g = 0
   		}
   		r = zg.prototype;
   		r.ka = function() {
   			return this.g < this.h.byteLength
   		};
   		r.wa = function() {
   			return this.g
   		};
   		r.getLength = function() {
   			return this.h.byteLength
   		};
   		r.R = function() {
   			try {
   				var a = this.h.getUint8(this.g);
   				this.g += 1;
   				return a
   			} catch (b) {
   				throw Bg();
   			}
   		};
   		r.ta = function() {
   			try {
   				var a = this.h.getUint16(this.g, this.i);
   				this.g += 2;
   				return a
   			} catch (b) {
   				throw Bg();
   			}
   		};
   		r.O = function() {
   			try {
   				var a = this.h.getUint32(this.g, this.i);
   				this.g += 4;
   				return a
   			} catch (b) {
   				throw Bg();
   			}
   		};
   		r.Fg = function() {
   			try {
   				var a = this.h.getInt32(this.g, this.i);
   				this.g += 4;
   				return a
   			} catch (b) {
   				throw Bg();
   			}
   		};
   		r.Hc = function() {
   			try {
   				if (this.i) {
   					var a = this.h.getUint32(this.g, !0);
   					var b = this.h.getUint32(this.g + 4, !0)
   				} else b = this.h.getUint32(this.g, !1), a = this.h.getUint32(this.g + 4, !1)
   			} catch (c) {
   				throw Bg();
   			}
   			if (2097151 < b) throw new T(2, 3, 3001);
   			this.g += 8;
   			return b * Math.pow(2, 32) + a
   		};
   		r.vb = function(a) {
   			if (this.g + a > this.h.byteLength) throw Bg();
   			var b = Ab(this.h, this.g, a);
   			this.g += a;
   			return b
   		};
   		r.skip = function(a) {
   			if (this.g + a > this.h.byteLength) throw Bg();
   			this.g += a
   		};
   		r.Bi = function(a) {
   			if (this.g < a) throw Bg();
   			this.g -= a
   		};
   		r.seek = function(a) {
   			if (0 > a || a > this.h.byteLength) throw Bg();
   			this.g = a
   		};
   		r.ic = function() {
   			for (var a = this.g; this.ka() && 0 != this.h.getUint8(this.g);) this.g += 1;
   			a = Ab(this.h, a, this.g - a);
   			this.g += 1;
   			return kd(a)
   		};

   		function Bg() {
   			return new T(2, 3, 3E3)
   		}
   		S("gowatch.util.DataViewReader", zg);
   		zg.prototype.readTerminatedString = zg.prototype.ic;
   		zg.prototype.seek = zg.prototype.seek;
   		zg.prototype.rewind = zg.prototype.Bi;
   		zg.prototype.skip = zg.prototype.skip;
   		zg.prototype.readBytes = zg.prototype.vb;
   		zg.prototype.readUint64 = zg.prototype.Hc;
   		zg.prototype.readInt32 = zg.prototype.Fg;
   		zg.prototype.readUint32 = zg.prototype.O;
   		zg.prototype.readUint16 = zg.prototype.ta;
   		zg.prototype.readUint8 = zg.prototype.R;
   		zg.prototype.getLength = zg.prototype.getLength;
   		zg.prototype.getPosition = zg.prototype.wa;
   		zg.prototype.hasMoreData = zg.prototype.ka;
   		var Ag = 1;
   		zg.Endianness = {
   			BIG_ENDIAN: 0,
   			LITTLE_ENDIAN: Ag
   		};

   		function Cg() {
   			this.i = [];
   			this.h = [];
   			this.g = !1
   		}
   		r = Cg.prototype;
   		r.box = function(a, b) {
   			a = Dg(a);
   			this.i[a] = Eg;
   			this.h[a] = b;
   			return this
   		};
   		r.P = function(a, b) {
   			a = Dg(a);
   			this.i[a] = Fg;
   			this.h[a] = b;
   			return this
   		};
   		r.stop = function() {
   			this.g = !0
   		};
   		r.parse = function(a, b, c) {
   			a = new zg(a, 0);
   			for (this.g = !1; a.ka() && !this.g;) this.Fc(0, a, b, c)
   		};
   		r.Fc = function(a, b, c, d) {
   			var e = b.wa();
   			if (d && e + 8 > b.getLength()) this.g = !0;
   			else {
   				var f = b.O(),
   					g = b.O(),
   					h = Gg(g),
   					k = !1;
   				switch (f) {
   					case 0:
   						f = b.getLength() - e;
   						break;
   					case 1:
   						if (d && b.wa() + 8 > b.getLength()) {
   							this.g = !0;
   							return
   						}
   						f = b.Hc();
   						k = !0
   				}
   				var l = this.h[g];
   				if (l) {
   					var m = null,
   						n = null;
   					if (this.i[g] == Fg) {
   						if (d && b.wa() + 4 > b.getLength()) {
   							this.g = !0;
   							return
   						}
   						n = b.O();
   						m = n >>> 24;
   						n &= 16777215
   					}
   					g = e + f;
   					c && g > b.getLength() && (g = b.getLength());
   					d && g > b.getLength() ? this.g = !0 : (d = g - b.wa(), b = 0 < d ? b.vb(d) : new Uint8Array(0), b = new zg(b, 0), l({
   						name: h,
   						parser: this,
   						partialOkay: c || !1,
   						version: m,
   						flags: n,
   						reader: b,
   						size: f,
   						start: e + a,
   						has64BitSize: k
   					}))
   				} else b.skip(Math.min(e + f - b.wa(), b.getLength() - b.wa()))
   			}
   		};

   		function Hg(a) {
   			for (var b = Ig(a); a.reader.ka() && !a.parser.g;) a.parser.Fc(a.start + b, a.reader, a.partialOkay)
   		}

   		function Lg(a) {
   			for (var b = Ig(a), c = a.reader.O(), d = 0; d < c && (a.parser.Fc(a.start + b, a.reader, a.partialOkay), !a.parser.g); d++);
   		}

   		function Mg(a) {
   			var b = Ig(a);
   			for (a.reader.skip(78); a.reader.ka() && !a.parser.g;) a.parser.Fc(a.start + b, a.reader, a.partialOkay)
   		}

   		function Ng(a) {
   			var b = Ig(a);
   			a.reader.skip(8);
   			var c = a.reader.ta();
   			a.reader.skip(6);
   			2 == c ? a.reader.skip(48) : a.reader.skip(12);
   			for (1 == c && a.reader.skip(16); a.reader.ka() && !a.parser.g;) a.parser.Fc(a.start + b, a.reader, a.partialOkay)
   		}

   		function Og(a) {
   			return function(b) {
   				a(b.reader.vb(b.reader.getLength() - b.reader.wa()))
   			}
   		}

   		function Dg(a) {
   			var b = 0;
   			a = t(a);
   			for (var c = a.next(); !c.done; c = a.next()) b = b << 8 | c.value.charCodeAt(0);
   			return b
   		}

   		function Gg(a) {
   			return String.fromCharCode(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, a & 255)
   		}

   		function Ig(a) {
   			return 8 + (a.has64BitSize ? 8 : 0) + (null != a.flags ? 4 : 0)
   		}
   		S("gowatch.util.Mp4Parser", Cg);
   		Cg.headerSize = Ig;
   		Cg.typeToString = Gg;
   		Cg.allData = Og;
   		Cg.audioSampleEntry = Ng;
   		Cg.visualSampleEntry = Mg;
   		Cg.sampleDescription = Lg;
   		Cg.children = Hg;
   		Cg.prototype.parseNext = Cg.prototype.Fc;
   		Cg.prototype.parse = Cg.prototype.parse;
   		Cg.prototype.stop = Cg.prototype.stop;
   		Cg.prototype.fullBox = Cg.prototype.P;
   		Cg.prototype.box = Cg.prototype.box;
   		var Eg = 0,
   			Fg = 1;

   		function Pg(a) {
   			var b = this;
   			this.g = [];
   			this.h = [];
   			this.data = [];
   			(new Cg).box("moov", Hg).box("moof", Hg).P("pssh", function(c) {
   				if (!(1 < c.version)) {
   					var d = Ab(c.reader.h, -12, c.size);
   					b.data.push(d);
   					b.g.push(Ad(c.reader.vb(16)));
   					if (0 < c.version) {
   						d = c.reader.O();
   						for (var e = 0; e < d; e++) {
   							var f = Ad(c.reader.vb(16));
   							b.h.push(f)
   						}
   					}
   				}
   			}).parse(a)
   		}

   		function Qg(a, b, c, d) {
   			var e = a.length,
   				f = b.length + 16 + e;
   			0 < d && (f += 4 + 16 * c.size);
   			var g = new Uint8Array(f),
   				h = Eb(g),
   				k = 0;
   			h.setUint32(k, f);
   			k += 4;
   			h.setUint32(k, 1886614376);
   			k += 4;
   			1 > d ? h.setUint32(k, 0) : h.setUint32(k, 16777216);
   			k += 4;
   			g.set(b, k);
   			k += b.length;
   			if (0 < d)
   				for (h.setUint32(k, c.size), k += 4, b = t(c), c = b.next(); !c.done; c = b.next()) c = zd(c.value), g.set(c, k), k += c.length;
   			h.setUint32(k, e);
   			g.set(a, k + 4);
   			return g
   		};

   		function Rg(a, b) {
   			a = nd(a);
   			return Sg(a, b)
   		}

   		function Sg(a, b) {
   			a = Tg(a);
   			return !b && a.length ? a[0] : (a = a.find(function(c) {
   				return c.tagName === b
   			})) ? a : null
   		}

   		function Ug(a) {
   			return Vg.has(a) ? Vg.get(a) : ""
   		}

   		function Tg(a) {
   			function b(e, f) {
   				f = void 0 === f ? !1 : f;
   				for (var g = []; a[d];)
   					if (60 == a.charCodeAt(d)) {
   						if (47 === a.charCodeAt(d + 1)) {
   							f = d + 2;
   							d = a.indexOf(">", d);
   							f = a.substring(f, d);
   							var h = f.indexOf(e);
   							if (-1 == h) {
   								var k = e.indexOf(".");
   								0 < k && (h = f.indexOf(e.substring(0, k)))
   							}
   							if (-1 == h) throw e = a.substring(0, d).split("\n"), Error("Unexpected close tag\nLine: " + (e.length - 1) + "\nColumn: " + (e[e.length - 1].length + 1) + "\nChar: " + a[d]);
   							d + 1 && (d += 1);
   							break
   						} else if (33 === a.charCodeAt(d + 1)) {
   							if (45 == a.charCodeAt(d + 2)) {
   								for (; - 1 !== d && (62 !== a.charCodeAt(d) ||
   										45 != a.charCodeAt(d - 1) || 45 != a.charCodeAt(d - 2) || -1 == d);) d = a.indexOf(">", d + 1); - 1 === d && (d = a.length)
   							} else if (91 === a.charCodeAt(d + 2) && 91 === a.charCodeAt(d + 8) && "cdata" === a.substr(d + 3, 5).toLowerCase()) {
   								h = a.indexOf("]]\x3e", d); - 1 == h ? (g.push(a.substr(d + 9)), d = a.length) : (g.push(a.substring(d + 9, h)), d = h + 3);
   								continue
   							}
   							d++;
   							continue
   						}
   						a: {
   							k = f;d++;
   							var l = c(),
   								m = {};
   							for (h = []; 62 !== a.charCodeAt(d) && a[d];) {
   								var n = a.charCodeAt(d);
   								if (64 < n && 91 > n || 96 < n && 123 > n) {
   									n = c();
   									for (var p = a.charCodeAt(d); p && 39 !== p && 34 !== p && !(64 < p && 91 > p || 96 < p && 123 >
   											p) && 62 !== p;) d++, p = a.charCodeAt(d);
   									var q = d + 1;
   									d = a.indexOf(a[d], q);
   									q = a.slice(q, d);
   									if (39 === p || 34 === p) {
   										if (-1 === d) {
   											k = {
   												tagName: l,
   												attributes: m,
   												children: h,
   												parent: null
   											};
   											for (l = 0; l < h.length; l++) "string" !== typeof h[l] && (h[l].parent = k);
   											h = k;
   											break a
   										}
   									} else q = null, d--;
   									n.startsWith("xmlns:") && Vg.set(q, n.split(":")[1]);
   									"tt" === l && "xml:space" === n && "preserve" === q && (k = !0);
   									m[n] = q
   								}
   								d++
   							}
   							47 !== a.charCodeAt(d - 1) ? (d++, h = b(l, k)) : d++;k = {
   								tagName: l,
   								attributes: m,
   								children: h,
   								parent: null
   							};l = h.length;
   							for (m = 0; m < l; m++) n = h[m],
   							"string" !== typeof n ?
   							n.parent = k : m == l - 1 && "\n" == n && h.pop();h = k
   						}
   						g.push(h);
   						if ("string" === typeof h) break;
   						"?" === h.tagName[0] && h.children && (g.push.apply(g, x(h.children)), h.children = [])
   					} else h = d, d = a.indexOf("<", d) - 1, -2 === d && (d = a.length), h = a.slice(h, d + 1), f ? 0 < h.length && g.push(h) : g.length && 1 == h.length && "\n" == h[0] ? g.push(h) : 0 < h.trim().length && g.push(h), d++;
   				return g
   			}

   			function c() {
   				for (var e = d; - 1 === "\r\n\t>/= ".indexOf(a[d]) && a[d];) d++;
   				return a.slice(e, d)
   			}
   			var d = 0;
   			return b("")
   		}

   		function Wg(a) {
   			return "string" === typeof a
   		}

   		function Xg(a) {
   			var b = [];
   			if (!a.children) return [];
   			a = t(a.children);
   			for (var c = a.next(); !c.done; c = a.next()) c = c.value, "string" !== typeof c && b.push(c);
   			return b
   		}

   		function Yg(a, b) {
   			var c = [];
   			if (!a.children) return [];
   			a = t(a.children);
   			for (var d = a.next(); !d.done; d = a.next()) d = d.value, d.tagName === b && c.push(d);
   			return c
   		}

   		function Zg(a) {
   			if ("string" === typeof a) return ud(a);
   			a = a.children.reduce(function(b, c) {
   				return "string" === typeof c ? b + c : b
   			}, "");
   			return "" === a ? null : ud(a)
   		}

   		function $g(a) {
   			if (!Array.from(a.children).every(function(b) {
   					return "string" === typeof b
   				})) return null;
   			(a = Zg(a)) && (a = a.trim());
   			return a
   		}

   		function ah(a, b, c) {
   			c = void 0 === c ? [] : c;
   			a.tagName === b && c.push(a);
   			if (a.children) {
   				a = t(a.children);
   				for (var d = a.next(); !d.done; d = a.next()) ah(d.value, b, c)
   			}
   			return c
   		}

   		function bh(a, b) {
   			a = Yg(a, b);
   			return 1 != a.length ? null : a[0]
   		}

   		function ch(a, b, c) {
   			a = dh(a, b, c);
   			return 1 != a.length ? null : a[0]
   		}

   		function eh(a, b, c, d) {
   			d = void 0 === d ? null : d;
   			var e = null;
   			a = a.attributes[b];
   			null != a && (e = c(a));
   			return null == e ? d : e
   		}

   		function fh(a, b, c) {
   			b = Ug(b);
   			return a.attributes[b + ":" + c] || null
   		}

   		function dh(a, b, c) {
   			b = Ug(b);
   			var d = [];
   			if (a.children) {
   				a = t(a.children);
   				for (var e = a.next(); !e.done; e = a.next())(e = e.value) && e.tagName === b + ":" + c && d.push(e)
   			}
   			return d
   		}

   		function gh(a, b, c) {
   			b = t(b);
   			for (var d = b.next(); !d.done; d = b.next())
   				if (d = fh(a, d.value, c)) return d;
   			return null
   		}

   		function hh(a) {
   			if (!a) return null;
   			/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a) && (a += "Z");
   			a = Date.parse(a);
   			return isNaN(a) ? null : a / 1E3
   		}

   		function ih(a) {
   			if (!a) return null;
   			a = RegExp("^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$").exec(a);
   			if (!a) return null;
   			a = 31536E3 * Number(a[1] || null) + 2592E3 * Number(a[2] || null) + 86400 * Number(a[3] || null) + 3600 * Number(a[4] || null) + 60 * Number(a[5] || null) + Number(a[6] || null);
   			return isFinite(a) ? a : null
   		}

   		function jh(a) {
   			var b = /([0-9]+)-([0-9]+)/.exec(a);
   			if (!b) return null;
   			a = Number(b[1]);
   			if (!isFinite(a)) return null;
   			b = Number(b[2]);
   			return isFinite(b) ? {
   				start: a,
   				end: b
   			} : null
   		}

   		function kh(a) {
   			a = Number(a);
   			return 0 === a % 1 ? a : null
   		}

   		function lh(a) {
   			a = Number(a);
   			return 0 === a % 1 && 0 < a ? a : null
   		}

   		function mh(a) {
   			a = Number(a);
   			return 0 === a % 1 && 0 <= a ? a : null
   		}

   		function nh(a) {
   			a = Number(a);
   			return isNaN(a) ? null : a
   		}

   		function oh(a) {
   			return a ? "true" === a.toLowerCase() : !1
   		}

   		function ph(a) {
   			var b;
   			var c = (b = a.match(/^(\d+)\/(\d+)$/)) ? Number(b[1]) / Number(b[2]) : Number(a);
   			return isNaN(c) ? null : c
   		}

   		function qh(a) {
   			var b = [];
   			a = ud(a).split(/\/+(?=(?:[^'"]*['"][^'"]*['"])*[^'"]*$)/);
   			a = t(a);
   			for (var c = a.next(); !c.done; c = a.next()) {
   				c = c.value;
   				var d = c.match(/^([\w]+)/);
   				if (d) {
   					var e = c.match(/(@id='(.*?)')/),
   						f = c.match(/\[(\d+)\]/);
   					b.push({
   						name: d[0],
   						id: e ? e[0].match(/'(.*?)'/)[0].replace(/'/gm, "") : null,
   						position: f ? Number(f[1]) - 1 : null,
   						Kb: c.split("/@")[1] || null
   					})
   				} else c.startsWith("@") && b.length && (b[b.length - 1].Kb = c.slice(1))
   			}
   			return b
   		}

   		function rh(a, b) {
   			var c = qh(b.attributes.sel || "");
   			if (c.length) {
   				var d = c[c.length - 1],
   					e = b.attributes.pos || null;
   				c = d.position;
   				null === c ? c = "prepend" === e ? 0 : a.length : "prepend" === e ? --c : "after" === e && ++c;
   				e = b.tagName;
   				(d = d.Kb) ? sh(a[c], e, d, $g(b) || ""): ("remove" !== e && "replace" !== e || a.splice(c, 1), "add" !== e && "replace" !== e || a.splice.apply(a, [c, 0].concat(x(b.children))))
   			}
   		}

   		function sh(a, b, c, d) {
   			if ("remove" === b) delete a.attributes[c];
   			else if ("add" === b || "replace" === b) a.attributes[c] = d
   		}

   		function th(a, b, c) {
   			b = void 0 === b ? !0 : b;
   			c = void 0 === c ? !0 : c;
   			var d = document.createElement(a.tagName),
   				e;
   			for (e in a.attributes) d.setAttribute(e, a.attributes[e]);
   			b && a.parent && "?xml" != a.parent.tagName && th(a.parent, !0, !1).appendChild(d);
   			if (c)
   				for (a = t(a.children), b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, "string" == typeof b ? c = new Text(b) : c = th(b, !1, !0), d.appendChild(c);
   			return d
   		}
   		var Vg = new Map([]);

   		function uh(a) {
   			var b = this;
   			this.C = a;
   			this.H = new Set;
   			this.m = this.s = null;
   			this.fa = this.ca = !1;
   			this.J = 0;
   			this.g = null;
   			this.B = new hb;
   			this.i = new Map;
   			this.A = new Map;
   			this.l = new Sf;
   			this.h = null;
   			this.o = function(c) {
   				2 == c.severity && b.l.reject(c);
   				a.onError(c)
   			};
   			this.aa = new Map;
   			this.da = new Map;
   			this.M = new Lc(function() {
   				return vh(b)
   			});
   			this.S = !1;
   			this.N = [];
   			this.V = !1;
   			this.K = new Lc(function() {
   				wh(b)
   			});
   			this.l.catch(function() {});
   			this.j = new rg(function() {
   				return xh(b)
   			});
   			this.ba = !1;
   			this.F = this.G = null
   		}
   		r = uh.prototype;
   		r.destroy = function() {
   			return this.j.destroy()
   		};

   		function xh(a) {
   			return O(function(b) {
   				switch (b.g) {
   					case 1:
   						return a.B.release(), a.B = null, a.l.reject(), a.K.stop(), a.K = null, a.M.stop(), a.M = null, E(b, yh(a), 2);
   					case 2:
   						if (!a.m) {
   							b.u(3);
   							break
   						}
   						ua(b, 4);
   						return E(b, a.m.setMediaKeys(null), 6);
   					case 6:
   						wa(b, 5);
   						break;
   					case 4:
   						ya(b);
   					case 5:
   						a.m = null;
   					case 3:
   						a.g = null, a.H.clear(), a.s = null, a.A = new Map, a.h = null, a.o = function() {}, a.C = null, a.ba = !1, a.G = null, F(b)
   				}
   			})
   		}
   		r.configure = function(a) {
   			this.h = a;
   			this.K && this.K.Ua(this.h.updateExpirationTime)
   		};

   		function zh(a, b, c) {
   			a.fa = !0;
   			a.A = new Map;
   			a.S = c;
   			return Ah(a, b)
   		}

   		function Bh(a, b, c) {
   			a.A = new Map;
   			c = t(c);
   			for (var d = c.next(); !d.done; d = c.next()) a.A.set(d.value, {
   				initData: null,
   				initDataType: null
   			});
   			c = t(a.h.persistentSessionsMetadata);
   			for (d = c.next(); !d.done; d = c.next()) d = d.value, a.A.set(d.sessionId, {
   				initData: d.initData,
   				initDataType: d.initDataType
   			});
   			a.S = 0 < a.A.size;
   			return Ah(a, b)
   		}

   		function Ch(a, b, c, d, e, f) {
   			var g = new Map;
   			e = {
   				audioCapabilities: e,
   				videoCapabilities: f,
   				distinctiveIdentifier: "optional",
   				persistentState: "required",
   				sessionTypes: ["persistent-license"],
   				label: b
   			};
   			e.drmInfos = [{
   				keySystem: b,
   				licenseServerUri: c,
   				distinctiveIdentifierRequired: !1,
   				persistentStateRequired: !0,
   				audioRobustness: "",
   				videoRobustness: "",
   				serverCertificate: d,
   				serverCertificateUri: "",
   				initData: null,
   				keyIds: null
   			}];
   			g.set(b, e);
   			return Dh(a, g, [])
   		}

   		function Ah(a, b) {
   			var c, d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z;
   			return O(function(y) {
   				if (1 == y.g) {
   					if (c = Eh(a))
   						for (d = t(b), e = d.next(); !e.done; e = d.next()) f = e.value, f.video && (f.video.drmInfos = [c]), f.audio && (f.audio.drmInfos = [c]);
   					g = b.some(function(B) {
   						return B.video && B.video.drmInfos.length || B.audio && B.audio.drmInfos.length ? !0 : !1
   					});
   					g || (h = xg(a.h.servers), Fh(b, h));
   					k = new Set;
   					l = t(b);
   					for (e = l.next(); !e.done; e = l.next())
   						for (m = e.value, n = Gh(m), p = t(n), q = p.next(); !q.done; q = p.next()) u = q.value, k.add(u);
   					v = t(k);
   					for (q = v.next(); !q.done; q =
   						v.next()) w = q.value, Hh(w, xg(a.h.servers), xg(a.h.advanced || {}), a.h.keySystemsMapping);
   					return E(y, Oe(b, a.S, a.ba, a.h.preferredKeySystems), 2)
   				}
   				sg(a.j);
   				A = g || Object.keys(a.h.servers).length;
   				if (!A) return a.ca = !0, y.return(Promise.resolve());
   				z = Dh(a, void 0, b);
   				return y.return(g ? z : z.catch(function() {}))
   			})
   		}

   		function Ih(a) {
   			var b;
   			return O(function(c) {
   				switch (c.g) {
   					case 1:
   						if (a.m.mediaKeys) return c.return();
   						if (!a.G) {
   							c.u(2);
   							break
   						}
   						return E(c, a.G, 3);
   					case 3:
   						return sg(a.j), c.return();
   					case 2:
   						return ua(c, 4), a.G = a.m.setMediaKeys(a.s), E(c, a.G, 6);
   					case 6:
   						wa(c, 5);
   						break;
   					case 4:
   						b = ya(c), a.o(new T(2, 6, 6003, b.message));
   					case 5:
   						sg(a.j), F(c)
   				}
   			})
   		}

   		function Jh(a, b) {
   			return O(function(c) {
   				if (1 == c.g) return E(c, Ih(a), 2);
   				Kh(a, b.initDataType, Ab(b.initData));
   				F(c)
   			})
   		}
   		r.tc = function(a) {
   			var b = this;
   			return O(function(c) {
   				if (1 == c.g) {
   					if (!b.s) return b.B.qa(a, "encrypted", function() {
   						b.o(new T(2, 6, 6010))
   					}), c.return();
   					b.m = a;
   					b.B.qa(b.m, "play", function() {
   						for (var d = t(b.N), e = d.next(); !e.done; e = d.next()) Lh(b, e.value);
   						b.V = !0;
   						b.N = []
   					});
   					"webkitCurrentPlaybackTargetIsWireless" in b.m && b.B.D(b.m, "webkitcurrentplaybacktargetiswirelesschanged", function() {
   						return yh(b)
   					});
   					b.F = b.g ? b.g.initData.find(function(d) {
   						return 0 < d.initData.length
   					}) || null : null;
   					return b.F || "com.apple.fps" !== b.g.keySystem ||
   						b.A.size ? E(c, Ih(b), 2) : c.u(2)
   				}
   				Mh(b).catch(function() {});
   				b.F || b.A.size || b.h.parseInbandPsshEnabled || b.B.D(b.m, "encrypted", function(d) {
   					return Jh(b, d)
   				});
   				F(c)
   			})
   		};

   		function Nh(a) {
   			var b, c, d, e, f;
   			return O(function(g) {
   				switch (g.g) {
   					case 1:
   						if (!a.s || !a.g) return g.return();
   						if (!a.g.serverCertificateUri || a.g.serverCertificate && a.g.serverCertificate.length) {
   							g.u(2);
   							break
   						}
   						b = jg([a.g.serverCertificateUri], a.h.retryParameters);
   						ua(g, 3);
   						c = a.C.Db.request(5, b);
   						return E(g, c.promise, 5);
   					case 5:
   						d = g.h;
   						a.g.serverCertificate = Ab(d.data);
   						wa(g, 4);
   						break;
   					case 3:
   						throw e = ya(g), new T(2, 6, 6017, e);
   					case 4:
   						if (a.j.g) return g.return();
   					case 2:
   						if (!a.g.serverCertificate || !a.g.serverCertificate.length) return g.return();
   						ua(g, 6);
   						return E(g, a.s.setServerCertificate(a.g.serverCertificate), 8);
   					case 8:
   						wa(g, 0);
   						break;
   					case 6:
   						throw f = ya(g), new T(2, 6, 6004, f.message);
   				}
   			})
   		}

   		function Oh(a, b) {
   			var c, d, e;
   			return O(function(f) {
   				if (1 == f.g) return E(f, Ph(a, b, {
   					initData: null,
   					initDataType: null
   				}), 2);
   				if (3 != f.g) {
   					c = f.h;
   					if (!c) return f.return();
   					d = [];
   					if (e = a.i.get(c)) e.fb = new Sf, d.push(e.fb);
   					d.push(c.remove());
   					return E(f, Promise.all(d), 3)
   				}
   				a.i.delete(c);
   				F(f)
   			})
   		}

   		function Mh(a) {
   			var b, c, d, e, f;
   			return O(function(g) {
   				if (1 == g.g) {
   					if (!a.A.size) return g.u(2);
   					a.A.forEach(function(h, k) {
   						Ph(a, k, h)
   					});
   					return E(g, a.l, 3)
   				}
   				if (2 != g.g) {
   					b = a.g && a.g.keyIds || new Set([]);
   					if (0 < b.size && Qh(a)) return g.return(a.l);
   					a.l = new Sf;
   					a.l.catch(function() {})
   				}
   				c = (a.g ? a.g.initData : []) || [];
   				d = t(c);
   				for (e = d.next(); !e.done; e = d.next()) f = e.value, Kh(a, f.initDataType, f.initData);
   				Rh(a) && a.l.resolve();
   				return g.return(a.l)
   			})
   		}

   		function Kh(a, b, c) {
   			if (c.length) {
   				var d = a.i.values();
   				d = t(d);
   				for (var e = d.next(); !e.done; e = d.next())
   					if (xb(c, e.value.initData) && a.h.ignoreDuplicateInitData) return;
   				0 < a.i.size && Rh(a) && (a.l.resolve(), a.l = new Sf, a.l.catch(function() {}));
   				Sh(a, b, c, a.g.sessionType)
   			}
   		}

   		function Th(a) {
   			return a ? !!a.match(/^com\.(microsoft|chromecast)\.playready/) : !1
   		}

   		function Uh(a) {
   			a = a.i.keys();
   			a = tg(a, function(b) {
   				return b.sessionId
   			});
   			return Array.from(a)
   		}
   		r.cf = function() {
   			var a = this,
   				b = this.i.keys();
   			b = tg(b, function(c) {
   				var d = a.i.get(c);
   				return {
   					sessionId: c.sessionId,
   					sessionType: d.type,
   					initData: d.initData,
   					initDataType: d.initDataType
   				}
   			});
   			return Array.from(b)
   		};
   		r.jd = function() {
   			var a = Infinity,
   				b = this.i.keys();
   			b = t(b);
   			for (var c = b.next(); !c.done; c = b.next()) c = c.value, isNaN(c.expiration) || (a = Math.min(a, c.expiration));
   			return a
   		};
   		r.Td = function() {
   			return yg(this.da)
   		};

   		function Dh(a, b, c) {
   			var d, e, f, g, h, k, l, m, n, p, q, u, v, w, A;
   			return O(function(z) {
   				switch (z.g) {
   					case 1:
   						d = new Map;
   						if (c.length) {
   							e = Vh(a, c, d);
   							z.u(2);
   							break
   						}
   						return E(z, Wh(a, b), 3);
   					case 3:
   						e = z.h;
   					case 2:
   						f = e;
   						if (!f) throw new T(2, 6, 6001);
   						sg(a.j);
   						ua(z, 4);
   						a.H.clear();
   						g = f.getConfiguration();
   						h = g.audioCapabilities || [];
   						k = g.videoCapabilities || [];
   						l = t(h);
   						for (m = l.next(); !m.done; m = l.next()) n = m.value, a.H.add(n.contentType.toLowerCase());
   						p = t(k);
   						for (m = p.next(); !m.done; m = p.next()) q = m.value, a.H.add(q.contentType.toLowerCase());
   						if (c.length) {
   							var y =
   								f.keySystem;
   							var B = d.get(f.keySystem);
   							var C = [],
   								D = [],
   								J = [],
   								K = [],
   								H = [],
   								I = new Set;
   							Xh(B, C, D, K, J, H, I);
   							var G = a.S ? "persistent-license" : "temporary";
   							y = {
   								keySystem: y,
   								encryptionScheme: C[0],
   								licenseServerUri: D[0],
   								distinctiveIdentifierRequired: B[0].distinctiveIdentifierRequired,
   								persistentStateRequired: B[0].persistentStateRequired,
   								sessionType: B[0].sessionType || G,
   								audioRobustness: B[0].audioRobustness || "",
   								videoRobustness: B[0].videoRobustness || "",
   								serverCertificate: K[0],
   								serverCertificateUri: J[0],
   								initData: H,
   								keyIds: I
   							};
   							B = t(B);
   							for (C = B.next(); !C.done; C = B.next()) C = C.value, C.distinctiveIdentifierRequired && (y.distinctiveIdentifierRequired = C.distinctiveIdentifierRequired), C.persistentStateRequired && (y.persistentStateRequired = C.persistentStateRequired);
   							B = y
   						} else B = f.keySystem, y = b.get(f.keySystem), C = [], D = [], J = [], K = [], H = [], I = new Set, Xh(y.drmInfos, C, D, K, J, H, I), B = {
   							keySystem: B,
   							encryptionScheme: C[0],
   							licenseServerUri: D[0],
   							distinctiveIdentifierRequired: "required" == y.distinctiveIdentifier,
   							persistentStateRequired: "required" == y.persistentState,
   							sessionType: y.sessionTypes[0] || "temporary",
   							audioRobustness: (y.audioCapabilities ? y.audioCapabilities[0].robustness : "") || "",
   							videoRobustness: (y.videoCapabilities ? y.videoCapabilities[0].robustness : "") || "",
   							serverCertificate: K[0],
   							serverCertificateUri: J[0],
   							initData: H,
   							keyIds: I
   						};
   						a.g = B;
   						if (!a.g.licenseServerUri) throw new T(2, 6, 6012, a.g.keySystem);
   						return E(z, f.createMediaKeys(), 6);
   					case 6:
   						u = z.h;
   						sg(a.j);
   						a.s = u;
   						if (!("" != a.h.minHdcpVersion && "getStatusForPolicy" in a.s)) {
   							z.u(7);
   							break
   						}
   						ua(z, 8);
   						return E(z, a.s.getStatusForPolicy({
   								minHdcpVersion: a.h.minHdcpVersion
   							}),
   							10);
   					case 10:
   						v = z.h;
   						if ("usable" != v) throw new T(2, 6, 6018);
   						sg(a.j);
   						wa(z, 7, 4);
   						break;
   					case 8:
   						w = ya(z, 4);
   						if (w instanceof T) throw w;
   						throw new T(2, 6, 6019, w.message);
   					case 7:
   						return a.ca = !0, E(z, Nh(a), 11);
   					case 11:
   						sg(a.j);
   						wa(z, 0);
   						break;
   					case 4:
   						A = ya(z);
   						sg(a.j, A);
   						a.g = null;
   						a.H.clear();
   						if (A instanceof T) throw A;
   						throw new T(2, 6, 6002, A.message);
   				}
   			})
   		}

   		function Vh(a, b, c) {
   			for (var d = t(b), e = d.next(); !e.done; e = d.next()) {
   				var f = t(Gh(e.value));
   				for (e = f.next(); !e.done; e = f.next()) e = e.value, c.has(e.keySystem) || c.set(e.keySystem, []), c.get(e.keySystem).push(e)
   			}
   			if (1 == c.size && c.has("")) throw new T(2, 6, 6E3);
   			d = {};
   			a = t(a.h.preferredKeySystems);
   			for (e = a.next(); !e.done; d = {
   					ze: d.ze
   				}, e = a.next())
   				for (d.ze = e.value, f = t(b), e = f.next(); !e.done; e = f.next())
   					if (e = e.value.decodingInfos.find(function(l) {
   							return function(m) {
   								return m.supported && null != m.keySystemAccess && m.keySystemAccess.keySystem ==
   									l.ze
   							}
   						}(d))) return e.keySystemAccess;
   			a = t([!0, !1]);
   			for (e = a.next(); !e.done; e = a.next())
   				for (d = e.value, f = t(b), e = f.next(); !e.done; e = f.next()) {
   					var g = t(e.value.decodingInfos);
   					for (e = g.next(); !e.done; e = g.next()) {
   						var h = e.value;
   						if (h.supported && h.keySystemAccess) {
   							e = c.get(h.keySystemAccess.keySystem);
   							var k = t(e);
   							for (e = k.next(); !e.done; e = k.next())
   								if (!!e.value.licenseServerUri == d) return h.keySystemAccess
   						}
   					}
   				}
   			return null
   		}

   		function Wh(a, b) {
   			var c, d, e, f, g, h, k, l, m, n, p, q, u, v, w;
   			return O(function(A) {
   				switch (A.g) {
   					case 1:
   						if (1 == b.size && b.has("")) throw new T(2, 6, 6E3);
   						d = t(b.values());
   						for (e = d.next(); !e.done; e = d.next()) f = e.value, 0 == f.audioCapabilities.length && delete f.audioCapabilities, 0 == f.videoCapabilities.length && delete f.videoCapabilities;
   						g = t(a.h.preferredKeySystems);
   						h = g.next();
   					case 2:
   						if (h.done) {
   							A.u(4);
   							break
   						}
   						k = h.value;
   						if (!b.has(k)) {
   							A.u(3);
   							break
   						}
   						l = b.get(k);
   						ua(A, 6);
   						return E(A, navigator.requestMediaKeySystemAccess(k, [l]), 8);
   					case 8:
   						return c =
   							A.h, A.return(c);
   					case 6:
   						ya(A);
   					case 7:
   						sg(a.j);
   					case 3:
   						h = g.next();
   						A.u(2);
   						break;
   					case 4:
   						m = t([!0, !1]), n = m.next();
   					case 9:
   						if (n.done) {
   							A.u(11);
   							break
   						}
   						p = n.value;
   						q = t(b.keys());
   						h = q.next();
   					case 12:
   						if (h.done) {
   							n = m.next();
   							A.u(9);
   							break
   						}
   						u = h.value;
   						v = b.get(u);
   						w = v.drmInfos.some(function(z) {
   							return !!z.licenseServerUri
   						});
   						if (w != p) {
   							A.u(13);
   							break
   						}
   						ua(A, 15);
   						return E(A, navigator.requestMediaKeySystemAccess(u, [v]), 17);
   					case 17:
   						return c = A.h, A.return(c);
   					case 15:
   						ya(A);
   					case 16:
   						sg(a.j);
   					case 13:
   						h = q.next();
   						A.u(12);
   						break;
   					case 11:
   						return A.return(c)
   				}
   			})
   		}

   		function Eh(a) {
   			a = xg(a.h.drmkeys);
   			return 0 == a.size ? null : Fd(a)
   		}

   		function Yh(a) {
   			Rh(a) && a.l.resolve()
   		}

   		function Zh(a, b) {
   			(new Lc(function() {
   				b.loaded = !0;
   				Yh(a)
   			})).W($h)
   		}

   		function Ph(a, b, c) {
   			var d, e, f, g, h, k, l;
   			return O(function(m) {
   				switch (m.g) {
   					case 1:
   						try {
   							d = a.s.createSession("persistent-license")
   						} catch (n) {
   							return e = new T(2, 6, 6005, n.message), a.o(e), m.return(Promise.reject(e))
   						}
   						a.B.D(d, "message", function(n) {
   							a.m && a.h.delayLicenseRequestUntilPlayed && a.m.paused && !a.V ? a.N.push(n) : Lh(a, n)
   						});
   						a.B.D(d, "keystatuseschange", function(n) {
   							return ai(a, n)
   						});
   						f = {
   							initData: c.initData,
   							initDataType: c.initDataType,
   							loaded: !1,
   							wf: Infinity,
   							fb: null,
   							type: "persistent-license"
   						};
   						a.i.set(d, f);
   						ua(m, 2);
   						return E(m,
   							d.load(b), 4);
   					case 4:
   						return g = m.h, sg(a.j), g || (a.i.delete(d), h = a.h.persistentSessionOnlinePlayback ? 1 : 2, a.o(new T(h, 6, 6013)), f.loaded = !0), Zh(a, f), Yh(a), m.return(d);
   					case 2:
   						k = ya(m), sg(a.j, k), a.i.delete(d), l = a.h.persistentSessionOnlinePlayback ? 1 : 2, a.o(new T(l, 6, 6005, k.message)), f.loaded = !0, Yh(a);
   					case 3:
   						return m.return(Promise.resolve())
   				}
   			})
   		}

   		function Sh(a, b, c, d) {
   			try {
   				var e = a.s.createSession(d)
   			} catch (f) {
   				a.o(new T(2, 6, 6005, f.message));
   				return
   			}
   			a.B.D(e, "message", function(f) {
   				a.m && a.h.delayLicenseRequestUntilPlayed && a.m.paused && !a.V ? a.N.push(f) : Lh(a, f)
   			});
   			a.B.D(e, "keystatuseschange", function(f) {
   				return ai(a, f)
   			});
   			a.i.set(e, {
   				initData: c,
   				initDataType: b,
   				loaded: !1,
   				wf: Infinity,
   				fb: null,
   				type: d
   			});
   			try {
   				c = a.h.initDataTransform(c, b, a.g)
   			} catch (f) {
   				b = f;
   				f instanceof T || (b = new T(2, 6, 6016, f));
   				a.o(b);
   				return
   			}
   			a.h.logLicenseExchange && xd(c);
   			e.generateRequest(b, c).catch(function(f) {
   				if (!a.j.g) {
   					a.i.delete(e);
   					var g = f.errorCode;
   					if (g && g.systemCode) {
   						var h = g.systemCode;
   						0 > h && (h += Math.pow(2, 32));
   						h = "0x" + h.toString(16)
   					}
   					a.o(new T(2, 6, 6006, f.message, f, h))
   				}
   			})
   		}

   		function Lh(a, b) {
   			var c, d, e, f, g, h, k, l, m, n, p, q, u, v;
   			O(function(w) {
   				switch (w.g) {
   					case 1:
   						c = b.target;
   						a.h.logLicenseExchange && xd(b.message);
   						d = a.i.get(c);
   						e = a.g.licenseServerUri;
   						f = a.h.advanced[a.g.keySystem];
   						"individualization-request" == b.messageType && f && f.individualizationServer && (e = f.individualizationServer);
   						g = jg([e], a.h.retryParameters);
   						g.body = b.message;
   						g.method = "POST";
   						g.licenseRequestType = b.messageType;
   						g.sessionId = c.sessionId;
   						g.drmInfo = a.g;
   						d && (g.initData = d.initData, g.initDataType = d.initDataType);
   						if (f && f.headers)
   							for (h in f.headers) g.headers[h] =
   								f.headers[h];
   						if (Th(a.g.keySystem)) {
   							var A = ld(g.body, !0, !0);
   							if (A.includes("PlayReadyKeyMessage")) {
   								A = Sg(A, "PlayReadyKeyMessage");
   								var z = ah(A, "HttpHeader");
   								z = t(z);
   								for (var y = z.next(); !y.done; y = z.next()) {
   									var B = y.value;
   									y = ah(B, "name")[0];
   									B = ah(B, "value")[0];
   									g.headers[Zg(y)] = Zg(B)
   								}
   								A = ah(A, "Challenge")[0];
   								g.body = yd(Zg(A))
   							} else g.headers["Content-Type"] = "text/xml; charset=utf-8"
   						}
   						k = Date.now();
   						ua(w, 2);
   						m = a.C.Db.request(2, g);
   						return E(w, m.promise, 4);
   					case 4:
   						l = w.h;
   						wa(w, 3);
   						break;
   					case 2:
   						n = ya(w);
   						if (a.j.g) return w.return();
   						p = new T(2, 6, 6007, n);
   						1 == a.i.size ? (a.o(p), d && d.fb && d.fb.reject(p)) : (d && d.fb && d.fb.reject(p), a.i.delete(c), Rh(a) && (a.l.resolve(), a.M.W(.1)));
   						return w.return();
   					case 3:
   						if (a.j.g) return w.return();
   						a.J += (Date.now() - k) / 1E3;
   						a.h.logLicenseExchange && xd(l.data);
   						ua(w, 5);
   						return E(w, c.update(l.data), 7);
   					case 7:
   						wa(w, 6);
   						break;
   					case 5:
   						return q = ya(w), u = new T(2, 6, 6008, q.message), a.o(u), d && d.fb && d.fb.reject(u), w.return();
   					case 6:
   						if (a.j.g) return w.return();
   						v = new U("drmsessionupdate");
   						a.C.onEvent(v);
   						d && (d.fb && d.fb.resolve(),
   							Zh(a, d));
   						F(w)
   				}
   			})
   		}

   		function ai(a, b) {
   			b = b.target;
   			var c = a.i.get(b),
   				d = !1;
   			b.keyStatuses.forEach(function(f, g) {
   				if ("string" == typeof g) {
   					var h = g;
   					g = f;
   					f = h
   				}
   				if (Th(a.g.keySystem) && 16 == g.byteLength && (Qc() || cd())) {
   					h = Eb(g);
   					var k = h.getUint32(0, !0),
   						l = h.getUint16(4, !0),
   						m = h.getUint16(6, !0);
   					h.setUint32(0, k, !1);
   					h.setUint16(4, l, !1);
   					h.setUint16(6, m, !1)
   				}
   				"status-pending" != f && (c.loaded = !0);
   				"expired" == f && (d = !0);
   				g = Ad(g).slice(0, 32);
   				a.aa.set(g, f)
   			});
   			var e = b.expiration - Date.now();
   			(0 > e || d && 1E3 > e) && c && !c.fb && (a.i.delete(b), b.close().catch(function() {}));
   			Rh(a) &&
   				(a.l.resolve(), a.M.W(bi))
   		}

   		function vh(a) {
   			var b = a.aa,
   				c = a.da;
   			c.clear();
   			b.forEach(function(d, e) {
   				return c.set(e, d)
   			});
   			b = Array.from(c.values());
   			b.length && b.every(function(d) {
   				return "expired" == d
   			}) && a.o(new T(2, 6, 6014));
   			a.C.me(yg(c))
   		}

   		function ci() {
   			var a, b, c, d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H;
   			return O(function(I) {
   				if (1 == I.g) {
   					a = "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.microsoft.playready.recommendation com.chromecast.playready com.apple.fps.1_0 com.apple.fps".split(" ");
   					b = ["SW_SECURE_CRYPTO", "SW_SECURE_DECODE", "HW_SECURE_CRYPTO", "HW_SECURE_DECODE", "HW_SECURE_ALL"];
   					c = ["150", "2000", "3000"];
   					d = {
   						"com.widevine.alpha": b,
   						"com.microsoft.playready": c,
   						"com.microsoft.playready.recommendation": c,
   						"com.chromecast.playready": c
   					};
   					e = [{
   						contentType: 'video/mp4; codecs="avc1.42E01E"'
   					}, {
   						contentType: 'video/webm; codecs="vp8"'
   					}];
   					f = [{
   						contentType: 'audio/mp4; codecs="mp4a.40.2"'
   					}, {
   						contentType: 'audio/webm; codecs="opus"'
   					}];
   					g = {
   						videoCapabilities: e,
   						audioCapabilities: f,
   						initDataTypes: ["cenc", "sinf", "skd", "keyids"]
   					};
   					h = [null, "cenc", "cbcs", "cbcs-1-9"];
   					k = new Map;
   					l = function(G, N) {
   						var L, M, P, R, Q, fa, sa, Ia;
   						return O(function(xa) {
   							switch (xa.g) {
   								case 1:
   									return ua(xa, 2), E(xa, N.createMediaKeys(), 4);
   								case 4:
   									wa(xa, 3);
   									break;
   								case 2:
   									return ya(xa), xa.return();
   								case 3:
   									M =
   										(L = N.getConfiguration().sessionTypes) ? L.includes("persistent-license") : !1, Vc() && (M = !1), P = N.getConfiguration().videoCapabilities, R = N.getConfiguration().audioCapabilities, Q = {
   											persistentState: M,
   											encryptionSchemes: [],
   											videoRobustnessLevels: [],
   											audioRobustnessLevels: []
   										}, k.has(G) && k.get(G) ? Q = k.get(G) : k.set(G, Q), (fa = P[0].encryptionScheme) && !Q.encryptionSchemes.includes(fa) && Q.encryptionSchemes.push(fa), (sa = P[0].robustness) && !Q.videoRobustnessLevels.includes(sa) && Q.videoRobustnessLevels.push(sa), (Ia = R[0].robustness) &&
   										!Q.audioRobustnessLevels.includes(Ia) && Q.audioRobustnessLevels.push(Ia), F(xa)
   							}
   						})
   					};
   					m = function(G, N, L, M) {
   						var P, R, Q, fa, sa, Ia, xa, Ja, Qa;
   						return O(function(Aa) {
   							switch (Aa.g) {
   								case 1:
   									ua(Aa, 2);
   									P = Ce(g);
   									R = t(P.videoCapabilities);
   									for (Q = R.next(); !Q.done; Q = R.next()) fa = Q.value, fa.encryptionScheme = N, fa.robustness = L;
   									sa = t(P.audioCapabilities);
   									for (Q = sa.next(); !Q.done; Q = sa.next()) Ia = Q.value, Ia.encryptionScheme = N, Ia.robustness = M;
   									xa = Ce(P);
   									xa.persistentState = "required";
   									xa.sessionTypes = ["persistent-license"];
   									Ja = [xa, P];
   									return E(Aa,
   										navigator.requestMediaKeySystemAccess(G, Ja), 4);
   								case 4:
   									return Qa = Aa.h, E(Aa, l(G, Qa), 5);
   								case 5:
   									wa(Aa, 0);
   									break;
   								case 2:
   									ya(Aa), F(Aa)
   							}
   						})
   					};
   					n = function(G, N, L, M) {
   						var P, R, Q;
   						return O(function(fa) {
   							switch (fa.g) {
   								case 1:
   									return ua(fa, 2), P = {
   											type: "media-source",
   											video: {
   												contentType: e[0].contentType,
   												width: 640,
   												height: 480,
   												bitrate: 1,
   												framerate: 1
   											},
   											audio: {
   												contentType: f[0].contentType,
   												channels: 2,
   												bitrate: 1,
   												samplerate: 1
   											},
   											keySystemConfiguration: {
   												keySystem: G,
   												video: {
   													encryptionScheme: N,
   													robustness: L
   												},
   												audio: {
   													encryptionScheme: N,
   													robustness: M
   												}
   											}
   										},
   										E(fa, navigator.mediaCapabilities.decodingInfo(P), 4);
   								case 4:
   									return R = fa.h, Q = R.keySystemAccess, E(fa, l(G, Q), 5);
   								case 5:
   									wa(fa, 0);
   									break;
   								case 2:
   									ya(fa), F(fa)
   							}
   						})
   					};
   					p = t(a);
   					for (q = p.next(); !q.done; q = p.next()) u = q.value, k.set(u, null);
   					v = [];
   					w = t(h);
   					for (A = w.next(); !A.done; A = w.next())
   						for (z = A.value, y = t(a), q = y.next(); !q.done; q = y.next()) B = q.value, "org.w3.clearkey" === B && fd() || (v.push(m(B, z, "", "")), v.push(n(B, z, "", "")));
   					C = t(a);
   					for (q = C.next(); !q.done; q = C.next())
   						for (D = q.value, J = t(d[D] || []), K = J.next(); !K.done; K = J.next()) H = K.value,
   							v.push(m(D, null, H, "")), v.push(m(D, null, "", H)), v.push(n(D, null, H, "")), v.push(n(D, null, "", H));
   					return E(I, Promise.all(v), 2)
   				}
   				return I.return(yg(k))
   			})
   		}

   		function di(a) {
   			var b;
   			return O(function(c) {
   				if (1 == c.g) return b = new Promise(function(d, e) {
   					(new Lc(e)).W(ei)
   				}), ua(c, 2), E(c, Promise.race([Promise.all([a.close(), a.closed]), b]), 4);
   				if (2 != c.g) return wa(c, 0);
   				ya(c);
   				F(c)
   			})
   		}

   		function yh(a) {
   			var b;
   			return O(function(c) {
   				b = Array.from(a.i.entries());
   				a.i.clear();
   				return E(c, Promise.all(b.map(function(d) {
   					d = t(d);
   					var e = d.next().value,
   						f = d.next().value;
   					return O(function(g) {
   						if (1 == g.g) return ua(g, 2), a.fa || a.A.has(e.sessionId) || "persistent-license" !== f.type || a.h.persistentSessionOnlinePlayback ? E(g, di(e), 5) : E(g, e.remove(), 5);
   						if (2 != g.g) return wa(g, 0);
   						ya(g);
   						F(g)
   					})
   				})), 0)
   			})
   		}

   		function fi(a, b) {
   			return a.length && b.length && a !== b ? 0 < gi(a, b).length : !0
   		}

   		function gi(a, b) {
   			if (!a.length) return b;
   			if (!b.length) return a;
   			var c = [];
   			a = t(a);
   			for (var d = a.next(); !d.done; d = a.next()) {
   				d = d.value;
   				for (var e = t(b), f = e.next(); !f.done; f = e.next())
   					if (f = f.value, d.keySystem == f.keySystem) {
   						e = new Map;
   						for (var g = t((d.initData || []).concat(f.initData || [])), h = g.next(); !h.done; h = g.next()) h = h.value, e.set(h.keyId, h);
   						e = Array.from(e.values());
   						g = d.keyIds && f.keyIds ? new Set([].concat(x(d.keyIds), x(f.keyIds))) : d.keyIds || f.keyIds;
   						c.push({
   							keySystem: d.keySystem,
   							licenseServerUri: d.licenseServerUri ||
   								f.licenseServerUri,
   							distinctiveIdentifierRequired: d.distinctiveIdentifierRequired || f.distinctiveIdentifierRequired,
   							persistentStateRequired: d.persistentStateRequired || f.persistentStateRequired,
   							videoRobustness: d.videoRobustness || f.videoRobustness,
   							audioRobustness: d.audioRobustness || f.audioRobustness,
   							serverCertificate: d.serverCertificate || f.serverCertificate,
   							serverCertificateUri: d.serverCertificateUri || f.serverCertificateUri,
   							initData: e,
   							keyIds: g
   						});
   						break
   					}
   			}
   			return c
   		}

   		function Gh(a) {
   			return (a.video ? a.video.drmInfos : []).concat(a.audio ? a.audio.drmInfos : [])
   		}

   		function wh(a) {
   			a.i.forEach(function(b, c) {
   				var d = b.wf,
   					e = c.expiration;
   				isNaN(e) && (e = Infinity);
   				e != d && (a.C.onExpirationUpdated(c.sessionId, e), b.wf = e)
   			})
   		}

   		function Rh(a) {
   			a = a.i.values();
   			return ug(a, function(b) {
   				return b.loaded
   			})
   		}

   		function Qh(a) {
   			for (var b = t(a.g && a.g.keyIds || new Set([])), c = b.next(); !c.done; c = b.next())
   				if ("usable" !== a.aa.get(c.value)) return !1;
   			return !0
   		}

   		function Fh(a, b) {
   			var c = [];
   			b.forEach(function(d, e) {
   				c.push({
   					keySystem: e,
   					licenseServerUri: d,
   					distinctiveIdentifierRequired: !1,
   					persistentStateRequired: !1,
   					audioRobustness: "",
   					videoRobustness: "",
   					serverCertificate: null,
   					serverCertificateUri: "",
   					initData: [],
   					keyIds: new Set
   				})
   			});
   			a = t(a);
   			for (b = a.next(); !b.done; b = a.next()) b = b.value, b.video && (b.video.drmInfos = c), b.audio && (b.audio.drmInfos = c)
   		}

   		function Xh(a, b, c, d, e, f, g) {
   			var h = [],
   				k = {};
   			a = t(a);
   			for (var l = a.next(); !l.done; k = {
   					la: k.la
   				}, l = a.next()) {
   				k.la = l.value;
   				b.includes(k.la.encryptionScheme) || b.push(k.la.encryptionScheme);
   				"org.w3.clearkey" == k.la.keySystem && k.la.licenseServerUri.startsWith("data:application/json;base64,") ? h.includes(k.la.licenseServerUri) || h.push(k.la.licenseServerUri) : c.includes(k.la.licenseServerUri) || c.push(k.la.licenseServerUri);
   				e.includes(k.la.serverCertificateUri) || e.push(k.la.serverCertificateUri);
   				k.la.serverCertificate &&
   					(d.some(function(p) {
   						return function(q) {
   							return xb(q, p.la.serverCertificate)
   						}
   					}(k)) || d.push(k.la.serverCertificate));
   				if (k.la.initData) {
   					l = {};
   					for (var m = t(k.la.initData), n = m.next(); !n.done; l = {
   							Fd: l.Fd
   						}, n = m.next()) l.Fd = n.value, f.some(function(p) {
   						return function(q) {
   							var u = p.Fd;
   							return q.keyId && q.keyId == u.keyId ? !0 : q.initDataType == u.initDataType && xb(q.initData, u.initData)
   						}
   					}(l)) || f.push(l.Fd)
   				}
   				if (k.la.keyIds)
   					for (l = t(k.la.keyIds), m = l.next(); !m.done; m = l.next()) g.add(m.value)
   			}
   			if (1 == h.length) c.push(h[0]);
   			else if (0 <
   				h.length) {
   				b = [];
   				h = t(h);
   				for (d = h.next(); !d.done; d = h.next()) d = window.atob(d.value.split("data:application/json;base64,").pop()), d = JSON.parse(d), b.push.apply(b, x(d.keys));
   				h = JSON.stringify({
   					keys: b
   				});
   				c.push("data:application/json;base64," + window.btoa(h))
   			}
   		}

   		function Hh(a, b, c, d) {
   			var e = a.keySystem;
   			if (e && ("org.w3.clearkey" != e || !a.licenseServerUri)) {
   				b.size && (b = b.get(e) || "", a.licenseServerUri = b);
   				a.keyIds || (a.keyIds = new Set);
   				if (c = c.get(e)) a.distinctiveIdentifierRequired || (a.distinctiveIdentifierRequired = c.distinctiveIdentifierRequired), a.persistentStateRequired || (a.persistentStateRequired = c.persistentStateRequired), a.videoRobustness || (a.videoRobustness = c.videoRobustness), a.audioRobustness || (a.audioRobustness = c.audioRobustness), a.serverCertificate || (a.serverCertificate =
   					c.serverCertificate), c.sessionType && (a.sessionType = c.sessionType), a.serverCertificateUri || (a.serverCertificateUri = c.serverCertificateUri);
   				d[e] && (a.keySystem = d[e]);
   				window.cast && window.cast.__platform__ && "com.microsoft.playready" == e && (a.keySystem = "com.chromecast.playready")
   			}
   		}
   		var ei = 1,
   			$h = 5,
   			bi = .5,
   			hi = new Jc(function() {
   				return Bb(new Uint8Array([0]))
   			}),
   			ii = new Map;

   		function ji(a, b, c) {
   			this.h = a;
   			this.i = b;
   			this.g = c
   		}

   		function ki(a, b) {
   			return O(function(c) {
   				if (1 == c.g) return E(c, Ke(a.g, b, a.h.drm.preferredKeySystems), 2);
   				Fe(b, a.h.preferredVideoCodecs, a.h.preferredAudioCodecs, a.h.preferredDecodingAttributes);
   				if (!b.variants.some(kf)) throw new T(2, 4, 4032);
   				return c.return(li(a, b))
   			})
   		}

   		function li(a, b) {
   			var c = Je(b.variants, a.h.restrictions, a.i);
   			if (b) {
   				var d = a.g ? a.g.g : null;
   				if (d && a.g.s)
   					for (var e = t(b.variants), f = e.next(); !f.done; f = e.next()) f = f.value, mi(a, d.keySystem, f.video), mi(a, d.keySystem, f.audio);
   				ni(a, b)
   			}
   			return c
   		}

   		function mi(a, b, c) {
   			if (c) {
   				c = t(c.drmInfos);
   				for (var d = c.next(); !d.done; d = c.next())
   					if (d = d.value, d.keySystem == b) {
   						d = t(d.initData || []);
   						for (var e = d.next(); !e.done; e = d.next()) e = e.value, Kh(a.g, e.initDataType, e.initData)
   					}
   			}
   		}

   		function ni(a, b) {
   			a = a.g ? a.g.Td() : {};
   			var c = Object.keys(a);
   			c = c.length && "00" == c[0];
   			var d = !1,
   				e = !1,
   				f = new Set,
   				g = new Set;
   			b = t(b.variants);
   			for (var h = b.next(); !h.done; h = b.next()) {
   				h = h.value;
   				var k = [];
   				h.audio && k.push(h.audio);
   				h.video && k.push(h.video);
   				k = t(k);
   				for (var l = k.next(); !l.done; l = k.next())
   					if (l = l.value, l.keyIds.size) {
   						l = t(l.keyIds);
   						for (var m = l.next(); !m.done; m = l.next()) {
   							m = m.value;
   							var n = a[c ? "00" : m];
   							n ? oi.includes(n) && g.add(n) : f.add(m)
   						}
   					} h.allowedByApplication ? h.allowedByKeySystem && (d = !0) : e = !0
   			}
   			if (!d) throw a = {
   				hasAppRestrictions: e,
   				missingKeys: Array.from(f),
   				restrictedKeyStatuses: Array.from(g)
   			}, new T(2, 4, 4012, a);
   		}
   		var oi = ["output-restricted", "internal-error"];

   		function pi() {}

   		function qi(a, b) {
   			if (b) {
   				var c = ri[b.toLowerCase()];
   				if (c) return c
   			}
   			throw new T(2, 4, 4E3, a, b);
   		}
   		S("gowatch.media.ManifestParser", pi);
   		pi.unregisterParserByMime = function(a) {
   			delete ri[a]
   		};
   		pi.registerParserByMime = function(a, b) {
   			ri[a] = b
   		};
   		pi.registerParserByExtension = function() {
   			qb("ManifestParser.registerParserByExtension", "Please use an ManifestParser with registerParserByMime function.")
   		};
   		pi.AccessibilityPurpose = {
   			Nj: "visually impaired",
   			hj: "hard of hearing"
   		};
   		var ri = {};

   		function si(a, b) {
   			function c() {
   				e = !0
   			}

   			function d(l) {
   				g.push(l);
   				Hg(l)
   			}
   			a = Ab(a);
   			var e = !1,
   				f, g = [],
   				h = [];
   			(new Cg).box("moov", d).box("trak", d).box("mdia", d).box("minf", d).box("stbl", d).P("stsd", function(l) {
   				f = l;
   				g.push(l);
   				Lg(l)
   			}).P("encv", c).P("enca", c).P("dvav", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733238
   				})
   			}).P("dva1", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733238
   				})
   			}).P("dvh1", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733238
   				})
   			}).P("dvhe", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733238
   				})
   			}).P("hev1", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733238
   				})
   			}).P("hvc1",
   				function(l) {
   					h.push({
   						box: l,
   						cb: 1701733238
   					})
   				}).P("avc1", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733238
   				})
   			}).P("avc3", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733238
   				})
   			}).P("ac-3", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733217
   				})
   			}).P("ec-3", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733217
   				})
   			}).P("ac-4", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733217
   				})
   			}).P("mp4a", function(l) {
   				h.push({
   					box: l,
   					cb: 1701733217
   				})
   			}).parse(a);
   			if (e) return a;
   			if (0 == h.length || !f) throw fb(Ad(a)), new T(2, 3, 3019, b);
   			h.reverse();
   			b = t(h);
   			for (var k = b.next(); !k.done; k = b.next()) k = k.value,
   				a = ti(a, f, k.box, g, k.cb);
   			return a
   		}

   		function ti(a, b, c, d, e) {
   			var f = ui.value(),
   				g = a.subarray(c.start, c.start + c.size),
   				h = Eb(g),
   				k = new Uint8Array(c.size + f.byteLength);
   			k.set(g, 0);
   			g = Eb(k);
   			g.setUint32(4, e);
   			k.set(f, c.size);
   			e = h.getUint32(4);
   			g.setUint32(c.size + 16, e);
   			vi(k, 0, k.byteLength);
   			e = new Uint8Array(a.byteLength + k.byteLength);
   			c = Sc() ? c.start : c.start + c.size;
   			f = a.subarray(c);
   			e.set(a.subarray(0, c));
   			e.set(k, c);
   			e.set(f, c + k.byteLength);
   			a = t(d);
   			for (d = a.next(); !d.done; d = a.next()) d = d.value, vi(e, d.start, d.size + k.byteLength);
   			k = Eb(e, b.start);
   			b = Ig(b);
   			a = k.getUint32(b);
   			k.setUint32(b, a + 1);
   			return e
   		}

   		function vi(a, b, c) {
   			a = Eb(a, b);
   			b = a.getUint32(0);
   			0 != b && (1 == b ? (a.setUint32(8, c >> 32), a.setUint32(12, c & 4294967295)) : a.setUint32(0, c))
   		}
   		var ui = new Jc(function() {
   			return new Uint8Array([0, 0, 0, 80, 115, 105, 110, 102, 0, 0, 0, 12, 102, 114, 109, 97, 0, 0, 0, 0, 0, 0, 0, 20, 115, 99, 104, 109, 0, 0, 0, 0, 99, 101, 110, 99, 0, 1, 0, 0, 0, 0, 0, 40, 115, 99, 104, 105, 0, 0, 0, 32, 116, 101, 110, 99, 0, 0, 0, 0, 0, 0, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
   		});

   		function zi(a, b, c, d, e, f, g) {
   			this.L = a;
   			this.Ba = b;
   			this.ja = c;
   			this.tf = void 0 === d ? null : d;
   			this.timescale = void 0 === e ? null : e;
   			this.g = void 0 === f ? null : f;
   			this.aesKey = void 0 === g ? null : g;
   			this.mimeType = this.codecs = null
   		}
   		zi.prototype.bc = function() {
   			return this.Ba
   		};
   		zi.prototype.Zb = function() {
   			return this.ja
   		};
   		zi.prototype.ld = function() {
   			return this.g
   		};

   		function Ai(a, b) {
   			return a === b ? !0 : a && b ? a.bc() == b.bc() && a.Zb() == b.Zb() && Mb(a.L().sort(), b.L().sort()) && xb(a.ld(), b.ld()) : a == b
   		}
   		S("gowatch.media.InitSegmentReference", zi);
   		zi.prototype.getEndByte = zi.prototype.Zb;
   		zi.prototype.getStartByte = zi.prototype.bc;

   		function Bi(a, b, c, d, e, f, g, h, k, l, m, n, p, q, u, v) {
   			l = void 0 === l ? [] : l;
   			q = void 0 === q ? Ci : q;
   			this.startTime = a;
   			this.i = this.endTime = b;
   			this.C = c;
   			this.Ba = d;
   			this.ja = e;
   			this.ea = f;
   			this.timestampOffset = g;
   			this.appendWindowStart = h;
   			this.appendWindowEnd = k;
   			this.g = l;
   			this.tilesLayout = void 0 === m ? "" : m;
   			this.A = void 0 === n ? null : n;
   			this.h = void 0 === p ? null : p;
   			this.status = q;
   			this.preload = !1;
   			this.l = !0;
   			this.m = !1;
   			this.aesKey = void 0 === u ? null : u;
   			this.s = null;
   			this.j = 0;
   			this.o = void 0 === v ? !1 : v;
   			this.be = this.wd = !1;
   			a = t(this.g);
   			for (b = a.next(); !b.done; b =
   				a.next()) b.value.Bg();
   			this.o && this.g.length && this.g[this.g.length - 1].Ag();
   			this.B = this.mimeType = this.codecs = null
   		}
   		r = Bi.prototype;
   		r.L = function() {
   			return this.C()
   		};
   		r.getStartTime = function() {
   			return this.startTime
   		};
   		r.zh = function() {
   			return this.endTime
   		};
   		r.bc = function() {
   			return this.Ba
   		};
   		r.Zb = function() {
   			return this.ja
   		};
   		r.Rh = function() {
   			return this.tilesLayout
   		};
   		r.Qh = function() {
   			return this.A
   		};
   		r.cc = function() {
   			return this.status
   		};
   		r.ii = function() {
   			this.status = Di
   		};
   		r.rf = function() {
   			this.preload = !0
   		};
   		r.ci = function() {
   			return this.preload
   		};
   		r.ee = function() {
   			this.l = !1
   		};
   		r.$h = function() {
   			return this.l
   		};
   		r.Bg = function() {
   			this.wd = !0
   		};
   		r.bi = function() {
   			return this.wd
   		};
   		r.Ag = function() {
   			this.be = !0
   		};
   		r.ai = function() {
   			return this.be
   		};
   		r.zg = function() {
   			this.m = !0
   		};
   		r.Xh = function() {
   			return this.m
   		};
   		r.Rg = function(a) {
   			this.s = a
   		};
   		r.Ph = function() {
   			return this.s
   		};
   		r.offset = function(a) {
   			this.startTime += a;
   			this.endTime += a;
   			this.i += a;
   			for (var b = t(this.g), c = b.next(); !c.done; c = b.next()) c = c.value, c.startTime += a, c.endTime += a, c.i += a
   		};
   		r.Qf = function(a) {
   			null == this.h ? $a("Sync attempted without sync time!") : (a = this.h - a - this.startTime, .001 <= Math.abs(a) && this.offset(a))
   		};
   		r.Mi = function(a) {
   			this.B = a
   		};
   		r.ld = function() {
   			return this.B
   		};

   		function Ei(a, b) {
   			a.ea = b;
   			a = t(a.g);
   			for (var c = a.next(); !c.done; c = a.next()) Ei(c.value, b)
   		}
   		S("gowatch.media.SegmentReference", Bi);
   		Bi.prototype.getSegmentData = Bi.prototype.ld;
   		Bi.prototype.setSegmentData = Bi.prototype.Mi;
   		Bi.prototype.syncAgainst = Bi.prototype.Qf;
   		Bi.prototype.offset = Bi.prototype.offset;
   		Bi.prototype.getThumbnailSprite = Bi.prototype.Ph;
   		Bi.prototype.setThumbnailSprite = Bi.prototype.Rg;
   		Bi.prototype.hasByterangeOptimization = Bi.prototype.Xh;
   		Bi.prototype.markAsByterangeOptimization = Bi.prototype.zg;
   		Bi.prototype.isLastPartial = Bi.prototype.ai;
   		Bi.prototype.markAsLastPartial = Bi.prototype.Ag;
   		Bi.prototype.isPartial = Bi.prototype.bi;
   		Bi.prototype.markAsPartial = Bi.prototype.Bg;
   		Bi.prototype.isIndependent = Bi.prototype.$h;
   		Bi.prototype.markAsNonIndependent = Bi.prototype.ee;
   		Bi.prototype.isPreload = Bi.prototype.ci;
   		Bi.prototype.markAsPreload = Bi.prototype.rf;
   		Bi.prototype.markAsUnavailable = Bi.prototype.ii;
   		Bi.prototype.getStatus = Bi.prototype.cc;
   		Bi.prototype.getTileDuration = Bi.prototype.Qh;
   		Bi.prototype.getTilesLayout = Bi.prototype.Rh;
   		Bi.prototype.getEndByte = Bi.prototype.Zb;
   		Bi.prototype.getStartByte = Bi.prototype.bc;
   		Bi.prototype.getEndTime = Bi.prototype.zh;
   		Bi.prototype.getStartTime = Bi.prototype.getStartTime;
   		Bi.prototype.getUris = Bi.prototype.L;
   		var Ci = 0,
   			Di = 1;
   		Bi.Status = {
   			Vi: Ci,
   			Lj: Di,
   			nj: 2
   		};

   		function Fi(a) {
   			return !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : a.length ? a.end(a.length - 1) : null
   		}

   		function Gi(a, b) {
   			return !a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0) || b > a.end(a.length - 1) ? !1 : b >= a.start(0)
   		}

   		function Hi(a, b) {
   			if (!a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return 0;
   			var c = 0;
   			a = t(Ii(a));
   			for (var d = a.next(); !d.done; d = a.next()) {
   				var e = d.value;
   				d = e.start;
   				e = e.end;
   				e > b && (c += e - Math.max(d, b))
   			}
   			return c
   		}

   		function Ji(a, b, c) {
   			if (!a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return null;
   			a = Ii(a).findIndex(function(d, e, f) {
   				return d.start > b && (0 == e || f[e - 1].end - b <= c)
   			});
   			return 0 <= a ? a : null
   		}

   		function Ii(a) {
   			if (!a) return [];
   			for (var b = [], c = 0; c < a.length; c++) b.push({
   				start: a.start(c),
   				end: a.end(c)
   			});
   			return b
   		};

   		function Ki() {}

   		function Li(a, b) {
   			return b + 10 <= a.length && 73 === a[b] && 68 === a[b + 1] && 51 === a[b + 2] && 255 > a[b + 3] && 255 > a[b + 4] && 128 > a[b + 6] && 128 > a[b + 7] && 128 > a[b + 8] && 128 > a[b + 9] ? !0 : !1
   		}

   		function Mi(a, b) {
   			return b + 10 <= a.length && 51 === a[b] && 68 === a[b + 1] && 73 === a[b + 2] && 255 > a[b + 3] && 255 > a[b + 4] && 128 > a[b + 6] && 128 > a[b + 7] && 128 > a[b + 8] && 128 > a[b + 9] ? !0 : !1
   		}

   		function Ni(a, b) {
   			var c = (a[b] & 127) << 21;
   			c |= (a[b + 1] & 127) << 14;
   			c |= (a[b + 2] & 127) << 7;
   			return c |= a[b + 3] & 127
   		}

   		function Oi(a) {
   			var b = {
   				key: a.type,
   				description: "",
   				data: "",
   				mimeType: null,
   				pictureType: null
   			};
   			if ("APIC" === a.type) {
   				if (2 > a.size || 3 !== a.data[0]) return null;
   				var c = a.data.subarray(1).indexOf(0);
   				if (-1 === c) return null;
   				var d = kd(Ab(a.data, 1, c)),
   					e = a.data[2 + c],
   					f = a.data.subarray(3 + c).indexOf(0);
   				if (-1 === f) return null;
   				var g = kd(Ab(a.data, 3 + c, f)),
   					h;
   				"--\x3e" === d ? h = kd(Ab(a.data, 4 + c + f)) : h = Bb(a.data.subarray(4 + c + f));
   				b.mimeType = d;
   				b.pictureType = e;
   				b.description = g;
   				b.data = h;
   				return b
   			}
   			if ("TXXX" === a.type) {
   				if (2 > a.size || 3 !== a.data[0]) return null;
   				d = a.data.subarray(1).indexOf(0);
   				if (-1 === d) return null;
   				c = kd(Ab(a.data, 1, d));
   				a = kd(Ab(a.data, 2 + d)).replace(/\0*$/, "");
   				b.description = c;
   				b.data = a;
   				return b
   			}
   			if ("WXXX" === a.type) {
   				if (2 > a.size || 3 !== a.data[0]) return null;
   				d = a.data.subarray(1).indexOf(0);
   				if (-1 === d) return null;
   				c = kd(Ab(a.data, 1, d));
   				a = kd(Ab(a.data, 2 + d)).replace(/\0*$/, "");
   				b.description = c;
   				b.data = a;
   				return b
   			}
   			if ("PRIV" === a.type) {
   				if (2 > a.size) return null;
   				c = a.data.indexOf(0);
   				if (-1 === c) return null;
   				c = kd(Ab(a.data, 0, c));
   				b.description = c;
   				"com.apple.streaming.transportStreamTimestamp" ==
   				c ? (c = a.data.subarray(c.length + 1), a = c[3] & 1, c = (c[4] << 23) + (c[5] << 15) + (c[6] << 7) + c[7], c /= 45, a && (c += 4.772185884E7), b.data = c) : (a = Bb(a.data.subarray(c.length + 1)), b.data = a);
   				return b
   			}
   			if ("T" === a.type[0]) {
   				if (2 > a.size || 3 !== a.data[0]) return null;
   				a = kd(a.data.subarray(1)).replace(/\0*$/, "");
   				b.data = a;
   				return b
   			}
   			return "W" === a.type[0] ? (a = kd(a.data).replace(/\0*$/, ""), b.data = a, b) : a.data ? (b.data = Bb(a.data), b) : null
   		}

   		function Pi(a) {
   			for (var b = 0, c = []; Li(a, b);) {
   				var d = Ni(a, b + 6);
   				a[b + 5] >> 6 & 1 && (b += 10);
   				b += 10;
   				for (d = b + d; b + 10 < d;) {
   					var e = a.subarray(b),
   						f = Ni(e, 4);
   					e = {
   						type: String.fromCharCode(e[0], e[1], e[2], e[3]),
   						size: f,
   						data: e.subarray(10, 10 + f)
   					};
   					(f = Oi(e)) && c.push(f);
   					b += e.size + 10
   				}
   				Mi(a, b) && (b += 10)
   			}
   			return c
   		}

   		function Qi(a, b) {
   			for (var c = b = void 0 === b ? 0 : b, d = 0; Li(a, b);) a[b + 5] >> 6 & 1 && (d += 10), d += 10, d += Ni(a, b + 6), Mi(a, b + 10) && (d += 10), b += d;
   			return 0 < d ? a.subarray(c, c + d) : new Uint8Array([])
   		}
   		S("gowatch.util.Id3Utils", Ki);
   		Ki.getID3Data = Qi;
   		Ki.getID3Frames = Pi;

   		function Ri(a, b) {
   			var c = null,
   				d = null,
   				e = null,
   				f = a.O();
   			b & 1 && (e = a.Hc());
   			b & 2 && a.skip(4);
   			b & 8 && (c = a.O());
   			b & 16 && (d = a.O());
   			return {
   				trackId: f,
   				jg: c,
   				th: d,
   				Pj: e
   			}
   		}

   		function Si(a, b) {
   			return 1 == b ? (b = a.O(), a = a.O(), {
   				baseMediaDecodeTime: b * Math.pow(2, 32) + a
   			}) : {
   				baseMediaDecodeTime: a.O()
   			}
   		}

   		function Ti(a, b) {
   			1 == b ? (a.skip(8), a.skip(8)) : (a.skip(4), a.skip(4));
   			b = a.O();
   			a.skip(4);
   			a = a.ta();
   			return {
   				timescale: b,
   				language: String.fromCharCode((a >> 10) + 96) + String.fromCharCode(((a & 960) >> 5) + 96) + String.fromCharCode((a & 31) + 96)
   			}
   		}

   		function Ui(a, b, c) {
   			var d = a.O(),
   				e = [],
   				f = null;
   			c & 1 && (f = a.O());
   			c & 4 && a.skip(4);
   			for (var g = 0; g < d; g++) {
   				var h = {
   					Gf: null,
   					sampleSize: null,
   					re: null
   				};
   				c & 256 && (h.Gf = a.O());
   				c & 512 && (h.sampleSize = a.O());
   				c & 1024 && a.skip(4);
   				c & 2048 && (h.re = 0 == b ? a.O() : a.Fg());
   				e.push(h)
   			}
   			return {
   				Tj: d,
   				Ig: e,
   				sh: f
   			}
   		}

   		function Vi(a, b) {
   			1 == b ? (a.skip(8), a.skip(8)) : (a.skip(4), a.skip(4));
   			var c = a.O();
   			1 == b ? a.skip(8) : a.skip(4);
   			a.skip(4);
   			a.skip(8);
   			a.skip(2);
   			a.skip(2);
   			a.skip(2);
   			a.skip(2);
   			a.skip(36);
   			b = a.ta() + a.ta() / 16;
   			a = a.ta() + a.ta() / 16;
   			return {
   				trackId: c,
   				width: b,
   				height: a
   			}
   		}

   		function Wi(a) {
   			a = a.O();
   			return {
   				Ga: Gg(a)
   			}
   		}

   		function Xi(a, b) {
   			b = void 0 === b ? !1 : b;
   			a = a.toString(16).toUpperCase();
   			return b ? a : ("0" + a).slice(-2)
   		}

   		function Yi(a) {
   			return (10 > a ? "0" : "") + a
   		};

   		function Zi(a, b) {
   			this.j = a;
   			if (void 0 === b ? 0 : b) {
   				b = new Uint8Array(a.byteLength);
   				for (var c = 0, d = 0; d < a.byteLength; d++) 2 <= d && 3 == a[d] && 0 == a[d - 1] && 0 == a[d - 2] || (b[c] = a[d], c++);
   				this.j = Ab(b, 0, c)
   			}
   			this.i = this.j.byteLength;
   			this.g = this.h = 0
   		}

   		function $i(a) {
   			var b = a.j.byteLength - a.i,
   				c = new Uint8Array(4),
   				d = Math.min(4, a.i);
   			0 !== d && (c.set(a.j.subarray(b, b + d)), a.h = (new zg(c, 0)).O(), a.g = 8 * d, a.i -= d)
   		}

   		function aj(a, b) {
   			if (a.g <= b) {
   				b -= a.g;
   				var c = Math.floor(b / 8);
   				b -= 8 * c;
   				a.g -= c;
   				$i(a)
   			}
   			a.h <<= b;
   			a.g -= b
   		}

   		function bj(a, b) {
   			var c = Math.min(a.g, b),
   				d = a.h >>> 32 - c;
   			a.g -= c;
   			0 < a.g ? a.h <<= c : 0 < a.i && $i(a);
   			c = b - c;
   			return 0 < c ? d << c | bj(a, c) : d
   		}

   		function cj(a) {
   			var b;
   			for (b = 0; b < a.g; ++b)
   				if (0 !== (a.h & 2147483648 >>> b)) return a.h <<= b, a.g -= b, b;
   			$i(a);
   			return b + cj(a)
   		}

   		function dj(a) {
   			aj(a, 1 + cj(a))
   		}

   		function V(a) {
   			var b = cj(a);
   			return bj(a, b + 1) - 1
   		}

   		function ej(a) {
   			a = V(a);
   			return 1 & a ? 1 + a >>> 1 : -1 * (a >>> 1)
   		}

   		function W(a) {
   			return 1 === bj(a, 1)
   		}

   		function fj(a) {
   			return bj(a, 8)
   		}

   		function nj(a, b) {
   			for (var c = 8, d = 8, e = 0; e < b; e++) 0 !== d && (d = ej(a), d = (c + d + 256) % 256), c = 0 === d ? c : d
   		}

   		function oj(a) {
   			fj(a);
   			V(a);
   			return V(a)
   		}
   		S("gowatch.util.ExpGolomb", Zi);

   		function pj() {
   			this.G = null;
   			this.H = !1;
   			this.m = this.J = null;
   			this.j = [];
   			this.g = [];
   			this.A = this.B = null;
   			this.i = [];
   			this.h = [];
   			this.C = null;
   			this.l = [];
   			this.F = this.o = this.s = null
   		}
   		r = pj.prototype;
   		r.clearData = function() {
   			this.j = [];
   			this.g = [];
   			this.i = [];
   			this.h = [];
   			this.l = []
   		};
   		r.parse = function(a) {
   			if (564 > a.length) return this;
   			for (var b = Math.max(0, qj(a)), c = a.length - (a.length + b) % 188, d = !1, e = b; e < c; e += 188)
   				if (71 == a[e]) {
   					var f = !!(a[e + 1] & 64),
   						g = ((a[e + 1] & 31) << 8) + a[e + 2];
   					if (1 < (a[e + 3] & 48) >> 4) {
   						var h = e + 5 + a[e + 4];
   						if (h == e + 188) continue
   					} else h = e + 4;
   					switch (g) {
   						case 0:
   							f && (h += a[h] + 1);
   							this.G = (a[h + 10] & 31) << 8 | a[h + 11];
   							break;
   						case 17:
   						case 8191:
   							break;
   						case this.G:
   							f && (h += a[h] + 1);
   							f = a;
   							g = {
   								audio: -1,
   								video: -1,
   								Zd: -1,
   								audioCodec: "",
   								videoCodec: ""
   							};
   							var k = h + 3 + ((f[h + 1] & 15) << 8 | f[h + 2]) - 4;
   							for (h += 12 + ((f[h + 10] & 15) << 8 | f[h + 11]); h <
   								k;) {
   								var l = (f[h + 1] & 31) << 8 | f[h + 2],
   									m = (f[h + 3] & 15) << 8 | f[h + 4];
   								switch (f[h]) {
   									case 6:
   										if (0 < m)
   											for (var n = h + 5, p = m; 2 < p;) {
   												var q = f[n + 1] + 2;
   												switch (f[n]) {
   													case 5:
   														var u = md(f.subarray(n + 2, n + q)); - 1 == g.audio && "Opus" === u ? (g.audio = l, g.audioCodec = "opus") : -1 == g.video && "AV01" === u && (g.video = l, g.videoCodec = "av1");
   														break;
   													case 106:
   														-1 == g.audio && (g.audio = l, g.audioCodec = "ac3");
   														break;
   													case 122:
   														-1 == g.audio && (g.audio = l, g.audioCodec = "ec3");
   														break;
   													case 124:
   														-1 == g.audio && (g.audio = l, g.audioCodec = "aac");
   														break;
   													case 127:
   														"opus" == g.audioCodec && (u =
   															null, 128 === f[n + 2] && (u = f[n + 3]), null != u && (this.F = {
   																channelCount: 0 === (u & 15) ? 2 : u & 15,
   																nh: u,
   																sampleRate: 48E3
   															}))
   												}
   												n += q;
   												p -= q
   											}
   										break;
   									case 15:
   										-1 == g.audio && (g.audio = l, g.audioCodec = "aac");
   										break;
   									case 17:
   										-1 == g.audio && (g.audio = l, g.audioCodec = "aac-loas");
   										break;
   									case 21:
   										-1 == g.Zd && (g.Zd = l);
   										break;
   									case 27:
   										-1 == g.video && (g.video = l, g.videoCodec = "avc");
   										break;
   									case 3:
   									case 4:
   										-1 == g.audio && (g.audio = l, g.audioCodec = "mp3");
   										break;
   									case 36:
   										-1 == g.video && (g.video = l, g.videoCodec = "hvc");
   										break;
   									case 129:
   										-1 == g.audio && (g.audio = l, g.audioCodec = "ac3");
   										break;
   									case 132:
   									case 135:
   										-1 == g.audio && (g.audio = l, g.audioCodec = "ec3")
   								}
   								h += m + 5
   							}
   							f = g; - 1 != f.video && (this.J = f.video, this.m = f.videoCodec); - 1 != f.audio && (this.B = f.audio, this.A = f.audioCodec); - 1 != f.Zd && (this.C = f.Zd);
   							d && !this.H && (d = !1, e = b - 188);
   							this.H = !0;
   							break;
   						case this.J:
   							h = a.subarray(h, e + 188);
   							f ? this.j.push([h]) : this.j.length && this.j[this.j.length - 1] && this.j[this.j.length - 1].push(h);
   							break;
   						case this.B:
   							h = a.subarray(h, e + 188);
   							f ? this.i.push([h]) : this.i.length && this.i[this.i.length - 1] && this.i[this.i.length - 1].push(h);
   							break;
   						case this.C:
   							h = a.subarray(h, e + 188);
   							f ? this.l.push([h]) : this.l.length && this.l[this.l.length - 1] && this.l[this.l.length - 1].push(h);
   							break;
   						default:
   							d = !0
   					}
   				} return this
   		};

   		function rj(a, b) {
   			if (1 !== (b[0] << 16 | b[1] << 8 | b[2])) return null;
   			var c = {
   				data: new Uint8Array(0),
   				packetLength: b[4] << 8 | b[5],
   				pts: null,
   				dts: null,
   				nalus: []
   			};
   			if (c.packetLength && c.packetLength > b.byteLength - 6) return null;
   			var d = b[7];
   			if (d & 192) {
   				var e = 536870912 * (b[9] & 14) + 4194304 * (b[10] & 255) + 16384 * (b[11] & 254) + 128 * (b[12] & 255) + (b[13] & 254) / 2;
   				null == a.s && (a.s = e);
   				c.pts = sj(e, a.s);
   				a.s = c.pts;
   				c.dts = c.pts;
   				d & 64 && (d = 536870912 * (b[14] & 14) + 4194304 * (b[15] & 255) + 16384 * (b[16] & 254) + 128 * (b[17] & 255) + (b[18] & 254) / 2, null == a.o && (a.o = d), c.dts = sj(d,
   					a.o));
   				a.o = c.dts
   			}
   			a = b[8] + 9;
   			if (b.byteLength <= a) return null;
   			c.data = b.subarray(a);
   			return c
   		}
   		r.oi = function(a) {
   			qb("TsParser.parseAvcNalus", "Please use parseNalus function instead.");
   			return this.zf(a)
   		};
   		r.zf = function(a, b, c) {
   			var d = a.pts ? a.pts / 9E4 : null;
   			a = a.data;
   			var e = a.byteLength,
   				f = 1;
   			"hvc" == this.m && (f = 2);
   			for (var g = c || 0, h = [], k = -1, l = 0, m, n = 0; n < e; ++n) {
   				var p = a[n];
   				if (p) {
   					if (2 <= g && 1 == p) {
   						b && !h.length && -1 == k && (p = n - (3 < g ? 3 : g), c && 0 != p && (p = a.subarray(0, p), b.data = Bd(b.data, p), b.fullData = Bd(b.fullData, p)));
   						0 <= k ? (g = n - ((3 < g ? 3 : g) + 1), h.push({
   							data: a.subarray(k + f, g + 1),
   							fullData: a.subarray(k, g + 1),
   							type: l,
   							time: d
   						})) : b && !h.length && (k = n - g, 0 < k && (k = a.subarray(0, k), b.data = Bd(b.data, k), b.fullData = Bd(b.fullData, k)));
   						if (n >= e - f) return h;
   						n++;
   						k = n;
   						l = "hvc" == this.m ? a[n] >> 1 & 63 : a[n] & 31
   					}
   					g = 0
   				} else g++;
   				n >= e - 1 && 0 <= k && 0 <= g && (m = {
   					data: a.subarray(k + f, e),
   					fullData: a.subarray(k, e),
   					type: l,
   					time: d
   				})
   			}
   			m && h.push(m);
   			!h.length && b && (b.data = Bd(b.data, a), b.fullData = Bd(b.fullData, a));
   			return h
   		};
   		r.getMetadata = function() {
   			for (var a = [], b = t(this.l), c = b.next(); !c.done; c = b.next()) c = Bd.apply(vd, x(c.value)), (c = rj(this, c)) && a.push({
   				cueTime: c.pts ? c.pts / 9E4 : null,
   				data: c.data,
   				frames: Pi(c.data),
   				dts: c.dts,
   				pts: c.pts
   			});
   			return a
   		};
   		r.Lb = function() {
   			if (this.i.length && !this.h.length) {
   				for (var a = !1, b = t(this.i), c = b.next(); !c.done; c = b.next()) {
   					var d = Bd.apply(vd, x(c.value)),
   						e = rj(this, d);
   					c = this.h.length ? this.h[this.h.length - 1] : null;
   					e && null != e.pts && null != e.dts && (!c || c.pts != e.pts && c.dts != e.dts) ? (this.h.length && e.dts < (c.dts || 0) && (a = !0), this.h.push(e)) : this.h.length && (d = e ? e.data : d) && (c = this.h.pop(), c.data = Bd(c.data, d), this.h.push(c))
   				}
   				a && (this.h = this.h.sort(function(f, g) {
   					var h = (f.pts || 0) - (g.pts || 0);
   					return (f.dts || 0) - (g.dts || 0) || h
   				}))
   			}
   			return this.h
   		};
   		r.Ac = function(a) {
   			a = void 0 === a ? !0 : a;
   			if (this.j.length && !this.g.length) {
   				for (var b = !1, c = t(this.j), d = c.next(); !d.done; d = c.next()) {
   					var e = Bd.apply(vd, x(d.value)),
   						f = rj(this, e);
   					d = this.g.length ? this.g[this.g.length - 1] : null;
   					f && null != f.pts && null != f.dts && (!d || d.pts != f.pts && d.dts != f.dts) ? (this.g.length && f.dts < (d.dts || 0) && (b = !0), this.g.push(f)) : this.g.length && (e = f ? f.data : e) && (d = this.g.pop(), d.data = Bd(d.data, e), this.g.push(d))
   				}
   				if (a) {
   					var g;
   					c = t(this.g);
   					for (d = c.next(); !d.done; d = c.next()) d = d.value, d.nalus = this.zf(d,
   						g, void 0), d.nalus.length && (g = d.nalus[d.nalus.length - 1]);
   					this.g = this.g.filter(function(h) {
   						return h.nalus.length
   					})
   				}
   				b && (this.g = this.g.sort(function(h, k) {
   					var l = (h.pts || 0) - (k.pts || 0);
   					return (h.dts || 0) - (k.dts || 0) || l
   				}))
   			}
   			return a ? this.g : (a = this.g, this.g = [], a)
   		};
   		r.getStartTime = function(a) {
   			if ("audio" == a) {
   				a = null;
   				var b = this.Lb();
   				b.length && (a = b[0], a = Math.min(a.dts, a.pts) / 9E4);
   				return a
   			}
   			return "video" == a ? (a = null, b = this.Ac(!1), b.length && (a = b[0], a = Math.min(a.dts, a.pts) / 9E4), a) : null
   		};
   		r.hd = function() {
   			return {
   				audio: this.A,
   				video: this.m
   			}
   		};
   		r.Xd = function() {
   			for (var a = [], b = t(this.Ac()), c = b.next(); !c.done; c = b.next()) a.push.apply(a, x(c.value.nalus));
   			return a
   		};
   		r.Uh = function() {
   			qb("TsParser.getVideoResolution", "Please use getVideoInfo function instead.");
   			var a = this.gf();
   			return {
   				height: a.height,
   				width: a.width
   			}
   		};
   		r.gf = function() {
   			return "hvc" == this.m ? tj(this) : uj(this)
   		};

   		function uj(a) {
   			var b = {
   				height: null,
   				width: null,
   				Ga: null
   			};
   			a = a.Xd();
   			if (!a.length) return b;
   			a = a.find(function(p) {
   				return 7 == p.type
   			});
   			if (!a) return b;
   			a = new Zi(a.data);
   			var c = fj(a),
   				d = fj(a),
   				e = fj(a);
   			dj(a);
   			if (vj.includes(c)) {
   				var f = V(a);
   				3 === f && aj(a, 1);
   				dj(a);
   				dj(a);
   				aj(a, 1);
   				if (W(a)) {
   					f = 3 !== f ? 8 : 12;
   					for (var g = 0; g < f; g++) W(a) && (6 > g ? nj(a, 16) : nj(a, 64))
   				}
   			}
   			dj(a);
   			f = V(a);
   			if (0 === f) V(a);
   			else if (1 === f)
   				for (aj(a, 1), dj(a), dj(a), f = V(a), g = 0; g < f; g++) dj(a);
   			dj(a);
   			aj(a, 1);
   			f = V(a);
   			g = V(a);
   			var h = bj(a, 1);
   			0 === h && aj(a, 1);
   			aj(a, 1);
   			var k = 0,
   				l = 0,
   				m = 0,
   				n =
   				0;
   			W(a) && (k = V(a), l = V(a), m = V(a), n = V(a));
   			b.height = String((2 - h) * (g + 1) * 16 - 2 * m - 2 * n);
   			b.width = String(16 * (f + 1) - 2 * k - 2 * l);
   			b.Ga = "avc1." + ("0" + c.toString(16).toUpperCase()).slice(-2) + ("0" + d.toString(16).toUpperCase()).slice(-2) + ("0" + e.toString(16).toUpperCase()).slice(-2);
   			return b
   		}

   		function tj(a) {
   			var b = {
   				height: null,
   				width: null,
   				Ga: null
   			};
   			a = a.Xd();
   			if (!a.length) return b;
   			a = a.find(function(B) {
   				return 33 == B.type
   			});
   			if (!a) return b;
   			var c = new Zi(a.fullData, !0);
   			fj(c);
   			fj(c);
   			bj(c, 4);
   			var d = bj(c, 3);
   			W(c);
   			var e = bj(c, 2),
   				f = bj(c, 1),
   				g = bj(c, 5),
   				h = bj(c, 32);
   			a = fj(c);
   			for (var k = fj(c), l = fj(c), m = fj(c), n = fj(c), p = fj(c), q = fj(c), u = [], v = [], w = 0; w < d; w++) u.push(W(c)), v.push(W(c));
   			if (0 < d)
   				for (w = d; 8 > w; w++) bj(c, 2);
   			for (w = 0; w < d; w++) u[w] && bj(c, 88), v[w] && fj(c);
   			V(c);
   			d = V(c);
   			3 == d && bj(c, 1);
   			u = V(c);
   			v = V(c);
   			var A = w = 0,
   				z = 0,
   				y = 0;
   			W(c) &&
   				(w += V(c), A += V(c), z += V(c), y += V(c));
   			b.width = String(u - (w + A) * (1 === d || 2 === d ? 2 : 1));
   			b.height = String(v - (z + y) * (1 === d ? 2 : 1));
   			c = function(B) {
   				for (var C = 0, D = 0; 32 > D; D++) C |= (B >> D & 1) << 31 - D;
   				return C >>> 0
   			}(h);
   			f = 1 == f ? "H" : "L";
   			e = "hvc1" + ("." + ["", "A", "B", "C"][e] + g);
   			e += "." + c.toString(16).toUpperCase();
   			e += "." + f + q;
   			p && (e += "." + p.toString(16).toUpperCase());
   			n && (e += "." + n.toString(16).toUpperCase());
   			m && (e += "." + m.toString(16).toUpperCase());
   			l && (e += "." + l.toString(16).toUpperCase());
   			k && (e += "." + k.toString(16).toUpperCase());
   			a && (e += "." +
   				a.toString(16).toUpperCase());
   			b.Ga = e;
   			return b
   		}

   		function sj(a, b) {
   			var c = 1;
   			for (a > b && (c = -1); 4294967296 < Math.abs(b - a);) a += 8589934592 * c;
   			return a
   		}

   		function wj(a) {
   			return 0 > qj(a) ? !1 : !0
   		}

   		function qj(a) {
   			for (var b = Math.min(1E3, a.length - 564), c = 0; c < b;) {
   				if (71 == a[c] && 71 == a[c + 188] && 71 == a[c + 376]) return c;
   				c++
   			}
   			return -1
   		}
   		S("gowatch.util.TsParser", pj);
   		pj.syncOffset = qj;
   		pj.probe = wj;
   		pj.prototype.getVideoInfo = pj.prototype.gf;
   		pj.prototype.getVideoResolution = pj.prototype.Uh;
   		pj.prototype.getVideoNalus = pj.prototype.Xd;
   		pj.prototype.getCodecs = pj.prototype.hd;
   		pj.prototype.getStartTime = pj.prototype.getStartTime;
   		pj.prototype.getVideoData = pj.prototype.Ac;
   		pj.prototype.getAudioData = pj.prototype.Lb;
   		pj.prototype.getMetadata = pj.prototype.getMetadata;
   		pj.prototype.parseNalus = pj.prototype.zf;
   		pj.prototype.parseAvcNalus = pj.prototype.oi;
   		pj.prototype.parse = pj.prototype.parse;
   		pj.prototype.clearData = pj.prototype.clearData;
   		pj.Timescale = 9E4;
   		var vj = [100, 110, 122, 244, 44, 83, 86, 118, 128, 138, 139, 134];

   		function xj(a, b, c) {
   			this.g = null;
   			this.o = -1;
   			this.l = a;
   			this.i = b;
   			this.m = c;
   			this.j = !1;
   			a: {
   				"undefined" === typeof libDPIModule && ab("Could not find LCEVC Library dependencies on this page");
   				if ("undefined" !== typeof LCEVCdec) this.h = LCEVCdec;
   				else if ("undefined" !== typeof LcevcDil) this.h = LcevcDil,
   				this.j = !0,
   				qb("LcevcDil", "lcevc_dil.js is deprecated, please use lcevc_dec.js instead");
   				else {
   					ab("Could not find LCEVC Library on this page");
   					a = !1;
   					break a
   				}
   				"undefined" === typeof this.h.SupportObject ? (ab("Could not find LCEVC Library on this page"),
   					a = !1) : (this.h.SupportObject.SupportStatus || ab(this.h.SupportObject.SupportError), a = "undefined" !== typeof this.h && "undefined" !== typeof libDPIModule && this.i instanceof HTMLCanvasElement && this.h.SupportObject.SupportStatus)
   			}
   			a && !this.g && this.h.SupportObject.webGLSupport(this.i) && (this.i.classList.remove("gowatch-hidden"), this.g = this.j ? new this.h.LcevcDil(this.l, this.i, this.m) : new this.h.LCEVCdec(this.l, this.i, this.m))
   		}

   		function yj(a) {
   			a.g && a.i.classList.add("gowatch-hidden")
   		}
   		xj.prototype.release = function() {
   			this.g && (this.g.close(), this.g = null)
   		};

   		function zj(a, b, c) {
   			var d = Aj,
   				e = Bj;
   			switch (b.mimeType) {
   				case "video/webm":
   					d = Cj;
   					break;
   				case "video/mp4":
   					d = Dj
   			}
   			switch (c) {
   				case "DASH":
   					e = Ej;
   					break;
   				case "HLS":
   					e = Fj
   			}
   			a.g && (a.o = b.id, a.g.setLevelSwitching(b.id, !0), a.g.setContainerFormat(d), a.j || a.g.setStreamingFormat(e))
   		}
   		S("gowatch.lcevc.Dec", xj);
   		xj.prototype.release = xj.prototype.release;
   		var Aj = 0,
   			Cj = 1,
   			Dj = 2,
   			Fj = 0,
   			Ej = 1,
   			Bj = -1;

   		function Gj(a, b, c, d) {
   			var e = this;
   			this.i = a;
   			this.A = null;
   			this.F = b;
   			this.h = {};
   			this.G = {};
   			this.na = {};
   			this.g = null;
   			this.ba = !1;
   			this.ua = c || function() {};
   			this.S = d || null;
   			this.j = {};
   			this.o = new hb;
   			this.m = {};
   			this.H = null;
   			this.M = new Sf;
   			this.N = "";
   			this.ca = !1;
   			this.l = Hj(this, this.M);
   			this.C = !1;
   			this.J = new rg(function() {
   				return Ij(e)
   			});
   			this.B = !1;
   			this.aa = "UNKNOWN";
   			this.za = this.oa = !1;
   			this.fa = new Sf;
   			this.s = !1;
   			this.da = !0;
   			this.K = this.V = null
   		}

   		function Hj(a, b) {
   			if (window.ManagedMediaSource) {
   				a.i.disableRemotePlayback = !0;
   				var c = new ManagedMediaSource;
   				a.o.D(c, "startstreaming", function() {
   					a.da = !0
   				});
   				a.o.D(c, "endstreaming", function() {
   					a.da = !1
   				});
   				a.o.qa(c, "sourceopen", function() {
   					URL.revokeObjectURL(a.N);
   					b.resolve()
   				});
   				a.o.qa(a.i, "playing", function() {
   					a.ca = !0
   				});
   				a.N = Jj(c);
   				a.i.src = a.N;
   				return c
   			}
   			c = new MediaSource;
   			a.o.qa(c, "sourceopen", function() {
   				URL.revokeObjectURL(a.N);
   				b.resolve()
   			});
   			a.o.qa(a.i, "playing", function() {
   				a.ca = !0
   			});
   			a.N = Jj(c);
   			a.i.src = a.N;
   			return c
   		}

   		function Kj(a, b) {
   			var c, d, e, f, g, h, k, l, m, n, p;
   			return O(function(q) {
   				if (1 == q.g) return a.createSegmentIndex ? E(q, a.createSegmentIndex(), 2) : q.u(2);
   				if (!a.segmentIndex) return q.return(!1);
   				if (0 == a.segmentIndex.getNumReferences()) return q.return(!0);
   				c = Nd;
   				d = new Set;
   				e = t(a.segmentIndex);
   				for (f = e.next(); !f.done; f = e.next())
   					if (g = f.value, h = g.mimeType || a.mimeType || "", k = g.codecs || a.codecs || "", l = h + ":" + k, !d.has(l))
   						if (d.add(l), b == c.ma) {
   							if (m = Pd(h, k), !he(m)) return q.return(!1)
   						} else if (b == c.ga ? k = Re(k) : b == c.U && (k = Se(k, h)), n =
   					Td(a, h, k), p = Rd(h, k), !mb(n) && !lc(p)) return q.return(!1);
   				return q.return(!0)
   			})
   		}
   		r = Gj.prototype;
   		r.destroy = function() {
   			return this.J.destroy()
   		};

   		function Ij(a) {
   			var b, c, d, e, f, g, h, k;
   			return O(function(l) {
   				if (1 == l.g) {
   					b = [];
   					for (c in a.j)
   						for (d = a.j[c], e = d[0], a.j[c] = d.slice(0, 1), e && b.push(e.p.catch(qe)), f = t(d.slice(1)), g = f.next(); !g.done; g = f.next()) h = g.value, h.p.reject(new T(2, 7, 7003, void 0));
   					a.g && b.push(a.g.destroy());
   					a.F && b.push(a.F.destroy());
   					for (k in a.m) b.push(a.m[k].destroy());
   					return E(l, Promise.all(b), 2)
   				}
   				a.o && (a.o.release(), a.o = null);
   				a.i && (a.i.removeAttribute("src"), a.i.load(), a.i = null);
   				a.A = null;
   				a.l = null;
   				a.g = null;
   				a.F = null;
   				a.h = {};
   				a.m = {};
   				a.H = null;
   				a.j = {};
   				a.S = null;
   				a.K = null;
   				F(l)
   			})
   		}
   		r.init = function(a, b, c, d) {
   			b = void 0 === b ? !1 : b;
   			c = void 0 === c ? "UNKNOWN" : c;
   			d = void 0 === d ? !1 : d;
   			var e = this,
   				f, g, h, k, l;
   			return O(function(m) {
   				switch (m.g) {
   					case 1:
   						return f = Nd, E(m, e.M, 2);
   					case 2:
   						e.B = b, e.aa = c, e.oa = d, e.za = !e.B && "HLS" == e.aa && !e.oa, e.K = null, g = t(a.keys()), h = g.next();
   					case 3:
   						if (h.done) {
   							m.u(0);
   							break
   						}
   						k = h.value;
   						l = a.get(k);
   						return E(m, Lj(e, k, l, l.codecs), 6);
   					case 6:
   						e.s ? (e.j[f.U] = [], e.j[f.ga] = []) : e.j[k] = [], h = g.next(), m.u(3)
   				}
   			})
   		};

   		function Lj(a, b, c, d) {
   			var e, f, g, h, k, l, m, n, p, q, u, v;
   			return O(function(w) {
   				switch (w.g) {
   					case 1:
   						return e = Nd, f = Sa, g = Ta, E(w, Kj(c, b), 2);
   					case 2:
   						g.call(f, w.h, "Type negotiation should happen before MediaSourceEngine.init!");
   						h = Pd(c.mimeType, d);
   						if (b == e.ma) {
   							Mj(a, h, a.B, c.external);
   							w.u(0);
   							break
   						}
   						k = a.A.forceTransmux;
   						if (!mb(h) || !a.B && Qd.includes(h)) k = !0;
   						l = Rd(c.mimeType, d);
   						if (!k) {
   							w.u(4);
   							break
   						}
   						m = Jd(e.U, (d || "").split(","));
   						n = Jd(e.ga, (d || "").split(","));
   						if (!m || !n) {
   							w.u(5);
   							break
   						}
   						a.s = !0;
   						return E(w, Lj(a, e.U, c, m), 6);
   					case 6:
   						return E(w,
   							Lj(a, e.ga, c, n), 7);
   					case 7:
   						return w.return();
   					case 5:
   						if (p = lc(l)) q = p(), a.m[b] = q, h = q.convertCodecs(b, l);
   					case 4:
   						u = h + a.A.addExtraFeaturesToSourceBuffer(h);
   						sg(a.J);
   						try {
   							v = a.l.addSourceBuffer(u)
   						} catch (A) {
   							throw new T(2, 3, 3015, A, "The mediaSource_ status was " + a.l.readyState + " expected 'open'", null);
   						}
   						a.B && (v.mode = Nj);
   						a.o.D(v, "error", function() {
   							var A = a.j[b][0];
   							A.p.reject(new T(2, 3, 3014, a.i.error ? a.i.error.code : 0, A.uri))
   						});
   						a.o.D(v, "updateend", function() {
   							return Oj(a, b)
   						});
   						a.h[b] = v;
   						a.G[b] = h;
   						a.na[b] = !!c.drmInfos.length;
   						F(w)
   				}
   			})
   		}
   		r.configure = function(a) {
   			this.A = a;
   			this.g && (this.g.A = a.modifyCueCallback)
   		};

   		function Mj(a, b, c, d) {
   			a.g || (a.g = new ge(a.F), a.g && (a.g.A = a.A.modifyCueCallback));
   			var e = a.g;
   			d = d || a.ba;
   			a = a.aa;
   			"application/cea-608" == b || "application/cea-708" == b ? e.i = null : (e.i = (0, ie[b])(), e.i.setSequenceMode ? e.i.setSequenceMode(c) : qb("Text parsers w/ setSequenceMode", 'Text parsers should have a "setSequenceMode" method!'), e.i.setManifestType ? e.i.setManifestType(a) : qb("Text parsers w/ setManifestType", 'Text parsers should have a "setManifestType" method!'), e.B = d)
   		}

   		function Pj(a) {
   			return a.C ? !1 : a.l ? "ended" == a.l.readyState : !0
   		}

   		function Qj(a, b) {
   			a.C || !Object.keys(a.h).length ? a = null : b == Ld ? a = a.g.g : (a = Rj(a, b), a = !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : 1 == a.length && 0 > a.start(0) ? 0 : a.length ? a.start(0) : null);
   			return a
   		}

   		function Sj(a, b) {
   			return a.C ? null : b == Ld ? a.g.h : Fi(Rj(a, b))
   		}

   		function Tj(a, b, c) {
   			if (a.C) return 0;
   			if (b == Ld) return a = a.g, null == a.h || a.h < c ? 0 : a.h - Math.max(c, a.g);
   			a = Rj(a, b);
   			return Hi(a, c)
   		}
   		r.rb = function() {
   			var a = {
   				total: this.C ? [] : Ii(this.i.buffered),
   				audio: this.C ? [] : Ii(Rj(this, "audio")),
   				video: this.C ? [] : Ii(Rj(this, "video")),
   				text: []
   			};
   			if (this.g) {
   				var b = this.g.g,
   					c = this.g.h;
   				null != b && null != c && a.text.push({
   					start: b,
   					end: c
   				})
   			}
   			return a
   		};

   		function Rj(a, b) {
   			try {
   				return a.h[b].buffered
   			} catch (c) {
   				return null
   			}
   		}

   		function Uj(a, b, c, d, e, f) {
   			var g = null,
   				h = Ab(c);
   			if (Qd.includes(e)) f = Pi(h), f.length && d && ((b = f.find(function(n) {
   				return "com.apple.streaming.transportStreamTimestamp" === n.description
   			})) && b.data && (g = Math.round(b.data) / 1E3), a.ua([{
   				cueTime: d.startTime,
   				data: h,
   				frames: f,
   				dts: d.startTime,
   				pts: d.startTime
   			}], 0, d.endTime));
   			else if (e.includes("/mp4") && d && 0 == d.timestampOffset && d.ea && d.ea.timescale) {
   				var k = d.ea.timescale;
   				if (!isNaN(k)) {
   					var l = 0,
   						m = !1;
   					(new Cg).box("moof", Hg).box("traf", Hg).P("tfdt", function(n) {
   						l = Si(n.reader,
   							n.version).baseMediaDecodeTime / k;
   						m = !0;
   						n.parser.stop()
   					}).parse(c, !0);
   					m && (g = l)
   				}
   			} else e.includes("/mp4") || e.includes("/webm") || !wj(h) || (a.K ? a.K.clearData() : a.K = new pj, h = a.K.parse(h), b = h.getStartTime(b), null != b && (g = b), h = h.getMetadata(), h.length && a.ua(h, f, d ? d.endTime : null));
   			return g
   		}

   		function Vj(a, b, c, d, e, f, g, h, k, l) {
   			g = void 0 === g ? !1 : g;
   			h = void 0 === h ? !1 : h;
   			k = void 0 === k ? !1 : k;
   			l = void 0 === l ? !1 : l;
   			var m, n, p, q, u, v, w, A, z, y, B;
   			return O(function(C) {
   				switch (C.g) {
   					case 1:
   						m = Nd;
   						if (b != m.ma) {
   							C.u(2);
   							break
   						}
   						if (!a.B) {
   							C.u(3);
   							break
   						}
   						return E(C, a.fa, 4);
   					case 4:
   						n = C.h, a.g.s = n;
   					case 3:
   						return E(C, je(a.g, c, d ? d.startTime : null, d ? d.endTime : null, d ? d.L()[0] : null), 5);
   					case 5:
   						return C.return();
   					case 2:
   						if (l || !a.s) {
   							C.u(6);
   							break
   						}
   						return E(C, Vj(a, m.U, c, d, e, f, g, h, k, !0), 7);
   					case 7:
   						return E(C, Vj(a, m.ga, c, d, e, f, g, h, k, !0), 8);
   					case 8:
   						return C.return();
   					case 6:
   						if (!a.h[b]) return C.return();
   						p = a.h[b].timestampOffset;
   						q = a.G[b];
   						a.m[b] && (q = a.m[b].getOriginalMimeType());
   						d && (u = Uj(a, b, c, d, q, p), null != u && (v = d.startTime - u, w = Math.abs(p - v), (.001 <= w || g || h) && (!k || 0 < v || !p) && (p = v, a.za && (Wj(a, b, function() {
   							return Xj(a, b)
   						}, null), Wj(a, b, function() {
   							return Yj(a, b, p)
   						}, null))), A = b == m.ga || !(m.ga in a.h), a.B && A && a.fa.resolve(p)));
   						f && b == m.ga && (a.g || Mj(a, "application/cea-608", a.B, !1), a.H || (z = q.split(";", 1)[0], a.H = new Gb(z)), d ? (y = a.H.i(c), y.length && oe(a.g, y, d.startTime, d.endTime,
   							p)) : a.H.init(c, h));
   						if (!a.m[b]) {
   							C.u(9);
   							break
   						}
   						return E(C, a.m[b].transmux(c, e, d, a.l.duration, b), 10);
   					case 10:
   						c = C.h;
   					case 9:
   						return c = Zj(a, c, d ? d.startTime : null, b, d ? d.L()[0] : null), d && a.B && b != m.ma && (g || h) && (B = d.startTime, Wj(a, b, function() {
   							return Xj(a, b)
   						}, null), Wj(a, b, function() {
   							return Yj(a, b, B)
   						}, null)), E(C, Wj(a, b, function() {
   							var D = c;
   							if ("video" == b && a.S) {
   								var J = a.S;
   								J.g && J.g.appendBuffer(D, "video", J.o, -p)
   							}
   							a.h[b].appendBuffer(D)
   						}, d ? d.L()[0] : null), 11);
   					case 11:
   						F(C)
   				}
   			})
   		}

   		function ak(a, b) {
   			var c = Sj(a, "video") || 0;
   			me(a.g, b, c)
   		}

   		function bk(a) {
   			a.g && me(a.g, "", 0)
   		}
   		r.remove = function(a, b, c) {
   			var d = this,
   				e;
   			return O(function(f) {
   				return 1 == f.g ? (e = Nd, a == e.ma ? E(f, d.g.remove(b, c), 0) : E(f, Wj(d, a, function() {
   					return ck(d, a, b, c)
   				}, null), 4)) : d.s ? E(f, Wj(d, e.U, function() {
   					return ck(d, e.U, b, c)
   				}, null), 0) : f.u(0)
   			})
   		};

   		function dk(a, b) {
   			var c;
   			return O(function(d) {
   				return 1 == d.g ? (c = Nd, b == c.ma ? a.g ? E(d, a.g.remove(0, Infinity), 0) : d.return() : E(d, Wj(a, b, function() {
   					return ck(a, b, 0, a.l.duration)
   				}, null), 4)) : a.s ? E(d, Wj(a, c.U, function() {
   					return ck(a, c.U, 0, a.l.duration)
   				}, null), 0) : d.u(0)
   			})
   		}
   		r.flush = function(a) {
   			var b = this,
   				c;
   			return O(function(d) {
   				return 1 == d.g ? (c = Nd, a == c.ma ? d.return() : E(d, Wj(b, a, function() {
   					b.i.currentTime -= .001;
   					Oj(b, a)
   				}, null), 2)) : b.s ? E(d, Wj(b, c.U, function() {
   					var e = c.U;
   					b.i.currentTime -= .001;
   					Oj(b, e)
   				}, null), 0) : d.u(0)
   			})
   		};

   		function ek(a, b, c, d, e, f, g, h, k) {
   			var l, m, n;
   			return O(function(p) {
   				if (1 == p.g) {
   					l = Nd;
   					if (b == l.ma) return f || (a.g.s = c), le(a.g, d, e), p.return();
   					m = [];
   					return E(p, fk(a, b, g, h, k), 2)
   				}
   				n = p.h;
   				n || (m.push(Wj(a, b, function() {
   					return Xj(a, b)
   				}, null)), a.s && m.push(Wj(a, l.U, function() {
   					return Xj(a, l.U)
   				}, null)));
   				f || (m.push(Wj(a, b, function() {
   					return Yj(a, b, c)
   				}, null)), a.s && m.push(Wj(a, l.U, function() {
   					return Yj(a, l.U, c)
   				}, null)));
   				m.push(Wj(a, b, function() {
   					a.h[b].appendWindowStart = 0;
   					a.h[b].appendWindowEnd = e;
   					a.h[b].appendWindowStart = d;
   					Oj(a,
   						b)
   				}, null));
   				a.s && m.push(Wj(a, l.U, function() {
   					var q = l.U;
   					a.h[q].appendWindowStart = 0;
   					a.h[q].appendWindowEnd = e;
   					a.h[q].appendWindowStart = d;
   					Oj(a, q)
   				}, null));
   				return E(p, Promise.all(m), 0)
   			})
   		}

   		function gk(a, b, c) {
   			var d;
   			return O(function(e) {
   				if (1 == e.g) {
   					d = Nd;
   					if (b == d.ma) return e.return();
   					b == d.ga && (a.fa = new Sf);
   					Wj(a, b, function() {
   						return Xj(a, b)
   					}, null);
   					a.s && Wj(a, d.U, function() {
   						return Xj(a, d.U)
   					}, null);
   					return E(e, Wj(a, b, function() {
   						return Yj(a, b, c)
   					}, null), 2)
   				}
   				return a.s ? E(e, Wj(a, d.U, function() {
   					return Yj(a, d.U, c)
   				}, null), 0) : e.u(0)
   			})
   		}
   		r.endOfStream = function(a) {
   			var b = this;
   			return O(function(c) {
   				return E(c, hk(b, function() {
   					Pj(b) || "closed" === b.l.readyState || (a ? b.l.endOfStream(a) : b.l.endOfStream())
   				}), 0)
   			})
   		};
   		r.Ta = function(a) {
   			var b = this;
   			return O(function(c) {
   				return E(c, hk(b, function() {
   					if (a < b.l.duration)
   						for (var d in b.h) {
   							var e = {
   								start: function() {},
   								p: new Sf,
   								uri: null
   							};
   							b.j[d].unshift(e)
   						}
   					b.l.duration = a;
   					b.V = a
   				}), 0)
   			})
   		};
   		r.getDuration = function() {
   			return this.l.duration
   		};

   		function ck(a, b, c, d) {
   			d <= c ? Oj(a, b) : a.h[b].remove(c, d)
   		}

   		function Xj(a, b) {
   			var c = a.h[b].appendWindowStart,
   				d = a.h[b].appendWindowEnd;
   			a.h[b].abort();
   			a.h[b].appendWindowStart = c;
   			a.h[b].appendWindowEnd = d;
   			Oj(a, b)
   		}

   		function Yj(a, b, c) {
   			0 > c && (c += .001);
   			a.h[b].timestampOffset = c;
   			Oj(a, b)
   		}

   		function Oj(a, b) {
   			if (!a.C) {
   				var c = a.j[b][0];
   				c && (c.p.resolve(), ik(a, b))
   			}
   		}

   		function Wj(a, b, c, d) {
   			sg(a.J);
   			c = {
   				start: c,
   				p: new Sf,
   				uri: d
   			};
   			a.j[b].push(c);
   			1 == a.j[b].length && jk(a, b);
   			return c.p
   		}

   		function hk(a, b) {
   			var c, d, e, f, g, h, k;
   			return O(function(l) {
   				switch (l.g) {
   					case 1:
   						sg(a.J);
   						c = [];
   						d = {};
   						for (e in a.h) d.Rc = new Sf, f = {
   							start: function(m) {
   								return function() {
   									return m.Rc.resolve()
   								}
   							}(d),
   							p: d.Rc,
   							uri: null
   						}, a.j[e].push(f), c.push(d.Rc), 1 == a.j[e].length && f.start(), d = {
   							Rc: d.Rc
   						};
   						ua(l, 2);
   						return E(l, Promise.all(c), 4);
   					case 4:
   						wa(l, 3);
   						break;
   					case 2:
   						throw g = ya(l), g;
   					case 3:
   						return ua(l, 5, 6), E(l, b(), 6);
   					case 6:
   						za(l);
   						for (h in a.h) ik(a, h);
   						Ba(l, 0);
   						break;
   					case 5:
   						throw k = ya(l), new T(2, 3, 3015, k, a.i.error || "No error in the media element",
   							null);
   				}
   			})
   		}

   		function ik(a, b) {
   			a.j[b].shift();
   			jk(a, b)
   		}

   		function jk(a, b) {
   			var c = a.j[b][0];
   			if (c) try {
   				c.start()
   			} catch (d) {
   				"QuotaExceededError" == d.name ? c.p.reject(new T(2, 3, 3017, b)) : c.p.reject(new T(2, 3, 3015, d, a.i.error || "No error in the media element", c.uri)), ik(a, b)
   			}
   		}

   		function Zj(a, b, c, d, e) {
   			var f = a.na[d];
   			a.A.insertFakeEncryptionInInit && null == c && f && (Uc() || Sc() || bd()) && "mp4" == Vd(a.G[d]) && (b = si(b, e));
   			return b
   		}

   		function kk(a, b, c, d) {
   			return Wj(a, b, function() {
   				b !== Ld && (ob() && (a.m[b] && (a.m[b].destroy(), delete a.m[b]), d && (a.m[b] = d), a.h[b].changeType(c + a.A.addExtraFeaturesToSourceBuffer(c)), a.G[b] = c), Oj(a, b))
   			}, null)
   		}

   		function lk(a, b) {
   			var c, d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H;
   			return O(function(I) {
   				switch (I.g) {
   					case 1:
   						c = Nd;
   						a.C = !0;
   						a.s = !1;
   						d = a.i.currentTime;
   						e = a.i.autoplay;
   						f = a.i.paused;
   						a.ca && (a.i.autoplay = !1);
   						va(I, 2);
   						a.o.nb();
   						g = [];
   						for (h in a.m) g.push(a.m[h].destroy());
   						for (k in a.j)
   							for (l = a.j[k], m = l[0], a.j[k] = l.slice(0, 1), m && g.push(m.p.catch(qe)), n = t(l.slice(1)), p = n.next(); !p.done; p = n.next()) q = p.value, q.p.reject(new T(2, 7, 7003, void 0));
   						for (u in a.h) {
   							v = a.h[u];
   							try {
   								a.l.removeSourceBuffer(v)
   							} catch (G) {}
   						}
   						return E(I,
   							Promise.all(g), 4);
   					case 4:
   						return a.m = {}, a.h = {}, w = a.l.duration, a.M = new Sf, a.l = Hj(a, a.M), E(I, a.M, 5);
   					case 5:
   						!isNaN(w) && w ? a.l.duration = w : !isNaN(a.V) && a.V && (a.l.duration = a.V), A = new Sf, z = a.l.sourceBuffers, y = b.size, B = 0, C = function() {
   							B++;
   							B === y && (A.resolve(), a.o.Hb(z, "addsourcebuffer", C))
   						}, a.o.D(z, "addsourcebuffer", C), D = t(b.keys()), J = D.next();
   					case 6:
   						if (J.done) return a.i.currentTime = d, E(I, A, 2);
   						K = J.value;
   						H = b.get(K);
   						return E(I, Lj(a, K, H, H.codecs), 9);
   					case 9:
   						a.s ? (a.j[c.U] = [], a.j[c.ga] = []) : a.j[K] = [];
   						J = D.next();
   						I.u(6);
   						break;
   					case 2:
   						za(I), a.C = !1, sg(a.J), a.o.qa(a.i, "canplaythrough", function() {
   							a.J.g || (a.i.autoplay = e, f || a.i.play())
   						}), Ba(I, 0)
   				}
   			})
   		}

   		function mk(a, b) {
   			return hk(a, function() {
   				return lk(a, b)
   			})
   		}

   		function fk(a, b, c, d, e) {
   			var f, g, h, k, l, m, n, p, q, u, v, w, A, z, y;
   			return O(function(B) {
   				if (1 == B.g) {
   					f = Nd;
   					if (b == f.ma) return B.return(!1);
   					g = Yd($d(a.G[b]));
   					h = Zd(a.G[b]);
   					l = !1;
   					m = Pd(c, d);
   					n = a.A.forceTransmux;
   					if (!mb(m) || !a.B && Qd.includes(m)) n = !0;
   					n && (p = Rd(c, d), q = lc(p)) && (k = q(), u = Jd(f.U, (d || "").split(",")), v = Jd(f.ga, (d || "").split(",")), u && v ? (l = !0, w = v, b == f.U && (w = u), m = k.convertCodecs(b, Rd(c, w))) : m = k.convertCodecs(b, p));
   					A = Yd($d(m));
   					z = Zd(m);
   					if (g === A && h === z) return B.return(!1);
   					y = !0;
   					if (a.s || l && k && !a.m[b]) y = !1;
   					if (y && "smooth" ===
   						a.A.codecSwitchingStrategy && ob()) return E(B, kk(a, b, m, k), 3);
   					k && k.destroy();
   					return E(B, mk(a, e), 3)
   				}
   				return B.return(!0)
   			})
   		}

   		function nk(a, b, c, d) {
   			if (b == Ld) var e = !1;
   			else {
   				e = Yd($d(a.G[b]));
   				var f = Zd(a.G[b]),
   					g = Pd(c, d),
   					h = a.A.forceTransmux;
   				if (!mb(g) || !a.B && Qd.includes(g)) h = !0;
   				c = Rd(c, d);
   				h && (h = lc(c)) && (h = h(), g = h.convertCodecs(b, c), h.destroy());
   				b = Yd($d(g));
   				g = Zd(g);
   				e = e !== b || f !== g
   			}
   			return e ? "smooth" !== a.A.codecSwitchingStrategy || !ob() || a.s : !1
   		}
   		var Jj = window.URL.createObjectURL,
   			Nj = "sequence";

   		function ok(a, b, c) {
   			this.i = a;
   			this.s = b;
   			this.m = this.j = Infinity;
   			this.g = 1;
   			this.h = this.l = null;
   			this.A = 0;
   			this.F = !0;
   			this.G = 0;
   			this.C = void 0 === c ? !0 : c;
   			this.H = 0;
   			this.o = !1;
   			this.B = null
   		}
   		r = ok.prototype;
   		r.getDuration = function() {
   			return this.j
   		};
   		r.Fh = function() {
   			return this.g
   		};
   		r.Pg = function(a) {
   			this.i = a
   		};
   		r.Ta = function(a) {
   			this.j = a
   		};
   		r.Kh = function() {
   			return this.i
   		};
   		r.Ng = function(a) {
   			this.A = a
   		};
   		r.lc = function(a) {
   			this.F = a
   		};
   		r.te = function(a) {
   			this.m = a
   		};
   		r.Wd = function() {
   			return this.m
   		};
   		r.Lf = function(a) {
   			this.s = a
   		};
   		r.yh = function() {
   			return this.s
   		};
   		r.Eg = function(a, b) {
   			if (0 != a.length) {
   				var c = a[a.length - 1].end + b;
   				this.ke(a[0].start + b);
   				this.g = a.reduce(function(d, e) {
   					return Math.max(d, e.end - e.start)
   				}, this.g);
   				this.h = Math.max(this.h, c);
   				null != this.i && this.C && !this.o && (this.i = (Date.now() + this.A) / 1E3 - this.h - this.g)
   			}
   		};
   		r.vd = function(a) {
   			if (0 != a.length) {
   				var b = a[0].startTime,
   					c = a[0].endTime,
   					d = (Date.now() + this.A) / 1E3;
   				a = t(a);
   				for (var e = a.next(); !e.done; e = a.next()) e = e.value, d < e.startTime || (b = Math.min(b, e.startTime), c = Math.max(c, e.endTime), this.g = Math.max(this.g, e.endTime - e.startTime));
   				this.ke(b);
   				this.h = Math.max(this.h, c);
   				null != this.i && this.C && !this.o && (this.i = d - this.h - this.g)
   			}
   		};
   		r.ce = function() {
   			this.o = !0
   		};
   		r.di = function() {
   			return this.o
   		};
   		r.Og = function(a) {
   			this.B = a
   		};
   		r.Ch = function() {
   			return this.B
   		};
   		r.ke = function(a) {
   			this.l = null == this.l ? a : Math.min(this.l, a)
   		};
   		r.uf = function(a) {
   			this.g = Math.max(this.g, a)
   		};
   		r.offset = function(a) {
   			null != this.l && (this.l += a);
   			null != this.h && (this.h += a)
   		};
   		r.T = function() {
   			return Infinity == this.j && !this.F
   		};
   		r.ec = function() {
   			return Infinity != this.j && !this.F
   		};
   		r.jb = function() {
   			return Math.max(this.G, this.Mb() - this.m)
   		};
   		r.Tg = function(a) {
   			this.G = a
   		};
   		r.Mb = function() {
   			return this.T() || this.ec() ? Math.min(Math.max(0, (Date.now() + this.A) / 1E3 - this.g - this.i) + this.H, this.j) : this.h ? Math.min(this.h, this.j) : this.j
   		};
   		r.kd = function(a) {
   			var b = Math.max(this.l, this.G);
   			return Infinity == this.m ? Math.ceil(1E3 * b) / 1E3 : Math.max(b, Math.min(this.Mb() - this.m + a, this.sb()))
   		};
   		r.ac = function() {
   			return this.kd(0)
   		};
   		r.sb = function() {
   			return Math.max(0, this.Mb() - (this.T() || this.ec() ? this.s : 0))
   		};
   		r.Xg = function() {
   			return null == this.i || null != this.h && this.C ? !1 : !0
   		};
   		r.Mg = function(a) {
   			this.H = a
   		};
   		S("gowatch.media.PresentationTimeline", ok);
   		ok.prototype.setAvailabilityTimeOffset = ok.prototype.Mg;
   		ok.prototype.usingPresentationStartTime = ok.prototype.Xg;
   		ok.prototype.getSeekRangeEnd = ok.prototype.sb;
   		ok.prototype.getSeekRangeStart = ok.prototype.ac;
   		ok.prototype.getSafeSeekRangeStart = ok.prototype.kd;
   		ok.prototype.getSegmentAvailabilityEnd = ok.prototype.Mb;
   		ok.prototype.setUserSeekStart = ok.prototype.Tg;
   		ok.prototype.getSegmentAvailabilityStart = ok.prototype.jb;
   		ok.prototype.isInProgress = ok.prototype.ec;
   		ok.prototype.isLive = ok.prototype.T;
   		ok.prototype.offset = ok.prototype.offset;
   		ok.prototype.notifyMaxSegmentDuration = ok.prototype.uf;
   		ok.prototype.notifyMinSegmentStartTime = ok.prototype.ke;
   		ok.prototype.getInitialProgramDateTime = ok.prototype.Ch;
   		ok.prototype.setInitialProgramDateTime = ok.prototype.Og;
   		ok.prototype.isStartTimeLocked = ok.prototype.di;
   		ok.prototype.lockStartTime = ok.prototype.ce;
   		ok.prototype.notifySegments = ok.prototype.vd;
   		ok.prototype.notifyTimeRange = ok.prototype.Eg;
   		ok.prototype.getDelay = ok.prototype.yh;
   		ok.prototype.setDelay = ok.prototype.Lf;
   		ok.prototype.getSegmentAvailabilityDuration = ok.prototype.Wd;
   		ok.prototype.setSegmentAvailabilityDuration = ok.prototype.te;
   		ok.prototype.setStatic = ok.prototype.lc;
   		ok.prototype.setClockOffset = ok.prototype.Ng;
   		ok.prototype.getPresentationStartTime = ok.prototype.Kh;
   		ok.prototype.setDuration = ok.prototype.Ta;
   		ok.prototype.setPresentationStartTime = ok.prototype.Pg;
   		ok.prototype.getMaxSegmentDuration = ok.prototype.Fh;
   		ok.prototype.getDuration = ok.prototype.getDuration;

   		function pk(a, b, c) {
   			this.j = c;
   			this.l = a;
   			this.s = qk(a);
   			this.g = a.g.currentTime;
   			this.m = Date.now() / 1E3;
   			this.h = !1;
   			this.o = 0;
   			this.A = b;
   			this.i = function() {}
   		}
   		pk.prototype.release = function() {
   			this.j = this.l = null;
   			this.i = function() {}
   		};

   		function rk(a, b) {
   			a.i = b
   		}

   		function sk(a) {
   			this.g = a
   		}

   		function qk(a) {
   			if (a.g.paused || 0 == a.g.playbackRate || 0 == a.g.buffered.length) var b = !1;
   			else a: {
   				b = a.g.currentTime;a = t(Ii(a.g.buffered));
   				for (var c = a.next(); !c.done; c = a.next())
   					if (c = c.value, !(b < c.start - .1 || b > c.end - .5)) {
   						b = !0;
   						break a
   					} b = !1
   			}
   			return b
   		};

   		function tk(a, b, c, d, e) {
   			var f = this;
   			this.A = e;
   			this.g = a;
   			this.B = b;
   			this.s = c;
   			this.l = new hb;
   			this.j = !1;
   			this.F = a.readyState;
   			this.C = this.i = 0;
   			this.h = d;
   			this.o = !1;
   			this.l.D(a, "waiting", function() {
   				return uk(f)
   			});
   			this.m = (new Lc(function() {
   				uk(f)
   			})).Ua(this.s.gapJumpTimerTime)
   		}
   		tk.prototype.release = function() {
   			this.l && (this.l.release(), this.l = null);
   			null != this.m && (this.m.stop(), this.m = null);
   			this.h && (this.h.release(), this.h = null);
   			this.g = this.B = this.A = null
   		};
   		tk.prototype.xf = function() {
   			this.o = !0;
   			uk(this)
   		};

   		function uk(a) {
   			if (0 != a.g.readyState) {
   				if (a.g.seeking) {
   					if (!a.j) return
   				} else a.j = !1;
   				if (!a.g.paused || a.g.currentTime == a.i && (a.g.autoplay || a.g.currentTime != a.i)) {
   					a.g.readyState != a.F && (a.F = a.g.readyState);
   					var b;
   					if (!(b = !a.h)) {
   						b = a.h;
   						var c = b.l,
   							d = qk(c),
   							e = c.g.currentTime,
   							f = Date.now() / 1E3;
   						if (b.g != e || b.s != d) b.m = f, b.g = e, b.s = d, b.h = !1;
   						e = f - b.m;
   						if (d = e >= b.A && d && !b.h) b.i(b.g, e), b.h = !0, b.g = c.g.currentTime, b.o++, b.j(new U("stalldetected"));
   						b = !d
   					}
   					if (b && (b = a.g.currentTime, c = a.g.buffered, d = Ji(c, b, a.s.gapDetectionThreshold),
   							null != d && (0 != d || a.o))) {
   						e = c.start(d);
   						if (Rc() || Sc()) e = Math.ceil(100 * (e + .01)) / 100;
   						e >= a.B.sb() || .001 > e - b || (0 != d && c.end(d - 1), a.g.currentTime = e, b == a.i && (a.i = e), a.C++, a.A(new U("gapjumped")))
   					}
   				}
   			}
   		};

   		function vk(a, b, c, d) {
   			b == HTMLMediaElement.HAVE_NOTHING || a.readyState >= b ? d() : (b = wk.value().get(b), c.qa(a, b, d))
   		}
   		var wk = new Jc(function() {
   			return new Map([
   				[HTMLMediaElement.HAVE_METADATA, "loadedmetadata"],
   				[HTMLMediaElement.HAVE_CURRENT_DATA, "loadeddata"],
   				[HTMLMediaElement.HAVE_FUTURE_DATA, "canplay"],
   				[HTMLMediaElement.HAVE_ENOUGH_DATA, "canplaythrough"]
   			])
   		});

   		function xk(a, b, c, d) {
   			var e = this;
   			this.g = a;
   			this.m = b;
   			this.s = c;
   			this.l = null;
   			this.j = function() {
   				null == e.l && (e.l = d());
   				return e.l
   			};
   			this.o = !1;
   			this.h = new hb;
   			this.i = new yk(a);
   			vk(this.g, HTMLMediaElement.HAVE_METADATA, this.h, function() {
   				zk(e, e.j())
   			})
   		}
   		xk.prototype.release = function() {
   			this.h && (this.h.release(), this.h = null);
   			null != this.i && (this.i.release(), this.i = null);
   			this.m = function() {};
   			this.g = null
   		};

   		function Ak(a) {
   			return a.o ? a.g.currentTime : a.j()
   		}

   		function Bk(a, b) {
   			0 < a.g.readyState ? Ck(a.i, b) : vk(a.g, HTMLMediaElement.HAVE_METADATA, a.h, function() {
   				zk(a, a.j())
   			})
   		}

   		function zk(a, b) {
   			.001 > Math.abs(a.g.currentTime - b) ? Dk(a) : (a.h.qa(a.g, "seeking", function() {
   				Dk(a)
   			}), Ck(a.i, a.g.currentTime && 0 != a.g.currentTime ? a.g.currentTime : b))
   		}

   		function Dk(a) {
   			a.o = !0;
   			a.h.D(a.g, "seeking", function() {
   				return a.m()
   			});
   			a.s(a.g.currentTime)
   		}

   		function yk(a) {
   			var b = this;
   			this.h = a;
   			this.m = 10;
   			this.l = this.j = this.i = 0;
   			this.g = new Lc(function() {
   				0 >= b.i ? b.g.stop() : b.h.currentTime != b.j ? b.g.stop() : (b.h.currentTime = b.l, b.i--)
   			})
   		}
   		yk.prototype.release = function() {
   			this.g && (this.g.stop(), this.g = null);
   			this.h = null
   		};

   		function Ck(a, b) {
   			a.j = a.h.currentTime;
   			a.l = b;
   			a.i = a.m;
   			a.h.currentTime = b;
   			a.g.Ua(.1)
   		};

   		function Ek(a) {
   			this.g = a;
   			this.j = !1;
   			this.h = null;
   			this.i = new hb
   		}
   		r = Ek.prototype;
   		r.Fe = function() {
   			function a() {
   				null == b.h || 0 == b.h ? b.j = !0 : (b.i.qa(b.g, "seeking", function() {
   					b.j = !0
   				}), b.g.currentTime = Math.max(0, b.g.currentTime + b.h))
   			}
   			var b = this;
   			vk(this.g, HTMLMediaElement.HAVE_CURRENT_DATA, this.i, function() {
   				a()
   			})
   		};
   		r.release = function() {
   			this.i && (this.i.release(), this.i = null);
   			this.g = null
   		};
   		r.Ge = function(a) {
   			this.h = this.j ? this.h : a
   		};
   		r.Md = function() {
   			return (this.j ? this.g.currentTime : this.h) || 0
   		};
   		r.bg = function() {
   			return 0
   		};
   		r.ag = function() {
   			return 0
   		};
   		r.Dg = function() {};

   		function Fk(a, b, c, d, e, f) {
   			var g = this;
   			this.i = a;
   			this.g = b.presentationTimeline;
   			this.B = b.minBufferTime || 0;
   			this.l = c;
   			this.A = e;
   			this.s = null;
   			this.o = Gk(a, c, f);
   			this.j = new tk(a, b.presentationTimeline, c, this.o, f);
   			this.h = new xk(a, function() {
   				a: {
   					var h = g.j;h.j = !0;h.o = !1;
   					var k = Ak(g.h);h = Hk(g, k);
   					if (.001 < Math.abs(h - k) && (k = Date.now() / 1E3, !g.s || g.s < k - 1)) {
   						g.s = k;
   						Bk(g.h, h);
   						h = void 0;
   						break a
   					}
   					g.A();h = void 0
   				}
   				return h
   			}, function(h) {
   				var k = g.j;
   				k.g.seeking && !k.j && (k.j = !0, k.i = h)
   			}, function() {
   				var h = d;
   				null == h ? h = Infinity > g.g.getDuration() ?
   					g.g.ac() : g.g.sb() : 0 > h && (h = g.g.sb() + h);
   				return Ik(g, Jk(g, h))
   			});
   			this.m = new Lc(function() {
   				if (0 != g.i.readyState && !g.i.paused) {
   					var h = Ak(g.h),
   						k = g.g.ac(),
   						l = g.g.sb();
   					3 > l - k && (k = l - 3);
   					h < k && (h = Hk(g, h), g.i.currentTime = h)
   				}
   			})
   		}
   		r = Fk.prototype;
   		r.Fe = function() {
   			this.m.Ua(.25)
   		};
   		r.release = function() {
   			this.h && (this.h.release(), this.h = null);
   			this.j && (this.j.release(), this.j = null);
   			this.m && (this.m.stop(), this.m = null);
   			this.i = this.h = this.g = this.l = null;
   			this.A = function() {}
   		};
   		r.Ge = function(a) {
   			Bk(this.h, a)
   		};
   		r.Md = function() {
   			var a = Ak(this.h);
   			return 0 < this.i.readyState && !this.i.paused ? Jk(this, a) : a
   		};
   		r.bg = function() {
   			return this.o ? this.o.o : 0
   		};
   		r.ag = function() {
   			return this.j.C
   		};
   		r.Dg = function() {
   			this.j.xf()
   		};

   		function Ik(a, b) {
   			var c = a.g.getDuration();
   			return b >= c ? c - a.l.durationBackoff : b
   		}

   		function Hk(a, b) {
   			var c = Math.max(a.B, a.l.rebufferingGoal),
   				d = a.l.safeSeekOffset,
   				e = a.g.ac(),
   				f = a.g.sb(),
   				g = a.g.getDuration();
   			3 > f - e && (e = f - 3);
   			var h = a.g.kd(c),
   				k = a.g.kd(d);
   			c = a.g.kd(c + d);
   			return b >= g ? Ik(a, b) : b > f ? f : b < e ? Gi(a.i.buffered, k) ? k : c : b >= h || Gi(a.i.buffered, b) ? b : c
   		}

   		function Jk(a, b) {
   			var c = a.g.ac();
   			if (b < c) return c;
   			a = a.g.sb();
   			return b > a ? a : b
   		}

   		function Gk(a, b, c) {
   			if (!b.stallEnabled) return null;
   			var d = b.stallSkip;
   			b = new pk(new sk(a), b.stallThreshold, c);
   			rk(b, function() {
   				d ? a.currentTime += d : (a.pause(), a.play())
   			});
   			return b
   		};

   		function Kk(a) {
   			this.g = a;
   			this.m = null;
   			this.j = 0;
   			this.o = !1
   		}
   		r = Kk.prototype;
   		r.getNumReferences = function() {
   			return this.g.length
   		};
   		r.getNumEvicted = function() {
   			return this.j
   		};
   		r.release = function() {
   			this.o || (this.g = [], this.m && this.m.stop(), this.m = null)
   		};
   		r.ji = function() {
   			this.o = !0
   		};
   		r.wc = function(a) {
   			for (var b = t(this.g), c = b.next(); !c.done; c = b.next()) a(c.value)
   		};
   		r.find = function(a) {
   			for (var b = this.g.length - 1, c = b; 0 <= c; --c) {
   				var d = this.g[c],
   					e = c < b ? this.g[c + 1].startTime : d.endTime;
   				if (a >= d.startTime && a < e) return c + this.j
   			}
   			return this.g.length && a < this.g[0].startTime ? this.j : null
   		};
   		r.get = function(a) {
   			if (0 == this.g.length) return null;
   			a -= this.j;
   			return 0 > a || a >= this.g.length ? null : this.g[a]
   		};
   		r.offset = function(a) {
   			if (!this.o)
   				for (var b = t(this.g), c = b.next(); !c.done; c = b.next()) c.value.offset(a)
   		};
   		r.ge = function(a) {
   			if (!this.o && a.length) {
   				var b = Math.round(1E3 * a[0].startTime) / 1E3;
   				this.g = this.g.filter(function(c) {
   					return Math.round(1E3 * c.startTime) / 1E3 < b
   				});
   				this.g.push.apply(this.g, x(a))
   			}
   		};
   		r.ud = function(a, b) {
   			var c = this;
   			a = a.filter(function(d) {
   				return d.endTime > b && (0 == c.g.length || d.endTime > c.g[0].startTime)
   			});
   			this.ge(a);
   			this.Ha(b)
   		};
   		r.Ha = function(a) {
   			if (!this.o) {
   				var b = this.g.length;
   				this.g = this.g.filter(function(c) {
   					return c.endTime > a
   				});
   				this.j += b - this.g.length
   			}
   		};
   		r.vc = function(a, b, c) {
   			c = void 0 === c ? !1 : c;
   			if (!this.o) {
   				for (; this.g.length;)
   					if (this.g[this.g.length - 1].startTime >= b) this.g.pop();
   					else break;
   				for (; this.g.length;)
   					if (this.g[0].endTime <= a) this.g.shift(), c || this.j++;
   					else break;
   				0 != this.g.length && (a = this.g[this.g.length - 1], b = new Bi(a.startTime, b, a.C, a.Ba, a.ja, a.ea, a.timestampOffset, a.appendWindowStart, a.appendWindowEnd, a.g, a.tilesLayout, a.A, a.h, a.status, a.aesKey), b.mimeType = a.mimeType, b.codecs = a.codecs, b.j = a.j, this.g[this.g.length - 1] = b)
   			}
   		};
   		r.ue = function(a, b) {
   			var c = this;
   			this.o || (this.m && this.m.stop(), this.m = new Lc(function() {
   				var d = b();
   				d ? c.g.push.apply(c.g, x(d)) : (c.m.stop(), c.m = null)
   			}), this.m.Ua(a))
   		};
   		Kk.prototype[Symbol.iterator] = function() {
   			return this.Ab(0)
   		};
   		Kk.prototype.Ab = function(a, b, c) {
   			b = void 0 === b ? !1 : b;
   			c = void 0 === c ? !1 : c;
   			var d = this.find(a);
   			if (null == d) return null;
   			d--;
   			var e = this.get(d + 1),
   				f = -1;
   			if (e && 0 < e.g.length)
   				for (var g = e.g.length - 1; 0 <= g; --g) {
   					var h = e.g[g];
   					if (a >= h.startTime && a < h.endTime) {
   						if (!b) {
   							for (; g && !h.l;) g--, h = e.g[g];
   							if (!h.l) return $a("No independent partial segment found!"), null
   						}
   						d++;
   						f = g - 1;
   						break
   					}
   				}
   			return new Lk(this, d, f, c)
   		};

   		function Mk(a, b, c) {
   			a = new Bi(a, a + b, function() {
   				return c
   			}, 0, null, null, a, a, a + b);
   			return new Kk([a])
   		}
   		S("gowatch.media.SegmentIndex", Kk);
   		Kk.forSingleSegment = Mk;
   		Kk.prototype.getIteratorForTime = Kk.prototype.Ab;
   		Kk.prototype.updateEvery = Kk.prototype.ue;
   		Kk.prototype.fit = Kk.prototype.vc;
   		Kk.prototype.evict = Kk.prototype.Ha;
   		Kk.prototype.mergeAndEvict = Kk.prototype.ud;
   		Kk.prototype.offset = Kk.prototype.offset;
   		Kk.prototype.get = Kk.prototype.get;
   		Kk.prototype.find = Kk.prototype.find;
   		Kk.prototype.markImmutable = Kk.prototype.ji;
   		Kk.prototype.release = Kk.prototype.release;
   		Kk.prototype.getNumEvicted = Kk.prototype.getNumEvicted;
   		Kk.prototype.getNumReferences = Kk.prototype.getNumReferences;

   		function Lk(a, b, c, d) {
   			this.i = a;
   			this.h = b;
   			this.g = c;
   			this.reverse = d
   		}
   		Lk.prototype.se = function(a) {
   			this.reverse = a
   		};
   		Lk.prototype.rh = function() {
   			return this.h
   		};
   		Lk.prototype.current = function() {
   			var a = this.i.get(this.h);
   			a && 0 < a.g.length && a.o && this.g >= a.g.length && (this.h++, this.g = 0, a = this.i.get(this.h));
   			return a && 0 < a.g.length ? a.g[this.g] : a
   		};
   		Lk.prototype.next = function() {
   			var a = this.i.get(this.h);
   			this.reverse ? a && 0 < a.g.length ? (this.g--, 0 > this.g && (this.h--, this.g = (a = this.i.get(this.h)) && 0 < a.g.length ? a.g.length - 1 : 0)) : (this.h--, this.g = 0) : a && 0 < a.g.length ? (this.g++, a.o && this.g == a.g.length && (this.h++, this.g = 0)) : (this.h++, this.g = 0);
   			a = this.current();
   			return {
   				value: a,
   				done: !a
   			}
   		};
   		S("gowatch.media.SegmentIterator", Lk);
   		Lk.prototype.next = Lk.prototype.next;
   		Lk.prototype.current = Lk.prototype.current;
   		Lk.prototype.currentPosition = Lk.prototype.rh;
   		Lk.prototype.setReverse = Lk.prototype.se;

   		function Nk() {
   			Kk.call(this, []);
   			this.h = []
   		}
   		oa(Nk, Kk);
   		r = Nk.prototype;
   		r.clone = function() {
   			var a = new Nk;
   			a.h = this.h.slice();
   			return a
   		};
   		r.release = function() {
   			for (var a = t(this.h), b = a.next(); !b.done; b = a.next()) b.value.release();
   			this.h = []
   		};
   		r.wc = function(a) {
   			for (var b = t(this.h), c = b.next(); !c.done; c = b.next()) c.value.wc(a)
   		};
   		r.find = function(a) {
   			for (var b = 0, c = t(this.h), d = c.next(); !d.done; d = c.next()) {
   				d = d.value;
   				var e = d.find(a);
   				if (null != e) return e + b;
   				b += d.getNumEvicted() + d.getNumReferences()
   			}
   			return null
   		};
   		r.get = function(a) {
   			for (var b = 0, c = t(this.h), d = c.next(); !d.done; d = c.next()) {
   				d = d.value;
   				var e = d.get(a - b);
   				if (e) return e;
   				e = d.getNumReferences();
   				b += d.getNumEvicted() + e
   			}
   			return null
   		};
   		r.offset = function() {};
   		r.ge = function() {};
   		r.Ha = function() {};
   		r.ud = function() {};
   		r.vc = function() {};
   		r.ue = function() {};
   		S("gowatch.media.MetaSegmentIndex", Nk);
   		Nk.prototype.updateEvery = Nk.prototype.ue;
   		Nk.prototype.fit = Nk.prototype.vc;
   		Nk.prototype.mergeAndEvict = Nk.prototype.ud;
   		Nk.prototype.evict = Nk.prototype.Ha;
   		Nk.prototype.merge = Nk.prototype.ge;
   		Nk.prototype.offset = Nk.prototype.offset;
   		Nk.prototype.get = Nk.prototype.get;
   		Nk.prototype.find = Nk.prototype.find;
   		Nk.prototype.forEachTopLevelReference = Nk.prototype.wc;
   		Nk.prototype.release = Nk.prototype.release;

   		function Ok(a) {
   			var b = this;
   			this.g = a;
   			this.j = !1;
   			this.i = this.g.Vd();
   			this.h = new Lc(function() {
   				b.g.Cg(.25 * b.i)
   			})
   		}
   		Ok.prototype.release = function() {
   			this.set(this.Yb());
   			this.h && (this.h.stop(), this.h = null);
   			this.g = null
   		};
   		Ok.prototype.set = function(a) {
   			this.i = a;
   			Pk(this)
   		};
   		Ok.prototype.Yb = function() {
   			return this.g.Yb()
   		};

   		function Pk(a) {
   			a.h.stop();
   			var b = a.j ? 0 : a.i;
   			if (0 <= b) try {
   				a.g.Vd() != b && a.g.Of(b);
   				return
   			} catch (c) {}
   			a.h.Ua(.25);
   			0 != a.g.Vd() && a.g.Of(0)
   		};

   		function Qk(a) {
   			var b = this;
   			this.h = a;
   			this.g = new Set;
   			this.i = (new Lc(function() {
   				Rk(b, !1)
   			})).Ua(.25)
   		}
   		Qk.prototype.release = function() {
   			this.i.stop();
   			for (var a = t(this.g), b = a.next(); !b.done; b = a.next()) b.value.release();
   			this.g.clear()
   		};

   		function Rk(a, b) {
   			for (var c = t(a.g), d = c.next(); !d.done; d = c.next()) d.value.j(a.h.currentTime, b)
   		};

   		function Sk() {
   			this.g = null;
   			this.h = []
   		}

   		function Tk(a, b) {
   			var c = 0;
   			a.g && a.g.state == b && (c += a.g.duration);
   			a = t(a.h);
   			for (var d = a.next(); !d.done; d = a.next()) d = d.value, c += d.state == b ? d.duration : 0;
   			return c
   		}

   		function Uk(a) {
   			function b(f) {
   				return {
   					timestamp: f.timestamp,
   					state: f.state,
   					duration: f.duration
   				}
   			}
   			for (var c = [], d = t(a.h), e = d.next(); !e.done; e = d.next()) c.push(b(e.value));
   			a.g && c.push(b(a.g));
   			return c
   		};

   		function Vk() {
   			this.i = this.h = null;
   			this.g = []
   		}

   		function Wk(a, b, c) {
   			a.i != b && (a.i = b, a.g.push({
   				timestamp: Date.now() / 1E3,
   				id: b.id,
   				type: "text",
   				fromAdaptation: c,
   				bandwidth: null
   			}))
   		};

   		function Xk() {
   			this.Nd = this.A = this.B = this.G = this.C = this.s = this.j = this.F = this.m = this.i = this.M = this.N = this.H = this.J = this.K = this.l = this.o = NaN;
   			this.g = new Sk;
   			this.h = new Vk
   		};

   		function Yk(a, b, c) {
   			this.m = a;
   			this.h = b;
   			this.l = 0;
   			this.j = c;
   			this.g = new Map;
   			this.i = new Map
   		}

   		function Zk(a, b) {
   			a.j = b;
   			a = t(a.g.values());
   			for (var c = a.next(); !c.done; c = a.next()) c.value.g = b
   		}

   		function $k(a, b, c) {
   			c = void 0 === c ? !1 : c;
   			if (a.h.segmentIndex && (b = a.h.segmentIndex.Ab(Math.max(b, a.l), !0))) {
   				var d = b.next().value;
   				c && (d = b.next().value);
   				if (d) {
   					for (; a.g.size < a.m && null != d;) {
   						c = !0;
   						d.preload && null != d.ja && (c = !1);
   						2 == d.cc() && (c = !1);
   						c && d.ea && al(a, d.ea);
   						c && !a.g.has(d) && (c = new bl(a.j), cl(c, d, a.h), a.g.set(d, c));
   						a.l = d.startTime;
   						if (a.h.fastSwitching && d.wd && d.be) break;
   						d = b.next().value
   					}
   					dl(a)
   				}
   			}
   		}

   		function al(a, b) {
   			if (a.h.segmentIndex && !Array.from(a.i.keys()).some(function(d) {
   					return Ai(d, b)
   				})) {
   				var c = new bl(a.j);
   				cl(c, b, a.h);
   				a.i.set(b, c)
   			}
   		}

   		function el(a, b) {
   			b = t(b.keys());
   			for (var c = b.next(); !c.done; c = b.next())(c = c.value) && fl(a, c)
   		}

   		function gl(a) {
   			el(a, a.g);
   			el(a, a.i);
   			a.l = 0
   		}
   		Yk.prototype.Ha = function(a, b) {
   			b = void 0 === b ? !1 : b;
   			for (var c = t(this.g.keys()), d = c.next(); !d.done; d = c.next()) d = d.value, a > d.endTime && fl(this, d);
   			b && dl(this)
   		};

   		function dl(a) {
   			for (var b = Array.from(a.g.keys()), c = {}, d = t(a.i.keys()), e = d.next(); !e.done; c = {
   					Gd: c.Gd
   				}, e = d.next()) c.Gd = e.value, b.some(function(f) {
   				return function(g) {
   					return Ai(g.ea, f.Gd)
   				}
   			}(c)) || fl(a, c.Gd)
   		}

   		function hl(a, b) {
   			a.m = b;
   			for (var c = Array.from(a.g.keys()); c.length > b;) {
   				var d = c.pop();
   				d && fl(a, d)
   			}
   			dl(a)
   		}

   		function il(a, b) {
   			b && b !== a.h && (gl(a), a.h = b)
   		}

   		function fl(a, b) {
   			var c = a.g;
   			b instanceof zi && (c = a.i);
   			a = c.get(b);
   			c.delete(b);
   			a && a.abort()
   		}

   		function bl(a) {
   			this.g = a;
   			this.ne = this.Pf = null
   		}

   		function cl(a, b, c) {
   			var d = new Uint8Array(0);
   			a.ne = a.g(b, c, function(e) {
   				return O(function(f) {
   					if (1 == f.g) return 0 < d.byteLength ? d = Bd(d, e) : d = e, a.Pf ? E(f, a.Pf(d), 3) : f.u(0);
   					d = new Uint8Array(0);
   					F(f)
   				})
   			})
   		}
   		bl.prototype.abort = function() {
   			this.ne && this.ne.abort()
   		};

   		function jl(a) {
   			bg.call(this);
   			var b = this;
   			this.g = new Set;
   			this.i = a;
   			this.h = (new Lc(function() {
   				for (var c = b.i(), d = t(b.g), e = d.next(); !e.done; e = d.next()) e = e.value, e.endTime < c.start && (b.g.delete(e), e = new U("regionremove", new Map([
   					["region", e]
   				])), b.dispatchEvent(e))
   			})).Ua(2)
   		}
   		oa(jl, bg);
   		jl.prototype.release = function() {
   			this.g.clear();
   			this.h.stop();
   			bg.prototype.release.call(this)
   		};

   		function kl(a) {
   			bg.call(this);
   			this.g = new Map;
   			this.h = a
   		}
   		oa(kl, bg);
   		kl.prototype.release = function() {
   			this.g.clear();
   			bg.prototype.release.call(this)
   		};

   		function ll(a, b) {
   			var c = a.g.get(b);
   			c || (c = {
   				yd: [],
   				hg: null,
   				contentType: b
   			}, a.g.set(b, c));
   			return c
   		}

   		function ml(a, b, c) {
   			var d = ll(a, b.contentType);
   			nl(a, d);
   			a = {
   				tf: b,
   				position: c
   			};
   			d = d.yd;
   			b = d.findIndex(function(e) {
   				return e.position >= c
   			});
   			0 <= b ? d.splice(b, d[b].position == c ? 1 : 0, a) : d.push(a)
   		}
   		kl.prototype.j = function(a) {
   			for (var b = t(this.g.values()), c = b.next(); !c.done; c = b.next()) {
   				c = c.value;
   				a: {
   					var d = c.yd;
   					for (var e = d.length - 1; 0 <= e; e--) {
   						var f = d[e];
   						if (f.position <= a) {
   							d = f.tf;
   							break a
   						}
   					}
   					d = null
   				}
   				if (e = d) e = c.hg, e = !(e === d || e && d && e.bandwidth == d.bandwidth && e.audioSamplingRate == d.audioSamplingRate && e.codecs == d.codecs && e.contentType == d.contentType && e.frameRate == d.frameRate && e.height == d.height && e.mimeType == d.mimeType && e.channelsCount == d.channelsCount && e.pixelAspectRatio == d.pixelAspectRatio && e.width == d.width);
   				if (e) a: {
   					e = a;f = d.contentType;
   					if ((f = this.h()[f]) && 0 < f.length) {
   						var g = f[f.length - 1].end;
   						if (e >= f[0].start && e < g) {
   							e = !0;
   							break a
   						}
   					}
   					e = !1
   				}
   				e && (c.hg = d, JSON.stringify(d), c = new U("qualitychange", new Map([
   					["quality", d],
   					["position", a]
   				])), this.dispatchEvent(c))
   			}
   		};

   		function nl(a, b) {
   			if ((a = a.h()[b.contentType]) && 0 < a.length) {
   				var c = a[0].start,
   					d = a[a.length - 1].end,
   					e = b.yd;
   				b.yd = e.filter(function(f, g) {
   					return f.position <= c && g + 1 < e.length && e[g + 1].position <= c || f.position >= d ? !1 : !0
   				})
   			} else b.yd = []
   		};

   		function ol(a, b, c, d, e) {
   			a = jg(a, d, e);
   			if (0 != b || null != c) a.headers.Range = c ? "bytes=" + b + "-" + c : "bytes=" + b + "-";
   			return a
   		};

   		function pl(a, b) {
   			var c = this;
   			this.g = b;
   			this.m = a;
   			this.h = null;
   			this.B = 1;
   			this.s = this.j = null;
   			this.H = 0;
   			this.F = !1;
   			this.i = new Map;
   			this.C = !1;
   			this.J = null;
   			this.A = !1;
   			this.l = new rg(function() {
   				return ql(c)
   			});
   			this.K = Date.now() / 1E3;
   			this.o = new Map;
   			this.G = {
   				projection: null,
   				hfov: null
   			}
   		}
   		r = pl.prototype;
   		r.destroy = function() {
   			return this.l.destroy()
   		};

   		function ql(a) {
   			var b, c, d, e, f, g, h;
   			return O(function(k) {
   				if (1 == k.g) {
   					b = [];
   					c = t(a.i.values());
   					for (d = c.next(); !d.done; d = c.next()) e = d.value, rl(e), b.push(sl(e));
   					f = t(a.o.values());
   					for (g = f.next(); !g.done; g = f.next()) h = g.value, gl(h);
   					return E(k, Promise.all(b), 2)
   				}
   				a.i.clear();
   				a.o.clear();
   				a.g = null;
   				a.m = null;
   				a.h = null;
   				F(k)
   			})
   		}
   		r.configure = function(a) {
   			this.h = a;
   			this.J = new Pf({
   				maxAttempts: Math.max(a.retryParameters.maxAttempts, 2),
   				baseDelay: a.retryParameters.baseDelay,
   				backoffFactor: a.retryParameters.backoffFactor,
   				fuzzFactor: a.retryParameters.fuzzFactor,
   				timeout: 0,
   				stallTimeout: 0,
   				connectionTimeout: 0
   			}, !0);
   			if (a.disableAudioPrefetch) {
   				var b = this.i.get("audio");
   				b && b.Z && (gl(b.Z), b.Z = null);
   				b = t(this.o.keys());
   				for (var c = b.next(); !c.done; c = b.next()) c = c.value, gl(this.o.get(c)), this.o.delete(c)
   			}
   			a.disableTextPrefetch && (b = this.i.get(Ld)) &&
   				b.Z && (gl(b.Z), b.Z = null);
   			a.disableVideoPrefetch && (b = this.i.get("video")) && b.Z && (gl(b.Z), b.Z = null);
   			b = t(this.i.keys());
   			for (c = b.next(); !c.done; c = b.next()) c = this.i.get(c.value), c.Z ? (hl(c.Z, a.segmentPrefetchLimit), 0 < a.segmentPrefetchLimit || (c.Z = null)) : 0 < a.segmentPrefetchLimit && (c.Z = tl(this, c.stream));
   			a.disableAudioPrefetch || ul(this)
   		};
   		r.start = function(a) {
   			var b = this;
   			return O(function(c) {
   				if (1 == c.g) return E(c, vl(b, a || new Map), 2);
   				sg(b.l);
   				b.C = !0;
   				F(c)
   			})
   		};

   		function wl(a, b) {
   			var c, d, e, f, g, h, k;
   			O(function(l) {
   				switch (l.g) {
   					case 1:
   						return c = Nd, a.H++, d = a.H, ua(l, 2), E(l, dk(a.g.Y, c.ma), 4);
   					case 4:
   						wa(l, 3);
   						break;
   					case 2:
   						if (e = ya(l), a.g) a.g.onError(e);
   					case 3:
   						f = Pd(b.mimeType, b.codecs), Mj(a.g.Y, f, a.m.sequenceMode, b.external), g = a.g.Y.F, (h = g.isTextVisible() || a.h.alwaysStreamText) && a.H == d && (k = xl(a, b), a.i.set(c.ma, k), yl(a, k, 0)), F(l)
   				}
   			})
   		}

   		function zl(a) {
   			var b = a.i.get(Ld);
   			b && (rl(b), sl(b).catch(function() {}), a.i.delete(Ld));
   			a.s = null
   		}

   		function Al(a, b) {
   			var c = 0 > a.g.ib(),
   				d = a.i.get("video");
   			d && d.$ && d.$.se(c);
   			(d = a.i.get("audio")) && d.$ && d.$.se(c);
   			(d = a.i.get(Ld)) && d.$ && d.$.se(c);
   			if (c = a.i.get("video"))
   				if (d = c.stream)
   					if (b)(b = d.trickModeVideo) && !c.kc && (Bl(a, b, !1, 0, !1), c.kc = d);
   					else if (b = c.kc) c.kc = null, Bl(a, b, !0, 0, !1)
   		}

   		function Cl(a, b, c, d, e, f) {
   			c = void 0 === c ? !1 : c;
   			d = void 0 === d ? 0 : d;
   			e = void 0 === e ? !1 : e;
   			f = void 0 === f ? !1 : f;
   			a.j = b;
   			a.C && (b.video && Bl(a, b.video, c, d, e, f), b.audio && Bl(a, b.audio, c, d, e, f))
   		}

   		function Dl(a, b) {
   			O(function(c) {
   				if (1 == c.g) return a.s = b, a.C ? b.segmentIndex ? c.u(2) : E(c, b.createSegmentIndex(), 2) : c.return();
   				Bl(a, b, !0, 0, !1);
   				F(c)
   			})
   		}

   		function Bl(a, b, c, d, e, f) {
   			var g = a.i.get(b.type);
   			g || b.type != Ld ? g && (g.kc && (b.trickModeVideo ? (g.kc = b, b = b.trickModeVideo) : g.kc = null), g.stream != b || e) && (a.o.has(b) ? g.Z = a.o.get(b) : g.Z && il(g.Z, b), b.type == Ld && (e = Pd(b.mimeType, b.codecs), Mj(a.g.Y, e, a.m.sequenceMode, b.external)), a.o.has(g.stream) || g.stream.closeSegmentIndex && g.stream.closeSegmentIndex(), g.stream = b, g.$ = null, g.cg = !!f, c && (g.ad ? g.ve = !0 : g.Ra ? (g.Qb = !0, g.Rd = d, g.ve = !0) : (rl(g), El(a, g, !0, d).catch(function(h) {
   					if (a.g) a.g.onError(h)
   				}))), Fl(a, g).catch(function(h) {
   					if (a.g) a.g.onError(h)
   				})) :
   				wl(a, b)
   		}

   		function Fl(a, b) {
   			var c, d;
   			return O(function(e) {
   				if (1 == e.g) {
   					if (!b.eb) return e.return();
   					c = b.stream;
   					d = b.eb;
   					return c.segmentIndex ? e.u(2) : E(e, c.createSegmentIndex(), 2)
   				}
   				if (b.eb != d || b.stream != c) return e.return();
   				var f = a.g.Ud();
   				var g = Sj(a.g.Y, b.type),
   					h = b.stream.segmentIndex.find(b.Pa ? b.Pa.endTime : f),
   					k = null == h ? null : b.stream.segmentIndex.get(h);
   				h = k ? k.ja ? k.ja - k.Ba : null : null;
   				k && !h && (h = (k.endTime - k.getStartTime()) * (b.stream.bandwidth || 0) / 8);
   				h ? ((k = k.ea) && (h += (k.ja ? k.ja - k.Ba : null) || 0), k = a.g.getBandwidthEstimate(), f =
   					8 * h / k < (g || 0) - f - Math.max(a.m.minBufferTime || 0, a.h.rebufferingGoal) || b.eb.h.g > h ? !0 : !1) : f = !1;
   				f && b.eb.abort();
   				F(e)
   			})
   		}
   		r.zd = function() {
   			if (this.g)
   				for (var a = this.g.Ud(), b = t(this.i.keys()), c = b.next(); !c.done; c = b.next()) {
   					var d = c.value;
   					c = this.i.get(d);
   					var e = null;
   					c.$ && (e = c.$.current());
   					if (!e || e.startTime > a || e.endTime < a) c.$ = null;
   					e = this.g.Y;
   					e.C ? e = !1 : d == Ld ? (e = e.g, e = null == e.g || null == e.h ? !1 : a >= e.g && a < e.h) : (e = Rj(e, d), e = Gi(e, a));
   					e || ((null != Sj(this.g.Y, d) || c.Ra) && Gl(this, c), c.eb && (c.eb.abort(), c.eb = null), d === Ld && (d = this.g.Y, d.H && d.H.g()), c.zd = !0)
   				}
   		};

   		function Gl(a, b) {
   			b.ad || b.Qb || (b.Ra ? (b.Qb = !0, b.Rd = 0) : null == Qj(a.g.Y, b.type) ? null == b.xb && yl(a, b, 0) : (rl(b), El(a, b, !1, 0).catch(function(c) {
   				if (a.g) a.g.onError(c)
   			})))
   		}

   		function vl(a, b) {
   			var c, d, e, f, g, h, k, l, m, n;
   			return O(function(p) {
   				if (1 == p.g) {
   					c = Nd;
   					if (!a.j) throw new T(2, 5, 5006);
   					d = new Map;
   					e = new Set;
   					a.j.audio && (d.set(c.U, a.j.audio), e.add(a.j.audio));
   					a.j.video && (d.set(c.ga, a.j.video), e.add(a.j.video));
   					a.s && (d.set(c.ma, a.s), e.add(a.s));
   					f = a.g.Y;
   					return E(p, f.init(d, a.m.sequenceMode, a.m.type, a.m.ignoreManifestTimestampsInSegmentsMode), 2)
   				}
   				sg(a.l);
   				a.updateDuration();
   				g = t(d.keys());
   				for (h = g.next(); !h.done; h = g.next()) k = h.value, l = d.get(k), a.i.has(k) || (m = xl(a, l), b.has(l.id) && (n =
   					b.get(l.id), Zk(n, function(q, u, v) {
   						return Hl(q, u, v || null, a.h.retryParameters, a.g.Db)
   					}), m.Z = n), a.i.set(k, m), yl(a, m, 0));
   				F(p)
   			})
   		}

   		function xl(a, b) {
   			return {
   				stream: b,
   				type: b.type,
   				$: null,
   				Z: tl(a, b),
   				Pa: null,
   				fc: null,
   				pf: null,
   				mf: null,
   				lf: null,
   				kc: null,
   				endOfStream: !1,
   				Ra: !1,
   				xb: null,
   				Qb: !1,
   				Rd: 0,
   				ve: !1,
   				ad: !1,
   				zd: !0,
   				Df: !1,
   				od: !1,
   				eb: null
   			}
   		}

   		function tl(a, b) {
   			if ("video" === b.type && a.h.disableVideoPrefetch || "audio" === b.type && a.h.disableAudioPrefetch || b.type === Ld && ("application/cea-608" == b.mimeType || "application/cea-708" == b.mimeType) || b.type === Ld && a.h.disableTextPrefetch) return null;
   			if (a.o.has(b)) return a.o.get(b);
   			var c = a.i.get(b.type);
   			return (c = c && c.Z) && b === c.h ? c : 0 < a.h.segmentPrefetchLimit ? new Yk(a.h.segmentPrefetchLimit, b, function(d, e, f) {
   				return Hl(d, e, f || null, a.h.retryParameters, a.g.Db)
   			}) : null
   		}

   		function ul(a) {
   			for (var b = a.h.segmentPrefetchLimit, c = a.h.prefetchAudioLanguages, d = {}, e = t(a.m.variants), f = e.next(); !f.done; d = {
   					Ia: d.Ia
   				}, f = e.next())
   				if (d.Ia = f.value, d.Ia.audio)
   					if (a.o.has(d.Ia.audio)) {
   						if (f = a.o.get(d.Ia.audio), hl(f, b), !(0 < b && c.some(function(h) {
   								return function(k) {
   									return te(h.Ia.audio.language, k)
   								}
   							}(d)))) {
   							var g = a.i.get(d.Ia.audio.type);
   							f !== (g && g.Z) && gl(f);
   							a.o.delete(d.Ia.audio)
   						}
   					} else 0 >= b || !c.some(function(h) {
   							return function(k) {
   								return te(h.Ia.audio.language, k)
   							}
   						}(d)) || !(f = tl(a, d.Ia.audio)) ||
   						(d.Ia.audio.segmentIndex || d.Ia.audio.createSegmentIndex(), a.o.set(d.Ia.audio, f))
   		}
   		r.updateDuration = function() {
   			var a = this.m.presentationTimeline.getDuration();
   			Infinity > a ? this.g.Y.Ta(a) : this.g.Y.Ta(this.h.infiniteLiveStreamDuration ? Infinity : Math.pow(2, 32))
   		};

   		function Il(a, b) {
   			var c, d, e, f, g;
   			return O(function(h) {
   				switch (h.g) {
   					case 1:
   						sg(a.l);
   						if (b.Ra || null == b.xb || b.ad) return h.return();
   						b.xb = null;
   						if (!b.Qb) {
   							h.u(2);
   							break
   						}
   						return E(h, El(a, b, b.ve, b.Rd), 3);
   					case 3:
   						return h.return();
   					case 2:
   						if (b.stream.segmentIndex) {
   							h.u(4);
   							break
   						}
   						c = b.stream;
   						return E(h, b.stream.createSegmentIndex(), 5);
   					case 5:
   						if (c != b.stream) return c.closeSegmentIndex && c.closeSegmentIndex(), b.Ra || b.xb || yl(a, b, 0), h.return();
   					case 4:
   						ua(h, 6);
   						d = Jl(a, b);
   						null != d && (yl(a, b, d), b.od = !1);
   						wa(h, 7);
   						break;
   					case 6:
   						return e =
   							ya(h), E(h, Kl(a, b, e), 8);
   					case 8:
   						return h.return();
   					case 7:
   						f = Array.from(a.i.values());
   						if (!a.C || !f.every(function(k) {
   								return k.endOfStream
   							})) {
   							h.u(0);
   							break
   						}
   						return E(h, a.g.Y.endOfStream(), 10);
   					case 10:
   						sg(a.l), g = a.g.Y.getDuration(), 0 != g && g < a.m.presentationTimeline.getDuration() && a.m.presentationTimeline.Ta(g), F(h)
   				}
   			})
   		}

   		function Jl(a, b) {
   			if (Ll(b)) return ak(a.g.Y, b.stream.originalId || ""), null;
   			b.type == Ld && bk(a.g.Y);
   			if (!a.g.Y.da && b.type != Ld) return a.h.updateIntervalSeconds / 2;
   			var c = a.g.Ud();
   			if ("audio" === b.type)
   				for (var d = t(a.o.keys()), e = d.next(); !e.done; e = d.next()) e = a.o.get(e.value), e.Ha(c, !0), $k(e, c);
   			d = b.Pa ? b.Pa.endTime : c;
   			e = Tj(a.g.Y, b.type, c);
   			var f = Math.max(1, Math.max(a.m.minBufferTime || 0, a.h.rebufferingGoal, a.h.bufferingGoal) * a.B),
   				g = a.m.presentationTimeline.getDuration() - d,
   				h = Sj(a.g.Y, b.type);
   			if (1E-6 > g && h) return b.endOfStream = !0, "video" == b.type && (a = a.i.get(Ld)) && Ll(a) && (a.endOfStream = !0), null;
   			b.endOfStream = !1;
   			if (e >= f) return a.h.updateIntervalSeconds / 2;
   			e = Ml(a, b, c, h);
   			if (!e) return a.h.updateIntervalSeconds;
   			f = Infinity;
   			g = Array.from(a.i.values());
   			g = t(g);
   			for (h = g.next(); !h.done; h = g.next()) h = h.value, Ll(h) || h.$ && !h.$.current() || (f = Math.min(f, h.Pa ? h.Pa.endTime : c));
   			if (d >= f + a.m.presentationTimeline.g) return a.h.updateIntervalSeconds;
   			b.Z && b.$ && !a.o.has(b.stream) && (b.Z.Ha(c), $k(b.Z, e.startTime));
   			Nl(a, b, c, e).catch(function() {});
   			return null
   		}

   		function Ml(a, b, c, d) {
   			if (b.$) return b.$.current();
   			if (b.Pa || d) return b.$ = b.stream.segmentIndex.Ab(b.Pa ? b.Pa.endTime : d, !1, 0 > a.g.ib()), b.$ && b.$.next().value;
   			d = a.h.inaccurateManifestTolerance;
   			var e = Math.max(c - d, 0);
   			a = 0 > a.g.ib();
   			var f = null;
   			d && (b.$ = b.stream.segmentIndex.Ab(e, !1, a), f = b.$ && b.$.next().value);
   			f || (b.$ = b.stream.segmentIndex.Ab(c, !1, a), f = b.$ && b.$.next().value);
   			return f
   		}

   		function Nl(a, b, c, d) {
   			var e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y;
   			return O(function(B) {
   				switch (B.g) {
   					case 1:
   						e = Nd;
   						f = b.stream;
   						g = b.$;
   						b.Ra = !0;
   						ua(B, 2);
   						if (2 == d.cc()) throw new T(1, 1, 1011);
   						return E(B, Ol(a, b, d), 4);
   					case 4:
   						sg(a.l);
   						if (a.A) return B.return();
   						h = "video/mp4" == f.mimeType || "audio/mp4" == f.mimeType;
   						k = window.ReadableStream;
   						if (a.h.lowLatencyMode && k && h && ("HLS" != a.m.type || d.m)) return n = new Uint8Array(0), q = p = !1, v = function(C) {
   							var D, J, K, H;
   							return O(function(I) {
   								switch (I.g) {
   									case 1:
   										if (p) return I.return();
   										q = !0;
   										sg(a.l);
   										if (a.A) return I.return();
   										ua(I, 2);
   										n = Pl(n, C);
   										D = !1;
   										J = 0;
   										(new Cg).box("mdat", function(G) {
   											J = G.size + G.start;
   											D = !0
   										}).parse(n, !1, !0);
   										if (!D) {
   											I.u(4);
   											break
   										}
   										K = n.subarray(0, J);
   										n = n.subarray(J);
   										return E(I, Ql(a, b, c, f, d, K, !0), 5);
   									case 5:
   										b.Z && b.$ && $k(b.Z, d.startTime, !0);
   									case 4:
   										wa(I, 0);
   										break;
   									case 2:
   										u = H = ya(I), F(I)
   								}
   							})
   						}, E(B, Rl(a, b, d, v), 9);
   						l = Rl(a, b, d);
   						return E(B, l, 7);
   					case 7:
   						m = B.h;
   						sg(a.l);
   						if (a.A) return B.return();
   						sg(a.l);
   						return b.Qb ? (b.Ra = !1, yl(a, b, 0), B.return()) : E(B, Ql(a, b, c, f, d, m), 6);
   					case 9:
   						w = B.h;
   						if (u) throw u;
   						if (q) {
   							B.u(10);
   							break
   						}
   						p = !0;
   						sg(a.l);
   						return a.A ?
   							B.return() : b.Qb ? (b.Ra = !1, yl(a, b, 0), B.return()) : E(B, Ql(a, b, c, f, d, w), 10);
   					case 10:
   						b.Z && b.$ && $k(b.Z, d.startTime, !0);
   					case 6:
   						sg(a.l);
   						if (a.A) return B.return();
   						b.Pa = d;
   						g.next();
   						b.Ra = !1;
   						b.Df = !1;
   						A = a.g.Y.rb();
   						z = A[b.type];
   						eb(JSON.stringify(z));
   						b.Qb || a.g.xf(d, b.stream);
   						yl(a, b, 0);
   						wa(B, 0);
   						break;
   					case 2:
   						y = ya(B);
   						sg(a.l, y);
   						if (a.A) return B.return();
   						b.Ra = !1;
   						if (7001 == y.code) b.Ra = !1, rl(b), yl(a, b, 0), B.u(0);
   						else if (b.type == e.ma && a.h.ignoreTextStreamFailures) a.i.delete(e.ma), B.u(0);
   						else if (3017 == y.code) Sl(a, b, y), B.u(0);
   						else return b.od = !0, 1 == y.category && b.Z && fl(b.Z, d), y.severity = 2, E(B, Kl(a, b, y), 0)
   				}
   			})
   		}

   		function Tl(a, b, c) {
   			var d, e, f, g, h;
   			return O(function(k) {
   				if (1 == k.g) return d = b, d.cryptoKey ? k.u(2) : E(k, d.fetchKey(), 3);
   				e = d.iv;
   				if (!e)
   					for (e = Ab(new ArrayBuffer(16)), f = d.firstMediaSequenceNumber + c, g = e.byteLength - 1; 0 <= g; g--) e[g] = f & 255, f >>= 8;
   				"CBC" == b.blockCipherMode ? h = {
   					name: "AES-CBC",
   					iv: e
   				} : h = {
   					name: "AES-CTR",
   					counter: e,
   					length: 64
   				};
   				return k.return(window.crypto.subtle.decrypt(h, d.cryptoKey, a))
   			})
   		}

   		function Pl(a, b) {
   			var c = new Uint8Array(a.length + b.length);
   			c.set(a);
   			c.set(b, a.length);
   			return c
   		}

   		function Sl(a, b, c) {
   			if (!Array.from(a.i.values()).some(function(e) {
   					return e != b && e.Df
   				})) {
   				if (0 < a.h.maxDisabledTime && a.g.Sd(b.stream, a.h.maxDisabledTime)) return;
   				var d = Math.round(100 * a.B);
   				if (20 < d) a.B -= .2;
   				else if (4 < d) a.B -= .04;
   				else {
   					b.od = !0;
   					a.A = !0;
   					a.g.onError(c);
   					return
   				}
   				b.Df = !0
   			}
   			yl(a, b, 4)
   		}

   		function Ol(a, b, c) {
   			var d, e, f, g, h, k, l, m, n, p, q, u, v;
   			return O(function(w) {
   				switch (w.g) {
   					case 1:
   						d = Nd;
   						e = [];
   						f = Math.max(0, c.appendWindowStart - .1);
   						g = c.appendWindowEnd + .01;
   						h = Yd(b.stream.codecs);
   						k = Zd(b.stream.mimeType);
   						l = c.timestampOffset;
   						if (l == b.pf && f == b.mf && g == b.lf && h == b.nf && k == b.yg) {
   							w.u(2);
   							break
   						}
   						m = b.nf && b.yg && nk(a.g.Y, b.type, k, h);
   						if (!m) {
   							w.u(3);
   							break
   						}
   						n = null;
   						b.type === d.ga ? n = a.i.get(d.U) : b.type === d.U && (n = a.i.get(d.ga));
   						if (!n) {
   							w.u(3);
   							break
   						}
   						return E(w, sl(n).catch(function() {}), 5);
   					case 5:
   						n.fc = null, Gl(a, n);
   					case 3:
   						return p =
   							function() {
   								var A, z, y;
   								return O(function(B) {
   									if (1 == B.g) return A = new Map, a.j.audio && A.set(d.U, a.j.audio), a.j.video && A.set(d.ga, a.j.video), ua(B, 2), b.mf = f, b.lf = g, b.nf = h, b.yg = k, b.pf = l, z = a.m.sequenceMode || "HLS" == a.m.type, E(B, ek(a.g.Y, b.type, l, f, g, z, c.mimeType || b.stream.mimeType, c.codecs || b.stream.codecs, A), 4);
   									if (2 != B.g) return wa(B, 0);
   									y = ya(B);
   									b.mf = null;
   									b.lf = null;
   									b.nf = null;
   									b.pf = null;
   									throw y;
   								})
   							}, E(w, p(), 2);
   					case 2:
   						return Ai(c.ea, b.fc) || (b.fc = c.ea, c.l && c.ea && (q = Rl(a, b, c.ea), u = function() {
   							var A, z, y, B, C, D, J;
   							return O(function(K) {
   								switch (K.g) {
   									case 1:
   										return ua(K,
   											2), E(K, q, 4);
   									case 4:
   										return A = K.h, sg(a.l), z = null, y = new Map, B = {
   											projection: null,
   											hfov: null
   										}, C = new Cg, C.box("moov", Hg).box("trak", Hg).box("mdia", Hg).P("mdhd", function(H) {
   											z = Ti(H.reader, H.version).timescale
   										}).box("hdlr", function(H) {
   											H = H.reader;
   											H.skip(8);
   											switch (H.ic()) {
   												case "soun":
   													y.set(d.U, z);
   													break;
   												case "vide":
   													y.set(d.ga, z)
   											}
   											z = null
   										}).box("minf", Hg).box("stbl", Hg).P("stsd", Lg).box("encv", Mg).box("avc1", Mg).box("avc3", Mg).box("hev1", Mg).box("hvc1", Mg).box("dvav", Mg).box("dva1", Mg).box("dvh1", Mg).box("dvhe", Mg).box("vexu",
   											Hg).box("proj", Hg).P("prji", function(H) {
   											H = H.reader.ic();
   											B.projection = H
   										}).box("hfov", function(H) {
   											H = H.reader.O() / 1E3;
   											B.hfov = H
   										}).parse(A), Ul(a, B), y.has(b.type) ? c.ea.timescale = y.get(b.type) : null != z && (c.ea.timescale = z), D = b.stream.closedCaptions && 0 < b.stream.closedCaptions.size, E(K, a.g.eg(b.type, A), 5);
   									case 5:
   										return E(K, Vj(a.g.Y, b.type, A, null, b.stream, D), 6);
   									case 6:
   										wa(K, 0);
   										break;
   									case 2:
   										throw J = ya(K), b.fc = null, J;
   								}
   							})
   						}, a.g.li(c.startTime, c.ea), e.push(u()))), a.m.sequenceMode && (v = b.Pa ? b.Pa.j : null, c.j != v && e.push(gk(a.g.Y,
   							b.type, c.startTime))), E(w, Promise.all(e), 0)
   				}
   			})
   		}

   		function Ql(a, b, c, d, e, f, g) {
   			g = void 0 === g ? !1 : g;
   			var h, k, l, m, n, p;
   			return O(function(q) {
   				switch (q.g) {
   					case 1:
   						h = d.closedCaptions && 0 < d.closedCaptions.size;
   						l = null != d.emsgSchemeIdUris && 0 < d.emsgSchemeIdUris.length || a.h.dispatchAllEmsgBoxes;
   						m = a.h.parsePrftBox && !a.F;
   						if (l || m) k = new Cg;
   						l && k.P("emsg", function(u) {
   							var v = d.emsgSchemeIdUris;
   							if (0 === u.version) {
   								var w = u.reader.ic();
   								var A = u.reader.ic();
   								var z = u.reader.O();
   								var y = u.reader.O();
   								var B = u.reader.O();
   								var C = u.reader.O();
   								var D = e.startTime + y / z
   							} else z = u.reader.O(), D = u.reader.Hc() /
   								z + e.timestampOffset, y = D - e.startTime, B = u.reader.O(), C = u.reader.O(), w = u.reader.ic(), A = u.reader.ic();
   							u = u.reader.vb(u.reader.getLength() - u.reader.wa());
   							if (v && v.includes(w) || a.h.dispatchAllEmsgBoxes) "urn:mpeg:dash:event:2012" == w ? a.g.mi() : (v = (new Map).set("detail", {
   									startTime: D,
   									endTime: D + B / z,
   									schemeIdUri: w,
   									value: A,
   									timescale: z,
   									presentationTimeDelta: y,
   									eventDuration: B,
   									id: C,
   									messageData: u
   								}), v = new U("emsg", v), v.cancelable = !0, a.g.onEvent(v), v.defaultPrevented || "https://aomedia.org/emsg/ID3" != w && "https://developer.apple.com/streaming/emsg-id3" !=
   								w || (w = Pi(u), w.length && e && a.g.ni([{
   									cueTime: e.startTime,
   									data: u,
   									frames: w,
   									dts: e.startTime,
   									pts: e.startTime
   								}], 0, e.endTime)))
   						});
   						m && k.P("prft", function(u) {
   							if (!a.F && e.ea.timescale) {
   								var v = u.reader,
   									w = u.version;
   								v.O();
   								u = v.O();
   								var A = v.O();
   								u = 1E3 * u + A / Math.pow(2, 32) * 1E3;
   								0 === w ? v = v.O() : (w = v.O(), v = v.O(), v = w * Math.pow(2, 32) + v);
   								u = (new Date((new Date(Date.UTC(1900, 0, 1, 0, 0, 0))).getTime() + u)).getTime();
   								v = (new Map).set("detail", {
   									wallClockTime: u,
   									programStartDate: new Date(u - v / e.ea.timescale * 1E3)
   								});
   								v = new U("prft", v);
   								a.g.onEvent(v);
   								a.F = !0
   							}
   						});
   						(l || m) && k.parse(f);
   						return E(q, Vl(a, b, c), 2);
   					case 2:
   						return sg(a.l), n = b.zd, b.zd = !1, p = b.cg, b.cg = !1, E(q, a.g.eg(b.type, f), 3);
   					case 3:
   						return E(q, Vj(a.g.Y, b.type, f, e, d, h, n, p, g), 4);
   					case 4:
   						sg(a.l), F(q)
   				}
   			})
   		}

   		function Vl(a, b, c) {
   			var d, e, f, g;
   			return O(function(h) {
   				if (1 == h.g) {
   					d = Math.max(a.h.bufferBehind, a.m.presentationTimeline.g);
   					e = Qj(a.g.Y, b.type);
   					if (null == e) return h.return();
   					f = c - e;
   					g = f - d;
   					return g <= a.h.evictionGoal ? h.return() : E(h, a.g.Y.remove(b.type, e, e + g), 2)
   				}
   				sg(a.l);
   				F(h)
   			})
   		}

   		function Ll(a) {
   			return a && a.type == Ld && ("application/cea-608" == a.stream.mimeType || "application/cea-708" == a.stream.mimeType)
   		}

   		function Rl(a, b, c, d) {
   			var e, f, g, h, k;
   			return O(function(l) {
   				switch (l.g) {
   					case 1:
   						if (e = c.ld()) return l.return(e);
   						f = null;
   						if (b.Z) {
   							var m = b.Z,
   								n = m.g;
   							c instanceof zi && (n = m.i);
   							n.has(c) ? (m = n.get(c), d && (m.Pf = d), f = m.ne) : f = null
   						}
   						f || (f = Hl(c, b.stream, d || null, a.h.retryParameters, a.g.Db));
   						g = 0;
   						b.$ && (g = b.$.h);
   						b.eb = f;
   						return E(l, f.promise, 2);
   					case 2:
   						h = l.h;
   						b.eb = null;
   						k = h.data;
   						if (!c.aesKey) {
   							l.u(3);
   							break
   						}
   						return E(l, Tl(k, c.aesKey, g), 4);
   					case 4:
   						k = l.h;
   					case 3:
   						return l.return(k)
   				}
   			})
   		}

   		function Hl(a, b, c, d, e) {
   			var f = a instanceof Bi ? a : void 0,
   				g = f ? 1 : 0;
   			a = ol(a.L(), a.Ba, a.ja, d, c);
   			a.contentType = b.type;
   			return e.request(pg, a, {
   				type: g,
   				stream: b,
   				segment: f
   			})
   		}

   		function El(a, b, c, d) {
   			var e, f;
   			return O(function(g) {
   				if (1 == g.g) return b.Qb = !1, b.ve = !1, b.Rd = 0, b.ad = !0, b.Pa = null, b.fc = null, b.$ = null, b.Z && !a.o.has(b.stream) && gl(b.Z), d ? (e = a.g.Ud(), f = a.g.Y.getDuration(), E(g, a.g.Y.remove(b.type, e + d, f), 3)) : E(g, dk(a.g.Y, b.type), 4);
   				if (3 != g.g) return sg(a.l), c ? E(g, a.g.Y.flush(b.type), 3) : g.u(3);
   				sg(a.l);
   				b.ad = !1;
   				b.endOfStream = !1;
   				b.Ra || b.xb || yl(a, b, 0);
   				F(g)
   			})
   		}

   		function yl(a, b, c) {
   			var d = b.type;
   			if (d != Ld || a.i.has(d)) b.xb = (new Kc(function() {
   				var e;
   				return O(function(f) {
   					if (1 == f.g) return ua(f, 2), E(f, Il(a, b), 4);
   					if (2 != f.g) return wa(f, 0);
   					e = ya(f);
   					if (a.g) a.g.onError(e);
   					F(f)
   				})
   			})).W(c)
   		}

   		function rl(a) {
   			null != a.xb && (a.xb.stop(), a.xb = null)
   		}

   		function sl(a) {
   			return O(function(b) {
   				return a.eb ? E(b, a.eb.abort(), 0) : b.u(0)
   			})
   		}

   		function Kl(a, b, c) {
   			var d;
   			return O(function(e) {
   				if (1 == e.g) return E(e, Rf(a.J), 2);
   				sg(a.l);
   				d = 0 === a.h.maxDisabledTime && 1011 == c.code ? 1 : a.h.maxDisabledTime;
   				1 === c.category && 0 < d && (c.handled = a.g.Sd(b.stream, d), c.handled && (c.severity = 1));
   				a.g.onError(c);
   				c.handled || a.h.failureCallback(c);
   				F(e)
   			})
   		}

   		function Wl(a) {
   			var b, c, d, e, f, g;
   			return O(function(h) {
   				if (1 == h.g) {
   					b = Date.now() / 1E3;
   					c = a.h.minTimeBetweenRecoveries;
   					if (!a.h.allowMediaSourceRecoveries || b - a.K < c) return h.return(!1);
   					a.K = b;
   					d = Nd;
   					if (e = a.i.get(d.U)) e.fc = null, Gl(a, e), sl(e).catch(function() {});
   					if (f = a.i.get(d.ga)) f.fc = null, Gl(a, f), sl(f).catch(function() {});
   					g = new Map;
   					a.j.audio && g.set(d.U, a.j.audio);
   					a.j.video && g.set(d.ga, a.j.video);
   					return E(h, mk(a.g.Y, g), 2)
   				}
   				return h.return(!0)
   			})
   		}

   		function Ul(a, b) {
   			if (a.G.projection != b.projection || a.G.hfov != b.hfov) {
   				if (null != b.projection || null != b.hfov) {
   					var c = (new Map).set("detail", b);
   					c = new U("spatialvideoinfo", c)
   				} else c = new U("nospatialvideoinfo");
   				c.cancelable = !0;
   				a.g.onEvent(c);
   				a.G = b
   			}
   		};

   		function Xl() {}

   		function Yl(a, b, c, d, e) {
   			var f = e in d;
   			var g = f ? c.constructor == Object && 0 == Object.keys(d).length : c.constructor == Object && 0 == Object.keys(c).length;
   			var h = f || g,
   				k = !0,
   				l;
   			for (l in b) {
   				var m = e + "." + l,
   					n = f ? d[e] : c[l];
   				h || l in c ? void 0 === b[l] ? void 0 === n || h ? delete a[l] : a[l] = Ce(n) : g ? a[l] = b[l] : n.constructor == Object && b[l] && b[l].constructor == Object ? (a[l] || (a[l] = Ce(n)), m = Yl(a[l], b[l], n, d, m), k = k && m) : typeof b[l] != typeof n || null == b[l] || "function" != typeof b[l] && b[l].constructor != n.constructor ? ($a("Invalid config, wrong type for " + m),
   					k = !1) : ("function" == typeof c[l] && c[l].length != b[l].length && ab("Unexpected number of arguments for " + m), a[l] = b[l]) : ($a("Invalid config, unrecognized key " + m), k = !1)
   			}
   			return k
   		}

   		function Zl(a, b) {
   			for (var c = {}, d = c, e = 0, f = 0;;) {
   				e = a.indexOf(".", e);
   				if (0 > e) break;
   				if (0 == e || "\\" != a[e - 1]) f = a.substring(f, e).replace(/\\\./g, "."), d[f] = {}, d = d[f], f = e + 1;
   				e += 1
   			}
   			d[a.substring(f).replace(/\\\./g, ".")] = b;
   			return c
   		}

   		function $l(a, b) {
   			return a && b
   		}

   		function am(a, b) {
   			function c(g) {
   				for (var h = t(Object.keys(g)), k = h.next(); !k.done; k = h.next()) k = k.value, f(g[k]) && 0 === Object.keys(g[k]).length ? delete g[k] : e(g[k]) ? delete g[k] : "function" == typeof g[k] ? delete g[k] : f(g[k]) && c(g[k])
   			}

   			function d(g, h) {
   				return Object.keys(g).reduce(function(k, l) {
   					var m = g[l];
   					if (h.hasOwnProperty(l))
   						if (f(m) && f(h[l])) {
   							if (m = d(m, h[l]), 0 < Object.keys(m).length || !f(m)) k[l] = m
   						} else e(m) && e(h[l]) || m !== h[l] && (k[l] = m);
   					else k[l] = m;
   					return k
   				}, {})
   			}

   			function e(g) {
   				return Array.isArray(g) && 0 === g.length
   			}

   			function f(g) {
   				return g && "object" === typeof g && !Array.isArray(g)
   			}
   			a = d(a, b);
   			c(a);
   			return a
   		}
   		S("gowatch.util.ConfigUtils", Xl);
   		Xl.getDifferenceFromConfigObjects = am;
   		Xl.convertToConfigObject = Zl;
   		Xl.mergeConfigObjects = Yl;

   		function bm() {}

   		function cm(a) {
   			a = nd(a);
   			return (new rc(a)).zb
   		}

   		function dm(a, b, c) {
   			function d(h) {
   				Eb(f).setUint32(g, h.byteLength, !0);
   				g += 4;
   				f.set(Ab(h), g);
   				g += h.byteLength
   			}
   			if (!c || !c.byteLength) throw new T(2, 6, 6015);
   			var e;
   			"string" == typeof b ? e = rd(b, !0) : e = b;
   			a = nd(a);
   			a = rd(a, !0);
   			var f = new Uint8Array(12 + a.byteLength + e.byteLength + c.byteLength),
   				g = 0;
   			d(a);
   			d(e);
   			d(c);
   			return f
   		}

   		function em(a, b, c) {
   			if ("skd" !== b) return a;
   			b = c.serverCertificate;
   			c = nd(a).split("skd://").pop();
   			return dm(a, c, b)
   		}

   		function fm(a, b) {
   			2 === a && (b.headers["Content-Type"] = "application/octet-stream")
   		}
   		S("gowatch.util.FairPlayUtils", bm);
   		bm.commonFairPlayResponse = function(a, b) {
   			if (2 === a) {
   				try {
   					var c = kd(b.data)
   				} catch (e) {
   					return
   				}
   				a = !1;
   				c = c.trim();
   				"<ckc>" === c.substr(0, 5) && "</ckc>" === c.substr(-6) && (c = c.slice(5, -6), a = !0);
   				try {
   					var d = JSON.parse(c);
   					d.ckc && (c = d.ckc, a = !0);
   					d.CkcMessage && (c = d.CkcMessage, a = !0);
   					d.License && (c = d.License, a = !0)
   				} catch (e) {}
   				a && (b.data = Bb(yd(c)))
   			}
   		};
   		bm.expressplayFairPlayRequest = function(a, b) {
   			fm(a, b)
   		};
   		bm.conaxFairPlayRequest = function(a, b) {
   			fm(a, b)
   		};
   		bm.ezdrmFairPlayRequest = function(a, b) {
   			fm(a, b)
   		};
   		bm.verimatrixFairPlayRequest = function(a, b) {
   			2 === a && (a = Ab(b.body), a = xd(a), b.headers["Content-Type"] = "application/x-www-form-urlencoded", b.body = qd("spc=" + a))
   		};
   		bm.expressplayInitDataTransform = function(a, b, c) {
   			return em(a, b, c)
   		};
   		bm.conaxInitDataTransform = function(a, b, c) {
   			if ("skd" !== b) return a;
   			b = c.serverCertificate;
   			c = nd(a).split("skd://").pop().split("?").shift();
   			c = window.atob(c);
   			var d = new ArrayBuffer(2 * c.length);
   			d = Db(d);
   			for (var e = 0, f = c.length; e < f; e++) d[e] = c.charCodeAt(e);
   			return dm(a, d, b)
   		};
   		bm.ezdrmInitDataTransform = function(a, b, c) {
   			if ("skd" !== b) return a;
   			b = c.serverCertificate;
   			c = nd(a).split(";").pop();
   			return dm(a, c, b)
   		};
   		bm.verimatrixInitDataTransform = function(a, b, c) {
   			return em(a, b, c)
   		};
   		bm.initDataTransform = dm;
   		bm.defaultGetContentId = cm;
   		bm.isFairPlaySupported = function() {
   			var a;
   			return O(function(b) {
   				if (1 == b.g) return a = {
   					initDataTypes: ["cenc", "sinf", "skd"],
   					videoCapabilities: [{
   						contentType: 'video/mp4; codecs="avc1.42E01E"'
   					}]
   				}, ua(b, 2), E(b, navigator.requestMediaKeySystemAccess("com.apple.fps", [a]), 4);
   				if (2 != b.g) return b.return(!0);
   				ya(b);
   				return b.return(!1)
   			})
   		};

   		function gm() {}

   		function hm() {
   			var a = Infinity;
   			navigator.connection && navigator.connection.saveData && (a = 360);
   			var b = {
   				retryParameters: Qf(),
   				servers: {},
   				drmkeys: {},
   				advanced: {},
   				delayLicenseRequestUntilPlayed: !1,
   				persistentSessionOnlinePlayback: !1,
   				persistentSessionsMetadata: [],
   				initDataTransform: function(m, n, p) {
   					window.gowatchMediaKeysPolyfill && "skd" == n && (n = p.serverCertificate, p = cm(m), m = dm(m, p, n));
   					return m
   				},
   				logLicenseExchange: !1,
   				updateExpirationTime: 1,
   				preferredKeySystems: [],
   				keySystemsMapping: {},
   				parseInbandPsshEnabled: Sc(),
   				minHdcpVersion: "",
   				ignoreDuplicateInitData: !Wc()
   			};
   			(Sc() || cd()) && b.preferredKeySystems.push("com.microsoft.playready");
   			var c = "reload",
   				d = !1;
   			Wc() || Vc() || Tc("Tizen 4") || Tc("Tizen 5") || Tc("Tizen 6") || Yc() || Xc() && 53 === Zc() || Xc() && 68 === Zc() || !(!$c() || $c() && Tc("Android") || $c() && Tc("Fuchsia")) || (navigator.userAgentData && navigator.userAgentData.platform ? "windows" == navigator.userAgentData.platform.toLowerCase() : navigator.platform && navigator.platform.toLowerCase().includes("windows")) && Qc() || (c = "smooth", d = !0);
   			d = {
   				retryParameters: Qf(),
   				availabilityWindowOverride: NaN,
   				disableAudio: !1,
   				disableVideo: !1,
   				disableText: !1,
   				disableThumbnails: !1,
   				defaultPresentationDelay: 0,
   				segmentRelativeVttTiming: !1,
   				raiseFatalErrorOnManifestUpdateRequestFailure: !1,
   				dash: {
   					clockSyncUri: "",
   					ignoreDrmInfo: !1,
   					disableXlinkProcessing: !1,
   					xlinkFailGracefully: !1,
   					ignoreMinBufferTime: !1,
   					autoCorrectDrift: !0,
   					initialSegmentLimit: 1E3,
   					ignoreSuggestedPresentationDelay: !1,
   					ignoreEmptyAdaptationSet: !1,
   					ignoreMaxSegmentDuration: !1,
   					keySystemsByURI: {
   						"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
   						"urn:uuid:e2719d58-a985-b3c9-781a-b030af78d30e": "org.w3.clearkey",
   						"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
   						"urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
   						"urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95": "com.microsoft.playready"
   					},
   					manifestPreprocessor: im,
   					manifestPreprocessorTXml: jm,
   					sequenceMode: !1,
   					enableAudioGroups: !1,
   					multiTypeVariantsAllowed: d,
   					useStreamOnceInPeriodFlattening: !1,
   					updatePeriod: -1,
   					enableFastSwitching: !0
   				},
   				hls: {
   					ignoreTextStreamFailures: !1,
   					ignoreImageStreamFailures: !1,
   					defaultAudioCodec: "mp4a.40.2",
   					defaultVideoCodec: "avc1.42E01E",
   					ignoreManifestProgramDateTime: !1,
   					ignoreManifestProgramDateTimeForTypes: [],
   					mediaPlaylistFullMimeType: 'video/mp2t; codecs="avc1.42E01E, mp4a.40.2"',
   					useSafariBehaviorForLive: !0,
   					liveSegmentsDelay: 3,
   					sequenceMode: Vc() || Wc() || Yc() || cd() ? !1 : !0,
   					ignoreManifestTimestampsInSegmentsMode: !1,
   					disableCodecGuessing: !1,
   					disableClosedCaptionsDetection: !1,
   					allowLowLatencyByteRangeOptimization: !0
   				},
   				mss: {
   					manifestPreprocessor: im,
   					manifestPreprocessorTXml: jm,
   					sequenceMode: !1,
   					keySystemsBySystemId: {
   						"9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
   						"79f0049a-4098-8642-ab92-e65be0885f95": "com.microsoft.playready"
   					}
   				}
   			};
   			var e = {
   				retryParameters: Qf(),
   				failureCallback: function(m) {
   					return $l([m])
   				},
   				rebufferingGoal: 2,
   				bufferingGoal: 10,
   				bufferBehind: 30,
   				evictionGoal: 1,
   				ignoreTextStreamFailures: !1,
   				alwaysStreamText: !1,
   				startAtSegmentBoundary: !1,
   				gapDetectionThreshold: .5,
   				gapJumpTimerTime: .25,
   				durationBackoff: 1,
   				safeSeekOffset: 5,
   				stallEnabled: !0,
   				stallThreshold: 1,
   				stallSkip: .1,
   				useNativeHlsOnSafari: !0,
   				useNativeHlsForFairPlay: !0,
   				inaccurateManifestTolerance: 2,
   				lowLatencyMode: !1,
   				autoLowLatencyMode: !1,
   				forceHTTP: !1,
   				forceHTTPS: !1,
   				preferNativeHls: !1,
   				updateIntervalSeconds: 1,
   				dispatchAllEmsgBoxes: !1,
   				observeQualityChanges: !1,
   				maxDisabledTime: 30,
   				parsePrftBox: !1,
   				segmentPrefetchLimit: 0,
   				prefetchAudioLanguages: [],
   				disableAudioPrefetch: !1,
   				disableTextPrefetch: !1,
   				disableVideoPrefetch: !1,
   				liveSync: !1,
   				liveSyncTargetLatencyTolerance: .5,
   				liveSyncMaxLatency: 1,
   				liveSyncPlaybackRate: 1.1,
   				liveSyncMinLatency: 0,
   				liveSyncMinPlaybackRate: .95,
   				liveSyncPanicMode: !1,
   				liveSyncPanicThreshold: 60,
   				allowMediaSourceRecoveries: !0,
   				minTimeBetweenRecoveries: 5,
   				vodDynamicPlaybackRate: !1,
   				vodDynamicPlaybackRateLowBufferRate: .95,
   				vodDynamicPlaybackRateBufferRatio: .5,
   				infiniteLiveStreamDuration: !1,
   				preloadNextUrlWindow: 30,
   				loadTimeout: 30,
   				clearDecodingCache: cd() || dd()
   			};
   			if (Xc() || Uc() || $c() || ed()) e.stallSkip = 0;
   			var f = {
   				trackSelectionCallback: function(m) {
   					return O(function(n) {
   						return n.return(m)
   					})
   				},
   				downloadSizeCallback: function(m) {
   					var n;
   					return O(function(p) {
   						if (1 ==
   							p.g) return navigator.storage && navigator.storage.estimate ? E(p, navigator.storage.estimate(), 3) : p.return(!0);
   						n = p.h;
   						return p.return(n.usage + m < .95 * n.quota)
   					})
   				},
   				progressCallback: function(m, n) {
   					return $l([m, n])
   				},
   				usePersistentLicense: !0,
   				numberOfParallelDownloads: 5
   			};
   			a = {
   				enabled: !0,
   				useNetworkInformation: !0,
   				defaultBandwidthEstimate: 1E6,
   				switchInterval: 8,
   				bandwidthUpgradeTarget: .85,
   				bandwidthDowngradeTarget: .95,
   				restrictions: {
   					minWidth: 0,
   					maxWidth: Infinity,
   					minHeight: 0,
   					maxHeight: a,
   					minPixels: 0,
   					maxPixels: Infinity,
   					minFrameRate: 0,
   					maxFrameRate: Infinity,
   					minBandwidth: 0,
   					maxBandwidth: Infinity,
   					minChannelsCount: 0,
   					maxChannelsCount: Infinity
   				},
   				advanced: {
   					minTotalBytes: 128E3,
   					minBytes: 16E3,
   					fastHalfLife: 2,
   					slowHalfLife: 5
   				},
   				restrictToElementSize: !1,
   				restrictToScreenSize: !1,
   				ignoreDevicePixelRatio: !1,
   				clearBufferSwitch: !1,
   				safeMarginSwitch: 0,
   				cacheLoadThreshold: 20
   			};
   			c = {
   				codecSwitchingStrategy: c,
   				addExtraFeaturesToSourceBuffer: function(m) {
   					return $l([m], "")
   				},
   				forceTransmux: !1,
   				insertFakeEncryptionInInit: !0,
   				modifyCueCallback: function(m, n) {
   					return $l([m, n])
   				}
   			};
   			var g = !1,
   				h = !1,
   				k = !0;
   			if (Uc() || Xc() || Sc() || cd() || dd() || Tc("AFT") || Tc("PC=EOS") || Tc("PC=APL") || Tc("VirginMedia") || bd() || Tc("WPE") || $c() || ed() || Tc("DT_STB_BCM")) h = g = !0, k = !1;
   			var l = {
   				drm: b,
   				manifest: d,
   				streaming: e,
   				mediaSource: c,
   				offline: f,
   				abrFactory: function() {
   					return new of
   				},
   				abr: a,
   				autoShowText: 3,
   				preferredAudioLanguage: "",
   				preferredAudioLabel: "",
   				preferredTextLanguage: "",
   				preferredVariantRole: "",
   				preferredTextRole: "",
   				preferredAudioChannelCount: 2,
   				preferredVideoHdrLevel: "AUTO",
   				preferredVideoLayout: "",
   				preferredVideoLabel: "",
   				preferredVideoCodecs: [],
   				preferredAudioCodecs: [],
   				preferForcedSubs: !1,
   				preferSpatialAudio: !1,
   				preferredDecodingAttributes: [],
   				restrictions: {
   					minWidth: 0,
   					maxWidth: Infinity,
   					minHeight: 0,
   					maxHeight: Infinity,
   					minPixels: 0,
   					maxPixels: Infinity,
   					minFrameRate: 0,
   					maxFrameRate: Infinity,
   					minBandwidth: 0,
   					maxBandwidth: Infinity,
   					minChannelsCount: 0,
   					maxChannelsCount: Infinity
   				},
   				playRangeStart: 0,
   				playRangeEnd: Infinity,
   				textDisplayer: {
   					captionsUpdatePeriod: .25
   				},
   				textDisplayFactory: function() {
   					return null
   				},
   				cmcd: {
   					enabled: !1,
   					sessionId: "",
   					contentId: "",
   					rtpSafetyFactor: 5,
   					useHeaders: !1,
   					includeKeys: []
   				},
   				cmsd: {
   					enabled: !0,
   					applyMaximumSuggestedBitrate: !0,
   					estimatedThroughputWeightRatio: .5
   				},
   				lcevc: {
   					enabled: !1,
   					dynamicPerformanceScaling: !0,
   					logLevel: 0,
   					drawLogo: !1
   				},
   				ads: {
   					customPlayheadTracker: g,
   					skipPlayDetection: h,
   					supportsMultipleMediaElements: k
   				}
   			};
   			f.trackSelectionCallback = function(m) {
   				return O(function(n) {
   					return n.return(km(m, l.preferredAudioLanguage, l.preferredVideoHdrLevel))
   				})
   			};
   			return l
   		}

   		function lm(a, b, c) {
   			var d = {
   				".drm.keySystemsMapping": "",
   				".drm.servers": "",
   				".drm.drmkeys": "",
   				".drm.advanced": {
   					distinctiveIdentifierRequired: !1,
   					persistentStateRequired: !1,
   					videoRobustness: "",
   					audioRobustness: "",
   					sessionType: "",
   					serverCertificate: new Uint8Array(0),
   					serverCertificateUri: "",
   					individualizationServer: "",
   					headers: {}
   				}
   			};
   			return Yl(a, b, c || hm(), d, "")
   		}

   		function km(a, b, c) {
   			var d = c;
   			"AUTO" == d && (d = window.matchMedia("(color-gamut: p3)").matches ? "PQ" : "SDR");
   			var e = a.filter(function(h) {
   				return "variant" != h.type || h.hdr && h.hdr != d ? !1 : !0
   			});
   			c = [];
   			var f = Be(b, e.map(function(h) {
   				return h.language
   			}));
   			f && (c = e.filter(function(h) {
   				return ue(h.language) == f
   			}));
   			0 == c.length && (c = e.filter(function(h) {
   				return h.primary
   			}));
   			0 == c.length && (e.map(function(h) {
   				return h.language
   			}), c = e);
   			var g = c.filter(function(h) {
   				return h.height && 480 >= h.height
   			});
   			g.length && (g.sort(function(h, k) {
   				return k.height -
   					h.height
   			}), c = g.filter(function(h) {
   				return h.height == g[0].height
   			}));
   			b = [];
   			c.length && (e = Math.floor(c.length / 2), c.sort(function(h, k) {
   				return h.bandwidth - k.bandwidth
   			}), b.push(c[e]));
   			a = t(a);
   			for (c = a.next(); !c.done; c = a.next()) c = c.value, c.type != Ld && "image" != c.type || b.push(c);
   			return b
   		}

   		function im(a) {
   			return $l([a], a)
   		}

   		function jm(a) {
   			return $l([a], a)
   		}
   		S("gowatch.util.PlayerConfiguration", gm);
   		gm.mergeConfigObjects = lm;
   		gm.createDefault = hm;

   		function mm(a, b, c, d, e) {
   			bg.call(this);
   			this.K = a;
   			this.S = b;
   			this.Ja = e.networkingEngine;
   			this.V = d;
   			this.o = null;
   			this.pb = c;
   			this.ua = 0;
   			this.gb = e.uc;
   			this.B = e.gi;
   			this.hb = e.hi;
   			this.g = e.config;
   			this.j = this.C = this.h = null;
   			this.da = !1;
   			this.F = e.si;
   			this.na = !1;
   			this.l = null;
   			this.ca = !1;
   			this.i = this.A = null;
   			this.ba = !1;
   			this.J = new Map;
   			this.oa = !1;
   			this.Ka = e.ri;
   			this.aa = new Xk;
   			this.m = new Sf;
   			this.M = null;
   			this.s = !1;
   			this.Wa = e.jh;
   			this.fa = null;
   			this.Xa = e.ih;
   			this.N = !1;
   			this.H = [];
   			this.G = []
   		}
   		oa(mm, bg);

   		function nm(a, b, c) {
   			(a = b ? a.G : a.H) ? a.push(c): c()
   		}

   		function om(a) {
   			if (a.G)
   				for (var b = t(a.G), c = b.next(); !c.done; c = b.next()) c = c.value, c();
   			a.G = null
   		}

   		function pm(a, b) {
   			a.M = b;
   			a.N = !0;
   			if (a.H) {
   				b = t(a.H);
   				for (var c = b.next(); !c.done; c = b.next()) c = c.value, c()
   			}
   			a.H = null
   		}
   		r = mm.prototype;
   		r.getStartTime = function() {
   			return this.V
   		};
   		r.yc = function() {
   			return this.K
   		};
   		r.df = function() {
   			return this.h
   		};

   		function qm(a) {
   			a.ba = !0;
   			return a.i
   		}

   		function rm(a) {
   			a.da = !0;
   			return a.j
   		}

   		function sm(a) {
   			a.na = !0;
   			return a.F
   		}
   		r.getStats = function() {
   			return this.aa
   		};

   		function tm(a) {
   			a.ca = !0;
   			return a.l
   		}

   		function um(a) {
   			a.oa = !0;
   			return a.J
   		}
   		r.start = function() {
   			var a = this;
   			(function() {
   				var b;
   				return O(function(c) {
   					switch (c.g) {
   						case 1:
   							return E(c, Promise.resolve(), 2);
   						case 2:
   							return ua(c, 3), E(c, vm(a), 5);
   						case 5:
   							return wm(a), E(c, xm(a), 6);
   						case 6:
   							wm(a);
   							a.o || (a.o = new Cf(a.g.preferredAudioLanguage, a.g.preferredVariantRole, a.g.preferredAudioChannelCount, a.g.preferredVideoHdrLevel, a.g.preferSpatialAudio, a.g.preferredVideoLayout, a.g.preferredAudioLabel, a.g.preferredVideoLabel, a.g.mediaSource.codecSwitchingStrategy, a.g.manifest.dash.enableAudioGroups));
   							if (a.Xa) {
   								var d = a.g.abrFactory;
   								a.A = d;
   								a.i = d();
   								a.i.configure(a.g.abr)
   							}
   							if (a.Wa) {
   								d = a.h.presentationTimeline.T();
   								var e = lf(a.h.variants);
   								e = a.o.create(e);
   								a.i.configure(a.g.abr);
   								a.i.setVariants(Array.from(e.values()));
   								if (e = a.i.chooseVariant(!0)) a.fa = e, e.video && ym(a, e.video, d), e.audio && ym(a, e.audio, d)
   							}
   							return E(c, void 0, 7);
   						case 7:
   							wm(a);
   							a.m.resolve();
   							wa(c, 0);
   							break;
   						case 3:
   							b = ya(c), a.m.reject(b), F(c)
   					}
   				})
   			})()
   		};
   		r.dispatchEvent = function(a) {
   			return this.M ? this.M.dispatchEvent(a) : bg.prototype.dispatchEvent.call(this, a)
   		};
   		r.onError = function(a) {
   			2 === a.severity && (this.m.reject(a), this.destroy());
   			var b = (new Map).set("detail", a);
   			b = new U("error", b);
   			this.dispatchEvent(b);
   			b.defaultPrevented && (a.handled = !0)
   		};

   		function wm(a) {
   			if (a.s) throw new T(2, 7, 7003);
   		}

   		function zm(a, b) {
   			a.dispatchEvent(new U("onstatechange", (new Map).set("state", b)))
   		}

   		function vm(a) {
   			var b, c, d, e, f;
   			return O(function(g) {
   				if (1 == g.g) {
   					zm(a, "manifest-parser");
   					a.j || (a.C = qi(a.K, a.S), a.j = a.C(), a.j.configure(a.g.manifest));
   					b = Date.now() / 1E3;
   					zm(a, "manifest");
   					if (a.h) return g.u(2);
   					c = a;
   					return E(g, a.j.start(a.K, a.hb), 3)
   				}
   				2 != g.g && (c.h = g.h);
   				d = new U("manifestparsed", void 0);
   				a.dispatchEvent(d);
   				if (0 == a.h.variants.length) throw new T(2, 4, 4036);
   				Am(a.h);
   				e = Date.now() / 1E3;
   				f = e - b;
   				a.aa.F = f;
   				F(g)
   			})
   		}

   		function xm(a) {
   			var b, c, d, e, f;
   			return O(function(g) {
   				switch (g.g) {
   					case 1:
   						zm(a, "drm-engine");
   						a.ua = Date.now() / 1E3;
   						a.l = a.gb();
   						a.B.g = a.l;
   						a.l.configure(a.g.drm);
   						var h = a.B;
   						b = Je(a.h.variants, h.h.restrictions, h.i);
   						if (!b) {
   							g.u(2);
   							break
   						}
   						c = new U("trackschanged", void 0);
   						return E(g, Promise.resolve(), 3);
   					case 3:
   						wm(a), a.dispatchEvent(c);
   					case 2:
   						return d = lf(a.h.variants), E(g, Bh(a.l, d, a.h.offlineSessionIds), 4);
   					case 4:
   						return wm(a), E(g, ki(a.B, a.h), 5);
   					case 5:
   						e = g.h;
   						if (!e) {
   							g.u(0);
   							break
   						}
   						f = new U("trackschanged", void 0);
   						return E(g,
   							Promise.resolve(), 7);
   					case 7:
   						a.dispatchEvent(f), F(g)
   				}
   			})
   		}
   		r.configure = function(a, b) {
   			a = Zl(a, b);
   			lm(this.g, a)
   		};
   		r.getConfiguration = function() {
   			return Ce(this.g)
   		};

   		function ym(a, b, c) {
   			var d, e, f, g, h;
   			O(function(k) {
   				if (1 == k.g) return d = a.g.streaming.segmentPrefetchLimit || 2, e = new Yk(d, b, function(l, m, n) {
   					return Hl(l, m, n || null, a.g.streaming.retryParameters, a.Ja)
   				}), a.J.set(b.id, e), E(k, b.createSegmentIndex(), 2);
   				f = a.V || 0;
   				(h = (g = b.segmentIndex.Ab(f)) ? g.current() : null) || (h = b.segmentIndex.get(0));
   				h && (c ? h.ea && al(e, h.ea) : $k(e, h.startTime));
   				F(k)
   			})
   		}
   		r.Ti = function() {
   			return this.m
   		};
   		r.destroy = function() {
   			var a = this,
   				b, c, d;
   			return O(function(e) {
   				switch (e.g) {
   					case 1:
   						a.s = !0;
   						if (!a.j || a.da) {
   							e.u(2);
   							break
   						}
   						return E(e, a.j.stop(), 2);
   					case 2:
   						if (!a.i || a.ba) {
   							e.u(4);
   							break
   						}
   						return E(e, a.i.stop(), 4);
   					case 4:
   						a.F && !a.na && a.F.release();
   						if (!a.l || a.ca) {
   							e.u(6);
   							break
   						}
   						return E(e, a.l.destroy(), 6);
   					case 6:
   						if (0 < a.J.size && !a.oa)
   							for (b = t(a.J.values()), c = b.next(); !c.done; c = b.next()) d = c.value, gl(d);
   						F(e)
   				}
   			})
   		};

   		function Am(a) {
   			function b(c) {
   				return c.video && c.audio || c.video && c.video.codecs.includes(",")
   			}
   			a.variants.some(b) && (a.variants = a.variants.filter(b))
   		}
   		S("gowatch.media.PreloadManager", mm);
   		mm.prototype.destroy = mm.prototype.destroy;
   		mm.prototype.waitForFinish = mm.prototype.Ti;

   		function Bm(a, b) {
   			bg.call(this);
   			var c = this;
   			this.i = a;
   			this.l = b;
   			this.g = new Map;
   			this.m = [{
   				qc: null,
   				pc: Cm,
   				dc: function(d, e) {
   					return Dm(c, "enter", d, e)
   				}
   			}, {
   				qc: Em,
   				pc: Cm,
   				dc: function(d, e) {
   					return Dm(c, "enter", d, e)
   				}
   			}, {
   				qc: Sm,
   				pc: Cm,
   				dc: function(d, e) {
   					return Dm(c, "enter", d, e)
   				}
   			}, {
   				qc: Cm,
   				pc: Em,
   				dc: function(d, e) {
   					return Dm(c, "exit", d, e)
   				}
   			}, {
   				qc: Cm,
   				pc: Sm,
   				dc: function(d, e) {
   					return Dm(c, "exit", d, e)
   				}
   			}, {
   				qc: Em,
   				pc: Sm,
   				dc: function(d, e) {
   					return Dm(c, "skip", d, e)
   				}
   			}, {
   				qc: Sm,
   				pc: Em,
   				dc: function(d, e) {
   					return Dm(c, "skip", d, e)
   				}
   			}];
   			this.h = new hb;
   			this.h.D(this.i,
   				"regionremove",
   				function(d) {
   					c.g.delete(d.region)
   				})
   		}
   		oa(Bm, bg);
   		Bm.prototype.release = function() {
   			this.i = null;
   			this.g.clear();
   			this.h.release();
   			this.h = null;
   			bg.prototype.release.call(this)
   		};
   		Bm.prototype.j = function(a, b) {
   			if (!this.l || 0 != a) {
   				this.l = !1;
   				for (var c = t(this.i.g), d = c.next(); !d.done; d = c.next()) {
   					d = d.value;
   					var e = this.g.get(d),
   						f = a < d.startTime ? Em : a > d.endTime ? Sm : Cm;
   					this.g.set(d, f);
   					for (var g = t(this.m), h = g.next(); !h.done; h = g.next()) h = h.value, h.qc == e && h.pc == f && h.dc(d, b)
   				}
   			}
   		};

   		function Dm(a, b, c, d) {
   			b = new U(b, new Map([
   				["region", c],
   				["seeking", d]
   			]));
   			a.dispatchEvent(b)
   		}
   		var Em = 1,
   			Cm = 2,
   			Sm = 3;

   		function Tm(a, b, c) {
   			var d, e, f, g, h, k, l;
   			return O(function(m) {
   				switch (m.g) {
   					case 1:
   						var n = (new rc(a)).Qa.split("/").pop().split(".");
   						d = 1 == n.length ? "" : n.pop().toLowerCase();
   						if (e = Um[d]) return m.return(e);
   						f = 0;
   						g = jg([a], c);
   						ua(m, 2);
   						g.method = "HEAD";
   						return E(m, b.request(f, g).promise, 4);
   					case 4:
   						h = m.h;
   						e = h.headers["content-type"];
   						wa(m, 3);
   						break;
   					case 2:
   						k = ya(m);
   						if (!k || 1002 != k.code && 1001 != k.code) {
   							m.u(3);
   							break
   						}
   						g.method = "GET";
   						return E(m, b.request(f, g).promise, 6);
   					case 6:
   						l = m.h, e = l.headers["content-type"];
   					case 3:
   						return m.return(e ?
   							e.toLowerCase().split(";").shift() : "")
   				}
   			})
   		}
   		var Um = {
   			mp4: "video/mp4",
   			m4v: "video/mp4",
   			m4a: "audio/mp4",
   			webm: "video/webm",
   			weba: "audio/webm",
   			mkv: "video/webm",
   			ts: "video/mp2t",
   			ogv: "video/ogg",
   			ogg: "audio/ogg",
   			mpg: "video/mpeg",
   			mpeg: "video/mpeg",
   			m3u8: "application/x-mpegurl",
   			mpd: "application/dash+xml",
   			ism: "application/vnd.ms-sstr+xml",
   			mp3: "audio/mpeg",
   			aac: "audio/aac",
   			flac: "audio/flac",
   			wav: "audio/wav",
   			sbv: "text/x-subviewer",
   			srt: "text/srt",
   			vtt: "text/vtt",
   			webvtt: "text/vtt",
   			ttml: "application/ttml+xml",
   			lrc: "application/x-subtitle-lrc",
   			ssa: "text/x-ssa",
   			ass: "text/x-ssa"
   		};

   		function Vm(a, b) {
   			if (a.lineBreak) return "\n";
   			if (a.nestedCues.length) return a.nestedCues.map(function(g) {
   				return Vm(g, a)
   			}).join("");
   			var c = [],
   				d = 700 <= a.fontWeight,
   				e = "italic" == a.fontStyle,
   				f = a.textDecoration.includes("underline");
   			d && c.push(["b"]);
   			e && c.push(["i"]);
   			f && c.push(["u"]);
   			e = a.color;
   			"" == e && b && (e = b.color);
   			d = "";
   			(e = Wm(e)) && (d += "." + e);
   			e = a.backgroundColor;
   			"" == e && b && (e = b.backgroundColor);
   			(b = Wm(e)) && (d += ".bg_" + b);
   			d && c.push(["c", d]);
   			return c.reduceRight(function(g, h) {
   				var k = t(h);
   				h = k.next().value;
   				k = k.next().value;
   				return "<" + h + (void 0 === k ? "" : k) + ">" + g + "</" + h + ">"
   			}, a.payload)
   		}

   		function Wm(a) {
   			a = a.toLowerCase();
   			var b = a.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);
   			b ? a = "#" + (parseInt(b[1], 10) | 256).toString(16).slice(1) + (parseInt(b[2], 10) | 256).toString(16).slice(1) + (parseInt(b[3], 10) | 256).toString(16).slice(1) : a.startsWith("#") && 7 < a.length && (a = a.slice(0, 7));
   			switch (a) {
   				case "white":
   				case "#fff":
   				case "#ffffff":
   					return "white";
   				case "lime":
   				case "#0f0":
   				case "#00ff00":
   					return "lime";
   				case "cyan":
   				case "#0ff":
   				case "#00ffff":
   					return "cyan";
   				case "red":
   				case "#f00":
   				case "#ff0000":
   					return "red";
   				case "yellow":
   				case "#ff0":
   				case "#ffff00":
   					return "yellow";
   				case "magenta":
   				case "#f0f":
   				case "#ff00ff":
   					return "magenta";
   				case "blue":
   				case "#00f":
   				case "#0000ff":
   					return "blue";
   				case "black":
   				case "#000":
   				case "#000000":
   					return "black"
   			}
   			return null
   		}

   		function Xm(a, b) {
   			var c = [];
   			a = t(a);
   			for (var d = a.next(); !d.done; d = a.next())
   				if (d = d.value, d.isContainer) c.push.apply(c, x(Xm(d.nestedCues, d)));
   				else {
   					var e = d.clone();
   					e.nestedCues = [];
   					e.payload = Vm(d, b);
   					c.push(e)
   				} return c
   		};

   		function Ym(a, b) {
   			this.g = null;
   			for (var c = t(Array.from(a.textTracks)), d = c.next(); !d.done; d = c.next()) d = d.value, d.mode = "disabled", d.label == b && (this.g = d);
   			this.g || (this.g = a.addTextTrack("subtitles", b));
   			this.g.mode = "hidden"
   		}
   		r = Ym.prototype;
   		r.configure = function() {};
   		r.remove = function(a, b) {
   			if (!this.g) return !1;
   			Zm(this.g, function(c) {
   				return c.startTime < b && c.endTime > a
   			});
   			return !0
   		};
   		r.append = function(a) {
   			var b = Xm(a),
   				c = [];
   			a = this.g.cues ? Array.from(this.g.cues) : [];
   			var d = {};
   			b = t(b);
   			for (var e = b.next(); !e.done; d = {
   					sc: d.sc
   				}, e = b.next()) d.sc = e.value, a.some(function(f) {
   				return function(g) {
   					return g.startTime == f.sc.startTime && g.endTime == f.sc.endTime && g.text == f.sc.payload ? !0 : !1
   				}
   			}(d)) || (e = $m(d.sc)) && c.push(e);
   			a = c.slice().sort(function(f, g) {
   				return f.startTime != g.startTime ? f.startTime - g.startTime : f.endTime != g.endTime ? f.endTime - g.startTime : "line" in VTTCue.prototype ? c.indexOf(g) - c.indexOf(f) : c.indexOf(f) -
   					c.indexOf(g)
   			});
   			a = t(a);
   			for (d = a.next(); !d.done; d = a.next()) this.g.addCue(d.value)
   		};
   		r.destroy = function() {
   			this.g && (Zm(this.g, function() {
   				return !0
   			}), this.g.mode = "disabled");
   			this.g = null;
   			return Promise.resolve()
   		};
   		r.isTextVisible = function() {
   			return "showing" == this.g.mode
   		};
   		r.setTextVisibility = function(a) {
   			this.g.mode = a ? "showing" : "hidden"
   		};

   		function $m(a) {
   			if (a.startTime >= a.endTime) return null;
   			var b = new VTTCue(a.startTime, a.endTime, a.payload);
   			b.lineAlign = a.lineAlign;
   			b.positionAlign = a.positionAlign;
   			a.size && (b.size = a.size);
   			try {
   				b.align = a.textAlign
   			} catch (c) {}
   			"center" == a.textAlign && "center" != b.align && (b.align = "middle");
   			"vertical-lr" == a.writingMode ? b.vertical = "lr" : "vertical-rl" == a.writingMode && (b.vertical = "rl");
   			1 == a.lineInterpretation && (b.snapToLines = !1);
   			null != a.line && (b.line = a.line);
   			null != a.position && (b.position = a.position);
   			return b
   		}

   		function Zm(a, b) {
   			var c = a.mode;
   			a.mode = "showing" == c ? "showing" : "hidden";
   			for (var d = t(Array.from(a.cues)), e = d.next(); !e.done; e = d.next())(e = e.value) && b(e) && a.removeCue(e);
   			a.mode = c
   		}
   		S("gowatch.text.SimpleTextDisplayer", Ym);
   		Ym.prototype.setTextVisibility = Ym.prototype.setTextVisibility;
   		Ym.prototype.isTextVisible = Ym.prototype.isTextVisible;
   		Ym.prototype.destroy = Ym.prototype.destroy;
   		Ym.prototype.append = Ym.prototype.append;
   		Ym.prototype.remove = Ym.prototype.remove;
   		Ym.prototype.configure = Ym.prototype.configure;

   		function an() {}
   		r = an.prototype;
   		r.configure = function() {};
   		r.remove = function() {};
   		r.append = function() {};
   		r.destroy = function() {};
   		r.isTextVisible = function() {
   			return !1
   		};
   		r.setTextVisibility = function() {};
   		S("gowatch.text.StubTextDisplayer", an);
   		an.prototype.setTextVisibility = an.prototype.setTextVisibility;
   		an.prototype.isTextVisible = an.prototype.isTextVisible;
   		an.prototype.destroy = an.prototype.destroy;
   		an.prototype.append = an.prototype.append;
   		an.prototype.remove = an.prototype.remove;
   		an.prototype.configure = an.prototype.configure;

   		function bn() {}

   		function cn(a) {
   			for (; a.firstChild;) a.removeChild(a.firstChild)
   		}
   		S("gowatch.util.Dom", bn);
   		bn.removeAllChildren = cn;

   		function dn(a, b, c) {
   			var d = this;
   			this.m = !1;
   			this.h = [];
   			this.A = a;
   			this.s = b;
   			this.l = null;
   			this.g = document.createElement("div");
   			this.g.classList.add("gowatch-text-container");
   			this.g.style.textAlign = "center";
   			this.g.style.display = "flex";
   			this.g.style.flexDirection = "column";
   			this.g.style.alignItems = "center";
   			this.g.style.justifyContent = "flex-end";
   			this.s.appendChild(this.g);
   			c && c.captionsUpdatePeriod || qb("UITextDisplayer w/ config", "Please migrate to initializing UITextDisplayer with a config.");
   			this.C = (new Lc(function() {
   				d.A.paused ||
   					en(d)
   			})).Ua(c && c.captionsUpdatePeriod ? c.captionsUpdatePeriod : .25);
   			this.i = new Map;
   			this.j = new hb;
   			this.j.D(document, "fullscreenchange", function() {
   				en(d, !0)
   			});
   			this.j.D(this.A, "seeking", function() {
   				en(d, !0)
   			});
   			this.j.D(this.A, "resize", function() {
   				var e = d.A,
   					f = e.videoWidth;
   				e = e.videoHeight;
   				f && e ? d.l = f / e : d.l = null
   			});
   			this.o = null;
   			"ResizeObserver" in window && (this.o = new ResizeObserver(function() {
   				en(d, !0)
   			}), this.o.observe(this.g));
   			this.B = new Map
   		}
   		r = dn.prototype;
   		r.configure = function(a) {
   			this.C && this.C.Ua(a.captionsUpdatePeriod)
   		};
   		r.append = function(a) {
   			var b = [].concat(x(this.h)),
   				c = {};
   			a = t(a);
   			for (var d = a.next(); !d.done; c = {
   					Ed: c.Ed
   				}, d = a.next()) c.Ed = d.value, b.some(function(e) {
   				return function(f) {
   					return Zb(f, e.Ed)
   				}
   			}(c)) || this.h.push(c.Ed);
   			en(this)
   		};
   		r.destroy = function() {
   			if (!this.g) return Promise.resolve();
   			this.s.removeChild(this.g);
   			this.g = null;
   			this.m = !1;
   			this.h = [];
   			this.C && this.C.stop();
   			this.i.clear();
   			this.j && (this.j.release(), this.j = null);
   			this.o && (this.o.disconnect(), this.o = null);
   			return Promise.resolve()
   		};
   		r.remove = function(a, b) {
   			if (!this.g) return !1;
   			var c = this.h.length;
   			this.h = this.h.filter(function(d) {
   				return d.startTime < a || d.endTime >= b
   			});
   			en(this, c > this.h.length);
   			return !0
   		};
   		r.isTextVisible = function() {
   			return this.m
   		};
   		r.setTextVisibility = function(a) {
   			this.m = a
   		};

   		function fn(a, b) {
   			for (; null != b;) {
   				if (b == a.g) return !0;
   				b = b.parentElement
   			}
   			return !1
   		}

   		function gn(a, b, c, d, e) {
   			var f = !1,
   				g = [],
   				h = [];
   			b = t(b);
   			for (var k = b.next(); !k.done; k = b.next()) {
   				k = k.value;
   				e.push(k);
   				var l = a.i.get(k),
   					m = k.startTime <= d && k.endTime > d,
   					n = l ? l.Zg : null;
   				l && (g.push(l.Ne), l.jc && g.push(l.jc), m || (f = !0, a.i.delete(k), l = null));
   				m && (h.push(k), l ? fn(a, n) || (f = !0) : (hn(a, k, e), l = a.i.get(k), n = l.Zg, f = !0));
   				0 < k.nestedCues.length && n && gn(a, k.nestedCues, n, d, e);
   				e.pop()
   			}
   			if (f) {
   				d = t(g);
   				for (e = d.next(); !e.done; e = d.next()) e = e.value, e.parentElement && e.parentElement.removeChild(e);
   				h.sort(function(p, q) {
   					return p.startTime !=
   						q.startTime ? p.startTime - q.startTime : p.endTime - q.endTime
   				});
   				h = t(h);
   				for (k = h.next(); !k.done; k = h.next()) d = a.i.get(k.value), d.jc ? (d.jc.contains(c) && d.jc.removeChild(c), c.appendChild(d.jc), d.jc.appendChild(d.Ne)) : c.appendChild(d.Ne)
   			}
   		}

   		function en(a, b) {
   			if (a.g) {
   				var c = a.A.currentTime;
   				if (!a.m || (void 0 === b ? 0 : b)) {
   					b = t(a.B.values());
   					for (var d = b.next(); !d.done; d = b.next()) cn(d.value);
   					cn(a.g);
   					a.i.clear();
   					a.B.clear()
   				}
   				a.m && gn(a, a.h, a.g, c, [])
   			}
   		}

   		function hn(a, b, c) {
   			var d = 1 < c.length,
   				e = d ? "span" : "div";
   			b.lineBreak && (e = "br");
   			b.rubyTag && (e = b.rubyTag);
   			d = !d && 0 < b.nestedCues.length;
   			var f = document.createElement(e);
   			"br" != e && jn(a, f, b, c, d);
   			c = null;
   			if (b.region && b.region.id) {
   				c = b.region;
   				e = a.l === 4 / 3 ? 2.5 : 1.9;
   				var g = c.id + "_" + c.width + "x" + c.height + (c.heightUnits == gc ? "%" : "px") + "-" + c.viewportAnchorX + "x" + c.viewportAnchorY + (c.viewportAnchorUnits == gc ? "%" : "px");
   				if (a.B.has(g)) c = a.B.get(g);
   				else {
   					var h = document.createElement("span"),
   						k = c.heightUnits == gc ? "%" : "px",
   						l = c.widthUnits ==
   						gc ? "%" : "px",
   						m = c.viewportAnchorUnits == gc ? "%" : "px";
   					h.id = "gowatch-text-region---" + g;
   					h.classList.add("gowatch-text-region");
   					h.style.position = "absolute";
   					2 === c.heightUnits && 2 === c.widthUnits ? (h.style.height = 5.33 * c.height + "%", h.style.width = c.width * e + "%") : (h.style.height = c.height + k, h.style.width = c.width + l);
   					2 === c.viewportAnchorUnits ? (k = c.viewportAnchorY / 75 * 100, l = c.viewportAnchorX / (a.l === 4 / 3 ? 160 : 210) * 100, k -= c.regionAnchorY * c.height * 5.33 / 100, l -= c.regionAnchorX * c.width * e / 100, h.style.top = k + "%", h.style.left = l + "%") :
   						(h.style.top = c.viewportAnchorY - c.regionAnchorY * c.height / 100 + m, h.style.left = c.viewportAnchorX - c.regionAnchorX * c.width / 100 + m);
   					h.style.display = "flex";
   					h.style.flexDirection = "column";
   					h.style.alignItems = "center";
   					h.style.justifyContent = "before" == b.displayAlign ? "flex-start" : "center" == b.displayAlign ? "center" : "flex-end";
   					a.B.set(g, h);
   					c = h
   				}
   			}
   			e = f;
   			d && (e = document.createElement("span"), e.classList.add("gowatch-text-wrapper"), e.style.backgroundColor = b.backgroundColor, e.style.lineHeight = "normal", f.appendChild(e));
   			a.i.set(b, {
   				Ne: f,
   				Zg: e,
   				jc: c
   			})
   		}

   		function kn(a) {
   			var b = a.direction,
   				c = a.positionAlign;
   			a = a.textAlign;
   			return c !== Pb ? c : "left" === a || "start" === a && b === Rb || "end" === a && "rtl" === b ? "line-left" : "right" === a || "start" === a && "rtl" === b || "end" === a && b === Rb ? "line-right" : "center"
   		}

   		function jn(a, b, c, d, e) {
   			var f = b.style,
   				g = 0 == c.nestedCues.length,
   				h = 1 < d.length;
   			f.whiteSpace = "pre-wrap";
   			var k = c.payload.replace(/\s+$/g, function(m) {
   				return "\u00a0".repeat(m.length)
   			});
   			f.webkitTextStrokeColor = c.textStrokeColor;
   			f.webkitTextStrokeWidth = c.textStrokeWidth;
   			f.color = c.color;
   			f.direction = c.direction;
   			f.opacity = c.opacity;
   			f.paddingLeft = ln(c.linePadding, c, a.s);
   			f.paddingRight = ln(c.linePadding, c, a.s);
   			f.textCombineUpright = c.textCombineUpright;
   			f.textShadow = c.textShadow;
   			if (c.backgroundImage) f.backgroundImage =
   				"url('" + c.backgroundImage + "')", f.backgroundRepeat = "no-repeat", f.backgroundSize = "contain", f.backgroundPosition = "center", f.width = "100%", f.height = "100%";
   			else {
   				if (c.nestedCues.length) var l = b;
   				else l = document.createElement("span"), b.appendChild(l);
   				c.border && (l.style.border = c.border);
   				!e && ((b = mn(d, function(m) {
   					return m.backgroundColor
   				})) ? l.style.backgroundColor = b : k && (l.style.backgroundColor = "rgba(0, 0, 0, 0.8)"), b = mn(d, function(m) {
   					return m.fontFamily
   				})) && (l.style.fontFamily = b);
   				k && (l.textContent = k)
   			}
   			h && !d[d.length -
   				1].isContainer ? f.display = "inline" : (f.display = "flex", f.flexDirection = "column", f.alignItems = "center", f.justifyContent = "before" == c.displayAlign ? "flex-start" : "center" == c.displayAlign ? "center" : "flex-end");
   			g || (f.margin = "0");
   			f.fontFamily = c.fontFamily;
   			f.fontWeight = c.fontWeight.toString();
   			f.fontStyle = c.fontStyle;
   			f.letterSpacing = c.letterSpacing;
   			f.fontSize = ln(c.fontSize, c, a.s);
   			d = c.line;
   			null != d && (g = c.lineInterpretation, g == Tb && (g = 1, h = 16, a.l && 1 > a.l && (h = 32), d = 0 > d ? 100 + d / h * 100 : d / h * 100), 1 == g && (f.position = "absolute",
   				c.writingMode == Sb ? (f.width = "100%", c.lineAlign == Ub ? f.top = d + "%" : "end" == c.lineAlign && (f.bottom = 100 - d + "%")) : "vertical-lr" == c.writingMode ? (f.height = "100%", c.lineAlign == Ub ? f.left = d + "%" : "end" == c.lineAlign && (f.right = 100 - d + "%")) : (f.height = "100%", c.lineAlign == Ub ? f.right = d + "%" : "end" == c.lineAlign && (f.left = 100 - d + "%"))));
   			f.lineHeight = c.lineHeight;
   			null != c.position && (c.writingMode == Sb ? f.paddingLeft = c.position : f.paddingTop = c.position);
   			a = kn(c);
   			"line-left" == a ? f.cssFloat = "left" : "line-right" == a && (f.cssFloat = "right");
   			f.textAlign = c.textAlign;
   			f.textDecoration = c.textDecoration.join(" ");
   			f.writingMode = c.writingMode;
   			"writingMode" in document.documentElement.style && f.writingMode == c.writingMode || (f.webkitWritingMode = c.writingMode);
   			c.size && (c.writingMode == Sb ? f.width = c.size + "%" : f.height = c.size + "%")
   		}

   		function ln(a, b, c) {
   			var d = (d = (new RegExp(/(\d*\.?\d+)([a-z]+|%+)/)).exec(a)) ? {
   				value: Number(d[1]),
   				unit: d[2]
   			} : null;
   			if (!d) return a;
   			var e = d.value;
   			switch (d.unit) {
   				case "%":
   					return e / 100 * c.clientHeight / b.cellResolution.rows + "px";
   				case "c":
   					return c.clientHeight * e / b.cellResolution.rows + "px";
   				default:
   					return a
   			}
   		}

   		function mn(a, b) {
   			for (var c = a.length - 1; 0 <= c; c--) {
   				var d = b(a[c]);
   				if (d || 0 === d) return d
   			}
   			return null
   		}
   		S("gowatch.text.UITextDisplayer", dn);
   		dn.prototype.setTextVisibility = dn.prototype.setTextVisibility;
   		dn.prototype.isTextVisible = dn.prototype.isTextVisible;
   		dn.prototype.remove = dn.prototype.remove;
   		dn.prototype.destroy = dn.prototype.destroy;
   		dn.prototype.append = dn.prototype.append;
   		dn.prototype.configure = dn.prototype.configure;

   		function nn(a, b) {
   			function c(f) {
   				for (var g = f, h = t(b), k = h.next(); !k.done; k = h.next()) k = k.value, k.end && k.start < f && (g += k.end - k.start);
   				f = Math.floor(g / 3600);
   				h = Math.floor(g / 60 % 60);
   				k = Math.floor(g % 60);
   				g = Math.floor(1E3 * g % 1E3);
   				return (10 > f ? "0" : "") + f + ":" + (10 > h ? "0" : "") + h + ":" + (10 > k ? "0" : "") + k + "." + (100 > g ? 10 > g ? "00" : "0" : "") + g
   			}
   			var d = Xm(a);
   			a = "WEBVTT\n\n";
   			d = t(d);
   			for (var e = d.next(); !e.done; e = d.next()) e = e.value, a += c(e.startTime) + " --\x3e " + c(e.endTime) + function(f) {
   				var g = [];
   				switch (f.textAlign) {
   					case "left":
   						g.push("align:left");
   						break;
   					case "right":
   						g.push("align:right");
   						break;
   					case Qb:
   						g.push("align:middle");
   						break;
   					case "start":
   						g.push("align:start");
   						break;
   					case "end":
   						g.push("align:end")
   				}
   				switch (f.writingMode) {
   					case "vertical-lr":
   						g.push("vertical:lr");
   						break;
   					case "vertical-rl":
   						g.push("vertical:rl")
   				}
   				return g.length ? " " + g.join(" ") : ""
   			}(e) + "\n", a += e.payload + "\n\n";
   			return a
   		}
   		S("gowatch.text.WebVttGenerator", function() {});

   		function on(a, b) {
   			this.h = a;
   			this.g = b;
   			this.m = void 0;
   			this.i = !1;
   			this.l = !0;
   			this.j = !1
   		}
   		on.prototype.configure = function(a) {
   			this.g = a
   		};

   		function pn(a, b, c) {
   			try {
   				if (!a.g.enabled) return b;
   				var d = qn(a);
   				a: {
   					switch (c.toLowerCase()) {
   						case "audio/mp4":
   						case "audio/webm":
   						case "audio/ogg":
   						case "audio/mpeg":
   						case "audio/aac":
   						case "audio/flac":
   						case "audio/wav":
   							var e = rn;
   							break a;
   						case "video/webm":
   						case "video/mp4":
   						case "video/mpeg":
   						case "video/mp2t":
   							e = sn;
   							break a;
   						case "application/x-mpegurl":
   						case "application/vnd.apple.mpegurl":
   						case "application/dash+xml":
   						case "video/vnd.mpeg.dash.mpd":
   						case "application/vnd.ms-sstr+xml":
   							e = tn;
   							break a
   					}
   					e = void 0
   				}
   				d.ot = e;
   				d.su = !0;
   				var f = un(d);
   				return vn(b, f)
   			} catch (g) {
   				return bb("CMCD_SRC_ERROR", "Could not generate src CMCD data.", g), b
   			}
   		}

   		function qn(a) {
   			a.g.sessionId || (a.g.sessionId = window.crypto.randomUUID());
   			return {
   				v: 1,
   				sf: a.m,
   				sid: a.g.sessionId,
   				cid: a.g.contentId,
   				mtp: a.h.getBandwidthEstimate() / 1E3
   			}
   		}

   		function wn(a, b, c) {
   			c = void 0 === c ? {} : c;
   			var d = void 0 === d ? a.g.useHeaders : d;
   			if (a.g.enabled) {
   				Object.assign(c, qn(a));
   				c.pr = a.h.ib();
   				var e = c.ot === xn || c.ot === sn;
   				a.j && e && (c.bs = !0, c.su = !0, a.j = !1);
   				null == c.su && (c.su = a.l);
   				a = yn(a, c);
   				if (d) d = zn(a), Object.keys(d).length && Object.assign(b.headers, d);
   				else {
   					var f = un(a);
   					f && (b.uris = b.uris.map(function(g) {
   						return vn(g, f)
   					}))
   				}
   			}
   		}

   		function yn(a, b) {
   			var c = a.g.includeKeys;
   			return c.length ? Object.keys(b).reduce(function(d, e) {
   				c.includes(e) && (d[e] = b[e]);
   				return d
   			}, {}) : b
   		}

   		function An(a) {
   			if (0 === a.type) return Bn;
   			if (a = a.stream) {
   				var b = a.type;
   				if ("video" == b) return a.codecs && a.codecs.includes(",") ? sn : xn;
   				if ("audio" == b) return rn;
   				if ("text" == b) return "application/mp4" === a.mimeType ? Cn : Dn
   			}
   		}

   		function En(a, b) {
   			b = a.h.rb()[b];
   			if (!b.length) return NaN;
   			var c = a.h.getCurrentTime();
   			return (a = b.find(function(d) {
   				return d.start <= c && d.end >= c
   			})) ? 1E3 * (a.end - c) : NaN
   		}

   		function Fn(a, b) {
   			b = a.h.rb()[b];
   			if (!b.length) return 0;
   			var c = a.h.getCurrentTime();
   			return (a = b.find(function(d) {
   				return d.start <= c && d.end >= c
   			})) ? 1E3 * (a.end - c) : 0
   		}

   		function Gn(a, b) {
   			var c = a.h.Nb();
   			if (!c.length) return NaN;
   			a = c[0];
   			c = t(c);
   			for (var d = c.next(); !d.done; d = c.next()) d = d.value, "variant" === d.type && d.bandwidth > a.bandwidth && (a = d);
   			switch (b) {
   				case xn:
   					return a.videoBandwidth || NaN;
   				case rn:
   					return a.audioBandwidth || NaN;
   				default:
   					return a.bandwidth
   			}
   		}

   		function un(a) {
   			function b(n) {
   				return 100 * c(n / 100)
   			}

   			function c(n) {
   				return Math.round(n)
   			}

   			function d(n) {
   				return !Number.isNaN(n) && null != n && "" !== n && !1 !== n
   			}
   			var e = [],
   				f = {
   					br: c,
   					d: c,
   					bl: b,
   					dl: b,
   					mtp: b,
   					nor: function(n) {
   						return encodeURIComponent(n)
   					},
   					rtp: b,
   					tb: c
   				},
   				g = Object.keys(a || {}).sort();
   			g = t(g);
   			for (var h = g.next(); !h.done; h = g.next()) {
   				h = h.value;
   				var k = a[h];
   				if (d(k) && ("v" !== h || 1 !== k) && ("pr" != h || 1 !== k)) {
   					var l = f[h];
   					l && (k = l(k));
   					l = typeof k;
   					var m = void 0;
   					m = "string" === l && "ot" !== h && "sf" !== h && "st" !== h ? h + "=" + JSON.stringify(k) : "boolean" ===
   						l ? h : "symbol" === l ? h + "=" + k.description : h + "=" + k;
   					e.push(m)
   				}
   			}
   			return e.join(",")
   		}

   		function zn(a) {
   			var b = Object.keys(a),
   				c = {},
   				d = ["Object", "Request", "Session", "Status"],
   				e = [{}, {}, {}, {}],
   				f = {
   					br: 0,
   					d: 0,
   					ot: 0,
   					tb: 0,
   					bl: 1,
   					dl: 1,
   					mtp: 1,
   					nor: 1,
   					nrr: 1,
   					su: 1,
   					cid: 2,
   					pr: 2,
   					sf: 2,
   					sid: 2,
   					st: 2,
   					v: 2,
   					bs: 3,
   					rtp: 3
   				};
   			b = t(b);
   			for (var g = b.next(); !g.done; g = b.next()) g = g.value, e[null != f[g] ? f[g] : 1][g] = a[g];
   			for (a = 0; a < e.length; a++)(f = un(e[a])) && (c["CMCD-" + d[a]] = f);
   			return c
   		}

   		function vn(a, b) {
   			if (!b || a.includes("offline:")) return a;
   			a = new rc(a);
   			a.g.set("CMCD", b);
   			return a.toString()
   		}
   		var tn = "m",
   			rn = "a",
   			xn = "v",
   			sn = "av",
   			Bn = "i",
   			Dn = "c",
   			Cn = "tt";
   		S("gowatch.util.CmcdManager.StreamingFormat", {
   			DASH: "d",
   			HLS: "h",
   			bh: "s",
   			OTHER: "o"
   		});

   		function Hn(a) {
   			this.h = a;
   			this.g = null
   		}
   		r = Hn.prototype;
   		r.configure = function(a) {
   			this.h = a
   		};
   		r.sg = function() {
   			return this.h.enabled && this.h.applyMaximumSuggestedBitrate && this.g && this.g.has(In) ? 1E3 * this.g.get(In) : null
   		};
   		r.rg = function() {
   			return this.h.enabled && this.g && this.g.has(Jn) ? 1E3 * this.g.get(Jn) : null
   		};
   		r.Lh = function() {
   			return this.h.enabled && this.g && this.g.has(Kn) ? this.g.get(Kn) : null
   		};
   		r.Mh = function() {
   			return this.h.enabled && this.g && this.g.has(Ln) ? this.g.get(Ln) : null
   		};
   		r.getBandwidthEstimate = function(a) {
   			var b = this.rg();
   			if (!b) return a;
   			var c = this.h.estimatedThroughputWeightRatio;
   			return 0 < c && 1 >= c ? a * (1 - c) + b * c : a
   		};

   		function Mn(a) {
   			return a ? "false" === a.toLowerCase() ? !1 : /^[-0-9]/.test(a) ? parseInt(a, 10) : a.replace(/["]+/g, "") : !0
   		}
   		S("gowatch.util.CmsdManager", Hn);
   		Hn.prototype.getBandwidthEstimate = Hn.prototype.getBandwidthEstimate;
   		Hn.prototype.getRoundTripTime = Hn.prototype.Mh;
   		Hn.prototype.getResponseDelay = Hn.prototype.Lh;
   		Hn.prototype.getEstimatedThroughput = Hn.prototype.rg;
   		Hn.prototype.getMaxBitrate = Hn.prototype.sg;
   		var Jn = "etp",
   			In = "mb",
   			Kn = "rd",
   			Ln = "rtt";

   		function Nn() {
   			this.g = null;
   			this.h = []
   		}

   		function On(a, b) {
   			return O(function(c) {
   				if (1 == c.g) return a.g ? E(c, new Promise(function(d) {
   					return a.h.push(d)
   				}), 2) : c.u(2);
   				a.g = b;
   				F(c)
   			})
   		}
   		Nn.prototype.release = function() {
   			0 < this.h.length ? this.h.shift()() : this.g = null
   		};

   		function X(a, b) {
   			bg.call(this);
   			var c = this;
   			this.l = Pn;
   			this.ae = this.h = null;
   			this.da = !1;
   			this.oe = new hb;
   			this.fd = new hb;
   			this.m = new hb;
   			this.Ka = new hb;
   			this.ed = new hb;
   			this.C = this.F = this.B = this.G = null;
   			this.qe = 0;
   			this.V = new Nn;
   			this.fa = this.Bf = this.aa = this.i = this.Xa = this.J = this.j = this.pb = this.K = this.$g = this.ba = this.S = this.dd = this.M = this.de = this.H = this.hb = null;
   			this.gb = !1;
   			this.ua = this.o = null;
   			this.Vf = 1E9;
   			this.td = [];
   			this.N = NaN;
   			this.g = Qn(this);
   			this.ca = {
   				width: Infinity,
   				height: Infinity
   			};
   			this.$d = new ji(this.g, this.ca, null);
   			this.Ff = [];
   			this.s = null;
   			this.Ja = new Cf(this.g.preferredAudioLanguage, this.g.preferredVariantRole, this.g.preferredAudioChannelCount, this.g.preferredVideoHdrLevel, this.g.preferSpatialAudio, this.g.preferredVideoLayout, this.g.preferredAudioLabel, this.g.preferredVideoLabel, this.g.mediaSource.codecSwitchingStrategy, this.g.manifest.dash.enableAudioGroups);
   			this.Wa = this.g.preferredTextLanguage;
   			this.pd = this.g.preferredTextRole;
   			this.md = this.g.preferForcedSubs;
   			this.gd = [];
   			b && b(this);
   			this.S = Rn(this);
   			this.ba = new Hn(this.g.cmsd);
   			this.G = Sn(this);
   			this.G.Mf(this.g.streaming.forceHTTP);
   			this.G.Nf(this.g.streaming.forceHTTPS);
   			this.$f = this.na = this.A = null;
   			this.Yf = new Lc(function() {
   				return O(function(d) {
   					if (1 == d.g) return c.na ? E(d, c.tc(c.$f, !0), 3) : d.u(0);
   					if (4 != d.g) return E(d, c.load(c.na), 4);
   					c.$f.play();
   					c.na = null;
   					F(d)
   				})
   			});
   			Tn && (this.A = Tn(), this.A.configure(this.g.ads), this.ed.D(this.A, "ad-started", function(d) {
   				var e, f, g;
   				return O(function(h) {
   					if (1 == h.g) {
   						if (c.g.ads.supportsMultipleMediaElements) return h.return();
   						e = d.originalEvent;
   						if (!e) return h.return();
   						f = google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED;
   						if (e.type != f) return h.return();
   						c.Yf.stop();
   						if (c.na) return h.u(0);
   						c.$f = c.h;
   						g = c;
   						return E(h, c.kg(!0), 3)
   					}
   					g.na = h.h;
   					F(h)
   				})
   			}), this.ed.D(this.A, "ad-stopped", function(d) {
   				c.g.ads.supportsMultipleMediaElements || (d = d.originalEvent) && d.type == google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED && c.Yf.W(.1)
   			}));
   			this.oe.D(window, "online", function() {
   				Un(c);
   				c.Ef()
   			});
   			this.je = new Lc(function() {
   				return Vn(c)
   			});
   			this.oa = null;
   			a && (qb("Player w/ mediaElement", "Please migrate from initializing Player with a mediaElement; use the attach method instead."),
   				this.tc(a, !0))
   		}
   		oa(X, bg);

   		function Wn(a) {
   			null != a.K && (yj(a.K), a.K.release(), a.K = null)
   		}

   		function Xn(a, b) {
   			if (b.lcevc.enabled) {
   				var c = a.Nb();
   				c && c[0] && "video/mp2t" == c[0].videoMimeType && (Qc() || Rc()) && (b.mediaSource.forceTransmux || ab("LCEVC Warning: For MPEG-2 TS decoding the config.mediaSource.forceTransmux must be enabled."));
   				Wn(a);
   				null == a.K && (a.K = new xj(a.h, a.$g, b.lcevc), a.F && (a.F.S = a.K))
   			} else Wn(a)
   		}

   		function Yn(a, b) {
   			return new U(a, b)
   		}
   		r = X.prototype;
   		r.destroy = function() {
   			var a = this,
   				b, c, d, e, f;
   			return O(function(g) {
   				switch (g.g) {
   					case 1:
   						if (a.l == Zn) return g.return();
   						Wn(a);
   						b = a.detach();
   						a.l = Zn;
   						return E(g, b, 2);
   					case 2:
   						c = [];
   						d = t(a.Ff);
   						for (e = d.next(); !e.done; e = d.next()) f = e.value, f.s || c.push(f.destroy());
   						a.Ff = [];
   						return E(g, Promise.all(c), 3);
   					case 3:
   						a.oe && (a.oe.release(), a.oe = null);
   						a.fd && (a.fd.release(), a.fd = null);
   						a.m && (a.m.release(), a.m = null);
   						a.Ka && (a.Ka.release(), a.Ka = null);
   						a.ed && (a.ed.release(), a.ed = null);
   						a.ua = null;
   						a.g = null;
   						a.s = null;
   						a.ae = null;
   						a.S = null;
   						a.ba =
   							null;
   						if (!a.G) {
   							g.u(4);
   							break
   						}
   						return E(g, a.G.destroy(), 5);
   					case 5:
   						a.G = null;
   					case 4:
   						a.o && (a.o.release(), a.o = null), bg.prototype.release.call(a), F(g)
   				}
   			})
   		};

   		function $n(a, b) {
   			a.dispatchEvent(Yn("onstatechange", (new Map).set("state", b)))
   		}
   		r.tc = function(a, b) {
   			b = void 0 === b ? !0 : b;
   			var c = this,
   				d, e, f;
   			return O(function(g) {
   				switch (g.g) {
   					case 1:
   						if (c.l == Zn) throw new T(2, 7, 7E3);
   						d = c.h && c.h == a;
   						if (!c.h || c.h == a) {
   							g.u(2);
   							break
   						}
   						return E(g, c.detach(), 2);
   					case 2:
   						return E(g, ao(c, "attach"), 4);
   					case 4:
   						if (g.h) return g.return();
   						ua(g, 5, 6);
   						d || ($n(c, "attach"), e = function() {
   							var h = bo(c);
   							h && co(c, h)
   						}, c.fd.D(a, "error", e), c.h = a);
   						if (!b || !Mc() || c.F) {
   							g.u(6);
   							break
   						}
   						return E(g, eo(c), 6);
   					case 6:
   						za(g);
   						c.V.release();
   						Ba(g, 0);
   						break;
   					case 5:
   						return f = ya(g), E(g, c.detach(), 10);
   					case 10:
   						throw f;
   				}
   			})
   		};
   		r.kh = function(a) {
   			this.$g = a
   		};
   		r.detach = function(a) {
   			a = void 0 === a ? !1 : a;
   			var b = this;
   			return O(function(c) {
   				if (1 == c.g) {
   					if (b.l == Zn) throw new T(2, 7, 7E3);
   					return E(c, b.nc(!1, a), 2)
   				}
   				if (3 != c.g) return E(c, ao(b, "detach"), 3);
   				if (c.h) return c.return();
   				try {
   					b.h && (b.fd.nb(), b.h = null), $n(b, "detach"), b.A && !a && b.A.release()
   				} finally {
   					b.V.release()
   				}
   				F(c)
   			})
   		};

   		function ao(a, b) {
   			var c;
   			return O(function(d) {
   				return 1 == d.g ? (c = ++a.qe, E(d, On(a.V, b), 2)) : c != a.qe ? (a.V.release(), d.return(!0)) : d.return(!1)
   			})
   		}
   		r.nc = function(a, b) {
   			a = void 0 === a ? !0 : a;
   			b = void 0 === b ? !1 : b;
   			var c = this,
   				d, e, f, g, h, k, l, m, n;
   			return O(function(p) {
   				switch (p.g) {
   					case 1:
   						return c.l != Zn && (c.l = Pn), E(p, ao(c, "unload"), 2);
   					case 2:
   						if (p.h) return p.return();
   						va(p, 3);
   						c.gb = !1;
   						$n(c, "unload");
   						a && !Mc() && (a = !1);
   						Wn(c);
   						d = c.gd.map(function(q) {
   							return q()
   						});
   						c.gd = [];
   						return E(p, Promise.all(d), 5);
   					case 5:
   						c.dispatchEvent(Yn("unloading"));
   						c.dd && (c.dd.release(), c.dd = null);
   						c.h && (c.m.nb(), c.Ka.nb());
   						c.je.stop();
   						c.hb && (c.hb.release(), c.hb = null);
   						c.de && (c.de.stop(), c.de = null);
   						if (!c.J) {
   							p.u(6);
   							break
   						}
   						return E(p, c.J.stop(), 7);
   					case 7:
   						c.J = null, c.Xa = null;
   					case 6:
   						if (!c.o) {
   							p.u(8);
   							break
   						}
   						return E(p, c.o.stop(), 8);
   					case 8:
   						if (!c.j) {
   							p.u(10);
   							break
   						}
   						return E(p, c.j.destroy(), 11);
   					case 11:
   						c.j = null;
   					case 10:
   						c.H && (c.H.release(), c.H = null);
   						c.C && (c.C.release(), c.C = null);
   						if (!c.F) {
   							p.u(12);
   							break
   						}
   						return E(p, c.F.destroy(), 13);
   					case 13:
   						c.F = null;
   					case 12:
   						if (c.A && !b) c.A.onAssetUnload();
   						c.na && !b && (c.na.destroy(), c.na = null);
   						b || c.Yf.stop();
   						c.ba && (c.ba.g = null);
   						c.h && cn(c.h);
   						if (!c.h || !c.h.src) {
   							p.u(14);
   							break
   						}
   						return E(p,
   							new Promise(function(q) {
   								return (new Lc(q)).W(.1)
   							}), 15);
   					case 15:
   						c.h.removeAttribute("src"), c.h.load();
   					case 14:
   						if (!c.B) {
   							p.u(16);
   							break
   						}
   						return E(p, c.B.destroy(), 17);
   					case 17:
   						c.B = null;
   					case 16:
   						c.oa && c.aa != c.oa.yc() && (c.oa.s || c.oa.destroy(), c.oa = null);
   						c.aa = null;
   						c.Bf = null;
   						c.M = null;
   						if (c.i) {
   							e = t(c.i.variants);
   							for (f = e.next(); !f.done; f = e.next())
   								for (g = f.value, h = t([g.audio, g.video]), k = h.next(); !k.done; k = h.next())(l = k.value) && l.segmentIndex && l.segmentIndex.release();
   							m = t(c.i.textStreams);
   							for (k = m.next(); !k.done; k = m.next()) n =
   								k.value, n.segmentIndex && n.segmentIndex.release()
   						}
   						c.g.streaming.clearDecodingCache && (Ve = {}, ii.clear());
   						c.i = null;
   						c.s = new Xk;
   						c.Rf = null;
   						c.td = [];
   						c.N = NaN;
   						fo(c);
   					case 3:
   						za(p);
   						c.V.release();
   						Ba(p, 4);
   						break;
   					case 4:
   						if (a && Mc() && !c.F) return E(p, eo(c), 0);
   						p.u(0)
   				}
   			})
   		};
   		r.Si = function(a) {
   			this.fa = a
   		};
   		r.load = function(a, b, c) {
   			b = void 0 === b ? null : b;
   			var d = this,
   				e, f, g, h, k, l, m, n, p, q, u, v, w;
   			return O(function(A) {
   				switch (A.g) {
   					case 1:
   						if (d.l == Zn) throw new T(2, 7, 7E3);
   						e = null;
   						f = "";
   						a instanceof mm ? (e = a, f = e.yc() || "") : f = a || "";
   						return E(A, On(d.V, "load"), 2);
   					case 2:
   						d.V.release();
   						if (!d.h) throw new T(2, 7, 7002);
   						if (!d.aa) {
   							A.u(3);
   							break
   						}
   						d.aa = f;
   						return E(A, d.nc(!1), 3);
   					case 3:
   						g = ++d.qe;
   						h = function() {
   							return O(function(z) {
   								if (1 == z.g) return d.qe == g ? z.u(0) : e ? E(z, e.destroy(), 3) : z.u(3);
   								throw new T(2, 7, 7E3);
   							})
   						};
   						k = function(z, y) {
   							return O(function(B) {
   								switch (B.g) {
   									case 1:
   										return va(B,
   											2), E(B, On(d.V, y), 4);
   									case 4:
   										return E(B, h(), 5);
   									case 5:
   										return E(B, z(), 6);
   									case 6:
   										return E(B, h(), 7);
   									case 7:
   										e && d.g && (e.g = d.g);
   									case 2:
   										za(B), d.V.release(), Ba(B, 0)
   								}
   							})
   						};
   						ua(A, 5, 6);
   						null == b && e && (b = e.getStartTime());
   						d.fa = b;
   						d.gb = !1;
   						d.dispatchEvent(Yn("loading"));
   						if (e) {
   							c = e.S;
   							A.u(8);
   							break
   						}
   						if (c) {
   							A.u(8);
   							break
   						}
   						return E(A, k(function() {
   							return O(function(z) {
   								if (1 == z.g) return E(z, go(d, f), 2);
   								c = z.h;
   								F(z)
   							})
   						}, "guessMimeType_"), 8);
   					case 8:
   						l = !!e;
   						if (e) {
   							pm(e, d);
   							d.s = e.getStats();
   							A.u(11);
   							break
   						}
   						return E(A, ho(d, f, b, c, !0), 12);
   					case 12:
   						(e =
   							A.h) ? (pm(e, d), d.s = e.getStats(), e.start(), e.m.catch(function() {})) : d.s = new Xk;
   					case 11:
   						m = !e;
   						n = e ? e.pb : Date.now() / 1E3;
   						d.s = e ? e.getStats() : new Xk;
   						d.aa = f;
   						d.Bf = c || null;
   						if (m) return E(A, k(function() {
   							return O(function(z) {
   								return E(z, io(d, c), 0)
   							})
   						}, "initializeSrcEqualsDrmInner_"), 20);
   						if (d.F) {
   							A.u(15);
   							break
   						}
   						return E(A, k(function() {
   							return O(function(z) {
   								return E(z, eo(d), 0)
   							})
   						}, "initializeMediaSourceEngineInner_"), 15);
   					case 15:
   						return E(A, k(function() {
   							return O(function(z) {
   								return E(z, e.m, 0)
   							})
   						}, "waitForFinish"), 17);
   					case 17:
   						d.g =
   							e.getConfiguration();
   						d.$d = e.B;
   						d.Xa = e.C;
   						d.J = rm(e);
   						d.dd = sm(e);
   						d.pb = e.Ka;
   						d.i = e.df();
   						if (p = e.o) d.Ja = p;
   						l && d.h && "AUDIO" === d.h.nodeName && (jo(d), d.configure("manifest.disableVideo", !0));
   						d.B = tm(e);
   						return E(A, k(function() {
   							return O(function(z) {
   								return E(z, d.B.tc(d.h), 0)
   							})
   						}, "drmEngine_.attach"), 18);
   					case 18:
   						return !(q = e.A) || d.ua && d.ua == q || (d.o = qm(e), d.ua = e.A, "function" != typeof d.o.setMediaElement && (qb("AbrManager w/o setMediaElement", "Please use an AbrManager with setMediaElement function."), d.o.setMediaElement =
   							function() {}), "function" != typeof d.o.setCmsdManager && (qb("AbrManager w/o setCmsdManager", "Please use an AbrManager with setCmsdManager function."), d.o.setCmsdManager = function() {}), "function" != typeof d.o.trySuggestStreams && (qb("AbrManager w/o trySuggestStreams", "Please use an AbrManager with trySuggestStreams function."), d.o.trySuggestStreams = function() {})), u = um(e), v = e.fa, E(A, k(function() {
   							return O(function(z) {
   								return E(z, ko(d, n, v, u), 0)
   							})
   						}, "loadInner_"), 19);
   					case 19:
   						om(e);
   						A.u(14);
   						break;
   					case 20:
   						return E(A,
   							k(function() {
   								return O(function(z) {
   									return E(z, lo(d, n, c), 0)
   								})
   							}, "srcEqualsInner_"), 14);
   					case 14:
   						d.dispatchEvent(Yn("loaded"));
   					case 6:
   						za(A);
   						if (!e) {
   							A.u(22);
   							break
   						}
   						return E(A, e.destroy(), 22);
   					case 22:
   						d.oa = null;
   						Ba(A, 0);
   						break;
   					case 5:
   						w = ya(A);
   						if (7E3 == w.code) {
   							A.u(24);
   							break
   						}
   						return E(A, d.nc(!1), 24);
   					case 24:
   						throw w;
   				}
   			})
   		};

   		function jo(a) {
   			for (var b = t(a.i.variants), c = b.next(); !c.done; c = b.next()) c = c.value, c.video && (c.video.closeSegmentIndex(), c.video = null), c.bandwidth = c.audio && c.audio.bandwidth ? c.audio.bandwidth : 0;
   			a.i.variants = a.i.variants.filter(function(d) {
   				return d.audio
   			})
   		}
   		r.Oi = function(a, b) {
   			a = void 0 === a ? !0 : a;
   			b = void 0 === b ? !1 : b;
   			var c = this,
   				d;
   			return O(function(e) {
   				return 1 == e.g ? E(e, mo(c), 2) : 3 != e.g ? (d = e.h, E(e, c.nc(a, b), 3)) : e.return(d)
   			})
   		};
   		r.kg = function(a) {
   			a = void 0 === a ? !1 : a;
   			var b = this,
   				c;
   			return O(function(d) {
   				return 1 == d.g ? E(d, mo(b), 2) : 3 != d.g ? (c = d.h, E(d, b.detach(a), 3)) : d.return(c)
   			})
   		};

   		function mo(a) {
   			var b, c, d;
   			return O(function(e) {
   				if (1 == e.g) {
   					b = null;
   					if (!(a.i && a.J && a.Xa && a.aa)) return e.u(2);
   					c = a.h.currentTime;
   					a.T() && (c = null);
   					d = Date.now() / 1E3;
   					return E(e, no(a, a.aa, c, a.Bf, d, !0, !1, !1), 3)
   				}
   				if (2 != e.g) {
   					var f = b = e.h,
   						g = a.J,
   						h = a.Xa;
   					f.h = a.i;
   					f.j = g;
   					f.C = h;
   					f = b;
   					g = a.ua;
   					f.i = a.o;
   					f.A = g;
   					b.o = a.Ja;
   					b.start();
   					a.i = null;
   					a.J = null;
   					a.Xa = null;
   					a.o = null;
   					a.ua = null
   				}
   				return e.return(b)
   			})
   		}
   		r.preload = function(a, b, c) {
   			b = void 0 === b ? null : b;
   			var d = this,
   				e;
   			return O(function(f) {
   				if (1 == f.g) return E(f, ho(d, a, b, c), 2);
   				(e = f.h) ? e.start(): co(d, new T(2, 7, 7005));
   				return f.return(e)
   			})
   		};

   		function ho(a, b, c, d, e) {
   			e = void 0 === e ? !1 : e;
   			var f, g, h, k;
   			return O(function(l) {
   				if (1 == l.g) return f = Date.now() / 1E3, d ? l.u(2) : E(l, go(a, b), 3);
   				2 != l.g && (d = l.h);
   				if (g = oo(a, d)) return l.return(null);
   				h = !1;
   				k = !0;
   				e && (a.o && a.ua == a.g.abrFactory && (k = !1), a.h && "AUDIO" === a.h.nodeName && (h = !0));
   				return l.return(no(a, b, c, d || null, f, !e, h, k))
   			})
   		}

   		function no(a, b, c, d, e, f, g, h) {
   			f = void 0 === f ? !0 : f;
   			g = void 0 === g ? !1 : g;
   			h = void 0 === h ? !0 : h;
   			var k, l, m, n, p, q, u, v, w, A, z, y, B, C, D;
   			return O(function(J) {
   				if (1 == J.g) return k = null, l = Ce(a.g), g && (l.manifest.disableVideo = !0), m = function() {
   					return k.N && k.s ? null : k
   				}, n = function() {
   					return m() ? m().getConfiguration() : a.g
   				}, p = function(K, H) {
   					m() ? k.configure(K, H) : a.configure(K, H)
   				}, Infinity != a.ca.width || Infinity != a.ca.height ? J.u(2) : E(J, id(), 3);
   				2 != J.g && (q = J.h, a.ca.width = q.width, a.ca.height = q.height);
   				u = new ji(l, a.ca, null);
   				v = {
   					networkingEngine: a.G,
   					filter: function(K) {
   						var H, I;
   						return O(function(G) {
   							if (1 == G.g) return E(G, ki(u, K), 2);
   							if (4 != G.g) {
   								H = G.h;
   								if (!H) return G.u(0);
   								I = Yn("trackschanged");
   								return E(G, Promise.resolve(), 4)
   							}
   							k.dispatchEvent(I);
   							F(G)
   						})
   					},
   					makeTextStreamsForClosedCaptions: function(K) {
   						return po(a, K)
   					},
   					onTimelineRegionAdded: function(K) {
   						var H = k.F;
   						a: {
   							var I = t(H.g);
   							for (var G = I.next(); !G.done; G = I.next())
   								if (G = G.value, G.schemeIdUri == K.schemeIdUri && G.id == K.id && G.startTime == K.startTime && G.endTime == K.endTime) {
   									I = G;
   									break a
   								} I = null
   						}
   						null == I && (H.g.add(K), K =
   							new U("regionadd", new Map([
   								["region", K]
   							])), H.dispatchEvent(K))
   					},
   					onEvent: function(K) {
   						return k.dispatchEvent(K)
   					},
   					onError: function(K) {
   						return k.onError(K)
   					},
   					isLowLatencyMode: function() {
   						return n().streaming.lowLatencyMode
   					},
   					isAutoLowLatencyMode: function() {
   						return n().streaming.autoLowLatencyMode
   					},
   					enableLowLatencyMode: function() {
   						p("streaming.lowLatencyMode", !0)
   					},
   					updateDuration: function() {
   						a.j && k.N && a.j.updateDuration()
   					},
   					newDrmInfo: function(K) {
   						var H = k.l,
   							I = H ? H.g : null;
   						I && H.s && mi(u, I.keySystem, K)
   					},
   					onManifestUpdated: function() {
   						var K =
   							(new Map).set("isLive", a.T());
   						k.dispatchEvent(Yn("manifestupdated", K));
   						nm(k, !1, function() {
   							if (a.A) a.A.onManifestUpdated(a.T())
   						})
   					},
   					getBandwidthEstimate: function() {
   						return a.o.getBandwidthEstimate()
   					}
   				};
   				w = new jl(function() {
   					return a.Ob()
   				});
   				w.addEventListener("regionadd", function(K) {
   					var H = K.region;
   					qo(a, "timelineregionadded", H, k);
   					nm(k, !1, function() {
   						if (a.A) a.A.onDashTimedMetadata(H)
   					})
   				});
   				A = null;
   				l.streaming.observeQualityChanges && (A = new kl(function() {
   					return a.rb()
   				}), A.addEventListener("qualitychange", function(K) {
   					var H =
   						K.quality;
   					K = K.position;
   					H = (new Map).set("mediaQuality", {
   						bandwidth: H.bandwidth,
   						audioSamplingRate: H.audioSamplingRate,
   						codecs: H.codecs,
   						contentType: H.contentType,
   						frameRate: H.frameRate,
   						height: H.height,
   						mimeType: H.mimeType,
   						channelsCount: H.channelsCount,
   						pixelAspectRatio: H.pixelAspectRatio,
   						width: H.width
   					}).set("position", K);
   					a.dispatchEvent(Yn("mediaqualitychanged", H))
   				}));
   				z = !0;
   				y = {
   					Db: a.G,
   					onError: function(K) {
   						return k.onError(K)
   					},
   					me: function(K) {
   						nm(k, !0, function() {
   							a: {
   								var H = K,
   									I = Yn("keystatuschanged");a.dispatchEvent(I);
   								var G = Object.keys(H);1 == G.length && "" == G[0] && (G = ["00"], H = {
   									"00": H[""]
   								});I = 1 == G.length && "00" == G[0];
   								var N = !1;
   								if (G.length) {
   									G = t(a.i.variants);
   									for (var L = G.next(); !L.done; L = G.next()) {
   										L = L.value;
   										var M = [];
   										L.audio && M.push(L.audio);
   										L.video && M.push(L.video);
   										M = t(M);
   										for (var P = M.next(); !P.done; P = M.next()) {
   											var R = P.value;
   											P = L.allowedByKeySystem;
   											if (R.keyIds.size) {
   												L.allowedByKeySystem = !0;
   												R = t(R.keyIds);
   												for (var Q = R.next(); !Q.done; Q = R.next())
   													if (Q = Q.value, (Q = H[I ? "00" : Q]) || a.B.F) L.allowedByKeySystem = L.allowedByKeySystem && !!Q &&
   														!oi.includes(Q)
   											}
   											P != L.allowedByKeySystem && (N = !0)
   										}
   									}
   								}
   								if (N && (ro(a), !so(a))) break a;
   								(H = a.j.j) && !H.allowedByKeySystem && to(a)
   							}
   						})
   					},
   					onExpirationUpdated: function(K, H) {
   						var I = Yn("expirationupdated");
   						k.dispatchEvent(I);
   						if ((I = k.j) && I.onExpirationUpdated) I.onExpirationUpdated(K, H)
   					},
   					onEvent: function(K) {
   						k.dispatchEvent(K);
   						"drmsessionupdate" == K.type && z && (z = !1, K = Date.now() / 1E3 - k.ua, (a.s || k.getStats()).j = K, a.K && yj(a.K))
   					}
   				};
   				B = Sn(a, m);
   				ig(a.G, B);
   				C = function() {
   					return a.uc(y)
   				};
   				D = {
   					config: l,
   					hi: v,
   					si: w,
   					ri: A,
   					uc: C,
   					gi: u,
   					networkingEngine: B,
   					jh: f,
   					ih: h
   				};
   				k = new mm(b, d, e, c, D);
   				a.Ff.push(k);
   				return J.return(k)
   			})
   		}

   		function go(a, b) {
   			var c, d;
   			return O(function(e) {
   				if (1 == e.g) return c = a.g.manifest.retryParameters, E(e, Tm(b, a.G, c), 2);
   				d = e.h;
   				"application/x-mpegurl" == d && ad() && (d = "application/vnd.apple.mpegurl");
   				return e.return(d)
   			})
   		}

   		function oo(a, b) {
   			if (!Mc()) return !0;
   			if (b) {
   				if ("" == (a.h || Pc()).canPlayType(b)) return !1;
   				if (!(Mc() && b in ri)) return !0;
   				if (ae(b)) {
   					if (a.g.streaming.preferNativeHls) return !0;
   					if (ad() && (a.g.drm.servers["com.apple.fps"] || a.g.drm.servers["com.apple.fps.1_0"])) return a.g.streaming.useNativeHlsForFairPlay;
   					if (ad()) return a.g.streaming.useNativeHlsOnSafari
   				}
   			}
   			return !1
   		}

   		function eo(a) {
   			var b, c, d, e, f;
   			return O(function(g) {
   				if (1 == g.g) return $n(a, "media-source"), b = a.g.textDisplayFactory, c = b(), c.configure ? c.configure(a.g.textDisplayer) : qb("Text displayer w/ configure", 'Text displayer should have a "configure" method!'), a.Rf = b, d = uo(a.h, c, function(h, k, l) {
   					vo(a, h, k, l)
   				}, a.K), d.configure(a.g.mediaSource), e = a.g.manifest, f = e.segmentRelativeVttTiming, d.ba = f, E(g, d.M, 2);
   				a.F = d;
   				F(g)
   			})
   		}

   		function ko(a, b, c, d) {
   			var e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H;
   			return O(function(I) {
   				switch (I.g) {
   					case 1:
   						$n(a, "load");
   						e = a.h;
   						a.H = new Ok({
   							Vd: function() {
   								return e.playbackRate
   							},
   							Yb: function() {
   								return e.defaultPlaybackRate
   							},
   							Of: function(G) {
   								e.playbackRate = G
   							},
   							Cg: function(G) {
   								e.currentTime += G
   							}
   						});
   						f = function() {
   							return wo(a)
   						};
   						g = function() {
   							return xo(a)
   						};
   						a.m.D(e, "playing", f);
   						a.m.D(e, "pause", f);
   						a.m.D(e, "ended", f);
   						a.m.D(e, "ratechange", g);
   						Xn(a, a.g);
   						a.Wa = a.g.preferredTextLanguage;
   						a.pd = a.g.preferredTextRole;
   						a.md = a.g.preferForcedSubs;
   						yo(a.i.presentationTimeline, a.g.playRangeStart, a.g.playRangeEnd);
   						a.o.init(function(G, N, L) {
   							a.i && a.j && G != a.j.j && zo(a, G, !0, void 0 === N ? !1 : N, void 0 === L ? 0 : L)
   						});
   						a.o.setMediaElement(e);
   						a.o.setCmsdManager(a.ba);
   						a.j = Ao(a);
   						a.j.configure(a.g.streaming);
   						a.l = Bo;
   						e.textTracks && a.m.D(e.textTracks, "addtrack", function(G) {
   							if (G.track) switch (G = G.track, G.kind) {
   								case "chapters":
   									Co(a, G)
   							}
   						});
   						a.dispatchEvent(Yn("streaming"));
   						h = c;
   						(k = a.j.j) || h || (h = Do(a, !0));
   						l = [];
   						m = k || h;
   						n = t([m.video, m.audio]);
   						for (p = n.next(); !p.done; p = n.next())(q =
   							p.value) && !q.segmentIndex && l.push(q.createSegmentIndex());
   						if (!(0 < l.length)) {
   							I.u(2);
   							break
   						}
   						return E(I, Promise.all(l), 2);
   					case 2:
   						if (a.J && a.J.onInitialVariantChosen) a.J.onInitialVariantChosen(m);
   						yo(a.i.presentationTimeline, a.g.playRangeStart, a.g.playRangeEnd);
   						u = function(G) {
   							a.C = Eo(a, G);
   							a.hb = Fo(a, G);
   							Go(a, e, Math.max(a.i.minBufferTime, a.g.streaming.rebufferingGoal))
   						};
   						a.g.streaming.startAtSegmentBoundary || u(a.fa);
   						if (k) {
   							I.u(4);
   							break
   						}
   						if (!a.g.streaming.startAtSegmentBoundary) {
   							I.u(5);
   							break
   						}
   						v = a.i.presentationTimeline;
   						w = a.fa || a.h.currentTime;
   						A = v.ac();
   						z = v.sb();
   						w < A ? w = A : w > z && (w = z);
   						return E(I, Ho(h, w), 6);
   					case 6:
   						y = I.h, u(y);
   					case 5:
   						zo(a, h, !0, !1, 0);
   					case 4:
   						return a.C.Fe(), B = a.zc().find(function(G) {
   							return G.active
   						}), B || ((C = mf(a.i.textStreams, a.Wa, a.pd, a.md)[0] || null) && Wk(a.s.h, C, !0), h && (C ? (h.audio && Io(a, h.audio, C) && (a.da = !0), a.da && a.F.F.setTextVisibility(!0), Jo(a)) : a.da = !1), C && (a.g.streaming.alwaysStreamText || a.kf()) && Dl(a.j, C)), E(I, a.j.start(d), 7);
   					case 7:
   						a.g.abr.enabled && (a.o.enable(), Ko(a));
   						ro(a);
   						so(a);
   						a.i.variants.some(function(G) {
   							return G.primary
   						});
   						if ((D = a.T()) && (a.g.streaming.liveSync || a.i.serviceDescription || a.g.streaming.liveSyncPanicMode) || a.g.streaming.vodDynamicPlaybackRate) J = function() {
   							return Lo(a)
   						}, a.m.D(e, "timeupdate", J);
   						D || (K = function() {
   							return Mo(a)
   						}, a.m.D(e, "timeupdate", K), Mo(a), a.i.nextUrl && (0 < a.g.streaming.preloadNextUrlWindow && (H = function() {
   							var G, N;
   							return O(function(L) {
   								if (1 == L.g) {
   									G = a.h.duration - a.h.currentTime;
   									if (isNaN(G) || !(G <= a.g.streaming.preloadNextUrlWindow)) return L.u(0);
   									a.m.Hb(e, "timeupdate", H);
   									N = a;
   									return E(L, a.preload(a.i.nextUrl),
   										4)
   								}
   								N.oa = L.h;
   								F(L)
   							})
   						}, a.m.D(e, "timeupdate", H)), a.m.D(e, "ended", function() {
   							a.load(a.oa || a.i.nextUrl)
   						})));
   						if (a.A) a.A.onManifestUpdated(D);
   						a.gb = !0;
   						a.m.qa(e, "loadedmetadata", function() {
   							a.s.m = Date.now() / 1E3 - b
   						});
   						F(I)
   				}
   			})
   		}

   		function io(a, b) {
   			var c, d, e, f, g;
   			return O(function(h) {
   				return 1 == h.g ? (c = Nd, d = Date.now() / 1E3, e = !0, a.B = a.uc({
   						Db: a.G,
   						onError: function(k) {
   							co(a, k)
   						},
   						me: function() {},
   						onExpirationUpdated: function() {
   							var k = Yn("expirationupdated");
   							a.dispatchEvent(k)
   						},
   						onEvent: function(k) {
   							a.dispatchEvent(k);
   							"drmsessionupdate" == k.type && e && (e = !1, a.s.j = Date.now() / 1E3 - d)
   						}
   					}), a.B.configure(a.g.drm), f = {
   						id: 0,
   						language: "und",
   						disabledUntilTime: 0,
   						primary: !1,
   						audio: null,
   						video: null,
   						bandwidth: 100,
   						allowedByApplication: !0,
   						allowedByKeySystem: !0,
   						decodingInfos: []
   					},
   					g = {
   						id: 0,
   						originalId: null,
   						groupId: null,
   						createSegmentIndex: function() {
   							return Promise.resolve()
   						},
   						segmentIndex: null,
   						mimeType: b ? Zd(b) : "",
   						codecs: b ? $d(b) : "",
   						encrypted: !0,
   						drmInfos: [],
   						keyIds: new Set,
   						language: "und",
   						originalLanguage: null,
   						label: null,
   						type: c.ga,
   						primary: !1,
   						trickModeVideo: null,
   						emsgSchemeIdUris: null,
   						roles: [],
   						forced: !1,
   						channelsCount: null,
   						audioSamplingRate: null,
   						spatialAudio: !1,
   						closedCaptions: null,
   						accessibilityPurpose: null,
   						external: !1,
   						fastSwitching: !1,
   						fullMimeTypes: new Set
   					}, g.fullMimeTypes.add(Pd(g.mimeType,
   						g.codecs)), b.startsWith("audio/") ? (g.type = c.U, f.audio = g) : f.video = g, a.B.ba = !0, E(h, Bh(a.B, [f], []), 2)) : E(h, a.B.tc(a.h), 0)
   			})
   		}

   		function lo(a, b, c) {
   			var d, e, f, g, h, k, l, m, n, p, q;
   			return O(function(u) {
   				if (1 == u.g) return $n(a, "src-equals"), d = a.h, a.C = new Ek(d), e = !1, a.gd.push(function() {
   					e = !0
   				}), null != a.fa && a.C.Ge(a.fa), a.H = new Ok({
   					Vd: function() {
   						return d.playbackRate
   					},
   					Yb: function() {
   						return d.defaultPlaybackRate
   					},
   					Of: function(v) {
   						d.playbackRate = v
   					},
   					Cg: function(v) {
   						d.currentTime += v
   					}
   				}), f = a.g.streaming.rebufferingGoal, Go(a, d, f), g = function() {
   					return wo(a)
   				}, h = function() {
   					return xo(a)
   				}, a.m.D(d, "playing", g), a.m.D(d, "pause", g), a.m.D(d, "ended", g), a.m.D(d,
   					"ratechange", h), "none" != d.preload && a.m.qa(d, "loadedmetadata", function() {
   					a.s.m = Date.now() / 1E3 - b
   				}), d.audioTracks && (a.m.D(d.audioTracks, "addtrack", function() {
   					return ro(a)
   				}), a.m.D(d.audioTracks, "removetrack", function() {
   					return ro(a)
   				}), a.m.D(d.audioTracks, "change", function() {
   					return ro(a)
   				})), d.textTracks && (a.m.D(d.textTracks, "addtrack", function(v) {
   						if (v.track) switch (v = v.track, v.kind) {
   							case "metadata":
   								No(a, v);
   								break;
   							case "chapters":
   								Co(a, v);
   								break;
   							default:
   								ro(a)
   						}
   					}), a.m.D(d.textTracks, "removetrack", function() {
   						return ro(a)
   					}),
   					a.m.D(d.textTracks, "change", function() {
   						return ro(a)
   					})), d.src = pn(a.S, a.aa, c), (Uc() || Xc()) && d.load(), "none" != d.preload && !d.autoplay && ae(c) && fd() && d.load(), a.l = Oo, a.dispatchEvent(Yn("streaming")), k = new Sf, vk(d, HTMLMediaElement.HAVE_METADATA, a.m, function() {
   					a.C.Fe();
   					k.resolve()
   				}), vk(d, HTMLMediaElement.HAVE_CURRENT_DATA, a.m, function() {
   					var v;
   					return O(function(w) {
   						if (1 == w.g) return Po(a), v = Qo(a), v.find(function(A) {
   							return "disabled" != A.mode
   						}) ? (0 < v.length && (a.da = !0), w.u(2)) : E(w, new Promise(function(A) {
   							a.m.qa(d.textTracks,
   								"change", A);
   							(new Lc(A)).W(1)
   						}), 2);
   						if (e) return w.return();
   						Ro(a);
   						F(w)
   					})
   				}), d.error ? k.reject(bo(a)) : "none" == d.preload && (ab('With <video preload="none">, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way, and we cannot provide track info yet. Please do not use preload="none" with gowatch Player.'), k.resolve()), a.m.qa(d, "error", function() {
   					k.reject(bo(a))
   				}), l = new Promise(function(v, w) {
   					(new Lc(w)).W(a.g.streaming.loadTimeout)
   				}), E(u, Promise.race([k,
   					l
   				]), 2);
   				if ((m = a.T()) && (a.g.streaming.liveSync || a.g.streaming.liveSyncPanicMode) || a.g.streaming.vodDynamicPlaybackRate) n = function() {
   					return Lo(a)
   				}, a.m.D(d, "timeupdate", n);
   				m || (p = function() {
   					return Mo(a)
   				}, a.m.D(d, "timeupdate", p), Mo(a));
   				a.A && (a.A.onManifestUpdated(m), m && (q = a.Ob().end, a.m.D(d, "progress", function() {
   					var v = a.Ob().end;
   					q != v && (a.A.onManifestUpdated(a.T()), q = v)
   				})));
   				a.gb = !0;
   				F(u)
   			})
   		}

   		function Po(a) {
   			var b = a.g.preferredAudioLanguage;
   			"" != b && a.Jg(b, a.g.preferredVariantRole)
   		}

   		function Ro(a) {
   			var b = a.g.preferredTextLanguage;
   			"" != b && a.If(b, a.g.preferredTextRole, a.g.preferForcedSubs)
   		}

   		function No(a, b) {
   			if ("metadata" == b.kind) {
   				b.mode = "hidden";
   				a.m.D(b, "cuechange", function() {
   					if (b.activeCues)
   						for (var d = t(b.activeCues), e = d.next(); !e.done; e = d.next())
   							if (e = e.value, So(a, e.startTime, e.endTime, e.type, e.value), a.A) a.A.onCueMetadataChange(e.value)
   				});
   				var c = (new Lc(function() {
   					var d = To(a);
   					d = t(d);
   					for (var e = d.next(); !e.done; e = d.next()) e.value.mode = "hidden"
   				})).mc().W(.5);
   				a.gd.push(function() {
   					c.stop()
   				})
   			}
   		}

   		function vo(a, b, c, d) {
   			b = t(b);
   			for (var e = b.next(); !e.done; e = b.next())
   				if (e = e.value, e.data && e.cueTime && e.frames) {
   					var f = e.cueTime + c,
   						g = d;
   					g && f > g && (g = f);
   					for (var h = t(e.frames), k = h.next(); !k.done; k = h.next()) So(a, f, g, "org.id3", k.value);
   					if (a.A) a.A.onHlsTimedMetadata(e, f)
   				}
   		}

   		function So(a, b, c, d, e) {
   			b = (new Map).set("startTime", b).set("endTime", c).set("metadataType", d).set("payload", e);
   			a.dispatchEvent(Yn("metadata", b))
   		}

   		function Co(a, b) {
   			if (b && "chapters" == b.kind) {
   				b.mode = "hidden";
   				var c = (new Lc(function() {
   					b.mode = "hidden"
   				})).mc().W(.5);
   				a.gd.push(function() {
   					c.stop()
   				})
   			}
   		}
   		r.wi = function() {
   			for (var a = this.V; a.g;) a.release()
   		};
   		r.uc = function(a) {
   			return new uh(a)
   		};

   		function Sn(a, b) {
   			function c(e) {
   				b() ? b().dispatchEvent(e) : a.dispatchEvent(e)
   			}

   			function d(e) {
   				b() ? nm(b(), !0, e) : e()
   			}
   			b || (b = function() {
   				return null
   			});
   			return new eg(function(e, f, g, h) {
   				var k = b() ? b().i : a.o;
   				k && k.segmentDownloaded(e, f, g, h)
   			}, function(e, f, g) {
   				f = (new Map).set("headers", e).set("request", f).set("requestType", g);
   				c(Yn("downloadheadersreceived", f));
   				d(function() {
   					if (a.ba) {
   						var h = a.ba;
   						if (h.h.enabled) {
   							var k = e["cmsd-static"];
   							if (k) try {
   								var l = new Map,
   									m = k.split(",");
   								for (k = 0; k < m.length; k++) {
   									var n = m[k].split("=");
   									l.set(n[0],
   										Mn(n[1]))
   								}
   							} catch (w) {}
   							if (l = e["cmsd-dynamic"]) {
   								try {
   									var p = new Map,
   										q = l.split(";");
   									for (l = 1; l < q.length; l++) {
   										var u = q[l].split("=");
   										p.set(u[0], Mn(u[1]))
   									}
   									var v = p
   								} catch (w) {
   									v = null
   								}
   								v && (h.g = v)
   							}
   						}
   					}
   				})
   			}, function(e, f, g, h) {
   				e = (new Map).set("request", e).set("error", f).set("httpResponseCode", g).set("aborted", h);
   				c(Yn("downloadfailed", e))
   			}, function(e, f, g) {
   				d(function() {
   					var h = a.S,
   						k = g;
   					k = void 0 === k ? {} : k;
   					if (h.g.enabled)
   						if ("HEAD" === f.method) wn(h, f);
   						else switch (e) {
   							case 0:
   								try {
   									if (h.g.enabled) {
   										if (k.type) {
   											a: {
   												switch (k.type) {
   													case 4:
   														var l =
   															"d";
   														break a;
   													case 3:
   													case 2:
   														l = "h";
   														break a;
   													case 5:
   														l = "s";
   														break a
   												}
   												l = void 0
   											}
   											h.m = l
   										}
   										wn(h, f, {
   											ot: tn,
   											su: !h.i
   										})
   									}
   								} catch (M) {
   									bb("CMCD_MANIFEST_ERROR", "Could not generate manifest CMCD data.", M)
   								}
   								break;
   							case pg:
   								try {
   									if (h.g.enabled) {
   										var m = k.segment;
   										l = 0;
   										m && (l = m.endTime - m.startTime);
   										var n = {
   											d: 1E3 * l,
   											st: h.h.T() ? "l" : "v"
   										};
   										n.ot = An(k);
   										var p = n.ot === xn || n.ot === rn || n.ot === sn || n.ot === Cn,
   											q = k.stream;
   										if (q) {
   											var u = h.h.ib();
   											if (p && (n.bl = En(h, q.type), n.ot !== Cn)) {
   												var v = Fn(h, q.type);
   												n.dl = u ? v / Math.abs(u) : v
   											}
   											q.bandwidth && (n.br = q.bandwidth / 1E3);
   											if (q.segmentIndex && m) {
   												var w = q.segmentIndex.Ab(m.endTime, !0, 0 > u);
   												if (w) {
   													var A = w.next().value;
   													if (A && A != m) {
   														if (!Mb(m.L(), A.L())) {
   															var z = A.L()[0],
   																y = f.uris[0],
   																B = new URL(z),
   																C = new URL(y);
   															if (B.origin !== C.origin) var D = z;
   															else {
   																for (var J = B.pathname.split("/").slice(1), K = C.pathname.split("/").slice(1, -1); J[0] === K[0];) J.shift(), K.shift();
   																for (; K.length;) K.shift(), J.unshift("..");
   																D = J.join("/")
   															}
   															n.nor = D
   														}
   														if ((A.Ba || A.ja) && (m.Ba != A.Ba || m.ja != A.ja)) {
   															var H = A.Ba + "-";
   															A.ja && (H += A.ja);
   															n.nrr = H
   														}
   													}
   												}
   												var I = h.h.ib() || 1,
   													G = Fn(h, q.type) ||
   													500,
   													N = q.bandwidth;
   												var L = N ? N * (m.endTime - m.startTime) / 1E3 / (G / I / 1E3) * h.g.rtpSafetyFactor : NaN;
   												isNaN(L) || (n.rtp = L)
   											}
   										}
   										p && n.ot !== Cn && (n.tb = Gn(h, n.ot) / 1E3);
   										wn(h, f, n)
   									}
   								} catch (M) {
   									bb("CMCD_SEGMENT_ERROR", "Could not generate segment CMCD data.", M)
   								}
   								break;
   							case 2:
   							case 5:
   							case 6:
   								wn(h, f, {
   									ot: "k"
   								});
   								break;
   							case 4:
   								wn(h, f, {
   									ot: "o"
   								})
   						}
   				})
   			}, function(e, f, g, h) {
   				(e = b() ? b().j : a.J) && e.banLocation && e.banLocation(h)
   			}, function(e, f) {
   				f.data && (e = f.data.byteLength, f = b() ? b().getStats() : a.s) && (f.Nd = isNaN(f.Nd) ? e : f.Nd + e)
   			})
   		}

   		function Eo(a, b) {
   			return new Fk(a.h, a.i, a.g.streaming, b, function() {
   				a.hb && Rk(a.hb, !0);
   				a.j && a.j.zd();
   				a.M && Uo(a)
   			}, function(c) {
   				return a.dispatchEvent(c)
   			})
   		}

   		function Fo(a, b) {
   			b = new Bm(a.dd, a.T() || 0 < b);
   			b.addEventListener("enter", function(d) {
   				qo(a, "timelineregionenter", d.region)
   			});
   			b.addEventListener("exit", function(d) {
   				qo(a, "timelineregionexit", d.region)
   			});
   			b.addEventListener("skip", function(d) {
   				var e = d.region;
   				d.seeking || (qo(a, "timelineregionenter", e), qo(a, "timelineregionexit", e))
   			});
   			var c = new Qk(a.h);
   			c.g.add(b);
   			a.pb && c.g.add(a.pb);
   			return c
   		}

   		function Go(a, b, c) {
   			a.M = new Lf;
   			a.M.g = Nf;
   			Of(a.M, c, Math.min(.5, c / 2));
   			fo(a);
   			a.de = (new Lc(function() {
   				Uo(a)
   			})).Ua(.25);
   			a.m.D(b, "waiting", function() {
   				return Uo(a)
   			});
   			a.m.D(b, "stalled", function() {
   				return Uo(a)
   			});
   			a.m.D(b, "canplaythrough", function() {
   				return Uo(a)
   			});
   			a.m.D(b, "progress", function() {
   				return Uo(a)
   			})
   		}

   		function Uo(a) {
   			switch (a.l) {
   				case Oo:
   					if (a.h.ended) var b = !0;
   					else {
   						var c = Fi(a.h.buffered);
   						b = null != c && c >= a.h.duration - 1
   					}
   					break;
   				case Bo:
   					a: if (a.h.ended || Pj(a.F)) b = !0;
   						else {
   							if (a.i.presentationTimeline.T()) {
   								c = a.i.presentationTimeline.Mb();
   								var d = Fi(a.h.buffered);
   								if (null != d && d >= c) {
   									b = !0;
   									break a
   								}
   							}
   							b = !1
   						}
   					break;
   				default:
   					b = !1
   			}
   			d = Hi(a.h.buffered, a.h.currentTime);
   			c = a.M;
   			var e = b,
   				f = c.i.get(c.g);
   			b = c.g;
   			d = e || d >= f ? Mf : Nf;
   			c.g = d;
   			(b = b != d) && d === Mf && (c.h = Date.now());
   			b && fo(a)
   		}

   		function uo(a, b, c, d) {
   			return new Gj(a, b, c, d)
   		}

   		function Rn(a) {
   			return new on({
   				getBandwidthEstimate: function() {
   					return a.o ? a.o.getBandwidthEstimate() : NaN
   				},
   				rb: function() {
   					return a.rb()
   				},
   				getCurrentTime: function() {
   					return a.h ? a.h.currentTime : 0
   				},
   				ib: function() {
   					return a.ib()
   				},
   				$b: function() {
   					return a.$b()
   				},
   				Nb: function() {
   					return a.Nb()
   				},
   				T: function() {
   					return a.T()
   				}
   			}, a.g.cmcd)
   		}

   		function Ao(a) {
   			return new pl(a.i, {
   				Ud: function() {
   					return a.C ? a.C.Md() : 0
   				},
   				getBandwidthEstimate: function() {
   					return a.o.getBandwidthEstimate()
   				},
   				ib: function() {
   					return a.ib()
   				},
   				Y: a.F,
   				Db: a.G,
   				onError: function(b) {
   					return co(a, b)
   				},
   				onEvent: function(b) {
   					return a.dispatchEvent(b)
   				},
   				mi: function() {
   					a.J && a.J.update && a.J.update()
   				},
   				xf: function(b, c) {
   					var d = b.startTime,
   						e = b.endTime,
   						f = c.type;
   					if (a.C) {
   						a.C.Dg();
   						var g = Qj(a.F, f);
   						!a.T() && a.h.paused && null != g && 0 < g && a.C.Md() < g && a.C.Ge(g)
   					}
   					Uo(a);
   					d = (new Map).set("start", d).set("end", e).set("contentType",
   						f);
   					a.dispatchEvent(Yn("segmentappended", d));
   					a.o && c.fastSwitching && b.wd && b.be && a.o.trySuggestStreams()
   				},
   				li: function(b, c) {
   					(c = c.tf) && a.pb && ml(a.pb, c, b)
   				},
   				eg: function(b, c) {
   					var d = a.B;
   					if (d.h.parseInbandPsshEnabled && !d.F && ["audio", "video"].includes(b)) {
   						c = new Pg(Ab(c));
   						var e = 0,
   							f = t(c.data);
   						for (b = f.next(); !b.done; b = f.next()) e += b.value.length;
   						if (0 == e) d = Promise.resolve();
   						else {
   							e = new Uint8Array(e);
   							f = 0;
   							c = t(c.data);
   							for (b = c.next(); !b.done; b = c.next()) b = b.value, e.set(b, f), f += b.length;
   							Kh(d, "cenc", e);
   							d = d.l
   						}
   					} else d = Promise.resolve();
   					return d
   				},
   				ni: function(b, c, d) {
   					vo(a, b, c, d)
   				},
   				Sd: function(b, c) {
   					return a.Sd(b, c)
   				}
   			})
   		}
   		r.configure = function(a, b) {
   			2 == arguments.length && "string" == typeof a && (a = Zl(a, b));
   			a.streaming && "forceTransmuxTS" in a.streaming && (qb("streaming.forceTransmuxTS configuration", "Please Use mediaSource.forceTransmux instead."), a.mediaSource.mediaSource = a.streaming.forceTransmuxTS, delete a.streaming.forceTransmuxTS);
   			a.streaming && "forceTransmux" in a.streaming && (qb("streaming.forceTransmux configuration", "Please Use mediaSource.forceTransmux instead."), a.mediaSource.mediaSource = a.streaming.forceTransmux, delete a.streaming.forceTransmux);
   			a.streaming && "useNativeHlsOnSafari" in a.streaming && qb("streaming.useNativeHlsOnSafari configuration", "Please Use streaming.useNativeHlsForFairPlay or streaming.preferNativeHls instead.");
   			if (a.mediaSource && "sourceBufferExtraFeatures" in a.mediaSource) {
   				qb("mediaSource.sourceBufferExtraFeatures configuration", "Please Use mediaSource.addExtraFeaturesToSourceBuffer() instead.");
   				var c = a.mediaSource.sourceBufferExtraFeatures;
   				a.mediaSource.addExtraFeaturesToSourceBuffer = function() {
   					return c
   				};
   				delete a.mediaSource.sourceBufferExtraFeatures
   			}
   			a.streaming &&
   				a.streaming.lowLatencyMode && (void 0 == a.streaming.inaccurateManifestTolerance && (a.streaming.inaccurateManifestTolerance = 0), void 0 == a.streaming.rebufferingGoal && (a.streaming.rebufferingGoal = .01), void 0 == a.streaming.segmentPrefetchLimit && (a.streaming.segmentPrefetchLimit = 2), void 0 == a.streaming.updateIntervalSeconds && (a.streaming.updateIntervalSeconds = .1), void 0 == a.streaming.maxDisabledTime && (a.streaming.maxDisabledTime = 1), void 0 == a.streaming.retryParameters && (a.streaming.retryParameters = {}), void 0 ==
   					a.streaming.retryParameters.baseDelay && (a.streaming.retryParameters.baseDelay = 100), void 0 == a.manifest && (a.manifest = {}), void 0 == a.manifest.dash && (a.manifest.dash = {}), void 0 == a.manifest.dash.autoCorrectDrift && (a.manifest.dash.autoCorrectDrift = !1), void 0 == a.manifest.retryParameters && (a.manifest.retryParameters = {}), void 0 == a.manifest.retryParameters.baseDelay && (a.manifest.retryParameters.baseDelay = 100), void 0 == a.drm && (a.drm = {}), void 0 == a.drm.retryParameters && (a.drm.retryParameters = {}), void 0 == a.drm.retryParameters.baseDelay &&
   					(a.drm.retryParameters.baseDelay = 100));
   			var d = lm(this.g, a, Qn(this));
   			Vo(this);
   			return d
   		};

   		function Vo(a) {
   			a.$d = new ji(a.g, a.ca, a.B);
   			if (a.J) {
   				var b = Ce(a.g.manifest);
   				a.h && "AUDIO" === a.h.nodeName && (b.disableVideo = !0);
   				a.J.configure(b)
   			}
   			a.B && a.B.configure(a.g.drm);
   			if (a.j) {
   				a.j.configure(a.g.streaming);
   				try {
   					a.l != Zn && li(a.$d, a.i) && ro(a)
   				} catch (f) {
   					co(a, f)
   				}
   				a.o && so(a);
   				b = a.j.j;
   				!b || b.allowedByApplication && b.allowedByKeySystem || to(a)
   			}
   			a.G && (a.G.Mf(a.g.streaming.forceHTTP), a.G.Nf(a.g.streaming.forceHTTPS));
   			if (a.F)
   				if (a.F.configure(a.g.mediaSource), a.F.ba = a.g.manifest.segmentRelativeVttTiming, b = a.g.textDisplayFactory,
   					a.Rf != b) {
   					var c = b();
   					c.configure ? c.configure(a.g.textDisplayer) : qb("Text displayer w/ configure", 'Text displayer should have a "configure" method!');
   					var d = a.F,
   						e = d.F;
   					d.F = c;
   					e && (c.setTextVisibility(e.isTextVisible()), e.destroy());
   					d.g && (d.g.j = c);
   					a.Rf = b;
   					a.j && (b = a.j, (c = b.i.get(Ld)) && Bl(b, c.stream, !0, 0, !0))
   				} else b = a.F.F, b.configure && b.configure(a.g.textDisplayer);
   			a.o && (a.o.configure(a.g.abr), a.g.abr.enabled ? a.o.enable() : a.o.disable(), Ko(a));
   			a.M && (b = a.g.streaming.rebufferingGoal, a.i && (b = Math.max(b, a.i.minBufferTime)),
   				Of(a.M, b, Math.min(.5, b / 2)));
   			a.i && yo(a.i.presentationTimeline, a.g.playRangeStart, a.g.playRangeEnd);
   			a.A && a.A.configure(a.g.ads);
   			a.S && a.S.configure(a.g.cmcd);
   			a.ba && a.ba.configure(a.g.cmsd)
   		}
   		r.getConfiguration = function() {
   			var a = Qn(this);
   			lm(a, this.g, Qn(this));
   			return a
   		};
   		r.Hh = function() {
   			var a = Qn(this);
   			lm(a, this.g, Qn(this));
   			return am(this.g, Qn(this))
   		};
   		r.pg = function() {
   			if (this.h) {
   				var a = this.h.buffered.length;
   				a = a ? this.h.buffered.end(a - 1) : 0;
   				var b = this.getConfiguration().streaming.bufferingGoal;
   				b = Math.min(this.h.currentTime + b, this.Ob().end);
   				if (a >= b) return 1;
   				if (!(a <= this.h.currentTime) && a < b) return (a - this.h.currentTime) / (b - this.h.currentTime)
   			}
   			return 0
   		};
   		r.Ai = function() {
   			for (var a in this.g) delete this.g[a];
   			lm(this.g, Qn(this), Qn(this));
   			Vo(this)
   		};
   		r.Dh = function() {
   			return this.l
   		};
   		r.ef = function() {
   			return this.i ? this.i.type : null
   		};
   		r.Gh = function() {
   			return this.h
   		};
   		r.$b = function() {
   			return this.G
   		};
   		r.yc = function() {
   			return this.aa
   		};
   		r.og = function() {
   			return this.A ? this.A : null
   		};
   		r.T = function() {
   			return this.i ? this.i.presentationTimeline.T() : this.h && this.h.src ? Infinity == this.h.duration : !1
   		};
   		r.ec = function() {
   			return this.i ? this.i.presentationTimeline.ec() : !1
   		};
   		r.Yh = function() {
   			if (this.i) {
   				var a = this.i.variants;
   				return a.length ? !a[0].video : !1
   			}
   			return this.h && this.h.src ? this.h.videoTracks ? 0 == this.h.videoTracks.length : 0 == this.h.videoHeight : !1
   		};
   		r.Ob = function() {
   			if (this.i) {
   				if (!this.gb && "HLS" == this.i.type) return {
   					start: 0,
   					end: 0
   				};
   				var a = this.i.presentationTimeline;
   				return {
   					start: a.ac(),
   					end: a.sb()
   				}
   			}
   			return this.h && this.h.src && (a = this.h.seekable, a.length) ? {
   				start: a.start(0),
   				end: a.end(a.length - 1)
   			} : {
   				start: 0,
   				end: 0
   			}
   		};
   		r.Vh = function() {
   			this.T() && (this.h.currentTime = this.Ob().end)
   		};
   		r.keySystem = function() {
   			var a = this.drmInfo();
   			return a ? a.keySystem : ""
   		};
   		r.drmInfo = function() {
   			return this.B ? this.B.g : null
   		};
   		r.jd = function() {
   			return this.B ? this.B.jd() : Infinity
   		};
   		r.cf = function() {
   			return this.B ? this.B.cf() : []
   		};
   		r.Td = function() {
   			return this.B ? this.B.Td() : {}
   		};
   		r.jf = function() {
   			return this.M ? this.M.g == Nf : !1
   		};
   		r.ib = function() {
   			return this.h ? this.H ? this.H.i : 1 : 0
   		};
   		r.Cd = function(a) {
   			var b = this;
   			0 == a ? ab("A trick play rate of 0 is unsupported!") : (this.Ka.nb(), this.h.paused && this.h.play(), this.H.set(a), this.l == Bo && (this.o.playbackRateChanged(a), Al(this.j, 1 < Math.abs(a))), this.T() && this.Ka.D(this.h, "timeupdate", function() {
   				var c = b.h.currentTime,
   					d = b.Ob(),
   					e = b.g.streaming.safeSeekOffset;
   				0 < a ? Math.floor(c) >= Math.floor(d.end) && b.$c() : Math.floor(c) <= Math.floor(d.start + e) && b.$c()
   			}))
   		};
   		r.$c = function() {
   			var a = this.H.Yb();
   			this.l == Oo && this.H.set(a);
   			this.l == Bo && (this.H.set(a), this.o.playbackRateChanged(a), Al(this.j, !1));
   			this.Ka.nb()
   		};
   		r.Nb = function() {
   			if (this.i) {
   				for (var a = this.j ? this.j.j : null, b = [], c = 0, d = t(this.i.variants), e = d.next(); !e.done; e = d.next())
   					if (e = e.value, kf(e)) {
   						var f = af(e);
   						f.active = e == a;
   						f.active || 1 == c || null == a || e.video != a.video || e.audio != a.audio || (f.active = !0);
   						f.active && c++;
   						b.push(f)
   					} return b
   			}
   			return this.h && this.h.audioTracks ? Array.from(this.h.audioTracks).map(function(g) {
   				return jf(g)
   			}) : []
   		};
   		r.zc = function() {
   			if (this.i) {
   				for (var a = this.j ? this.j.s : null, b = [], c = t(this.i.textStreams), d = c.next(); !d.done; d = c.next()) {
   					d = d.value;
   					var e = bf(d);
   					e.active = d == a;
   					b.push(e)
   				}
   				return b
   			}
   			return this.h && this.h.src && this.h.textTracks ? Qo(this).map(function(f) {
   				return gf(f)
   			}) : []
   		};
   		r.Bh = function() {
   			var a = this.td;
   			this.i && (a = this.i.imageStreams);
   			return a.map(function(b) {
   				return cf(b)
   			})
   		};
   		r.uh = function(a) {
   			var b = this,
   				c, d, e, f;
   			return O(function(g) {
   				if (1 == g.g) {
   					if (b.l != Bo && b.l != Oo) return g.return(null);
   					c = b.td;
   					b.i && (c = b.i.imageStreams);
   					return (d = c.find(function(h) {
   						return h.id == a
   					})) ? d.segmentIndex ? g.u(2) : E(g, d.createSegmentIndex(), 2) : g.return(null)
   				}
   				if (4 != g.g) return e = [], d.segmentIndex.wc(function(h) {
   					var k = Wo(h.tilesLayout || d.tilesLayout);
   					if (k) {
   						k = k.rows * k.Vb;
   						for (var l = h.i - h.startTime, m = 0; m < k; m++) e.push(b.ug(a, h.startTime + l * m / k))
   					}
   				}), E(g, Promise.all(e), 4);
   				f = g.h;
   				return g.return(f.filter(function(h) {
   					return h
   				}))
   			})
   		};

   		function Wo(a) {
   			return a ? (a = /(\d+)x(\d+)/.exec(a)) ? {
   				Vb: parseInt(a[1], 10),
   				rows: parseInt(a[2], 10)
   			} : null : null
   		}
   		r.ug = function(a, b) {
   			var c = this,
   				d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B;
   			return O(function(C) {
   				if (1 == C.g) {
   					if (c.l != Bo && c.l != Oo) return C.return(null);
   					d = c.td;
   					c.i && (d = c.i.imageStreams);
   					return (e = d.find(function(D) {
   						return D.id == a
   					})) ? e.segmentIndex ? C.u(2) : E(C, e.createSegmentIndex(), 2) : C.return(null)
   				}
   				f = e.segmentIndex.find(b);
   				if (null == f) return C.return(null);
   				g = e.segmentIndex.get(f);
   				h = Wo(g.tilesLayout || e.tilesLayout);
   				if (!h) return C.return(null);
   				k = e.width || 0;
   				l = e.height || 0;
   				m = k / h.Vb;
   				n = l / h.rows;
   				p = h.Vb * h.rows;
   				q = g.i - g.startTime;
   				u = g.A || q / p;
   				v = g.startTime;
   				A = w = 0;
   				1 < p && (z = Math.floor((b - g.startTime) / u), v = g.startTime + z * u, w = z % h.Vb * m, A = Math.floor(z / h.Vb) * n);
   				y = !1;
   				if (B = g.s) y = !0, n = B.height, w = B.positionX, A = B.positionY, m = B.width;
   				return C.return({
   					segment: g,
   					imageHeight: l,
   					imageWidth: k,
   					height: n,
   					positionX: w,
   					positionY: A,
   					startTime: v,
   					duration: u,
   					uris: g.L(),
   					width: m,
   					sprite: y
   				})
   			})
   		};
   		r.Kg = function(a) {
   			if (this.i && this.j) {
   				var b = this.i.textStreams.find(function(d) {
   					return d.id == a.id
   				});
   				b && b != this.j.s && (Wk(this.s.h, b, !1), Dl(this.j, b), Xo(this), this.Wa = b.language)
   			} else if (this.h && this.h.src && this.h.textTracks) {
   				b = Qo(this);
   				b = t(b);
   				for (var c = b.next(); !c.done; c = b.next()) c = c.value, df(c) == a.id ? c.mode = this.da ? "showing" : "hidden" : c.mode = "disabled";
   				Xo(this)
   			}
   		};
   		r.Jf = function(a, b, c) {
   			b = void 0 === b ? !1 : b;
   			c = void 0 === c ? 0 : c;
   			if (this.i && this.j) {
   				this.g.abr.enabled && ab("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");
   				var d = this.i.variants.find(function(e) {
   					return e.id == a.id
   				});
   				d && kf(d) && (zo(this, d, !1, b, c), this.Ja = new Bf(d, this.g.mediaSource.codecSwitchingStrategy, this.g.manifest.dash.enableAudioGroups), so(this))
   			} else if (this.h && this.h.audioTracks)
   				for (b =
   					Array.from(this.h.audioTracks), b = t(b), c = b.next(); !c.done; c = b.next())
   					if (c = c.value, df(c) == a.id) {
   						Yo(this, c);
   						break
   					}
   		};
   		r.wh = function() {
   			return Zo(this.Nb())
   		};
   		r.Oh = function() {
   			return Zo(this.zc())
   		};
   		r.vh = function() {
   			return Array.from($o(this.Nb()))
   		};
   		r.Nh = function() {
   			return Array.from($o(this.zc()))
   		};
   		r.Jg = function(a, b, c, d) {
   			c = void 0 === c ? 0 : c;
   			d = void 0 === d ? 0 : d;
   			if (this.i && this.C) {
   				this.Ja = new Cf(a, b || "", c, "", !1, "", "", "", this.g.mediaSource.codecSwitchingStrategy, this.g.manifest.dash.enableAudioGroups);
   				a = function(g, h) {
   					return g.video || h.video ? g.video && h.video ? Math.abs((g.video.height || 0) - (h.video.height || 0)) + Math.abs((g.video.width || 0) - (h.video.width || 0)) : Infinity : 0
   				};
   				b = this.j.j;
   				var e = this.Ja.create(this.i.variants);
   				c = null;
   				e = t(e.values());
   				for (var f = e.next(); !f.done; f = e.next())
   					if (f = f.value, !c || a(c, b) > a(f,
   							b)) c = f;
   				c ? (a = af(c), this.Jf(a, !0, d)) : to(this)
   			} else this.h && this.h.audioTracks && (d = mf(this.Nb(), a, b || "", !1)[0]) && this.Jf(d)
   		};
   		r.If = function(a, b, c) {
   			c = void 0 === c ? !1 : c;
   			if (this.i && this.C) {
   				if (this.Wa = a, this.pd = b || "", this.md = c, (a = mf(this.i.textStreams, this.Wa, this.pd, this.md)[0] || null) && a != this.j.s && (Wk(this.s.h, a, !1), this.g.streaming.alwaysStreamText || this.kf())) Dl(this.j, a), Xo(this)
   			} else(a = mf(this.zc(), a, b || "", c)[0]) && this.Kg(a)
   		};
   		r.Gi = function(a, b, c) {
   			b = void 0 === b ? !0 : b;
   			c = void 0 === c ? 0 : c;
   			if (this.i && this.C) {
   				for (var d = null, e = t(this.i.variants), f = e.next(); !f.done; f = e.next())
   					if (f = f.value, f.audio.label == a) {
   						d = f;
   						break
   					} null != d && (this.Ja = new Cf(d.language, "", 0, "", !1, "", a, "", this.g.mediaSource.codecSwitchingStrategy, this.g.manifest.dash.enableAudioGroups), to(this, b, c))
   			} else if (this.h && this.h.audioTracks) {
   				c = Array.from(this.h.audioTracks);
   				b = null;
   				c = t(c);
   				for (d = c.next(); !d.done; d = c.next()) d = d.value, d.label == a && (b = d);
   				b && Yo(this, b)
   			}
   		};
   		r.kf = function() {
   			var a = this.da;
   			return this.F && this.l == Bo ? this.F.F.isTextVisible() : this.h && this.h.src && this.h.textTracks ? Qo(this).some(function(b) {
   				return "showing" == b.mode
   			}) : a
   		};
   		r.qg = function() {
   			return this.h && this.h.src && this.h.textTracks ? ap(this).map(function(a) {
   				return gf(a)
   			}) : []
   		};
   		r.xh = function(a) {
   			if (!this.h || !this.h.src || !this.h.textTracks) return [];
   			var b = ue(a),
   				c = ap(this).filter(function(h) {
   					return ue(h.language) == b
   				});
   			if (!c || !c.length) return [];
   			a = [];
   			var d = new Set;
   			c = t(c);
   			for (var e = c.next(); !e.done; e = c.next())
   				if ((e = e.value) && e.cues) {
   					e = t(e.cues);
   					for (var f = e.next(); !f.done; f = e.next()) {
   						var g = f.value;
   						(f = g.id) && "" != f || (f = g.startTime + "-" + g.endTime + "-" + g.text);
   						g = {
   							id: f,
   							title: g.text,
   							startTime: g.startTime,
   							endTime: g.endTime
   						};
   						d.has(f) || (a.push(g), d.add(f))
   					}
   				} return a
   		};

   		function Qo(a) {
   			return Array.from(a.h.textTracks).filter(function(b) {
   				return "metadata" != b.kind && "chapters" != b.kind && "gowatch Player TextTrack" != b.label
   			})
   		}

   		function To(a) {
   			return Array.from(a.h.textTracks).filter(function(b) {
   				return "metadata" == b.kind
   			})
   		}

   		function ap(a) {
   			return Array.from(a.h.textTracks).filter(function(b) {
   				return "chapters" == b.kind
   			})
   		}
   		r.Qg = function(a) {
   			a = !!a;
   			if (this.da != a) {
   				this.da = a;
   				if (this.l == Bo) this.F.F.setTextVisibility(a), this.g.streaming.alwaysStreamText || (a ? this.j.s || (a = mf(this.i.textStreams, this.Wa, this.pd, this.md), 0 < a.length && (Dl(this.j, a[0]), Xo(this))) : zl(this.j));
   				else if (this.h && this.h.src && this.h.textTracks) {
   					var b = Qo(this);
   					b = t(b);
   					for (var c = b.next(); !c.done; c = b.next()) c = c.value, "disabled" != c.mode && (c.mode = a ? "showing" : "hidden")
   				}
   				Jo(this)
   			}
   		};
   		r.Jh = function() {
   			if (this.C) var a = this.C.Md();
   			else {
   				if (null == this.fa) return new Date;
   				a = this.fa
   			}
   			if (this.i) {
   				var b = this.i.presentationTimeline;
   				return new Date(1E3 * ((b.B || b.i) + a))
   			}
   			return this.h && this.h.getStartDate ? (b = this.h.getStartDate(), isNaN(b.getTime()) ? null : new Date(b.getTime() + 1E3 * a)) : null
   		};
   		r.tg = function() {
   			if (this.i) {
   				var a = this.i.presentationTimeline;
   				return new Date(1E3 * (a.B || a.i))
   			}
   			return this.h && this.h.getStartDate ? (a = this.h.getStartDate(), isNaN(a.getTime()) ? null : a) : null
   		};
   		r.Wd = function() {
   			return this.T() ? this.i ? this.i.presentationTimeline.Wd() : null : null
   		};
   		r.rb = function() {
   			if (this.l == Bo) return this.F.rb();
   			var a = {
   				total: [],
   				audio: [],
   				video: [],
   				text: []
   			};
   			this.l == Oo && (a.total = Ii(this.h.buffered));
   			return a
   		};
   		r.getStats = function() {
   			if (this.l != Bo && this.l != Oo) return {
   				width: NaN,
   				height: NaN,
   				streamBandwidth: NaN,
   				decodedFrames: NaN,
   				droppedFrames: NaN,
   				corruptedFrames: NaN,
   				stallsDetected: NaN,
   				gapsJumped: NaN,
   				estimatedBandwidth: NaN,
   				completionPercent: NaN,
   				loadLatency: NaN,
   				manifestTimeSeconds: NaN,
   				drmTimeSeconds: NaN,
   				playTime: NaN,
   				pauseTime: NaN,
   				bufferingTime: NaN,
   				licenseTime: NaN,
   				liveLatency: NaN,
   				maxSegmentDuration: NaN,
   				bytesDownloaded: NaN,
   				switchHistory: [],
   				stateHistory: []
   			};
   			wo(this);
   			var a = this.h,
   				b = a.currentTime / a.duration;
   			if (!isNaN(b)) {
   				var c =
   					this.s;
   				b = Math.round(100 * b);
   				c.i = isNaN(c.i) ? b : Math.max(c.i, b)
   			}
   			this.C && (this.s.M = this.C.ag(), this.s.N = this.C.bg());
   			if (a.getVideoPlaybackQuality) {
   				c = a.getVideoPlaybackQuality();
   				b = this.s;
   				var d = Number(c.totalVideoFrames);
   				b.K = Number(c.droppedVideoFrames);
   				b.J = d;
   				this.s.H = Number(c.corruptedVideoFrames)
   			}
   			this.B ? (c = this.B, c = c.J ? c.J : NaN) : c = NaN;
   			this.s.s = c;
   			if (this.l == Bo) {
   				c = this.j.j;
   				b = this.j.s;
   				if (c) {
   					d = this.H ? this.H.i : 1;
   					var e = d * c.bandwidth;
   					b && b.bandwidth && (e += d * b.bandwidth);
   					this.s.B = e
   				}
   				c && c.video && (b = this.s, d = c.video.height ||
   					NaN, b.o = c.video.width || NaN, b.l = d);
   				this.T() && (c = this.tg().valueOf() + 1E3 * a.currentTime, this.s.C = (Date.now() - c) / 1E3);
   				this.i && this.i.presentationTimeline && (this.s.G = this.i.presentationTimeline.g);
   				c = this.o.getBandwidthEstimate();
   				this.s.A = c
   			}
   			this.l == Oo && (c = this.s, b = a.videoHeight || NaN, c.o = a.videoWidth || NaN, c.l = b);
   			var f = this.s;
   			a = f.o;
   			c = f.l;
   			b = f.B;
   			d = f.J;
   			e = f.K;
   			var g = f.H,
   				h = f.N,
   				k = f.M,
   				l = f.A,
   				m = f.i,
   				n = f.m,
   				p = f.F,
   				q = f.j,
   				u = Tk(f.g, "playing"),
   				v = Tk(f.g, "paused"),
   				w = Tk(f.g, "buffering"),
   				A = f.s,
   				z = f.C,
   				y = f.G,
   				B = f.Nd,
   				C = Uk(f.g),
   				D = [];
   			f = t(f.h.g);
   			for (var J = f.next(); !J.done; J = f.next()) J = J.value, D.push({
   				timestamp: J.timestamp,
   				id: J.id,
   				type: J.type,
   				fromAdaptation: J.fromAdaptation,
   				bandwidth: J.bandwidth
   			});
   			return {
   				width: a,
   				height: c,
   				streamBandwidth: b,
   				decodedFrames: d,
   				droppedFrames: e,
   				corruptedFrames: g,
   				stallsDetected: h,
   				gapsJumped: k,
   				estimatedBandwidth: l,
   				completionPercent: m,
   				loadLatency: n,
   				manifestTimeSeconds: p,
   				drmTimeSeconds: q,
   				playTime: u,
   				pauseTime: v,
   				bufferingTime: w,
   				licenseTime: A,
   				liveLatency: z,
   				maxSegmentDuration: y,
   				bytesDownloaded: B,
   				stateHistory: C,
   				switchHistory: D
   			}
   		};
   		r.fh = function(a, b, c, d, e, f, g) {
   			g = void 0 === g ? !1 : g;
   			var h = this,
   				k, l, m, n, p, q, u, v, w, A, z, y;
   			return O(function(B) {
   				switch (B.g) {
   					case 1:
   						if (h.l != Bo && h.l != Oo) throw new T(1, 7, 7004);
   						"subtitles" != c && "captions" != c && ab("Using a kind value different of `subtitles` or `captions` can cause unwanted issues.");
   						if (d) {
   							B.u(2);
   							break
   						}
   						return E(B, bp(h, a), 3);
   					case 3:
   						d = B.h;
   					case 2:
   						k = [];
   						h.A && (k = h.A.getCuePoints());
   						if (h.l != Oo) {
   							B.u(4);
   							break
   						}
   						g && (c = "forced");
   						return E(B, cp(h, a, b, c, d, f || "", k), 5);
   					case 5:
   						l = ue(b);
   						m = h.zc();
   						if (n = m.find(function(C) {
   								return ue(C.language) ==
   									l && C.label == (f || "") && C.kind == c
   							})) return ro(h), B.return(n);
   						throw new T(1, 2, 2012);
   					case 4:
   						p = Nd;
   						q = h.h.duration;
   						h.i && (q = h.i.presentationTimeline.getDuration());
   						if (Infinity == q) throw new T(1, 4, 4033);
   						if (!k.length) {
   							B.u(6);
   							break
   						}
   						return E(B, dp(h, a, h.G, h.g.streaming.retryParameters), 7);
   					case 7:
   						u = B.h, v = ep(h, u, d, k), w = new Blob([v], {
   							type: "text/vtt"
   						}), a = Jj(w), d = "text/vtt";
   					case 6:
   						A = {
   							id: h.Vf++,
   							originalId: null,
   							groupId: null,
   							createSegmentIndex: function() {
   								return Promise.resolve()
   							},
   							segmentIndex: Mk(0, q, [a]),
   							mimeType: d || "",
   							codecs: e || "",
   							kind: c,
   							encrypted: !1,
   							drmInfos: [],
   							keyIds: new Set,
   							language: b,
   							originalLanguage: b,
   							label: f || null,
   							type: p.ma,
   							primary: !1,
   							trickModeVideo: null,
   							emsgSchemeIdUris: null,
   							roles: [],
   							forced: !!g,
   							channelsCount: null,
   							audioSamplingRate: null,
   							spatialAudio: !1,
   							closedCaptions: null,
   							accessibilityPurpose: null,
   							external: !0,
   							fastSwitching: !1,
   							fullMimeTypes: new Set([Pd(d || "", e || "")])
   						};
   						z = Pd(A.mimeType, A.codecs);
   						y = he(z);
   						if (!y) throw new T(2, 2, 2014, d);
   						h.i.textStreams.push(A);
   						ro(h);
   						return B.return(bf(A))
   				}
   			})
   		};
   		r.gh = function(a, b) {
   			var c = this,
   				d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z;
   			return O(function(y) {
   				switch (y.g) {
   					case 1:
   						if (c.l != Bo && c.l != Oo) throw new T(1, 7, 7004);
   						if (b) {
   							y.u(2);
   							break
   						}
   						return E(y, bp(c, a), 3);
   					case 3:
   						b = y.h;
   					case 2:
   						if ("text/vtt" != b) throw new T(1, 2, 2017, a);
   						d = Nd;
   						e = c.h.duration;
   						c.i && (e = c.i.presentationTimeline.getDuration());
   						if (Infinity == e) throw new T(1, 4, 4045);
   						return E(y, dp(c, a, c.G, c.g.streaming.retryParameters), 4);
   					case 4:
   						f = y.h;
   						g = ie[b];
   						if (!g) throw new T(2, 2, 2014, b);
   						h = g();
   						k = {
   							periodStart: 0,
   							segmentStart: 0,
   							segmentEnd: e,
   							vttOffset: 0
   						};
   						l = Ab(f);
   						m = h.parseMedia(l, k, a);
   						n = [];
   						p = {};
   						q = t(m);
   						for (u = q.next(); !u.done; p = {
   								Wc: p.Wc,
   								Sb: p.Sb
   							}, u = q.next()) p.Sb = u.value, p.Wc = null, v = function(B) {
   								return function() {
   									null == B.Wc && (B.Wc = Cd([a], [B.Sb.payload]));
   									return B.Wc || []
   								}
   							}(p), w = new Bi(p.Sb.startTime, p.Sb.endTime, v, 0, null, null, 0, 0, Infinity), p.Sb.payload.includes("#xywh") && (A = p.Sb.payload.split("#xywh=")[1].split(","), 4 === A.length && w.Rg({
   								height: parseInt(A[3], 10),
   								positionX: parseInt(A[0], 10),
   								positionY: parseInt(A[1], 10),
   								width: parseInt(A[2], 10)
   							})),
   							n.push(w);
   						z = {
   							id: c.Vf++,
   							originalId: null,
   							groupId: null,
   							createSegmentIndex: function() {
   								return Promise.resolve()
   							},
   							segmentIndex: new Kk(n),
   							mimeType: b || "",
   							codecs: "",
   							kind: "",
   							encrypted: !1,
   							drmInfos: [],
   							keyIds: new Set,
   							language: "und",
   							originalLanguage: null,
   							label: null,
   							type: d.Ee,
   							primary: !1,
   							trickModeVideo: null,
   							emsgSchemeIdUris: null,
   							roles: [],
   							forced: !1,
   							channelsCount: null,
   							audioSamplingRate: null,
   							spatialAudio: !1,
   							closedCaptions: null,
   							tilesLayout: "1x1",
   							accessibilityPurpose: null,
   							external: !0,
   							fastSwitching: !1,
   							fullMimeTypes: new Set([Pd(b ||
   								"", "")])
   						};
   						c.l == Oo ? c.td.push(z) : c.i.imageStreams.push(z);
   						ro(c);
   						return y.return(cf(z))
   				}
   			})
   		};
   		r.eh = function(a, b, c) {
   			var d = this,
   				e, f, g, h;
   			return O(function(k) {
   				switch (k.g) {
   					case 1:
   						if (d.l != Bo && d.l != Oo) throw new T(1, 7, 7004);
   						if (c) {
   							k.u(2);
   							break
   						}
   						return E(k, bp(d, a), 3);
   					case 3:
   						c = k.h;
   					case 2:
   						return e = [], d.A && (e = d.A.getCuePoints()), E(k, cp(d, a, b, "chapters", c, "", e), 4);
   					case 4:
   						f = k.h;
   						g = d.qg();
   						h = g.find(function(l) {
   							return l.language == b
   						});
   						if (!h) {
   							k.u(5);
   							break
   						}
   						return E(k, new Promise(function(l, m) {
   							d.m.qa(f, "load", l);
   							d.m.qa(f, "error", function() {
   								m(new T(1, 2, 2015))
   							})
   						}), 6);
   					case 6:
   						return ro(d), k.return(h);
   					case 5:
   						throw new T(1,
   							2, 2012);
   				}
   			})
   		};

   		function bp(a, b) {
   			var c;
   			return O(function(d) {
   				switch (d.g) {
   					case 1:
   						return ua(d, 2), E(d, Tm(b, a.G, a.g.streaming.retryParameters), 4);
   					case 4:
   						c = d.h;
   						wa(d, 3);
   						break;
   					case 2:
   						ya(d);
   					case 3:
   						if (c) return d.return(c);
   						throw new T(1, 2, 2011, b);
   				}
   			})
   		}

   		function cp(a, b, c, d, e, f, g) {
   			var h, k, l, m;
   			return O(function(n) {
   				if (1 == n.g) return "text/vtt" != e || g.length ? E(n, dp(a, b, a.G, a.g.streaming.retryParameters), 3) : n.u(2);
   				2 != n.g && (h = n.h, k = ep(a, h, e, g), l = new Blob([k], {
   					type: "text/vtt"
   				}), b = Jj(l), e = "text/vtt");
   				m = document.createElement("track");
   				var p = a.S,
   					q = b;
   				try {
   					if (p.g.enabled) {
   						var u = qn(p);
   						u.ot = Dn;
   						u.su = !0;
   						var v = un(u);
   						var w = vn(q, v)
   					} else w = q
   				} catch (A) {
   					bb("CMCD_TEXT_TRACK_ERROR", "Could not generate text track CMCD data.", A), w = q
   				}
   				m.src = w;
   				m.label = f;
   				m.kind = d;
   				m.srclang = c;
   				a.h.getAttribute("crossorigin") ||
   					a.h.setAttribute("crossorigin", "anonymous");
   				a.h.appendChild(m);
   				return n.return(m)
   			})
   		}

   		function dp(a, b, c, d) {
   			var e, f, g;
   			return O(function(h) {
   				if (1 == h.g) {
   					e = pg;
   					f = jg([b], d);
   					f.method = "GET";
   					var k = a.S;
   					try {
   						k.g.enabled && wn(k, f, {
   							ot: Dn,
   							su: !0
   						})
   					} catch (l) {
   						bb("CMCD_TEXT_ERROR", "Could not generate text CMCD data.", l)
   					}
   					return E(h, c.request(e, f).promise, 2)
   				}
   				g = h.h;
   				return h.return(g.data)
   			})
   		}

   		function ep(a, b, c, d) {
   			var e = ie[c];
   			if (e) return c = e(), a = {
   				periodStart: 0,
   				segmentStart: 0,
   				segmentEnd: a.h.duration,
   				vttOffset: 0
   			}, b = Ab(b), b = c.parseMedia(b, a, null), nn(b, d);
   			throw new T(2, 2, 2014, c);
   		}
   		r.Li = function(a, b) {
   			this.ca.width = a;
   			this.ca.height = b
   		};
   		r.Ef = function(a) {
   			if (this.l == Bo) {
   				var b = this.j;
   				a = void 0 === a ? .1 : a;
   				if (b.l.g) b = !1;
   				else if (b.A) b = !1;
   				else {
   					for (var c = t(b.i.values()), d = c.next(); !d.done; d = c.next()) d = d.value, !d.od || d.Ra || d.xb || (d.od = !1, yl(b, d, a));
   					b = !0
   				}
   			} else b = !1;
   			return b
   		};
   		r.df = function() {
   			ab("gowatch Player's internal Manifest structure is NOT covered by semantic versioning compatibility guarantees.  It may change at any time!  Please consider filing a feature request for whatever you use getManifest() for.");
   			return this.i
   		};
   		r.Eh = function() {
   			return this.Xa
   		};

   		function Qn(a) {
   			var b = hm();
   			b.streaming.failureCallback = function(c) {
   				if (a.T()) {
   					var d = null;
   					1001 == c.code || 1002 == c.code ? (d = 1, a.g.streaming.lowLatencyMode && (d = .1)) : 1003 == c.code && (d = .1);
   					null != d && (c.severity = 1, a.Ef(d))
   				}
   			};
   			b.textDisplayFactory = function() {
   				if (a.ae) {
   					var c = a.getConfiguration();
   					return new dn(a.h, a.ae, c.textDisplayer)
   				}
   				return HTMLMediaElement.prototype.addTextTrack ? new Ym(a.h, "gowatch Player TextTrack") : new an
   			};
   			return b
   		}
   		r.Ug = function(a) {
   			this.ae = a
   		};

   		function po(a, b) {
   			for (var c = new Set, d = t(b.textStreams), e = d.next(); !e.done; e = d.next()) e = e.value, "application/cea-608" != e.mimeType && "application/cea-708" != e.mimeType || c.add(e.originalId);
   			d = t(b.variants);
   			for (e = d.next(); !e.done; e = d.next())
   				if ((e = e.value.video) && e.closedCaptions)
   					for (var f = t(e.closedCaptions.keys()), g = f.next(); !g.done; g = f.next())
   						if (g = g.value, !c.has(g)) {
   							var h = g.startsWith("CC") ? "application/cea-608" : "application/cea-708",
   								k = new Nk,
   								l = e.closedCaptions.get(g);
   							h = {
   								id: a.Vf++,
   								originalId: g,
   								groupId: null,
   								createSegmentIndex: function() {
   									return Promise.resolve()
   								},
   								segmentIndex: k,
   								mimeType: h,
   								codecs: "",
   								kind: "caption",
   								encrypted: !1,
   								drmInfos: [],
   								keyIds: new Set,
   								language: l,
   								originalLanguage: l,
   								label: null,
   								type: Ld,
   								primary: !1,
   								trickModeVideo: null,
   								emsgSchemeIdUris: null,
   								roles: e.roles,
   								forced: !1,
   								channelsCount: null,
   								audioSamplingRate: null,
   								spatialAudio: !1,
   								closedCaptions: null,
   								accessibilityPurpose: null,
   								external: !1,
   								fastSwitching: !1,
   								fullMimeTypes: new Set([Pd(h, "")])
   							};
   							b.textStreams.push(h);
   							c.add(g)
   						}
   		}

   		function Ho(a, b) {
   			var c, d, e, f, g;
   			return O(function(h) {
   				if (1 == h.g) return c = a.audio, d = a.video, e = function(k, l) {
   					var m, n, p;
   					return O(function(q) {
   						if (1 == q.g) return k ? E(q, k.createSegmentIndex(), 2) : q.return(null);
   						n = (m = k.segmentIndex.Ab(l)) ? m.next().value : null;
   						if (!n) return q.return(null);
   						p = n.startTime;
   						return q.return(p)
   					})
   				}, E(h, e(c, b), 2);
   				if (3 != h.g) return f = h.h, E(h, e(d, b), 3);
   				g = h.h;
   				return null != g && null != f ? h.return(Math.max(g, f)) : null != g ? h.return(g) : null != f ? h.return(f) : h.return(b)
   			})
   		}

   		function fo(a) {
   			var b = a.jf();
   			if (a.s && a.M && a.C) {
   				var c = a.H;
   				c.j = b;
   				Pk(c);
   				a.S && (c = a.S, b || c.i || (c.i = !0), c.i && b && (c.j = !0), c.l = b);
   				wo(a)
   			}
   			b = (new Map).set("buffering", b);
   			a.dispatchEvent(Yn("buffering", b))
   		}

   		function xo(a) {
   			var b = a.h.playbackRate;
   			0 != b && (a.H && a.H.set(b), b = Yn("ratechange"), a.dispatchEvent(b))
   		}

   		function wo(a) {
   			if (a.s && a.M) {
   				var b = a.s.g,
   					c = "playing";
   				a.M.g == Nf ? c = "buffering" : a.h.paused ? c = "paused" : a.h.ended && (c = "ended");
   				var d = c;
   				if (null == b.g) b.g = {
   					timestamp: Date.now() / 1E3,
   					state: d,
   					duration: 0
   				}, b = !0;
   				else {
   					var e = Date.now() / 1E3;
   					b.g.duration = e - b.g.timestamp;
   					b.g.state == d ? b = !1 : (b.h.push(b.g), b.g = {
   						timestamp: e,
   						state: d,
   						duration: 0
   					}, b = !0)
   				}
   				b && (c = (new Map).set("newstate", c), a.dispatchEvent(Yn("statechanged", c)))
   			}
   		}

   		function Lo(a) {
   			var b = a.h.playbackRate,
   				c = a.T();
   			if (a.g.streaming.vodDynamicPlaybackRate && !c) {
   				var d = a.g.streaming.vodDynamicPlaybackRateLowBufferRate,
   					e = a.pg();
   				e <= a.g.streaming.vodDynamicPlaybackRateBufferRatio ? b != d && a.Cd(d) : 1 == e && b !== a.H.Yb() && a.$c()
   			}
   			if (c && (e = a.Ob(), Number.isFinite(e.end) && !(a.h.currentTime < e.start))) {
   				if (a.g.streaming.liveSync) {
   					var f = a.g.streaming.liveSyncMaxLatency;
   					var g = a.g.streaming.liveSyncPlaybackRate
   				} else a.i && a.i.serviceDescription && (f = a.g.streaming.liveSyncMaxLatency, null != a.i.serviceDescription.targetLatency ?
   					f = a.i.serviceDescription.targetLatency + a.g.streaming.liveSyncTargetLatencyTolerance : null != a.i.serviceDescription.maxLatency && (f = a.i.serviceDescription.maxLatency), g = a.i.serviceDescription.maxPlaybackRate || a.g.streaming.liveSyncPlaybackRate);
   				if (a.g.streaming.liveSync) {
   					var h = a.g.streaming.liveSyncMinLatency;
   					var k = a.g.streaming.liveSyncMinPlaybackRate
   				} else a.i && a.i.serviceDescription && (h = a.g.streaming.liveSyncMinLatency, null != a.i.serviceDescription.targetLatency ? h = a.i.serviceDescription.targetLatency -
   					a.g.streaming.liveSyncTargetLatencyTolerance : null != a.i.serviceDescription.minLatency && (h = a.i.serviceDescription.minLatency), k = a.i.serviceDescription.minPlaybackRate || a.g.streaming.liveSyncMinPlaybackRate);
   				c = e.end - a.h.currentTime;
   				d = 0;
   				if (a.l == Oo) {
   					var l = a.h.buffered;
   					0 < l.length && (d = l.end(l.length - 1), d = Math.max(g, d - e.end))
   				}
   				e = a.g.streaming.liveSyncPanicMode;
   				l = 1E3 * a.g.streaming.liveSyncPanicThreshold;
   				var m = Date.now() - a.M.h;
   				e && !k && (k = a.g.streaming.liveSyncMinPlaybackRate);
   				e && k && m <= l ? b != k && a.Cd(k) : f && g && c -
   					d > f ? b != g && a.Cd(g) : h && k && c - d < h ? b != k && a.Cd(k) : b !== a.H.Yb() && a.$c()
   			}
   		}

   		function Mo(a) {
   			if (a.h) {
   				var b = !1,
   					c = a.h.currentTime / a.h.duration;
   				isNaN(c) || (c = Math.round(100 * c), isNaN(a.N) ? (a.N = c, b = !0) : (c = Math.max(a.N, c), a.N != c && (a.N = c, b = !0)));
   				if (b) {
   					var d;
   					0 == a.N ? d = Yn("started") : 25 == a.N ? d = Yn("firstquartile") : 50 == a.N ? d = Yn("midpoint") : 75 == a.N ? d = Yn("thirdquartile") : 100 == a.N && (d = Yn("complete"));
   					d && a.dispatchEvent(d)
   				}
   			}
   		}

   		function so(a) {
   			try {
   				ni(a.$d, a.i)
   			} catch (c) {
   				return co(a, c), !1
   			}
   			var b = lf(a.i.variants);
   			b = a.Ja.create(b);
   			a.o.setVariants(Array.from(b.values()));
   			return !0
   		}

   		function Do(a, b) {
   			b = void 0 === b ? !1 : b;
   			return so(a) ? a.o.chooseVariant(b) : null
   		}

   		function Vn(a) {
   			function b(g) {
   				var h = "";
   				g.video && (h += "video:" + g.video.id);
   				g.audio && (h = h + (h ? "&" : "") + ("audio:" + g.audio.id));
   				return h
   			}
   			for (var c = Date.now() / 1E3, d = !1, e = t(a.i.variants), f = e.next(); !f.done; f = e.next()) f = f.value, 0 < f.disabledUntilTime && f.disabledUntilTime <= c && (f.disabledUntilTime = 0, d = !0, fb("Re-enabled variant with " + b(f)));
   			a.i.variants.every(function(g) {
   				return 0 === g.disabledUntilTime
   			}) && a.je.stop();
   			d && to(a, !0, void 0, !1, !1)
   		}

   		function to(a, b, c, d, e) {
   			b = void 0 === b ? !0 : b;
   			c = void 0 === c ? 0 : c;
   			d = void 0 === d ? !1 : d;
   			e = void 0 === e ? !0 : e;
   			var f = Do(a);
   			f && zo(a, f, e, b, c, d)
   		}

   		function zo(a, b, c, d, e, f) {
   			f = void 0 === f ? !1 : f;
   			var g = a.j.j;
   			if (b == g) d && Cl(a.j, b, d, e, !0);
   			else {
   				var h = a.s.h;
   				h.h != b && (h.h = b, h.g.push({
   					timestamp: Date.now() / 1E3,
   					id: b.id,
   					type: "variant",
   					fromAdaptation: c,
   					bandwidth: b.bandwidth
   				}));
   				Cl(a.j, b, d, e, f, c);
   				d = null;
   				g && (d = af(g));
   				b = af(b);
   				c ? (c = (new Map).set("oldTrack", d).set("newTrack", b), a.K && zj(a.K, b, a.ef()), c = Yn("adaptation", c), fp(a, c)) : gp(a, d, b)
   			}
   		}

   		function Yo(a, b) {
   			var c = Array.from(a.h.audioTracks).find(function(d) {
   				return d.enabled
   			});
   			b.enabled = !0;
   			b.id !== c.id && (c.enabled = !1);
   			c = jf(c);
   			b = jf(b);
   			gp(a, c, b)
   		}

   		function Io(a, b, c) {
   			if (0 == a.g.autoShowText) return !1;
   			if (1 == a.g.autoShowText) return !0;
   			var d = ue(a.g.preferredTextLanguage);
   			c = ue(c.language);
   			if (2 == a.g.autoShowText) return te(c, d);
   			if (3 == a.g.autoShowText) return a = ue(b.language), te(c, d) && !te(a, c);
   			ab("Invalid autoShowText setting!");
   			return !1
   		}

   		function ro(a) {
   			var b = Yn("trackschanged");
   			fp(a, b)
   		}

   		function gp(a, b, c) {
   			b = (new Map).set("oldTrack", b).set("newTrack", c);
   			a.K && zj(a.K, c, a.ef());
   			c = Yn("variantchanged", b);
   			fp(a, c)
   		}

   		function Xo(a) {
   			var b = Yn("textchanged");
   			fp(a, b)
   		}

   		function Jo(a) {
   			var b = Yn("texttrackvisibility");
   			fp(a, b)
   		}

   		function Ko(a) {
   			a.g.abr.enabled || Un(a);
   			var b = (new Map).set("newStatus", a.g.abr.enabled);
   			fp(a, Yn("abrstatuschanged", b))
   		}

   		function Un(a, b) {
   			b = void 0 === b ? !0 : b;
   			if (a.l == Bo) {
   				a.je.stop();
   				for (var c = t(a.i.variants), d = c.next(); !d.done; d = c.next()) d.value.disabledUntilTime = 0;
   				b && so(a)
   			}
   		}
   		r.Sd = function(a, b) {
   			if (!this.g.abr.enabled || this.l === Zn || !navigator.onLine) return !1;
   			if (this.i.variants.some(function(f) {
   					return (f = f[a.type]) && f.id !== a.id ? "audio" == a.type ? a.language === f.language : !0 : !1
   				})) {
   				for (var c = t(this.i.variants), d = c.next(); !d.done; d = c.next()) {
   					d = d.value;
   					var e = d[a.type];
   					e && e.id === a.id && (d.disabledUntilTime = Date.now() / 1E3 + b)
   				}
   				this.je.Ua(1);
   				b = this.rb().video.reduce(function(f, g) {
   					return f + g.end - g.start
   				}, 0);
   				to(this, !0, b, !0, !1);
   				return !0
   			}
   			return !1
   		};

   		function co(a, b) {
   			var c, d, e;
   			return O(function(f) {
   				switch (f.g) {
   					case 1:
   						if (a.l == Zn) return f.return();
   						c = !0;
   						if (!(a.gb && a.i && a.j) || 3016 != b.code && 3014 != b.code && 3015 != b.code && 3018 != b.code) {
   							f.u(2);
   							break
   						}
   						ua(f, 3);
   						return E(f, Wl(a.j), 5);
   					case 5:
   						d = f.h;
   						c = !d;
   						wa(f, 2);
   						break;
   					case 3:
   						ya(f), c = !0;
   					case 2:
   						if (!c) return f.return();
   						2 === b.severity && Un(a, !1);
   						e = Yn("error", (new Map).set("detail", b));
   						a.dispatchEvent(e);
   						e.defaultPrevented && (b.handled = !0);
   						F(f)
   				}
   			})
   		}

   		function qo(a, b, c, d) {
   			d = void 0 === d ? a : d;
   			a = (new Map).set("detail", {
   				schemeIdUri: c.schemeIdUri,
   				value: c.value,
   				startTime: c.startTime,
   				endTime: c.endTime,
   				id: c.id,
   				eventElement: c.eventElement,
   				eventNode: c.eventNode
   			});
   			d.dispatchEvent(Yn(b, a))
   		}

   		function bo(a) {
   			if (!a.h.error) return null;
   			var b = a.h.error.code;
   			if (1 == b) return null;
   			var c = a.h.error.msExtendedCode;
   			c && (0 > c && (c += Math.pow(2, 32)), c = c.toString(16));
   			return new T(2, 3, 3016, b, c, a.h.error.message)
   		}

   		function yo(a, b, c) {
   			0 < b && (a.T() || a.Tg(b));
   			b = a.getDuration();
   			c < b && (a.T() || a.Ta(c))
   		}

   		function fp(a, b) {
   			O(function(c) {
   				if (1 == c.g) return E(c, Promise.resolve(), 2);
   				a.l != Zn && a.dispatchEvent(b);
   				F(c)
   			})
   		}

   		function $o(a) {
   			var b = new Set;
   			a = t(a);
   			for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.language ? b.add(ue(c.language)) : b.add("und");
   			return b
   		}

   		function Zo(a) {
   			var b = new Map,
   				c = new Map;
   			a = t(a);
   			for (var d = a.next(); !d.done; d = a.next()) {
   				d = d.value;
   				var e = "und",
   					f = [];
   				d.language && (e = ue(d.language));
   				"variant" == d.type ? f = d.audioRoles : f = d.roles;
   				f && f.length || (f = [""]);
   				b.has(e) || b.set(e, new Set);
   				f = t(f);
   				for (var g = f.next(); !g.done; g = f.next()) g = g.value, b.get(e).add(g), d.label && (c.has(e) || c.set(e, new Map), c.get(e).set(g, d.label))
   			}
   			var h = [];
   			b.forEach(function(k, l) {
   				k = t(k);
   				for (var m = k.next(); !m.done; m = k.next()) {
   					m = m.value;
   					var n = null;
   					c.has(l) && c.get(l).has(m) && (n = c.get(l).get(m));
   					h.push({
   						language: l,
   						role: m,
   						label: n
   					})
   				}
   			});
   			return h
   		}
   		S("gowatch.Player", X);
   		X.prototype.setVideoContainer = X.prototype.Ug;
   		X.prototype.getManifestParserFactory = X.prototype.Eh;
   		X.prototype.getManifest = X.prototype.df;
   		X.prototype.retryStreaming = X.prototype.Ef;
   		X.prototype.setMaxHardwareResolution = X.prototype.Li;
   		X.prototype.addChaptersTrack = X.prototype.eh;
   		X.prototype.addThumbnailsTrack = X.prototype.gh;
   		X.prototype.addTextTrackAsync = X.prototype.fh;
   		X.prototype.getStats = X.prototype.getStats;
   		X.prototype.getBufferedInfo = X.prototype.rb;
   		X.prototype.getSegmentAvailabilityDuration = X.prototype.Wd;
   		X.prototype.getPresentationStartTimeAsDate = X.prototype.tg;
   		X.prototype.getPlayheadTimeAsDate = X.prototype.Jh;
   		X.prototype.setTextTrackVisibility = X.prototype.Qg;
   		X.prototype.getChapters = X.prototype.xh;
   		X.prototype.getChaptersTracks = X.prototype.qg;
   		X.prototype.isTextTrackVisible = X.prototype.kf;
   		X.prototype.selectVariantsByLabel = X.prototype.Gi;
   		X.prototype.selectTextLanguage = X.prototype.If;
   		X.prototype.selectAudioLanguage = X.prototype.Jg;
   		X.prototype.getTextLanguages = X.prototype.Nh;
   		X.prototype.getAudioLanguages = X.prototype.vh;
   		X.prototype.getTextLanguagesAndRoles = X.prototype.Oh;
   		X.prototype.getAudioLanguagesAndRoles = X.prototype.wh;
   		X.prototype.selectVariantTrack = X.prototype.Jf;
   		X.prototype.selectTextTrack = X.prototype.Kg;
   		X.prototype.getThumbnails = X.prototype.ug;
   		X.prototype.getAllThumbnails = X.prototype.uh;
   		X.prototype.getImageTracks = X.prototype.Bh;
   		X.prototype.getTextTracks = X.prototype.zc;
   		X.prototype.getVariantTracks = X.prototype.Nb;
   		X.prototype.cancelTrickPlay = X.prototype.$c;
   		X.prototype.trickPlay = X.prototype.Cd;
   		X.prototype.getPlaybackRate = X.prototype.ib;
   		X.prototype.isBuffering = X.prototype.jf;
   		X.prototype.getKeyStatuses = X.prototype.Td;
   		X.prototype.getActiveSessionsMetadata = X.prototype.cf;
   		X.prototype.getExpiration = X.prototype.jd;
   		X.prototype.drmInfo = X.prototype.drmInfo;
   		X.prototype.keySystem = X.prototype.keySystem;
   		X.prototype.goToLive = X.prototype.Vh;
   		X.prototype.seekRange = X.prototype.Ob;
   		X.prototype.isAudioOnly = X.prototype.Yh;
   		X.prototype.isInProgress = X.prototype.ec;
   		X.prototype.isLive = X.prototype.T;
   		X.prototype.getAdManager = X.prototype.og;
   		X.prototype.getAssetUri = X.prototype.yc;
   		X.prototype.getNetworkingEngine = X.prototype.$b;
   		X.prototype.getMediaElement = X.prototype.Gh;
   		X.prototype.getManifestType = X.prototype.ef;
   		X.prototype.getLoadMode = X.prototype.Dh;
   		X.prototype.resetConfiguration = X.prototype.Ai;
   		X.prototype.getBufferFullness = X.prototype.pg;
   		X.prototype.getNonDefaultConfiguration = X.prototype.Hh;
   		X.prototype.getConfiguration = X.prototype.getConfiguration;
   		X.prototype.configure = X.prototype.configure;
   		X.prototype.releaseAllMutexes = X.prototype.wi;
   		X.prototype.preload = X.prototype.preload;
   		X.prototype.detachAndSavePreload = X.prototype.kg;
   		X.prototype.unloadAndSavePreload = X.prototype.Oi;
   		X.prototype.load = X.prototype.load;
   		X.prototype.updateStartTime = X.prototype.Si;
   		X.prototype.unload = X.prototype.nc;
   		X.prototype.detach = X.prototype.detach;
   		X.prototype.attachCanvas = X.prototype.kh;
   		X.prototype.attach = X.prototype.tc;
   		X.probeSupport = function(a) {
   			a = void 0 === a ? !0 : a;
   			var b, c, d, e, f, g, h;
   			return O(function(k) {
   				switch (k.g) {
   					case 1:
   						b = {};
   						if (!a) {
   							k.u(2);
   							break
   						}
   						return E(k, ci(), 3);
   					case 3:
   						b = k.h;
   					case 2:
   						var l = {};
   						if (Mc())
   							for (var m in ri) l[m] = !0;
   						m = t(["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"]);
   						for (var n = m.next(); !n.done; n = m.next()) n = n.value, l[n] = Mc() ? !!ri[n] : Nc(n);
   						c = l;
   						m = 'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",video/mp4; codecs="dvh1.20.01",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="ac-4",audio/mp4; codecs="opus",audio/mp4; codecs="flac",audio/mp4; codecs="dtsc",audio/mp4; codecs="dtse",audio/mp4; codecs="dtsx",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").concat(x(Qd));
   						l = {};
   						m = t(m);
   						for (n = m.next(); !n.done; n = m.next()) {
   							n = n.value;
   							l[n] = he(n) ? !0 : Mc() ? mb(n) || (lc(n) ? !0 : !1) : Nc(n);
   							var p = n.split(";")[0];
   							l[p] = l[p] || l[n]
   						}
   						d = l;
   						return E(k, id(), 4);
   					case 4:
   						e = k.h;
   						f = {
   							manifest: c,
   							media: d,
   							drm: b,
   							hardwareResolution: e
   						};
   						g = hp;
   						for (h in g) f[h] = g[h]();
   						return k.return(f)
   				}
   			})
   		};
   		X.isBrowserSupported = function() {
   			window.Promise || ab("A Promise implementation or polyfill is required");
   			if (!(window.Promise && window.Uint8Array && Array.prototype.forEach) || Tc("Trident/")) return !1;
   			var a = fd();
   			return a && 9 > a || !(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration) ? !1 : Mc() ? !0 : Nc("application/x-mpegurl")
   		};
   		X.setAdManagerFactory = function(a) {
   			Tn = a
   		};
   		X.registerSupportPlugin = function(a, b) {
   			hp[a] = b
   		};
   		X.prototype.destroy = X.prototype.destroy;
   		var Zn = 0,
   			Pn = 1,
   			Bo = 2,
   			Oo = 3;
   		X.LoadMode = {
   			DESTROYED: Zn,
   			NOT_LOADED: Pn,
   			MEDIA_SOURCE: Bo,
   			SRC_EQUALS: Oo
   		};
   		X.version = "v4.9.3";
   		var ip = ["4", "9"];
   		rb = new function(a) {
   			this.g = a;
   			this.i = sb;
   			this.h = tb
   		}(new pb(Number(ip[0]), Number(ip[1])));
   		var hp = {},
   			Tn = null;

   		function jp() {
   			this.h = [];
   			this.j = this.i = this.g = 0
   		};

   		function kp(a, b, c) {
   			var d = this;
   			this.g = a;
   			this.h = b;
   			this.j = c;
   			this.i = !1;
   			this.l = this.h.getVolume();
   			this.m = new hb;
   			this.m.D(this.h, google.ima.AdEvent.Type.PAUSED, function() {
   				d.i = !0
   			});
   			this.m.D(this.h, google.ima.AdEvent.Type.RESUMED, function() {
   				d.i = !1
   			})
   		}
   		r = kp.prototype;
   		r.getDuration = function() {
   			return this.g.getDuration()
   		};
   		r.getMinSuggestedDuration = function() {
   			return this.g.getMinSuggestedDuration()
   		};
   		r.getRemainingTime = function() {
   			return this.h.getRemainingTime()
   		};
   		r.isPaused = function() {
   			return this.i
   		};
   		r.isSkippable = function() {
   			return 0 <= this.g.getSkipTimeOffset()
   		};
   		r.getTimeUntilSkippable = function() {
   			var a = this.g.getSkipTimeOffset();
   			a = this.getRemainingTime() - a;
   			return Math.max(a, 0)
   		};
   		r.canSkipNow = function() {
   			return this.h.getAdSkippableState()
   		};
   		r.skip = function() {
   			return this.h.skip()
   		};
   		r.pause = function() {
   			return this.h.pause()
   		};
   		r.play = function() {
   			return this.h.resume()
   		};
   		r.getVolume = function() {
   			return this.h.getVolume()
   		};
   		r.setVolume = function(a) {
   			this.j.volume = a;
   			return this.h.setVolume(a)
   		};
   		r.isMuted = function() {
   			return 0 == this.h.getVolume()
   		};
   		r.isLinear = function() {
   			return this.g.isLinear()
   		};
   		r.resize = function(a, b) {
   			var c = !1,
   				d = this.j;
   			document.fullscreenEnabled ? c = !!document.fullscreenElement : d.webkitSupportsFullscreen && (c = d.webkitDisplayingFullscreen);
   			this.h.resize(a, b, c ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
   		};
   		r.setMuted = function(a) {
   			(this.j.muted = a) ? (this.l = this.getVolume(), this.h.setVolume(0)) : this.h.setVolume(this.l)
   		};
   		r.getSequenceLength = function() {
   			var a = this.g.getAdPodInfo();
   			return null == a ? 1 : a.getTotalAds()
   		};
   		r.getPositionInSequence = function() {
   			var a = this.g.getAdPodInfo();
   			return null == a ? 1 : a.getAdPosition()
   		};
   		r.getTitle = function() {
   			return this.g.getTitle()
   		};
   		r.getDescription = function() {
   			return this.g.getDescription()
   		};
   		r.getVastMediaBitrate = function() {
   			return this.g.getVastMediaBitrate()
   		};
   		r.getVastMediaHeight = function() {
   			return this.g.getVastMediaHeight()
   		};
   		r.getVastMediaWidth = function() {
   			return this.g.getVastMediaWidth()
   		};
   		r.getAdId = function() {
   			return this.g.getAdId()
   		};
   		r.getCreativeAdId = function() {
   			return this.g.getCreativeAdId()
   		};
   		r.getAdvertiserName = function() {
   			return this.g.getAdvertiserName()
   		};
   		r.getMediaUrl = function() {
   			return this.g.getMediaUrl()
   		};
   		r.getTimeOffset = function() {
   			var a = this.g.getAdPodInfo();
   			return null == a ? 0 : a.getTimeOffset()
   		};
   		r.getPodIndex = function() {
   			var a = this.g.getAdPodInfo();
   			return null == a ? 0 : a.getPodIndex()
   		};
   		r.release = function() {
   			this.h = this.g = null
   		};
   		S("gowatch.ads.ClientSideAd", kp);
   		kp.prototype.release = kp.prototype.release;
   		kp.prototype.getPodIndex = kp.prototype.getPodIndex;
   		kp.prototype.getTimeOffset = kp.prototype.getTimeOffset;
   		kp.prototype.getMediaUrl = kp.prototype.getMediaUrl;
   		kp.prototype.getAdvertiserName = kp.prototype.getAdvertiserName;
   		kp.prototype.getCreativeAdId = kp.prototype.getCreativeAdId;
   		kp.prototype.getAdId = kp.prototype.getAdId;
   		kp.prototype.getVastMediaWidth = kp.prototype.getVastMediaWidth;
   		kp.prototype.getVastMediaHeight = kp.prototype.getVastMediaHeight;
   		kp.prototype.getVastMediaBitrate = kp.prototype.getVastMediaBitrate;
   		kp.prototype.getDescription = kp.prototype.getDescription;
   		kp.prototype.getTitle = kp.prototype.getTitle;
   		kp.prototype.getPositionInSequence = kp.prototype.getPositionInSequence;
   		kp.prototype.getSequenceLength = kp.prototype.getSequenceLength;
   		kp.prototype.setMuted = kp.prototype.setMuted;
   		kp.prototype.resize = kp.prototype.resize;
   		kp.prototype.isLinear = kp.prototype.isLinear;
   		kp.prototype.isMuted = kp.prototype.isMuted;
   		kp.prototype.setVolume = kp.prototype.setVolume;
   		kp.prototype.getVolume = kp.prototype.getVolume;
   		kp.prototype.play = kp.prototype.play;
   		kp.prototype.pause = kp.prototype.pause;
   		kp.prototype.skip = kp.prototype.skip;
   		kp.prototype.canSkipNow = kp.prototype.canSkipNow;
   		kp.prototype.getTimeUntilSkippable = kp.prototype.getTimeUntilSkippable;
   		kp.prototype.isSkippable = kp.prototype.isSkippable;
   		kp.prototype.isPaused = kp.prototype.isPaused;
   		kp.prototype.getRemainingTime = kp.prototype.getRemainingTime;
   		kp.prototype.getMinSuggestedDuration = kp.prototype.getMinSuggestedDuration;
   		kp.prototype.getDuration = kp.prototype.getDuration;

   		function lp(a, b, c, d, e) {
   			var f = this;
   			this.o = a;
   			this.i = b;
   			this.F = !1;
   			this.A = this.s = null;
   			this.G = NaN;
   			this.m = e;
   			this.j = null;
   			this.h = new hb;
   			google.ima.settings.setLocale(c);
   			google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0);
   			this.C = new google.ima.AdDisplayContainer(this.o, this.i);
   			this.C.initialize();
   			this.l = new google.ima.AdsLoader(this.C);
   			this.l.getSettings().setPlayerType("gowatch-player");
   			this.l.getSettings().setPlayerVersion("v4.9.3");
   			this.g = null;
   			this.B = d || new google.ima.AdsRenderingSettings;
   			this.h.D(this.l,
   				google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
   				function(g) {
   					mp(f, g)
   				});
   			this.h.D(this.l, google.ima.AdErrorEvent.Type.AD_ERROR, function(g) {
   				np(f, g)
   			});
   			this.h.D(this.i, "ended", function() {
   				f.l.contentComplete()
   			});
   			this.h.qa(this.i, "play", function() {
   				f.F = !0
   			})
   		}
   		lp.prototype.configure = function(a) {
   			this.s = a
   		};
   		lp.prototype.stop = function() {
   			this.g && this.g.stop();
   			this.o && cn(this.o)
   		};
   		lp.prototype.release = function() {
   			this.stop();
   			this.A && this.A.disconnect();
   			this.h && this.h.release();
   			this.g && this.g.destroy();
   			this.l.destroy();
   			this.C.destroy()
   		};

   		function np(a, b) {
   			b.getError();
   			b = (new Map).set("originalEvent", b);
   			a.m(new U("ad-error", b));
   			op(a, null);
   			a.m(new U("ad-cue-points-changed", (new Map).set("cuepoints", [])))
   		}

   		function mp(a, b) {
   			a.m(new U("ads-loaded", (new Map).set("loadTime", Date.now() / 1E3 - a.G)));
   			if (a.s.customPlayheadTracker) {
   				var c = {
   					currentTime: a.i.currentTime
   				};
   				a.g = b.getAdsManager(c, a.B);
   				a.i.muted ? a.g.setVolume(0) : a.g.setVolume(a.i.volume);
   				a.h.D(a.i, "timeupdate", function() {
   					a.i.duration && (c.currentTime = a.i.currentTime)
   				});
   				a.h.D(a.i, "volumechange", function() {
   					a.j && (a.j.setVolume(a.i.volume), a.i.muted && a.j.setMuted(!0))
   				})
   			} else a.g = b.getAdsManager(a.i, a.B);
   			a.m(new U("ima-ad-manager-loaded", (new Map).set("imaAdManager",
   				a.g)));
   			var d = a.g.getCuePoints();
   			if (d.length) {
   				b = [];
   				d = t(d);
   				for (var e = d.next(); !e.done; e = d.next()) b.push({
   					start: e.value,
   					end: null
   				});
   				a.m(new U("ad-cue-points-changed", (new Map).set("cuepoints", b)))
   			}
   			pp(a);
   			try {
   				a.g.init(a.i.offsetWidth, a.i.offsetHeight, qp(a) ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL), a.h.D(a.i, "loadeddata", function() {
   					a.g.resize(a.i.offsetWidth, a.i.offsetHeight, qp(a) ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
   				}), "ResizeObserver" in window ? (a.A = new ResizeObserver(function() {
   					a.g.resize(a.i.offsetWidth,
   						a.i.offsetHeight, qp(a) ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
   				}), a.A.observe(a.i)) : a.h.D(document, "fullscreenchange", function() {
   					a.g.resize(a.i.offsetWidth, a.i.offsetHeight, qp(a) ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
   				}), a.F || a.s.skipPlayDetection ? a.g.start() : a.h.qa(a.i, "play", function() {
   					a.F = !0;
   					a.g.start()
   				})
   			} catch (f) {
   				op(a, null)
   			}
   		}

   		function qp(a) {
   			if (document.fullscreenEnabled) return !!document.fullscreenElement;
   			a = a.i;
   			return a.webkitSupportsFullscreen ? a.webkitDisplayingFullscreen : !1
   		}

   		function pp(a) {
   			function b(c, d) {
   				c = (new Map).set("originalEvent", c);
   				a.m(new U(d, c))
   			}
   			a.h.D(a.g, google.ima.AdErrorEvent.Type.AD_ERROR, function(c) {
   				np(a, c)
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function(c) {
   				rp(a, c)
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.STARTED, function(c) {
   				rp(a, c)
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.FIRST_QUARTILE, function(c) {
   				b(c, "ad-first-quartile")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.MIDPOINT, function(c) {
   				b(c, "ad-midpoint")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.THIRD_QUARTILE,
   				function(c) {
   					b(c, "ad-third-quartile")
   				});
   			a.h.D(a.g, google.ima.AdEvent.Type.COMPLETE, function(c) {
   				b(c, "ad-complete")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function(c) {
   				op(a, c)
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function(c) {
   				op(a, c)
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.SKIPPED, function(c) {
   				b(c, "ad-skipped")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.VOLUME_CHANGED, function(c) {
   				b(c, "ad-volume-changed")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.VOLUME_MUTED, function(c) {
   				b(c, "ad-muted")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.PAUSED, function(c) {
   				a.j && (a.j.i = !0, b(c, "ad-paused"))
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.RESUMED, function(c) {
   				a.j && (a.j.i = !1, b(c, "ad-resumed"))
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, function(c) {
   				a.j && b(c, "ad-skip-state-changed")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.CLICK, function(c) {
   				b(c, "ad-clicked")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.AD_PROGRESS, function(c) {
   				b(c, "ad-progress")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.AD_BUFFERING, function(c) {
   				b(c, "ad-buffering")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.IMPRESSION, function(c) {
   				b(c, "ad-impression")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.DURATION_CHANGE, function(c) {
   				b(c, "ad-duration-changed")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.USER_CLOSE, function(c) {
   				b(c, "ad-closed")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.LOADED, function(c) {
   				b(c, "ad-loaded")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function(c) {
   				b(c, "all-ads-completed")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.LINEAR_CHANGED, function(c) {
   				b(c, "ad-linear-changed")
   			});
   			a.h.D(a.g,
   				google.ima.AdEvent.Type.AD_METADATA,
   				function(c) {
   					b(c, "ad-metadata")
   				});
   			a.h.D(a.g, google.ima.AdEvent.Type.LOG, function(c) {
   				b(c, "ad-recoverable-error")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.AD_BREAK_READY, function(c) {
   				b(c, "ad-break-ready")
   			});
   			a.h.D(a.g, google.ima.AdEvent.Type.INTERACTION, function(c) {
   				b(c, "ad-interaction")
   			})
   		}

   		function rp(a, b) {
   			var c = b.getAd();
   			c ? (a.j = new kp(c, a.g, a.i), b = (new Map).set("ad", a.j).set("sdkAdObject", c).set("originalEvent", b), a.m(new U("ad-started", b)), a.j.isLinear() && (a.o.setAttribute("ad-active", "true"), a.s.customPlayheadTracker || a.i.pause(), a.i.muted ? (b = a.j, b.l = a.i.volume, b.h.setVolume(0)) : a.j.setVolume(a.i.volume))) : ab("The IMA SDK fired a " + b.type + " event with no associated ad. Unable to play ad!")
   		}

   		function op(a, b) {
   			a.m(new U("ad-stopped", (new Map).set("originalEvent", b)));
   			a.j && a.j.isLinear() && (a.o.removeAttribute("ad-active"), a.s.customPlayheadTracker || a.i.ended || a.i.play())
   		};

   		function sp(a, b, c, d, e) {
   			this.h = a;
   			this.g = e;
   			this.i = b;
   			this.j = c;
   			this.m = d;
   			this.l = !1
   		}
   		r = sp.prototype;
   		r.getDuration = function() {
   			return this.h.durationInSeconds
   		};
   		r.getMinSuggestedDuration = function() {
   			return this.getDuration()
   		};
   		r.getRemainingTime = function() {
   			return this.h.startTimeInSeconds + this.h.durationInSeconds - this.g.currentTime
   		};
   		r.isPaused = function() {
   			return this.g.paused
   		};
   		r.isSkippable = function() {
   			return this.h.skipOffset ? !0 : !1
   		};
   		r.getTimeUntilSkippable = function() {
   			if (!this.h.skipOffset) return this.getRemainingTime();
   			var a = this.getRemainingTime() - this.h.skipOffset;
   			return Math.max(a, 0)
   		};
   		r.canSkipNow = function() {
   			return 0 == this.getTimeUntilSkippable()
   		};
   		r.skip = function() {
   			this.l = !0;
   			this.g.currentTime += this.getRemainingTime()
   		};
   		r.pause = function() {
   			return this.g.pause()
   		};
   		r.play = function() {
   			return this.g.play()
   		};
   		r.getVolume = function() {
   			return this.g.volume
   		};
   		r.setVolume = function(a) {
   			this.g.volume = a
   		};
   		r.isMuted = function() {
   			return this.g.muted
   		};
   		r.isLinear = function() {
   			return this.m
   		};
   		r.resize = function() {};
   		r.setMuted = function(a) {
   			this.g.muted = a
   		};
   		r.getSequenceLength = function() {
   			return this.j ? this.j : 1
   		};
   		r.getPositionInSequence = function() {
   			return this.i ? this.i : 1
   		};
   		r.getTitle = function() {
   			return this.h.adTitle
   		};
   		r.getDescription = function() {
   			return ""
   		};
   		r.getVastMediaBitrate = function() {
   			return 0
   		};
   		r.getVastMediaHeight = function() {
   			return 0
   		};
   		r.getVastMediaWidth = function() {
   			return 0
   		};
   		r.getAdId = function() {
   			return this.h.adId
   		};
   		r.getCreativeAdId = function() {
   			return this.h.creativeId
   		};
   		r.getAdvertiserName = function() {
   			return ""
   		};
   		r.getMediaUrl = function() {
   			return null
   		};
   		r.getTimeOffset = function() {
   			return 0
   		};
   		r.getPodIndex = function() {
   			return 0
   		};
   		r.release = function() {
   			this.j = this.i = this.g = this.h = null
   		};
   		S("gowatch.ads.MediaTailorAd", sp);
   		sp.prototype.release = sp.prototype.release;
   		sp.prototype.getPodIndex = sp.prototype.getPodIndex;
   		sp.prototype.getTimeOffset = sp.prototype.getTimeOffset;
   		sp.prototype.getMediaUrl = sp.prototype.getMediaUrl;
   		sp.prototype.getAdvertiserName = sp.prototype.getAdvertiserName;
   		sp.prototype.getCreativeAdId = sp.prototype.getCreativeAdId;
   		sp.prototype.getAdId = sp.prototype.getAdId;
   		sp.prototype.getVastMediaWidth = sp.prototype.getVastMediaWidth;
   		sp.prototype.getVastMediaHeight = sp.prototype.getVastMediaHeight;
   		sp.prototype.getVastMediaBitrate = sp.prototype.getVastMediaBitrate;
   		sp.prototype.getDescription = sp.prototype.getDescription;
   		sp.prototype.getTitle = sp.prototype.getTitle;
   		sp.prototype.getPositionInSequence = sp.prototype.getPositionInSequence;
   		sp.prototype.getSequenceLength = sp.prototype.getSequenceLength;
   		sp.prototype.setMuted = sp.prototype.setMuted;
   		sp.prototype.resize = sp.prototype.resize;
   		sp.prototype.isLinear = sp.prototype.isLinear;
   		sp.prototype.isMuted = sp.prototype.isMuted;
   		sp.prototype.setVolume = sp.prototype.setVolume;
   		sp.prototype.getVolume = sp.prototype.getVolume;
   		sp.prototype.play = sp.prototype.play;
   		sp.prototype.pause = sp.prototype.pause;
   		sp.prototype.skip = sp.prototype.skip;
   		sp.prototype.canSkipNow = sp.prototype.canSkipNow;
   		sp.prototype.getTimeUntilSkippable = sp.prototype.getTimeUntilSkippable;
   		sp.prototype.isSkippable = sp.prototype.isSkippable;
   		sp.prototype.isPaused = sp.prototype.isPaused;
   		sp.prototype.getRemainingTime = sp.prototype.getRemainingTime;
   		sp.prototype.getMinSuggestedDuration = sp.prototype.getMinSuggestedDuration;
   		sp.prototype.getDuration = sp.prototype.getDuration;

   		function tp(a, b, c, d) {
   			this.B = a;
   			this.K = b;
   			this.h = c;
   			this.l = null;
   			this.V = NaN;
   			this.i = d;
   			this.J = !1;
   			this.A = null;
   			this.j = [];
   			this.N = [];
   			this.M = this.C = this.g = null;
   			this.F = new Map;
   			this.m = [];
   			this.s = [];
   			this.G = "";
   			this.S = !0;
   			this.H = "";
   			this.o = new hb
   		}
   		tp.prototype.stop = function() {
   			for (var a = t(this.m), b = a.next(); !b.done; b = a.next()) b = b.value, this.o.Hb(b.target, b.type, b.listener);
   			up(this);
   			this.m = [];
   			this.s = [];
   			this.G = "";
   			this.S = !0;
   			this.H = "";
   			this.A = null;
   			this.j = [];
   			this.N = [];
   			this.F.clear()
   		};
   		tp.prototype.release = function() {
   			this.stop();
   			this.o && this.o.release()
   		};
   		tp.prototype.onManifestUpdated = function(a) {
   			this.J = a;
   			"" != this.G && (vp(this, this.G, this.S), this.S = !1)
   		};
   		tp.prototype.getCuePoints = function() {
   			for (var a = [], b = t(this.j), c = b.next(); !c.done; c = b.next()) {
   				c = t(c.value.ads);
   				for (var d = c.next(); !d.done; d = c.next()) d = d.value, a.push({
   					start: d.startTimeInSeconds,
   					end: d.startTimeInSeconds + d.durationInSeconds
   				})
   			}
   			return a
   		};

   		function wp(a, b, c) {
   			var d, e, f, g, h, k, l, m, n, p, q;
   			O(function(u) {
   				if (1 == u.g) return d = jg([b], Qf()), d.method = "POST", c && (e = JSON.stringify(c), d.body = qd(e)), f = a.K.request(7, d), ua(u, 2), E(u, f.promise, 4);
   				if (2 != u.g) {
   					g = u.h;
   					h = kd(g.data);
   					k = JSON.parse(h);
   					if (k.manifestUrl && k.trackingUrl) l = new rc(b), m = new rc(k.trackingUrl), a.G = l.resolve(m).toString(), n = Date.now() / 1E3, p = n - a.V, a.i(new U("ads-loaded", (new Map).set("loadTime", p))), q = new rc(k.manifestUrl), a.l.resolve(l.resolve(q).toString()), a.l = null;
   					else throw Error("Insufficient data from MediaTailor.");
   					return wa(u, 0)
   				}
   				ya(u);
   				if (!a.H.length) return a.l.reject("MediaTailor request returned an error and there was no backup asset uri provided."), a.l = null, u.return();
   				a.l.resolve(a.H);
   				a.l = null;
   				F(u)
   			})
   		}

   		function vp(a, b, c) {
   			var d, e, f, g, h, k, l, m, n, p, q, u, v, w, A;
   			O(function(z) {
   				if (1 == z.g) return d = jg([b], Qf()), e = a.K.request(7, d), ua(z, 2), E(z, e.promise, 4);
   				if (2 != z.g) {
   					f = z.h;
   					g = [];
   					h = kd(f.data);
   					k = JSON.parse(h);
   					if (0 < k.avails.length) {
   						if (JSON.stringify(a.j) != JSON.stringify(k.avails)) {
   							a.j = k.avails;
   							l = t(a.j);
   							for (m = l.next(); !m.done; m = l.next())
   								for (n = m.value, p = t(n.nonLinearAdsList), q = p.next(); !q.done; q = p.next())
   									for (u = q.value, v = t(u.nonLinearAdList), w = v.next(); !w.done; w = v.next()) A = w.value, xp(a, A);
   							g = a.getCuePoints();
   							a.i(new U("ad-cue-points-changed",
   								(new Map).set("cuepoints", g)))
   						}
   					} else a.j.length && a.i(new U("ad-cue-points-changed", (new Map).set("cuepoints", g))), up(a), a.j = [];
   					c && (a.J || 0 < g.length) && yp(a);
   					return wa(z, 0)
   				}
   				ya(z);
   				F(z)
   			})
   		}

   		function xp(a, b) {
   			var c, d, e, f, g, h, k, l;
   			O(function(m) {
   				if (1 == m.g) {
   					if (!b.staticResource) return m.return();
   					c = zp(b);
   					if (d = a.F.get(c)) return m.return();
   					e = jg([b.staticResource], Qf());
   					f = a.K.request(7, e);
   					ua(m, 2);
   					a.F.set(c, []);
   					return E(m, f.promise, 4)
   				}
   				if (2 != m.g) return g = m.h, h = kd(g.data), k = JSON.parse(h), l = k.apps, a.F.set(c, l), wa(m, 0);
   				ya(m);
   				a.F.delete(c);
   				F(m)
   			})
   		}

   		function zp(a) {
   			return [a.adId, a.adParameters, a.adSystem, a.adTitle, a.creativeAdId, a.creativeId, a.creativeSequence, a.height, a.width, a.staticResource].join("")
   		}

   		function yp(a) {
   			Ap(a);
   			a.J || (Bp(a), a.o.D(a.h, "seeked", function() {
   				Bp(a)
   			}), a.o.D(a.h, "ended", function() {
   				up(a)
   			}));
   			a.o.D(a.h, "timeupdate", function() {
   				Ap(a)
   			})
   		}

   		function Bp(a) {
   			var b = a.h.currentTime;
   			if (0 != b && null == a.A) {
   				for (var c, d, e = t(a.j), f = e.next(); !f.done; f = e.next()) {
   					f = f.value;
   					for (var g = t(f.ads), h = g.next(); !h.done; h = g.next())
   						if (h = h.value, !d) h.startTimeInSeconds < b && (d = h, c = f);
   						else if (h.startTimeInSeconds < b && h.startTimeInSeconds > d.startTimeInSeconds + d.durationInSeconds) {
   						d = h;
   						c = f;
   						break
   					}
   				}
   				c && d && !a.N.includes(d.adId) && (a.A = b, a.h.currentTime = c.startTimeInSeconds)
   			}
   		}

   		function Ap(a) {
   			if (a.h.duration && (a.g || a.j.length)) {
   				var b = a.h.currentTime,
   					c = !1;
   				if (a.g) {
   					c = !0;
   					var d = a.C,
   						e = d.startTimeInSeconds + .5 * d.durationInSeconds,
   						f = d.startTimeInSeconds + .75 * d.durationInSeconds;
   					b >= d.startTimeInSeconds + .25 * d.durationInSeconds && !a.s.includes("firstQuartile") ? (a.s.push("firstQuartile"), Cp(a, "firstQuartile")) : b >= e && !a.s.includes("midpoint") ? (a.s.push("midpoint"), Cp(a, "midpoint")) : b >= f && !a.s.includes("thirdQuartile") && (a.s.push("thirdQuartile"), Cp(a, "thirdQuartile"));
   					d = a.g.getRemainingTime();
   					e = a.g.getDuration();
   					a.g.canSkipNow() && 0 < d && 0 < e && Cp(a, "skipStateChanged");
   					0 < e && (0 >= d || d > e) && up(a)
   				}
   				if (!a.g || !a.g.isLinear()) {
   					a: for (d = t(a.j), e = d.next(); !e.done; e = d.next()) {
   						e = e.value;
   						if (a.g && a.g.isLinear()) break;
   						for (f = 0; f < e.ads.length; f++) {
   							var g = e.ads[f],
   								h = g.startTimeInSeconds + g.durationInSeconds;
   							if (g.startTimeInSeconds <= b && h > b) {
   								if (a.N.includes(g.adId)) {
   									if (a.h.ended) continue;
   									a.h.currentTime = h;
   									break a
   								}
   								up(a);
   								a.M = e;
   								a.g = new sp(g, f + 1, e.ads.length, !0, a.h);
   								a.C = g;
   								0 === f && Cp(a, "breakStart");
   								Dp(a);
   								break
   							}
   						}
   					}
   					if (!a.g)
   						for (d =
   							t(a.j), e = d.next(); !e.done; e = d.next()) {
   							e = e.value;
   							if (a.g) break;
   							for (f = 0; f < e.nonLinearAdsList.length; f++)
   								if (g = e.nonLinearAdsList[f], g.nonLinearAdList.length) {
   									h = e.startTimeInSeconds;
   									var k = a.F.get(zp(g.nonLinearAdList[0]));
   									if (h <= b && k && k.length) {
   										up(a);
   										h = a;
   										k = t(k);
   										for (var l = k.next(); !l.done; l = k.next())
   											if (l = l.value, l.data.source.length) {
   												var m = document.createElement("img");
   												m.src = l.data.source[0].url;
   												m.style.top = (l.placeholder.top || 0) + "%";
   												m.style.height = 100 - (l.placeholder.top || 0) + "%";
   												m.style.left = (l.placeholder.left ||
   													0) + "%";
   												m.style.maxWidth = 100 - (l.placeholder.left || 0) + "%";
   												m.style.objectFit = "contain";
   												m.style.position = "absolute";
   												h.B.appendChild(m)
   											} a.M = e;
   										a.g = new sp(g, f + 1, e.ads.length, !1, a.h);
   										a.C = g;
   										0 === f && Cp(a, "breakStart");
   										Dp(a);
   										break
   									}
   								}
   						}
   					c && !a.g && (b = a.h.currentTime, a.A && a.A > b && (a.h.currentTime = a.A), a.A = null)
   				}
   			}
   		}

   		function up(a) {
   			if (a.g) {
   				for (; a.B.lastChild;) a.B.removeChild(a.B.firstChild);
   				a.J || a.N.push(a.C.adId);
   				var b = a.g.l;
   				(void 0 === b ? 0 : b) ? Cp(a, "skip"): Cp(a, "complete");
   				b = t(a.m);
   				for (var c = b.next(); !c.done; c = b.next()) c = c.value, a.o.Hb(c.target, c.type, c.listener);
   				a.m = [];
   				a.s = [];
   				b = a.g.getPositionInSequence();
   				c = a.g.getSequenceLength();
   				b === c && Cp(a, "breakEnd");
   				a.g = null;
   				a.C = null;
   				a.M = null
   			}
   		}

   		function Dp(a) {
   			var b = !1;
   			a.h.paused ? b = !0 : (Cp(a, "impression"), Cp(a, "start"));
   			a.m.push({
   				target: a.h,
   				type: "volumechange",
   				listener: function() {
   					a.h.muted && Cp(a, "mute")
   				}
   			});
   			a.m.push({
   				target: a.h,
   				type: "volumechange",
   				listener: function() {
   					a.h.muted || Cp(a, "unmute")
   				}
   			});
   			a.m.push({
   				target: a.h,
   				type: "play",
   				listener: function() {
   					b ? (Cp(a, "impression"), Cp(a, "start"), b = !1) : Cp(a, "resume")
   				}
   			});
   			a.m.push({
   				target: a.h,
   				type: "pause",
   				listener: function() {
   					Cp(a, "pause")
   				}
   			});
   			for (var c = t(a.m), d = c.next(); !d.done; d = c.next()) d = d.value, a.o.D(d.target,
   				d.type, d.listener)
   		}

   		function Cp(a, b) {
   			var c = a.C.trackingEvents.find(function(e) {
   				return e.eventType == b
   			});
   			c || (c = a.M.adBreakTrackingEvents.find(function(e) {
   				return e.eventType == b
   			}));
   			if (c) {
   				c = t(c.beaconUrls);
   				for (var d = c.next(); !d.done; d = c.next())(d = d.value) && "" != d && (d = jg([d], Qf()), d.method = "POST", a.K.request(7, d))
   			}
   			switch (b) {
   				case "impression":
   					a.i(new U("ad-impression"));
   					break;
   				case "start":
   					a.i(new U("ad-started", (new Map).set("ad", a.g)));
   					break;
   				case "mute":
   					a.i(new U("ad-muted"));
   					break;
   				case "unmute":
   					a.i(new U("ad-volume-changed"));
   					break;
   				case "resume":
   					a.i(new U("ad-resumed"));
   					break;
   				case "pause":
   					a.i(new U("ad-paused"));
   					break;
   				case "firstQuartile":
   					a.i(new U("ad-first-quartile"));
   					break;
   				case "midpoint":
   					a.i(new U("ad-midpoint"));
   					break;
   				case "thirdQuartile":
   					a.i(new U("ad-third-quartile"));
   					break;
   				case "complete":
   					a.i(new U("ad-complete"));
   					a.i(new U("ad-stopped"));
   					break;
   				case "skip":
   					a.i(new U("ad-skipped"));
   					a.i(new U("ad-stopped"));
   					break;
   				case "breakStart":
   					a.B.setAttribute("ad-active", "true");
   					break;
   				case "breakEnd":
   					a.B.removeAttribute("ad-active");
   					break;
   				case "skipStateChanged":
   					a.i(new U("ad-skip-state-changed"))
   			}
   		};

   		function Ep(a, b) {
   			this.g = a;
   			this.i = null;
   			this.h = b
   		}
   		r = Ep.prototype;
   		r.getDuration = function() {
   			return this.i ? this.i.duration : -1
   		};
   		r.getMinSuggestedDuration = function() {
   			return this.getDuration()
   		};
   		r.getRemainingTime = function() {
   			return this.i ? this.i.duration - this.i.currentTime : -1
   		};
   		r.isPaused = function() {
   			return this.h.paused
   		};
   		r.isSkippable = function() {
   			return this.g.isSkippable()
   		};
   		r.getTimeUntilSkippable = function() {
   			var a = this.g.getSkipTimeOffset();
   			a = this.getRemainingTime() - a;
   			return Math.max(a, 0)
   		};
   		r.canSkipNow = function() {
   			return 0 == this.getTimeUntilSkippable()
   		};
   		r.skip = function() {
   			this.h.currentTime += this.getRemainingTime()
   		};
   		r.pause = function() {
   			return this.h.pause()
   		};
   		r.play = function() {
   			return this.h.play()
   		};
   		r.getVolume = function() {
   			return this.h.volume
   		};
   		r.setVolume = function(a) {
   			this.h.volume = a
   		};
   		r.isMuted = function() {
   			return this.h.muted
   		};
   		r.isLinear = function() {
   			return !0
   		};
   		r.resize = function() {};
   		r.setMuted = function(a) {
   			this.h.muted = a
   		};
   		r.getSequenceLength = function() {
   			var a = this.g.getAdPodInfo();
   			return null == a ? 1 : a.getTotalAds()
   		};
   		r.getPositionInSequence = function() {
   			var a = this.g.getAdPodInfo();
   			return null == a ? 1 : a.getAdPosition()
   		};
   		r.getTitle = function() {
   			return this.g.getTitle()
   		};
   		r.getDescription = function() {
   			return this.g.getDescription()
   		};
   		r.getVastMediaBitrate = function() {
   			return 0
   		};
   		r.getVastMediaHeight = function() {
   			return this.g.getVastMediaHeight()
   		};
   		r.getVastMediaWidth = function() {
   			return this.g.getVastMediaWidth()
   		};
   		r.getAdId = function() {
   			return this.g.getAdId()
   		};
   		r.getCreativeAdId = function() {
   			return this.g.getCreativeAdId()
   		};
   		r.getAdvertiserName = function() {
   			return this.g.getAdvertiserName()
   		};
   		r.getMediaUrl = function() {
   			return null
   		};
   		r.getTimeOffset = function() {
   			var a = this.g.getAdPodInfo();
   			return null == a ? 0 : a.getTimeOffset()
   		};
   		r.getPodIndex = function() {
   			var a = this.g.getAdPodInfo();
   			return null == a ? 0 : a.getPodIndex()
   		};
   		r.release = function() {
   			this.h = this.i = this.g = null
   		};
   		S("gowatch.ads.ServerSideAd", Ep);
   		Ep.prototype.release = Ep.prototype.release;
   		Ep.prototype.getPodIndex = Ep.prototype.getPodIndex;
   		Ep.prototype.getTimeOffset = Ep.prototype.getTimeOffset;
   		Ep.prototype.getMediaUrl = Ep.prototype.getMediaUrl;
   		Ep.prototype.getAdvertiserName = Ep.prototype.getAdvertiserName;
   		Ep.prototype.getCreativeAdId = Ep.prototype.getCreativeAdId;
   		Ep.prototype.getAdId = Ep.prototype.getAdId;
   		Ep.prototype.getVastMediaWidth = Ep.prototype.getVastMediaWidth;
   		Ep.prototype.getVastMediaHeight = Ep.prototype.getVastMediaHeight;
   		Ep.prototype.getVastMediaBitrate = Ep.prototype.getVastMediaBitrate;
   		Ep.prototype.getDescription = Ep.prototype.getDescription;
   		Ep.prototype.getTitle = Ep.prototype.getTitle;
   		Ep.prototype.getPositionInSequence = Ep.prototype.getPositionInSequence;
   		Ep.prototype.getSequenceLength = Ep.prototype.getSequenceLength;
   		Ep.prototype.setMuted = Ep.prototype.setMuted;
   		Ep.prototype.resize = Ep.prototype.resize;
   		Ep.prototype.isLinear = Ep.prototype.isLinear;
   		Ep.prototype.isMuted = Ep.prototype.isMuted;
   		Ep.prototype.setVolume = Ep.prototype.setVolume;
   		Ep.prototype.getVolume = Ep.prototype.getVolume;
   		Ep.prototype.play = Ep.prototype.play;
   		Ep.prototype.pause = Ep.prototype.pause;
   		Ep.prototype.skip = Ep.prototype.skip;
   		Ep.prototype.canSkipNow = Ep.prototype.canSkipNow;
   		Ep.prototype.getTimeUntilSkippable = Ep.prototype.getTimeUntilSkippable;
   		Ep.prototype.isSkippable = Ep.prototype.isSkippable;
   		Ep.prototype.isPaused = Ep.prototype.isPaused;
   		Ep.prototype.getRemainingTime = Ep.prototype.getRemainingTime;
   		Ep.prototype.getMinSuggestedDuration = Ep.prototype.getMinSuggestedDuration;
   		Ep.prototype.getDuration = Ep.prototype.getDuration;

   		function Fp(a, b, c, d) {
   			var e = this;
   			this.s = a;
   			this.l = b;
   			this.j = null;
   			this.F = NaN;
   			this.i = d;
   			this.G = !1;
   			this.A = this.m = this.o = null;
   			this.B = "";
   			this.C = [];
   			this.h = new hb;
   			a = new google.ima.dai.api.UiSettings;
   			a.setLocale(c);
   			this.g = new google.ima.dai.api.StreamManager(this.l, this.s, a);
   			this.i(new U("ima-stream-manager-loaded", (new Map).set("imaStreamManager", this.g)));
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.LOADED, function(f) {
   				Gp(e, f)
   			});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.ERROR, function() {
   				e.B.length ?
   					e.j.resolve(e.B) : e.j.reject("IMA Stream request returned an error and there was no backup asset uri provided.");
   				e.j = null
   			});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED, function() {});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.STARTED, function(f) {
   				f = f.getAd();
   				e.m = new Ep(f, e.l);
   				e.A && (e.m.i = e.A);
   				e.i(new U("ad-started", (new Map).set("ad", e.m)));
   				e.s.setAttribute("ad-active", "true")
   			});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED, function() {
   				e.s.removeAttribute("ad-active");
   				var f = e.l.currentTime;
   				e.o && e.o > f && (e.l.currentTime = e.o, e.o = null)
   			});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.AD_PROGRESS, function(f) {
   				e.A = f.getStreamData().adProgressData;
   				e.m && (e.m.i = e.A)
   			});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.FIRST_QUARTILE, function() {
   				e.i(new U("ad-first-quartile"))
   			});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.MIDPOINT, function() {
   				e.i(new U("ad-midpoint"))
   			});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.THIRD_QUARTILE, function() {
   				e.i(new U("ad-third-quartile"))
   			});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.COMPLETE, function() {
   				e.i(new U("ad-complete"));
   				e.i(new U("ad-stopped"));
   				e.s.removeAttribute("ad-active");
   				e.m = null
   			});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.SKIPPED, function() {
   				e.i(new U("ad-skipped"));
   				e.i(new U("ad-stopped"))
   			});
   			this.h.D(this.g, google.ima.dai.api.StreamEvent.Type.CUEPOINTS_CHANGED, function(f) {
   				var g = f.getStreamData();
   				f = [];
   				g = t(g.cuepoints);
   				for (var h = g.next(); !h.done; h = g.next()) h = h.value, f.push({
   					start: h.start,
   					end: h.end
   				});
   				e.C =
   					f;
   				e.i(new U("ad-cue-points-changed", (new Map).set("cuepoints", f)))
   			})
   		}
   		r = Fp.prototype;
   		r.configure = function() {};
   		r.stop = function() {
   			this.B = "";
   			this.o = null;
   			this.C = []
   		};
   		r.release = function() {
   			this.stop();
   			this.h && this.h.release()
   		};
   		r.onCueMetadataChange = function(a) {
   			if (a.key && a.data) {
   				var b = {};
   				b[a.key] = a.data;
   				this.g.onTimedMetadata(b)
   			}
   		};
   		r.getCuePoints = function() {
   			return this.C
   		};

   		function Gp(a, b) {
   			a.i(new U("ads-loaded", (new Map).set("loadTime", Date.now() / 1E3 - a.F)));
   			b = b.getStreamData().url;
   			a.j.resolve(b);
   			a.j = null;
   			a.G || a.h.D(a.l, "seeked", function() {
   				var c = a.l.currentTime;
   				if (0 != c) {
   					a.g.streamTimeForContentTime(c);
   					var d = a.g.previousCuePointForStreamTime(c);
   					d && !d.played && (a.o = c, a.l.currentTime = d.start)
   				}
   			})
   		};

   		function Y() {
   			bg.call(this);
   			this.g = this.h = this.i = null;
   			this.j = new jp;
   			this.m = navigator.language;
   			this.l = null
   		}
   		oa(Y, bg);
   		r = Y.prototype;
   		r.setLocale = function(a) {
   			this.m = a
   		};
   		r.configure = function(a) {
   			this.l = a;
   			this.i && this.i.configure(this.l);
   			this.g && this.g.configure(this.l)
   		};
   		r.initClientSide = function(a, b, c) {
   			var d = this;
   			if (!window.google || !google.ima || !google.ima.AdsLoader) throw new T(2, 10, 1E4);
   			this.i && this.i.release();
   			this.i = new lp(a, b, this.m, c, function(e) {
   				return Hp(d, e)
   			});
   			this.i.configure(this.l)
   		};
   		r.release = function() {
   			this.i && (this.i.release(), this.i = null);
   			this.h && (this.h.release(), this.h = null);
   			this.g && (this.g.release(), this.g = null);
   			bg.prototype.release.call(this)
   		};
   		r.onAssetUnload = function() {
   			this.i && this.i.stop();
   			this.h && this.h.stop();
   			this.g && this.g.stop();
   			this.dispatchEvent(new U("ad-stopped"));
   			this.j = new jp
   		};
   		r.requestClientSideAds = function(a) {
   			if (!this.i) throw new T(1, 10, 10001);
   			var b = this.i;
   			b.g && b.g.destroy();
   			b.l && b.l.contentComplete();
   			b.G = Date.now() / 1E3;
   			b.l.requestAds(a)
   		};
   		r.updateClientSideAdsRenderingSettings = function(a) {
   			if (!this.i) throw new T(1, 10, 10001);
   			var b = this.i;
   			b.B = a;
   			b.g && b.g.updateAdsRenderingSettings(b.B)
   		};
   		r.initMediaTailor = function(a, b, c) {
   			var d = this;
   			this.h && this.h.release();
   			this.h = new tp(a, b, c, function(e) {
   				return Hp(d, e)
   			})
   		};
   		r.requestMediaTailorStream = function(a, b, c) {
   			if (!this.h) throw new T(1, 10, 10005);
   			var d = this.h;
   			c = void 0 === c ? "" : c;
   			d.l ? a = Promise.reject(new T(1, 10, 10004)) : (d.l = new Sf, wp(d, a, b), d.H = c || "", d.V = Date.now() / 1E3, a = d.l);
   			return a
   		};
   		r.addMediaTailorTrackingUrl = function(a) {
   			if (!this.h) throw new T(1, 10, 10005);
   			var b = this.h;
   			b.G = a;
   			b.i(new U("ads-loaded", (new Map).set("loadTime", 0)))
   		};
   		r.initServerSide = function(a, b) {
   			var c = this;
   			if (!window.google || !google.ima || !google.ima.dai) throw new T(2, 10, 10002);
   			this.g && this.g.release();
   			this.g = new Fp(a, b, this.m, function(d) {
   				return Hp(c, d)
   			});
   			this.g.configure(this.l)
   		};
   		r.requestServerSideStream = function(a, b) {
   			b = void 0 === b ? "" : b;
   			if (!this.g) throw new T(1, 10, 10003);
   			a.adTagParameters || (a.adTagParameters = {});
   			var c = a.adTagParameters;
   			(c.mpt || c.mpv) && ab('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for gowatch adoption tracking and will be overriden.');
   			a.adTagParameters.mpt = "gowatch-player";
   			a.adTagParameters.mpv = "v4.9.3";
   			c = this.g;
   			c.j ? a = Promise.reject(new T(1, 10, 10004)) : (a instanceof google.ima.dai.api.LiveStreamRequest &&
   				(c.G = !0), c.j = new Sf, c.g.requestStream(a), c.B = b || "", c.F = Date.now() / 1E3, a = c.j);
   			return a
   		};
   		r.replaceServerSideAdTagParameters = function(a) {
   			if (!this.g) throw new T(1, 10, 10003);
   			(a.mpt || a.mpv) && ab('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for gowatch adoption tracking and will be overriden.');
   			a.mpt = "gowatch Player";
   			a.mpv = "v4.9.3";
   			this.g.g.replaceAdTagParameters(a)
   		};
   		r.getServerSideCuePoints = function() {
   			qb("AdManager.getServerSideCuePoints", "Please use getCuePoints function.");
   			return this.getCuePoints()
   		};
   		r.getCuePoints = function() {
   			var a = [];
   			this.g && (a = a.concat(this.g.getCuePoints()));
   			this.h && (a = a.concat(this.h.getCuePoints()));
   			return a
   		};
   		r.getStats = function() {
   			var a = this.j;
   			return {
   				loadTimes: a.h,
   				started: a.g,
   				playedCompletely: a.i,
   				skipped: a.j
   			}
   		};
   		r.onManifestUpdated = function(a) {
   			if (this.h) this.h.onManifestUpdated(a)
   		};
   		r.onDashTimedMetadata = function(a) {
   			this.g && "urn:google:dai:2018" == a.schemeIdUri && this.g.g.processMetadata(a.schemeIdUri, a.eventNode ? a.eventNode.attributes.messageData : null, a.startTime)
   		};
   		r.onHlsTimedMetadata = function(a, b) {
   			this.g && this.g.g.processMetadata("ID3", a.data, b)
   		};
   		r.onCueMetadataChange = function(a) {
   			if (this.g) this.g.onCueMetadataChange(a)
   		};

   		function Hp(a, b) {
   			if (b && b.type) switch (b.type) {
   				case "ads-loaded":
   					a.j.h.push(b.loadTime);
   					break;
   				case "ad-started":
   					a.j.g++;
   					break;
   				case "ad-complete":
   					a.j.i++;
   					break;
   				case "ad-skipped":
   					a.j.j++
   			}
   			a.dispatchEvent(b)
   		}
   		S("gowatch.ads.AdManager", Y);
   		Y.prototype.onCueMetadataChange = Y.prototype.onCueMetadataChange;
   		Y.prototype.onHlsTimedMetadata = Y.prototype.onHlsTimedMetadata;
   		Y.prototype.onDashTimedMetadata = Y.prototype.onDashTimedMetadata;
   		Y.prototype.onManifestUpdated = Y.prototype.onManifestUpdated;
   		Y.prototype.getStats = Y.prototype.getStats;
   		Y.prototype.getCuePoints = Y.prototype.getCuePoints;
   		Y.prototype.getServerSideCuePoints = Y.prototype.getServerSideCuePoints;
   		Y.prototype.replaceServerSideAdTagParameters = Y.prototype.replaceServerSideAdTagParameters;
   		Y.prototype.requestServerSideStream = Y.prototype.requestServerSideStream;
   		Y.prototype.initServerSide = Y.prototype.initServerSide;
   		Y.prototype.addMediaTailorTrackingUrl = Y.prototype.addMediaTailorTrackingUrl;
   		Y.prototype.requestMediaTailorStream = Y.prototype.requestMediaTailorStream;
   		Y.prototype.initMediaTailor = Y.prototype.initMediaTailor;
   		Y.prototype.updateClientSideAdsRenderingSettings = Y.prototype.updateClientSideAdsRenderingSettings;
   		Y.prototype.requestClientSideAds = Y.prototype.requestClientSideAds;
   		Y.prototype.onAssetUnload = Y.prototype.onAssetUnload;
   		Y.prototype.release = Y.prototype.release;
   		Y.prototype.initClientSide = Y.prototype.initClientSide;
   		Y.prototype.configure = Y.prototype.configure;
   		Y.prototype.setLocale = Y.prototype.setLocale;
   		Y.ADS_LOADED = "ads-loaded";
   		Y.AD_STARTED = "ad-started";
   		Y.AD_FIRST_QUARTILE = "ad-first-quartile";
   		Y.AD_MIDPOINT = "ad-midpoint";
   		Y.AD_THIRD_QUARTILE = "ad-third-quartile";
   		Y.AD_COMPLETE = "ad-complete";
   		Y.AD_STOPPED = "ad-stopped";
   		Y.AD_SKIPPED = "ad-skipped";
   		Y.AD_VOLUME_CHANGED = "ad-volume-changed";
   		Y.AD_MUTED = "ad-muted";
   		Y.AD_PAUSED = "ad-paused";
   		Y.AD_RESUMED = "ad-resumed";
   		Y.AD_SKIP_STATE_CHANGED = "ad-skip-state-changed";
   		Y.CUEPOINTS_CHANGED = "ad-cue-points-changed";
   		Y.IMA_AD_MANAGER_LOADED = "ima-ad-manager-loaded";
   		Y.IMA_STREAM_MANAGER_LOADED = "ima-stream-manager-loaded";
   		Y.AD_CLICKED = "ad-clicked";
   		Y.AD_PROGRESS = "ad-progress";
   		Y.AD_BUFFERING = "ad-buffering";
   		Y.AD_IMPRESSION = "ad-impression";
   		Y.AD_DURATION_CHANGED = "ad-duration-changed";
   		Y.AD_CLOSED = "ad-closed";
   		Y.AD_LOADED = "ad-loaded";
   		Y.ALL_ADS_COMPLETED = "all-ads-completed";
   		Y.AD_LINEAR_CHANGED = "ad-linear-changed";
   		Y.AD_METADATA = "ad-metadata";
   		Y.AD_RECOVERABLE_ERROR = "ad-recoverable-error";
   		Y.AD_ERROR = "ad-error";
   		Y.AD_BREAK_READY = "ad-break-ready";
   		Y.AD_INTERACTION = "ad-interaction";
   		Tn = function() {
   			return new Y
   		};

   		function Ip(a) {
   			return JSON.stringify(a, function(b, c) {
   				if ("function" != typeof c) {
   					if (c instanceof Event || c instanceof U) {
   						var d = {};
   						for (e in c)(b = c[e]) && "object" == typeof b ? "detail" == e && (d[e] = b) : e in Event || (d[e] = b);
   						return d
   					}
   					if (c instanceof Error) {
   						var e = new Set(["name", "message", "stack"]);
   						for (d in c) e.add(d);
   						b = t(Object.getOwnPropertyNames(c));
   						for (d = b.next(); !d.done; d = b.next()) e.add(d.value);
   						b = {};
   						e = t(e);
   						for (d = e.next(); !d.done; d = e.next()) d = d.value, b[d] = c[d];
   						c = {
   							__type__: "Error",
   							contents: b
   						}
   					} else if (c instanceof TimeRanges) {
   						e = {
   							__type__: "TimeRanges",
   							length: c.length,
   							start: [],
   							end: []
   						};
   						c = t(Ii(c));
   						for (d = c.next(); !d.done; d = c.next()) d = d.value, b = d.end, e.start.push(d.start), e.end.push(b);
   						c = e
   					} else c = c instanceof Uint8Array ? {
   						__type__: "Uint8Array",
   						entries: Array.from(c)
   					} : "number" == typeof c ? isNaN(c) ? "NaN" : isFinite(c) ? c : 0 > c ? "-Infinity" : "Infinity" : c;
   					return c
   				}
   			})
   		}

   		function Jp(a) {
   			return JSON.parse(a, function(b, c) {
   				if ("NaN" == c) var d = NaN;
   				else if ("-Infinity" == c) d = -Infinity;
   				else if ("Infinity" == c) d = Infinity;
   				else if (c && "object" == typeof c && "TimeRanges" == c.__type__) d = Kp(c);
   				else if (c && "object" == typeof c && "Uint8Array" == c.__type__) d = new Uint8Array(c.entries);
   				else if (c && "object" == typeof c && "Error" == c.__type__) {
   					b = c.contents;
   					c = Error(b.message);
   					for (d in b) c[d] = b[d];
   					d = c
   				} else d = c;
   				return d
   			})
   		}

   		function Kp(a) {
   			return {
   				length: a.length,
   				start: function(b) {
   					return a.start[b]
   				},
   				end: function(b) {
   					return a.end[b]
   				}
   			}
   		}
   		var Lp = "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),
   			Mp = "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),
   			Np = ["loop", "playbackRate"],
   			Op = ["pause", "play"],
   			Pp = {
   				getAssetUri: 2,
   				getAudioLanguages: 4,
   				getAudioLanguagesAndRoles: 4,
   				getBufferFullness: 1,
   				getBufferedInfo: 2,
   				getExpiration: 2,
   				getKeyStatuses: 2,
   				getPlaybackRate: 2,
   				getTextLanguages: 4,
   				getTextLanguagesAndRoles: 4,
   				getImageTracks: 2,
   				getThumbnails: 2,
   				isAudioOnly: 10,
   				isBuffering: 1,
   				isInProgress: 1,
   				isLive: 10,
   				isTextTrackVisible: 1,
   				keySystem: 10,
   				seekRange: 1,
   				getLoadMode: 10,
   				getManifestType: 10
   			},
   			Qp = {
   				getConfiguration: 4,
   				getStats: 5,
   				getTextTracks: 2,
   				getVariantTracks: 2
   			},
   			Rp = {
   				getPlayheadTimeAsDate: 1,
   				getPresentationStartTimeAsDate: 20,
   				getSegmentAvailabilityDuration: 20
   			},
   			Sp = [
   				["getConfiguration", "configure"]
   			],
   			Tp = [
   				["isTextTrackVisible", "setTextTrackVisibility"]
   			],
   			Up = "addChaptersTrack addTextTrackAsync addThumbnailsTrack cancelTrickPlay configure getChapters getChaptersTracks resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack selectVariantsByLabel setTextTrackVisibility trickPlay updateStartTime goToLive".split(" "),
   			Vp = ["attach", "attachCanvas", "detach", "load", "unload"];

   		function Wp(a, b, c, d, e, f, g) {
   			var h = this;
   			this.G = a;
   			this.K = g;
   			this.l = new Lc(b);
   			this.M = c;
   			this.s = !1;
   			this.A = d;
   			this.F = e;
   			this.N = f;
   			this.h = this.m = !1;
   			this.J = "";
   			this.o = null;
   			this.B = function() {
   				return Xp(h)
   			};
   			this.C = function(k, l) {
   				k = Jp(l);
   				switch (k.type) {
   					case "event":
   						var m = k.targetName,
   							n = $f(k.event);
   						h.A(m, n);
   						break;
   					case "update":
   						m = k.update;
   						for (n in m) {
   							k = h.g[n] || {};
   							for (var p in m[n]) k[p] = m[n][p]
   						}
   						h.s && (h.M(), h.s = !1);
   						break;
   					case "asyncComplete":
   						if (n = k.id, p = k.error, k = h.i[n], delete h.i[n], k)
   							if (p) {
   								n = new T(p.severity, p.category,
   									p.code);
   								for (m in p) n[m] = p[m];
   								k.reject(n)
   							} else k.resolve()
   				}
   			};
   			this.g = {
   				video: {},
   				player: {}
   			};
   			this.H = 0;
   			this.i = {};
   			this.j = null;
   			Yp.add(this)
   		}
   		r = Wp.prototype;
   		r.destroy = function() {
   			Yp.delete(this);
   			Zp(this);
   			$p && aq(this);
   			this.l && (this.l.stop(), this.l = null);
   			this.F = this.A = null;
   			this.h = this.m = !1;
   			this.C = this.B = this.j = this.i = this.g = this.o = null;
   			return Promise.resolve()
   		};
   		r.$a = function() {
   			return this.h
   		};
   		r.Cf = function() {
   			return this.J
   		};
   		r.init = function() {
   			if (this.G.length)
   				if (window.chrome && chrome.cast && chrome.cast.isAvailable) {
   					this.m = !0;
   					this.l.mc();
   					var a = new chrome.cast.SessionRequest(this.G, [], null, this.K, null);
   					a = new chrome.cast.ApiConfig(a, function(b) {
   						for (var c = t(Yp), d = c.next(); !d.done; d = c.next()) {
   							d = d.value;
   							var e = b;
   							d.j = new Sf;
   							d.s = !0;
   							bq(d, e)
   						}
   					}, function(b) {
   						for (var c = t(Yp), d = c.next(); !d.done; d = c.next()) d = d.value, cq = "available" == b, d.l.mc()
   					}, "origin_scoped");
   					chrome.cast.initialize(a, function() {}, function() {});
   					cq && this.l.W(dq);
   					(a = $p) &&
   					a.status != chrome.cast.SessionStatus.STOPPED ? (this.j = new Sf, this.s = !0, bq(this, a)) : $p = null
   				} else window.__onGCastApiAvailable !== eq && (fq = window.__onGCastApiAvailable || null, window.__onGCastApiAvailable = eq)
   		};
   		r.Kf = function(a) {
   			this.o = a;
   			this.h && gq(this, {
   				type: "appData",
   				appData: this.o
   			})
   		};
   		r.cast = function() {
   			var a = this;
   			return O(function(b) {
   				if (!a.m) throw new T(1, 8, 8E3);
   				if (!cq) throw new T(1, 8, 8001);
   				if (a.h) throw new T(1, 8, 8002);
   				a.j = new Sf;
   				chrome.cast.requestSession(function(c) {
   					return bq(a, c)
   				}, function(c) {
   					return hq(a, c)
   				});
   				return E(b, a.j, 0)
   			})
   		};

   		function iq(a) {
   			a.h && chrome.cast.requestSession(function(b) {
   				return bq(a, b)
   			}, function(b) {
   				return hq(a, b)
   			})
   		}
   		r.xc = function() {
   			if (this.h) {
   				Zp(this);
   				if ($p) {
   					aq(this);
   					try {
   						$p.stop(function() {}, function() {})
   					} catch (a) {}
   					$p = null
   				}
   				Xp(this)
   			}
   		};
   		r.get = function(a, b) {
   			var c = this;
   			if ("video" == a) {
   				if (Op.includes(b)) return function() {
   					return c.Hg.apply(c, [a, b].concat(x(Ka.apply(0, arguments))))
   				}
   			} else if ("player" == a) {
   				if (Rp[b] && !this.get("player", "isLive")()) return function() {};
   				if (Up.includes(b)) return function() {
   					return c.Hg.apply(c, [a, b].concat(x(Ka.apply(0, arguments))))
   				};
   				if (Vp.includes(b)) return function() {
   					return c.xi.apply(c, [a, b].concat(x(Ka.apply(0, arguments))))
   				};
   				if (Pp[b] || Qp[b]) return function() {
   					return c.g[a][b]
   				}
   			}
   			return this.g[a][b]
   		};
   		r.set = function(a, b, c) {
   			this.g[a][b] = c;
   			gq(this, {
   				type: "set",
   				targetName: a,
   				property: b,
   				value: c
   			})
   		};

   		function bq(a, b) {
   			var c = a.N();
   			$p = b;
   			b.addUpdateListener(a.B);
   			b.addMessageListener("urn:x-cast:com.google.gowatch.v2", a.C);
   			Xp(a);
   			gq(a, {
   				type: "init",
   				initState: c,
   				appData: a.o
   			});
   			a.j.resolve()
   		}

   		function hq(a, b) {
   			var c = 8003;
   			switch (b.code) {
   				case "cancel":
   					c = 8004;
   					break;
   				case "timeout":
   					c = 8005;
   					break;
   				case "receiver_unavailable":
   					c = 8006
   			}
   			a.j.reject(new T(2, 8, c, b))
   		}
   		r.Hg = function(a, b) {
   			gq(this, {
   				type: "call",
   				targetName: a,
   				methodName: b,
   				args: Ka.apply(2, arguments)
   			})
   		};
   		r.xi = function(a, b) {
   			var c = Ka.apply(2, arguments),
   				d = new Sf,
   				e = this.H.toString();
   			this.H++;
   			this.i[e] = d;
   			try {
   				gq(this, {
   					type: "asyncCall",
   					targetName: a,
   					methodName: b,
   					args: c,
   					id: e
   				})
   			} catch (f) {
   				d.reject(f)
   			}
   			return d
   		};

   		function aq(a) {
   			var b = $p;
   			b.removeUpdateListener(a.B);
   			b.removeMessageListener("urn:x-cast:com.google.gowatch.v2", a.C)
   		}

   		function Xp(a) {
   			var b = $p ? "connected" == $p.status : !1;
   			if (a.h && !b) {
   				a.F();
   				for (var c in a.g) a.g[c] = {};
   				Zp(a)
   			}
   			a.h = b;
   			a.J = b ? $p.receiver.friendlyName : "";
   			a.l.mc()
   		}

   		function Zp(a) {
   			for (var b in a.i) {
   				var c = a.i[b];
   				delete a.i[b];
   				c.reject(new T(1, 7, 7E3))
   			}
   		}

   		function gq(a, b) {
   			b = Ip(b);
   			var c = $p;
   			try {
   				c.sendMessage("urn:x-cast:com.google.gowatch.v2", b, function() {}, db)
   			} catch (d) {
   				throw b = new T(2, 8, 8005, d), c = new U("error", (new Map).set("detail", b)), a.A("player", c), a.xc(), b;
   			}
   		}
   		var dq = .02,
   			cq = !1,
   			$p = null,
   			fq = null,
   			Yp = new Set;

   		function eq(a) {
   			fq ? window.__onGCastApiAvailable = fq : delete window.__onGCastApiAvailable;
   			fq = null;
   			if (a)
   				for (var b = t(Yp), c = b.next(); !c.done; c = b.next()) c.value.init();
   			"function" === typeof window.__onGCastApiAvailable && window.__onGCastApiAvailable(a)
   		};

   		function jq(a, b, c, d) {
   			d = void 0 === d ? !1 : d;
   			bg.call(this);
   			var e = this;
   			this.i = a;
   			this.h = b;
   			this.m = this.o = this.j = this.s = this.l = null;
   			this.C = c;
   			this.B = d;
   			this.A = new Map;
   			this.g = new Wp(c, function() {
   				return kq(e)
   			}, function() {
   				return lq(e)
   			}, function(f, g) {
   				return mq(e, f, g)
   			}, function() {
   				return nq(e)
   			}, function() {
   				return oq(e)
   			}, d);
   			pq(this)
   		}
   		oa(jq, bg);
   		r = jq.prototype;
   		r.destroy = function(a) {
   			a && this.g.xc();
   			this.m && (this.m.release(), this.m = null);
   			a = [];
   			this.h && (a.push(this.h.destroy()), this.h = null);
   			this.g && (a.push(this.g.destroy()), this.g = null);
   			this.s = this.l = this.i = null;
   			bg.prototype.release.call(this);
   			return Promise.all(a)
   		};
   		r.Th = function() {
   			return this.l
   		};
   		r.Ih = function() {
   			return this.s
   		};
   		r.lh = function() {
   			return this.g.m && cq
   		};
   		r.$a = function() {
   			return this.g.$a()
   		};
   		r.Cf = function() {
   			return this.g.Cf()
   		};
   		r.cast = function() {
   			var a = this;
   			return O(function(b) {
   				return 1 == b.g ? E(b, a.g.cast(), 2) : a.h ? E(b, a.h.nc(), 0) : b.return()
   			})
   		};
   		r.Kf = function(a) {
   			this.g.Kf(a)
   		};
   		r.Ni = function() {
   			iq(this.g)
   		};
   		r.xc = function() {
   			this.g.xc()
   		};
   		r.mh = function(a, b) {
   			b = void 0 === b ? !1 : b;
   			var c = this;
   			return O(function(d) {
   				if (1 == d.g) {
   					if (a == c.C && b == c.B) return d.return();
   					c.C = a;
   					c.B = b;
   					c.g.xc();
   					return E(d, c.g.destroy(), 2)
   				}
   				c.g = null;
   				c.g = new Wp(a, function() {
   					return kq(c)
   				}, function() {
   					return lq(c)
   				}, function(e, f) {
   					return mq(c, e, f)
   				}, function() {
   					return nq(c)
   				}, function() {
   					return oq(c)
   				}, b);
   				c.g.init();
   				F(d)
   			})
   		};

   		function pq(a) {
   			a.g.init();
   			a.m = new hb;
   			for (var b = t(Lp), c = b.next(); !c.done; c = b.next()) a.m.D(a.i, c.value, function(f) {
   				a.g.$a() || (f = $f(f), a.j.dispatchEvent(f))
   			});
   			for (var d in ag) a.m.D(a.h, ag[d], function(f) {
   				a.g.$a() || a.o.dispatchEvent(f)
   			});
   			a.l = {};
   			b = {};
   			for (var e in a.i) b.Pc = e, Object.defineProperty(a.l, b.Pc, {
   				configurable: !1,
   				enumerable: !0,
   				get: function(f) {
   					return function() {
   						return qq(a, f.Pc)
   					}
   				}(b),
   				set: function(f) {
   					return function(g) {
   						var h = f.Pc;
   						a.g.$a() ? a.g.set("video", h, g) : a.i[h] = g
   					}
   				}(b)
   			}), b = {
   				Pc: b.Pc
   			};
   			a.s = {};
   			rq(a,
   				function(f) {
   					Object.defineProperty(a.s, f, {
   						configurable: !1,
   						enumerable: !0,
   						get: function() {
   							return sq(a, f)
   						}
   					})
   				});
   			tq(a);
   			a.j = new bg;
   			a.j.le = a.l;
   			a.o = new bg;
   			a.o.le = a.s
   		}

   		function tq(a) {
   			var b = new Map;
   			rq(a, function(c, d) {
   				b.has(d) ? (d = b.get(d), c.length < d.length ? a.A.set(c, d) : a.A.set(d, c)) : b.set(d, c)
   			})
   		}

   		function rq(a, b) {
   			function c(k) {
   				return "constructor" == k || "function" != typeof d[k] ? !1 : !e.has(k)
   			}
   			var d = a.h,
   				e = new Set,
   				f;
   			for (f in d) c(f) && (e.add(f), b(f, d[f]));
   			a = Object.getPrototypeOf(d);
   			for (f = Object.getPrototypeOf({}); a && a != f;) {
   				for (var g = t(Object.getOwnPropertyNames(a)), h = g.next(); !h.done; h = g.next()) h = h.value, c(h) && (e.add(h), b(h, d[h]));
   				a = Object.getPrototypeOf(a)
   			}
   		}

   		function oq(a) {
   			var b = {
   				video: {},
   				player: {},
   				playerAfterLoad: {},
   				manifest: a.h.yc(),
   				startTime: null
   			};
   			a.i.pause();
   			for (var c = t(Np), d = c.next(); !d.done; d = c.next()) d = d.value, b.video[d] = a.i[d];
   			a.i.ended || (b.startTime = a.i.currentTime);
   			c = t(Sp);
   			for (d = c.next(); !d.done; d = c.next()) {
   				var e = d.value;
   				d = e[1];
   				e = a.h[e[0]]();
   				b.player[d] = e
   			}
   			c = t(Tp);
   			for (d = c.next(); !d.done; d = c.next()) e = d.value, d = e[1], e = a.h[e[0]](), b.playerAfterLoad[d] = e;
   			return b
   		}

   		function kq(a) {
   			var b = new U("caststatuschanged");
   			a.dispatchEvent(b)
   		}

   		function lq(a) {
   			var b = new U(a.l.paused ? "pause" : "play");
   			a.j.dispatchEvent(b)
   		}

   		function nq(a) {
   			for (var b = t(Sp), c = b.next(); !c.done; c = b.next()) {
   				var d = c.value;
   				c = d[1];
   				d = a.g.get("player", d[0])();
   				a.h[c](d)
   			}
   			var e = a.g.get("player", "getAssetUri")();
   			d = a.g.get("video", "ended");
   			b = Promise.resolve();
   			var f = a.i.autoplay;
   			c = null;
   			d || (c = a.g.get("video", "currentTime"));
   			var g;
   			(d = a.g.get("player", "getTextTracks")()) && d.length && (g = d.find(function(l) {
   				return l.active
   			}));
   			var h = a.g.get("player", "isTextTrackVisible")();
   			e && (a.i.autoplay = !1, b = a.h.load(e, c));
   			var k = {};
   			c = t(Np);
   			for (d = c.next(); !d.done; d = c.next()) d =
   				d.value, k[d] = a.g.get("video", d);
   			b.then(function() {
   				if (a.i) {
   					for (var l = t(Np), m = l.next(); !m.done; m = l.next()) m = m.value, a.i[m] = k[m];
   					l = t(Tp);
   					for (m = l.next(); !m.done; m = l.next()) {
   						var n = m.value;
   						m = n[1];
   						n = a.g.get("player", n[0])();
   						a.h[m](n)
   					}
   					a.h.Qg(h);
   					g && a.h.If(g.language, g.roles, g.forced);
   					a.i.autoplay = f;
   					e && a.i.play()
   				}
   			}, function(l) {
   				l = (new Map).set("detail", l);
   				l = new U("error", l);
   				a.h.dispatchEvent(l)
   			})
   		}

   		function qq(a, b) {
   			if ("addEventListener" == b) return function(d, e, f) {
   				return a.j.addEventListener(d, e, f)
   			};
   			if ("removeEventListener" == b) return function(d, e, f) {
   				return a.j.removeEventListener(d, e, f)
   			};
   			if (a.g.$a() && 0 == Object.keys(a.g.g.video).length) {
   				var c = a.i[b];
   				if ("function" != typeof c) return c
   			}
   			return a.g.$a() ? a.g.get("video", b) : (b = a.i[b], "function" == typeof b && (b = b.bind(a.i)), b)
   		}

   		function sq(a, b) {
   			a.A.has(b) && (b = a.A.get(b));
   			if ("addEventListener" == b) return function(c, d, e) {
   				return a.o.addEventListener(c, d, e)
   			};
   			if ("removeEventListener" == b) return function(c, d, e) {
   				return a.o.removeEventListener(c, d, e)
   			};
   			if ("getMediaElement" == b) return function() {
   				return a.l
   			};
   			if ("getSharedConfiguration" == b) return a.g.get("player", "getConfiguration");
   			if ("getNetworkingEngine" == b) return function() {
   				return a.h.$b()
   			};
   			if ("getDrmEngine" == b) return function() {
   				return a.h.B
   			};
   			if ("getAdManager" == b) return function() {
   				return a.h.og()
   			};
   			if ("setVideoContainer" == b) return function(c) {
   				return a.h.Ug(c)
   			};
   			if (a.g.$a()) {
   				if ("getManifest" == b || "drmInfo" == b) return function() {
   					ab(b + "() does not work while casting!");
   					return null
   				};
   				if ("attach" == b || "detach" == b) return function() {
   					ab(b + "() does not work while casting!");
   					return Promise.resolve()
   				}
   			}
   			return a.g.$a() && 0 == Object.keys(a.g.g.video).length && (Pp[b] || Qp[b]) || !a.g.$a() ? a.h[b].bind(a.h) : a.g.get("player", b)
   		}

   		function mq(a, b, c) {
   			a.g.$a() && ("video" == b ? a.j.dispatchEvent(c) : "player" == b && a.o.dispatchEvent(c))
   		}
   		S("gowatch.cast.CastProxy", jq);
   		jq.prototype.changeReceiverId = jq.prototype.mh;
   		jq.prototype.forceDisconnect = jq.prototype.xc;
   		jq.prototype.suggestDisconnect = jq.prototype.Ni;
   		jq.prototype.setAppData = jq.prototype.Kf;
   		jq.prototype.cast = jq.prototype.cast;
   		jq.prototype.receiverName = jq.prototype.Cf;
   		jq.prototype.isCasting = jq.prototype.$a;
   		jq.prototype.canCast = jq.prototype.lh;
   		jq.prototype.getPlayer = jq.prototype.Ih;
   		jq.prototype.getVideo = jq.prototype.Th;
   		jq.prototype.destroy = jq.prototype.destroy;

   		function uq(a, b, c, d) {
   			bg.call(this);
   			var e = this;
   			this.g = a;
   			this.h = b;
   			this.j = new hb;
   			this.H = {
   				video: a,
   				player: b
   			};
   			this.C = c || function() {};
   			this.J = d || function(f) {
   				return f
   			};
   			this.i = null;
   			this.F = !1;
   			this.o = !0;
   			this.m = 0;
   			this.B = !1;
   			this.A = !0;
   			this.s = this.l = null;
   			this.G = new Lc(function() {
   				vq(e)
   			});
   			wq(this)
   		}
   		oa(uq, bg);
   		r = uq.prototype;
   		r.isConnected = function() {
   			return this.F
   		};
   		r.Zh = function() {
   			return this.o
   		};
   		r.Ji = function(a) {
   			this.i = a
   		};
   		r.qh = function() {
   			this.i = null
   		};
   		r.Ki = function(a) {
   			this.i || (this.i = {
   				metadataType: cast.receiver.media.MetadataType.GENERIC
   			});
   			this.i.title = a
   		};
   		r.Ii = function(a) {
   			this.i || (this.i = {
   				metadataType: cast.receiver.media.MetadataType.GENERIC
   			});
   			this.i.images = [{
   				url: a
   			}]
   		};
   		r.Hi = function(a) {
   			this.i || (this.i = {});
   			this.i.artist = a;
   			this.i.metadataType = cast.receiver.media.MetadataType.MUSIC_TRACK
   		};
   		r.destroy = function() {
   			var a = this,
   				b, c;
   			return O(function(d) {
   				if (1 == d.g) return a.j && (a.j.release(), a.j = null), b = [], a.h && (b.push(a.h.destroy()), a.h = null), a.G && (a.G.stop(), a.G = null), a.g = null, a.H = null, a.C = null, a.F = !1, a.o = !0, a.l = null, a.s = null, bg.prototype.release.call(a), E(d, Promise.all(b), 2);
   				c = cast.receiver.CastReceiverManager.getInstance();
   				c.stop();
   				F(d)
   			})
   		};

   		function wq(a) {
   			var b = cast.receiver.CastReceiverManager.getInstance();
   			b.onSenderConnected = function() {
   				return xq(a)
   			};
   			b.onSenderDisconnected = function() {
   				return xq(a)
   			};
   			b.onSystemVolumeChanged = function() {
   				var e = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
   				e && yq(a, {
   					type: "update",
   					update: {
   						video: {
   							volume: e.level,
   							muted: e.muted
   						}
   					}
   				}, a.l);
   				yq(a, {
   					type: "event",
   					targetName: "video",
   					event: {
   						type: "volumechange"
   					}
   				}, a.l)
   			};
   			a.s = b.getCastMessageBus("urn:x-cast:com.google.cast.media");
   			a.s.onMessage = function(e) {
   				return zq(a,
   					e)
   			};
   			a.l = b.getCastMessageBus("urn:x-cast:com.google.gowatch.v2");
   			a.l.onMessage = function(e) {
   				return Aq(a, e)
   			};
   			b.start();
   			b = t(Lp);
   			for (var c = b.next(); !c.done; c = b.next()) a.j.D(a.g, c.value, function(e) {
   				return Bq(a, "video", e)
   			});
   			for (var d in ag) a.j.D(a.h, ag[d], function(e) {
   				return Bq(a, "player", e)
   			});
   			a.j.D(a.g, "loadeddata", function() {
   				a.B = !0
   			});
   			a.j.D(a.h, "loading", function() {
   				a.o = !1;
   				Cq(a)
   			});
   			a.j.D(a.g, "playing", function() {
   				a.o = !1;
   				Cq(a)
   			});
   			a.j.D(a.g, "pause", function() {
   				Cq(a)
   			});
   			a.j.D(a.h, "unloading", function() {
   				a.o = !0;
   				Cq(a)
   			});
   			a.j.D(a.g, "ended", function() {
   				(new Lc(function() {
   					a.g && a.g.ended && (a.o = !0, Cq(a))
   				})).W(Dq)
   			})
   		}

   		function xq(a) {
   			a.m = 0;
   			a.A = !0;
   			a.F = 0 != cast.receiver.CastReceiverManager.getInstance().getSenders().length;
   			Cq(a)
   		}

   		function Cq(a) {
   			var b;
   			O(function(c) {
   				if (1 == c.g) return E(c, Promise.resolve(), 2);
   				if (!a.h) return c.return();
   				b = new U("caststatuschanged");
   				a.dispatchEvent(b);
   				Eq(a) || Fq(a);
   				F(c)
   			})
   		}

   		function Gq(a, b, c) {
   			var d, e, f, g, h, k, l, m, n, p;
   			O(function(q) {
   				switch (q.g) {
   					case 1:
   						for (d in b.player) e = b.player[d], a.h[d](e);
   						a.C(c);
   						f = a.g.autoplay;
   						return b.manifest ? (a.g.autoplay = !1, ua(q, 5), E(q, a.h.load(b.manifest, b.startTime), 7)) : E(q, Promise.resolve(), 3);
   					case 7:
   						wa(q, 3);
   						break;
   					case 5:
   						return g = ya(q), h = (new Map).set("detail", g), k = new U("error", h), a.h && a.h.dispatchEvent(k), q.return();
   					case 3:
   						if (!a.h) return q.return();
   						for (l in b.video) m = b.video[l], a.g[l] = m;
   						for (n in b.playerAfterLoad) p = b.playerAfterLoad[n], a.h[n](p);
   						a.g.autoplay = f;
   						b.manifest && (a.g.play(), Fq(a));
   						F(q)
   				}
   			})
   		}

   		function Bq(a, b, c) {
   			a.h && (vq(a), yq(a, {
   				type: "event",
   				targetName: b,
   				event: c
   			}, a.l))
   		}

   		function vq(a) {
   			a.G.W(Hq);
   			for (var b = {
   					video: {},
   					player: {}
   				}, c = t(Mp), d = c.next(); !d.done; d = c.next()) d = d.value, b.video[d] = a.g[d];
   			if (a.h.T())
   				for (var e in Rp) 0 == a.m % Rp[e] && (b.player[e] = a.h[e]());
   			for (var f in Pp) 0 == a.m % Pp[f] && (b.player[f] = a.h[f]());
   			if (c = cast.receiver.CastReceiverManager.getInstance().getSystemVolume()) b.video.volume = c.level, b.video.muted = c.muted;
   			yq(a, {
   				type: "update",
   				update: b
   			}, a.l);
   			for (var g in Qp) 0 == a.m % Qp[g] && (b = {
   				player: {}
   			}, b.player[g] = a.h[g](), yq(a, {
   				type: "update",
   				update: b
   			}, a.l));
   			a.B && (a.m +=
   				1);
   			Eq(a)
   		}

   		function Eq(a) {
   			return a.A && (a.g.duration || a.h.T()) ? (Iq(a), a.A = !1, !0) : !1
   		}

   		function Iq(a, b) {
   			var c = {
   				contentId: a.h.yc(),
   				streamType: a.h.T() ? "LIVE" : "BUFFERED",
   				contentType: ""
   			};
   			a.h.T() || (c.duration = a.g.duration);
   			a.i && (c.metadata = a.i);
   			Fq(a, void 0 === b ? 0 : b, c)
   		}

   		function Aq(a, b) {
   			var c = Jp(b.data);
   			switch (c.type) {
   				case "init":
   					a.m = 0;
   					a.B = !1;
   					a.A = !0;
   					Gq(a, c.initState, c.appData);
   					vq(a);
   					break;
   				case "appData":
   					a.C(c.appData);
   					break;
   				case "set":
   					var d = c.targetName,
   						e = c.property;
   					c = c.value;
   					if ("video" == d)
   						if (b = cast.receiver.CastReceiverManager.getInstance(), "volume" == e) {
   							b.setSystemVolumeLevel(c);
   							break
   						} else if ("muted" == e) {
   						b.setSystemVolumeMuted(c);
   						break
   					}
   					a.H[d][e] = c;
   					break;
   				case "call":
   					d = a.H[c.targetName];
   					d[c.methodName].apply(d, c.args);
   					break;
   				case "asyncCall":
   					d = c.targetName;
   					e = c.methodName;
   					"player" == d && "load" == e && (a.m = 0, a.B = !1);
   					var f = c.id,
   						g = b.senderId;
   					b = a.H[d];
   					c = b[e].apply(b, c.args);
   					"player" == d && "load" == e && (c = c.then(function() {
   						a.A = !0
   					}));
   					c.then(function() {
   						return Jq(a, g, f, null)
   					}, function(h) {
   						return Jq(a, g, f, h)
   					})
   			}
   		}

   		function zq(a, b) {
   			var c = Jp(b.data);
   			switch (c.type) {
   				case "PLAY":
   					a.g.play();
   					Fq(a);
   					break;
   				case "PAUSE":
   					a.g.pause();
   					Fq(a);
   					break;
   				case "SEEK":
   					b = c.currentTime;
   					var d = c.resumeState;
   					null != b && (a.g.currentTime = Number(b));
   					d && "PLAYBACK_START" == d ? (a.g.play(), Fq(a)) : d && "PLAYBACK_PAUSE" == d && (a.g.pause(), Fq(a));
   					break;
   				case "STOP":
   					a.h.nc().then(function() {
   						a.h && Fq(a)
   					});
   					break;
   				case "GET_STATUS":
   					Iq(a, Number(c.requestId));
   					break;
   				case "VOLUME":
   					d = c.volume;
   					b = d.level;
   					d = d.muted;
   					var e = a.g.volume,
   						f = a.g.muted;
   					null != b && (a.g.volume = Number(b));
   					null != d && (a.g.muted = d);
   					e == a.g.volume && f == a.g.muted || Fq(a);
   					break;
   				case "LOAD":
   					a.m = 0;
   					a.B = !1;
   					a.A = !1;
   					b = c.media;
   					d = c.currentTime;
   					e = a.J(b.contentId);
   					f = c.autoplay || !0;
   					a.C(b.customData);
   					f && (a.g.autoplay = !0);
   					a.h.load(e, d).then(function() {
   						a.h && Iq(a)
   					}).catch(function(g) {
   						var h = "LOAD_FAILED";
   						7 == g.category && 7E3 == g.code && (h = "LOAD_CANCELLED");
   						yq(a, {
   							requestId: Number(c.requestId),
   							type: h
   						}, a.s)
   					});
   					break;
   				default:
   					yq(a, {
   						requestId: Number(c.requestId),
   						type: "INVALID_REQUEST",
   						reason: "INVALID_COMMAND"
   					}, a.s)
   			}
   		}

   		function Jq(a, b, c, d) {
   			a.h && yq(a, {
   				type: "asyncComplete",
   				id: c,
   				error: d
   			}, a.l, b)
   		}

   		function yq(a, b, c, d) {
   			a.F && (a = Ip(b), d ? c.getCastChannel(d).send(a) : c.broadcast(a))
   		}

   		function Fq(a, b, c) {
   			c = void 0 === c ? null : c;
   			var d = {
   				mediaSessionId: 0,
   				playbackRate: a.g.playbackRate,
   				playerState: a.o ? Kq : a.h.jf() ? Lq : a.g.paused ? Mq : Nq,
   				currentTime: a.g.currentTime,
   				supportedMediaCommands: 63,
   				volume: {
   					level: a.g.volume,
   					muted: a.g.muted
   				}
   			};
   			c && (d.media = c);
   			yq(a, {
   				requestId: void 0 === b ? 0 : b,
   				type: "MEDIA_STATUS",
   				status: [d]
   			}, a.s)
   		}
   		S("gowatch.cast.CastReceiver", uq);
   		uq.prototype.destroy = uq.prototype.destroy;
   		uq.prototype.setContentArtist = uq.prototype.Hi;
   		uq.prototype.setContentImage = uq.prototype.Ii;
   		uq.prototype.setContentTitle = uq.prototype.Ki;
   		uq.prototype.clearContentMetadata = uq.prototype.qh;
   		uq.prototype.setContentMetadata = uq.prototype.Ji;
   		uq.prototype.isIdle = uq.prototype.Zh;
   		uq.prototype.isConnected = uq.prototype.isConnected;
   		var Hq = .5,
   			Dq = 5,
   			Kq = "IDLE",
   			Nq = "PLAYING",
   			Lq = "BUFFERING",
   			Mq = "PAUSED";

   		function Oq(a, b, c, d, e) {
   			if (d >= e) return null;
   			for (var f = -1, g = -1, h = 0; h < c.length; h++)
   				if (c[h].some(function(B) {
   						return null != B && "" != B.g.trim()
   					})) {
   					f = h;
   					break
   				} for (h = c.length - 1; 0 <= h; h--)
   				if (c[h].some(function(B) {
   						return null != B && "" != B.g.trim()
   					})) {
   					g = h;
   					break
   				} if (-1 === f || -1 === g) return null;
   			for (var k = h = !1, l = "white", m = "black", n = Pq(d, e, h, k, l, m); f <= g; f++) {
   				for (var p = c[f], q = -1, u = -1, v = 0; v < p.length; v++)
   					if (null != p[v] && "" !== p[v].g.trim()) {
   						q = v;
   						break
   					} for (v = p.length - 1; 0 <= v; v--)
   					if (null != p[v] && "" !== p[v].g.trim()) {
   						u = v;
   						break
   					} if (-1 ===
   					q || -1 === u) p = Qq(d, e), a.nestedCues.push(p);
   				else {
   					for (; q <= u; q++)
   						if (v = p[q]) {
   							var w = v.l,
   								A = v.i,
   								z = v.j,
   								y = v.h;
   							if (w != h || A != k || z != l || y != m) n.payload && a.nestedCues.push(n), n = Pq(d, e, w, A, z, y), h = w, k = A, l = z, m = y;
   							n.payload += v.g
   						} else n.payload += " ";
   					n.payload && a.nestedCues.push(n);
   					f !== g && (n = Qq(d, e), a.nestedCues.push(n));
   					n = Pq(d, e, h, k, l, m)
   				}
   			}
   			return a.nestedCues.length ? {
   				cue: a,
   				stream: b
   			} : null
   		}

   		function Pq(a, b, c, d, e, f) {
   			a = new Nb(a, b, "");
   			c && a.textDecoration.push("underline");
   			d && (a.fontStyle = "italic");
   			a.color = e;
   			a.backgroundColor = f;
   			return a
   		}

   		function Qq(a, b) {
   			a = new Nb(a, b, "");
   			a.lineBreak = !0;
   			return a
   		}

   		function Rq(a, b, c, d, e) {
   			this.g = a;
   			this.l = b;
   			this.i = c;
   			this.h = d;
   			this.j = e
   		};

   		function Sq(a, b) {
   			this.i = [];
   			this.g = 1;
   			this.h = 0;
   			this.A = a;
   			this.s = b;
   			this.j = this.m = !1;
   			this.l = "white";
   			this.o = "black";
   			Tq(this)
   		}

   		function Uq(a, b, c) {
   			var d = "CC" + ((a.A << 1 | a.s) + 1),
   				e = new Nb(b, c, "");
   			e.lineInterpretation = 1;
   			var f = Vq.get(a.g);
   			f && (e.line = f);
   			return Oq(e, d, a.i, b, c)
   		}

   		function Tq(a) {
   			Wq(a, 0, 15);
   			a.g = 1
   		}

   		function Xq(a, b, c) {
   			if (!(32 > c || 127 < c)) {
   				var d = "";
   				switch (b) {
   					case Yq:
   						d = Zq.has(c) ? Zq.get(c) : String.fromCharCode(c);
   						break;
   					case $q:
   						d = ar.get(c);
   						break;
   					case br:
   						a.i[a.g].pop();
   						d = cr.get(c);
   						break;
   					case dr:
   						a.i[a.g].pop(), d = er.get(c)
   				}
   				d && a.i[a.g].push(new Rq(d, a.m, a.j, a.o, a.l))
   			}
   		}

   		function fr(a, b, c, d) {
   			if (!(0 > c || 0 > b))
   				if (b >= c)
   					for (--d; 0 <= d; d--) a.i[b + d] = a.i[c + d].map(function(f) {
   						return f
   					});
   				else
   					for (var e = 0; e < d; e++) a.i[b + e] = a.i[c + e].map(function(f) {
   						return f
   					})
   		}

   		function Wq(a, b, c) {
   			for (var d = 0; d <= c; d++) a.i[b + d] = []
   		}
   		var Yq = 0,
   			$q = 1,
   			br = 2,
   			dr = 3,
   			Zq = new Map([
   				[39, "\u2019"],
   				[42, "\u00e1"],
   				[92, "\u00e9"],
   				[92, "\u00e9"],
   				[94, "\u00ed"],
   				[95, "\u00f3"],
   				[96, "\u00fa"],
   				[123, "\u00e7"],
   				[124, "\u00f7"],
   				[125, "\u00d1"],
   				[126, "\u00f1"],
   				[127, "\u2588"]
   			]),
   			ar = new Map([
   				[48, "\u00ae"],
   				[49, "\u00b0"],
   				[50, "\u00bd"],
   				[51, "\u00bf"],
   				[52, "\u2122"],
   				[53, "\u00a2"],
   				[54, "\u00a3"],
   				[55, "\u266a"],
   				[56, "\u00e0"],
   				[57, " "],
   				[58, "\u00e8"],
   				[59, "\u00e2"],
   				[60, "\u00ea"],
   				[61, "\u00ee"],
   				[62, "\u00f4"],
   				[63, "\u00fb"]
   			]),
   			cr = new Map([
   				[32, "\u00c1"],
   				[33, "\u00c9"],
   				[34, "\u00d3"],
   				[35,
   					"\u00da"
   				],
   				[36, "\u00dc"],
   				[37, "\u00fc"],
   				[38, "\u2018"],
   				[39, "\u00a1"],
   				[40, "*"],
   				[41, "'"],
   				[42, "\u2500"],
   				[43, "\u00a9"],
   				[44, "\u2120"],
   				[45, "\u00b7"],
   				[46, "\u201c"],
   				[47, "\u201d"],
   				[48, "\u00c0"],
   				[49, "\u00c2"],
   				[50, "\u00c7"],
   				[51, "\u00c8"],
   				[52, "\u00ca"],
   				[53, "\u00cb"],
   				[54, "\u00eb"],
   				[55, "\u00ce"],
   				[56, "\u00cf"],
   				[57, "\u00ef"],
   				[58, "\u00d4"],
   				[59, "\u00d9"],
   				[60, "\u00f9"],
   				[61, "\u00db"],
   				[62, "\u00ab"],
   				[63, "\u00bb"]
   			]),
   			er = new Map([
   				[32, "\u00c3"],
   				[33, "\u00e3"],
   				[34, "\u00cd"],
   				[35, "\u00cc"],
   				[36, "\u00ec"],
   				[37, "\u00d2"],
   				[38, "\u00f2"],
   				[39, "\u00d5"],
   				[40, "\u00f5"],
   				[41, "{"],
   				[42, "}"],
   				[43, "\\"],
   				[44, "^"],
   				[45, "_"],
   				[46, "|"],
   				[47, "~"],
   				[48, "\u00c4"],
   				[49, "\u00e4"],
   				[50, "\u00d6"],
   				[51, "\u00f6"],
   				[52, "\u00df"],
   				[53, "\u00a5"],
   				[54, "\u00a4"],
   				[55, "\u2502"],
   				[56, "\u00c5"],
   				[57, "\u00e5"],
   				[58, "\u00d8"],
   				[59, "\u00f8"],
   				[60, "\u250c"],
   				[61, "\u2510"],
   				[62, "\u2514"],
   				[63, "\u2518"]
   			]),
   			Vq = new Map([
   				[1, 10],
   				[2, 15.33],
   				[3, 20.66],
   				[4, 26],
   				[5, 31.33],
   				[6, 36.66],
   				[7, 42],
   				[8, 47.33],
   				[9, 52.66],
   				[10, 58],
   				[11, 63.33],
   				[12, 68.66],
   				[13, 74],
   				[14, 79.33],
   				[15, 84.66]
   			]);

   		function gr(a, b) {
   			this.h = hr;
   			this.o = new Sq(a, b);
   			this.i = new Sq(a, b);
   			this.g = this.j = new Sq(a, b);
   			this.l = 0;
   			this.m = null
   		}

   		function ir(a, b, c) {
   			a.g = a.i;
   			var d = a.g,
   				e = null;
   			a.h !== jr && a.h !== kr && (e = Uq(d, a.l, c), c = a.i, c.g = 0 < c.h ? c.h : 0, Wq(c, 0, 15), c = a.j, c.g = 0 < c.h ? c.h : 0, Wq(c, 0, 15), d.g = 15);
   			a.h = jr;
   			d.h = b;
   			return e
   		}

   		function lr(a) {
   			a.h = mr;
   			a.g = a.j;
   			a.g.h = 0
   		}

   		function nr(a) {
   			bb("Cea608DataChannel", "CEA-608 text mode entered, but is unsupported");
   			a.g = a.o;
   			a.h = kr
   		}
   		var hr = 0,
   			mr = 1,
   			jr = 3,
   			kr = 4,
   			or = "black green blue cyan red yellow magenta black".split(" "),
   			pr = "white green blue cyan red yellow magenta white_italics".split(" ");

   		function qr(a, b) {
   			this.J = b;
   			this.N = a;
   			this.K = this.l = !1;
   			this.m = this.o = this.G = this.M = this.H = 0;
   			this.F = rr;
   			this.i = [];
   			this.g = this.h = this.j = 0;
   			this.C = this.A = !1;
   			this.B = "white";
   			this.s = "black";
   			sr(this)
   		}

   		function sr(a) {
   			a.i = [];
   			for (var b = 0; 16 > b; b++) a.i.push(tr())
   		}

   		function tr() {
   			for (var a = [], b = 0; 42 > b; b++) a.push(null);
   			return a
   		}

   		function ur(a, b) {
   			vr(a) && (a.i[a.h][a.g] = new Rq(b, a.C, a.A, a.s, a.B), a.g++)
   		}

   		function vr(a) {
   			var b = a.g < a.m && 0 <= a.g;
   			return a.h < a.o && 0 <= a.h && b
   		}
   		qr.prototype.isVisible = function() {
   			return this.l
   		};

   		function wr(a, b, c) {
   			var d = new Nb(a.j, b, "");
   			d.textAlign = a.F === xr ? "left" : a.F === yr ? "right" : Qb;
   			var e = d.region;
   			a.J && (e.id += "svc" + a.J);
   			e.id += "win" + a.N;
   			e.height = a.o;
   			e.width = a.m;
   			e.heightUnits = 2;
   			e.widthUnits = 2;
   			e.viewportAnchorX = a.H;
   			e.viewportAnchorY = a.M;
   			e.viewportAnchorUnits = a.K ? gc : 2;
   			switch (a.G) {
   				case zr:
   					e.regionAnchorX = 0;
   					e.regionAnchorY = 0;
   					break;
   				case Ar:
   					e.regionAnchorX = 50;
   					e.regionAnchorY = 0;
   					break;
   				case Br:
   					e.regionAnchorX = 100;
   					e.regionAnchorY = 0;
   					break;
   				case Cr:
   					e.regionAnchorX = 0;
   					e.regionAnchorY = 50;
   					break;
   				case Dr:
   					e.regionAnchorX =
   						50;
   					e.regionAnchorY = 50;
   					break;
   				case Er:
   					e.regionAnchorX = 100;
   					e.regionAnchorY = 50;
   					break;
   				case Fr:
   					e.regionAnchorX = 0;
   					e.regionAnchorY = 100;
   					break;
   				case Gr:
   					e.regionAnchorX = 50;
   					e.regionAnchorY = 100;
   					break;
   				case Hr:
   					e.regionAnchorX = 100, e.regionAnchorY = 100
   			}
   			if (c = Oq(d, "svc" + c, a.i, a.j, b)) a.j = b;
   			return c
   		}
   		var xr = 0,
   			yr = 1,
   			rr = 2,
   			zr = 0,
   			Ar = 1,
   			Br = 2,
   			Cr = 3,
   			Dr = 4,
   			Er = 5,
   			Fr = 6,
   			Gr = 7,
   			Hr = 8;

   		function Ir() {
   			this.i = [];
   			this.h = null;
   			this.g = 0
   		}

   		function Jr(a, b) {
   			3 === b.type ? (a.g = 2 * (b.value & 63) - 1, a.h = []) : a.h && (0 < a.g && (a.h.push(b), a.g--), 0 === a.g && (a.i.push(new Kr(a.h)), a.h = null, a.g = 0))
   		}

   		function Kr(a) {
   			this.g = 0;
   			this.h = a
   		}
   		Kr.prototype.ka = function() {
   			return this.g < this.h.length
   		};
   		Kr.prototype.wa = function() {
   			return this.g
   		};

   		function Lr(a) {
   			if (!a.ka()) throw new T(2, 2, 3E3);
   			return a.h[a.g++]
   		}
   		Kr.prototype.skip = function(a) {
   			if (this.g + a > this.h.length) throw new T(2, 2, 3E3);
   			this.g += a
   		};

   		function Mr(a) {
   			this.i = a;
   			this.h = [null, null, null, null, null, null, null, null];
   			this.g = null
   		}

   		function Nr(a, b, c, d) {
   			if (128 <= c && 135 >= c) d = c & 7, a.h[d] && (a.g = a.h[d]);
   			else {
   				if (136 === c) {
   					c = Lr(b).value;
   					b = null;
   					c = t(Or(a, c));
   					for (var e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() && (b = wr(e, d, a.i)), sr(e);
   					return b
   				}
   				if (137 === c)
   					for (b = Lr(b).value, b = t(Or(a, b)), c = b.next(); !c.done; c = b.next()) c = a.h[c.value], c.isVisible() || (c.j = d), c.l = !0;
   				else {
   					if (138 === c) {
   						c = Lr(b).value;
   						b = null;
   						c = t(Or(a, c));
   						for (e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() && (b = wr(e, d, a.i)), e.l = !1;
   						return b
   					}
   					if (139 === c) {
   						c = Lr(b).value;
   						b = null;
   						c = t(Or(a, c));
   						for (e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() ? b = wr(e, d, a.i) : e.j = d, e.l = !e.l;
   						return b
   					}
   					if (140 === c) return b = Lr(b).value, Pr(a, b, d);
   					if (143 === c) return d = Pr(a, 255, d), Qr(a), d;
   					if (144 === c) b.skip(1), d = Lr(b).value, a.g && (a.g.A = 0 < (d & 128), a.g.C = 0 < (d & 64));
   					else if (145 === c) d = Lr(b).value, c = Lr(b).value, b.skip(1), a.g && (b = Rr((c & 48) >> 4, (c & 12) >> 2, c & 3), a.g.B = Rr((d & 48) >> 4, (d & 12) >> 2, d & 3), a.g.s = b);
   					else if (146 === c) d = Lr(b).value, b = Lr(b).value, a.g && (a = a.g, a.h = d & 15, a.g = b & 63);
   					else if (151 === c) b.skip(1),
   						b.skip(1), d = Lr(b).value, b.skip(1), a.g && (a.g.F = d & 3);
   					else if (152 <= c && 159 >= c) {
   						c = (c & 15) - 8;
   						e = null !== a.h[c];
   						if (!e) {
   							var f = new qr(c, a.i);
   							f.j = d;
   							a.h[c] = f
   						}
   						d = Lr(b).value;
   						f = Lr(b).value;
   						var g = Lr(b).value,
   							h = Lr(b).value,
   							k = Lr(b).value;
   						b = Lr(b).value;
   						e && 0 === (b & 7) || (b = a.h[c], b.h = 0, b.g = 0, b.C = !1, b.A = !1, b.B = "white", b.s = "black");
   						b = a.h[c];
   						b.l = 0 < (d & 32);
   						b.M = f & 127;
   						b.H = g;
   						b.G = (h & 240) >> 4;
   						b.K = 0 < (f & 128);
   						b.o = (h & 15) + 1;
   						b.m = (k & 63) + 1;
   						a.g = a.h[c]
   					}
   				}
   			}
   			return null
   		}

   		function Or(a, b) {
   			for (var c = [], d = 0; 8 > d; d++) 1 === (b & 1) && a.h[d] && c.push(d), b >>= 1;
   			return c
   		}

   		function Pr(a, b, c) {
   			var d = null;
   			b = t(Or(a, b));
   			for (var e = b.next(); !e.done; e = b.next()) {
   				e = e.value;
   				var f = a.h[e];
   				f.isVisible() && (d = wr(f, c, a.i));
   				a.h[e] = null
   			}
   			return d
   		}

   		function Qr(a) {
   			a.g = null;
   			a.h = [null, null, null, null, null, null, null, null]
   		}

   		function Rr(a, b, c) {
   			var d = {
   				0: 0,
   				1: 0,
   				2: 1,
   				3: 1
   			};
   			a = d[a];
   			b = d[b];
   			c = d[c];
   			return Sr[a << 2 | b << 1 | c]
   		}
   		var Tr = new Map([
   				[32, " "],
   				[33, "\u00a0"],
   				[37, "\u2026"],
   				[42, "\u0160"],
   				[44, "\u0152"],
   				[48, "\u2588"],
   				[49, "\u2018"],
   				[50, "\u2019"],
   				[51, "\u201c"],
   				[52, "\u201d"],
   				[53, "\u2022"],
   				[57, "\u2122"],
   				[58, "\u0161"],
   				[60, "\u0153"],
   				[61, "\u2120"],
   				[63, "\u0178"],
   				[118, "\u215b"],
   				[119, "\u215c"],
   				[120, "\u215d"],
   				[121, "\u215e"],
   				[122, "\u2502"],
   				[123, "\u2510"],
   				[124, "\u2514"],
   				[125, "\u2500"],
   				[126, "\u2518"],
   				[127, "\u250c"]
   			]),
   			Sr = "black blue green cyan red magenta yellow white".split(" ");

   		function Ur() {
   			this.h = [];
   			this.g = [];
   			this.i = new Ir;
   			this.l = 0;
   			this.m = new Map([
   				["CC1", new gr(0, 0)],
   				["CC2", new gr(0, 1)],
   				["CC3", new gr(1, 0)],
   				["CC4", new gr(1, 1)]
   			]);
   			this.s = this.o = 0;
   			this.j = new Map;
   			this.B = !0;
   			this.A = new Set;
   			Vr(this)
   		}
   		Ur.prototype.clear = function() {
   			this.l = 0;
   			this.h = [];
   			this.g = [];
   			var a = this.i;
   			a.i = [];
   			a.h = [];
   			a.g = 0;
   			Vr(this);
   			a = t(this.j.values());
   			for (var b = a.next(); !b.done; b = a.next()) Qr(b.value)
   		};

   		function Vr(a) {
   			a.o = 0;
   			a.s = 0;
   			for (var b = t(a.m.values()), c = b.next(); !c.done; c = b.next()) c = c.value, c.h = hr, c.g = c.j, c.m = null, Tq(c.i), Tq(c.j), Tq(c.o);
   			a.B = !0
   		}
   		Ur.prototype.extract = function(a, b) {
   			if (this.B) {
   				for (var c = t(this.m.values()), d = c.next(); !d.done; d = c.next()) d.value.l = b;
   				this.B = !1
   			}
   			a = new zg(a, 0);
   			if (!(8 > a.getLength()) && 181 === a.R() && 49 === a.ta() && 1195456820 === a.O() && 3 === a.R() && (c = a.R(), 0 !== (c & 64)))
   				for (c &= 31, a.skip(1), d = 0; d < c; d++) {
   					var e = a.R(),
   						f = (e & 4) >> 2,
   						g = a.R(),
   						h = a.R();
   					f && (e &= 3, 0 === e || 1 === e ? this.h.push({
   						pts: b,
   						type: e,
   						Ya: g,
   						yb: h,
   						order: this.h.length
   					}) : (this.g.push({
   						pts: b,
   						type: e,
   						value: g,
   						order: this.g.length
   					}), this.g.push({
   						pts: b,
   						type: 2,
   						value: h,
   						order: this.g.length
   					})))
   				}
   		};
   		Ur.prototype.decode = function() {
   			function a(e, f) {
   				return e.pts - f.pts || e.order - f.order
   			}
   			var b = [];
   			this.h.sort(a);
   			this.g.sort(a);
   			for (var c = t(this.h), d = c.next(); !d.done; d = c.next())(d = Wr(this, d.value)) && b.push(d);
   			c = t(this.g);
   			for (d = c.next(); !d.done; d = c.next()) Jr(this.i, d.value);
   			c = t(this.i.i);
   			for (d = c.next(); !d.done; d = c.next()) d = Xr(this, d.value), b.push.apply(b, x(d));
   			this.i.i = [];
   			this.h = [];
   			this.g = [];
   			return b
   		};

   		function Wr(a, b) {
   			var c = b.type;
   			if (16 === (b.Ya & 112)) {
   				var d = b.Ya >> 3 & 1;
   				0 === c ? a.o = d : a.s = d
   			}
   			d = "CC" + ((c << 1 | (c ? a.s : a.o)) + 1);
   			c = a.m.get(d);
   			if (255 === b.Ya && 255 === b.yb || !b.Ya && !b.yb || !Yr(b.Ya) || !Yr(b.yb)) return 45 <= ++a.l && Vr(a), null;
   			a.l = 0;
   			b.Ya &= 127;
   			b.yb &= 127;
   			var e = b.Ya;
   			if (1 <= e && 15 >= e || !b.Ya && !b.yb) return null;
   			e = null;
   			if (16 === (b.Ya & 112)) a: {
   				a.A.add(d),
   				d = b.Ya;a = b.yb;
   				if (c.m === (d << 8 | a)) c.m = null;
   				else if (c.m = d << 8 | a, 16 === (d & 240) && 64 === (a & 192)) {
   					b = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(d & 7) << 1 | a >> 5 & 1];
   					var f = (a & 30) >> 1;
   					d =
   						"white";
   					e = !1;
   					7 > f ? d = pr[f] : 7 === f && (e = !0);
   					a = 1 === (a & 1);
   					c.h !== kr && (f = c.g, c.h === jr && b !== f.g && (c = 1 + b - f.h, fr(f, c, 1 + f.g - f.h, f.h), Wq(f, 0, c - 1), Wq(f, b + 1, 15 - b)), f.g = b, f.m = a, f.j = e, f.l = d, f.o = "black")
   				} else if (17 === (d & 247) && 32 === (a & 240)) c.g.m = !1,
   				c.g.j = !1,
   				c.g.l = "white",
   				Xq(c.g, Yq, 32),
   				d = !1,
   				b = pr[(a & 14) >> 1],
   				"white_italics" === b && (b = "white", d = !0),
   				c.g.m = 1 === (a & 1),
   				c.g.j = d,
   				c.g.l = b;
   				else if (16 === (d & 247) && 32 === (a & 240) || 23 === (d & 247) && 45 === (a & 255)) b = "black",
   				0 === (d & 7) && (b = or[(a & 14) >> 1]),
   				c.g.o = b;
   				else if (17 === (d & 247) && 48 === (a & 240)) Xq(c.g,
   					$q, a);
   				else if (18 === (d & 246) && 32 === (a & 224)) Xq(c.g, d & 1 ? dr : br, a);
   				else if (20 === (d & 246) && 32 === (a & 240)) {
   					a = b.pts;
   					d = null;
   					switch (b.yb) {
   						case 32:
   							lr(c);
   							break;
   						case 33:
   							c = c.g;
   							c.i[c.g].pop();
   							break;
   						case 37:
   							d = ir(c, 2, a);
   							break;
   						case 38:
   							d = ir(c, 3, a);
   							break;
   						case 39:
   							d = ir(c, 4, a);
   							break;
   						case 40:
   							Xq(c.g, Yq, 32);
   							break;
   						case 41:
   							c.h = 2;
   							c.g = c.i;
   							c.g.h = 0;
   							c.l = a;
   							break;
   						case 42:
   							Tq(c.o);
   							nr(c);
   							break;
   						case 43:
   							nr(c);
   							break;
   						case 44:
   							b = c.i;
   							d = null;
   							c.h !== kr && (d = Uq(b, c.l, a));
   							Wq(b, 0, 15);
   							break;
   						case 45:
   							b = c.g;
   							c.h !== jr ? d = null : (d = Uq(b, c.l, a), e = b.g - b.h + 1, fr(b,
   								e - 1, e, b.h), Wq(b, 0, e - 1), Wq(b, b.g, 15 - b.g), c.l = a);
   							break;
   						case 46:
   							Wq(c.j, 0, 15);
   							break;
   						case 47:
   							b = null, c.h !== kr && (b = Uq(c.i, c.l, a)), d = c.j, c.j = c.i, c.i = d, lr(c), c.l = a, d = b
   					}
   					e = d;
   					break a
   				}
   				e = null
   			}
   			else a = b.yb, Xq(c.g, Yq, b.Ya), Xq(c.g, Yq, a);
   			return e
   		}

   		function Xr(a, b) {
   			var c = [];
   			try {
   				for (; b.ka();) {
   					var d = Lr(b).value,
   						e = (d & 224) >> 5,
   						f = d & 31;
   					7 === e && 0 != f && (e = Lr(b).value & 63);
   					if (0 != e) {
   						a.A.add("svc" + e);
   						a.j.has(e) || a.j.set(e, new Mr(e));
   						for (var g = a.j.get(e), h = b.wa(); b.wa() - h < f;) {
   							e = b;
   							var k = Lr(e),
   								l = k.value,
   								m = k.pts;
   							if (16 === l) {
   								var n = Lr(e);
   								l = l << 16 | n.value
   							}
   							if (0 <= l && 31 >= l) {
   								var p = m;
   								if (g.g) {
   									var q = g.g;
   									e = null;
   									switch (l) {
   										case 8:
   											!vr(q) || 0 >= q.g && 0 >= q.h || (0 >= q.g ? (q.g = q.m - 1, q.h--) : q.g--, q.i[q.h][q.g] = null);
   											break;
   										case 13:
   											q.isVisible() && (e = wr(q, p, g.i));
   											if (q.h + 1 >= q.o) {
   												p = q;
   												for (var u =
   														0, v = 1; 16 > v; v++, u++) p.i[u] = p.i[v];
   												for (v = 0; 1 > v; v++, u++) p.i[u] = tr()
   											} else q.h++;
   											q.g = 0;
   											break;
   										case 14:
   											q.isVisible() && (e = wr(q, p, g.i));
   											q.i[q.h] = tr();
   											q.g = 0;
   											break;
   										case 12:
   											q.isVisible() && (e = wr(q, p, g.i)), sr(q), p = q, p.h = 0, p.g = 0
   									}
   									var w = e
   								} else w = null
   							} else if (128 <= l && 159 >= l) w = Nr(g, e, l, m);
   							else {
   								if (4096 <= l && 4127 >= l) p = l & 255, 8 <= p && 15 >= p ? e.skip(1) : 16 <= p && 23 >= p ? e.skip(2) : 24 <= p && 31 >= p && e.skip(3);
   								else if (4224 <= l && 4255 >= l) p = l & 255, 128 <= p && 135 >= p ? e.skip(4) : 136 <= p && 143 >= p && e.skip(5);
   								else if (32 <= l && 127 >= l) e = l, g.g && (127 === e ? ur(g.g,
   									"\u266a") : ur(g.g, String.fromCharCode(e)));
   								else if (160 <= l && 255 >= l) g.g && ur(g.g, String.fromCharCode(l));
   								else if (4128 <= l && 4223 >= l) {
   									if (e = l & 255, g.g)
   										if (Tr.has(e)) {
   											var A = Tr.get(e);
   											ur(g.g, A)
   										} else ur(g.g, "_")
   								} else 4256 <= l && 4351 >= l && g.g && (160 != (l & 255) ? ur(g.g, "_") : ur(g.g, "[CC]"));
   								w = null
   							}(e = w) && c.push(e)
   						}
   					}
   				}
   			} catch (z) {
   				if (z instanceof T && 3E3 === z.code) bb("CEA708_INVALID_DATA", "Buffer read out of bounds / invalid CEA-708 Data.");
   				else throw z;
   			}
   			return c
   		}

   		function Yr(a) {
   			for (var b = 0; a;) b ^= a & 1, a >>= 1;
   			return 1 === b
   		}
   		Ur.prototype.getStreams = function() {
   			return Array.from(this.A)
   		};
   		S("gowatch.cea.CeaDecoder", Ur);
   		Ib = function() {
   			return new Ur
   		};

   		function Zr(a) {
   			for (var b = [], c = a, d = a = 0; d < c.length;) 2 == a && 3 == c[d] ? (a = 0, c = [].concat(x(c)), c.splice(d, 1), c = new Uint8Array(c)) : 0 == c[d] ? a++ : a = 0, d++;
   			a = c;
   			for (d = 0; d < a.length;) {
   				for (c = 0; 255 == a[d];) c += 255, d++;
   				c += a[d++];
   				for (var e = 0; 255 == a[d];) e += 255, d++;
   				e += a[d++];
   				4 == c && b.push(a.subarray(d, d + e));
   				d += e
   			}
   			return b
   		};

   		function $r() {
   			this.j = new Map;
   			this.i = this.h = 0;
   			this.g = as
   		}
   		$r.prototype.init = function(a) {
   			function b(f) {
   				f = f.name;
   				f in bs && (c.g = bs[f])
   			}
   			var c = this,
   				d = [],
   				e = [];
   			(new Cg).box("moov", Hg).box("mvex", Hg).P("trex", function(f) {
   				var g = f.reader;
   				g.skip(4);
   				g.skip(4);
   				f = g.O();
   				g = g.O();
   				c.h = f;
   				c.i = g
   			}).box("trak", Hg).P("tkhd", function(f) {
   				f = Vi(f.reader, f.version);
   				d.push(f.trackId)
   			}).box("mdia", Hg).P("mdhd", function(f) {
   				f = Ti(f.reader, f.version);
   				e.push(f.timescale)
   			}).box("minf", Hg).box("stbl", Hg).P("stsd", Lg).box("avc1", b).box("avc3", b).box("hev1", b).box("hvc1", b).box("dvav", b).box("dva1",
   				b).box("dvh1", b).box("dvhe", b).box("encv", Mg).box("sinf", Hg).box("frma", function(f) {
   				f = Wi(f.reader).Ga;
   				f in bs && (c.g = bs[f])
   			}).parse(a, !0);
   			if (!d.length || !e.length || d.length != e.length) throw new T(2, 2, 2010);
   			this.g == as && ab("Unable to determine bitstream format for CEA parsing!");
   			d.forEach(function(f, g) {
   				c.j.set(f, e[g])
   			})
   		};
   		$r.prototype.parse = function(a) {
   			var b = this;
   			if (this.g == as) return [];
   			var c = [],
   				d = this.h,
   				e = this.i,
   				f = 0,
   				g = [],
   				h = null,
   				k = 9E4;
   			(new Cg).box("moof", function(l) {
   				f = l.start;
   				g = [];
   				Hg(l)
   			}).box("traf", Hg).P("trun", function(l) {
   				l = Ui(l.reader, l.version, l.flags);
   				g.push(l)
   			}).P("tfhd", function(l) {
   				l = Ri(l.reader, l.flags);
   				d = l.jg || b.h;
   				e = l.th || b.i;
   				l = l.trackId;
   				b.j.has(l) && (k = b.j.get(l))
   			}).P("tfdt", function(l) {
   				h = Si(l.reader, l.version).baseMediaDecodeTime
   			}).box("mdat", function(l) {
   				if (null === h) throw ab("Unable to find base media decode time for CEA captions!"),
   					new T(2, 2, 2010);
   				cs(b, l.reader, h, k, d, e, f - l.start - 8, g, c)
   			}).parse(a, !1);
   			return c
   		};

   		function cs(a, b, c, d, e, f, g, h, k) {
   			var l = 0,
   				m = f,
   				n = h.map(function(u) {
   					return u.Ig
   				});
   			n = [].concat.apply([], x(n));
   			n.length && (m = n[0].sampleSize || f);
   			for (b.skip(g + h[0].sh); b.ka();) {
   				g = b.O();
   				var p = b.R(),
   					q = null;
   				q = !1;
   				h = 1;
   				switch (a.g) {
   					case ds:
   						q = p & 31;
   						q = 6 == q;
   						break;
   					case es:
   						h = 2;
   						b.skip(1);
   						q = p >> 1 & 63;
   						q = 39 == q || 40 == q;
   						break;
   					default:
   						return
   				}
   				if (q)
   					for (p = 0, l < n.length && (p = n[l].re || 0), p = (c + p) / d, h = t(Zr(b.vb(g - h))), q = h.next(); !q.done; q = h.next()) k.push({
   						packet: q.value,
   						pts: p
   					});
   				else try {
   					b.skip(g - h)
   				} catch (u) {
   					break
   				}
   				m -= g + 4;
   				0 == m && (c = l < n.length ?
   					c + (n[l].Gf || e) : c + e, l++, l < n.length ? m = n[l].sampleSize || f : m = f)
   			}
   		}
   		S("gowatch.cea.Mp4CeaParser", $r);
   		var as = 0,
   			ds = 1,
   			es = 2,
   			bs = {
   				avc1: ds,
   				avc3: ds,
   				hev1: es,
   				hvc1: es,
   				dvav: ds,
   				dva1: ds,
   				dvh1: es,
   				dvhe: es
   			};
   		Hb["video/mp4"] = function() {
   			return new $r
   		};

   		function fs() {
   			this.g = null
   		}
   		fs.prototype.init = function() {};
   		fs.prototype.parse = function(a) {
   			this.g ? this.g.clearData() : this.g = new pj;
   			var b = [];
   			a = Ab(a);
   			if (!wj(a)) return b;
   			a = this.g.parse(a);
   			var c = a.hd(),
   				d = a.Xd();
   			a = [];
   			switch (c.video) {
   				case "avc":
   					a.push(6);
   					break;
   				case "hvc":
   					a.push(39), a.push(40)
   			}
   			if (!a.length) return b;
   			c = t(d);
   			for (d = c.next(); !d.done; d = c.next())
   				if (d = d.value, a.includes(d.type) && null != d.time)
   					for (var e = t(Zr(d.data)), f = e.next(); !f.done; f = e.next()) b.push({
   						packet: f.value,
   						pts: d.time
   					});
   			return b
   		};
   		S("gowatch.cea.TsCeaParser", fs);
   		Hb["video/mp2t"] = function() {
   			return new fs
   		};

   		function gs(a, b, c) {
   			var d = hs(a),
   				e = null;
   			a = [];
   			var f = [],
   				g = null,
   				h = new Set(d.map(function(l) {
   					return l.keyId
   				}));
   			h.delete(null);
   			var k = "cenc";
   			if (1 < h.size) throw new T(2, 4, 4010);
   			if (!b) {
   				f = d.filter(function(l) {
   					return "urn:mpeg:dash:sea:2012" == l.Ic
   				});
   				if (1 < f.length) throw new T(2, 4, 4050);
   				f.length && (g = is(f[0]));
   				(f = d.find(function(l) {
   					return "urn:mpeg:dash:mp4protection:2011" == l.Ic
   				})) && f.encryptionScheme && (k = f.encryptionScheme);
   				f = d.filter(function(l) {
   					return "urn:mpeg:dash:mp4protection:2011" == l.Ic ? (e = l.init || e, !1) : "urn:mpeg:dash:sea:2012" !=
   						l.Ic
   				});
   				f.length && (a = js(e, k, f, c, h), 0 == a.length && (a = [Ed("", k, e)]))
   			}
   			if (d.length && !g && (b || !f.length))
   				for (a = [], b = t(Object.values(c)), c = b.next(); !c.done; c = b.next()) c = c.value, "org.w3.clearkey" != c && a.push(Ed(c, k, e));
   			if (h = Array.from(h)[0] || null)
   				for (k = t(a), b = k.next(); !b.done; b = k.next())
   					for (b = t(b.value.initData), c = b.next(); !c.done; c = b.next()) c.value.keyId = h;
   			return {
   				ig: h,
   				Qj: e,
   				drmInfos: a,
   				He: g,
   				ng: !0
   			}
   		}

   		function ks(a, b, c, d) {
   			var e = gs(a, c, d);
   			if (b.ng) {
   				a = 1 == b.drmInfos.length && !b.drmInfos[0].keySystem;
   				c = 0 == e.drmInfos.length;
   				if (0 == b.drmInfos.length || a && !c) b.drmInfos = e.drmInfos;
   				b.ng = !1
   			} else if (0 < e.drmInfos.length && (b.drmInfos = b.drmInfos.filter(function(f) {
   					return e.drmInfos.some(function(g) {
   						return g.keySystem == f.keySystem
   					})
   				}), 0 == b.drmInfos.length)) throw new T(2, 4, 4008);
   			return e.ig || b.ig
   		}

   		function ls(a) {
   			var b = 0,
   				c = Eb(a),
   				d = c.getUint32(b, !0);
   			if (d != a.byteLength) return [];
   			a: {
   				a = b + 6;
   				for (b = []; a < c.byteLength - 1;) {
   					d = c.getUint16(a, !0);
   					a += 2;
   					var e = c.getUint16(a, !0);
   					a += 2;
   					if (0 != (e & 1) || e + a > c.byteLength) {
   						c = [];
   						break a
   					}
   					var f = Ab(c, a, e);
   					b.push({
   						type: d,
   						value: f
   					});
   					a += e
   				}
   				c = b
   			}
   			return c
   		}

   		function ms(a) {
   			a = t(ah(a, "DATA"));
   			for (var b = a.next(); !b.done; b = a.next())
   				if (b = b.value, b.children) {
   					b = t(b.children);
   					for (var c = b.next(); !c.done; c = b.next())
   						if (c = c.value, "LA_URL" == c.tagName) return Zg(c)
   				} return ""
   		}

   		function ns(a) {
   			var b = ch(a.node, "https://dashif.org/CPS", "Laurl");
   			if (b && (b = Zg(b))) return b;
   			a = ch(a.node, "urn:microsoft:playready", "pro");
   			if (!a || !Zg(a)) return "";
   			a = Zg(a);
   			a = yd(a);
   			a = ls(a).filter(function(c) {
   				return c.type === os
   			})[0];
   			if (!a) return "";
   			a = ld(a.value, !0);
   			return (a = Sg(a, "WRMHEADER")) ? ms(a) : ""
   		}

   		function js(a, b, c, d, e) {
   			var f = [];
   			c = t(c);
   			for (var g = c.next(); !g.done; g = c.next()) {
   				g = g.value;
   				var h = d[g.Ic];
   				if (h) {
   					var k;
   					if ((k = ch(g.node, "urn:microsoft:playready", "pro")) && Zg(k)) {
   						k = Zg(k);
   						k = yd(k);
   						var l = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
   						k = [{
   							initData: Qg(k, l, new Set, 0),
   							initDataType: "cenc",
   							keyId: g.keyId
   						}]
   					} else k = null;
   					l = null;
   					if ("urn:uuid:e2719d58-a985-b3c9-781a-b030af78d30e" === g.Ic)
   						if (l = e, 0 == l.size) l = null;
   						else {
   							var m = new Uint8Array([16, 119, 239, 236, 192, 178, 77, 2, 172, 227,
   									60, 30, 82, 226, 251, 75
   								]),
   								n = new Uint8Array([]);
   							l = [{
   								initData: Qg(n, m, l, 1),
   								initDataType: "cenc",
   								keyId: g.keyId
   							}]
   						} k = Ed(h, b, g.init || a || k || l);
   					if (h = ps.get(h)) k.licenseServerUri = h(g);
   					f.push(k)
   				}
   			}
   			return f
   		}

   		function hs(a) {
   			var b = [];
   			a = t(a);
   			for (var c = a.next(); !c.done; c = a.next())(c = qs(c.value)) && b.push(c);
   			return b
   		}

   		function qs(a) {
   			var b = a.attributes.schemeIdUri,
   				c = fh(a, "urn:mpeg:cenc:2013", "default_KID"),
   				d = dh(a, "urn:mpeg:cenc:2013", "pssh").map($g),
   				e = a.attributes.value;
   			if (!b) return null;
   			b = b.toLowerCase();
   			if (c && (c = c.replace(/-/g, "").toLowerCase(), c.includes(" "))) throw new T(2, 4, 4009);
   			var f = [];
   			try {
   				f = d.map(function(g) {
   					return {
   						initDataType: "cenc",
   						initData: yd(g),
   						keyId: null
   					}
   				})
   			} catch (g) {
   				throw new T(2, 4, 4007);
   			}
   			return {
   				node: a,
   				Ic: b,
   				keyId: c,
   				init: 0 < f.length ? f : null,
   				encryptionScheme: e
   			}
   		}

   		function is(a) {
   			if (!window.crypto || !window.crypto.subtle) throw ab("Web Crypto API is not available to decrypt AES-128. (Web Crypto only exists in secure origins like https)"), new T(2, 4, 4042);
   			var b = ch(a.node, "urn:mpeg:dash:schema:sea:2012", "SegmentEncryption");
   			if (!b) throw new T(2, 4, 4051);
   			if ("urn:mpeg:dash:sea:aes128-cbc:2013" != b.attributes.schemeIdUri) throw new T(2, 4, 4051);
   			b = ch(a.node, "urn:mpeg:dash:schema:sea:2012", "CryptoPeriod");
   			if (!b) throw new T(2, 4, 4051);
   			a = b.attributes.IV;
   			b = ud(b.attributes.keyUriTemplate);
   			if (!a || !b) throw new T(2, 4, 4051);
   			a = zd(a.substr(2));
   			if (16 != a.byteLength) throw new T(2, 4, 4048);
   			return {
   				ei: b,
   				iv: a
   			}
   		}
   		var os = 1,
   			ps = (new Map).set("com.widevine.alpha", function(a) {
   				var b = ch(a.node, "https://dashif.org/CPS", "Laurl");
   				return b && (b = Zg(b)) ? b : (a = ch(a.node, "urn:microsoft", "laurl")) ? ud(a.attributes.licenseUrl) || "" : ""
   			}).set("com.microsoft.playready", ns).set("com.microsoft.playready.recommendation", ns).set("com.microsoft.playready.software", ns).set("com.microsoft.playready.hardware", ns).set("org.w3.clearkey", function(a) {
   				var b = ch(a.node, "https://dashif.org/CPS", "Laurl");
   				return b && (b = Zg(b)) ? b : (a = ch(a.node, "http://dashif.org/guidelines/clearKey",
   					"Laurl")) && "EME-1.0" === a.attributes.Lic_type && a && (a = Zg(a)) ? a : ""
   			});

   		function rs(a, b, c, d, e, f) {
   			var g = {
   				RepresentationID: b,
   				Number: c,
   				SubNumber: d,
   				Bandwidth: e,
   				Time: f
   			};
   			return a.replace(/\$(RepresentationID|Number|SubNumber|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g, function(h, k, l, m) {
   				if ("$$" == h) return "$";
   				var n = g[k];
   				if (null == n) return h;
   				"RepresentationID" == k && l && (l = void 0);
   				"Time" == k && "bigint" != typeof n && (.2 <= Math.abs(n - Math.round(n)) && ab("Calculated $Time$ values must be close to integers"), n = Math.round(n));
   				switch (m) {
   					case void 0:
   					case "d":
   					case "i":
   					case "u":
   						h = n.toString();
   						break;
   					case "o":
   						h = n.toString(8);
   						break;
   					case "x":
   						h = n.toString(16);
   						break;
   					case "X":
   						h = n.toString(16).toUpperCase();
   						break;
   					default:
   						h = n.toString()
   				}
   				l = window.parseInt(l, 10) || 1;
   				return Array(Math.max(0, l - h.length) + 1).join("0") + h
   			})
   		}

   		function ss(a, b) {
   			var c = ts(a, b, "timescale"),
   				d = 1;
   			c && (d = lh(c) || 1);
   			c = ts(a, b, "duration");
   			(c = lh(c || "")) && (c /= d);
   			var e = ts(a, b, "startNumber"),
   				f = Number(ts(a, b, "presentationTimeOffset")) || 0,
   				g = mh(e || "");
   			if (null == e || null == g) g = 1;
   			e = null;
   			if (b = us(a, b, "SegmentTimeline")) {
   				b = Yg(b, "S");
   				e = d;
   				a = a.ha.duration || Infinity;
   				for (var h = g, k = [], l = -f, m = 0; m < b.length; ++m) {
   					var n = b[m],
   						p = b[m + 1],
   						q = eh(n, "t", mh),
   						u = eh(n, "d", mh),
   						v = eh(n, "r", kh);
   					n = eh(n, "k", kh) || 0;
   					null != q && (q -= f);
   					if (!u) break;
   					q = null != q ? q : l;
   					v = v || 0;
   					if (0 > v)
   						if (p) {
   							p = eh(p, "t", mh);
   							if (null ==
   								p) break;
   							else if (q >= p) break;
   							v = Math.ceil((p - q) / u) - 1
   						} else {
   							if (Infinity == a) break;
   							else if (q / e >= a) break;
   							v = Math.ceil((a * e - q) / u) - 1
   						} 0 < k.length && q != l && (k[k.length - 1].end = q / e);
   					for (p = 0; p <= v; ++p) l = q + u, k.push({
   						start: q / e,
   						end: l / e,
   						Xf: q,
   						ub: n,
   						Fi: k.length + h
   					}), q = l
   				}
   				e = k
   			}
   			return {
   				timescale: d,
   				Fa: c,
   				Bd: g,
   				Fb: f / d || 0,
   				Wf: f,
   				timeline: e
   			}
   		}

   		function vs(a, b) {
   			return [b(a.I), b(a.pa), b(a.ra)].filter(re)
   		}

   		function ts(a, b, c) {
   			b = vs(a, b);
   			a = null;
   			b = t(b);
   			for (var d = b.next(); !d.done && !(a = d.value.attributes[c]); d = b.next());
   			return a
   		}

   		function us(a, b, c) {
   			b = vs(a, b);
   			a = null;
   			b = t(b);
   			for (var d = b.next(); !d.done && !(a = bh(d.value, c)); d = b.next());
   			return a
   		}

   		function ws(a, b, c, d, e, f) {
   			for (var g = fh(a, "http://www.w3.org/1999/xlink", "href"), h = fh(a, "http://www.w3.org/1999/xlink", "actuate") || "onRequest", k = t(Object.keys(a.attributes)), l = k.next(); !l.done; l = k.next()) {
   				l = l.value;
   				var m = l.split(":"),
   					n = Ug("http://www.w3.org/1999/xlink");
   				m[0] == n && delete a.attributes[l]
   			}
   			if (5 <= f) return Uf(new T(2, 4, 4028));
   			if ("onLoad" != h) return Uf(new T(2, 4, 4027));
   			var p = Cd([d], [g]);
   			return e.request(0, jg(p, b)).va(function(q) {
   				q = Rg(q.data, a.tagName);
   				if (!q) return Uf(new T(2, 4, 4001, g));
   				for (a.children = []; q.children.length;) {
   					var u = q.children.shift();
   					u.tagName && (u.parent = a);
   					a.children.push(u)
   				}
   				u = t(Object.keys(q.attributes));
   				for (var v = u.next(); !v.done; v = u.next()) v = v.value, a.attributes[v] = q.attributes[v];
   				return xs(a, b, c, p[0], e, f + 1)
   			})
   		}

   		function xs(a, b, c, d, e, f) {
   			f = void 0 === f ? 0 : f;
   			if (fh(a, "http://www.w3.org/1999/xlink", "href")) {
   				var g = ws(a, b, c, d, e, f);
   				c && (g = g.va(void 0, function() {
   					return xs(a, b, c, d, e, f)
   				}));
   				return g
   			}
   			g = [];
   			for (var h = {}, k = t(Xg(a)), l = k.next(); !l.done; h = {
   					rc: h.rc
   				}, l = k.next()) h.rc = l.value, "urn:mpeg:dash:resolve-to-zero:2013" == fh(h.rc, "http://www.w3.org/1999/xlink", "href") ? a.children = a.children.filter(function(m) {
   				return function(n) {
   					return n !== m.rc
   				}
   			}(h)) : "SegmentTimeline" != h.rc.tagName && g.push(xs(h.rc, b, c, d, e, f));
   			return Yf(g).va(function() {
   				return a
   			})
   		};

   		function ys(a, b, c, d, e, f, g) {
   			var h, k = (new Cg).P("sidx", function(l) {
   				h = zs(b, d, e, f, g, c, l)
   			});
   			a && k.parse(a);
   			if (h) return h;
   			throw new T(2, 3, 3004);
   		}

   		function zs(a, b, c, d, e, f, g) {
   			var h = [];
   			g.reader.skip(4);
   			var k = g.reader.O();
   			if (0 == k) throw new T(2, 3, 3005);
   			if (0 == g.version) {
   				var l = g.reader.O();
   				var m = g.reader.O()
   			} else l = g.reader.Hc(), m = g.reader.Hc();
   			g.reader.skip(2);
   			var n = g.reader.ta();
   			a = a + g.size + m;
   			for (m = 0; m < n; m++) {
   				var p = g.reader.O(),
   					q = (p & 2147483648) >>> 31;
   				p &= 2147483647;
   				var u = g.reader.O();
   				g.reader.skip(4);
   				if (1 == q) throw new T(2, 3, 3006);
   				h.push(new Bi(l / k + c, (l + u) / k + c, function() {
   					return f
   				}, a, a + p - 1, b, c, d, e));
   				l += u;
   				a += p
   			}
   			g.parser.stop();
   			return h
   		};

   		function As(a) {
   			this.h = Eb(a);
   			this.g = new zg(this.h, 0)
   		}
   		As.prototype.ka = function() {
   			return this.g.ka()
   		};

   		function Bs(a) {
   			var b = Cs(a);
   			if (7 < b.length) throw new T(2, 3, 3002);
   			var c = 0;
   			b = t(b);
   			for (var d = b.next(); !d.done; d = b.next()) c = 256 * c + d.value;
   			b = Cs(a);
   			a: {
   				d = t(Ds);
   				for (var e = d.next(); !e.done; e = d.next())
   					if (xb(b, new Uint8Array(e.value))) {
   						d = !0;
   						break a
   					} d = !1
   			}
   			if (d) b = a.h.byteLength - a.g.wa();
   			else {
   				if (8 == b.length && b[1] & 224) throw new T(2, 3, 3001);
   				for (e = d = 0; e < b.length; e++) {
   					var f = b[e];
   					d = 0 == e ? f & (1 << 8 - b.length) - 1 : 256 * d + f
   				}
   				b = d
   			}
   			b = a.g.wa() + b <= a.h.byteLength ? b : a.h.byteLength - a.g.wa();
   			d = Eb(a.h, a.g.wa(), b);
   			a.g.skip(b);
   			return new Es(c,
   				d)
   		}

   		function Cs(a) {
   			var b = a.g.wa(),
   				c = a.g.R();
   			if (0 == c) throw new T(2, 3, 3002);
   			c = 8 - Math.floor(Math.log2(c));
   			a.g.skip(c - 1);
   			return Ab(a.h, b, c)
   		}
   		var Ds = [
   			[255],
   			[127, 255],
   			[63, 255, 255],
   			[31, 255, 255, 255],
   			[15, 255, 255, 255, 255],
   			[7, 255, 255, 255, 255, 255],
   			[3, 255, 255, 255, 255, 255, 255],
   			[1, 255, 255, 255, 255, 255, 255, 255]
   		];

   		function Es(a, b) {
   			this.id = a;
   			this.g = b
   		}

   		function Fs(a) {
   			if (8 < a.g.byteLength) throw new T(2, 3, 3002);
   			if (8 == a.g.byteLength && a.g.getUint8(0) & 224) throw new T(2, 3, 3001);
   			for (var b = 0, c = 0; c < a.g.byteLength; c++) {
   				var d = a.g.getUint8(c);
   				b = 256 * b + d
   			}
   			return b
   		};

   		function Gs(a, b, c, d, e, f, g, h, k) {
   			function l() {
   				return e
   			}
   			var m = [];
   			a = new As(a.g);
   			for (var n = null, p = null; a.ka();) {
   				var q = Bs(a);
   				if (187 == q.id) {
   					var u = Hs(q);
   					u && (q = c * u.Ri, u = b + u.vi, null != n && m.push(new Bi(n + g, q + g, l, p, u - 1, f, g, h, k)), n = q, p = u)
   				}
   			}
   			null != n && m.push(new Bi(n + g, d + g, l, p, null, f, g, h, k));
   			return m
   		}

   		function Hs(a) {
   			var b = new As(a.g);
   			a = Bs(b);
   			if (179 != a.id) throw new T(2, 3, 3013);
   			a = Fs(a);
   			b = Bs(b);
   			if (183 != b.id) throw new T(2, 3, 3012);
   			b = new As(b.g);
   			for (var c = 0; b.ka();) {
   				var d = Bs(b);
   				if (241 == d.id) {
   					c = Fs(d);
   					break
   				}
   			}
   			return {
   				Ri: a,
   				vi: c
   			}
   		};

   		function Is(a, b, c) {
   			b = us(a, b, "Initialization");
   			if (!b) return null;
   			var d = a.I.Aa(),
   				e = b.attributes.sourceURL;
   			e && (d = Cd(d, [ud(e)]));
   			e = 0;
   			var f = null;
   			if (b = eh(b, "range", jh)) e = b.start, f = b.end;
   			c = new zi(function() {
   				return d
   			}, e, f, Js(a), null, null, c);
   			c.codecs = a.I.codecs;
   			c.mimeType = a.I.mimeType;
   			return c
   		}

   		function Ks(a, b, c) {
   			var d = Number(ts(a, Ls, "presentationTimeOffset")) || 0,
   				e = ts(a, Ls, "timescale"),
   				f = 1;
   			e && (f = lh(e) || 1);
   			var g = d / f || 0,
   				h = Is(a, Ls, c);
   			Ms(a, h);
   			var k = De(a);
   			return {
   				Xb: function() {
   					var l = us(k, Ls, "RepresentationIndex");
   					var m = k.I.Aa();
   					l && (l = ud(l.attributes.sourceURL)) && (m = Cd(m, [l]));
   					l = Ns(k);
   					return Os(k, b, h, m, l.start, l.end, g)
   				}
   			}
   		}

   		function Os(a, b, c, d, e, f, g) {
   			var h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K;
   			return O(function(H) {
   				if (1 == H.g) return h = a.presentationTimeline, k = !a.qb || !a.ha.sd, l = a.ha.start, m = a.ha.duration, n = a.I.mimeType.split("/")[1], p = b, q = null, u = [p(d, e, f, !1), "webm" == n ? p(c.L(), c.Ba, c.ja, !0) : null], p = null, E(H, Promise.all(u), 2);
   				v = H.h;
   				w = v[0];
   				A = v[1] || null;
   				z = null;
   				y = l - g;
   				B = l;
   				C = m ? l + m : Infinity;
   				if ("mp4" == n) var I = ys(w, e, d, c, y, B, C);
   				else {
   					I = new As(A);
   					if (440786851 != Bs(I).id) throw new T(2, 3, 3008);
   					var G = Bs(I);
   					if (408125543 != G.id) throw new T(2,
   						3, 3009);
   					I = G.g.byteOffset;
   					G = new As(G.g);
   					for (var N = null; G.ka();) {
   						var L = Bs(G);
   						if (357149030 == L.id) {
   							N = L;
   							break
   						}
   					}
   					if (!N) throw new T(2, 3, 3010);
   					N = new As(N.g);
   					L = 1E6;
   					for (G = null; N.ka();) {
   						var M = Bs(N);
   						if (2807729 == M.id) L = Fs(M);
   						else if (17545 == M.id)
   							if (4 == M.g.byteLength) G = M.g.getFloat32(0);
   							else if (8 == M.g.byteLength) G = M.g.getFloat64(0);
   						else throw new T(2, 3, 3003);
   					}
   					if (null == G) throw new T(2, 3, 3011);
   					N = L / 1E9;
   					G *= N;
   					L = Bs(new As(w));
   					if (475249515 != L.id) throw new T(2, 3, 3007);
   					I = Gs(L, I, N, G, d, c, y, B, C)
   				}
   				z = I;
   				D = t(z);
   				for (J = D.next(); !J.done; J =
   					D.next()) K = J.value, K.codecs = a.I.codecs, K.mimeType = a.I.mimeType;
   				h.vd(z);
   				q = new Kk(z);
   				k && q.vc(B, C, !0);
   				return H.return(q)
   			})
   		}

   		function Ls(a) {
   			return a.Jc
   		}

   		function Ns(a) {
   			var b = us(a, Ls, "RepresentationIndex");
   			a = ts(a, Ls, "indexRange");
   			a = jh(a || "");
   			b && (a = eh(b, "range", jh, a));
   			return a
   		}

   		function Ms(a, b) {
   			Ps(a, b);
   			if (!Ns(a)) throw new T(2, 4, 4002);
   		}

   		function Ps(a, b) {
   			var c = a.I.mimeType.split("/")[1];
   			if (a.I.contentType != Ld && "mp4" != c && "webm" != c) throw new T(2, 4, 4006);
   			if ("webm" == c && !b) throw new T(2, 4, 4005);
   		}

   		function Js(a) {
   			var b = a.I;
   			return {
   				bandwidth: a.bandwidth,
   				audioSamplingRate: b.audioSamplingRate,
   				codecs: b.codecs,
   				contentType: b.contentType,
   				frameRate: b.frameRate || null,
   				height: b.height || null,
   				mimeType: b.mimeType,
   				channelsCount: b.Ec,
   				pixelAspectRatio: b.pixelAspectRatio || null,
   				width: b.width || null
   			}
   		};

   		function Qs(a, b, c) {
   			var d = Is(a, Rs, c),
   				e = Ss(a);
   			if (!e.Fa && !e.timeline && 1 < e.Cc.length) throw new T(2, 4, 4002);
   			if (!e.Fa && !a.ha.duration && !e.timeline && 1 == e.Cc.length) throw new T(2, 4, 4002);
   			if (e.timeline && 0 == e.timeline.length) throw new T(2, 4, 4002);
   			var f = null,
   				g = null;
   			a.ra.id && a.I.id && (g = b[a.ra.id + "," + a.I.id]) && (f = g.segmentIndex);
   			var h = Ts(a.ha.start, a.ha.duration, a.I.Aa, e, d, c, a.I.mimeType, a.I.codecs);
   			b = !f;
   			f ? f.ud(h, a.presentationTimeline.jb()) : f = new Kk(h);
   			a.presentationTimeline.vd(h);
   			a.qb && a.ha.sd || f.vc(a.ha.start,
   				a.ha.duration ? a.ha.start + a.ha.duration : Infinity, b);
   			g && (g.segmentIndex = f);
   			return {
   				Xb: function() {
   					f && 0 != f.getNumReferences() || f.ge(h);
   					return Promise.resolve(f)
   				}
   			}
   		}

   		function Rs(a) {
   			return a.Gb
   		}

   		function Ss(a) {
   			var b = Us(a);
   			a = ss(a, Rs);
   			var c = a.Bd;
   			0 == c && (c = 1);
   			var d = 0;
   			a.Fa ? d = a.Fa * (c - 1) : a.timeline && 0 < a.timeline.length && (d = a.timeline[0].start);
   			return {
   				Fa: a.Fa,
   				startTime: d,
   				Bd: c,
   				Fb: a.Fb,
   				timeline: a.timeline,
   				Cc: b
   			}
   		}

   		function Ts(a, b, c, d, e, f, g, h) {
   			var k = d.Cc.length;
   			d.timeline && d.timeline.length != d.Cc.length && (k = Math.min(d.timeline.length, d.Cc.length));
   			for (var l = a - d.Fb, m = b ? a + b : Infinity, n = [], p = d.startTime, q = {}, u = 0; u < k; q = {
   					Xc: q.Xc,
   					Tc: q.Tc
   				}, u++) {
   				q.Tc = d.Cc[u];
   				var v = p;
   				p = void 0;
   				p = null != d.Fa ? v + d.Fa : d.timeline ? d.timeline[u].end : v + b;
   				q.Xc = null;
   				v = new Bi(a + v, a + p, function(w) {
   					return function() {
   						null == w.Xc && (w.Xc = Cd(c(), [w.Tc.ki]));
   						return w.Xc
   					}
   				}(q), q.Tc.start, q.Tc.end, e, l, a, m, [], "", null, null, Ci, f);
   				v.codecs = h;
   				v.mimeType = g;
   				n.push(v)
   			}
   			return n
   		}

   		function Us(a) {
   			return [a.I.Gb, a.pa.Gb, a.ra.Gb].filter(re).map(function(b) {
   				return Yg(b, "SegmentURL")
   			}).reduce(function(b, c) {
   				return 0 < b.length ? b : c
   			}).map(function(b) {
   				b.attributes.indexRange && !a.hf && (a.hf = !0);
   				var c = ud(b.attributes.media);
   				b = eh(b, "mediaRange", jh, {
   					start: 0,
   					end: null
   				});
   				return {
   					ki: c,
   					start: b.start,
   					end: b.end
   				}
   			})
   		};

   		function Vs(a, b, c, d, e, f, g, h, k) {
   			k || a.I.Bc || (a.I.Bc = ts(a, Ws, "initialization"));
   			var l = a.I.Bc ? Xs(a, g) : null,
   				m = Ys(a);
   			Zs(m);
   			var n = De(a);
   			if (m.qd) return Ps(a, l), {
   				Xb: function() {
   					var w = rs(m.qd, n.I.id, null, null, n.bandwidth || null, null);
   					w = Cd(n.I.Aa(), [w]);
   					return Os(n, b, l, w, 0, null, m.Fb)
   				}
   			};
   			if (m.Fa) return d || "image" === a.pa.contentType || (a.presentationTimeline.uf(m.Fa), a.presentationTimeline.ke(a.ha.start)), {
   				Xb: function() {
   					return $s(n, m, e, l, f, g, h)
   				}
   			};
   			var p = null;
   			d = d = null;
   			a.ra.id && a.I.id && (d = a.ra.id + "," + a.I.id, d = c[d]) &&
   				(p = d.segmentIndex);
   			var q = a.ha.start,
   				u = a.ha.duration ? q + a.ha.duration : Infinity,
   				v = !(a.qb && a.ha.sd);
   			p ? (c = p, at(c, m, q, u, v, l), c.Ha(a.presentationTimeline.jb())) : p = new bt(m, a.I.id, a.bandwidth, a.I.Aa, q, u, l, v, g, a.I.Hf);
   			m.timeline && "image" !== a.pa.contentType && a.presentationTimeline.Eg(m.timeline, q);
   			d && a.qb && (d.segmentIndex = p);
   			return {
   				Xb: function() {
   					p instanceof bt && 0 == p.getNumReferences() && at(p, m, q, u, v, l);
   					return Promise.resolve(p)
   				}
   			}
   		}

   		function Ws(a) {
   			return a.Pb
   		}

   		function Ys(a) {
   			var b = ss(a, Ws),
   				c = ts(a, Ws, "media"),
   				d = ts(a, Ws, "index");
   			return {
   				Fa: b.Fa,
   				timescale: b.timescale,
   				Bd: b.Bd,
   				Fb: b.Fb,
   				Wf: b.Wf,
   				timeline: b.timeline,
   				Dc: c && ud(c),
   				qd: d,
   				mimeType: a.I.mimeType,
   				codecs: a.I.codecs
   			}
   		}

   		function Zs(a) {
   			var b = a.qd ? 1 : 0;
   			b += a.timeline ? 1 : 0;
   			b += a.Fa ? 1 : 0;
   			if (0 == b) throw new T(2, 4, 4002);
   			1 != b && (a.qd && (a.timeline = null), a.Fa = null);
   			if (!a.qd && !a.Dc) throw new T(2, 4, 4002);
   		}

   		function $s(a, b, c, d, e, f, g) {
   			function h(G) {
   				var N = (G - v) * u,
   					L = N + b.Fb,
   					M = N + n;
   				N = M + u;
   				var P = Math.min(N, l());
   				M = new Bi(M, P, function() {
   					var R = L * w;
   					"BigInt" in window && R > Number.MAX_SAFE_INTEGER && (R = BigInt(L) * BigInt(w));
   					R = rs(A, y, G, null, z, R);
   					return Cd(B(), [R])
   				}, 0, null, d, C, n, l(), [], "", null, null, Ci, f);
   				M.codecs = a.I.codecs;
   				M.mimeType = a.I.mimeType;
   				M.i = N;
   				return M
   			}

   			function k() {
   				var G = [Math.max(m.jb(), n), Math.min(m.Mb(), l())].map(function(N) {
   					return N - n
   				});
   				G = [Math.ceil(G[0] / u), Math.ceil(G[1] / u) - 1];
   				a.I.Ca && G[1]++;
   				return G.map(function(N) {
   					return N +
   						v
   				})
   			}

   			function l() {
   				var G = null != p && e[p] || q;
   				return G ? n + G : Infinity
   			}
   			var m = a.presentationTimeline,
   				n = a.ha.start,
   				p = a.ra.id,
   				q = a.ha.duration,
   				u = b.Fa,
   				v = b.Bd,
   				w = b.timescale,
   				A = b.Dc,
   				z = a.bandwidth || null,
   				y = a.I.id,
   				B = a.I.Aa,
   				C = n - b.Fb,
   				D = k();
   			c = a.qb ? Math.max(D[0], D[1] - c + 1) : D[0];
   			g = g || D[1];
   			D = [];
   			for (var J = c; J <= g; ++J) {
   				var K = h(J);
   				D.push(K)
   			}
   			var H = new Kk(D);
   			D = m.Mb() < l();
   			J = m.T();
   			if (D || J) {
   				var I = Math.max(c, g + 1);
   				c = u;
   				a.I.Ca && (c = .1);
   				H.ue(c, function() {
   					var G = m.jb();
   					H.Ha(G);
   					var N = t(k());
   					N.next();
   					N = N.next().value;
   					for (var L = []; I <= N;) {
   						var M =
   							h(I);
   						L.push(M);
   						I++
   					}
   					return G > l() && !L.length ? null : L
   				})
   			}
   			return Promise.resolve(H)
   		}

   		function Xs(a, b) {
   			var c = a.I.Bc;
   			c || (c = ts(a, Ws, "initialization"));
   			if (!c) return null;
   			c = ud(c);
   			var d = a.I.id,
   				e = a.bandwidth || null,
   				f = a.I.Aa;
   			b = new zi(function() {
   				var g = rs(c, d, null, null, e, null);
   				return Cd(f(), [g])
   			}, 0, null, Js(a), null, null, b);
   			b.codecs = a.I.codecs;
   			b.mimeType = a.I.mimeType;
   			return b
   		}

   		function bt(a, b, c, d, e, f, g, h, k, l) {
   			Kk.call(this, []);
   			this.h = a;
   			this.F = b;
   			this.B = c;
   			this.C = d;
   			this.i = e;
   			this.l = f;
   			this.s = g;
   			this.A = k;
   			this.G = l;
   			h && ct(this)
   		}
   		oa(bt, Kk);
   		r = bt.prototype;
   		r.getNumReferences = function() {
   			return this.h ? this.h.timeline.length : 0
   		};
   		r.release = function() {
   			Kk.prototype.release.call(this);
   			this.h = null
   		};
   		r.Ha = function(a) {
   			if (this.h) {
   				for (var b = 0, c = this.h.timeline, d = 0; d < c.length; d += 1)
   					if (c[d].end + this.i <= a) b += 1;
   					else break;
   				0 < b && (this.h.timeline = c.slice(b), this.g.length >= b && (this.g = this.g.slice(b)), this.j += b, 0 === this.getNumReferences() && this.release())
   			}
   		};

   		function at(a, b, c, d, e, f) {
   			dt(a, f);
   			if (a.h) {
   				c = a.h.timeline;
   				a.h.Dc = b.Dc;
   				if (c.length) {
   					var g = c[c.length - 1];
   					b = b.timeline.filter(function(h) {
   						return h.start >= g.end
   					})
   				} else b = b.timeline.slice();
   				0 < b.length && a.h.timeline.push.apply(a.h.timeline, x(b));
   				a.l !== d && (a.l = d)
   			} else a.h = b, a.i = c, a.l = d;
   			e && ct(a)
   		}

   		function dt(a, b) {
   			if (a.s !== b) {
   				a.s = b;
   				a = t(a.g);
   				for (var c = a.next(); !c.done; c = a.next())(c = c.value) && Ei(c, b)
   			}
   		}

   		function ct(a) {
   			if (!a.o) {
   				for (var b = a.h.timeline; b.length;)
   					if (b[b.length - 1].start >= a.l) b.pop();
   					else break;
   				a.Ha(a.i)
   			}
   		}
   		r.find = function(a) {
   			if (this.h && this.h.timeline && this.h.timeline.length && a < this.h.timeline[0].start + this.i) return this.j;
   			if (!this.h) return null;
   			var b = this.h.timeline;
   			if (a < this.i || a >= this.l) return null;
   			for (var c = b.length - 1, d = 0; d < b.length; d++) {
   				var e = b[d],
   					f = e.start + this.i;
   				e = d < c ? b[d + 1].start + this.i : Infinity === this.l ? e.end + this.i : this.l;
   				if (a >= f && a < e) return d + this.j
   			}
   			return null
   		};
   		r.get = function(a) {
   			var b = this;
   			a -= this.j;
   			if (0 > a || a >= this.getNumReferences() || !this.h) return null;
   			var c = this.g[a];
   			if (!c) {
   				var d = this.h.Dc,
   					e = this.h.timeline[a],
   					f = e.Fi,
   					g = this.h.Wf + e.Xf;
   				c = this.i - this.h.Fb;
   				var h = this.i + e.end,
   					k = h;
   				a === this.getNumReferences() - 1 && Infinity !== this.l && (k = this.l);
   				for (var l = this.h.codecs, m = this.h.mimeType, n = [], p = (e.end - e.start) / e.ub, q = {}, u = 0; u < e.ub; q = {
   						Yc: q.Yc,
   						Ce: q.Ce
   					}, u++) {
   					var v = e.start + p * u,
   						w = v + p;
   					q.Ce = u + 1;
   					q.Yc = null;
   					v = new Bi(this.i + v, this.i + w, function(A) {
   						return function() {
   							if (!b.h) return [];
   							null == A.Yc && (A.Yc = et(b.h.Dc, b.F, f, b.B, g, A.Ce, b.C));
   							return A.Yc
   						}
   					}(q), 0, null, this.s, c, this.i, this.l, [], "", null, null, Ci, this.A);
   					v.codecs = l;
   					v.mimeType = m;
   					0 == this.G ? 0 < u && v.ee() : 0 != u % this.G && v.ee();
   					n.push(v)
   				}
   				c = new Bi(this.i + e.start, k, function() {
   					return 0 < e.ub ? [] : et(d, b.F, f, b.B, g, null, b.C)
   				}, 0, null, this.s, c, this.i, this.l, n, "", null, null, Ci, this.A, 0 < e.ub);
   				c.codecs = l;
   				c.mimeType = m;
   				c.i = h;
   				this.g[a] = c
   			}
   			return c
   		};

   		function et(a, b, c, d, e, f, g) {
   			a = rs(a, b, c, f, d || null, e);
   			return Cd(g(), [a]).map(function(h) {
   				return h.toString()
   			})
   		};

   		function ft(a) {
   			var b = Zd(a),
   				c = b.split("/")[0];
   			a = $d(a);
   			return {
   				type: c,
   				mimeType: b,
   				codecs: a,
   				language: null,
   				height: null,
   				width: null,
   				channelCount: null,
   				sampleRate: null,
   				closedCaptions: new Map,
   				Zf: null,
   				colorGamut: null
   			}
   		}

   		function gt(a, b) {
   			function c(y) {
   				return d(y.name)
   			}

   			function d(y) {
   				y = y.toLowerCase();
   				switch (y) {
   					case "avc1":
   					case "avc3":
   						f.push(y + ".42E01E");
   						h = !0;
   						break;
   					case "hev1":
   					case "hvc1":
   						f.push(y + ".1.6.L93.90");
   						h = !0;
   						break;
   					case "dvh1":
   					case "dvhe":
   						f.push(y + ".05.04");
   						h = !0;
   						break;
   					case "vp09":
   						f.push(y + ".00.10.08");
   						h = !0;
   						break;
   					case "av01":
   						f.push(y + ".0.01M.08");
   						h = !0;
   						break;
   					case "mp4a":
   						e.push("mp4a.40.2");
   						g = !0;
   						break;
   					case "ac-3":
   					case "ec-3":
   					case "opus":
   					case "flac":
   						e.push(y), g = !0
   				}
   			}
   			var e = [],
   				f = [],
   				g = !1,
   				h = !1,
   				k = null,
   				l = null,
   				m = null,
   				n =
   				null,
   				p = null,
   				q = null,
   				u = null,
   				v;
   			(new Cg).box("moov", Hg).box("trak", Hg).P("tkhd", function(y) {
   				y = Vi(y.reader, y.version);
   				l = String(y.height);
   				m = String(y.width)
   			}).box("mdia", Hg).P("mdhd", function(y) {
   				k = Ti(y.reader, y.version).language
   			}).box("minf", Hg).box("stbl", Hg).P("stsd", Lg).box("mp4a", function(y) {
   				var B = y.reader;
   				B.skip(6);
   				B.skip(2);
   				B.skip(8);
   				var C = B.ta();
   				B.skip(2);
   				B.skip(2);
   				B.skip(2);
   				B = B.ta() + B.ta() / 65536;
   				n = C;
   				p = B;
   				y.reader.ka() ? Hg(y) : c(y)
   			}).box("esds", function(y) {
   				y = y.reader;
   				for (var B = "mp4a", C, D; y.ka();) {
   					C =
   						y.R();
   					for (var J = y.R(); J & 128;) J = y.R();
   					if (3 == C) y.ta(), J = y.R(), J & 128 && y.ta(), J & 64 && y.skip(y.R()), J & 32 && y.ta();
   					else if (4 == C) D = y.R(), y.skip(12);
   					else if (5 == C) break
   				}
   				D && (B += "." + Xi(D), 5 == C && y.ka() && (C = y.R(), D = (C & 248) >> 3, 31 === D && y.ka() && (D = 32 + ((C & 7) << 3) + ((y.R() & 224) >> 5)), B += "." + D));
   				e.push(B);
   				g = !0
   			}).box("ac-3", c).box("ec-3", c).box("opus", c).box("Opus", c).box("fLaC", c).box("avc1", function(y) {
   				v = y.name;
   				Mg(y)
   			}).box("avc3", function(y) {
   				v = y.name;
   				Mg(y)
   			}).box("hev1", function(y) {
   				v = y.name;
   				Mg(y)
   			}).box("hvc1", function(y) {
   				v =
   					y.name;
   				Mg(y)
   			}).box("dva1", function(y) {
   				v = y.name;
   				Mg(y)
   			}).box("dvav", function(y) {
   				v = y.name;
   				Mg(y)
   			}).box("dvh1", function(y) {
   				v = y.name;
   				Mg(y)
   			}).box("dvhe", function(y) {
   				v = y.name;
   				Mg(y)
   			}).box("vp09", function(y) {
   				v = y.name;
   				Mg(y)
   			}).box("av01", function(y) {
   				v = y.name;
   				Mg(y)
   			}).box("avcC", function(y) {
   				var B = v || "";
   				switch (v) {
   					case "dvav":
   						B = "avc3";
   						break;
   					case "dva1":
   						B = "avc1"
   				}
   				y = y.reader;
   				y.skip(1);
   				y = B + "." + Xi(y.R()) + Xi(y.R()) + Xi(y.R());
   				f.push(y);
   				h = !0
   			}).box("hvcC", function(y) {
   				var B = v || "";
   				switch (v) {
   					case "dvh1":
   						B = "hvc1";
   						break;
   					case "dvhe":
   						B =
   							"hev1"
   				}
   				var C = y.reader;
   				C.skip(1);
   				y = C.R();
   				var D = ["", "A", "B", "C"][y >> 6],
   					J = y & 31,
   					K = C.O(),
   					H = (y & 32) >> 5 ? "H" : "L";
   				y = [C.R(), C.R(), C.R(), C.R(), C.R(), C.R()];
   				C = C.R();
   				for (var I = 0, G = 0; 32 > G; G++) {
   					I |= K & 1;
   					if (31 == G) break;
   					I <<= 1;
   					K >>= 1
   				}
   				B = B + ("." + D + J) + ("." + Xi(I, !0));
   				B += "." + H + C;
   				D = "";
   				for (J = y.length; J--;)
   					if ((H = y[J]) || D) D = "." + H.toString(16).toUpperCase() + D;
   				B += D;
   				f.push(B);
   				h = !0
   			}).box("dvcC", function(y) {
   				var B = v || "";
   				switch (v) {
   					case "hvc1":
   						B = "dvh1";
   						break;
   					case "hev1":
   						B = "dvhe";
   						break;
   					case "avc1":
   						B = "dva1";
   						break;
   					case "avc3":
   						B = "dvav"
   				}
   				var C =
   					y.reader;
   				C.skip(2);
   				y = C.R();
   				C = C.R();
   				f.push(B + "." + Yi(y >> 1 & 127) + "." + Yi(y << 5 & 32 | C >> 3 & 31));
   				h = !0
   			}).P("vpcC", function(y) {
   				var B = v || "",
   					C = y.reader;
   				y = C.R();
   				var D = C.R();
   				C = C.R() >> 4 & 15;
   				f.push(B + "." + Yi(y) + "." + Yi(D) + "." + Yi(C));
   				h = !0
   			}).box("av1C", function(y) {
   				var B = v || "",
   					C = y.reader;
   				C.skip(1);
   				y = C.R();
   				C = C.R();
   				var D = y >>> 5,
   					J = (C & 64) >> 6;
   				f.push(B + "." + D + "." + Yi(y & 31) + (C >>> 7 ? "H" : "M") + "." + Yi(2 === D && J ? (C & 32) >> 5 ? 12 : 10 : J ? 10 : 8) + "." + ((C & 16) >> 4) + "." + ((C & 8) >> 3) + ((C & 4) >> 2) + (C & 3) + "." + Yi(1) + "." + Yi(1) + "." + Yi(1) + ".0");
   				h = !0
   			}).box("enca", Ng).box("encv",
   				Mg).box("sinf", Hg).box("frma", function(y) {
   				y = Wi(y.reader).Ga;
   				d(y)
   			}).box("colr", function(y) {
   				y = y.reader;
   				var B = null,
   					C = null,
   					D = y.vb(4);
   				var J = String.fromCharCode(D[0]);
   				J += String.fromCharCode(D[1]);
   				J += String.fromCharCode(D[2]);
   				J += String.fromCharCode(D[3]);
   				if ("nclx" === J) {
   					switch (y.ta()) {
   						case 1:
   						case 5:
   						case 6:
   						case 7:
   							B = "srgb";
   							break;
   						case 9:
   							B = "rec2020";
   							break;
   						case 11:
   						case 12:
   							B = "p3"
   					}
   					D = y.ta();
   					y.ta();
   					switch (D) {
   						case 1:
   						case 6:
   						case 13:
   						case 14:
   						case 15:
   							C = "SDR";
   							break;
   						case 16:
   							C = "PQ";
   							break;
   						case 18:
   							C = "HLG"
   					}
   				}
   				q = C;
   				u = B
   			}).parse(a ||
   				b, !0);
   			if (!e.length && !f.length) return null;
   			var w = g && !h,
   				A = new Map;
   			if (h) {
   				var z = new Gb("video/mp4");
   				a && z.init(a);
   				z.i(b);
   				a = t(z.j());
   				for (b = a.next(); !b.done; b = a.next()) b = b.value, A.set(b, b);
   				z.g()
   			}
   			return {
   				type: w ? "audio" : "video",
   				mimeType: w ? "audio/mp4" : "video/mp4",
   				codecs: ht(e.concat(f)).join(", "),
   				language: k,
   				height: l,
   				width: m,
   				channelCount: n,
   				sampleRate: p,
   				closedCaptions: A,
   				Zf: q,
   				colorGamut: u
   			}
   		}

   		function ht(a) {
   			var b = new Set,
   				c = [];
   			a = t(a);
   			for (var d = a.next(); !d.done; d = a.next()) {
   				d = d.value;
   				var e = Yd(d);
   				b.has(e) || (c.push(d), b.add(e))
   			}
   			b = Md("audio", c);
   			d = Md("video", c);
   			a = Md(Ld, c);
   			d = it(d);
   			b = b.concat(d).concat(a);
   			return c.length && !b.length ? c : b
   		}

   		function it(a) {
   			if (1 >= a.length) return a;
   			var b = a.find(function(c) {
   				return c.startsWith("dvh1.") || c.startsWith("dvhe.") || c.startsWith("dav1.")
   			});
   			return b ? mb('video/mp4; codecs="' + b + '"') ? [b] : a.filter(function(c) {
   				return c != b
   			}) : a
   		}

   		function jt(a) {
   			var b = null;
   			(new Cg).box("moov", Hg).box("trak", Hg).box("mdia", Hg).box("minf", Hg).box("stbl", Hg).P("stsd", Lg).box("encv", Mg).box("enca", Ng).box("sinf", Hg).box("schi", Hg).P("tenc", function(c) {
   				c = c.reader;
   				c.R();
   				c.R();
   				c.R();
   				c.R();
   				b = Ad(c.vb(16))
   			}).parse(a, !0);
   			return b
   		};

   		function kt(a) {
   			this.o = null;
   			this.A = a;
   			this.G = new cg;
   			this.i = [];
   			this.h = null;
   			this.m = [];
   			this.B = null;
   			this.F = [];
   			this.C = 300;
   			this.l = new Map;
   			this.j = new Map;
   			this.g = null;
   			this.s = "UNKNOWN"
   		}
   		kt.prototype.configure = function(a) {
   			this.o = a
   		};
   		kt.prototype.destroy = function() {
   			this.A = this.o = null;
   			this.i = [];
   			this.h = null;
   			this.m = [];
   			this.F = [];
   			this.l.clear();
   			null != this.g && (this.g.stop(), this.g = null);
   			return this.G.destroy()
   		};
   		kt.prototype.setManifestType = function(a) {
   			this.s = a
   		};

   		function lt(a, b) {
   			var c, d, e, f, g, h, k;
   			return O(function(l) {
   				if (1 == l.g) return c = Cd(a.i, [mt(a, b)]), d = jg(c, a.o.retryParameters), e = a.A.networkingEngine.request(8, d), dg(a.G, e), ua(l, 2), E(l, e.promise, 4);
   				if (2 != l.g) return f = l.h, g = kd(f.data), h = JSON.parse(g), 1 == h.VERSION && nt(a, h, f.uri), wa(l, 0);
   				if ((k = ya(l)) && 7001 == k.code) return l.return();
   				null != a.g && (a.g.stop(), a.g = null);
   				a.g = new Lc(function() {
   					lt(a, b)
   				});
   				a.g.W(a.C);
   				F(l)
   			})
   		}

   		function mt(a, b) {
   			if (!a.m.length) return b;
   			b = new rc(b);
   			var c = a.B || a.m[0],
   				d = Math.round(a.A.getBandwidthEstimate()),
   				e = b.g;
   			"DASH" == a.s ? (e.add("_DASH_pathway", c), e.add("_DASH_throughput", String(d))) : "HLS" == a.s && (e.add("_HLS_pathway", c), e.add("_HLS_throughput", String(d)));
   			Hc(e) && vc(b, e);
   			return b.toString()
   		}

   		function nt(a, b, c) {
   			null != a.g && (a.g.stop(), a.g = null);
   			var d = b["RELOAD-URI"] || c;
   			a.g = new Lc(function() {
   				lt(a, d)
   			});
   			if (c = b.TTL) a.C = c;
   			a.g.W(a.C);
   			a.m = b["PATHWAY-PRIORITY"] || [];
   			a.F = b["PATHWAY-CLONES"] || []
   		}

   		function ot(a, b, c, d) {
   			var e = a.l.get(b);
   			e || (e = new Map);
   			e.set(c, d);
   			a.l.set(b, e)
   		}
   		kt.prototype.banLocation = function(a) {
   			this.j.set(a, Date.now() + 6E4)
   		};

   		function pt(a, b, c) {
   			c = void 0 === c ? !1 : c;
   			b = a.l.get(b) || new Map;
   			for (var d = [], e = {}, f = t(a.m), g = f.next(); !g.done; e = {
   					Ub: e.Ub
   				}, g = f.next())
   				if (e.Ub = g.value, g = b.get(e.Ub)) d.push({
   					Af: e.Ub,
   					location: g
   				});
   				else if (g = a.F.find(function(k) {
   					return function(l) {
   						return l.ij == k.Ub
   					}
   				}(e))) {
   				var h = b.get(g["BASE-ID"]);
   				h && (g["URI-REPLACEMENT"].ah ? (h = new rc(h), tc(h, g["URI-REPLACEMENT"].ah), d.push({
   					Af: e.Ub,
   					location: h.toString()
   				})) : d.push({
   					Af: e.Ub,
   					location: h
   				}))
   			}
   			e = Date.now();
   			f = t(a.j.keys());
   			for (g = f.next(); !g.done; g = f.next()) g = g.value,
   				h = a.j.get(g), e > h && a.j.delete(g);
   			d = d.filter(function(k) {
   				for (var l = t(a.j.keys()), m = l.next(); !m.done; m = l.next())
   					if (m.value.includes((new rc(k.location)).zb)) return !1;
   				return !0
   			});
   			d.length && (a.B = d[0].Af);
   			d = d.map(function(k) {
   				return k.location
   			});
   			if (!d.length && a.h)
   				for (e = t(a.h.split(",")), g = e.next(); !g.done; g = e.next())
   					if (f = b.get(g.value)) a.B = a.h, d.push(f);
   			if (!d.length)
   				for (b = t(b.values()), e = b.next(); !e.done; e = b.next()) d.push(e.value);
   			return c ? d : Cd(a.i, d)
   		};

   		function qt() {
   			this.j = [];
   			this.h = [];
   			this.g = [];
   			this.l = [];
   			this.i = [];
   			this.s = this.o = !1;
   			this.m = new Set
   		}
   		r = qt.prototype;
   		r.release = function() {
   			for (var a = t(this.h.concat(this.g, this.l, this.i)), b = a.next(); !b.done; b = a.next()) b = b.value, b.segmentIndex && b.segmentIndex.release();
   			this.h = [];
   			this.g = [];
   			this.l = [];
   			this.i = [];
   			this.j = []
   		};
   		r.Sh = function() {
   			return this.j
   		};
   		r.ff = function() {
   			return this.l.slice()
   		};
   		r.Ah = function() {
   			return this.i
   		};

   		function rt(a, b) {
   			var c = [],
   				d = [],
   				e = [],
   				f = [];
   			a = t(a);
   			for (var g = a.next(); !g.done; g = a.next()) {
   				var h = g.value;
   				g = new Map(h.audioStreams.map(function(n) {
   					return [st(n), n]
   				}));
   				var k = new Map(h.videoStreams.map(function(n) {
   						return [tt(n), n]
   					})),
   					l = new Map(h.textStreams.map(function(n) {
   						return [ut(n), n]
   					}));
   				h = new Map(h.imageStreams.map(function(n) {
   					return [vt(n), n]
   				}));
   				if (b) {
   					var m = wt(Ld);
   					l.set(ut(m), m);
   					m = wt("image");
   					h.set(vt(m), m)
   				}
   				c.push(g);
   				d.push(k);
   				e.push(l);
   				f.push(h)
   			}
   			return {
   				dg: c,
   				Yg: d,
   				Vg: e,
   				wg: f
   			}
   		}
   		r.Le = function(a, b, c) {
   			c = void 0 === c ? !1 : c;
   			var d = this,
   				e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H, I, G, N, L, M, P, R, Q;
   			return O(function(fa) {
   				if (1 == fa.g) {
   					e = Nd;
   					if (!b && 1 == a.length) return f = rt(a, !1), g = f.dg, h = f.Yg, k = f.Vg, l = f.wg, d.h = Array.from(g[0].values()), d.g = Array.from(h[0].values()), d.l = Array.from(k[0].values()), d.i = Array.from(l[0].values()), fa.u(2);
   					m = c ? d.m.size : 0;
   					n = -1;
   					for (p = 0; p < a.length; p++) q = a[p], d.m.has(q.id) || (d.m.add(q.id), -1 == n && (n = p));
   					if (-1 == n) return fa.return();
   					u = rt(a, !0);
   					v = u.dg;
   					w = u.Yg;
   					A = u.Vg;
   					z = u.wg;
   					return E(fa, Promise.all([xt(d, d.h, v, n, yt, zt, m), xt(d, d.g, w, n, yt, zt, m), xt(d, d.l, A, n, yt, zt, m), xt(d, d.i, z, n, yt, zt, m)]), 2)
   				}
   				y = 0;
   				B = [];
   				if (d.g.length && d.h.length)
   					for (I = t(d.h), G = I.next(); !G.done; G = I.next())
   						for (N = G.value, L = t(d.g), M = L.next(); !M.done; M = L.next()) P = M.value, R = gi(N.drmInfos, P.drmInfos), N.drmInfos.length && P.drmInfos.length && !R.length || (Q = y++, B.push({
   							id: Q,
   							language: N.language,
   							disabledUntilTime: 0,
   							primary: N.primary,
   							audio: N,
   							video: P,
   							bandwidth: (N.bandwidth || 0) + (P.bandwidth || 0),
   							drmInfos: R,
   							allowedByApplication: !0,
   							allowedByKeySystem: !0,
   							decodingInfos: []
   						}));
   				else
   					for (C = d.g.length ? d.g : d.h, D = t(C), J = D.next(); !J.done; J = D.next()) K = J.value, H = y++, B.push({
   						id: H,
   						language: K.language,
   						disabledUntilTime: 0,
   						primary: K.primary,
   						audio: K.type == e.U ? K : null,
   						video: K.type == e.ga ? K : null,
   						bandwidth: K.bandwidth || 0,
   						drmInfos: K.drmInfos,
   						allowedByApplication: !0,
   						allowedByKeySystem: !0,
   						decodingInfos: []
   					});
   				d.j = B;
   				F(fa)
   			})
   		};

   		function At(a) {
   			var b, c, d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H, I, G, N, L, M;
   			return O(function(P) {
   				switch (P.g) {
   					case 1:
   						b = Nd;
   						if (1 == a.length) return P.return(a[0]);
   						c = a.map(function(R) {
   							return new Map(R.filter(function(Q) {
   								return Q.type === b.U
   							}).map(function(Q) {
   								return [st(Q), Q]
   							}))
   						});
   						d = a.map(function(R) {
   							return new Map(R.filter(function(Q) {
   								return Q.type === b.ga
   							}).map(function(Q) {
   								return [tt(Q), Q]
   							}))
   						});
   						e = a.map(function(R) {
   							return new Map(R.filter(function(Q) {
   								return Q.type === b.ma
   							}).map(function(Q) {
   								return [ut(Q), Q]
   							}))
   						});
   						f = a.map(function(R) {
   							return new Map(R.filter(function(Q) {
   								return Q.type === b.Ee
   							}).map(function(Q) {
   								return [vt(Q), Q]
   							}))
   						});
   						g = t(e);
   						for (h = g.next(); !h.done; h = g.next()) k = h.value, l = Bt(b.ma), k.set(ut(l), l);
   						m = t(f);
   						for (n = m.next(); !n.done; n = m.next()) p = n.value, q = Bt(b.Ee), p.set(vt(q), q);
   						u = new qt;
   						return E(P, xt(u, [], c, 0, Ct, Dt, 0), 2);
   					case 2:
   						return v = P.h, E(P, xt(u, [], d, 0, Ct, Dt, 0), 3);
   					case 3:
   						return w = P.h, E(P, xt(u, [], e, 0, Ct, Dt, 0), 4);
   					case 4:
   						return A = P.h, E(P, xt(u, [], f, 0, Ct, Dt, 0), 5);
   					case 5:
   						z = P.h;
   						y = 0;
   						if (w.length && v.length)
   							for (K =
   								t(v), H = K.next(); !H.done; H = K.next())
   								for (I = H.value, G = t(w), N = G.next(); !N.done; N = G.next()) L = N.value, M = y++, L.variantIds.push(M), I.variantIds.push(M);
   						else
   							for (B = w.concat(v), C = t(B), D = C.next(); !D.done; D = C.next()) J = D.value, J.variantIds = [y++];
   						return P.return(w.concat(v).concat(A).concat(z))
   				}
   			})
   		}

   		function xt(a, b, c, d, e, f, g) {
   			var h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K;
   			return O(function(H) {
   				switch (H.g) {
   					case 1:
   						h = [];
   						for (k = 0; k < c.length; k++) k >= d ? h.push(new Set(c[k].values())) : h.push(new Set);
   						l = t(b);
   						m = l.next();
   					case 2:
   						if (m.done) {
   							H.u(4);
   							break
   						}
   						n = m.value;
   						return E(H, Et(a, n, c, d, f, h, g), 5);
   					case 5:
   						p = H.h;
   						if (!p) throw new T(2, 4, 4037);
   						m = l.next();
   						H.u(2);
   						break;
   					case 4:
   						q = t(h);
   						for (u = q.next(); !u.done; u = q.next())
   							for (v = u.value, w = t(v), A = w.next(); !A.done; A = w.next()) z = A.value, (y = Ft(a, z, c, e, f, h)) && b.push(y);
   						B = t(h);
   						for (u = B.next(); !u.done; u =
   							B.next())
   							for (C = u.value, D = {}, J = t(C), A = J.next(); !A.done; D = {
   									Kd: D.Kd
   								}, A = J.next())
   								if (D.Kd = A.value, !Gt(D.Kd) && (K = b.some(function(I) {
   										return function(G) {
   											return Ht(a, I.Kd, G)
   										}
   									}(D)))) throw new T(2, 4, 4037);
   						return H.return(b)
   				}
   			})
   		}

   		function Et(a, b, c, d, e, f, g) {
   			return O(function(h) {
   				if (1 == h.g) return It(a, c, b, 0 < g), b.matchedStreams ? b.segmentIndex ? E(h, Jt(b, d + g), 2) : h.u(2) : h.return(!1);
   				Kt(b, d, e, f, g);
   				return h.return(!0)
   			})
   		}

   		function Jt(a, b) {
   			var c, d, e, f, g, h, k;
   			return O(function(l) {
   				if (1 == l.g) {
   					c = [];
   					d = a.matchedStreams;
   					e = t(d);
   					for (f = e.next(); !f.done; f = e.next()) g = f.value, c.push(g.createSegmentIndex()), g.trickModeVideo && !g.trickModeVideo.segmentIndex && c.push(g.trickModeVideo.createSegmentIndex());
   					return E(l, Promise.all(c), 2)
   				}
   				if (a.segmentIndex instanceof Nk)
   					for (h = b; h < d.length; h++) k = d[h], k.segmentIndex && a.segmentIndex.h.push(k.segmentIndex);
   				F(l)
   			})
   		}

   		function Ft(a, b, c, d, e, f) {
   			if (Gt(b)) return null;
   			var g = d(b);
   			It(a, c, g);
   			g.createSegmentIndex && (g.createSegmentIndex = function() {
   				return O(function(h) {
   					if (g.segmentIndex) return h.u(0);
   					g.segmentIndex = new Nk;
   					return E(h, Jt(g, 0), 0)
   				})
   			});
   			if (!g.matchedStreams || !g.matchedStreams.length) return null;
   			Kt(g, 0, e, f, 0);
   			return g
   		}

   		function Kt(a, b, c, d, e) {
   			var f = a.matchedStreams;
   			for (b += e; b < f.length; b++) {
   				var g = f[b];
   				c(a, g);
   				var h = !0;
   				"audio" == a.type && 0 == ye(a.language, g.language) && (h = !1);
   				if (h && (d[b - e].delete(g), g.fullMimeTypes))
   					for (g = t(g.fullMimeTypes.values()), h = g.next(); !h.done; h = g.next()) a.fullMimeTypes.add(h.value)
   			}
   		}

   		function yt(a) {
   			var b = Object.assign({}, a);
   			b.originalId = null;
   			b.createSegmentIndex = function() {
   				return Promise.resolve()
   			};
   			b.closeSegmentIndex = function() {
   				b.segmentIndex && (b.segmentIndex.release(), b.segmentIndex = null);
   				if (b.matchedStreams)
   					for (var c = t(b.matchedStreams), d = c.next(); !d.done; d = c.next()) d = d.value, d.segmentIndex && (d.segmentIndex.release(), d.segmentIndex = null)
   			};
   			b.roles = b.roles.slice();
   			b.segmentIndex = null;
   			b.emsgSchemeIdUris = [];
   			b.keyIds = new Set;
   			b.closedCaptions = null;
   			b.trickModeVideo = null;
   			return b
   		}

   		function Ct(a) {
   			a = Object.assign({}, a);
   			a.roles = a.roles.slice();
   			a.keyIds = new Set;
   			a.segments = [];
   			a.variantIds = [];
   			a.closedCaptions = null;
   			return a
   		}

   		function zt(a, b) {
   			function c(g, h) {
   				g || (g = []);
   				h = t(h);
   				for (var k = h.next(); !k.done; k = h.next()) k = k.value, g.includes(k) || g.push(k);
   				return g
   			}
   			a.roles = c(a.roles, b.roles);
   			b.emsgSchemeIdUris && (a.emsgSchemeIdUris = c(a.emsgSchemeIdUris, b.emsgSchemeIdUris));
   			for (var d = t(b.keyIds), e = d.next(); !e.done; e = d.next()) a.keyIds.add(e.value);
   			null == a.originalId ? a.originalId = b.originalId : a.originalId += "," + (b.originalId || "");
   			d = gi(a.drmInfos, b.drmInfos);
   			if (b.drmInfos.length && a.drmInfos.length && !d.length) throw new T(2, 4, 4038);
   			a.drmInfos =
   				d;
   			a.encrypted = a.encrypted || b.encrypted;
   			if (b.closedCaptions)
   				for (a.closedCaptions || (a.closedCaptions = new Map), d = t(b.closedCaptions), e = d.next(); !e.done; e = d.next()) {
   					var f = t(e.value);
   					e = f.next().value;
   					f = f.next().value;
   					a.closedCaptions.set(e, f)
   				}
   			b.trickModeVideo ? (a.trickModeVideo || (a.trickModeVideo = yt(b.trickModeVideo), a.trickModeVideo.createSegmentIndex = function() {
   				a.trickModeVideo.segmentIndex = a.segmentIndex.clone();
   				return Promise.resolve()
   			}), zt(a.trickModeVideo, b.trickModeVideo)) : a.trickModeVideo && zt(a.trickModeVideo,
   				b)
   		}

   		function Dt(a, b) {
   			var c = a.roles;
   			c || (c = []);
   			for (var d = t(b.roles), e = d.next(); !e.done; e = d.next()) e = e.value, c.includes(e) || c.push(e);
   			a.roles = c;
   			c = t(b.keyIds);
   			for (d = c.next(); !d.done; d = c.next()) a.keyIds.add(d.value);
   			a.encrypted = a.encrypted && b.encrypted;
   			a.segments.push.apply(a.segments, x(b.segments));
   			if (b.closedCaptions)
   				for (a.closedCaptions || (a.closedCaptions = new Map), b = t(b.closedCaptions), c = b.next(); !c.done; c = b.next()) d = t(c.value), c = d.next().value, d = d.next().value, a.closedCaptions.set(c, d)
   		}

   		function It(a, b, c, d) {
   			d = (void 0 === d ? 0 : d) ? c.matchedStreams : [];
   			b = t(b);
   			for (var e = b.next(); !e.done; e = b.next()) {
   				e = Lt(a, e.value, c);
   				if (!e) return;
   				d.push(e)
   			}
   			c.matchedStreams = d
   		}

   		function Lt(a, b, c) {
   			var d = {
   					audio: st,
   					video: tt,
   					text: ut,
   					image: vt
   				} [c.type],
   				e = null,
   				f = d(c);
   			if (b.has(f)) e = b.get(f);
   			else {
   				f = {
   					audio: function(l, m) {
   						return Ht(a, l, m)
   					},
   					video: function(l, m) {
   						return Ht(a, l, m)
   					},
   					text: Mt,
   					image: Nt
   				} [c.type];
   				for (var g = {
   						audio: Ot,
   						video: Pt,
   						text: Qt,
   						image: Rt
   					} [c.type], h = t(b.values()), k = h.next(); !k.done; k = h.next()) k = k.value, !f(c, k) || c.fastSwitching != k.fastSwitching || e && !g(c, e, k) || (e = k)
   			}
   			a.s && !Gt(e) && b.delete(d(e));
   			return e
   		}

   		function St(a, b) {
   			function c(d) {
   				if (!Tt.has(d)) {
   					var e = Wd(d);
   					Tt.set(d, e)
   				}
   				return Tt.get(d)
   			}
   			return a.mimeType != b.mimeType ? !1 : c(a.codecs) == c(b.codecs)
   		}
   		r.Lg = function(a) {
   			this.o = a
   		};
   		r.Sg = function(a) {
   			this.s = a
   		};

   		function Ht(a, b, c) {
   			return !St(b, c) && !a.o || b.drmInfos && !fi(b.drmInfos, c.drmInfos) ? !1 : !0
   		}

   		function Mt(a, b) {
   			return b.language ? a.forced !== b.forced || 0 == ye(a.language, b.language) || b.kind != a.kind ? !1 : !0 : !0
   		}

   		function Nt() {
   			return !0
   		}

   		function Ot(a, b, c) {
   			var d = St(a, b),
   				e = St(a, c);
   			if (d && !e) return !1;
   			if (!d && e) return !0;
   			d = ye(a.language, b.language);
   			e = ye(a.language, c.language);
   			if (e > d) return !0;
   			if (e < d) return !1;
   			if (b.label !== c.label) {
   				if (a.label === b.label) return !1;
   				if (a.label === c.label) return !0
   			}
   			if (a.roles.length) return d = b.roles.filter(function(f) {
   				return a.roles.includes(f)
   			}), e = c.roles.filter(function(f) {
   				return a.roles.includes(f)
   			}), e.length > d.length ? !0 : e.length < d.length ? !1 : c.roles.length < b.roles.length;
   			if (!c.roles.length && b.roles.length) return !0;
   			if (c.roles.length && !b.roles.length) return !1;
   			if (!b.primary && c.primary) return !0;
   			if (b.primary && !c.primary) return !1;
   			d = Ut(a.channelsCount, b.channelsCount, c.channelsCount);
   			if (d == Vt) return !0;
   			if (d == Wt) return !1;
   			d = Ut(a.audioSamplingRate, b.audioSamplingRate, c.audioSamplingRate);
   			return d == Vt ? !0 : d == Wt ? !1 : a.bandwidth && Xt(a.bandwidth, b.bandwidth, c.bandwidth) == Vt ? !0 : !1
   		}

   		function Pt(a, b, c) {
   			var d = St(a, b),
   				e = St(a, c);
   			if (d && !e) return !1;
   			if (!d && e) return !0;
   			d = Ut(a.width * a.height, b.width * b.height, c.width * c.height);
   			if (d == Vt) return !0;
   			if (d == Wt) return !1;
   			if (a.frameRate) {
   				d = Ut(a.frameRate, b.frameRate, c.frameRate);
   				if (d == Vt) return !0;
   				if (d == Wt) return !1
   			}
   			return a.bandwidth && Xt(a.bandwidth, b.bandwidth, c.bandwidth) == Vt ? !0 : !1
   		}

   		function Qt(a, b, c) {
   			var d = ye(a.language, b.language),
   				e = ye(a.language, c.language);
   			if (e > d) return !0;
   			if (e < d) return !1;
   			if (!b.primary && c.primary) return !0;
   			if (b.primary && !c.primary) return !1;
   			if (b.label !== c.label) {
   				if (a.label === b.label) return !1;
   				if (a.label === c.label) return !0
   			}
   			if (a.roles.length) {
   				d = b.roles.filter(function(f) {
   					return a.roles.includes(f)
   				});
   				e = c.roles.filter(function(f) {
   					return a.roles.includes(f)
   				});
   				if (e.length > d.length) return !0;
   				if (e.length < d.length) return !1
   			} else {
   				if (!c.roles.length && b.roles.length) return !0;
   				if (c.roles.length && !b.roles.length) return !1
   			}
   			return c.mimeType != a.mimeType || c.codecs != a.codecs || b.mimeType == a.mimeType && b.codecs == a.codecs ? !1 : !0
   		}

   		function Rt(a, b, c) {
   			return Ut(a.width * a.height, b.width * b.height, c.width * c.height) == Vt ? !0 : !1
   		}

   		function Bt(a) {
   			return {
   				id: 0,
   				originalId: "",
   				groupId: null,
   				primary: !1,
   				type: a,
   				mimeType: "",
   				codecs: "",
   				language: "",
   				originalLanguage: null,
   				label: null,
   				width: null,
   				height: null,
   				encrypted: !1,
   				keyIds: new Set,
   				segments: [],
   				variantIds: [],
   				roles: [],
   				forced: !1,
   				channelsCount: null,
   				audioSamplingRate: null,
   				spatialAudio: !1,
   				closedCaptions: null,
   				external: !1,
   				fastSwitching: !1
   			}
   		}

   		function wt(a) {
   			return {
   				id: 0,
   				originalId: "",
   				groupId: null,
   				createSegmentIndex: function() {
   					return Promise.resolve()
   				},
   				segmentIndex: new Kk([]),
   				mimeType: "",
   				codecs: "",
   				encrypted: !1,
   				drmInfos: [],
   				keyIds: new Set,
   				language: "",
   				originalLanguage: null,
   				label: null,
   				type: a,
   				primary: !1,
   				trickModeVideo: null,
   				emsgSchemeIdUris: null,
   				roles: [],
   				forced: !1,
   				channelsCount: null,
   				audioSamplingRate: null,
   				spatialAudio: !1,
   				closedCaptions: null,
   				accessibilityPurpose: null,
   				external: !1,
   				fastSwitching: !1,
   				fullMimeTypes: new Set
   			}
   		}

   		function Ut(a, b, c) {
   			if (b == a && a != c) return Wt;
   			if (c == a && a != b) return Vt;
   			if (b > a) {
   				if (c <= a || c - a < b - a) return Vt;
   				if (c - a > b - a) return Wt
   			} else {
   				if (c > a) return Wt;
   				if (a - c < a - b) return Vt;
   				if (a - c > a - b) return Wt
   			}
   			return Yt
   		}

   		function Xt(a, b, c) {
   			b = Math.abs(a - b);
   			a = Math.abs(a - c);
   			return a < b ? Vt : b < a ? Wt : Yt
   		}

   		function Gt(a) {
   			switch (a.type) {
   				case Ld:
   					return !a.language;
   				case "image":
   					return !a.tilesLayout;
   				default:
   					return !1
   			}
   		}

   		function tt(a) {
   			return JSON.stringify([a.fastSwitching, a.width, a.frameRate, a.codecs, a.mimeType, a.label, a.roles, a.closedCaptions ? Array.from(a.closedCaptions.entries()) : null, a.bandwidth])
   		}

   		function st(a) {
   			return JSON.stringify([a.fastSwitching, a.channelsCount, a.language, a.bandwidth, a.label, a.codecs, a.mimeType, a.roles, a.audioSamplingRate, a.primary])
   		}

   		function ut(a) {
   			return JSON.stringify([a.language, a.label, a.codecs, a.mimeType, a.bandwidth, a.roles])
   		}

   		function vt(a) {
   			return JSON.stringify([a.width, a.codecs, a.mimeType])
   		}
   		S("gowatch.util.PeriodCombiner", qt);
   		qt.prototype.setUseStreamOnce = qt.prototype.Sg;
   		qt.prototype.setAllowMultiTypeVariants = qt.prototype.Lg;
   		qt.prototype.combinePeriods = qt.prototype.Le;
   		qt.prototype.getImageStreams = qt.prototype.Ah;
   		qt.prototype.getTextStreams = qt.prototype.ff;
   		qt.prototype.getVariants = qt.prototype.Sh;
   		var Vt = 1,
   			Yt = 0,
   			Wt = -1,
   			Tt = new Map;

   		function Zt(a, b) {
   			var c = new DOMParser,
   				d = $t.value()(a);
   			a = null;
   			try {
   				a = c.parseFromString(d, "text/xml")
   			} catch (e) {
   				return null
   			}
   			c = a.documentElement;
   			if (!c || c.getElementsByTagName("parsererror").length || c.tagName != b) return null;
   			if (!("createNodeIterator" in document)) return c;
   			for (b = document.createNodeIterator(a, NodeFilter.SHOW_ALL); a = b.nextNode();)
   				if (a instanceof HTMLElement || a instanceof SVGElement) return null;
   			return c
   		}

   		function au(a, b) {
   			try {
   				var c = nd(a);
   				return Zt(c, b)
   			} catch (d) {
   				return null
   			}
   		}
   		var $t = new Jc(function() {
   			if ("undefined" !== typeof trustedTypes) {
   				var a = trustedTypes.createPolicy("gowatch-player#xml", {
   					createHTML: function(b) {
   						return b
   					}
   				});
   				return function(b) {
   					return a.createHTML(b)
   				}
   			}
   			return function(b) {
   				return b
   			}
   		});

   		function bu() {
   			var a = this;
   			this.i = this.g = null;
   			this.A = [];
   			this.l = null;
   			this.S = 1;
   			this.B = [];
   			this.j = {
   				ie: "",
   				type: "",
   				profiles: [],
   				Cb: null,
   				Ca: 0,
   				Aa: null,
   				xd: 0
   			};
   			this.o = new Map;
   			this.s = {};
   			this.M = {};
   			this.m = new qt;
   			this.F = 0;
   			this.N = new Ua(5);
   			this.G = new Lc(function() {
   				cu(a)
   			});
   			this.K = new cg;
   			this.H = null;
   			this.V = [];
   			this.J = Infinity;
   			this.C = !1;
   			this.h = null
   		}
   		r = bu.prototype;
   		r.configure = function(a) {
   			var b = this.i && a.dash.updatePeriod != this.g.dash.updatePeriod && 0 <= a.dash.updatePeriod;
   			this.g = a;
   			b && this.l && this.l.presentationTimeline.T() && this.G.mc();
   			this.h && this.h.configure(this.g);
   			this.m && (this.m.Lg(this.g.dash.multiTypeVariantsAllowed && ob()), this.m.Sg(this.g.dash.useStreamOnceInPeriodFlattening))
   		};
   		r.start = function(a, b) {
   			var c = this,
   				d;
   			return O(function(e) {
   				if (1 == e.g) return c.C = b.isLowLatencyMode(), c.A = [a], c.i = b, E(e, du(c), 2);
   				d = e.h;
   				c.i && eu(c, d);
   				if (!c.i) throw new T(2, 7, 7001);
   				return e.return(c.l)
   			})
   		};
   		r.stop = function() {
   			for (var a = t(Object.values(this.s)), b = a.next(); !b.done; b = a.next()) b = b.value, b.segmentIndex && b.segmentIndex.release();
   			this.m && this.m.release();
   			this.g = this.i = null;
   			this.A = [];
   			this.l = null;
   			this.s = {};
   			this.o.clear();
   			this.j = {
   				ie: "",
   				type: "",
   				profiles: [],
   				Cb: null,
   				Ca: 0,
   				Aa: null,
   				xd: 0
   			};
   			this.m = null;
   			null != this.G && (this.G.stop(), this.G = null);
   			this.h && this.h.destroy();
   			return this.K.destroy()
   		};
   		r.update = function() {
   			var a = this,
   				b;
   			return O(function(c) {
   				if (1 == c.g) return ua(c, 2), E(c, du(a), 4);
   				if (2 != c.g) return wa(c, 0);
   				b = ya(c);
   				if (!a.i || !b) return c.return();
   				a.i.onError(b);
   				F(c)
   			})
   		};
   		r.onExpirationUpdated = function() {};
   		r.onInitialVariantChosen = function(a) {
   			if (this.l && this.l.presentationTimeline.T()) {
   				var b = a.video || a.audio;
   				if (b && b.segmentIndex) {
   					a = this.l.presentationTimeline.Mb();
   					var c = b.segmentIndex.find(a);
   					null != c && (b = b.segmentIndex.get(c)) && (this.F = b.endTime - a, eu(this, 0))
   				}
   			}
   		};
   		r.banLocation = function(a) {
   			this.h && this.h.banLocation(a)
   		};

   		function du(a) {
   			var b, c, d, e, f, g, h, k, l;
   			return O(function(m) {
   				if (1 == m.g) return b = "MPD", c = fu(a), d = a.A, c.length ? (d = c, b = "Patch") : 1 < a.A.length && a.h && (e = pt(a.h, "Location", !0), e.length && (d = e)), f = jg(d, a.g.retryParameters), g = Date.now(), E(m, gu(a, f, 0, {
   					type: 4
   				}), 2);
   				if (3 != m.g) {
   					h = m.h;
   					if (!a.i) return m.return(0);
   					h.uri && h.uri != h.originalUri && !a.A.includes(h.uri) && a.A.unshift(h.uri);
   					return E(m, hu(a, h.data, h.uri, b), 3)
   				}
   				k = Date.now();
   				l = (k - g) / 1E3;
   				a.N.sample(1, l);
   				return m.return(l)
   			})
   		}

   		function hu(a, b, c, d) {
   			var e, f, g, h, k, l, m, n, p, q, u;
   			return O(function(v) {
   				if (1 == v.g) {
   					e = b;
   					f = a.g.dash.manifestPreprocessor;
   					g = im;
   					if (f != g) {
   						qb("manifest.dash.manifestPreprocessor configuration", "Please Use manifest.dash.manifestPreprocessorTXml instead.");
   						h = au(e, d);
   						if (!h) throw new T(2, 4, 4001, c);
   						f(h);
   						e = qd(h.outerHTML)
   					}
   					k = Rg(e, d);
   					if (!k) throw new T(2, 4, 4001, c);
   					l = a.g.dash.manifestPreprocessorTXml;
   					m = jm;
   					l != m && l(k);
   					if ("Patch" === d) return v.return(iu(a, k));
   					if (n = a.g.dash.disableXlinkProcessing) return v.return(ju(a, k, c));
   					p = a.g.dash.xlinkFailGracefully;
   					q = xs(k, a.g.retryParameters, p, c, a.i.networkingEngine);
   					dg(a.K, q);
   					return E(v, q.promise, 2)
   				}
   				u = v.h;
   				return v.return(ju(a, u, c))
   			})
   		}

   		function ju(a, b, c) {
   			var d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H, I, G, N, L, M, P, R, Q, fa, sa, Ia, xa, Ja, Qa, Aa, Wa, ra, Za, ff, Dd, be, od, Ec, ce, de, ee, pd, wi, vg, xi, yi, wg, fe;
   			return O(function(ec) {
   				switch (ec.g) {
   					case 1:
   						a.h && a.h.l.clear();
   						d = [c];
   						e = [];
   						f = new Map;
   						g = Yg(b, "Location");
   						h = t(g);
   						for (k = h.next(); !k.done; k = h.next())
   							if (l = k.value, m = l.attributes.serviceLocation, n = $g(l)) p = Cd(d, [n])[0], m && (a.h ? ot(a.h, "Location", m, p) : f.set(m, p)), e.push(p);
   						a.h ? (q = pt(a.h, "Location", !0), 0 < q.length && (d = a.A = q)) : e.length && (d = a.A = e);
   						a.j.ie =
   							b.attributes.id || "";
   						a.j.xd = eh(b, "publishTime", hh) || 0;
   						a.B = Yg(b, "PatchLocation");
   						u = Promise.resolve();
   						if ((v = bh(b, "ContentSteering")) && a.i) {
   							w = v.attributes.defaultServiceLocation;
   							if (a.h) a.h.i = d, a.h.h = w;
   							else if (a.h = new kt(a.i), a.h.configure(a.g), a.h.setManifestType("DASH"), a.h.i = d, a.h.h = w, A = $g(v))(z = eh(v, "queryBeforeStart", oh, !1)) ? u = lt(a.h, A) : lt(a.h, A);
   							y = t(f.keys());
   							for (B = y.next(); !B.done; B = y.next()) C = B.value, D = f.get(C), ot(a.h, "Location", C, D)
   						}
   						J = Yg(b, "BaseURL");
   						H = !1;
   						if (a.h)
   							for (I = t(J), G = I.next(); !G.done; G =
   								I.next()) N = G.value, L = N.attributes.serviceLocation, M = $g(N), L && M && (ot(a.h, "BaseURL", L, M), H = !0);
   						H && a.h || (P = J.map($g), K = Cd(d, P));
   						R = function() {
   							return a.h && H ? pt(a.h, "BaseURL") : K ? K : []
   						};
   						a.j.Aa = R;
   						Q = 0;
   						J && J.length && (Q = eh(J[0], "availabilityTimeOffset", nh) || 0);
   						a.j.Ca = Q;
   						fa = a.g.dash.ignoreMinBufferTime;
   						sa = 0;
   						fa || (sa = eh(b, "minBufferTime", ih) || 0);
   						a.F = eh(b, "minimumUpdatePeriod", ih, -1);
   						Ia = eh(b, "availabilityStartTime", hh);
   						xa = eh(b, "timeShiftBufferDepth", ih);
   						Ja = a.g.dash.ignoreSuggestedPresentationDelay;
   						Qa = null;
   						Ja || (Qa =
   							eh(b, "suggestedPresentationDelay", ih));
   						Aa = a.g.dash.ignoreMaxSegmentDuration;
   						Wa = null;
   						Aa || (Wa = eh(b, "maxSegmentDuration", ih));
   						ra = b.attributes.type || "static";
   						a.j.type = ra;
   						if (a.l)
   							for (Za = a.l.presentationTimeline, ff = t(Object.values(a.s)), Dd = ff.next(); !Dd.done; Dd = ff.next()) be = Dd.value, be.segmentIndex && be.segmentIndex.Ha(Za.jb());
   						else od = a.g.defaultPresentationDelay || 1.5 * sa, Ec = null != Qa ? Qa : od, Za = new ok(Ia, Ec, a.g.dash.autoCorrectDrift);
   						Za.lc("static" == ra);
   						(ce = Za.T()) && !isNaN(a.g.availabilityWindowOverride) &&
   							(xa = a.g.availabilityWindowOverride);
   						null == xa && (xa = Infinity);
   						Za.te(xa);
   						de = b.attributes.profiles || "";
   						a.j.profiles = de.split(",");
   						ee = {
   							qb: "static" != ra,
   							presentationTimeline: Za,
   							ra: null,
   							ha: null,
   							pa: null,
   							I: null,
   							bandwidth: 0,
   							hf: !1,
   							Ca: Q,
   							Cb: null,
   							profiles: de.split(",")
   						};
   						pd = ku(a, ee, R, b);
   						wi = pd.duration;
   						vg = pd.periods;
   						"static" != ra && pd.lg || Za.Ta(wi || Infinity);
   						a.J && !a.C && (xi = a.i.isAutoLowLatencyMode()) && (a.i.enableLowLatencyMode(), a.C = a.i.isLowLatencyMode());
   						a.C ? Za.Mg(a.J) : a.J && ab("Low-latency DASH live stream detected, but low-latency streaming mode is not enabled in gowatch Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");
   						Za.uf(Wa || 1);
   						return E(ec, u, 2);
   					case 2:
   						return a.C && (sa = 0, yi = null != Qa ? Qa : a.g.defaultPresentationDelay, Za.Lf(yi)), a.l ? E(ec, lu(a, pd.periods, !1), 4) : E(ec, a.m.Le(vg, ee.qb), 6);
   					case 6:
   						a.l = {
   							presentationTimeline: Za,
   							variants: a.m.j,
   							textStreams: a.m.ff(),
   							imageStreams: a.m.i,
   							offlineSessionIds: [],
   							minBufferTime: sa || 0,
   							sequenceMode: a.g.dash.sequenceMode,
   							ignoreManifestTimestampsInSegmentsMode: !1,
   							type: "DASH",
   							serviceDescription: mu(b),
   							nextUrl: nu(b)
   						};
   						if (!Za.Xg()) {
   							ec.u(7);
   							break
   						}
   						wg = Yg(b, "UTCTiming");
   						return E(ec, ou(a, R, wg), 8);
   					case 8:
   						fe = ec.h;
   						if (!a.i) return ec.return();
   						Za.Ng(fe);
   					case 7:
   						Za.ce();
   					case 4:
   						a.i.makeTextStreamsForClosedCaptions(a.l), F(ec)
   				}
   			})
   		}

   		function lu(a, b, c) {
   			var d;
   			return O(function(e) {
   				if (1 == e.g) return E(e, a.m.Le(b, !0, c), 2);
   				a.l.variants = a.m.j;
   				d = a.m.ff();
   				0 < d.length && (a.l.textStreams = d);
   				a.l.imageStreams = a.m.i;
   				a.i.filter(a.l);
   				F(e)
   			})
   		}

   		function iu(a, b) {
   			var c, d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H, I;
   			return O(function(G) {
   				if (1 == G.g) {
   					c = b.attributes.mpdId;
   					d = eh(b, "originalPublishTime", hh);
   					if (!c || c !== a.j.ie || d !== a.j.xd) throw a.B = [], new T(1, 4, 4052);
   					e = [];
   					f = [];
   					g = new Set;
   					h = t(Xg(b));
   					for (k = h.next(); !k.done; k = h.next())
   						if (l = k.value, m = qh(l.attributes.sel || ""), n = m[m.length - 1], p = $g(l) || "", "MPD" === n.name)
   							if ("mediaPresentationDuration" === n.Kb) {
   								q = $g(l) || "";
   								var N = ih(q);
   								if (null != N) {
   									a.j.Cb = N;
   									for (var L = t(a.o.values()), M = L.next(); !M.done; M = L.next()) M.value.Cb =
   										N
   								}
   							} else if ("type" === n.Kb) {
   						a.l.presentationTimeline.lc("static" == p);
   						a.j.type = p;
   						N = t(a.o.values());
   						for (L = N.next(); !L.done; L = N.next()) L.value.qb = "dynamic" == p;
   						"static" == p && (a.F = -1)
   					} else "publishTime" === n.Kb ? a.j.xd = hh(p) || 0 : null === n.Kb && "add" === l.tagName && f.push(l);
   					else if ("PatchLocation" === n.name) rh(a.B, l);
   					else if ("Period" === n.name)
   						if ("add" === l.tagName) f.push(l);
   						else {
   							if ("remove" === l.tagName && n.id)
   								for (N = n.id, L = t(a.o.keys()), M = L.next(); !M.done; M = L.next())
   									if (M = M.value, M.startsWith(N)) {
   										var P = a.o.get(M);
   										us(P,
   											Ws, "SegmentTimeline").children = [];
   										pu(a, M);
   										a.o.delete(M)
   									}
   						}
   					else if ("SegmentTemplate" === n.name) {
   						L = qh(l.attributes.sel || "");
   						N = L[L.length - 1];
   						if (N.Kb) {
   							L = qu(a, L);
   							M = $g(l) || "";
   							P = t(L);
   							for (var R = P.next(); !R.done; R = P.next()) R = a.o.get(R.value), sh(R.I.Pb, l.tagName, N.Kb, M);
   							N = L
   						} else N = [];
   						u = N;
   						v = t(u);
   						for (w = v.next(); !w.done; w = v.next()) A = w.value, g.add(A)
   					} else if ("SegmentTimeline" === n.name || "S" === n.name) {
   						N = qh(l.attributes.sel || "");
   						N = qu(a, N);
   						L = t(N);
   						for (M = L.next(); !M.done; M = L.next()) M = a.o.get(M.value), M = us(M, Ws, "SegmentTimeline"),
   							P = Yg(M, "S"), rh(P, l), M.children = P;
   						z = N;
   						y = t(z);
   						for (w = y.next(); !w.done; w = y.next()) B = w.value, g.add(B)
   					}
   					C = t(g);
   					for (w = C.next(); !w.done; w = C.next()) D = w.value, pu(a, D);
   					J = t(f);
   					for (K = J.next(); !K.done; K = J.next()) H = K.value, e.push.apply(e, x(ku(a, {
   						qb: "dynamic" == a.j.type,
   						presentationTimeline: a.l.presentationTimeline,
   						ra: null,
   						ha: null,
   						pa: null,
   						I: null,
   						bandwidth: 0,
   						hf: !1,
   						Ca: a.j.Ca,
   						profiles: a.j.profiles,
   						Cb: a.j.Cb
   					}, a.j.Aa, H).periods));
   					return e.length ? E(G, lu(a, e, !0), 2) : G.u(2)
   				}
   				"static" == a.j.type && (I = a.j.Cb, a.l.presentationTimeline.Ta(I ||
   					Infinity));
   				F(G)
   			})
   		}

   		function qu(a, b) {
   			var c = "",
   				d = "",
   				e = "";
   			b = t(b);
   			for (var f = b.next(); !f.done; f = b.next()) f = f.value, "Period" === f.name ? c = f.id : "AdaptationSet" === f.name ? d = f.id : "Representation" === f.name && (e = f.id);
   			b = [];
   			if (e) b.push(c + "," + e);
   			else
   				for (a = t(a.o.values()), e = a.next(); !e.done; e = a.next()) e = e.value, e.ra.id === c && e.pa.id === d && e.I.id && b.push(c + "," + e.I.id);
   			return b
   		}

   		function pu(a, b) {
   			var c = a.o.get(b),
   				d = a.s[b];
   			d.segmentIndex && d.segmentIndex.Ha(a.l.presentationTimeline.jb());
   			try {
   				var e = Vs(c, function(f, g, h, k) {
   					return ru(a, f, g, h, k)
   				}, a.s, !0, a.g.dash.initialSegmentLimit, a.M, c.I.aesKey, null, !0);
   				d.createSegmentIndex = function() {
   					var f;
   					return O(function(g) {
   						if (1 == g.g) {
   							if (d.segmentIndex) return g.u(0);
   							f = d;
   							return E(g, e.Xb(), 3)
   						}
   						f.segmentIndex = g.h;
   						F(g)
   					})
   				}
   			} catch (f) {
   				if (b = c.I.contentType, b != Ld && "application" != b && "image" != b || 4002 != f.code) throw f;
   			}
   		}

   		function mu(a) {
   			var b = bh(a, "ServiceDescription");
   			if (!b) return null;
   			a = bh(b, "Latency");
   			b = bh(b, "PlaybackRate");
   			if (!a && !b) return null;
   			var c = {};
   			a && ("target" in a.attributes && (c.targetLatency = parseInt(a.attributes.target, 10) / 1E3), "max" in a.attributes && (c.maxLatency = parseInt(a.attributes.max, 10) / 1E3), "min" in a.attributes && (c.minLatency = parseInt(a.attributes.min, 10) / 1E3));
   			b && ("max" in b.attributes && (c.maxPlaybackRate = parseFloat(b.attributes.max)), "min" in b.attributes && (c.minPlaybackRate = parseFloat(b.attributes.min)));
   			return c
   		}

   		function nu(a) {
   			a = Yg(a, "SupplementalProperty");
   			if (!a.length) return null;
   			a = t(a);
   			for (var b = a.next(); !b.done; b = a.next())
   				if (b = b.value, "urn:mpeg:dash:chaining:2016" == b.attributes.schemeIdUri) return b.attributes.value;
   			return null
   		}

   		function ku(a, b, c, d) {
   			var e = b.Cb;
   			e || (e = eh(d, "mediaPresentationDuration", ih), a.j.Cb = e);
   			var f = [],
   				g = 0;
   			d = Yg(d, "Period");
   			for (var h = 0; h < d.length; h++) {
   				var k = d[h],
   					l = d[h + 1],
   					m = eh(k, "start", ih, g),
   					n = k.attributes.id,
   					p = eh(k, "duration", ih),
   					q = null;
   				if (l) {
   					var u = eh(l, "start", ih);
   					null != u && (q = u - m)
   				} else null != e && (q = e - m);
   				null == q && (q = p);
   				if (!(null !== a.H && null !== n && null !== m && m < a.H) || a.V.includes(n) || h + 1 == d.length) {
   					null !== m && (null === a.H || m > a.H) && (a.H = m);
   					g = Eu(a, b, c, {
   						start: m,
   						duration: q,
   						node: k,
   						sd: null == q || !l
   					});
   					f.push(g);
   					b.ra.id &&
   						q && (a.M[b.ra.id] = q);
   					if (null == q) {
   						g = null;
   						break
   					}
   					g = m + q
   				}
   			}
   			a.V = f.map(function(v) {
   				return v.id
   			});
   			return null != e ? {
   				periods: f,
   				duration: e,
   				lg: !1
   			} : {
   				periods: f,
   				duration: g,
   				lg: !0
   			}
   		}

   		function Eu(a, b, c, d) {
   			b.ra = Fu(a, d.node, null, c);
   			b.ha = d;
   			b.ra.Ca = b.Ca;
   			b.ra.id || (b.ra.id = "__gowatch_period_" + d.start);
   			var e = Yg(d.node, "EventStream");
   			c = b.presentationTimeline.jb();
   			e = t(e);
   			for (var f = e.next(); !f.done; f = e.next()) Gu(a, d.start, d.duration, f.value, c);
   			c = Yg(d.node, "AdaptationSet").map(function(m) {
   				return Hu(a, b, m)
   			}).filter(re);
   			if (b.qb) {
   				d = [];
   				e = t(c);
   				for (f = e.next(); !f.done; f = e.next()) {
   					f = t(f.value.zi);
   					for (var g = f.next(); !g.done; g = f.next()) d.push(g.value)
   				}
   				if (d.length != (new Set(d)).size) throw new T(2, 4, 4018);
   			}
   			d = c.filter(function(m) {
   				return !m.Uf
   			});
   			c = c.filter(function(m) {
   				return m.Uf
   			});
   			c = t(c);
   			for (e = c.next(); !e.done; e = c.next()) {
   				e = e.value;
   				f = e.Uf.split(" ");
   				g = t(d);
   				for (var h = g.next(); !h.done; h = g.next()) {
   					var k = h.value;
   					if (f.includes(k.id)) {
   						h = {};
   						k = t(k.streams);
   						for (var l = k.next(); !l.done; h = {
   								Ld: h.Ld
   							}, l = k.next()) h.Ld = l.value, h.Ld.trickModeVideo = e.streams.find(function(m) {
   							return function(n) {
   								return Wd(m.Ld.codecs) == Wd(n.codecs)
   							}
   						}(h))
   					}
   				}
   			}
   			c = Iu(a.g.disableAudio, d, "audio");
   			e = Iu(a.g.disableVideo, d, "video");
   			f = Iu(a.g.disableText,
   				d, Ld);
   			d = Iu(a.g.disableThumbnails, d, "image");
   			if (0 === e.length && 0 === c.length) throw new T(2, 4, 4004);
   			return {
   				id: b.ra.id,
   				audioStreams: c,
   				videoStreams: e,
   				textStreams: f,
   				imageStreams: d
   			}
   		}

   		function Iu(a, b, c) {
   			return a || !b.length ? [] : b.reduce(function(d, e) {
   				if (e.contentType != c) return d;
   				d.push.apply(d, x(e.streams));
   				return d
   			}, [])
   		}

   		function Hu(a, b, c) {
   			function d(G) {
   				switch (G) {
   					case 1:
   					case 5:
   					case 6:
   					case 7:
   						return "srgb";
   					case 9:
   						return "rec2020";
   					case 11:
   					case 12:
   						return "p3"
   				}
   			}

   			function e(G) {
   				switch (G) {
   					case 1:
   					case 6:
   					case 13:
   					case 14:
   					case 15:
   						return "SDR";
   					case 16:
   						return "PQ";
   					case 18:
   						return "HLG"
   				}
   			}
   			b.pa = Fu(a, c, b.ra, null);
   			var f = !1,
   				g = Yg(c, "Role"),
   				h = g.map(function(G) {
   					return G.attributes.value
   				}).filter(re),
   				k = void 0,
   				l = b.pa.contentType == Ld;
   			l && (k = "subtitle");
   			g = t(g);
   			for (var m = g.next(); !m.done; m = g.next()) {
   				m = m.value;
   				var n = m.attributes.schemeIdUri;
   				if (null ==
   					n || "urn:mpeg:dash:role:2011" == n) switch (m = m.attributes.value, m) {
   					case "main":
   						f = !0;
   						break;
   					case "caption":
   					case "subtitle":
   						k = m
   				}
   			}
   			var p, q;
   			n = Yg(c, "EssentialProperty");
   			g = null;
   			var u = !1;
   			m = !1;
   			n = t(n);
   			for (var v = n.next(); !v.done; v = n.next()) {
   				v = v.value;
   				var w = v.attributes.schemeIdUri;
   				"http://dashif.org/guidelines/trickmode" == w ? g = v.attributes.value : "urn:mpeg:mpegB:cicp:TransferCharacteristics" == w ? p = e(parseInt(v.attributes.value, 10)) : "urn:mpeg:mpegB:cicp:ColourPrimaries" == w ? q = d(parseInt(v.attributes.value, 10)) : "urn:mpeg:mpegB:cicp:MatrixCoefficients" !=
   					w && ("urn:mpeg:dash:ssr:2023" == w && a.g.dash.enableFastSwitching ? u = !0 : m = !0)
   			}
   			var A = null;
   			n = Yg(c, "SupplementalProperty");
   			n = t(n);
   			for (v = n.next(); !v.done; v = n.next()) v = v.value, w = v.attributes.schemeIdUri, "http://dashif.org/guidelines/last-segment-number" == w ? A = parseInt(v.attributes.value, 10) - 1 : "urn:mpeg:mpegB:cicp:TransferCharacteristics" == w ? p = e(parseInt(v.attributes.value, 10)) : "urn:mpeg:mpegB:cicp:ColourPrimaries" == w && (q = d(parseInt(v.attributes.value, 10)));
   			n = Yg(c, "Accessibility");
   			var z = new Map,
   				y;
   			n = t(n);
   			for (v =
   				n.next(); !v.done; v = n.next())
   				if (w = v.value, v = w.attributes.schemeIdUri, w = w.attributes.value, "urn:scte:dash:cc:cea-608:2015" == v)
   					if (v = 1, null != w) {
   						w = w.split(";");
   						for (var B = t(w), C = B.next(); !C.done; C = B.next()) {
   							var D = C.value,
   								J = C = void 0;
   							D.includes("=") ? (D = D.split("="), C = D[0].startsWith("CC") ? D[0] : "CC" + D[0], J = D[1] || "und") : (C = "CC" + v, 2 == w.length ? v += 2 : v++, J = D);
   							z.set(C, ue(J))
   						}
   					} else z.set("CC1", "und");
   			else if ("urn:scte:dash:cc:cea-708:2015" == v)
   				if (v = 1, null != w)
   					for (w = t(w.split(";")), C = w.next(); !C.done; C = w.next()) C = C.value,
   						D = B = void 0, C.includes("=") ? (C = C.split("="), B = "svc" + C[0], D = C[1].split(",")[0].split(":").pop()) : (B = "svc" + v, v++, D = C), z.set(B, ue(D));
   				else z.set("svc1", "und");
   			else "urn:mpeg:dash:role:2011" == v ? null != w && (h.push(w), "captions" == w && (k = "caption")) : "urn:tva:metadata:cs:AudioPurposeCS:2007" == v && ("1" == w ? y = "visually impaired" : "2" == w && (y = "hard of hearing"));
   			if (m) return null;
   			m = Yg(c, "ContentProtection");
   			var K = gs(m, a.g.dash.ignoreDrmInfo, a.g.dash.keySystemsByURI),
   				H = ue(b.pa.language || "und"),
   				I = c.attributes.label;
   			(m =
   				Yg(c, "Label")) && m.length && (m = Zg(m[0])) && (I = m);
   			m = Yg(c, "Representation");
   			c = m.map(function(G) {
   				if (G = Ju(a, b, K, k, H, I, f, h, z, G, y, A)) G.hdr = G.hdr || p, G.colorGamut = G.colorGamut || q, G.fastSwitching = u;
   				return G
   			}).filter(function(G) {
   				return !!G
   			});
   			if (0 == c.length) {
   				g = "image" == b.pa.contentType;
   				if (a.g.dash.ignoreEmptyAdaptationSet || l || g) return null;
   				throw new T(2, 4, 4003);
   			}
   			if (!b.pa.contentType || "application" == b.pa.contentType)
   				for (b.pa.contentType = Ku(c[0].mimeType, c[0].codecs), l = t(c), v = l.next(); !v.done; v = l.next()) v.value.type =
   					b.pa.contentType;
   			l = b.pa.id || "__fake__" + a.S++;
   			n = t(c);
   			for (v = n.next(); !v.done; v = n.next()) {
   				v = v.value;
   				w = t(K.drmInfos);
   				for (B = w.next(); !B.done; B = w.next()) B = B.value, B.keyIds = B.keyIds && v.keyIds ? new Set([].concat(x(B.keyIds), x(v.keyIds))) : B.keyIds || v.keyIds;
   				a.g.dash.enableAudioGroups && (v.groupId = l)
   			}
   			m = m.map(function(G) {
   				return G.attributes.id
   			}).filter(re);
   			return {
   				id: l,
   				contentType: b.pa.contentType,
   				language: H,
   				Rj: f,
   				streams: c,
   				drmInfos: K.drmInfos,
   				Uf: g,
   				zi: m
   			}
   		}

   		function Ju(a, b, c, d, e, f, g, h, k, l, m, n) {
   			b.I = Fu(a, l, b.pa, null);
   			var p = b.I.id;
   			a.J = Math.min(a.J, b.I.Ca);
   			if (!Lu(b.I)) return null;
   			var q = b.ha.start;
   			b.bandwidth = eh(l, "bandwidth", lh) || 0;
   			var u = b.I.contentType,
   				v = u == Ld || "application" == u;
   			u = "image" == u;
   			try {
   				var w = void 0;
   				if (c.He) {
   					var A = b.I.Aa,
   						z = Cd(A(), [c.He.ei]),
   						y = jg(z, a.g.retryParameters);
   					w = {
   						bitsKey: 128,
   						blockCipherMode: "CBC",
   						iv: c.He.iv,
   						firstMediaSequenceNumber: 0,
   						fetchKey: function() {
   							var I, G, N;
   							return O(function(L) {
   								if (1 == L.g) return E(L, gu(a, y, 6), 2);
   								if (3 != L.g) {
   									I = L.h;
   									if (!I.data ||
   										16 != I.data.byteLength) throw new T(2, 4, 4049);
   									G = {
   										name: "AES-CBC"
   									};
   									N = w;
   									return E(L, window.crypto.subtle.importKey("raw", I.data, G, !0, ["decrypt"]), 3)
   								}
   								N.cryptoKey = L.h;
   								w.fetchKey = void 0;
   								F(L)
   							})
   						}
   					}
   				}
   				b.I.aesKey = w;
   				A = function(I, G, N, L) {
   					return ru(a, I, G, N, L)
   				};
   				if (b.I.Jc) var B = Ks(b, A, w);
   				else if (b.I.Gb) B = Qs(b, a.s, w);
   				else if (b.I.Pb) B = Vs(b, A, a.s, !!a.l, a.g.dash.initialSegmentLimit, a.M, w, n, !1);
   				else {
   					var C = b.ha.duration || 0,
   						D = b.I.Aa;
   					B = {
   						Xb: function() {
   							var I = Mk(q, C, D());
   							I.wc(function(G) {
   								G.mimeType = b.I.mimeType;
   								G.codecs = b.I.codecs
   							});
   							return Promise.resolve(I)
   						}
   					}
   				}
   			} catch (I) {
   				if ((v || u) && 4002 == I.code) return null;
   				throw I;
   			}
   			n = Yg(l, "ContentProtection");
   			n = ks(n, c, a.g.dash.ignoreDrmInfo, a.g.dash.keySystemsByURI);
   			n = new Set(n ? [n] : []);
   			A = !1;
   			Yg(l, "SupplementalProperty").some(function(I) {
   				return "tag:dolby.com,2018:dash:EC3_ExtensionType:2018" == I.attributes.schemeIdUri && "JOC" == I.attributes.value
   			}) && (A = !0);
   			z = !1;
   			v && (z = h.includes("forced_subtitle") || h.includes("forced-subtitle"));
   			var J;
   			if (u && ((l = Yg(l, "EssentialProperty").find(function(I) {
   					return ["http://dashif.org/thumbnail_tile",
   						"http://dashif.org/guidelines/thumbnail_tile"
   					].includes(I.attributes.schemeIdUri)
   				})) && (J = l.attributes.value), !J)) return null;
   			var K;
   			l = b.I.codecs;
   			b.profiles.includes("http://dashif.org/guidelines/dash-if-uhd#hevc-hdr-pq10") && (l.includes("hvc1.2.4.L153.B0") || l.includes("hev1.2.4.L153.B0")) && (K = "PQ");
   			v = b.I.id ? b.ra.id + "," + b.I.id : "";
   			a.B.length && p && a.o.set(b.ra.id + "," + p, Mu(b));
   			var H = v && a.s[v] ? a.s[v] : {
   				id: a.S++,
   				originalId: b.I.id,
   				groupId: null,
   				createSegmentIndex: function() {
   					return Promise.resolve()
   				},
   				closeSegmentIndex: function() {
   					H.segmentIndex &&
   						(H.segmentIndex.release(), H.segmentIndex = null)
   				},
   				segmentIndex: null,
   				mimeType: b.I.mimeType,
   				codecs: l,
   				frameRate: b.I.frameRate,
   				pixelAspectRatio: b.I.pixelAspectRatio,
   				bandwidth: b.bandwidth,
   				width: b.I.width,
   				height: b.I.height,
   				kind: d,
   				encrypted: 0 < c.drmInfos.length,
   				drmInfos: c.drmInfos,
   				keyIds: n,
   				language: e,
   				originalLanguage: b.pa.language,
   				label: f,
   				type: b.pa.contentType,
   				primary: g,
   				trickModeVideo: null,
   				emsgSchemeIdUris: b.I.emsgSchemeIdUris,
   				roles: h,
   				forced: z,
   				channelsCount: b.I.Ec,
   				audioSamplingRate: b.I.audioSamplingRate,
   				spatialAudio: A,
   				closedCaptions: k,
   				hdr: K,
   				colorGamut: void 0,
   				videoLayout: void 0,
   				tilesLayout: J,
   				accessibilityPurpose: m,
   				external: !1,
   				fastSwitching: !1,
   				fullMimeTypes: new Set([Pd(b.I.mimeType, b.I.codecs)])
   			};
   			H.createSegmentIndex = function() {
   				var I;
   				return O(function(G) {
   					if (1 == G.g) {
   						if (H.segmentIndex) return G.u(0);
   						I = H;
   						return E(G, B.Xb(), 3)
   					}
   					I.segmentIndex = G.h;
   					F(G)
   				})
   			};
   			v && b.qb && !a.s[v] && (a.s[v] = H);
   			return H
   		}

   		function Mu(a) {
   			for (var b = {}, c = t(Object.keys(a)), d = c.next(); !d.done; d = c.next())
   				if (d = d.value, ["period", "adaptationSet", "representation"].includes(d)) {
   					var e = a[d];
   					b[d] = {
   						Jc: null,
   						Gb: null,
   						Pb: e.Pb,
   						Aa: e.Aa,
   						width: e.width,
   						height: e.height,
   						contentType: e.contentType,
   						mimeType: e.mimeType,
   						language: e.language,
   						codecs: e.codecs,
   						frameRate: e.frameRate,
   						pixelAspectRatio: e.pixelAspectRatio,
   						emsgSchemeIdUris: e.emsgSchemeIdUris,
   						id: e.id,
   						Ec: e.Ec,
   						audioSamplingRate: e.audioSamplingRate,
   						Ca: e.Ca,
   						Bc: e.Bc
   					}
   				} else "periodInfo" == d ? (e = a[d],
   					b[d] = {
   						start: e.start,
   						duration: e.duration,
   						node: null,
   						sd: e.sd
   					}) : b[d] = a[d];
   			return b
   		}

   		function cu(a) {
   			var b, c;
   			O(function(d) {
   				switch (d.g) {
   					case 1:
   						return b = 0, ua(d, 2), E(d, du(a), 4);
   					case 4:
   						b = d.h;
   						wa(d, 3);
   						break;
   					case 2:
   						if (c = ya(d), a.i) {
   							if (a.g.raiseFatalErrorOnManifestUpdateRequestFailure) return a.i.onError(c), d.return();
   							c.severity = 1;
   							a.i.onError(c)
   						}
   					case 3:
   						if (!a.i) return d.return();
   						a.i.onManifestUpdated();
   						eu(a, b);
   						F(d)
   				}
   			})
   		}

   		function eu(a, b) {
   			if (!(0 > a.F)) {
   				var c = a.F;
   				0 <= a.g.dash.updatePeriod && (c = a.g.dash.updatePeriod);
   				a.G.W(Math.max(c - b, Va(a.N)))
   			}
   		}

   		function Fu(a, b, c, d) {
   			c = c || {
   				contentType: "",
   				mimeType: "",
   				codecs: "",
   				emsgSchemeIdUris: [],
   				frameRate: void 0,
   				pixelAspectRatio: void 0,
   				Ec: null,
   				audioSamplingRate: null,
   				Ca: 0,
   				Hf: 0
   			};
   			d = d || c.Aa;
   			var e = b.attributes.id,
   				f = Yg(b, "BaseURL"),
   				g, h = !1;
   			if (a.h)
   				for (var k = t(f), l = k.next(); !l.done; l = k.next()) {
   					var m = l.value;
   					l = m.attributes.serviceLocation;
   					m = $g(m);
   					l && m && (ot(a.h, e, l, m), h = !0)
   				}
   			h && a.h || (g = f.map($g));
   			k = b.attributes.contentType || c.contentType;
   			l = b.attributes.mimeType || c.mimeType;
   			m = [b.attributes.codecs || c.codecs];
   			var n = fh(b,
   				"urn:scte:dash:scte214-extensions", "supplementalCodecs");
   			n && m.push(n);
   			m = ht(m).join(",");
   			n = eh(b, "frameRate", ph) || c.frameRate;
   			var p = b.attributes.sar || c.pixelAspectRatio,
   				q = Nu(Yg(b, "InbandEventStream"), c.emsgSchemeIdUris),
   				u = Yg(b, "AudioChannelConfiguration");
   			u = Ou(u) || c.Ec;
   			var v = eh(b, "audioSamplingRate", mh) || c.audioSamplingRate;
   			k || (k = Ku(l, m));
   			var w = bh(b, "SegmentBase"),
   				A = bh(b, "SegmentTemplate"),
   				z = w ? eh(w, "availabilityTimeOffset", nh) || 0 : 0,
   				y = A ? eh(A, "availabilityTimeOffset", nh) || 0 : 0,
   				B = f && f.length ? eh(f[0], "availabilityTimeOffset",
   					nh) || 0 : 0;
   			z = c.Ca + B + z + y;
   			y = null;
   			(B = bh(b, "SegmentSequenceProperties")) && (B = bh(B, "SAP")) && (y = eh(B, "cadence", kh));
   			return {
   				Aa: function() {
   					return Cd(d(), f.length ? a.h && h ? pt(a.h, e) : g ? g : [] : [])
   				},
   				Jc: w || c.Jc,
   				Gb: bh(b, "SegmentList") || c.Gb,
   				Pb: A || c.Pb,
   				width: eh(b, "width", mh) || c.width,
   				height: eh(b, "height", mh) || c.height,
   				contentType: k,
   				mimeType: l,
   				codecs: m,
   				frameRate: n,
   				pixelAspectRatio: p,
   				emsgSchemeIdUris: q,
   				id: e,
   				language: b.attributes.lang,
   				Ec: u,
   				audioSamplingRate: v,
   				Ca: z,
   				Bc: null,
   				Hf: y || c.Hf
   			}
   		}

   		function Nu(a, b) {
   			b = b.slice();
   			a = t(a);
   			for (var c = a.next(); !c.done; c = a.next()) c = c.value.attributes.schemeIdUri, b.includes(c) || b.push(c);
   			return b
   		}

   		function Ou(a) {
   			a = t(a);
   			for (var b = a.next(); !b.done; b = a.next()) {
   				var c = b.value;
   				if (b = c.attributes.schemeIdUri)
   					if (c = c.attributes.value) switch (b) {
   						case "urn:mpeg:dash:outputChannelPositionList:2012":
   							return c.trim().split(/ +/).length;
   						case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":
   						case "urn:dts:dash:audio_channel_configuration:2012":
   							b = parseInt(c, 10);
   							if (!b) continue;
   							return b;
   						case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":
   						case "urn:dolby:dash:audio_channel_configuration:2011":
   							b =
   								parseInt(c, 16);
   							if (!b) continue;
   							for (a = 0; b;) b & 1 && ++a, b >>= 1;
   							return a;
   						case "urn:mpeg:mpegB:cicp:ChannelConfiguration":
   							if (b = [0, 1, 2, 3, 4, 5, 6, 8, 2, 3, 4, 7, 8, 24, 8, 12, 10, 12, 14, 12, 14], (c = parseInt(c, 10)) && 0 < c && c < b.length) return b[c]
   					}
   			}
   			return null
   		}

   		function Lu(a) {
   			var b = a.Jc ? 1 : 0;
   			b += a.Gb ? 1 : 0;
   			b += a.Pb ? 1 : 0;
   			if (0 == b) return a.contentType == Ld || "application" == a.contentType ? !0 : !1;
   			1 != b && (a.Jc && (a.Gb = null), a.Pb = null);
   			return !0
   		}

   		function Pu(a, b, c, d) {
   			var e, f, g, h, k, l, m;
   			return O(function(n) {
   				if (1 == n.g) return e = [ud(c)], f = Cd(b(), e), g = jg(f, a.g.retryParameters), g.method = d, h = a.i.networkingEngine.request(4, g), dg(a.K, h), E(n, h.promise, 2);
   				k = n.h;
   				if ("HEAD" == d) {
   					if (!k.headers || !k.headers.date) return n.return(0);
   					l = k.headers.date
   				} else l = kd(k.data);
   				m = Date.parse(l);
   				return isNaN(m) ? n.return(0) : n.return(m - Date.now())
   			})
   		}

   		function ou(a, b, c) {
   			var d, e, f, g, h, k, l, m;
   			return O(function(n) {
   				switch (n.g) {
   					case 1:
   						d = c.map(function(p) {
   							return {
   								scheme: p.attributes.schemeIdUri,
   								value: p.attributes.value
   							}
   						}), e = a.g.dash.clockSyncUri, !d.length && e && d.push({
   							scheme: "urn:mpeg:dash:utc:http-head:2014",
   							value: e
   						}), f = t(d), g = f.next();
   					case 2:
   						if (g.done) {
   							n.u(4);
   							break
   						}
   						h = g.value;
   						ua(n, 5);
   						k = h.scheme;
   						l = h.value;
   						switch (k) {
   							case "urn:mpeg:dash:utc:http-head:2014":
   							case "urn:mpeg:dash:utc:http-head:2012":
   								return n.u(7);
   							case "urn:mpeg:dash:utc:http-xsdate:2014":
   							case "urn:mpeg:dash:utc:http-iso:2014":
   							case "urn:mpeg:dash:utc:http-xsdate:2012":
   							case "urn:mpeg:dash:utc:http-iso:2012":
   								return n.u(8);
   							case "urn:mpeg:dash:utc:direct:2014":
   							case "urn:mpeg:dash:utc:direct:2012":
   								return m = Date.parse(l), n.return(isNaN(m) ? 0 : m - Date.now());
   							case "urn:mpeg:dash:utc:http-ntp:2014":
   							case "urn:mpeg:dash:utc:ntp:2014":
   							case "urn:mpeg:dash:utc:sntp:2014":
   								ab("NTP UTCTiming scheme is not supported");
   								break;
   							default:
   								ab("Unrecognized scheme in UTCTiming element", k)
   						}
   						n.u(9);
   						break;
   					case 7:
   						return E(n, Pu(a, b, l, "HEAD"), 10);
   					case 10:
   						return n.return(n.h);
   					case 8:
   						return E(n, Pu(a, b, l, "GET"), 11);
   					case 11:
   						return n.return(n.h);
   					case 9:
   						wa(n,
   							3);
   						break;
   					case 5:
   						ya(n);
   					case 3:
   						g = f.next();
   						n.u(2);
   						break;
   					case 4:
   						return ab("A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!"), n.return(0)
   				}
   			})
   		}

   		function Gu(a, b, c, d, e) {
   			var f = d.attributes.schemeIdUri || "",
   				g = d.attributes.value || "",
   				h = eh(d, "timescale", mh) || 1;
   			d = t(Yg(d, "Event"));
   			for (var k = d.next(); !k.done; k = d.next()) {
   				k = k.value;
   				var l = eh(k, "presentationTime", mh) || 0,
   					m = eh(k, "duration", mh) || 0;
   				l = l / h + b;
   				m = l + m / h;
   				null != c && (l = Math.min(l, b + c), m = Math.min(m, b + c));
   				m < e || (k = {
   					schemeIdUri: f,
   					value: g,
   					startTime: l,
   					endTime: m,
   					id: k.attributes.id || "",
   					eventElement: th(k),
   					eventNode: k
   				}, a.i.onTimelineRegionAdded(k))
   			}
   		}

   		function ru(a, b, c, d, e) {
   			var f, g, h, k;
   			return O(function(l) {
   				if (1 == l.g) return f = pg, g = e ? 0 : 1, h = ol(b, c, d, a.g.retryParameters), E(l, gu(a, h, f, {
   					type: g
   				}), 2);
   				k = l.h;
   				return l.return(k.data)
   			})
   		}

   		function Ku(a, b) {
   			b = Pd(a, b);
   			return he(b) ? Ld : a.split("/")[0]
   		}

   		function gu(a, b, c, d) {
   			b = a.i.networkingEngine.request(c, b, d);
   			dg(a.K, b);
   			return b.promise
   		}

   		function fu(a) {
   			var b = a.j.xd;
   			if (!a.j.ie || !b || !a.B.length) return [];
   			var c = Date.now() / 1E3,
   				d = a.B.filter(function(e) {
   					e = mh(e.attributes.ttl);
   					return !e || b + e > c
   				}).map($g).filter(re);
   			return d.length ? Cd(a.A, d) : []
   		}
   		S("gowatch.dash.DashParser", bu);
   		ri["application/dash+xml"] = function() {
   			return new bu
   		};
   		ri["video/vnd.mpeg.dash.mpd"] = function() {
   			return new bu
   		};

   		function Qu() {}
   		S("gowatch.dependencies", Qu);
   		Qu.has = function(a) {
   			return Ru.has(a)
   		};
   		Qu.add = function(a, b) {
   			if (!Su[a]) throw Error(a + " is not supported");
   			a == Tu ? qb("mux.js", "mux.js is no longer used in gowatch Player.") : Ru.set(a, function() {
   				return b
   			})
   		};
   		var Tu = "muxjs",
   			Su = {
   				Sj: Tu,
   				ISOBoxer: "ISOBoxer"
   			};
   		Qu.Allowed = Su;
   		var Ru = new Map([
   			["ISOBoxer", function() {
   				return window.ISOBoxer
   			}]
   		]);

   		function Uu(a, b, c) {
   			this.type = a;
   			this.g = b;
   			this.segments = c || null
   		}

   		function Vu(a, b, c, d) {
   			this.id = a;
   			this.name = b;
   			this.attributes = c;
   			this.value = void 0 === d ? null : d
   		}
   		Vu.prototype.toString = function(a) {
   			function b(e) {
   				return e.name + "=" + (isNaN(Number(e.value)) ? '"' + e.value + '"' : e.value)
   			}
   			var c = "#" + this.name,
   				d = this.attributes ? this.attributes.filter(function(e) {
   					return a ? !a.has(e.name) : !0
   				}).map(b) : [];
   			this.value && d.unshift(this.value);
   			0 < d.length && (c += ":" + d.join(","));
   			return c
   		};

   		function Wu(a) {
   			var b = (new Set).add("AUDIO").add("VIDEO").add("SUBTITLES").add("PATHWAY-ID").add("GROUP-ID").add("URI");
   			return a.toString(b)
   		}

   		function Xu(a, b) {
   			a = a.attributes.filter(function(c) {
   				return c.name == b
   			});
   			return a.length ? a[0] : null
   		}

   		function Z(a, b, c) {
   			return (a = Xu(a, b)) ? a.value : c || null
   		}

   		function Yu(a, b) {
   			a = Xu(a, b);
   			if (!a) throw new T(2, 4, 4023, b);
   			return a.value
   		}

   		function Zu(a, b, c) {
   			c = void 0 === c ? [] : c;
   			this.g = b;
   			this.h = a;
   			this.ub = c
   		}

   		function $u(a, b) {
   			this.name = a;
   			this.value = b
   		};

   		function av(a, b) {
   			return a.filter(function(c) {
   				return c.name == b
   			})
   		}

   		function bv(a, b) {
   			return a.filter(function(c) {
   				return Yu(c, "TYPE") == b
   			})
   		}

   		function cv(a, b) {
   			a = t(a);
   			for (var c = a.next(); !c.done; c = a.next())
   				if (c = c.value, c.name === b) return c;
   			return null
   		}

   		function dv(a, b, c) {
   			c = void 0 === c ? 0 : c;
   			return (a = cv(a, b)) ? Number(a.value) : c
   		}

   		function ev(a, b, c) {
   			return b ? fv(a, [b], c) : []
   		}

   		function fv(a, b, c) {
   			if (!b.length) return [];
   			b = Cd(a, b);
   			a = [];
   			b = t(b);
   			for (var d = b.next(); !d.done; d = b.next()) {
   				var e = a,
   					f = e.push;
   				var g = d.value;
   				if ((d = c) && d.size) {
   					g = String(g).replace(/%7B/g, "{").replace(/%7D/g, "}");
   					var h = g.match(/{\$\w*}/g);
   					if (h) {
   						h = t(h);
   						for (var k = h.next(); !k.done; k = h.next()) {
   							k = k.value;
   							var l = k.slice(2, k.length - 1),
   								m = d.get(l);
   							if (m) g = g.replace(k, m);
   							else throw new T(2, 4, 4039, l);
   						}
   					}
   					d = g
   				} else d = g;
   				f.call(e, d)
   			}
   			return a
   		};

   		function gv(a) {
   			this.h = a || "";
   			this.g = 0
   		}

   		function hv(a) {
   			iv(a, /[ \t]+/gm)
   		}

   		function iv(a, b) {
   			b.lastIndex = a.g;
   			b = b.exec(a.h);
   			b = null == b ? null : {
   				position: b.index,
   				length: b[0].length,
   				results: b
   			};
   			if (a.g == a.h.length || null == b || b.position != a.g) return null;
   			a.g += b.length;
   			return b.results
   		}

   		function jv(a) {
   			return a.g == a.h.length ? null : (a = iv(a, /[^ \t\n]*/gm)) ? a[0] : null
   		};

   		function kv() {
   			this.g = 0
   		}

   		function lv(a, b) {
   			b = kd(b);
   			b = b.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n").trim();
   			var c = b.split(/\n+/m);
   			if (!/^#EXTM3U($|[ \t\n])/m.test(c[0])) throw new T(2, 4, 4015);
   			b = 0;
   			for (var d = !0, e = t(c), f = e.next(); !f.done; f = e.next())
   				if (f = f.value, /^#(?!EXT)/m.test(f) || d) d = !1;
   				else if (f = mv(a, f), --a.g, nv.includes(f.name)) {
   				b = 1;
   				break
   			} else "EXT-X-STREAM-INF" == f.name && (d = !0);
   			e = [];
   			d = !0;
   			for (f = 0; f < c.length; f++) {
   				var g = c[f],
   					h = c[f + 1];
   				if (/^#(?!EXT)/m.test(g) || d) d = !1;
   				else {
   					g = mv(a, g);
   					if (ov.includes(g.name)) {
   						if (1 != b) throw new T(2, 4, 4017);
   						g =
   							c.splice(f, c.length - f);
   						c = [];
   						d = [];
   						f = [];
   						h = null;
   						g = t(g);
   						for (var k = g.next(); !k.done; k = g.next()) k = k.value, /^(#EXT)/.test(k) ? (k = mv(a, k), nv.includes(k.name) ? e.push(k) : "EXT-X-MAP" == k.name ? h = k : "EXT-X-PART" == k.name ? f.push(k) : "EXT-X-PRELOAD-HINT" == k.name ? "PART" == Z(k, "TYPE") ? f.push(k) : "MAP" == Z(k, "TYPE") && (k.name = "EXT-X-MAP", h = k) : d.push(k)) : /^#(?!EXT)/m.test(k) || (k = k.trim(), h && d.push(h), c.push(new Zu(k, d, f)), d = [], f = []);
   						f.length && (h && d.push(h), c.push(new Zu("", d, f)));
   						return new Uu(b, e, c)
   					}
   					e.push(g);
   					"EXT-X-STREAM-INF" ==
   					g.name && (g.attributes.push(new $u("URI", h)), d = !0)
   				}
   			}
   			return new Uu(b, e)
   		}

   		function mv(a, b) {
   			a = a.g++;
   			var c = b.match(/^#(EXT[^:]*)(?::(.*))?$/);
   			if (!c) throw new T(2, 4, 4016, b);
   			b = c[1];
   			var d = c[2];
   			c = [];
   			var e;
   			if (d) {
   				d = new gv(d);
   				var f;
   				(f = iv(d, /^([^,=]+)(?:,|$)/g)) && (e = f[1]);
   				for (var g = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g; f = iv(d, g);) c.push(new $u(f[1], f[2] || f[3])), hv(d)
   			}
   			return new Vu(a, b, c, e)
   		}
   		var nv = "EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST EXT-X-SERVER-CONTROL EXT-X-SKIP EXT-X-PART-INF".split(" "),
   			ov = "EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE EXT-X-MAP".split(" ");

   		function pv() {}

   		function qv(a) {
   			try {
   				var b = rv(a);
   				return Wf({
   					uri: a,
   					originalUri: a,
   					data: b.data,
   					headers: {
   						"content-type": b.contentType
   					}
   				})
   			} catch (c) {
   				return Uf(c)
   			}
   		}

   		function rv(a) {
   			var b = a.split(":");
   			if (2 > b.length || "data" != b[0]) throw new T(2, 1, 1004, a);
   			b = b.slice(1).join(":").split(",");
   			if (2 > b.length) throw new T(2, 1, 1004, a);
   			var c = b[0];
   			a = window.decodeURIComponent(b.slice(1).join(","));
   			b = c.split(";");
   			c = b[0];
   			var d = !1;
   			1 < b.length && "base64" == b[b.length - 1] && (d = !0, b.pop());
   			var e;
   			d ? e = yd(a) : e = qd(a);
   			return {
   				data: e,
   				contentType: c
   			}
   		}
   		S("gowatch.net.DataUriPlugin", pv);
   		pv.parse = qv;
   		fg("data", qv);

   		function sv() {
   			var a = this;
   			this.g = this.h = null;
   			this.B = 1;
   			this.s = new Map;
   			this.H = new Map;
   			this.N = new Map;
   			this.N.set("video", new Map);
   			this.N.set("audio", new Map);
   			this.N.set(Ld, new Map);
   			this.N.set("image", new Map);
   			this.Wa = new Set;
   			this.i = new Map;
   			this.l = null;
   			this.M = "";
   			this.Ka = new kv;
   			this.J = -1;
   			this.ba = Infinity;
   			this.aa = this.pb = !1;
   			this.A = new Lc(function() {
   				tv(a)
   			});
   			this.oa = uv;
   			this.o = null;
   			this.Xa = 0;
   			this.m = Infinity;
   			this.Ja = this.ua = this.S = 0;
   			this.V = new cg;
   			this.F = new Map;
   			this.G = new Map;
   			this.ca = new Map;
   			this.fa = new Map;
   			this.K = new Map;
   			this.za = new Map;
   			this.na = new Map;
   			this.hb = this.C = !1;
   			this.gb = new Ua(5);
   			this.j = null;
   			this.da = !0
   		}
   		r = sv.prototype;
   		r.configure = function(a) {
   			this.g = a;
   			this.j && this.j.configure(this.g)
   		};
   		r.start = function(a, b) {
   			var c = this,
   				d;
   			return O(function(e) {
   				return 1 == e.g ? (c.h = b, c.C = b.isLowLatencyMode(), E(e, vv(c, [a]), 2)) : 3 != e.g ? (d = e.h, c.M = d.uri, E(e, wv(c, d.data, a), 3)) : e.return(c.o)
   			})
   		};
   		r.stop = function() {
   			this.A && (this.A.stop(), this.A = null);
   			var a = [];
   			this.V && (a.push(this.V.destroy()), this.V = null);
   			this.g = this.h = null;
   			this.Wa.clear();
   			this.o = null;
   			this.i.clear();
   			this.H.clear();
   			this.G.clear();
   			this.s.clear();
   			this.ca.clear();
   			this.fa.clear();
   			this.K.clear();
   			this.za.clear();
   			this.na.clear();
   			this.j && this.j.destroy();
   			return Promise.all(a)
   		};
   		r.update = function() {
   			var a = this,
   				b, c, d, e, f, g, h, k, l;
   			return O(function(m) {
   				if (1 == m.g) {
   					if (!xv(a)) return m.return();
   					b = [];
   					c = Array.from(a.i.values());
   					a.m = Infinity;
   					d = c.filter(function(n) {
   						return n.stream.segmentIndex
   					});
   					e = t(d);
   					for (f = e.next(); !f.done; f = e.next()) g = f.value, b.push(yv(a, g));
   					return E(m, Promise.all(b), 2)
   				}
   				zv(a, d.map(function(n) {
   					return n.stream
   				}));
   				h = d.some(function(n) {
   					return 0 == n.nd
   				});
   				d.length && !h && (k = Av, Bv(a, k.dh), l = d.map(function(n) {
   					return n.Bb
   				}), a.l.Ta(Math.min.apply(Math, x(l))), a.h.updateDuration());
   				h && Cv(a);
   				F(m)
   			})
   		};

   		function Dv(a, b) {
   			return xv(a) ? a.N.get(b.type) : b.fe
   		}

   		function yv(a, b) {
   			var c, d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H, I, G, N, L, M, P;
   			return O(function(R) {
   				if (1 == R.g) {
   					c = [];
   					d = t(b.L());
   					for (e = d.next(); !e.done; e = d.next()) f = e.value, g = new rc(f), h = g.g, b.Pd && (0 <= b.lb && h.add("_HLS_msn", String(b.lb)), 0 <= b.mb && h.add("_HLS_part", String(b.mb))), b.Qd && h.add("_HLS_skip", "YES"), Hc(h) && vc(g, h), c.push(g.toString());
   					return E(R, vv(a, c, !0), 2)
   				}
   				if (3 != R.g) {
   					k = R.h;
   					if (!b.stream.segmentIndex) return R.return();
   					l = lv(a.Ka, k.data);
   					if (1 != l.type) throw new T(2, 4, 4017);
   					m = k.uri;
   					m == k.originalUri ||
   						b.L().includes(m) || b.Gg.push(m);
   					n = av(l.g, "EXT-X-DEFINE");
   					p = Ev(a, n, m);
   					q = b.stream;
   					u = Dv(a, b);
   					return E(R, Fv(a, l, q.mimeType, b.L, p), 3)
   				}
   				v = R.h;
   				w = v.keyIds;
   				A = v.drmInfos;
   				z = function(Q, fa) {
   					return Q.size === fa.size && [].concat(x(Q)).every(function(sa) {
   						return fa.has(sa)
   					})
   				};
   				z(q.keyIds, w) || (q.keyIds = w, q.drmInfos = A, a.h.newDrmInfo(q));
   				y = Gv(a, l, q, u, p, b.L, b.type);
   				B = y.segments;
   				if (C = y.bandwidth) q.bandwidth = C;
   				q.segmentIndex.ud(B, a.l.jb());
   				B.length && (D = dv(l.g, "EXT-X-MEDIA-SEQUENCE", 0), K = (J = cv(l.g, "EXT-X-SKIP")) ? Number(Z(J,
   					"SKIPPED-SEGMENTS")) : 0, H = Hv(D, B), I = H.lb, G = H.mb, b.lb = I + K, b.mb = G, N = u.get(D), q.segmentIndex.Ha(N));
   				L = q.segmentIndex.g[0] || null;
   				b.hc = L.startTime;
   				M = B[B.length - 1];
   				b.Bb = M.endTime;
   				if (P = cv(l.g, "EXT-X-ENDLIST")) b.nd = !0;
   				Iv(a, l);
   				F(R)
   			})
   		}
   		r.onExpirationUpdated = function() {};
   		r.onInitialVariantChosen = function() {};
   		r.banLocation = function(a) {
   			this.j && this.j.banLocation(a)
   		};

   		function Jv(a, b) {
   			for (var c = -1 == a.J, d = t(b), e = d.next(); !e.done; e = d.next()) {
   				e = e.value;
   				var f = e.stream.segmentIndex,
   					g = Dv(a, e);
   				if (f = f.g[0] || null) {
   					g = t(g);
   					for (var h = g.next(); !h.done; h = g.next()) {
   						h = t(h.value);
   						var k = h.next().value;
   						if (h.next().value == f.startTime) {
   							c && (a.J = Math.max(a.J, k));
   							e.Oe = k;
   							break
   						}
   					}
   				}
   			}
   			if (!(0 > a.J))
   				for (b = t(b), e = b.next(); !e.done; e = b.next())
   					if (c = e.value, Kv(a, c.type) && (d = c.stream.segmentIndex))
   						if (e = a.J - c.Oe, 0 < e && (d.g.splice(0, e), d = d.g[0] || null)) d = -d.startTime, c.stream.segmentIndex.offset(d), Lv(a,
   							c, d)
   		}

   		function Mv(a, b) {
   			if (Infinity == a.ba) {
   				b = t(b);
   				for (var c = b.next(); !c.done; c = b.next()) {
   					var d = c.value.stream.segmentIndex.g[0] || null;
   					null != d && null != d.h && (a.ba = Math.min(a.ba, d.h))
   				}
   			}
   			b = a.ba;
   			if (Infinity != b)
   				for (d = t(a.i.values()), c = d.next(); !c.done; c = d.next())
   					if (c = c.value, !Kv(a, c.type)) {
   						var e = c.stream.segmentIndex;
   						if (null != e) {
   							var f = e.g[0] || null;
   							if (null == f.h) $a("Missing EXT-X-PROGRAM-DATE-TIME for stream", c.L(), "Expect AV sync issues!");
   							else
   								for (Lv(a, c, f.h - b - f.startTime), c = t(e), e = c.next(); !e.done; e = c.next()) e.value.Qf(b)
   						}
   					}
   		}

   		function Lv(a, b, c) {
   			b.hc += c;
   			b.Bb += c;
   			a = Dv(a, b);
   			for (var d = t(a), e = d.next(); !e.done; e = d.next()) {
   				var f = t(e.value);
   				e = f.next().value;
   				f = f.next().value;
   				a.set(e, f + c)
   			}
   			b.L()
   		}

   		function wv(a, b, c) {
   			var d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H, I, G, N, L, M, P, R, Q, fa, sa, Ia, xa, Ja, Qa, Aa, Wa;
   			return O(function(ra) {
   				switch (ra.g) {
   					case 1:
   						d = lv(a.Ka, b);
   						e = av(d.g, "EXT-X-DEFINE");
   						f = [];
   						g = [];
   						h = [];
   						a.l = new ok(null, 0);
   						a.l.lc(!0);
   						k = function() {
   							return [c]
   						};
   						if (1 == d.type) return a.da = !1, w = av(d.g, "EXT-X-DEFINE"), A = Ev(a, w, a.M), E(ra, Nv(a, d, k, A), 7);
   						Ov(a, e);
   						l = av(d.g, "EXT-X-MEDIA");
   						m = av(d.g, "EXT-X-STREAM-INF");
   						n = av(d.g, "EXT-X-IMAGE-STREAM-INF");
   						p = av(d.g, "EXT-X-I-FRAME-STREAM-INF");
   						q = av(d.g, "EXT-X-SESSION-KEY");
   						u = av(d.g, "EXT-X-SESSION-DATA");
   						v = av(d.g, "EXT-X-CONTENT-STEERING");
   						Pv(a, u);
   						return E(ra, Qv(a, v), 4);
   					case 4:
   						return Rv(a, m), Sv(a, l), E(ra, Tv(a, m, q, l, k, a.s), 5);
   					case 5:
   						return f = ra.h, g = Uv(a, l), E(ra, Vv(a, n, p), 6);
   					case 6:
   						h = ra.h;
   						ra.u(3);
   						break;
   					case 7:
   						return z = ra.h, y = z.type, B = z.mimeType, C = z.codecs, D = z.language, J = z.height, K = z.width, H = z.channelCount, I = z.sampleRate, G = z.closedCaptions, N = z.Zf, L = z.colorGamut, E(ra, Wv(a, a.B++, A, d, k, C, y, D, !0, "Media Playlist", H, G, null, !1, I, !1, B), 8);
   					case 8:
   						M = ra.h, a.i.set(c, M), "video" == y &&
   							Xv(M.stream, K, J, null, N, null, L), f.push({
   								id: 0,
   								language: ue(D || "und"),
   								disabledUntilTime: 0,
   								primary: !0,
   								audio: "audio" == y ? M.stream : null,
   								video: "video" == y ? M.stream : null,
   								bandwidth: M.stream.bandwidth || 0,
   								allowedByApplication: !0,
   								allowedByKeySystem: !0,
   								decodingInfos: []
   							});
   					case 3:
   						if (!a.h) throw new T(2, 7, 7001);
   						1 == d.type && (xv(a) && (Yv(a, d), P = a.m, a.A.W(P)), R = Array.from(a.i.values()), Zv(a, R), Cv(a));
   						a.o = {
   							presentationTimeline: a.l,
   							variants: f,
   							textStreams: g,
   							imageStreams: h,
   							offlineSessionIds: [],
   							minBufferTime: 0,
   							sequenceMode: a.g.hls.sequenceMode,
   							ignoreManifestTimestampsInSegmentsMode: a.g.hls.ignoreManifestTimestampsInSegmentsMode,
   							type: "HLS",
   							serviceDescription: null,
   							nextUrl: null
   						};
   						if (a.aa || !a.g.hls.disableCodecGuessing) {
   							ra.u(9);
   							break
   						}
   						Q = [];
   						fa = t(a.o.variants);
   						for (sa = fa.next(); !sa.done; sa = fa.next()) Ia = sa.value, Ia.audio && "" === Ia.audio.codecs && Q.push(Ia.audio.createSegmentIndex()), Ia.video && "" === Ia.video.codecs && Q.push(Ia.video.createSegmentIndex());
   						return E(ra, Promise.all(Q), 9);
   					case 9:
   						a.h.makeTextStreamsForClosedCaptions(a.o);
   						if (1 == f.length) {
   							xa = [];
   							Ja = f[0];
   							Qa = t([Ja.video, Ja.audio]);
   							for (Aa = Qa.next(); !Aa.done; Aa = Qa.next())(Wa = Aa.value) && !Wa.segmentIndex && xa.push(Wa.createSegmentIndex());
   							if (0 < xa.length) return E(ra, Promise.all(xa), 0)
   						}
   						ra.u(0)
   				}
   			})
   		}

   		function Nv(a, b, c, d) {
   			var e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K;
   			return O(function(H) {
   				switch (H.g) {
   					case 1:
   						e = ft(a.g.hls.mediaPlaylistFullMimeType);
   						if (!b.segments.length) return H.return(e);
   						f = b.segments[0];
   						g = ev(c(), f.h, d);
   						h = g[0];
   						k = new rc(h);
   						l = k.Qa.split(".").pop();
   						if (m = $v[l]) return H.return(ft(m));
   						n = pg;
   						p = null;
   						q = aw(a, b, f.g, c, d);
   						a.ca.clear();
   						if (!q) {
   							H.u(2);
   							break
   						}
   						u = ol(q.L(), q.bc(), q.Zb(), a.g.retryParameters);
   						return E(H, bw(a, u, n, {
   							type: 0
   						}), 3);
   					case 3:
   						v = H.h, p = v.data;
   					case 2:
   						w = 0;
   						A = null;
   						if (z = cv(f.g, "EXT-X-BYTERANGE")) y =
   							t(cw(null, z.value)), w = y.next().value, A = y.next().value;
   						B = ol(g, w, A, a.g.retryParameters);
   						return E(H, bw(a, B, n, {
   							type: 1
   						}), 4);
   					case 4:
   						C = H.h;
   						(D = C.headers["content-type"]) && (D = D.split(";")[0].toLowerCase());
   						if ("ts" == l || "video/mp2t" == D) {
   							var I = C.data;
   							var G = Ab(I);
   							G = (new pj).parse(G);
   							var N = G.hd();
   							G = G.gf();
   							var L = [],
   								M = !1,
   								P = !1;
   							switch (N.audio) {
   								case "aac":
   								case "aac-loas":
   									L.push("mp4a.40.2");
   									M = !0;
   									break;
   								case "mp3":
   									L.push("mp4a.40.34");
   									M = !0;
   									break;
   								case "ac3":
   									L.push("ac-3");
   									M = !0;
   									break;
   								case "ec3":
   									L.push("ec-3");
   									M = !0;
   									break;
   								case "opus":
   									L.push("opus"), M = !0
   							}
   							switch (N.video) {
   								case "avc":
   									G.Ga ? L.push(G.Ga) : L.push("avc1.42E01E");
   									P = !0;
   									break;
   								case "hvc":
   									G.Ga ? L.push(G.Ga) : L.push("hvc1.1.6.L93.90");
   									P = !0;
   									break;
   								case "av1":
   									L.push("av01.0.01M.08"), P = !0
   							}
   							if (L.length) {
   								N = M && !P;
   								M = new Map;
   								if (P) {
   									P = new Gb("video/mp2t");
   									P.i(I);
   									I = t(P.j());
   									for (var R = I.next(); !R.done; R = I.next()) R = R.value, M.set(R, R);
   									P.g()
   								}
   								G = {
   									type: N ? "audio" : "video",
   									mimeType: "video/mp2t",
   									codecs: L.join(", "),
   									language: null,
   									height: G.height,
   									width: G.width,
   									channelCount: null,
   									sampleRate: null,
   									closedCaptions: M,
   									Zf: null,
   									colorGamut: null
   								}
   							} else G = null;
   							if (J = G) return H.return(J)
   						} else if ("mp4" == l || "cmfv" == l || "m4s" == l || "fmp4" == l || "video/mp4" == D || "audio/mp4" == D || "video/iso.segment" == D)
   							if (K = gt(p, C.data)) return H.return(K);
   						return H.return(e)
   				}
   			})
   		}

   		function Cv(a) {
   			if (xv(a)) {
   				if (a.oa == dw) {
   					for (var b, c = b = Infinity, d = t(a.i.values()), e = d.next(); !e.done; e = d.next()) e = e.value, e.stream.segmentIndex && "text" != e.stream.type && (b = Math.min(b, e.Bb), c = Math.min(c, e.hc));
   					b -= c;
   					a.g.hls.useSafariBehaviorForLive && (b = a.l.s);
   					isNaN(a.g.availabilityWindowOverride) || (b = a.g.availabilityWindowOverride);
   					a.l.te(b)
   				}
   			} else a.l.Ta(ew(a));
   			if (!a.l.o)
   				for (b = t(a.i.values()), c = b.next(); !c.done; c = b.next()) c = c.value, !c.stream.segmentIndex || "audio" != c.type && "video" != c.type || (c = c.stream.segmentIndex.get(0)) &&
   					c.h && a.l.Og(c.h);
   			a.l.ce()
   		}

   		function Ov(a, b) {
   			var c = (new rc(a.M)).g;
   			b = t(b);
   			for (var d = b.next(); !d.done; d = b.next()) {
   				var e = d.value;
   				d = Z(e, "NAME");
   				var f = Z(e, "VALUE");
   				e = Z(e, "QUERYPARAM");
   				d && f && (a.s.has(d) || a.s.set(d, f));
   				e && (d = c.get(e)[0]) && !a.s.has(d) && a.s.set(e, d)
   			}
   		}

   		function Ev(a, b, c) {
   			c = (new rc(c)).g;
   			var d = new Map;
   			b = t(b);
   			for (var e = b.next(); !e.done; e = b.next()) {
   				var f = e.value,
   					g = Z(f, "NAME"),
   					h = Z(f, "VALUE");
   				e = Z(f, "QUERYPARAM");
   				f = Z(f, "IMPORT");
   				g && h && (d.has(g) || d.set(g, h));
   				e && (g = c.get(e)[0]) && !d.has(g) && d.set(e, g);
   				f && (e = a.s.get(f)) && d.set(f, e)
   			}
   			return d
   		}

   		function Rv(a, b) {
   			b = t(b);
   			for (var c = b.next(); !c.done; c = b.next()) {
   				var d = c.value,
   					e = Z(d, "AUDIO");
   				c = Z(d, "VIDEO");
   				var f = Z(d, "SUBTITLES");
   				d = fw(a, d);
   				if (f) {
   					var g = Jd(Ld, d);
   					a.G.set(f, g);
   					Kb(d, g)
   				}
   				e && (f = Jd("audio", d), f || (f = a.g.hls.defaultAudioCodec), a.G.set(e, f));
   				c && (e = Jd("video", d), e || (e = a.g.hls.defaultVideoCodec), a.G.set(c, e))
   			}
   		}

   		function Pv(a, b) {
   			b = t(b);
   			for (var c = b.next(); !c.done; c = b.next()) {
   				var d = c.value,
   					e = Z(d, "DATA-ID");
   				c = Z(d, "URI");
   				var f = Z(d, "LANGUAGE");
   				d = Z(d, "VALUE");
   				e = (new Map).set("id", e);
   				c && e.set("uri", ev([a.M], c, a.s)[0]);
   				f && e.set("language", f);
   				d && e.set("value", d);
   				c = new U("sessiondata", e);
   				if (a.h) a.h.onEvent(c)
   			}
   		}

   		function Qv(a, b) {
   			var c, d, e, f, g, h;
   			return O(function(k) {
   				if (!a.h || !a.g) return k.return();
   				d = t(b);
   				for (e = d.next(); !e.done; e = d.next())
   					if (f = e.value, g = Z(f, "PATHWAY-ID"), h = Z(f, "SERVER-URI"), g && h) {
   						a.j = new kt(a.h);
   						a.j.configure(a.g);
   						a.j.i = [a.M];
   						a.j.setManifestType("HLS");
   						a.j.h = g;
   						c = lt(a.j, h);
   						break
   					} return E(k, c, 0)
   			})
   		}

   		function Uv(a, b) {
   			var c = bv(b, "SUBTITLES");
   			b = c.map(function(g) {
   				if (a.g.disableText) return null;
   				try {
   					return gw(a, [g], new Map).stream
   				} catch (h) {
   					if (a.g.hls.ignoreTextStreamFailures) return null;
   					throw h;
   				}
   			});
   			c = t(c);
   			for (var d = c.next(); !d.done; d = c.next()) {
   				var e = Yu(d.value, "GROUP-ID");
   				if (d = a.G.get(e))
   					if (e = a.H.get(e)) {
   						e = t(e);
   						for (var f = e.next(); !f.done; f = e.next()) f = f.value, f.stream.codecs = d, f.stream.mimeType = hw(Ld, d) || iw(Ld), jw(f.stream)
   					}
   			}
   			return b.filter(function(g) {
   				return g
   			})
   		}

   		function jw(a) {
   			a.fullMimeTypes = new Set([Pd(a.mimeType, a.codecs)])
   		}

   		function Vv(a, b, c) {
   			var d, e;
   			return O(function(f) {
   				if (1 == f.g) return d = b.map(function(g) {
   					var h, k, l;
   					return O(function(m) {
   						if (1 == m.g) {
   							if (h = a.g.disableThumbnails) return m.return(null);
   							ua(m, 2);
   							return E(m, kw(a, g), 4)
   						}
   						if (2 != m.g) return k = m.h, m.return(k.stream);
   						l = ya(m);
   						if (a.g.hls.ignoreImageStreamFailures) return m.return(null);
   						throw l;
   					})
   				}).concat(c.map(function(g) {
   					if (a.g.disableThumbnails) return null;
   					try {
   						var h = Yu(g, "URI"),
   							k = Z(g, "CODECS") || "";
   						if (a.i.has(h)) var l = a.i.get(h);
   						else {
   							var m = Z(g, "LANGUAGE"),
   								n = Z(g, "NAME"),
   								p = Z(g, "CHARACTERISTICS"),
   								q = lw(a, a.B++, [h], k, "image", m, !1, n, null, null, p, !1, null, !1),
   								u = Z(g, "RESOLUTION"),
   								v = t(u ? u.split("x") : [null, null]),
   								w = v.next().value,
   								A = v.next().value;
   							q.stream.width = Number(w) || void 0;
   							q.stream.height = Number(A) || void 0;
   							var z = Z(g, "BANDWIDTH");
   							z && (q.stream.bandwidth = Number(z));
   							a.i.set(h, q);
   							l = q
   						}
   						g = l;
   						return "mjpg" !== g.stream.codecs ? null : g.stream
   					} catch (y) {
   						if (a.g.hls.ignoreImageStreamFailures) return null;
   						throw y;
   					}
   				})), E(f, Promise.all(d), 2);
   				e = f.h;
   				return f.return(e.filter(function(g) {
   					return g
   				}))
   			})
   		}

   		function mw(a, b, c) {
   			b = b.filter(function(h) {
   				var k = Z(h, "URI") || "";
   				return "SUBTITLES" != Z(h, "TYPE") && "" != k
   			});
   			var d = {};
   			b = t(b);
   			for (var e = b.next(); !e.done; e = b.next()) {
   				e = e.value;
   				var f = Wu(e);
   				d[f] ? d[f].push(e) : d[f] = [e]
   			}
   			for (var g in d) gw(a, d[g], c)
   		}

   		function Tv(a, b, c, d, e, f) {
   			var g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H, I, G, N, L, M, P, R, Q, fa, sa, Ia, xa, Ja, Qa, Aa;
   			return O(function(Wa) {
   				switch (Wa.g) {
   					case 1:
   						g = [];
   						h = new Set;
   						if (!(0 < c.length)) {
   							Wa.u(2);
   							break
   						}
   						k = t(c);
   						l = k.next();
   					case 3:
   						if (l.done) {
   							Wa.u(2);
   							break
   						}
   						m = l.value;
   						n = Yu(m, "METHOD");
   						p = Z(m, "KEYFORMAT") || "identity";
   						q = null;
   						if ("NONE" == n) {
   							Wa.u(4);
   							break
   						}
   						if (nw(n)) {
   							u = ev(e(), Yu(m, "URI"), f);
   							v = u.sort().join("");
   							a.K.has(v) || (w = jg(u, a.g.retryParameters), A = bw(a, w, 6), a.K.set(v, A));
   							Wa.u(4);
   							break
   						}
   						if ("identity" != p) {
   							q = (z = ow[p]) ?
   								z(m, "") : null;
   							Wa.u(6);
   							break
   						}
   						return E(Wa, pw(a, m, "", e, null, f), 9);
   					case 9:
   						q = Wa.h;
   					case 6:
   						if (q) {
   							if (q.keyIds)
   								for (y = t(q.keyIds), B = y.next(); !B.done; B = y.next()) C = B.value, h.add(C);
   							g.push(q)
   						}
   					case 4:
   						l = k.next();
   						Wa.u(3);
   						break;
   					case 2:
   						D = {};
   						J = t(b);
   						for (K = J.next(); !K.done; K = J.next()) H = K.value, I = Wu(H), D[I] ? D[I].push(H) : D[I] = [H];
   						G = [];
   						for (N in D) L = D[N], M = L[0], P = Z(M, "FRAME-RATE"), R = Number(Z(M, "AVERAGE-BANDWIDTH")) || Number(Yu(M, "BANDWIDTH")), Q = Z(M, "RESOLUTION"), fa = t(Q ? Q.split("x") : [null, null]), sa = fa.next().value, Ia = fa.next().value,
   							xa = Z(M, "VIDEO-RANGE"), (Ja = Z(M, "REQ-VIDEO-LAYOUT")) && Ja.includes(",") && (Qa = Ja.split(",").filter(function(ra) {
   								return "CH-STEREO" == ra || "CH-MONO" == ra
   							}), Ja = Qa[0]), Ja = Ja || "CH-MONO", Aa = qw(a, L, d, R), G.push.apply(G, x(rw(a, Aa.audio, Aa.video, R, sa, Ia, P, xa, Ja, g, h)));
   						return Wa.return(G.filter(function(ra) {
   							return null != ra
   						}))
   				}
   			})
   		}

   		function qw(a, b, c, d) {
   			for (var e = {
   					audio: [],
   					video: []
   				}, f = new Map, g = [], h = !1, k = !1, l = t(b), m = l.next(); !m.done; m = l.next()) {
   				var n = m.value;
   				m = Z(n, "AUDIO");
   				var p = Z(n, "VIDEO"),
   					q = m || p;
   				q && (g.includes(q) || g.push(q), (n = Z(n, "PATHWAY-ID")) && f.set(q, n), m ? h = !0 : p && (k = !0))
   			}
   			g.length && c.length && (l = c.filter(function(w) {
   				return g.includes(Yu(w, "GROUP-ID"))
   			}), mw(a, l, f));
   			l = (f = g.sort().join(",")) && a.H.has(f) ? a.H.get(f) : [];
   			h ? e.audio.push.apply(e.audio, x(l)) : k && e.video.push.apply(e.video, x(l));
   			m = !1;
   			var u = b.map(function(w) {
   				return Yu(w,
   					"URI")
   			});
   			k = e.audio.find(function(w) {
   				return w && w.L().find(function(A) {
   					return u.includes(A)
   				})
   			});
   			h = fw(a, b[0]);
   			p = Jd("video", h);
   			(q = Jd("audio", h)) && !p ? (k = "audio", m = 0 < e.audio.length) : !e.audio.length && !e.video.length && q && p ? (k = "video", h = [
   				[p, q].join()
   			]) : e.audio.length && k ? (k = "audio", m = !0) : k = e.video.length && !e.audio.length ? "audio" : "video";
   			if (!m) {
   				var v = n = q = p = m = null;
   				!l.length && (c = c.find(function(w) {
   					var A = Z(w, "URI") || "",
   						z = Z(w, "TYPE");
   					w = Yu(w, "GROUP-ID");
   					return "SUBTITLES" != z && "" == A && g.includes(w)
   				})) && (m = Z(c, "LANGUAGE"),
   					p = Z(c, "NAME"), q = sw(c), tw(c), n = Z(c, "CHARACTERISTICS"), v = uw(c));
   				a = vw(a, b, h, k, m, p, q, n, v);
   				f && (a.stream.groupId = f);
   				l.length || (a.stream.bandwidth = d);
   				e[a.stream.type] = [a]
   			}
   			return e
   		}

   		function fw(a, b) {
   			var c = Z(b, "CODECS") || "";
   			b = Z(b, "SUPPLEMENTAL-CODECS");
   			a.aa = 0 < c.length;
   			a.aa || a.g.hls.disableCodecGuessing || (c = [], a.g.disableVideo || c.push(a.g.hls.defaultVideoCodec), a.g.disableAudio || c.push(a.g.hls.defaultAudioCodec), c = c.join(","));
   			a = c.split(/\s*,\s*/);
   			b && (b = b.split(/\s*,\s*/).map(function(d) {
   				return d.split("/")[0]
   			}), a.push.apply(a, x(b)));
   			return ht(a)
   		}

   		function sw(a) {
   			return (a = Z(a, "CHANNELS")) ? parseInt(a.split("/")[0], 10) : null
   		}

   		function uw(a) {
   			return (a = Z(a, "SAMPLE-RATE")) ? parseInt(a, 10) : null
   		}

   		function tw(a) {
   			return (a = Z(a, "CHANNELS")) ? a.includes("/JOC") : !1
   		}

   		function rw(a, b, c, d, e, f, g, h, k, l, m) {
   			for (var n = t(c), p = n.next(); !p.done; p = n.next()) Xv(p.value.stream, e, f, g, h, k, null);
   			e = a.g.disableAudio;
   			if (!b.length || e) b = [null];
   			e = a.g.disableVideo;
   			if (!c.length || e) c = [null];
   			e = [];
   			b = t(b);
   			for (f = b.next(); !f.done; f = b.next())
   				for (f = f.value, g = t(c), h = g.next(); !h.done; h = g.next()) {
   					var q = h.value;
   					if (h = f ? f.stream : null) h.drmInfos = l, h.keyIds = m;
   					if (k = q ? q.stream : null) k.drmInfos = l, k.keyIds = m;
   					n = f ? f.stream.drmInfos : null;
   					p = q ? q.stream.drmInfos : null;
   					q = q ? q.L().sort().join(",") : "";
   					var u = f ? f.L().sort().join(",") :
   						"";
   					q = q + " - " + u;
   					h && k && !fi(n, p) || a.Wa.has(q) || (h = {
   						id: a.B++,
   						language: h ? h.language : "und",
   						disabledUntilTime: 0,
   						primary: !!h && h.primary || !!k && k.primary,
   						audio: h,
   						video: k,
   						bandwidth: d,
   						allowedByApplication: !0,
   						allowedByKeySystem: !0,
   						decodingInfos: []
   					}, e.push(h), a.Wa.add(q))
   				}
   			return e
   		}

   		function Sv(a, b) {
   			b = bv(b, "CLOSED-CAPTIONS");
   			a.da = 0 == b.length;
   			b = t(b);
   			for (var c = b.next(); !c.done; c = b.next()) {
   				var d = c.value,
   					e = Z(d, "LANGUAGE");
   				c = ue(e || "und");
   				e || (e = Z(d, "NAME")) && (c = e);
   				e = Yu(d, "GROUP-ID");
   				d = Yu(d, "INSTREAM-ID").replace("SERVICE", "svc");
   				a.F.get(e) || a.F.set(e, new Map);
   				a.F.get(e).set(d, c)
   			}
   		}

   		function gw(a, b, c) {
   			for (var d = [], e = [], f = new Map, g = t(b), h = g.next(); !h.done; h = g.next()) {
   				var k = h.value;
   				h = Yu(k, "URI");
   				k = Yu(k, "GROUP-ID");
   				d.push(h);
   				e.push(k);
   				f.set(k, h)
   			}
   			g = e.sort().join(",");
   			h = b[0];
   			b = "";
   			k = Yu(h, "TYPE").toLowerCase();
   			"subtitles" == k && (k = Ld);
   			if (k == Ld) b = Z(h, "CODECS") || "";
   			else {
   				e = t(e);
   				for (var l = e.next(); !l.done; l = e.next())
   					if (l = l.value, a.G.has(l)) {
   						b = a.G.get(l);
   						break
   					}
   			}
   			e = d.sort().join(",");
   			if (a.i.has(e)) return a.i.get(e);
   			l = a.B++;
   			if (a.j) {
   				f = t(f);
   				for (var m = f.next(); !m.done; m = f.next()) {
   					var n = t(m.value);
   					m = n.next().value;
   					n = n.next().value;
   					(m = c.get(m)) && ot(a.j, l, m, n)
   				}
   			}
   			c = Z(h, "LANGUAGE");
   			f = Z(h, "NAME");
   			m = "YES" == Z(h, "DEFAULT");
   			n = "audio" == k ? sw(h) : null;
   			var p = "audio" == k ? tw(h) : !1,
   				q = Z(h, "CHARACTERISTICS"),
   				u = "YES" == Z(h, "FORCED");
   			h = "audio" == k ? uw(h) : null;
   			d = lw(a, l, d, b, k, c, m, f, n, null, q, u, h, p);
   			d.stream && (d.stream.groupId = g);
   			a.H.has(g) ? a.H.get(g).push(d) : a.H.set(g, [d]);
   			a.i.set(e, d);
   			return d
   		}

   		function kw(a, b) {
   			var c, d, e, f, g, h, k, l, m, n;
   			return O(function(p) {
   				if (1 == p.g) {
   					c = Yu(b, "URI");
   					d = Z(b, "CODECS", "jpeg") || "";
   					if (a.i.has(c)) return p.return(a.i.get(c));
   					e = Z(b, "LANGUAGE");
   					f = Z(b, "NAME");
   					g = Z(b, "CHARACTERISTICS");
   					h = lw(a, a.B++, [c], d, "image", e, !1, f, null, null, g, !1, null, !1);
   					return (k = Z(b, "RESOLUTION")) ? E(p, h.stream.createSegmentIndex(), 3) : p.u(2)
   				}
   				2 != p.g && (l = h.stream.segmentIndex.get(0), m = l.tilesLayout) && (h.stream.width = Number(k.split("x")[0]) * Number(m.split("x")[0]), h.stream.height = Number(k.split("x")[1]) *
   					Number(m.split("x")[1]));
   				if (n = Z(b, "BANDWIDTH")) h.stream.bandwidth = Number(n);
   				a.i.set(c, h);
   				return p.return(h)
   			})
   		}

   		function vw(a, b, c, d, e, f, g, h, k) {
   			for (var l = a.B++, m = [], n = t(b), p = n.next(); !p.done; p = n.next()) {
   				var q = p.value;
   				p = Yu(q, "URI");
   				q = Z(q, "PATHWAY-ID");
   				a.j && q && ot(a.j, l, q, p);
   				m.push(p)
   			}
   			n = m.sort().join(",");
   			if (a.i.has(n)) return a.i.get(n);
   			a: {
   				b = Z(b[0], "CLOSED-CAPTIONS");
   				if ("video" == d)
   					if (b) {
   						if ("NONE" != b) {
   							b = a.F.get(b);
   							break a
   						}
   						a.da = !1
   					} else if (!b && a.F.size)
   					for (b = t(a.F.keys()).next(); !b.done;) {
   						b = a.F.get(b.value);
   						break a
   					}
   				b = null
   			}
   			c = Id(d, c);
   			d = lw(a, l, m, c, d, e, !1, f, g, b, h, !1, k, !1);
   			a.i.set(n, d);
   			return d
   		}

   		function lw(a, b, c, d, e, f, g, h, k, l, m, n, p, q) {
   			function u(C) {
   				var D, J, K, H, I, G, N, L, M, P, R, Q, fa, sa, Ia, xa, Ja, Qa, Aa, Wa;
   				return O(function(ra) {
   					switch (ra.g) {
   						case 1:
   							return D = Nd, J = z.L(), E(ra, vv(a, z.L(), !0), 2);
   						case 2:
   							K = ra.h;
   							if (C.aborted) return ra.return();
   							H = K.uri;
   							H == K.originalUri || J.includes(H) || A.push(H);
   							I = lv(a.Ka, K.data);
   							G = av(I.g, "EXT-X-DEFINE");
   							N = Ev(a, G, H);
   							L = void 0;
   							M = !1;
   							if (!(!a.aa && a.g.hls.disableCodecGuessing || a.da && e == D.ga && !a.g.hls.disableClosedCaptionsDetection)) {
   								ra.u(3);
   								break
   							}
   							a.da = !1;
   							return E(ra, Nv(a, I, v, N),
   								4);
   						case 4:
   							P = ra.h, !P.closedCaptions.size || l && l.size == P.closedCaptions.size || (l = P.closedCaptions, M = !0), !a.aa && a.g.hls.disableCodecGuessing && (L = P.mimeType, d = P.codecs);
   						case 3:
   							return R = xv(a), E(ra, Wv(a, 0, N, I, v, d, e, f, g, h, k, l, m, n, p, q, L), 5);
   						case 5:
   							Q = ra.h;
   							if (C.aborted) return ra.return();
   							fa = Q.stream;
   							xv(a) && !R && Yv(a, I);
   							z.hc = Q.hc;
   							z.Bb = Q.Bb;
   							z.Qd = Q.Qd;
   							z.Pd = Q.Pd;
   							z.nd = Q.nd;
   							z.fe = Q.fe;
   							z.lb = Q.lb;
   							z.mb = Q.mb;
   							z.qf = !0;
   							w.segmentIndex = fa.segmentIndex;
   							w.encrypted = fa.encrypted;
   							w.drmInfos = fa.drmInfos;
   							w.keyIds = fa.keyIds;
   							w.mimeType =
   								fa.mimeType;
   							w.bandwidth = w.bandwidth || fa.bandwidth;
   							w.codecs = w.codecs || fa.codecs;
   							w.closedCaptions = w.closedCaptions || fa.closedCaptions;
   							jw(w);
   							w.drmInfos.length && a.h.newDrmInfo(w);
   							a.o && M && a.h.makeTextStreamsForClosedCaptions(a.o);
   							if (e == D.ga || e == D.U)
   								for (sa = t(a.i.values()), Ia = sa.next(); !Ia.done; Ia = sa.next()) xa = Ia.value, xa.qf || xa.type != e || (xa.stream.mimeType = fa.mimeType, jw(xa.stream));
   							e == D.ma && (Ja = fa.segmentIndex.get(0)) && Ja.ea && (w.mimeType = "application/mp4", jw(w));
   							ww(a) && (a.pb ? Zv(a, [z]) : (a.pb = !0, Qa = Array.from(a.i.values()),
   								Aa = Qa.filter(function(Za) {
   									return Za.stream.segmentIndex
   								}), Zv(a, Aa), Cv(a), Wa = a.m, 0 < Wa && a.A.W(Wa)));
   							F(ra)
   					}
   				})
   			}

   			function v() {
   				return a.j && 1 < c.length ? pt(a.j, b) : A.concat(fv([a.M], c, a.s))
   			}
   			var w = xw(a, d, e, f, g, h, k, l, m, n, p, q),
   				A = [],
   				z = {
   					stream: w,
   					type: e,
   					Gg: A,
   					L: v,
   					hc: 0,
   					Bb: 0,
   					fe: new Map,
   					Qd: !1,
   					Pd: !1,
   					nd: !1,
   					Oe: -1,
   					lb: -1,
   					mb: -1,
   					qf: !1
   				},
   				y = null,
   				B = new AbortController;
   			w.createSegmentIndex = function() {
   				if (y) return y;
   				B = new AbortController;
   				return y = new Promise(function(C) {
   					C(u(B.signal))
   				})
   			};
   			w.closeSegmentIndex = function() {
   				y && !w.segmentIndex &&
   					B.abort();
   				w.segmentIndex && (w.segmentIndex.release(), w.segmentIndex = null);
   				y = null
   			};
   			return z
   		}

   		function ew(a) {
   			var b = Infinity;
   			a = t(a.i.values());
   			for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.stream.segmentIndex && "text" != c.stream.type && (b = Math.min(b, c.Bb));
   			return b
   		}

   		function zv(a, b) {
   			var c = [];
   			b = t(b);
   			for (var d = b.next(); !d.done; d = b.next()) d = d.value, d.segmentIndex && d.segmentIndex.wc(function(e) {
   				c.push(e)
   			});
   			a.l.vd(c)
   		}

   		function Zv(a, b) {
   			if (!xv(a))
   				for (var c = ew(a), d = t(b), e = d.next(); !e.done; e = d.next()) e.value.stream.segmentIndex.vc(0, c);
   			zv(a, b.map(function(f) {
   				return f.stream
   			}));
   			a.g.hls.ignoreManifestProgramDateTime ? Jv(a, b) : (Mv(a, b), 0 < a.g.hls.ignoreManifestProgramDateTimeForTypes.length && Jv(a, b))
   		}

   		function Kv(a, b) {
   			return a.g.hls.ignoreManifestProgramDateTime ? !0 : a.g.hls.ignoreManifestProgramDateTimeForTypes.includes(b)
   		}

   		function ww(a) {
   			if (!a.o) return !1;
   			var b = [],
   				c = [];
   			a = t(a.o.variants);
   			for (var d = a.next(); !d.done; d = a.next()) d = d.value, d.video && b.push(d.video), d.audio && c.push(d.audio);
   			return 0 < b.length && !b.some(function(e) {
   				return e.segmentIndex
   			}) || 0 < c.length && !c.some(function(e) {
   				return e.segmentIndex
   			}) ? !1 : !0
   		}

   		function Wv(a, b, c, d, e, f, g, h, k, l, m, n, p, q, u, v, w) {
   			var A, z, y, B, C, D, J, K, H, I, G, N, L, M, P, R, Q, fa, sa, Ia, xa;
   			return O(function(Ja) {
   				switch (Ja.g) {
   					case 1:
   						if (1 != d.type) throw new T(2, 4, 4017);
   						var Qa = cv(d.g, "EXT-X-PLAYLIST-TYPE"),
   							Aa = cv(d.g, "EXT-X-ENDLIST");
   						Aa = Qa && "VOD" == Qa.value || Aa;
   						Qa = Qa && "EVENT" == Qa.value && !Aa;
   						Qa = !Aa && !Qa;
   						Aa ? Bv(a, uv) : Qa ? Bv(a, dw) : Bv(a, yw);
   						xv(a) && Iv(a, d);
   						if (w) {
   							Ja.u(2);
   							break
   						}
   						return E(Ja, zw(a, g, f, d, c, e), 3);
   					case 3:
   						w = Ja.h;
   					case 2:
   						return E(Ja, Fv(a, d, w, e, c), 4);
   					case 4:
   						A = Ja.h;
   						z = A.drmInfos;
   						y = A.keyIds;
   						B = A.encrypted;
   						C = A.hh;
   						if (B && !z.length && !C) throw new T(2, 4, 4026);
   						D = xw(a, f, g, h, k, l, m, n, p, q, u, v);
   						D.encrypted = B;
   						D.drmInfos = z;
   						D.keyIds = y;
   						D.mimeType = w;
   						jw(D);
   						J = xv(a) ? a.N.get(g) : new Map;
   						K = Gv(a, d, D, J, c, e, g);
   						H = K.segments;
   						if (I = K.bandwidth) D.bandwidth = I;
   						xv(a) && Iv(a, d);
   						G = H[0].startTime;
   						N = H[H.length - 1];
   						L = N.endTime;
   						M = new Kk(H);
   						D.segmentIndex = M;
   						R = (P = cv(d.g, "EXT-X-SERVER-CONTROL")) ? null != Xu(P, "CAN-SKIP-UNTIL") : !1;
   						Q = P ? null != Xu(P, "CAN-BLOCK-RELOAD") : !1;
   						fa = dv(d.g, "EXT-X-MEDIA-SEQUENCE", 0);
   						sa = Hv(fa, H);
   						Ia = sa.lb;
   						xa = sa.mb;
   						return Ja.return({
   							stream: D,
   							type: g,
   							Gg: [],
   							L: e,
   							hc: G,
   							Bb: L,
   							Qd: R,
   							Pd: Q,
   							nd: !1,
   							Oe: -1,
   							lb: Ia,
   							mb: xa,
   							fe: J,
   							qf: !1
   						})
   				}
   			})
   		}

   		function Hv(a, b) {
   			a = a + b.length - 1;
   			var c = -1;
   			if (!b.length) return a++, {
   				lb: a,
   				mb: c
   			};
   			b = b[b.length - 1];
   			var d = b.g;
   			if (!b.g.length) return a++, b.m && (c = 0), {
   				lb: a,
   				mb: c
   			};
   			c = d.length - 1;
   			d[d.length - 1].preload || (a++, c = 0);
   			return {
   				lb: a,
   				mb: c
   			}
   		}

   		function xw(a, b, c, d, e, f, g, h, k, l, m, n) {
   			var p = hw(c, b) || iw(c),
   				q = [];
   			if (k) {
   				k = t(k.split(","));
   				for (var u = k.next(); !u.done; u = k.next()) q.push(u.value)
   			}
   			k = void 0;
   			u = null;
   			c == Ld ? k = q.includes("public.accessibility.transcribes-spoken-dialog") && q.includes("public.accessibility.describes-music-and-sound") ? "caption" : "subtitle" : q.includes("public.accessibility.describes-video") && (u = "visually impaired");
   			q.length || "subtitle" !== k || q.push("subtitle");
   			a = {
   				id: a.B++,
   				originalId: f,
   				groupId: null,
   				createSegmentIndex: function() {
   					return Promise.resolve()
   				},
   				segmentIndex: null,
   				mimeType: p,
   				codecs: b,
   				kind: c == Ld ? "subtitle" : void 0,
   				encrypted: !1,
   				drmInfos: [],
   				keyIds: new Set,
   				language: ue(d || "und"),
   				originalLanguage: d,
   				label: f,
   				type: c,
   				primary: e,
   				trickModeVideo: null,
   				emsgSchemeIdUris: null,
   				frameRate: void 0,
   				pixelAspectRatio: void 0,
   				width: void 0,
   				height: void 0,
   				bandwidth: void 0,
   				roles: q,
   				forced: l,
   				channelsCount: g,
   				audioSamplingRate: m,
   				spatialAudio: n,
   				closedCaptions: h,
   				hdr: void 0,
   				colorGamut: void 0,
   				videoLayout: void 0,
   				tilesLayout: void 0,
   				accessibilityPurpose: u,
   				external: !1,
   				fastSwitching: !1,
   				fullMimeTypes: new Set
   			};
   			jw(a);
   			return a
   		}

   		function Fv(a, b, c, d, e) {
   			var f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H, I, G, N, L, M, P, R;
   			return O(function(Q) {
   				switch (Q.g) {
   					case 1:
   						f = new Map;
   						if (b.segments)
   							for (g = t(b.segments), h = g.next(); !h.done; h = g.next())
   								if (k = h.value, l = av(k.g, "EXT-X-KEY"), m = null, l.length)
   									for (m = aw(a, b, k.g, d, e), n = t(l), p = n.next(); !p.done; p = n.next()) q = p.value, f.set(q, m);
   						v = u = !1;
   						w = [];
   						A = new Set;
   						z = t(f);
   						y = z.next();
   					case 2:
   						if (y.done) {
   							Q.u(4);
   							break
   						}
   						B = y.value;
   						C = t(B);
   						D = C.next().value;
   						J = C.next().value;
   						K = D;
   						H = J;
   						I = Yu(K, "METHOD");
   						if ("NONE" == I) {
   							Q.u(3);
   							break
   						}
   						u = !0;
   						G = Z(K, "KEYFORMAT") || "identity";
   						N = null;
   						if (nw(I)) {
   							v = !0;
   							Q.u(3);
   							break
   						}
   						if ("identity" != G) {
   							N = (L = ow[G]) ? L(K, c) : null;
   							Q.u(6);
   							break
   						}
   						return E(Q, pw(a, K, c, d, H, e), 8);
   					case 8:
   						N = Q.h;
   					case 6:
   						if (N) {
   							if (N.keyIds)
   								for (M = t(N.keyIds), P = M.next(); !P.done; P = M.next()) R = P.value, A.add(R);
   							w.push(N)
   						}
   					case 3:
   						y = z.next();
   						Q.u(2);
   						break;
   					case 4:
   						return Q.return({
   							drmInfos: w,
   							keyIds: A,
   							encrypted: u,
   							hh: v
   						})
   				}
   			})
   		}

   		function Aw(a, b, c, d, e) {
   			if (!window.crypto || !window.crypto.subtle) throw ab("Web Crypto API is not available to decrypt AES. (Web Crypto only exists in secure origins like https)"), new T(2, 4, 4042);
   			var f = 0,
   				g = Z(b, "IV", "");
   			if (g) {
   				var h = zd(g.substr(2));
   				if (16 != h.byteLength) throw new T(2, 4, 4048);
   			} else f = dv(c.g, "EXT-X-MEDIA-SEQUENCE", 0);
   			c = b.toString() + "-" + f;
   			if (!a.fa.has(c)) {
   				var k = {
   					bitsKey: 128,
   					blockCipherMode: "CBC",
   					iv: h,
   					firstMediaSequenceNumber: f
   				};
   				switch (Yu(b, "METHOD")) {
   					case "AES-256":
   						k.bitsKey = 256;
   						break;
   					case "AES-256-CTR":
   						k.bitsKey =
   							256, k.blockCipherMode = "CTR"
   				}
   				k.fetchKey = function() {
   					var l, m, n, p, q, u, v;
   					return O(function(w) {
   						if (1 == w.g) return l = ev(d(), Yu(b, "URI"), e), m = l.sort().join(""), a.K.has(m) || (n = jg(l, a.g.retryParameters), p = bw(a, n, 6), a.K.set(m, p)), E(w, a.K.get(m), 2);
   						if (3 != w.g) {
   							q = w.h;
   							if (!q.data || q.data.byteLength != k.bitsKey / 8) throw new T(2, 4, 4049);
   							u = {
   								name: "CTR" == k.blockCipherMode ? "AES-CTR" : "AES-CBC",
   								length: k.bitsKey
   							};
   							v = k;
   							return E(w, window.crypto.subtle.importKey("raw", q.data, u, !0, ["decrypt"]), 3)
   						}
   						v.cryptoKey = w.h;
   						k.fetchKey = void 0;
   						F(w)
   					})
   				};
   				a.fa.set(c, k)
   			}
   			return a.fa.get(c)
   		}

   		function Iv(a, b) {
   			var c = Infinity,
   				d = b.segments;
   			if (d.length)
   				for (var e = d.length - 1; 0 <= e;) {
   					var f = cv(d[e].g, "EXTINF");
   					if (f) {
   						c = Number(f.value.split(",")[0]);
   						break
   					}
   					e--
   				}
   			d = cv(b.g, "EXT-X-TARGETDURATION");
   			if (!d) throw new T(2, 4, 4024, "EXT-X-TARGETDURATION");
   			d = Number(d.value);
   			if (e = cv(b.g, "EXT-X-PART-INF")) a.S = Number(Yu(e, "PART-TARGET"));
   			b = cv(b.g, "EXT-X-SERVER-CONTROL");
   			a.C && a.S ? (a.m = a.hb ? 5 * a.S <= c ? Math.min(a.S, a.m) : Math.min(c, a.m) : Math.min(a.S, a.m), a.Ja = b ? Number(Yu(b, "PART-HOLD-BACK")) : 0) : (a.m = Math.min(c, a.m), c = b ?
   				Xu(b, "HOLD-BACK") : null, a.ua = c ? Number(c.value) : 0);
   			a.Xa = Math.max(d, a.Xa)
   		}

   		function Yv(a, b) {
   			if (a.g.defaultPresentationDelay) b = a.g.defaultPresentationDelay;
   			else if (a.Ja) b = a.Ja;
   			else if (a.ua) b = a.ua;
   			else {
   				b = b.segments.length;
   				var c = a.g.hls.liveSegmentsDelay;
   				c > b - 2 && (c = Math.max(1, b - 2));
   				b = a.Xa * c
   			}
   			a.l.Pg(0);
   			a.l.Lf(b);
   			a.l.lc(!1)
   		}

   		function aw(a, b, c, d, e) {
   			var f = cv(c, "EXT-X-MAP");
   			if (!f) return null;
   			var g = Yu(f, "URI"),
   				h = ev(d(), g, e);
   			g = [h.toString(), Z(f, "BYTERANGE", "")].join("-");
   			if (!a.ca.has(g)) {
   				var k = void 0,
   					l = null;
   				c = t(c);
   				for (var m = c.next(); !m.done; m = c.next()) m = m.value, "EXT-X-KEY" == m.name ? nw(Yu(m, "METHOD")) && m.id < f.id && (k = Aw(a, m, b, d, e)) : "EXT-X-BYTERANGE" == m.name && m.id < f.id && (l = m);
   				b = Bw(h, f, l, k);
   				a.ca.set(g, b)
   			}
   			return a.ca.get(g)
   		}

   		function Bw(a, b, c, d) {
   			var e = 0,
   				f = null;
   			b = Z(b, "BYTERANGE");
   			!b && c && (b = c.value);
   			b && (e = b.split("@"), f = Number(e[0]), e = Number(e[1]), f = e + f - 1, d && (c = f + 1 - e, c % 16 && (f += 16 - c % 16)));
   			return new zi(function() {
   				return a
   			}, e, f, null, null, null, d)
   		}

   		function Cw(a, b, c, d, e, f, g, h, k) {
   			var l = d.g,
   				m = cv(l, "EXTINF"),
   				n = 0,
   				p = 0,
   				q = null;
   			d.ub.length && !a.C && ab("Low-latency HLS live stream detected, but low-latency streaming mode is not enabled in gowatch Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");
   			var u = null;
   			if (!a.g.hls.ignoreManifestProgramDateTime) {
   				var v = cv(l, "EXT-X-PROGRAM-DATE-TIME");
   				v && v.value && (u = hh(v.value))
   			}
   			var w = Ci;
   			cv(l, "EXT-X-GAP") && (w = 2);
   			if (!m) {
   				if (0 == d.ub.length) throw new T(2, 4, 4024, "EXTINF");
   				if (!a.C) return null
   			}
   			var A = [];
   			v = !1;
   			var z = null,
   				y = !1,
   				B = !1;
   			if (a.C && d.ub.length) {
   				n = ("video/mp4" == g.mimeType || "audio/mp4" == g.mimeType) && window.ReadableStream && a.g.hls.allowLowLatencyByteRangeOptimization;
   				for (var C = u, D = {}, J = 0; J < d.ub.length; D = {
   						Vc: D.Vc,
   						Id: D.Id
   					}, J++) {
   					var K = d.ub[J],
   						H = 0 == J ? c : A[A.length - 1],
   						I = 0 == J ? e : H.endTime,
   						G = Number(Z(K, "DURATION")) || a.S;
   					if (G) {
   						var N = I + G,
   							L = 0,
   							M = null;
   						"EXT-X-PRELOAD-HINT" == K.name ? (L = (L = Z(K, "BYTERANGE-START")) ? Number(L) : 0, (H = Z(K, "BYTERANGE-LENGTH")) ? M = L + Number(H) - 1 : L && (M = Number.MAX_SAFE_INTEGER)) :
   							(L = Z(K, "BYTERANGE"), M = t(cw(H, L)), L = M.next().value, M = M.next().value);
   						D.Id = Z(K, "URI");
   						if (D.Id) {
   							H = Ci;
   							"YES" == Z(K, "GAP") && (H = 2, y = !0);
   							D.Vc = null;
   							var P = function(Q) {
   								return function() {
   									null == Q.Vc && (Q.Vc = ev(h(), Q.Id, f));
   									return Q.Vc
   								}
   							}(D);
   							n && 0 <= L && null != M && (z = P, v = !0);
   							I = new Bi(I, N, P, L, M, b, 0, 0, Infinity, [], "", null, C, H, k);
   							"EXT-X-PRELOAD-HINT" == K.name && (I.rf(), B = !0);
   							"YES" != Z(K, "INDEPENDENT") && 0 < J && I.ee();
   							A.push(I);
   							C && (C += G)
   						}
   					}
   				}
   			}
   			if (m) {
   				m = Number(m.value.split(",")[0]);
   				if (0 == m) return null;
   				n = e + m
   			} else if (A.length) n = A[A.length -
   				1].endTime;
   			else return null;
   			v && (y || 0 != A[0].Ba ? (v = !1, z = null) : A = []);
   			(m = cv(l, "EXT-X-BYTERANGE")) ? (q = t(cw(c, m.value)), p = q.next().value, q = q.next().value) : A.length && (p = A[0].Ba, q = A[A.length - 1].ja);
   			c = "";
   			m = null;
   			"image" == g.type && (c = "1x1", g = cv(l, "EXT-X-TILES")) && (c = Yu(g, "LAYOUT"), (g = Z(g, "DURATION")) && (m = Number(g)));
   			var R = null;
   			b = new Bi(e, n, function() {
   				if (z) return z();
   				null == R && (R = ev(h(), d.h, f));
   				return R || []
   			}, p, q, b, 0, 0, Infinity, A, c, m, u, w, k, 0 < A.length && !!d.h);
   			v && (a.hb = !0, b.zg(), B && b.rf());
   			return b
   		}

   		function cw(a, b) {
   			var c = 0,
   				d = null;
   			b && (c = b.split("@"), b = Number(c[0]), c = c[1] ? Number(c[1]) : a.ja + 1, d = c + b - 1);
   			return [c, d]
   		}

   		function Gv(a, b, c, d, e, f, g) {
   			var h = b.segments,
   				k = void 0,
   				l = dv(b.g, "EXT-X-DISCONTINUITY-SEQUENCE", 0),
   				m = dv(b.g, "EXT-X-MEDIA-SEQUENCE", 0),
   				n = cv(b.g, "EXT-X-SKIP"),
   				p = n ? Number(Z(n, "SKIPPED-SEGMENTS")) : 0,
   				q = m + p,
   				u = 0;
   			xv(a) && d.has(q) && (u = d.get(q));
   			0 === u && a.oa == dw && 0 < d.size && !d.has(q) && (u = a.l.jb());
   			var v = [],
   				w = null;
   			n = [];
   			for (var A = 0; A < h.length; A++) {
   				var z = h[A],
   					y = 0 == A ? u : w.endTime;
   				q = m + p + A;
   				cv(z.g, "EXT-X-DISCONTINUITY") && l++;
   				var B = t(z.g);
   				for (var C = B.next(); !C.done; C = B.next()) C = C.value, "EXT-X-KEY" == C.name && (nw(Yu(C, "METHOD")) ?
   					k = Aw(a, C, b, f, e) : k = void 0);
   				d.set(q, y);
   				B = aw(a, b, z.g, f, e);
   				!a.C && a.h.isAutoLowLatencyMode() && (a.h.enableLowLatencyMode(), a.C = a.h.isLowLatencyMode());
   				if (y = Cw(a, B, w, z, y, e, c, f, k))(w = dv(z.g, "EXT-X-BITRATE")) ? n.push({
   					bitrate: w,
   					duration: y.endTime - y.startTime
   				}) : n.length && (w = n.pop(), w.duration += y.endTime - y.startTime, n.push(w)), w = y, y.j = l, Kv(a, g) && null != a.J && q < a.J || v.push(y)
   			}
   			b = void 0;
   			n.length && (b = n.reduce(function(D, J) {
   				return D + J.duration
   			}, 0), b = Math.round(n.reduce(function(D, J) {
   					return D + J.bitrate * J.duration
   				}, 0) /
   				b * 1E3));
   			if (n = v.some(function(D) {
   					return null != D.h
   				}))
   				for (c = {}, d = 0; d < v.length; c = {
   						Oc: c.Oc,
   						Nc: c.Nc,
   						Dd: c.Dd,
   						Ib: c.Ib,
   						Kc: c.Kc
   					}, d++)
   					if (c.Ib = v[d], null == c.Ib.h)
   						for (c.Nc = 0, c.Oc = d, e = function(D) {
   								return function() {
   									var J = v[D.Oc];
   									if (J) {
   										if (null != J.h) return J.h + D.Nc;
   										D.Nc -= J.endTime - J.startTime;
   										D.Oc += 1
   									}
   									return null
   								}
   							}(c), c.Kc = 0, c.Dd = d, f = function(D) {
   								return function() {
   									var J = v[D.Dd];
   									if (J) {
   										J != D.Ib && (D.Kc += J.endTime - J.startTime);
   										if (null != J.h) return J.h + D.Kc;
   										--D.Dd
   									}
   									return null
   								}
   							}(c); null == c.Ib.h;) c.Ib.h = f(), null == c.Ib.h && (c.Ib.h =
   							e());
   			if (n)
   				for (c = t(v), d = c.next(); !d.done; d = c.next())
   					for (e = d.value, d = e.h, e = t(e.g), f = e.next(); !f.done; f = e.next()) f = f.value, f.h = d, d += f.endTime - f.startTime;
   			c = a.ba;
   			if (n && Infinity != c && !Kv(a, g))
   				for (a = t(v), d = a.next(); !d.done; d = a.next()) d.value.Qf(c);
   			return {
   				segments: v,
   				bandwidth: b
   			}
   		}

   		function hw(a, b) {
   			if (a == Ld) {
   				if ("vtt" == b || "wvtt" == b) return "text/vtt";
   				if (b && "" !== b) return "application/mp4"
   			}
   			return "image" != a || b && "jpeg" != b ? "audio" == a && "mp4a.40.34" == b ? "audio/mpeg" : "mjpg" == b ? "application/mp4" : null : "image/jpeg"
   		}

   		function iw(a) {
   			return a == Ld ? "text/vtt" : Dw[a].mp4
   		}

   		function zw(a, b, c, d, e, f) {
   			var g, h, k, l, m, n, p, q, u, v, w, A, z;
   			return O(function(y) {
   				switch (y.g) {
   					case 1:
   						g = pg;
   						h = Math.trunc((d.segments.length - 1) / 2);
   						k = ev(f(), d.segments[h].h, e);
   						l = new rc(k[0]);
   						m = l.Qa.split(".").pop();
   						n = Dw[b];
   						if ((p = n[m]) || (p = $v[m]) || (p = hw(b, c))) return y.return(p);
   						u = 1;
   						v = jg(k, a.g.retryParameters);
   						ua(y, 2);
   						v.method = "HEAD";
   						return E(y, bw(a, v, g, {
   							type: u
   						}), 4);
   					case 4:
   						w = y.h;
   						q = w.headers["content-type"];
   						wa(y, 3);
   						break;
   					case 2:
   						A = ya(y);
   						if (!A || 1002 != A.code && 1001 != A.code) {
   							y.u(3);
   							break
   						}
   						v.method = "GET";
   						return E(y,
   							bw(a, v, g, {
   								type: u
   							}), 6);
   					case 6:
   						z = y.h, q = z.headers["content-type"];
   					case 3:
   						return q ? y.return(q.split(";")[0]) : y.return(iw(b))
   				}
   			})
   		}

   		function Xv(a, b, c, d, e, f, g) {
   			a && (a.width = Number(b) || void 0, a.height = Number(c) || void 0, a.frameRate = Number(d) || void 0, a.hdr = e || void 0, a.videoLayout = f || void 0, a.colorGamut = g || void 0)
   		}

   		function vv(a, b, c) {
   			return bw(a, jg(b, a.g.retryParameters), 0, {
   				type: c ? 2 : 3
   			})
   		}

   		function tv(a) {
   			var b, c, d, e, f, g;
   			O(function(h) {
   				switch (h.g) {
   					case 1:
   						if (!a.h) return h.return();
   						ua(h, 2);
   						b = Date.now();
   						return E(h, a.update(), 4);
   					case 4:
   						c = Date.now();
   						xv(a) && (d = (c - b) / 1E3, a.gb.sample(1, d), e = a.m, f = Math.max(0, e - Va(a.gb)), a.A.W(f));
   						wa(h, 3);
   						break;
   					case 2:
   						g = ya(h);
   						if (!a.h) return h.return();
   						if (a.g.raiseFatalErrorOnManifestUpdateRequestFailure) return a.h.onError(g), h.return();
   						g.severity = 1;
   						a.h.onError(g);
   						a.A.W(.1);
   					case 3:
   						if (!a.h) return h.return();
   						a.h.onManifestUpdated();
   						F(h)
   				}
   			})
   		}

   		function xv(a) {
   			return a.oa != uv
   		}

   		function Bv(a, b) {
   			a.oa = b;
   			a.l && a.l.lc(!xv(a));
   			xv(a) || a.A.stop()
   		}

   		function bw(a, b, c, d) {
   			if (!a.V) throw new T(2, 7, 7001);
   			b = a.h.networkingEngine.request(c, b, d);
   			dg(a.V, b);
   			return b.promise
   		}

   		function nw(a) {
   			return "AES-128" == a || "AES-256" == a || "AES-256-CTR" == a
   		}

   		function pw(a, b, c, d, e, f) {
   			var g, h, k, l, m, n, p, q, u, v, w, A, z, y, B;
   			return O(function(C) {
   				switch (C.g) {
   					case 1:
   						if ("video/mp2t" == c) throw new T(2, 4, 4040);
   						if (window.gowatchMediaKeysPolyfill) throw new T(2, 4, 4041);
   						g = Yu(b, "METHOD");
   						h = ["SAMPLE-AES", "SAMPLE-AES-CTR"];
   						if (!h.includes(g)) return C.return(null);
   						k = ev(d(), Yu(b, "URI"), f);
   						if (k[0].startsWith("data:text/plain;base64,")) {
   							l = Ad(yd(k[0].split("data:text/plain;base64,").pop()));
   							C.u(2);
   							break
   						}
   						m = k.sort().join("");
   						a.za.has(m) || (n = jg(k, a.g.retryParameters), p = bw(a, n, 6), a.za.set(m,
   							p));
   						return E(C, a.za.get(m), 3);
   					case 3:
   						q = C.h, l = Ad(q.data);
   					case 2:
   						u = "00000000000000000000000000000000";
   						if (!e) {
   							C.u(4);
   							break
   						}
   						if (a.na.has(e)) {
   							v = a.na.get(e);
   							C.u(5);
   							break
   						}
   						w = ol(e.L(), e.bc(), e.Zb(), a.g.retryParameters);
   						A = pg;
   						return E(C, bw(a, w, A, {
   							type: 0
   						}), 6);
   					case 6:
   						z = C.h, v = jt(z.data), a.na.set(e, v);
   					case 5:
   						v && (u = v);
   					case 4:
   						return y = new Map, y.set(u, l), B = "cenc", "SAMPLE-AES" == g && (B = "cbcs"), C.return(Fd(y, B))
   				}
   			})
   		}
   		S("gowatch.hls.HlsParser", sv);
   		var $v = {
   				aac: "audio/aac",
   				ac3: "audio/ac3",
   				ec3: "audio/ec3",
   				mp3: "audio/mpeg"
   			},
   			Dw = {
   				audio: {
   					mp4: "audio/mp4",
   					mp4a: "audio/mp4",
   					m4s: "audio/mp4",
   					m4i: "audio/mp4",
   					m4a: "audio/mp4",
   					m4f: "audio/mp4",
   					cmfa: "audio/mp4",
   					ts: "video/mp2t",
   					tsa: "video/mp2t"
   				},
   				video: {
   					mp4: "video/mp4",
   					mp4v: "video/mp4",
   					m4s: "video/mp4",
   					m4i: "video/mp4",
   					m4v: "video/mp4",
   					m4f: "video/mp4",
   					cmfv: "video/mp4",
   					ts: "video/mp2t",
   					tsv: "video/mp2t"
   				},
   				text: {
   					mp4: "application/mp4",
   					m4s: "application/mp4",
   					m4i: "application/mp4",
   					m4f: "application/mp4",
   					cmft: "application/mp4",
   					vtt: "text/vtt",
   					webvtt: "text/vtt",
   					ttml: "application/ttml+xml"
   				},
   				image: {
   					jpg: "image/jpeg",
   					png: "image/png",
   					svg: "image/svg+xml",
   					webp: "image/webp",
   					avif: "image/avif"
   				}
   			},
   			ow = {
   				"com.apple.streamingkeydelivery": function(a, b) {
   					if ("video/mp2t" == b) throw new T(2, 4, 4040);
   					if (window.gowatchMediaKeysPolyfill) throw new T(2, 4, 4041);
   					a = Yu(a, "METHOD");
   					if (!["SAMPLE-AES", "SAMPLE-AES-CTR"].includes(a)) return null;
   					b = "cenc";
   					"SAMPLE-AES" == a && (b = "cbcs");
   					return Ed("com.apple.fps", b, [{
   						initDataType: "sinf",
   						initData: new Uint8Array(0),
   						keyId: null
   					}])
   				},
   				"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": function(a) {
   					var b = Yu(a, "METHOD");
   					if (!["SAMPLE-AES", "SAMPLE-AES-CTR"].includes(b)) return null;
   					var c = "cenc";
   					"SAMPLE-AES" == b && (c = "cbcs");
   					b = Yu(a, "URI");
   					b = rv(b.split("?")[0]);
   					b = Ab(b.data);
   					c = Ed("com.widevine.alpha", c, [{
   						initDataType: "cenc",
   						initData: b
   					}]);
   					if (a = Z(a, "KEYID")) c.keyIds = new Set([a.toLowerCase().substr(2)]);
   					return c
   				},
   				"com.microsoft.playready": function(a) {
   					var b = Yu(a, "METHOD");
   					if (!["SAMPLE-AES", "SAMPLE-AES-CTR"].includes(b)) return null;
   					var c = "cenc";
   					"SAMPLE-AES" == b && (c = "cbcs");
   					a = Yu(a, "URI");
   					a = rv(a.split("?")[0]);
   					a = Ab(a.data);
   					b = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
   					a = Qg(a, b, new Set, 0);
   					return Ed("com.microsoft.playready", c, [{
   						initDataType: "cenc",
   						initData: a
   					}])
   				}
   			},
   			uv = "VOD",
   			yw = "EVENT",
   			dw = "LIVE",
   			Av = {
   				dh: uv,
   				cj: yw,
   				kj: dw
   			};
   		ri["application/x-mpegurl"] = function() {
   			return new sv
   		};
   		ri["application/vnd.apple.mpegurl"] = function() {
   			return new sv
   		};

   		function Ew(a) {
   			var b = 0,
   				c = Eb(a),
   				d = c.getUint32(b, !0);
   			if (d != a.byteLength) return [];
   			a: {
   				a = b + 6;
   				for (b = []; a < c.byteLength - 1;) {
   					d = c.getUint16(a, !0);
   					a += 2;
   					var e = c.getUint16(a, !0);
   					a += 2;
   					if (0 != (e & 1) || e + a > c.byteLength) {
   						c = [];
   						break a
   					}
   					var f = Ab(c, a, e);
   					b.push({
   						type: d,
   						value: f
   					});
   					a += e
   				}
   				c = b
   			}
   			return c
   		}

   		function Fw(a) {
   			if (a = Gw(a)) a: {
   				a = t(ah(a, "DATA"));
   				for (var b = a.next(); !b.done; b = a.next())
   					if (b = bh(b.value, "LA_URL")) {
   						a = Zg(b);
   						break a
   					} a = ""
   			}
   			else a = "";
   			return a
   		}

   		function Gw(a) {
   			a = yd(Zg(a));
   			a = Ew(a).filter(function(b) {
   				return b.type === Hw
   			})[0];
   			if (!a) return null;
   			a = ld(a.value, !0);
   			return (a = Sg(a, "WRMHEADER")) ? a : null
   		}
   		var Hw = 1,
   			Iw = (new Map).set("com.microsoft.playready", Fw).set("com.microsoft.playready.recommendation", Fw).set("com.microsoft.playready.software", Fw).set("com.microsoft.playready.hardware", Fw);

   		function Jw(a) {
   			if (!Kw) {
   				Kw = !0;
   				var b = new Uint8Array([105, 115, 111, 109]),
   					c = new Uint8Array([97, 118, 99, 49]),
   					d = new Uint8Array([0, 0, 0, 1]);
   				Lw = Mw("ftyp", b, d, b, c);
   				b = Mw("dref", Nw);
   				Ow = Mw("dinf", b)
   			}
   			this.g = a
   		}

   		function Pw(a) {
   			for (var b = [], c = t(a.g), d = c.next(); !d.done; d = c.next()) {
   				var e = b,
   					f = e.push;
   				var g = d.value;
   				d = Mw;
   				var h = g.id + 1;
   				var k = g.stream.width || 0,
   					l = g.stream.height || 0;
   				"audio" == g.type && (l = k = 0);
   				var m = g.duration * g.timescale,
   					n = Math.floor(m / (Qw + 1));
   				m = Math.floor(m % (Qw + 1));
   				h = new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3].concat(x(Rw(h, 4)), [0, 0, 0, 0], x(Rw(n, 4)), x(Rw(m, 4)), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0], x(Rw(k, 2)), [0, 0], x(Rw(l,
   					2)), [0, 0]));
   				h = Mw("tkhd", h);
   				k = Mw;
   				n = g.duration * g.timescale;
   				l = Math.floor(n / (Qw + 1));
   				n = Math.floor(n % (Qw + 1));
   				m = g.stream.language;
   				m = m.charCodeAt(0) - 96 << 10 | m.charCodeAt(1) - 96 << 5 | m.charCodeAt(2) - 96;
   				l = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3].concat(x(Rw(g.timescale, 4)), x(Rw(l, 4)), x(Rw(n, 4)), x(Rw(m, 2)), [0, 0]));
   				l = Mw("mdhd", l);
   				n = g;
   				m = new Uint8Array([]);
   				switch (n.type) {
   					case "video":
   						m = Sw;
   						break;
   					case "audio":
   						m = Tw
   				}
   				n = Mw("hdlr", m);
   				a: {
   					switch (g.type) {
   						case "video":
   							g = Mw("minf", Mw("vmhd", Uw), Ow, Vw(g));
   							break a;
   						case "audio":
   							g = Mw("minf", Mw("smhd", Ww), Ow, Vw(g));
   							break a
   					}
   					g = new Uint8Array([])
   				}
   				g = k("mdia", l, n, g);
   				d = d("trak", h, g);
   				f.call(e, d)
   			}
   			b = Bd.apply(vd, x(b));
   			f = a.g[0];
   			c = Mw;
   			d = f.duration * f.timescale;
   			e = Math.floor(d / (Qw + 1));
   			d = Math.floor(d % (Qw + 1));
   			e = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3].concat(x(Rw(f.timescale, 4)), x(Rw(e, 4)), x(Rw(d, 4)), [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255,
   				255
   			]));
   			e = Mw("mvhd", e);
   			d = [];
   			a = t(a.g);
   			for (k = a.next(); !k.done; k = a.next()) g = d, h = g.push, k = new Uint8Array([0, 0, 0, 0].concat(x(Rw(k.value.id + 1, 4)), [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1])), k = Mw("trex", k), h.call(g, k);
   			a = Bd.apply(vd, x(d));
   			a = Mw("mvex", a);
   			d = [];
   			if (f.encrypted) {
   				f = t(f.stream.drmInfos);
   				for (g = f.next(); !g.done; g = f.next())
   					if (g = g.value, g.initData)
   						for (g = t(g.initData), h = g.next(); !h.done; h = g.next()) d.push(h.value.initData);
   				f = Bd.apply(vd, x(d))
   			} else f = new Uint8Array([]);
   			a = c("moov", e, b, a, f);
   			b = new Uint8Array(Lw.byteLength +
   				a.byteLength);
   			b.set(Lw);
   			b.set(a, Lw.byteLength);
   			return b
   		}

   		function Vw(a) {
   			var b = Mw,
   				c = new Uint8Array([]);
   			switch (a.type) {
   				case "video":
   					if (a.codecs.includes("avc1")) {
   						c = a.stream.width || 0;
   						var d = a.stream.height || 0;
   						if (0 < a.sa.byteLength) var e = Mw("avcC", a.sa);
   						else {
   							e = Mw;
   							for (var f = 7, g = [], h = [], k = 0, l = 0, m = 0, n = 0; n < a.Va.length; n++) {
   								var p = Xw(a.Va[n]);
   								switch (p[0] & 31) {
   									case 7:
   										g.push(p);
   										f += p.length + 2;
   										break;
   									case 8:
   										h.push(p), f += p.length + 2
   								}
   							}
   							0 < g.length && (k = g[0][1], m = g[0][2], l = g[0][3]);
   							f = new Uint8Array(f);
   							n = 0;
   							f[n++] = 1;
   							f[n++] = k;
   							f[n++] = m;
   							f[n++] = l;
   							f[n++] = 255;
   							f[n++] = 224 | g.length;
   							for (k =
   								0; k < g.length; k++) f[n++] = (g[k].length & 65280) >> 8, f[n++] = g[k].length & 255, f.set(g[k], n), n += g[k].length;
   							f[n++] = h.length;
   							for (g = 0; g < h.length; g++) f[n++] = (h[g].length & 65280) >> 8, f[n++] = h[g].length & 255, f.set(h[g], n), n += h[g].length;
   							e = e("avcC", f)
   						}
   						c = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].concat(x(Rw(c, 2)), x(Rw(d, 2)), [0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]));
   						d = "avc1";
   						h = Yw(a);
   						g = new Uint8Array([]);
   						a.encrypted && (g = Zw(a), d = "encv");
   						c = Mw(d, c, e, h, g)
   					} else a.codecs.includes("hvc1") && (d = a.stream.width || 0, e = a.stream.height || 0, c = new Uint8Array([]), 0 < a.sa.byteLength && (c = Mw("hvcC", a.sa)), d = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].concat(x(Rw(d, 2)), x(Rw(e, 2)), [0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17])), e = "hvc1", h = Yw(a), g = new Uint8Array([]), a.encrypted && (g = Zw(a), e = "encv"), c = Mw(e, d,
   						c, h, g));
   					break;
   				case "audio":
   					if (a.codecs.includes("mp3")) a = Mw(".mp3", $w(a));
   					else if (a.codecs.includes("ac-3")) c = Mw("dac3", a.ia), d = "ac-3", e = new Uint8Array([]), a.encrypted && (e = Zw(a), d = "enca"), a = Mw(d, $w(a), c, e);
   					else if (a.codecs.includes("ec-3")) c = Mw("dec3", a.ia), d = "ec-3", e = new Uint8Array([]), a.encrypted && (e = Zw(a), d = "enca"), a = Mw(d, $w(a), c, e);
   					else if (a.codecs.includes("opus")) c = Mw("dOps", a.ia), d = "Opus", e = new Uint8Array([]), a.encrypted && (e = Zw(a), d = "enca"), a = Mw(d, $w(a), c, e);
   					else {
   						if (0 < a.ia.byteLength) c = Mw("esds",
   							a.ia);
   						else {
   							c = Mw;
   							d = a.id + 1;
   							e = a.stream.channelsCount || 2;
   							g = a.stream.audioSamplingRate || 44100;
   							k = Id("audio", a.codecs.split(","));
   							l = {
   								96E3: 0,
   								88200: 1,
   								64E3: 2,
   								48E3: 3,
   								44100: 4,
   								32E3: 5,
   								24E3: 6,
   								22050: 7,
   								16E3: 8,
   								12E3: 9,
   								11025: 10,
   								8E3: 11,
   								7350: 12
   							};
   							h = l[g];
   							if ("mp4a.40.5" === k || "mp4a.40.29" === k) h = l[2 * g];
   							g = parseInt(k.split(".").pop(), 10);
   							d = new Uint8Array([0, 0, 0, 0, 3, 25].concat(x(Rw(d, 2)), [0, 4, 17, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, g << 3 | h >>> 1, h << 7 | e << 3, 6, 1, 2]));
   							c = c("esds", d)
   						}
   						d = "mp4a";
   						e = new Uint8Array([]);
   						a.encrypted && (e = Zw(a), d = "enca");
   						a = Mw(d, $w(a), c, e)
   					}
   					c = a
   			}
   			a = Mw("stsd", ax, c);
   			return b("stbl", a, Mw("stts", bx), Mw("stsc", cx), Mw("stsz", dx), Mw("stco", ex))
   		}

   		function Yw(a) {
   			if (!a.xa && !a.ya) return new Uint8Array([]);
   			var b = a.ya;
   			a = new Uint8Array([].concat(x(Rw(a.xa, 4)), x(Rw(b, 4))));
   			return Mw("pasp", a)
   		}

   		function $w(a) {
   			return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, a.stream.channelsCount || 2, 0, 16, 0, 0, 0, 0].concat(x(Rw(a.stream.audioSamplingRate || 44100, 2)), [0, 0]))
   		}

   		function Zw(a) {
   			var b = Mw;
   			var c = a.codecs.substring(0, a.codecs.indexOf("."));
   			for (var d = 0, e = 0; e < c.length; e += 1) d |= c.charCodeAt(e) << 8 * (c.length - e - 1);
   			c = new Uint8Array([].concat(x(Rw(d, 4))));
   			c = Mw("frma", c);
   			d = new Uint8Array([0, 0, 0, 0, 99, 101, 110, 99, 0, 1, 0, 0]);
   			d = Mw("schm", d);
   			e = Mw;
   			var f = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
   			a = t(a.stream.drmInfos);
   			for (var g = a.next(); !g.done; g = a.next())
   				if ((g = g.value) && g.keyIds && g.keyIds.size) {
   					g = t(g.keyIds);
   					for (var h = g.next(); !h.done; h = g.next()) f = Xw(h.value)
   				} a = new Uint8Array([0,
   				0, 0, 0, 0, 0, 1, 8
   			]);
   			f = Mw("tenc", a, f);
   			return b("sinf", c, d, e("schi", f))
   		}

   		function fx(a) {
   			var b = [];
   			a = t(a.g);
   			for (var c = a.next(); !c.done; c = a.next()) {
   				c = c.value;
   				var d = b.push,
   					e = d.apply;
   				var f = Mw;
   				var g = new Uint8Array([0, 0, 0, 0].concat(x(Rw(c.data ? c.data.ob : 0, 4))));
   				g = Mw("mfhd", g);
   				var h;
   				var k = c.data ? c.data.Sa : [];
   				var l = new Uint8Array(4 + k.length);
   				for (h = 0; h < k.length; h++) {
   					var m = k[h].flags;
   					l[h + 4] = m.Ma << 4 | m.Oa << 2 | m.Na
   				}
   				k = Mw("sdtp", l);
   				var n = k.length + 92;
   				l = Mw;
   				h = new Uint8Array([0, 0, 0, 58].concat(x(Rw(c.id + 1, 4)), [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
   				h = Mw("tfhd", h);
   				m = c.data ? c.data.baseMediaDecodeTime :
   					0;
   				var p = Math.floor(m % (Qw + 1));
   				m = new Uint8Array([1, 0, 0, 0].concat(x(Rw(Math.floor(m / (Qw + 1)), 4)), x(Rw(p, 4))));
   				m = Mw("tfdt", m);
   				var q = n;
   				n = c.data ? c.data.Sa : [];
   				p = n.length;
   				var u = 12 + 16 * p,
   					v = new Uint8Array(u);
   				q += 8 + u;
   				v.set(["video" === c.type ? 1 : 0, 0, 15, 1].concat(x(Rw(p, 4)), x(Rw(q, 4))), 0);
   				for (q = 0; q < p; q++) {
   					var w = n[q];
   					u = Rw(w.duration, 4);
   					var A = Rw(w.size, 4),
   						z = w.flags;
   					w = Rw(w.Za, 4);
   					v.set([].concat(x(u), x(A), [z.ab << 2 | z.Ma, z.Oa << 6 | z.Na << 4 | z.bb, z.La & 61440, z.La & 15], x(w)), 12 + 16 * q)
   				}
   				n = Mw("trun", v);
   				k = l("traf", h, m, n, k);
   				f = f("moof",
   					g, k);
   				e.call(d, b, [f, gx(c)])
   			}
   			return Bd.apply(vd, x(b))
   		}

   		function gx(a) {
   			a = (a.data ? a.data.Sa : []).map(function(b) {
   				return b.data
   			});
   			a = Bd.apply(vd, x(a));
   			return Mw("mdat", a)
   		}

   		function Rw(a, b) {
   			var c = [];
   			for (--b; 0 <= b; b--) c.push(a >> 8 * b & 255);
   			return c
   		}

   		function Xw(a) {
   			for (var b = new Uint8Array(a.length / 2), c = 0; c < a.length / 2; c += 1) b[c] = parseInt(String(a[2 * c] + a[2 * c + 1]), 16);
   			return b
   		}

   		function Mw(a) {
   			var b = Ka.apply(1, arguments),
   				c = hx[a];
   			c || (c = [a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2), a.charCodeAt(3)], hx[a] = c);
   			for (var d = 8, e = b.length - 1; 0 <= e; e--) d += b[e].byteLength;
   			e = new Uint8Array(d);
   			e[0] = d >> 24 & 255;
   			e[1] = d >> 16 & 255;
   			e[2] = d >> 8 & 255;
   			e[3] = d & 255;
   			e.set(c, 4);
   			c = 0;
   			for (d = 8; c < b.length; c++) e.set(b[c], d), d += b[c].byteLength;
   			return e
   		}
   		var Kw = !1,
   			Qw = Math.pow(2, 32) - 1,
   			hx = {},
   			Sw = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
   			Tw = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
   			bx = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
   			cx = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
   			ex = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
   			dx = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
   			Uw = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
   			Ww = new Uint8Array([0,
   				0, 0, 0, 0, 0, 0, 0
   			]),
   			ax = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]),
   			Lw = new Uint8Array([]),
   			Nw = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
   			Ow = new Uint8Array([]);

   		function ix() {
   			var a = this;
   			this.h = this.g = null;
   			this.l = [];
   			this.j = null;
   			this.s = 1;
   			this.i = null;
   			this.B = new Ua(5);
   			this.o = new Lc(function() {
   				jx(a)
   			});
   			this.A = new cg;
   			this.m = new Map
   		}
   		r = ix.prototype;
   		r.configure = function(a) {
   			this.g = a
   		};
   		r.start = function(a, b) {
   			var c = this;
   			return O(function(d) {
   				if (1 == d.g) return c.l = [a], c.h = b, E(d, kx(c), 2);
   				if (!c.h) throw new T(2, 7, 7001);
   				return d.return(c.j)
   			})
   		};

   		function jx(a) {
   			var b;
   			O(function(c) {
   				switch (c.g) {
   					case 1:
   						return ua(c, 2), E(c, kx(a), 4);
   					case 4:
   						wa(c, 3);
   						break;
   					case 2:
   						b = ya(c), a.h && (b.severity = 1, a.h.onError(b));
   					case 3:
   						if (!a.h) return c.return();
   						F(c)
   				}
   			})
   		}
   		r.stop = function() {
   			this.g = this.h = null;
   			this.l = [];
   			this.j = null;
   			null != this.o && (this.o.stop(), this.o = null);
   			this.m.clear();
   			return this.A.destroy()
   		};
   		r.update = function() {
   			var a = this,
   				b;
   			return O(function(c) {
   				if (1 == c.g) return ua(c, 2), E(c, kx(a), 4);
   				if (2 != c.g) return wa(c, 0);
   				b = ya(c);
   				if (!a.h || !b) return c.return();
   				a.h.onError(b);
   				F(c)
   			})
   		};
   		r.onExpirationUpdated = function() {};
   		r.onInitialVariantChosen = function() {};
   		r.banLocation = function() {};

   		function kx(a) {
   			var b, c, d, e, f, g, h;
   			return O(function(k) {
   				if (1 == k.g) return b = jg(a.l, a.g.retryParameters), c = a.h.networkingEngine, d = Date.now(), e = c.request(0, b, {
   					type: 5
   				}), dg(a.A, e), E(k, e.promise, 2);
   				f = k.h;
   				if (!a.h) return k.return();
   				f.uri && !a.l.includes(f.uri) && a.l.unshift(f.uri);
   				var l = f.uri,
   					m = f.data,
   					n = a.g.mss.manifestPreprocessor;
   				if (n != im) {
   					qb("manifest.mss.manifestPreprocessor configuration", "Please Use manifest.mss.manifestPreprocessorTXml instead.");
   					m = au(m, "SmoothStreamingMedia");
   					if (!m) throw new T(2, 4, 4046,
   						l);
   					n(m);
   					m = qd(m.outerHTML)
   				}
   				var p = Rg(m, "SmoothStreamingMedia");
   				if (!p) throw new T(2, 4, 4046, l);
   				l = a.g.mss.manifestPreprocessorTXml;
   				l != jm && l(p);
   				a.i || (a.i = new ok(null, 0));
   				if (l = eh(p, "IsLive", oh, !1)) throw new T(2, 4, 4047);
   				a.i.lc(!l);
   				n = eh(p, "TimeScale", mh, 1E7);
   				m = eh(p, "DVRWindowLength", mh);
   				l && (0 === m || isNaN(m)) && (m = Infinity);
   				var q = eh(p, "CanSeek", oh, !1);
   				0 === m && q && (m = Infinity);
   				q = null;
   				m && 0 < m && (q = m / n);
   				l && !isNaN(a.g.availabilityWindowOverride) && (q = a.g.availabilityWindowOverride);
   				null == q && (q = Infinity);
   				a.i.te(q);
   				m = eh(p,
   					"Duration", mh, Infinity);
   				l || a.i.Ta(m / n);
   				l = {
   					variants: [],
   					textStreams: [],
   					timescale: n,
   					duration: m / n
   				};
   				q = Yg(p, "Protection");
   				var u;
   				n = a.g.mss.keySystemsBySystemId;
   				m = [];
   				q = t(q);
   				for (u = q.next(); !u.done; u = q.next()) m = m.concat(Yg(u.value, "ProtectionHeader"));
   				if (m.length) {
   					q = [];
   					for (u = 0; u < m.length; u++) {
   						var v = m[u],
   							w = v.attributes.SystemID.toLowerCase(),
   							A = n[w];
   						if (A) {
   							var z = Gw(v);
   							if (z) a: {
   								z = t(ah(z, "DATA"));
   								for (var y = z.next(); !y.done; y = z.next())
   									if (y = bh(y.value, "KID")) {
   										z = yd(Zg(y));
   										z = new Uint8Array([z[3], z[2], z[1], z[0], z[5],
   											z[4], z[7], z[6]
   										].concat(x(z.slice(8))));
   										z = Ad(z);
   										break a
   									} z = null
   							}
   							else z = null;
   							y = yd(Zg(v));
   							w = zd(w.replace(/-/g, ""));
   							w = [{
   								initData: Qg(y, w, new Set, 0),
   								initDataType: "cenc",
   								keyId: z
   							}];
   							w = Ed(A, "cenc", w);
   							z && w.keyIds.add(z);
   							if (A = Iw.get(A)) w.licenseServerUri = A(v);
   							q.push(w)
   						}
   					}
   					n = q
   				} else n = [];
   				u = n;
   				q = [];
   				n = [];
   				m = [];
   				p = Yg(p, "StreamIndex");
   				p = t(p);
   				for (v = p.next(); !v.done; v = p.next()) {
   					v = v.value;
   					A = Yg(v, "QualityLevel");
   					w = l.timescale;
   					z = l.duration;
   					y = Yg(v, "c");
   					for (var B = [], C = 0, D = 0; D < y.length; ++D) {
   						var J = y[D],
   							K = y[D + 1],
   							H = eh(J, "t", mh),
   							I =
   							eh(J, "d", mh);
   						J = eh(J, "r", kh);
   						if (!I) break;
   						H = null != H ? H : C;
   						J = J || 0;
   						if (0 > J)
   							if (K) {
   								K = eh(K, "t", mh);
   								if (null == K) break;
   								else if (H >= K) break;
   								J = Math.ceil((K - H) / I) - 1
   							} else {
   								if (Infinity == z) break;
   								else if (H / w >= z) break;
   								J = Math.ceil((z * w - H) / I) - 1
   							} for (K = 0; K <= J; ++K) C = H + I, B.push({
   							start: H / w,
   							end: C / w,
   							Xf: H
   						}), H = C
   					}
   					w = B;
   					A = t(A);
   					for (z = A.next(); !z.done; z = A.next())(z = lx(a, v, z.value, w, u, l)) && ("audio" != z.type || a.g.disableAudio ? "video" != z.type || a.g.disableVideo ? z.type != Ld || a.g.disableText || m.push(z) : n.push(z) : q.push(z))
   				}
   				p = [];
   				q = t(0 < q.length ?
   					q : [null]);
   				for (u = q.next(); !u.done; u = q.next())
   					for (u = u.value, v = t(0 < n.length ? n : [null]), z = v.next(); !z.done; z = v.next()) A = p, w = A.push, z = z.value, y = 0, u && u.bandwidth && 0 < u.bandwidth && (y += u.bandwidth), z && z.bandwidth && 0 < z.bandwidth && (y += z.bandwidth), z = {
   						id: a.s++,
   						language: u ? u.language : "und",
   						disabledUntilTime: 0,
   						primary: !!u && u.primary || !!z && z.primary,
   						audio: u,
   						video: z,
   						bandwidth: y,
   						allowedByApplication: !0,
   						allowedByKeySystem: !0,
   						decodingInfos: []
   					}, w.call(A, z);
   				l.variants = p;
   				l.textStreams = m;
   				a.j ? (a.j.variants = l.variants, a.j.textStreams =
   					l.textStreams, a.h.filter(a.j)) : (a.j = {
   					presentationTimeline: a.i,
   					variants: l.variants,
   					textStreams: l.textStreams,
   					imageStreams: [],
   					offlineSessionIds: [],
   					minBufferTime: 0,
   					sequenceMode: a.g.mss.sequenceMode,
   					ignoreManifestTimestampsInSegmentsMode: !1,
   					type: "MSS",
   					serviceDescription: null,
   					nextUrl: null
   				}, a.i.ce());
   				Promise.resolve();
   				g = Date.now();
   				h = (g - d) / 1E3;
   				a.B.sample(1, h);
   				F(k)
   			})
   		}

   		function lx(a, b, c, d, e, f) {
   			var g = b.attributes.Type;
   			if ("audio" !== g && "video" !== g && "text" !== g) return ab("Ignoring unrecognized type:", g), null;
   			var h = b.attributes.Language,
   				k = a.s++,
   				l = eh(c, "Bitrate", lh),
   				m = eh(c, "MaxWidth", lh),
   				n = eh(c, "MaxHeight", lh),
   				p = eh(c, "Channels", lh),
   				q = eh(c, "SamplingRate", lh),
   				u = f.duration;
   			d.length && (u = d[d.length - 1].end - d[0].start);
   			var v = a.i.getDuration();
   			a.i.Ta(Math.min(u, v));
   			var w = {
   				id: k,
   				originalId: b.attributes.Name || String(k),
   				groupId: null,
   				createSegmentIndex: function() {
   					return Promise.resolve()
   				},
   				closeSegmentIndex: function() {
   					return Promise.resolve()
   				},
   				segmentIndex: null,
   				mimeType: "",
   				codecs: "",
   				frameRate: void 0,
   				pixelAspectRatio: void 0,
   				bandwidth: l || 0,
   				width: m || void 0,
   				height: n || void 0,
   				kind: "",
   				encrypted: 0 < e.length,
   				drmInfos: e,
   				keyIds: new Set,
   				language: ue(h || "und"),
   				originalLanguage: h,
   				label: "",
   				type: "",
   				primary: !1,
   				trickModeVideo: null,
   				emsgSchemeIdUris: [],
   				roles: [],
   				forced: !1,
   				channelsCount: p,
   				audioSamplingRate: q,
   				spatialAudio: !1,
   				closedCaptions: null,
   				hdr: void 0,
   				colorGamut: void 0,
   				videoLayout: void 0,
   				tilesLayout: void 0,
   				matchedStreams: [],
   				mssPrivateData: {
   					duration: u,
   					timescale: f.timescale,
   					codecPrivateData: null
   				},
   				accessibilityPurpose: null,
   				external: !1,
   				fastSwitching: !1,
   				fullMimeTypes: new Set
   			};
   			if (e = b.attributes.Subtype)(e = mx[e]) && w.roles.push(e), "main" === e && (w.primary = !0);
   			e = c.attributes.FourCC;
   			if (null === e || "" === e) e = b.attributes.FourCC;
   			if (!e)
   				if ("audio" === g) e = "AAC";
   				else if ("video" === g) return ab('FourCC is not defined whereas it is required for a QualityLevel element for a StreamIndex of type "video"'), null;
   			if (!nx.includes(e.toUpperCase())) return ab("Codec not supported:",
   				e), null;
   			c = ox(c, g, e, w);
   			w.mssPrivateData.codecPrivateData = c;
   			switch (g) {
   				case "audio":
   					if (!c) return ab("Quality unsupported without CodecPrivateData", g), null;
   					w.type = "audio";
   					w.mimeType = "mss/audio/mp4";
   					w.codecs = px(e, c);
   					break;
   				case "video":
   					if (!c) return ab("Quality unsupported without CodecPrivateData", g), null;
   					w.type = "video";
   					w.mimeType = "mss/video/mp4";
   					w.codecs = qx(c);
   					break;
   				case "text":
   					if (w.type = Ld, w.mimeType = "application/mp4", "TTML" === e || "DFXP" === e) w.codecs = "stpp"
   			}
   			w.fullMimeTypes.add(Pd(w.mimeType, w.codecs));
   			w.createSegmentIndex = function() {
   				if (w.segmentIndex) return Promise.resolve();
   				if (a.m.has(w.id)) var A = a.m.get(w.id);
   				else A = [], "video" == w.type && (A = w.mssPrivateData.codecPrivateData.split("00000001").slice(1)), A = {
   					id: w.id,
   					type: w.type,
   					codecs: w.codecs,
   					encrypted: w.encrypted,
   					timescale: w.mssPrivateData.timescale,
   					duration: w.mssPrivateData.duration,
   					Va: A,
   					ia: new Uint8Array([]),
   					sa: new Uint8Array([]),
   					xa: 0,
   					ya: 0,
   					data: null,
   					stream: w
   				}, A = Pw(new Jw([A])), a.m.set(w.id, A);
   				A = rx(a, new zi(function() {
   						return []
   					}, 0, null, null, void 0,
   					A), w, b, d);
   				w.segmentIndex = new Kk(A);
   				return Promise.resolve()
   			};
   			w.closeSegmentIndex = function() {
   				w.segmentIndex && (w.segmentIndex.release(), w.segmentIndex = null)
   			};
   			return w
   		}

   		function ox(a, b, c, d) {
   			if (a = a.attributes.CodecPrivateData) return a;
   			if ("audio" !== b) return null;
   			b = d.channelsCount || 2;
   			a = d.audioSamplingRate || 44100;
   			var e = {
   				96E3: 0,
   				88200: 1,
   				64E3: 2,
   				48E3: 3,
   				44100: 4,
   				32E3: 5,
   				24E3: 6,
   				22050: 7,
   				16E3: 8,
   				12E3: 9,
   				11025: 10,
   				8E3: 11,
   				7350: 12
   			};
   			d = e[a];
   			if ("AACH" === c) return c = new Uint8Array(4), a = e[2 * a], c[0] = 40 | d >> 1, c[1] = d << 7 | b << 3 | a >> 1, c[2] = a << 7 | 8, c[3] = 0, b = new Uint16Array(2), b[0] = (c[0] << 8) + c[1], b[1] = (c[2] << 8) + c[3], b[0].toString(16) + b[1].toString(16);
   			c = new Uint8Array(2);
   			c[0] = 16 | d >> 1;
   			c[1] = d << 7 | b << 3;
   			b = new Uint16Array(1);
   			b[0] = (c[0] << 8) + c[1];
   			return b[0].toString(16)
   		}

   		function px(a, b) {
   			var c = 0;
   			"AACH" === a && (c = 5);
   			b ? 0 === c && (c = (parseInt(b.substr(0, 2), 16) & 248) >> 3) : (c = 2, "AACH" === a && (c = 5));
   			return "mp4a.40." + c
   		}

   		function qx(a) {
   			var b = /00000001[0-9]7/.exec(a);
   			return b.length && a ? "avc1." + a.substr(a.indexOf(b[0]) + 10, 6) : ""
   		}

   		function rx(a, b, c, d, e) {
   			var f = d.attributes.Url.replace("{bitrate}", String(c.bandwidth));
   			d = [];
   			var g = {};
   			e = t(e);
   			for (var h = e.next(); !h.done; g = {
   					Uc: g.Uc
   				}, h = e.next()) g.Uc = h.value, d.push(new Bi(g.Uc.start, g.Uc.end, function(k) {
   				return function() {
   					return Cd(a.l, [f.replace("{start time}", String(k.Uc.Xf))])
   				}
   			}(g), 0, null, b, 0, 0, c.mssPrivateData.duration));
   			return d
   		}
   		S("gowatch.mss.MssParser", ix);
   		var nx = "AAC AACL AACH AACP AVC1 H264 TTML DFXP".split(" "),
   			mx = {
   				CAPT: "main",
   				SUBT: "alternate",
   				DESC: "main"
   			};
   		ri["application/vnd.ms-sstr+xml"] = function() {
   			return new ix
   		};

   		function sx(a, b, c, d, e, f) {
   			if (200 <= c && 299 >= c && 202 != c) return {
   				uri: e || d,
   				originalUri: d,
   				data: b,
   				status: c,
   				headers: a,
   				fromCache: !!a["x-gowatch-from-cache"]
   			};
   			var g = null;
   			try {
   				g = nd(b)
   			} catch (h) {}
   			throw new T(401 == c || 403 == c ? 2 : 1, 1, 1001, d, c, g, a, f, e || d);
   		};

   		function tx() {}

   		function ux(a, b, c, d, e) {
   			var f = new vx;
   			xg(b.headers).forEach(function(l, m) {
   				f.append(m, l)
   			});
   			var g = new wx,
   				h = {
   					fg: !1,
   					Wg: !1
   				};
   			a = xx(a, c, {
   				body: b.body || void 0,
   				headers: f,
   				method: b.method,
   				signal: g.signal,
   				credentials: b.allowCrossSiteCredentials ? "include" : void 0
   			}, h, d, e, b.streamDataCallback);
   			a = new Tf(a, function() {
   				h.fg = !0;
   				g.abort();
   				return Promise.resolve()
   			});
   			if (b = b.retryParameters.timeout) {
   				var k = new Lc(function() {
   					h.Wg = !0;
   					g.abort()
   				});
   				k.W(b / 1E3);
   				a.finally(function() {
   					k.stop()
   				})
   			}
   			return a
   		}

   		function xx(a, b, c, d, e, f, g) {
   			var h, k, l, m, n, p, q, u, v, w, A, z, y;
   			return O(function(B) {
   				switch (B.g) {
   					case 1:
   						return h = yx, k = zx, p = n = 0, q = Date.now(), ua(B, 2), E(B, h(a, c), 4);
   					case 4:
   						l = B.h;
   						f(Ax(l.headers));
   						if ("HEAD" == c.method) {
   							B.u(5);
   							break
   						}
   						u = l.clone().body.getReader();
   						w = (v = l.headers.get("Content-Length")) ? parseInt(v, 10) : 0;
   						A = function(C) {
   							function D() {
   								var J, K, H;
   								return O(function(I) {
   									switch (I.g) {
   										case 1:
   											return ua(I, 2), E(I, u.read(), 4);
   										case 4:
   											J = I.h;
   											wa(I, 3);
   											break;
   										case 2:
   											return ya(I), I.return();
   										case 3:
   											if (J.done) {
   												I.u(5);
   												break
   											}
   											n +=
   												J.value.byteLength;
   											if (!g) {
   												I.u(5);
   												break
   											}
   											return E(I, g(J.value), 5);
   										case 5:
   											K = Date.now();
   											if (100 < K - q || J.done) H = J.done ? 0 : w - n, e(K - q, n - p, H), p = n, q = K;
   											J.done ? C.close() : (C.enqueue(J.value), D());
   											F(I)
   									}
   								})
   							}
   							D()
   						};
   						new k({
   							start: A
   						});
   						return E(B, l.arrayBuffer(), 6);
   					case 6:
   						m = B.h;
   					case 5:
   						wa(B, 3);
   						break;
   					case 2:
   						z = ya(B);
   						if (d.fg) throw new T(1, 1, 7001, a, b);
   						if (d.Wg) throw new T(1, 1, 1003, a, b);
   						throw new T(1, 1, 1002, a, z, b);
   					case 3:
   						return y = Ax(l.headers), B.return(sx(y, m, l.status, a, l.url, b))
   				}
   			})
   		}

   		function Ax(a) {
   			var b = {};
   			a.forEach(function(c, d) {
   				b[d.trim()] = c
   			});
   			return b
   		}

   		function Bx() {
   			if (window.ReadableStream) try {
   				new ReadableStream({})
   			} catch (a) {
   				return !1
   			} else return !1;
   			if (window.Response) {
   				if (!(new Response("")).body) return !1
   			} else return !1;
   			return !(!window.fetch || !window.AbortController)
   		}
   		S("gowatch.net.HttpFetchPlugin", tx);
   		tx.isSupported = Bx;
   		tx.parse = ux;
   		var yx = window.fetch,
   			wx = window.AbortController,
   			zx = window.ReadableStream,
   			vx = window.Headers;
   		Bx() && (fg("http", ux, 2, !0), fg("https", ux, 2, !0), fg("blob", ux, 2, !0));

   		function Cx() {}

   		function Dx(a, b, c, d, e) {
   			var f = new Ex,
   				g = Date.now(),
   				h = 0,
   				k = new Promise(function(l, m) {
   					f.open(b.method, a, !0);
   					f.responseType = "arraybuffer";
   					f.timeout = b.retryParameters.timeout;
   					f.withCredentials = b.allowCrossSiteCredentials;
   					f.onabort = function() {
   						m(new T(1, 1, 7001, a, c))
   					};
   					var n = !1;
   					f.onreadystatechange = function() {
   						if (2 == f.readyState && !n) {
   							var q = Fx(f);
   							e(q);
   							n = !0
   						}
   					};
   					f.onload = function(q) {
   						var u = Fx(f),
   							v = f.response;
   						try {
   							d(Date.now() - g, q.loaded - h, 0);
   							var w = sx(u, v, f.status, a, f.responseURL, c);
   							l(w)
   						} catch (A) {
   							m(A)
   						}
   					};
   					f.onerror = function(q) {
   						m(new T(1,
   							1, 1002, a, q, c))
   					};
   					f.ontimeout = function() {
   						m(new T(1, 1, 1003, a, c))
   					};
   					f.onprogress = function(q) {
   						var u = Date.now();
   						if (100 < u - g || q.lengthComputable && q.loaded == q.total) d(u - g, q.loaded - h, 4 == f.readyState ? 0 : q.total - q.loaded), h = q.loaded, g = u
   					};
   					for (var p in b.headers) f.setRequestHeader(p.toLowerCase(), b.headers[p]);
   					f.send(b.body)
   				});
   			return new Tf(k, function() {
   				f.abort();
   				return Promise.resolve()
   			})
   		}

   		function Fx(a) {
   			var b = a.getAllResponseHeaders().trim().split("\r\n");
   			a = {};
   			b = t(b);
   			for (var c = b.next(); !c.done; c = b.next()) c = c.value.split(": "), a[c[0].toLowerCase()] = c.slice(1).join(": ");
   			return a
   		}
   		S("gowatch.net.HttpXHRPlugin", Cx);
   		Cx.parse = Dx;
   		var Ex = window.XMLHttpRequest;
   		fg("http", Dx, 1, !0);
   		fg("https", Dx, 1, !0);
   		fg("blob", Dx, 1, !0);

   		function Gx(a, b, c, d) {
   			this.g = a;
   			this.i = b;
   			this.groupId = c;
   			this.h = d
   		}

   		function Hx(a) {
   			return a.L().map(function(b) {
   				return "{" + encodeURI(b) + "}"
   			}).join("") + ":" + a.Ba + ":" + a.ja
   		}

   		function Ix(a, b) {
   			return ol(a.g.L(), a.g.Ba, a.g.ja, b.streaming.retryParameters)
   		};

   		function Jx() {
   			this.h = this.j = this.i = 0;
   			this.g = new Map;
   			this.l = 0
   		}

   		function Kx(a, b) {
   			a.i += b;
   			var c = a.l;
   			a.l++;
   			a.g.set(c, b);
   			return c
   		}
   		Jx.prototype.close = function(a, b) {
   			if (this.g.has(a)) {
   				var c = this.g.get(a);
   				this.g.delete(a);
   				this.j += c;
   				this.h += b
   			}
   		};

   		function Lx(a) {
   			var b = this;
   			this.o = a;
   			this.j = new Map;
   			this.i = new rg(function() {
   				return Mx(b).catch(function() {})
   			});
   			this.h = [];
   			this.m = function() {};
   			this.l = function() {};
   			this.g = new Jx
   		}
   		Lx.prototype.destroy = function() {
   			return this.i.destroy()
   		};

   		function Nx(a, b, c) {
   			a.m = b;
   			a.l = c
   		}

   		function Mx(a) {
   			var b = a.h.map(function(c) {
   				return c()
   			});
   			a.h = [];
   			return Promise.all(b)
   		}

   		function Ox(a, b, c, d, e, f) {
   			sg(a.i);
   			var g = (a.j.get(b) || Promise.resolve()).then(function() {
   				var h, k, l, m, n, p, q;
   				return O(function(u) {
   					if (1 == u.g) return E(u, Px(a, c), 2);
   					h = u.h;
   					if (a.i.g) throw new T(2, 9, 7001);
   					if (e)
   						for (m in k = Ab(h), l = new Pg(k), l.data) n = Number(m), p = l.data[n], q = l.g[n], a.l(p, q);
   					a.g.close(d, h.byteLength);
   					var v = a.g;
   					a.m(0 == v.i ? 0 : v.j / v.i, a.g.h);
   					return u.return(f(h))
   				})
   			});
   			a.j.set(b, g)
   		}

   		function Qx(a) {
   			return O(function(b) {
   				return 1 == b.g ? E(b, Promise.all(a.j.values()), 2) : b.return(a.g.h)
   			})
   		}

   		function Px(a, b) {
   			var c, d, e, f;
   			return O(function(g) {
   				if (1 == g.g) return c = pg, d = a.o.request(c, b), e = function() {
   					return d.abort()
   				}, a.h.push(e), E(g, d.promise, 2);
   				f = g.h;
   				Kb(a.h, e);
   				return g.return(f.data)
   			})
   		};

   		function Rx(a, b) {
   			var c = this;
   			this.i = a;
   			this.h = a.objectStore(b);
   			this.g = new Sf;
   			a.onabort = function(d) {
   				d.preventDefault();
   				c.g.reject()
   			};
   			a.onerror = function(d) {
   				d.preventDefault();
   				c.g.reject()
   			};
   			a.oncomplete = function() {
   				c.g.resolve()
   			}
   		}
   		Rx.prototype.abort = function() {
   			var a = this;
   			return O(function(b) {
   				if (1 == b.g) {
   					try {
   						a.i.abort()
   					} catch (c) {}
   					ua(b, 2);
   					return E(b, a.g, 4)
   				}
   				if (2 != b.g) return wa(b, 0);
   				ya(b);
   				F(b)
   			})
   		};

   		function Sx(a, b) {
   			return new Promise(function(c, d) {
   				var e = a.h.openCursor();
   				e.onerror = d;
   				e.onsuccess = function() {
   					var f;
   					return O(function(g) {
   						if (1 == g.g) {
   							if (null == e.result) return c(), g.return();
   							f = e.result;
   							return E(g, b(f.key, f.value, f), 2)
   						}
   						f.continue();
   						F(g)
   					})
   				}
   			})
   		}
   		Rx.prototype.store = function() {
   			return this.h
   		};
   		Rx.prototype.promise = function() {
   			return this.g
   		};

   		function Tx(a) {
   			this.h = a;
   			this.g = []
   		}
   		Tx.prototype.destroy = function() {
   			return Promise.all(this.g.map(function(a) {
   				return a.abort()
   			}))
   		};

   		function Ux(a, b) {
   			return Vx(a, b, "readwrite")
   		}

   		function Vx(a, b, c) {
   			c = a.h.transaction([b], c);
   			var d = new Rx(c, b);
   			a.g.push(d);
   			d.promise().then(function() {
   				Kb(a.g, d)
   			}, function() {
   				Kb(a.g, d)
   			});
   			return d
   		};

   		function Wx(a, b, c) {
   			this.h = new Tx(a);
   			this.i = b;
   			this.g = c
   		}
   		r = Wx.prototype;
   		r.destroy = function() {
   			return this.h.destroy()
   		};
   		r.hasFixedKeySpace = function() {
   			return !0
   		};
   		r.addSegments = function() {
   			return Xx(this.i)
   		};
   		r.removeSegments = function(a, b) {
   			return Yx(this, this.i, a, b)
   		};
   		r.getSegments = function(a) {
   			var b = this,
   				c;
   			return O(function(d) {
   				if (1 == d.g) return E(d, Zx(b, b.i, a), 2);
   				c = d.h;
   				return d.return(c.map(function(e) {
   					return b.gg(e)
   				}))
   			})
   		};
   		r.addManifests = function() {
   			return Xx(this.g)
   		};
   		r.updateManifest = function() {
   			return Promise.reject(new T(2, 9, 9016, "Cannot modify values in " + this.g))
   		};

   		function $x(a, b, c) {
   			a = Ux(a.h, a.g);
   			var d = a.store();
   			d.get(b).onsuccess = function() {
   				d.put(c, b)
   			};
   			return a.promise()
   		}
   		r.updateManifestExpiration = function(a, b) {
   			var c = Ux(this.h, this.g),
   				d = c.store();
   			d.get(a).onsuccess = function(e) {
   				if (e = e.target.result) e.expiration = b, d.put(e, a)
   			};
   			return c.promise()
   		};
   		r.removeManifests = function(a, b) {
   			return Yx(this, this.g, a, b)
   		};
   		r.getManifests = function(a) {
   			var b = this,
   				c;
   			return O(function(d) {
   				if (1 == d.g) return E(d, Zx(b, b.g, a), 2);
   				c = d.h;
   				return d.return(Promise.all(c.map(function(e) {
   					return b.bd(e)
   				})))
   			})
   		};
   		r.getAllManifests = function() {
   			var a = this,
   				b, c;
   			return O(function(d) {
   				return 1 == d.g ? (b = Vx(a.h, a.g, "readonly"), c = new Map, E(d, Sx(b, function(e, f) {
   					var g;
   					return O(function(h) {
   						if (1 == h.g) return E(h, a.bd(f), 2);
   						g = h.h;
   						c.set(e, g);
   						F(h)
   					})
   				}), 2)) : 3 != d.g ? E(d, b.promise(), 3) : d.return(c)
   			})
   		};
   		r.gg = function(a) {
   			return a
   		};
   		r.bd = function(a) {
   			return Promise.resolve(a)
   		};

   		function Xx(a) {
   			return Promise.reject(new T(2, 9, 9011, "Cannot add new value to " + a))
   		}
   		r.add = function(a, b) {
   			var c = this,
   				d, e, f, g, h, k, l;
   			return O(function(m) {
   				if (1 == m.g) {
   					d = Ux(c.h, a);
   					e = d.store();
   					f = [];
   					g = {};
   					h = t(b);
   					for (k = h.next(); !k.done; g = {
   							Jd: g.Jd
   						}, k = h.next()) l = k.value, g.Jd = e.add(l), g.Jd.onsuccess = function(n) {
   						return function() {
   							f.push(n.Jd.result)
   						}
   					}(g);
   					return E(m, d.promise(), 2)
   				}
   				return m.return(f)
   			})
   		};

   		function Yx(a, b, c, d) {
   			a = Ux(a.h, b);
   			b = a.store();
   			var e = {};
   			c = t(c);
   			for (var f = c.next(); !f.done; e = {
   					Hd: e.Hd
   				}, f = c.next()) e.Hd = f.value, b.delete(e.Hd).onsuccess = function(g) {
   				return function() {
   					return d(g.Hd)
   				}
   			}(e);
   			return a.promise()
   		}

   		function Zx(a, b, c) {
   			var d, e, f, g, h, k, l;
   			return O(function(m) {
   				if (1 == m.g) {
   					d = Vx(a.h, b, "readonly");
   					e = d.store();
   					f = {};
   					g = [];
   					h = {};
   					k = t(c);
   					for (l = k.next(); !l.done; h = {
   							Sc: h.Sc,
   							Qc: h.Qc
   						}, l = k.next()) h.Qc = l.value, h.Sc = e.get(h.Qc), h.Sc.onsuccess = function(n) {
   						return function() {
   							void 0 == n.Sc.result && g.push(n.Qc);
   							f[n.Qc] = n.Sc.result
   						}
   					}(h);
   					return E(m, d.promise(), 2)
   				}
   				if (g.length) throw new T(2, 9, 9012, "Could not find values for " + g);
   				return m.return(c.map(function(n) {
   					return f[n]
   				}))
   			})
   		};

   		function ay(a) {
   			this.g = new Tx(a)
   		}
   		ay.prototype.destroy = function() {
   			return this.g.destroy()
   		};
   		ay.prototype.getAll = function() {
   			var a = this,
   				b, c;
   			return O(function(d) {
   				return 1 == d.g ? (b = Vx(a.g, "session-ids", "readonly"), c = [], E(d, Sx(b, function(e, f) {
   					c.push(f)
   				}), 2)) : 3 != d.g ? E(d, b.promise(), 3) : d.return(c)
   			})
   		};
   		ay.prototype.add = function(a) {
   			var b = Ux(this.g, "session-ids"),
   				c = b.store();
   			a = t(a);
   			for (var d = a.next(); !d.done; d = a.next()) c.add(d.value);
   			return b.promise()
   		};
   		ay.prototype.remove = function(a) {
   			var b = this,
   				c;
   			return O(function(d) {
   				return 1 == d.g ? (c = Ux(b.g, "session-ids"), E(d, Sx(c, function(e, f, g) {
   					a.includes(f.sessionId) && g.delete()
   				}), 2)) : E(d, c.promise(), 0)
   			})
   		};

   		function by() {
   			this.g = new Map
   		}
   		by.prototype.destroy = function() {
   			for (var a = [], b = t(this.g.values()), c = b.next(); !c.done; c = b.next()) a.push(c.value.destroy());
   			this.g.clear();
   			return Promise.all(a)
   		};
   		by.prototype.init = function() {
   			var a = this;
   			cy.forEach(function(e, f) {
   				(e = e()) && a.g.set(f, e)
   			});
   			for (var b = [], c = t(this.g.values()), d = c.next(); !d.done; d = c.next()) b.push(d.value.init());
   			return Promise.all(b)
   		};

   		function dy(a) {
   			var b = null;
   			a.g.forEach(function(c, d) {
   				c.getCells().forEach(function(e, f) {
   					e.hasFixedKeySpace() || b || (b = {
   						path: {
   							kb: d,
   							Da: f
   						},
   						Da: e
   					})
   				})
   			});
   			if (b) return b;
   			throw new T(2, 9, 9013, "Could not find a cell that supports add-operations");
   		}

   		function ey(a, b) {
   			a.g.forEach(function(c, d) {
   				c.getCells().forEach(function(e, f) {
   					b({
   						kb: d,
   						Da: f
   					}, e)
   				})
   			})
   		}

   		function fy(a, b, c) {
   			a = a.g.get(b);
   			if (!a) throw new T(2, 9, 9013, "Could not find mechanism with name " + b);
   			b = a.getCells().get(c);
   			if (!b) throw new T(2, 9, 9013, "Could not find cell with name " + c);
   			return b
   		}

   		function gy(a, b) {
   			a.g.forEach(function(c) {
   				b(c.getEmeSessionCell())
   			})
   		}

   		function hy(a) {
   			var b = Array.from(a.g.keys());
   			if (!b.length) throw new T(2, 9, 9E3, "No supported storage mechanisms found");
   			return a.g.get(b[0]).getEmeSessionCell()
   		}

   		function iy(a) {
   			var b, c, d;
   			return O(function(e) {
   				return 1 == e.g ? (b = Array.from(a.g.values()), c = 0 < b.length, c || (d = cy, d.forEach(function(f) {
   					(f = f()) && b.push(f)
   				})), E(e, Promise.all(b.map(function(f) {
   					return f.erase()
   				})), 2)) : c ? e.u(0) : E(e, Promise.all(b.map(function(f) {
   					return f.destroy()
   				})), 0)
   			})
   		}

   		function jy(a, b) {
   			cy.set(a, b)
   		}
   		S("gowatch.offline.StorageMuxer", by);
   		by.unregister = function(a) {
   			cy.delete(a)
   		};
   		by.register = jy;
   		by.prototype.destroy = by.prototype.destroy;
   		var cy = new Map;

   		function ky() {
   			Wx.apply(this, arguments)
   		}
   		oa(ky, Wx);
   		ky.prototype.updateManifestExpiration = function(a, b) {
   			var c = this,
   				d, e, f;
   			return O(function(g) {
   				d = Ux(c.h, c.g);
   				e = d.store();
   				f = new Sf;
   				e.get(a).onsuccess = function(h) {
   					(h = h.target.result) ? (h.expiration = b, e.put(h), f.resolve()) : f.reject(new T(2, 9, 9012, "Could not find values for " + a))
   				};
   				return E(g, Promise.all([d.promise(), f]), 0)
   			})
   		};
   		ky.prototype.bd = function(a) {
   			var b, c, d, e, f, g;
   			return O(function(h) {
   				if (1 == h.g) {
   					b = [];
   					for (c = 0; c < a.periods.length; ++c) d = c == a.periods.length - 1 ? a.duration : a.periods[c + 1].startTime, e = d - a.periods[c].startTime, f = ly(a.periods[c], e), b.push(f);
   					return E(h, At(b), 2)
   				}
   				g = h.h;
   				return h.return({
   					creationTime: 0,
   					originalManifestUri: a.originalManifestUri,
   					duration: a.duration,
   					size: a.size,
   					expiration: null == a.expiration ? Infinity : a.expiration,
   					streams: g,
   					sessionIds: a.sessionIds,
   					drmInfo: a.drmInfo,
   					appMetadata: a.appMetadata,
   					sequenceMode: !1
   				})
   			})
   		};

   		function ly(a, b) {
   			my(a);
   			for (var c = t(a.streams), d = c.next(); !d.done; d = c.next());
   			return a.streams.map(function(e) {
   				return ny(e, a.startTime, b)
   			})
   		}

   		function ny(a, b, c) {
   			var d = a.initSegmentUri ? oy(a.initSegmentUri) : null,
   				e = b + a.presentationTimeOffset,
   				f = b + c;
   			return {
   				id: a.id,
   				originalId: null,
   				groupId: null,
   				primary: a.primary,
   				type: a.contentType,
   				mimeType: a.mimeType,
   				codecs: a.codecs,
   				frameRate: a.frameRate,
   				pixelAspectRatio: void 0,
   				hdr: void 0,
   				colorGamut: void 0,
   				videoLayout: void 0,
   				kind: a.kind,
   				language: a.language,
   				originalLanguage: a.language || null,
   				label: a.label,
   				width: a.width,
   				height: a.height,
   				initSegmentKey: d,
   				encrypted: a.encrypted,
   				keyIds: new Set([a.keyId]),
   				segments: a.segments.map(function(g) {
   					var h =
   						oy(g.uri);
   					return {
   						startTime: b + g.startTime,
   						endTime: b + g.endTime,
   						dataKey: h,
   						initSegmentKey: d,
   						appendWindowStart: b,
   						appendWindowEnd: f,
   						timestampOffset: e,
   						tilesLayout: "",
   						mimeType: null,
   						codecs: null
   					}
   				}),
   				variantIds: a.variantIds,
   				roles: [],
   				forced: !1,
   				audioSamplingRate: null,
   				channelsCount: null,
   				spatialAudio: !1,
   				closedCaptions: null,
   				tilesLayout: void 0,
   				external: !1,
   				fastSwitching: !1
   			}
   		}
   		ky.prototype.gg = function(a) {
   			return {
   				data: a.data
   			}
   		};

   		function oy(a) {
   			var b;
   			if ((b = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)) || (b = /^offline:segment\/([0-9]+)$/.exec(a))) return Number(b[1]);
   			throw new T(2, 9, 9004, "Could not parse uri " + a);
   		}

   		function my(a) {
   			var b = a.streams.filter(function(h) {
   				return "audio" == h.contentType
   			});
   			a = a.streams.filter(function(h) {
   				return "video" == h.contentType
   			});
   			if (!b.every(function(h) {
   					return h.variantIds
   				}) || !a.every(function(h) {
   					return h.variantIds
   				})) {
   				for (var c = t(b), d = c.next(); !d.done; d = c.next()) d.value.variantIds = [];
   				c = t(a);
   				for (d = c.next(); !d.done; d = c.next()) d.value.variantIds = [];
   				c = 0;
   				if (a.length && !b.length) {
   					var e = c++,
   						f = t(a);
   					for (d = f.next(); !d.done; d = f.next()) d.value.variantIds.push(e)
   				}
   				if (!a.length && b.length)
   					for (e = c++,
   						f = t(b), d = f.next(); !d.done; d = f.next()) d.value.variantIds.push(e);
   				if (a.length && b.length)
   					for (b = t(b), d = b.next(); !d.done; d = b.next())
   						for (d = d.value, e = t(a), f = e.next(); !f.done; f = e.next()) {
   							f = f.value;
   							var g = c++;
   							d.variantIds.push(g);
   							f.variantIds.push(g)
   						}
   			}
   		};

   		function py() {
   			Wx.apply(this, arguments)
   		}
   		oa(py, Wx);
   		py.prototype.bd = function(a) {
   			var b, c, d, e, f, g;
   			return O(function(h) {
   				if (1 == h.g) {
   					b = [];
   					for (c = 0; c < a.periods.length; ++c) {
   						d = c == a.periods.length - 1 ? a.duration : a.periods[c + 1].startTime;
   						e = d - a.periods[c].startTime;
   						for (var k = a.periods[c], l = [], m = t(k.streams), n = m.next(); !n.done; n = m.next()) n = n.value, 0 != n.variantIds.length && l.push(qy(n, k.startTime, k.startTime + e));
   						f = l;
   						b.push(f)
   					}
   					return E(h, At(b), 2)
   				}
   				g = h.h;
   				return h.return({
   					appMetadata: a.appMetadata,
   					creationTime: 0,
   					drmInfo: a.drmInfo,
   					duration: a.duration,
   					expiration: null == a.expiration ?
   						Infinity : a.expiration,
   					originalManifestUri: a.originalManifestUri,
   					sessionIds: a.sessionIds,
   					size: a.size,
   					streams: g,
   					sequenceMode: !1
   				})
   			})
   		};

   		function qy(a, b, c) {
   			return {
   				id: a.id,
   				originalId: a.originalId,
   				groupId: null,
   				primary: a.primary,
   				type: a.contentType,
   				mimeType: a.mimeType,
   				codecs: a.codecs,
   				frameRate: a.frameRate,
   				pixelAspectRatio: a.pixelAspectRatio,
   				hdr: void 0,
   				colorGamut: void 0,
   				videoLayout: void 0,
   				kind: a.kind,
   				language: a.language,
   				originalLanguage: a.language || null,
   				label: a.label,
   				width: a.width,
   				height: a.height,
   				encrypted: a.encrypted,
   				keyIds: new Set([a.keyId]),
   				segments: a.segments.map(function(d) {
   					return {
   						startTime: b + d.startTime,
   						endTime: b + d.endTime,
   						initSegmentKey: a.initSegmentKey,
   						appendWindowStart: b,
   						appendWindowEnd: c,
   						timestampOffset: b - a.presentationTimeOffset,
   						dataKey: d.dataKey,
   						tilesLayout: "",
   						mimeType: null,
   						codecs: null
   					}
   				}),
   				variantIds: a.variantIds,
   				roles: [],
   				forced: !1,
   				audioSamplingRate: null,
   				channelsCount: null,
   				spatialAudio: !1,
   				closedCaptions: null,
   				tilesLayout: void 0,
   				external: !1,
   				fastSwitching: !1
   			}
   		};

   		function ry() {
   			Wx.apply(this, arguments)
   		}
   		oa(ry, Wx);
   		r = ry.prototype;
   		r.hasFixedKeySpace = function() {
   			return !1
   		};
   		r.addSegments = function(a) {
   			return this.add(this.i, a)
   		};
   		r.addManifests = function(a) {
   			return this.add(this.g, a)
   		};
   		r.updateManifest = function(a, b) {
   			return $x(this, a, b)
   		};
   		r.bd = function(a) {
   			null == a.expiration && (a.expiration = Infinity);
   			return Promise.resolve(a)
   		};

   		function sy() {
   			this.m = this.j = this.i = this.h = this.g = this.l = null
   		}
   		r = sy.prototype;
   		r.init = function() {
   			var a = this,
   				b = new Sf,
   				c = !1,
   				d = new Lc(function() {
   					c = !0;
   					b.reject(new T(2, 9, 9017))
   				});
   			d.W(5);
   			var e = window.indexedDB.open("gowatch_offline_db", 5);
   			e.onsuccess = function() {
   				if (!c) {
   					var f = e.result;
   					a.l = f;
   					var g = f.objectStoreNames;
   					g = g.contains("manifest") && g.contains("segment") ? new ky(f, "segment", "manifest") : null;
   					a.g = g;
   					g = f.objectStoreNames;
   					g = g.contains("manifest-v2") && g.contains("segment-v2") ? new py(f, "segment-v2", "manifest-v2") : null;
   					a.h = g;
   					g = f.objectStoreNames;
   					g = g.contains("manifest-v3") && g.contains("segment-v3") ?
   						new py(f, "segment-v3", "manifest-v3") : null;
   					a.i = g;
   					g = f.objectStoreNames;
   					g = g.contains("manifest-v5") && g.contains("segment-v5") ? new ry(f, "segment-v5", "manifest-v5") : null;
   					a.j = g;
   					f = f.objectStoreNames.contains("session-ids") ? new ay(f) : null;
   					a.m = f;
   					d.stop();
   					b.resolve()
   				}
   			};
   			e.onupgradeneeded = function() {
   				for (var f = e.result, g = t(["segment-v5", "manifest-v5", "session-ids"]), h = g.next(); !h.done; h = g.next()) h = h.value, f.objectStoreNames.contains(h) || f.createObjectStore(h, {
   					autoIncrement: !0
   				})
   			};
   			e.onerror = function(f) {
   				c || (b.reject(new T(2,
   					9, 9001, e.error)), d.stop(), f.preventDefault())
   			};
   			return b
   		};
   		r.destroy = function() {
   			var a = this;
   			return O(function(b) {
   				switch (b.g) {
   					case 1:
   						if (!a.g) {
   							b.u(2);
   							break
   						}
   						return E(b, a.g.destroy(), 2);
   					case 2:
   						if (!a.h) {
   							b.u(4);
   							break
   						}
   						return E(b, a.h.destroy(), 4);
   					case 4:
   						if (!a.i) {
   							b.u(6);
   							break
   						}
   						return E(b, a.i.destroy(), 6);
   					case 6:
   						if (!a.j) {
   							b.u(8);
   							break
   						}
   						return E(b, a.j.destroy(), 8);
   					case 8:
   						if (!a.m) {
   							b.u(10);
   							break
   						}
   						return E(b, a.m.destroy(), 10);
   					case 10:
   						a.l && a.l.close(), F(b)
   				}
   			})
   		};
   		r.getCells = function() {
   			var a = new Map;
   			this.g && a.set("v1", this.g);
   			this.h && a.set("v2", this.h);
   			this.i && a.set("v3", this.i);
   			this.j && a.set("v5", this.j);
   			return a
   		};
   		r.getEmeSessionCell = function() {
   			return this.m
   		};
   		r.erase = function() {
   			var a = this;
   			return O(function(b) {
   				switch (b.g) {
   					case 1:
   						if (!a.g) {
   							b.u(2);
   							break
   						}
   						return E(b, a.g.destroy(), 2);
   					case 2:
   						if (!a.h) {
   							b.u(4);
   							break
   						}
   						return E(b, a.h.destroy(), 4);
   					case 4:
   						if (!a.i) {
   							b.u(6);
   							break
   						}
   						return E(b, a.i.destroy(), 6);
   					case 6:
   						if (!a.j) {
   							b.u(8);
   							break
   						}
   						return E(b, a.j.destroy(), 8);
   					case 8:
   						return a.l && a.l.close(), E(b, ty(), 10);
   					case 10:
   						return a.l = null, a.g = null, a.h = null, a.i = null, a.j = null, E(b, a.init(), 0)
   				}
   			})
   		};

   		function ty() {
   			var a = new Sf,
   				b = window.indexedDB.deleteDatabase("gowatch_offline_db");
   			b.onblocked = function() {};
   			b.onsuccess = function() {
   				a.resolve()
   			};
   			b.onerror = function(c) {
   				a.reject(new T(2, 9, 9001, b.error));
   				c.preventDefault()
   			};
   			return a
   		}
   		jy("idb", function() {
   			return $c() || Sc() || !window.indexedDB ? null : new sy
   		});

   		function uy(a, b, c, d) {
   			this.g = a;
   			this.i = b;
   			this.h = c;
   			this.l = d;
   			this.j = ["offline:", a, "/", b, "/", c, "/", d].join("")
   		}
   		uy.prototype.kb = function() {
   			return this.i
   		};
   		uy.prototype.Da = function() {
   			return this.h
   		};
   		uy.prototype.key = function() {
   			return this.l
   		};
   		uy.prototype.toString = function() {
   			return this.j
   		};

   		function vy(a) {
   			a = /^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(a);
   			if (null == a) return null;
   			var b = a[1];
   			if ("manifest" != b && "segment" != b) return null;
   			var c = a[2];
   			if (!c) return null;
   			var d = a[3];
   			return d && null != b ? new uy(b, c, d, Number(a[4])) : null
   		};

   		function wy(a, b) {
   			this.h = a;
   			this.g = b
   		}

   		function xy(a, b) {
   			var c = new ok(null, 0);
   			c.Ta(b.duration);
   			var d = b.streams.filter(function(l) {
   					return "audio" == l.type
   				}),
   				e = b.streams.filter(function(l) {
   					return "video" == l.type
   				});
   			d = yy(a, d, e, c);
   			e = b.streams.filter(function(l) {
   				return l.type == Ld
   			}).map(function(l) {
   				return zy(a, l, c)
   			});
   			var f = b.streams.filter(function(l) {
   					return "image" == l.type
   				}).map(function(l) {
   					return zy(a, l, c)
   				}),
   				g = b.drmInfo ? [b.drmInfo] : [];
   			if (b.drmInfo)
   				for (var h = t(d.values()), k = h.next(); !k.done; k = h.next()) k = k.value, k.audio && k.audio.encrypted && (k.audio.drmInfos =
   					g), k.video && k.video.encrypted && (k.video.drmInfos = g);
   			return {
   				presentationTimeline: c,
   				minBufferTime: 2,
   				offlineSessionIds: b.sessionIds,
   				variants: Array.from(d.values()),
   				textStreams: e,
   				imageStreams: f,
   				sequenceMode: b.sequenceMode || !1,
   				ignoreManifestTimestampsInSegmentsMode: !1,
   				type: b.type || "UNKNOWN",
   				serviceDescription: null,
   				nextUrl: null
   			}
   		}

   		function yy(a, b, c, d) {
   			for (var e = new Set, f = t(b), g = f.next(); !g.done; g = f.next()) {
   				var h = t(g.value.variantIds);
   				for (g = h.next(); !g.done; g = h.next()) e.add(g.value)
   			}
   			f = t(c);
   			for (g = f.next(); !g.done; g = f.next())
   				for (h = t(g.value.variantIds), g = h.next(); !g.done; g = h.next()) e.add(g.value);
   			f = new Map;
   			e = t(e);
   			for (g = e.next(); !g.done; g = e.next()) g = g.value, f.set(g, {
   				id: g,
   				language: "",
   				disabledUntilTime: 0,
   				primary: !1,
   				audio: null,
   				video: null,
   				bandwidth: 0,
   				allowedByApplication: !0,
   				allowedByKeySystem: !0,
   				decodingInfos: []
   			});
   			b = t(b);
   			for (e = b.next(); !e.done; e =
   				b.next())
   				for (e = e.value, g = zy(a, e, d), h = t(e.variantIds), e = h.next(); !e.done; e = h.next()) e = f.get(e.value), e.language = g.language, e.primary = e.primary || g.primary, e.audio = g;
   			c = t(c);
   			for (b = c.next(); !b.done; b = c.next())
   				for (e = b.value, b = zy(a, e, d), g = t(e.variantIds), e = g.next(); !e.done; e = g.next()) e = f.get(e.value), e.primary = e.primary || b.primary, e.video = b;
   			return f
   		}

   		function zy(a, b, c) {
   			var d = b.segments.map(function(e) {
   				return Ay(a, e, b)
   			});
   			c.vd(d);
   			return {
   				id: b.id,
   				originalId: b.originalId,
   				groupId: b.groupId,
   				createSegmentIndex: function() {
   					return Promise.resolve()
   				},
   				segmentIndex: new Kk(d),
   				mimeType: b.mimeType,
   				codecs: b.codecs,
   				width: b.width || void 0,
   				height: b.height || void 0,
   				frameRate: b.frameRate,
   				pixelAspectRatio: b.pixelAspectRatio,
   				hdr: b.hdr,
   				colorGamut: b.colorGamut,
   				videoLayout: b.videoLayout,
   				kind: b.kind,
   				encrypted: b.encrypted,
   				drmInfos: [],
   				keyIds: b.keyIds,
   				language: b.language,
   				originalLanguage: b.originalLanguage ||
   					null,
   				label: b.label,
   				type: b.type,
   				primary: b.primary,
   				trickModeVideo: null,
   				emsgSchemeIdUris: null,
   				roles: b.roles,
   				forced: b.forced,
   				channelsCount: b.channelsCount,
   				audioSamplingRate: b.audioSamplingRate,
   				spatialAudio: b.spatialAudio,
   				closedCaptions: b.closedCaptions,
   				tilesLayout: b.tilesLayout,
   				accessibilityPurpose: null,
   				external: b.external,
   				fastSwitching: b.fastSwitching,
   				fullMimeTypes: new Set([Pd(b.mimeType, b.codecs)])
   			}
   		}

   		function Ay(a, b, c) {
   			var d = new uy("segment", a.h, a.g, b.dataKey);
   			a = new Bi(b.startTime, b.endTime, function() {
   				return [d.toString()]
   			}, 0, null, null != b.initSegmentKey ? By(a, b.initSegmentKey) : null, b.timestampOffset, b.appendWindowStart, b.appendWindowEnd, [], b.tilesLayout || "");
   			a.mimeType = b.mimeType || c.mimeType || "";
   			a.codecs = b.codecs || c.codecs || "";
   			return a
   		}

   		function By(a, b) {
   			var c = new uy("segment", a.h, a.g, b);
   			return new zi(function() {
   				return [c.toString()]
   			}, 0, null)
   		};

   		function Cy() {
   			this.g = null
   		}
   		r = Cy.prototype;
   		r.configure = function() {};
   		r.start = function(a, b) {
   			var c = this,
   				d, e, f, g, h, k, l;
   			return O(function(m) {
   				switch (m.g) {
   					case 1:
   						d = vy(a);
   						c.g = d;
   						if (null == d || "manifest" != d.g) throw new T(2, 1, 9004, a);
   						e = new by;
   						va(m, 2);
   						return E(m, e.init(), 4);
   					case 4:
   						return E(m, fy(e, d.kb(), d.Da()), 5);
   					case 5:
   						return f = m.h, E(m, f.getManifests([d.key()]), 6);
   					case 6:
   						return g = m.h, h = g[0], k = new wy(d.kb(), d.Da()), l = xy(k, h), b.makeTextStreamsForClosedCaptions(l), m.return(l);
   					case 2:
   						return za(m), E(m, e.destroy(), 7);
   					case 7:
   						Ba(m, 0)
   				}
   			})
   		};
   		r.stop = function() {
   			return Promise.resolve()
   		};
   		r.update = function() {};
   		r.onExpirationUpdated = function(a, b) {
   			var c = this,
   				d, e, f, g, h, k, l;
   			return O(function(m) {
   				switch (m.g) {
   					case 1:
   						return d = c.g, e = new by, ua(m, 2, 3), E(m, e.init(), 5);
   					case 5:
   						return E(m, fy(e, d.kb(), d.Da()), 6);
   					case 6:
   						return f = m.h, E(m, f.getManifests([d.key()]), 7);
   					case 7:
   						g = m.h;
   						h = g[0];
   						k = h.sessionIds.includes(a);
   						l = void 0 == h.expiration || h.expiration > b;
   						if (!k || !l) {
   							m.u(3);
   							break
   						}
   						return E(m, f.updateManifestExpiration(d.key(), b), 3);
   					case 3:
   						return za(m), E(m, e.destroy(), 10);
   					case 10:
   						Ba(m, 0);
   						break;
   					case 2:
   						ya(m), m.u(3)
   				}
   			})
   		};
   		r.onInitialVariantChosen = function() {};
   		r.banLocation = function() {};
   		ri["application/x-offline-manifest"] = function() {
   			return new Cy
   		};

   		function Dy() {}

   		function Ey(a) {
   			var b = vy(a);
   			b && "manifest" == b.g ? (a = {
   				uri: a,
   				originalUri: a,
   				data: new ArrayBuffer(0),
   				headers: {
   					"content-type": "application/x-offline-manifest"
   				}
   			}, a = Wf(a)) : a = b && "segment" == b.g ? Fy(b.key(), b) : Uf(new T(2, 1, 9004, a));
   			return a
   		}

   		function Fy(a, b) {
   			var c = new by;
   			return Wf(void 0).va(function() {
   				return c.init()
   			}).va(function() {
   				return fy(c, b.kb(), b.Da())
   			}).va(function(d) {
   				return d.getSegments([b.key()])
   			}).va(function(d) {
   				return {
   					uri: b,
   					data: d[0].data,
   					headers: {}
   				}
   			}).finally(function() {
   				return c.destroy()
   			})
   		}
   		S("gowatch.offline.OfflineScheme", Dy);
   		Dy.plugin = Ey;
   		fg("offline", Ey);

   		function Gy(a, b, c) {
   			var d, e, f, g, h, k;
   			return O(function(l) {
   				switch (l.g) {
   					case 1:
   						d = [];
   						for (var m = [], n = t(c), p = n.next(); !p.done; p = n.next()) {
   							p = p.value;
   							for (var q = !1, u = t(m), v = u.next(); !v.done; v = u.next())
   								if (v = v.value, Hy(v.info, p)) {
   									v.sessionIds.push(p.sessionId);
   									q = !0;
   									break
   								} q || m.push({
   								info: p,
   								sessionIds: [p.sessionId]
   							})
   						}
   						e = t(m);
   						f = e.next();
   					case 2:
   						if (f.done) {
   							l.u(4);
   							break
   						}
   						g = f.value;
   						h = Iy(a, b, g);
   						return E(l, h, 5);
   					case 5:
   						k = l.h;
   						d = d.concat(k);
   						f = e.next();
   						l.u(2);
   						break;
   					case 4:
   						return l.return(d)
   				}
   			})
   		}

   		function Iy(a, b, c) {
   			var d, e;
   			return O(function(f) {
   				switch (f.g) {
   					case 1:
   						return d = new uh({
   							Db: b,
   							onError: function() {},
   							me: function() {},
   							onExpirationUpdated: function() {},
   							onEvent: function() {}
   						}), ua(f, 2), d.configure(a), E(f, Ch(d, c.info.keySystem, c.info.licenseUri, c.info.serverCertificate, c.info.audioCapabilities, c.info.videoCapabilities), 4);
   					case 4:
   						wa(f, 3);
   						break;
   					case 2:
   						return ya(f), E(f, d.destroy(), 5);
   					case 5:
   						return f.return([]);
   					case 3:
   						return e = [], E(f, Promise.all(c.sessionIds.map(function(g) {
   							return O(function(h) {
   								if (1 ==
   									h.g) return ua(h, 2), E(h, Oh(d, g), 4);
   								if (2 != h.g) return e.push(g), wa(h, 0);
   								ya(h);
   								F(h)
   							})
   						})), 6);
   					case 6:
   						return E(f, d.destroy(), 7);
   					case 7:
   						return f.return(e)
   				}
   			})
   		}

   		function Hy(a, b) {
   			function c(d, e) {
   				return d.robustness == e.robustness && d.contentType == e.contentType
   			}
   			return a.keySystem == b.keySystem && a.licenseUri == b.licenseUri && Lb(a.audioCapabilities, b.audioCapabilities, c) && Lb(a.videoCapabilities, b.videoCapabilities, c)
   		};

   		function Jy(a, b, c) {
   			var d = b.presentationTimeline.getDuration();
   			b = Ky(b);
   			return {
   				offlineUri: null,
   				originalManifestUri: a,
   				duration: d,
   				size: 0,
   				expiration: Infinity,
   				tracks: b,
   				appMetadata: c,
   				isIncomplete: !1
   			}
   		}

   		function Ly(a, b) {
   			var c = xy(new wy(a.kb(), a.Da()), b),
   				d = b.appMetadata || {};
   			c = Ky(c);
   			return {
   				offlineUri: a.toString(),
   				originalManifestUri: b.originalManifestUri,
   				duration: b.duration,
   				size: b.size,
   				expiration: b.expiration,
   				tracks: c,
   				appMetadata: d,
   				isIncomplete: b.isIncomplete || !1
   			}
   		}

   		function Ky(a) {
   			var b = [],
   				c = lf(a.variants);
   			c = t(c);
   			for (var d = c.next(); !d.done; d = c.next()) b.push(af(d.value));
   			a = t(a.textStreams);
   			for (c = a.next(); !c.done; c = a.next()) b.push(bf(c.value));
   			return b
   		};

   		function My() {
   			this.g = {}
   		}

   		function Ny(a, b) {
   			var c = b.audio,
   				d = b.video;
   			c && !d && (a.g[c.id] = c.bandwidth || b.bandwidth);
   			!c && d && (a.g[d.id] = d.bandwidth || b.bandwidth);
   			if (c && d) {
   				var e = c.bandwidth || 393216,
   					f = d.bandwidth || b.bandwidth - e;
   				0 >= f && (f = b.bandwidth);
   				a.g[c.id] = e;
   				a.g[d.id] = f
   			}
   		}

   		function Oy(a, b) {
   			a.g[b.id] = b.bandwidth || 2048
   		}

   		function Py(a, b) {
   			a = a.g[b];
   			null == a && (a = 0);
   			return a
   		};

   		function Qy(a) {
   			var b = this;
   			if (a && a.constructor != X) throw new T(2, 9, 9008);
   			this.g = this.h = null;
   			a ? (this.h = a.g, this.g = a.$b()) : (this.h = hm(), this.g = new eg);
   			this.i = [];
   			this.j = [];
   			var c = !a;
   			this.l = new rg(function() {
   				var d, e, f, g, h;
   				return O(function(k) {
   					switch (k.g) {
   						case 1:
   							return E(k, Promise.all(b.j.map(function(l) {
   								return Mx(l)
   							})), 2);
   						case 2:
   							d = function() {};
   							e = [];
   							f = t(b.i);
   							for (g = f.next(); !g.done; g = f.next()) h = g.value, e.push(h.then(d, d));
   							return E(k, Promise.all(e), 3);
   						case 3:
   							if (!c) {
   								k.u(4);
   								break
   							}
   							return E(k, b.g.destroy(), 4);
   						case 4:
   							b.h = null, b.g = null, F(k)
   					}
   				})
   			})
   		}

   		function Ry() {
   			if (Mc()) a: {
   				var a = t(cy.values());
   				for (var b = a.next(); !b.done; b = a.next())
   					if (b = b.value, b = b()) {
   						b.destroy();
   						a = !0;
   						break a
   					} a = !1
   			}
   			else a = !1;
   			return a
   		}
   		r = Qy.prototype;
   		r.destroy = function() {
   			return this.l.destroy()
   		};
   		r.configure = function(a, b) {
   			2 == arguments.length && "string" == typeof a && (a = Zl(a, b));
   			return lm(this.h, a)
   		};
   		r.getConfiguration = function() {
   			var a = hm();
   			lm(a, this.h, hm());
   			return a
   		};
   		r.$b = function() {
   			return this.g
   		};
   		r.store = function(a, b, c) {
   			var d = this,
   				e = this.getConfiguration(),
   				f = new Lx(this.g);
   			this.j.push(f);
   			b = Sy(this, a, b || {}, function() {
   				var g;
   				return O(function(h) {
   					if (1 == h.g) return c ? h.u(2) : E(h, Tm(a, d.g, e.manifest.retryParameters), 3);
   					2 != h.g && (c = h.h);
   					g = qi(a, c || null);
   					return h.return(g())
   				})
   			}, e, f);
   			b = new Tf(b, function() {
   				return Mx(f)
   			});
   			b.finally(function() {
   				Kb(d.j, f)
   			});
   			return Ty(this, b)
   		};

   		function Sy(a, b, c, d, e, f) {
   			var g, h, k, l, m, n, p, q, u, v, w, A, z, y;
   			return O(function(B) {
   				switch (B.g) {
   					case 1:
   						return Uy(), h = g = null, k = new by, n = m = l = null, ua(B, 2, 3), E(B, d(), 5);
   					case 5:
   						return g = B.h, E(B, Vy(a, b, g, e), 6);
   					case 6:
   						p = B.h;
   						Wy(a);
   						q = !p.presentationTimeline.T() && !p.presentationTimeline.ec();
   						if (!q) throw new T(2, 9, 9005, b);
   						return E(B, a.uc(p, function(C) {
   							n = n || C
   						}, e), 7);
   					case 7:
   						h = B.h;
   						Wy(a);
   						if (n) throw n;
   						return E(B, Xy(p, h, e), 8);
   					case 8:
   						return E(B, k.init(), 9);
   					case 9:
   						return Wy(a), E(B, dy(k), 10);
   					case 10:
   						return l = B.h, Wy(a), u = Yy(h,
   							p, b, c, e, f), v = u.fi, w = u.Tf, E(B, l.Da.addManifests([v]), 11);
   					case 11:
   						A = B.h;
   						Wy(a);
   						m = A[0];
   						Wy(a);
   						if (n) throw n;
   						return E(B, Zy(a, w, m, v, f, e, l.Da, p, h), 12);
   					case 12:
   						return Wy(a), $y(p, v, h, e), E(B, l.Da.updateManifest(m, v), 13);
   					case 13:
   						return Wy(a), z = new uy("manifest", l.path.kb, l.path.Da, m), B.return(Ly(z, v));
   					case 3:
   						return za(B), E(B, k.destroy(), 14);
   					case 14:
   						if (!g) {
   							B.u(15);
   							break
   						}
   						return E(B, g.stop(), 15);
   					case 15:
   						if (!h) {
   							B.u(17);
   							break
   						}
   						return E(B, h.destroy(), 17);
   					case 17:
   						Ba(B, 0);
   						break;
   					case 2:
   						y = ya(B);
   						if (null == m) {
   							B.u(19);
   							break
   						}
   						return E(B,
   							az(m), 19);
   					case 19:
   						throw n || y;
   				}
   			})
   		}

   		function Zy(a, b, c, d, e, f, g, h, k) {
   			var l, m, n, p, q, u, v, w, A, z;
   			return O(function(y) {
   				switch (y.g) {
   					case 1:
   						l = {};
   						m = 0;
   						n = function(B, C) {
   							var D, J, K, H, I, G, N;
   							return O(function(L) {
   								if (1 == L.g) {
   									D = {};
   									J = t(B);
   									for (K = J.next(); !K.done; D = {
   											Tb: D.Tb
   										}, K = J.next()) D.Tb = K.value, H = Ix(D.Tb, f), I = D.Tb.i, G = D.Tb.h, N = function(M) {
   										return function(P) {
   											var R, Q, fa;
   											return O(function(sa) {
   												if (1 == sa.g) return E(sa, g.addSegments([{
   													data: P
   												}]), 2);
   												R = sa.h;
   												Wy(a);
   												Q = M.Tb.g;
   												fa = Hx(Q);
   												l[fa] = R[0];
   												m += P.byteLength;
   												F(sa)
   											})
   										}
   									}(D), Ox(e, D.Tb.groupId, H, I, G, N);
   									return E(L, Qx(e),
   										2)
   								}
   								if (!C) return L.u(0);
   								Wy(a);
   								$y(h, d, k, f);
   								return E(L, g.updateManifest(c, d), 0)
   							})
   						};
   						p = !1;
   						ua(y, 2);
   						if (!bz(h) || !p || cz(h)) {
   							y.u(4);
   							break
   						}
   						return E(y, n(b.filter(function(B) {
   							return B.h
   						}), !0), 5);
   					case 5:
   						return Wy(a), b = b.filter(function(B) {
   							return !B.h
   						}), q = l, u = m, l = {}, m = 0, E(y, dz(g, c, d, q, u, function() {
   							return Wy(a)
   						}), 6);
   					case 6:
   						Wy(a);
   					case 4:
   						if (p) {
   							y.u(7);
   							break
   						}
   						return E(y, n(b, !1), 8);
   					case 8:
   						return Wy(a), v = l, w = m, l = {}, m = 0, E(y, dz(g, c, d, v, w, function() {
   							return Wy(a)
   						}), 9);
   					case 9:
   						Wy(a);
   					case 7:
   						wa(y, 0);
   						break;
   					case 2:
   						return A = ya(y),
   							z = Object.values(l), E(y, g.removeSegments(z, function() {}), 10);
   					case 10:
   						throw A;
   				}
   			})
   		}

   		function az(a) {
   			var b, c, d, e;
   			return O(function(f) {
   				switch (f.g) {
   					case 1:
   						return b = new by, E(f, b.init(), 2);
   					case 2:
   						return E(f, dy(b), 3);
   					case 3:
   						return c = f.h, d = new uy("manifest", c.path.kb, c.path.Da, a), E(f, b.destroy(), 4);
   					case 4:
   						return e = new Qy, E(f, e.remove(d.toString()), 0)
   				}
   			})
   		}

   		function dz(a, b, c, d, e, f) {
   			var g, h, k, l, m, n, p, q, u, v, w;
   			return O(function(A) {
   				switch (A.g) {
   					case 1:
   						g = !1;
   						ua(A, 2);
   						h = !0;
   						k = t(c.streams);
   						for (l = k.next(); !l.done; l = k.next())
   							for (m = l.value, n = t(m.segments), p = n.next(); !p.done; p = n.next()) q = p.value, u = q.pendingSegmentRefId ? d[q.pendingSegmentRefId] : null, null != u && (q.dataKey = u, q.pendingSegmentRefId = void 0), u = q.pendingInitSegmentRefId ? d[q.pendingInitSegmentRefId] : null, null != u && (q.initSegmentKey = u, q.pendingInitSegmentRefId = void 0), q.pendingSegmentRefId && (h = !1), q.pendingInitSegmentRefId &&
   								(h = !1);
   						c.size += e;
   						h && (c.isIncomplete = !1);
   						return E(A, a.updateManifest(b, c), 4);
   					case 4:
   						g = !0;
   						f();
   						wa(A, 0);
   						break;
   					case 2:
   						return v = ya(A), E(A, az(b), 5);
   					case 5:
   						if (g) {
   							A.u(6);
   							break
   						}
   						w = Object.values(d);
   						return E(A, a.removeSegments(w, function() {}), 6);
   					case 6:
   						throw v;
   				}
   			})
   		}

   		function Xy(a, b, c) {
   			var d, e, f, g, h, k, l, m, n, p, q, u, v, w, A, z, y, B, C, D, J, K, H, I, G, N, L, M;
   			return O(function(P) {
   				switch (P.g) {
   					case 1:
   						return d = {
   							width: Infinity,
   							height: Infinity
   						}, He(a, c.restrictions, d), E(P, Le(b, a, c.offline.usePersistentLicense, c.drm.preferredKeySystems), 2);
   					case 2:
   						e = [];
   						f = c.preferredDecodingAttributes;
   						g = c.preferredVideoCodecs;
   						h = c.preferredAudioCodecs;
   						Fe(a, g, h, f);
   						k = t(a.variants);
   						for (l = k.next(); !l.done; l = k.next()) m = l.value, e.push(af(m));
   						n = t(a.textStreams);
   						for (p = n.next(); !p.done; p = n.next()) q = p.value, e.push(bf(q));
   						u = t(a.imageStreams);
   						for (v = u.next(); !v.done; v = u.next()) w = v.value, e.push(cf(w));
   						return E(P, c.offline.trackSelectionCallback(e), 3);
   					case 3:
   						A = P.h;
   						z = a.presentationTimeline.getDuration();
   						y = 0;
   						B = t(A);
   						for (C = B.next(); !C.done; C = B.next()) D = C.value, J = D.bandwidth * z / 8, y += J;
   						ua(P, 4);
   						return E(P, c.offline.downloadSizeCallback(y), 6);
   					case 6:
   						K = P.h;
   						if (!K) throw new T(2, 9, 9014);
   						wa(P, 5);
   						break;
   					case 4:
   						H = ya(P);
   						if (H instanceof T) throw H;
   						throw new T(2, 9, 9015);
   					case 5:
   						I = new Set;
   						G = new Set;
   						N = new Set;
   						L = t(A);
   						for (C = L.next(); !C.done; C =
   							L.next()) M = C.value, "variant" == M.type && I.add(M.id), "text" == M.type && G.add(M.id), "image" == M.type && N.add(M.id);
   						a.variants = a.variants.filter(function(R) {
   							return I.has(R.id)
   						});
   						a.textStreams = a.textStreams.filter(function(R) {
   							return G.has(R.id)
   						});
   						a.imageStreams = a.imageStreams.filter(function(R) {
   							return N.has(R.id)
   						});
   						ez(a);
   						F(P)
   				}
   			})
   		}

   		function Yy(a, b, c, d, e, f) {
   			var g = Jy(c, b, d),
   				h = e.offline.progressCallback;
   			Nx(f, function(q, u) {
   				g.size = u;
   				h(g, q)
   			}, function(q, u) {
   				k && e.offline.usePersistentLicense && l == u && Kh(a, "cenc", q)
   			});
   			var k = bz(b) && !cz(b),
   				l = null;
   			k && (l = fz.get(a.g.keySystem));
   			for (var m = new My, n = t(b.textStreams), p = n.next(); !p.done; p = n.next()) m.g[p.value.id] = 52;
   			n = t(b.imageStreams);
   			for (p = n.next(); !p.done; p = n.next()) Oy(m, p.value);
   			p = t(b.variants);
   			for (n = p.next(); !n.done; n = p.next()) Ny(m, n.value);
   			m = gz(f, m, b, e);
   			f = m.streams;
   			m = m.Tf;
   			p = a.g;
   			n = e.offline.usePersistentLicense;
   			p && n && (p.initData = []);
   			return {
   				fi: {
   					creationTime: Date.now(),
   					originalManifestUri: c,
   					duration: b.presentationTimeline.getDuration(),
   					size: 0,
   					expiration: a.jd(),
   					streams: f,
   					sessionIds: n ? Uh(a) : [],
   					drmInfo: p,
   					appMetadata: d,
   					isIncomplete: !0,
   					sequenceMode: b.sequenceMode,
   					type: b.type
   				},
   				Tf: m
   			}
   		}

   		function bz(a) {
   			return a.variants.some(function(b) {
   				var c = b.audio && b.audio.encrypted;
   				return b.video && b.video.encrypted || c
   			})
   		}

   		function cz(a) {
   			return a.variants.some(function(b) {
   				return (b.video ? b.video.drmInfos : []).concat(b.audio ? b.audio.drmInfos : []).some(function(c) {
   					return c.initData && c.initData.length
   				})
   			})
   		}

   		function $y(a, b, c, d) {
   			b.expiration = c.jd();
   			c = Uh(c);
   			b.sessionIds = d.offline.usePersistentLicense ? c : [];
   			if (bz(a) && d.offline.usePersistentLicense && !c.length) throw new T(2, 9, 9007);
   		}
   		r.remove = function(a) {
   			return hz(this, iz(this, a))
   		};

   		function iz(a, b) {
   			var c, d, e, f, g, h;
   			return O(function(k) {
   				switch (k.g) {
   					case 1:
   						Uy();
   						c = vy(b);
   						if (null == c || "manifest" != c.g) throw new T(2, 9, 9004, b);
   						d = c;
   						e = new by;
   						va(k, 2);
   						return E(k, e.init(), 4);
   					case 4:
   						return E(k, fy(e, d.kb(), d.Da()), 5);
   					case 5:
   						return f = k.h, E(k, f.getManifests([d.key()]), 6);
   					case 6:
   						return g = k.h, h = g[0], E(k, Promise.all([jz(a, h, e), kz(f, d, h)]), 2);
   					case 2:
   						return za(k), E(k, e.destroy(), 8);
   					case 8:
   						Ba(k, 0)
   				}
   			})
   		}

   		function lz(a, b) {
   			for (var c = [], d = t(a.streams), e = d.next(); !e.done; e = d.next()) e = e.value, b && "video" == e.type ? c.push({
   				contentType: Pd(e.mimeType, e.codecs),
   				robustness: a.drmInfo.videoRobustness
   			}) : b || "audio" != e.type || c.push({
   				contentType: Pd(e.mimeType, e.codecs),
   				robustness: a.drmInfo.audioRobustness
   			});
   			return c
   		}

   		function jz(a, b, c) {
   			return O(function(d) {
   				return E(d, mz(a.g, a.h.drm, c, b), 0)
   			})
   		}

   		function kz(a, b, c) {
   			function d() {}
   			var e = nz(c);
   			Ly(b, c);
   			return Promise.all([a.removeSegments(e, d), a.removeManifests([b.key()], d)])
   		}
   		r.yi = function() {
   			return hz(this, oz(this))
   		};

   		function oz(a) {
   			var b, c, d, e, f, g, h, k, l, m;
   			return O(function(n) {
   				switch (n.g) {
   					case 1:
   						return Uy(), b = a.g, c = a.h.drm, d = new by, e = !1, va(n, 2), E(n, d.init(), 4);
   					case 4:
   						f = [], gy(d, function(p) {
   							return f.push(p)
   						}), g = t(f), h = g.next();
   					case 5:
   						if (h.done) {
   							n.u(2);
   							break
   						}
   						k = h.value;
   						return E(n, k.getAll(), 8);
   					case 8:
   						return l = n.h, E(n, Gy(c, b, l), 9);
   					case 9:
   						return m = n.h, E(n, k.remove(m), 10);
   					case 10:
   						m.length != l.length && (e = !0);
   						h = g.next();
   						n.u(5);
   						break;
   					case 2:
   						return za(n), E(n, d.destroy(), 11);
   					case 11:
   						Ba(n, 3);
   						break;
   					case 3:
   						return n.return(!e)
   				}
   			})
   		}
   		r.list = function() {
   			return hz(this, pz())
   		};

   		function pz() {
   			var a, b, c;
   			return O(function(d) {
   				switch (d.g) {
   					case 1:
   						return Uy(), a = [], b = new by, va(d, 2), E(d, b.init(), 4);
   					case 4:
   						return c = Promise.resolve(), ey(b, function(e, f) {
   							c = c.then(function() {
   								var g;
   								return O(function(h) {
   									if (1 == h.g) return E(h, f.getAllManifests(), 2);
   									g = h.h;
   									g.forEach(function(k, l) {
   										k = Ly(new uy("manifest", e.kb, e.Da, l), k);
   										a.push(k)
   									});
   									F(h)
   								})
   							})
   						}), E(d, c, 2);
   					case 2:
   						return za(d), E(d, b.destroy(), 6);
   					case 6:
   						Ba(d, 3);
   						break;
   					case 3:
   						return d.return(a)
   				}
   			})
   		}

   		function Vy(a, b, c, d) {
   			var e, f, g, h, k;
   			return O(function(l) {
   				if (1 == l.g) return e = null, f = a.g, g = {
   						networkingEngine: f,
   						filter: function() {
   							return Promise.resolve()
   						},
   						makeTextStreamsForClosedCaptions: function() {},
   						onTimelineRegionAdded: function() {},
   						onEvent: function() {},
   						onError: function(m) {
   							e = m
   						},
   						isLowLatencyMode: function() {
   							return !1
   						},
   						isAutoLowLatencyMode: function() {
   							return !1
   						},
   						enableLowLatencyMode: function() {},
   						updateDuration: function() {},
   						newDrmInfo: function() {},
   						onManifestUpdated: function() {},
   						getBandwidthEstimate: function() {
   							return d.abr.defaultBandwidthEstimate
   						}
   					},
   					c.configure(d.manifest), Wy(a), E(l, c.start(b, g), 2);
   				if (3 != l.g) return h = l.h, Wy(a), k = qz(h), E(l, Promise.all(tg(k, function(m) {
   					return m.createSegmentIndex()
   				})), 3);
   				Wy(a);
   				if (e) throw e;
   				return l.return(h)
   			})
   		}
   		r.uc = function(a, b, c) {
   			var d = this,
   				e;
   			return O(function(f) {
   				return 1 == f.g ? (e = new uh({
   					Db: d.g,
   					onError: b,
   					me: function() {},
   					onExpirationUpdated: function() {},
   					onEvent: function() {}
   				}), e.configure(c.drm), E(f, zh(e, a.variants, c.offline.usePersistentLicense), 2)) : 3 != f.g ? E(f, Mh(e), 3) : f.return(e)
   			})
   		};

   		function gz(a, b, c, d) {
   			var e = new Map,
   				f = qz(c),
   				g = new Map;
   			f = t(f);
   			for (var h = f.next(); !h.done; h = f.next()) {
   				h = h.value;
   				var k = rz(a, b, c, h, d, e);
   				g.set(h.id, k)
   			}
   			a = t(c.variants);
   			for (b = a.next(); !b.done; b = a.next()) b = b.value, b.audio && g.get(b.audio.id).variantIds.push(b.id), b.video && g.get(b.video.id).variantIds.push(b.id);
   			return {
   				streams: Array.from(g.values()),
   				Tf: Array.from(e.values())
   			}
   		}

   		function rz(a, b, c, d, e, f) {
   			var g = {
   					id: d.id,
   					originalId: d.originalId,
   					groupId: d.groupId,
   					primary: d.primary,
   					type: d.type,
   					mimeType: d.mimeType,
   					codecs: d.codecs,
   					frameRate: d.frameRate,
   					pixelAspectRatio: d.pixelAspectRatio,
   					hdr: d.hdr,
   					colorGamut: d.colorGamut,
   					videoLayout: d.videoLayout,
   					kind: d.kind,
   					language: d.language,
   					originalLanguage: d.originalLanguage,
   					label: d.label,
   					width: d.width || null,
   					height: d.height || null,
   					encrypted: d.encrypted,
   					keyIds: d.keyIds,
   					segments: [],
   					variantIds: [],
   					roles: d.roles,
   					forced: d.forced,
   					channelsCount: d.channelsCount,
   					audioSamplingRate: d.audioSamplingRate,
   					spatialAudio: d.spatialAudio,
   					closedCaptions: d.closedCaptions,
   					tilesLayout: d.tilesLayout,
   					external: d.external,
   					fastSwitching: d.fastSwitching
   				},
   				h = e.offline.numberOfParallelDownloads,
   				k = 0;
   			sz(d, c.presentationTimeline.jb(), function(l) {
   				var m = Hx(l),
   					n = void 0;
   				if (!f.has(m)) {
   					var p = l.endTime - l.startTime;
   					p = Py(b, d.id) * p;
   					p = Kx(a.g, p);
   					f.set(m, new Gx(l, p, k, !1))
   				}
   				l.ea && (n = Hx(l.ea), f.has(n) || (p = .5 * Py(b, d.id), p = Kx(a.g, p), f.set(n, new Gx(l.ea, p, k, !0))));
   				g.segments.push({
   					pendingInitSegmentRefId: n,
   					initSegmentKey: n ? 0 : null,
   					startTime: l.startTime,
   					endTime: l.endTime,
   					appendWindowStart: l.appendWindowStart,
   					appendWindowEnd: l.appendWindowEnd,
   					timestampOffset: l.timestampOffset,
   					tilesLayout: l.tilesLayout,
   					pendingSegmentRefId: m,
   					dataKey: 0,
   					mimeType: l.mimeType,
   					codecs: l.codecs
   				});
   				k = (k + 1) % h
   			});
   			return g
   		}

   		function sz(a, b, c) {
   			b = a.segmentIndex.find(b);
   			if (null != b)
   				for (var d = a.segmentIndex.get(b); d;) c(d), d = a.segmentIndex.get(++b)
   		}

   		function Wy(a) {
   			if (a.l.g) throw new T(2, 9, 7001);
   		}

   		function Uy() {
   			if (!Ry()) throw new T(2, 9, 9E3);
   		}

   		function hz(a, b) {
   			return O(function(c) {
   				if (1 == c.g) return a.i.push(b), va(c, 2), E(c, b, 4);
   				if (2 != c.g) return c.return(c.h);
   				za(c);
   				Kb(a.i, b);
   				return Ba(c, 0)
   			})
   		}

   		function Ty(a, b) {
   			var c = b.promise;
   			a.i.push(c);
   			return b.finally(function() {
   				Kb(a.i, c)
   			})
   		}

   		function nz(a) {
   			var b = new Set;
   			a = t(a.streams);
   			for (var c = a.next(); !c.done; c = a.next()) {
   				c = t(c.value.segments);
   				for (var d = c.next(); !d.done; d = c.next()) d = d.value, null != d.initSegmentKey && b.add(d.initSegmentKey), b.add(d.dataKey)
   			}
   			return Array.from(b)
   		}

   		function mz(a, b, c, d) {
   			var e, f, g;
   			return O(function(h) {
   				if (1 == h.g) {
   					if (!d.drmInfo) return h.return();
   					e = hy(c);
   					f = d.sessionIds.map(function(k) {
   						return {
   							sessionId: k,
   							keySystem: d.drmInfo.keySystem,
   							licenseUri: d.drmInfo.licenseServerUri,
   							serverCertificate: d.drmInfo.serverCertificate,
   							audioCapabilities: lz(d, !1),
   							videoCapabilities: lz(d, !0)
   						}
   					});
   					return E(h, Gy(b, a, f), 2)
   				}
   				return 3 != h.g ? (g = h.h, E(h, e.remove(g), 3)) : E(h, e.add(f.filter(function(k) {
   					return !g.includes(k.sessionId)
   				})), 0)
   			})
   		}

   		function qz(a) {
   			for (var b = new Set, c = t(a.textStreams), d = c.next(); !d.done; d = c.next()) b.add(d.value);
   			c = t(a.imageStreams);
   			for (d = c.next(); !d.done; d = c.next()) b.add(d.value);
   			a = t(a.variants);
   			for (c = a.next(); !c.done; c = a.next()) c = c.value, c.audio && b.add(c.audio), c.video && b.add(c.video);
   			return b
   		}

   		function ez(a) {
   			a.variants.map(function(f) {
   				return f.video
   			});
   			var b = new Set(a.variants.map(function(f) {
   				return f.audio
   			}));
   			a = a.textStreams;
   			for (var c = t(b), d = c.next(); !d.done; d = c.next()) {
   				d = t(b);
   				for (var e = d.next(); !e.done; e = d.next());
   			}
   			b = t(a);
   			for (c = b.next(); !c.done; c = b.next())
   				for (c = t(a), d = c.next(); !d.done; d = c.next());
   		}
   		S("gowatch.offline.Storage", Qy);
   		Qy.deleteAll = function() {
   			var a;
   			return O(function(b) {
   				return 1 == b.g ? (a = new by, va(b, 2), E(b, iy(a), 2)) : 5 != b.g ? (za(b), E(b, a.destroy(), 5)) : Ba(b, 0)
   			})
   		};
   		Qy.prototype.list = Qy.prototype.list;
   		Qy.prototype.removeEmeSessions = Qy.prototype.yi;
   		Qy.prototype.remove = Qy.prototype.remove;
   		Qy.prototype.store = Qy.prototype.store;
   		Qy.prototype.getNetworkingEngine = Qy.prototype.$b;
   		Qy.prototype.getConfiguration = Qy.prototype.getConfiguration;
   		Qy.prototype.configure = Qy.prototype.configure;
   		Qy.prototype.destroy = Qy.prototype.destroy;
   		Qy.support = Ry;
   		var fz = (new Map).set("org.w3.clearkey", "1077efecc0b24d02ace33c1e52e2fb4b").set("com.widevine.alpha", "edef8ba979d64acea3c827dcd51d21ed").set("com.microsoft.playready", "9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.recommendation", "9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.software", "9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.hardware", "9a04f07998404286ab92e65be0885f95");
   		hp.offline = Ry;

   		function tz() {}

   		function uz(a, b) {
   			a = {
   				priority: b || 0,
   				callback: a
   			};
   			for (b = 0; b < vz.length; b++)
   				if (vz[b].priority < a.priority) {
   					vz.splice(b, 0, a);
   					return
   				} vz.push(a)
   		}
   		S("gowatch.polyfill", tz);
   		tz.register = uz;
   		tz.installAll = function() {
   			for (var a = t(vz), b = a.next(); !b.done; b = a.next()) {
   				b = b.value;
   				try {
   					b.callback()
   				} catch (c) {
   					ab("Error installing polyfill!", c)
   				}
   			}
   		};
   		var vz = [];

   		function wz() {
   			this.g = new xz
   		}

   		function yz() {
   			window.AbortController || (window.AbortController = wz, window.AbortSignal = xz)
   		}
   		wz.prototype.abort = function(a) {
   			var b = this.g;
   			if (!b.h) {
   				b.h = !0;
   				b.g = a;
   				void 0 === b.g && (b.g = new DOMException("signal is aborted without reason", "AbortError"));
   				a = new U("abort");
   				if (b.onabort) b.onabort(a);
   				b.dispatchEvent(a)
   			}
   		};
   		da.Object.defineProperties(wz.prototype, {
   			signal: {
   				configurable: !0,
   				enumerable: !0,
   				get: function() {
   					return this.g
   				}
   			}
   		});
   		tz.AbortController = wz;
   		wz.install = yz;

   		function xz() {
   			bg.call(this);
   			this.h = !1;
   			this.g = void 0;
   			this.onabort = null
   		}
   		oa(xz, bg);
   		da.Object.defineProperties(xz.prototype, {
   			aborted: {
   				configurable: !0,
   				enumerable: !0,
   				get: function() {
   					return this.h
   				}
   			},
   			reason: {
   				configurable: !0,
   				enumerable: !0,
   				get: function() {
   					return this.g
   				}
   			}
   		});
   		uz(yz);

   		function zz() {}

   		function Az() {
   			if (!Object.getOwnPropertyDescriptor(Element.prototype, "ariaHidden"))
   				for (var a = t(["ariaHidden", "ariaLabel", "ariaPressed", "ariaSelected"]), b = a.next(); !b.done; b = a.next()) Bz(b.value)
   		}

   		function Bz(a) {
   			var b = "aria-" + a.toLowerCase().replace(/^aria/, "");
   			Object.defineProperty(Element.prototype, a, {
   				get: function() {
   					return this.getAttribute(b)
   				},
   				set: function(c) {
   					null == c || void 0 == c ? this.removeAttribute(b) : this.setAttribute(b, c)
   				}
   			})
   		}
   		tz.Aria = zz;
   		zz.install = Az;
   		uz(Az);

   		function Cz() {}

   		function Dz() {
   			Ez()
   		}
   		tz.EncryptionScheme = Cz;
   		Cz.install = Dz;
   		uz(Dz, -2);

   		function Fz() {}

   		function Gz() {
   			if (window.Document) {
   				var a = Element.prototype;
   				a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
   				a = Document.prototype;
   				a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitCancelFullScreen;
   				"fullscreenElement" in document || (Object.defineProperty(document, "fullscreenElement", {
   						get: function() {
   							return document.mozFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement
   						}
   					}),
   					Object.defineProperty(document, "fullscreenEnabled", {
   						get: function() {
   							return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
   						}
   					}));
   				document.addEventListener("webkitfullscreenchange", Hz);
   				document.addEventListener("webkitfullscreenerror", Hz);
   				document.addEventListener("mozfullscreenchange", Hz);
   				document.addEventListener("mozfullscreenerror", Hz);
   				document.addEventListener("MSFullscreenChange", Hz);
   				document.addEventListener("MSFullscreenError", Hz)
   			}
   		}

   		function Hz(a) {
   			var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase(),
   				c = document.createEvent("Event");
   			c.initEvent(b, a.bubbles, a.cancelable);
   			a.target.dispatchEvent(c)
   		}
   		tz.Fullscreen = Fz;
   		Fz.install = Gz;
   		uz(Gz);

   		function Iz() {}

   		function Jz() {
   			var a = !0;
   			!$c() || $c() && Tc("Android") || $c() && Tc("Fuchsia") || (a = !1);
   			if (ad() || dd() || cd() || Xc() || Uc() || Tc("PC=EOS") || ed()) a = !1;
   			a && navigator.mediaCapabilities || (navigator.mediaCapabilities || (navigator.mediaCapabilities = {}), Kz = navigator.mediaCapabilities, navigator.mediaCapabilities.decodingInfo = Lz)
   		}

   		function Lz(a) {
   			var b, c, d, e, f, g, h, k, l, m, n;
   			return O(function(p) {
   				switch (p.g) {
   					case 1:
   						b = {
   							supported: !1,
   							powerEfficient: !0,
   							smooth: !0,
   							keySystemAccess: null,
   							configuration: a
   						};
   						c = a.video;
   						d = a.audio;
   						if ("media-source" != a.type) {
   							if ("file" == a.type) {
   								if (c && (e = c.contentType, f = Nc(e), !f) || d && (g = d.contentType, h = Nc(g), !h)) return p.return(b)
   							} else return p.return(b);
   							p.u(2);
   							break
   						}
   						if (!Mc()) return p.return(b);
   						if (!c) {
   							p.u(3);
   							break
   						}
   						return E(p, Mz(c), 4);
   					case 4:
   						if (k = p.h, !k) return p.return(b);
   					case 3:
   						if (d) {
   							var q = d.contentType;
   							$c() && d.spatialRendering &&
   								(q += "; spatialRendering=true");
   							l = mb(q);
   							if (!l) return p.return(b)
   						}
   					case 2:
   						if (!a.keySystemConfiguration) return b.supported = !0, p.return(b);
   						m = a.keySystemConfiguration;
   						return E(p, Nz(c, d, m), 6);
   					case 6:
   						if (n = p.h) b.supported = !0, b.keySystemAccess = n;
   					case 5:
   						return p.return(b)
   				}
   			})
   		}

   		function Mz(a) {
   			var b, c;
   			return O(function(d) {
   				return 1 == d.g ? $c() ? E(d, Oz(a), 3) : Uc() ? (b = a.contentType, a.width && a.height && (b += "; width=" + a.width, b += "; height=" + a.height), a.framerate && (b += "; framerate=" + a.framerate), a.bitrate && (b += "; bitrate=" + a.bitrate), d.return(mb(b))) : d.u(2) : 2 != d.g ? (c = d.h, d.return(c)) : d.return(mb(a.contentType))
   			})
   		}

   		function Nz(a, b, c) {
   			var d, e, f, g, h, k, l, m, n;
   			return O(function(p) {
   				switch (p.g) {
   					case 1:
   						d = [];
   						e = [];
   						c.audio && (f = {
   							robustness: c.audio.robustness || "",
   							contentType: b.contentType
   						}, Uc() && b.contentType.includes('codecs="ac-3"') && (f.contentType = 'audio/mp4; codecs="ec-3"'), c.audio.encryptionScheme && (f.encryptionScheme = c.audio.encryptionScheme), d.push(f));
   						c.video && (g = {
   							robustness: c.video.robustness || "",
   							contentType: a.contentType
   						}, c.video.encryptionScheme && (g.encryptionScheme = c.video.encryptionScheme), e.push(g));
   						h = {
   							initDataTypes: [c.initDataType],
   							distinctiveIdentifier: c.distinctiveIdentifier,
   							persistentState: c.persistentState,
   							sessionTypes: c.sessionTypes
   						};
   						d.length && (h.audioCapabilities = d);
   						e.length && (h.videoCapabilities = e);
   						k = a ? a.contentType : "";
   						l = b ? b.contentType : "";
   						m = c.keySystem;
   						n = null;
   						ua(p, 2);
   						if (ii.has(k + "#" + l + "#" + m)) {
   							n = ii.get(k + "#" + l + "#" + m) || null;
   							p.u(4);
   							break
   						}
   						return E(p, navigator.requestMediaKeySystemAccess(c.keySystem, [h]), 5);
   					case 5:
   						n = p.h, ii.set(k + "#" + l + "#" + m, n);
   					case 4:
   						wa(p, 3);
   						break;
   					case 2:
   						ya(p);
   					case 3:
   						return p.return(n)
   				}
   			})
   		}

   		function Oz(a) {
   			var b, c;
   			return O(function(d) {
   				if (1 == d.g) {
   					if (!(window.cast && cast.__platform__ && cast.__platform__.canDisplayType)) return d.return(mb(a.contentType));
   					b = a.contentType;
   					a.width && a.height && (b += "; width=" + a.width + "; height=" + a.height);
   					a.framerate && (b += "; framerate=" + a.framerate);
   					"pq" === a.transferFunction && (b += "; eotf=smpte2084");
   					c = !1;
   					return b in Pz ? (c = Pz[b], d.u(2)) : E(d, cast.__platform__.canDisplayType(b), 3)
   				}
   				2 != d.g && (c = d.h, Pz[b] = c);
   				return d.return(c)
   			})
   		}
   		tz.MediaCapabilities = Iz;
   		Iz.install = Jz;
   		var Kz = null;
   		Iz.originalMcap = Kz;
   		var Pz = {};
   		Iz.memoizedCanDisplayTypeRequests_ = Pz;
   		uz(Jz, -1);

   		function Qz() {}

   		function Rz() {
   			var a = fd();
   			if (window.MediaSource || window.ManagedMediaSource) a ? 10 >= a ? window.MediaSource = null : 12 >= a ? (Sz(), Tz()) : 15 >= a && Sz() : Tc("DT_STB_BCM") ? (Sz(), Tz()) : (Wc() || Vc() || Tc("Tizen 4")) && Uz();
   			(window.MediaSource || window.ManagedMediaSource) && Vz();
   			window.MediaSource && MediaSource.isTypeSupported('video/webm; codecs="vp9"') && !MediaSource.isTypeSupported('video/webm; codecs="vp09.00.10.08"') && Wz()
   		}

   		function Sz() {
   			var a = MediaSource.prototype.addSourceBuffer;
   			MediaSource.prototype.addSourceBuffer = function() {
   				var b = a.apply(this, Ka.apply(0, arguments));
   				b.abort = function() {};
   				return b
   			}
   		}

   		function Tz() {
   			var a = SourceBuffer.prototype.remove;
   			SourceBuffer.prototype.remove = function(b, c) {
   				return a.call(this, b, c - .001)
   			}
   		}

   		function Vz() {
   			var a = MediaSource.isTypeSupported.bind(MediaSource);
   			MediaSource.isTypeSupported = function(c) {
   				return "mp2t" != Vd(c) && a(c)
   			};
   			if (window.ManagedMediaSource) {
   				var b = ManagedMediaSource.isTypeSupported.bind(ManagedMediaSource);
   				window.ManagedMediaSource.isTypeSupported = function(c) {
   					return "mp2t" != Vd(c) && b(c)
   				}
   			}
   		}

   		function Uz() {
   			var a = MediaSource.isTypeSupported.bind(MediaSource);
   			MediaSource.isTypeSupported = function(c) {
   				return "opus" != Yd(c) && a(c)
   			};
   			if (window.ManagedMediaSource) {
   				var b = ManagedMediaSource.isTypeSupported.bind(ManagedMediaSource);
   				window.ManagedMediaSource.isTypeSupported = function(c) {
   					return "opus" != Yd(c) && b(c)
   				}
   			}
   		}

   		function Wz() {
   			var a = MediaSource.isTypeSupported;
   			Xc() || (MediaSource.isTypeSupported = function(b) {
   				var c = b.split(/ *; */),
   					d = c.findIndex(function(g) {
   						return g.startsWith("codecs=")
   					});
   				if (0 > d) return a(b);
   				var e = c[d].replace("codecs=", "").replace(/"/g, "").split(/\s*,\s*/),
   					f = e.findIndex(function(g) {
   						return g.startsWith("vp09")
   					});
   				0 <= f && (e[f] = "vp9", c[d] = 'codecs="' + e.join(",") + '"', b = c.join("; "));
   				return a(b)
   			})
   		}
   		tz.MediaSource = Qz;
   		Qz.install = Rz;
   		uz(Rz);

   		function Xz() {}

   		function Yz() {
   			screen.orientation && screen.orientation.unlock || (void 0 != screen.orientation ? Zz() : void 0 != window.orientation && $z())
   		}

   		function Zz() {
   			void 0 === screen.orientation.lock && (screen.orientation.lock = function() {
   				return Promise.resolve()
   			});
   			void 0 === screen.orientation.unlock && (screen.orientation.unlock = function() {})
   		}

   		function $z() {
   			function a() {
   				switch (window.orientation) {
   					case -90:
   						b.type = "landscape-secondary";
   						b.angle = 270;
   						break;
   					case 0:
   						b.type = "portrait-primary";
   						b.angle = 0;
   						break;
   					case 90:
   						b.type = "landscape-primary";
   						b.angle = 90;
   						break;
   					case 180:
   						b.type = "portrait-secondary", b.angle = 180
   				}
   			}
   			var b = new aA;
   			screen.orientation = b;
   			a();
   			window.addEventListener("orientationchange", function() {
   				a();
   				var c = new U("change");
   				b.dispatchEvent(c)
   			})
   		}
   		tz.Orientation = Xz;
   		Xz.install = Yz;

   		function aA() {
   			bg.call(this);
   			this.type = "";
   			this.angle = 0
   		}
   		oa(aA, bg);
   		aA.prototype.lock = function(a) {
   			function b(d) {
   				return screen.lockOrientation ? screen.lockOrientation(d) : screen.mozLockOrientation ? screen.mozLockOrientation(d) : screen.msLockOrientation ? screen.msLockOrientation(d) : !1
   			}
   			var c = !1;
   			switch (a) {
   				case "natural":
   					c = b("default");
   					break;
   				case "any":
   					c = !0;
   					this.unlock();
   					break;
   				default:
   					c = b(a)
   			}
   			if (c) return Promise.resolve();
   			a = Error("screen.orientation.lock() is not available on this device");
   			a.name = "NotSupportedError";
   			a.code = DOMException.NOT_SUPPORTED_ERR;
   			return Promise.reject(a)
   		};
   		aA.prototype.unlock = function() {
   			screen.unlockOrientation ? screen.unlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
   		};
   		uz(Yz);

   		function bA() {}
   		var cA, dA, eA, fA, gA, hA;

   		function iA(a, b) {
   			try {
   				var c = new jA(a, b);
   				return Promise.resolve(c)
   			} catch (d) {
   				return Promise.reject(d)
   			}
   		}

   		function kA(a) {
   			var b = this.mediaKeys;
   			b && b != a && lA(b, null);
   			delete this.mediaKeys;
   			return (this.mediaKeys = a) ? lA(a, this) : Promise.resolve()
   		}

   		function mA(a) {
   			a = Ab(a.initData);
   			if (Eb(a).getUint32(0, !0) + 4 != a.byteLength) throw new RangeError("Malformed FairPlay init data");
   			a = ld(a.subarray(4), !0);
   			a = qd(a);
   			var b = new Event("encrypted");
   			b.initDataType = "skd";
   			b.initData = Bb(a);
   			this.dispatchEvent(b)
   		}
   		tz.PatchedMediaKeysApple = bA;
   		bA.uninstall = function() {
   			cA && (cA = !1, Object.defineProperty(HTMLMediaElement.prototype, "mediaKeys", dA), HTMLMediaElement.prototype.setMediaKeys = eA, window.MediaKeys = fA, window.MediaKeySystemAccess = gA, navigator.requestMediaKeySystemAccess = hA, dA = hA = eA = gA = fA = null, window.gowatchMediaKeysPolyfill = !1)
   		};
   		bA.install = function(a) {
   			if (window.HTMLVideoElement && window.WebKitMediaKeys) {
   				if (void 0 === a ? 0 : a) cA = !0, dA = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, "mediaKeys"), eA = HTMLMediaElement.prototype.setMediaKeys, fA = window.MediaKeys, gA = window.MediaKeySystemAccess, hA = navigator.requestMediaKeySystemAccess;
   				delete HTMLMediaElement.prototype.mediaKeys;
   				HTMLMediaElement.prototype.mediaKeys = null;
   				HTMLMediaElement.prototype.setMediaKeys = kA;
   				window.MediaKeys = nA;
   				window.MediaKeySystemAccess = jA;
   				navigator.requestMediaKeySystemAccess =
   					iA;
   				window.gowatchMediaKeysPolyfill = !0
   			}
   		};

   		function jA(a, b) {
   			this.keySystem = a;
   			if (a.startsWith("com.apple.fps"))
   				for (a = t(b), b = a.next(); !b.done; b = a.next()) {
   					var c = b.value;
   					if ("required" == c.persistentState) b = null;
   					else {
   						b = {
   							audioCapabilities: [],
   							videoCapabilities: [],
   							persistentState: "optional",
   							distinctiveIdentifier: "optional",
   							initDataTypes: c.initDataTypes,
   							sessionTypes: ["temporary"],
   							label: c.label
   						};
   						var d = !1,
   							e = !1;
   						if (c.audioCapabilities)
   							for (var f = t(c.audioCapabilities), g = f.next(); !g.done; g = f.next()) g = g.value, g.contentType && (d = !0, WebKitMediaKeys.isTypeSupported(this.keySystem,
   								g.contentType.split(";")[0]) && (b.audioCapabilities.push(g), e = !0));
   						if (c.videoCapabilities)
   							for (c = t(c.videoCapabilities), g = c.next(); !g.done; g = c.next()) f = g.value, f.contentType && (d = !0, WebKitMediaKeys.isTypeSupported(this.keySystem, f.contentType.split(";")[0]) && (b.videoCapabilities.push(f), e = !0));
   						d || (e = WebKitMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
   						b = e ? b : null
   					}
   					if (b) {
   						this.g = b;
   						return
   					}
   				}
   			a = Error("Unsupported keySystem");
   			a.name = "NotSupportedError";
   			a.code = DOMException.NOT_SUPPORTED_ERR;
   			throw a;
   		}
   		jA.prototype.createMediaKeys = function() {
   			var a = new nA(this.keySystem);
   			return Promise.resolve(a)
   		};
   		jA.prototype.getConfiguration = function() {
   			return this.g
   		};

   		function nA(a) {
   			this.h = new WebKitMediaKeys(a);
   			this.g = new hb
   		}
   		nA.prototype.createSession = function(a) {
   			a = a || "temporary";
   			if ("temporary" != a) throw new TypeError("Session type " + a + " is unsupported on this platform.");
   			return new oA(this.h, a)
   		};
   		nA.prototype.setServerCertificate = function() {
   			return Promise.resolve(!1)
   		};

   		function lA(a, b) {
   			a.g.nb();
   			if (!b) return Promise.resolve();
   			a.g.D(b, "webkitneedkey", mA);
   			try {
   				return vk(b, HTMLMediaElement.HAVE_METADATA, a.g, function() {
   					b.webkitSetMediaKeys(a.h)
   				}), Promise.resolve()
   			} catch (c) {
   				return Promise.reject(c)
   			}
   		}
   		nA.prototype.getStatusForPolicy = function() {
   			return Promise.resolve("usable")
   		};

   		function oA(a) {
   			bg.call(this);
   			this.i = null;
   			this.l = a;
   			this.g = this.h = null;
   			this.j = new hb;
   			this.sessionId = "";
   			this.expiration = NaN;
   			this.closed = new Sf;
   			this.keyStatuses = new pA
   		}
   		oa(oA, bg);
   		r = oA.prototype;
   		r.generateRequest = function(a, b) {
   			var c = this;
   			this.h = new Sf;
   			try {
   				var d = this.l.createSession("video/mp4", Ab(b));
   				this.i = d;
   				this.sessionId = d.sessionId || "";
   				this.j.D(this.i, "webkitkeymessage", function(e) {
   					c.h && (c.h.resolve(), c.h = null);
   					e = (new Map).set("messageType", void 0 == c.keyStatuses.cc() ? "license-request" : "license-renewal").set("message", Bb(e.message));
   					e = new U("message", e);
   					c.dispatchEvent(e)
   				});
   				this.j.D(d, "webkitkeyadded", function() {
   					c.g && (qA(c, "usable"), c.g.resolve(), c.g = null)
   				});
   				this.j.D(d, "webkitkeyerror",
   					function() {
   						var e = Error("EME PatchedMediaKeysApple key error");
   						e.errorCode = c.i.error;
   						if (null != c.h) c.h.reject(e), c.h = null;
   						else if (null != c.g) c.g.reject(e), c.g = null;
   						else switch (c.i.error.code) {
   							case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:
   							case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:
   								qA(c, "output-not-allowed");
   								break;
   							default:
   								qA(c, "internal-error")
   						}
   					});
   				qA(this, "status-pending")
   			} catch (e) {
   				this.h.reject(e)
   			}
   			return this.h
   		};
   		r.load = function() {
   			return Promise.reject(Error("MediaKeySession.load not yet supported"))
   		};
   		r.update = function(a) {
   			this.g = new Sf;
   			try {
   				this.i.update(Ab(a))
   			} catch (b) {
   				this.g.reject(b)
   			}
   			return this.g
   		};
   		r.close = function() {
   			try {
   				this.i.close(), this.closed.resolve(), this.j.nb()
   			} catch (a) {
   				this.closed.reject(a)
   			}
   			return this.closed
   		};
   		r.remove = function() {
   			return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))
   		};

   		function qA(a, b) {
   			var c = a.keyStatuses;
   			c.size = void 0 == b ? 0 : 1;
   			c.g = b;
   			b = new U("keystatuseschange");
   			a.dispatchEvent(b)
   		}

   		function pA() {
   			this.size = 0;
   			this.g = void 0
   		}
   		r = pA.prototype;
   		r.cc = function() {
   			return this.g
   		};
   		r.forEach = function(a) {
   			this.g && a(this.g, hi.value())
   		};
   		r.get = function(a) {
   			if (this.has(a)) return this.g
   		};
   		r.has = function(a) {
   			var b = hi.value();
   			return this.g && xb(a, b) ? !0 : !1
   		};
   		r.entries = function() {};
   		r.keys = function() {};
   		r.values = function() {};

   		function rA() {}

   		function sA() {
   			window.MediaKeys && (!MediaKeys.prototype.setServerCertificate || Vc() || Tc("Tizen 4") || Tc("Tizen 5.0") || Yc()) && (MediaKeys.prototype.setServerCertificate = tA)
   		}

   		function tA() {
   			return Promise.resolve(!1)
   		}
   		tz.PatchedMediaKeysCert = rA;
   		rA.install = sA;
   		uz(sA);

   		function uA() {}

   		function vA() {
   			!window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (navigator.requestMediaKeySystemAccess = wA, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = xA, window.MediaKeys = yA, window.MediaKeySystemAccess = zA, window.gowatchMediaKeysPolyfill = !0)
   		}

   		function wA() {
   			return Promise.reject(Error("The key system specified is not supported."))
   		}

   		function xA(a) {
   			return null == a ? Promise.resolve() : Promise.reject(Error("MediaKeys not supported."))
   		}
   		tz.PatchedMediaKeysNop = uA;
   		uA.install = vA;

   		function yA() {
   			throw new TypeError("Illegal constructor.");
   		}
   		yA.prototype.createSession = function() {};
   		yA.prototype.setServerCertificate = function() {};
   		yA.prototype.getStatusForPolicy = function() {
   			return Promise.resolve("usable")
   		};

   		function zA() {
   			this.keySystem = "";
   			throw new TypeError("Illegal constructor.");
   		}
   		zA.prototype.getConfiguration = function() {};
   		zA.prototype.createMediaKeys = function() {};
   		uz(vA, -10);

   		function AA() {}

   		function BA() {
   			if (!(!window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration)) {
   				if (HTMLMediaElement.prototype.webkitGenerateKeyRequest) CA = "webkit";
   				else if (!HTMLMediaElement.prototype.generateKeyRequest) return;
   				navigator.requestMediaKeySystemAccess = DA;
   				delete HTMLMediaElement.prototype.mediaKeys;
   				HTMLMediaElement.prototype.mediaKeys = null;
   				HTMLMediaElement.prototype.setMediaKeys = EA;
   				window.MediaKeys = FA;
   				window.MediaKeySystemAccess = GA;
   				window.gowatchMediaKeysPolyfill = !0
   			}
   		}

   		function HA(a) {
   			var b = CA;
   			return b ? b + a.charAt(0).toUpperCase() + a.slice(1) : a
   		}

   		function DA(a, b) {
   			try {
   				var c = new GA(a, b);
   				return Promise.resolve(c)
   			} catch (d) {
   				return Promise.reject(d)
   			}
   		}

   		function EA(a) {
   			var b = this.mediaKeys;
   			b && b != a && IA(b, null);
   			delete this.mediaKeys;
   			(this.mediaKeys = a) && IA(a, this);
   			return Promise.resolve()
   		}
   		tz.PatchedMediaKeysWebkit = AA;
   		AA.install = BA;

   		function GA(a, b) {
   			this.g = this.keySystem = a;
   			var c = !1;
   			"org.w3.clearkey" == a && (this.g = "webkit-org.w3.clearkey", c = !1);
   			var d = !1;
   			var e = document.getElementsByTagName("video");
   			e = e.length ? e[0] : document.createElement("video");
   			b = t(b);
   			for (var f = b.next(); !f.done; f = b.next()) {
   				f = f.value;
   				var g = {
   						audioCapabilities: [],
   						videoCapabilities: [],
   						persistentState: "optional",
   						distinctiveIdentifier: "optional",
   						initDataTypes: f.initDataTypes,
   						sessionTypes: ["temporary"],
   						label: f.label
   					},
   					h = !1;
   				if (f.audioCapabilities)
   					for (var k = t(f.audioCapabilities),
   							l = k.next(); !l.done; l = k.next()) l = l.value, l.contentType && (h = !0, e.canPlayType(l.contentType.split(";")[0], this.g) && (g.audioCapabilities.push(l), d = !0));
   				if (f.videoCapabilities)
   					for (k = t(f.videoCapabilities), l = k.next(); !l.done; l = k.next()) l = l.value, l.contentType && (h = !0, e.canPlayType(l.contentType, this.g) && (g.videoCapabilities.push(l), d = !0));
   				h || (d = e.canPlayType("video/mp4", this.g) || e.canPlayType("video/webm", this.g));
   				"required" == f.persistentState && (c ? (g.persistentState = "required", g.sessionTypes = ["persistent-license"]) :
   					d = !1);
   				if (d) {
   					this.h = g;
   					return
   				}
   			}
   			c = "Unsupported keySystem";
   			if ("org.w3.clearkey" == a || "com.widevine.alpha" == a) c = "None of the requested configurations were supported.";
   			a = Error(c);
   			a.name = "NotSupportedError";
   			a.code = DOMException.NOT_SUPPORTED_ERR;
   			throw a;
   		}
   		GA.prototype.createMediaKeys = function() {
   			var a = new FA(this.g);
   			return Promise.resolve(a)
   		};
   		GA.prototype.getConfiguration = function() {
   			return this.h
   		};

   		function FA(a) {
   			this.l = a;
   			this.h = null;
   			this.g = new hb;
   			this.i = [];
   			this.j = new Map
   		}

   		function IA(a, b) {
   			a.h = b;
   			a.g.nb();
   			var c = CA;
   			b && (a.g.D(b, c + "needkey", function(d) {
   				var e = new CustomEvent("encrypted");
   				e.initDataType = "cenc";
   				e.initData = Bb(d.initData);
   				a.h.dispatchEvent(e)
   			}), a.g.D(b, c + "keymessage", function(d) {
   				var e = JA(a, d.sessionId);
   				e && (d = (new Map).set("messageType", void 0 == e.keyStatuses.cc() ? "licenserequest" : "licenserenewal").set("message", d.message), d = new U("message", d), e.h && (e.h.resolve(), e.h = null), e.dispatchEvent(d))
   			}), a.g.D(b, c + "keyadded", function(d) {
   				if (d = JA(a, d.sessionId)) KA(d, "usable"),
   					d.g && d.g.resolve(), d.g = null
   			}), a.g.D(b, c + "keyerror", function(d) {
   				var e = JA(a, d.sessionId);
   				if (e) {
   					var f = Error("EME v0.1b key error"),
   						g = d.errorCode;
   					g.systemCode = d.systemCode;
   					f.errorCode = g;
   					!d.sessionId && e.h ? (45 == d.systemCode && (f.message = "Unsupported session type."), e.h.reject(f), e.h = null) : d.sessionId && e.g ? (e.g.reject(f), e.g = null) : (f = d.systemCode, d.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? KA(e, "output-restricted") : 1 == f ? KA(e, "expired") : KA(e, "internal-error"))
   				}
   			}))
   		}
   		FA.prototype.createSession = function(a) {
   			a = a || "temporary";
   			if ("temporary" != a && "persistent-license" != a) throw new TypeError("Session type " + a + " is unsupported on this platform.");
   			var b = this.h || document.createElement("video");
   			b.src || (b.src = "about:blank");
   			a = new LA(b, this.l, a);
   			this.i.push(a);
   			return a
   		};
   		FA.prototype.setServerCertificate = function() {
   			return Promise.resolve(!1)
   		};
   		FA.prototype.getStatusForPolicy = function() {
   			return Promise.resolve("usable")
   		};

   		function JA(a, b) {
   			var c = a.j.get(b);
   			return c ? c : (c = a.i.shift()) ? (c.sessionId = b, a.j.set(b, c), c) : null
   		}

   		function LA(a, b, c) {
   			bg.call(this);
   			this.j = a;
   			this.m = !1;
   			this.g = this.h = null;
   			this.i = b;
   			this.l = c;
   			this.sessionId = "";
   			this.expiration = NaN;
   			this.closed = new Sf;
   			this.keyStatuses = new MA
   		}
   		oa(LA, bg);

   		function NA(a, b, c) {
   			if (a.m) return Promise.reject(Error("The session is already initialized."));
   			a.m = !0;
   			try {
   				if ("persistent-license" == a.l)
   					if (c) var d = Ab(qd("LOAD_SESSION|" + c));
   					else {
   						var e = qd("PERSISTENT|");
   						d = Bd(e, b)
   					}
   				else d = Ab(b)
   			} catch (g) {
   				return Promise.reject(g)
   			}
   			a.h = new Sf;
   			var f = HA("generateKeyRequest");
   			try {
   				a.j[f](a.i, d)
   			} catch (g) {
   				if ("InvalidStateError" != g.name) return a.h = null, Promise.reject(g);
   				(new Lc(function() {
   					try {
   						a.j[f](a.i, d)
   					} catch (h) {
   						a.h.reject(h), a.h = null
   					}
   				})).W(.01)
   			}
   			return a.h
   		}

   		function OA(a, b, c) {
   			if (a.g) a.g.then(function() {
   				return OA(a, b, c)
   			}).catch(function() {
   				return OA(a, b, c)
   			});
   			else {
   				a.g = b;
   				if ("webkit-org.w3.clearkey" == a.i) {
   					var d = kd(c);
   					var e = JSON.parse(d);
   					"oct" != e.keys[0].kty && (a.g.reject(Error("Response is not a valid JSON Web Key Set.")), a.g = null);
   					d = yd(e.keys[0].k);
   					e = yd(e.keys[0].kid)
   				} else d = Ab(c), e = null;
   				var f = HA("addKey");
   				try {
   					a.j[f](a.i, d, e, a.sessionId)
   				} catch (g) {
   					a.g.reject(g), a.g = null
   				}
   			}
   		}

   		function KA(a, b) {
   			var c = a.keyStatuses;
   			c.size = void 0 == b ? 0 : 1;
   			c.g = b;
   			b = new U("keystatuseschange");
   			a.dispatchEvent(b)
   		}
   		r = LA.prototype;
   		r.generateRequest = function(a, b) {
   			return NA(this, b, null)
   		};
   		r.load = function(a) {
   			return "persistent-license" == this.l ? NA(this, null, a) : Promise.reject(Error("Not a persistent session."))
   		};
   		r.update = function(a) {
   			var b = new Sf;
   			OA(this, b, a);
   			return b
   		};
   		r.close = function() {
   			if ("persistent-license" != this.l) {
   				if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
   				var a = HA("cancelKeyRequest");
   				try {
   					this.j[a](this.i, this.sessionId)
   				} catch (b) {}
   			}
   			this.closed.resolve();
   			return this.closed
   		};
   		r.remove = function() {
   			return "persistent-license" != this.l ? Promise.reject(Error("Not a persistent session.")) : this.close()
   		};

   		function MA() {
   			this.size = 0;
   			this.g = void 0
   		}
   		r = MA.prototype;
   		r.cc = function() {
   			return this.g
   		};
   		r.forEach = function(a) {
   			this.g && a(this.g, hi.value())
   		};
   		r.get = function(a) {
   			if (this.has(a)) return this.g
   		};
   		r.has = function(a) {
   			var b = hi.value();
   			return this.g && xb(a, b) ? !0 : !1
   		};
   		r.entries = function() {};
   		r.keys = function() {};
   		r.values = function() {};
   		var CA = "";
   		uz(BA);

   		function PA() {}

   		function QA() {
   			if (window.HTMLVideoElement) {
   				var a = HTMLVideoElement.prototype;
   				a.requestPictureInPicture && document.exitPictureInPicture || !a.webkitSupportsPresentationMode || (document.pictureInPictureEnabled = !0, document.pictureInPictureElement = null, a.requestPictureInPicture = RA, Object.defineProperty(a, "disablePictureInPicture", {
   					get: SA,
   					set: TA,
   					enumerable: !0,
   					configurable: !0
   				}), document.exitPictureInPicture = UA, document.addEventListener("webkitpresentationmodechanged", VA, !0))
   			}
   		}

   		function VA(a) {
   			a = a.target;
   			if ("picture-in-picture" == a.webkitPresentationMode) {
   				document.pictureInPictureElement = a;
   				var b = new Event("enterpictureinpicture");
   				a.dispatchEvent(b)
   			} else document.pictureInPictureElement == a && (document.pictureInPictureElement = null), b = new Event("leavepictureinpicture"), a.dispatchEvent(b)
   		}

   		function RA() {
   			return this.webkitSupportsPresentationMode("picture-in-picture") ? (this.webkitSetPresentationMode("picture-in-picture"), document.pictureInPictureElement = this, Promise.resolve()) : Promise.reject(Error("PiP not allowed by video element"))
   		}

   		function UA() {
   			var a = document.pictureInPictureElement;
   			return a ? (a.webkitSetPresentationMode("inline"), document.pictureInPictureElement = null, Promise.resolve()) : Promise.reject(Error("No picture in picture element found"))
   		}

   		function SA() {
   			return this.hasAttribute("disablePictureInPicture") ? !0 : !this.webkitSupportsPresentationMode("picture-in-picture")
   		}

   		function TA(a) {
   			a ? this.setAttribute("disablePictureInPicture", "") : this.removeAttribute("disablePictureInPicture")
   		}
   		tz.PiPWebkit = PA;
   		PA.install = QA;
   		uz(QA);

   		function WA() {}

   		function XA() {
   			window.crypto && ("randomUUID" in window.crypto || (window.crypto.randomUUID = YA))
   		}

   		function YA() {
   			var a = URL.createObjectURL(new Blob),
   				b = a.toString();
   			URL.revokeObjectURL(a);
   			return b.substr(b.lastIndexOf("/") + 1)
   		}
   		tz.RandomUUID = WA;
   		WA.install = XA;
   		uz(XA);

   		function ZA() {}

   		function $A() {
   			var a = Symbol.prototype;
   			"description" in a || Object.defineProperty(a, "description", {
   				get: aB
   			})
   		}

   		function aB() {
   			var a = /\((.*)\)/.exec(this.toString());
   			return a ? a[1] : void 0
   		}
   		tz.Symbol = ZA;
   		ZA.install = $A;
   		uz($A);

   		function bB() {}

   		function cB() {
   			if (window.HTMLMediaElement) {
   				var a = HTMLMediaElement.prototype.play;
   				HTMLMediaElement.prototype.play = function() {
   					var b = a.apply(this);
   					b && b.catch(function() {});
   					return b
   				}
   			}
   		}
   		tz.VideoPlayPromise = bB;
   		bB.install = cB;
   		uz(cB);

   		function dB() {}

   		function eB() {
   			if (window.HTMLVideoElement) {
   				var a = HTMLVideoElement.prototype;
   				!a.getVideoPlaybackQuality && ("webkitDroppedFrameCount" in a || Yc()) && (a.getVideoPlaybackQuality = fB)
   			}
   		}

   		function fB() {
   			return {
   				droppedVideoFrames: this.webkitDroppedFrameCount,
   				totalVideoFrames: this.webkitDecodedFrameCount,
   				corruptedVideoFrames: 0,
   				creationTime: NaN,
   				totalFrameDelay: 0
   			}
   		}
   		tz.VideoPlaybackQuality = dB;
   		dB.install = eB;
   		uz(eB);

   		function gB() {}

   		function hB() {
   			if (!window.VTTCue && window.TextTrackCue) {
   				var a = null,
   					b = TextTrackCue.length;
   				if (3 == b) a = iB;
   				else if (6 == b) a = jB;
   				else {
   					try {
   						var c = !!iB(1, 2, "")
   					} catch (d) {
   						c = !1
   					}
   					c && (a = iB)
   				}
   				a && (window.VTTCue = function(d, e, f) {
   					return a(d, e, f)
   				})
   			}
   		}

   		function iB(a, b, c) {
   			return new window.TextTrackCue(a, b, c)
   		}

   		function jB(a, b, c) {
   			return new window.TextTrackCue(a + "-" + b + "-" + c, a, b, c)
   		}
   		tz.VTTCue = gB;
   		gB.install = hB;
   		uz(hB);

   		function kB() {}
   		kB.prototype.parseInit = function() {};
   		kB.prototype.setSequenceMode = function() {};
   		kB.prototype.setManifestType = function() {};
   		kB.prototype.parseMedia = function(a, b) {
   			var c = null,
   				d = [];
   			a = kd(a).split(/\r?\n/);
   			a = t(a);
   			for (var e = a.next(); !e.done; e = a.next())
   				if ((e = e.value) && !/^\s+$/.test(e) && (e = lB.exec(e))) {
   					var f = mB.exec(e[1]);
   					f = 60 * parseInt(f[1], 10) + parseFloat(f[2].replace(",", "."));
   					e = new Nb(f, b.segmentEnd ? b.segmentEnd : f + 2, e[2]);
   					c && (c.endTime = f, d.push(c));
   					c = e
   				} c && d.push(c);
   			return d
   		};
   		S("gowatch.text.LrcTextParser", kB);
   		kB.prototype.parseMedia = kB.prototype.parseMedia;
   		kB.prototype.setManifestType = kB.prototype.setManifestType;
   		kB.prototype.setSequenceMode = kB.prototype.setSequenceMode;
   		kB.prototype.parseInit = kB.prototype.parseInit;
   		var lB = /^\[(\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\](.*)/,
   			mB = /^(\d+):(\d{1,2}(?:[.,]\d{1,3})?)$/;
   		ie["application/x-subtitle-lrc"] = function() {
   			return new kB
   		};

   		function nB() {}
   		nB.prototype.parseInit = function() {};
   		nB.prototype.setSequenceMode = function() {};
   		nB.prototype.setManifestType = function() {};
   		nB.prototype.parseMedia = function(a, b, c) {
   			var d = kd(a);
   			a = [];
   			if ("" == d) return a;
   			var e = Sg(d, "tt");
   			if (!e) throw new T(2, 2, 2005, "Failed to parse TTML.");
   			d = ah(e, "body")[0];
   			if (!d) return [];
   			var f = gh(e, oB, "frameRate"),
   				g = gh(e, oB, "subFrameRate"),
   				h = gh(e, oB, "frameRateMultiplier"),
   				k = gh(e, oB, "tickRate"),
   				l = gh(e, oB, "cellResolution"),
   				m = e.attributes["xml:space"] || "default",
   				n = gh(e, pB, "extent");
   			if ("default" != m && "preserve" != m) throw new T(2, 2, 2005, "Invalid xml:space value: " + m);
   			m = "default" == m;
   			f = new qB(f, g, h, k);
   			l = l ? (l = /^(\d+) (\d+)$/.exec(l)) ? {
   				Vb: parseInt(l[1], 10),
   				rows: parseInt(l[2], 10)
   			} : null : null;
   			g = (g = ah(e, "metadata")[0]) ? g.children : [];
   			h = ah(e, "style");
   			e = ah(e, "region");
   			k = [];
   			for (var p = t(e), q = p.next(); !q.done; q = p.next()) {
   				var u = q.value;
   				q = new Ob;
   				var v = u.attributes["xml:id"];
   				if (v) {
   					q.id = v;
   					var w = null;
   					n && (w = rB.exec(n) || sB.exec(n));
   					v = w ? Number(w[1]) : null;
   					w = w ? Number(w[2]) : null;
   					var A, z = tB(u, h, "extent");
   					if (z) {
   						var y = (A = rB.exec(z)) || sB.exec(z);
   						null != y && (q.width = Number(y[1]), q.height = Number(y[2]), A || (null != v && (q.width = 100 * q.width / v), null != w && (q.height =
   							100 * q.height / w)), q.widthUnits = A || null != v ? gc : 0, q.heightUnits = A || null != w ? gc : 0)
   					}
   					if (u = tB(u, h, "origin"))
   						if (y = (A = rB.exec(u)) || sB.exec(u), null != y) q.viewportAnchorX = Number(y[1]), q.viewportAnchorY = Number(y[2]), A ? z || (q.width = 100 - q.viewportAnchorX, q.widthUnits = gc, q.height = 100 - q.viewportAnchorY, q.heightUnits = gc) : (null != w && (q.viewportAnchorY = 100 * q.viewportAnchorY / w), null != v && (q.viewportAnchorX = 100 * q.viewportAnchorX / v)), q.viewportAnchorUnits = A || null != v ? gc : 0
   				} else q = null;
   				q && k.push(q)
   			}
   			if (Yg(d, "p").length) throw new T(2,
   				2, 2001, "<p> can only be inside <div> in TTML");
   			n = t(Yg(d, "div"));
   			for (p = n.next(); !p.done; p = n.next())
   				if (Yg(p.value, "span").length) throw new T(2, 2, 2001, "<span> can only be inside <p> in TTML");
   			if (b = uB(d, b, f, g, h, e, k, m, l, null, !1, c)) b.backgroundColor || (b.backgroundColor = "transparent"), a.push(b);
   			return a
   		};

   		function uB(a, b, c, d, e, f, g, h, k, l, m, n) {
   			var p = l;
   			if (Wg(a)) {
   				if (!m) return null;
   				var q = {
   					tagName: "span",
   					children: [Zg(a)],
   					attributes: {},
   					parent: null
   				}
   			} else q = a;
   			for (var u = null, v = t(vB), w = v.next(); !w.done && !(u = wB(q, "backgroundImage", d, "#", w.value)[0]); w = v.next());
   			v = null;
   			var A = gh(q, vB, "backgroundImage");
   			n && A && !A.startsWith("#") && (w = new rc(n), A = new rc(A), (w = w.resolve(A).toString()) && (v = w));
   			if ("p" == a.tagName || u || v) m = !0;
   			a = m;
   			w = "default" == (q.attributes["xml:space"] || (h ? "default" : "preserve"));
   			A = q.children.every(Wg);
   			h = [];
   			if (!A)
   				for (var z = t(q.children), y = z.next(); !y.done; y = z.next())(y = uB(y.value, b, c, d, e, f, g, w, k, q, m, n)) && h.push(y);
   			d = null != l;
   			n = Zg(q);
   			n = q.children.length && n && /\S/.test(n);
   			y = q.attributes.begin || q.attributes.end || q.attributes.dur;
   			if (!(y || n || "br" == q.tagName || 0 != h.length || d && !w)) return null;
   			z = xB(q, c);
   			n = z.start;
   			for (z = z.end; p && p.tagName && "tt" != p.tagName;) z = yB(p, c, n, z), n = z.start, z = z.end, p = p.parent;
   			null == n && (n = 0);
   			n += b.periodStart;
   			z = null == z ? Infinity : z + b.periodStart;
   			n = Math.max(n, b.segmentStart);
   			z = Math.min(z, b.segmentEnd);
   			if (!y && 0 < h.length)
   				for (n = Infinity, z = 0, b = t(h), c = b.next(); !c.done; c = b.next()) c = c.value, n = Math.min(n, c.startTime), z = Math.max(z, c.endTime);
   			if ("br" == q.tagName) return e = new Nb(n, z, ""), e.lineBreak = !0, e;
   			b = "";
   			A && (b = ud(Zg(q) || ""), w && (b = b.replace(/\s+/g, " ")));
   			b = new Nb(n, z, b);
   			b.nestedCues = h;
   			m || (b.isContainer = !0);
   			k && (b.cellResolution = k);
   			k = wB(q, "region", f, "")[0];
   			if (q.attributes.region && k && k.attributes["xml:id"]) {
   				var B = k.attributes["xml:id"];
   				b.region = g.filter(function(C) {
   					return C.id == B
   				})[0]
   			}
   			g = k;
   			l && d && !q.attributes.region &&
   				!q.attributes.style && (g = wB(l, "region", f, "")[0]);
   			zB(b, q, g, u, v, e, a, 0 == h.length);
   			return b
   		}

   		function zB(a, b, c, d, e, f, g, h) {
   			g = g || h;
   			"rtl" == AB(b, c, f, "direction", g) && (a.direction = "rtl");
   			h = AB(b, c, f, "writingMode", g);
   			"tb" == h || "tblr" == h ? a.writingMode = "vertical-lr" : "tbrl" == h ? a.writingMode = "vertical-rl" : "rltb" == h || "rl" == h ? a.direction = "rtl" : h && (a.direction = Rb);
   			(h = AB(b, c, f, "textAlign", !0)) ? (a.positionAlign = BB[h], a.lineAlign = CB[h], a.textAlign = $b[h.toUpperCase()]) : a.textAlign = Qb;
   			if (h = AB(b, c, f, "displayAlign", !0)) a.displayAlign = ac[h.toUpperCase()];
   			if (h = AB(b, c, f, "color", g)) a.color = h;
   			if (h = AB(b, c, f, "backgroundColor",
   					g)) a.backgroundColor = h;
   			if (h = AB(b, c, f, "border", g)) a.border = h;
   			if (h = AB(b, c, f, "fontFamily", g)) switch (h) {
   					case "monospaceSerif":
   						a.fontFamily = "Courier New,Liberation Mono,Courier,monospace";
   						break;
   					case "proportionalSansSerif":
   						a.fontFamily = "Arial,Helvetica,Liberation Sans,sans-serif";
   						break;
   					case "sansSerif":
   						a.fontFamily = "sans-serif";
   						break;
   					case "monospaceSansSerif":
   						a.fontFamily = "Consolas,monospace";
   						break;
   					case "proportionalSerif":
   						a.fontFamily = "serif";
   						break;
   					default:
   						a.fontFamily = h
   				}(h = AB(b, c, f, "fontWeight", g)) &&
   				"bold" == h && (a.fontWeight = 700);
   			h = AB(b, c, f, "wrapOption", g);
   			a.wrapLine = h && "noWrap" == h ? !1 : !0;
   			(h = AB(b, c, f, "lineHeight", g)) && h.match(DB) && (a.lineHeight = h);
   			(h = AB(b, c, f, "fontSize", g)) && (h.match(DB) || h.match(EB)) && (a.fontSize = h);
   			if (h = AB(b, c, f, "fontStyle", g)) a.fontStyle = fc[h.toUpperCase()];
   			d ? (e = d.attributes.imageType || d.attributes.imagetype, h = d.attributes.encoding, d = Zg(d).trim(), "PNG" == e && "Base64" == h && d && (a.backgroundImage = "data:image/png;base64," + d)) : e && (a.backgroundImage = e);
   			if (d = AB(b, c, f, "textOutline", g)) d =
   				d.split(" "), d[0].match(DB) ? a.textStrokeColor = a.color : (a.textStrokeColor = d[0], d.shift()), d[0] && d[0].match(DB) ? a.textStrokeWidth = d[0] : a.textStrokeColor = "";
   			(d = AB(b, c, f, "letterSpacing", g)) && d.match(DB) && (a.letterSpacing = d);
   			(d = AB(b, c, f, "linePadding", g)) && d.match(DB) && (a.linePadding = d);
   			if (d = AB(b, c, f, "opacity", g)) a.opacity = parseFloat(d);
   			(d = tB(c, f, "textDecoration")) && FB(a, d);
   			(d = GB(b, f, "textDecoration")) && FB(a, d);
   			if (d = AB(b, c, f, "textCombine", g)) a.textCombineUpright = d;
   			switch (AB(b, c, f, "ruby", g)) {
   				case "container":
   					a.rubyTag =
   						"ruby";
   					break;
   				case "text":
   					a.rubyTag = "rt"
   			}
   		}

   		function FB(a, b) {
   			b = t(b.split(" "));
   			for (var c = b.next(); !c.done; c = b.next()) switch (c.value) {
   				case "underline":
   					a.textDecoration.includes("underline") || a.textDecoration.push("underline");
   					break;
   				case "noUnderline":
   					a.textDecoration.includes("underline") && Kb(a.textDecoration, "underline");
   					break;
   				case "lineThrough":
   					a.textDecoration.includes("lineThrough") || a.textDecoration.push("lineThrough");
   					break;
   				case "noLineThrough":
   					a.textDecoration.includes("lineThrough") && Kb(a.textDecoration, "lineThrough");
   					break;
   				case "overline":
   					a.textDecoration.includes("overline") ||
   						a.textDecoration.push("overline");
   					break;
   				case "noOverline":
   					a.textDecoration.includes("overline") && Kb(a.textDecoration, "overline")
   			}
   		}

   		function AB(a, b, c, d, e) {
   			e = void 0 === e ? !0 : e;
   			return (a = GB(a, c, d)) ? a : e ? tB(b, c, d) : null
   		}

   		function tB(a, b, c) {
   			if (!a) return null;
   			var d = gh(a, pB, c);
   			return d ? d : HB(a, b, c)
   		}

   		function GB(a, b, c) {
   			var d = gh(a, pB, c);
   			return d ? d : HB(a, b, c)
   		}

   		function HB(a, b, c) {
   			a = wB(a, "style", b, "");
   			for (var d = null, e = 0; e < a.length; e++) {
   				var f = fh(a[e], "urn:ebu:tt:style", c);
   				f || (f = gh(a[e], pB, c));
   				f || (f = GB(a[e], b, c));
   				f && (d = f)
   			}
   			return d
   		}

   		function wB(a, b, c, d, e) {
   			var f = [];
   			if (!a || 1 > c.length) return f;
   			var g = a;
   			for (a = null; !a && !(a = e ? fh(g, e, b) : g.attributes[b]) && (g = g.parent, g););
   			if (b = a)
   				for (b = t(b.split(" ")), e = b.next(); !e.done; e = b.next())
   					for (e = e.value, a = t(c), g = a.next(); !g.done; g = a.next())
   						if (g = g.value, d + g.attributes["xml:id"] == e) {
   							f.push(g);
   							break
   						} return f
   		}

   		function yB(a, b, c, d) {
   			a = xB(a, b);
   			null == c ? c = a.start : null != a.start && (c += a.start);
   			null == d ? d = a.end : null != a.start && (d += a.start);
   			return {
   				start: c,
   				end: d
   			}
   		}

   		function xB(a, b) {
   			var c = IB(a.attributes.begin, b),
   				d = IB(a.attributes.end, b);
   			a = IB(a.attributes.dur, b);
   			null == d && null != a && (d = c + a);
   			return {
   				start: c,
   				end: d
   			}
   		}

   		function IB(a, b) {
   			var c = null;
   			if (JB.test(a)) {
   				a = JB.exec(a);
   				c = Number(a[1]);
   				var d = Number(a[2]),
   					e = Number(a[3]),
   					f = Number(a[4]);
   				f += (Number(a[5]) || 0) / b.h;
   				e += f / b.frameRate;
   				c = e + 60 * d + 3600 * c
   			} else if (KB.test(a)) c = LB(KB, a);
   			else if (MB.test(a)) c = LB(MB, a);
   			else if (NB.test(a)) a = NB.exec(a), c = Number(a[1]) / b.frameRate;
   			else if (OB.test(a)) a = OB.exec(a), c = Number(a[1]) / b.g;
   			else if (PB.test(a)) c = LB(PB, a);
   			else if (a) throw new T(2, 2, 2001, "Could not parse cue time range in TTML");
   			return c
   		}

   		function LB(a, b) {
   			a = a.exec(b);
   			return null == a || "" == a[0] ? null : (Number(a[4]) || 0) / 1E3 + (Number(a[3]) || 0) + 60 * (Number(a[2]) || 0) + 3600 * (Number(a[1]) || 0)
   		}
   		S("gowatch.text.TtmlTextParser", nB);
   		nB.prototype.parseMedia = nB.prototype.parseMedia;
   		nB.prototype.setManifestType = nB.prototype.setManifestType;
   		nB.prototype.setSequenceMode = nB.prototype.setSequenceMode;
   		nB.prototype.parseInit = nB.prototype.parseInit;

   		function qB(a, b, c, d) {
   			this.frameRate = Number(a) || 30;
   			this.h = Number(b) || 1;
   			this.g = Number(d);
   			0 == this.g && (this.g = a ? this.frameRate * this.h : 1);
   			c && (a = /^(\d+) (\d+)$/g.exec(c)) && (this.frameRate *= Number(a[1]) / Number(a[2]))
   		}
   		var rB = /^(\d{1,2}(?:\.\d+)?|100(?:\.0+)?)% (\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/,
   			EB = /^(\d{1,2}(?:\.\d+)?|100)%$/,
   			DB = /^(\d+px|\d+em|\d*\.?\d+c)$/,
   			sB = /^(\d+)px (\d+)px$/,
   			JB = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
   			KB = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,
   			MB = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,
   			NB = /^(\d*(?:\.\d*)?)f$/,
   			OB = /^(\d*(?:\.\d*)?)t$/,
   			PB = RegExp("^(?:(\\d*(?:\\.\\d*)?)h)?(?:(\\d*(?:\\.\\d*)?)m)?(?:(\\d*(?:\\.\\d*)?)s)?(?:(\\d*(?:\\.\\d*)?)ms)?$"),
   			CB = {
   				left: Ub,
   				center: "center",
   				right: "end",
   				start: Ub,
   				end: "end"
   			},
   			BB = {
   				left: "line-left",
   				center: "center",
   				right: "line-right"
   			},
   			oB = ["http://www.w3.org/ns/ttml#parameter", "http://www.w3.org/2006/10/ttaf1#parameter"],
   			pB = ["http://www.w3.org/ns/ttml#styling", "http://www.w3.org/2006/10/ttaf1#styling"],
   			vB = ["http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt", "http://www.smpte-ra.org/schemas/2052-1/2013/smpte-tt"];
   		ie["application/ttml+xml"] = function() {
   			return new nB
   		};

   		function QB() {
   			this.g = new nB
   		}
   		QB.prototype.parseInit = function(a) {
   			var b = !1;
   			(new Cg).box("moov", Hg).box("trak", Hg).box("mdia", Hg).box("minf", Hg).box("stbl", Hg).P("stsd", Lg).box("stpp", function(c) {
   				b = !0;
   				c.parser.stop()
   			}).parse(a);
   			if (!b) throw new T(2, 2, 2007);
   		};
   		QB.prototype.setSequenceMode = function() {};
   		QB.prototype.setManifestType = function() {};
   		QB.prototype.parseMedia = function(a, b, c) {
   			var d = this,
   				e = !1,
   				f = [];
   			(new Cg).box("mdat", Og(function(g) {
   				e = !0;
   				f = f.concat(d.g.parseMedia(g, b, c))
   			})).parse(a, !1);
   			if (!e) throw new T(2, 2, 2007);
   			return f
   		};
   		S("gowatch.text.Mp4TtmlParser", QB);
   		QB.prototype.parseMedia = QB.prototype.parseMedia;
   		QB.prototype.setManifestType = QB.prototype.setManifestType;
   		QB.prototype.setSequenceMode = QB.prototype.setSequenceMode;
   		QB.prototype.parseInit = QB.prototype.parseInit;
   		ie['application/mp4; codecs="stpp"'] = function() {
   			return new QB
   		};
   		ie['application/mp4; codecs="stpp.ttml"'] = function() {
   			return new QB
   		};
   		ie['application/mp4; codecs="stpp.ttml.im1t"'] = function() {
   			return new QB
   		};
   		ie['application/mp4; codecs="stpp.TTML.im1t"'] = function() {
   			return new QB
   		};

   		function RB() {
   			this.h = !1;
   			this.g = "UNKNOWN"
   		}
   		RB.prototype.parseInit = function() {};
   		RB.prototype.setSequenceMode = function(a) {
   			this.h = a
   		};
   		RB.prototype.setManifestType = function(a) {
   			this.g = a
   		};
   		RB.prototype.parseMedia = function(a, b) {
   			a = kd(a);
   			a = a.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");
   			var c = a.split(/\n{2,}/m);
   			if (!/^WEBVTT($|[ \t\n])/m.test(c[0])) throw new T(2, 2, 2E3);
   			a = b.vttOffset;
   			if (c[0].includes("X-TIMESTAMP-MAP") && "HLS" == this.g)
   				if (this.h) {
   					var d = c[0];
   					a = d.match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m);
   					d = d.match(/MPEGTS:(\d+)/m);
   					if (!a || !d) throw new T(2, 2, 2E3);
   					a = SB(new gv(a[1]));
   					if (null == a) throw new T(2, 2, 2E3);
   					a = b.periodStart + Number(d[1]) / 9E4 - a
   				} else a = b.segmentStart;
   			b = [];
   			d = t(c[0].split("\n"));
   			for (var e = d.next(); !e.done; e = d.next())
   				if (e = e.value, /^Region:/.test(e)) {
   					e = new gv(e);
   					var f = new Ob;
   					jv(e);
   					hv(e);
   					for (var g = jv(e); g;) {
   						var h = f,
   							k = g;
   						(g = /^id=(.*)$/.exec(k)) ? h.id = g[1]: (g = /^width=(\d{1,2}|100)%$/.exec(k)) ? h.width = Number(g[1]) : (g = /^lines=(\d+)$/.exec(k)) ? (h.height = Number(g[1]), h.heightUnits = 2) : (g = /^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(k)) ? (h.regionAnchorX = Number(g[1]), h.regionAnchorY = Number(g[2])) : (g = /^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(k)) ? (h.viewportAnchorX = Number(g[1]),
   							h.viewportAnchorY = Number(g[2])) : /^scroll=up$/.exec(k) && (h.scroll = "up");
   						hv(e);
   						g = jv(e)
   					}
   					b.push(f)
   				} d = new Map;
   			TB(d);
   			e = [];
   			c = t(c.slice(1));
   			for (f = c.next(); !f.done; f = c.next()) {
   				f = f.value.split("\n");
   				if ((1 != f.length || f[0]) && !/^NOTE($|[ \t])/.test(f[0]) && "STYLE" == f[0]) {
   					h = [];
   					g = -1;
   					for (k = 1; k < f.length; k++) f[k].includes("::cue") && (h.push([]), g = h.length - 1), -1 != g && (h[g].push(f[k]), f[k].includes("}") && (g = -1));
   					h = t(h);
   					for (g = h.next(); !g.done; g = h.next()) {
   						var l = g.value;
   						g = "global";
   						(k = l[0].match(/\((.*)\)/)) && (g = k.pop());
   						k =
   							l.slice(1, -1);
   						l[0].includes("}") && (l = /\{(.*?)\}/.exec(l[0])) && (k = l[1].split(";"));
   						(l = d.get(g)) || (l = new Nb(0, 0, ""));
   						for (var m = !1, n = 0; n < k.length; n++) {
   							var p = /^\s*([^:]+):\s*(.*)/.exec(k[n]);
   							if (p) {
   								var q = p[2].trim().replace(";", "");
   								switch (p[1].trim()) {
   									case "background-color":
   									case "background":
   										m = !0;
   										l.backgroundColor = q;
   										break;
   									case "color":
   										m = !0;
   										l.color = q;
   										break;
   									case "font-family":
   										m = !0;
   										l.fontFamily = q;
   										break;
   									case "font-size":
   										m = !0;
   										l.fontSize = q;
   										break;
   									case "font-weight":
   										if (700 <= parseInt(q, 10) || "bold" == q) m = !0, l.fontWeight =
   											700;
   										break;
   									case "font-style":
   										switch (q) {
   											case "normal":
   												m = !0;
   												l.fontStyle = Xb;
   												break;
   											case "italic":
   												m = !0;
   												l.fontStyle = "italic";
   												break;
   											case "oblique":
   												m = !0, l.fontStyle = "oblique"
   										}
   										break;
   									case "opacity":
   										m = !0;
   										l.opacity = parseFloat(q);
   										break;
   									case "text-combine-upright":
   										m = !0;
   										l.textCombineUpright = q;
   										break;
   									case "text-shadow":
   										m = !0;
   										l.textShadow = q;
   										break;
   									case "white-space":
   										m = !0, l.wrapLine = "noWrap" != q
   								}
   							}
   						}
   						m && d.set(g, l)
   					}
   				}
   				m = a;
   				if (1 == f.length && !f[0] || /^NOTE($|[ \t])/.test(f[0]) || "STYLE" == f[0] || "REGION" == f[0]) f = null;
   				else if (h = null,
   					f[0].includes("--\x3e") || (h = f[0], f.splice(0, 1)), g = new gv(f[0]), k = SB(g), n = iv(g, /[ \t]+--\x3e[ \t]+/g), l = SB(g), null == k || null == n || null == l) ab("Failed to parse VTT time code. Cue skipped:", h, f), f = null;
   				else {
   					k += m;
   					l += m;
   					f = f.slice(1).join("\n").trim();
   					d.has("global") ? (m = d.get("global").clone(), m.startTime = k, m.endTime = l, m.payload = "") : m = new Nb(k, l, "");
   					hv(g);
   					for (k = jv(g); k;) UB(m, k, b), hv(g), k = jv(g);
   					VB(f, m, d);
   					null != h && (m.id = h);
   					f = m
   				}
   				f && e.push(f)
   			}
   			return e
   		};

   		function TB(a) {
   			for (var b = t(Object.entries(cc)), c = b.next(); !c.done; c = b.next()) {
   				var d = t(c.value);
   				c = d.next().value;
   				d = d.next().value;
   				var e = new Nb(0, 0, "");
   				e.color = d;
   				a.set("." + c, e)
   			}
   			b = t(Object.entries(dc));
   			for (c = b.next(); !c.done; c = b.next()) d = t(c.value), c = d.next().value, d = d.next().value, e = new Nb(0, 0, ""), e.backgroundColor = d, a.set("." + c, e)
   		}

   		function VB(a, b, c) {
   			if (a.includes("<")) {
   				0 === c.size && TB(c);
   				var d = a;
   				a = [];
   				for (var e = -1, f = 0; f < d.length; f++) "<" === d[f] ? e = f + 1 : ">" === d[f] && 0 < e && (e = d.substr(e, f - e), e.match(WB) && a.push(e), e = -1);
   				a = t(a);
   				for (f = a.next(); !f.done; f = a.next()) f = f.value, d = d.replace("<" + f + ">", '<div time="' + f + '">'), d += "</div>";
   				a = d;
   				a: {
   					f = a;e = [];
   					var g = -1;a = "";d = !1;
   					for (var h = 0; h < f.length; h++)
   						if ("/" === f[h]) {
   							var k = f.indexOf(">", h);
   							if (-1 === k) {
   								a = f;
   								break a
   							}
   							if ((k = f.substring(h + 1, k)) && "v" == k) {
   								d = !0;
   								var l = null;
   								e.length && (l = e[e.length - 1]);
   								if (l) {
   									if (l ===
   										k) a += "/" + k + ">";
   									else {
   										if (!l.startsWith("v")) {
   											a += f[h];
   											continue
   										}
   										a += "/" + l + ">"
   									}
   									h += k.length + 1
   								} else a += f[h]
   							} else a += f[h]
   						} else "<" === f[h] ? (g = h + 1, "v" != f[g] && (g = -1)) : ">" === f[h] && 0 < g && (e.push(f.substr(g, h - g)), g = -1), a += f[h];f = t(e);
   					for (e = f.next(); !e.done; e = f.next()) e = e.value,
   					g = e.replace(" ", ".voice-"),
   					a = a.replace("<" + e + ">", "<" + g + ">"),
   					a = a.replace("</" + e + ">", "</" + g + ">"),
   					d || (a += "</" + g + ">")
   				}
   				a = XB(a);
   				try {
   					var m = Sg("<span>" + a + "</span>", "span")
   				} catch (n) {}
   				if (m)
   					if (m = m.children, 1 != m.length || m[0].tagName)
   						for (m = t(m), a = m.next(); !a.done; a =
   							m.next()) YB(a.value, b, c);
   					else b.payload = ud(a);
   				else b.payload = ud(a)
   			} else b.payload = ud(a)
   		}

   		function XB(a) {
   			var b = {
   					"< ": "",
   					" >": " &gt;"
   				},
   				c = /(< +>|<\s|\s>)/g,
   				d = RegExp(c.source);
   			return a && d.test(a) ? a.replace(c, function(e) {
   				return b[e] || ""
   			}) : a || ""
   		}

   		function ZB(a, b) {
   			return a && 0 < a.length ? a : b
   		}

   		function YB(a, b, c) {
   			var d = b.clone();
   			d.nestedCues = [];
   			d.payload = "";
   			d.rubyTag = "";
   			d.line = null;
   			d.region = new Ob;
   			d.position = null;
   			d.size = 0;
   			if (a.tagName)
   				for (var e = t(a.tagName.split(/(?=[ .])+/g)), f = e.next(); !f.done; f = e.next()) {
   					var g = f = f.value;
   					if (g.startsWith(".voice-")) {
   						var h = g.split("-").pop();
   						g = 'v[voice="' + h + '"]';
   						c.has(g) || (g = "v[voice=" + h + "]")
   					}
   					c.has(g) && (g = c.get(g)) && (d.backgroundColor = ZB(g.backgroundColor, d.backgroundColor), d.color = ZB(g.color, d.color), d.fontFamily = ZB(g.fontFamily, d.fontFamily), d.fontSize =
   						ZB(g.fontSize, d.fontSize), d.textShadow = ZB(g.textShadow, d.textShadow), d.fontWeight = g.fontWeight, d.fontStyle = g.fontStyle, d.opacity = g.opacity, d.rubyTag = g.rubyTag, d.textCombineUpright = g.textCombineUpright, d.wrapLine = g.wrapLine);
   					switch (f) {
   						case "br":
   							d = Yb(d.startTime, d.endTime);
   							b.nestedCues.push(d);
   							return;
   						case "b":
   							d.fontWeight = 700;
   							break;
   						case "i":
   							d.fontStyle = "italic";
   							break;
   						case "u":
   							d.textDecoration.push("underline");
   							break;
   						case "font":
   							if (f = a.attributes.color) d.color = f;
   							break;
   						case "div":
   							f = a.attributes.time;
   							if (!f) break;
   							if (f = SB(new gv(f))) d.startTime = f;
   							break;
   						case "ruby":
   						case "rp":
   						case "rt":
   							d.rubyTag = f
   					}
   				}
   			e = a.children;
   			if (Wg(a) || 1 == e.length && Wg(e[0]))
   				for (c = Zg(a).split("\n"), a = !0, c = t(c), e = c.next(); !e.done; e = c.next()) e = e.value, a || (a = Yb(d.startTime, d.endTime), b.nestedCues.push(a)), 0 < e.length && (a = d.clone(), a.payload = ud(e), b.nestedCues.push(a)), a = !1;
   			else
   				for (b.nestedCues.push(d), b = t(e), a = b.next(); !a.done; a = b.next()) YB(a.value, d, c)
   		}

   		function UB(a, b, c) {
   			var d;
   			if (d = /^align:(start|middle|center|end|left|right)$/.exec(b)) b = d[1], "middle" == b ? a.textAlign = Qb : a.textAlign = $b[b.toUpperCase()];
   			else if (d = /^vertical:(lr|rl)$/.exec(b)) a.writingMode = "lr" == d[1] ? "vertical-lr" : "vertical-rl";
   			else if (d = /^size:([\d.]+)%$/.exec(b)) a.size = Number(d[1]);
   			else if (d = /^position:([\d.]+)%(?:,(line-left|line-right|middle|center|start|end|auto))?$/.exec(b)) a.position = Number(d[1]), d[2] && (b = d[2], a.positionAlign = "line-left" == b || "start" == b ? "line-left" : "line-right" ==
   				b || "end" == b ? "line-right" : "center" == b || "middle" == b ? "center" : Pb);
   			else if (d = /^region:(.*)$/.exec(b)) {
   				if (b = $B(c, d[1])) a.region = b
   			} else if (c = /^line:([\d.]+)%(?:,(start|end|center))?$/.exec(b)) a.lineInterpretation = 1, a.line = Number(c[1]), c[2] && (a.lineAlign = bc[c[2].toUpperCase()]);
   			else if (c = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)) a.lineInterpretation = Tb, a.line = Number(c[1]), c[2] && (a.lineAlign = bc[c[2].toUpperCase()])
   		}

   		function $B(a, b) {
   			a = a.filter(function(c) {
   				return c.id == b
   			});
   			return a.length ? a[0] : null
   		}

   		function SB(a) {
   			a = iv(a, WB);
   			if (null == a) return null;
   			var b = Number(a[2]),
   				c = Number(a[3]);
   			return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
   		}
   		S("gowatch.text.VttTextParser", RB);
   		RB.prototype.parseMedia = RB.prototype.parseMedia;
   		RB.prototype.setManifestType = RB.prototype.setManifestType;
   		RB.prototype.setSequenceMode = RB.prototype.setSequenceMode;
   		RB.prototype.parseInit = RB.prototype.parseInit;
   		var WB = /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g;
   		ie["text/vtt"] = function() {
   			return new RB
   		};
   		ie['text/vtt; codecs="vtt"'] = function() {
   			return new RB
   		};
   		ie['text/vtt; codecs="wvtt"'] = function() {
   			return new RB
   		};

   		function aC() {
   			this.g = null
   		}
   		aC.prototype.parseInit = function(a) {
   			var b = this,
   				c = !1;
   			(new Cg).box("moov", Hg).box("trak", Hg).box("mdia", Hg).P("mdhd", function(d) {
   				d = Ti(d.reader, d.version);
   				b.g = d.timescale
   			}).box("minf", Hg).box("stbl", Hg).P("stsd", Lg).box("wvtt", function() {
   				c = !0
   			}).parse(a);
   			if (!this.g) throw new T(2, 2, 2008);
   			if (!c) throw new T(2, 2, 2008);
   		};
   		aC.prototype.setSequenceMode = function() {};
   		aC.prototype.setManifestType = function() {};
   		aC.prototype.parseMedia = function(a, b) {
   			if (!a.length) return [];
   			if (!this.g) throw new T(2, 2, 2008);
   			var c = 0,
   				d = [],
   				e, f = [],
   				g = !1,
   				h = !1,
   				k = !1,
   				l = null;
   			(new Cg).box("moof", Hg).box("traf", Hg).P("tfdt", function(y) {
   				g = !0;
   				c = Si(y.reader, y.version).baseMediaDecodeTime
   			}).P("tfhd", function(y) {
   				l = Ri(y.reader, y.flags).jg
   			}).P("trun", function(y) {
   				h = !0;
   				d = Ui(y.reader, y.version, y.flags).Ig
   			}).box("mdat", Og(function(y) {
   				k = !0;
   				e = y
   			})).parse(a, !1);
   			if (!k && !g && !h) throw new T(2, 2, 2008);
   			a = c;
   			for (var m = new zg(e, 0), n = t(d), p = n.next(); !p.done; p = n.next()) {
   				p =
   					p.value;
   				var q = p.Gf || l,
   					u = p.re ? c + p.re : a;
   				a = u + (q || 0);
   				var v = 0;
   				do {
   					var w = m.O();
   					v += w;
   					var A = m.O(),
   						z = null;
   					"vttc" == Gg(A) ? 8 < w && (z = m.vb(w - 8)) : m.skip(w - 8);
   					q && z && (w = bC(z, b.periodStart + u / this.g, b.periodStart + a / this.g), f.push(w))
   				} while (p.sampleSize && v < p.sampleSize)
   			}
   			return f.filter(re)
   		};

   		function bC(a, b, c) {
   			var d, e, f;
   			(new Cg).box("payl", Og(function(g) {
   				d = kd(g)
   			})).box("iden", Og(function(g) {
   				e = kd(g)
   			})).box("sttg", Og(function(g) {
   				f = kd(g)
   			})).parse(a);
   			return d ? cC(d, e, f, b, c) : null
   		}

   		function cC(a, b, c, d, e) {
   			d = new Nb(d, e, "");
   			VB(a, d, new Map);
   			b && (d.id = b);
   			if (c)
   				for (a = new gv(c), b = jv(a); b;) UB(d, b, []), hv(a), b = jv(a);
   			return d
   		}
   		S("gowatch.text.Mp4VttParser", aC);
   		aC.prototype.parseMedia = aC.prototype.parseMedia;
   		aC.prototype.setManifestType = aC.prototype.setManifestType;
   		aC.prototype.setSequenceMode = aC.prototype.setSequenceMode;
   		aC.prototype.parseInit = aC.prototype.parseInit;
   		ie['application/mp4; codecs="wvtt"'] = function() {
   			return new aC
   		};

   		function dC() {}
   		dC.prototype.parseInit = function() {};
   		dC.prototype.setSequenceMode = function() {};
   		dC.prototype.setManifestType = function() {};
   		dC.prototype.parseMedia = function(a) {
   			var b = kd(a).replace(/\r+/g, "");
   			b = b.trim();
   			a = [];
   			if ("" == b) return a;
   			b = t(b.split("\n\n"));
   			for (var c = b.next(); !c.done; c = b.next()) {
   				c = c.value.split("\n");
   				var d = new gv(c[0]),
   					e = eC(d),
   					f = iv(d, /,/g);
   				d = eC(d);
   				if (null == e || null == f || null == d) throw new T(2, 2, 2001, "Could not parse cue time range in SubViewer");
   				a.push(new Nb(e, d, c.slice(1).join("\n").trim()))
   			}
   			return a
   		};

   		function eC(a) {
   			a = iv(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);
   			if (null == a) return null;
   			var b = Number(a[2]),
   				c = Number(a[3]);
   			return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
   		}
   		S("gowatch.text.SbvTextParser", dC);
   		dC.prototype.parseMedia = dC.prototype.parseMedia;
   		dC.prototype.setManifestType = dC.prototype.setManifestType;
   		dC.prototype.setSequenceMode = dC.prototype.setSequenceMode;
   		dC.prototype.parseInit = dC.prototype.parseInit;
   		ie["text/x-subviewer"] = function() {
   			return new dC
   		};

   		function fC() {
   			this.g = new RB
   		}
   		fC.prototype.parseInit = function() {};
   		fC.prototype.setSequenceMode = function() {};
   		fC.prototype.setManifestType = function() {};
   		fC.prototype.parseMedia = function(a, b, c) {
   			a = kd(a);
   			a = gC(a);
   			a = Ab(qd(a));
   			return this.g.parseMedia(a, b, c)
   		};

   		function gC(a) {
   			var b = "WEBVTT\n\n";
   			if ("" == a) return b;
   			a = a.replace(/\r+/g, "");
   			a = a.trim();
   			a = t(a.split("\n\n"));
   			for (var c = a.next(); !c.done; c = a.next()) c = c.value.split(/\n/), c[0].match(/\d+/) && c.shift(), c[0] = c[0].replace(/,/g, "."), b += c.join("\n").replace(/{b}/g, "<b>").replace(/{\/b}/g, "</b>").replace(/{i}/g, "<i>").replace(/{\/i}/g, "</i>").replace(/{u}/g, "<u>").replace(/{\/u}/g, "</u>") + "\n\n";
   			return b
   		}
   		S("gowatch.text.SrtTextParser", fC);
   		fC.srt2webvtt = gC;
   		fC.prototype.parseMedia = fC.prototype.parseMedia;
   		fC.prototype.setManifestType = fC.prototype.setManifestType;
   		fC.prototype.setSequenceMode = fC.prototype.setSequenceMode;
   		fC.prototype.parseInit = fC.prototype.parseInit;
   		ie["text/srt"] = function() {
   			return new fC
   		};

   		function hC() {}
   		hC.prototype.parseInit = function() {};
   		hC.prototype.setSequenceMode = function() {};
   		hC.prototype.setManifestType = function() {};
   		hC.prototype.parseMedia = function(a) {
   			var b = "",
   				c = "";
   			a = kd(a).split(/\r?\n\s*\r?\n/);
   			a = t(a);
   			for (var d = a.next(); !d.done; d = a.next()) {
   				var e = iC.exec(d.value);
   				e && (d = e[1], e = e[2], "V4 Styles" == d || "V4+ Styles" == d ? b = e : "Events" == d && (c = e))
   			}
   			a = [];
   			d = null;
   			b = t(b.split(/\r?\n/));
   			for (var f = b.next(); !f.done; f = b.next())
   				if (e = f.value, !/^\s*;/.test(e) && (f = jC.exec(e)))
   					if (e = f[1].trim(), f = f[2].trim(), "Format" == e) d = f.split(kC);
   					else if ("Style" == e) {
   				e = f.split(kC);
   				f = {};
   				for (var g = 0; g < d.length && g < e.length; g++) f[d[g]] = e[g];
   				a.push(f)
   			}
   			d = [];
   			b = null;
   			e = {};
   			c = t(c.split(/\r?\n/));
   			for (f = c.next(); !f.done; e = {
   					Be: e.Be
   				}, f = c.next())
   				if (f = f.value, !/^\s*;/.test(f) && (g = jC.exec(f)))
   					if (f = g[1].trim(), g = g[2].trim(), "Format" == f) b = g.split(kC);
   					else if ("Dialogue" == f) {
   				g = g.split(kC);
   				f = {};
   				for (var h = 0; h < b.length && h < g.length; h++) f[b[h]] = g[h];
   				h = lC(f.Start);
   				var k = lC(f.End);
   				g = new Nb(h, k, g.slice(b.length - 1).join(",").replace(/\\N/g, "\n").replace(/\{[^}]+\}/g, ""));
   				e.Be = f.Style;
   				(f = a.find(function(l) {
   					return function(m) {
   						return m.Name == l.Be
   					}
   				}(e))) && mC(g, f);
   				d.push(g)
   			}
   			return d
   		};

   		function mC(a, b) {
   			var c = b.Fontname;
   			c && (a.fontFamily = c);
   			if (c = b.Fontsize) a.fontSize = c + "px";
   			if (c = b.PrimaryColour)
   				if (c = nC(c)) a.color = c;
   			if (c = b.BackColour)
   				if (c = nC(c)) a.backgroundColor = c;
   			b.Bold && (a.fontWeight = 700);
   			b.Italic && (a.fontStyle = "italic");
   			b.Underline && a.textDecoration.push("underline");
   			if (c = b.Spacing) a.letterSpacing = c + "px";
   			if (c = b.Alignment) switch (parseInt(c, 10)) {
   				case 1:
   					a.displayAlign = Vb;
   					a.textAlign = "start";
   					break;
   				case 2:
   					a.displayAlign = Vb;
   					a.textAlign = Qb;
   					break;
   				case 3:
   					a.displayAlign = Vb;
   					a.textAlign = "end";
   					break;
   				case 5:
   					a.displayAlign = "before";
   					a.textAlign = "start";
   					break;
   				case 6:
   					a.displayAlign = "before";
   					a.textAlign = Qb;
   					break;
   				case 7:
   					a.displayAlign = "before";
   					a.textAlign = "end";
   					break;
   				case 9:
   					a.displayAlign = "center";
   					a.textAlign = "start";
   					break;
   				case 10:
   					a.displayAlign = "center";
   					a.textAlign = Qb;
   					break;
   				case 11:
   					a.displayAlign = "center", a.textAlign = "end"
   			}
   			if (b = b.AlphaLevel) a.opacity = parseFloat(b)
   		}

   		function nC(a) {
   			a = parseInt(a.replace("&H", ""), 16);
   			return 0 <= a ? "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255 ^ 255) / 255 + ")" : null
   		}

   		function lC(a) {
   			a = oC.exec(a);
   			return 3600 * (a[1] ? parseInt(a[1].replace(":", ""), 10) : 0) + 60 * parseInt(a[2], 10) + parseFloat(a[3])
   		}
   		S("gowatch.text.SsaTextParser", hC);
   		hC.prototype.parseMedia = hC.prototype.parseMedia;
   		hC.prototype.setManifestType = hC.prototype.setManifestType;
   		hC.prototype.setSequenceMode = hC.prototype.setSequenceMode;
   		hC.prototype.parseInit = hC.prototype.parseInit;
   		var iC = /^\s*\[([^\]]+)\]\r?\n([\s\S]*)/,
   			jC = /^\s*([^:]+):\s*(.*)/,
   			kC = /\s*,\s*/,
   			oC = /^(\d+:)?(\d{1,2}):(\d{1,2}(?:[.]\d{1,3})?)?$/;
   		ie["text/x-ssa"] = function() {
   			return new hC
   		};

   		function pC(a, b) {
   			var c = a[b + 1] & 1 ? 7 : 9;
   			return b + c <= a.length && (a = ((a[b + 3] & 3) << 11 | a[b + 4] << 3 | (a[b + 5] & 224) >>> 5) - c, 0 < a) ? {
   				Yd: c,
   				X: a
   			} : null
   		}

   		function qC(a, b) {
   			var c = [96E3, 88200, 64E3, 48E3, 44100, 32E3, 24E3, 22050, 16E3, 12E3, 11025, 8E3, 7350],
   				d = (a[b + 2] & 60) >>> 2;
   			if (d > c.length - 1) return null;
   			var e = ((a[b + 2] & 192) >>> 6) + 1,
   				f = (a[b + 2] & 1) << 2;
   			f |= (a[b + 3] & 192) >>> 6;
   			return {
   				sampleRate: c[d],
   				channelCount: f,
   				Ga: "mp4a.40." + e
   			}
   		}

   		function rC(a, b) {
   			if (b + 1 < a.length && 255 === a[b] && 240 === (a[b + 1] & 246)) {
   				var c = a[b + 1] & 1 ? 7 : 9;
   				if (b + c >= a.length) return !1;
   				var d = (a[b + 3] & 3) << 11 | a[b + 4] << 3 | (a[b + 5] & 224) >>> 5;
   				if (d <= c) return !1;
   				b += d;
   				return b === a.length || b + 1 < a.length && 255 === a[b] && 240 === (a[b + 1] & 246)
   			}
   			return !1
   		}

   		function sC(a, b) {
   			switch (a) {
   				case "mp4a.40.2":
   					if (1 === b) return new Uint8Array([0, 200, 0, 128, 35, 128]);
   					if (2 === b) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
   					if (3 === b) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
   					if (4 === b) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
   					if (5 === b) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
   					if (6 === b) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144,
   						2, 0, 178, 0, 32, 8, 224
   					]);
   					break;
   				default:
   					if (1 === b) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
   					if (2 === b || 3 === b) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
   			}
   			return null
   		};

   		function tC(a) {
   			this.i = a;
   			this.h = 0;
   			this.g = new Map
   		}
   		r = tC.prototype;
   		r.destroy = function() {
   			this.g.clear()
   		};
   		r.isSupported = function(a) {
   			return "audio/aac" == a.toLowerCase().split(";")[0] ? mb(this.convertCodecs("audio", a)) : !1
   		};
   		r.convertCodecs = function(a, b) {
   			return "audio/aac" == b.toLowerCase().split(";")[0] ? 'audio/mp4; codecs="' + ($d(b) || "mp4a.40.2") + '"' : b
   		};
   		r.getOriginalMimeType = function() {
   			return this.i
   		};
   		r.transmux = function(a, b, c, d) {
   			for (var e = Ab(a), f = Qi(e), g = f.length; g < e.length && !rC(e, g); g++);
   			a = 1E3 * c.endTime;
   			f = Pi(f);
   			f.length && c && (f = f.find(function(m) {
   				return "com.apple.streaming.transportStreamTimestamp" === m.description
   			})) && (a = f.data);
   			f = qC(e, g);
   			if (!f) return Promise.reject(new T(2, 3, 3018, c ? c.L()[0] : null));
   			b.audioSamplingRate = f.sampleRate;
   			b.channelsCount = f.channelCount;
   			for (var h = []; g < e.length;) {
   				var k = pC(e, g);
   				if (!k) return Promise.reject(new T(2, 3, 3018, c ? c.L()[0] : null));
   				var l = k.Yd + k.X;
   				g + l <= e.length && h.push({
   					data: e.subarray(g +
   						k.Yd, g + l),
   					size: k.X,
   					duration: 1024,
   					Za: 0,
   					flags: {
   						ab: 0,
   						Oa: 0,
   						Na: 0,
   						La: 0,
   						Ma: 2,
   						bb: 0
   					}
   				});
   				g += l
   			}
   			c = f.sampleRate;
   			a = Math.floor(a * c / 1E3);
   			d = {
   				id: b.id,
   				type: "audio",
   				codecs: f.Ga,
   				encrypted: b.encrypted && 0 < b.drmInfos.length,
   				timescale: c,
   				duration: d,
   				Va: [],
   				ia: new Uint8Array([]),
   				sa: new Uint8Array([]),
   				xa: 0,
   				ya: 0,
   				data: {
   					ob: this.h,
   					baseMediaDecodeTime: a,
   					Sa: h
   				},
   				stream: b
   			};
   			c = new Jw([d]);
   			this.g.has(b.id) ? d = this.g.get(b.id) : (d = Pw(c), this.g.set(b.id, d));
   			b = fx(c);
   			this.h++;
   			b = Bd(d, b);
   			return Promise.resolve(b)
   		};
   		S("gowatch.transmuxer.AacTransmuxer", tC);
   		tC.prototype.transmux = tC.prototype.transmux;
   		tC.prototype.getOriginalMimeType = tC.prototype.getOriginalMimeType;
   		tC.prototype.convertCodecs = tC.prototype.convertCodecs;
   		tC.prototype.isSupported = tC.prototype.isSupported;
   		tC.prototype.destroy = tC.prototype.destroy;
   		jc("audio/aac", function() {
   			return new tC("audio/aac")
   		}, pc);

   		function uC(a, b) {
   			if (b + 8 > a.length || 11 !== a[b] || 119 !== a[b + 1]) return null;
   			var c = a[b + 4] >> 6;
   			if (3 <= c) return null;
   			var d = a[b + 4] & 63,
   				e = 2 * [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344,
   					1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920
   				][3 * d + c];
   			if (b + e > a.length) return null;
   			var f = a[b + 6] >> 5,
   				g = 0;
   			2 === f ? g += 2 : (f & 1 && 1 !== f && (g += 2), f & 4 && (g += 2));
   			g = (a[b + 6] << 8 | a[b + 7]) >> 12 - g & 1;
   			var h = a[b + 5] & 7;
   			a = new Uint8Array([c << 6 | a[b + 5] >> 3 << 1 | h >> 2, (h & 3) << 6 | f << 3 | g << 2 | d >> 4, d << 4 & 224]);
   			return {
   				sampleRate: [48E3, 44100, 32E3][c],
   				channelCount: [2, 1, 2, 3, 3, 4, 4, 5][f] + g,
   				ia: a,
   				X: e
   			}
   		}

   		function vC(a, b) {
   			if (11 === a[b] && 119 === a[b + 1]) {
   				var c = 0,
   					d = 5;
   				b += d;
   				for (var e, f; 0 < d;) {
   					f = a[b];
   					var g = Math.min(d, 8),
   						h = 8 - g;
   					e = 4278190080 >>> 24 + h << h;
   					e = (f & e) >> h;
   					c = c ? c << g | e : e;
   					b += 1;
   					d -= g
   				}
   				if (16 > c) return !0
   			}
   			return !1
   		};

   		function wC(a) {
   			this.i = a;
   			this.h = 0;
   			this.g = new Map
   		}
   		r = wC.prototype;
   		r.destroy = function() {
   			this.g.clear()
   		};
   		r.isSupported = function(a) {
   			return "audio/ac3" == a.toLowerCase().split(";")[0] ? mb(this.convertCodecs("audio", a)) : !1
   		};
   		r.convertCodecs = function(a, b) {
   			return "audio/ac3" == b.toLowerCase().split(";")[0] ? 'audio/mp4; codecs="ac-3"' : b
   		};
   		r.getOriginalMimeType = function() {
   			return this.i
   		};
   		r.transmux = function(a, b, c, d) {
   			a = Ab(a);
   			for (var e = Qi(a), f = e.length; f < a.length && !vC(a, f); f++);
   			var g = 1E3 * c.endTime;
   			e = Pi(e);
   			e.length && c && (e = e.find(function(m) {
   				return "com.apple.streaming.transportStreamTimestamp" === m.description
   			})) && (g = e.data);
   			e = 0;
   			for (var h = new Uint8Array([]), k = []; f < a.length;) {
   				var l = uC(a, f);
   				if (!l) return Promise.reject(new T(2, 3, 3018, c ? c.L()[0] : null));
   				b.audioSamplingRate = l.sampleRate;
   				b.channelsCount = l.channelCount;
   				e = l.sampleRate;
   				h = l.ia;
   				k.push({
   					data: a.subarray(f, f + l.X),
   					size: l.X,
   					duration: 1536,
   					Za: 0,
   					flags: {
   						ab: 0,
   						Oa: 0,
   						Na: 0,
   						La: 0,
   						Ma: 2,
   						bb: 0
   					}
   				});
   				f += l.X
   			}
   			c = Math.floor(g * e / 1E3);
   			d = {
   				id: b.id,
   				type: "audio",
   				codecs: "ac-3",
   				encrypted: b.encrypted && 0 < b.drmInfos.length,
   				timescale: e,
   				duration: d,
   				Va: [],
   				ia: h,
   				sa: new Uint8Array([]),
   				xa: 0,
   				ya: 0,
   				data: {
   					ob: this.h,
   					baseMediaDecodeTime: c,
   					Sa: k
   				},
   				stream: b
   			};
   			c = new Jw([d]);
   			this.g.has(b.id) ? d = this.g.get(b.id) : (d = Pw(c), this.g.set(b.id, d));
   			b = fx(c);
   			this.h++;
   			b = Bd(d, b);
   			return Promise.resolve(b)
   		};
   		S("gowatch.transmuxer.Ac3Transmuxer", wC);
   		wC.prototype.transmux = wC.prototype.transmux;
   		wC.prototype.getOriginalMimeType = wC.prototype.getOriginalMimeType;
   		wC.prototype.convertCodecs = wC.prototype.convertCodecs;
   		wC.prototype.isSupported = wC.prototype.isSupported;
   		wC.prototype.destroy = wC.prototype.destroy;
   		jc("audio/ac3", function() {
   			return new wC("audio/ac3")
   		}, pc);

   		function xC(a, b) {
   			if (b + 8 > a.length || 2935 !== (a[b] << 8 | a[b + 1] << 0)) return null;
   			var c = new Zi(a.subarray(b + 2));
   			aj(c, 2);
   			aj(c, 3);
   			var d = bj(c, 11) + 1 << 1,
   				e = bj(c, 2);
   			if (3 == e) {
   				e = bj(c, 2);
   				e = [24E3, 22060, 16E3][e];
   				var f = 3
   			} else e = [48E3, 44100, 32E3][e], f = bj(c, 2);
   			var g = bj(c, 3),
   				h = bj(c, 1);
   			c = bj(c, 5);
   			if (b + d > a.byteLength) return null;
   			a = Math.floor(d * e / (16 * [1, 2, 3, 6][f]));
   			a = new Uint8Array([(a & 8160) >> 5, (a & 31) << 3, e << 6 | c << 1 | 0, 0 | g << 1 | h << 0, 0]);
   			return {
   				sampleRate: e,
   				channelCount: [2, 1, 2, 3, 3, 4, 4, 5][g] + h,
   				ia: a,
   				X: d
   			}
   		};

   		function yC(a) {
   			this.i = a;
   			this.h = 0;
   			this.g = new Map
   		}
   		r = yC.prototype;
   		r.destroy = function() {
   			this.g.clear()
   		};
   		r.isSupported = function(a) {
   			return "audio/ec3" == a.toLowerCase().split(";")[0] ? mb(this.convertCodecs("audio", a)) : !1
   		};
   		r.convertCodecs = function(a, b) {
   			return "audio/ec3" == b.toLowerCase().split(";")[0] ? 'audio/mp4; codecs="ec-3"' : b
   		};
   		r.getOriginalMimeType = function() {
   			return this.i
   		};
   		r.transmux = function(a, b, c, d) {
   			a = Ab(a);
   			for (var e = Qi(a), f = e.length; f < a.length && 2935 !== (a[f] << 8 | a[f + 1] << 0); f++);
   			var g = 1E3 * c.endTime;
   			e = Pi(e);
   			e.length && c && (e = e.find(function(m) {
   				return "com.apple.streaming.transportStreamTimestamp" === m.description
   			})) && (g = e.data);
   			e = 0;
   			for (var h = new Uint8Array([]), k = []; f < a.length;) {
   				var l = xC(a, f);
   				if (!l) return Promise.reject(new T(2, 3, 3018, c ? c.L()[0] : null));
   				b.audioSamplingRate = l.sampleRate;
   				b.channelsCount = l.channelCount;
   				e = l.sampleRate;
   				h = l.ia;
   				k.push({
   					data: a.subarray(f, f + l.X),
   					size: l.X,
   					duration: 1536,
   					Za: 0,
   					flags: {
   						ab: 0,
   						Oa: 0,
   						Na: 0,
   						La: 0,
   						Ma: 2,
   						bb: 0
   					}
   				});
   				f += l.X
   			}
   			c = Math.floor(g * e / 1E3);
   			d = {
   				id: b.id,
   				type: "audio",
   				codecs: "ec-3",
   				encrypted: b.encrypted && 0 < b.drmInfos.length,
   				timescale: e,
   				duration: d,
   				Va: [],
   				ia: h,
   				sa: new Uint8Array([]),
   				xa: 0,
   				ya: 0,
   				data: {
   					ob: this.h,
   					baseMediaDecodeTime: c,
   					Sa: k
   				},
   				stream: b
   			};
   			c = new Jw([d]);
   			this.g.has(b.id) ? d = this.g.get(b.id) : (d = Pw(c), this.g.set(b.id, d));
   			b = fx(c);
   			this.h++;
   			b = Bd(d, b);
   			return Promise.resolve(b)
   		};
   		S("gowatch.transmuxer.Ec3Transmuxer", yC);
   		yC.prototype.transmux = yC.prototype.transmux;
   		yC.prototype.getOriginalMimeType = yC.prototype.getOriginalMimeType;
   		yC.prototype.convertCodecs = yC.prototype.convertCodecs;
   		yC.prototype.isSupported = yC.prototype.isSupported;
   		yC.prototype.destroy = yC.prototype.destroy;
   		jc("audio/ec3", function() {
   			return new yC("audio/ec3")
   		}, pc);

   		function zC(a) {
   			if (!a.length) return null;
   			var b = a.find(function(v) {
   				return 7 == v.type
   			});
   			a = a.find(function(v) {
   				return 8 == v.type
   			});
   			if (!b || !a) return null;
   			var c = new Zi(b.data),
   				d = fj(c);
   			fj(c);
   			fj(c);
   			dj(c);
   			if (AC.includes(d) && (d = V(c), 3 === d && aj(c, 1), dj(c), dj(c), aj(c, 1), W(c))) {
   				d = 3 !== d ? 8 : 12;
   				for (var e = 0; e < d; e++) W(c) && (6 > e ? nj(c, 16) : nj(c, 64))
   			}
   			dj(c);
   			d = V(c);
   			if (0 === d) V(c);
   			else if (1 === d)
   				for (aj(c, 1), dj(c), dj(c), d = V(c), e = 0; e < d; e++) dj(c);
   			dj(c);
   			aj(c, 1);
   			var f = V(c),
   				g = V(c),
   				h = bj(c, 1);
   			0 === h && aj(c, 1);
   			aj(c, 1);
   			var k = 0,
   				l = 0,
   				m = 0,
   				n = 0;
   			W(c) &&
   				(k = V(c), l = V(c), m = V(c), n = V(c));
   			e = d = 1;
   			if (W(c) && W(c)) {
   				var p = fj(c),
   					q = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2],
   					u = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
   				0 < p && 16 >= p ? (d = q[p - 1], e = u[p - 1]) : 255 === p && (d = bj(c, 16), e = bj(c, 16))
   			}
   			c = (2 - h) * (g + 1) * 16 - 2 * m - 2 * n;
   			f = 16 * (f + 1) - 2 * k - 2 * l;
   			k = [];
   			b = b.fullData;
   			k.push(b.byteLength >>> 8 & 255);
   			k.push(b.byteLength & 255);
   			k = k.concat.apply(k, x(b));
   			b = [];
   			a = a.fullData;
   			b.push(a.byteLength >>> 8 & 255);
   			b.push(a.byteLength & 255);
   			b = b.concat.apply(b, x(a));
   			a = new Uint8Array([1, k[3], k[4], k[5], 255,
   				225
   			].concat(k, [1], b));
   			return {
   				height: c,
   				width: f,
   				sa: a,
   				xa: d,
   				ya: e
   			}
   		}

   		function BC(a) {
   			var b = !1,
   				c = [],
   				d = a.find(function(k) {
   					return 7 == k.type
   				}),
   				e = !1;
   			a = t(a);
   			for (var f = a.next(); !f.done; f = a.next()) {
   				f = f.value;
   				var g = !1;
   				switch (f.type) {
   					case 1:
   						g = e = !0;
   						var h = f.data;
   						d && 4 < h.length && (h = oj(new Zi(h)), 2 === h || 4 === h || 7 === h || 9 === h) && (b = !0);
   						break;
   					case 5:
   						b = g = e = !0;
   						break;
   					case 6:
   						g = !0;
   						break;
   					case 7:
   						g = !0;
   						break;
   					case 8:
   						g = !0;
   						break;
   					case 9:
   						e = g = !0;
   						break;
   					case 12:
   						g = !0;
   						break;
   					default:
   						g = !1
   				}
   				e && g && (g = f.fullData.byteLength, h = new Uint8Array(4), h[0] = g >> 24 & 255, h[1] = g >> 16 & 255, h[2] = g >> 8 & 255, h[3] = g & 255, c.push(h), c.push(f.fullData))
   			}
   			return c.length ? {
   				data: Bd.apply(vd, x(c)),
   				rd: b
   			} : null
   		}
   		var AC = [100, 110, 122, 244, 44, 83, 86, 118, 128, 138, 139, 134];

   		function CC(a) {
   			if (!a.length) return null;
   			var b = a.find(function(g) {
   					return 32 == g.type
   				}),
   				c = a.find(function(g) {
   					return 33 == g.type
   				}),
   				d = a.find(function(g) {
   					return 34 == g.type
   				});
   			if (!b || !c || !d) return null;
   			var e = DC(b.fullData);
   			a = EC(c.fullData);
   			var f = FC(d.fullData);
   			b = GC(b.fullData, c.fullData, d.fullData, {
   				vf: e.vf,
   				Sf: e.Sf,
   				af: a.af,
   				bf: a.bf,
   				Ve: a.Ve,
   				$e: a.$e,
   				We: a.We,
   				Xe: a.Xe,
   				Ye: a.Ye,
   				Ze: a.Ze,
   				Pe: a.Pe,
   				Qe: a.Qe,
   				Re: a.Re,
   				Se: a.Se,
   				Te: a.Te,
   				Ue: a.Ue,
   				Me: a.Me,
   				he: a.he,
   				Ke: a.Ke,
   				Je: a.Je,
   				Ie: a.Ie,
   				yf: f.yf
   			});
   			return {
   				height: a.height,
   				width: a.width,
   				sa: b,
   				xa: a.Ei,
   				ya: a.Di
   			}
   		}

   		function DC(a) {
   			var b = new Zi(a, !0);
   			fj(b);
   			fj(b);
   			bj(b, 4);
   			bj(b, 2);
   			bj(b, 6);
   			a = bj(b, 3);
   			b = W(b);
   			return {
   				vf: a + 1,
   				Sf: b
   			}
   		}

   		function EC(a) {
   			a = new Zi(a, !0);
   			fj(a);
   			fj(a);
   			var b = 0,
   				c = 0,
   				d = 0,
   				e = 0;
   			bj(a, 4);
   			var f = bj(a, 3);
   			W(a);
   			for (var g = bj(a, 2), h = bj(a, 1), k = bj(a, 5), l = fj(a), m = fj(a), n = fj(a), p = fj(a), q = fj(a), u = fj(a), v = fj(a), w = fj(a), A = fj(a), z = fj(a), y = fj(a), B = [], C = [], D = 0; D < f; D++) B.push(W(a)), C.push(W(a));
   			if (0 < f)
   				for (D = f; 8 > D; D++) bj(a, 2);
   			for (D = 0; D < f; D++) B[D] && bj(a, 88), C[D] && fj(a);
   			V(a);
   			B = V(a);
   			3 == B && bj(a, 1);
   			C = V(a);
   			D = V(a);
   			W(a) && (b += V(a), c += V(a), d += V(a), e += V(a));
   			var J = V(a),
   				K = V(a),
   				H = V(a);
   			if (W(a))
   				for (var I = 0; I <= f; I++) V(a), V(a), V(a);
   			else V(a), V(a),
   				V(a);
   			V(a);
   			V(a);
   			V(a);
   			V(a);
   			V(a);
   			V(a);
   			if (W(a) && W(a))
   				for (I = 0; 4 > I; I++)
   					for (var G = 0; G < (3 === I ? 2 : 6); G++)
   						if (W(a)) {
   							var N = Math.min(64, 1 << 4 + (I << 1));
   							1 < I && ej(a);
   							for (var L = 0; L < N; L++) ej(a)
   						} else V(a);
   			W(a);
   			W(a);
   			W(a) && (fj(a), V(a), V(a), W(a));
   			I = V(a);
   			for (N = G = 0; N < I; N++)
   				if (L = !1, 0 !== N && (L = W(a)), L) {
   					N === I && V(a);
   					W(a);
   					V(a);
   					for (var M = L = 0; M <= G; M++) {
   						var P = W(a),
   							R = !1;
   						P || (R = W(a));
   						(P || R) && L++
   					}
   					G = L
   				} else {
   					M = V(a);
   					L = V(a);
   					G = M + L;
   					for (P = 0; P < M; P++) V(a), W(a);
   					for (M = 0; M < L; M++) V(a), W(a)
   				} if (W(a))
   				for (I = V(a), G = 0; G < I; G++) {
   					for (N = 0; N < H + 4; N++) bj(a, 1);
   					bj(a,
   						1)
   				}
   			I = H = 1;
   			G = 0;
   			W(a);
   			W(a);
   			if (W(a)) {
   				W(a) && (N = fj(a), L = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2], M = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1], 0 < N && 16 >= N ? (H = L[N - 1], I = M[N - 1]) : 255 === N && (H = bj(a, 16), I = bj(a, 16)));
   				W(a) && W(a);
   				W(a) && (bj(a, 3), W(a), W(a) && (fj(a), fj(a), fj(a)));
   				W(a) && (V(a), V(a));
   				W(a);
   				W(a);
   				W(a);
   				if (N = W(a)) V(a), V(a), V(a), V(a);
   				if (W(a) && (bj(a, 32), bj(a, 32), W(a) && V(a), W(a))) {
   					M = !1;
   					N = W(a);
   					L = W(a);
   					if (N || L) {
   						if (M = W(a)) fj(a), bj(a, 5), W(a), bj(a, 5);
   						bj(a, 4);
   						bj(a, 4);
   						M && bj(a, 4);
   						bj(a, 5);
   						bj(a, 5);
   						bj(a, 5)
   					}
   					for (P = 0; P <=
   						f; P++) {
   						var Q = !0;
   						R = 1;
   						W(a) || (Q = W(a));
   						var fa = !1;
   						Q ? V(a) : fa = W(a);
   						fa || (R = V(a) + 1);
   						if (N) {
   							for (Q = 0; Q < R; Q++) V(a), V(a), M && (V(a), V(a));
   							W(a)
   						}
   						if (L) {
   							for (Q = 0; Q < R; Q++) V(a), V(a), M && (V(a), V(a));
   							W(a)
   						}
   					}
   				}
   				W(a) && (W(a), W(a), W(a), G = V(a), V(a), V(a), V(a), V(a))
   			}
   			return {
   				Ve: y,
   				af: g,
   				bf: h,
   				$e: k,
   				We: l,
   				Xe: m,
   				Ye: n,
   				Ze: p,
   				Pe: q,
   				Qe: u,
   				Re: v,
   				Se: w,
   				Te: A,
   				Ue: z,
   				he: G,
   				Me: 0,
   				Ke: B,
   				Je: J,
   				Ie: K,
   				width: C - (b + c) * (1 === B || 2 === B ? 2 : 1),
   				height: D - (d + e) * (1 === B ? 2 : 1),
   				Ei: H,
   				Di: I
   			}
   		}

   		function FC(a) {
   			var b = new Zi(a, !0);
   			fj(b);
   			fj(b);
   			V(b);
   			V(b);
   			W(b);
   			W(b);
   			bj(b, 3);
   			W(b);
   			W(b);
   			V(b);
   			V(b);
   			ej(b);
   			W(b);
   			W(b);
   			W(b) && V(b);
   			ej(b);
   			ej(b);
   			W(b);
   			W(b);
   			W(b);
   			W(b);
   			a = W(b);
   			b = W(b);
   			var c = 1;
   			b && a ? c = 0 : b ? c = 3 : a && (c = 2);
   			return {
   				yf: c
   			}
   		}

   		function GC(a, b, c, d) {
   			var e = new Uint8Array(23 + (5 + a.byteLength) + (5 + b.byteLength) + (5 + c.byteLength));
   			e[0] = 1;
   			e[1] = (d.af & 3) << 6 | (d.bf ? 1 : 0) << 5 | d.$e & 31;
   			e[2] = d.We;
   			e[3] = d.Xe;
   			e[4] = d.Ye;
   			e[5] = d.Ze;
   			e[6] = d.Pe;
   			e[7] = d.Qe;
   			e[8] = d.Re;
   			e[9] = d.Se;
   			e[10] = d.Te;
   			e[11] = d.Ue;
   			e[12] = d.Ve;
   			e[13] = 240 | (d.he & 3840) >> 8;
   			e[14] = d.he & 255;
   			e[15] = 252 | d.yf & 3;
   			e[16] = 252 | d.Ke & 3;
   			e[17] = 248 | d.Je & 7;
   			e[18] = 248 | d.Ie & 7;
   			e[19] = 0;
   			e[20] = 0;
   			e[21] = (d.Me & 3) << 6 | (d.vf & 7) << 3 | (d.Sf ? 1 : 0) << 2 | 3;
   			e[22] = 3;
   			e[23] = 160;
   			e[24] = 0;
   			e[25] = 1;
   			e[26] = (a.byteLength & 65280) >> 8;
   			e[27] = (a.byteLength &
   				255) >> 0;
   			e.set(a, 28);
   			e[23 + (5 + a.byteLength)] = 161;
   			e[a.byteLength + 29] = 0;
   			e[a.byteLength + 30] = 1;
   			e[a.byteLength + 31] = (b.byteLength & 65280) >> 8;
   			e[a.byteLength + 32] = (b.byteLength & 255) >> 0;
   			e.set(b, a.byteLength + 33);
   			e[23 + (a.byteLength + 10 + b.byteLength)] = 162;
   			e[a.byteLength + 10 + b.byteLength + 24] = 0;
   			e[a.byteLength + 10 + b.byteLength + 25] = 1;
   			e[a.byteLength + 10 + b.byteLength + 26] = (c.byteLength & 65280) >> 8;
   			e[a.byteLength + 10 + b.byteLength + 27] = (c.byteLength & 255) >> 0;
   			e.set(c, a.byteLength + 10 + b.byteLength + 28);
   			return e
   		};

   		function HC(a, b) {
   			var c = a[b + 1] >> 3 & 3,
   				d = a[b + 1] >> 1 & 3,
   				e = a[b + 2] >> 4 & 15,
   				f = a[b + 2] >> 2 & 3;
   			if (1 !== c && 0 !== e && 15 !== e && 3 !== f) {
   				var g = a[b + 3] >> 6;
   				e = 1E3 * IC[14 * (3 === c ? 3 - d : 3 === d ? 3 : 4) + e - 1];
   				f = JC[3 * (3 === c ? 0 : 2 === c ? 1 : 2) + f];
   				c = KC[c][d];
   				var h = LC[d],
   					k = Math.floor(c * e / f + (a[b + 2] >> 1 & 1)) * h,
   					l = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
   				(l = l ? parseInt(l[1], 10) : 0) && 87 >= l && 2 === d && 224E3 <= e && 0 === g && (a[b + 3] |= 128);
   				return {
   					sampleRate: f,
   					channelCount: 3 === g ? 1 : 2,
   					X: k,
   					Ci: 8 * c * h
   				}
   			}
   			return null
   		}

   		function MC(a, b) {
   			return 255 === a[b] && 224 === (a[b + 1] & 224) && 0 !== (a[b + 1] & 6)
   		}

   		function NC(a, b) {
   			if (b + 1 < a.length && MC(a, b)) {
   				var c = HC(a, b),
   					d = 4;
   				c && c.X && (d = c.X);
   				b += d;
   				return b === a.length || b + 1 < a.length && MC(a, b)
   			}
   			return !1
   		}
   		var IC = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
   			JC = [44100, 48E3, 32E3, 22050, 24E3, 16E3, 11025, 12E3, 8E3],
   			KC = [
   				[0, 72, 144, 12],
   				[0, 0, 0, 0],
   				[0, 72, 144, 12],
   				[0, 144, 144, 12]
   			],
   			LC = [0, 1, 1, 4];

   		function OC(a) {
   			this.i = a;
   			this.h = 0;
   			this.g = new Map
   		}
   		r = OC.prototype;
   		r.destroy = function() {
   			this.g.clear()
   		};
   		r.isSupported = function(a) {
   			return "audio/mpeg" == a.toLowerCase().split(";")[0] ? mb(this.convertCodecs("audio", a)) : !1
   		};
   		r.convertCodecs = function(a, b) {
   			return "audio/mpeg" == b.toLowerCase().split(";")[0] ? 'audio/mp4; codecs="mp3"' : b
   		};
   		r.getOriginalMimeType = function() {
   			return this.i
   		};
   		r.transmux = function(a, b, c, d) {
   			for (var e = Ab(a), f = Qi(e).length; f < e.length && !NC(e, f); f++);
   			var g;
   			for (a = []; f < e.length;) {
   				var h = HC(e, f);
   				if (!h) return Promise.reject(new T(2, 3, 3018, c ? c.L()[0] : null));
   				g || (g = h);
   				f + h.X <= e.length && a.push({
   					data: e.subarray(f, f + h.X),
   					size: h.X,
   					duration: 1152,
   					Za: 0,
   					flags: {
   						ab: 0,
   						Oa: 0,
   						Na: 0,
   						La: 0,
   						Ma: 2,
   						bb: 0
   					}
   				});
   				f += h.X
   			}
   			if (!g) return Promise.reject(new T(2, 3, 3018, c ? c.L()[0] : null));
   			c = 9E4 * g.Ci / g.sampleRate * this.h;
   			d = {
   				id: b.id,
   				type: "audio",
   				codecs: "mp3",
   				encrypted: b.encrypted && 0 < b.drmInfos.length,
   				timescale: g.sampleRate,
   				duration: d,
   				Va: [],
   				ia: new Uint8Array([]),
   				sa: new Uint8Array([]),
   				xa: 0,
   				ya: 0,
   				data: {
   					ob: this.h,
   					baseMediaDecodeTime: c,
   					Sa: a
   				},
   				stream: b
   			};
   			g = new Jw([d]);
   			this.g.has(b.id) ? d = this.g.get(b.id) : (d = Pw(g), this.g.set(b.id, d));
   			b = fx(g);
   			this.h++;
   			b = Bd(d, b);
   			return Promise.resolve(b)
   		};
   		S("gowatch.transmuxer.Mp3Transmuxer", OC);
   		OC.prototype.transmux = OC.prototype.transmux;
   		OC.prototype.getOriginalMimeType = OC.prototype.getOriginalMimeType;
   		OC.prototype.convertCodecs = OC.prototype.convertCodecs;
   		OC.prototype.isSupported = OC.prototype.isSupported;
   		OC.prototype.destroy = OC.prototype.destroy;
   		jc("audio/mpeg", function() {
   			return new OC("audio/mpeg")
   		}, pc);

   		function PC(a) {
   			this.h = a;
   			this.g = null
   		}
   		r = PC.prototype;
   		r.destroy = function() {};
   		r.isSupported = function(a) {
   			if ("video/mp2t" != a.toLowerCase().split(";")[0]) return !1;
   			var b = $d(a).split(","),
   				c = Jd("audio", b);
   			b = Jd("video", b);
   			return !c || b || "mp3" != Wd(c) ? !1 : mb(this.convertCodecs("audio", a))
   		};
   		r.convertCodecs = function(a, b) {
   			return "video/mp2t" == b.toLowerCase().split(";")[0] ? "audio/mpeg" : b
   		};
   		r.getOriginalMimeType = function() {
   			return this.h
   		};
   		r.transmux = function(a, b, c, d, e) {
   			this.g ? this.g.clearData() : this.g = new pj;
   			a = Ab(a);
   			a = this.g.parse(a);
   			if ("mp3" != a.hd().audio || "audio" != e) return Promise.reject(new T(2, 3, 3018, c ? c.L()[0] : null));
   			c = new Uint8Array([]);
   			e = t(a.Lb());
   			for (a = e.next(); !a.done; a = e.next())
   				if (a = a.value.data)
   					for (b = 0; b < a.length;)(d = HC(a, b)) ? (b + d.X <= a.length && (c = Bd(c, a.subarray(b, b + d.X))), b += d.X) : b++;
   			return Promise.resolve(c)
   		};
   		S("gowatch.transmuxer.MpegTsTransmuxer", PC);
   		PC.prototype.transmux = PC.prototype.transmux;
   		PC.prototype.getOriginalMimeType = PC.prototype.getOriginalMimeType;
   		PC.prototype.convertCodecs = PC.prototype.convertCodecs;
   		PC.prototype.isSupported = PC.prototype.isSupported;
   		PC.prototype.destroy = PC.prototype.destroy;
   		jc("video/mp2t", function() {
   			return new PC("video/mp2t")
   		}, oc);

   		function QC(a) {
   			this.h = a;
   			(this.g = Ru.get("ISOBoxer")()) && RC(this)
   		}

   		function RC(a) {
   			function b() {
   				this._procFullBox();
   				this.flags & 1 && (this._procField("AlgorithmID", "uint", 24), this._procField("IV_size", "uint", 8), this._procFieldArray("KID", 16, "uint", 8));
   				this._procField("sample_count", "uint", 32);
   				this._procEntries("entry", this.sample_count, function(c) {
   					this._procEntryField(c, "InitializationVector", "data", 8);
   					this.flags & 2 && (this._procEntryField(c, "NumberOfEntries", "uint", 16), this._procSubEntries(c, "clearAndCryptedData", c.NumberOfEntries, function(d) {
   						this._procEntryField(d, "BytesOfClearData",
   							"uint", 16);
   						this._procEntryField(d, "BytesOfEncryptedData", "uint", 32)
   					}))
   				})
   			}
   			a.g.addBoxProcessor("saio", function() {
   				this._procFullBox();
   				this.flags & 1 && (this._procField("aux_info_type", "uint", 32), this._procField("aux_info_type_parameter", "uint", 32));
   				this._procField("entry_count", "uint", 32);
   				this._procFieldArray("offset", this.entry_count, "uint", 1 === this.version ? 64 : 32)
   			});
   			a.g.addBoxProcessor("saiz", function() {
   				this._procFullBox();
   				this.flags & 1 && (this._procField("aux_info_type", "uint", 32), this._procField("aux_info_type_parameter",
   					"uint", 32));
   				this._procField("default_sample_info_size", "uint", 8);
   				this._procField("sample_count", "uint", 32);
   				0 === this.default_sample_info_size && this._procFieldArray("sample_info_size", this.sample_count, "uint", 8)
   			});
   			a.g.addBoxProcessor("senc", b);
   			a.g.addBoxProcessor("uuid", function() {
   				for (var c = !0, d = 0; 16 > d; d++) this.usertype[d] !== SC[d] && (c = !1);
   				c && (this._parsing && (this.type = "sepiff"), b.call(this))
   			})
   		}
   		r = QC.prototype;
   		r.destroy = function() {};
   		r.isSupported = function(a, b) {
   			var c = a.startsWith("mss/");
   			if (!this.g || !c) return !1;
   			if (b) return mb(this.convertCodecs(b, a));
   			b = this.convertCodecs("audio", a);
   			a = this.convertCodecs("video", a);
   			return mb(b) || mb(a)
   		};
   		r.convertCodecs = function(a, b) {
   			return b.replace("mss/", "")
   		};
   		r.getOriginalMimeType = function() {
   			return this.h
   		};
   		r.transmux = function(a, b, c) {
   			if (!c) return Promise.resolve(Ab(a));
   			if (!b.mssPrivateData) return Promise.reject(new T(2, 3, 3020, c ? c.L()[0] : null));
   			try {
   				var d, e = this.g.parseBuffer(a),
   					f = e.fetch("tfhd");
   				f.track_ID = b.id + 1;
   				var g = e.fetch("tfdt"),
   					h = e.fetch("traf");
   				null === g && (g = this.g.createFullBox("tfdt", h, f), g.version = 1, g.flags = 0, g.baseMediaDecodeTime = Math.floor(c.startTime * b.mssPrivateData.timescale));
   				var k = e.fetch("trun"),
   					l = e.fetch("tfxd");
   				l && l._parent.boxes.splice(l._parent.boxes.indexOf(l), 1);
   				var m = e.fetch("tfrf");
   				m && m._parent.boxes.splice(m._parent.boxes.indexOf(m), 1);
   				var n = e.fetch("sepiff");
   				if (null !== n) {
   					n.type = "senc";
   					n.usertype = void 0;
   					var p = e.fetch("saio");
   					if (null === p) {
   						p = this.g.createFullBox("saio", h);
   						p.version = 0;
   						p.flags = 0;
   						p.entry_count = 1;
   						p.offset = [0];
   						var q = this.g.createFullBox("saiz", h);
   						q.version = 0;
   						q.flags = 0;
   						q.sample_count = n.sample_count;
   						q.default_sample_info_size = 0;
   						q.sample_info_size = [];
   						if (n.flags & 2)
   							for (d = 0; d < n.sample_count; d += 1) q.sample_info_size[d] = 10 + 6 * n.entry[d].NumberOfEntries;
   						else q.default_sample_info_size =
   							8
   					}
   				}
   				f.flags &= 16777214;
   				f.flags |= 131072;
   				k.flags |= 1;
   				var u = e.fetch("moof");
   				k.data_offset = u.getLength() + 8;
   				var v = e.fetch("saio");
   				null !== v && (v.offset[0] = TC(u, "traf") + TC(h, "senc") + 16);
   				var w = Ab(e.write());
   				return Promise.resolve(w)
   			} catch (A) {
   				return A instanceof T ? Promise.reject(A) : Promise.reject(new T(2, 3, 3022, c ? c.L()[0] : null))
   			}
   		};

   		function TC(a, b) {
   			for (var c = 8, d = 0; d < a.boxes.length && a.boxes[d].type !== b; d++) c += a.boxes[d].size;
   			return c
   		}
   		S("gowatch.transmuxer.MssTransmuxer", QC);
   		QC.prototype.transmux = QC.prototype.transmux;
   		QC.prototype.getOriginalMimeType = QC.prototype.getOriginalMimeType;
   		QC.prototype.convertCodecs = QC.prototype.convertCodecs;
   		QC.prototype.isSupported = QC.prototype.isSupported;
   		QC.prototype.destroy = QC.prototype.destroy;
   		var SC = new Uint8Array([162, 57, 79, 82, 90, 155, 79, 20, 162, 68, 108, 66, 124, 100, 141, 244]);
   		jc("mss/audio/mp4", function() {
   			return new QC("mss/audio/mp4")
   		}, pc);
   		jc("mss/video/mp4", function() {
   			return new QC("mss/video/mp4")
   		}, pc);

   		function UC(a) {
   			this.l = a;
   			this.g = 0;
   			this.i = new Map;
   			this.h = this.j = null
   		}
   		r = UC.prototype;
   		r.destroy = function() {
   			this.i.clear();
   			this.h && this.h.destroy()
   		};
   		r.isSupported = function(a, b) {
   			if ("video/mp2t" != a.toLowerCase().split(";")[0]) return !1;
   			var c = a;
   			b && (c = this.convertCodecs(b, a));
   			var d = $d(c).split(",");
   			c = Jd("audio", d);
   			d = Jd("video", d);
   			if (c && (c = Wd(c), !VC.includes(c)) || d && (c = Wd(d), !WC.includes(c))) return !1;
   			if (b) return mb(this.convertCodecs(b, a));
   			b = this.convertCodecs("audio", a);
   			a = this.convertCodecs("video", a);
   			return mb(b) || mb(a)
   		};
   		r.convertCodecs = function(a, b) {
   			return "video/mp2t" == b.toLowerCase().split(";")[0] ? (b = $d(b).replace("mp4a.40.34", "mp3").split(",").map(function(c) {
   				return Se(c, "audio/mp4")
   			}).map(Re).join(","), "audio" == a ? 'audio/mp4; codecs="' + b + '"' : 'video/mp4; codecs="' + b + '"') : b
   		};
   		r.getOriginalMimeType = function() {
   			return this.l
   		};
   		r.transmux = function(a, b, c, d, e) {
   			var f = Ab(a);
   			if ("audio" == e && !wj(f)) {
   				for (var g = Qi(f), h = g.length; h < f.length; h++)
   					if (NC(f, h)) return Promise.reject(new T(2, 3, 3018, c ? c.L()[0] : null));
   				for (h = g.length; h < f.length; h++)
   					if (rC(f, h)) return this.h || (this.h = new tC("audio/aac")), this.h.transmux(a, b, c, d, e);
   				return Promise.reject(new T(2, 3, 3018, c ? c.L()[0] : null))
   			}
   			this.j ? this.j.clearData() : this.j = new pj;
   			var k = this.j.parse(f),
   				l = [],
   				m = k.hd();
   			try {
   				var n = null;
   				if ("video" == e) {
   					switch (m.video) {
   						case "avc":
   							var p = [],
   								q = null,
   								u = [],
   								v = k.Ac();
   							if (!v.length) throw new T(2, 3, 3023, c ? c.L()[0] : null);
   							for (var w = 0; w < v.length; w++) {
   								var A = v[w],
   									z = A.nalus;
   								u.push.apply(u, x(z));
   								var y = BC(z);
   								if (y) {
   									null == q && (q = A.dts);
   									var B = void 0;
   									B = w + 1 < v.length ? (v[w + 1].dts || 0) - (A.dts || 0) : 1 < v.length ? (A.dts || 0) - (v[w - 1].dts || 0) : 9E4 * (c.endTime - c.startTime);
   									p.push({
   										data: y.data,
   										size: y.data.byteLength,
   										duration: B,
   										Za: Math.round((A.pts || 0) - (A.dts || 0)),
   										flags: {
   											ab: 0,
   											Oa: 0,
   											Na: 0,
   											La: 0,
   											Ma: y.rd ? 2 : 1,
   											bb: y.rd ? 0 : 1
   										}
   									})
   								}
   							}
   							var C = zC(u);
   							if (!C || null == q) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   							b.height = C.height;
   							b.width = C.width;
   							n = {
   								id: b.id,
   								type: "video",
   								codecs: "avc1",
   								encrypted: b.encrypted && 0 < b.drmInfos.length,
   								timescale: 9E4,
   								duration: d,
   								Va: [],
   								ia: new Uint8Array([]),
   								sa: C.sa,
   								xa: C.xa,
   								ya: C.ya,
   								data: {
   									ob: this.g,
   									baseMediaDecodeTime: q,
   									Sa: p
   								},
   								stream: b
   							};
   							break;
   						case "hvc":
   							var D = [],
   								J = null,
   								K = [],
   								H = k.Ac();
   							if (!H.length) throw new T(2, 3, 3023, c ? c.L()[0] : null);
   							for (var I = 0; I < H.length; I++) {
   								var G = H[I],
   									N = G.nalus;
   								K.push.apply(K, x(N));
   								for (var L = !1, M = [], P = !1, R = t(N), Q = R.next(); !Q.done; Q = R.next()) {
   									var fa = Q.value;
   									switch (fa.type) {
   										case 1:
   										case 0:
   											var sa =
   												P = !0;
   											break;
   										case 19:
   										case 20:
   										case 21:
   											L = sa = P = !0;
   											break;
   										case 32:
   											sa = !0;
   											break;
   										case 33:
   											sa = !0;
   											break;
   										case 34:
   											sa = !0;
   											break;
   										case 35:
   											P = sa = !0;
   											break;
   										case 39:
   										case 40:
   											sa = !0;
   											break;
   										default:
   											sa = !1
   									}
   									if (P && sa) {
   										var Ia = fa.fullData.byteLength,
   											xa = new Uint8Array(4);
   										xa[0] = Ia >> 24 & 255;
   										xa[1] = Ia >> 16 & 255;
   										xa[2] = Ia >> 8 & 255;
   										xa[3] = Ia & 255;
   										M.push(xa);
   										M.push(fa.fullData)
   									}
   								}
   								var Ja = M.length ? {
   									data: Bd.apply(vd, x(M)),
   									rd: L
   								} : null;
   								if (Ja) {
   									null == J && null != G.dts && (J = G.dts);
   									var Qa = void 0;
   									Qa = I + 1 < H.length ? (H[I + 1].dts || 0) - (G.dts || 0) : 1 < H.length ? (G.dts || 0) - (H[I -
   										1].dts || 0) : 9E4 * (c.endTime - c.startTime);
   									D.push({
   										data: Ja.data,
   										size: Ja.data.byteLength,
   										duration: Qa,
   										Za: Math.round((G.pts || 0) - (G.dts || 0)),
   										flags: {
   											ab: 0,
   											Oa: 0,
   											Na: 0,
   											La: 0,
   											Ma: Ja.rd ? 2 : 1,
   											bb: Ja.rd ? 0 : 1
   										}
   									})
   								}
   							}
   							var Aa = CC(K);
   							if (!Aa || null == J) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   							b.height = Aa.height;
   							b.width = Aa.width;
   							n = {
   								id: b.id,
   								type: "video",
   								codecs: "hvc1",
   								encrypted: b.encrypted && 0 < b.drmInfos.length,
   								timescale: 9E4,
   								duration: d,
   								Va: [],
   								ia: new Uint8Array([]),
   								sa: Aa.sa,
   								xa: Aa.xa,
   								ya: Aa.ya,
   								data: {
   									ob: this.g,
   									baseMediaDecodeTime: J,
   									Sa: D
   								},
   								stream: b
   							}
   					}
   					n &&
   						(l.push(n), n = null)
   				}
   				if ("audio" == e) {
   					switch (m.audio) {
   						case "aac":
   							for (var Wa = [], ra, Za = null, ff = t(k.Lb()), Dd = ff.next(); !Dd.done; Dd = ff.next()) {
   								var be = Dd.value,
   									od = be.data;
   								if (od) {
   									var Ec = 0;
   									ra = qC(od, Ec);
   									if (!ra) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   									b.audioSamplingRate = ra.sampleRate;
   									b.channelsCount = ra.channelCount;
   									null == Za && null !== be.pts && (Za = be.pts);
   									for (; Ec < od.length;) {
   										var ce = pC(od, Ec);
   										if (ce) {
   											var de = ce.Yd + ce.X;
   											Ec + de <= od.length && Wa.push({
   												data: od.subarray(Ec + ce.Yd, Ec + de),
   												size: ce.X,
   												duration: 1024,
   												Za: 0,
   												flags: {
   													ab: 0,
   													Oa: 0,
   													Na: 0,
   													La: 0,
   													Ma: 2,
   													bb: 0
   												}
   											});
   											Ec += de
   										} else Ec++
   									}
   								}
   							}
   							if (!ra || null == Za) {
   								if (!k.Ac().length) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   								Za = 9E4 * c.startTime;
   								var ee = Jd("audio", b.codecs.split(","));
   								if (!ee || !b.channelsCount || !b.audioSamplingRate) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   								ra = {
   									sampleRate: b.audioSamplingRate,
   									channelCount: b.channelsCount,
   									Ga: ee
   								};
   								var pd = sC(ee, b.channelsCount);
   								if (!pd) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   								for (var wi = Za + 9E4 * (c.endTime - c.startTime), vg = Za; vg < wi;) Wa.push({
   									data: pd,
   									size: pd.byteLength,
   									duration: 1024,
   									Za: 0,
   									flags: {
   										ab: 0,
   										Oa: 0,
   										Na: 0,
   										La: 0,
   										Ma: 2,
   										bb: 0
   									}
   								}), vg += 1024 / ra.sampleRate * 9E4
   							}
   							var xi = ra.sampleRate,
   								yi = Za / 9E4 * xi;
   							n = {
   								id: b.id,
   								type: "audio",
   								codecs: ra.Ga,
   								encrypted: b.encrypted && 0 < b.drmInfos.length,
   								timescale: xi,
   								duration: d,
   								Va: [],
   								ia: new Uint8Array([]),
   								sa: new Uint8Array([]),
   								xa: 0,
   								ya: 0,
   								data: {
   									ob: this.g,
   									baseMediaDecodeTime: yi,
   									Sa: Wa
   								},
   								stream: b
   							};
   							break;
   						case "ac3":
   							for (var wg = [], fe = 0, ec = new Uint8Array([]), gj = null, su = t(k.Lb()), Fm = su.next(); !Fm.done; Fm = su.next()) {
   								var Gm = Fm.value,
   									Hm = Gm.data;
   								null == gj && null !== Gm.pts &&
   									(gj = Gm.pts);
   								for (var pf = 0; pf < Hm.length;) {
   									var Gd = uC(Hm, pf);
   									Gd ? (b.audioSamplingRate = Gd.sampleRate, b.channelsCount = Gd.channelCount, fe = Gd.sampleRate, ec = Gd.ia, wg.push({
   										data: Hm.subarray(pf, pf + Gd.X),
   										size: Gd.X,
   										duration: 1536,
   										Za: 0,
   										flags: {
   											ab: 0,
   											Oa: 0,
   											Na: 0,
   											La: 0,
   											Ma: 2,
   											bb: 0
   										}
   									}), pf += Gd.X) : pf++
   								}
   							}
   							if (0 == fe || 0 == ec.byteLength || null == gj) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   							var lD = gj / 9E4 * fe;
   							n = {
   								id: b.id,
   								type: "audio",
   								codecs: "ac-3",
   								encrypted: b.encrypted && 0 < b.drmInfos.length,
   								timescale: fe,
   								duration: d,
   								Va: [],
   								ia: ec,
   								sa: new Uint8Array([]),
   								xa: 0,
   								ya: 0,
   								data: {
   									ob: this.g,
   									baseMediaDecodeTime: lD,
   									Sa: wg
   								},
   								stream: b
   							};
   							break;
   						case "ec3":
   							for (var tu = [], hj = 0, Im = new Uint8Array([]), ij = null, uu = t(k.Lb()), Jm = uu.next(); !Jm.done; Jm = uu.next()) {
   								var Km = Jm.value,
   									Lm = Km.data;
   								null == ij && null !== Km.pts && (ij = Km.pts);
   								for (var qf = 0; qf < Lm.length;) {
   									var Hd = xC(Lm, qf);
   									Hd ? (b.audioSamplingRate = Hd.sampleRate, b.channelsCount = Hd.channelCount, hj = Hd.sampleRate, Im = Hd.ia, tu.push({
   											data: Lm.subarray(qf, qf + Hd.X),
   											size: Hd.X,
   											duration: 1536,
   											Za: 0,
   											flags: {
   												ab: 0,
   												Oa: 0,
   												Na: 0,
   												La: 0,
   												Ma: 2,
   												bb: 0
   											}
   										}), qf += Hd.X) :
   										qf++
   								}
   							}
   							if (0 == hj || 0 == Im.byteLength || null == ij) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   							var mD = ij / 9E4 * hj;
   							n = {
   								id: b.id,
   								type: "audio",
   								codecs: "ec-3",
   								encrypted: b.encrypted && 0 < b.drmInfos.length,
   								timescale: hj,
   								duration: d,
   								Va: [],
   								ia: Im,
   								sa: new Uint8Array([]),
   								xa: 0,
   								ya: 0,
   								data: {
   									ob: this.g,
   									baseMediaDecodeTime: mD,
   									Sa: tu
   								},
   								stream: b
   							};
   							break;
   						case "mp3":
   							for (var vu = [], jj, kj = null, wu = t(k.Lb()), Mm = wu.next(); !Mm.done; Mm = wu.next()) {
   								var Nm = Mm.value,
   									Jg = Nm.data;
   								if (Jg) {
   									null == kj && null !== Nm.pts && (kj = Nm.pts);
   									for (var ke = 0; ke < Jg.length;) {
   										var rf = HC(Jg,
   											ke);
   										rf ? (jj || (jj = rf), ke + rf.X <= Jg.length && vu.push({
   											data: Jg.subarray(ke, ke + rf.X),
   											size: rf.X,
   											duration: 1152,
   											Za: 0,
   											flags: {
   												ab: 0,
   												Oa: 0,
   												Na: 0,
   												La: 0,
   												Ma: 2,
   												bb: 0
   											}
   										}), ke += rf.X) : ke++
   									}
   								}
   							}
   							if (!jj || null == kj) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   							var xu = jj.sampleRate,
   								nD = kj / 9E4 * xu;
   							n = {
   								id: b.id,
   								type: "audio",
   								codecs: "mp3",
   								encrypted: b.encrypted && 0 < b.drmInfos.length,
   								timescale: xu,
   								duration: d,
   								Va: [],
   								ia: new Uint8Array([]),
   								sa: new Uint8Array([]),
   								xa: 0,
   								ya: 0,
   								data: {
   									ob: this.g,
   									baseMediaDecodeTime: nD,
   									Sa: vu
   								},
   								stream: b
   							};
   							break;
   						case "opus":
   							var yu = [],
   								lj = null,
   								Oc = k.F;
   							if (!Oc) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   							var yb = [];
   							switch (Oc.nh) {
   								case 1:
   								case 2:
   									yb = [0];
   									break;
   								case 0:
   									yb = [255, 1, 1, 0, 1];
   									break;
   								case 128:
   									yb = [255, 2, 0, 0, 1];
   									break;
   								case 3:
   									yb = [1, 2, 1, 0, 2, 1];
   									break;
   								case 4:
   									yb = [1, 2, 2, 0, 1, 2, 3];
   									break;
   								case 5:
   									yb = [1, 3, 2, 0, 4, 1, 2, 3];
   									break;
   								case 6:
   									yb = [1, 4, 2, 0, 4, 1, 2, 3, 5];
   									break;
   								case 7:
   									yb = [1, 4, 2, 0, 4, 1, 2, 3, 5, 6];
   									break;
   								case 8:
   									yb = [1, 5, 3, 0, 6, 1, 2, 3, 4, 5, 7];
   									break;
   								case 130:
   									yb = [1, 1, 2, 0, 1];
   									break;
   								case 131:
   									yb = [1, 1, 3, 0, 1, 2];
   									break;
   								case 132:
   									yb = [1, 1, 4, 0, 1, 2, 3];
   									break;
   								case 133:
   									yb = [1, 1, 5, 0, 1,
   										2, 3, 4
   									];
   									break;
   								case 134:
   									yb = [1, 1, 6, 0, 1, 2, 3, 4, 5];
   									break;
   								case 135:
   									yb = [1, 1, 7, 0, 1, 2, 3, 4, 5, 6];
   									break;
   								case 136:
   									yb = [1, 1, 8, 0, 1, 2, 3, 4, 5, 6, 7]
   							}
   							var zu = new Uint8Array([0, Oc.channelCount, 0, 0, Oc.sampleRate >>> 24 & 255, Oc.sampleRate >>> 17 & 255, Oc.sampleRate >>> 8 & 255, Oc.sampleRate >>> 0 & 255, 0, 0].concat(x(yb)));
   							for (var Au = Oc.sampleRate, Bu = t(k.Lb()), Om = Bu.next(); !Om.done; Om = Bu.next()) {
   								var Pm = Om.value,
   									sf = Pm.data;
   								null == lj && null !== Pm.pts && (lj = Pm.pts);
   								for (var Kg = 0; Kg < sf.length;) {
   									for (var oD = 0 !== (sf[Kg + 1] & 16), pD = 0 !== (sf[Kg + 1] & 8), sd = Kg +
   											2, mj = 0; 255 === sf[sd];) mj += 255, sd += 1;
   									mj += sf[sd];
   									sd += 1;
   									sd += oD ? 2 : 0;
   									sd += pD ? 2 : 0;
   									var Cu = sf.slice(sd, sd + mj);
   									yu.push({
   										data: Cu,
   										size: Cu.byteLength,
   										duration: 960,
   										Za: 0,
   										flags: {
   											ab: 0,
   											Oa: 0,
   											Na: 0,
   											La: 0,
   											Ma: 2,
   											bb: 0
   										}
   									});
   									Kg = sd + mj
   								}
   							}
   							if (0 == zu.byteLength || null == lj) throw new T(2, 3, 3018, c ? c.L()[0] : null);
   							b.audioSamplingRate = Oc.sampleRate;
   							b.channelsCount = Oc.channelCount;
   							var qD = lj / 9E4 * Au;
   							n = {
   								id: b.id,
   								type: "audio",
   								codecs: "opus",
   								encrypted: b.encrypted && 0 < b.drmInfos.length,
   								timescale: Au,
   								duration: d,
   								Va: [],
   								ia: zu,
   								sa: new Uint8Array([]),
   								xa: 0,
   								ya: 0,
   								data: {
   									ob: this.g,
   									baseMediaDecodeTime: qD,
   									Sa: yu
   								},
   								stream: b
   							}
   					}
   					n && (l.push(n), n = null)
   				}
   			} catch (Qm) {
   				return Qm && 3023 == Qm.code ? Promise.resolve(new Uint8Array([])) : Promise.reject(Qm)
   			}
   			if (!l.length) return Promise.reject(new T(2, 3, 3018, c ? c.L()[0] : null));
   			var Du = new Jw(l);
   			if (this.i.has(b.id)) var Rm = this.i.get(b.id);
   			else Rm = Pw(Du), this.i.set(b.id, Rm);
   			var rD = fx(Du);
   			this.g++;
   			var sD = Bd(Rm, rD);
   			return Promise.resolve(sD)
   		};
   		S("gowatch.transmuxer.TsTransmuxer", UC);
   		UC.prototype.transmux = UC.prototype.transmux;
   		UC.prototype.getOriginalMimeType = UC.prototype.getOriginalMimeType;
   		UC.prototype.convertCodecs = UC.prototype.convertCodecs;
   		UC.prototype.isSupported = UC.prototype.isSupported;
   		UC.prototype.destroy = UC.prototype.destroy;
   		var VC = ["aac", "ac-3", "ec-3", "mp3", "opus"],
   			WC = ["avc", "hevc"];
   		jc("video/mp2t", function() {
   			return new UC("video/mp2t")
   		}, nc);

   		function XC() {}
   		var YC;

   		function ZC() {
   			YC || navigator.emeEncryptionSchemePolyfilled ? console.debug("EmeEncryptionSchemePolyfill: Already installed.") : navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration ? (YC = navigator.requestMediaKeySystemAccess, console.debug("EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."), navigator.requestMediaKeySystemAccess = $C, navigator.emeEncryptionSchemePolyfilled = !0) : console.debug("EmeEncryptionSchemePolyfill: EME not found")
   		}

   		function $C(a, b) {
   			var c = this,
   				d;
   			return O(function(e) {
   				if (1 == e.g) return console.assert(c == navigator, 'bad "this" for requestMediaKeySystemAccess'), E(e, YC.call(c, a, b), 2);
   				d = e.h;
   				if (aD(d)) return console.debug("EmeEncryptionSchemePolyfill: Native encryptionScheme support found."), navigator.requestMediaKeySystemAccess = YC, e.return(d);
   				console.debug("EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
   				navigator.requestMediaKeySystemAccess = bD;
   				return e.return(bD.call(c,
   					a, b))
   			})
   		}

   		function bD(a, b) {
   			var c = this,
   				d, e, f, g, h, k, l, m, n, p, q, u;
   			return O(function(v) {
   				if (1 == v.g) {
   					console.assert(c == navigator, 'bad "this" for requestMediaKeySystemAccess');
   					d = cD(a);
   					e = [];
   					f = t(b);
   					for (g = f.next(); !g.done; g = f.next()) h = g.value, k = dD(h.videoCapabilities, d), l = dD(h.audioCapabilities, d), h.videoCapabilities && h.videoCapabilities.length && !k.length || h.audioCapabilities && h.audioCapabilities.length && !l.length || (m = Object.assign({}, h), m.videoCapabilities = k, m.audioCapabilities = l, e.push(m));
   					if (!e.length) throw n = Error("Unsupported keySystem or supportedConfigurations."),
   						n.name = "NotSupportedError", n.code = DOMException.NOT_SUPPORTED_ERR, n;
   					return E(v, YC.call(c, a, e), 2)
   				}
   				p = v.h;
   				u = q = null;
   				e[0] && (e[0].videoCapabilities && (q = e[0].videoCapabilities[0].encryptionScheme), e[0].audioCapabilities && (u = e[0].audioCapabilities[0].encryptionScheme));
   				return v.return(new eD(p, q, u))
   			})
   		}

   		function dD(a, b) {
   			return a ? a.filter(function(c) {
   				return fD(c.encryptionScheme, b)
   			}) : a
   		}
   		S("EmeEncryptionSchemePolyfill", XC);
   		XC.install = ZC;

   		function gD() {}
   		var hD;

   		function iD() {
   			hD || navigator.mediaCapabilitiesEncryptionSchemePolyfilled ? console.debug("McEncryptionSchemePolyfill: Already installed.") : navigator.mediaCapabilities ? (hD = navigator.mediaCapabilities.decodingInfo, console.debug("McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."), navigator.mediaCapabilities.decodingInfo = jD, navigator.mediaCapabilitiesEncryptionSchemePolyfilled = !0) : console.debug("McEncryptionSchemePolyfill: MediaCapabilities not found")
   		}

   		function jD(a) {
   			var b = this,
   				c, d, e;
   			return O(function(f) {
   				switch (f.g) {
   					case 1:
   						return console.assert(b == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), E(f, hD.call(b, a), 2);
   					case 2:
   						c = f.h;
   						if (!a.keySystemConfiguration) return f.return(c);
   						if ((d = c.keySystemAccess) && aD(d)) return console.debug("McEncryptionSchemePolyfill: Native encryptionScheme support found."), navigator.mediaCapabilities.decodingInfo = hD, f.return(c);
   						console.debug("McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
   						navigator.mediaCapabilities.decodingInfo = kD;
   						if (d) {
   							f.u(3);
   							break
   						}
   						e = c;
   						return E(f, tD(a), 4);
   					case 4:
   						return e.keySystemAccess = f.h, f.return(c);
   					case 3:
   						return f.return(kD.call(b, a))
   				}
   			})
   		}

   		function kD(a) {
   			var b = this,
   				c, d, e, f, g, h, k, l;
   			return O(function(m) {
   				switch (m.g) {
   					case 1:
   						return console.assert(b == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), d = c = null, !a.keySystemConfiguration || (e = a.keySystemConfiguration, f = e.keySystem, d = e.audio && e.audio.encryptionScheme, c = e.video && e.video.encryptionScheme, g = cD(f), h = {
   							powerEfficient: !1,
   							smooth: !1,
   							supported: !1,
   							keySystemAccess: null,
   							configuration: a
   						}, fD(d, g) && fD(c, g)) ? E(m, hD.call(b, a), 2) : m.return(h);
   					case 2:
   						k = m.h;
   						if (k.keySystemAccess) {
   							k.keySystemAccess =
   								new eD(k.keySystemAccess, c, d);
   							m.u(3);
   							break
   						}
   						if (!a.keySystemConfiguration) {
   							m.u(3);
   							break
   						}
   						l = k;
   						return E(m, tD(a), 5);
   					case 5:
   						l.keySystemAccess = m.h;
   					case 3:
   						return m.return(k)
   				}
   			})
   		}

   		function tD(a) {
   			var b, c;
   			return O(function(d) {
   				if (1 == d.g) {
   					var e = a.keySystemConfiguration,
   						f = [],
   						g = [];
   					e.audio && f.push({
   						robustness: e.audio.robustness || "",
   						contentType: a.audio.contentType,
   						encryptionScheme: e.audio.encryptionScheme
   					});
   					e.video && g.push({
   						robustness: e.video.robustness || "",
   						contentType: a.video.contentType,
   						encryptionScheme: e.video.encryptionScheme
   					});
   					e = {
   						initDataTypes: e.initDataType ? [e.initDataType] : [],
   						distinctiveIdentifier: e.distinctiveIdentifier,
   						persistentState: e.persistentState,
   						sessionTypes: e.sessionTypes
   					};
   					f.length && (e.audioCapabilities = f);
   					g.length && (e.videoCapabilities = g);
   					b = e;
   					return E(d, navigator.requestMediaKeySystemAccess(a.keySystemConfiguration.keySystem, [b]), 2)
   				}
   				c = d.h;
   				return d.return(c)
   			})
   		}
   		S("McEncryptionSchemePolyfill", gD);
   		gD.install = iD;

   		function eD(a, b, c) {
   			this.g = a;
   			this.i = b || null;
   			this.h = c || null;
   			this.keySystem = a.keySystem
   		}
   		eD.prototype.getConfiguration = function() {
   			var a = this.g.getConfiguration();
   			if (a.videoCapabilities)
   				for (var b = t(a.videoCapabilities), c = b.next(); !c.done; c = b.next()) c.value.encryptionScheme = this.i;
   			if (a.audioCapabilities)
   				for (b = t(a.audioCapabilities), c = b.next(); !c.done; c = b.next()) c.value.encryptionScheme = this.h;
   			return a
   		};
   		eD.prototype.createMediaKeys = function() {
   			return this.g.createMediaKeys()
   		};

   		function cD(a) {
   			if (a.startsWith("com.widevine") || a.startsWith("com.microsoft") || a.startsWith("com.chromecast") || a.startsWith("com.adobe") || a.startsWith("org.w3")) return "cenc";
   			if (a.startsWith("com.apple")) return "cbcs";
   			console.warn("EmeEncryptionSchemePolyfill: Unknown key system:", a, "Please contribute!");
   			return null
   		}

   		function aD(a) {
   			a = a.getConfiguration();
   			var b = a.audioCapabilities && a.audioCapabilities[0];
   			return (a = a.videoCapabilities && a.videoCapabilities[0] || b) && void 0 !== a.encryptionScheme ? !0 : !1
   		}

   		function fD(a, b) {
   			if (!a || a == b) return !0;
   			if ("cbcs" == a || "cbcs-1-9" == a)
   				if (uD || vD) return !0;
   			return !1
   		}

   		function wD() {}

   		function Ez() {
   			ZC();
   			iD()
   		}
   		S("EncryptionSchemePolyfills", wD);
   		wD.install = Ez;
   		var vD = navigator.userAgent.includes("CrKey"),
   			uD = 100 <= parseInt(navigator.userAgent.split("Firefox/").pop(), 10);
   		"undefined" !== typeof module && module.exports && (module.exports = wD);
   	}).call(exportTo, innerGlobal, innerGlobal, undefined);
   	if (typeof exports != "undefined")
   		for (var k in exportTo.gowatch) exports[k] = exportTo.gowatch[k];
   	else if (typeof define == "function" && define.amd) define(function() {
   		return exportTo.gowatch
   	});
   	else innerGlobal.gowatch = exportTo.gowatch
   })();
