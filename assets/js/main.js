/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
	var RP = Object.create;
	var Li = Object.defineProperty;
	var DP = Object.getOwnPropertyDescriptor;
	var FP = Object.getOwnPropertyNames;
	var qP = Object.getPrototypeOf,
		LP = Object.prototype.hasOwnProperty;
	var kP = (e, t) => () => (e && (t = e(e = 0)), t);
	var E = (e, t) => () => (t || e((t = {
			exports: {}
		}).exports, t), t.exports),
		NP = (e, t) => {
			for (var r in t) Li(e, r, {
				get: t[r],
				enumerable: !0
			})
		},
		Qh = (e, t, r, n) => {
			if (t && typeof t == "object" || typeof t == "function")
				for (let i of FP(t)) !LP.call(e, i) && i !== r && Li(e, i, {
					get: () => t[i],
					enumerable: !(n = DP(t, i)) || n.enumerable
				});
			return e
		};
	var BP = (e, t, r) => (r = e != null ? RP(qP(e)) : {}, Qh(t || !e || !e.__esModule ? Li(r, "default", {
			value: e,
			enumerable: !0
		}) : r, e)),
		VP = e => Qh(Li({}, "__esModule", {
			value: !0
		}), e);
	var Js = E(() => {
		window.tram = function(e) {
			function t(I, k) {
				var B = new $.Bare;
				return B.init(I, k)
			}

			function r(I) {
				return I.replace(/[A-Z]/g, function(k) {
					return "-" + k.toLowerCase()
				})
			}

			function n(I) {
				var k = parseInt(I.slice(1), 16),
					B = k >> 16 & 255,
					z = k >> 8 & 255,
					V = 255 & k;
				return [B, z, V]
			}

			function i(I, k, B) {
				return "#" + (1 << 24 | I << 16 | k << 8 | B).toString(16).slice(1)
			}

			function a() {}

			function s(I, k) {
				f("Type warning: Expected: [" + I + "] Got: [" + typeof k + "] " + k)
			}

			function o(I, k, B) {
				f("Units do not match [" + I + "]: " + k + ", " + B)
			}

			function l(I, k, B) {
				if (k !== void 0 && (B = k), I === void 0) return B;
				var z = B;
				return Xe.test(I) || !ke.test(I) ? z = parseInt(I, 10) : ke.test(I) && (z = 1e3 * parseFloat(I)), 0 > z && (z = 0), z === z ? z : B
			}

			function f(I) {
				fe.debug && window && window.console.warn(I)
			}

			function u(I) {
				for (var k = -1, B = I ? I.length : 0, z = []; ++k < B;) {
					var V = I[k];
					V && z.push(V)
				}
				return z
			}
			var c = function(I, k, B) {
					function z(ne) {
						return typeof ne == "object"
					}

					function V(ne) {
						return typeof ne == "function"
					}

					function G() {}

					function te(ne, me) {
						function Z() {
							var $e = new le;
							return V($e.init) && $e.init.apply($e, arguments), $e
						}

						function le() {}
						me === B && (me = ne, ne = Object), Z.Bare = le;
						var pe, Ie = G[I] = ne[I],
							Ot = le[I] = Z[I] = new G;
						return Ot.constructor = Z, Z.mixin = function($e) {
							return le[I] = Z[I] = te(Z, $e)[I], Z
						}, Z.open = function($e) {
							if (pe = {}, V($e) ? pe = $e.call(Z, Ot, Ie, Z, ne) : z($e) && (pe = $e), z(pe))
								for (var On in pe) k.call(pe, On) && (Ot[On] = pe[On]);
							return V(Ot.init) || (Ot.init = ne), Z
						}, Z.open(me)
					}
					return te
				}("prototype", {}.hasOwnProperty),
				v = {
					ease: ["ease", function(I, k, B, z) {
						var V = (I /= z) * I,
							G = V * I;
						return k + B * (-2.75 * G * V + 11 * V * V + -15.5 * G + 8 * V + .25 * I)
					}],
					"ease-in": ["ease-in", function(I, k, B, z) {
						var V = (I /= z) * I,
							G = V * I;
						return k + B * (-1 * G * V + 3 * V * V + -3 * G + 2 * V)
					}],
					"ease-out": ["ease-out", function(I, k, B, z) {
						var V = (I /= z) * I,
							G = V * I;
						return k + B * (.3 * G * V + -1.6 * V * V + 2.2 * G + -1.8 * V + 1.9 * I)
					}],
					"ease-in-out": ["ease-in-out", function(I, k, B, z) {
						var V = (I /= z) * I,
							G = V * I;
						return k + B * (2 * G * V + -5 * V * V + 2 * G + 2 * V)
					}],
					linear: ["linear", function(I, k, B, z) {
						return B * I / z + k
					}],
					"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(I, k, B, z) {
						return B * (I /= z) * I + k
					}],
					"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(I, k, B, z) {
						return -B * (I /= z) * (I - 2) + k
					}],
					"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(I, k, B, z) {
						return (I /= z / 2) < 1 ? B / 2 * I * I + k : -B / 2 * (--I * (I - 2) - 1) + k
					}],
					"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(I, k, B, z) {
						return B * (I /= z) * I * I + k
					}],
					"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(I, k, B, z) {
						return B * ((I = I / z - 1) * I * I + 1) + k
					}],
					"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(I, k, B, z) {
						return (I /= z / 2) < 1 ? B / 2 * I * I * I + k : B / 2 * ((I -= 2) * I * I + 2) + k
					}],
					"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(I, k, B, z) {
						return B * (I /= z) * I * I * I + k
					}],
					"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(I, k, B, z) {
						return -B * ((I = I / z - 1) * I * I * I - 1) + k
					}],
					"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(I, k, B, z) {
						return (I /= z / 2) < 1 ? B / 2 * I * I * I * I + k : -B / 2 * ((I -= 2) * I * I * I - 2) + k
					}],
					"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(I, k, B, z) {
						return B * (I /= z) * I * I * I * I + k
					}],
					"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(I, k, B, z) {
						return B * ((I = I / z - 1) * I * I * I * I + 1) + k
					}],
					"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(I, k, B, z) {
						return (I /= z / 2) < 1 ? B / 2 * I * I * I * I * I + k : B / 2 * ((I -= 2) * I * I * I * I + 2) + k
					}],
					"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(I, k, B, z) {
						return -B * Math.cos(I / z * (Math.PI / 2)) + B + k
					}],
					"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(I, k, B, z) {
						return B * Math.sin(I / z * (Math.PI / 2)) + k
					}],
					"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(I, k, B, z) {
						return -B / 2 * (Math.cos(Math.PI * I / z) - 1) + k
					}],
					"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(I, k, B, z) {
						return I === 0 ? k : B * Math.pow(2, 10 * (I / z - 1)) + k
					}],
					"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(I, k, B, z) {
						return I === z ? k + B : B * (-Math.pow(2, -10 * I / z) + 1) + k
					}],
					"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(I, k, B, z) {
						return I === 0 ? k : I === z ? k + B : (I /= z / 2) < 1 ? B / 2 * Math.pow(2, 10 * (I - 1)) + k : B / 2 * (-Math.pow(2, -10 * --I) + 2) + k
					}],
					"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(I, k, B, z) {
						return -B * (Math.sqrt(1 - (I /= z) * I) - 1) + k
					}],
					"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(I, k, B, z) {
						return B * Math.sqrt(1 - (I = I / z - 1) * I) + k
					}],
					"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(I, k, B, z) {
						return (I /= z / 2) < 1 ? -B / 2 * (Math.sqrt(1 - I * I) - 1) + k : B / 2 * (Math.sqrt(1 - (I -= 2) * I) + 1) + k
					}],
					"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(I, k, B, z, V) {
						return V === void 0 && (V = 1.70158), B * (I /= z) * I * ((V + 1) * I - V) + k
					}],
					"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(I, k, B, z, V) {
						return V === void 0 && (V = 1.70158), B * ((I = I / z - 1) * I * ((V + 1) * I + V) + 1) + k
					}],
					"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(I, k, B, z, V) {
						return V === void 0 && (V = 1.70158), (I /= z / 2) < 1 ? B / 2 * I * I * (((V *= 1.525) + 1) * I - V) + k : B / 2 * ((I -= 2) * I * (((V *= 1.525) + 1) * I + V) + 2) + k
					}]
				},
				d = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
				},
				p = document,
				m = window,
				h = "bkwld-tram",
				g = /[\-\.0-9]/g,
				y = /[A-Z]/,
				_ = "number",
				b = /^(rgb|#)/,
				S = /(em|cm|mm|in|pt|pc|px)$/,
				x = /(em|cm|mm|in|pt|pc|px|%)$/,
				T = /(deg|rad|turn)$/,
				P = "unitless",
				D = /(all|none) 0s ease 0s/,
				w = /^(width|height)$/,
				C = " ",
				F = p.createElement("a"),
				O = ["Webkit", "Moz", "O", "ms"],
				R = ["-webkit-", "-moz-", "-o-", "-ms-"],
				L = function(I) {
					if (I in F.style) return {
						dom: I,
						css: I
					};
					var k, B, z = "",
						V = I.split("-");
					for (k = 0; k < V.length; k++) z += V[k].charAt(0).toUpperCase() + V[k].slice(1);
					for (k = 0; k < O.length; k++)
						if (B = O[k] + z, B in F.style) return {
							dom: B,
							css: R[k] + I
						}
				},
				H = t.support = {
					bind: Function.prototype.bind,
					transform: L("transform"),
					transition: L("transition"),
					backface: L("backface-visibility"),
					timing: L("transition-timing-function")
				};
			if (H.transition) {
				var Y = H.timing.dom;
				if (F.style[Y] = v["ease-in-back"][0], !F.style[Y])
					for (var A in d) v[A][0] = d[A]
			}
			var M = t.frame = function() {
					var I = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
					return I && H.bind ? I.bind(m) : function(k) {
						m.setTimeout(k, 16)
					}
				}(),
				N = t.now = function() {
					var I = m.performance,
						k = I && (I.now || I.webkitNow || I.msNow || I.mozNow);
					return k && H.bind ? k.bind(I) : Date.now || function() {
						return +new Date
					}
				}(),
				U = c(function(I) {
					function k(se, ge) {
						var Pe = u(("" + se).split(C)),
							ye = Pe[0];
						ge = ge || {};
						var Ke = j[ye];
						if (!Ke) return f("Unsupported property: " + ye);
						if (!ge.weak || !this.props[ye]) {
							var Et = Ke[0],
								rt = this.props[ye];
							return rt || (rt = this.props[ye] = new Et.Bare), rt.init(this.$el, Pe, Ke, ge), rt
						}
					}

					function B(se, ge, Pe) {
						if (se) {
							var ye = typeof se;
							if (ge || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ye == "number" && ge) return this.timer = new ae({
								duration: se,
								context: this,
								complete: G
							}), void(this.active = !0);
							if (ye == "string" && ge) {
								switch (se) {
									case "hide":
										Z.call(this);
										break;
									case "stop":
										te.call(this);
										break;
									case "redraw":
										le.call(this);
										break;
									default:
										k.call(this, se, Pe && Pe[1])
								}
								return G.call(this)
							}
							if (ye == "function") return void se.call(this, this);
							if (ye == "object") {
								var Ke = 0;
								Ot.call(this, se, function(De, MP) {
									De.span > Ke && (Ke = De.span), De.stop(), De.animate(MP)
								}, function(De) {
									"wait" in De && (Ke = l(De.wait, 0))
								}), Ie.call(this), Ke > 0 && (this.timer = new ae({
									duration: Ke,
									context: this
								}), this.active = !0, ge && (this.timer.complete = G));
								var Et = this,
									rt = !1,
									qi = {};
								M(function() {
									Ot.call(Et, se, function(De) {
										De.active && (rt = !0, qi[De.name] = De.nextStyle)
									}), rt && Et.$el.css(qi)
								})
							}
						}
					}

					function z(se) {
						se = l(se, 0), this.active ? this.queue.push({
							options: se
						}) : (this.timer = new ae({
							duration: se,
							context: this,
							complete: G
						}), this.active = !0)
					}

					function V(se) {
						return this.active ? (this.queue.push({
							options: se,
							args: arguments
						}), void(this.timer.complete = G)) : f("No active transition timer. Use start() or wait() before then().")
					}

					function G() {
						if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
							var se = this.queue.shift();
							B.call(this, se.options, !0, se.args)
						}
					}

					function te(se) {
						this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
						var ge;
						typeof se == "string" ? (ge = {}, ge[se] = 1) : ge = typeof se == "object" && se != null ? se : this.props, Ot.call(this, ge, $e), Ie.call(this)
					}

					function ne(se) {
						te.call(this, se), Ot.call(this, se, On, wP)
					}

					function me(se) {
						typeof se != "string" && (se = "block"), this.el.style.display = se
					}

					function Z() {
						te.call(this), this.el.style.display = "none"
					}

					function le() {
						this.el.offsetHeight
					}

					function pe() {
						te.call(this), e.removeData(this.el, h), this.$el = this.el = null
					}

					function Ie() {
						var se, ge, Pe = [];
						this.upstream && Pe.push(this.upstream);
						for (se in this.props) ge = this.props[se], ge.active && Pe.push(ge.string);
						Pe = Pe.join(","), this.style !== Pe && (this.style = Pe, this.el.style[H.transition.dom] = Pe)
					}

					function Ot(se, ge, Pe) {
						var ye, Ke, Et, rt, qi = ge !== $e,
							De = {};
						for (ye in se) Et = se[ye], ye in ve ? (De.transform || (De.transform = {}), De.transform[ye] = Et) : (y.test(ye) && (ye = r(ye)), ye in j ? De[ye] = Et : (rt || (rt = {}), rt[ye] = Et));
						for (ye in De) {
							if (Et = De[ye], Ke = this.props[ye], !Ke) {
								if (!qi) continue;
								Ke = k.call(this, ye)
							}
							ge.call(this, Ke, Et)
						}
						Pe && rt && Pe.call(this, rt)
					}

					function $e(se) {
						se.stop()
					}

					function On(se, ge) {
						se.set(ge)
					}

					function wP(se) {
						this.$el.css(se)
					}

					function yt(se, ge) {
						I[se] = function() {
							return this.children ? OP.call(this, ge, arguments) : (this.el && ge.apply(this, arguments), this)
						}
					}

					function OP(se, ge) {
						var Pe, ye = this.children.length;
						for (Pe = 0; ye > Pe; Pe++) se.apply(this.children[Pe], ge);
						return this
					}
					I.init = function(se) {
						if (this.$el = e(se), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, fe.keepInherited && !fe.fallback) {
							var ge = K(this.el, "transition");
							ge && !D.test(ge) && (this.upstream = ge)
						}
						H.backface && fe.hideBackface && q(this.el, H.backface.css, "hidden")
					}, yt("add", k), yt("start", B), yt("wait", z), yt("then", V), yt("next", G), yt("stop", te), yt("set", ne), yt("show", me), yt("hide", Z), yt("redraw", le), yt("destroy", pe)
				}),
				$ = c(U, function(I) {
					function k(B, z) {
						var V = e.data(B, h) || e.data(B, h, new U.Bare);
						return V.el || V.init(B), z ? V.start(z) : V
					}
					I.init = function(B, z) {
						var V = e(B);
						if (!V.length) return this;
						if (V.length === 1) return k(V[0], z);
						var G = [];
						return V.each(function(te, ne) {
							G.push(k(ne, z))
						}), this.children = G, this
					}
				}),
				X = c(function(I) {
					function k() {
						var G = this.get();
						this.update("auto");
						var te = this.get();
						return this.update(G), te
					}

					function B(G, te, ne) {
						return te !== void 0 && (ne = te), G in v ? G : ne
					}

					function z(G) {
						var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(G);
						return (te ? i(te[1], te[2], te[3]) : G).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
					}
					var V = {
						duration: 500,
						ease: "ease",
						delay: 0
					};
					I.init = function(G, te, ne, me) {
						this.$el = G, this.el = G[0];
						var Z = te[0];
						ne[2] && (Z = ne[2]), J[Z] && (Z = J[Z]), this.name = Z, this.type = ne[1], this.duration = l(te[1], this.duration, V.duration), this.ease = B(te[2], this.ease, V.ease), this.delay = l(te[3], this.delay, V.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = w.test(this.name), this.unit = me.unit || this.unit || fe.defaultUnit, this.angle = me.angle || this.angle || fe.defaultAngle, fe.fallback || me.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + C + this.duration + "ms" + (this.ease != "ease" ? C + v[this.ease][0] : "") + (this.delay ? C + this.delay + "ms" : ""))
					}, I.set = function(G) {
						G = this.convert(G, this.type), this.update(G), this.redraw()
					}, I.transition = function(G) {
						this.active = !0, G = this.convert(G, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), G == "auto" && (G = k.call(this))), this.nextStyle = G
					}, I.fallback = function(G) {
						var te = this.el.style[this.name] || this.convert(this.get(), this.type);
						G = this.convert(G, this.type), this.auto && (te == "auto" && (te = this.convert(this.get(), this.type)), G == "auto" && (G = k.call(this))), this.tween = new Q({
							from: te,
							to: G,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, I.get = function() {
						return K(this.el, this.name)
					}, I.update = function(G) {
						q(this.el, this.name, G)
					}, I.stop = function() {
						(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, q(this.el, this.name, this.get()));
						var G = this.tween;
						G && G.context && G.destroy()
					}, I.convert = function(G, te) {
						if (G == "auto" && this.auto) return G;
						var ne, me = typeof G == "number",
							Z = typeof G == "string";
						switch (te) {
							case _:
								if (me) return G;
								if (Z && G.replace(g, "") === "") return +G;
								ne = "number(unitless)";
								break;
							case b:
								if (Z) {
									if (G === "" && this.original) return this.original;
									if (te.test(G)) return G.charAt(0) == "#" && G.length == 7 ? G : z(G)
								}
								ne = "hex or rgb string";
								break;
							case S:
								if (me) return G + this.unit;
								if (Z && te.test(G)) return G;
								ne = "number(px) or string(unit)";
								break;
							case x:
								if (me) return G + this.unit;
								if (Z && te.test(G)) return G;
								ne = "number(px) or string(unit or %)";
								break;
							case T:
								if (me) return G + this.angle;
								if (Z && te.test(G)) return G;
								ne = "number(deg) or string(angle)";
								break;
							case P:
								if (me || Z && x.test(G)) return G;
								ne = "number(unitless) or string(unit or %)"
						}
						return s(ne, G), G
					}, I.redraw = function() {
						this.el.offsetHeight
					}
				}),
				ee = c(X, function(I, k) {
					I.init = function() {
						k.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b))
					}
				}),
				re = c(X, function(I, k) {
					I.init = function() {
						k.init.apply(this, arguments), this.animate = this.fallback
					}, I.get = function() {
						return this.$el[this.name]()
					}, I.update = function(B) {
						this.$el[this.name](B)
					}
				}),
				ie = c(X, function(I, k) {
					function B(z, V) {
						var G, te, ne, me, Z;
						for (G in z) me = ve[G], ne = me[0], te = me[1] || G, Z = this.convert(z[G], ne), V.call(this, te, Z, ne)
					}
					I.init = function() {
						k.init.apply(this, arguments), this.current || (this.current = {}, ve.perspective && fe.perspective && (this.current.perspective = fe.perspective, q(this.el, this.name, this.style(this.current)), this.redraw()))
					}, I.set = function(z) {
						B.call(this, z, function(V, G) {
							this.current[V] = G
						}), q(this.el, this.name, this.style(this.current)), this.redraw()
					}, I.transition = function(z) {
						var V = this.values(z);
						this.tween = new xe({
							current: this.current,
							values: V,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease
						});
						var G, te = {};
						for (G in this.current) te[G] = G in V ? V[G] : this.current[G];
						this.active = !0, this.nextStyle = this.style(te)
					}, I.fallback = function(z) {
						var V = this.values(z);
						this.tween = new xe({
							current: this.current,
							values: V,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, I.update = function() {
						q(this.el, this.name, this.style(this.current))
					}, I.style = function(z) {
						var V, G = "";
						for (V in z) G += V + "(" + z[V] + ") ";
						return G
					}, I.values = function(z) {
						var V, G = {};
						return B.call(this, z, function(te, ne, me) {
							G[te] = ne, this.current[te] === void 0 && (V = 0, ~te.indexOf("scale") && (V = 1), this.current[te] = this.convert(V, me))
						}), G
					}
				}),
				Q = c(function(I) {
					function k(Z) {
						ne.push(Z) === 1 && M(B)
					}

					function B() {
						var Z, le, pe, Ie = ne.length;
						if (Ie)
							for (M(B), le = N(), Z = Ie; Z--;) pe = ne[Z], pe && pe.render(le)
					}

					function z(Z) {
						var le, pe = e.inArray(Z, ne);
						pe >= 0 && (le = ne.slice(pe + 1), ne.length = pe, le.length && (ne = ne.concat(le)))
					}

					function V(Z) {
						return Math.round(Z * me) / me
					}

					function G(Z, le, pe) {
						return i(Z[0] + pe * (le[0] - Z[0]), Z[1] + pe * (le[1] - Z[1]), Z[2] + pe * (le[2] - Z[2]))
					}
					var te = {
						ease: v.ease[1],
						from: 0,
						to: 1
					};
					I.init = function(Z) {
						this.duration = Z.duration || 0, this.delay = Z.delay || 0;
						var le = Z.ease || te.ease;
						v[le] && (le = v[le][1]), typeof le != "function" && (le = te.ease), this.ease = le, this.update = Z.update || a, this.complete = Z.complete || a, this.context = Z.context || this, this.name = Z.name;
						var pe = Z.from,
							Ie = Z.to;
						pe === void 0 && (pe = te.from), Ie === void 0 && (Ie = te.to), this.unit = Z.unit || "", typeof pe == "number" && typeof Ie == "number" ? (this.begin = pe, this.change = Ie - pe) : this.format(Ie, pe), this.value = this.begin + this.unit, this.start = N(), Z.autoplay !== !1 && this.play()
					}, I.play = function() {
						this.active || (this.start || (this.start = N()), this.active = !0, k(this))
					}, I.stop = function() {
						this.active && (this.active = !1, z(this))
					}, I.render = function(Z) {
						var le, pe = Z - this.start;
						if (this.delay) {
							if (pe <= this.delay) return;
							pe -= this.delay
						}
						if (pe < this.duration) {
							var Ie = this.ease(pe, 0, 1, this.duration);
							return le = this.startRGB ? G(this.startRGB, this.endRGB, Ie) : V(this.begin + Ie * this.change), this.value = le + this.unit, void this.update.call(this.context, this.value)
						}
						le = this.endHex || this.begin + this.change, this.value = le + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
					}, I.format = function(Z, le) {
						if (le += "", Z += "", Z.charAt(0) == "#") return this.startRGB = n(le), this.endRGB = n(Z), this.endHex = Z, this.begin = 0, void(this.change = 1);
						if (!this.unit) {
							var pe = le.replace(g, ""),
								Ie = Z.replace(g, "");
							pe !== Ie && o("tween", le, Z), this.unit = pe
						}
						le = parseFloat(le), Z = parseFloat(Z), this.begin = this.value = le, this.change = Z - le
					}, I.destroy = function() {
						this.stop(), this.context = null, this.ease = this.update = this.complete = a
					};
					var ne = [],
						me = 1e3
				}),
				ae = c(Q, function(I) {
					I.init = function(k) {
						this.duration = k.duration || 0, this.complete = k.complete || a, this.context = k.context, this.play()
					}, I.render = function(k) {
						var B = k - this.start;
						B < this.duration || (this.complete.call(this.context), this.destroy())
					}
				}),
				xe = c(Q, function(I, k) {
					I.init = function(B) {
						this.context = B.context, this.update = B.update, this.tweens = [], this.current = B.current;
						var z, V;
						for (z in B.values) V = B.values[z], this.current[z] !== V && this.tweens.push(new Q({
							name: z,
							from: this.current[z],
							to: V,
							duration: B.duration,
							delay: B.delay,
							ease: B.ease,
							autoplay: !1
						}));
						this.play()
					}, I.render = function(B) {
						var z, V, G = this.tweens.length,
							te = !1;
						for (z = G; z--;) V = this.tweens[z], V.context && (V.render(B), this.current[V.name] = V.value, te = !0);
						return te ? void(this.update && this.update.call(this.context)) : this.destroy()
					}, I.destroy = function() {
						if (k.destroy.call(this), this.tweens) {
							var B, z = this.tweens.length;
							for (B = z; B--;) this.tweens[B].destroy();
							this.tweens = null, this.current = null
						}
					}
				}),
				fe = t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !H.transition,
					agentTests: []
				};
			t.fallback = function(I) {
				if (!H.transition) return fe.fallback = !0;
				fe.agentTests.push("(" + I + ")");
				var k = new RegExp(fe.agentTests.join("|"), "i");
				fe.fallback = k.test(navigator.userAgent)
			}, t.fallback("6.0.[2-5] Safari"), t.tween = function(I) {
				return new Q(I)
			}, t.delay = function(I, k, B) {
				return new ae({
					complete: k,
					duration: I,
					context: B
				})
			}, e.fn.tram = function(I) {
				return t.call(null, this, I)
			};
			var q = e.style,
				K = e.css,
				J = {
					transform: H.transform && H.transform.css
				},
				j = {
					color: [ee, b],
					background: [ee, b, "background-color"],
					"outline-color": [ee, b],
					"border-color": [ee, b],
					"border-top-color": [ee, b],
					"border-right-color": [ee, b],
					"border-bottom-color": [ee, b],
					"border-left-color": [ee, b],
					"border-width": [X, S],
					"border-top-width": [X, S],
					"border-right-width": [X, S],
					"border-bottom-width": [X, S],
					"border-left-width": [X, S],
					"border-spacing": [X, S],
					"letter-spacing": [X, S],
					margin: [X, S],
					"margin-top": [X, S],
					"margin-right": [X, S],
					"margin-bottom": [X, S],
					"margin-left": [X, S],
					padding: [X, S],
					"padding-top": [X, S],
					"padding-right": [X, S],
					"padding-bottom": [X, S],
					"padding-left": [X, S],
					"outline-width": [X, S],
					opacity: [X, _],
					top: [X, x],
					right: [X, x],
					bottom: [X, x],
					left: [X, x],
					"font-size": [X, x],
					"text-indent": [X, x],
					"word-spacing": [X, x],
					width: [X, x],
					"min-width": [X, x],
					"max-width": [X, x],
					height: [X, x],
					"min-height": [X, x],
					"max-height": [X, x],
					"line-height": [X, P],
					"scroll-top": [re, _, "scrollTop"],
					"scroll-left": [re, _, "scrollLeft"]
				},
				ve = {};
			H.transform && (j.transform = [ie], ve = {
				x: [x, "translateX"],
				y: [x, "translateY"],
				rotate: [T],
				rotateX: [T],
				rotateY: [T],
				scale: [_],
				scaleX: [_],
				scaleY: [_],
				skew: [T],
				skewX: [T],
				skewY: [T]
			}), H.transform && H.backface && (ve.z = [x, "translateZ"], ve.rotateZ = [T], ve.scaleZ = [_], ve.perspective = [S]);
			var Xe = /ms/,
				ke = /s|\./;
			return e.tram = t
		}(window.jQuery)
	});
	var Jh = E((hte, Zh) => {
		var GP = window.$,
			zP = Js() && GP.tram;
		Zh.exports = function() {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				i = Function.prototype,
				a = r.push,
				s = r.slice,
				o = r.concat,
				l = n.toString,
				f = n.hasOwnProperty,
				u = r.forEach,
				c = r.map,
				v = r.reduce,
				d = r.reduceRight,
				p = r.filter,
				m = r.every,
				h = r.some,
				g = r.indexOf,
				y = r.lastIndexOf,
				_ = Array.isArray,
				b = Object.keys,
				S = i.bind,
				x = e.each = e.forEach = function(O, R, L) {
					if (O == null) return O;
					if (u && O.forEach === u) O.forEach(R, L);
					else if (O.length === +O.length) {
						for (var H = 0, Y = O.length; H < Y; H++)
							if (R.call(L, O[H], H, O) === t) return
					} else
						for (var A = e.keys(O), H = 0, Y = A.length; H < Y; H++)
							if (R.call(L, O[A[H]], A[H], O) === t) return;
					return O
				};
			e.map = e.collect = function(O, R, L) {
				var H = [];
				return O == null ? H : c && O.map === c ? O.map(R, L) : (x(O, function(Y, A, M) {
					H.push(R.call(L, Y, A, M))
				}), H)
			}, e.find = e.detect = function(O, R, L) {
				var H;
				return T(O, function(Y, A, M) {
					if (R.call(L, Y, A, M)) return H = Y, !0
				}), H
			}, e.filter = e.select = function(O, R, L) {
				var H = [];
				return O == null ? H : p && O.filter === p ? O.filter(R, L) : (x(O, function(Y, A, M) {
					R.call(L, Y, A, M) && H.push(Y)
				}), H)
			};
			var T = e.some = e.any = function(O, R, L) {
				R || (R = e.identity);
				var H = !1;
				return O == null ? H : h && O.some === h ? O.some(R, L) : (x(O, function(Y, A, M) {
					if (H || (H = R.call(L, Y, A, M))) return t
				}), !!H)
			};
			e.contains = e.include = function(O, R) {
				return O == null ? !1 : g && O.indexOf === g ? O.indexOf(R) != -1 : T(O, function(L) {
					return L === R
				})
			}, e.delay = function(O, R) {
				var L = s.call(arguments, 2);
				return setTimeout(function() {
					return O.apply(null, L)
				}, R)
			}, e.defer = function(O) {
				return e.delay.apply(e, [O, 1].concat(s.call(arguments, 1)))
			}, e.throttle = function(O) {
				var R, L, H;
				return function() {
					R || (R = !0, L = arguments, H = this, zP.frame(function() {
						R = !1, O.apply(H, L)
					}))
				}
			}, e.debounce = function(O, R, L) {
				var H, Y, A, M, N, U = function() {
					var $ = e.now() - M;
					$ < R ? H = setTimeout(U, R - $) : (H = null, L || (N = O.apply(A, Y), A = Y = null))
				};
				return function() {
					A = this, Y = arguments, M = e.now();
					var $ = L && !H;
					return H || (H = setTimeout(U, R)), $ && (N = O.apply(A, Y), A = Y = null), N
				}
			}, e.defaults = function(O) {
				if (!e.isObject(O)) return O;
				for (var R = 1, L = arguments.length; R < L; R++) {
					var H = arguments[R];
					for (var Y in H) O[Y] === void 0 && (O[Y] = H[Y])
				}
				return O
			}, e.keys = function(O) {
				if (!e.isObject(O)) return [];
				if (b) return b(O);
				var R = [];
				for (var L in O) e.has(O, L) && R.push(L);
				return R
			}, e.has = function(O, R) {
				return f.call(O, R)
			}, e.isObject = function(O) {
				return O === Object(O)
			}, e.now = Date.now || function() {
				return new Date().getTime()
			}, e.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var P = /(.)^/,
				D = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				w = /\\|'|\r|\n|\u2028|\u2029/g,
				C = function(O) {
					return "\\" + D[O]
				},
				F = /^\s*(\w|\$)+\s*$/;
			return e.template = function(O, R, L) {
				!R && L && (R = L), R = e.defaults({}, R, e.templateSettings);
				var H = RegExp([(R.escape || P).source, (R.interpolate || P).source, (R.evaluate || P).source].join("|") + "|$", "g"),
					Y = 0,
					A = "__p+='";
				O.replace(H, function($, X, ee, re, ie) {
					return A += O.slice(Y, ie).replace(w, C), Y = ie + $.length, X ? A += `'+
((__t=(` + X + `))==null?'':_.escape(__t))+
'` : ee ? A += `'+
((__t=(` + ee + `))==null?'':__t)+
'` : re && (A += `';
` + re + `
__p+='`), $
				}), A += `';
`;
				var M = R.variable;
				if (M) {
					if (!F.test(M)) throw new Error("variable is not a bare identifier: " + M)
				} else A = `with(obj||{}){
` + A + `}
`, M = "obj";
				A = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + A + `return __p;
`;
				var N;
				try {
					N = new Function(R.variable || "obj", "_", A)
				} catch ($) {
					throw $.source = A, $
				}
				var U = function($) {
					return N.call(this, $, e)
				};
				return U.source = "function(" + M + `){
` + A + "}", U
			}, e
		}()
	});
	var ot = E((cte, oc) => {
		var Ee = {},
			zr = {},
			Hr = [],
			to = window.Webflow || [],
			tr = window.jQuery,
			bt = tr(window),
			HP = tr(document),
			Mt = tr.isFunction,
			_t = Ee._ = Jh(),
			tc = Ee.tram = Js() && tr.tram,
			Ni = !1,
			ro = !1;
		tc.config.hideBackface = !1;
		tc.config.keepInherited = !0;
		Ee.define = function(e, t, r) {
			zr[e] && nc(zr[e]);
			var n = zr[e] = t(tr, _t, r) || {};
			return rc(n), n
		};
		Ee.require = function(e) {
			return zr[e]
		};

		function rc(e) {
			Ee.env() && (Mt(e.design) && bt.on("__wf_design", e.design), Mt(e.preview) && bt.on("__wf_preview", e.preview)), Mt(e.destroy) && bt.on("__wf_destroy", e.destroy), e.ready && Mt(e.ready) && jP(e)
		}

		function jP(e) {
			if (Ni) {
				e.ready();
				return
			}
			_t.contains(Hr, e.ready) || Hr.push(e.ready)
		}

		function nc(e) {
			Mt(e.design) && bt.off("__wf_design", e.design), Mt(e.preview) && bt.off("__wf_preview", e.preview), Mt(e.destroy) && bt.off("__wf_destroy", e.destroy), e.ready && Mt(e.ready) && WP(e)
		}

		function WP(e) {
			Hr = _t.filter(Hr, function(t) {
				return t !== e.ready
			})
		}
		Ee.push = function(e) {
			if (Ni) {
				Mt(e) && e();
				return
			}
			to.push(e)
		};
		Ee.env = function(e) {
			var t = window.__wf_design,
				r = typeof t < "u";
			if (!e) return r;
			if (e === "design") return r && t;
			if (e === "preview") return r && !t;
			if (e === "slug") return r && window.__wf_slug;
			if (e === "editor") return window.WebflowEditor;
			if (e === "test") return window.__wf_test;
			if (e === "frame") return window !== window.top
		};
		var ki = navigator.userAgent.toLowerCase(),
			ic = Ee.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			UP = Ee.env.chrome = /chrome/.test(ki) && /Google/.test(navigator.vendor) && parseInt(ki.match(/chrome\/(\d+)\./)[1], 10),
			XP = Ee.env.ios = /(ipod|iphone|ipad)/.test(ki);
		Ee.env.safari = /safari/.test(ki) && !UP && !XP;
		var eo;
		ic && HP.on("touchstart mousedown", function(e) {
			eo = e.target
		});
		Ee.validClick = ic ? function(e) {
			return e === eo || tr.contains(e, eo)
		} : function() {
			return !0
		};
		var ac = "resize.webflow orientationchange.webflow load.webflow",
			$P = "scroll.webflow " + ac;
		Ee.resize = no(bt, ac);
		Ee.scroll = no(bt, $P);
		Ee.redraw = no();

		function no(e, t) {
			var r = [],
				n = {};
			return n.up = _t.throttle(function(i) {
				_t.each(r, function(a) {
					a(i)
				})
			}), e && t && e.on(t, n.up), n.on = function(i) {
				typeof i == "function" && (_t.contains(r, i) || r.push(i))
			}, n.off = function(i) {
				if (!arguments.length) {
					r = [];
					return
				}
				r = _t.filter(r, function(a) {
					return a !== i
				})
			}, n
		}
		Ee.location = function(e) {
			window.location = e
		};
		Ee.env() && (Ee.location = function() {});
		Ee.ready = function() {
			Ni = !0, ro ? KP() : _t.each(Hr, ec), _t.each(to, ec), Ee.resize.up()
		};

		function ec(e) {
			Mt(e) && e()
		}

		function KP() {
			ro = !1, _t.each(zr, rc)
		}
		var br;
		Ee.load = function(e) {
			br.then(e)
		};

		function sc() {
			br && (br.reject(), bt.off("load", br.resolve)), br = new tr.Deferred, bt.on("load", br.resolve)
		}
		Ee.destroy = function(e) {
			e = e || {}, ro = !0, bt.triggerHandler("__wf_destroy"), e.domready != null && (Ni = e.domready), _t.each(zr, nc), Ee.resize.off(), Ee.scroll.off(), Ee.redraw.off(), Hr = [], to = [], br.state() === "pending" && sc()
		};
		tr(Ee.ready);
		sc();
		oc.exports = window.Webflow = Ee
	});
	var lt = E((fte, Mn) => {
		function YP(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Mn.exports = YP, Mn.exports.__esModule = !0, Mn.exports.default = Mn.exports
	});
	var Sr = E((pte, Ht) => {
		function io() {
			return Ht.exports = io = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			}, Ht.exports.__esModule = !0, Ht.exports.default = Ht.exports, io.apply(this, arguments)
		}
		Ht.exports = io, Ht.exports.__esModule = !0, Ht.exports.default = Ht.exports
	});
	var lc = E((dte, Rn) => {
		function QP(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		}
		Rn.exports = QP, Rn.exports.__esModule = !0, Rn.exports.default = Rn.exports
	});
	var ao = E((mte, uc) => {
		function ZP(e, t, r, n) {
			for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
				if (t(e[a], a, e)) return a;
			return -1
		}
		uc.exports = ZP
	});
	var cc = E((vte, hc) => {
		function JP() {
			this.__data__ = [], this.size = 0
		}
		hc.exports = JP
	});
	var Bi = E((gte, fc) => {
		function eC(e, t) {
			return e === t || e !== e && t !== t
		}
		fc.exports = eC
	});
	var Dn = E((yte, pc) => {
		var tC = Bi();

		function rC(e, t) {
			for (var r = e.length; r--;)
				if (tC(e[r][0], t)) return r;
			return -1
		}
		pc.exports = rC
	});
	var mc = E((Ete, dc) => {
		var nC = Dn(),
			iC = Array.prototype,
			aC = iC.splice;

		function sC(e) {
			var t = this.__data__,
				r = nC(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : aC.call(t, r, 1), --this.size, !0
		}
		dc.exports = sC
	});
	var gc = E((_te, vc) => {
		var oC = Dn();

		function lC(e) {
			var t = this.__data__,
				r = oC(t, e);
			return r < 0 ? void 0 : t[r][1]
		}
		vc.exports = lC
	});
	var Ec = E((bte, yc) => {
		var uC = Dn();

		function hC(e) {
			return uC(this.__data__, e) > -1
		}
		yc.exports = hC
	});
	var bc = E((Ste, _c) => {
		var cC = Dn();

		function fC(e, t) {
			var r = this.__data__,
				n = cC(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
		}
		_c.exports = fC
	});
	var Fn = E((Tte, Sc) => {
		var pC = cc(),
			dC = mc(),
			mC = gc(),
			vC = Ec(),
			gC = bc();

		function jr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		jr.prototype.clear = pC;
		jr.prototype.delete = dC;
		jr.prototype.get = mC;
		jr.prototype.has = vC;
		jr.prototype.set = gC;
		Sc.exports = jr
	});
	var Ic = E((Ite, Tc) => {
		var yC = Fn();

		function EC() {
			this.__data__ = new yC, this.size = 0
		}
		Tc.exports = EC
	});
	var Ac = E((xte, xc) => {
		function _C(e) {
			var t = this.__data__,
				r = t.delete(e);
			return this.size = t.size, r
		}
		xc.exports = _C
	});
	var Cc = E((Ate, Pc) => {
		function bC(e) {
			return this.__data__.get(e)
		}
		Pc.exports = bC
	});
	var Oc = E((Pte, wc) => {
		function SC(e) {
			return this.__data__.has(e)
		}
		wc.exports = SC
	});
	var so = E((Cte, Mc) => {
		var TC = typeof global == "object" && global && global.Object === Object && global;
		Mc.exports = TC
	});
	var St = E((wte, Rc) => {
		var IC = so(),
			xC = typeof self == "object" && self && self.Object === Object && self,
			AC = IC || xC || Function("return this")();
		Rc.exports = AC
	});
	var Wr = E((Ote, Dc) => {
		var PC = St(),
			CC = PC.Symbol;
		Dc.exports = CC
	});
	var kc = E((Mte, Lc) => {
		var Fc = Wr(),
			qc = Object.prototype,
			wC = qc.hasOwnProperty,
			OC = qc.toString,
			qn = Fc ? Fc.toStringTag : void 0;

		function MC(e) {
			var t = wC.call(e, qn),
				r = e[qn];
			try {
				e[qn] = void 0;
				var n = !0
			} catch {}
			var i = OC.call(e);
			return n && (t ? e[qn] = r : delete e[qn]), i
		}
		Lc.exports = MC
	});
	var Bc = E((Rte, Nc) => {
		var RC = Object.prototype,
			DC = RC.toString;

		function FC(e) {
			return DC.call(e)
		}
		Nc.exports = FC
	});
	var rr = E((Dte, zc) => {
		var Vc = Wr(),
			qC = kc(),
			LC = Bc(),
			kC = "[object Null]",
			NC = "[object Undefined]",
			Gc = Vc ? Vc.toStringTag : void 0;

		function BC(e) {
			return e == null ? e === void 0 ? NC : kC : Gc && Gc in Object(e) ? qC(e) : LC(e)
		}
		zc.exports = BC
	});
	var Rt = E((Fte, Hc) => {
		function VC(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function")
		}
		Hc.exports = VC
	});
	var oo = E((qte, jc) => {
		var GC = rr(),
			zC = Rt(),
			HC = "[object AsyncFunction]",
			jC = "[object Function]",
			WC = "[object GeneratorFunction]",
			UC = "[object Proxy]";

		function XC(e) {
			if (!zC(e)) return !1;
			var t = GC(e);
			return t == jC || t == WC || t == HC || t == UC
		}
		jc.exports = XC
	});
	var Uc = E((Lte, Wc) => {
		var $C = St(),
			KC = $C["__core-js_shared__"];
		Wc.exports = KC
	});
	var Kc = E((kte, $c) => {
		var lo = Uc(),
			Xc = function() {
				var e = /[^.]+$/.exec(lo && lo.keys && lo.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : ""
			}();

		function YC(e) {
			return !!Xc && Xc in e
		}
		$c.exports = YC
	});
	var uo = E((Nte, Yc) => {
		var QC = Function.prototype,
			ZC = QC.toString;

		function JC(e) {
			if (e != null) {
				try {
					return ZC.call(e)
				} catch {}
				try {
					return e + ""
				} catch {}
			}
			return ""
		}
		Yc.exports = JC
	});
	var Zc = E((Bte, Qc) => {
		var ew = oo(),
			tw = Kc(),
			rw = Rt(),
			nw = uo(),
			iw = /[\\^$.*+?()[\]{}|]/g,
			aw = /^\[object .+?Constructor\]$/,
			sw = Function.prototype,
			ow = Object.prototype,
			lw = sw.toString,
			uw = ow.hasOwnProperty,
			hw = RegExp("^" + lw.call(uw).replace(iw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

		function cw(e) {
			if (!rw(e) || tw(e)) return !1;
			var t = ew(e) ? hw : aw;
			return t.test(nw(e))
		}
		Qc.exports = cw
	});
	var ef = E((Vte, Jc) => {
		function fw(e, t) {
			return e?.[t]
		}
		Jc.exports = fw
	});
	var nr = E((Gte, tf) => {
		var pw = Zc(),
			dw = ef();

		function mw(e, t) {
			var r = dw(e, t);
			return pw(r) ? r : void 0
		}
		tf.exports = mw
	});
	var Vi = E((zte, rf) => {
		var vw = nr(),
			gw = St(),
			yw = vw(gw, "Map");
		rf.exports = yw
	});
	var Ln = E((Hte, nf) => {
		var Ew = nr(),
			_w = Ew(Object, "create");
		nf.exports = _w
	});
	var of = E((jte, sf) => {
		var af = Ln();

		function bw() {
			this.__data__ = af ? af(null) : {}, this.size = 0
		}
		sf.exports = bw
	});
	var uf = E((Wte, lf) => {
		function Sw(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
		lf.exports = Sw
	});
	var cf = E((Ute, hf) => {
		var Tw = Ln(),
			Iw = "__lodash_hash_undefined__",
			xw = Object.prototype,
			Aw = xw.hasOwnProperty;

		function Pw(e) {
			var t = this.__data__;
			if (Tw) {
				var r = t[e];
				return r === Iw ? void 0 : r
			}
			return Aw.call(t, e) ? t[e] : void 0
		}
		hf.exports = Pw
	});
	var pf = E((Xte, ff) => {
		var Cw = Ln(),
			ww = Object.prototype,
			Ow = ww.hasOwnProperty;

		function Mw(e) {
			var t = this.__data__;
			return Cw ? t[e] !== void 0 : Ow.call(t, e)
		}
		ff.exports = Mw
	});
	var mf = E(($te, df) => {
		var Rw = Ln(),
			Dw = "__lodash_hash_undefined__";

		function Fw(e, t) {
			var r = this.__data__;
			return this.size += this.has(e) ? 0 : 1, r[e] = Rw && t === void 0 ? Dw : t, this
		}
		df.exports = Fw
	});
	var gf = E((Kte, vf) => {
		var qw = of(),
			Lw = uf(),
			kw = cf(),
			Nw = pf(),
			Bw = mf();

		function Ur(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		Ur.prototype.clear = qw;
		Ur.prototype.delete = Lw;
		Ur.prototype.get = kw;
		Ur.prototype.has = Nw;
		Ur.prototype.set = Bw;
		vf.exports = Ur
	});
	var _f = E((Yte, Ef) => {
		var yf = gf(),
			Vw = Fn(),
			Gw = Vi();

		function zw() {
			this.size = 0, this.__data__ = {
				hash: new yf,
				map: new(Gw || Vw),
				string: new yf
			}
		}
		Ef.exports = zw
	});
	var Sf = E((Qte, bf) => {
		function Hw(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
		}
		bf.exports = Hw
	});
	var kn = E((Zte, Tf) => {
		var jw = Sf();

		function Ww(e, t) {
			var r = e.__data__;
			return jw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
		}
		Tf.exports = Ww
	});
	var xf = E((Jte, If) => {
		var Uw = kn();

		function Xw(e) {
			var t = Uw(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
		If.exports = Xw
	});
	var Pf = E((ere, Af) => {
		var $w = kn();

		function Kw(e) {
			return $w(this, e).get(e)
		}
		Af.exports = Kw
	});
	var wf = E((tre, Cf) => {
		var Yw = kn();

		function Qw(e) {
			return Yw(this, e).has(e)
		}
		Cf.exports = Qw
	});
	var Mf = E((rre, Of) => {
		var Zw = kn();

		function Jw(e, t) {
			var r = Zw(this, e),
				n = r.size;
			return r.set(e, t), this.size += r.size == n ? 0 : 1, this
		}
		Of.exports = Jw
	});
	var Gi = E((nre, Rf) => {
		var eO = _f(),
			tO = xf(),
			rO = Pf(),
			nO = wf(),
			iO = Mf();

		function Xr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		Xr.prototype.clear = eO;
		Xr.prototype.delete = tO;
		Xr.prototype.get = rO;
		Xr.prototype.has = nO;
		Xr.prototype.set = iO;
		Rf.exports = Xr
	});
	var Ff = E((ire, Df) => {
		var aO = Fn(),
			sO = Vi(),
			oO = Gi(),
			lO = 200;

		function uO(e, t) {
			var r = this.__data__;
			if (r instanceof aO) {
				var n = r.__data__;
				if (!sO || n.length < lO - 1) return n.push([e, t]), this.size = ++r.size, this;
				r = this.__data__ = new oO(n)
			}
			return r.set(e, t), this.size = r.size, this
		}
		Df.exports = uO
	});
	var ho = E((are, qf) => {
		var hO = Fn(),
			cO = Ic(),
			fO = Ac(),
			pO = Cc(),
			dO = Oc(),
			mO = Ff();

		function $r(e) {
			var t = this.__data__ = new hO(e);
			this.size = t.size
		}
		$r.prototype.clear = cO;
		$r.prototype.delete = fO;
		$r.prototype.get = pO;
		$r.prototype.has = dO;
		$r.prototype.set = mO;
		qf.exports = $r
	});
	var kf = E((sre, Lf) => {
		var vO = "__lodash_hash_undefined__";

		function gO(e) {
			return this.__data__.set(e, vO), this
		}
		Lf.exports = gO
	});
	var Bf = E((ore, Nf) => {
		function yO(e) {
			return this.__data__.has(e)
		}
		Nf.exports = yO
	});
	var Gf = E((lre, Vf) => {
		var EO = Gi(),
			_O = kf(),
			bO = Bf();

		function zi(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new EO; ++t < r;) this.add(e[t])
		}
		zi.prototype.add = zi.prototype.push = _O;
		zi.prototype.has = bO;
		Vf.exports = zi
	});
	var Hf = E((ure, zf) => {
		function SO(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
				if (t(e[r], r, e)) return !0;
			return !1
		}
		zf.exports = SO
	});
	var Wf = E((hre, jf) => {
		function TO(e, t) {
			return e.has(t)
		}
		jf.exports = TO
	});
	var co = E((cre, Uf) => {
		var IO = Gf(),
			xO = Hf(),
			AO = Wf(),
			PO = 1,
			CO = 2;

		function wO(e, t, r, n, i, a) {
			var s = r & PO,
				o = e.length,
				l = t.length;
			if (o != l && !(s && l > o)) return !1;
			var f = a.get(e),
				u = a.get(t);
			if (f && u) return f == t && u == e;
			var c = -1,
				v = !0,
				d = r & CO ? new IO : void 0;
			for (a.set(e, t), a.set(t, e); ++c < o;) {
				var p = e[c],
					m = t[c];
				if (n) var h = s ? n(m, p, c, t, e, a) : n(p, m, c, e, t, a);
				if (h !== void 0) {
					if (h) continue;
					v = !1;
					break
				}
				if (d) {
					if (!xO(t, function(g, y) {
							if (!AO(d, y) && (p === g || i(p, g, r, n, a))) return d.push(y)
						})) {
						v = !1;
						break
					}
				} else if (!(p === m || i(p, m, r, n, a))) {
					v = !1;
					break
				}
			}
			return a.delete(e), a.delete(t), v
		}
		Uf.exports = wO
	});
	var $f = E((fre, Xf) => {
		var OO = St(),
			MO = OO.Uint8Array;
		Xf.exports = MO
	});
	var Yf = E((pre, Kf) => {
		function RO(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n, i) {
				r[++t] = [i, n]
			}), r
		}
		Kf.exports = RO
	});
	var Zf = E((dre, Qf) => {
		function DO(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n) {
				r[++t] = n
			}), r
		}
		Qf.exports = DO
	});
	var np = E((mre, rp) => {
		var Jf = Wr(),
			ep = $f(),
			FO = Bi(),
			qO = co(),
			LO = Yf(),
			kO = Zf(),
			NO = 1,
			BO = 2,
			VO = "[object Boolean]",
			GO = "[object Date]",
			zO = "[object Error]",
			HO = "[object Map]",
			jO = "[object Number]",
			WO = "[object RegExp]",
			UO = "[object Set]",
			XO = "[object String]",
			$O = "[object Symbol]",
			KO = "[object ArrayBuffer]",
			YO = "[object DataView]",
			tp = Jf ? Jf.prototype : void 0,
			fo = tp ? tp.valueOf : void 0;

		function QO(e, t, r, n, i, a, s) {
			switch (r) {
				case YO:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case KO:
					return !(e.byteLength != t.byteLength || !a(new ep(e), new ep(t)));
				case VO:
				case GO:
				case jO:
					return FO(+e, +t);
				case zO:
					return e.name == t.name && e.message == t.message;
				case WO:
				case XO:
					return e == t + "";
				case HO:
					var o = LO;
				case UO:
					var l = n & NO;
					if (o || (o = kO), e.size != t.size && !l) return !1;
					var f = s.get(e);
					if (f) return f == t;
					n |= BO, s.set(e, t);
					var u = qO(o(e), o(t), n, i, a, s);
					return s.delete(e), u;
				case $O:
					if (fo) return fo.call(e) == fo.call(t)
			}
			return !1
		}
		rp.exports = QO
	});
	var Hi = E((vre, ip) => {
		function ZO(e, t) {
			for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
			return e
		}
		ip.exports = ZO
	});
	var Ve = E((gre, ap) => {
		var JO = Array.isArray;
		ap.exports = JO
	});
	var po = E((yre, sp) => {
		var eM = Hi(),
			tM = Ve();

		function rM(e, t, r) {
			var n = t(e);
			return tM(e) ? n : eM(n, r(e))
		}
		sp.exports = rM
	});
	var lp = E((Ere, op) => {
		function nM(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n;) {
				var s = e[r];
				t(s, r, e) && (a[i++] = s)
			}
			return a
		}
		op.exports = nM
	});
	var mo = E((_re, up) => {
		function iM() {
			return []
		}
		up.exports = iM
	});
	var vo = E((bre, cp) => {
		var aM = lp(),
			sM = mo(),
			oM = Object.prototype,
			lM = oM.propertyIsEnumerable,
			hp = Object.getOwnPropertySymbols,
			uM = hp ? function(e) {
				return e == null ? [] : (e = Object(e), aM(hp(e), function(t) {
					return lM.call(e, t)
				}))
			} : sM;
		cp.exports = uM
	});
	var pp = E((Sre, fp) => {
		function hM(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}
		fp.exports = hM
	});
	var jt = E((Tre, dp) => {
		function cM(e) {
			return e != null && typeof e == "object"
		}
		dp.exports = cM
	});
	var vp = E((Ire, mp) => {
		var fM = rr(),
			pM = jt(),
			dM = "[object Arguments]";

		function mM(e) {
			return pM(e) && fM(e) == dM
		}
		mp.exports = mM
	});
	var Nn = E((xre, Ep) => {
		var gp = vp(),
			vM = jt(),
			yp = Object.prototype,
			gM = yp.hasOwnProperty,
			yM = yp.propertyIsEnumerable,
			EM = gp(function() {
				return arguments
			}()) ? gp : function(e) {
				return vM(e) && gM.call(e, "callee") && !yM.call(e, "callee")
			};
		Ep.exports = EM
	});
	var bp = E((Are, _p) => {
		function _M() {
			return !1
		}
		_p.exports = _M
	});
	var ji = E((Bn, Kr) => {
		var bM = St(),
			SM = bp(),
			Ip = typeof Bn == "object" && Bn && !Bn.nodeType && Bn,
			Sp = Ip && typeof Kr == "object" && Kr && !Kr.nodeType && Kr,
			TM = Sp && Sp.exports === Ip,
			Tp = TM ? bM.Buffer : void 0,
			IM = Tp ? Tp.isBuffer : void 0,
			xM = IM || SM;
		Kr.exports = xM
	});
	var Wi = E((Pre, xp) => {
		var AM = 9007199254740991,
			PM = /^(?:0|[1-9]\d*)$/;

		function CM(e, t) {
			var r = typeof e;
			return t = t ?? AM, !!t && (r == "number" || r != "symbol" && PM.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
		xp.exports = CM
	});
	var Ui = E((Cre, Ap) => {
		var wM = 9007199254740991;

		function OM(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wM
		}
		Ap.exports = OM
	});
	var Cp = E((wre, Pp) => {
		var MM = rr(),
			RM = Ui(),
			DM = jt(),
			FM = "[object Arguments]",
			qM = "[object Array]",
			LM = "[object Boolean]",
			kM = "[object Date]",
			NM = "[object Error]",
			BM = "[object Function]",
			VM = "[object Map]",
			GM = "[object Number]",
			zM = "[object Object]",
			HM = "[object RegExp]",
			jM = "[object Set]",
			WM = "[object String]",
			UM = "[object WeakMap]",
			XM = "[object ArrayBuffer]",
			$M = "[object DataView]",
			KM = "[object Float32Array]",
			YM = "[object Float64Array]",
			QM = "[object Int8Array]",
			ZM = "[object Int16Array]",
			JM = "[object Int32Array]",
			eR = "[object Uint8Array]",
			tR = "[object Uint8ClampedArray]",
			rR = "[object Uint16Array]",
			nR = "[object Uint32Array]",
			Se = {};
		Se[KM] = Se[YM] = Se[QM] = Se[ZM] = Se[JM] = Se[eR] = Se[tR] = Se[rR] = Se[nR] = !0;
		Se[FM] = Se[qM] = Se[XM] = Se[LM] = Se[$M] = Se[kM] = Se[NM] = Se[BM] = Se[VM] = Se[GM] = Se[zM] = Se[HM] = Se[jM] = Se[WM] = Se[UM] = !1;

		function iR(e) {
			return DM(e) && RM(e.length) && !!Se[MM(e)]
		}
		Pp.exports = iR
	});
	var Op = E((Ore, wp) => {
		function aR(e) {
			return function(t) {
				return e(t)
			}
		}
		wp.exports = aR
	});
	var Rp = E((Vn, Yr) => {
		var sR = so(),
			Mp = typeof Vn == "object" && Vn && !Vn.nodeType && Vn,
			Gn = Mp && typeof Yr == "object" && Yr && !Yr.nodeType && Yr,
			oR = Gn && Gn.exports === Mp,
			go = oR && sR.process,
			lR = function() {
				try {
					var e = Gn && Gn.require && Gn.require("util").types;
					return e || go && go.binding && go.binding("util")
				} catch {}
			}();
		Yr.exports = lR
	});
	var Xi = E((Mre, qp) => {
		var uR = Cp(),
			hR = Op(),
			Dp = Rp(),
			Fp = Dp && Dp.isTypedArray,
			cR = Fp ? hR(Fp) : uR;
		qp.exports = cR
	});
	var yo = E((Rre, Lp) => {
		var fR = pp(),
			pR = Nn(),
			dR = Ve(),
			mR = ji(),
			vR = Wi(),
			gR = Xi(),
			yR = Object.prototype,
			ER = yR.hasOwnProperty;

		function _R(e, t) {
			var r = dR(e),
				n = !r && pR(e),
				i = !r && !n && mR(e),
				a = !r && !n && !i && gR(e),
				s = r || n || i || a,
				o = s ? fR(e.length, String) : [],
				l = o.length;
			for (var f in e)(t || ER.call(e, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || vR(f, l))) && o.push(f);
			return o
		}
		Lp.exports = _R
	});
	var $i = E((Dre, kp) => {
		var bR = Object.prototype;

		function SR(e) {
			var t = e && e.constructor,
				r = typeof t == "function" && t.prototype || bR;
			return e === r
		}
		kp.exports = SR
	});
	var Eo = E((Fre, Np) => {
		function TR(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
		Np.exports = TR
	});
	var Vp = E((qre, Bp) => {
		var IR = Eo(),
			xR = IR(Object.keys, Object);
		Bp.exports = xR
	});
	var Ki = E((Lre, Gp) => {
		var AR = $i(),
			PR = Vp(),
			CR = Object.prototype,
			wR = CR.hasOwnProperty;

		function OR(e) {
			if (!AR(e)) return PR(e);
			var t = [];
			for (var r in Object(e)) wR.call(e, r) && r != "constructor" && t.push(r);
			return t
		}
		Gp.exports = OR
	});
	var Tr = E((kre, zp) => {
		var MR = oo(),
			RR = Ui();

		function DR(e) {
			return e != null && RR(e.length) && !MR(e)
		}
		zp.exports = DR
	});
	var zn = E((Nre, Hp) => {
		var FR = yo(),
			qR = Ki(),
			LR = Tr();

		function kR(e) {
			return LR(e) ? FR(e) : qR(e)
		}
		Hp.exports = kR
	});
	var Wp = E((Bre, jp) => {
		var NR = po(),
			BR = vo(),
			VR = zn();

		function GR(e) {
			return NR(e, VR, BR)
		}
		jp.exports = GR
	});
	var $p = E((Vre, Xp) => {
		var Up = Wp(),
			zR = 1,
			HR = Object.prototype,
			jR = HR.hasOwnProperty;

		function WR(e, t, r, n, i, a) {
			var s = r & zR,
				o = Up(e),
				l = o.length,
				f = Up(t),
				u = f.length;
			if (l != u && !s) return !1;
			for (var c = l; c--;) {
				var v = o[c];
				if (!(s ? v in t : jR.call(t, v))) return !1
			}
			var d = a.get(e),
				p = a.get(t);
			if (d && p) return d == t && p == e;
			var m = !0;
			a.set(e, t), a.set(t, e);
			for (var h = s; ++c < l;) {
				v = o[c];
				var g = e[v],
					y = t[v];
				if (n) var _ = s ? n(y, g, v, t, e, a) : n(g, y, v, e, t, a);
				if (!(_ === void 0 ? g === y || i(g, y, r, n, a) : _)) {
					m = !1;
					break
				}
				h || (h = v == "constructor")
			}
			if (m && !h) {
				var b = e.constructor,
					S = t.constructor;
				b != S && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof S == "function" && S instanceof S) && (m = !1)
			}
			return a.delete(e), a.delete(t), m
		}
		Xp.exports = WR
	});
	var Yp = E((Gre, Kp) => {
		var UR = nr(),
			XR = St(),
			$R = UR(XR, "DataView");
		Kp.exports = $R
	});
	var Zp = E((zre, Qp) => {
		var KR = nr(),
			YR = St(),
			QR = KR(YR, "Promise");
		Qp.exports = QR
	});
	var ed = E((Hre, Jp) => {
		var ZR = nr(),
			JR = St(),
			eD = ZR(JR, "Set");
		Jp.exports = eD
	});
	var _o = E((jre, td) => {
		var tD = nr(),
			rD = St(),
			nD = tD(rD, "WeakMap");
		td.exports = nD
	});
	var Yi = E((Wre, ld) => {
		var bo = Yp(),
			So = Vi(),
			To = Zp(),
			Io = ed(),
			xo = _o(),
			od = rr(),
			Qr = uo(),
			rd = "[object Map]",
			iD = "[object Object]",
			nd = "[object Promise]",
			id = "[object Set]",
			ad = "[object WeakMap]",
			sd = "[object DataView]",
			aD = Qr(bo),
			sD = Qr(So),
			oD = Qr(To),
			lD = Qr(Io),
			uD = Qr(xo),
			Ir = od;
		(bo && Ir(new bo(new ArrayBuffer(1))) != sd || So && Ir(new So) != rd || To && Ir(To.resolve()) != nd || Io && Ir(new Io) != id || xo && Ir(new xo) != ad) && (Ir = function(e) {
			var t = od(e),
				r = t == iD ? e.constructor : void 0,
				n = r ? Qr(r) : "";
			if (n) switch (n) {
				case aD:
					return sd;
				case sD:
					return rd;
				case oD:
					return nd;
				case lD:
					return id;
				case uD:
					return ad
			}
			return t
		});
		ld.exports = Ir
	});
	var vd = E((Ure, md) => {
		var Ao = ho(),
			hD = co(),
			cD = np(),
			fD = $p(),
			ud = Yi(),
			hd = Ve(),
			cd = ji(),
			pD = Xi(),
			dD = 1,
			fd = "[object Arguments]",
			pd = "[object Array]",
			Qi = "[object Object]",
			mD = Object.prototype,
			dd = mD.hasOwnProperty;

		function vD(e, t, r, n, i, a) {
			var s = hd(e),
				o = hd(t),
				l = s ? pd : ud(e),
				f = o ? pd : ud(t);
			l = l == fd ? Qi : l, f = f == fd ? Qi : f;
			var u = l == Qi,
				c = f == Qi,
				v = l == f;
			if (v && cd(e)) {
				if (!cd(t)) return !1;
				s = !0, u = !1
			}
			if (v && !u) return a || (a = new Ao), s || pD(e) ? hD(e, t, r, n, i, a) : cD(e, t, l, r, n, i, a);
			if (!(r & dD)) {
				var d = u && dd.call(e, "__wrapped__"),
					p = c && dd.call(t, "__wrapped__");
				if (d || p) {
					var m = d ? e.value() : e,
						h = p ? t.value() : t;
					return a || (a = new Ao), i(m, h, r, n, a)
				}
			}
			return v ? (a || (a = new Ao), fD(e, t, r, n, i, a)) : !1
		}
		md.exports = vD
	});
	var Po = E((Xre, Ed) => {
		var gD = vd(),
			gd = jt();

		function yd(e, t, r, n, i) {
			return e === t ? !0 : e == null || t == null || !gd(e) && !gd(t) ? e !== e && t !== t : gD(e, t, r, n, yd, i)
		}
		Ed.exports = yd
	});
	var bd = E(($re, _d) => {
		var yD = ho(),
			ED = Po(),
			_D = 1,
			bD = 2;

		function SD(e, t, r, n) {
			var i = r.length,
				a = i,
				s = !n;
			if (e == null) return !a;
			for (e = Object(e); i--;) {
				var o = r[i];
				if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1
			}
			for (; ++i < a;) {
				o = r[i];
				var l = o[0],
					f = e[l],
					u = o[1];
				if (s && o[2]) {
					if (f === void 0 && !(l in e)) return !1
				} else {
					var c = new yD;
					if (n) var v = n(f, u, l, e, t, c);
					if (!(v === void 0 ? ED(u, f, _D | bD, n, c) : v)) return !1
				}
			}
			return !0
		}
		_d.exports = SD
	});
	var Co = E((Kre, Sd) => {
		var TD = Rt();

		function ID(e) {
			return e === e && !TD(e)
		}
		Sd.exports = ID
	});
	var Id = E((Yre, Td) => {
		var xD = Co(),
			AD = zn();

		function PD(e) {
			for (var t = AD(e), r = t.length; r--;) {
				var n = t[r],
					i = e[n];
				t[r] = [n, i, xD(i)]
			}
			return t
		}
		Td.exports = PD
	});
	var wo = E((Qre, xd) => {
		function CD(e, t) {
			return function(r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
			}
		}
		xd.exports = CD
	});
	var Pd = E((Zre, Ad) => {
		var wD = bd(),
			OD = Id(),
			MD = wo();

		function RD(e) {
			var t = OD(e);
			return t.length == 1 && t[0][2] ? MD(t[0][0], t[0][1]) : function(r) {
				return r === e || wD(r, e, t)
			}
		}
		Ad.exports = RD
	});
	var Hn = E((Jre, Cd) => {
		var DD = rr(),
			FD = jt(),
			qD = "[object Symbol]";

		function LD(e) {
			return typeof e == "symbol" || FD(e) && DD(e) == qD
		}
		Cd.exports = LD
	});
	var Zi = E((ene, wd) => {
		var kD = Ve(),
			ND = Hn(),
			BD = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			VD = /^\w*$/;

		function GD(e, t) {
			if (kD(e)) return !1;
			var r = typeof e;
			return r == "number" || r == "symbol" || r == "boolean" || e == null || ND(e) ? !0 : VD.test(e) || !BD.test(e) || t != null && e in Object(t)
		}
		wd.exports = GD
	});
	var Rd = E((tne, Md) => {
		var Od = Gi(),
			zD = "Expected a function";

		function Oo(e, t) {
			if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(zD);
			var r = function() {
				var n = arguments,
					i = t ? t.apply(this, n) : n[0],
					a = r.cache;
				if (a.has(i)) return a.get(i);
				var s = e.apply(this, n);
				return r.cache = a.set(i, s) || a, s
			};
			return r.cache = new(Oo.Cache || Od), r
		}
		Oo.Cache = Od;
		Md.exports = Oo
	});
	var Fd = E((rne, Dd) => {
		var HD = Rd(),
			jD = 500;

		function WD(e) {
			var t = HD(e, function(n) {
					return r.size === jD && r.clear(), n
				}),
				r = t.cache;
			return t
		}
		Dd.exports = WD
	});
	var Ld = E((nne, qd) => {
		var UD = Fd(),
			XD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			$D = /\\(\\)?/g,
			KD = UD(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(XD, function(r, n, i, a) {
					t.push(i ? a.replace($D, "$1") : n || r)
				}), t
			});
		qd.exports = KD
	});
	var Mo = E((ine, kd) => {
		function YD(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
			return i
		}
		kd.exports = YD
	});
	var Hd = E((ane, zd) => {
		var Nd = Wr(),
			QD = Mo(),
			ZD = Ve(),
			JD = Hn(),
			eF = 1 / 0,
			Bd = Nd ? Nd.prototype : void 0,
			Vd = Bd ? Bd.toString : void 0;

		function Gd(e) {
			if (typeof e == "string") return e;
			if (ZD(e)) return QD(e, Gd) + "";
			if (JD(e)) return Vd ? Vd.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -eF ? "-0" : t
		}
		zd.exports = Gd
	});
	var Wd = E((sne, jd) => {
		var tF = Hd();

		function rF(e) {
			return e == null ? "" : tF(e)
		}
		jd.exports = rF
	});
	var jn = E((one, Ud) => {
		var nF = Ve(),
			iF = Zi(),
			aF = Ld(),
			sF = Wd();

		function oF(e, t) {
			return nF(e) ? e : iF(e, t) ? [e] : aF(sF(e))
		}
		Ud.exports = oF
	});
	var Zr = E((lne, Xd) => {
		var lF = Hn(),
			uF = 1 / 0;

		function hF(e) {
			if (typeof e == "string" || lF(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -uF ? "-0" : t
		}
		Xd.exports = hF
	});
	var Ji = E((une, $d) => {
		var cF = jn(),
			fF = Zr();

		function pF(e, t) {
			t = cF(t, e);
			for (var r = 0, n = t.length; e != null && r < n;) e = e[fF(t[r++])];
			return r && r == n ? e : void 0
		}
		$d.exports = pF
	});
	var ea = E((hne, Kd) => {
		var dF = Ji();

		function mF(e, t, r) {
			var n = e == null ? void 0 : dF(e, t);
			return n === void 0 ? r : n
		}
		Kd.exports = mF
	});
	var Qd = E((cne, Yd) => {
		function vF(e, t) {
			return e != null && t in Object(e)
		}
		Yd.exports = vF
	});
	var Jd = E((fne, Zd) => {
		var gF = jn(),
			yF = Nn(),
			EF = Ve(),
			_F = Wi(),
			bF = Ui(),
			SF = Zr();

		function TF(e, t, r) {
			t = gF(t, e);
			for (var n = -1, i = t.length, a = !1; ++n < i;) {
				var s = SF(t[n]);
				if (!(a = e != null && r(e, s))) break;
				e = e[s]
			}
			return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && bF(i) && _F(s, i) && (EF(e) || yF(e)))
		}
		Zd.exports = TF
	});
	var tm = E((pne, em) => {
		var IF = Qd(),
			xF = Jd();

		function AF(e, t) {
			return e != null && xF(e, t, IF)
		}
		em.exports = AF
	});
	var nm = E((dne, rm) => {
		var PF = Po(),
			CF = ea(),
			wF = tm(),
			OF = Zi(),
			MF = Co(),
			RF = wo(),
			DF = Zr(),
			FF = 1,
			qF = 2;

		function LF(e, t) {
			return OF(e) && MF(t) ? RF(DF(e), t) : function(r) {
				var n = CF(r, e);
				return n === void 0 && n === t ? wF(r, e) : PF(t, n, FF | qF)
			}
		}
		rm.exports = LF
	});
	var ta = E((mne, im) => {
		function kF(e) {
			return e
		}
		im.exports = kF
	});
	var Ro = E((vne, am) => {
		function NF(e) {
			return function(t) {
				return t?.[e]
			}
		}
		am.exports = NF
	});
	var om = E((gne, sm) => {
		var BF = Ji();

		function VF(e) {
			return function(t) {
				return BF(t, e)
			}
		}
		sm.exports = VF
	});
	var um = E((yne, lm) => {
		var GF = Ro(),
			zF = om(),
			HF = Zi(),
			jF = Zr();

		function WF(e) {
			return HF(e) ? GF(jF(e)) : zF(e)
		}
		lm.exports = WF
	});
	var ir = E((Ene, hm) => {
		var UF = Pd(),
			XF = nm(),
			$F = ta(),
			KF = Ve(),
			YF = um();

		function QF(e) {
			return typeof e == "function" ? e : e == null ? $F : typeof e == "object" ? KF(e) ? XF(e[0], e[1]) : UF(e) : YF(e)
		}
		hm.exports = QF
	});
	var fm = E((_ne, cm) => {
		var ZF = /\s/;

		function JF(e) {
			for (var t = e.length; t-- && ZF.test(e.charAt(t)););
			return t
		}
		cm.exports = JF
	});
	var dm = E((bne, pm) => {
		var eq = fm(),
			tq = /^\s+/;

		function rq(e) {
			return e && e.slice(0, eq(e) + 1).replace(tq, "")
		}
		pm.exports = rq
	});
	var ra = E((Sne, gm) => {
		var nq = dm(),
			mm = Rt(),
			iq = Hn(),
			vm = 0 / 0,
			aq = /^[-+]0x[0-9a-f]+$/i,
			sq = /^0b[01]+$/i,
			oq = /^0o[0-7]+$/i,
			lq = parseInt;

		function uq(e) {
			if (typeof e == "number") return e;
			if (iq(e)) return vm;
			if (mm(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = mm(t) ? t + "" : t
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = nq(e);
			var r = sq.test(e);
			return r || oq.test(e) ? lq(e.slice(2), r ? 2 : 8) : aq.test(e) ? vm : +e
		}
		gm.exports = uq
	});
	var _m = E((Tne, Em) => {
		var hq = ra(),
			ym = 1 / 0,
			cq = 17976931348623157e292;

		function fq(e) {
			if (!e) return e === 0 ? e : 0;
			if (e = hq(e), e === ym || e === -ym) {
				var t = e < 0 ? -1 : 1;
				return t * cq
			}
			return e === e ? e : 0
		}
		Em.exports = fq
	});
	var Do = E((Ine, bm) => {
		var pq = _m();

		function dq(e) {
			var t = pq(e),
				r = t % 1;
			return t === t ? r ? t - r : t : 0
		}
		bm.exports = dq
	});
	var Fo = E((xne, Sm) => {
		var mq = ao(),
			vq = ir(),
			gq = Do(),
			yq = Math.max;

		function Eq(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = r == null ? 0 : gq(r);
			return i < 0 && (i = yq(n + i, 0)), mq(e, vq(t, 3), i)
		}
		Sm.exports = Eq
	});
	var oe = E((Ane, Tm) => {
		var na = function(e) {
			return e && e.Math == Math && e
		};
		Tm.exports = na(typeof globalThis == "object" && globalThis) || na(typeof window == "object" && window) || na(typeof self == "object" && self) || na(typeof global == "object" && global) || function() {
			return this
		}() || Function("return this")()
	});
	var Ne = E((Pne, Im) => {
		Im.exports = function(e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	});
	var Tt = E((Cne, xm) => {
		var _q = Ne();
		xm.exports = !_q(function() {
			return Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1] != 7
		})
	});
	var ut = E((wne, Am) => {
		var Wn = Function.prototype.call;
		Am.exports = Wn.bind ? Wn.bind(Wn) : function() {
			return Wn.apply(Wn, arguments)
		}
	});
	var Om = E(wm => {
		"use strict";
		var Pm = {}.propertyIsEnumerable,
			Cm = Object.getOwnPropertyDescriptor,
			bq = Cm && !Pm.call({
				1: 2
			}, 1);
		wm.f = bq ? function(t) {
			var r = Cm(this, t);
			return !!r && r.enumerable
		} : Pm
	});
	var Un = E((Mne, Mm) => {
		Mm.exports = function(e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t
			}
		}
	});
	var Te = E((Rne, Dm) => {
		var Rm = Function.prototype,
			qo = Rm.bind,
			Lo = Rm.call,
			Sq = qo && qo.bind(Lo);
		Dm.exports = qo ? function(e) {
			return e && Sq(Lo, e)
		} : function(e) {
			return e && function() {
				return Lo.apply(e, arguments)
			}
		}
	});
	var Jr = E((Dne, qm) => {
		var Fm = Te(),
			Tq = Fm({}.toString),
			Iq = Fm("".slice);
		qm.exports = function(e) {
			return Iq(Tq(e), 8, -1)
		}
	});
	var xr = E((Fne, Lm) => {
		var xq = oe(),
			Aq = Te(),
			Pq = Ne(),
			Cq = Jr(),
			ko = xq.Object,
			wq = Aq("".split);
		Lm.exports = Pq(function() {
			return !ko("z").propertyIsEnumerable(0)
		}) ? function(e) {
			return Cq(e) == "String" ? wq(e, "") : ko(e)
		} : ko
	});
	var ia = E((qne, km) => {
		var Oq = oe(),
			Mq = Oq.TypeError;
		km.exports = function(e) {
			if (e == null) throw Mq("Can't call method on " + e);
			return e
		}
	});
	var Dt = E((Lne, Nm) => {
		var Rq = xr(),
			Dq = ia();
		Nm.exports = function(e) {
			return Rq(Dq(e))
		}
	});
	var Ce = E((kne, Bm) => {
		Bm.exports = function(e) {
			return typeof e == "function"
		}
	});
	var Ye = E((Nne, Vm) => {
		var Fq = Ce();
		Vm.exports = function(e) {
			return typeof e == "object" ? e !== null : Fq(e)
		}
	});
	var ht = E((Bne, Gm) => {
		var No = oe(),
			qq = Ce(),
			Lq = function(e) {
				return qq(e) ? e : void 0
			};
		Gm.exports = function(e, t) {
			return arguments.length < 2 ? Lq(No[e]) : No[e] && No[e][t]
		}
	});
	var aa = E((Vne, zm) => {
		var kq = Te();
		zm.exports = kq({}.isPrototypeOf)
	});
	var ar = E((Gne, Hm) => {
		var Nq = ht();
		Hm.exports = Nq("navigator", "userAgent") || ""
	});
	var sr = E((zne, Km) => {
		var $m = oe(),
			Bo = ar(),
			jm = $m.process,
			Wm = $m.Deno,
			Um = jm && jm.versions || Wm && Wm.version,
			Xm = Um && Um.v8,
			It, sa;
		Xm && (It = Xm.split("."), sa = It[0] > 0 && It[0] < 4 ? 1 : +(It[0] + It[1]));
		!sa && Bo && (It = Bo.match(/Edge\/(\d+)/), (!It || It[1] >= 74) && (It = Bo.match(/Chrome\/(\d+)/), It && (sa = +It[1])));
		Km.exports = sa
	});
	var Vo = E((Hne, Qm) => {
		var Ym = sr(),
			Bq = Ne();
		Qm.exports = !!Object.getOwnPropertySymbols && !Bq(function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Ym && Ym < 41
		})
	});
	var Go = E((jne, Zm) => {
		var Vq = Vo();
		Zm.exports = Vq && !Symbol.sham && typeof Symbol.iterator == "symbol"
	});
	var zo = E((Wne, Jm) => {
		var Gq = oe(),
			zq = ht(),
			Hq = Ce(),
			jq = aa(),
			Wq = Go(),
			Uq = Gq.Object;
		Jm.exports = Wq ? function(e) {
			return typeof e == "symbol"
		} : function(e) {
			var t = zq("Symbol");
			return Hq(t) && jq(t.prototype, Uq(e))
		}
	});
	var Xn = E((Une, ev) => {
		var Xq = oe(),
			$q = Xq.String;
		ev.exports = function(e) {
			try {
				return $q(e)
			} catch {
				return "Object"
			}
		}
	});
	var xt = E((Xne, tv) => {
		var Kq = oe(),
			Yq = Ce(),
			Qq = Xn(),
			Zq = Kq.TypeError;
		tv.exports = function(e) {
			if (Yq(e)) return e;
			throw Zq(Qq(e) + " is not a function")
		}
	});
	var or = E(($ne, rv) => {
		var Jq = xt();
		rv.exports = function(e, t) {
			var r = e[t];
			return r == null ? void 0 : Jq(r)
		}
	});
	var iv = E((Kne, nv) => {
		var e2 = oe(),
			Ho = ut(),
			jo = Ce(),
			Wo = Ye(),
			t2 = e2.TypeError;
		nv.exports = function(e, t) {
			var r, n;
			if (t === "string" && jo(r = e.toString) && !Wo(n = Ho(r, e)) || jo(r = e.valueOf) && !Wo(n = Ho(r, e)) || t !== "string" && jo(r = e.toString) && !Wo(n = Ho(r, e))) return n;
			throw t2("Can't convert object to primitive value")
		}
	});
	var en = E((Yne, av) => {
		av.exports = !1
	});
	var oa = E((Qne, ov) => {
		var sv = oe(),
			r2 = Object.defineProperty;
		ov.exports = function(e, t) {
			try {
				r2(sv, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch {
				sv[e] = t
			}
			return t
		}
	});
	var $n = E((Zne, uv) => {
		var n2 = oe(),
			i2 = oa(),
			lv = "__core-js_shared__",
			a2 = n2[lv] || i2(lv, {});
		uv.exports = a2
	});
	var Uo = E((Jne, cv) => {
		var s2 = en(),
			hv = $n();
		(cv.exports = function(e, t) {
			return hv[e] || (hv[e] = t !== void 0 ? t : {})
		})("versions", []).push({
			version: "3.19.0",
			mode: s2 ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
		})
	});
	var Me = E((eie, fv) => {
		var o2 = oe(),
			l2 = ia(),
			u2 = o2.Object;
		fv.exports = function(e) {
			return u2(l2(e))
		}
	});
	var ct = E((tie, pv) => {
		var h2 = Te(),
			c2 = Me(),
			f2 = h2({}.hasOwnProperty);
		pv.exports = Object.hasOwn || function(t, r) {
			return f2(c2(t), r)
		}
	});
	var la = E((rie, dv) => {
		var p2 = Te(),
			d2 = 0,
			m2 = Math.random(),
			v2 = p2(1 .toString);
		dv.exports = function(e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + v2(++d2 + m2, 36)
		}
	});
	var we = E((nie, Ev) => {
		var g2 = oe(),
			y2 = Uo(),
			mv = ct(),
			E2 = la(),
			vv = Vo(),
			yv = Go(),
			tn = y2("wks"),
			Ar = g2.Symbol,
			gv = Ar && Ar.for,
			_2 = yv ? Ar : Ar && Ar.withoutSetter || E2;
		Ev.exports = function(e) {
			if (!mv(tn, e) || !(vv || typeof tn[e] == "string")) {
				var t = "Symbol." + e;
				vv && mv(Ar, e) ? tn[e] = Ar[e] : yv && gv ? tn[e] = gv(t) : tn[e] = _2(t)
			}
			return tn[e]
		}
	});
	var Tv = E((iie, Sv) => {
		var b2 = oe(),
			S2 = ut(),
			_v = Ye(),
			bv = zo(),
			T2 = or(),
			I2 = iv(),
			x2 = we(),
			A2 = b2.TypeError,
			P2 = x2("toPrimitive");
		Sv.exports = function(e, t) {
			if (!_v(e) || bv(e)) return e;
			var r = T2(e, P2),
				n;
			if (r) {
				if (t === void 0 && (t = "default"), n = S2(r, e, t), !_v(n) || bv(n)) return n;
				throw A2("Can't convert object to primitive value")
			}
			return t === void 0 && (t = "number"), I2(e, t)
		}
	});
	var Kn = E((aie, Iv) => {
		var C2 = Tv(),
			w2 = zo();
		Iv.exports = function(e) {
			var t = C2(e, "string");
			return w2(t) ? t : t + ""
		}
	});
	var ua = E((sie, Av) => {
		var O2 = oe(),
			xv = Ye(),
			Xo = O2.document,
			M2 = xv(Xo) && xv(Xo.createElement);
		Av.exports = function(e) {
			return M2 ? Xo.createElement(e) : {}
		}
	});
	var $o = E((oie, Pv) => {
		var R2 = Tt(),
			D2 = Ne(),
			F2 = ua();
		Pv.exports = !R2 && !D2(function() {
			return Object.defineProperty(F2("div"), "a", {
				get: function() {
					return 7
				}
			}).a != 7
		})
	});
	var ha = E(wv => {
		var q2 = Tt(),
			L2 = ut(),
			k2 = Om(),
			N2 = Un(),
			B2 = Dt(),
			V2 = Kn(),
			G2 = ct(),
			z2 = $o(),
			Cv = Object.getOwnPropertyDescriptor;
		wv.f = q2 ? Cv : function(t, r) {
			if (t = B2(t), r = V2(r), z2) try {
				return Cv(t, r)
			} catch {}
			if (G2(t, r)) return N2(!L2(k2.f, t, r), t[r])
		}
	});
	var Ue = E((uie, Mv) => {
		var Ov = oe(),
			H2 = Ye(),
			j2 = Ov.String,
			W2 = Ov.TypeError;
		Mv.exports = function(e) {
			if (H2(e)) return e;
			throw W2(j2(e) + " is not an object")
		}
	});
	var ft = E(Fv => {
		var U2 = oe(),
			X2 = Tt(),
			$2 = $o(),
			Rv = Ue(),
			K2 = Kn(),
			Y2 = U2.TypeError,
			Dv = Object.defineProperty;
		Fv.f = X2 ? Dv : function(t, r, n) {
			if (Rv(t), r = K2(r), Rv(n), $2) try {
				return Dv(t, r, n)
			} catch {}
			if ("get" in n || "set" in n) throw Y2("Accessors not supported");
			return "value" in n && (t[r] = n.value), t
		}
	});
	var Yn = E((cie, qv) => {
		var Q2 = Tt(),
			Z2 = ft(),
			J2 = Un();
		qv.exports = Q2 ? function(e, t, r) {
			return Z2.f(e, t, J2(1, r))
		} : function(e, t, r) {
			return e[t] = r, e
		}
	});
	var Qn = E((fie, Lv) => {
		var eL = Te(),
			tL = Ce(),
			Ko = $n(),
			rL = eL(Function.toString);
		tL(Ko.inspectSource) || (Ko.inspectSource = function(e) {
			return rL(e)
		});
		Lv.exports = Ko.inspectSource
	});
	var Bv = E((pie, Nv) => {
		var nL = oe(),
			iL = Ce(),
			aL = Qn(),
			kv = nL.WeakMap;
		Nv.exports = iL(kv) && /native code/.test(aL(kv))
	});
	var ca = E((die, Gv) => {
		var sL = Uo(),
			oL = la(),
			Vv = sL("keys");
		Gv.exports = function(e) {
			return Vv[e] || (Vv[e] = oL(e))
		}
	});
	var Zn = E((mie, zv) => {
		zv.exports = {}
	});
	var Cr = E((vie, Xv) => {
		var lL = Bv(),
			Uv = oe(),
			Yo = Te(),
			uL = Ye(),
			hL = Yn(),
			Qo = ct(),
			Zo = $n(),
			cL = ca(),
			fL = Zn(),
			Hv = "Object already initialized",
			el = Uv.TypeError,
			pL = Uv.WeakMap,
			fa, Jn, pa, dL = function(e) {
				return pa(e) ? Jn(e) : fa(e, {})
			},
			mL = function(e) {
				return function(t) {
					var r;
					if (!uL(t) || (r = Jn(t)).type !== e) throw el("Incompatible receiver, " + e + " required");
					return r
				}
			};
		lL || Zo.state ? (lr = Zo.state || (Zo.state = new pL), jv = Yo(lr.get), Jo = Yo(lr.has), Wv = Yo(lr.set), fa = function(e, t) {
			if (Jo(lr, e)) throw new el(Hv);
			return t.facade = e, Wv(lr, e, t), t
		}, Jn = function(e) {
			return jv(lr, e) || {}
		}, pa = function(e) {
			return Jo(lr, e)
		}) : (Pr = cL("state"), fL[Pr] = !0, fa = function(e, t) {
			if (Qo(e, Pr)) throw new el(Hv);
			return t.facade = e, hL(e, Pr, t), t
		}, Jn = function(e) {
			return Qo(e, Pr) ? e[Pr] : {}
		}, pa = function(e) {
			return Qo(e, Pr)
		});
		var lr, jv, Jo, Wv, Pr;
		Xv.exports = {
			set: fa,
			get: Jn,
			has: pa,
			enforce: dL,
			getterFor: mL
		}
	});
	var nl = E((gie, Kv) => {
		var tl = Tt(),
			vL = ct(),
			$v = Function.prototype,
			gL = tl && Object.getOwnPropertyDescriptor,
			rl = vL($v, "name"),
			yL = rl && function() {}.name === "something",
			EL = rl && (!tl || tl && gL($v, "name").configurable);
		Kv.exports = {
			EXISTS: rl,
			PROPER: yL,
			CONFIGURABLE: EL
		}
	});
	var Wt = E((yie, Jv) => {
		var _L = oe(),
			Yv = Ce(),
			bL = ct(),
			Qv = Yn(),
			SL = oa(),
			TL = Qn(),
			Zv = Cr(),
			IL = nl().CONFIGURABLE,
			xL = Zv.get,
			AL = Zv.enforce,
			PL = String(String).split("String");
		(Jv.exports = function(e, t, r, n) {
			var i = n ? !!n.unsafe : !1,
				a = n ? !!n.enumerable : !1,
				s = n ? !!n.noTargetGet : !1,
				o = n && n.name !== void 0 ? n.name : t,
				l;
			if (Yv(r) && (String(o).slice(0, 7) === "Symbol(" && (o = "[" + String(o).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!bL(r, "name") || IL && r.name !== o) && Qv(r, "name", o), l = AL(r), l.source || (l.source = PL.join(typeof o == "string" ? o : ""))), e === _L) {
				a ? e[t] = r : SL(t, r);
				return
			} else i ? !s && e[t] && (a = !0) : delete e[t];
			a ? e[t] = r : Qv(e, t, r)
		})(Function.prototype, "toString", function() {
			return Yv(this) && xL(this).source || TL(this)
		})
	});
	var ur = E((Eie, eg) => {
		var CL = Math.ceil,
			wL = Math.floor;
		eg.exports = function(e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? wL : CL)(t)
		}
	});
	var rn = E((_ie, tg) => {
		var OL = ur(),
			ML = Math.max,
			RL = Math.min;
		tg.exports = function(e, t) {
			var r = OL(e);
			return r < 0 ? ML(r + t, 0) : RL(r, t)
		}
	});
	var ng = E((bie, rg) => {
		var DL = ur(),
			FL = Math.min;
		rg.exports = function(e) {
			return e > 0 ? FL(DL(e), 9007199254740991) : 0
		}
	});
	var Ae = E((Sie, ig) => {
		var qL = ng();
		ig.exports = function(e) {
			return qL(e.length)
		}
	});
	var da = E((Tie, sg) => {
		var LL = Dt(),
			kL = rn(),
			NL = Ae(),
			ag = function(e) {
				return function(t, r, n) {
					var i = LL(t),
						a = NL(i),
						s = kL(n, a),
						o;
					if (e && r != r) {
						for (; a > s;)
							if (o = i[s++], o != o) return !0
					} else
						for (; a > s; s++)
							if ((e || s in i) && i[s] === r) return e || s || 0;
					return !e && -1
				}
			};
		sg.exports = {
			includes: ag(!0),
			indexOf: ag(!1)
		}
	});
	var al = E((Iie, lg) => {
		var BL = Te(),
			il = ct(),
			VL = Dt(),
			GL = da().indexOf,
			zL = Zn(),
			og = BL([].push);
		lg.exports = function(e, t) {
			var r = VL(e),
				n = 0,
				i = [],
				a;
			for (a in r) !il(zL, a) && il(r, a) && og(i, a);
			for (; t.length > n;) il(r, a = t[n++]) && (~GL(i, a) || og(i, a));
			return i
		}
	});
	var ma = E((xie, ug) => {
		ug.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	});
	var va = E(hg => {
		var HL = al(),
			jL = ma(),
			WL = jL.concat("length", "prototype");
		hg.f = Object.getOwnPropertyNames || function(t) {
			return HL(t, WL)
		}
	});
	var fg = E(cg => {
		cg.f = Object.getOwnPropertySymbols
	});
	var dg = E((Cie, pg) => {
		var UL = ht(),
			XL = Te(),
			$L = va(),
			KL = fg(),
			YL = Ue(),
			QL = XL([].concat);
		pg.exports = UL("Reflect", "ownKeys") || function(t) {
			var r = $L.f(YL(t)),
				n = KL.f;
			return n ? QL(r, n(t)) : r
		}
	});
	var vg = E((wie, mg) => {
		var ZL = ct(),
			JL = dg(),
			ek = ha(),
			tk = ft();
		mg.exports = function(e, t) {
			for (var r = JL(t), n = tk.f, i = ek.f, a = 0; a < r.length; a++) {
				var s = r[a];
				ZL(e, s) || n(e, s, i(t, s))
			}
		}
	});
	var ga = E((Oie, gg) => {
		var rk = Ne(),
			nk = Ce(),
			ik = /#|\.prototype\./,
			ei = function(e, t) {
				var r = sk[ak(e)];
				return r == lk ? !0 : r == ok ? !1 : nk(t) ? rk(t) : !!t
			},
			ak = ei.normalize = function(e) {
				return String(e).replace(ik, ".").toLowerCase()
			},
			sk = ei.data = {},
			ok = ei.NATIVE = "N",
			lk = ei.POLYFILL = "P";
		gg.exports = ei
	});
	var de = E((Mie, yg) => {
		var sl = oe(),
			uk = ha().f,
			hk = Yn(),
			ck = Wt(),
			fk = oa(),
			pk = vg(),
			dk = ga();
		yg.exports = function(e, t) {
			var r = e.target,
				n = e.global,
				i = e.stat,
				a, s, o, l, f, u;
			if (n ? s = sl : i ? s = sl[r] || fk(r, {}) : s = (sl[r] || {}).prototype, s)
				for (o in t) {
					if (f = t[o], e.noTargetGet ? (u = uk(s, o), l = u && u.value) : l = s[o], a = dk(n ? o : r + (i ? "." : "#") + o, e.forced), !a && l !== void 0) {
						if (typeof f == typeof l) continue;
						pk(f, l)
					}(e.sham || l && l.sham) && hk(f, "sham", !0), ck(s, o, f, e)
				}
		}
	});
	var At = E((Rie, bg) => {
		var Eg = Te(),
			mk = xt(),
			_g = Eg(Eg.bind);
		bg.exports = function(e, t) {
			return mk(e), t === void 0 ? e : _g ? _g(e, t) : function() {
				return e.apply(t, arguments)
			}
		}
	});
	var ol = E((Die, Tg) => {
		var vk = ut(),
			Sg = Ue(),
			gk = or();
		Tg.exports = function(e, t, r) {
			var n, i;
			Sg(e);
			try {
				if (n = gk(e, "return"), !n) {
					if (t === "throw") throw r;
					return r
				}
				n = vk(n, e)
			} catch (a) {
				i = !0, n = a
			}
			if (t === "throw") throw r;
			if (i) throw n;
			return Sg(n), r
		}
	});
	var xg = E((Fie, Ig) => {
		var yk = Ue(),
			Ek = ol();
		Ig.exports = function(e, t, r, n) {
			try {
				return n ? t(yk(r)[0], r[1]) : t(r)
			} catch (i) {
				Ek(e, "throw", i)
			}
		}
	});
	var nn = E((qie, Ag) => {
		Ag.exports = {}
	});
	var ll = E((Lie, Pg) => {
		var _k = we(),
			bk = nn(),
			Sk = _k("iterator"),
			Tk = Array.prototype;
		Pg.exports = function(e) {
			return e !== void 0 && (bk.Array === e || Tk[Sk] === e)
		}
	});
	var ya = E((kie, wg) => {
		var Ik = we(),
			xk = Ik("toStringTag"),
			Cg = {};
		Cg[xk] = "z";
		wg.exports = String(Cg) === "[object z]"
	});
	var ti = E((Nie, Og) => {
		var Ak = oe(),
			Pk = ya(),
			Ck = Ce(),
			Ea = Jr(),
			wk = we(),
			Ok = wk("toStringTag"),
			Mk = Ak.Object,
			Rk = Ea(function() {
				return arguments
			}()) == "Arguments",
			Dk = function(e, t) {
				try {
					return e[t]
				} catch {}
			};
		Og.exports = Pk ? Ea : function(e) {
			var t, r, n;
			return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = Dk(t = Mk(e), Ok)) == "string" ? r : Rk ? Ea(t) : (n = Ea(t)) == "Object" && Ck(t.callee) ? "Arguments" : n
		}
	});
	var wr = E((Bie, Fg) => {
		var Fk = Te(),
			qk = Ne(),
			Mg = Ce(),
			Lk = ti(),
			kk = ht(),
			Nk = Qn(),
			Rg = function() {},
			Bk = [],
			Dg = kk("Reflect", "construct"),
			ul = /^\s*(?:class|function)\b/,
			Vk = Fk(ul.exec),
			Gk = !ul.exec(Rg),
			ri = function(e) {
				if (!Mg(e)) return !1;
				try {
					return Dg(Rg, Bk, e), !0
				} catch {
					return !1
				}
			},
			zk = function(e) {
				if (!Mg(e)) return !1;
				switch (Lk(e)) {
					case "AsyncFunction":
					case "GeneratorFunction":
					case "AsyncGeneratorFunction":
						return !1
				}
				return Gk || !!Vk(ul, Nk(e))
			};
		Fg.exports = !Dg || qk(function() {
			var e;
			return ri(ri.call) || !ri(Object) || !ri(function() {
				e = !0
			}) || e
		}) ? zk : ri
	});
	var an = E((Vie, qg) => {
		"use strict";
		var Hk = Kn(),
			jk = ft(),
			Wk = Un();
		qg.exports = function(e, t, r) {
			var n = Hk(t);
			n in e ? jk.f(e, n, Wk(0, r)) : e[n] = r
		}
	});
	var ni = E((Gie, kg) => {
		var Uk = ti(),
			Lg = or(),
			Xk = nn(),
			$k = we(),
			Kk = $k("iterator");
		kg.exports = function(e) {
			if (e != null) return Lg(e, Kk) || Lg(e, "@@iterator") || Xk[Uk(e)]
		}
	});
	var ii = E((zie, Ng) => {
		var Yk = oe(),
			Qk = ut(),
			Zk = xt(),
			Jk = Ue(),
			eN = Xn(),
			tN = ni(),
			rN = Yk.TypeError;
		Ng.exports = function(e, t) {
			var r = arguments.length < 2 ? tN(e) : t;
			if (Zk(r)) return Jk(Qk(r, e));
			throw rN(eN(e) + " is not iterable")
		}
	});
	var zg = E((Hie, Gg) => {
		"use strict";
		var nN = oe(),
			iN = At(),
			aN = ut(),
			sN = Me(),
			oN = xg(),
			lN = ll(),
			uN = wr(),
			hN = Ae(),
			Bg = an(),
			cN = ii(),
			fN = ni(),
			Vg = nN.Array;
		Gg.exports = function(t) {
			var r = sN(t),
				n = uN(this),
				i = arguments.length,
				a = i > 1 ? arguments[1] : void 0,
				s = a !== void 0;
			s && (a = iN(a, i > 2 ? arguments[2] : void 0));
			var o = fN(r),
				l = 0,
				f, u, c, v, d, p;
			if (o && !(this == Vg && lN(o)))
				for (v = cN(r, o), d = v.next, u = n ? new this : []; !(c = aN(d, v)).done; l++) p = s ? oN(v, a, [c.value, l], !0) : c.value, Bg(u, l, p);
			else
				for (f = hN(r), u = n ? new this(f) : Vg(f); f > l; l++) p = s ? a(r[l], l) : r[l], Bg(u, l, p);
			return u.length = l, u
		}
	});
	var _a = E((jie, Ug) => {
		var pN = we(),
			jg = pN("iterator"),
			Wg = !1;
		try {
			Hg = 0, hl = {
				next: function() {
					return {
						done: !!Hg++
					}
				},
				return: function() {
					Wg = !0
				}
			}, hl[jg] = function() {
				return this
			}, Array.from(hl, function() {
				throw 2
			})
		} catch {}
		var Hg, hl;
		Ug.exports = function(e, t) {
			if (!t && !Wg) return !1;
			var r = !1;
			try {
				var n = {};
				n[jg] = function() {
					return {
						next: function() {
							return {
								done: r = !0
							}
						}
					}
				}, e(n)
			} catch {}
			return r
		}
	});
	var Xg = E(() => {
		var dN = de(),
			mN = zg(),
			vN = _a(),
			gN = !vN(function(e) {
				Array.from(e)
			});
		dN({
			target: "Array",
			stat: !0,
			forced: gN
		}, {
			from: mN
		})
	});
	var hr = E((Xie, $g) => {
		var yN = Jr();
		$g.exports = Array.isArray || function(t) {
			return yN(t) == "Array"
		}
	});
	var Kg = E(() => {
		var EN = de(),
			_N = hr();
		EN({
			target: "Array",
			stat: !0
		}, {
			isArray: _N
		})
	});
	var Qg = E(() => {
		"use strict";
		var bN = de(),
			SN = oe(),
			TN = Ne(),
			IN = wr(),
			xN = an(),
			Yg = SN.Array,
			AN = TN(function() {
				function e() {}
				return !(Yg.of.call(e) instanceof e)
			});
		bN({
			target: "Array",
			stat: !0,
			forced: AN
		}, {
			of: function() {
				for (var t = 0, r = arguments.length, n = new(IN(this) ? this : Yg)(r); r > t;) xN(n, t, arguments[t++]);
				return n.length = r, n
			}
		})
	});
	var Jg = E((Zie, Zg) => {
		var PN = al(),
			CN = ma();
		Zg.exports = Object.keys || function(t) {
			return PN(t, CN)
		}
	});
	var ty = E((Jie, ey) => {
		var wN = Tt(),
			ON = ft(),
			MN = Ue(),
			RN = Dt(),
			DN = Jg();
		ey.exports = wN ? Object.defineProperties : function(t, r) {
			MN(t);
			for (var n = RN(r), i = DN(r), a = i.length, s = 0, o; a > s;) ON.f(t, o = i[s++], n[o]);
			return t
		}
	});
	var cl = E((eae, ry) => {
		var FN = ht();
		ry.exports = FN("document", "documentElement")
	});
	var cr = E((tae, uy) => {
		var qN = Ue(),
			LN = ty(),
			ny = ma(),
			kN = Zn(),
			NN = cl(),
			BN = ua(),
			VN = ca(),
			iy = ">",
			ay = "<",
			pl = "prototype",
			dl = "script",
			oy = VN("IE_PROTO"),
			fl = function() {},
			ly = function(e) {
				return ay + dl + iy + e + ay + "/" + dl + iy
			},
			sy = function(e) {
				e.write(ly("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			GN = function() {
				var e = BN("iframe"),
					t = "java" + dl + ":",
					r;
				return e.style.display = "none", NN.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(ly("document.F=Object")), r.close(), r.F
			},
			ba, Sa = function() {
				try {
					ba = new ActiveXObject("htmlfile")
				} catch {}
				Sa = typeof document < "u" ? document.domain && ba ? sy(ba) : GN() : sy(ba);
				for (var e = ny.length; e--;) delete Sa[pl][ny[e]];
				return Sa()
			};
		kN[oy] = !0;
		uy.exports = Object.create || function(t, r) {
			var n;
			return t !== null ? (fl[pl] = qN(t), n = new fl, fl[pl] = null, n[oy] = t) : n = Sa(), r === void 0 ? n : LN(n, r)
		}
	});
	var Fe = E((rae, hy) => {
		var zN = we(),
			HN = cr(),
			jN = ft(),
			ml = zN("unscopables"),
			vl = Array.prototype;
		vl[ml] == null && jN.f(vl, ml, {
			configurable: !0,
			value: HN(null)
		});
		hy.exports = function(e) {
			vl[ml][e] = !0
		}
	});
	var gl = E(() => {
		"use strict";
		var WN = de(),
			UN = Me(),
			XN = Ae(),
			$N = ur(),
			KN = Fe();
		WN({
			target: "Array",
			proto: !0
		}, {
			at: function(t) {
				var r = UN(this),
					n = XN(r),
					i = $N(t),
					a = i >= 0 ? i : n + i;
				return a < 0 || a >= n ? void 0 : r[a]
			}
		});
		KN("at")
	});
	var yl = E((aae, py) => {
		var YN = oe(),
			cy = hr(),
			QN = wr(),
			ZN = Ye(),
			JN = we(),
			eB = JN("species"),
			fy = YN.Array;
		py.exports = function(e) {
			var t;
			return cy(e) && (t = e.constructor, QN(t) && (t === fy || cy(t.prototype)) ? t = void 0 : ZN(t) && (t = t[eB], t === null && (t = void 0))), t === void 0 ? fy : t
		}
	});
	var Or = E((sae, dy) => {
		var tB = yl();
		dy.exports = function(e, t) {
			return new(tB(e))(t === 0 ? 0 : t)
		}
	});
	var sn = E((oae, my) => {
		var rB = Ne(),
			nB = we(),
			iB = sr(),
			aB = nB("species");
		my.exports = function(e) {
			return iB >= 51 || !rB(function() {
				var t = [],
					r = t.constructor = {};
				return r[aB] = function() {
					return {
						foo: 1
					}
				}, t[e](Boolean).foo !== 1
			})
		}
	});
	var by = E(() => {
		"use strict";
		var sB = de(),
			oB = oe(),
			lB = Ne(),
			uB = hr(),
			hB = Ye(),
			cB = Me(),
			fB = Ae(),
			vy = an(),
			pB = Or(),
			dB = sn(),
			mB = we(),
			vB = sr(),
			_y = mB("isConcatSpreadable"),
			gy = 9007199254740991,
			yy = "Maximum allowed index exceeded",
			Ey = oB.TypeError,
			gB = vB >= 51 || !lB(function() {
				var e = [];
				return e[_y] = !1, e.concat()[0] !== e
			}),
			yB = dB("concat"),
			EB = function(e) {
				if (!hB(e)) return !1;
				var t = e[_y];
				return t !== void 0 ? !!t : uB(e)
			},
			_B = !gB || !yB;
		sB({
			target: "Array",
			proto: !0,
			forced: _B
		}, {
			concat: function(t) {
				var r = cB(this),
					n = pB(r, 0),
					i = 0,
					a, s, o, l, f;
				for (a = -1, o = arguments.length; a < o; a++)
					if (f = a === -1 ? r : arguments[a], EB(f)) {
						if (l = fB(f), i + l > gy) throw Ey(yy);
						for (s = 0; s < l; s++, i++) s in f && vy(n, i, f[s])
					} else {
						if (i >= gy) throw Ey(yy);
						vy(n, i++, f)
					} return n.length = i, n
			}
		})
	});
	var Ty = E((hae, Sy) => {
		"use strict";
		var bB = Me(),
			El = rn(),
			SB = Ae(),
			TB = Math.min;
		Sy.exports = [].copyWithin || function(t, r) {
			var n = bB(this),
				i = SB(n),
				a = El(t, i),
				s = El(r, i),
				o = arguments.length > 2 ? arguments[2] : void 0,
				l = TB((o === void 0 ? i : El(o, i)) - s, i - a),
				f = 1;
			for (s < a && a < s + l && (f = -1, s += l - 1, a += l - 1); l-- > 0;) s in n ? n[a] = n[s] : delete n[a], a += f, s += f;
			return n
		}
	});
	var Iy = E(() => {
		var IB = de(),
			xB = Ty(),
			AB = Fe();
		IB({
			target: "Array",
			proto: !0
		}, {
			copyWithin: xB
		});
		AB("copyWithin")
	});
	var Ft = E((pae, Ay) => {
		var PB = At(),
			CB = Te(),
			wB = xr(),
			OB = Me(),
			MB = Ae(),
			RB = Or(),
			xy = CB([].push),
			fr = function(e) {
				var t = e == 1,
					r = e == 2,
					n = e == 3,
					i = e == 4,
					a = e == 6,
					s = e == 7,
					o = e == 5 || a;
				return function(l, f, u, c) {
					for (var v = OB(l), d = wB(v), p = PB(f, u), m = MB(d), h = 0, g = c || RB, y = t ? g(l, m) : r || s ? g(l, 0) : void 0, _, b; m > h; h++)
						if ((o || h in d) && (_ = d[h], b = p(_, h, v), e))
							if (t) y[h] = b;
							else if (b) switch (e) {
						case 3:
							return !0;
						case 5:
							return _;
						case 6:
							return h;
						case 2:
							xy(y, _)
					} else switch (e) {
						case 4:
							return !1;
						case 7:
							xy(y, _)
					}
					return a ? -1 : n || i ? i : y
				}
			};
		Ay.exports = {
			forEach: fr(0),
			map: fr(1),
			filter: fr(2),
			some: fr(3),
			every: fr(4),
			find: fr(5),
			findIndex: fr(6),
			filterReject: fr(7)
		}
	});
	var qt = E((dae, Py) => {
		"use strict";
		var DB = Ne();
		Py.exports = function(e, t) {
			var r = [][e];
			return !!r && DB(function() {
				r.call(null, t || function() {
					throw 1
				}, 1)
			})
		}
	});
	var Cy = E(() => {
		"use strict";
		var FB = de(),
			qB = Ft().every,
			LB = qt(),
			kB = LB("every");
		FB({
			target: "Array",
			proto: !0,
			forced: !kB
		}, {
			every: function(t) {
				return qB(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var My = E((gae, Oy) => {
		"use strict";
		var NB = Me(),
			wy = rn(),
			BB = Ae();
		Oy.exports = function(t) {
			for (var r = NB(this), n = BB(r), i = arguments.length, a = wy(i > 1 ? arguments[1] : void 0, n), s = i > 2 ? arguments[2] : void 0, o = s === void 0 ? n : wy(s, n); o > a;) r[a++] = t;
			return r
		}
	});
	var Ry = E(() => {
		var VB = de(),
			GB = My(),
			zB = Fe();
		VB({
			target: "Array",
			proto: !0
		}, {
			fill: GB
		});
		zB("fill")
	});
	var Dy = E(() => {
		"use strict";
		var HB = de(),
			jB = Ft().filter,
			WB = sn(),
			UB = WB("filter");
		HB({
			target: "Array",
			proto: !0,
			forced: !UB
		}, {
			filter: function(t) {
				return jB(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var qy = E(() => {
		"use strict";
		var XB = de(),
			$B = Ft().find,
			KB = Fe(),
			_l = "find",
			Fy = !0;
		_l in [] && Array(1)[_l](function() {
			Fy = !1
		});
		XB({
			target: "Array",
			proto: !0,
			forced: Fy
		}, {
			find: function(t) {
				return $B(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		KB(_l)
	});
	var ky = E(() => {
		"use strict";
		var YB = de(),
			QB = Ft().findIndex,
			ZB = Fe(),
			bl = "findIndex",
			Ly = !0;
		bl in [] && Array(1)[bl](function() {
			Ly = !1
		});
		YB({
			target: "Array",
			proto: !0,
			forced: Ly
		}, {
			findIndex: function(t) {
				return QB(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		ZB(bl)
	});
	var Sl = E((Aae, By) => {
		"use strict";
		var JB = oe(),
			eV = hr(),
			tV = Ae(),
			rV = At(),
			nV = JB.TypeError,
			Ny = function(e, t, r, n, i, a, s, o) {
				for (var l = i, f = 0, u = s ? rV(s, o) : !1, c, v; f < n;) {
					if (f in r) {
						if (c = u ? u(r[f], f, t) : r[f], a > 0 && eV(c)) v = tV(c), l = Ny(e, t, c, v, l, a - 1) - 1;
						else {
							if (l >= 9007199254740991) throw nV("Exceed the acceptable array length");
							e[l] = c
						}
						l++
					}
					f++
				}
				return l
			};
		By.exports = Ny
	});
	var Vy = E(() => {
		"use strict";
		var iV = de(),
			aV = Sl(),
			sV = Me(),
			oV = Ae(),
			lV = ur(),
			uV = Or();
		iV({
			target: "Array",
			proto: !0
		}, {
			flat: function() {
				var t = arguments.length ? arguments[0] : void 0,
					r = sV(this),
					n = oV(r),
					i = uV(r, 0);
				return i.length = aV(i, r, r, n, 0, t === void 0 ? 1 : lV(t)), i
			}
		})
	});
	var Gy = E(() => {
		"use strict";
		var hV = de(),
			cV = Sl(),
			fV = xt(),
			pV = Me(),
			dV = Ae(),
			mV = Or();
		hV({
			target: "Array",
			proto: !0
		}, {
			flatMap: function(t) {
				var r = pV(this),
					n = dV(r),
					i;
				return fV(t), i = mV(r, 0), i.length = cV(i, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), i
			}
		})
	});
	var Hy = E((Mae, zy) => {
		"use strict";
		var vV = Ft().forEach,
			gV = qt(),
			yV = gV("forEach");
		zy.exports = yV ? [].forEach : function(t) {
			return vV(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var Wy = E(() => {
		"use strict";
		var EV = de(),
			jy = Hy();
		EV({
			target: "Array",
			proto: !0,
			forced: [].forEach != jy
		}, {
			forEach: jy
		})
	});
	var Tl = E(() => {
		"use strict";
		var _V = de(),
			bV = da().includes,
			SV = Fe();
		_V({
			target: "Array",
			proto: !0
		}, {
			includes: function(t) {
				return bV(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		SV("includes")
	});
	var Xy = E(() => {
		"use strict";
		var TV = de(),
			IV = Te(),
			xV = da().indexOf,
			AV = qt(),
			Il = IV([].indexOf),
			Uy = !!Il && 1 / Il([1], 1, -0) < 0,
			PV = AV("indexOf");
		TV({
			target: "Array",
			proto: !0,
			forced: Uy || !PV
		}, {
			indexOf: function(t) {
				var r = arguments.length > 1 ? arguments[1] : void 0;
				return Uy ? Il(this, t, r) || 0 : xV(this, t, r)
			}
		})
	});
	var Ky = E((Nae, $y) => {
		var CV = Ne();
		$y.exports = !CV(function() {
			function e() {}
			return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
		})
	});
	var Ta = E((Bae, Qy) => {
		var wV = oe(),
			OV = ct(),
			MV = Ce(),
			RV = Me(),
			DV = ca(),
			FV = Ky(),
			Yy = DV("IE_PROTO"),
			xl = wV.Object,
			qV = xl.prototype;
		Qy.exports = FV ? xl.getPrototypeOf : function(e) {
			var t = RV(e);
			if (OV(t, Yy)) return t[Yy];
			var r = t.constructor;
			return MV(r) && t instanceof r ? r.prototype : t instanceof xl ? qV : null
		}
	});
	var wl = E((Vae, e0) => {
		"use strict";
		var LV = Ne(),
			kV = Ce(),
			NV = cr(),
			Zy = Ta(),
			BV = Wt(),
			VV = we(),
			GV = en(),
			Cl = VV("iterator"),
			Jy = !1,
			Ut, Al, Pl;
		[].keys && (Pl = [].keys(), "next" in Pl ? (Al = Zy(Zy(Pl)), Al !== Object.prototype && (Ut = Al)) : Jy = !0);
		var zV = Ut == null || LV(function() {
			var e = {};
			return Ut[Cl].call(e) !== e
		});
		zV ? Ut = {} : GV && (Ut = NV(Ut));
		kV(Ut[Cl]) || BV(Ut, Cl, function() {
			return this
		});
		e0.exports = {
			IteratorPrototype: Ut,
			BUGGY_SAFARI_ITERATORS: Jy
		}
	});
	var ai = E((Gae, r0) => {
		var HV = ft().f,
			jV = ct(),
			WV = we(),
			t0 = WV("toStringTag");
		r0.exports = function(e, t, r) {
			e && !jV(e = r ? e : e.prototype, t0) && HV(e, t0, {
				configurable: !0,
				value: t
			})
		}
	});
	var i0 = E((zae, n0) => {
		"use strict";
		var UV = wl().IteratorPrototype,
			XV = cr(),
			$V = Un(),
			KV = ai(),
			YV = nn(),
			QV = function() {
				return this
			};
		n0.exports = function(e, t, r) {
			var n = t + " Iterator";
			return e.prototype = XV(UV, {
				next: $V(1, r)
			}), KV(e, n, !1, !0), YV[n] = QV, e
		}
	});
	var o0 = E((Hae, s0) => {
		var a0 = oe(),
			ZV = Ce(),
			JV = a0.String,
			eG = a0.TypeError;
		s0.exports = function(e) {
			if (typeof e == "object" || ZV(e)) return e;
			throw eG("Can't set " + JV(e) + " as a prototype")
		}
	});
	var Ia = E((jae, l0) => {
		var tG = Te(),
			rG = Ue(),
			nG = o0();
		l0.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var e = !1,
				t = {},
				r;
			try {
				r = tG(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set), r(t, []), e = t instanceof Array
			} catch {}
			return function(i, a) {
				return rG(i), nG(a), e ? r(i, a) : i.__proto__ = a, i
			}
		}() : void 0)
	});
	var Pa = E((Wae, y0) => {
		"use strict";
		var iG = de(),
			aG = ut(),
			xa = en(),
			v0 = nl(),
			sG = Ce(),
			oG = i0(),
			u0 = Ta(),
			h0 = Ia(),
			lG = ai(),
			uG = Yn(),
			Ol = Wt(),
			hG = we(),
			c0 = nn(),
			g0 = wl(),
			cG = v0.PROPER,
			fG = v0.CONFIGURABLE,
			f0 = g0.IteratorPrototype,
			Aa = g0.BUGGY_SAFARI_ITERATORS,
			si = hG("iterator"),
			p0 = "keys",
			oi = "values",
			d0 = "entries",
			m0 = function() {
				return this
			};
		y0.exports = function(e, t, r, n, i, a, s) {
			oG(r, t, n);
			var o = function(g) {
					if (g === i && v) return v;
					if (!Aa && g in u) return u[g];
					switch (g) {
						case p0:
							return function() {
								return new r(this, g)
							};
						case oi:
							return function() {
								return new r(this, g)
							};
						case d0:
							return function() {
								return new r(this, g)
							}
					}
					return function() {
						return new r(this)
					}
				},
				l = t + " Iterator",
				f = !1,
				u = e.prototype,
				c = u[si] || u["@@iterator"] || i && u[i],
				v = !Aa && c || o(i),
				d = t == "Array" && u.entries || c,
				p, m, h;
			if (d && (p = u0(d.call(new e)), p !== Object.prototype && p.next && (!xa && u0(p) !== f0 && (h0 ? h0(p, f0) : sG(p[si]) || Ol(p, si, m0)), lG(p, l, !0, !0), xa && (c0[l] = m0))), cG && i == oi && c && c.name !== oi && (!xa && fG ? uG(u, "name", oi) : (f = !0, v = function() {
					return aG(c, this)
				})), i)
				if (m = {
						values: o(oi),
						keys: a ? v : o(p0),
						entries: o(d0)
					}, s)
					for (h in m)(Aa || f || !(h in u)) && Ol(u, h, m[h]);
				else iG({
					target: t,
					proto: !0,
					forced: Aa || f
				}, m);
			return (!xa || s) && u[si] !== v && Ol(u, si, v, {
				name: i
			}), c0[t] = v, m
		}
	});
	var T0 = E((Uae, S0) => {
		"use strict";
		var pG = Dt(),
			Ml = Fe(),
			E0 = nn(),
			_0 = Cr(),
			dG = Pa(),
			b0 = "Array Iterator",
			mG = _0.set,
			vG = _0.getterFor(b0);
		S0.exports = dG(Array, "Array", function(e, t) {
			mG(this, {
				type: b0,
				target: pG(e),
				index: 0,
				kind: t
			})
		}, function() {
			var e = vG(this),
				t = e.target,
				r = e.kind,
				n = e.index++;
			return !t || n >= t.length ? (e.target = void 0, {
				value: void 0,
				done: !0
			}) : r == "keys" ? {
				value: n,
				done: !1
			} : r == "values" ? {
				value: t[n],
				done: !1
			} : {
				value: [n, t[n]],
				done: !1
			}
		}, "values");
		E0.Arguments = E0.Array;
		Ml("keys");
		Ml("values");
		Ml("entries")
	});
	var I0 = E(() => {
		"use strict";
		var gG = de(),
			yG = Te(),
			EG = xr(),
			_G = Dt(),
			bG = qt(),
			SG = yG([].join),
			TG = EG != Object,
			IG = bG("join", ",");
		gG({
			target: "Array",
			proto: !0,
			forced: TG || !IG
		}, {
			join: function(t) {
				return SG(_G(this), t === void 0 ? "," : t)
			}
		})
	});
	var Ca = E((Kae, P0) => {
		var Rl = Function.prototype,
			x0 = Rl.apply,
			xG = Rl.bind,
			A0 = Rl.call;
		P0.exports = typeof Reflect == "object" && Reflect.apply || (xG ? A0.bind(x0) : function() {
			return A0.apply(x0, arguments)
		})
	});
	var O0 = E((Yae, w0) => {
		"use strict";
		var AG = Ca(),
			PG = Dt(),
			CG = ur(),
			wG = Ae(),
			OG = qt(),
			MG = Math.min,
			Dl = [].lastIndexOf,
			C0 = !!Dl && 1 / [1].lastIndexOf(1, -0) < 0,
			RG = OG("lastIndexOf"),
			DG = C0 || !RG;
		w0.exports = DG ? function(t) {
			if (C0) return AG(Dl, this, arguments) || 0;
			var r = PG(this),
				n = wG(r),
				i = n - 1;
			for (arguments.length > 1 && (i = MG(i, CG(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
				if (i in r && r[i] === t) return i || 0;
			return -1
		} : Dl
	});
	var R0 = E(() => {
		var FG = de(),
			M0 = O0();
		FG({
			target: "Array",
			proto: !0,
			forced: M0 !== [].lastIndexOf
		}, {
			lastIndexOf: M0
		})
	});
	var D0 = E(() => {
		"use strict";
		var qG = de(),
			LG = Ft().map,
			kG = sn(),
			NG = kG("map");
		qG({
			target: "Array",
			proto: !0,
			forced: !NG
		}, {
			map: function(t) {
				return LG(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var Fl = E((tse, q0) => {
		var BG = oe(),
			VG = xt(),
			GG = Me(),
			zG = xr(),
			HG = Ae(),
			jG = BG.TypeError,
			F0 = function(e) {
				return function(t, r, n, i) {
					VG(r);
					var a = GG(t),
						s = zG(a),
						o = HG(a),
						l = e ? o - 1 : 0,
						f = e ? -1 : 1;
					if (n < 2)
						for (;;) {
							if (l in s) {
								i = s[l], l += f;
								break
							}
							if (l += f, e ? l < 0 : o <= l) throw jG("Reduce of empty array with no initial value")
						}
					for (; e ? l >= 0 : o > l; l += f) l in s && (i = r(i, s[l], l, a));
					return i
				}
			};
		q0.exports = {
			left: F0(!1),
			right: F0(!0)
		}
	});
	var on = E((rse, L0) => {
		var WG = Jr(),
			UG = oe();
		L0.exports = WG(UG.process) == "process"
	});
	var N0 = E(() => {
		"use strict";
		var XG = de(),
			$G = Fl().left,
			KG = qt(),
			k0 = sr(),
			YG = on(),
			QG = KG("reduce"),
			ZG = !YG && k0 > 79 && k0 < 83;
		XG({
			target: "Array",
			proto: !0,
			forced: !QG || ZG
		}, {
			reduce: function(t) {
				var r = arguments.length;
				return $G(this, t, r, r > 1 ? arguments[1] : void 0)
			}
		})
	});
	var V0 = E(() => {
		"use strict";
		var JG = de(),
			e3 = Fl().right,
			t3 = qt(),
			B0 = sr(),
			r3 = on(),
			n3 = t3("reduceRight"),
			i3 = !r3 && B0 > 79 && B0 < 83;
		JG({
			target: "Array",
			proto: !0,
			forced: !n3 || i3
		}, {
			reduceRight: function(t) {
				return e3(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var z0 = E(() => {
		"use strict";
		var a3 = de(),
			s3 = Te(),
			o3 = hr(),
			l3 = s3([].reverse),
			G0 = [1, 2];
		a3({
			target: "Array",
			proto: !0,
			forced: String(G0) === String(G0.reverse())
		}, {
			reverse: function() {
				return o3(this) && (this.length = this.length), l3(this)
			}
		})
	});
	var li = E((use, H0) => {
		var u3 = Te();
		H0.exports = u3([].slice)
	});
	var U0 = E(() => {
		"use strict";
		var h3 = de(),
			c3 = oe(),
			j0 = hr(),
			f3 = wr(),
			p3 = Ye(),
			W0 = rn(),
			d3 = Ae(),
			m3 = Dt(),
			v3 = an(),
			g3 = we(),
			y3 = sn(),
			E3 = li(),
			_3 = y3("slice"),
			b3 = g3("species"),
			ql = c3.Array,
			S3 = Math.max;
		h3({
			target: "Array",
			proto: !0,
			forced: !_3
		}, {
			slice: function(t, r) {
				var n = m3(this),
					i = d3(n),
					a = W0(t, i),
					s = W0(r === void 0 ? i : r, i),
					o, l, f;
				if (j0(n) && (o = n.constructor, f3(o) && (o === ql || j0(o.prototype)) ? o = void 0 : p3(o) && (o = o[b3], o === null && (o = void 0)), o === ql || o === void 0)) return E3(n, a, s);
				for (l = new(o === void 0 ? ql : o)(S3(s - a, 0)), f = 0; a < s; a++, f++) a in n && v3(l, f, n[a]);
				return l.length = f, l
			}
		})
	});
	var X0 = E(() => {
		"use strict";
		var T3 = de(),
			I3 = Ft().some,
			x3 = qt(),
			A3 = x3("some");
		T3({
			target: "Array",
			proto: !0,
			forced: !A3
		}, {
			some: function(t) {
				return I3(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var wa = E((dse, $0) => {
		var P3 = oe(),
			C3 = ti(),
			w3 = P3.String;
		$0.exports = function(e) {
			if (C3(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
			return w3(e)
		}
	});
	var Q0 = E((mse, Y0) => {
		var K0 = li(),
			O3 = Math.floor,
			Ll = function(e, t) {
				var r = e.length,
					n = O3(r / 2);
				return r < 8 ? M3(e, t) : R3(e, Ll(K0(e, 0, n), t), Ll(K0(e, n), t), t)
			},
			M3 = function(e, t) {
				for (var r = e.length, n = 1, i, a; n < r;) {
					for (a = n, i = e[n]; a && t(e[a - 1], i) > 0;) e[a] = e[--a];
					a !== n++ && (e[a] = i)
				}
				return e
			},
			R3 = function(e, t, r, n) {
				for (var i = t.length, a = r.length, s = 0, o = 0; s < i || o < a;) e[s + o] = s < i && o < a ? n(t[s], r[o]) <= 0 ? t[s++] : r[o++] : s < i ? t[s++] : r[o++];
				return e
			};
		Y0.exports = Ll
	});
	var eE = E((vse, J0) => {
		var D3 = ar(),
			Z0 = D3.match(/firefox\/(\d+)/i);
		J0.exports = !!Z0 && +Z0[1]
	});
	var rE = E((gse, tE) => {
		var F3 = ar();
		tE.exports = /MSIE|Trident/.test(F3)
	});
	var aE = E((yse, iE) => {
		var q3 = ar(),
			nE = q3.match(/AppleWebKit\/(\d+)\./);
		iE.exports = !!nE && +nE[1]
	});
	var pE = E(() => {
		"use strict";
		var L3 = de(),
			cE = Te(),
			k3 = xt(),
			N3 = Me(),
			B3 = Ae(),
			sE = wa(),
			kl = Ne(),
			V3 = Q0(),
			G3 = qt(),
			oE = eE(),
			z3 = rE(),
			lE = sr(),
			uE = aE(),
			pr = [],
			hE = cE(pr.sort),
			H3 = cE(pr.push),
			j3 = kl(function() {
				pr.sort(void 0)
			}),
			W3 = kl(function() {
				pr.sort(null)
			}),
			U3 = G3("sort"),
			fE = !kl(function() {
				if (lE) return lE < 70;
				if (!(oE && oE > 3)) {
					if (z3) return !0;
					if (uE) return uE < 603;
					var e = "",
						t, r, n, i;
					for (t = 65; t < 76; t++) {
						switch (r = String.fromCharCode(t), t) {
							case 66:
							case 69:
							case 70:
							case 72:
								n = 3;
								break;
							case 68:
							case 71:
								n = 4;
								break;
							default:
								n = 2
						}
						for (i = 0; i < 47; i++) pr.push({
							k: r + i,
							v: n
						})
					}
					for (pr.sort(function(a, s) {
							return s.v - a.v
						}), i = 0; i < pr.length; i++) r = pr[i].k.charAt(0), e.charAt(e.length - 1) !== r && (e += r);
					return e !== "DGBEFHACIJK"
				}
			}),
			X3 = j3 || !W3 || !U3 || !fE,
			$3 = function(e) {
				return function(t, r) {
					return r === void 0 ? -1 : t === void 0 ? 1 : e !== void 0 ? +e(t, r) || 0 : sE(t) > sE(r) ? 1 : -1
				}
			};
		L3({
			target: "Array",
			proto: !0,
			forced: X3
		}, {
			sort: function(t) {
				t !== void 0 && k3(t);
				var r = N3(this);
				if (fE) return t === void 0 ? hE(r) : hE(r, t);
				var n = [],
					i = B3(r),
					a, s;
				for (s = 0; s < i; s++) s in r && H3(n, r[s]);
				for (V3(n, $3(t)), a = n.length, s = 0; s < a;) r[s] = n[s++];
				for (; s < i;) delete r[s++];
				return r
			}
		})
	});
	var Oa = E((bse, mE) => {
		"use strict";
		var K3 = ht(),
			Y3 = ft(),
			Q3 = we(),
			Z3 = Tt(),
			dE = Q3("species");
		mE.exports = function(e) {
			var t = K3(e),
				r = Y3.f;
			Z3 && t && !t[dE] && r(t, dE, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	});
	var vE = E(() => {
		var J3 = Oa();
		J3("Array")
	});
	var gE = E(() => {
		"use strict";
		var e5 = de(),
			t5 = oe(),
			r5 = rn(),
			n5 = ur(),
			i5 = Ae(),
			a5 = Me(),
			s5 = Or(),
			o5 = an(),
			l5 = sn(),
			u5 = l5("splice"),
			h5 = t5.TypeError,
			c5 = Math.max,
			f5 = Math.min,
			p5 = 9007199254740991,
			d5 = "Maximum allowed length exceeded";
		e5({
			target: "Array",
			proto: !0,
			forced: !u5
		}, {
			splice: function(t, r) {
				var n = a5(this),
					i = i5(n),
					a = r5(t, i),
					s = arguments.length,
					o, l, f, u, c, v;
				if (s === 0 ? o = l = 0 : s === 1 ? (o = 0, l = i - a) : (o = s - 2, l = f5(c5(n5(r), 0), i - a)), i + o - l > p5) throw h5(d5);
				for (f = s5(n, l), u = 0; u < l; u++) c = a + u, c in n && o5(f, u, n[c]);
				if (f.length = l, o < l) {
					for (u = a; u < i - l; u++) c = u + l, v = u + o, c in n ? n[v] = n[c] : delete n[v];
					for (u = i; u > i - l + o; u--) delete n[u - 1]
				} else if (o > l)
					for (u = i - l; u > a; u--) c = u + l - 1, v = u + o - 1, c in n ? n[v] = n[c] : delete n[v];
				for (u = 0; u < o; u++) n[u + a] = arguments[u + 2];
				return n.length = i - l + o, f
			}
		})
	});
	var yE = E(() => {
		var m5 = Fe();
		m5("flat")
	});
	var EE = E(() => {
		var v5 = Fe();
		v5("flatMap")
	});
	var bE = E((Ose, _E) => {
		"use strict";
		var g5 = ya(),
			y5 = ti();
		_E.exports = g5 ? {}.toString : function() {
			return "[object " + y5(this) + "]"
		}
	});
	var SE = E(() => {
		var E5 = ya(),
			_5 = Wt(),
			b5 = bE();
		E5 || _5(Object.prototype, "toString", b5, {
			unsafe: !0
		})
	});
	var AE = E((Dse, xE) => {
		var Nl = Te(),
			S5 = ur(),
			T5 = wa(),
			I5 = ia(),
			x5 = Nl("".charAt),
			TE = Nl("".charCodeAt),
			A5 = Nl("".slice),
			IE = function(e) {
				return function(t, r) {
					var n = T5(I5(t)),
						i = S5(r),
						a = n.length,
						s, o;
					return i < 0 || i >= a ? e ? "" : void 0 : (s = TE(n, i), s < 55296 || s > 56319 || i + 1 === a || (o = TE(n, i + 1)) < 56320 || o > 57343 ? e ? x5(n, i) : s : e ? A5(n, i, i + 2) : (s - 55296 << 10) + (o - 56320) + 65536)
				}
			};
		xE.exports = {
			codeAt: IE(!1),
			charAt: IE(!0)
		}
	});
	var wE = E(() => {
		"use strict";
		var P5 = AE().charAt,
			C5 = wa(),
			PE = Cr(),
			w5 = Pa(),
			CE = "String Iterator",
			O5 = PE.set,
			M5 = PE.getterFor(CE);
		w5(String, "String", function(e) {
			O5(this, {
				type: CE,
				string: C5(e),
				index: 0
			})
		}, function() {
			var t = M5(this),
				r = t.string,
				n = t.index,
				i;
			return n >= r.length ? {
				value: void 0,
				done: !0
			} : (i = P5(r, n), t.index += i.length, {
				value: i,
				done: !1
			})
		})
	});
	var ME = E((Lse, OE) => {
		var R5 = oe();
		OE.exports = R5
	});
	var DE = E((kse, RE) => {
		Xg();
		Kg();
		Qg();
		gl();
		by();
		Iy();
		Cy();
		Ry();
		Dy();
		qy();
		ky();
		Vy();
		Gy();
		Wy();
		Tl();
		Xy();
		T0();
		I0();
		R0();
		D0();
		N0();
		V0();
		z0();
		U0();
		X0();
		pE();
		vE();
		gE();
		yE();
		EE();
		SE();
		wE();
		var D5 = ME();
		RE.exports = D5.Array
	});
	var qE = E((Nse, FE) => {
		var F5 = DE();
		FE.exports = F5
	});
	var BE = E((Bse, NE) => {
		var q5 = Jr(),
			L5 = Dt(),
			LE = va().f,
			k5 = li(),
			kE = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
			N5 = function(e) {
				try {
					return LE(e)
				} catch {
					return k5(kE)
				}
			};
		NE.exports.f = function(t) {
			return kE && q5(t) == "Window" ? N5(t) : LE(L5(t))
		}
	});
	var GE = E((Vse, VE) => {
		var B5 = Ne();
		VE.exports = !B5(function() {
			return Object.isExtensible(Object.preventExtensions({}))
		})
	});
	var zl = E((Gse, jE) => {
		var V5 = de(),
			G5 = Te(),
			z5 = Zn(),
			H5 = Ye(),
			Bl = ct(),
			j5 = ft().f,
			zE = va(),
			W5 = BE(),
			U5 = la(),
			X5 = GE(),
			HE = !1,
			Xt = U5("meta"),
			$5 = 0,
			Vl = Object.isExtensible || function() {
				return !0
			},
			Gl = function(e) {
				j5(e, Xt, {
					value: {
						objectID: "O" + $5++,
						weakData: {}
					}
				})
			},
			K5 = function(e, t) {
				if (!H5(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
				if (!Bl(e, Xt)) {
					if (!Vl(e)) return "F";
					if (!t) return "E";
					Gl(e)
				}
				return e[Xt].objectID
			},
			Y5 = function(e, t) {
				if (!Bl(e, Xt)) {
					if (!Vl(e)) return !0;
					if (!t) return !1;
					Gl(e)
				}
				return e[Xt].weakData
			},
			Q5 = function(e) {
				return X5 && HE && Vl(e) && !Bl(e, Xt) && Gl(e), e
			},
			Z5 = function() {
				J5.enable = function() {}, HE = !0;
				var e = zE.f,
					t = G5([].splice),
					r = {};
				r[Xt] = 1, e(r).length && (zE.f = function(n) {
					for (var i = e(n), a = 0, s = i.length; a < s; a++)
						if (i[a] === Xt) {
							t(i, a, 1);
							break
						} return i
				}, V5({
					target: "Object",
					stat: !0,
					forced: !0
				}, {
					getOwnPropertyNames: W5.f
				}))
			},
			J5 = jE.exports = {
				enable: Z5,
				fastKey: K5,
				getWeakData: Y5,
				onFreeze: Q5
			};
		z5[Xt] = !0
	});
	var Ra = E((zse, $E) => {
		var ez = oe(),
			tz = At(),
			rz = ut(),
			nz = Ue(),
			iz = Xn(),
			az = ll(),
			sz = Ae(),
			WE = aa(),
			oz = ii(),
			lz = ni(),
			UE = ol(),
			uz = ez.TypeError,
			Ma = function(e, t) {
				this.stopped = e, this.result = t
			},
			XE = Ma.prototype;
		$E.exports = function(e, t, r) {
			var n = r && r.that,
				i = !!(r && r.AS_ENTRIES),
				a = !!(r && r.IS_ITERATOR),
				s = !!(r && r.INTERRUPTED),
				o = tz(t, n),
				l, f, u, c, v, d, p, m = function(g) {
					return l && UE(l, "normal", g), new Ma(!0, g)
				},
				h = function(g) {
					return i ? (nz(g), s ? o(g[0], g[1], m) : o(g[0], g[1])) : s ? o(g, m) : o(g)
				};
			if (a) l = e;
			else {
				if (f = lz(e), !f) throw uz(iz(e) + " is not iterable");
				if (az(f)) {
					for (u = 0, c = sz(e); c > u; u++)
						if (v = h(e[u]), v && WE(XE, v)) return v;
					return new Ma(!1)
				}
				l = oz(e, f)
			}
			for (d = l.next; !(p = rz(d, l)).done;) {
				try {
					v = h(p.value)
				} catch (g) {
					UE(l, "throw", g)
				}
				if (typeof v == "object" && v && WE(XE, v)) return v
			}
			return new Ma(!1)
		}
	});
	var Da = E((Hse, KE) => {
		var hz = oe(),
			cz = aa(),
			fz = hz.TypeError;
		KE.exports = function(e, t) {
			if (cz(t, e)) return e;
			throw fz("Incorrect invocation")
		}
	});
	var ZE = E((jse, QE) => {
		var pz = Ce(),
			dz = Ye(),
			YE = Ia();
		QE.exports = function(e, t, r) {
			var n, i;
			return YE && pz(n = t.constructor) && n !== r && dz(i = n.prototype) && i !== r.prototype && YE(e, i), e
		}
	});
	var t1 = E((Wse, e1) => {
		"use strict";
		var mz = de(),
			vz = oe(),
			gz = Te(),
			JE = ga(),
			yz = Wt(),
			Ez = zl(),
			_z = Ra(),
			bz = Da(),
			Sz = Ce(),
			Hl = Ye(),
			jl = Ne(),
			Tz = _a(),
			Iz = ai(),
			xz = ZE();
		e1.exports = function(e, t, r) {
			var n = e.indexOf("Map") !== -1,
				i = e.indexOf("Weak") !== -1,
				a = n ? "set" : "add",
				s = vz[e],
				o = s && s.prototype,
				l = s,
				f = {},
				u = function(g) {
					var y = gz(o[g]);
					yz(o, g, g == "add" ? function(b) {
						return y(this, b === 0 ? 0 : b), this
					} : g == "delete" ? function(_) {
						return i && !Hl(_) ? !1 : y(this, _ === 0 ? 0 : _)
					} : g == "get" ? function(b) {
						return i && !Hl(b) ? void 0 : y(this, b === 0 ? 0 : b)
					} : g == "has" ? function(b) {
						return i && !Hl(b) ? !1 : y(this, b === 0 ? 0 : b)
					} : function(b, S) {
						return y(this, b === 0 ? 0 : b, S), this
					})
				},
				c = JE(e, !Sz(s) || !(i || o.forEach && !jl(function() {
					new s().entries().next()
				})));
			if (c) l = r.getConstructor(t, e, n, a), Ez.enable();
			else if (JE(e, !0)) {
				var v = new l,
					d = v[a](i ? {} : -0, 1) != v,
					p = jl(function() {
						v.has(1)
					}),
					m = Tz(function(g) {
						new s(g)
					}),
					h = !i && jl(function() {
						for (var g = new s, y = 5; y--;) g[a](y, y);
						return !g.has(-0)
					});
				m || (l = t(function(g, y) {
					bz(g, o);
					var _ = xz(new s, g, l);
					return y != null && _z(y, _[a], {
						that: _,
						AS_ENTRIES: n
					}), _
				}), l.prototype = o, o.constructor = l), (p || h) && (u("delete"), u("has"), n && u("get")), (h || d) && u(a), i && o.clear && delete o.clear
			}
			return f[e] = l, mz({
				global: !0,
				forced: l != s
			}, f), Iz(l, e), i || r.setStrong(l, e, n), l
		}
	});
	var Fa = E((Use, r1) => {
		var Az = Wt();
		r1.exports = function(e, t, r) {
			for (var n in t) Az(e, n, t[n], r);
			return e
		}
	});
	var l1 = E((Xse, o1) => {
		"use strict";
		var Pz = ft().f,
			Cz = cr(),
			n1 = Fa(),
			wz = At(),
			Oz = Da(),
			Mz = Ra(),
			Rz = Pa(),
			Dz = Oa(),
			ui = Tt(),
			i1 = zl().fastKey,
			s1 = Cr(),
			a1 = s1.set,
			Wl = s1.getterFor;
		o1.exports = {
			getConstructor: function(e, t, r, n) {
				var i = e(function(f, u) {
						Oz(f, a), a1(f, {
							type: t,
							index: Cz(null),
							first: void 0,
							last: void 0,
							size: 0
						}), ui || (f.size = 0), u != null && Mz(u, f[n], {
							that: f,
							AS_ENTRIES: r
						})
					}),
					a = i.prototype,
					s = Wl(t),
					o = function(f, u, c) {
						var v = s(f),
							d = l(f, u),
							p, m;
						return d ? d.value = c : (v.last = d = {
							index: m = i1(u, !0),
							key: u,
							value: c,
							previous: p = v.last,
							next: void 0,
							removed: !1
						}, v.first || (v.first = d), p && (p.next = d), ui ? v.size++ : f.size++, m !== "F" && (v.index[m] = d)), f
					},
					l = function(f, u) {
						var c = s(f),
							v = i1(u),
							d;
						if (v !== "F") return c.index[v];
						for (d = c.first; d; d = d.next)
							if (d.key == u) return d
					};
				return n1(a, {
					clear: function() {
						for (var u = this, c = s(u), v = c.index, d = c.first; d;) d.removed = !0, d.previous && (d.previous = d.previous.next = void 0), delete v[d.index], d = d.next;
						c.first = c.last = void 0, ui ? c.size = 0 : u.size = 0
					},
					delete: function(f) {
						var u = this,
							c = s(u),
							v = l(u, f);
						if (v) {
							var d = v.next,
								p = v.previous;
							delete c.index[v.index], v.removed = !0, p && (p.next = d), d && (d.previous = p), c.first == v && (c.first = d), c.last == v && (c.last = p), ui ? c.size-- : u.size--
						}
						return !!v
					},
					forEach: function(u) {
						for (var c = s(this), v = wz(u, arguments.length > 1 ? arguments[1] : void 0), d; d = d ? d.next : c.first;)
							for (v(d.value, d.key, this); d && d.removed;) d = d.previous
					},
					has: function(u) {
						return !!l(this, u)
					}
				}), n1(a, r ? {
					get: function(u) {
						var c = l(this, u);
						return c && c.value
					},
					set: function(u, c) {
						return o(this, u === 0 ? 0 : u, c)
					}
				} : {
					add: function(u) {
						return o(this, u = u === 0 ? 0 : u, u)
					}
				}), ui && Pz(a, "size", {
					get: function() {
						return s(this).size
					}
				}), i
			},
			setStrong: function(e, t, r) {
				var n = t + " Iterator",
					i = Wl(t),
					a = Wl(n);
				Rz(e, t, function(s, o) {
					a1(this, {
						type: n,
						target: s,
						state: i(s),
						kind: o,
						last: void 0
					})
				}, function() {
					for (var s = a(this), o = s.kind, l = s.last; l && l.removed;) l = l.previous;
					return !s.target || !(s.last = l = l ? l.next : s.state.first) ? (s.target = void 0, {
						value: void 0,
						done: !0
					}) : o == "keys" ? {
						value: l.key,
						done: !1
					} : o == "values" ? {
						value: l.value,
						done: !1
					} : {
						value: [l.key, l.value],
						done: !1
					}
				}, r ? "entries" : "values", !r, !0), Dz(t)
			}
		}
	});
	var u1 = E(() => {
		"use strict";
		var Fz = t1(),
			qz = l1();
		Fz("Map", function(e) {
			return function() {
				return e(this, arguments.length ? arguments[0] : void 0)
			}
		}, qz)
	});
	var c1 = E((Yse, h1) => {
		var Lz = oe();
		h1.exports = Lz.Promise
	});
	var p1 = E((Qse, f1) => {
		var kz = oe(),
			Nz = wr(),
			Bz = Xn(),
			Vz = kz.TypeError;
		f1.exports = function(e) {
			if (Nz(e)) return e;
			throw Vz(Bz(e) + " is not a constructor")
		}
	});
	var v1 = E((Zse, m1) => {
		var d1 = Ue(),
			Gz = p1(),
			zz = we(),
			Hz = zz("species");
		m1.exports = function(e, t) {
			var r = d1(e).constructor,
				n;
			return r === void 0 || (n = d1(r)[Hz]) == null ? t : Gz(n)
		}
	});
	var Ul = E((Jse, g1) => {
		var jz = ar();
		g1.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(jz)
	});
	var tu = E((eoe, x1) => {
		var nt = oe(),
			Wz = Ca(),
			Uz = At(),
			y1 = Ce(),
			Xz = ct(),
			$z = Ne(),
			E1 = cl(),
			Kz = li(),
			_1 = ua(),
			Yz = Ul(),
			Qz = on(),
			Zl = nt.setImmediate,
			Jl = nt.clearImmediate,
			Zz = nt.process,
			Xl = nt.Dispatch,
			Jz = nt.Function,
			b1 = nt.MessageChannel,
			eH = nt.String,
			$l = 0,
			hi = {},
			S1 = "onreadystatechange",
			ci, Mr, Kl, Yl;
		try {
			ci = nt.location
		} catch {}
		var eu = function(e) {
				if (Xz(hi, e)) {
					var t = hi[e];
					delete hi[e], t()
				}
			},
			Ql = function(e) {
				return function() {
					eu(e)
				}
			},
			T1 = function(e) {
				eu(e.data)
			},
			I1 = function(e) {
				nt.postMessage(eH(e), ci.protocol + "//" + ci.host)
			};
		(!Zl || !Jl) && (Zl = function(t) {
			var r = Kz(arguments, 1);
			return hi[++$l] = function() {
				Wz(y1(t) ? t : Jz(t), void 0, r)
			}, Mr($l), $l
		}, Jl = function(t) {
			delete hi[t]
		}, Qz ? Mr = function(e) {
			Zz.nextTick(Ql(e))
		} : Xl && Xl.now ? Mr = function(e) {
			Xl.now(Ql(e))
		} : b1 && !Yz ? (Kl = new b1, Yl = Kl.port2, Kl.port1.onmessage = T1, Mr = Uz(Yl.postMessage, Yl)) : nt.addEventListener && y1(nt.postMessage) && !nt.importScripts && ci && ci.protocol !== "file:" && !$z(I1) ? (Mr = I1, nt.addEventListener("message", T1, !1)) : S1 in _1("script") ? Mr = function(e) {
			E1.appendChild(_1("script"))[S1] = function() {
				E1.removeChild(this), eu(e)
			}
		} : Mr = function(e) {
			setTimeout(Ql(e), 0)
		});
		x1.exports = {
			set: Zl,
			clear: Jl
		}
	});
	var P1 = E((toe, A1) => {
		var tH = ar(),
			rH = oe();
		A1.exports = /ipad|iphone|ipod/i.test(tH) && rH.Pebble !== void 0
	});
	var w1 = E((roe, C1) => {
		var nH = ar();
		C1.exports = /web0s(?!.*chrome)/i.test(nH)
	});
	var N1 = E((noe, k1) => {
		var Dr = oe(),
			O1 = At(),
			iH = ha().f,
			ru = tu().set,
			aH = Ul(),
			sH = P1(),
			oH = w1(),
			nu = on(),
			M1 = Dr.MutationObserver || Dr.WebKitMutationObserver,
			R1 = Dr.document,
			D1 = Dr.process,
			qa = Dr.Promise,
			F1 = iH(Dr, "queueMicrotask"),
			L1 = F1 && F1.value,
			fi, Rr, pi, ln, iu, au, La, q1;
		L1 || (fi = function() {
			var e, t;
			for (nu && (e = D1.domain) && e.exit(); Rr;) {
				t = Rr.fn, Rr = Rr.next;
				try {
					t()
				} catch (r) {
					throw Rr ? ln() : pi = void 0, r
				}
			}
			pi = void 0, e && e.enter()
		}, !aH && !nu && !oH && M1 && R1 ? (iu = !0, au = R1.createTextNode(""), new M1(fi).observe(au, {
			characterData: !0
		}), ln = function() {
			au.data = iu = !iu
		}) : !sH && qa && qa.resolve ? (La = qa.resolve(void 0), La.constructor = qa, q1 = O1(La.then, La), ln = function() {
			q1(fi)
		}) : nu ? ln = function() {
			D1.nextTick(fi)
		} : (ru = O1(ru, Dr), ln = function() {
			ru(fi)
		}));
		k1.exports = L1 || function(e) {
			var t = {
				fn: e,
				next: void 0
			};
			pi && (pi.next = t), Rr || (Rr = t, ln()), pi = t
		}
	});
	var su = E((ioe, V1) => {
		"use strict";
		var B1 = xt(),
			lH = function(e) {
				var t, r;
				this.promise = new e(function(n, i) {
					if (t !== void 0 || r !== void 0) throw TypeError("Bad Promise constructor");
					t = n, r = i
				}), this.resolve = B1(t), this.reject = B1(r)
			};
		V1.exports.f = function(e) {
			return new lH(e)
		}
	});
	var z1 = E((aoe, G1) => {
		var uH = Ue(),
			hH = Ye(),
			cH = su();
		G1.exports = function(e, t) {
			if (uH(e), hH(t) && t.constructor === e) return t;
			var r = cH.f(e),
				n = r.resolve;
			return n(t), r.promise
		}
	});
	var j1 = E((soe, H1) => {
		var fH = oe();
		H1.exports = function(e, t) {
			var r = fH.console;
			r && r.error && (arguments.length == 1 ? r.error(e) : r.error(e, t))
		}
	});
	var U1 = E((ooe, W1) => {
		W1.exports = function(e) {
			try {
				return {
					error: !1,
					value: e()
				}
			} catch (t) {
				return {
					error: !0,
					value: t
				}
			}
		}
	});
	var $1 = E((loe, X1) => {
		X1.exports = typeof window == "object"
	});
	var d_ = E(() => {
		"use strict";
		var Ga = de(),
			Na = en(),
			$t = oe(),
			pH = ht(),
			Kt = ut(),
			Ba = c1(),
			K1 = Wt(),
			dH = Fa(),
			Y1 = Ia(),
			mH = ai(),
			vH = Oa(),
			ou = xt(),
			di = Ce(),
			gH = Ye(),
			yH = Da(),
			EH = Qn(),
			Q1 = Ra(),
			_H = _a(),
			bH = v1(),
			i_ = tu().set,
			a_ = N1(),
			SH = z1(),
			TH = j1(),
			s_ = su(),
			lu = U1(),
			fu = Cr(),
			IH = ga(),
			xH = we(),
			AH = $1(),
			Va = on(),
			Z1 = sr(),
			PH = xH("species"),
			Yt = "Promise",
			J1 = fu.get,
			CH = fu.set,
			wH = fu.getterFor(Yt),
			Fr = Ba && Ba.prototype,
			pt = Ba,
			un = Fr,
			o_ = $t.TypeError,
			uu = $t.document,
			pu = $t.process,
			fn = s_.f,
			OH = fn,
			MH = !!(uu && uu.createEvent && $t.dispatchEvent),
			l_ = di($t.PromiseRejectionEvent),
			u_ = "unhandledrejection",
			RH = "rejectionhandled",
			e_ = 0,
			h_ = 1,
			DH = 2,
			du = 1,
			c_ = 2,
			hu = !1,
			ka, t_, mu, r_, mi = IH(Yt, function() {
				var e = EH(pt),
					t = e !== String(pt);
				if (!t && Z1 === 66 || Na && !un.finally) return !0;
				if (Z1 >= 51 && /native code/.test(e)) return !1;
				var r = new pt(function(a) {
						a(1)
					}),
					n = function(a) {
						a(function() {}, function() {})
					},
					i = r.constructor = {};
				return i[PH] = n, hu = r.then(function() {}) instanceof n, hu ? !t && AH && !l_ : !0
			}),
			FH = mi || !_H(function(e) {
				pt.all(e).catch(function() {})
			}),
			f_ = function(e) {
				var t;
				return gH(e) && di(t = e.then) ? t : !1
			},
			vu = function(e, t) {
				if (!e.notified) {
					e.notified = !0;
					var r = e.reactions;
					a_(function() {
						for (var n = e.value, i = e.state == h_, a = 0; r.length > a;) {
							var s = r[a++],
								o = i ? s.ok : s.fail,
								l = s.resolve,
								f = s.reject,
								u = s.domain,
								c, v, d;
							try {
								o ? (i || (e.rejection === c_ && LH(e), e.rejection = du), o === !0 ? c = n : (u && u.enter(), c = o(n), u && (u.exit(), d = !0)), c === s.promise ? f(o_("Promise-chain cycle")) : (v = f_(c)) ? Kt(v, c, l, f) : l(c)) : f(n)
							} catch (p) {
								u && !d && u.exit(), f(p)
							}
						}
						e.reactions = [], e.notified = !1, t && !e.rejection && qH(e)
					})
				}
			},
			p_ = function(e, t, r) {
				var n, i;
				MH ? (n = uu.createEvent("Event"), n.promise = t, n.reason = r, n.initEvent(e, !1, !0), $t.dispatchEvent(n)) : n = {
					promise: t,
					reason: r
				}, !l_ && (i = $t["on" + e]) ? i(n) : e === u_ && TH("Unhandled promise rejection", r)
			},
			qH = function(e) {
				Kt(i_, $t, function() {
					var t = e.facade,
						r = e.value,
						n = n_(e),
						i;
					if (n && (i = lu(function() {
							Va ? pu.emit("unhandledRejection", r, t) : p_(u_, t, r)
						}), e.rejection = Va || n_(e) ? c_ : du, i.error)) throw i.value
				})
			},
			n_ = function(e) {
				return e.rejection !== du && !e.parent
			},
			LH = function(e) {
				Kt(i_, $t, function() {
					var t = e.facade;
					Va ? pu.emit("rejectionHandled", t) : p_(RH, t, e.value)
				})
			},
			hn = function(e, t, r) {
				return function(n) {
					e(t, n, r)
				}
			},
			cn = function(e, t, r) {
				e.done || (e.done = !0, r && (e = r), e.value = t, e.state = DH, vu(e, !0))
			},
			cu = function(e, t, r) {
				if (!e.done) {
					e.done = !0, r && (e = r);
					try {
						if (e.facade === t) throw o_("Promise can't be resolved itself");
						var n = f_(t);
						n ? a_(function() {
							var i = {
								done: !1
							};
							try {
								Kt(n, t, hn(cu, i, e), hn(cn, i, e))
							} catch (a) {
								cn(i, a, e)
							}
						}) : (e.value = t, e.state = h_, vu(e, !1))
					} catch (i) {
						cn({
							done: !1
						}, i, e)
					}
				}
			};
		if (mi && (pt = function(t) {
				yH(this, un), ou(t), Kt(ka, this);
				var r = J1(this);
				try {
					t(hn(cu, r), hn(cn, r))
				} catch (n) {
					cn(r, n)
				}
			}, un = pt.prototype, ka = function(t) {
				CH(this, {
					type: Yt,
					done: !1,
					notified: !1,
					parent: !1,
					reactions: [],
					rejection: !1,
					state: e_,
					value: void 0
				})
			}, ka.prototype = dH(un, {
				then: function(t, r) {
					var n = wH(this),
						i = n.reactions,
						a = fn(bH(this, pt));
					return a.ok = di(t) ? t : !0, a.fail = di(r) && r, a.domain = Va ? pu.domain : void 0, n.parent = !0, i[i.length] = a, n.state != e_ && vu(n, !1), a.promise
				},
				catch: function(e) {
					return this.then(void 0, e)
				}
			}), t_ = function() {
				var e = new ka,
					t = J1(e);
				this.promise = e, this.resolve = hn(cu, t), this.reject = hn(cn, t)
			}, s_.f = fn = function(e) {
				return e === pt || e === mu ? new t_(e) : OH(e)
			}, !Na && di(Ba) && Fr !== Object.prototype)) {
			r_ = Fr.then, hu || (K1(Fr, "then", function(t, r) {
				var n = this;
				return new pt(function(i, a) {
					Kt(r_, n, i, a)
				}).then(t, r)
			}, {
				unsafe: !0
			}), K1(Fr, "catch", un.catch, {
				unsafe: !0
			}));
			try {
				delete Fr.constructor
			} catch {}
			Y1 && Y1(Fr, un)
		}
		Ga({
			global: !0,
			wrap: !0,
			forced: mi
		}, {
			Promise: pt
		});
		mH(pt, Yt, !1, !0);
		vH(Yt);
		mu = pH(Yt);
		Ga({
			target: Yt,
			stat: !0,
			forced: mi
		}, {
			reject: function(t) {
				var r = fn(this);
				return Kt(r.reject, void 0, t), r.promise
			}
		});
		Ga({
			target: Yt,
			stat: !0,
			forced: Na || mi
		}, {
			resolve: function(t) {
				return SH(Na && this === mu ? pt : this, t)
			}
		});
		Ga({
			target: Yt,
			stat: !0,
			forced: FH
		}, {
			all: function(t) {
				var r = this,
					n = fn(r),
					i = n.resolve,
					a = n.reject,
					s = lu(function() {
						var o = ou(r.resolve),
							l = [],
							f = 0,
							u = 1;
						Q1(t, function(c) {
							var v = f++,
								d = !1;
							u++, Kt(o, r, c).then(function(p) {
								d || (d = !0, l[v] = p, --u || i(l))
							}, a)
						}), --u || i(l)
					});
				return s.error && a(s.value), n.promise
			},
			race: function(t) {
				var r = this,
					n = fn(r),
					i = n.reject,
					a = lu(function() {
						var s = ou(r.resolve);
						Q1(t, function(o) {
							Kt(s, r, o).then(n.resolve, i)
						})
					});
				return a.error && i(a.value), n.promise
			}
		})
	});
	var T_ = E((coe, S_) => {
		var E_ = oe(),
			__ = $n(),
			b_ = Ce(),
			kH = cr(),
			za = Ta(),
			NH = Wt(),
			BH = we(),
			VH = en(),
			m_ = "USE_FUNCTION_CONSTRUCTOR",
			v_ = BH("asyncIterator"),
			g_ = E_.AsyncIterator,
			y_ = __.AsyncIteratorPrototype,
			Lt, gu;
		if (y_) Lt = y_;
		else if (b_(g_)) Lt = g_.prototype;
		else if (__[m_] || E_[m_]) try {
			gu = za(za(za(Function("return async function*(){}()")()))), za(gu) === Object.prototype && (Lt = gu)
		} catch {}
		Lt ? VH && (Lt = kH(Lt)) : Lt = {};
		b_(Lt[v_]) || NH(Lt, v_, function() {
			return this
		});
		S_.exports = Lt
	});
	var bu = E((foe, P_) => {
		"use strict";
		var yu = Ca(),
			Ha = Ue(),
			GH = cr(),
			I_ = or(),
			zH = Fa(),
			x_ = Cr(),
			HH = ht(),
			jH = T_(),
			ja = HH("Promise"),
			WH = x_.set,
			Eu = x_.get,
			_u = function(e, t, r) {
				var n = e.done;
				ja.resolve(e.value).then(function(i) {
					t({
						done: n,
						value: i
					})
				}, r)
			},
			A_ = function(t) {
				WH(this, {
					iterator: Ha(t),
					next: t.next
				})
			};
		A_.prototype = zH(GH(jH), {
			next: function(t) {
				var r = Eu(this),
					n = !!arguments.length;
				return new ja(function(i, a) {
					var s = Ha(yu(r.next, r.iterator, n ? [t] : []));
					_u(s, i, a)
				})
			},
			return: function(e) {
				var t = Eu(this).iterator,
					r = !!arguments.length;
				return new ja(function(n, i) {
					var a = I_(t, "return");
					if (a === void 0) return n({
						done: !0,
						value: e
					});
					var s = Ha(yu(a, t, r ? [e] : []));
					_u(s, n, i)
				})
			},
			throw: function(e) {
				var t = Eu(this).iterator,
					r = !!arguments.length;
				return new ja(function(n, i) {
					var a = I_(t, "throw");
					if (a === void 0) return i(e);
					var s = Ha(yu(a, t, r ? [e] : []));
					_u(s, n, i)
				})
			}
		});
		P_.exports = A_
	});
	var w_ = E((poe, C_) => {
		var UH = ut(),
			XH = bu(),
			$H = Ue(),
			KH = ii(),
			YH = or(),
			QH = we(),
			ZH = QH("asyncIterator");
		C_.exports = function(e, t) {
			var r = arguments.length < 2 ? YH(e, ZH) : t;
			return r ? $H(UH(r, e)) : new XH(KH(e))
		}
	});
	var M_ = E((doe, O_) => {
		var JH = oe();
		O_.exports = function(e) {
			return JH[e].prototype
		}
	});
	var q_ = E((moe, F_) => {
		"use strict";
		var ej = oe(),
			R_ = ut(),
			D_ = xt(),
			Su = Ue(),
			tj = ht(),
			rj = or(),
			nj = 9007199254740991,
			ij = ej.TypeError,
			vi = function(e) {
				var t = e == 0,
					r = e == 1,
					n = e == 2,
					i = e == 3;
				return function(a, s, o) {
					Su(a);
					var l = tj("Promise"),
						f = D_(a.next),
						u = 0,
						c = s !== void 0;
					return (c || !t) && D_(s), new l(function(v, d) {
						var p = function(g, y) {
								try {
									var _ = rj(a, "return");
									if (_) return l.resolve(R_(_, a)).then(function() {
										g(y)
									}, function(b) {
										d(b)
									})
								} catch (b) {
									return d(b)
								}
								g(y)
							},
							m = function(g) {
								p(d, g)
							},
							h = function() {
								try {
									if (t && u > nj && c) throw ij("The allowed number of iterations has been exceeded");
									l.resolve(Su(R_(f, a))).then(function(g) {
										try {
											if (Su(g).done) t ? (o.length = u, v(o)) : v(i ? !1 : n || void 0);
											else {
												var y = g.value;
												c ? l.resolve(t ? s(y, u) : s(y)).then(function(_) {
													r ? h() : n ? _ ? h() : p(v, !1) : t ? (o[u++] = _, h()) : _ ? p(v, i || y) : h()
												}, m) : (o[u++] = y, h())
											}
										} catch (_) {
											m(_)
										}
									}, m)
								} catch (g) {
									m(g)
								}
							};
						h()
					})
				}
			};
		F_.exports = {
			toArray: vi(0),
			forEach: vi(1),
			every: vi(2),
			some: vi(3),
			find: vi(4)
		}
	});
	var k_ = E((voe, L_) => {
		"use strict";
		var aj = At(),
			sj = Me(),
			oj = wr(),
			lj = w_(),
			uj = ii(),
			hj = ni(),
			cj = or(),
			fj = M_(),
			pj = ht(),
			dj = we(),
			mj = bu(),
			vj = q_().toArray,
			gj = dj("asyncIterator"),
			yj = fj("Array").values;
		L_.exports = function(t) {
			var r = this,
				n = arguments.length,
				i = n > 1 ? arguments[1] : void 0,
				a = n > 2 ? arguments[2] : void 0;
			return new(pj("Promise"))(function(s) {
				var o = sj(t);
				i !== void 0 && (i = aj(i, a));
				var l = cj(o, gj),
					f = l ? void 0 : hj(o) || yj,
					u = oj(r) ? new r : [],
					c = l ? lj(o, l) : new mj(uj(o, f));
				s(vj(c, i, u))
			})
		}
	});
	var N_ = E(() => {
		var Ej = de(),
			_j = k_();
		Ej({
			target: "Array",
			stat: !0
		}, {
			fromAsync: _j
		})
	});
	var B_ = E(() => {
		gl()
	});
	var V_ = E(() => {
		"use strict";
		var bj = de(),
			Sj = Ft().filterReject,
			Tj = Fe();
		bj({
			target: "Array",
			proto: !0
		}, {
			filterOut: function(t) {
				return Sj(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		Tj("filterOut")
	});
	var G_ = E(() => {
		"use strict";
		var Ij = de(),
			xj = Ft().filterReject,
			Aj = Fe();
		Ij({
			target: "Array",
			proto: !0
		}, {
			filterReject: function(t) {
				return xj(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		Aj("filterReject")
	});
	var Tu = E((xoe, H_) => {
		var Pj = At(),
			Cj = xr(),
			wj = Me(),
			Oj = Ae(),
			z_ = function(e) {
				var t = e == 1;
				return function(r, n, i) {
					for (var a = wj(r), s = Cj(a), o = Pj(n, i), l = Oj(s), f, u; l-- > 0;)
						if (f = s[l], u = o(f, l, a), u) switch (e) {
							case 0:
								return f;
							case 1:
								return l
						}
					return t ? -1 : void 0
				}
			};
		H_.exports = {
			findLast: z_(0),
			findLastIndex: z_(1)
		}
	});
	var j_ = E(() => {
		"use strict";
		var Mj = de(),
			Rj = Tu().findLast,
			Dj = Fe();
		Mj({
			target: "Array",
			proto: !0
		}, {
			findLast: function(t) {
				return Rj(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		Dj("findLast")
	});
	var W_ = E(() => {
		"use strict";
		var Fj = de(),
			qj = Tu().findLastIndex,
			Lj = Fe();
		Fj({
			target: "Array",
			proto: !0
		}, {
			findLastIndex: function(t) {
				return qj(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		Lj("findLastIndex")
	});
	var X_ = E((Ooe, U_) => {
		U_.exports = function(e, t) {
			for (var r = 0, n = t.length, i = new e(n); n > r;) i[r] = t[r++];
			return i
		}
	});
	var K_ = E((Moe, $_) => {
		var kj = oe(),
			Nj = At(),
			Bj = Te(),
			Vj = xr(),
			Gj = Me(),
			zj = Kn(),
			Hj = Ae(),
			jj = cr(),
			Wj = X_(),
			Uj = kj.Array,
			Xj = Bj([].push);
		$_.exports = function(e, t, r, n) {
			for (var i = Gj(e), a = Vj(i), s = Nj(t, r), o = jj(null), l = Hj(a), f = 0, u, c, v; l > f; f++) v = a[f], c = zj(s(v, f, i)), c in o ? Xj(o[c], v) : o[c] = [v];
			if (n && (u = n(i), u !== Uj))
				for (c in o) o[c] = Wj(u, o[c]);
			return o
		}
	});
	var Y_ = E(() => {
		"use strict";
		var $j = de(),
			Kj = K_(),
			Yj = yl(),
			Qj = Fe();
		$j({
			target: "Array",
			proto: !0
		}, {
			groupBy: function(t) {
				var r = arguments.length > 1 ? arguments[1] : void 0;
				return Kj(this, t, r, Yj)
			}
		});
		Qj("groupBy")
	});
	var J_ = E(() => {
		var Zj = de(),
			Jj = hr(),
			Q_ = Object.isFrozen,
			Z_ = function(e, t) {
				if (!Q_ || !Jj(e) || !Q_(e)) return !1;
				for (var r = 0, n = e.length, i; r < n;)
					if (i = e[r++], !(typeof i == "string" || t && typeof i > "u")) return !1;
				return n !== 0
			};
		Zj({
			target: "Array",
			stat: !0
		}, {
			isTemplateObject: function(t) {
				if (!Z_(t, !0)) return !1;
				var r = t.raw;
				return !(r.length !== t.length || !Z_(r, !1))
			}
		})
	});
	var rb = E(() => {
		"use strict";
		var eW = Tt(),
			tW = Fe(),
			eb = Me(),
			tb = Ae(),
			rW = ft().f;
		eW && !("lastItem" in []) && (rW(Array.prototype, "lastItem", {
			configurable: !0,
			get: function() {
				var t = eb(this),
					r = tb(t);
				return r == 0 ? void 0 : t[r - 1]
			},
			set: function(t) {
				var r = eb(this),
					n = tb(r);
				return r[n == 0 ? 0 : n - 1] = t
			}
		}), tW("lastItem"))
	});
	var nb = E(() => {
		"use strict";
		var nW = Tt(),
			iW = Fe(),
			aW = Me(),
			sW = Ae(),
			oW = ft().f;
		nW && !("lastIndex" in []) && (oW(Array.prototype, "lastIndex", {
			configurable: !0,
			get: function() {
				var t = aW(this),
					r = sW(t);
				return r == 0 ? 0 : r - 1
			}
		}), iW("lastIndex"))
	});
	var sb = E((Voe, ab) => {
		"use strict";
		var lW = ht(),
			Wa = Te(),
			uW = xt(),
			hW = Ae(),
			cW = Me(),
			fW = Or(),
			ib = lW("Map"),
			Iu = ib.prototype,
			pW = Wa(Iu.forEach),
			dW = Wa(Iu.has),
			mW = Wa(Iu.set),
			vW = Wa([].push);
		ab.exports = function(t) {
			var r = cW(this),
				n = hW(r),
				i = fW(r, 0),
				a = new ib,
				s = t != null ? uW(t) : function(u) {
					return u
				},
				o, l, f;
			for (o = 0; o < n; o++) l = r[o], f = s(l), dW(a, f) || mW(a, f, l);
			return pW(a, function(u) {
				vW(i, u)
			}), i
		}
	});
	var lb = E(() => {
		"use strict";
		var gW = de(),
			yW = Fe(),
			EW = sb();
		gW({
			target: "Array",
			proto: !0
		}, {
			uniqueBy: EW
		});
		yW("uniqueBy")
	});
	var hb = E((Hoe, ub) => {
		var _W = qE();
		u1();
		d_();
		N_();
		B_();
		V_();
		G_();
		j_();
		W_();
		Y_();
		J_();
		rb();
		nb();
		lb();
		ub.exports = _W
	});
	var Cb = E(Qa => {
		"use strict";
		Object.defineProperty(Qa, "__esModule", {
			value: !0
		});
		Qa.strFromU8 = Pb;
		Qa.unzip = DW;
		var cb = {},
			bW = function(e, t, r, n, i) {
				let a = new Worker(cb[t] || (cb[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
					type: "text/javascript"
				}))));
				return a.onmessage = function(s) {
					let o = s.data,
						l = o.$e$;
					if (l) {
						let f = new Error(l[0]);
						f.code = l[1], f.stack = l[2], i(f, null)
					} else i(null, o)
				}, a.postMessage(r, n), a
			},
			Ze = Uint8Array,
			mr = Uint16Array,
			xu = Uint32Array,
			Au = new Ze([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
			Pu = new Ze([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
			mb = new Ze([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
			vb = function(e, t) {
				let r = new mr(31);
				for (var n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
				let i = new xu(r[30]);
				for (n = 1; n < 30; ++n)
					for (let a = r[n]; a < r[n + 1]; ++a) i[a] = a - r[n] << 5 | n;
				return [r, i]
			},
			gb = vb(Au, 2),
			Cu = gb[0],
			SW = gb[1];
		Cu[28] = 258, SW[258] = 28;
		var TW = vb(Pu, 0),
			yb = TW[0],
			Ka = new mr(32768);
		for (be = 0; be < 32768; ++be) {
			let e = (43690 & be) >>> 1 | (21845 & be) << 1;
			e = (52428 & e) >>> 2 | (13107 & e) << 2, e = (61680 & e) >>> 4 | (3855 & e) << 4, Ka[be] = ((65280 & e) >>> 8 | (255 & e) << 8) >>> 1
		}
		var be, pn = function(e, t, r) {
				let n = e.length,
					i = 0,
					a = new mr(t);
				for (; i < n; ++i) e[i] && ++a[e[i] - 1];
				let s = new mr(t);
				for (i = 0; i < t; ++i) s[i] = s[i - 1] + a[i - 1] << 1;
				let o;
				if (r) {
					o = new mr(1 << t);
					let l = 15 - t;
					for (i = 0; i < n; ++i)
						if (e[i]) {
							let f = i << 4 | e[i],
								u = t - e[i],
								c = s[e[i] - 1]++ << u;
							for (let v = c | (1 << u) - 1; c <= v; ++c) o[Ka[c] >>> l] = f
						}
				} else
					for (o = new mr(n), i = 0; i < n; ++i) e[i] && (o[i] = Ka[s[e[i] - 1]++] >>> 15 - e[i]);
				return o
			},
			gi = new Ze(288);
		for (be = 0; be < 144; ++be) gi[be] = 8;
		for (be = 144; be < 256; ++be) gi[be] = 9;
		for (be = 256; be < 280; ++be) gi[be] = 7;
		for (be = 280; be < 288; ++be) gi[be] = 8;
		var Eb = new Ze(32);
		for (be = 0; be < 32; ++be) Eb[be] = 5;
		var _b = pn(gi, 9, 1),
			bb = pn(Eb, 5, 1),
			Xa = function(e) {
				let t = e[0];
				for (let r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
				return t
			},
			dt = function(e, t, r) {
				let n = t / 8 | 0;
				return (e[n] | e[n + 1] << 8) >> (7 & t) & r
			},
			$a = function(e, t) {
				let r = t / 8 | 0;
				return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (7 & t)
			},
			Sb = function(e) {
				return (e + 7) / 8 | 0
			},
			Ya = function(e, t, r) {
				(t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length);
				let n = new(e.BYTES_PER_ELEMENT === 2 ? mr : e.BYTES_PER_ELEMENT === 4 ? xu : Ze)(r - t);
				return n.set(e.subarray(t, r)), n
			},
			Tb = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
			Qe = function(e, t, r) {
				let n = new Error(t || Tb[e]);
				if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, Qe), !r) throw n;
				return n
			},
			Ib = function(e, t, r) {
				let n = e.length;
				if (!n || r && r.f && !r.l) return t || new Ze(0);
				let i = !t || r,
					a = !r || r.i;
				r || (r = {}), t || (t = new Ze(3 * n));
				let s = function(b) {
						let S = t.length;
						if (b > S) {
							let x = new Ze(Math.max(2 * S, b));
							x.set(t), t = x
						}
					},
					o = r.f || 0,
					l = r.p || 0,
					f = r.b || 0,
					u = r.l,
					c = r.d,
					v = r.m,
					d = r.n,
					p = 8 * n;
				do {
					if (!u) {
						o = dt(e, l, 1);
						let T = dt(e, l + 1, 3);
						if (l += 3, !T) {
							let P = e[(h = Sb(l) + 4) - 4] | e[h - 3] << 8,
								D = h + P;
							if (D > n) {
								a && Qe(0);
								break
							}
							i && s(f + P), t.set(e.subarray(h, D), f), r.b = f += P, r.p = l = 8 * D, r.f = o;
							continue
						}
						if (T === 1) u = _b, c = bb, v = 9, d = 5;
						else if (T === 2) {
							let P = dt(e, l, 31) + 257,
								D = dt(e, l + 10, 15) + 4,
								w = P + dt(e, l + 5, 31) + 1;
							l += 14;
							let C = new Ze(w),
								F = new Ze(19);
							for (var m = 0; m < D; ++m) F[mb[m]] = dt(e, l + 3 * m, 7);
							l += 3 * D;
							let O = Xa(F),
								R = (1 << O) - 1,
								L = pn(F, O, 1);
							for (m = 0; m < w;) {
								let Y = L[dt(e, l, R)];
								var h;
								if (l += 15 & Y, (h = Y >>> 4) < 16) C[m++] = h;
								else {
									var g = 0;
									let A = 0;
									for (h === 16 ? (A = 3 + dt(e, l, 3), l += 2, g = C[m - 1]) : h === 17 ? (A = 3 + dt(e, l, 7), l += 3) : h === 18 && (A = 11 + dt(e, l, 127), l += 7); A--;) C[m++] = g
								}
							}
							let H = C.subarray(0, P);
							var y = C.subarray(P);
							v = Xa(H), d = Xa(y), u = pn(H, v, 1), c = pn(y, d, 1)
						} else Qe(1);
						if (l > p) {
							a && Qe(0);
							break
						}
					}
					i && s(f + 131072);
					let b = (1 << v) - 1,
						S = (1 << d) - 1,
						x = l;
					for (;; x = l) {
						let T = (g = u[$a(e, l) & b]) >>> 4;
						if (l += 15 & g, l > p) {
							a && Qe(0);
							break
						}
						if (g || Qe(2), T < 256) t[f++] = T;
						else {
							if (T === 256) {
								x = l, u = null;
								break
							} {
								let P = T - 254;
								if (T > 264) {
									var _ = Au[m = T - 257];
									P = dt(e, l, (1 << _) - 1) + Cu[m], l += _
								}
								let D = c[$a(e, l) & S],
									w = D >>> 4;
								if (D || Qe(3), l += 15 & D, y = yb[w], w > 3 && (_ = Pu[w], y += $a(e, l) & (1 << _) - 1, l += _), l > p) {
									a && Qe(0);
									break
								}
								i && s(f + 131072);
								let C = f + P;
								for (; f < C; f += 4) t[f] = t[f - y], t[f + 1] = t[f + 1 - y], t[f + 2] = t[f + 2 - y], t[f + 3] = t[f + 3 - y];
								f = C
							}
						}
					}
					r.l = u, r.p = x, r.b = f, r.f = o, u && (o = 1, r.m = v, r.d = c, r.n = d)
				} while (!o);
				return f === t.length ? t : Ya(t, 0, f)
			},
			IW = function(e, t) {
				let r = {};
				for (var n in e) r[n] = e[n];
				for (var n in t) r[n] = t[n];
				return r
			},
			fb = function(e, t, r) {
				let n = e(),
					i = e.toString(),
					a = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(",");
				for (let s = 0; s < n.length; ++s) {
					let o = n[s],
						l = a[s];
					if (typeof o == "function") {
						t += ";" + l + "=";
						let f = o.toString();
						if (o.prototype)
							if (f.indexOf("[native code]") !== -1) {
								let u = f.indexOf(" ", 8) + 1;
								t += f.slice(u, f.indexOf("(", u))
							} else {
								t += f;
								for (let u in o.prototype) t += ";" + l + ".prototype." + u + "=" + o.prototype[u].toString()
							}
						else t += f
					} else r[l] = o
				}
				return [t, r]
			},
			Ua = [],
			xW = function(e) {
				let t = [];
				for (let r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
				return t
			},
			AW = function(e, t, r, n) {
				let i;
				if (!Ua[r]) {
					let s = "",
						o = {},
						l = e.length - 1;
					for (let f = 0; f < l; ++f) i = fb(e[f], s, o), s = i[0], o = i[1];
					Ua[r] = fb(e[l], s, o)
				}
				let a = IW({}, Ua[r][1]);
				return bW(Ua[r][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + t.toString() + "}", r, a, xW(a), n)
			},
			PW = function() {
				return [Ze, mr, xu, Au, Pu, mb, Cu, yb, _b, bb, Ka, Tb, pn, Xa, dt, $a, Sb, Ya, Qe, Ib, wu, xb, Ab]
			},
			xb = function(e) {
				return postMessage(e, [e.buffer])
			},
			Ab = function(e) {
				return e && e.size && new Ze(e.size)
			},
			CW = function(e, t, r, n, i, a) {
				var s = AW(r, n, i, function(o, l) {
					s.terminate(), a(o, l)
				});
				return s.postMessage([e, t], t.consume ? [e.buffer] : []),
					function() {
						s.terminate()
					}
			},
			dr = function(e, t) {
				return e[t] | e[t + 1] << 8
			},
			Qt = function(e, t) {
				return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
			};

		function wW(e, t, r) {
			return r || (r = t, t = {}), typeof r != "function" && Qe(7), CW(e, t, [PW], function(n) {
				return xb(wu(n.data[0], Ab(n.data[1])))
			}, 1, r)
		}

		function wu(e, t) {
			return Ib(e, t)
		}
		var pb = typeof TextDecoder < "u" && new TextDecoder,
			OW = function(e) {
				for (let t = "", r = 0;;) {
					let n = e[r++],
						i = (n > 127) + (n > 223) + (n > 239);
					if (r + i > e.length) return [t, Ya(e, r - 1)];
					i ? i === 3 ? (n = ((15 & n) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536, t += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)) : t += 1 & i ? String.fromCharCode((31 & n) << 6 | 63 & e[r++]) : String.fromCharCode((15 & n) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : t += String.fromCharCode(n)
				}
			};

		function Pb(e, t) {
			if (t) {
				let r = "";
				for (let n = 0; n < e.length; n += 16384) r += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
				return r
			}
			if (pb) return pb.decode(e);
			{
				let r = OW(e),
					n = r[0];
				return r[1].length && Qe(8), n
			}
		}
		var MW = function(e, t) {
				return t + 30 + dr(e, t + 26) + dr(e, t + 28)
			},
			RW = function(e, t, r) {
				let n = dr(e, t + 28),
					i = Pb(e.subarray(t + 46, t + 46 + n), !(2048 & dr(e, t + 8))),
					a = t + 46 + n,
					s = Qt(e, t + 20),
					o = r && s === 4294967295 ? z64e(e, a) : [s, Qt(e, t + 24), Qt(e, t + 42)],
					l = o[0],
					f = o[1],
					u = o[2];
				return [dr(e, t + 10), l, f, i, a + dr(e, t + 30) + dr(e, t + 32), u]
			},
			db = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(e) {
				e()
			};

		function DW(e, t, r) {
			r || (r = t, t = {}), typeof r != "function" && Qe(7);
			let n = [],
				i = function() {
					for (let f = 0; f < n.length; ++f) n[f]()
				},
				a = {},
				s = function(f, u) {
					db(function() {
						r(f, u)
					})
				};
			db(function() {
				s = r
			});
			let o = e.length - 22;
			for (; Qt(e, o) !== 101010256; --o)
				if (!o || e.length - o > 65558) return s(Qe(13, 0, 1), null), i;
			let l = dr(e, o + 8);
			if (l) {
				let f = l,
					u = Qt(e, o + 16),
					c = u === 4294967295 || f === 65535;
				if (c) {
					let p = Qt(e, o - 12);
					c = Qt(e, p) === 101075792, c && (f = l = Qt(e, p + 32), u = Qt(e, p + 48))
				}
				let v = t && t.filter,
					d = function() {
						let p = RW(e, u, c),
							m = p[0],
							h = p[1],
							g = p[2],
							y = p[3],
							_ = p[4],
							b = p[5],
							S = MW(e, b);
						u = _;
						let x = function(T, P) {
							T ? (i(), s(T, null)) : (P && (a[y] = P), --l || s(null, a))
						};
						if (!v || v({
								name: y,
								size: h,
								originalSize: g,
								compression: m
							}))
							if (m)
								if (m === 8) {
									let T = e.subarray(S, S + h);
									if (h < 32e4) try {
										x(null, wu(T, new Ze(g)))
									} catch (P) {
										x(P, null)
									} else n.push(wW(T, {
										size: g
									}, x))
								} else x(Qe(14, "unknown compression type " + m, 1), null);
						else x(null, Ya(e, S, S + h));
						else x(null, null)
					};
				for (let p = 0; p < f; ++p) d(p)
			} else s(null, {});
			return i
		}
	});
	var Ob = {};
	NP(Ob, {
		fetchLottie: () => VW,
		unZipDotLottie: () => wb
	});

	function FW(e) {
		let t = JSON.parse(e);
		if (!("animations" in t)) throw new Error("Manifest not found");
		if (t.animations.length === 0) throw new Error("No animations listed in the manifest");
		return t
	}

	function qW(e) {
		let t = new Uint8Array(e, 0, 32);
		return t[0] === 80 && t[1] === 75 && t[2] === 3 && t[3] === 4
	}
	async function LW(e) {
		return await fetch(new URL(e).href).then(t => t.arrayBuffer())
	}
	async function kW(e) {
		return (await new Promise(r => {
			let n = new FileReader;
			n.readAsDataURL(new Blob([e])), n.onload = () => r(n.result)
		})).split(",", 2)[1]
	}
	async function NW(e) {
		let t = new Uint8Array(e),
			r = await new Promise((n, i) => {
				(0, Za.unzip)(t, (a, s) => a ? i(a) : n(s))
			});
		return {
			read: n => (0, Za.strFromU8)(r[n]),
			readB64: async n => await kW(r[n])
		}
	}
	async function BW(e, t) {
		if (!("assets" in e)) return e;
		async function r(i) {
			let {
				p: a
			} = i;
			if (a == null || t.read(`images/${a}`) == null) return i;
			let s = a.split(".").pop(),
				o = await t.readB64(`images/${a}`);
			if (s?.startsWith("data:")) return i.p = s, i.e = 1, i;
			switch (s) {
				case "svg":
				case "svg+xml":
					i.p = `data:image/svg+xml;base64,${o}`;
					break;
				case "png":
				case "jpg":
				case "jpeg":
				case "gif":
				case "webp":
					i.p = `data:image/${s};base64,${o}`;
					break;
				default:
					i.p = `data:;base64,${o}`
			}
			return i.e = 1, i
		}
		return (await Promise.all(e.assets.map(r))).map((i, a) => {
			e.assets[a] = i
		}), e
	}
	async function wb(e) {
		let t = await NW(e),
			r = FW(t.read("manifest.json"));
		return (await Promise.all(r.animations.map(i => {
			let a = JSON.parse(t.read(`animations/${i.id}.json`));
			return BW(a, t)
		})))[0]
	}
	async function VW(e) {
		let t = await LW(e);
		return qW(t) ? await wb(t) : JSON.parse(new TextDecoder().decode(t))
	}
	var Za, Mb = kP(() => {
		Za = BP(Cb())
	});
	var Lb = E(mt => {
		"use strict";
		var Du = lt().default;
		Object.defineProperty(mt, "__esModule", {
			value: !0
		});
		mt.ready = mt.init = mt.destroy = mt.createInstance = mt.cleanupElement = void 0;
		var GW = Du(Sr()),
			Ja = Du(lc()),
			Ou = Du(Fo());
		hb();
		var zW = (Mb(), VP(Ob)),
			HW = () => window.Webflow.require("lottie").lottie,
			jW = () => !!(window.Webflow.env("design") || window.Webflow.env("preview")),
			yi = {
				Playing: "playing",
				Stopped: "stopped"
			},
			Mu = class {
				constructor() {
					(0, Ja.default)(this, "_cache", [])
				}
				set(t, r) {
					let n = (0, Ou.default)(this._cache, ({
						wrapper: i
					}) => i === t);
					n !== -1 && this._cache.splice(n, 1), this._cache.push({
						wrapper: t,
						instance: r
					})
				}
				delete(t) {
					let r = (0, Ou.default)(this._cache, ({
						wrapper: n
					}) => n === t);
					r !== -1 && this._cache.splice(r, 1)
				}
				get(t) {
					let r = (0, Ou.default)(this._cache, ({
						wrapper: n
					}) => n === t);
					return r !== -1 ? this._cache[r].instance : null
				}
			},
			es = new Mu,
			Rb = {},
			Ru = class {
				constructor() {
					(0, Ja.default)(this, "config", null), (0, Ja.default)(this, "currentState", yi.Stopped), (0, Ja.default)(this, "handlers", {
						enterFrame: [],
						complete: [],
						loop: [],
						dataReady: [],
						destroy: [],
						error: []
					})
				}
				load(t) {
					let n = (t.dataset || Rb).src || "";
					n.endsWith(".lottie") ? (0, zW.fetchLottie)(n).then(i => {
						this._loadAnimation(t, i)
					}) : this._loadAnimation(t, void 0), es.set(t, this), this.container = t
				}
				_loadAnimation(t, r) {
					let n = t.dataset || Rb,
						i = n.src || "",
						a = n.preserveAspectRatio || "xMidYMid meet",
						s = n.renderer || "svg",
						o = parseFloat(n.loop) === 1,
						l = parseFloat(n.direction) || 1,
						f = parseFloat(n.autoplay) === 1,
						u = parseFloat(n.duration) || 0,
						c = parseFloat(n.isIx2Target) === 1,
						v = parseFloat(n.ix2InitialState);
					isNaN(v) && (v = null);
					let d = {
						src: i,
						loop: o,
						autoplay: f,
						renderer: s,
						direction: l,
						duration: u,
						hasIx2: c,
						ix2InitialValue: v,
						preserveAspectRatio: a
					};
					if (this.animationItem && this.config && this.config.src === i && s === this.config.renderer && a === this.config.preserveAspectRatio) {
						if (o !== this.config.loop && this.setLooping(o), c || (l !== this.config.direction && this.setDirection(l), u !== this.config.duration && (u > 0 && u !== this.duration ? this.setSpeed(this.duration / u) : this.setSpeed(1))), f && this.play(), v && v !== this.config.ix2InitialValue) {
							let m = v / 100;
							this.goToFrame(this.frames * m)
						}
						this.config = d;
						return
					}
					let p = {
						container: t,
						loop: o,
						autoplay: f,
						renderer: s,
						rendererSettings: {
							preserveAspectRatio: a,
							progressiveLoad: !0,
							hideOnTransparent: !0
						}
					};
					try {
						this.animationItem && this.destroy(), this.animationItem = HW().loadAnimation((0, GW.default)({}, p, r ? {
							animationData: r
						} : {
							path: i
						}))
					} catch (m) {
						this.handlers.error.forEach(h => h(m));
						return
					}
					this.animationItem && (jW() && (this.animationItem.addEventListener("enterFrame", () => {
						if (!this.isPlaying) return;
						let {
							currentFrame: m,
							totalFrames: h,
							playDirection: g
						} = this.animationItem, y = m / h * 100, _ = Math.round(g === 1 ? y : 100 - y);
						this.handlers.enterFrame.forEach(b => b(_, m))
					}), this.animationItem.addEventListener("complete", () => {
						if (this.currentState !== yi.Playing) {
							this.handlers.complete.forEach(m => m());
							return
						}
						if (!this.animationItem.loop) {
							this.handlers.complete.forEach(m => m());
							return
						}
						this.currentState = yi.Stopped
					}), this.animationItem.addEventListener("loopComplete", m => {
						this.handlers.loop.forEach(h => h(m))
					}), this.animationItem.addEventListener("data_failed", m => {
						this.handlers.error.forEach(h => h(m))
					}), this.animationItem.addEventListener("error", m => {
						this.handlers.error.forEach(h => h(m))
					})), this.isLoaded ? (this.handlers.dataReady.forEach(m => m()), f && this.play()) : this.animationItem.addEventListener("data_ready", () => {
						if (this.handlers.dataReady.forEach(m => m()), c || (this.setDirection(l), u > 0 && u !== this.duration && this.setSpeed(this.duration / u), f && this.play()), v) {
							let m = v / 100;
							this.goToFrame(this.frames * m)
						}
					}), this.config = d)
				}
				onFrameChange(t) {
					this.handlers.enterFrame.indexOf(t) === -1 && this.handlers.enterFrame.push(t)
				}
				onPlaybackComplete(t) {
					this.handlers.complete.indexOf(t) === -1 && this.handlers.complete.push(t)
				}
				onLoopComplete(t) {
					this.handlers.loop.indexOf(t) === -1 && this.handlers.loop.push(t)
				}
				onDestroy(t) {
					this.handlers.destroy.indexOf(t) === -1 && this.handlers.destroy.push(t)
				}
				onDataReady(t) {
					this.handlers.dataReady.indexOf(t) === -1 && this.handlers.dataReady.push(t)
				}
				onError(t) {
					this.handlers.error.indexOf(t) === -1 && this.handlers.error.push(t)
				}
				play() {
					if (!this.animationItem) return;
					let t = this.animationItem.playDirection === 1 ? 0 : this.frames;
					this.animationItem.goToAndPlay(t, !0), this.currentState = yi.Playing
				}
				stop() {
					if (this.animationItem) {
						if (this.isPlaying) {
							let {
								playDirection: t
							} = this.animationItem, r = t === 1 ? 0 : this.frames;
							this.animationItem.goToAndStop(r, !0)
						}
						this.currentState = yi.Stopped
					}
				}
				destroy() {
					this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(t => t()), this.container && es.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(t => this.handlers[t].length = 0), this.animationItem = null, this.container = null, this.config = null)
				}
				get isPlaying() {
					return this.animationItem ? !this.animationItem.isPaused : !1
				}
				get isPaused() {
					return this.animationItem ? this.animationItem.isPaused : !1
				}
				get duration() {
					return this.animationItem ? this.animationItem.getDuration() : 0
				}
				get frames() {
					return this.animationItem ? this.animationItem.totalFrames : 0
				}
				get direction() {
					return this.animationItem ? this.animationItem.playDirection : 1
				}
				get isLoaded() {
					return this.animationItem, this.animationItem.isLoaded
				}
				get ix2InitialValue() {
					return this.config ? this.config.ix2InitialValue : null
				}
				goToFrame(t) {
					this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
				}
				setSubframe(t) {
					this.animationItem && this.animationItem.setSubframe(t)
				}
				setSpeed(t = 1) {
					this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
				}
				setLooping(t) {
					this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
				}
				setDirection(t) {
					this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(t === 1 ? 0 : this.frames))
				}
			},
			Db = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]')),
			Fb = e => {
				let t = es.get(e);
				return t == null && (t = new Ru), t.load(e), t
			};
		mt.createInstance = Fb;
		var Fu = e => {
			let t = es.get(e);
			t && t.destroy()
		};
		mt.cleanupElement = Fu;
		var qb = () => {
			Db().forEach(e => {
				parseFloat(e.getAttribute("data-is-ix2-target")) === 1 || Fu(e), Fb(e)
			})
		};
		mt.init = qb;
		var WW = () => {
			Db().forEach(Fu)
		};
		mt.destroy = WW;
		var UW = qb;
		mt.ready = UW
	});
	var kb = E((exports, module) => {
		typeof navigator < "u" && function(e, t) {
			typeof exports == "object" && typeof module < "u" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).lottie = t()
		}(exports, function() {
			"use strict";
			var svgNS = "http://www.w3.org/2000/svg",
				locationHref = "",
				_useWebWorker = !1,
				initialDefaultFrame = -999999,
				setWebWorker = function(e) {
					_useWebWorker = !!e
				},
				getWebWorker = function() {
					return _useWebWorker
				},
				setLocationHref = function(e) {
					locationHref = e
				},
				getLocationHref = function() {
					return locationHref
				};

			function createTag(e) {
				return document.createElement(e)
			}

			function extendPrototype(e, t) {
				var r, n, i = e.length;
				for (r = 0; r < i; r += 1)
					for (var a in n = e[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (t.prototype[a] = n[a])
			}

			function getDescriptor(e, t) {
				return Object.getOwnPropertyDescriptor(e, t)
			}

			function createProxyFunction(e) {
				function t() {}
				return t.prototype = e, t
			}
			var audioControllerFactory = function() {
					function e(t) {
						this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
					}
					return e.prototype = {
							addAudio: function(t) {
								this.audios.push(t)
							},
							pause: function() {
								var t, r = this.audios.length;
								for (t = 0; t < r; t += 1) this.audios[t].pause()
							},
							resume: function() {
								var t, r = this.audios.length;
								for (t = 0; t < r; t += 1) this.audios[t].resume()
							},
							setRate: function(t) {
								var r, n = this.audios.length;
								for (r = 0; r < n; r += 1) this.audios[r].setRate(t)
							},
							createAudio: function(t) {
								return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
									src: [t]
								}) : {
									isPlaying: !1,
									play: function() {
										this.isPlaying = !0
									},
									seek: function() {
										this.isPlaying = !1
									},
									playing: function() {},
									rate: function() {},
									setVolume: function() {}
								}
							},
							setAudioFactory: function(t) {
								this.audioFactory = t
							},
							setVolume: function(t) {
								this._volume = t, this._updateVolume()
							},
							mute: function() {
								this._isMuted = !0, this._updateVolume()
							},
							unmute: function() {
								this._isMuted = !1, this._updateVolume()
							},
							getVolume: function() {
								return this._volume
							},
							_updateVolume: function() {
								var t, r = this.audios.length;
								for (t = 0; t < r; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
							}
						},
						function() {
							return new e
						}
				}(),
				createTypedArray = function() {
					function e(t, r) {
						var n, i = 0,
							a = [];
						switch (t) {
							case "int16":
							case "uint8c":
								n = 1;
								break;
							default:
								n = 1.1
						}
						for (i = 0; i < r; i += 1) a.push(n);
						return a
					}
					return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function(t, r) {
						return t === "float32" ? new Float32Array(r) : t === "int16" ? new Int16Array(r) : t === "uint8c" ? new Uint8ClampedArray(r) : e(t, r)
					} : e
				}();

			function createSizedArray(e) {
				return Array.apply(null, {
					length: e
				})
			}

			function _typeof$6(e) {
				return _typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$6(e)
			}
			var subframeEnabled = !0,
				expressionsPlugin = null,
				expressionsInterfaces = null,
				idPrefix$1 = "",
				isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
				_shouldRoundValues = !1,
				bmPow = Math.pow,
				bmSqrt = Math.sqrt,
				bmFloor = Math.floor,
				bmMax = Math.max,
				bmMin = Math.min,
				BMMath = {};

			function ProjectInterface$1() {
				return {}
			}(function() {
				var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
					r = t.length;
				for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
			})(), BMMath.random = Math.random, BMMath.abs = function(e) {
				if (_typeof$6(e) === "object" && e.length) {
					var t, r = createSizedArray(e.length),
						n = e.length;
					for (t = 0; t < n; t += 1) r[t] = Math.abs(e[t]);
					return r
				}
				return Math.abs(e)
			};
			var defaultCurveSegments = 150,
				degToRads = Math.PI / 180,
				roundCorner = .5519;

			function roundValues(e) {
				_shouldRoundValues = !!e
			}

			function bmRnd(e) {
				return _shouldRoundValues ? Math.round(e) : e
			}

			function styleDiv(e) {
				e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
			}

			function BMEnterFrameEvent(e, t, r, n) {
				this.type = e, this.currentTime = t, this.totalTime = r, this.direction = n < 0 ? -1 : 1
			}

			function BMCompleteEvent(e, t) {
				this.type = e, this.direction = t < 0 ? -1 : 1
			}

			function BMCompleteLoopEvent(e, t, r, n) {
				this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = n < 0 ? -1 : 1
			}

			function BMSegmentStartEvent(e, t, r) {
				this.type = e, this.firstFrame = t, this.totalFrames = r
			}

			function BMDestroyEvent(e, t) {
				this.type = e, this.target = t
			}

			function BMRenderFrameErrorEvent(e, t) {
				this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
			}

			function BMConfigErrorEvent(e) {
				this.type = "configError", this.nativeError = e
			}

			function BMAnimationConfigErrorEvent(e, t) {
				this.type = e, this.nativeError = t
			}
			var createElementID = (_count = 0, function() {
					return idPrefix$1 + "__lottie_element_" + (_count += 1)
				}),
				_count;

			function HSVtoRGB(e, t, r) {
				var n, i, a, s, o, l, f, u;
				switch (l = r * (1 - t), f = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), u = r * (1 - (1 - o) * t), s % 6) {
					case 0:
						n = r, i = u, a = l;
						break;
					case 1:
						n = f, i = r, a = l;
						break;
					case 2:
						n = l, i = r, a = u;
						break;
					case 3:
						n = l, i = f, a = r;
						break;
					case 4:
						n = u, i = l, a = r;
						break;
					case 5:
						n = r, i = l, a = f
				}
				return [n, i, a]
			}

			function RGBtoHSV(e, t, r) {
				var n, i = Math.max(e, t, r),
					a = Math.min(e, t, r),
					s = i - a,
					o = i === 0 ? 0 : s / i,
					l = i / 255;
				switch (i) {
					case a:
						n = 0;
						break;
					case e:
						n = t - r + s * (t < r ? 6 : 0), n /= 6 * s;
						break;
					case t:
						n = r - e + 2 * s, n /= 6 * s;
						break;
					case r:
						n = e - t + 4 * s, n /= 6 * s
				}
				return [n, o, l]
			}

			function addSaturationToRGB(e, t) {
				var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
				return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
			}

			function addBrightnessToRGB(e, t) {
				var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
				return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
			}

			function addHueToRGB(e, t) {
				var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
				return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
			}
			var rgbToHex = function() {
					var e, t, r = [];
					for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = t.length === 1 ? "0" + t : t;
					return function(n, i, a) {
						return n < 0 && (n = 0), i < 0 && (i = 0), a < 0 && (a = 0), "#" + r[n] + r[i] + r[a]
					}
				}(),
				setSubframeEnabled = function(e) {
					subframeEnabled = !!e
				},
				getSubframeEnabled = function() {
					return subframeEnabled
				},
				setExpressionsPlugin = function(e) {
					expressionsPlugin = e
				},
				getExpressionsPlugin = function() {
					return expressionsPlugin
				},
				setExpressionInterfaces = function(e) {
					expressionsInterfaces = e
				},
				getExpressionInterfaces = function() {
					return expressionsInterfaces
				},
				setDefaultCurveSegments = function(e) {
					defaultCurveSegments = e
				},
				getDefaultCurveSegments = function() {
					return defaultCurveSegments
				},
				setIdPrefix = function(e) {
					idPrefix$1 = e
				},
				getIdPrefix = function() {
					return idPrefix$1
				};

			function createNS(e) {
				return document.createElementNS(svgNS, e)
			}

			function _typeof$5(e) {
				return _typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$5(e)
			}
			var dataManager = function() {
					var e, t, r = 1,
						n = [],
						i = {
							onmessage: function() {},
							postMessage: function(l) {
								e({
									data: l
								})
							}
						},
						a = {
							postMessage: function(l) {
								i.onmessage({
									data: l
								})
							}
						};

					function s() {
						t || (t = function(l) {
							if (window.Worker && window.Blob && getWebWorker()) {
								var f = new Blob(["var _workerSelf = self; self.onmessage = ", l.toString()], {
										type: "text/javascript"
									}),
									u = URL.createObjectURL(f);
								return new Worker(u)
							}
							return e = l, i
						}(function(l) {
							if (a.dataManager || (a.dataManager = function() {
									function u(T, P) {
										var D, w, C, F, O, R, L = T.length;
										for (w = 0; w < L; w += 1)
											if ("ks" in (D = T[w]) && !D.completed) {
												if (D.completed = !0, D.hasMask) {
													var H = D.masksProperties;
													for (F = H.length, C = 0; C < F; C += 1)
														if (H[C].pt.k.i) d(H[C].pt.k);
														else
															for (R = H[C].pt.k.length, O = 0; O < R; O += 1) H[C].pt.k[O].s && d(H[C].pt.k[O].s[0]), H[C].pt.k[O].e && d(H[C].pt.k[O].e[0])
												}
												D.ty === 0 ? (D.layers = c(D.refId, P), u(D.layers, P)) : D.ty === 4 ? v(D.shapes) : D.ty === 5 && S(D)
											}
									}

									function c(T, P) {
										var D = function(w, C) {
											for (var F = 0, O = C.length; F < O;) {
												if (C[F].id === w) return C[F];
												F += 1
											}
											return null
										}(T, P);
										return D ? D.layers.__used ? JSON.parse(JSON.stringify(D.layers)) : (D.layers.__used = !0, D.layers) : null
									}

									function v(T) {
										var P, D, w;
										for (P = T.length - 1; P >= 0; P -= 1)
											if (T[P].ty === "sh")
												if (T[P].ks.k.i) d(T[P].ks.k);
												else
													for (w = T[P].ks.k.length, D = 0; D < w; D += 1) T[P].ks.k[D].s && d(T[P].ks.k[D].s[0]), T[P].ks.k[D].e && d(T[P].ks.k[D].e[0]);
										else T[P].ty === "gr" && v(T[P].it)
									}

									function d(T) {
										var P, D = T.i.length;
										for (P = 0; P < D; P += 1) T.i[P][0] += T.v[P][0], T.i[P][1] += T.v[P][1], T.o[P][0] += T.v[P][0], T.o[P][1] += T.v[P][1]
									}

									function p(T, P) {
										var D = P ? P.split(".") : [100, 100, 100];
										return T[0] > D[0] || !(D[0] > T[0]) && (T[1] > D[1] || !(D[1] > T[1]) && (T[2] > D[2] || !(D[2] > T[2]) && null))
									}
									var m, h = function() {
											var T = [4, 4, 14];

											function P(D) {
												var w, C, F, O = D.length;
												for (w = 0; w < O; w += 1) D[w].ty === 5 && (F = void 0, F = (C = D[w]).t.d, C.t.d = {
													k: [{
														s: F,
														t: 0
													}]
												})
											}
											return function(D) {
												if (p(T, D.v) && (P(D.layers), D.assets)) {
													var w, C = D.assets.length;
													for (w = 0; w < C; w += 1) D.assets[w].layers && P(D.assets[w].layers)
												}
											}
										}(),
										g = (m = [4, 7, 99], function(T) {
											if (T.chars && !p(m, T.v)) {
												var P, D = T.chars.length;
												for (P = 0; P < D; P += 1) {
													var w = T.chars[P];
													w.data && w.data.shapes && (v(w.data.shapes), w.data.ip = 0, w.data.op = 99999, w.data.st = 0, w.data.sr = 1, w.data.ks = {
														p: {
															k: [0, 0],
															a: 0
														},
														s: {
															k: [100, 100],
															a: 0
														},
														a: {
															k: [0, 0],
															a: 0
														},
														r: {
															k: 0,
															a: 0
														},
														o: {
															k: 100,
															a: 0
														}
													}, T.chars[P].t || (w.data.shapes.push({
														ty: "no"
													}), w.data.shapes[0].it.push({
														p: {
															k: [0, 0],
															a: 0
														},
														s: {
															k: [100, 100],
															a: 0
														},
														a: {
															k: [0, 0],
															a: 0
														},
														r: {
															k: 0,
															a: 0
														},
														o: {
															k: 100,
															a: 0
														},
														sk: {
															k: 0,
															a: 0
														},
														sa: {
															k: 0,
															a: 0
														},
														ty: "tr"
													})))
												}
											}
										}),
										y = function() {
											var T = [5, 7, 15];

											function P(D) {
												var w, C, F = D.length;
												for (w = 0; w < F; w += 1) D[w].ty === 5 && (C = void 0, typeof(C = D[w].t.p).a == "number" && (C.a = {
													a: 0,
													k: C.a
												}), typeof C.p == "number" && (C.p = {
													a: 0,
													k: C.p
												}), typeof C.r == "number" && (C.r = {
													a: 0,
													k: C.r
												}))
											}
											return function(D) {
												if (p(T, D.v) && (P(D.layers), D.assets)) {
													var w, C = D.assets.length;
													for (w = 0; w < C; w += 1) D.assets[w].layers && P(D.assets[w].layers)
												}
											}
										}(),
										_ = function() {
											var T = [4, 1, 9];

											function P(w) {
												var C, F, O, R = w.length;
												for (C = 0; C < R; C += 1)
													if (w[C].ty === "gr") P(w[C].it);
													else if (w[C].ty === "fl" || w[C].ty === "st")
													if (w[C].c.k && w[C].c.k[0].i)
														for (O = w[C].c.k.length, F = 0; F < O; F += 1) w[C].c.k[F].s && (w[C].c.k[F].s[0] /= 255, w[C].c.k[F].s[1] /= 255, w[C].c.k[F].s[2] /= 255, w[C].c.k[F].s[3] /= 255), w[C].c.k[F].e && (w[C].c.k[F].e[0] /= 255, w[C].c.k[F].e[1] /= 255, w[C].c.k[F].e[2] /= 255, w[C].c.k[F].e[3] /= 255);
													else w[C].c.k[0] /= 255, w[C].c.k[1] /= 255, w[C].c.k[2] /= 255, w[C].c.k[3] /= 255
											}

											function D(w) {
												var C, F = w.length;
												for (C = 0; C < F; C += 1) w[C].ty === 4 && P(w[C].shapes)
											}
											return function(w) {
												if (p(T, w.v) && (D(w.layers), w.assets)) {
													var C, F = w.assets.length;
													for (C = 0; C < F; C += 1) w.assets[C].layers && D(w.assets[C].layers)
												}
											}
										}(),
										b = function() {
											var T = [4, 4, 18];

											function P(w) {
												var C, F, O;
												for (C = w.length - 1; C >= 0; C -= 1)
													if (w[C].ty === "sh")
														if (w[C].ks.k.i) w[C].ks.k.c = w[C].closed;
														else
															for (O = w[C].ks.k.length, F = 0; F < O; F += 1) w[C].ks.k[F].s && (w[C].ks.k[F].s[0].c = w[C].closed), w[C].ks.k[F].e && (w[C].ks.k[F].e[0].c = w[C].closed);
												else w[C].ty === "gr" && P(w[C].it)
											}

											function D(w) {
												var C, F, O, R, L, H, Y = w.length;
												for (F = 0; F < Y; F += 1) {
													if ((C = w[F]).hasMask) {
														var A = C.masksProperties;
														for (R = A.length, O = 0; O < R; O += 1)
															if (A[O].pt.k.i) A[O].pt.k.c = A[O].cl;
															else
																for (H = A[O].pt.k.length, L = 0; L < H; L += 1) A[O].pt.k[L].s && (A[O].pt.k[L].s[0].c = A[O].cl), A[O].pt.k[L].e && (A[O].pt.k[L].e[0].c = A[O].cl)
													}
													C.ty === 4 && P(C.shapes)
												}
											}
											return function(w) {
												if (p(T, w.v) && (D(w.layers), w.assets)) {
													var C, F = w.assets.length;
													for (C = 0; C < F; C += 1) w.assets[C].layers && D(w.assets[C].layers)
												}
											}
										}();

									function S(T) {
										T.t.a.length === 0 && T.t.p
									}
									var x = {
										completeData: function(T) {
											T.__complete || (_(T), h(T), g(T), y(T), b(T), u(T.layers, T.assets), function(P, D) {
												if (P) {
													var w = 0,
														C = P.length;
													for (w = 0; w < C; w += 1) P[w].t === 1 && (P[w].data.layers = c(P[w].data.refId, D), u(P[w].data.layers, D))
												}
											}(T.chars, T.assets), T.__complete = !0)
										}
									};
									return x.checkColors = _, x.checkChars = g, x.checkPathProperties = y, x.checkShapes = b, x.completeLayers = u, x
								}()), a.assetLoader || (a.assetLoader = function() {
									function u(c) {
										var v = c.getResponseHeader("content-type");
										return v && c.responseType === "json" && v.indexOf("json") !== -1 || c.response && _typeof$5(c.response) === "object" ? c.response : c.response && typeof c.response == "string" ? JSON.parse(c.response) : c.responseText ? JSON.parse(c.responseText) : null
									}
									return {
										load: function(c, v, d, p) {
											var m, h = new XMLHttpRequest;
											try {
												h.responseType = "json"
											} catch {}
											h.onreadystatechange = function() {
												if (h.readyState === 4)
													if (h.status === 200) m = u(h), d(m);
													else try {
														m = u(h), d(m)
													} catch (g) {
														p && p(g)
													}
											};
											try {
												h.open(["G", "E", "T"].join(""), c, !0)
											} catch {
												h.open(["G", "E", "T"].join(""), v + "/" + c, !0)
											}
											h.send()
										}
									}
								}()), l.data.type === "loadAnimation") a.assetLoader.load(l.data.path, l.data.fullPath, function(u) {
								a.dataManager.completeData(u), a.postMessage({
									id: l.data.id,
									payload: u,
									status: "success"
								})
							}, function() {
								a.postMessage({
									id: l.data.id,
									status: "error"
								})
							});
							else if (l.data.type === "complete") {
								var f = l.data.animation;
								a.dataManager.completeData(f), a.postMessage({
									id: l.data.id,
									payload: f,
									status: "success"
								})
							} else l.data.type === "loadData" && a.assetLoader.load(l.data.path, l.data.fullPath, function(u) {
								a.postMessage({
									id: l.data.id,
									payload: u,
									status: "success"
								})
							}, function() {
								a.postMessage({
									id: l.data.id,
									status: "error"
								})
							})
						}), t.onmessage = function(l) {
							var f = l.data,
								u = f.id,
								c = n[u];
							n[u] = null, f.status === "success" ? c.onComplete(f.payload) : c.onError && c.onError()
						})
					}

					function o(l, f) {
						var u = "processId_" + (r += 1);
						return n[u] = {
							onComplete: l,
							onError: f
						}, u
					}
					return {
						loadAnimation: function(l, f, u) {
							s();
							var c = o(f, u);
							t.postMessage({
								type: "loadAnimation",
								path: l,
								fullPath: window.location.origin + window.location.pathname,
								id: c
							})
						},
						loadData: function(l, f, u) {
							s();
							var c = o(f, u);
							t.postMessage({
								type: "loadData",
								path: l,
								fullPath: window.location.origin + window.location.pathname,
								id: c
							})
						},
						completeAnimation: function(l, f, u) {
							s();
							var c = o(f, u);
							t.postMessage({
								type: "complete",
								animation: l,
								id: c
							})
						}
					}
				}(),
				ImagePreloader = function() {
					var e = function() {
						var o = createTag("canvas");
						o.width = 1, o.height = 1;
						var l = o.getContext("2d");
						return l.fillStyle = "rgba(0,0,0,0)", l.fillRect(0, 0, 1, 1), o
					}();

					function t() {
						this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
					}

					function r() {
						this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
					}

					function n(o, l, f) {
						var u = "";
						if (o.e) u = o.p;
						else if (l) {
							var c = o.p;
							c.indexOf("images/") !== -1 && (c = c.split("/")[1]), u = l + c
						} else u = f, u += o.u ? o.u : "", u += o.p;
						return u
					}

					function i(o) {
						var l = 0,
							f = setInterval(function() {
								(o.getBBox().width || l > 500) && (this._imageLoaded(), clearInterval(f)), l += 1
							}.bind(this), 50)
					}

					function a(o) {
						var l = {
								assetData: o
							},
							f = n(o, this.assetsPath, this.path);
						return dataManager.loadData(f, function(u) {
							l.img = u, this._footageLoaded()
						}.bind(this), function() {
							l.img = {}, this._footageLoaded()
						}.bind(this)), l
					}

					function s() {
						this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
					}
					return s.prototype = {
						loadAssets: function(o, l) {
							var f;
							this.imagesLoadedCb = l;
							var u = o.length;
							for (f = 0; f < u; f += 1) o[f].layers || (o[f].t && o[f].t !== "seq" ? o[f].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(o[f]))) : (this.totalImages += 1, this.images.push(this._createImageData(o[f]))))
						},
						setAssetsPath: function(o) {
							this.assetsPath = o || ""
						},
						setPath: function(o) {
							this.path = o || ""
						},
						loadedImages: function() {
							return this.totalImages === this.loadedAssets
						},
						loadedFootages: function() {
							return this.totalFootages === this.loadedFootagesCount
						},
						destroy: function() {
							this.imagesLoadedCb = null, this.images.length = 0
						},
						getAsset: function(o) {
							for (var l = 0, f = this.images.length; l < f;) {
								if (this.images[l].assetData === o) return this.images[l].img;
								l += 1
							}
							return null
						},
						createImgData: function(o) {
							var l = n(o, this.assetsPath, this.path),
								f = createTag("img");
							f.crossOrigin = "anonymous", f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", function() {
								u.img = e, this._imageLoaded()
							}.bind(this), !1), f.src = l;
							var u = {
								img: f,
								assetData: o
							};
							return u
						},
						createImageData: function(o) {
							var l = n(o, this.assetsPath, this.path),
								f = createNS("image");
							isSafari ? this.testImageLoaded(f) : f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", function() {
								u.img = e, this._imageLoaded()
							}.bind(this), !1), f.setAttributeNS("http://www.w3.org/1999/xlink", "href", l), this._elementHelper.append ? this._elementHelper.append(f) : this._elementHelper.appendChild(f);
							var u = {
								img: f,
								assetData: o
							};
							return u
						},
						imageLoaded: t,
						footageLoaded: r,
						setCacheType: function(o, l) {
							o === "svg" ? (this._elementHelper = l, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
						}
					}, s
				}();

			function BaseEvent() {}
			BaseEvent.prototype = {
				triggerEvent: function(e, t) {
					if (this._cbs[e])
						for (var r = this._cbs[e], n = 0; n < r.length; n += 1) r[n](t)
				},
				addEventListener: function(e, t) {
					return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
						function() {
							this.removeEventListener(e, t)
						}.bind(this)
				},
				removeEventListener: function(e, t) {
					if (t) {
						if (this._cbs[e]) {
							for (var r = 0, n = this._cbs[e].length; r < n;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, n -= 1), r += 1;
							this._cbs[e].length || (this._cbs[e] = null)
						}
					} else this._cbs[e] = null
				}
			};
			var markerParser = function() {
					function e(t) {
						for (var r, n = t.split(`\r
`), i = {}, a = 0, s = 0; s < n.length; s += 1)(r = n[s].split(":")).length === 2 && (i[r[0]] = r[1].trim(), a += 1);
						if (a === 0) throw new Error;
						return i
					}
					return function(t) {
						for (var r = [], n = 0; n < t.length; n += 1) {
							var i = t[n],
								a = {
									time: i.tm,
									duration: i.dr
								};
							try {
								a.payload = JSON.parse(t[n].cm)
							} catch {
								try {
									a.payload = e(t[n].cm)
								} catch {
									a.payload = {
										name: t[n].cm
									}
								}
							}
							r.push(a)
						}
						return r
					}
				}(),
				ProjectInterface = function() {
					function e(t) {
						this.compositions.push(t)
					}
					return function() {
						function t(r) {
							for (var n = 0, i = this.compositions.length; n < i;) {
								if (this.compositions[n].data && this.compositions[n].data.nm === r) return this.compositions[n].prepareFrame && this.compositions[n].data.xt && this.compositions[n].prepareFrame(this.currentFrame), this.compositions[n].compInterface;
								n += 1
							}
							return null
						}
						return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
					}
				}(),
				renderers = {},
				registerRenderer = function(e, t) {
					renderers[e] = t
				};

			function getRenderer(e) {
				return renderers[e]
			}

			function getRegisteredRenderer() {
				if (renderers.canvas) return "canvas";
				for (var e in renderers)
					if (renderers[e]) return e;
				return ""
			}

			function _typeof$4(e) {
				return _typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$4(e)
			}
			var AnimationItem = function() {
				this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
			};
			extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
				(e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
				var t = "svg";
				e.animType ? t = e.animType : e.renderer && (t = e.renderer);
				var r = getRenderer(t);
				this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") !== -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
			}, AnimationItem.prototype.onSetupError = function() {
				this.trigger("data_failed")
			}, AnimationItem.prototype.setupAnimation = function(e) {
				dataManager.completeAnimation(e, this.configAnimation)
			}, AnimationItem.prototype.setData = function(e, t) {
				t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
				var r = {
						wrapper: e,
						animationData: t
					},
					n = e.attributes;
				r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
				var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
				i === "false" ? r.loop = !1 : i === "true" ? r.loop = !0 : i !== "" && (r.loop = parseInt(i, 10));
				var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
				r.autoplay = a !== "false", r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
			}, AnimationItem.prototype.includeLayers = function(e) {
				e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
				var t, r, n = this.animationData.layers,
					i = n.length,
					a = e.layers,
					s = a.length;
				for (r = 0; r < s; r += 1)
					for (t = 0; t < i;) {
						if (n[t].id === a[r].id) {
							n[t] = a[r];
							break
						}
						t += 1
					}
				if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
					for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
				this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
			}, AnimationItem.prototype.onSegmentComplete = function(e) {
				this.animationData = e;
				var t = getExpressionsPlugin();
				t && t.initExpressions(this), this.loadNextSegment()
			}, AnimationItem.prototype.loadNextSegment = function() {
				var e = this.animationData.segments;
				if (!e || e.length === 0 || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
				var t = e.shift();
				this.timeCompleted = t.time * this.frameRate;
				var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
				this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
					this.trigger("data_failed")
				}.bind(this))
			}, AnimationItem.prototype.loadSegments = function() {
				this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
			}, AnimationItem.prototype.imagesLoaded = function() {
				this.trigger("loaded_images"), this.checkLoaded()
			}, AnimationItem.prototype.preloadImages = function() {
				this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
			}, AnimationItem.prototype.configAnimation = function(e) {
				if (this.renderer) try {
					this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
				} catch (t) {
					this.triggerConfigError(t)
				}
			}, AnimationItem.prototype.waitForFontsLoaded = function() {
				this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
			}, AnimationItem.prototype.checkLoaded = function() {
				if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
					this.isLoaded = !0;
					var e = getExpressionsPlugin();
					e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
						this.trigger("DOMLoaded")
					}.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
				}
			}, AnimationItem.prototype.resize = function(e, t) {
				var r = typeof e == "number" ? e : void 0,
					n = typeof t == "number" ? t : void 0;
				this.renderer.updateContainerSize(r, n)
			}, AnimationItem.prototype.setSubframe = function(e) {
				this.isSubframeEnabled = !!e
			}, AnimationItem.prototype.gotoFrame = function() {
				this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
			}, AnimationItem.prototype.renderFrame = function() {
				if (this.isLoaded !== !1 && this.renderer) try {
					this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
				} catch (e) {
					this.triggerRenderFrameError(e)
				}
			}, AnimationItem.prototype.play = function(e) {
				e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
			}, AnimationItem.prototype.pause = function(e) {
				e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
			}, AnimationItem.prototype.togglePause = function(e) {
				e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause())
			}, AnimationItem.prototype.stop = function(e) {
				e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
			}, AnimationItem.prototype.getMarkerData = function(e) {
				for (var t, r = 0; r < this.markers.length; r += 1)
					if ((t = this.markers[r]).payload && t.payload.name === e) return t;
				return null
			}, AnimationItem.prototype.goToAndStop = function(e, t, r) {
				if (!r || this.name === r) {
					var n = Number(e);
					if (isNaN(n)) {
						var i = this.getMarkerData(e);
						i && this.goToAndStop(i.time, !0)
					} else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
					this.pause()
				}
			}, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
				if (!r || this.name === r) {
					var n = Number(e);
					if (isNaN(n)) {
						var i = this.getMarkerData(e);
						i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
					} else this.goToAndStop(n, t, r);
					this.play()
				}
			}, AnimationItem.prototype.advanceTime = function(e) {
				if (this.isPaused !== !0 && this.isLoaded !== !1) {
					var t = this.currentRawFrame + e * this.frameModifier,
						r = !1;
					t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
				}
			}, AnimationItem.prototype.adjustSegment = function(e, t) {
				this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
			}, AnimationItem.prototype.setSegment = function(e, t) {
				var r = -1;
				this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
			}, AnimationItem.prototype.playSegments = function(e, t) {
				if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
					var r, n = e.length;
					for (r = 0; r < n; r += 1) this.segments.push(e[r])
				} else this.segments.push(e);
				this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
			}, AnimationItem.prototype.resetSegments = function(e) {
				this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
			}, AnimationItem.prototype.checkSegments = function(e) {
				return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
			}, AnimationItem.prototype.destroy = function(e) {
				e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
			}, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
				this.currentRawFrame = e, this.gotoFrame()
			}, AnimationItem.prototype.setSpeed = function(e) {
				this.playSpeed = e, this.updaFrameModifier()
			}, AnimationItem.prototype.setDirection = function(e) {
				this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
			}, AnimationItem.prototype.setLoop = function(e) {
				this.loop = e
			}, AnimationItem.prototype.setVolume = function(e, t) {
				t && this.name !== t || this.audioController.setVolume(e)
			}, AnimationItem.prototype.getVolume = function() {
				return this.audioController.getVolume()
			}, AnimationItem.prototype.mute = function(e) {
				e && this.name !== e || this.audioController.mute()
			}, AnimationItem.prototype.unmute = function(e) {
				e && this.name !== e || this.audioController.unmute()
			}, AnimationItem.prototype.updaFrameModifier = function() {
				this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
			}, AnimationItem.prototype.getPath = function() {
				return this.path
			}, AnimationItem.prototype.getAssetsPath = function(e) {
				var t = "";
				if (e.e) t = e.p;
				else if (this.assetsPath) {
					var r = e.p;
					r.indexOf("images/") !== -1 && (r = r.split("/")[1]), t = this.assetsPath + r
				} else t = this.path, t += e.u ? e.u : "", t += e.p;
				return t
			}, AnimationItem.prototype.getAssetData = function(e) {
				for (var t = 0, r = this.assets.length; t < r;) {
					if (e === this.assets[t].id) return this.assets[t];
					t += 1
				}
				return null
			}, AnimationItem.prototype.hide = function() {
				this.renderer.hide()
			}, AnimationItem.prototype.show = function() {
				this.renderer.show()
			}, AnimationItem.prototype.getDuration = function(e) {
				return e ? this.totalFrames : this.totalFrames / this.frameRate
			}, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
				try {
					this.renderer.getElementByPath(e).updateDocumentData(t, r)
				} catch {}
			}, AnimationItem.prototype.trigger = function(e) {
				if (this._cbs && this._cbs[e]) switch (e) {
					case "enterFrame":
						this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
						break;
					case "drawnFrame":
						this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
						break;
					case "loopComplete":
						this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
						break;
					case "complete":
						this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
						break;
					case "segmentStart":
						this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
						break;
					case "destroy":
						this.triggerEvent(e, new BMDestroyEvent(e, this));
						break;
					default:
						this.triggerEvent(e)
				}
				e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
			}, AnimationItem.prototype.triggerRenderFrameError = function(e) {
				var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
				this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
			}, AnimationItem.prototype.triggerConfigError = function(e) {
				var t = new BMConfigErrorEvent(e, this.currentFrame);
				this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
			};
			var animationManager = function() {
					var e = {},
						t = [],
						r = 0,
						n = 0,
						i = 0,
						a = !0,
						s = !1;

					function o(m) {
						for (var h = 0, g = m.target; h < n;) t[h].animation === g && (t.splice(h, 1), h -= 1, n -= 1, g.isPaused || u()), h += 1
					}

					function l(m, h) {
						if (!m) return null;
						for (var g = 0; g < n;) {
							if (t[g].elem === m && t[g].elem !== null) return t[g].animation;
							g += 1
						}
						var y = new AnimationItem;
						return c(y, m), y.setData(m, h), y
					}

					function f() {
						i += 1, p()
					}

					function u() {
						i -= 1
					}

					function c(m, h) {
						m.addEventListener("destroy", o), m.addEventListener("_active", f), m.addEventListener("_idle", u), t.push({
							elem: h,
							animation: m
						}), n += 1
					}

					function v(m) {
						var h, g = m - r;
						for (h = 0; h < n; h += 1) t[h].animation.advanceTime(g);
						r = m, i && !s ? window.requestAnimationFrame(v) : a = !0
					}

					function d(m) {
						r = m, window.requestAnimationFrame(v)
					}

					function p() {
						!s && i && a && (window.requestAnimationFrame(d), a = !1)
					}
					return e.registerAnimation = l, e.loadAnimation = function(m) {
						var h = new AnimationItem;
						return c(h, null), h.setParams(m), h
					}, e.setSpeed = function(m, h) {
						var g;
						for (g = 0; g < n; g += 1) t[g].animation.setSpeed(m, h)
					}, e.setDirection = function(m, h) {
						var g;
						for (g = 0; g < n; g += 1) t[g].animation.setDirection(m, h)
					}, e.play = function(m) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.play(m)
					}, e.pause = function(m) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.pause(m)
					}, e.stop = function(m) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.stop(m)
					}, e.togglePause = function(m) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.togglePause(m)
					}, e.searchAnimations = function(m, h, g) {
						var y, _ = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
							b = _.length;
						for (y = 0; y < b; y += 1) g && _[y].setAttribute("data-bm-type", g), l(_[y], m);
						if (h && b === 0) {
							g || (g = "svg");
							var S = document.getElementsByTagName("body")[0];
							S.innerText = "";
							var x = createTag("div");
							x.style.width = "100%", x.style.height = "100%", x.setAttribute("data-bm-type", g), S.appendChild(x), l(x, m)
						}
					}, e.resize = function() {
						var m;
						for (m = 0; m < n; m += 1) t[m].animation.resize()
					}, e.goToAndStop = function(m, h, g) {
						var y;
						for (y = 0; y < n; y += 1) t[y].animation.goToAndStop(m, h, g)
					}, e.destroy = function(m) {
						var h;
						for (h = n - 1; h >= 0; h -= 1) t[h].animation.destroy(m)
					}, e.freeze = function() {
						s = !0
					}, e.unfreeze = function() {
						s = !1, p()
					}, e.setVolume = function(m, h) {
						var g;
						for (g = 0; g < n; g += 1) t[g].animation.setVolume(m, h)
					}, e.mute = function(m) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.mute(m)
					}, e.unmute = function(m) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.unmute(m)
					}, e.getRegisteredAnimations = function() {
						var m, h = t.length,
							g = [];
						for (m = 0; m < h; m += 1) g.push(t[m].animation);
						return g
					}, e
				}(),
				BezierFactory = function() {
					var e = {
							getBezierEasing: function(u, c, v, d, p) {
								var m = p || ("bez_" + u + "_" + c + "_" + v + "_" + d).replace(/\./g, "p");
								if (t[m]) return t[m];
								var h = new f([u, c, v, d]);
								return t[m] = h, h
							}
						},
						t = {},
						r = .1,
						n = typeof Float32Array == "function";

					function i(u, c) {
						return 1 - 3 * c + 3 * u
					}

					function a(u, c) {
						return 3 * c - 6 * u
					}

					function s(u) {
						return 3 * u
					}

					function o(u, c, v) {
						return ((i(c, v) * u + a(c, v)) * u + s(c)) * u
					}

					function l(u, c, v) {
						return 3 * i(c, v) * u * u + 2 * a(c, v) * u + s(c)
					}

					function f(u) {
						this._p = u, this._mSampleValues = n ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
					}
					return f.prototype = {
						get: function(u) {
							var c = this._p[0],
								v = this._p[1],
								d = this._p[2],
								p = this._p[3];
							return this._precomputed || this._precompute(), c === v && d === p ? u : u === 0 ? 0 : u === 1 ? 1 : o(this._getTForX(u), v, p)
						},
						_precompute: function() {
							var u = this._p[0],
								c = this._p[1],
								v = this._p[2],
								d = this._p[3];
							this._precomputed = !0, u === c && v === d || this._calcSampleValues()
						},
						_calcSampleValues: function() {
							for (var u = this._p[0], c = this._p[2], v = 0; v < 11; ++v) this._mSampleValues[v] = o(v * r, u, c)
						},
						_getTForX: function(u) {
							for (var c = this._p[0], v = this._p[2], d = this._mSampleValues, p = 0, m = 1; m !== 10 && d[m] <= u; ++m) p += r;
							var h = p + (u - d[--m]) / (d[m + 1] - d[m]) * r,
								g = l(h, c, v);
							return g >= .001 ? function(y, _, b, S) {
								for (var x = 0; x < 4; ++x) {
									var T = l(_, b, S);
									if (T === 0) return _;
									_ -= (o(_, b, S) - y) / T
								}
								return _
							}(u, h, c, v) : g === 0 ? h : function(y, _, b, S, x) {
								var T, P, D = 0;
								do(T = o(P = _ + (b - _) / 2, S, x) - y) > 0 ? b = P : _ = P; while (Math.abs(T) > 1e-7 && ++D < 10);
								return P
							}(u, p, p + r, c, v)
						}
					}, e
				}(),
				pooling = {
					double: function(e) {
						return e.concat(createSizedArray(e.length))
					}
				},
				poolFactory = function(e, t, r) {
					var n = 0,
						i = e,
						a = createSizedArray(i);
					return {
						newElement: function() {
							return n ? a[n -= 1] : t()
						},
						release: function(s) {
							n === i && (a = pooling.double(a), i *= 2), r && r(s), a[n] = s, n += 1
						}
					}
				},
				bezierLengthPool = poolFactory(8, function() {
					return {
						addedLength: 0,
						percents: createTypedArray("float32", getDefaultCurveSegments()),
						lengths: createTypedArray("float32", getDefaultCurveSegments())
					}
				}),
				segmentsLengthPool = poolFactory(8, function() {
					return {
						lengths: [],
						totalLength: 0
					}
				}, function(e) {
					var t, r = e.lengths.length;
					for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
					e.lengths.length = 0
				});

			function bezFunction() {
				var e = Math;

				function t(f, u, c, v, d, p) {
					var m = f * v + u * d + c * p - d * v - p * f - c * u;
					return m > -.001 && m < .001
				}
				var r = function(f, u, c, v) {
					var d, p, m, h, g, y, _ = getDefaultCurveSegments(),
						b = 0,
						S = [],
						x = [],
						T = bezierLengthPool.newElement();
					for (m = c.length, d = 0; d < _; d += 1) {
						for (g = d / (_ - 1), y = 0, p = 0; p < m; p += 1) h = bmPow(1 - g, 3) * f[p] + 3 * bmPow(1 - g, 2) * g * c[p] + 3 * (1 - g) * bmPow(g, 2) * v[p] + bmPow(g, 3) * u[p], S[p] = h, x[p] !== null && (y += bmPow(S[p] - x[p], 2)), x[p] = S[p];
						y && (b += y = bmSqrt(y)), T.percents[d] = g, T.lengths[d] = b
					}
					return T.addedLength = b, T
				};

				function n(f) {
					this.segmentLength = 0, this.points = new Array(f)
				}

				function i(f, u) {
					this.partialLength = f, this.point = u
				}
				var a, s = (a = {}, function(f, u, c, v) {
					var d = (f[0] + "_" + f[1] + "_" + u[0] + "_" + u[1] + "_" + c[0] + "_" + c[1] + "_" + v[0] + "_" + v[1]).replace(/\./g, "p");
					if (!a[d]) {
						var p, m, h, g, y, _, b, S = getDefaultCurveSegments(),
							x = 0,
							T = null;
						f.length === 2 && (f[0] !== u[0] || f[1] !== u[1]) && t(f[0], f[1], u[0], u[1], f[0] + c[0], f[1] + c[1]) && t(f[0], f[1], u[0], u[1], u[0] + v[0], u[1] + v[1]) && (S = 2);
						var P = new n(S);
						for (h = c.length, p = 0; p < S; p += 1) {
							for (b = createSizedArray(h), y = p / (S - 1), _ = 0, m = 0; m < h; m += 1) g = bmPow(1 - y, 3) * f[m] + 3 * bmPow(1 - y, 2) * y * (f[m] + c[m]) + 3 * (1 - y) * bmPow(y, 2) * (u[m] + v[m]) + bmPow(y, 3) * u[m], b[m] = g, T !== null && (_ += bmPow(b[m] - T[m], 2));
							x += _ = bmSqrt(_), P.points[p] = new i(_, b), T = b
						}
						P.segmentLength = x, a[d] = P
					}
					return a[d]
				});

				function o(f, u) {
					var c = u.percents,
						v = u.lengths,
						d = c.length,
						p = bmFloor((d - 1) * f),
						m = f * u.addedLength,
						h = 0;
					if (p === d - 1 || p === 0 || m === v[p]) return c[p];
					for (var g = v[p] > m ? -1 : 1, y = !0; y;)
						if (v[p] <= m && v[p + 1] > m ? (h = (m - v[p]) / (v[p + 1] - v[p]), y = !1) : p += g, p < 0 || p >= d - 1) {
							if (p === d - 1) return c[p];
							y = !1
						} return c[p] + (c[p + 1] - c[p]) * h
				}
				var l = createTypedArray("float32", 8);
				return {
					getSegmentsLength: function(f) {
						var u, c = segmentsLengthPool.newElement(),
							v = f.c,
							d = f.v,
							p = f.o,
							m = f.i,
							h = f._length,
							g = c.lengths,
							y = 0;
						for (u = 0; u < h - 1; u += 1) g[u] = r(d[u], d[u + 1], p[u], m[u + 1]), y += g[u].addedLength;
						return v && h && (g[u] = r(d[u], d[0], p[u], m[0]), y += g[u].addedLength), c.totalLength = y, c
					},
					getNewSegment: function(f, u, c, v, d, p, m) {
						d < 0 ? d = 0 : d > 1 && (d = 1);
						var h, g = o(d, m),
							y = o(p = p > 1 ? 1 : p, m),
							_ = f.length,
							b = 1 - g,
							S = 1 - y,
							x = b * b * b,
							T = g * b * b * 3,
							P = g * g * b * 3,
							D = g * g * g,
							w = b * b * S,
							C = g * b * S + b * g * S + b * b * y,
							F = g * g * S + b * g * y + g * b * y,
							O = g * g * y,
							R = b * S * S,
							L = g * S * S + b * y * S + b * S * y,
							H = g * y * S + b * y * y + g * S * y,
							Y = g * y * y,
							A = S * S * S,
							M = y * S * S + S * y * S + S * S * y,
							N = y * y * S + S * y * y + y * S * y,
							U = y * y * y;
						for (h = 0; h < _; h += 1) l[4 * h] = e.round(1e3 * (x * f[h] + T * c[h] + P * v[h] + D * u[h])) / 1e3, l[4 * h + 1] = e.round(1e3 * (w * f[h] + C * c[h] + F * v[h] + O * u[h])) / 1e3, l[4 * h + 2] = e.round(1e3 * (R * f[h] + L * c[h] + H * v[h] + Y * u[h])) / 1e3, l[4 * h + 3] = e.round(1e3 * (A * f[h] + M * c[h] + N * v[h] + U * u[h])) / 1e3;
						return l
					},
					getPointInSegment: function(f, u, c, v, d, p) {
						var m = o(d, p),
							h = 1 - m;
						return [e.round(1e3 * (h * h * h * f[0] + (m * h * h + h * m * h + h * h * m) * c[0] + (m * m * h + h * m * m + m * h * m) * v[0] + m * m * m * u[0])) / 1e3, e.round(1e3 * (h * h * h * f[1] + (m * h * h + h * m * h + h * h * m) * c[1] + (m * m * h + h * m * m + m * h * m) * v[1] + m * m * m * u[1])) / 1e3]
					},
					buildBezierData: s,
					pointOnLine2D: t,
					pointOnLine3D: function(f, u, c, v, d, p, m, h, g) {
						if (c === 0 && p === 0 && g === 0) return t(f, u, v, d, m, h);
						var y, _ = e.sqrt(e.pow(v - f, 2) + e.pow(d - u, 2) + e.pow(p - c, 2)),
							b = e.sqrt(e.pow(m - f, 2) + e.pow(h - u, 2) + e.pow(g - c, 2)),
							S = e.sqrt(e.pow(m - v, 2) + e.pow(h - d, 2) + e.pow(g - p, 2));
						return (y = _ > b ? _ > S ? _ - b - S : S - b - _ : S > b ? S - b - _ : b - _ - S) > -1e-4 && y < 1e-4
					}
				}
			}
			var bez = bezFunction(),
				initFrame = initialDefaultFrame,
				mathAbs = Math.abs;

			function interpolateValue(e, t) {
				var r, n = this.offsetTime;
				this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
				for (var i, a, s, o, l, f, u, c, v, d = t.lastIndex, p = d, m = this.keyframes.length - 1, h = !0; h;) {
					if (i = this.keyframes[p], a = this.keyframes[p + 1], p === m - 1 && e >= a.t - n) {
						i.h && (i = a), d = 0;
						break
					}
					if (a.t - n > e) {
						d = p;
						break
					}
					p < m - 1 ? p += 1 : (d = 0, h = !1)
				}
				s = this.keyframesMetadata[p] || {};
				var g, y = a.t - n,
					_ = i.t - n;
				if (i.to) {
					s.bezierData || (s.bezierData = bez.buildBezierData(i.s, a.s || i.e, i.to, i.ti));
					var b = s.bezierData;
					if (e >= y || e < _) {
						var S = e >= y ? b.points.length - 1 : 0;
						for (l = b.points[S].point.length, o = 0; o < l; o += 1) r[o] = b.points[S].point[o]
					} else {
						s.__fnct ? v = s.__fnct : (v = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get, s.__fnct = v), f = v((e - _) / (y - _));
						var x, T = b.segmentLength * f,
							P = t.lastFrame < e && t._lastKeyframeIndex === p ? t._lastAddedLength : 0;
						for (c = t.lastFrame < e && t._lastKeyframeIndex === p ? t._lastPoint : 0, h = !0, u = b.points.length; h;) {
							if (P += b.points[c].partialLength, T === 0 || f === 0 || c === b.points.length - 1) {
								for (l = b.points[c].point.length, o = 0; o < l; o += 1) r[o] = b.points[c].point[o];
								break
							}
							if (T >= P && T < P + b.points[c + 1].partialLength) {
								for (x = (T - P) / b.points[c + 1].partialLength, l = b.points[c].point.length, o = 0; o < l; o += 1) r[o] = b.points[c].point[o] + (b.points[c + 1].point[o] - b.points[c].point[o]) * x;
								break
							}
							c < u - 1 ? c += 1 : h = !1
						}
						t._lastPoint = c, t._lastAddedLength = P - b.points[c].partialLength, t._lastKeyframeIndex = p
					}
				} else {
					var D, w, C, F, O;
					if (m = i.s.length, g = a.s || i.e, this.sh && i.h !== 1) e >= y ? (r[0] = g[0], r[1] = g[1], r[2] = g[2]) : e <= _ ? (r[0] = i.s[0], r[1] = i.s[1], r[2] = i.s[2]) : quaternionToEuler(r, slerp(createQuaternion(i.s), createQuaternion(g), (e - _) / (y - _)));
					else
						for (p = 0; p < m; p += 1) i.h !== 1 && (e >= y ? f = 1 : e < _ ? f = 0 : (i.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[p] ? v = s.__fnct[p] : (D = i.o.x[p] === void 0 ? i.o.x[0] : i.o.x[p], w = i.o.y[p] === void 0 ? i.o.y[0] : i.o.y[p], C = i.i.x[p] === void 0 ? i.i.x[0] : i.i.x[p], F = i.i.y[p] === void 0 ? i.i.y[0] : i.i.y[p], v = BezierFactory.getBezierEasing(D, w, C, F).get, s.__fnct[p] = v)) : s.__fnct ? v = s.__fnct : (D = i.o.x, w = i.o.y, C = i.i.x, F = i.i.y, v = BezierFactory.getBezierEasing(D, w, C, F).get, i.keyframeMetadata = v), f = v((e - _) / (y - _)))), g = a.s || i.e, O = i.h === 1 ? i.s[p] : i.s[p] + (g[p] - i.s[p]) * f, this.propType === "multidimensional" ? r[p] = O : r = O
				}
				return t.lastIndex = d, r
			}

			function slerp(e, t, r) {
				var n, i, a, s, o, l = [],
					f = e[0],
					u = e[1],
					c = e[2],
					v = e[3],
					d = t[0],
					p = t[1],
					m = t[2],
					h = t[3];
				return (i = f * d + u * p + c * m + v * h) < 0 && (i = -i, d = -d, p = -p, m = -m, h = -h), 1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), s = Math.sin((1 - r) * n) / a, o = Math.sin(r * n) / a) : (s = 1 - r, o = r), l[0] = s * f + o * d, l[1] = s * u + o * p, l[2] = s * c + o * m, l[3] = s * v + o * h, l
			}

			function quaternionToEuler(e, t) {
				var r = t[0],
					n = t[1],
					i = t[2],
					a = t[3],
					s = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i),
					o = Math.asin(2 * r * n + 2 * i * a),
					l = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i);
				e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
			}

			function createQuaternion(e) {
				var t = e[0] * degToRads,
					r = e[1] * degToRads,
					n = e[2] * degToRads,
					i = Math.cos(t / 2),
					a = Math.cos(r / 2),
					s = Math.cos(n / 2),
					o = Math.sin(t / 2),
					l = Math.sin(r / 2),
					f = Math.sin(n / 2);
				return [o * l * s + i * a * f, o * a * s + i * l * f, i * l * s - o * a * f, i * a * s - o * l * f]
			}

			function getValueAtCurrentTime() {
				var e = this.comp.renderedFrame - this.offsetTime,
					t = this.keyframes[0].t - this.offsetTime,
					r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
				if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
					this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
					var n = this.interpolateValue(e, this._caching);
					this.pv = n
				}
				return this._caching.lastFrame = e, this.pv
			}

			function setVValue(e) {
				var t;
				if (this.propType === "unidimensional") t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
				else
					for (var r = 0, n = this.v.length; r < n;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
			}

			function processEffectsSequence() {
				if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
					if (this.lock) this.setVValue(this.pv);
					else {
						var e;
						this.lock = !0, this._mdf = this._isFirstFrame;
						var t = this.effectsSequence.length,
							r = this.kf ? this.pv : this.data.k;
						for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
						this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
					}
			}

			function addEffect(e) {
				this.effectsSequence.push(e), this.container.addDynamicProperty(this)
			}

			function ValueProperty(e, t, r, n) {
				this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
			}

			function MultiDimensionalProperty(e, t, r, n) {
				var i;
				this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
				var a = t.k.length;
				for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), i = 0; i < a; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
				this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
			}

			function KeyframedValueProperty(e, t, r, n) {
				this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
					lastFrame: initFrame,
					lastIndex: 0,
					value: 0,
					_lastKeyframeIndex: -1
				}, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
			}

			function KeyframedMultidimensionalProperty(e, t, r, n) {
				var i;
				this.propType = "multidimensional";
				var a, s, o, l, f = t.k.length;
				for (i = 0; i < f - 1; i += 1) t.k[i].to && t.k[i].s && t.k[i + 1] && t.k[i + 1].s && (a = t.k[i].s, s = t.k[i + 1].s, o = t.k[i].to, l = t.k[i].ti, (a.length === 2 && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || a.length === 3 && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (t.k[i].to = null, t.k[i].ti = null), a[0] === s[0] && a[1] === s[1] && o[0] === 0 && o[1] === 0 && l[0] === 0 && l[1] === 0 && (a.length === 2 || a[2] === s[2] && o[2] === 0 && l[2] === 0) && (t.k[i].to = null, t.k[i].ti = null));
				this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
				var u = t.k[0].s.length;
				for (this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), i = 0; i < u; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
				this._caching = {
					lastFrame: initFrame,
					lastIndex: 0,
					value: createTypedArray("float32", u)
				}, this.addEffect = addEffect
			}
			var PropertyFactory = {
				getProp: function(e, t, r, n, i) {
					var a;
					if (t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)
						if (typeof t.k[0] == "number") a = new MultiDimensionalProperty(e, t, n, i);
						else switch (r) {
							case 0:
								a = new KeyframedValueProperty(e, t, n, i);
								break;
							case 1:
								a = new KeyframedMultidimensionalProperty(e, t, n, i)
						} else a = new ValueProperty(e, t, n, i);
					return a.effectsSequence.length && i.addDynamicProperty(a), a
				}
			};

			function DynamicPropertyContainer() {}
			DynamicPropertyContainer.prototype = {
				addDynamicProperty: function(e) {
					this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
				},
				iterateDynamicProperties: function() {
					var e;
					this._mdf = !1;
					var t = this.dynamicProperties.length;
					for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
				},
				initDynamicPropertyContainer: function(e) {
					this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
				}
			};
			var pointPool = poolFactory(8, function() {
				return createTypedArray("float32", 2)
			});

			function ShapePath() {
				this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
			}
			ShapePath.prototype.setPathData = function(e, t) {
				this.c = e, this.setLength(t);
				for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
			}, ShapePath.prototype.setLength = function(e) {
				for (; this._maxLength < e;) this.doubleArrayLength();
				this._length = e
			}, ShapePath.prototype.doubleArrayLength = function() {
				this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
			}, ShapePath.prototype.setXYAt = function(e, t, r, n, i) {
				var a;
				switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
					case "v":
						a = this.v;
						break;
					case "i":
						a = this.i;
						break;
					case "o":
						a = this.o;
						break;
					default:
						a = []
				}(!a[n] || a[n] && !i) && (a[n] = pointPool.newElement()), a[n][0] = e, a[n][1] = t
			}, ShapePath.prototype.setTripleAt = function(e, t, r, n, i, a, s, o) {
				this.setXYAt(e, t, "v", s, o), this.setXYAt(r, n, "o", s, o), this.setXYAt(i, a, "i", s, o)
			}, ShapePath.prototype.reverse = function() {
				var e = new ShapePath;
				e.setPathData(this.c, this._length);
				var t = this.v,
					r = this.o,
					n = this.i,
					i = 0;
				this.c && (e.setTripleAt(t[0][0], t[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
				var a, s = this._length - 1,
					o = this._length;
				for (a = i; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), s -= 1;
				return e
			}, ShapePath.prototype.length = function() {
				return this._length
			};
			var shapePool = (factory = poolFactory(4, function() {
					return new ShapePath
				}, function(e) {
					var t, r = e._length;
					for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
					e._length = 0, e.c = !1
				}), factory.clone = function(e) {
					var t, r = factory.newElement(),
						n = e._length === void 0 ? e.v.length : e._length;
					for (r.setLength(n), r.c = e.c, t = 0; t < n; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
					return r
				}, factory),
				factory;

			function ShapeCollection() {
				this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
			}
			ShapeCollection.prototype.addShape = function(e) {
				this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
			}, ShapeCollection.prototype.releaseShapes = function() {
				var e;
				for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
				this._length = 0
			};
			var shapeCollectionPool = (ob = {
					newShapeCollection: function() {
						return _length ? pool[_length -= 1] : new ShapeCollection
					},
					release: function(e) {
						var t, r = e._length;
						for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
						e._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = e, _length += 1
					}
				}, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
				ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
					var e = -999999;

					function t(d, p, m) {
						var h, g, y, _, b, S, x, T, P, D = m.lastIndex,
							w = this.keyframes;
						if (d < w[0].t - this.offsetTime) h = w[0].s[0], y = !0, D = 0;
						else if (d >= w[w.length - 1].t - this.offsetTime) h = w[w.length - 1].s ? w[w.length - 1].s[0] : w[w.length - 2].e[0], y = !0;
						else {
							for (var C, F, O, R = D, L = w.length - 1, H = !0; H && (C = w[R], !((F = w[R + 1]).t - this.offsetTime > d));) R < L - 1 ? R += 1 : H = !1;
							if (O = this.keyframesMetadata[R] || {}, D = R, !(y = C.h === 1)) {
								if (d >= F.t - this.offsetTime) T = 1;
								else if (d < C.t - this.offsetTime) T = 0;
								else {
									var Y;
									O.__fnct ? Y = O.__fnct : (Y = BezierFactory.getBezierEasing(C.o.x, C.o.y, C.i.x, C.i.y).get, O.__fnct = Y), T = Y((d - (C.t - this.offsetTime)) / (F.t - this.offsetTime - (C.t - this.offsetTime)))
								}
								g = F.s ? F.s[0] : C.e[0]
							}
							h = C.s[0]
						}
						for (S = p._length, x = h.i[0].length, m.lastIndex = D, _ = 0; _ < S; _ += 1)
							for (b = 0; b < x; b += 1) P = y ? h.i[_][b] : h.i[_][b] + (g.i[_][b] - h.i[_][b]) * T, p.i[_][b] = P, P = y ? h.o[_][b] : h.o[_][b] + (g.o[_][b] - h.o[_][b]) * T, p.o[_][b] = P, P = y ? h.v[_][b] : h.v[_][b] + (g.v[_][b] - h.v[_][b]) * T, p.v[_][b] = P
					}

					function r() {
						var d = this.comp.renderedFrame - this.offsetTime,
							p = this.keyframes[0].t - this.offsetTime,
							m = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
							h = this._caching.lastFrame;
						return h !== e && (h < p && d < p || h > m && d > m) || (this._caching.lastIndex = h < d ? this._caching.lastIndex : 0, this.interpolateShape(d, this.pv, this._caching)), this._caching.lastFrame = d, this.pv
					}

					function n() {
						this.paths = this.localShapeCollection
					}

					function i(d) {
						(function(p, m) {
							if (p._length !== m._length || p.c !== m.c) return !1;
							var h, g = p._length;
							for (h = 0; h < g; h += 1)
								if (p.v[h][0] !== m.v[h][0] || p.v[h][1] !== m.v[h][1] || p.o[h][0] !== m.o[h][0] || p.o[h][1] !== m.o[h][1] || p.i[h][0] !== m.i[h][0] || p.i[h][1] !== m.i[h][1]) return !1;
							return !0
						})(this.v, d) || (this.v = shapePool.clone(d), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
					}

					function a() {
						if (this.elem.globalData.frameId !== this.frameId)
							if (this.effectsSequence.length)
								if (this.lock) this.setVValue(this.pv);
								else {
									var d, p;
									this.lock = !0, this._mdf = !1, d = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
									var m = this.effectsSequence.length;
									for (p = 0; p < m; p += 1) d = this.effectsSequence[p](d);
									this.setVValue(d), this.lock = !1, this.frameId = this.elem.globalData.frameId
								}
						else this._mdf = !1
					}

					function s(d, p, m) {
						this.propType = "shape", this.comp = d.comp, this.container = d, this.elem = d, this.data = p, this.k = !1, this.kf = !1, this._mdf = !1;
						var h = m === 3 ? p.pt.k : p.ks.k;
						this.v = shapePool.clone(h), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
					}

					function o(d) {
						this.effectsSequence.push(d), this.container.addDynamicProperty(this)
					}

					function l(d, p, m) {
						this.propType = "shape", this.comp = d.comp, this.elem = d, this.container = d, this.offsetTime = d.data.st, this.keyframes = m === 3 ? p.pt.k : p.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
						var h = this.keyframes[0].s[0].i.length;
						this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, h), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = n, this._caching = {
							lastFrame: e,
							lastIndex: 0
						}, this.effectsSequence = [r.bind(this)]
					}
					s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = i, l.prototype.addEffect = o;
					var f = function() {
							var d = roundCorner;

							function p(m, h) {
								this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = h.d, this.elem = m, this.comp = m.comp, this.frameId = -1, this.initDynamicPropertyContainer(m), this.p = PropertyFactory.getProp(m, h.p, 1, 0, this), this.s = PropertyFactory.getProp(m, h.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
							}
							return p.prototype = {
								reset: n,
								getValue: function() {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
								},
								convertEllToPath: function() {
									var m = this.p.v[0],
										h = this.p.v[1],
										g = this.s.v[0] / 2,
										y = this.s.v[1] / 2,
										_ = this.d !== 3,
										b = this.v;
									b.v[0][0] = m, b.v[0][1] = h - y, b.v[1][0] = _ ? m + g : m - g, b.v[1][1] = h, b.v[2][0] = m, b.v[2][1] = h + y, b.v[3][0] = _ ? m - g : m + g, b.v[3][1] = h, b.i[0][0] = _ ? m - g * d : m + g * d, b.i[0][1] = h - y, b.i[1][0] = _ ? m + g : m - g, b.i[1][1] = h - y * d, b.i[2][0] = _ ? m + g * d : m - g * d, b.i[2][1] = h + y, b.i[3][0] = _ ? m - g : m + g, b.i[3][1] = h + y * d, b.o[0][0] = _ ? m + g * d : m - g * d, b.o[0][1] = h - y, b.o[1][0] = _ ? m + g : m - g, b.o[1][1] = h + y * d, b.o[2][0] = _ ? m - g * d : m + g * d, b.o[2][1] = h + y, b.o[3][0] = _ ? m - g : m + g, b.o[3][1] = h - y * d
								}
							}, extendPrototype([DynamicPropertyContainer], p), p
						}(),
						u = function() {
							function d(p, m) {
								this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = p, this.comp = p.comp, this.data = m, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(p), m.sy === 1 ? (this.ir = PropertyFactory.getProp(p, m.ir, 0, 0, this), this.is = PropertyFactory.getProp(p, m.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(p, m.pt, 0, 0, this), this.p = PropertyFactory.getProp(p, m.p, 1, 0, this), this.r = PropertyFactory.getProp(p, m.r, 0, degToRads, this), this.or = PropertyFactory.getProp(p, m.or, 0, 0, this), this.os = PropertyFactory.getProp(p, m.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
							}
							return d.prototype = {
								reset: n,
								getValue: function() {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
								},
								convertStarToPath: function() {
									var p, m, h, g, y = 2 * Math.floor(this.pt.v),
										_ = 2 * Math.PI / y,
										b = !0,
										S = this.or.v,
										x = this.ir.v,
										T = this.os.v,
										P = this.is.v,
										D = 2 * Math.PI * S / (2 * y),
										w = 2 * Math.PI * x / (2 * y),
										C = -Math.PI / 2;
									C += this.r.v;
									var F = this.data.d === 3 ? -1 : 1;
									for (this.v._length = 0, p = 0; p < y; p += 1) {
										h = b ? T : P, g = b ? D : w;
										var O = (m = b ? S : x) * Math.cos(C),
											R = m * Math.sin(C),
											L = O === 0 && R === 0 ? 0 : R / Math.sqrt(O * O + R * R),
											H = O === 0 && R === 0 ? 0 : -O / Math.sqrt(O * O + R * R);
										O += +this.p.v[0], R += +this.p.v[1], this.v.setTripleAt(O, R, O - L * g * h * F, R - H * g * h * F, O + L * g * h * F, R + H * g * h * F, p, !0), b = !b, C += _ * F
									}
								},
								convertPolygonToPath: function() {
									var p, m = Math.floor(this.pt.v),
										h = 2 * Math.PI / m,
										g = this.or.v,
										y = this.os.v,
										_ = 2 * Math.PI * g / (4 * m),
										b = .5 * -Math.PI,
										S = this.data.d === 3 ? -1 : 1;
									for (b += this.r.v, this.v._length = 0, p = 0; p < m; p += 1) {
										var x = g * Math.cos(b),
											T = g * Math.sin(b),
											P = x === 0 && T === 0 ? 0 : T / Math.sqrt(x * x + T * T),
											D = x === 0 && T === 0 ? 0 : -x / Math.sqrt(x * x + T * T);
										x += +this.p.v[0], T += +this.p.v[1], this.v.setTripleAt(x, T, x - P * _ * y * S, T - D * _ * y * S, x + P * _ * y * S, T + D * _ * y * S, p, !0), b += h * S
									}
									this.paths.length = 0, this.paths[0] = this.v
								}
							}, extendPrototype([DynamicPropertyContainer], d), d
						}(),
						c = function() {
							function d(p, m) {
								this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = p, this.comp = p.comp, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(p), this.p = PropertyFactory.getProp(p, m.p, 1, 0, this), this.s = PropertyFactory.getProp(p, m.s, 1, 0, this), this.r = PropertyFactory.getProp(p, m.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
							}
							return d.prototype = {
								convertRectToPath: function() {
									var p = this.p.v[0],
										m = this.p.v[1],
										h = this.s.v[0] / 2,
										g = this.s.v[1] / 2,
										y = bmMin(h, g, this.r.v),
										_ = y * (1 - roundCorner);
									this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(p + h, m - g + y, p + h, m - g + y, p + h, m - g + _, 0, !0), this.v.setTripleAt(p + h, m + g - y, p + h, m + g - _, p + h, m + g - y, 1, !0), y !== 0 ? (this.v.setTripleAt(p + h - y, m + g, p + h - y, m + g, p + h - _, m + g, 2, !0), this.v.setTripleAt(p - h + y, m + g, p - h + _, m + g, p - h + y, m + g, 3, !0), this.v.setTripleAt(p - h, m + g - y, p - h, m + g - y, p - h, m + g - _, 4, !0), this.v.setTripleAt(p - h, m - g + y, p - h, m - g + _, p - h, m - g + y, 5, !0), this.v.setTripleAt(p - h + y, m - g, p - h + y, m - g, p - h + _, m - g, 6, !0), this.v.setTripleAt(p + h - y, m - g, p + h - _, m - g, p + h - y, m - g, 7, !0)) : (this.v.setTripleAt(p - h, m + g, p - h + _, m + g, p - h, m + g, 2), this.v.setTripleAt(p - h, m - g, p - h, m - g + _, p - h, m - g, 3))) : (this.v.setTripleAt(p + h, m - g + y, p + h, m - g + _, p + h, m - g + y, 0, !0), y !== 0 ? (this.v.setTripleAt(p + h - y, m - g, p + h - y, m - g, p + h - _, m - g, 1, !0), this.v.setTripleAt(p - h + y, m - g, p - h + _, m - g, p - h + y, m - g, 2, !0), this.v.setTripleAt(p - h, m - g + y, p - h, m - g + y, p - h, m - g + _, 3, !0), this.v.setTripleAt(p - h, m + g - y, p - h, m + g - _, p - h, m + g - y, 4, !0), this.v.setTripleAt(p - h + y, m + g, p - h + y, m + g, p - h + _, m + g, 5, !0), this.v.setTripleAt(p + h - y, m + g, p + h - _, m + g, p + h - y, m + g, 6, !0), this.v.setTripleAt(p + h, m + g - y, p + h, m + g - y, p + h, m + g - _, 7, !0)) : (this.v.setTripleAt(p - h, m - g, p - h + _, m - g, p - h, m - g, 1, !0), this.v.setTripleAt(p - h, m + g, p - h, m + g - _, p - h, m + g, 2, !0), this.v.setTripleAt(p + h, m + g, p + h - _, m + g, p + h, m + g, 3, !0)))
								},
								getValue: function() {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
								},
								reset: n
							}, extendPrototype([DynamicPropertyContainer], d), d
						}(),
						v = {
							getShapeProp: function(d, p, m) {
								var h;
								return m === 3 || m === 4 ? h = (m === 3 ? p.pt : p.ks).k.length ? new l(d, p, m) : new s(d, p, m) : m === 5 ? h = new c(d, p) : m === 6 ? h = new f(d, p) : m === 7 && (h = new u(d, p)), h.k && d.addDynamicProperty(h), h
							},
							getConstructorFunction: function() {
								return s
							},
							getKeyframedConstructorFunction: function() {
								return l
							}
						};
					return v
				}(),
				Matrix = function() {
					var e = Math.cos,
						t = Math.sin,
						r = Math.tan,
						n = Math.round;

					function i() {
						return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
					}

					function a(A) {
						if (A === 0) return this;
						var M = e(A),
							N = t(A);
						return this._t(M, -N, 0, 0, N, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}

					function s(A) {
						if (A === 0) return this;
						var M = e(A),
							N = t(A);
						return this._t(1, 0, 0, 0, 0, M, -N, 0, 0, N, M, 0, 0, 0, 0, 1)
					}

					function o(A) {
						if (A === 0) return this;
						var M = e(A),
							N = t(A);
						return this._t(M, 0, N, 0, 0, 1, 0, 0, -N, 0, M, 0, 0, 0, 0, 1)
					}

					function l(A) {
						if (A === 0) return this;
						var M = e(A),
							N = t(A);
						return this._t(M, -N, 0, 0, N, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}

					function f(A, M) {
						return this._t(1, M, A, 1, 0, 0)
					}

					function u(A, M) {
						return this.shear(r(A), r(M))
					}

					function c(A, M) {
						var N = e(M),
							U = t(M);
						return this._t(N, U, 0, 0, -U, N, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(A), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(N, -U, 0, 0, U, N, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}

					function v(A, M, N) {
						return N || N === 0 || (N = 1), A === 1 && M === 1 && N === 1 ? this : this._t(A, 0, 0, 0, 0, M, 0, 0, 0, 0, N, 0, 0, 0, 0, 1)
					}

					function d(A, M, N, U, $, X, ee, re, ie, Q, ae, xe, fe, q, K, J) {
						return this.props[0] = A, this.props[1] = M, this.props[2] = N, this.props[3] = U, this.props[4] = $, this.props[5] = X, this.props[6] = ee, this.props[7] = re, this.props[8] = ie, this.props[9] = Q, this.props[10] = ae, this.props[11] = xe, this.props[12] = fe, this.props[13] = q, this.props[14] = K, this.props[15] = J, this
					}

					function p(A, M, N) {
						return N = N || 0, A !== 0 || M !== 0 || N !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, A, M, N, 1) : this
					}

					function m(A, M, N, U, $, X, ee, re, ie, Q, ae, xe, fe, q, K, J) {
						var j = this.props;
						if (A === 1 && M === 0 && N === 0 && U === 0 && $ === 0 && X === 1 && ee === 0 && re === 0 && ie === 0 && Q === 0 && ae === 1 && xe === 0) return j[12] = j[12] * A + j[15] * fe, j[13] = j[13] * X + j[15] * q, j[14] = j[14] * ae + j[15] * K, j[15] *= J, this._identityCalculated = !1, this;
						var ve = j[0],
							Xe = j[1],
							ke = j[2],
							I = j[3],
							k = j[4],
							B = j[5],
							z = j[6],
							V = j[7],
							G = j[8],
							te = j[9],
							ne = j[10],
							me = j[11],
							Z = j[12],
							le = j[13],
							pe = j[14],
							Ie = j[15];
						return j[0] = ve * A + Xe * $ + ke * ie + I * fe, j[1] = ve * M + Xe * X + ke * Q + I * q, j[2] = ve * N + Xe * ee + ke * ae + I * K, j[3] = ve * U + Xe * re + ke * xe + I * J, j[4] = k * A + B * $ + z * ie + V * fe, j[5] = k * M + B * X + z * Q + V * q, j[6] = k * N + B * ee + z * ae + V * K, j[7] = k * U + B * re + z * xe + V * J, j[8] = G * A + te * $ + ne * ie + me * fe, j[9] = G * M + te * X + ne * Q + me * q, j[10] = G * N + te * ee + ne * ae + me * K, j[11] = G * U + te * re + ne * xe + me * J, j[12] = Z * A + le * $ + pe * ie + Ie * fe, j[13] = Z * M + le * X + pe * Q + Ie * q, j[14] = Z * N + le * ee + pe * ae + Ie * K, j[15] = Z * U + le * re + pe * xe + Ie * J, this._identityCalculated = !1, this
					}

					function h(A) {
						var M = A.props;
						return this.transform(M[0], M[1], M[2], M[3], M[4], M[5], M[6], M[7], M[8], M[9], M[10], M[11], M[12], M[13], M[14], M[15])
					}

					function g() {
						return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
					}

					function y(A) {
						for (var M = 0; M < 16;) {
							if (A.props[M] !== this.props[M]) return !1;
							M += 1
						}
						return !0
					}

					function _(A) {
						var M;
						for (M = 0; M < 16; M += 1) A.props[M] = this.props[M];
						return A
					}

					function b(A) {
						var M;
						for (M = 0; M < 16; M += 1) this.props[M] = A[M]
					}

					function S(A, M, N) {
						return {
							x: A * this.props[0] + M * this.props[4] + N * this.props[8] + this.props[12],
							y: A * this.props[1] + M * this.props[5] + N * this.props[9] + this.props[13],
							z: A * this.props[2] + M * this.props[6] + N * this.props[10] + this.props[14]
						}
					}

					function x(A, M, N) {
						return A * this.props[0] + M * this.props[4] + N * this.props[8] + this.props[12]
					}

					function T(A, M, N) {
						return A * this.props[1] + M * this.props[5] + N * this.props[9] + this.props[13]
					}

					function P(A, M, N) {
						return A * this.props[2] + M * this.props[6] + N * this.props[10] + this.props[14]
					}

					function D() {
						var A = this.props[0] * this.props[5] - this.props[1] * this.props[4],
							M = this.props[5] / A,
							N = -this.props[1] / A,
							U = -this.props[4] / A,
							$ = this.props[0] / A,
							X = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / A,
							ee = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / A,
							re = new Matrix;
						return re.props[0] = M, re.props[1] = N, re.props[4] = U, re.props[5] = $, re.props[12] = X, re.props[13] = ee, re
					}

					function w(A) {
						return this.getInverseMatrix().applyToPointArray(A[0], A[1], A[2] || 0)
					}

					function C(A) {
						var M, N = A.length,
							U = [];
						for (M = 0; M < N; M += 1) U[M] = w(A[M]);
						return U
					}

					function F(A, M, N) {
						var U = createTypedArray("float32", 6);
						if (this.isIdentity()) U[0] = A[0], U[1] = A[1], U[2] = M[0], U[3] = M[1], U[4] = N[0], U[5] = N[1];
						else {
							var $ = this.props[0],
								X = this.props[1],
								ee = this.props[4],
								re = this.props[5],
								ie = this.props[12],
								Q = this.props[13];
							U[0] = A[0] * $ + A[1] * ee + ie, U[1] = A[0] * X + A[1] * re + Q, U[2] = M[0] * $ + M[1] * ee + ie, U[3] = M[0] * X + M[1] * re + Q, U[4] = N[0] * $ + N[1] * ee + ie, U[5] = N[0] * X + N[1] * re + Q
						}
						return U
					}

					function O(A, M, N) {
						return this.isIdentity() ? [A, M, N] : [A * this.props[0] + M * this.props[4] + N * this.props[8] + this.props[12], A * this.props[1] + M * this.props[5] + N * this.props[9] + this.props[13], A * this.props[2] + M * this.props[6] + N * this.props[10] + this.props[14]]
					}

					function R(A, M) {
						if (this.isIdentity()) return A + "," + M;
						var N = this.props;
						return Math.round(100 * (A * N[0] + M * N[4] + N[12])) / 100 + "," + Math.round(100 * (A * N[1] + M * N[5] + N[13])) / 100
					}

					function L() {
						for (var A = 0, M = this.props, N = "matrix3d("; A < 16;) N += n(1e4 * M[A]) / 1e4, N += A === 15 ? ")" : ",", A += 1;
						return N
					}

					function H(A) {
						return A < 1e-6 && A > 0 || A > -1e-6 && A < 0 ? n(1e4 * A) / 1e4 : A
					}

					function Y() {
						var A = this.props;
						return "matrix(" + H(A[0]) + "," + H(A[1]) + "," + H(A[4]) + "," + H(A[5]) + "," + H(A[12]) + "," + H(A[13]) + ")"
					}
					return function() {
						this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = u, this.skewFromAxis = c, this.shear = f, this.scale = v, this.setTransform = d, this.translate = p, this.transform = m, this.multiply = h, this.applyToPoint = S, this.applyToX = x, this.applyToY = T, this.applyToZ = P, this.applyToPointArray = O, this.applyToTriplePoints = F, this.applyToPointStringified = R, this.toCSS = L, this.to2dCSS = Y, this.clone = _, this.cloneFromProps = b, this.equals = y, this.inversePoints = C, this.inversePoint = w, this.getInverseMatrix = D, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
					}
				}();

			function _typeof$3(e) {
				return _typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$3(e)
			}
			var lottie = {},
				standalone = "__[STANDALONE]__",
				animationData = "__[ANIMATIONDATA]__",
				renderer = "";

			function setLocation(e) {
				setLocationHref(e)
			}

			function searchAnimations() {
				standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
			}

			function setSubframeRendering(e) {
				setSubframeEnabled(e)
			}

			function setPrefix(e) {
				setIdPrefix(e)
			}

			function loadAnimation(e) {
				return standalone === !0 && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
			}

			function setQuality(e) {
				if (typeof e == "string") switch (e) {
					case "high":
						setDefaultCurveSegments(200);
						break;
					default:
					case "medium":
						setDefaultCurveSegments(50);
						break;
					case "low":
						setDefaultCurveSegments(10)
				} else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
				getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
			}

			function inBrowser() {
				return typeof navigator < "u"
			}

			function installPlugin(e, t) {
				e === "expressions" && setExpressionsPlugin(t)
			}

			function getFactory(e) {
				switch (e) {
					case "propertyFactory":
						return PropertyFactory;
					case "shapePropertyFactory":
						return ShapePropertyFactory;
					case "matrix":
						return Matrix;
					default:
						return null
				}
			}

			function checkReady() {
				document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
			}

			function getQueryVariable(e) {
				for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
					var n = t[r].split("=");
					if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1])
				}
				return null
			}
			lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
			var queryString = "";
			if (standalone) {
				var scripts = document.getElementsByTagName("script"),
					index = scripts.length - 1,
					myScript = scripts[index] || {
						src: ""
					};
				queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
			}
			var readyStateCheckInterval = setInterval(checkReady, 100);
			try {
				(typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u" || typeof define == "function" && define.amd || (window.bodymovin = lottie)
			} catch (e) {}
			var ShapeModifiers = function() {
				var e = {},
					t = {};
				return e.registerModifier = function(r, n) {
					t[r] || (t[r] = n)
				}, e.getModifier = function(r, n, i) {
					return new t[r](n, i)
				}, e
			}();

			function ShapeModifier() {}

			function TrimModifier() {}

			function PuckerAndBloatModifier() {}
			ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
				if (!this.closed) {
					e.sh.container.addDynamicProperty(e.sh);
					var t = {
						shape: e.sh,
						data: e,
						localShapeCollection: shapeCollectionPool.newShapeCollection()
					};
					this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
				}
			}, ShapeModifier.prototype.init = function(e, t) {
				this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
			}, ShapeModifier.prototype.processKeys = function() {
				this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
			}, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
				this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
			}, TrimModifier.prototype.addShapeToModifier = function(e) {
				e.pathsData = []
			}, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, n, i) {
				var a = [];
				t <= 1 ? a.push({
					s: e,
					e: t
				}) : e >= 1 ? a.push({
					s: e - 1,
					e: t - 1
				}) : (a.push({
					s: e,
					e: 1
				}), a.push({
					s: 0,
					e: t - 1
				}));
				var s, o, l = [],
					f = a.length;
				for (s = 0; s < f; s += 1) {
					var u, c;
					(o = a[s]).e * i < n || o.s * i > n + r || (u = o.s * i <= n ? 0 : (o.s * i - n) / r, c = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([u, c]))
				}
				return l.length || l.push([0, 0]), l
			}, TrimModifier.prototype.releasePathsData = function(e) {
				var t, r = e.length;
				for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
				return e.length = 0, e
			}, TrimModifier.prototype.processShapes = function(e) {
				var t, r, n, i;
				if (this._mdf || e) {
					var a = this.o.v % 360 / 360;
					if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
						var s = t;
						t = r, r = s
					}
					t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
				} else t = this.sValue, r = this.eValue;
				var o, l, f, u, c, v = this.shapes.length,
					d = 0;
				if (r === t)
					for (i = 0; i < v; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
				else if (r === 1 && t === 0 || r === 0 && t === 1) {
					if (this._mdf)
						for (i = 0; i < v; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
				} else {
					var p, m, h = [];
					for (i = 0; i < v; i += 1)
						if ((p = this.shapes[i]).shape._mdf || this._mdf || e || this.m === 2) {
							if (l = (n = p.shape.paths)._length, c = 0, !p.shape._mdf && p.pathsData.length) c = p.totalShapeLength;
							else {
								for (f = this.releasePathsData(p.pathsData), o = 0; o < l; o += 1) u = bez.getSegmentsLength(n.shapes[o]), f.push(u), c += u.totalLength;
								p.totalShapeLength = c, p.pathsData = f
							}
							d += c, p.shape._mdf = !0
						} else p.shape.paths = p.localShapeCollection;
					var g, y = t,
						_ = r,
						b = 0;
					for (i = v - 1; i >= 0; i -= 1)
						if ((p = this.shapes[i]).shape._mdf) {
							for ((m = p.localShapeCollection).releaseShapes(), this.m === 2 && v > 1 ? (g = this.calculateShapeEdges(t, r, p.totalShapeLength, b, d), b += p.totalShapeLength) : g = [
									[y, _]
								], l = g.length, o = 0; o < l; o += 1) {
								y = g[o][0], _ = g[o][1], h.length = 0, _ <= 1 ? h.push({
									s: p.totalShapeLength * y,
									e: p.totalShapeLength * _
								}) : y >= 1 ? h.push({
									s: p.totalShapeLength * (y - 1),
									e: p.totalShapeLength * (_ - 1)
								}) : (h.push({
									s: p.totalShapeLength * y,
									e: p.totalShapeLength
								}), h.push({
									s: 0,
									e: p.totalShapeLength * (_ - 1)
								}));
								var S = this.addShapes(p, h[0]);
								if (h[0].s !== h[0].e) {
									if (h.length > 1)
										if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
											var x = S.pop();
											this.addPaths(S, m), S = this.addShapes(p, h[1], x)
										} else this.addPaths(S, m), S = this.addShapes(p, h[1]);
									this.addPaths(S, m)
								}
							}
							p.shape.paths = m
						}
				}
			}, TrimModifier.prototype.addPaths = function(e, t) {
				var r, n = e.length;
				for (r = 0; r < n; r += 1) t.addShape(e[r])
			}, TrimModifier.prototype.addSegment = function(e, t, r, n, i, a, s) {
				i.setXYAt(t[0], t[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), s && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
			}, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, n) {
				t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), n && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
			}, TrimModifier.prototype.addShapes = function(e, t, r) {
				var n, i, a, s, o, l, f, u, c = e.pathsData,
					v = e.shape.paths.shapes,
					d = e.shape.paths._length,
					p = 0,
					m = [],
					h = !0;
				for (r ? (o = r._length, u = r._length) : (r = shapePool.newElement(), o = 0, u = 0), m.push(r), n = 0; n < d; n += 1) {
					for (l = c[n].lengths, r.c = v[n].c, a = v[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
						if (p + (s = l[i - 1]).addedLength < t.s) p += s.addedLength, r.c = !1;
						else {
							if (p > t.e) {
								r.c = !1;
								break
							}
							t.s <= p && t.e >= p + s.addedLength ? (this.addSegment(v[n].v[i - 1], v[n].o[i - 1], v[n].i[i], v[n].v[i], r, o, h), h = !1) : (f = bez.getNewSegment(v[n].v[i - 1], v[n].v[i], v[n].o[i - 1], v[n].i[i], (t.s - p) / s.addedLength, (t.e - p) / s.addedLength, l[i - 1]), this.addSegmentFromArray(f, r, o, h), h = !1, r.c = !1), p += s.addedLength, o += 1
						} if (v[n].c && l.length) {
						if (s = l[i - 1], p <= t.e) {
							var g = l[i - 1].addedLength;
							t.s <= p && t.e >= p + g ? (this.addSegment(v[n].v[i - 1], v[n].o[i - 1], v[n].i[0], v[n].v[0], r, o, h), h = !1) : (f = bez.getNewSegment(v[n].v[i - 1], v[n].v[0], v[n].o[i - 1], v[n].i[0], (t.s - p) / g, (t.e - p) / g, l[i - 1]), this.addSegmentFromArray(f, r, o, h), h = !1, r.c = !1)
						} else r.c = !1;
						p += s.addedLength, o += 1
					}
					if (r._length && (r.setXYAt(r.v[u][0], r.v[u][1], "i", u), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), p > t.e) break;
					n < d - 1 && (r = shapePool.newElement(), h = !0, m.push(r), o = 0)
				}
				return m
			}, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
				this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
			}, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
				var r = t / 100,
					n = [0, 0],
					i = e._length,
					a = 0;
				for (a = 0; a < i; a += 1) n[0] += e.v[a][0], n[1] += e.v[a][1];
				n[0] /= i, n[1] /= i;
				var s, o, l, f, u, c, v = shapePool.newElement();
				for (v.c = e.c, a = 0; a < i; a += 1) s = e.v[a][0] + (n[0] - e.v[a][0]) * r, o = e.v[a][1] + (n[1] - e.v[a][1]) * r, l = e.o[a][0] + (n[0] - e.o[a][0]) * -r, f = e.o[a][1] + (n[1] - e.o[a][1]) * -r, u = e.i[a][0] + (n[0] - e.i[a][0]) * -r, c = e.i[a][1] + (n[1] - e.i[a][1]) * -r, v.setTripleAt(s, o, l, f, u, c, a);
				return v
			}, PuckerAndBloatModifier.prototype.processShapes = function(e) {
				var t, r, n, i, a, s, o = this.shapes.length,
					l = this.amount.v;
				if (l !== 0)
					for (r = 0; r < o; r += 1) {
						if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
							for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
						a.shape.paths = a.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			};
			var TransformPropertyFactory = function() {
				var e = [0, 0];

				function t(r, n, i) {
					if (this.elem = r, this.frameId = -1, this.propType = "transform", this.data = n, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || r), n.p && n.p.s ? (this.px = PropertyFactory.getProp(r, n.p.x, 0, 0, this), this.py = PropertyFactory.getProp(r, n.p.y, 0, 0, this), n.p.z && (this.pz = PropertyFactory.getProp(r, n.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(r, n.p || {
							k: [0, 0, 0]
						}, 1, 0, this), n.rx) {
						if (this.rx = PropertyFactory.getProp(r, n.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(r, n.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(r, n.rz, 0, degToRads, this), n.or.k[0].ti) {
							var a, s = n.or.k.length;
							for (a = 0; a < s; a += 1) n.or.k[a].to = null, n.or.k[a].ti = null
						}
						this.or = PropertyFactory.getProp(r, n.or, 1, degToRads, this), this.or.sh = !0
					} else this.r = PropertyFactory.getProp(r, n.r || {
						k: 0
					}, 0, degToRads, this);
					n.sk && (this.sk = PropertyFactory.getProp(r, n.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(r, n.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(r, n.a || {
						k: [0, 0, 0]
					}, 1, 0, this), this.s = PropertyFactory.getProp(r, n.s || {
						k: [100, 100, 100]
					}, 1, .01, this), n.o ? this.o = PropertyFactory.getProp(r, n.o, 0, .01, r) : this.o = {
						_mdf: !1,
						v: 1
					}, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
				}
				return t.prototype = {
					applyToMatrix: function(r) {
						var n = this._mdf;
						this.iterateDynamicProperties(), this._mdf = this._mdf || n, this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && r.skewFromAxis(-this.sk.v, this.sa.v), this.r ? r.rotate(-this.r.v) : r.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? r.translate(this.px.v, this.py.v, -this.pz.v) : r.translate(this.px.v, this.py.v, 0) : r.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
					},
					getValue: function(r) {
						if (this.elem.globalData.frameId !== this.frameId) {
							if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || r) {
								var n;
								if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
									var i, a;
									if (n = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / n, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / n, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / n, this.p.offsetTime));
									else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
										i = [], a = [];
										var s = this.px,
											o = this.py;
										s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (i[0] = s.getValueAtTime((s.keyframes[0].t + .01) / n, 0), i[1] = o.getValueAtTime((o.keyframes[0].t + .01) / n, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / n, 0), a[1] = o.getValueAtTime(o.keyframes[0].t / n, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / n, 0), i[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / n, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / n, 0), a[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / n, 0)) : (i = [s.pv, o.pv], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / n, s.offsetTime), a[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / n, o.offsetTime))
									} else i = a = e;
									this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]))
								}
								this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
							}
							this.frameId = this.elem.globalData.frameId
						}
					},
					precalculateMatrix: function() {
						if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
							if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
								if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
								this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
							}
							this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
						}
					},
					autoOrient: function() {}
				}, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(r) {
					this._addDynamicProperty(r), this.elem.addDynamicProperty(r), this._isDirty = !0
				}, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
					getTransformProperty: function(r, n, i) {
						return new t(r, n, i)
					}
				}
			}();

			function RepeaterModifier() {}

			function RoundCornersModifier() {}

			function floatEqual(e, t) {
				return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
			}

			function floatZero(e) {
				return Math.abs(e) <= 1e-5
			}

			function lerp(e, t, r) {
				return e * (1 - r) + t * r
			}

			function lerpPoint(e, t, r) {
				return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
			}

			function quadRoots(e, t, r) {
				if (e === 0) return [];
				var n = t * t - 4 * e * r;
				if (n < 0) return [];
				var i = -t / (2 * e);
				if (n === 0) return [i];
				var a = Math.sqrt(n) / (2 * e);
				return [i - a, i + a]
			}

			function polynomialCoefficients(e, t, r, n) {
				return [3 * t - e - 3 * r + n, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
			}

			function singlePoint(e) {
				return new PolynomialBezier(e, e, e, e, !1)
			}

			function PolynomialBezier(e, t, r, n, i) {
				i && pointEqual(e, t) && (t = lerpPoint(e, n, 1 / 3)), i && pointEqual(r, n) && (r = lerpPoint(e, n, 2 / 3));
				var a = polynomialCoefficients(e[0], t[0], r[0], n[0]),
					s = polynomialCoefficients(e[1], t[1], r[1], n[1]);
				this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [e, t, r, n]
			}

			function extrema(e, t) {
				var r = e.points[0][t],
					n = e.points[e.points.length - 1][t];
				if (r > n) {
					var i = n;
					n = r, r = i
				}
				for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1)
					if (a[s] > 0 && a[s] < 1) {
						var o = e.point(a[s])[t];
						o < r ? r = o : o > n && (n = o)
					} return {
					min: r,
					max: n
				}
			}

			function intersectData(e, t, r) {
				var n = e.boundingBox();
				return {
					cx: n.cx,
					cy: n.cy,
					width: n.width,
					height: n.height,
					bez: e,
					t: (t + r) / 2,
					t1: t,
					t2: r
				}
			}

			function splitData(e) {
				var t = e.bez.split(.5);
				return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
			}

			function boxIntersect(e, t) {
				return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
			}

			function intersectsImpl(e, t, r, n, i, a) {
				if (boxIntersect(e, t))
					if (r >= a || e.width <= n && e.height <= n && t.width <= n && t.height <= n) i.push([e.t, t.t]);
					else {
						var s = splitData(e),
							o = splitData(t);
						intersectsImpl(s[0], o[0], r + 1, n, i, a), intersectsImpl(s[0], o[1], r + 1, n, i, a), intersectsImpl(s[1], o[0], r + 1, n, i, a), intersectsImpl(s[1], o[1], r + 1, n, i, a)
					}
			}

			function crossProduct(e, t) {
				return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
			}

			function lineIntersection(e, t, r, n) {
				var i = [e[0], e[1], 1],
					a = [t[0], t[1], 1],
					s = [r[0], r[1], 1],
					o = [n[0], n[1], 1],
					l = crossProduct(crossProduct(i, a), crossProduct(s, o));
				return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
			}

			function polarOffset(e, t, r) {
				return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
			}

			function pointDistance(e, t) {
				return Math.hypot(e[0] - t[0], e[1] - t[1])
			}

			function pointEqual(e, t) {
				return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
			}

			function ZigZagModifier() {}

			function setPoint(e, t, r, n, i, a, s) {
				var o = r - Math.PI / 2,
					l = r + Math.PI / 2,
					f = t[0] + Math.cos(r) * n * i,
					u = t[1] - Math.sin(r) * n * i;
				e.setTripleAt(f, u, f + Math.cos(o) * a, u - Math.sin(o) * a, f + Math.cos(l) * s, u - Math.sin(l) * s, e.length())
			}

			function getPerpendicularVector(e, t) {
				var r = [t[0] - e[0], t[1] - e[1]],
					n = .5 * -Math.PI;
				return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]]
			}

			function getProjectingAngle(e, t) {
				var r = t === 0 ? e.length() - 1 : t - 1,
					n = (t + 1) % e.length(),
					i = getPerpendicularVector(e.v[r], e.v[n]);
				return Math.atan2(0, 1) - Math.atan2(i[1], i[0])
			}

			function zigZagCorner(e, t, r, n, i, a, s) {
				var o = getProjectingAngle(t, r),
					l = t.v[r % t._length],
					f = t.v[r === 0 ? t._length - 1 : r - 1],
					u = t.v[(r + 1) % t._length],
					c = a === 2 ? Math.sqrt(Math.pow(l[0] - f[0], 2) + Math.pow(l[1] - f[1], 2)) : 0,
					v = a === 2 ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
				setPoint(e, t.v[r % t._length], o, s, n, v / (2 * (i + 1)), c / (2 * (i + 1)), a)
			}

			function zigZagSegment(e, t, r, n, i, a) {
				for (var s = 0; s < n; s += 1) {
					var o = (s + 1) / (n + 1),
						l = i === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
						f = t.normalAngle(o);
					setPoint(e, t.point(o), f, a, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), a = -a
				}
				return a
			}

			function linearOffset(e, t, r) {
				var n = Math.atan2(t[0] - e[0], t[1] - e[1]);
				return [polarOffset(e, n, r), polarOffset(t, n, r)]
			}

			function offsetSegment(e, t) {
				var r, n, i, a, s, o, l;
				r = (l = linearOffset(e.points[0], e.points[1], t))[0], n = l[1], i = (l = linearOffset(e.points[1], e.points[2], t))[0], a = l[1], s = (l = linearOffset(e.points[2], e.points[3], t))[0], o = l[1];
				var f = lineIntersection(r, n, i, a);
				f === null && (f = n);
				var u = lineIntersection(s, o, i, a);
				return u === null && (u = s), new PolynomialBezier(r, f, u, o)
			}

			function joinLines(e, t, r, n, i) {
				var a = t.points[3],
					s = r.points[0];
				if (n === 3 || pointEqual(a, s)) return a;
				if (n === 2) {
					var o = -t.tangentAngle(1),
						l = -r.tangentAngle(0) + Math.PI,
						f = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
						u = f ? pointDistance(f, a) : pointDistance(a, s) / 2,
						c = polarOffset(a, o, 2 * u * roundCorner);
					return e.setXYAt(c[0], c[1], "o", e.length() - 1), c = polarOffset(s, l, 2 * u * roundCorner), e.setTripleAt(s[0], s[1], s[0], s[1], c[0], c[1], e.length()), s
				}
				var v = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
				return v && pointDistance(v, a) < i ? (e.setTripleAt(v[0], v[1], v[0], v[1], v[0], v[1], e.length()), v) : a
			}

			function getIntersection(e, t) {
				var r = e.intersections(t);
				return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
			}

			function pruneSegmentIntersection(e, t) {
				var r = e.slice(),
					n = t.slice(),
					i = getIntersection(e[e.length - 1], t[0]);
				return i && (r[e.length - 1] = e[e.length - 1].split(i[0])[0], n[0] = t[0].split(i[1])[1]), e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1])) ? [
					[e[0].split(i[0])[0]],
					[t[t.length - 1].split(i[1])[1]]
				] : [r, n]
			}

			function pruneIntersections(e) {
				for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
				return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
			}

			function offsetSegmentSplit(e, t) {
				var r, n, i, a, s = e.inflectionPoints();
				if (s.length === 0) return [offsetSegment(e, t)];
				if (s.length === 1 || floatEqual(s[1], 1)) return r = (i = e.split(s[0]))[0], n = i[1], [offsetSegment(r, t), offsetSegment(n, t)];
				r = (i = e.split(s[0]))[0];
				var o = (s[1] - s[0]) / (1 - s[0]);
				return a = (i = i[1].split(o))[0], n = i[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(n, t)]
			}

			function OffsetPathModifier() {}

			function getFontProperties(e) {
				for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", n = "normal", i = t.length, a = 0; a < i; a += 1) switch (t[a].toLowerCase()) {
					case "italic":
						n = "italic";
						break;
					case "bold":
						r = "700";
						break;
					case "black":
						r = "900";
						break;
					case "medium":
						r = "500";
						break;
					case "regular":
					case "normal":
						r = "400";
						break;
					case "light":
					case "thin":
						r = "200"
				}
				return {
					style: n,
					weight: e.fWeight || r
				}
			}
			extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
				this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
			}, RepeaterModifier.prototype.applyTransforms = function(e, t, r, n, i, a) {
				var s = a ? -1 : 1,
					o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
					l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
				e.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]), t.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), t.rotate(-n.r.v * s * i), t.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
			}, RepeaterModifier.prototype.init = function(e, t, r, n) {
				for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
				this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
			}, RepeaterModifier.prototype.resetElements = function(e) {
				var t, r = e.length;
				for (t = 0; t < r; t += 1) e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it)
			}, RepeaterModifier.prototype.cloneElements = function(e) {
				var t = JSON.parse(JSON.stringify(e));
				return this.resetElements(t), t
			}, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
				var r, n = e.length;
				for (r = 0; r < n; r += 1) e[r]._render = t, e[r].ty === "gr" && this.changeGroupRender(e[r].it, t)
			}, RepeaterModifier.prototype.processShapes = function(e) {
				var t, r, n, i, a, s = !1;
				if (this._mdf || e) {
					var o, l = Math.ceil(this.c.v);
					if (this._groups.length < l) {
						for (; this._groups.length < l;) {
							var f = {
								it: this.cloneElements(this._elements),
								ty: "gr"
							};
							f.it.push({
								a: {
									a: 0,
									ix: 1,
									k: [0, 0]
								},
								nm: "Transform",
								o: {
									a: 0,
									ix: 7,
									k: 100
								},
								p: {
									a: 0,
									ix: 2,
									k: [0, 0]
								},
								r: {
									a: 1,
									ix: 6,
									k: [{
										s: 0,
										e: 0,
										t: 0
									}, {
										s: 0,
										e: 0,
										t: 1
									}]
								},
								s: {
									a: 0,
									ix: 3,
									k: [100, 100]
								},
								sa: {
									a: 0,
									ix: 5,
									k: 0
								},
								sk: {
									a: 0,
									ix: 4,
									k: 0
								},
								ty: "tr"
							}), this.arr.splice(0, 0, f), this._groups.splice(0, 0, f), this._currentCopies += 1
						}
						this.elem.reloadShapes(), s = !0
					}
					for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
						if (o = a < l, this._groups[n]._render = o, this.changeGroupRender(this._groups[n].it, o), !o) {
							var u = this.elemsData[n].it,
								c = u[u.length - 1];
							c.transform.op.v !== 0 ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
						}
						a += 1
					}
					this._currentCopies = l;
					var v = this.o.v,
						d = v % 1,
						p = v > 0 ? Math.floor(v) : Math.ceil(v),
						m = this.pMatrix.props,
						h = this.rMatrix.props,
						g = this.sMatrix.props;
					this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
					var y, _, b = 0;
					if (v > 0) {
						for (; b < p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), b += 1;
						d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), b += d)
					} else if (v < 0) {
						for (; b > p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), b -= 1;
						d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), b -= d)
					}
					for (n = this.data.m === 1 ? 0 : this._currentCopies - 1, i = this.data.m === 1 ? 1 : -1, a = this._currentCopies; a;) {
						if (_ = (r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), b !== 0) {
							for ((n !== 0 && i === 1 || n !== this._currentCopies - 1 && i === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], h[14], h[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < _; y += 1) r[y] = this.matrix.props[y];
							this.matrix.reset()
						} else
							for (this.matrix.reset(), y = 0; y < _; y += 1) r[y] = this.matrix.props[y];
						b += 1, a -= 1, n += i
					}
				} else
					for (a = this._currentCopies, n = 0, i = 1; a;) r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, n += i;
				return s
			}, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
				this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
			}, RoundCornersModifier.prototype.processPath = function(e, t) {
				var r, n = shapePool.newElement();
				n.c = e.c;
				var i, a, s, o, l, f, u, c, v, d, p, m, h = e._length,
					g = 0;
				for (r = 0; r < h; r += 1) i = e.v[r], s = e.o[r], a = e.i[r], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? r !== 0 && r !== h - 1 || e.c ? (o = r === 0 ? e.v[h - 1] : e.v[r - 1], f = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = p = i[0] + (o[0] - i[0]) * f, c = m = i[1] - (i[1] - o[1]) * f, v = u - (u - i[0]) * roundCorner, d = c - (c - i[1]) * roundCorner, n.setTripleAt(u, c, v, d, p, m, g), g += 1, o = r === h - 1 ? e.v[0] : e.v[r + 1], f = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = v = i[0] + (o[0] - i[0]) * f, c = d = i[1] + (o[1] - i[1]) * f, p = u - (u - i[0]) * roundCorner, m = c - (c - i[1]) * roundCorner, n.setTripleAt(u, c, v, d, p, m, g), g += 1) : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], g), g += 1) : (n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], g), g += 1);
				return n
			}, RoundCornersModifier.prototype.processShapes = function(e) {
				var t, r, n, i, a, s, o = this.shapes.length,
					l = this.rd.v;
				if (l !== 0)
					for (r = 0; r < o; r += 1) {
						if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
							for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
						a.shape.paths = a.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			}, PolynomialBezier.prototype.point = function(e) {
				return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
			}, PolynomialBezier.prototype.derivative = function(e) {
				return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
			}, PolynomialBezier.prototype.tangentAngle = function(e) {
				var t = this.derivative(e);
				return Math.atan2(t[1], t[0])
			}, PolynomialBezier.prototype.normalAngle = function(e) {
				var t = this.derivative(e);
				return Math.atan2(t[0], t[1])
			}, PolynomialBezier.prototype.inflectionPoints = function() {
				var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
				if (floatZero(e)) return [];
				var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
					r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
				if (r < 0) return [];
				var n = Math.sqrt(r);
				return floatZero(n) ? n > 0 && n < 1 ? [t] : [] : [t - n, t + n].filter(function(i) {
					return i > 0 && i < 1
				})
			}, PolynomialBezier.prototype.split = function(e) {
				if (e <= 0) return [singlePoint(this.points[0]), this];
				if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
				var t = lerpPoint(this.points[0], this.points[1], e),
					r = lerpPoint(this.points[1], this.points[2], e),
					n = lerpPoint(this.points[2], this.points[3], e),
					i = lerpPoint(t, r, e),
					a = lerpPoint(r, n, e),
					s = lerpPoint(i, a, e);
				return [new PolynomialBezier(this.points[0], t, i, s, !0), new PolynomialBezier(s, a, n, this.points[3], !0)]
			}, PolynomialBezier.prototype.bounds = function() {
				return {
					x: extrema(this, 0),
					y: extrema(this, 1)
				}
			}, PolynomialBezier.prototype.boundingBox = function() {
				var e = this.bounds();
				return {
					left: e.x.min,
					right: e.x.max,
					top: e.y.min,
					bottom: e.y.max,
					width: e.x.max - e.x.min,
					height: e.y.max - e.y.min,
					cx: (e.x.max + e.x.min) / 2,
					cy: (e.y.max + e.y.min) / 2
				}
			}, PolynomialBezier.prototype.intersections = function(e, t, r) {
				t === void 0 && (t = 2), r === void 0 && (r = 7);
				var n = [];
				return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, n, r), n
			}, PolynomialBezier.shapeSegment = function(e, t) {
				var r = (t + 1) % e.length();
				return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
			}, PolynomialBezier.shapeSegmentInverted = function(e, t) {
				var r = (t + 1) % e.length();
				return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
			}, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
				this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
			}, ZigZagModifier.prototype.processPath = function(e, t, r, n) {
				var i = e._length,
					a = shapePool.newElement();
				if (a.c = e.c, e.c || (i -= 1), i === 0) return a;
				var s = -1,
					o = PolynomialBezier.shapeSegment(e, 0);
				zigZagCorner(a, e, 0, t, r, n, s);
				for (var l = 0; l < i; l += 1) s = zigZagSegment(a, o, t, r, n, -s), o = l !== i - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % i) : null, zigZagCorner(a, e, l + 1, t, r, n, s);
				return a
			}, ZigZagModifier.prototype.processShapes = function(e) {
				var t, r, n, i, a, s, o = this.shapes.length,
					l = this.amplitude.v,
					f = Math.max(0, Math.round(this.frequency.v)),
					u = this.pointsType.v;
				if (l !== 0)
					for (r = 0; r < o; r += 1) {
						if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
							for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, f, u));
						a.shape.paths = a.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			}, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
				this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
			}, OffsetPathModifier.prototype.processPath = function(e, t, r, n) {
				var i = shapePool.newElement();
				i.c = e.c;
				var a, s, o, l = e.length();
				e.c || (l -= 1);
				var f = [];
				for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(e, a), f.push(offsetSegmentSplit(o, t));
				if (!e.c)
					for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), f.push(offsetSegmentSplit(o, t));
				f = pruneIntersections(f);
				var u = null,
					c = null;
				for (a = 0; a < f.length; a += 1) {
					var v = f[a];
					for (c && (u = joinLines(i, c, v[0], r, n)), c = v[v.length - 1], s = 0; s < v.length; s += 1) o = v[s], u && pointEqual(o.points[0], u) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), u = o.points[3]
				}
				return f.length && joinLines(i, c, f[0][0], r, n), i
			}, OffsetPathModifier.prototype.processShapes = function(e) {
				var t, r, n, i, a, s, o = this.shapes.length,
					l = this.amount.v,
					f = this.miterLimit.v,
					u = this.lineJoin;
				if (l !== 0)
					for (r = 0; r < o; r += 1) {
						if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
							for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, u, f));
						a.shape.paths = a.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			};
			var FontManager = function() {
				var e = {
						w: 0,
						size: 0,
						shapes: [],
						data: {
							shapes: []
						}
					},
					t = [];
				t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
				var r = 127988,
					n = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

				function i(u, c) {
					var v = createTag("span");
					v.setAttribute("aria-hidden", !0), v.style.fontFamily = c;
					var d = createTag("span");
					d.innerText = "giItT1WQy@!-/#", v.style.position = "absolute", v.style.left = "-10000px", v.style.top = "-10000px", v.style.fontSize = "300px", v.style.fontVariant = "normal", v.style.fontStyle = "normal", v.style.fontWeight = "normal", v.style.letterSpacing = "0", v.appendChild(d), document.body.appendChild(v);
					var p = d.offsetWidth;
					return d.style.fontFamily = function(m) {
						var h, g = m.split(","),
							y = g.length,
							_ = [];
						for (h = 0; h < y; h += 1) g[h] !== "sans-serif" && g[h] !== "monospace" && _.push(g[h]);
						return _.join(",")
					}(u) + ", " + c, {
						node: d,
						w: p,
						parent: v
					}
				}

				function a(u, c) {
					var v, d = document.body && c ? "svg" : "canvas",
						p = getFontProperties(u);
					if (d === "svg") {
						var m = createNS("text");
						m.style.fontSize = "100px", m.setAttribute("font-family", u.fFamily), m.setAttribute("font-style", p.style), m.setAttribute("font-weight", p.weight), m.textContent = "1", u.fClass ? (m.style.fontFamily = "inherit", m.setAttribute("class", u.fClass)) : m.style.fontFamily = u.fFamily, c.appendChild(m), v = m
					} else {
						var h = new OffscreenCanvas(500, 500).getContext("2d");
						h.font = p.style + " " + p.weight + " 100px " + u.fFamily, v = h
					}
					return {
						measureText: function(g) {
							return d === "svg" ? (v.textContent = g, v.getComputedTextLength()) : v.measureText(g).width
						}
					}
				}

				function s(u) {
					var c = 0,
						v = u.charCodeAt(0);
					if (v >= 55296 && v <= 56319) {
						var d = u.charCodeAt(1);
						d >= 56320 && d <= 57343 && (c = 1024 * (v - 55296) + d - 56320 + 65536)
					}
					return c
				}

				function o(u) {
					var c = s(u);
					return c >= 127462 && c <= 127487
				}
				var l = function() {
					this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
				};
				l.isModifier = function(u, c) {
					var v = u.toString(16) + c.toString(16);
					return n.indexOf(v) !== -1
				}, l.isZeroWidthJoiner = function(u) {
					return u === 8205
				}, l.isFlagEmoji = function(u) {
					return o(u.substr(0, 2)) && o(u.substr(2, 2))
				}, l.isRegionalCode = o, l.isCombinedCharacter = function(u) {
					return t.indexOf(u) !== -1
				}, l.isRegionalFlag = function(u, c) {
					var v = s(u.substr(c, 2));
					if (v !== r) return !1;
					var d = 0;
					for (c += 2; d < 5;) {
						if ((v = s(u.substr(c, 2))) < 917601 || v > 917626) return !1;
						d += 1, c += 2
					}
					return s(u.substr(c, 2)) === 917631
				}, l.isVariationSelector = function(u) {
					return u === 65039
				}, l.BLACK_FLAG_CODE_POINT = r;
				var f = {
					addChars: function(u) {
						if (u) {
							var c;
							this.chars || (this.chars = []);
							var v, d, p = u.length,
								m = this.chars.length;
							for (c = 0; c < p; c += 1) {
								for (v = 0, d = !1; v < m;) this.chars[v].style === u[c].style && this.chars[v].fFamily === u[c].fFamily && this.chars[v].ch === u[c].ch && (d = !0), v += 1;
								d || (this.chars.push(u[c]), m += 1)
							}
						}
					},
					addFonts: function(u, c) {
						if (u) {
							if (this.chars) return this.isLoaded = !0, void(this.fonts = u.list);
							if (!document.body) return this.isLoaded = !0, u.list.forEach(function(x) {
								x.helper = a(x), x.cache = {}
							}), void(this.fonts = u.list);
							var v, d = u.list,
								p = d.length,
								m = p;
							for (v = 0; v < p; v += 1) {
								var h, g, y = !0;
								if (d[v].loaded = !1, d[v].monoCase = i(d[v].fFamily, "monospace"), d[v].sansCase = i(d[v].fFamily, "sans-serif"), d[v].fPath) {
									if (d[v].fOrigin === "p" || d[v].origin === 3) {
										if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + d[v].fFamily + '"], style[f-origin="3"][f-family="' + d[v].fFamily + '"]')).length > 0 && (y = !1), y) {
											var _ = createTag("style");
											_.setAttribute("f-forigin", d[v].fOrigin), _.setAttribute("f-origin", d[v].origin), _.setAttribute("f-family", d[v].fFamily), _.type = "text/css", _.innerText = "@font-face {font-family: " + d[v].fFamily + "; font-style: normal; src: url('" + d[v].fPath + "');}", c.appendChild(_)
										}
									} else if (d[v].fOrigin === "g" || d[v].origin === 1) {
										for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), g = 0; g < h.length; g += 1) h[g].href.indexOf(d[v].fPath) !== -1 && (y = !1);
										if (y) {
											var b = createTag("link");
											b.setAttribute("f-forigin", d[v].fOrigin), b.setAttribute("f-origin", d[v].origin), b.type = "text/css", b.rel = "stylesheet", b.href = d[v].fPath, document.body.appendChild(b)
										}
									} else if (d[v].fOrigin === "t" || d[v].origin === 2) {
										for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), g = 0; g < h.length; g += 1) d[v].fPath === h[g].src && (y = !1);
										if (y) {
											var S = createTag("link");
											S.setAttribute("f-forigin", d[v].fOrigin), S.setAttribute("f-origin", d[v].origin), S.setAttribute("rel", "stylesheet"), S.setAttribute("href", d[v].fPath), c.appendChild(S)
										}
									}
								} else d[v].loaded = !0, m -= 1;
								d[v].helper = a(d[v], c), d[v].cache = {}, this.fonts.push(d[v])
							}
							m === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
						} else this.isLoaded = !0
					},
					getCharData: function(u, c, v) {
						for (var d = 0, p = this.chars.length; d < p;) {
							if (this.chars[d].ch === u && this.chars[d].style === c && this.chars[d].fFamily === v) return this.chars[d];
							d += 1
						}
						return (typeof u == "string" && u.charCodeAt(0) !== 13 || !u) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", u, c, v)), e
					},
					getFontByName: function(u) {
						for (var c = 0, v = this.fonts.length; c < v;) {
							if (this.fonts[c].fName === u) return this.fonts[c];
							c += 1
						}
						return this.fonts[0]
					},
					measureText: function(u, c, v) {
						var d = this.getFontByName(c),
							p = u;
						if (!d.cache[p]) {
							var m = d.helper;
							if (u === " ") {
								var h = m.measureText("|" + u + "|"),
									g = m.measureText("||");
								d.cache[p] = (h - g) / 100
							} else d.cache[p] = m.measureText(u) / 100
						}
						return d.cache[p] * v
					},
					checkLoadedFonts: function() {
						var u, c, v, d = this.fonts.length,
							p = d;
						for (u = 0; u < d; u += 1) this.fonts[u].loaded ? p -= 1 : this.fonts[u].fOrigin === "n" || this.fonts[u].origin === 0 ? this.fonts[u].loaded = !0 : (c = this.fonts[u].monoCase.node, v = this.fonts[u].monoCase.w, c.offsetWidth !== v ? (p -= 1, this.fonts[u].loaded = !0) : (c = this.fonts[u].sansCase.node, v = this.fonts[u].sansCase.w, c.offsetWidth !== v && (p -= 1, this.fonts[u].loaded = !0)), this.fonts[u].loaded && (this.fonts[u].sansCase.parent.parentNode.removeChild(this.fonts[u].sansCase.parent), this.fonts[u].monoCase.parent.parentNode.removeChild(this.fonts[u].monoCase.parent)));
						p !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
					},
					setIsLoaded: function() {
						this.isLoaded = !0
					}
				};
				return l.prototype = f, l
			}();

			function SlotManager(e) {
				this.animationData = e
			}

			function slotFactory(e) {
				return new SlotManager(e)
			}

			function RenderableElement() {}
			SlotManager.prototype.getProp = function(e) {
				return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
			}, RenderableElement.prototype = {
				initRenderable: function() {
					this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
				},
				addRenderableComponent: function(e) {
					this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e)
				},
				removeRenderableComponent: function(e) {
					this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
				},
				prepareRenderableFrame: function(e) {
					this.checkLayerLimits(e)
				},
				checkTransparency: function() {
					this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
				},
				checkLayerLimits: function(e) {
					this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
				},
				renderRenderable: function() {
					var e, t = this.renderableComponents.length;
					for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
				},
				sourceRectAtTime: function() {
					return {
						top: 0,
						left: 0,
						width: 100,
						height: 100
					}
				},
				getLayerSize: function() {
					return this.data.ty === 5 ? {
						w: this.data.textData.width,
						h: this.data.textData.height
					} : {
						w: this.data.width,
						h: this.data.height
					}
				}
			};
			var getBlendMode = (blendModeEnums = {
					0: "source-over",
					1: "multiply",
					2: "screen",
					3: "overlay",
					4: "darken",
					5: "lighten",
					6: "color-dodge",
					7: "color-burn",
					8: "hard-light",
					9: "soft-light",
					10: "difference",
					11: "exclusion",
					12: "hue",
					13: "saturation",
					14: "color",
					15: "luminosity"
				}, function(e) {
					return blendModeEnums[e] || ""
				}),
				blendModeEnums;

			function SliderEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
			}

			function AngleEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
			}

			function ColorEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
			}

			function PointEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
			}

			function LayerIndexEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
			}

			function MaskIndexEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
			}

			function CheckboxEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
			}

			function NoValueEffect() {
				this.p = {}
			}

			function EffectsManager(e, t) {
				var r, n = e.ef || [];
				this.effectElements = [];
				var i, a = n.length;
				for (r = 0; r < a; r += 1) i = new GroupEffect(n[r], t), this.effectElements.push(i)
			}

			function GroupEffect(e, t) {
				this.init(e, t)
			}

			function BaseElement() {}

			function FrameElement() {}

			function FootageElement(e, t, r) {
				this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
			}

			function AudioElement(e, t, r) {
				this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
				var n = this.globalData.getAssetsPath(this.assetData);
				this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
					_placeholder: !0
				}, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
					k: [100]
				}, 1, .01, this)
			}

			function BaseRenderer() {}
			extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
				var r;
				this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
				var n, i = this.data.ef.length,
					a = this.data.ef;
				for (r = 0; r < i; r += 1) {
					switch (n = null, a[r].ty) {
						case 0:
							n = new SliderEffect(a[r], t, this);
							break;
						case 1:
							n = new AngleEffect(a[r], t, this);
							break;
						case 2:
							n = new ColorEffect(a[r], t, this);
							break;
						case 3:
							n = new PointEffect(a[r], t, this);
							break;
						case 4:
						case 7:
							n = new CheckboxEffect(a[r], t, this);
							break;
						case 10:
							n = new LayerIndexEffect(a[r], t, this);
							break;
						case 11:
							n = new MaskIndexEffect(a[r], t, this);
							break;
						case 5:
							n = new EffectsManager(a[r], t, this);
							break;
						default:
							n = new NoValueEffect(a[r], t, this)
					}
					n && this.effectElements.push(n)
				}
			}, BaseElement.prototype = {
				checkMasks: function() {
					if (!this.data.hasMask) return !1;
					for (var e = 0, t = this.data.masksProperties.length; e < t;) {
						if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1) return !0;
						e += 1
					}
					return !1
				},
				initExpressions: function() {
					var e = getExpressionInterfaces();
					if (e) {
						var t = e("layer"),
							r = e("effects"),
							n = e("shape"),
							i = e("text"),
							a = e("comp");
						this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
						var s = r.createEffectsInterface(this, this.layerInterface);
						this.layerInterface.registerEffectsInterface(s), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = n(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface)
					}
				},
				setBlendMode: function() {
					var e = getBlendMode(this.data.bm);
					(this.baseElement || this.layerElement).style["mix-blend-mode"] = e
				},
				initBaseData: function(e, t, r) {
					this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
				},
				getType: function() {
					return this.type
				},
				sourceRectAtTime: function() {}
			}, FrameElement.prototype = {
				initFrame: function() {
					this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
				},
				prepareProperties: function(e, t) {
					var r, n = this.dynamicProperties.length;
					for (r = 0; r < n; r += 1)(t || this._isParent && this.dynamicProperties[r].propType === "transform") && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
				},
				addDynamicProperty: function(e) {
					this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e)
				}
			}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
				return null
			}, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
				var e = getExpressionInterfaces();
				if (e) {
					var t = e("footage");
					this.layerInterface = t(this)
				}
			}, FootageElement.prototype.getFootageData = function() {
				return this.footageData
			}, AudioElement.prototype.prepareFrame = function(e) {
				if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
				else {
					var t = this.tm.v;
					this._currentTime = t
				}
				this._volume = this.lv.v[0];
				var r = this._volume * this._volumeMultiplier;
				this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
			}, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
				this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
			}, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
				this.audio.pause(), this._isPlaying = !1
			}, AudioElement.prototype.pause = function() {
				this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
			}, AudioElement.prototype.resume = function() {
				this._canPlay = !0
			}, AudioElement.prototype.setRate = function(e) {
				this.audio.rate(e)
			}, AudioElement.prototype.volume = function(e) {
				this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
			}, AudioElement.prototype.getBaseElement = function() {
				return null
			}, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(e) {
				var t, r, n = this.layers.length;
				for (this.completeLayers = !0, t = n - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
				this.checkPendingElements()
			}, BaseRenderer.prototype.createItem = function(e) {
				switch (e.ty) {
					case 2:
						return this.createImage(e);
					case 0:
						return this.createComp(e);
					case 1:
						return this.createSolid(e);
					case 3:
					default:
						return this.createNull(e);
					case 4:
						return this.createShape(e);
					case 5:
						return this.createText(e);
					case 6:
						return this.createAudio(e);
					case 13:
						return this.createCamera(e);
					case 15:
						return this.createFootage(e)
				}
			}, BaseRenderer.prototype.createCamera = function() {
				throw new Error("You're using a 3d camera. Try the html renderer.")
			}, BaseRenderer.prototype.createAudio = function(e) {
				return new AudioElement(e, this.globalData, this)
			}, BaseRenderer.prototype.createFootage = function(e) {
				return new FootageElement(e, this.globalData, this)
			}, BaseRenderer.prototype.buildAllItems = function() {
				var e, t = this.layers.length;
				for (e = 0; e < t; e += 1) this.buildItem(e);
				this.checkPendingElements()
			}, BaseRenderer.prototype.includeLayers = function(e) {
				var t;
				this.completeLayers = !1;
				var r, n = e.length,
					i = this.layers.length;
				for (t = 0; t < n; t += 1)
					for (r = 0; r < i;) {
						if (this.layers[r].id === e[t].id) {
							this.layers[r] = e[t];
							break
						}
						r += 1
					}
			}, BaseRenderer.prototype.setProjectInterface = function(e) {
				this.globalData.projectInterface = e
			}, BaseRenderer.prototype.initItems = function() {
				this.globalData.progressiveLoad || this.buildAllItems()
			}, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
				for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == t && (n[a] && n[a] !== !0 ? (r.push(n[a]), n[a].setAsParent(), i[a].parent !== void 0 ? this.buildElementParenting(e, i[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
			}, BaseRenderer.prototype.addPendingElement = function(e) {
				this.pendingElements.push(e)
			}, BaseRenderer.prototype.searchExtraCompositions = function(e) {
				var t, r = e.length;
				for (t = 0; t < r; t += 1)
					if (e[t].xt) {
						var n = this.createComp(e[t]);
						n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
					}
			}, BaseRenderer.prototype.getElementById = function(e) {
				var t, r = this.elements.length;
				for (t = 0; t < r; t += 1)
					if (this.elements[t].data.ind === e) return this.elements[t];
				return null
			}, BaseRenderer.prototype.getElementByPath = function(e) {
				var t, r = e.shift();
				if (typeof r == "number") t = this.elements[r];
				else {
					var n, i = this.elements.length;
					for (n = 0; n < i; n += 1)
						if (this.elements[n].data.nm === r) {
							t = this.elements[n];
							break
						}
				}
				return e.length === 0 ? t : t.getElementByPath(e)
			}, BaseRenderer.prototype.setupGlobalData = function(e, t) {
				this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
					w: e.w,
					h: e.h
				}
			};
			var effectTypes = {
				TRANSFORM_EFFECT: "transformEFfect"
			};

			function TransformElement() {}

			function MaskElement(e, t, r) {
				this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
				var n, i, a = this.globalData.defs,
					s = this.masksProperties ? this.masksProperties.length : 0;
				this.viewData = createSizedArray(s), this.solidPath = "";
				var o, l, f, u, c, v, d = this.masksProperties,
					p = 0,
					m = [],
					h = createElementID(),
					g = "clipPath",
					y = "clip-path";
				for (n = 0; n < s; n += 1)
					if ((d[n].mode !== "a" && d[n].mode !== "n" || d[n].inv || d[n].o.k !== 100 || d[n].o.x) && (g = "mask", y = "mask"), d[n].mode !== "s" && d[n].mode !== "i" || p !== 0 ? f = null : ((f = createNS("rect")).setAttribute("fill", "#ffffff"), f.setAttribute("width", this.element.comp.data.w || 0), f.setAttribute("height", this.element.comp.data.h || 0), m.push(f)), i = createNS("path"), d[n].mode === "n") this.viewData[n] = {
						op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
						prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
						elem: i,
						lastPath: ""
					}, a.appendChild(i);
					else {
						var _;
						if (p += 1, i.setAttribute("fill", d[n].mode === "s" ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), d[n].x.k !== 0 ? (g = "mask", y = "mask", v = PropertyFactory.getProp(this.element, d[n].x, 0, null, this.element), _ = createElementID(), (u = createNS("filter")).setAttribute("id", _), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), u.appendChild(c), a.appendChild(u), i.setAttribute("stroke", d[n].mode === "s" ? "#000000" : "#ffffff")) : (c = null, v = null), this.storedData[n] = {
								elem: i,
								x: v,
								expan: c,
								lastPath: "",
								lastOperator: "",
								filterId: _,
								lastRadius: 0
							}, d[n].mode === "i") {
							l = m.length;
							var b = createNS("g");
							for (o = 0; o < l; o += 1) b.appendChild(m[o]);
							var S = createNS("mask");
							S.setAttribute("mask-type", "alpha"), S.setAttribute("id", h + "_" + p), S.appendChild(i), a.appendChild(S), b.setAttribute("mask", "url(" + getLocationHref() + "#" + h + "_" + p + ")"), m.length = 0, m.push(b)
						} else m.push(i);
						d[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
							elem: i,
							lastPath: "",
							op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
							prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
							invRect: f
						}, this.viewData[n].prop.k || this.drawPath(d[n], this.viewData[n].prop.v, this.viewData[n])
					} for (this.maskElement = createNS(g), s = m.length, n = 0; n < s; n += 1) this.maskElement.appendChild(m[n]);
				p > 0 && (this.maskElement.setAttribute("id", h), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + h + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
			}
			TransformElement.prototype = {
				initTransform: function() {
					var e = new Matrix;
					this.finalTransform = {
						mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
							o: 0
						},
						_matMdf: !1,
						_localMatMdf: !1,
						_opMdf: !1,
						mat: e,
						localMat: e,
						localOpacity: 1
					}, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
				},
				renderTransform: function() {
					if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
						var e, t = this.finalTransform.mat,
							r = 0,
							n = this.hierarchy.length;
						if (!this.finalTransform._matMdf)
							for (; r < n;) {
								if (this.hierarchy[r].finalTransform.mProp._mdf) {
									this.finalTransform._matMdf = !0;
									break
								}
								r += 1
							}
						if (this.finalTransform._matMdf)
							for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < n; r += 1) t.multiply(this.hierarchy[r].finalTransform.mProp.v)
					}
					this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
				},
				renderLocalTransform: function() {
					if (this.localTransforms) {
						var e = 0,
							t = this.localTransforms.length;
						if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
							for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
						if (this.finalTransform._localMatMdf) {
							var r = this.finalTransform.localMat;
							for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
								var n = this.localTransforms[e].matrix;
								r.multiply(n)
							}
							r.multiply(this.finalTransform.mat)
						}
						if (this.finalTransform._opMdf) {
							var i = this.finalTransform.localOpacity;
							for (e = 0; e < t; e += 1) i *= .01 * this.localTransforms[e].opacity;
							this.finalTransform.localOpacity = i
						}
					}
				},
				searchEffectTransforms: function() {
					if (this.renderableEffectsManager) {
						var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
						if (e.length) {
							this.localTransforms = [], this.finalTransform.localMat = new Matrix;
							var t = 0,
								r = e.length;
							for (t = 0; t < r; t += 1) this.localTransforms.push(e[t])
						}
					}
				},
				globalToLocal: function(e) {
					var t = [];
					t.push(this.finalTransform);
					for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && t.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
					var a, s = t.length;
					for (r = 0; r < s; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
					return e
				},
				mHelper: new Matrix
			}, MaskElement.prototype.getMaskProperty = function(e) {
				return this.viewData[e].prop
			}, MaskElement.prototype.renderFrame = function(e) {
				var t, r = this.element.finalTransform.mat,
					n = this.masksProperties.length;
				for (t = 0; t < n; t += 1)
					if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), this.masksProperties[t].mode !== "n" && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
						var i = this.storedData[t].expan;
						this.storedData[t].x.v < 0 ? (this.storedData[t].lastOperator !== "erode" && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : (this.storedData[t].lastOperator !== "dilate" && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
					}
			}, MaskElement.prototype.getMaskelement = function() {
				return this.maskElement
			}, MaskElement.prototype.createLayerSolidPath = function() {
				var e = "M0,0 ";
				return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " "
			}, MaskElement.prototype.drawPath = function(e, t, r) {
				var n, i, a = " M" + t.v[0][0] + "," + t.v[0][1];
				for (i = t._length, n = 1; n < i; n += 1) a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[n][0] + "," + t.i[n][1] + " " + t.v[n][0] + "," + t.v[n][1];
				if (t.c && i > 1 && (a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
					var s = "";
					r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
				}
			}, MaskElement.prototype.destroy = function() {
				this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
			};
			var filtersFactory = function() {
					var e = {};
					return e.createFilter = function(t, r) {
						var n = createNS("filter");
						return n.setAttribute("id", t), r !== !0 && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n
					}, e.createAlphaToLuminanceFilter = function() {
						var t = createNS("feColorMatrix");
						return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
					}, e
				}(),
				featureSupport = function() {
					var e = {
						maskType: !0,
						svgLumaHidden: !0,
						offscreenCanvas: typeof OffscreenCanvas < "u"
					};
					return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
				}(),
				registeredEffects$1 = {},
				idPrefix = "filter_result_";

			function SVGEffects(e) {
				var t, r, n = "SourceGraphic",
					i = e.data.ef ? e.data.ef.length : 0,
					a = createElementID(),
					s = filtersFactory.createFilter(a, !0),
					o = 0;
				for (this.filters = [], t = 0; t < i; t += 1) {
					r = null;
					var l = e.data.ef[t].ty;
					registeredEffects$1[l] && (r = new registeredEffects$1[l].effect(s, e.effectsManager.effectElements[t], e, idPrefix + o, n), n = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
				}
				o && (e.globalData.defs.appendChild(s), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
			}

			function registerEffect$1(e, t, r) {
				registeredEffects$1[e] = {
					effect: t,
					countsAsEffect: r
				}
			}

			function SVGBaseElement() {}

			function HierarchyElement() {}

			function RenderableDOMElement() {}

			function IImageElement(e, t, r) {
				this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
					top: 0,
					left: 0,
					width: this.assetData.w,
					height: this.assetData.h
				}
			}

			function ProcessedElement(e, t) {
				this.elem = e, this.pos = t
			}

			function IShapeElement() {}
			SVGEffects.prototype.renderFrame = function(e) {
				var t, r = this.filters.length;
				for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
			}, SVGEffects.prototype.getEffects = function(e) {
				var t, r = this.filters.length,
					n = [];
				for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
				return n
			}, SVGBaseElement.prototype = {
				initRendererElement: function() {
					this.layerElement = createNS("g")
				},
				createContainerElements: function() {
					this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
					var e = null;
					if (this.data.td) {
						this.matteMasks = {};
						var t = createNS("g");
						t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
					} else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
					if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
						var r = createNS("clipPath"),
							n = createNS("path");
						n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
						var i = createElementID();
						if (r.setAttribute("id", i), r.appendChild(n), this.globalData.defs.appendChild(r), this.checkMasks()) {
							var a = createNS("g");
							a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
						} else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")")
					}
					this.data.bm !== 0 && this.setBlendMode()
				},
				renderElement: function() {
					this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
				},
				destroyBaseElement: function() {
					this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
				},
				getBaseElement: function() {
					return this.data.hd ? null : this.baseElement
				},
				createRenderableComponents: function() {
					this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
				},
				getMatte: function(e) {
					if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
						var t, r, n, i, a = this.layerId + "_" + e;
						if (e === 1 || e === 3) {
							var s = createNS("mask");
							s.setAttribute("id", a), s.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(n), this.globalData.defs.appendChild(s), featureSupport.maskType || e !== 1 || (s.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(n), s.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
						} else if (e === 2) {
							var o = createNS("mask");
							o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
							var l = createNS("g");
							o.appendChild(l), t = createElementID(), r = filtersFactory.createFilter(t);
							var f = createNS("feComponentTransfer");
							f.setAttribute("in", "SourceGraphic"), r.appendChild(f);
							var u = createNS("feFuncA");
							u.setAttribute("type", "table"), u.setAttribute("tableValues", "1.0 0.0"), f.appendChild(u), this.globalData.defs.appendChild(r);
							var c = createNS("rect");
							c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), l.appendChild(c), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), l.appendChild(c), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(o)
						}
						this.matteMasks[e] = a
					}
					return this.matteMasks[e]
				},
				setMatte: function(e) {
					this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
				}
			}, HierarchyElement.prototype = {
				initHierarchy: function() {
					this.hierarchy = [], this._isParent = !1, this.checkParenting()
				},
				setHierarchy: function(e) {
					this.hierarchy = e
				},
				setAsParent: function() {
					this._isParent = !0
				},
				checkParenting: function() {
					this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
				}
			}, extendPrototype([RenderableElement, createProxyFunction({
				initElement: function(e, t, r) {
					this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
				},
				hide: function() {
					this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
				},
				show: function() {
					this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
				},
				renderFrame: function() {
					this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
				},
				renderInnerContent: function() {},
				prepareFrame: function(e) {
					this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
				},
				destroy: function() {
					this.innerElem = null, this.destroyBaseElement()
				}
			})], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
				var e = this.globalData.getAssetsPath(this.assetData);
				this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
			}, IImageElement.prototype.sourceRectAtTime = function() {
				return this.sourceRect
			}, IShapeElement.prototype = {
				addShapeToModifiers: function(e) {
					var t, r = this.shapeModifiers.length;
					for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
				},
				isShapeInAnimatedModifiers: function(e) {
					for (var t = this.shapeModifiers.length; 0 < t;)
						if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
					return !1
				},
				renderModifiers: function() {
					if (this.shapeModifiers.length) {
						var e, t = this.shapes.length;
						for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
						for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
					}
				},
				searchProcessedElement: function(e) {
					for (var t = this.processedElements, r = 0, n = t.length; r < n;) {
						if (t[r].elem === e) return t[r].pos;
						r += 1
					}
					return 0
				},
				addProcessedElement: function(e, t) {
					for (var r = this.processedElements, n = r.length; n;)
						if (r[n -= 1].elem === e) return void(r[n].pos = t);
					r.push(new ProcessedElement(e, t))
				},
				prepareFrame: function(e) {
					this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
				}
			};
			var lineCapEnum = {
					1: "butt",
					2: "round",
					3: "square"
				},
				lineJoinEnum = {
					1: "miter",
					2: "round",
					3: "bevel"
				};

			function SVGShapeData(e, t, r) {
				this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
				for (var n = 0, i = e.length; n < i;) {
					if (e[n].mProps.dynamicProperties.length) {
						this._isAnimated = !0;
						break
					}
					n += 1
				}
			}

			function SVGStyleData(e, t) {
				this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null
			}

			function DashProperty(e, t, r, n) {
				var i;
				this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
				var a, s = t.length || 0;
				for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
					n: t[i].n,
					p: a
				};
				this.k || this.getValue(!0), this._isAnimated = this.k
			}

			function SVGStrokeStyleData(e, t, r) {
				this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
			}

			function SVGFillStyleData(e, t, r) {
				this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
			}

			function SVGNoStyleData(e, t, r) {
				this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
			}

			function GradientProperty(e, t, r) {
				this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
				var n = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
				this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
			}

			function SVGGradientFillStyleData(e, t, r) {
				this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
			}

			function SVGGradientStrokeStyleData(e, t, r) {
				this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
			}

			function ShapeGroupData() {
				this.it = [], this.prevViewData = [], this.gr = createNS("g")
			}

			function SVGTransformData(e, t, r) {
				this.transform = {
					mProps: e,
					op: t,
					container: r
				}, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
			}
			SVGShapeData.prototype.setAsAnimated = function() {
				this._isAnimated = !0
			}, SVGStyleData.prototype.reset = function() {
				this.d = "", this._mdf = !1
			}, DashProperty.prototype.getValue = function(e) {
				if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
					var t = 0,
						r = this.dataProps.length;
					for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1) this.dataProps[t].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
				}
			}, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(e, t) {
				for (var r = 0, n = this.o.length / 2; r < n;) {
					if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
					r += 1
				}
				return !0
			}, GradientProperty.prototype.checkCollapsable = function() {
				if (this.o.length / 2 != this.c.length / 4) return !1;
				if (this.data.k.k[0].s)
					for (var e = 0, t = this.data.k.k.length; e < t;) {
						if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
						e += 1
					} else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
				return !0
			}, GradientProperty.prototype.getValue = function(e) {
				if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
					var t, r, n, i = 4 * this.data.p;
					for (t = 0; t < i; t += 1) r = t % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[t] * r), this.c[t] !== n && (this.c[t] = n, this._cmdf = !e);
					if (this.o.length)
						for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) r = t % 2 == 0 ? 100 : 1, n = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== n && (this.o[t - 4 * this.data.p] = n, this._omdf = !e);
					this._mdf = !e
				}
			}, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
				this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
					k: 0
				}, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
					k: 0
				}, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
			}, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
				var r = createElementID(),
					n = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
				n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
				var i, a, s, o = [];
				for (s = 4 * t.g.p, a = 0; a < s; a += 4) i = createNS("stop"), n.appendChild(i), o.push(i);
				e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = n, this.cst = o
			}, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
				if (this.g._hasOpacity && !this.g._collapsable) {
					var r, n, i, a = createNS("mask"),
						s = createNS("path");
					a.appendChild(s);
					var o = createElementID(),
						l = createElementID();
					a.setAttribute("id", l);
					var f = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
					f.setAttribute("id", o), f.setAttribute("spreadMethod", "pad"), f.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
					var u = this.stops;
					for (n = 4 * e.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), f.appendChild(r), u.push(r);
					s.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), e.ty === "gs" && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && s.setAttribute("stroke-miterlimit", e.ml)), this.of = f, this.ms = a, this.ost = u, this.maskId = l, t.msElem = s
				}
			}, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
			var buildShapeString = function(e, t, r, n) {
					if (t === 0) return "";
					var i, a = e.o,
						s = e.i,
						o = e.v,
						l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
					for (i = 1; i < t; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]);
					return r && t && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
				},
				SVGElementsRenderer = function() {
					var e = new Matrix,
						t = new Matrix;

					function r(f, u, c) {
						(c || u.transform.op._mdf) && u.transform.container.setAttribute("opacity", u.transform.op.v), (c || u.transform.mProps._mdf) && u.transform.container.setAttribute("transform", u.transform.mProps.v.to2dCSS())
					}

					function n() {}

					function i(f, u, c) {
						var v, d, p, m, h, g, y, _, b, S, x = u.styles.length,
							T = u.lvl;
						for (g = 0; g < x; g += 1) {
							if (m = u.sh._mdf || c, u.styles[g].lvl < T) {
								for (_ = t.reset(), b = T - u.styles[g].lvl, S = u.transformers.length - 1; !m && b > 0;) m = u.transformers[S].mProps._mdf || m, b -= 1, S -= 1;
								if (m)
									for (b = T - u.styles[g].lvl, S = u.transformers.length - 1; b > 0;) _.multiply(u.transformers[S].mProps.v), b -= 1, S -= 1
							} else _ = e;
							if (d = (y = u.sh.paths)._length, m) {
								for (p = "", v = 0; v < d; v += 1)(h = y.shapes[v]) && h._length && (p += buildShapeString(h, h._length, h.c, _));
								u.caches[g] = p
							} else p = u.caches[g];
							u.styles[g].d += f.hd === !0 ? "" : p, u.styles[g]._mdf = m || u.styles[g]._mdf
						}
					}

					function a(f, u, c) {
						var v = u.style;
						(u.c._mdf || c) && v.pElem.setAttribute("fill", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || c) && v.pElem.setAttribute("fill-opacity", u.o.v)
					}

					function s(f, u, c) {
						o(f, u, c), l(f, u, c)
					}

					function o(f, u, c) {
						var v, d, p, m, h, g = u.gf,
							y = u.g._hasOpacity,
							_ = u.s.v,
							b = u.e.v;
						if (u.o._mdf || c) {
							var S = f.ty === "gf" ? "fill-opacity" : "stroke-opacity";
							u.style.pElem.setAttribute(S, u.o.v)
						}
						if (u.s._mdf || c) {
							var x = f.t === 1 ? "x1" : "cx",
								T = x === "x1" ? "y1" : "cy";
							g.setAttribute(x, _[0]), g.setAttribute(T, _[1]), y && !u.g._collapsable && (u.of.setAttribute(x, _[0]), u.of.setAttribute(T, _[1]))
						}
						if (u.g._cmdf || c) {
							v = u.cst;
							var P = u.g.c;
							for (p = v.length, d = 0; d < p; d += 1)(m = v[d]).setAttribute("offset", P[4 * d] + "%"), m.setAttribute("stop-color", "rgb(" + P[4 * d + 1] + "," + P[4 * d + 2] + "," + P[4 * d + 3] + ")")
						}
						if (y && (u.g._omdf || c)) {
							var D = u.g.o;
							for (p = (v = u.g._collapsable ? u.cst : u.ost).length, d = 0; d < p; d += 1) m = v[d], u.g._collapsable || m.setAttribute("offset", D[2 * d] + "%"), m.setAttribute("stop-opacity", D[2 * d + 1])
						}
						if (f.t === 1)(u.e._mdf || c) && (g.setAttribute("x2", b[0]), g.setAttribute("y2", b[1]), y && !u.g._collapsable && (u.of.setAttribute("x2", b[0]), u.of.setAttribute("y2", b[1])));
						else if ((u.s._mdf || u.e._mdf || c) && (h = Math.sqrt(Math.pow(_[0] - b[0], 2) + Math.pow(_[1] - b[1], 2)), g.setAttribute("r", h), y && !u.g._collapsable && u.of.setAttribute("r", h)), u.e._mdf || u.h._mdf || u.a._mdf || c) {
							h || (h = Math.sqrt(Math.pow(_[0] - b[0], 2) + Math.pow(_[1] - b[1], 2)));
							var w = Math.atan2(b[1] - _[1], b[0] - _[0]),
								C = u.h.v;
							C >= 1 ? C = .99 : C <= -1 && (C = -.99);
							var F = h * C,
								O = Math.cos(w + u.a.v) * F + _[0],
								R = Math.sin(w + u.a.v) * F + _[1];
							g.setAttribute("fx", O), g.setAttribute("fy", R), y && !u.g._collapsable && (u.of.setAttribute("fx", O), u.of.setAttribute("fy", R))
						}
					}

					function l(f, u, c) {
						var v = u.style,
							d = u.d;
						d && (d._mdf || c) && d.dashStr && (v.pElem.setAttribute("stroke-dasharray", d.dashStr), v.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), u.c && (u.c._mdf || c) && v.pElem.setAttribute("stroke", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || c) && v.pElem.setAttribute("stroke-opacity", u.o.v), (u.w._mdf || c) && (v.pElem.setAttribute("stroke-width", u.w.v), v.msElem && v.msElem.setAttribute("stroke-width", u.w.v))
					}
					return {
						createRenderFunction: function(f) {
							switch (f.ty) {
								case "fl":
									return a;
								case "gf":
									return o;
								case "gs":
									return s;
								case "st":
									return l;
								case "sh":
								case "el":
								case "rc":
								case "sr":
									return i;
								case "tr":
									return r;
								case "no":
									return n;
								default:
									return null
							}
						}
					}
				}();

			function SVGShapeElement(e, t, r) {
				this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
			}

			function LetterProps(e, t, r, n, i, a) {
				this.o = e, this.sw = t, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
					o: !0,
					sw: !!t,
					sc: !!r,
					fc: !!n,
					m: !0,
					p: !0
				}
			}

			function TextProperty(e, t) {
				this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
					ascent: 0,
					boxWidth: this.defaultBoxWidth,
					f: "",
					fStyle: "",
					fWeight: "",
					fc: "",
					j: "",
					justifyOffset: "",
					l: [],
					lh: 0,
					lineWidths: [],
					ls: "",
					of: "",
					s: "",
					sc: "",
					sw: 0,
					t: 0,
					tr: 0,
					sz: 0,
					ps: null,
					fillColorAnim: !1,
					strokeColorAnim: !1,
					strokeWidthAnim: !1,
					yOffset: 0,
					finalSize: 0,
					finalText: [],
					finalLineHeight: 0,
					__complete: !1
				}, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
			}
			extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
				this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
			}, SVGShapeElement.prototype.filterUniqueShapes = function() {
				var e, t, r, n, i = this.shapes.length,
					a = this.stylesList.length,
					s = [],
					o = !1;
				for (r = 0; r < a; r += 1) {
					for (n = this.stylesList[r], o = !1, s.length = 0, e = 0; e < i; e += 1)(t = this.shapes[e]).styles.indexOf(n) !== -1 && (s.push(t), o = t._isAnimated || o);
					s.length > 1 && o && this.setShapesAsAnimated(s)
				}
			}, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
				var t, r = e.length;
				for (t = 0; t < r; t += 1) e[t].setAsAnimated()
			}, SVGShapeElement.prototype.createStyleElement = function(e, t) {
				var r, n = new SVGStyleData(e, t),
					i = n.pElem;
				return e.ty === "st" ? r = new SVGStrokeStyleData(this, e, n) : e.ty === "fl" ? r = new SVGFillStyleData(this, e, n) : e.ty === "gf" || e.ty === "gs" ? (r = new(e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : e.ty === "no" && (r = new SVGNoStyleData(this, e, n)), e.ty !== "st" && e.ty !== "gs" || (i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), i.setAttribute("fill-opacity", "0"), e.lj === 1 && i.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(n), this.addToAnimatedContents(e, r), r
			}, SVGShapeElement.prototype.createGroupElement = function(e) {
				var t = new ShapeGroupData;
				return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
			}, SVGShapeElement.prototype.createTransformElement = function(e, t) {
				var r = TransformPropertyFactory.getTransformProperty(this, e, this),
					n = new SVGTransformData(r, r.o, t);
				return this.addToAnimatedContents(e, n), n
			}, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
				var n = 4;
				e.ty === "rc" ? n = 5 : e.ty === "el" ? n = 6 : e.ty === "sr" && (n = 7);
				var i = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, n, this));
				return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i
			}, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
				for (var r = 0, n = this.animatedContents.length; r < n;) {
					if (this.animatedContents[r].element === t) return;
					r += 1
				}
				this.animatedContents.push({
					fn: SVGElementsRenderer.createRenderFunction(e),
					element: t,
					data: e
				})
			}, SVGShapeElement.prototype.setElementStyles = function(e) {
				var t, r = e.styles,
					n = this.stylesList.length;
				for (t = 0; t < n; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
			}, SVGShapeElement.prototype.reloadShapes = function() {
				var e;
				this._isFirstFrame = !0;
				var t = this.itemsData.length;
				for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
				for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
				this.renderModifiers()
			}, SVGShapeElement.prototype.searchShapes = function(e, t, r, n, i, a, s) {
				var o, l, f, u, c, v, d = [].concat(a),
					p = e.length - 1,
					m = [],
					h = [];
				for (o = p; o >= 0; o -= 1) {
					if ((v = this.searchProcessedElement(e[o])) ? t[o] = r[v - 1] : e[o]._render = s, e[o].ty === "fl" || e[o].ty === "st" || e[o].ty === "gf" || e[o].ty === "gs" || e[o].ty === "no") v ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], i), e[o]._render && t[o].style.pElem.parentNode !== n && n.appendChild(t[o].style.pElem), m.push(t[o].style);
					else if (e[o].ty === "gr") {
						if (v)
							for (f = t[o].it.length, l = 0; l < f; l += 1) t[o].prevViewData[l] = t[o].it[l];
						else t[o] = this.createGroupElement(e[o]);
						this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, d, s), e[o]._render && t[o].gr.parentNode !== n && n.appendChild(t[o].gr)
					} else e[o].ty === "tr" ? (v || (t[o] = this.createTransformElement(e[o], n)), u = t[o].transform, d.push(u)) : e[o].ty === "sh" || e[o].ty === "rc" || e[o].ty === "el" || e[o].ty === "sr" ? (v || (t[o] = this.createShapeElement(e[o], d, i)), this.setElementStyles(t[o])) : e[o].ty === "tm" || e[o].ty === "rd" || e[o].ty === "ms" || e[o].ty === "pb" || e[o].ty === "zz" || e[o].ty === "op" ? (v ? (c = t[o]).closed = !1 : ((c = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = c, this.shapeModifiers.push(c)), h.push(c)) : e[o].ty === "rp" && (v ? (c = t[o]).closed = !0 : (c = ShapeModifiers.getModifier(e[o].ty), t[o] = c, c.init(this, e, o, t), this.shapeModifiers.push(c), s = !1), h.push(c));
					this.addProcessedElement(e[o], o + 1)
				}
				for (p = m.length, o = 0; o < p; o += 1) m[o].closed = !0;
				for (p = h.length, o = 0; o < p; o += 1) h[o].closed = !0
			}, SVGShapeElement.prototype.renderInnerContent = function() {
				var e;
				this.renderModifiers();
				var t = this.stylesList.length;
				for (e = 0; e < t; e += 1) this.stylesList[e].reset();
				for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
			}, SVGShapeElement.prototype.renderShape = function() {
				var e, t, r = this.animatedContents.length;
				for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && t.data !== !0 && t.fn(t.data, t.element, this._isFirstFrame)
			}, SVGShapeElement.prototype.destroy = function() {
				this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
			}, LetterProps.prototype.update = function(e, t, r, n, i, a) {
				this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
				var s = !1;
				return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
			}, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
				for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}, TextProperty.prototype.setCurrentData = function(e) {
				e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
			}, TextProperty.prototype.searchProperty = function() {
				return this.searchKeyframes()
			}, TextProperty.prototype.searchKeyframes = function() {
				return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
			}, TextProperty.prototype.addEffect = function(e) {
				this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
			}, TextProperty.prototype.getValue = function(e) {
				if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
					this.currentData.t = this.data.d.k[this.keysIndex].s.t;
					var t = this.currentData,
						r = this.keysIndex;
					if (this.lock) this.setCurrentData(this.currentData);
					else {
						var n;
						this.lock = !0, this._mdf = !1;
						var i = this.effectsSequence.length,
							a = e || this.data.d.k[this.keysIndex].s;
						for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
						t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
					}
				}
			}, TextProperty.prototype.getKeyframeValue = function() {
				for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, n = e.length; r <= n - 1 && !(r === n - 1 || e[r + 1].t > t);) r += 1;
				return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
			}, TextProperty.prototype.buildFinalText = function(e) {
				for (var t, r, n = [], i = 0, a = e.length, s = !1, o = !1, l = ""; i < a;) s = o, o = !1, t = e.charCodeAt(i), l = e.charAt(i), FontManager.isCombinedCharacter(t) ? s = !0 : t >= 55296 && t <= 56319 ? FontManager.isRegionalFlag(e, i) ? l = e.substr(i, 14) : (r = e.charCodeAt(i + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(t, r) ? (l = e.substr(i, 2), s = !0) : l = FontManager.isFlagEmoji(e.substr(i, 4)) ? e.substr(i, 4) : e.substr(i, 2)) : t > 56319 ? (r = e.charCodeAt(i + 1), FontManager.isVariationSelector(t) && (s = !0)) : FontManager.isZeroWidthJoiner(t) && (s = !0, o = !0), s ? (n[n.length - 1] += l, s = !1) : n.push(l), i += l.length;
				return n
			}, TextProperty.prototype.completeTextData = function(e) {
				e.__complete = !0;
				var t, r, n, i, a, s, o, l = this.elem.globalData.fontManager,
					f = this.data,
					u = [],
					c = 0,
					v = f.m.g,
					d = 0,
					p = 0,
					m = 0,
					h = [],
					g = 0,
					y = 0,
					_ = l.getFontByName(e.f),
					b = 0,
					S = getFontProperties(_);
				e.fWeight = S.weight, e.fStyle = S.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
				var x, T = e.tr / 1e3 * e.finalSize;
				if (e.sz)
					for (var P, D, w = !0, C = e.sz[0], F = e.sz[1]; w;) {
						P = 0, g = 0, r = (D = this.buildFinalText(e.t)).length, T = e.tr / 1e3 * e.finalSize;
						var O = -1;
						for (t = 0; t < r; t += 1) x = D[t].charCodeAt(0), n = !1, D[t] === " " ? O = t : x !== 13 && x !== 3 || (g = 0, n = !0, P += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(D[t], _.fStyle, _.fFamily), b = n ? 0 : o.w * e.finalSize / 100) : b = l.measureText(D[t], e.f, e.finalSize), g + b > C && D[t] !== " " ? (O === -1 ? r += 1 : t = O, P += e.finalLineHeight || 1.2 * e.finalSize, D.splice(t, O === t ? 1 : 0, "\r"), O = -1, g = 0) : (g += b, g += T);
						P += _.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && F < P ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = D, r = e.finalText.length, w = !1)
					}
				g = -T, b = 0;
				var R, L = 0;
				for (t = 0; t < r; t += 1)
					if (n = !1, (x = (R = e.finalText[t]).charCodeAt(0)) === 13 || x === 3 ? (L = 0, h.push(g), y = g > y ? g : y, g = -2 * T, i = "", n = !0, m += 1) : i = R, l.chars ? (o = l.getCharData(R, _.fStyle, l.getFontByName(e.f).fFamily), b = n ? 0 : o.w * e.finalSize / 100) : b = l.measureText(i, e.f, e.finalSize), R === " " ? L += b + T : (g += b + T + L, L = 0), u.push({
							l: b,
							an: b,
							add: d,
							n,
							anIndexes: [],
							val: i,
							line: m,
							animatorJustifyOffset: 0
						}), v == 2) {
						if (d += b, i === "" || i === " " || t === r - 1) {
							for (i !== "" && i !== " " || (d -= b); p <= t;) u[p].an = d, u[p].ind = c, u[p].extra = b, p += 1;
							c += 1, d = 0
						}
					} else if (v == 3) {
					if (d += b, i === "" || t === r - 1) {
						for (i === "" && (d -= b); p <= t;) u[p].an = d, u[p].ind = c, u[p].extra = b, p += 1;
						d = 0, c += 1
					}
				} else u[c].ind = c, u[c].extra = 0, c += 1;
				if (e.l = u, y = g > y ? g : y, h.push(g), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
				else switch (e.boxWidth = y, e.j) {
					case 1:
						e.justifyOffset = -e.boxWidth;
						break;
					case 2:
						e.justifyOffset = -e.boxWidth / 2;
						break;
					default:
						e.justifyOffset = 0
				}
				e.lineWidths = h;
				var H, Y, A, M, N = f.a;
				s = N.length;
				var U = [];
				for (a = 0; a < s; a += 1) {
					for ((H = N[a]).a.sc && (e.strokeColorAnim = !0), H.a.sw && (e.strokeWidthAnim = !0), (H.a.fc || H.a.fh || H.a.fs || H.a.fb) && (e.fillColorAnim = !0), M = 0, A = H.s.b, t = 0; t < r; t += 1)(Y = u[t]).anIndexes[a] = M, (A == 1 && Y.val !== "" || A == 2 && Y.val !== "" && Y.val !== " " || A == 3 && (Y.n || Y.val == " " || t == r - 1) || A == 4 && (Y.n || t == r - 1)) && (H.s.rn === 1 && U.push(M), M += 1);
					f.a[a].s.totalChars = M;
					var $, X = -1;
					if (H.s.rn === 1)
						for (t = 0; t < r; t += 1) X != (Y = u[t]).anIndexes[a] && (X = Y.anIndexes[a], $ = U.splice(Math.floor(Math.random() * U.length), 1)[0]), Y.anIndexes[a] = $
				}
				e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = _.ascent * e.finalSize / 100
			}, TextProperty.prototype.updateDocumentData = function(e, t) {
				t = t === void 0 ? this.keysIndex : t;
				var r = this.copyData({}, this.data.d.k[t].s);
				r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
			}, TextProperty.prototype.recalculate = function(e) {
				var t = this.data.d.k[e].s;
				t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
			}, TextProperty.prototype.canResizeFont = function(e) {
				this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
			}, TextProperty.prototype.setMinimumFontSize = function(e) {
				this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
			};
			var TextSelectorProp = function() {
				var e = Math.max,
					t = Math.min,
					r = Math.floor;

				function n(i, a) {
					this._currentTextLength = -1, this.k = !1, this.data = a, this.elem = i, this.comp = i.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(i), this.s = PropertyFactory.getProp(i, a.s || {
						k: 0
					}, 0, 0, this), this.e = "e" in a ? PropertyFactory.getProp(i, a.e, 0, 0, this) : {
						v: 100
					}, this.o = PropertyFactory.getProp(i, a.o || {
						k: 0
					}, 0, 0, this), this.xe = PropertyFactory.getProp(i, a.xe || {
						k: 0
					}, 0, 0, this), this.ne = PropertyFactory.getProp(i, a.ne || {
						k: 0
					}, 0, 0, this), this.sm = PropertyFactory.getProp(i, a.sm || {
						k: 100
					}, 0, 0, this), this.a = PropertyFactory.getProp(i, a.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
				}
				return n.prototype = {
					getMult: function(i) {
						this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
						var a = 0,
							s = 0,
							o = 1,
							l = 1;
						this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : l = 1 + this.xe.v / 100;
						var f = BezierFactory.getBezierEasing(a, s, o, l).get,
							u = 0,
							c = this.finalS,
							v = this.finalE,
							d = this.data.sh;
						if (d === 2) u = f(u = v === c ? i >= v ? 1 : 0 : e(0, t(.5 / (v - c) + (i - c) / (v - c), 1)));
						else if (d === 3) u = f(u = v === c ? i >= v ? 0 : 1 : 1 - e(0, t(.5 / (v - c) + (i - c) / (v - c), 1)));
						else if (d === 4) v === c ? u = 0 : (u = e(0, t(.5 / (v - c) + (i - c) / (v - c), 1))) < .5 ? u *= 2 : u = 1 - 2 * (u - .5), u = f(u);
						else if (d === 5) {
							if (v === c) u = 0;
							else {
								var p = v - c,
									m = -p / 2 + (i = t(e(0, i + .5 - c), v - c)),
									h = p / 2;
								u = Math.sqrt(1 - m * m / (h * h))
							}
							u = f(u)
						} else d === 6 ? (v === c ? u = 0 : (i = t(e(0, i + .5 - c), v - c), u = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (v - c))) / 2), u = f(u)) : (i >= r(c) && (u = e(0, t(i - c < 0 ? t(v, 1) - (c - i) : v - i, 1))), u = f(u));
						if (this.sm.v !== 100) {
							var g = .01 * this.sm.v;
							g === 0 && (g = 1e-8);
							var y = .5 - .5 * g;
							u < y ? u = 0 : (u = (u - y) / g) > 1 && (u = 1)
						}
						return u * this.a.v
					},
					getValue: function(i) {
						this.iterateDynamicProperties(), this._mdf = i || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, i && this.data.r === 2 && (this.e.v = this._currentTextLength);
						var a = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
							s = this.o.v / a,
							o = this.s.v / a + s,
							l = this.e.v / a + s;
						if (o > l) {
							var f = o;
							o = l, l = f
						}
						this.finalS = o, this.finalE = l
					}
				}, extendPrototype([DynamicPropertyContainer], n), {
					getTextSelectorProp: function(i, a, s) {
						return new n(i, a, s)
					}
				}
			}();

			function TextAnimatorDataProperty(e, t, r) {
				var n = {
						propType: !1
					},
					i = PropertyFactory.getProp,
					a = t.a;
				this.a = {
					r: a.r ? i(e, a.r, 0, degToRads, r) : n,
					rx: a.rx ? i(e, a.rx, 0, degToRads, r) : n,
					ry: a.ry ? i(e, a.ry, 0, degToRads, r) : n,
					sk: a.sk ? i(e, a.sk, 0, degToRads, r) : n,
					sa: a.sa ? i(e, a.sa, 0, degToRads, r) : n,
					s: a.s ? i(e, a.s, 1, .01, r) : n,
					a: a.a ? i(e, a.a, 1, 0, r) : n,
					o: a.o ? i(e, a.o, 0, .01, r) : n,
					p: a.p ? i(e, a.p, 1, 0, r) : n,
					sw: a.sw ? i(e, a.sw, 0, 0, r) : n,
					sc: a.sc ? i(e, a.sc, 1, 0, r) : n,
					fc: a.fc ? i(e, a.fc, 1, 0, r) : n,
					fh: a.fh ? i(e, a.fh, 0, 0, r) : n,
					fs: a.fs ? i(e, a.fs, 0, .01, r) : n,
					fb: a.fb ? i(e, a.fb, 0, .01, r) : n,
					t: a.t ? i(e, a.t, 0, 0, r) : n
				}, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
			}

			function TextAnimatorProperty(e, t, r) {
				this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
					alignment: {}
				}, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
			}

			function ITextElement() {}
			TextAnimatorProperty.prototype.searchProperties = function() {
				var e, t, r = this._textData.a.length,
					n = PropertyFactory.getProp;
				for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
				this._textData.p && "m" in this._textData.p ? (this._pathData = {
					a: n(this._elem, this._textData.p.a, 0, 0, this),
					f: n(this._elem, this._textData.p.f, 0, 0, this),
					l: n(this._elem, this._textData.p.l, 0, 0, this),
					r: n(this._elem, this._textData.p.r, 0, 0, this),
					p: n(this._elem, this._textData.p.p, 0, 0, this),
					m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
				}, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
			}, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
				if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
					this._isFirstFrame = !1;
					var r, n, i, a, s, o, l, f, u, c, v, d, p, m, h, g, y, _, b, S = this._moreOptions.alignment.v,
						x = this._animatorsData,
						T = this._textData,
						P = this.mHelper,
						D = this._renderType,
						w = this.renderedLetters.length,
						C = e.l;
					if (this._hasMaskedPath) {
						if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
							var F, O = b.v;
							for (this._pathData.r.v && (O = O.reverse()), s = {
									tLength: 0,
									segments: []
								}, a = O._length - 1, g = 0, i = 0; i < a; i += 1) F = bez.buildBezierData(O.v[i], O.v[i + 1], [O.o[i][0] - O.v[i][0], O.o[i][1] - O.v[i][1]], [O.i[i + 1][0] - O.v[i + 1][0], O.i[i + 1][1] - O.v[i + 1][1]]), s.tLength += F.segmentLength, s.segments.push(F), g += F.segmentLength;
							i = a, b.v.c && (F = bez.buildBezierData(O.v[i], O.v[0], [O.o[i][0] - O.v[i][0], O.o[i][1] - O.v[i][1]], [O.i[0][0] - O.v[0][0], O.i[0][1] - O.v[0][1]]), s.tLength += F.segmentLength, s.segments.push(F), g += F.segmentLength), this._pathData.pi = s
						}
						if (s = this._pathData.pi, o = this._pathData.f.v, v = 0, c = 1, f = 0, u = !0, m = s.segments, o < 0 && b.v.c)
							for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (p = m[v = m.length - 1].points).length - 1; o < 0;) o += p[c].partialLength, (c -= 1) < 0 && (c = (p = m[v -= 1].points).length - 1);
						d = (p = m[v].points)[c - 1], h = (l = p[c]).partialLength
					}
					a = C.length, r = 0, n = 0;
					var R, L, H, Y, A, M = 1.2 * e.finalSize * .714,
						N = !0;
					H = x.length;
					var U, $, X, ee, re, ie, Q, ae, xe, fe, q, K, J = -1,
						j = o,
						ve = v,
						Xe = c,
						ke = -1,
						I = "",
						k = this.defaultPropsArray;
					if (e.j === 2 || e.j === 1) {
						var B = 0,
							z = 0,
							V = e.j === 2 ? -.5 : -1,
							G = 0,
							te = !0;
						for (i = 0; i < a; i += 1)
							if (C[i].n) {
								for (B && (B += z); G < i;) C[G].animatorJustifyOffset = B, G += 1;
								B = 0, te = !0
							} else {
								for (L = 0; L < H; L += 1)(R = x[L].a).t.propType && (te && e.j === 2 && (z += R.t.v * V), (A = x[L].s.getMult(C[i].anIndexes[L], T.a[L].s.totalChars)).length ? B += R.t.v * A[0] * V : B += R.t.v * A * V);
								te = !1
							} for (B && (B += z); G < i;) C[G].animatorJustifyOffset = B, G += 1
					}
					for (i = 0; i < a; i += 1) {
						if (P.reset(), ee = 1, C[i].n) r = 0, n += e.yOffset, n += N ? 1 : 0, o = j, N = !1, this._hasMaskedPath && (c = Xe, d = (p = m[v = ve].points)[c - 1], h = (l = p[c]).partialLength, f = 0), I = "", q = "", xe = "", K = "", k = this.defaultPropsArray;
						else {
							if (this._hasMaskedPath) {
								if (ke !== C[i].line) {
									switch (e.j) {
										case 1:
											o += g - e.lineWidths[C[i].line];
											break;
										case 2:
											o += (g - e.lineWidths[C[i].line]) / 2
									}
									ke = C[i].line
								}
								J !== C[i].ind && (C[J] && (o += C[J].extra), o += C[i].an / 2, J = C[i].ind), o += S[0] * C[i].an * .005;
								var ne = 0;
								for (L = 0; L < H; L += 1)(R = x[L].a).p.propType && ((A = x[L].s.getMult(C[i].anIndexes[L], T.a[L].s.totalChars)).length ? ne += R.p.v[0] * A[0] : ne += R.p.v[0] * A), R.a.propType && ((A = x[L].s.getMult(C[i].anIndexes[L], T.a[L].s.totalChars)).length ? ne += R.a.v[0] * A[0] : ne += R.a.v[0] * A);
								for (u = !0, this._pathData.a.v && (o = .5 * C[0].an + (g - this._pathData.f.v - .5 * C[0].an - .5 * C[C.length - 1].an) * J / (a - 1), o += this._pathData.f.v); u;) f + h >= o + ne || !p ? (y = (o + ne - f) / l.partialLength, $ = d.point[0] + (l.point[0] - d.point[0]) * y, X = d.point[1] + (l.point[1] - d.point[1]) * y, P.translate(-S[0] * C[i].an * .005, -S[1] * M * .01), u = !1) : p && (f += l.partialLength, (c += 1) >= p.length && (c = 0, m[v += 1] ? p = m[v].points : b.v.c ? (c = 0, p = m[v = 0].points) : (f -= l.partialLength, p = null)), p && (d = l, h = (l = p[c]).partialLength));
								U = C[i].an / 2 - C[i].add, P.translate(-U, 0, 0)
							} else U = C[i].an / 2 - C[i].add, P.translate(-U, 0, 0), P.translate(-S[0] * C[i].an * .005, -S[1] * M * .01, 0);
							for (L = 0; L < H; L += 1)(R = x[L].a).t.propType && (A = x[L].s.getMult(C[i].anIndexes[L], T.a[L].s.totalChars), r === 0 && e.j === 0 || (this._hasMaskedPath ? A.length ? o += R.t.v * A[0] : o += R.t.v * A : A.length ? r += R.t.v * A[0] : r += R.t.v * A));
							for (e.strokeWidthAnim && (ie = e.sw || 0), e.strokeColorAnim && (re = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (Q = [e.fc[0], e.fc[1], e.fc[2]]), L = 0; L < H; L += 1)(R = x[L].a).a.propType && ((A = x[L].s.getMult(C[i].anIndexes[L], T.a[L].s.totalChars)).length ? P.translate(-R.a.v[0] * A[0], -R.a.v[1] * A[1], R.a.v[2] * A[2]) : P.translate(-R.a.v[0] * A, -R.a.v[1] * A, R.a.v[2] * A));
							for (L = 0; L < H; L += 1)(R = x[L].a).s.propType && ((A = x[L].s.getMult(C[i].anIndexes[L], T.a[L].s.totalChars)).length ? P.scale(1 + (R.s.v[0] - 1) * A[0], 1 + (R.s.v[1] - 1) * A[1], 1) : P.scale(1 + (R.s.v[0] - 1) * A, 1 + (R.s.v[1] - 1) * A, 1));
							for (L = 0; L < H; L += 1) {
								if (R = x[L].a, A = x[L].s.getMult(C[i].anIndexes[L], T.a[L].s.totalChars), R.sk.propType && (A.length ? P.skewFromAxis(-R.sk.v * A[0], R.sa.v * A[1]) : P.skewFromAxis(-R.sk.v * A, R.sa.v * A)), R.r.propType && (A.length ? P.rotateZ(-R.r.v * A[2]) : P.rotateZ(-R.r.v * A)), R.ry.propType && (A.length ? P.rotateY(R.ry.v * A[1]) : P.rotateY(R.ry.v * A)), R.rx.propType && (A.length ? P.rotateX(R.rx.v * A[0]) : P.rotateX(R.rx.v * A)), R.o.propType && (A.length ? ee += (R.o.v * A[0] - ee) * A[0] : ee += (R.o.v * A - ee) * A), e.strokeWidthAnim && R.sw.propType && (A.length ? ie += R.sw.v * A[0] : ie += R.sw.v * A), e.strokeColorAnim && R.sc.propType)
									for (ae = 0; ae < 3; ae += 1) A.length ? re[ae] += (R.sc.v[ae] - re[ae]) * A[0] : re[ae] += (R.sc.v[ae] - re[ae]) * A;
								if (e.fillColorAnim && e.fc) {
									if (R.fc.propType)
										for (ae = 0; ae < 3; ae += 1) A.length ? Q[ae] += (R.fc.v[ae] - Q[ae]) * A[0] : Q[ae] += (R.fc.v[ae] - Q[ae]) * A;
									R.fh.propType && (Q = A.length ? addHueToRGB(Q, R.fh.v * A[0]) : addHueToRGB(Q, R.fh.v * A)), R.fs.propType && (Q = A.length ? addSaturationToRGB(Q, R.fs.v * A[0]) : addSaturationToRGB(Q, R.fs.v * A)), R.fb.propType && (Q = A.length ? addBrightnessToRGB(Q, R.fb.v * A[0]) : addBrightnessToRGB(Q, R.fb.v * A))
								}
							}
							for (L = 0; L < H; L += 1)(R = x[L].a).p.propType && (A = x[L].s.getMult(C[i].anIndexes[L], T.a[L].s.totalChars), this._hasMaskedPath ? A.length ? P.translate(0, R.p.v[1] * A[0], -R.p.v[2] * A[1]) : P.translate(0, R.p.v[1] * A, -R.p.v[2] * A) : A.length ? P.translate(R.p.v[0] * A[0], R.p.v[1] * A[1], -R.p.v[2] * A[2]) : P.translate(R.p.v[0] * A, R.p.v[1] * A, -R.p.v[2] * A));
							if (e.strokeWidthAnim && (xe = ie < 0 ? 0 : ie), e.strokeColorAnim && (fe = "rgb(" + Math.round(255 * re[0]) + "," + Math.round(255 * re[1]) + "," + Math.round(255 * re[2]) + ")"), e.fillColorAnim && e.fc && (q = "rgb(" + Math.round(255 * Q[0]) + "," + Math.round(255 * Q[1]) + "," + Math.round(255 * Q[2]) + ")"), this._hasMaskedPath) {
								if (P.translate(0, -e.ls), P.translate(0, S[1] * M * .01 + n, 0), this._pathData.p.v) {
									_ = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
									var me = 180 * Math.atan(_) / Math.PI;
									l.point[0] < d.point[0] && (me += 180), P.rotate(-me * Math.PI / 180)
								}
								P.translate($, X, 0), o -= S[0] * C[i].an * .005, C[i + 1] && J !== C[i + 1].ind && (o += C[i].an / 2, o += .001 * e.tr * e.finalSize)
							} else {
								switch (P.translate(r, n, 0), e.ps && P.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
									case 1:
										P.translate(C[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[i].line]), 0, 0);
										break;
									case 2:
										P.translate(C[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[i].line]) / 2, 0, 0)
								}
								P.translate(0, -e.ls), P.translate(U, 0, 0), P.translate(S[0] * C[i].an * .005, S[1] * M * .01, 0), r += C[i].l + .001 * e.tr * e.finalSize
							}
							D === "html" ? I = P.toCSS() : D === "svg" ? I = P.to2dCSS() : k = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]], K = ee
						}
						w <= i ? (Y = new LetterProps(K, xe, fe, q, I, k), this.renderedLetters.push(Y), w += 1, this.lettersChangedFlag = !0) : (Y = this.renderedLetters[i], this.lettersChangedFlag = Y.update(K, xe, fe, q, I, k) || this.lettersChangedFlag)
					}
				}
			}, TextAnimatorProperty.prototype.getValue = function() {
				this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
			}, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(e, t, r) {
				this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
			}, ITextElement.prototype.prepareFrame = function(e) {
				this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
			}, ITextElement.prototype.createPathShape = function(e, t) {
				var r, n, i = t.length,
					a = "";
				for (r = 0; r < i; r += 1) t[r].ty === "sh" && (n = t[r].ks.k, a += buildShapeString(n, n.i.length, !0, e));
				return a
			}, ITextElement.prototype.updateDocumentData = function(e, t) {
				this.textProperty.updateDocumentData(e, t)
			}, ITextElement.prototype.canResizeFont = function(e) {
				this.textProperty.canResizeFont(e)
			}, ITextElement.prototype.setMinimumFontSize = function(e) {
				this.textProperty.setMinimumFontSize(e)
			}, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, n, i) {
				switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
					case 1:
						t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
						break;
					case 2:
						t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
				}
				t.translate(n, i, 0)
			}, ITextElement.prototype.buildColor = function(e) {
				return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
			}, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
				(this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
			};
			var emptyShapeData = {
				shapes: []
			};

			function SVGTextLottieElement(e, t, r) {
				this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
			}

			function ISolidElement(e, t, r) {
				this.initElement(e, t, r)
			}

			function NullElement(e, t, r) {
				this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
			}

			function SVGRendererBase() {}

			function ICompElement() {}

			function SVGCompElement(e, t, r) {
				this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
					_placeholder: !0
				}
			}

			function SVGRenderer(e, t) {
				this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
				var r = "";
				if (t && t.title) {
					var n = createNS("title"),
						i = createElementID();
					n.setAttribute("id", i), n.textContent = t.title, this.svgElement.appendChild(n), r += i
				}
				if (t && t.description) {
					var a = createNS("desc"),
						s = createElementID();
					a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + s
				}
				r && this.svgElement.setAttribute("aria-labelledby", r);
				var o = createNS("defs");
				this.svgElement.appendChild(o);
				var l = createNS("g");
				this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
					preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
					imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
					contentVisibility: t && t.contentVisibility || "visible",
					progressiveLoad: t && t.progressiveLoad || !1,
					hideOnTransparent: !(t && t.hideOnTransparent === !1),
					viewBoxOnly: t && t.viewBoxOnly || !1,
					viewBoxSize: t && t.viewBoxSize || !1,
					className: t && t.className || "",
					id: t && t.id || "",
					focusable: t && t.focusable,
					filterSize: {
						width: t && t.filterSize && t.filterSize.width || "100%",
						height: t && t.filterSize && t.filterSize.height || "100%",
						x: t && t.filterSize && t.filterSize.x || "0%",
						y: t && t.filterSize && t.filterSize.y || "0%"
					},
					width: t && t.width,
					height: t && t.height,
					runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
				}, this.globalData = {
					_mdf: !1,
					frameNum: -1,
					defs: o,
					renderConfig: this.renderConfig
				}, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
			}

			function ShapeTransformManager() {
				this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
			}
			extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
				this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
			}, SVGTextLottieElement.prototype.buildTextContents = function(e) {
				for (var t = 0, r = e.length, n = [], i = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (n.push(i), i = "") : i += e[t], t += 1;
				return n.push(i), n
			}, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
				if (e.shapes && e.shapes.length) {
					var r = e.shapes[0];
					if (r.it) {
						var n = r.it[r.it.length - 1];
						n.s && (n.s.k[0] = t, n.s.k[1] = t)
					}
				}
				return e
			}, SVGTextLottieElement.prototype.buildNewText = function() {
				var e, t;
				this.addDynamicProperty(this);
				var r = this.textProperty.currentData;
				this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
				var n = this.globalData.fontManager.getFontByName(r.f);
				if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
				else {
					this.layerElement.setAttribute("font-family", n.fFamily);
					var i = r.fWeight,
						a = r.fStyle;
					this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
				}
				this.layerElement.setAttribute("aria-label", r.t);
				var s, o = r.l || [],
					l = !!this.globalData.fontManager.chars;
				t = o.length;
				var f = this.mHelper,
					u = this.data.singleShape,
					c = 0,
					v = 0,
					d = !0,
					p = .001 * r.tr * r.finalSize;
				if (!u || l || r.sz) {
					var m, h = this.textSpans.length;
					for (e = 0; e < t; e += 1) {
						if (this.textSpans[e] || (this.textSpans[e] = {
								span: null,
								childSpan: null,
								glyph: null
							}), !l || !u || e === 0) {
							if (s = h > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), h <= e) {
								if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = s, l) {
									var g = createNS("g");
									s.appendChild(g), this.textSpans[e].childSpan = g
								}
								this.textSpans[e].span = s, this.layerElement.appendChild(s)
							}
							s.style.display = "inherit"
						}
						if (f.reset(), u && (o[e].n && (c = -p, v += r.yOffset, v += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, f, o[e].line, c, v), c += o[e].l || 0, c += p), l) {
							var y;
							if ((m = this.globalData.fontManager.getCharData(r.finalText[e], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t === 1) y = new SVGCompElement(m.data, this.globalData, this);
							else {
								var _ = emptyShapeData;
								m.data && m.data.shapes && (_ = this.buildShapeData(m.data, r.finalSize)), y = new SVGShapeElement(_, this.globalData, this)
							}
							if (this.textSpans[e].glyph) {
								var b = this.textSpans[e].glyph;
								this.textSpans[e].childSpan.removeChild(b.layerElement), b.destroy()
							}
							this.textSpans[e].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[e].childSpan.appendChild(y.layerElement), m.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
						} else u && s.setAttribute("transform", "translate(" + f.props[12] + "," + f.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
					}
					u && s && s.setAttribute("d", "")
				} else {
					var S = this.textContainer,
						x = "start";
					switch (r.j) {
						case 1:
							x = "end";
							break;
						case 2:
							x = "middle";
							break;
						default:
							x = "start"
					}
					S.setAttribute("text-anchor", x), S.setAttribute("letter-spacing", p);
					var T = this.buildTextContents(r.finalText);
					for (t = T.length, v = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(s = this.textSpans[e].span || createNS("tspan")).textContent = T[e], s.setAttribute("x", 0), s.setAttribute("y", v), s.style.display = "inherit", S.appendChild(s), this.textSpans[e] || (this.textSpans[e] = {
						span: null,
						glyph: null
					}), this.textSpans[e].span = s, v += r.finalLineHeight;
					this.layerElement.appendChild(S)
				}
				for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
				this._sizeChanged = !0
			}, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
				if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
					this._sizeChanged = !1;
					var e = this.layerElement.getBBox();
					this.bbox = {
						top: e.y,
						left: e.x,
						width: e.width,
						height: e.height
					}
				}
				return this.bbox
			}, SVGTextLottieElement.prototype.getValue = function() {
				var e, t, r = this.textSpans.length;
				for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)(t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
			}, SVGTextLottieElement.prototype.renderInnerContent = function() {
				if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
					var e, t;
					this._sizeChanged = !0;
					var r, n, i, a = this.textAnimator.renderedLetters,
						s = this.textProperty.currentData.l;
					for (t = s.length, e = 0; e < t; e += 1) s[e].n || (r = a[e], n = this.textSpans[e].span, (i = this.textSpans[e].glyph) && i.renderFrame(), r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
				}
			}, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
				var e = createNS("rect");
				e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
			}, NullElement.prototype.prepareFrame = function(e) {
				this.prepareProperties(e, !0)
			}, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
				return null
			}, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
				return new NullElement(e, this.globalData, this)
			}, SVGRendererBase.prototype.createShape = function(e) {
				return new SVGShapeElement(e, this.globalData, this)
			}, SVGRendererBase.prototype.createText = function(e) {
				return new SVGTextLottieElement(e, this.globalData, this)
			}, SVGRendererBase.prototype.createImage = function(e) {
				return new IImageElement(e, this.globalData, this)
			}, SVGRendererBase.prototype.createSolid = function(e) {
				return new ISolidElement(e, this.globalData, this)
			}, SVGRendererBase.prototype.configAnimation = function(e) {
				this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
				var t = this.globalData.defs;
				this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
				var r = createNS("clipPath"),
					n = createNS("rect");
				n.setAttribute("width", e.w), n.setAttribute("height", e.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
				var i = createElementID();
				r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
			}, SVGRendererBase.prototype.destroy = function() {
				var e;
				this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
				var t = this.layers ? this.layers.length : 0;
				for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
				this.elements.length = 0, this.destroyed = !0, this.animationItem = null
			}, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
				var t = 0,
					r = this.layers.length;
				for (t = 0; t < r; t += 1)
					if (this.layers[t].ind === e) return t;
				return -1
			}, SVGRendererBase.prototype.buildItem = function(e) {
				var t = this.elements;
				if (!t[e] && this.layers[e].ty !== 99) {
					t[e] = !0;
					var r = this.createItem(this.layers[e]);
					if (t[e] = r, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
						var n = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
						if (n === -1) return;
						if (this.elements[n] && this.elements[n] !== !0) {
							var i = t[n].getMatte(this.layers[e].tt);
							r.setMatte(i)
						} else this.buildItem(n), this.addPendingElement(r)
					}
				}
			}, SVGRendererBase.prototype.checkPendingElements = function() {
				for (; this.pendingElements.length;) {
					var e = this.pendingElements.pop();
					if (e.checkParenting(), e.data.tt)
						for (var t = 0, r = this.elements.length; t < r;) {
							if (this.elements[t] === e) {
								var n = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
									i = this.elements[n].getMatte(this.layers[t].tt);
								e.setMatte(i);
								break
							}
							t += 1
						}
				}
			}, SVGRendererBase.prototype.renderFrame = function(e) {
				if (this.renderedFrame !== e && !this.destroyed) {
					var t;
					e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
					var r = this.layers.length;
					for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
					if (this.globalData._mdf)
						for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
				}
			}, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
				var r = e.getBaseElement();
				if (r) {
					for (var n, i = 0; i < t;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
					n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
				}
			}, SVGRendererBase.prototype.hide = function() {
				this.layerElement.style.display = "none"
			}, SVGRendererBase.prototype.show = function() {
				this.layerElement.style.display = "block"
			}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
				this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
			}, ICompElement.prototype.prepareFrame = function(e) {
				if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
					if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
					else {
						var t = this.tm.v;
						t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
					}
					var r, n = this.elements.length;
					for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
				}
			}, ICompElement.prototype.renderInnerContent = function() {
				var e, t = this.layers.length;
				for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
			}, ICompElement.prototype.setElements = function(e) {
				this.elements = e
			}, ICompElement.prototype.getElements = function() {
				return this.elements
			}, ICompElement.prototype.destroyElements = function() {
				var e, t = this.layers.length;
				for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
			}, ICompElement.prototype.destroy = function() {
				this.destroyElements(), this.destroyBaseElement()
			}, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
				return new SVGCompElement(e, this.globalData, this)
			}, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
				return new SVGCompElement(e, this.globalData, this)
			}, ShapeTransformManager.prototype = {
				addTransformSequence: function(e) {
					var t, r = e.length,
						n = "_";
					for (t = 0; t < r; t += 1) n += e[t].transform.key + "_";
					var i = this.sequences[n];
					return i || (i = {
						transforms: [].concat(e),
						finalTransform: new Matrix,
						_mdf: !1
					}, this.sequences[n] = i, this.sequenceList.push(i)), i
				},
				processSequence: function(e, t) {
					for (var r = 0, n = e.transforms.length, i = t; r < n && !t;) {
						if (e.transforms[r].transform.mProps._mdf) {
							i = !0;
							break
						}
						r += 1
					}
					if (i)
						for (e.finalTransform.reset(), r = n - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
					e._mdf = i
				},
				processSequences: function(e) {
					var t, r = this.sequenceList.length;
					for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
				},
				getNewKey: function() {
					return this.transform_key_count += 1, "_" + this.transform_key_count
				}
			};
			var lumaLoader = function() {
				var e = "__lottie_element_luma_buffer",
					t = null,
					r = null,
					n = null;

				function i() {
					var a, s, o;
					t || (a = createNS("svg"), s = createNS("filter"), o = createNS("feColorMatrix"), s.setAttribute("id", e), o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(o), a.appendChild(s), a.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), n = a, document.body.appendChild(n), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
				}
				return {
					load: i,
					get: function(a) {
						return t || i(), t.width = a.width, t.height = a.height, r.filter = "url(#" + e + ")", t
					}
				}
			};

			function createCanvas(e, t) {
				if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
				var r = createTag("canvas");
				return r.width = e, r.height = t, r
			}
			var assetLoader = {
					loadLumaCanvas: lumaLoader.load,
					getLumaCanvas: lumaLoader.get,
					createCanvas
				},
				registeredEffects = {};

			function CVEffects(e) {
				var t, r, n = e.data.ef ? e.data.ef.length : 0;
				for (this.filters = [], t = 0; t < n; t += 1) {
					r = null;
					var i = e.data.ef[t].ty;
					registeredEffects[i] && (r = new registeredEffects[i].effect(e.effectsManager.effectElements[t], e)), r && this.filters.push(r)
				}
				this.filters.length && e.addRenderableComponent(this)
			}

			function registerEffect(e, t) {
				registeredEffects[e] = {
					effect: t
				}
			}

			function CVMaskElement(e, t) {
				var r;
				this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
				var n = this.masksProperties.length,
					i = !1;
				for (r = 0; r < n; r += 1) this.masksProperties[r].mode !== "n" && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
				this.hasMasks = i, i && this.element.addRenderableComponent(this)
			}

			function CVBaseElement() {}
			CVEffects.prototype.renderFrame = function(e) {
				var t, r = this.filters.length;
				for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
			}, CVEffects.prototype.getEffects = function(e) {
				var t, r = this.filters.length,
					n = [];
				for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
				return n
			}, CVMaskElement.prototype.renderFrame = function() {
				if (this.hasMasks) {
					var e, t, r, n, i = this.element.finalTransform.mat,
						a = this.element.canvasContext,
						s = this.masksProperties.length;
					for (a.beginPath(), e = 0; e < s; e += 1)
						if (this.masksProperties[e].mode !== "n") {
							var o;
							this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[e].v, t = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(t[0], t[1]);
							var l = n._length;
							for (o = 1; o < l; o += 1) r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
							r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
						} this.element.globalData.renderer.save(!0), a.clip()
				}
			}, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
				this.element = null
			};
			var operationsMap = {
				1: "source-in",
				2: "source-out",
				3: "source-in",
				4: "source-out"
			};

			function CVShapeData(e, t, r, n) {
				this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
				var i, a = 4;
				t.ty === "rc" ? a = 5 : t.ty === "el" ? a = 6 : t.ty === "sr" && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
				var s, o = r.length;
				for (i = 0; i < o; i += 1) r[i].closed || (s = {
					transforms: n.addTransformSequence(r[i].transforms),
					trNodes: []
				}, this.styledShapes.push(s), r[i].elements.push(s))
			}

			function CVShapeElement(e, t, r) {
				this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
			}

			function CVTextElement(e, t, r) {
				this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
					fill: "rgba(0,0,0,0)",
					stroke: "rgba(0,0,0,0)",
					sWidth: 0,
					fValue: ""
				}, this.initElement(e, t, r)
			}

			function CVImageElement(e, t, r) {
				this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
			}

			function CVSolidElement(e, t, r) {
				this.initElement(e, t, r)
			}

			function CanvasRendererBase() {}

			function CanvasContext() {
				this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
			}

			function CVContextData() {
				var e;
				for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, e = 0; e < 15; e += 1) {
					var t = new CanvasContext;
					this.stack[e] = t
				}
				this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
			}

			function CVCompElement(e, t, r) {
				this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
					_placeholder: !0
				}
			}

			function CanvasRenderer(e, t) {
				this.animationItem = e, this.renderConfig = {
					clearCanvas: !t || t.clearCanvas === void 0 || t.clearCanvas,
					context: t && t.context || null,
					progressiveLoad: t && t.progressiveLoad || !1,
					preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
					imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
					contentVisibility: t && t.contentVisibility || "visible",
					className: t && t.className || "",
					id: t && t.id || "",
					runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
				}, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
					frameNum: -1,
					_mdf: !1,
					renderConfig: this.renderConfig,
					currentGlobalAlpha: -1
				}, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
			}

			function HBaseElement() {}

			function HSolidElement(e, t, r) {
				this.initElement(e, t, r)
			}

			function HShapeElement(e, t, r) {
				this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
					x: 999999,
					y: -999999,
					h: 0,
					w: 0
				}
			}

			function HTextElement(e, t, r) {
				this.textSpans = [], this.textPaths = [], this.currentBBox = {
					x: 999999,
					y: -999999,
					h: 0,
					w: 0
				}, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
			}

			function HCameraElement(e, t, r) {
				this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
				var n = PropertyFactory.getProp;
				if (this.pe = n(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = n(this, e.ks.p.x, 1, 0, this), this.py = n(this, e.ks.p.y, 1, 0, this), this.pz = n(this, e.ks.p.z, 1, 0, this)) : this.p = n(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = n(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
					var i, a = e.ks.or.k.length;
					for (i = 0; i < a; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null
				}
				this.or = n(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, e.ks.rx, 0, degToRads, this), this.ry = n(this, e.ks.ry, 0, degToRads, this), this.rz = n(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
					mProp: this
				}
			}

			function HImageElement(e, t, r) {
				this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
			}

			function HybridRendererBase(e, t) {
				this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
					className: t && t.className || "",
					imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
					hideOnTransparent: !(t && t.hideOnTransparent === !1),
					filterSize: {
						width: t && t.filterSize && t.filterSize.width || "400%",
						height: t && t.filterSize && t.filterSize.height || "400%",
						x: t && t.filterSize && t.filterSize.x || "-100%",
						y: t && t.filterSize && t.filterSize.y || "-100%"
					}
				}, this.globalData = {
					_mdf: !1,
					frameNum: -1,
					renderConfig: this.renderConfig
				}, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
			}

			function HCompElement(e, t, r) {
				this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
					_placeholder: !0
				}
			}

			function HybridRenderer(e, t) {
				this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
					className: t && t.className || "",
					imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
					hideOnTransparent: !(t && t.hideOnTransparent === !1),
					filterSize: {
						width: t && t.filterSize && t.filterSize.width || "400%",
						height: t && t.filterSize && t.filterSize.height || "400%",
						x: t && t.filterSize && t.filterSize.x || "-100%",
						y: t && t.filterSize && t.filterSize.y || "-100%"
					},
					runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
				}, this.globalData = {
					_mdf: !1,
					frameNum: -1,
					renderConfig: this.renderConfig
				}, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
			}
			CVBaseElement.prototype = {
				createElements: function() {},
				initRendererElement: function() {},
				createContainerElements: function() {
					if (this.data.tt >= 1) {
						this.buffers = [];
						var e = this.globalData.canvasContext,
							t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
						this.buffers.push(t);
						var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
						this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
					}
					this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
				},
				createContent: function() {},
				setBlendMode: function() {
					var e = this.globalData;
					if (e.blendMode !== this.data.bm) {
						e.blendMode = this.data.bm;
						var t = getBlendMode(this.data.bm);
						e.canvasContext.globalCompositeOperation = t
					}
				},
				createRenderableComponents: function() {
					this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
				},
				hideElement: function() {
					this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
				},
				showElement: function() {
					this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
				},
				clearCanvas: function(e) {
					e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
				},
				prepareLayer: function() {
					if (this.data.tt >= 1) {
						var e = this.buffers[0].getContext("2d");
						this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
					}
				},
				exitLayer: function() {
					if (this.data.tt >= 1) {
						var e = this.buffers[1],
							t = e.getContext("2d");
						if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
							var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
							r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
						}
						this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
					}
				},
				renderFrame: function(e) {
					if (!this.hidden && !this.data.hd && (this.data.td !== 1 || e)) {
						this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
						var t = this.data.ty === 0;
						this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
					}
				},
				destroy: function() {
					this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
				},
				mHelper: new Matrix
			}, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
				opacity: 1,
				_opMdf: !1
			}, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
				this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
			}, CVShapeElement.prototype.createStyleElement = function(e, t) {
				var r = {
						data: e,
						type: e.ty,
						preTransforms: this.transformsManager.addTransformSequence(t),
						transforms: [],
						elements: [],
						closed: e.hd === !0
					},
					n = {};
				if (e.ty === "fl" || e.ty === "st" ? (n.c = PropertyFactory.getProp(this, e.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : e.ty !== "gf" && e.ty !== "gs" || (n.s = PropertyFactory.getProp(this, e.s, 1, null, this), n.e = PropertyFactory.getProp(this, e.e, 1, null, this), n.h = PropertyFactory.getProp(this, e.h || {
						k: 0
					}, 0, .01, this), n.a = PropertyFactory.getProp(this, e.a || {
						k: 0
					}, 0, degToRads, this), n.g = new GradientProperty(this, e.g, this)), n.o = PropertyFactory.getProp(this, e.o, 0, .01, this), e.ty === "st" || e.ty === "gs") {
					if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (r.ml = e.ml), n.w = PropertyFactory.getProp(this, e.w, 0, null, this), n.w.k || (r.wi = n.w.v), e.d) {
						var i = new DashProperty(this, e.d, "canvas", this);
						n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
					}
				} else r.r = e.r === 2 ? "evenodd" : "nonzero";
				return this.stylesList.push(r), n.style = r, n
			}, CVShapeElement.prototype.createGroupElement = function() {
				return {
					it: [],
					prevViewData: []
				}
			}, CVShapeElement.prototype.createTransformElement = function(e) {
				return {
					transform: {
						opacity: 1,
						_opMdf: !1,
						key: this.transformsManager.getNewKey(),
						op: PropertyFactory.getProp(this, e.o, 0, .01, this),
						mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
					}
				}
			}, CVShapeElement.prototype.createShapeElement = function(e) {
				var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
				return this.shapes.push(t), this.addShapeToModifiers(t), t
			}, CVShapeElement.prototype.reloadShapes = function() {
				var e;
				this._isFirstFrame = !0;
				var t = this.itemsData.length;
				for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
				for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
				this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
			}, CVShapeElement.prototype.addTransformToStyleList = function(e) {
				var t, r = this.stylesList.length;
				for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
			}, CVShapeElement.prototype.removeTransformFromStyleList = function() {
				var e, t = this.stylesList.length;
				for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
			}, CVShapeElement.prototype.closeStyles = function(e) {
				var t, r = e.length;
				for (t = 0; t < r; t += 1) e[t].closed = !0
			}, CVShapeElement.prototype.searchShapes = function(e, t, r, n, i) {
				var a, s, o, l, f, u, c = e.length - 1,
					v = [],
					d = [],
					p = [].concat(i);
				for (a = c; a >= 0; a -= 1) {
					if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = n, e[a].ty === "fl" || e[a].ty === "st" || e[a].ty === "gf" || e[a].ty === "gs") l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], p), v.push(t[a].style);
					else if (e[a].ty === "gr") {
						if (l)
							for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
						else t[a] = this.createGroupElement(e[a]);
						this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, n, p)
					} else e[a].ty === "tr" ? (l || (u = this.createTransformElement(e[a]), t[a] = u), p.push(t[a]), this.addTransformToStyleList(t[a])) : e[a].ty === "sh" || e[a].ty === "rc" || e[a].ty === "el" || e[a].ty === "sr" ? l || (t[a] = this.createShapeElement(e[a])) : e[a].ty === "tm" || e[a].ty === "rd" || e[a].ty === "pb" || e[a].ty === "zz" || e[a].ty === "op" ? (l ? (f = t[a]).closed = !1 : ((f = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = f, this.shapeModifiers.push(f)), d.push(f)) : e[a].ty === "rp" && (l ? (f = t[a]).closed = !0 : (f = ShapeModifiers.getModifier(e[a].ty), t[a] = f, f.init(this, e, a, t), this.shapeModifiers.push(f), n = !1), d.push(f));
					this.addProcessedElement(e[a], a + 1)
				}
				for (this.removeTransformFromStyleList(), this.closeStyles(v), c = d.length, a = 0; a < c; a += 1) d[a].closed = !0
			}, CVShapeElement.prototype.renderInnerContent = function() {
				this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
			}, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
				(e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
			}, CVShapeElement.prototype.drawLayer = function() {
				var e, t, r, n, i, a, s, o, l, f = this.stylesList.length,
					u = this.globalData.renderer,
					c = this.globalData.canvasContext;
				for (e = 0; e < f; e += 1)
					if (((o = (l = this.stylesList[e]).type) !== "st" && o !== "gs" || l.wi !== 0) && l.data._shouldRender && l.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
						for (u.save(), a = l.elements, o === "st" || o === "gs" ? (u.ctxStrokeStyle(o === "st" ? l.co : l.grd), u.ctxLineWidth(l.wi), u.ctxLineCap(l.lc), u.ctxLineJoin(l.lj), u.ctxMiterLimit(l.ml || 0)) : u.ctxFillStyle(o === "fl" ? l.co : l.grd), u.ctxOpacity(l.coOp), o !== "st" && o !== "gs" && c.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
							for (o !== "st" && o !== "gs" || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), i = (s = a[t].trNodes).length, n = 0; n < i; n += 1) s[n].t === "m" ? c.moveTo(s[n].p[0], s[n].p[1]) : s[n].t === "c" ? c.bezierCurveTo(s[n].pts[0], s[n].pts[1], s[n].pts[2], s[n].pts[3], s[n].pts[4], s[n].pts[5]) : c.closePath();
							o !== "st" && o !== "gs" || (u.ctxStroke(), l.da && c.setLineDash(this.dashResetter))
						}
						o !== "st" && o !== "gs" && this.globalData.renderer.ctxFill(l.r), u.restore()
					}
			}, CVShapeElement.prototype.renderShape = function(e, t, r, n) {
				var i, a;
				for (a = e, i = t.length - 1; i >= 0; i -= 1) t[i].ty === "tr" ? (a = r[i].transform, this.renderShapeTransform(e, a)) : t[i].ty === "sh" || t[i].ty === "el" || t[i].ty === "rc" || t[i].ty === "sr" ? this.renderPath(t[i], r[i]) : t[i].ty === "fl" ? this.renderFill(t[i], r[i], a) : t[i].ty === "st" ? this.renderStroke(t[i], r[i], a) : t[i].ty === "gf" || t[i].ty === "gs" ? this.renderGradientFill(t[i], r[i], a) : t[i].ty === "gr" ? this.renderShape(a, t[i].it, r[i].it) : t[i].ty;
				n && this.drawLayer()
			}, CVShapeElement.prototype.renderStyledShape = function(e, t) {
				if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
					var r, n, i, a = e.trNodes,
						s = t.paths,
						o = s._length;
					a.length = 0;
					var l = e.transforms.finalTransform;
					for (i = 0; i < o; i += 1) {
						var f = s.shapes[i];
						if (f && f.v) {
							for (n = f._length, r = 1; r < n; r += 1) r === 1 && a.push({
								t: "m",
								p: l.applyToPointArray(f.v[0][0], f.v[0][1], 0)
							}), a.push({
								t: "c",
								pts: l.applyToTriplePoints(f.o[r - 1], f.i[r], f.v[r])
							});
							n === 1 && a.push({
								t: "m",
								p: l.applyToPointArray(f.v[0][0], f.v[0][1], 0)
							}), f.c && n && (a.push({
								t: "c",
								pts: l.applyToTriplePoints(f.o[r - 1], f.i[0], f.v[0])
							}), a.push({
								t: "z"
							}))
						}
					}
					e.trNodes = a
				}
			}, CVShapeElement.prototype.renderPath = function(e, t) {
				if (e.hd !== !0 && e._shouldRender) {
					var r, n = t.styledShapes.length;
					for (r = 0; r < n; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
				}
			}, CVShapeElement.prototype.renderFill = function(e, t, r) {
				var n = t.style;
				(t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity)
			}, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
				var n, i = t.style;
				if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
					var a, s = this.globalData.canvasContext,
						o = t.s.v,
						l = t.e.v;
					if (e.t === 1) n = s.createLinearGradient(o[0], o[1], l[0], l[1]);
					else {
						var f = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
							u = Math.atan2(l[1] - o[1], l[0] - o[0]),
							c = t.h.v;
						c >= 1 ? c = .99 : c <= -1 && (c = -.99);
						var v = f * c,
							d = Math.cos(u + t.a.v) * v + o[0],
							p = Math.sin(u + t.a.v) * v + o[1];
						n = s.createRadialGradient(d, p, 0, o[0], o[1], f)
					}
					var m = e.g.p,
						h = t.g.c,
						g = 1;
					for (a = 0; a < m; a += 1) t.g._hasOpacity && t.g._collapsable && (g = t.g.o[2 * a + 1]), n.addColorStop(h[4 * a] / 100, "rgba(" + h[4 * a + 1] + "," + h[4 * a + 2] + "," + h[4 * a + 3] + "," + g + ")");
					i.grd = n
				}
				i.coOp = t.o.v * r.opacity
			}, CVShapeElement.prototype.renderStroke = function(e, t, r) {
				var n = t.style,
					i = t.d;
				i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (n.wi = t.w.v)
			}, CVShapeElement.prototype.destroy = function() {
				this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
			}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
				var e = this.textProperty.currentData;
				this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
				var t = !1;
				e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
				var r = !1;
				e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
				var n, i, a, s, o, l, f, u, c, v, d, p, m = this.globalData.fontManager.getFontByName(e.f),
					h = e.l,
					g = this.mHelper;
				this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, i = e.finalText.length;
				var y = this.data.singleShape,
					_ = .001 * e.tr * e.finalSize,
					b = 0,
					S = 0,
					x = !0,
					T = 0;
				for (n = 0; n < i; n += 1) {
					s = (a = this.globalData.fontManager.getCharData(e.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, g.reset(), y && h[n].n && (b = -_, S += e.yOffset, S += x ? 1 : 0, x = !1), c = (f = s.shapes ? s.shapes[0].it : []).length, g.scale(e.finalSize / 100, e.finalSize / 100), y && this.applyTextPropertiesToMatrix(e, g, h[n].line, b, S), d = createSizedArray(c - 1);
					var P = 0;
					for (u = 0; u < c; u += 1)
						if (f[u].ty === "sh") {
							for (l = f[u].ks.k.i.length, v = f[u].ks.k, p = [], o = 1; o < l; o += 1) o === 1 && p.push(g.applyToX(v.v[0][0], v.v[0][1], 0), g.applyToY(v.v[0][0], v.v[0][1], 0)), p.push(g.applyToX(v.o[o - 1][0], v.o[o - 1][1], 0), g.applyToY(v.o[o - 1][0], v.o[o - 1][1], 0), g.applyToX(v.i[o][0], v.i[o][1], 0), g.applyToY(v.i[o][0], v.i[o][1], 0), g.applyToX(v.v[o][0], v.v[o][1], 0), g.applyToY(v.v[o][0], v.v[o][1], 0));
							p.push(g.applyToX(v.o[o - 1][0], v.o[o - 1][1], 0), g.applyToY(v.o[o - 1][0], v.o[o - 1][1], 0), g.applyToX(v.i[0][0], v.i[0][1], 0), g.applyToY(v.i[0][0], v.i[0][1], 0), g.applyToX(v.v[0][0], v.v[0][1], 0), g.applyToY(v.v[0][0], v.v[0][1], 0)), d[P] = p, P += 1
						} y && (b += h[n].l, b += _), this.textSpans[T] ? this.textSpans[T].elem = d : this.textSpans[T] = {
						elem: d
					}, T += 1
				}
			}, CVTextElement.prototype.renderInnerContent = function() {
				var e, t, r, n, i, a;
				this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
				var s, o = this.textAnimator.renderedLetters,
					l = this.textProperty.currentData.l;
				t = l.length;
				var f, u, c = null,
					v = null,
					d = null,
					p = this.globalData.renderer;
				for (e = 0; e < t; e += 1)
					if (!l[e].n) {
						if ((s = o[e]) && (p.save(), p.ctxTransform(s.p), p.ctxOpacity(s.o)), this.fill) {
							for (s && s.fc ? c !== s.fc && (p.ctxFillStyle(s.fc), c = s.fc) : c !== this.values.fill && (c = this.values.fill, p.ctxFillStyle(this.values.fill)), n = (f = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
								for (a = (u = f[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
							this.globalData.canvasContext.closePath(), p.ctxFill()
						}
						if (this.stroke) {
							for (s && s.sw ? d !== s.sw && (d = s.sw, p.ctxLineWidth(s.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, p.ctxLineWidth(this.values.sWidth)), s && s.sc ? v !== s.sc && (v = s.sc, p.ctxStrokeStyle(s.sc)) : v !== this.values.stroke && (v = this.values.stroke, p.ctxStrokeStyle(this.values.stroke)), n = (f = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
								for (a = (u = f[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
							this.globalData.canvasContext.closePath(), p.ctxStroke()
						}
						s && this.globalData.renderer.restore()
					}
			}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
				if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
					var e = createTag("canvas");
					e.width = this.assetData.w, e.height = this.assetData.h;
					var t, r, n = e.getContext("2d"),
						i = this.img.width,
						a = this.img.height,
						s = i / a,
						o = this.assetData.w / this.assetData.h,
						l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
					s > o && l === "xMidYMid slice" || s < o && l !== "xMidYMid slice" ? t = (r = a) * o : r = (t = i) / o, n.drawImage(this.img, (i - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
				}
			}, CVImageElement.prototype.renderInnerContent = function() {
				this.canvasContext.drawImage(this.img, 0, 0)
			}, CVImageElement.prototype.destroy = function() {
				this.img = null
			}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
				this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
			}, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
				return new CVShapeElement(e, this.globalData, this)
			}, CanvasRendererBase.prototype.createText = function(e) {
				return new CVTextElement(e, this.globalData, this)
			}, CanvasRendererBase.prototype.createImage = function(e) {
				return new CVImageElement(e, this.globalData, this)
			}, CanvasRendererBase.prototype.createSolid = function(e) {
				return new CVSolidElement(e, this.globalData, this)
			}, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
				e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
			}, CanvasRendererBase.prototype.ctxOpacity = function(e) {
				this.canvasContext.globalAlpha *= e < 0 ? 0 : e
			}, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
				this.canvasContext.fillStyle = e
			}, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
				this.canvasContext.strokeStyle = e
			}, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
				this.canvasContext.lineWidth = e
			}, CanvasRendererBase.prototype.ctxLineCap = function(e) {
				this.canvasContext.lineCap = e
			}, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
				this.canvasContext.lineJoin = e
			}, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
				this.canvasContext.miterLimit = e
			}, CanvasRendererBase.prototype.ctxFill = function(e) {
				this.canvasContext.fill(e)
			}, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, n) {
				this.canvasContext.fillRect(e, t, r, n)
			}, CanvasRendererBase.prototype.ctxStroke = function() {
				this.canvasContext.stroke()
			}, CanvasRendererBase.prototype.reset = function() {
				this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
			}, CanvasRendererBase.prototype.save = function() {
				this.canvasContext.save()
			}, CanvasRendererBase.prototype.restore = function(e) {
				this.renderConfig.clearCanvas ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)) : this.canvasContext.restore()
			}, CanvasRendererBase.prototype.configAnimation = function(e) {
				if (this.animationItem.wrapper) {
					this.animationItem.container = createTag("canvas");
					var t = this.animationItem.container.style;
					t.width = "100%", t.height = "100%";
					var r = "0px 0px 0px";
					t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
				} else this.canvasContext = this.renderConfig.context;
				this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
					w: e.w,
					h: e.h,
					sx: 0,
					sy: 0,
					tx: 0,
					ty: 0
				}, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
			}, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
				var r, n, i, a;
				if (this.reset(), e ? (r = e, n = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = n) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, n = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = n * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
					var s = this.renderConfig.preserveAspectRatio.split(" "),
						o = s[1] || "meet",
						l = s[0] || "xMidYMid",
						f = l.substr(0, 4),
						u = l.substr(4);
					i = r / n, (a = this.transformCanvas.w / this.transformCanvas.h) > i && o === "meet" || a < i && o === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = f === "xMid" && (a < i && o === "meet" || a > i && o === "slice") ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : f === "xMax" && (a < i && o === "meet" || a > i && o === "slice") ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = u === "YMid" && (a > i && o === "meet" || a < i && o === "slice") ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : u === "YMax" && (a > i && o === "meet" || a < i && o === "slice") ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
				} else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
				this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
			}, CanvasRendererBase.prototype.destroy = function() {
				var e;
				for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
				this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
			}, CanvasRendererBase.prototype.renderFrame = function(e, t) {
				if ((this.renderedFrame !== e || this.renderConfig.clearCanvas !== !0 || t) && !this.destroyed && e !== -1) {
					var r;
					this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
					var n = this.layers.length;
					for (this.completeLayers || this.checkLayers(e), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
					if (this.globalData._mdf) {
						for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
						this.renderConfig.clearCanvas !== !0 && this.restore()
					}
				}
			}, CanvasRendererBase.prototype.buildItem = function(e) {
				var t = this.elements;
				if (!t[e] && this.layers[e].ty !== 99) {
					var r = this.createItem(this.layers[e], this, this.globalData);
					t[e] = r, r.initExpressions()
				}
			}, CanvasRendererBase.prototype.checkPendingElements = function() {
				for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
			}, CanvasRendererBase.prototype.hide = function() {
				this.animationItem.container.style.display = "none"
			}, CanvasRendererBase.prototype.show = function() {
				this.animationItem.container.style.display = "block"
			}, CVContextData.prototype.duplicate = function() {
				var e = 2 * this._length,
					t = 0;
				for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
				this._length = e
			}, CVContextData.prototype.reset = function() {
				this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
			}, CVContextData.prototype.restore = function(e) {
				this.cArrPos -= 1;
				var t, r = this.stack[this.cArrPos],
					n = r.transform,
					i = this.cTr.props;
				for (t = 0; t < 16; t += 1) i[t] = n[t];
				if (e) {
					this.nativeContext.restore();
					var a = this.stack[this.cArrPos + 1];
					this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
				}
				this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), (e || r.opacity !== -1 && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
			}, CVContextData.prototype.save = function(e) {
				e && this.nativeContext.save();
				var t = this.cTr.props;
				this._length <= this.cArrPos && this.duplicate();
				var r, n = this.stack[this.cArrPos];
				for (r = 0; r < 16; r += 1) n.transform[r] = t[r];
				this.cArrPos += 1;
				var i = this.stack[this.cArrPos];
				i.opacity = n.opacity, i.fillStyle = n.fillStyle, i.strokeStyle = n.strokeStyle, i.lineWidth = n.lineWidth, i.lineCap = n.lineCap, i.lineJoin = n.lineJoin, i.miterLimit = n.miterLimit
			}, CVContextData.prototype.setOpacity = function(e) {
				this.stack[this.cArrPos].opacity = e
			}, CVContextData.prototype.setContext = function(e) {
				this.nativeContext = e
			}, CVContextData.prototype.fillStyle = function(e) {
				this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
			}, CVContextData.prototype.strokeStyle = function(e) {
				this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
			}, CVContextData.prototype.lineWidth = function(e) {
				this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
			}, CVContextData.prototype.lineCap = function(e) {
				this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
			}, CVContextData.prototype.lineJoin = function(e) {
				this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
			}, CVContextData.prototype.miterLimit = function(e) {
				this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
			}, CVContextData.prototype.transform = function(e) {
				this.transformMat.cloneFromProps(e);
				var t = this.cTr;
				this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
				var r = t.props;
				this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
			}, CVContextData.prototype.opacity = function(e) {
				var t = this.stack[this.cArrPos].opacity;
				t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
			}, CVContextData.prototype.fill = function(e) {
				this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
			}, CVContextData.prototype.fillRect = function(e, t, r, n) {
				this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, n)
			}, CVContextData.prototype.stroke = function() {
				this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
			}, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
				var e, t = this.canvasContext;
				for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
			}, CVCompElement.prototype.destroy = function() {
				var e;
				for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
				this.layers = null, this.elements = null
			}, CVCompElement.prototype.createComp = function(e) {
				return new CVCompElement(e, this.globalData, this)
			}, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
				return new CVCompElement(e, this.globalData, this)
			}, HBaseElement.prototype = {
				checkBlendMode: function() {},
				initRendererElement: function() {
					this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
				},
				createContainerElements: function() {
					this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
				},
				renderElement: function() {
					var e = this.transformedElement ? this.transformedElement.style : {};
					if (this.finalTransform._matMdf) {
						var t = this.finalTransform.mat.toCSS();
						e.transform = t, e.webkitTransform = t
					}
					this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
				},
				renderFrame: function() {
					this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
				},
				destroy: function() {
					this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
				},
				createRenderableComponents: function() {
					this.maskManager = new MaskElement(this.data, this, this.globalData)
				},
				addEffects: function() {},
				setMatte: function() {}
			}, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
				var e;
				this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
			}, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
				var e;
				if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
				else {
					e = createNS("svg");
					var t = this.comp.data ? this.comp.data : this.globalData.compSize;
					e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
				}
				this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
			}, HShapeElement.prototype.getTransformedPoint = function(e, t) {
				var r, n = e.length;
				for (r = 0; r < n; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
				return t
			}, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
				var r, n, i, a, s, o = e.sh.v,
					l = e.transformers,
					f = o._length;
				if (!(f <= 1)) {
					for (r = 0; r < f - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, a, s, t);
					o.c && (n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, i, a, s, t))
				}
			}, HShapeElement.prototype.checkBounds = function(e, t, r, n, i) {
				this.getBoundsOfCurve(e, t, r, n);
				var a = this.shapeBoundingBox;
				i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax)
			}, HShapeElement.prototype.shapeBoundingBox = {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}, HShapeElement.prototype.tempBoundingBox = {
				x: 0,
				xMax: 0,
				y: 0,
				yMax: 0,
				width: 0,
				height: 0
			}, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, n) {
				for (var i, a, s, o, l, f, u, c = [
						[e[0], n[0]],
						[e[1], n[1]]
					], v = 0; v < 2; ++v) a = 6 * e[v] - 12 * t[v] + 6 * r[v], i = -3 * e[v] + 9 * t[v] - 9 * r[v] + 3 * n[v], s = 3 * t[v] - 3 * e[v], a |= 0, s |= 0, (i |= 0) === 0 && a === 0 || (i === 0 ? (o = -s / a) > 0 && o < 1 && c[v].push(this.calculateF(o, e, t, r, n, v)) : (l = a * a - 4 * s * i) >= 0 && ((f = (-a + bmSqrt(l)) / (2 * i)) > 0 && f < 1 && c[v].push(this.calculateF(f, e, t, r, n, v)), (u = (-a - bmSqrt(l)) / (2 * i)) > 0 && u < 1 && c[v].push(this.calculateF(u, e, t, r, n, v))));
				this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
			}, HShapeElement.prototype.calculateF = function(e, t, r, n, i, a) {
				return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * n[a] + bmPow(e, 3) * i[a]
			}, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
				var r, n = e.length;
				for (r = 0; r < n; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
			}, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
				var r = 0;
				if (e.keyframes) {
					for (var n = 0; n < e.keyframes.length; n += 1) {
						var i = e.keyframes[n].s;
						i > r && (r = i)
					}
					r *= e.mult
				} else r = e.v * e.mult;
				t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
			}, HShapeElement.prototype.currentBoxContains = function(e) {
				return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
			}, HShapeElement.prototype.renderInnerContent = function() {
				if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
					var e = this.tempBoundingBox,
						t = 999999;
					if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
					var r = !1;
					if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
						this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
						var n = this.shapeCont.style,
							i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
						n.transform = i, n.webkitTransform = i
					}
				}
			}, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
				if (this.isMasked = this.checkMasks(), this.isMasked) {
					this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
					var e = createNS("g");
					this.maskedElement.appendChild(e), this.innerElem = e
				} else this.renderType = "html", this.innerElem = this.layerElement;
				this.checkParenting()
			}, HTextElement.prototype.buildNewText = function() {
				var e = this.textProperty.currentData;
				this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
				var t = this.innerElem.style,
					r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
				t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
				var n, i, a = this.globalData.fontManager.getFontByName(e.f);
				if (!this.globalData.fontManager.chars)
					if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
					else {
						t.fontFamily = a.fFamily;
						var s = e.fWeight,
							o = e.fStyle;
						t.fontStyle = o, t.fontWeight = s
					} var l, f, u, c = e.l;
				i = c.length;
				var v, d = this.mHelper,
					p = "",
					m = 0;
				for (n = 0; n < i; n += 1) {
					if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? u = (f = this.textSpans[m]).children[0] : ((f = createTag("div")).style.lineHeight = 0, (u = createNS("svg")).appendChild(l), styleDiv(f)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (f = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(f = createTag("span")), styleDiv(l = createTag("span")), f.appendChild(l)), this.globalData.fontManager.chars) {
						var h, g = this.globalData.fontManager.getCharData(e.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
						if (h = g ? g.data : null, d.reset(), h && h.shapes && h.shapes.length && (v = h.shapes[0].it, d.scale(e.finalSize / 100, e.finalSize / 100), p = this.createPathShape(d, v), l.setAttribute("d", p)), this.isMasked) this.innerElem.appendChild(l);
						else {
							if (this.innerElem.appendChild(f), h && h.shapes) {
								document.body.appendChild(u);
								var y = u.getBBox();
								u.setAttribute("width", y.width + 2), u.setAttribute("height", y.height + 2), u.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
								var _ = u.style,
									b = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
								_.transform = b, _.webkitTransform = b, c[n].yOffset = y.y - 1
							} else u.setAttribute("width", 1), u.setAttribute("height", 1);
							f.appendChild(u)
						}
					} else if (l.textContent = c[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
					else {
						this.innerElem.appendChild(f);
						var S = l.style,
							x = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
						S.transform = x, S.webkitTransform = x
					}
					this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = f, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
				}
				for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
			}, HTextElement.prototype.renderInnerContent = function() {
				var e;
				if (this.validateText(), this.data.singleShape) {
					if (!this._isFirstFrame && !this.lettersChangedFlag) return;
					if (this.isMasked && this.finalTransform._matMdf) {
						this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
						var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
						e.transform = t, e.webkitTransform = t
					}
				}
				if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
					var r, n, i, a, s, o = 0,
						l = this.textAnimator.renderedLetters,
						f = this.textProperty.currentData.l;
					for (n = f.length, r = 0; r < n; r += 1) f[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], i = l[o], o += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
					if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
						var u = this.innerElem.getBBox();
						if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.svgElement.setAttribute("width", u.width)), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.svgElement.setAttribute("height", u.height)), this.currentBBox.w !== u.width + 2 || this.currentBBox.h !== u.height + 2 || this.currentBBox.x !== u.x - 1 || this.currentBBox.y !== u.y - 1) {
							this.currentBBox.w = u.width + 2, this.currentBBox.h = u.height + 2, this.currentBBox.x = u.x - 1, this.currentBBox.y = u.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
							var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
							e.transform = c, e.webkitTransform = c
						}
					}
				}
			}, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
				var e, t, r, n, i = this.comp.threeDElements.length;
				for (e = 0; e < i; e += 1)
					if ((t = this.comp.threeDElements[e]).type === "3d") {
						r = t.perspectiveElem.style, n = t.container.style;
						var a = this.pe.v + "px",
							s = "0px 0px 0px",
							o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
						r.perspective = a, r.webkitPerspective = a, n.transformOrigin = s, n.mozTransformOrigin = s, n.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
					}
			}, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
				var e, t, r = this._isFirstFrame;
				if (this.hierarchy)
					for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
				if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
					if (this.mat.reset(), this.hierarchy)
						for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
							var n = this.hierarchy[e].finalTransform.mProp;
							this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
						}
					if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
						var i;
						i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
						var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
							s = [i[0] / a, i[1] / a, i[2] / a],
							o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
							l = Math.atan2(s[1], o),
							f = Math.atan2(s[0], -s[2]);
						this.mat.rotateY(f).rotateX(-l)
					}
					this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
					var u = !this._prevMat.equals(this.mat);
					if ((u || this.pe._mdf) && this.comp.threeDElements) {
						var c, v, d;
						for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
							if ((c = this.comp.threeDElements[e]).type === "3d") {
								if (u) {
									var p = this.mat.toCSS();
									(d = c.container.style).transform = p, d.webkitTransform = p
								}
								this.pe._mdf && ((v = c.perspectiveElem.style).perspective = this.pe.v + "px", v.webkitPerspective = this.pe.v + "px")
							} this.mat.clone(this._prevMat)
					}
				}
				this._isFirstFrame = !1
			}, HCameraElement.prototype.prepareFrame = function(e) {
				this.prepareProperties(e, !0)
			}, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
				return null
			}, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
				var e = this.globalData.getAssetsPath(this.assetData),
					t = new Image;
				this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
			}, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
				for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
			}, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
				var r = e.getBaseElement();
				if (r) {
					var n = this.layers[t];
					if (n.ddd && this.supports3d) this.addTo3dContainer(r, t);
					else if (this.threeDElements) this.addTo3dContainer(r, t);
					else {
						for (var i, a, s = 0; s < t;) this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
						i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
					}
				}
			}, HybridRendererBase.prototype.createShape = function(e) {
				return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
			}, HybridRendererBase.prototype.createText = function(e) {
				return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
			}, HybridRendererBase.prototype.createCamera = function(e) {
				return this.camera = new HCameraElement(e, this.globalData, this), this.camera
			}, HybridRendererBase.prototype.createImage = function(e) {
				return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
			}, HybridRendererBase.prototype.createSolid = function(e) {
				return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
			}, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
				for (var t = 0, r = this.threeDElements.length; t < r;) {
					if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
					t += 1
				}
				return null
			}, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
				var r, n, i = createTag("div");
				styleDiv(i);
				var a = createTag("div");
				if (styleDiv(a), t === "3d") {
					(r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
					var s = "50% 50%";
					r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
					var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
					(n = a.style).transform = o, n.webkitTransform = o
				}
				i.appendChild(a);
				var l = {
					container: a,
					perspectiveElem: i,
					startPos: e,
					endPos: e,
					type: t
				};
				return this.threeDElements.push(l), l
			}, HybridRendererBase.prototype.build3dContainers = function() {
				var e, t, r = this.layers.length,
					n = "";
				for (e = 0; e < r; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (n !== "3d" && (n = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : (n !== "2d" && (n = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
				for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
			}, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
				for (var r = 0, n = this.threeDElements.length; r < n;) {
					if (t <= this.threeDElements[r].endPos) {
						for (var i, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
						i ? this.threeDElements[r].container.insertBefore(e, i) : this.threeDElements[r].container.appendChild(e);
						break
					}
					r += 1
				}
			}, HybridRendererBase.prototype.configAnimation = function(e) {
				var t = createTag("div"),
					r = this.animationItem.wrapper,
					n = t.style;
				n.width = e.w + "px", n.height = e.h + "px", this.resizerElem = t, styleDiv(t), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), n.overflow = "hidden";
				var i = createNS("svg");
				i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
				var a = createNS("defs");
				i.appendChild(a), this.data = e, this.setupGlobalData(e, i), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
			}, HybridRendererBase.prototype.destroy = function() {
				var e;
				this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
				var t = this.layers ? this.layers.length : 0;
				for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
				this.elements.length = 0, this.destroyed = !0, this.animationItem = null
			}, HybridRendererBase.prototype.updateContainerSize = function() {
				var e, t, r, n, i = this.animationItem.wrapper.offsetWidth,
					a = this.animationItem.wrapper.offsetHeight,
					s = i / a;
				this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = i / this.globalData.compSize.w, t = i / this.globalData.compSize.w, r = 0, n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, n = 0);
				var o = this.resizerElem.style;
				o.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", o.transform = o.webkitTransform
			}, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
				this.resizerElem.style.display = "none"
			}, HybridRendererBase.prototype.show = function() {
				this.resizerElem.style.display = "block"
			}, HybridRendererBase.prototype.initItems = function() {
				if (this.buildAllItems(), this.camera) this.camera.setup();
				else {
					var e, t = this.globalData.compSize.w,
						r = this.globalData.compSize.h,
						n = this.threeDElements.length;
					for (e = 0; e < n; e += 1) {
						var i = this.threeDElements[e].perspectiveElem.style;
						i.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective
					}
				}
			}, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
				var t, r = e.length,
					n = createTag("div");
				for (t = 0; t < r; t += 1)
					if (e[t].xt) {
						var i = this.createComp(e[t], n, this.globalData.comp, null);
						i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
					}
			}, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
				this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
			}, HCompElement.prototype.addTo3dContainer = function(e, t) {
				for (var r, n = 0; n < t;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
				r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
			}, HCompElement.prototype.createComp = function(e) {
				return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
			}, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
				return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
			};
			var CompExpressionInterface = function(e) {
				function t(r) {
					for (var n = 0, i = e.layers.length; n < i;) {
						if (e.layers[n].nm === r || e.layers[n].ind === r) return e.elements[n].layerInterface;
						n += 1
					}
					return null
				}
				return Object.defineProperty(t, "_name", {
					value: e.data.nm
				}), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
			};

			function _typeof$2(e) {
				return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$2(e)
			}

			function seedRandom(e, t) {
				var r, n = this,
					i = 256,
					a = t.pow(i, 6),
					s = t.pow(2, 52),
					o = 2 * s,
					l = 255;

				function f(p) {
					var m, h = p.length,
						g = this,
						y = 0,
						_ = g.i = g.j = 0,
						b = g.S = [];
					for (h || (p = [h++]); y < i;) b[y] = y++;
					for (y = 0; y < i; y++) b[y] = b[_ = l & _ + p[y % h] + (m = b[y])], b[_] = m;
					g.g = function(S) {
						for (var x, T = 0, P = g.i, D = g.j, w = g.S; S--;) x = w[P = l & P + 1], T = T * i + w[l & (w[P] = w[D = l & D + x]) + (w[D] = x)];
						return g.i = P, g.j = D, T
					}
				}

				function u(p, m) {
					return m.i = p.i, m.j = p.j, m.S = p.S.slice(), m
				}

				function c(p, m) {
					var h, g = [],
						y = _typeof$2(p);
					if (m && y == "object")
						for (h in p) try {
							g.push(c(p[h], m - 1))
						} catch {}
					return g.length ? g : y == "string" ? p : p + "\0"
				}

				function v(p, m) {
					for (var h, g = p + "", y = 0; y < g.length;) m[l & y] = l & (h ^= 19 * m[l & y]) + g.charCodeAt(y++);
					return d(m)
				}

				function d(p) {
					return String.fromCharCode.apply(0, p)
				}
				t.seedrandom = function(p, m, h) {
					var g = [],
						y = v(c((m = m === !0 ? {
							entropy: !0
						} : m || {}).entropy ? [p, d(e)] : p === null ? function() {
							try {
								var S = new Uint8Array(i);
								return (n.crypto || n.msCrypto).getRandomValues(S), d(S)
							} catch {
								var x = n.navigator,
									T = x && x.plugins;
								return [+new Date, n, T, n.screen, d(e)]
							}
						}() : p, 3), g),
						_ = new f(g),
						b = function() {
							for (var S = _.g(6), x = a, T = 0; S < s;) S = (S + T) * i, x *= i, T = _.g(1);
							for (; S >= o;) S /= 2, x /= 2, T >>>= 1;
							return (S + T) / x
						};
					return b.int32 = function() {
						return 0 | _.g(4)
					}, b.quick = function() {
						return _.g(4) / 4294967296
					}, b.double = b, v(d(_.S), e), (m.pass || h || function(S, x, T, P) {
						return P && (P.S && u(P, _), S.state = function() {
							return u(_, {})
						}), T ? (t.random = S, x) : S
					})(b, y, "global" in m ? m.global : this == t, m.state)
				}, v(t.random(), e)
			}

			function initialize$2(e) {
				seedRandom([], e)
			}
			var propTypes = {
				SHAPE: "shape"
			};

			function _typeof$1(e) {
				return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$1(e)
			}
			var ExpressionManager = function() {
					var ob = {},
						Math = BMMath,
						window = null,
						document = null,
						XMLHttpRequest = null,
						fetch = null,
						frames = null,
						_lottieGlobal = {};

					function resetFrame() {
						_lottieGlobal = {}
					}

					function $bm_isInstanceOfArray(e) {
						return e.constructor === Array || e.constructor === Float32Array
					}

					function isNumerable(e, t) {
						return e === "number" || t instanceof Number || e === "boolean" || e === "string"
					}

					function $bm_neg(e) {
						var t = _typeof$1(e);
						if (t === "number" || e instanceof Number || t === "boolean") return -e;
						if ($bm_isInstanceOfArray(e)) {
							var r, n = e.length,
								i = [];
							for (r = 0; r < n; r += 1) i[r] = -e[r];
							return i
						}
						return e.propType ? e.v : -e
					}
					initialize$2(BMMath);
					var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
						easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
						easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

					function sum(e, t) {
						var r = _typeof$1(e),
							n = _typeof$1(t);
						if (isNumerable(r, e) && isNumerable(n, t) || r === "string" || n === "string") return e + t;
						if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] += t, e;
						if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
						if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
							for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? o[i] = e[i] + t[i] : o[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
							return o
						}
						return 0
					}
					var add = sum;

					function sub(e, t) {
						var r = _typeof$1(e),
							n = _typeof$1(t);
						if (isNumerable(r, e) && isNumerable(n, t)) return r === "string" && (e = parseInt(e, 10)), n === "string" && (t = parseInt(t, 10)), e - t;
						if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] -= t, e;
						if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
						if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
							for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? o[i] = e[i] - t[i] : o[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
							return o
						}
						return 0
					}

					function mul(e, t) {
						var r, n, i, a = _typeof$1(e),
							s = _typeof$1(t);
						if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
						if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
							for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] * t;
							return r
						}
						if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
							for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e * t[n];
							return r
						}
						return 0
					}

					function div(e, t) {
						var r, n, i, a = _typeof$1(e),
							s = _typeof$1(t);
						if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
						if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
							for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] / t;
							return r
						}
						if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
							for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e / t[n];
							return r
						}
						return 0
					}

					function mod(e, t) {
						return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t
					}
					var $bm_sum = sum,
						$bm_sub = sub,
						$bm_mul = mul,
						$bm_div = div,
						$bm_mod = mod;

					function clamp(e, t, r) {
						if (t > r) {
							var n = r;
							r = t, t = n
						}
						return Math.min(Math.max(e, t), r)
					}

					function radiansToDegrees(e) {
						return e / degToRads
					}
					var radians_to_degrees = radiansToDegrees;

					function degreesToRadians(e) {
						return e * degToRads
					}
					var degrees_to_radians = radiansToDegrees,
						helperLengthArray = [0, 0, 0, 0, 0, 0];

					function length(e, t) {
						if (typeof e == "number" || e instanceof Number) return t = t || 0, Math.abs(e - t);
						var r;
						t || (t = helperLengthArray);
						var n = Math.min(e.length, t.length),
							i = 0;
						for (r = 0; r < n; r += 1) i += Math.pow(t[r] - e[r], 2);
						return Math.sqrt(i)
					}

					function normalize(e) {
						return div(e, length(e))
					}

					function rgbToHsl(e) {
						var t, r, n = e[0],
							i = e[1],
							a = e[2],
							s = Math.max(n, i, a),
							o = Math.min(n, i, a),
							l = (s + o) / 2;
						if (s === o) t = 0, r = 0;
						else {
							var f = s - o;
							switch (r = l > .5 ? f / (2 - s - o) : f / (s + o), s) {
								case n:
									t = (i - a) / f + (i < a ? 6 : 0);
									break;
								case i:
									t = (a - n) / f + 2;
									break;
								case a:
									t = (n - i) / f + 4
							}
							t /= 6
						}
						return [t, r, l, e[3]]
					}

					function hue2rgb(e, t, r) {
						return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
					}

					function hslToRgb(e) {
						var t, r, n, i = e[0],
							a = e[1],
							s = e[2];
						if (a === 0) t = s, n = s, r = s;
						else {
							var o = s < .5 ? s * (1 + a) : s + a - s * a,
								l = 2 * s - o;
							t = hue2rgb(l, o, i + 1 / 3), r = hue2rgb(l, o, i), n = hue2rgb(l, o, i - 1 / 3)
						}
						return [t, r, n, e[3]]
					}

					function linear(e, t, r, n, i) {
						if (n !== void 0 && i !== void 0 || (n = t, i = r, t = 0, r = 1), r < t) {
							var a = r;
							r = t, t = a
						}
						if (e <= t) return n;
						if (e >= r) return i;
						var s, o = r === t ? 0 : (e - t) / (r - t);
						if (!n.length) return n + (i - n) * o;
						var l = n.length,
							f = createTypedArray("float32", l);
						for (s = 0; s < l; s += 1) f[s] = n[s] + (i[s] - n[s]) * o;
						return f
					}

					function random(e, t) {
						if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
							var r, n = t.length;
							e || (e = createTypedArray("float32", n));
							var i = createTypedArray("float32", n),
								a = BMMath.random();
							for (r = 0; r < n; r += 1) i[r] = e[r] + a * (t[r] - e[r]);
							return i
						}
						return e === void 0 && (e = 0), e + BMMath.random() * (t - e)
					}

					function createPath(e, t, r, n) {
						var i, a = e.length,
							s = shapePool.newElement();
						s.setPathData(!!n, a);
						var o, l, f = [0, 0];
						for (i = 0; i < a; i += 1) o = t && t[i] ? t[i] : f, l = r && r[i] ? r[i] : f, s.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], o[0] + e[i][0], o[1] + e[i][1], i, !0);
						return s
					}

					function initiateExpression(elem, data, property) {
						function noOp(e) {
							return e
						}
						if (!elem.globalData.renderConfig.runExpressions) return noOp;
						var val = data.x,
							needsVelocity = /velocity(?![\w\d])/.test(val),
							_needsRandom = val.indexOf("random") !== -1,
							elemType = elem.data.ty,
							transform, $bm_transform, content, effect, thisProperty = property;
						thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
							get: function() {
								return thisProperty.v
							}
						}), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
						var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
							outPoint = elem.data.op / elem.comp.globalData.frameRate,
							width = elem.data.sw ? elem.data.sw : 0,
							height = elem.data.sh ? elem.data.sh : 0,
							name = elem.data.nm,
							loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
							numKeys = property.kf ? data.k.length : 0,
							active = !this.data || this.data.hd !== !0,
							wiggle = function(e, t) {
								var r, n, i = this.pv.length ? this.pv.length : 1,
									a = createTypedArray("float32", i),
									s = Math.floor(5 * time);
								for (r = 0, n = 0; r < s;) {
									for (n = 0; n < i; n += 1) a[n] += -t + 2 * t * BMMath.random();
									r += 1
								}
								var o = 5 * time,
									l = o - Math.floor(o),
									f = createTypedArray("float32", i);
								if (i > 1) {
									for (n = 0; n < i; n += 1) f[n] = this.pv[n] + a[n] + (-t + 2 * t * BMMath.random()) * l;
									return f
								}
								return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
							}.bind(this);

						function loopInDuration(e, t) {
							return loopIn(e, t, !0)
						}

						function loopOutDuration(e, t) {
							return loopOut(e, t, !0)
						}
						thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
						var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
							time, velocity, value, text, textIndex, textTotal, selectorValue;

						function lookAt(e, t) {
							var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
								n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
							return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
						}

						function easeOut(e, t, r, n, i) {
							return applyEase(easeOutBez, e, t, r, n, i)
						}

						function easeIn(e, t, r, n, i) {
							return applyEase(easeInBez, e, t, r, n, i)
						}

						function ease(e, t, r, n, i) {
							return applyEase(easeInOutBez, e, t, r, n, i)
						}

						function applyEase(e, t, r, n, i, a) {
							i === void 0 ? (i = r, a = n) : t = (t - r) / (n - r), t > 1 ? t = 1 : t < 0 && (t = 0);
							var s = e(t);
							if ($bm_isInstanceOfArray(i)) {
								var o, l = i.length,
									f = createTypedArray("float32", l);
								for (o = 0; o < l; o += 1) f[o] = (a[o] - i[o]) * s + i[o];
								return f
							}
							return (a - i) * s + i
						}

						function nearestKey(e) {
							var t, r, n, i = data.k.length;
							if (data.k.length && typeof data.k[0] != "number")
								if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
								else {
									for (t = 0; t < i - 1; t += 1) {
										if (e === data.k[t].t) {
											r = t + 1, n = data.k[t].t;
											break
										}
										if (e > data.k[t].t && e < data.k[t + 1].t) {
											e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, n = data.k[t + 1].t) : (r = t + 1, n = data.k[t].t);
											break
										}
									}
									r === -1 && (r = t + 1, n = data.k[t].t)
								}
							else r = 0, n = 0;
							var a = {};
							return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
						}

						function key(e) {
							var t, r, n;
							if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + e);
							e -= 1, t = {
								time: data.k[e].t / elem.comp.globalData.frameRate,
								value: []
							};
							var i = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
							for (n = i.length, r = 0; r < n; r += 1) t[r] = i[r], t.value[r] = i[r];
							return t
						}

						function framesToTime(e, t) {
							return t || (t = elem.comp.globalData.frameRate), e / t
						}

						function timeToFrames(e, t) {
							return e || e === 0 || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
						}

						function seedRandom(e) {
							BMMath.seedrandom(randSeed + e)
						}

						function sourceRectAtTime() {
							return elem.sourceRectAtTime()
						}

						function substring(e, t) {
							return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : ""
						}

						function substr(e, t) {
							return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : ""
						}

						function posterizeTime(e) {
							time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
						}
						var index = elem.data.ind,
							hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
							parent, randSeed = Math.floor(1e6 * Math.random()),
							globalData = elem.globalData;

						function executeExpression(e) {
							return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
						}
						return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
					}
					return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
				}(),
				Expressions = function() {
					var e = {};
					return e.initExpressions = function(t) {
						var r = 0,
							n = [];
						t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
							r += 1
						}, t.renderer.globalData.popExpression = function() {
							(r -= 1) == 0 && function() {
								var i, a = n.length;
								for (i = 0; i < a; i += 1) n[i].release();
								n.length = 0
							}()
						}, t.renderer.globalData.registerExpressionProperty = function(i) {
							n.indexOf(i) === -1 && n.push(i)
						}
					}, e.resetFrame = ExpressionManager.resetFrame, e
				}(),
				MaskManagerInterface = function() {
					function e(t, r) {
						this._mask = t, this._data = r
					}
					return Object.defineProperty(e.prototype, "maskPath", {
							get: function() {
								return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
							}
						}), Object.defineProperty(e.prototype, "maskOpacity", {
							get: function() {
								return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
							}
						}),
						function(t) {
							var r, n = createSizedArray(t.viewData.length),
								i = t.viewData.length;
							for (r = 0; r < i; r += 1) n[r] = new e(t.viewData[r], t.masksProperties[r]);
							return function(a) {
								for (r = 0; r < i;) {
									if (t.masksProperties[r].nm === a) return n[r];
									r += 1
								}
								return null
							}
						}
				}(),
				ExpressionPropertyInterface = function() {
					var e = {
							pv: 0,
							v: 0,
							mult: 1
						},
						t = {
							pv: [0, 0, 0],
							v: [0, 0, 0],
							mult: 1
						};

					function r(i, a, s) {
						Object.defineProperty(i, "velocity", {
							get: function() {
								return a.getVelocityAtTime(a.comp.currentFrame)
							}
						}), i.numKeys = a.keyframes ? a.keyframes.length : 0, i.key = function(o) {
							if (!i.numKeys) return 0;
							var l = "";
							l = "s" in a.keyframes[o - 1] ? a.keyframes[o - 1].s : "e" in a.keyframes[o - 2] ? a.keyframes[o - 2].e : a.keyframes[o - 2].s;
							var f = s === "unidimensional" ? new Number(l) : Object.assign({}, l);
							return f.time = a.keyframes[o - 1].t / a.elem.comp.globalData.frameRate, f.value = s === "unidimensional" ? l[0] : l, f
						}, i.valueAtTime = a.getValueAtTime, i.speedAtTime = a.getSpeedAtTime, i.velocityAtTime = a.getVelocityAtTime, i.propertyGroup = a.propertyGroup
					}

					function n() {
						return e
					}
					return function(i) {
						return i ? i.propType === "unidimensional" ? function(a) {
							a && "pv" in a || (a = e);
							var s = 1 / a.mult,
								o = a.pv * s,
								l = new Number(o);
							return l.value = o, r(l, a, "unidimensional"),
								function() {
									return a.k && a.getValue(), o = a.v * s, l.value !== o && ((l = new Number(o)).value = o, r(l, a, "unidimensional")), l
								}
						}(i) : function(a) {
							a && "pv" in a || (a = t);
							var s = 1 / a.mult,
								o = a.data && a.data.l || a.pv.length,
								l = createTypedArray("float32", o),
								f = createTypedArray("float32", o);
							return l.value = f, r(l, a, "multidimensional"),
								function() {
									a.k && a.getValue();
									for (var u = 0; u < o; u += 1) f[u] = a.v[u] * s, l[u] = f[u];
									return l
								}
						}(i) : n
					}
				}(),
				TransformExpressionInterface = function(e) {
					function t(s) {
						switch (s) {
							case "scale":
							case "Scale":
							case "ADBE Scale":
							case 6:
								return t.scale;
							case "rotation":
							case "Rotation":
							case "ADBE Rotation":
							case "ADBE Rotate Z":
							case 10:
								return t.rotation;
							case "ADBE Rotate X":
								return t.xRotation;
							case "ADBE Rotate Y":
								return t.yRotation;
							case "position":
							case "Position":
							case "ADBE Position":
							case 2:
								return t.position;
							case "ADBE Position_0":
								return t.xPosition;
							case "ADBE Position_1":
								return t.yPosition;
							case "ADBE Position_2":
								return t.zPosition;
							case "anchorPoint":
							case "AnchorPoint":
							case "Anchor Point":
							case "ADBE AnchorPoint":
							case 1:
								return t.anchorPoint;
							case "opacity":
							case "Opacity":
							case 11:
								return t.opacity;
							default:
								return null
						}
					}
					var r, n, i, a;
					return Object.defineProperty(t, "rotation", {
						get: ExpressionPropertyInterface(e.r || e.rz)
					}), Object.defineProperty(t, "zRotation", {
						get: ExpressionPropertyInterface(e.rz || e.r)
					}), Object.defineProperty(t, "xRotation", {
						get: ExpressionPropertyInterface(e.rx)
					}), Object.defineProperty(t, "yRotation", {
						get: ExpressionPropertyInterface(e.ry)
					}), Object.defineProperty(t, "scale", {
						get: ExpressionPropertyInterface(e.s)
					}), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), n = ExpressionPropertyInterface(e.py), e.pz && (i = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
						get: function() {
							return e.p ? a() : [r(), n(), i ? i() : 0]
						}
					}), Object.defineProperty(t, "xPosition", {
						get: ExpressionPropertyInterface(e.px)
					}), Object.defineProperty(t, "yPosition", {
						get: ExpressionPropertyInterface(e.py)
					}), Object.defineProperty(t, "zPosition", {
						get: ExpressionPropertyInterface(e.pz)
					}), Object.defineProperty(t, "anchorPoint", {
						get: ExpressionPropertyInterface(e.a)
					}), Object.defineProperty(t, "opacity", {
						get: ExpressionPropertyInterface(e.o)
					}), Object.defineProperty(t, "skew", {
						get: ExpressionPropertyInterface(e.sk)
					}), Object.defineProperty(t, "skewAxis", {
						get: ExpressionPropertyInterface(e.sa)
					}), Object.defineProperty(t, "orientation", {
						get: ExpressionPropertyInterface(e.or)
					}), t
				},
				LayerExpressionInterface = function() {
					function e(f) {
						var u = new Matrix;
						return f !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(f).clone(u) : this._elem.finalTransform.mProp.applyToMatrix(u), u
					}

					function t(f, u) {
						var c = this.getMatrix(u);
						return c.props[12] = 0, c.props[13] = 0, c.props[14] = 0, this.applyPoint(c, f)
					}

					function r(f, u) {
						var c = this.getMatrix(u);
						return this.applyPoint(c, f)
					}

					function n(f, u) {
						var c = this.getMatrix(u);
						return c.props[12] = 0, c.props[13] = 0, c.props[14] = 0, this.invertPoint(c, f)
					}

					function i(f, u) {
						var c = this.getMatrix(u);
						return this.invertPoint(c, f)
					}

					function a(f, u) {
						if (this._elem.hierarchy && this._elem.hierarchy.length) {
							var c, v = this._elem.hierarchy.length;
							for (c = 0; c < v; c += 1) this._elem.hierarchy[c].finalTransform.mProp.applyToMatrix(f)
						}
						return f.applyToPointArray(u[0], u[1], u[2] || 0)
					}

					function s(f, u) {
						if (this._elem.hierarchy && this._elem.hierarchy.length) {
							var c, v = this._elem.hierarchy.length;
							for (c = 0; c < v; c += 1) this._elem.hierarchy[c].finalTransform.mProp.applyToMatrix(f)
						}
						return f.inversePoint(u)
					}

					function o(f) {
						var u = new Matrix;
						if (u.reset(), this._elem.finalTransform.mProp.applyToMatrix(u), this._elem.hierarchy && this._elem.hierarchy.length) {
							var c, v = this._elem.hierarchy.length;
							for (c = 0; c < v; c += 1) this._elem.hierarchy[c].finalTransform.mProp.applyToMatrix(u);
							return u.inversePoint(f)
						}
						return u.inversePoint(f)
					}

					function l() {
						return [1, 1, 1, 1]
					}
					return function(f) {
						var u;

						function c(d) {
							switch (d) {
								case "ADBE Root Vectors Group":
								case "Contents":
								case 2:
									return c.shapeInterface;
								case 1:
								case 6:
								case "Transform":
								case "transform":
								case "ADBE Transform Group":
									return u;
								case 4:
								case "ADBE Effect Parade":
								case "effects":
								case "Effects":
									return c.effect;
								case "ADBE Text Properties":
									return c.textInterface;
								default:
									return null
							}
						}
						c.getMatrix = e, c.invertPoint = s, c.applyPoint = a, c.toWorld = r, c.toWorldVec = t, c.fromWorld = i, c.fromWorldVec = n, c.toComp = r, c.fromComp = o, c.sampleImage = l, c.sourceRectAtTime = f.sourceRectAtTime.bind(f), c._elem = f;
						var v = getDescriptor(u = TransformExpressionInterface(f.finalTransform.mProp), "anchorPoint");
						return Object.defineProperties(c, {
							hasParent: {
								get: function() {
									return f.hierarchy.length
								}
							},
							parent: {
								get: function() {
									return f.hierarchy[0].layerInterface
								}
							},
							rotation: getDescriptor(u, "rotation"),
							scale: getDescriptor(u, "scale"),
							position: getDescriptor(u, "position"),
							opacity: getDescriptor(u, "opacity"),
							anchorPoint: v,
							anchor_point: v,
							transform: {
								get: function() {
									return u
								}
							},
							active: {
								get: function() {
									return f.isInRange
								}
							}
						}), c.startTime = f.data.st, c.index = f.data.ind, c.source = f.data.refId, c.height = f.data.ty === 0 ? f.data.h : 100, c.width = f.data.ty === 0 ? f.data.w : 100, c.inPoint = f.data.ip / f.comp.globalData.frameRate, c.outPoint = f.data.op / f.comp.globalData.frameRate, c._name = f.data.nm, c.registerMaskInterface = function(d) {
							c.mask = new MaskManagerInterface(d, f)
						}, c.registerEffectsInterface = function(d) {
							c.effect = d
						}, c
					}
				}(),
				propertyGroupFactory = function(e, t) {
					return function(r) {
						return (r = r === void 0 ? 1 : r) <= 0 ? e : t(r - 1)
					}
				},
				PropertyInterface = function(e, t) {
					var r = {
						_name: e
					};
					return function(n) {
						return (n = n === void 0 ? 1 : n) <= 0 ? r : t(n - 1)
					}
				},
				EffectsExpressionInterface = function() {
					function e(r, n, i, a) {
						function s(c) {
							for (var v = r.ef, d = 0, p = v.length; d < p;) {
								if (c === v[d].nm || c === v[d].mn || c === v[d].ix) return v[d].ty === 5 ? f[d] : f[d]();
								d += 1
							}
							throw new Error
						}
						var o, l = propertyGroupFactory(s, i),
							f = [],
							u = r.ef.length;
						for (o = 0; o < u; o += 1) r.ef[o].ty === 5 ? f.push(e(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, a)) : f.push(t(n.effectElements[o], r.ef[o].ty, a, l));
						return r.mn === "ADBE Color Control" && Object.defineProperty(s, "color", {
							get: function() {
								return f[0]()
							}
						}), Object.defineProperties(s, {
							numProperties: {
								get: function() {
									return r.np
								}
							},
							_name: {
								value: r.nm
							},
							propertyGroup: {
								value: l
							}
						}), s.enabled = r.en !== 0, s.active = s.enabled, s
					}

					function t(r, n, i, a) {
						var s = ExpressionPropertyInterface(r.p);
						return r.p.setGroupProperty && r.p.setGroupProperty(PropertyInterface("", a)),
							function() {
								return n === 10 ? i.comp.compInterface(r.p.v) : s()
							}
					}
					return {
						createEffectsInterface: function(r, n) {
							if (r.effectsManager) {
								var i, a = [],
									s = r.data.ef,
									o = r.effectsManager.effectElements.length;
								for (i = 0; i < o; i += 1) a.push(e(s[i], r.effectsManager.effectElements[i], n, r));
								var l = r.data.ef || [],
									f = function(u) {
										for (i = 0, o = l.length; i < o;) {
											if (u === l[i].nm || u === l[i].mn || u === l[i].ix) return a[i];
											i += 1
										}
										return null
									};
								return Object.defineProperty(f, "numProperties", {
									get: function() {
										return l.length
									}
								}), f
							}
							return null
						}
					}
				}(),
				ShapePathInterface = function(e, t, r) {
					var n = t.sh;

					function i(s) {
						return s === "Shape" || s === "shape" || s === "Path" || s === "path" || s === "ADBE Vector Shape" || s === 2 ? i.path : null
					}
					var a = propertyGroupFactory(i, r);
					return n.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
						path: {
							get: function() {
								return n.k && n.getValue(), n
							}
						},
						shape: {
							get: function() {
								return n.k && n.getValue(), n
							}
						},
						_name: {
							value: e.nm
						},
						ix: {
							value: e.ix
						},
						propertyIndex: {
							value: e.ix
						},
						mn: {
							value: e.mn
						},
						propertyGroup: {
							value: r
						}
					}), i
				},
				ShapeExpressionInterface = function() {
					function e(d, p, m) {
						var h, g = [],
							y = d ? d.length : 0;
						for (h = 0; h < y; h += 1) d[h].ty === "gr" ? g.push(t(d[h], p[h], m)) : d[h].ty === "fl" ? g.push(r(d[h], p[h], m)) : d[h].ty === "st" ? g.push(a(d[h], p[h], m)) : d[h].ty === "tm" ? g.push(s(d[h], p[h], m)) : d[h].ty === "tr" || (d[h].ty === "el" ? g.push(l(d[h], p[h], m)) : d[h].ty === "sr" ? g.push(f(d[h], p[h], m)) : d[h].ty === "sh" ? g.push(ShapePathInterface(d[h], p[h], m)) : d[h].ty === "rc" ? g.push(u(d[h], p[h], m)) : d[h].ty === "rd" ? g.push(c(d[h], p[h], m)) : d[h].ty === "rp" ? g.push(v(d[h], p[h], m)) : d[h].ty === "gf" ? g.push(n(d[h], p[h], m)) : g.push(i(d[h], p[h])));
						return g
					}

					function t(d, p, m) {
						var h = function(_) {
							switch (_) {
								case "ADBE Vectors Group":
								case "Contents":
								case 2:
									return h.content;
								default:
									return h.transform
							}
						};
						h.propertyGroup = propertyGroupFactory(h, m);
						var g = function(_, b, S) {
								var x, T = function(D) {
									for (var w = 0, C = x.length; w < C;) {
										if (x[w]._name === D || x[w].mn === D || x[w].propertyIndex === D || x[w].ix === D || x[w].ind === D) return x[w];
										w += 1
									}
									return typeof D == "number" ? x[D - 1] : null
								};
								T.propertyGroup = propertyGroupFactory(T, S), x = e(_.it, b.it, T.propertyGroup), T.numProperties = x.length;
								var P = o(_.it[_.it.length - 1], b.it[b.it.length - 1], T.propertyGroup);
								return T.transform = P, T.propertyIndex = _.cix, T._name = _.nm, T
							}(d, p, h.propertyGroup),
							y = o(d.it[d.it.length - 1], p.it[p.it.length - 1], h.propertyGroup);
						return h.content = g, h.transform = y, Object.defineProperty(h, "_name", {
							get: function() {
								return d.nm
							}
						}), h.numProperties = d.np, h.propertyIndex = d.ix, h.nm = d.nm, h.mn = d.mn, h
					}

					function r(d, p, m) {
						function h(g) {
							return g === "Color" || g === "color" ? h.color : g === "Opacity" || g === "opacity" ? h.opacity : null
						}
						return Object.defineProperties(h, {
							color: {
								get: ExpressionPropertyInterface(p.c)
							},
							opacity: {
								get: ExpressionPropertyInterface(p.o)
							},
							_name: {
								value: d.nm
							},
							mn: {
								value: d.mn
							}
						}), p.c.setGroupProperty(PropertyInterface("Color", m)), p.o.setGroupProperty(PropertyInterface("Opacity", m)), h
					}

					function n(d, p, m) {
						function h(g) {
							return g === "Start Point" || g === "start point" ? h.startPoint : g === "End Point" || g === "end point" ? h.endPoint : g === "Opacity" || g === "opacity" ? h.opacity : null
						}
						return Object.defineProperties(h, {
							startPoint: {
								get: ExpressionPropertyInterface(p.s)
							},
							endPoint: {
								get: ExpressionPropertyInterface(p.e)
							},
							opacity: {
								get: ExpressionPropertyInterface(p.o)
							},
							type: {
								get: function() {
									return "a"
								}
							},
							_name: {
								value: d.nm
							},
							mn: {
								value: d.mn
							}
						}), p.s.setGroupProperty(PropertyInterface("Start Point", m)), p.e.setGroupProperty(PropertyInterface("End Point", m)), p.o.setGroupProperty(PropertyInterface("Opacity", m)), h
					}

					function i() {
						return function() {
							return null
						}
					}

					function a(d, p, m) {
						var h, g = propertyGroupFactory(x, m),
							y = propertyGroupFactory(S, g);

						function _(T) {
							Object.defineProperty(S, d.d[T].nm, {
								get: ExpressionPropertyInterface(p.d.dataProps[T].p)
							})
						}
						var b = d.d ? d.d.length : 0,
							S = {};
						for (h = 0; h < b; h += 1) _(h), p.d.dataProps[h].p.setGroupProperty(y);

						function x(T) {
							return T === "Color" || T === "color" ? x.color : T === "Opacity" || T === "opacity" ? x.opacity : T === "Stroke Width" || T === "stroke width" ? x.strokeWidth : null
						}
						return Object.defineProperties(x, {
							color: {
								get: ExpressionPropertyInterface(p.c)
							},
							opacity: {
								get: ExpressionPropertyInterface(p.o)
							},
							strokeWidth: {
								get: ExpressionPropertyInterface(p.w)
							},
							dash: {
								get: function() {
									return S
								}
							},
							_name: {
								value: d.nm
							},
							mn: {
								value: d.mn
							}
						}), p.c.setGroupProperty(PropertyInterface("Color", g)), p.o.setGroupProperty(PropertyInterface("Opacity", g)), p.w.setGroupProperty(PropertyInterface("Stroke Width", g)), x
					}

					function s(d, p, m) {
						function h(y) {
							return y === d.e.ix || y === "End" || y === "end" ? h.end : y === d.s.ix ? h.start : y === d.o.ix ? h.offset : null
						}
						var g = propertyGroupFactory(h, m);
						return h.propertyIndex = d.ix, p.s.setGroupProperty(PropertyInterface("Start", g)), p.e.setGroupProperty(PropertyInterface("End", g)), p.o.setGroupProperty(PropertyInterface("Offset", g)), h.propertyIndex = d.ix, h.propertyGroup = m, Object.defineProperties(h, {
							start: {
								get: ExpressionPropertyInterface(p.s)
							},
							end: {
								get: ExpressionPropertyInterface(p.e)
							},
							offset: {
								get: ExpressionPropertyInterface(p.o)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}

					function o(d, p, m) {
						function h(y) {
							return d.a.ix === y || y === "Anchor Point" ? h.anchorPoint : d.o.ix === y || y === "Opacity" ? h.opacity : d.p.ix === y || y === "Position" ? h.position : d.r.ix === y || y === "Rotation" || y === "ADBE Vector Rotation" ? h.rotation : d.s.ix === y || y === "Scale" ? h.scale : d.sk && d.sk.ix === y || y === "Skew" ? h.skew : d.sa && d.sa.ix === y || y === "Skew Axis" ? h.skewAxis : null
						}
						var g = propertyGroupFactory(h, m);
						return p.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", g)), p.transform.mProps.p.setGroupProperty(PropertyInterface("Position", g)), p.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", g)), p.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", g)), p.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", g)), p.transform.mProps.sk && (p.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", g)), p.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", g))), p.transform.op.setGroupProperty(PropertyInterface("Opacity", g)), Object.defineProperties(h, {
							opacity: {
								get: ExpressionPropertyInterface(p.transform.mProps.o)
							},
							position: {
								get: ExpressionPropertyInterface(p.transform.mProps.p)
							},
							anchorPoint: {
								get: ExpressionPropertyInterface(p.transform.mProps.a)
							},
							scale: {
								get: ExpressionPropertyInterface(p.transform.mProps.s)
							},
							rotation: {
								get: ExpressionPropertyInterface(p.transform.mProps.r)
							},
							skew: {
								get: ExpressionPropertyInterface(p.transform.mProps.sk)
							},
							skewAxis: {
								get: ExpressionPropertyInterface(p.transform.mProps.sa)
							},
							_name: {
								value: d.nm
							}
						}), h.ty = "tr", h.mn = d.mn, h.propertyGroup = m, h
					}

					function l(d, p, m) {
						function h(_) {
							return d.p.ix === _ ? h.position : d.s.ix === _ ? h.size : null
						}
						var g = propertyGroupFactory(h, m);
						h.propertyIndex = d.ix;
						var y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
						return y.s.setGroupProperty(PropertyInterface("Size", g)), y.p.setGroupProperty(PropertyInterface("Position", g)), Object.defineProperties(h, {
							size: {
								get: ExpressionPropertyInterface(y.s)
							},
							position: {
								get: ExpressionPropertyInterface(y.p)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}

					function f(d, p, m) {
						function h(_) {
							return d.p.ix === _ ? h.position : d.r.ix === _ ? h.rotation : d.pt.ix === _ ? h.points : d.or.ix === _ || _ === "ADBE Vector Star Outer Radius" ? h.outerRadius : d.os.ix === _ ? h.outerRoundness : !d.ir || d.ir.ix !== _ && _ !== "ADBE Vector Star Inner Radius" ? d.is && d.is.ix === _ ? h.innerRoundness : null : h.innerRadius
						}
						var g = propertyGroupFactory(h, m),
							y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
						return h.propertyIndex = d.ix, y.or.setGroupProperty(PropertyInterface("Outer Radius", g)), y.os.setGroupProperty(PropertyInterface("Outer Roundness", g)), y.pt.setGroupProperty(PropertyInterface("Points", g)), y.p.setGroupProperty(PropertyInterface("Position", g)), y.r.setGroupProperty(PropertyInterface("Rotation", g)), d.ir && (y.ir.setGroupProperty(PropertyInterface("Inner Radius", g)), y.is.setGroupProperty(PropertyInterface("Inner Roundness", g))), Object.defineProperties(h, {
							position: {
								get: ExpressionPropertyInterface(y.p)
							},
							rotation: {
								get: ExpressionPropertyInterface(y.r)
							},
							points: {
								get: ExpressionPropertyInterface(y.pt)
							},
							outerRadius: {
								get: ExpressionPropertyInterface(y.or)
							},
							outerRoundness: {
								get: ExpressionPropertyInterface(y.os)
							},
							innerRadius: {
								get: ExpressionPropertyInterface(y.ir)
							},
							innerRoundness: {
								get: ExpressionPropertyInterface(y.is)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}

					function u(d, p, m) {
						function h(_) {
							return d.p.ix === _ ? h.position : d.r.ix === _ ? h.roundness : d.s.ix === _ || _ === "Size" || _ === "ADBE Vector Rect Size" ? h.size : null
						}
						var g = propertyGroupFactory(h, m),
							y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
						return h.propertyIndex = d.ix, y.p.setGroupProperty(PropertyInterface("Position", g)), y.s.setGroupProperty(PropertyInterface("Size", g)), y.r.setGroupProperty(PropertyInterface("Rotation", g)), Object.defineProperties(h, {
							position: {
								get: ExpressionPropertyInterface(y.p)
							},
							roundness: {
								get: ExpressionPropertyInterface(y.r)
							},
							size: {
								get: ExpressionPropertyInterface(y.s)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}

					function c(d, p, m) {
						function h(_) {
							return d.r.ix === _ || _ === "Round Corners 1" ? h.radius : null
						}
						var g = propertyGroupFactory(h, m),
							y = p;
						return h.propertyIndex = d.ix, y.rd.setGroupProperty(PropertyInterface("Radius", g)), Object.defineProperties(h, {
							radius: {
								get: ExpressionPropertyInterface(y.rd)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}

					function v(d, p, m) {
						function h(_) {
							return d.c.ix === _ || _ === "Copies" ? h.copies : d.o.ix === _ || _ === "Offset" ? h.offset : null
						}
						var g = propertyGroupFactory(h, m),
							y = p;
						return h.propertyIndex = d.ix, y.c.setGroupProperty(PropertyInterface("Copies", g)), y.o.setGroupProperty(PropertyInterface("Offset", g)), Object.defineProperties(h, {
							copies: {
								get: ExpressionPropertyInterface(y.c)
							},
							offset: {
								get: ExpressionPropertyInterface(y.o)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}
					return function(d, p, m) {
						var h;

						function g(y) {
							if (typeof y == "number") return (y = y === void 0 ? 1 : y) === 0 ? m : h[y - 1];
							for (var _ = 0, b = h.length; _ < b;) {
								if (h[_]._name === y) return h[_];
								_ += 1
							}
							return null
						}
						return g.propertyGroup = propertyGroupFactory(g, function() {
							return m
						}), h = e(d, p, g.propertyGroup), g.numProperties = h.length, g._name = "Contents", g
					}
				}(),
				TextExpressionInterface = function(e) {
					var t;

					function r(n) {
						return n === "ADBE Text Document" ? r.sourceText : null
					}
					return Object.defineProperty(r, "sourceText", {
						get: function() {
							e.textProperty.getValue();
							var n = e.textProperty.currentData.t;
							return t && n === t.value || ((t = new String(n)).value = n || new String(n), Object.defineProperty(t, "style", {
								get: function() {
									return {
										fillColor: e.textProperty.currentData.fc
									}
								}
							})), t
						}
					}), r
				};

			function _typeof(e) {
				return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof(e)
			}
			var FootageInterface = (dataInterfaceFactory = function(e) {
					function t(r) {
						return r === "Outline" ? t.outlineInterface() : null
					}
					return t._name = "Outline", t.outlineInterface = function(r) {
						var n = "",
							i = r.getFootageData();

						function a(s) {
							if (i[s]) return n = s, _typeof(i = i[s]) === "object" ? a : i;
							var o = s.indexOf(n);
							if (o !== -1) {
								var l = parseInt(s.substr(o + n.length), 10);
								return _typeof(i = i[l]) === "object" ? a : i
							}
							return ""
						}
						return function() {
							return n = "", i = r.getFootageData(), a
						}
					}(e), t
				}, function(e) {
					function t(r) {
						return r === "Data" ? t.dataInterface : null
					}
					return t._name = "Data", t.dataInterface = dataInterfaceFactory(e), t
				}),
				dataInterfaceFactory, interfaces = {
					layer: LayerExpressionInterface,
					effects: EffectsExpressionInterface,
					comp: CompExpressionInterface,
					shape: ShapeExpressionInterface,
					text: TextExpressionInterface,
					footage: FootageInterface
				};

			function getInterface(e) {
				return interfaces[e] || null
			}
			var expressionHelpers = {
				searchExpressions: function(e, t, r) {
					t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
				},
				getSpeedAtTime: function(e) {
					var t = this.getValueAtTime(e),
						r = this.getValueAtTime(e + -.01),
						n = 0;
					if (t.length) {
						var i;
						for (i = 0; i < t.length; i += 1) n += Math.pow(r[i] - t[i], 2);
						n = 100 * Math.sqrt(n)
					} else n = 0;
					return n
				},
				getVelocityAtTime: function(e) {
					if (this.vel !== void 0) return this.vel;
					var t, r, n = -.001,
						i = this.getValueAtTime(e),
						a = this.getValueAtTime(e + n);
					if (i.length)
						for (t = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) t[r] = (a[r] - i[r]) / n;
					else t = (a - i) / n;
					return t
				},
				getValueAtTime: function(e) {
					return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
				},
				getStaticValueAtTime: function() {
					return this.pv
				},
				setGroupProperty: function(e) {
					this.propertyGroup = e
				}
			};

			function addPropertyDecorator() {
				function e(c, v, d) {
					if (!this.k || !this.keyframes) return this.pv;
					c = c ? c.toLowerCase() : "";
					var p, m, h, g, y, _ = this.comp.renderedFrame,
						b = this.keyframes,
						S = b[b.length - 1].t;
					if (_ <= S) return this.pv;
					if (d ? m = S - (p = v ? Math.abs(S - this.elem.comp.globalData.frameRate * v) : Math.max(0, S - this.elem.data.ip)) : ((!v || v > b.length - 1) && (v = b.length - 1), p = S - (m = b[b.length - 1 - v].t)), c === "pingpong") {
						if (Math.floor((_ - m) / p) % 2 != 0) return this.getValueAtTime((p - (_ - m) % p + m) / this.comp.globalData.frameRate, 0)
					} else {
						if (c === "offset") {
							var x = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
								T = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
								P = this.getValueAtTime(((_ - m) % p + m) / this.comp.globalData.frameRate, 0),
								D = Math.floor((_ - m) / p);
							if (this.pv.length) {
								for (g = (y = new Array(x.length)).length, h = 0; h < g; h += 1) y[h] = (T[h] - x[h]) * D + P[h];
								return y
							}
							return (T - x) * D + P
						}
						if (c === "continue") {
							var w = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
								C = this.getValueAtTime((S - .001) / this.comp.globalData.frameRate, 0);
							if (this.pv.length) {
								for (g = (y = new Array(w.length)).length, h = 0; h < g; h += 1) y[h] = w[h] + (w[h] - C[h]) * ((_ - S) / this.comp.globalData.frameRate) / 5e-4;
								return y
							}
							return w + (_ - S) / .001 * (w - C)
						}
					}
					return this.getValueAtTime(((_ - m) % p + m) / this.comp.globalData.frameRate, 0)
				}

				function t(c, v, d) {
					if (!this.k) return this.pv;
					c = c ? c.toLowerCase() : "";
					var p, m, h, g, y, _ = this.comp.renderedFrame,
						b = this.keyframes,
						S = b[0].t;
					if (_ >= S) return this.pv;
					if (d ? m = S + (p = v ? Math.abs(this.elem.comp.globalData.frameRate * v) : Math.max(0, this.elem.data.op - S)) : ((!v || v > b.length - 1) && (v = b.length - 1), p = (m = b[v].t) - S), c === "pingpong") {
						if (Math.floor((S - _) / p) % 2 == 0) return this.getValueAtTime(((S - _) % p + S) / this.comp.globalData.frameRate, 0)
					} else {
						if (c === "offset") {
							var x = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
								T = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
								P = this.getValueAtTime((p - (S - _) % p + S) / this.comp.globalData.frameRate, 0),
								D = Math.floor((S - _) / p) + 1;
							if (this.pv.length) {
								for (g = (y = new Array(x.length)).length, h = 0; h < g; h += 1) y[h] = P[h] - (T[h] - x[h]) * D;
								return y
							}
							return P - (T - x) * D
						}
						if (c === "continue") {
							var w = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
								C = this.getValueAtTime((S + .001) / this.comp.globalData.frameRate, 0);
							if (this.pv.length) {
								for (g = (y = new Array(w.length)).length, h = 0; h < g; h += 1) y[h] = w[h] + (w[h] - C[h]) * (S - _) / .001;
								return y
							}
							return w + (w - C) * (S - _) / .001
						}
					}
					return this.getValueAtTime((p - ((S - _) % p + S)) / this.comp.globalData.frameRate, 0)
				}

				function r(c, v) {
					if (!this.k) return this.pv;
					if (c = .5 * (c || .4), (v = Math.floor(v || 5)) <= 1) return this.pv;
					var d, p, m = this.comp.renderedFrame / this.comp.globalData.frameRate,
						h = m - c,
						g = v > 1 ? (m + c - h) / (v - 1) : 1,
						y = 0,
						_ = 0;
					for (d = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; y < v;) {
						if (p = this.getValueAtTime(h + y * g), this.pv.length)
							for (_ = 0; _ < this.pv.length; _ += 1) d[_] += p[_];
						else d += p;
						y += 1
					}
					if (this.pv.length)
						for (_ = 0; _ < this.pv.length; _ += 1) d[_] /= v;
					else d /= v;
					return d
				}

				function n(c) {
					this._transformCachingAtTime || (this._transformCachingAtTime = {
						v: new Matrix
					});
					var v = this._transformCachingAtTime.v;
					if (v.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
						var d = this.a.getValueAtTime(c);
						v.translate(-d[0] * this.a.mult, -d[1] * this.a.mult, d[2] * this.a.mult)
					}
					if (this.appliedTransformations < 2) {
						var p = this.s.getValueAtTime(c);
						v.scale(p[0] * this.s.mult, p[1] * this.s.mult, p[2] * this.s.mult)
					}
					if (this.sk && this.appliedTransformations < 3) {
						var m = this.sk.getValueAtTime(c),
							h = this.sa.getValueAtTime(c);
						v.skewFromAxis(-m * this.sk.mult, h * this.sa.mult)
					}
					if (this.r && this.appliedTransformations < 4) {
						var g = this.r.getValueAtTime(c);
						v.rotate(-g * this.r.mult)
					} else if (!this.r && this.appliedTransformations < 4) {
						var y = this.rz.getValueAtTime(c),
							_ = this.ry.getValueAtTime(c),
							b = this.rx.getValueAtTime(c),
							S = this.or.getValueAtTime(c);
						v.rotateZ(-y * this.rz.mult).rotateY(_ * this.ry.mult).rotateX(b * this.rx.mult).rotateZ(-S[2] * this.or.mult).rotateY(S[1] * this.or.mult).rotateX(S[0] * this.or.mult)
					}
					if (this.data.p && this.data.p.s) {
						var x = this.px.getValueAtTime(c),
							T = this.py.getValueAtTime(c);
						if (this.data.p.z) {
							var P = this.pz.getValueAtTime(c);
							v.translate(x * this.px.mult, T * this.py.mult, -P * this.pz.mult)
						} else v.translate(x * this.px.mult, T * this.py.mult, 0)
					} else {
						var D = this.p.getValueAtTime(c);
						v.translate(D[0] * this.p.mult, D[1] * this.p.mult, -D[2] * this.p.mult)
					}
					return v
				}

				function i() {
					return this.v.clone(new Matrix)
				}
				var a = TransformPropertyFactory.getTransformProperty;
				TransformPropertyFactory.getTransformProperty = function(c, v, d) {
					var p = a(c, v, d);
					return p.dynamicProperties.length ? p.getValueAtTime = n.bind(p) : p.getValueAtTime = i.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p
				};
				var s = PropertyFactory.getProp;
				PropertyFactory.getProp = function(c, v, d, p, m) {
					var h = s(c, v, d, p, m);
					h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = e, h.loopIn = t, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = v.a === 1 ? v.k.length : 0, h.propertyIndex = v.ix;
					var g = 0;
					return d !== 0 && (g = createTypedArray("float32", v.a === 1 ? v.k[0].s.length : v.k.length)), h._cachingAtTime = {
						lastFrame: initialDefaultFrame,
						lastIndex: 0,
						value: g
					}, expressionHelpers.searchExpressions(c, v, h), h.k && m.addDynamicProperty(h), h
				};
				var o = ShapePropertyFactory.getConstructorFunction(),
					l = ShapePropertyFactory.getKeyframedConstructorFunction();

				function f() {}
				f.prototype = {
					vertices: function(c, v) {
						this.k && this.getValue();
						var d, p = this.v;
						v !== void 0 && (p = this.getValueAtTime(v, 0));
						var m = p._length,
							h = p[c],
							g = p.v,
							y = createSizedArray(m);
						for (d = 0; d < m; d += 1) y[d] = c === "i" || c === "o" ? [h[d][0] - g[d][0], h[d][1] - g[d][1]] : [h[d][0], h[d][1]];
						return y
					},
					points: function(c) {
						return this.vertices("v", c)
					},
					inTangents: function(c) {
						return this.vertices("i", c)
					},
					outTangents: function(c) {
						return this.vertices("o", c)
					},
					isClosed: function() {
						return this.v.c
					},
					pointOnPath: function(c, v) {
						var d = this.v;
						v !== void 0 && (d = this.getValueAtTime(v, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
						for (var p, m = this._segmentsLength, h = m.lengths, g = m.totalLength * c, y = 0, _ = h.length, b = 0; y < _;) {
							if (b + h[y].addedLength > g) {
								var S = y,
									x = d.c && y === _ - 1 ? 0 : y + 1,
									T = (g - b) / h[y].addedLength;
								p = bez.getPointInSegment(d.v[S], d.v[x], d.o[S], d.i[x], T, h[y]);
								break
							}
							b += h[y].addedLength, y += 1
						}
						return p || (p = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]), p
					},
					vectorOnPath: function(c, v, d) {
						c == 1 ? c = this.v.c : c == 0 && (c = .999);
						var p = this.pointOnPath(c, v),
							m = this.pointOnPath(c + .001, v),
							h = m[0] - p[0],
							g = m[1] - p[1],
							y = Math.sqrt(Math.pow(h, 2) + Math.pow(g, 2));
						return y === 0 ? [0, 0] : d === "tangent" ? [h / y, g / y] : [-g / y, h / y]
					},
					tangentOnPath: function(c, v) {
						return this.vectorOnPath(c, v, "tangent")
					},
					normalOnPath: function(c, v) {
						return this.vectorOnPath(c, v, "normal")
					},
					setGroupProperty: expressionHelpers.setGroupProperty,
					getValueAtTime: expressionHelpers.getStaticValueAtTime
				}, extendPrototype([f], o), extendPrototype([f], l), l.prototype.getValueAtTime = function(c) {
					return this._cachingAtTime || (this._cachingAtTime = {
						shapeValue: shapePool.clone(this.pv),
						lastIndex: 0,
						lastTime: initialDefaultFrame
					}), c *= this.elem.globalData.frameRate, (c -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < c ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = c, this.interpolateShape(c, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
				}, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
				var u = ShapePropertyFactory.getShapeProp;
				ShapePropertyFactory.getShapeProp = function(c, v, d, p, m) {
					var h = u(c, v, d, p, m);
					return h.propertyIndex = v.ix, h.lock = !1, d === 3 ? expressionHelpers.searchExpressions(c, v.pt, h) : d === 4 && expressionHelpers.searchExpressions(c, v.ks, h), h.k && c.addDynamicProperty(h), h
				}
			}

			function initialize$1() {
				addPropertyDecorator()
			}

			function addDecorator() {
				TextProperty.prototype.getExpressionValue = function(e, t) {
					var r = this.calculateExpression(t);
					if (e.t !== r) {
						var n = {};
						return this.copyData(n, e), n.t = r.toString(), n.__complete = !1, n
					}
					return e
				}, TextProperty.prototype.searchProperty = function() {
					var e = this.searchKeyframes(),
						t = this.searchExpressions();
					return this.kf = e || t, this.kf
				}, TextProperty.prototype.searchExpressions = function() {
					return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
				}
			}

			function initialize() {
				addDecorator()
			}

			function SVGComposableEffect() {}
			SVGComposableEffect.prototype = {
				createMergeNode: function(e, t) {
					var r, n, i = createNS("feMerge");
					for (i.setAttribute("result", e), n = 0; n < t.length; n += 1)(r = createNS("feMergeNode")).setAttribute("in", t[n]), i.appendChild(r), i.appendChild(r);
					return i
				}
			};
			var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

			function SVGTintFilter(e, t, r, n, i) {
				this.filterManager = t;
				var a = createNS("feColorMatrix");
				a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", n + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", n + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
				var s = this.createMergeNode(n, [i, n + "_tint_1", n + "_tint_2"]);
				e.appendChild(s)
			}

			function SVGFillFilter(e, t, r, n) {
				this.filterManager = t;
				var i = createNS("feColorMatrix");
				i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", n), e.appendChild(i), this.matrixFilter = i
			}

			function SVGStrokeEffect(e, t, r) {
				this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
			}

			function SVGTritoneFilter(e, t, r, n) {
				this.filterManager = t;
				var i = createNS("feColorMatrix");
				i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(i);
				var a = createNS("feComponentTransfer");
				a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), this.matrixFilter = a;
				var s = createNS("feFuncR");
				s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
				var o = createNS("feFuncG");
				o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
				var l = createNS("feFuncB");
				l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, e.appendChild(a)
			}

			function SVGProLevelsFilter(e, t, r, n) {
				this.filterManager = t;
				var i = this.filterManager.effectElements,
					a = createNS("feComponentTransfer");
				(i[10].p.k || i[10].p.v !== 0 || i[11].p.k || i[11].p.v !== 1 || i[12].p.k || i[12].p.v !== 1 || i[13].p.k || i[13].p.v !== 0 || i[14].p.k || i[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (i[17].p.k || i[17].p.v !== 0 || i[18].p.k || i[18].p.v !== 1 || i[19].p.k || i[19].p.v !== 1 || i[20].p.k || i[20].p.v !== 0 || i[21].p.k || i[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (i[24].p.k || i[24].p.v !== 0 || i[25].p.k || i[25].p.v !== 1 || i[26].p.k || i[26].p.v !== 1 || i[27].p.k || i[27].p.v !== 0 || i[28].p.k || i[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (i[31].p.k || i[31].p.v !== 0 || i[32].p.k || i[32].p.v !== 1 || i[33].p.k || i[33].p.v !== 1 || i[34].p.k || i[34].p.v !== 0 || i[35].p.k || i[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (i[3].p.k || i[3].p.v !== 0 || i[4].p.k || i[4].p.v !== 1 || i[5].p.k || i[5].p.v !== 1 || i[6].p.k || i[6].p.v !== 0 || i[7].p.k || i[7].p.v !== 1) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
			}

			function SVGDropShadowEffect(e, t, r, n, i) {
				var a = t.container.globalData.renderConfig.filterSize,
					s = t.data.fs || a;
				e.setAttribute("x", s.x || a.x), e.setAttribute("y", s.y || a.y), e.setAttribute("width", s.width || a.width), e.setAttribute("height", s.height || a.height), this.filterManager = t;
				var o = createNS("feGaussianBlur");
				o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", n + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, e.appendChild(o);
				var l = createNS("feOffset");
				l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", n + "_drop_shadow_1"), l.setAttribute("result", n + "_drop_shadow_2"), this.feOffset = l, e.appendChild(l);
				var f = createNS("feFlood");
				f.setAttribute("flood-color", "#00ff00"), f.setAttribute("flood-opacity", "1"), f.setAttribute("result", n + "_drop_shadow_3"), this.feFlood = f, e.appendChild(f);
				var u = createNS("feComposite");
				u.setAttribute("in", n + "_drop_shadow_3"), u.setAttribute("in2", n + "_drop_shadow_2"), u.setAttribute("operator", "in"), u.setAttribute("result", n + "_drop_shadow_4"), e.appendChild(u);
				var c = this.createMergeNode(n, [n + "_drop_shadow_4", i]);
				e.appendChild(c)
			}
			extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					var t = this.filterManager.effectElements[0].p.v,
						r = this.filterManager.effectElements[1].p.v,
						n = this.filterManager.effectElements[2].p.v / 100;
					this.linearFilter.setAttribute("values", linearFilterValue + " " + n + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
				}
			}, SVGFillFilter.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					var t = this.filterManager.effectElements[2].p.v,
						r = this.filterManager.effectElements[6].p.v;
					this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
				}
			}, SVGStrokeEffect.prototype.initialize = function() {
				var e, t, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
				for (this.filterManager.effectElements[1].p.v === 1 ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < n; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
					p: e,
					m: r
				});
				if (this.filterManager.effectElements[10].p.v === 3) {
					var a = createNS("mask"),
						s = createElementID();
					a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
					var o = createNS("g");
					for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); i[0];) o.appendChild(i[0]);
					this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff")
				} else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
					if (this.filterManager.effectElements[10].p.v === 2)
						for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
					this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
				}
				this.initialized = !0, this.pathMasker = t
			}, SVGStrokeEffect.prototype.renderFrame = function(e) {
				var t;
				this.initialized || this.initialize();
				var r, n, i = this.paths.length;
				for (t = 0; t < i; t += 1)
					if (this.paths[t].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[t].m], n = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
						var a;
						if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
							var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
								o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
								l = n.getTotalLength();
							a = "0 0 0 " + l * s + " ";
							var f, u = l * (o - s),
								c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
								v = Math.floor(u / c);
							for (f = 0; f < v; f += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
							a += "0 " + 10 * l + " 0 0"
						} else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
						n.setAttribute("stroke-dasharray", a)
					} if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
					var d = this.filterManager.effectElements[3].p.v;
					this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
				}
			}, SVGTritoneFilter.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					var t = this.filterManager.effectElements[0].p.v,
						r = this.filterManager.effectElements[1].p.v,
						n = this.filterManager.effectElements[2].p.v,
						i = n[0] + " " + r[0] + " " + t[0],
						a = n[1] + " " + r[1] + " " + t[1],
						s = n[2] + " " + r[2] + " " + t[2];
					this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
				}
			}, SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
				var r = createNS(e);
				return r.setAttribute("type", "table"), t.appendChild(r), r
			}, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, n, i) {
				for (var a, s, o = 0, l = Math.min(e, t), f = Math.max(e, t), u = Array.call(null, {
						length: 256
					}), c = 0, v = i - n, d = t - e; o <= 256;) s = (a = o / 256) <= l ? d < 0 ? i : n : a >= f ? d < 0 ? n : i : n + v * Math.pow((a - e) / d, 1 / r), u[c] = s, c += 1, o += 256 / 255;
				return u.join(" ")
			}, SVGProLevelsFilter.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					var t, r = this.filterManager.effectElements;
					this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
				}
			}, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
						var t = this.filterManager.effectElements[0].p.v;
						this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
					}
					if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
						var r = this.filterManager.effectElements[3].p.v,
							n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
							i = r * Math.cos(n),
							a = r * Math.sin(n);
						this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
					}
				}
			};
			var _svgMatteSymbols = [];

			function SVGMatte3Effect(e, t, r) {
				this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
			}

			function SVGGaussianBlurEffect(e, t, r, n) {
				e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
				var i = createNS("feGaussianBlur");
				i.setAttribute("result", n), e.appendChild(i), this.feGaussianBlur = i
			}

			function TransformEffect() {}

			function SVGTransformEffect(e, t) {
				this.init(t)
			}

			function CVTransformEffect(e) {
				this.init(e)
			}
			return SVGMatte3Effect.prototype.findSymbol = function(e) {
				for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
					if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
					t += 1
				}
				return null
			}, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
				var r = e.layerElement.parentNode;
				if (r) {
					for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== e.layerElement;) a += 1;
					a <= s - 2 && (n = i[a + 1]);
					var o = createNS("use");
					o.setAttribute("href", "#" + t), n ? r.insertBefore(o, n) : r.appendChild(o)
				}
			}, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
				if (!this.findSymbol(t)) {
					var r = createElementID(),
						n = createNS("mask");
					n.setAttribute("id", t.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
					var i = e.globalData.defs;
					i.appendChild(n);
					var a = createNS("symbol");
					a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), i.appendChild(a);
					var s = createNS("use");
					s.setAttribute("href", "#" + r), n.appendChild(s), t.data.hd = !1, t.show()
				}
				e.setMatte(t.layerId)
			}, SVGMatte3Effect.prototype.initialize = function() {
				for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, n = t.length; r < n;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
				this.initialized = !0
			}, SVGMatte3Effect.prototype.renderFrame = function() {
				this.initialized || this.initialize()
			}, SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					var t = .3 * this.filterManager.effectElements[0].p.v,
						r = this.filterManager.effectElements[1].p.v,
						n = r == 3 ? 0 : t,
						i = r == 2 ? 0 : t;
					this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
					var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
					this.feGaussianBlur.setAttribute("edgeMode", a)
				}
			}, TransformEffect.prototype.init = function(e) {
				this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
			}, TransformEffect.prototype.renderFrame = function(e) {
				if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
					var t = this.effectsManager.effectElements,
						r = t[0].p.v,
						n = t[1].p.v,
						i = t[2].p.v === 1,
						a = t[3].p.v,
						s = i ? a : t[4].p.v,
						o = t[5].p.v,
						l = t[6].p.v,
						f = t[7].p.v;
					this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-f * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(n[0], n[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
				}
			}, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
		})
	});
	var Bb = E((Uoe, Nb) => {
		var XW = ot(),
			Ei = Lb(),
			$W = kb();
		XW.define("lottie", Nb.exports = function() {
			return {
				lottie: $W,
				createInstance: Ei.createInstance,
				cleanupElement: Ei.cleanupElement,
				init: Ei.init,
				destroy: Ei.destroy,
				ready: Ei.ready
			}
		})
	});
	var zb = E((Xoe, Gb) => {
		var Vb = ot();
		Vb.define("brand", Gb.exports = function(e) {
			var t = {},
				r = document,
				n = e("html"),
				i = e("body"),
				a = ".w-webflow-badge",
				s = window.location,
				o = /PhantomJS/i.test(navigator.userAgent),
				l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
				f;
			t.ready = function() {
				var d = n.attr("data-wf-status"),
					p = n.attr("data-wf-domain") || "";
				/\.webflow\.io$/i.test(p) && s.hostname !== p && (d = !0), d && !o && (f = f || c(), v(), setTimeout(v, 500), e(r).off(l, u).on(l, u))
			};

			function u() {
				var d = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
				e(f).attr("style", d ? "display: none !important;" : "")
			}

			function c() {
				var d = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
					p = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
						marginRight: "8px",
						width: "16px"
					}),
					m = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
				return d.append(p, m), d[0]
			}

			function v() {
				var d = i.children(a),
					p = d.length && d.get(0) === f,
					m = Vb.env("editor");
				if (p) {
					m && d.remove();
					return
				}
				d.length && d.remove(), m || i.append(f)
			}
			return t
		})
	});
	var jb = E(($oe, Hb) => {
		var qu = ot();
		qu.define("edit", Hb.exports = function(e, t, r) {
			if (r = r || {}, (qu.env("test") || qu.env("frame")) && !r.fixture && !KW()) return {
				exit: 1
			};
			var n = {},
				i = e(window),
				a = e(document.documentElement),
				s = document.location,
				o = "hashchange",
				l, f = r.load || v,
				u = !1;
			try {
				u = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
			} catch {}
			u ? f() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && f() : i.on(o, c).triggerHandler(o);

			function c() {
				l || /\?edit/.test(s.hash) && f()
			}

			function v() {
				l = !0, window.WebflowEditor = !0, i.off(o, c), y(function(b) {
					e.ajax({
						url: g("https://editor-api.webflow.com/api/editor/view"),
						data: {
							siteId: a.attr("data-wf-site")
						},
						xhrFields: {
							withCredentials: !0
						},
						dataType: "json",
						crossDomain: !0,
						success: d(b)
					})
				})
			}

			function d(b) {
				return function(S) {
					if (!S) {
						console.error("Could not load editor data");
						return
					}
					S.thirdPartyCookiesSupported = b, p(h(S.bugReporterScriptPath), function() {
						p(h(S.scriptPath), function() {
							window.WebflowEditor(S)
						})
					})
				}
			}

			function p(b, S) {
				e.ajax({
					type: "GET",
					url: b,
					dataType: "script",
					cache: !0
				}).then(S, m)
			}

			function m(b, S, x) {
				throw console.error("Could not load editor script: " + S), x
			}

			function h(b) {
				return b.indexOf("//") >= 0 ? b : g("https://editor-api.webflow.com" + b)
			}

			function g(b) {
				return b.replace(/([^:])\/\//g, "$1/")
			}

			function y(b) {
				var S = window.document.createElement("iframe");
				S.src = "https://webflow.com/site/third-party-cookie-check.html", S.style.display = "none", S.sandbox = "allow-scripts allow-same-origin";
				var x = function(T) {
					T.data === "WF_third_party_cookies_unsupported" ? (_(S, x), b(!1)) : T.data === "WF_third_party_cookies_supported" && (_(S, x), b(!0))
				};
				S.onerror = function() {
					_(S, x), b(!1)
				}, window.addEventListener("message", x, !1), window.document.body.appendChild(S)
			}

			function _(b, S) {
				window.removeEventListener("message", S, !1), b.remove()
			}
			return n
		});

		function KW() {
			try {
				return window.top.__Cypress__
			} catch {
				return !1
			}
		}
	});
	var Ub = E((Koe, Wb) => {
		var YW = ot();
		YW.define("focus-visible", Wb.exports = function() {
			function e(r) {
				var n = !0,
					i = !1,
					a = null,
					s = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function o(_) {
					return !!(_ && _ !== document && _.nodeName !== "HTML" && _.nodeName !== "BODY" && "classList" in _ && "contains" in _.classList)
				}

				function l(_) {
					var b = _.type,
						S = _.tagName;
					return !!(S === "INPUT" && s[b] && !_.readOnly || S === "TEXTAREA" && !_.readOnly || _.isContentEditable)
				}

				function f(_) {
					_.getAttribute("data-wf-focus-visible") || _.setAttribute("data-wf-focus-visible", "true")
				}

				function u(_) {
					_.getAttribute("data-wf-focus-visible") && _.removeAttribute("data-wf-focus-visible")
				}

				function c(_) {
					_.metaKey || _.altKey || _.ctrlKey || (o(r.activeElement) && f(r.activeElement), n = !0)
				}

				function v() {
					n = !1
				}

				function d(_) {
					o(_.target) && (n || l(_.target)) && f(_.target)
				}

				function p(_) {
					o(_.target) && _.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(a), a = window.setTimeout(function() {
						i = !1
					}, 100), u(_.target))
				}

				function m() {
					document.visibilityState === "hidden" && (i && (n = !0), h())
				}

				function h() {
					document.addEventListener("mousemove", y), document.addEventListener("mousedown", y), document.addEventListener("mouseup", y), document.addEventListener("pointermove", y), document.addEventListener("pointerdown", y), document.addEventListener("pointerup", y), document.addEventListener("touchmove", y), document.addEventListener("touchstart", y), document.addEventListener("touchend", y)
				}

				function g() {
					document.removeEventListener("mousemove", y), document.removeEventListener("mousedown", y), document.removeEventListener("mouseup", y), document.removeEventListener("pointermove", y), document.removeEventListener("pointerdown", y), document.removeEventListener("pointerup", y), document.removeEventListener("touchmove", y), document.removeEventListener("touchstart", y), document.removeEventListener("touchend", y)
				}

				function y(_) {
					_.target.nodeName && _.target.nodeName.toLowerCase() === "html" || (n = !1, g())
				}
				document.addEventListener("keydown", c, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("visibilitychange", m, !0), h(), r.addEventListener("focus", d, !0), r.addEventListener("blur", p, !0)
			}

			function t() {
				if (typeof document < "u") try {
					document.querySelector(":focus-visible")
				} catch {
					e(document)
				}
			}
			return {
				ready: t
			}
		})
	});
	var Kb = E((Yoe, $b) => {
		var Xb = ot();
		Xb.define("focus", $b.exports = function() {
			var e = [],
				t = !1;

			function r(s) {
				t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
			}

			function n(s) {
				var o = s.target,
					l = o.tagName;
				return /^a$/i.test(l) && o.href != null || /^(button|textarea)$/i.test(l) && o.disabled !== !0 || /^input$/i.test(l) && /^(button|reset|submit|radio|checkbox)$/i.test(o.type) && !o.disabled || !/^(button|input|textarea|select|a)$/i.test(l) && !Number.isNaN(Number.parseFloat(o.tabIndex)) || /^audio$/i.test(l) || /^video$/i.test(l) && o.controls === !0
			}

			function i(s) {
				n(s) && (t = !0, setTimeout(() => {
					for (t = !1, s.target.focus(); e.length > 0;) {
						var o = e.pop();
						o.target.dispatchEvent(new MouseEvent(o.type, o))
					}
				}, 0))
			}

			function a() {
				typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Xb.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
			}
			return {
				ready: a
			}
		})
	});
	var Zb = E((Qoe, Qb) => {
		"use strict";
		var Lu = window.jQuery,
			kt = {},
			ts = [],
			Yb = ".w-ix",
			rs = {
				reset: function(e, t) {
					t.__wf_intro = null
				},
				intro: function(e, t) {
					t.__wf_intro || (t.__wf_intro = !0, Lu(t).triggerHandler(kt.types.INTRO))
				},
				outro: function(e, t) {
					t.__wf_intro && (t.__wf_intro = null, Lu(t).triggerHandler(kt.types.OUTRO))
				}
			};
		kt.triggers = {};
		kt.types = {
			INTRO: "w-ix-intro" + Yb,
			OUTRO: "w-ix-outro" + Yb
		};
		kt.init = function() {
			for (var e = ts.length, t = 0; t < e; t++) {
				var r = ts[t];
				r[0](0, r[1])
			}
			ts = [], Lu.extend(kt.triggers, rs)
		};
		kt.async = function() {
			for (var e in rs) {
				var t = rs[e];
				rs.hasOwnProperty(e) && (kt.triggers[e] = function(r, n) {
					ts.push([t, n])
				})
			}
		};
		kt.async();
		Qb.exports = kt
	});
	var Nu = E((Zoe, tS) => {
		"use strict";
		var ku = Zb();

		function Jb(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
		}
		var QW = window.jQuery,
			ns = {},
			eS = ".w-ix",
			ZW = {
				reset: function(e, t) {
					ku.triggers.reset(e, t)
				},
				intro: function(e, t) {
					ku.triggers.intro(e, t), Jb(t, "COMPONENT_ACTIVE")
				},
				outro: function(e, t) {
					ku.triggers.outro(e, t), Jb(t, "COMPONENT_INACTIVE")
				}
			};
		ns.triggers = {};
		ns.types = {
			INTRO: "w-ix-intro" + eS,
			OUTRO: "w-ix-outro" + eS
		};
		QW.extend(ns.triggers, ZW);
		tS.exports = ns
	});
	var rS = E((Joe, Zt) => {
		function Bu(e) {
			return Zt.exports = Bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
				return typeof t
			} : function(t) {
				return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, Zt.exports.__esModule = !0, Zt.exports.default = Zt.exports, Bu(e)
		}
		Zt.exports = Bu, Zt.exports.__esModule = !0, Zt.exports.default = Zt.exports
	});
	var qr = E((ele, _i) => {
		var JW = rS().default;

		function nS(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap,
				r = new WeakMap;
			return (nS = function(i) {
				return i ? r : t
			})(e)
		}

		function eU(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || JW(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var r = nS(t);
			if (r && r.has(e)) return r.get(e);
			var n = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var a in e)
				if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
					s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
				} return n.default = e, r && r.set(e, n), n
		}
		_i.exports = eU, _i.exports.__esModule = !0, _i.exports.default = _i.exports
	});
	var aS = E((tle, iS) => {
		var tU = oe(),
			rU = Te();
		iS.exports = function(e, t) {
			return rU(tU[e].prototype[t])
		}
	});
	var oS = E((rle, sS) => {
		Tl();
		var nU = aS();
		sS.exports = nU("Array", "includes")
	});
	var uS = E((nle, lS) => {
		var iU = oS();
		lS.exports = iU
	});
	var cS = E((ile, hS) => {
		var aU = uS();
		hS.exports = aU
	});
	var Vu = E((ale, fS) => {
		var sU = Eo(),
			oU = sU(Object.getPrototypeOf, Object);
		fS.exports = oU
	});
	var Gu = E((sle, dS) => {
		var lU = rr(),
			uU = Vu(),
			hU = jt(),
			cU = "[object Object]",
			fU = Function.prototype,
			pU = Object.prototype,
			pS = fU.toString,
			dU = pU.hasOwnProperty,
			mU = pS.call(Object);

		function vU(e) {
			if (!hU(e) || lU(e) != cU) return !1;
			var t = uU(e);
			if (t === null) return !0;
			var r = dU.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && pS.call(r) == mU
		}
		dS.exports = vU
	});
	var mS = E(zu => {
		"use strict";
		Object.defineProperty(zu, "__esModule", {
			value: !0
		});
		zu.default = gU;

		function gU(e) {
			var t, r = e.Symbol;
			return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
		}
	});
	var vS = E((ju, Hu) => {
		"use strict";
		Object.defineProperty(ju, "__esModule", {
			value: !0
		});
		var yU = mS(),
			EU = _U(yU);

		function _U(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var dn;
		typeof self < "u" ? dn = self : typeof window < "u" ? dn = window : typeof global < "u" ? dn = global : typeof Hu < "u" ? dn = Hu : dn = Function("return this")();
		var bU = (0, EU.default)(dn);
		ju.default = bU
	});
	var Wu = E(bi => {
		"use strict";
		bi.__esModule = !0;
		bi.ActionTypes = void 0;
		bi.default = _S;
		var SU = Gu(),
			TU = ES(SU),
			IU = vS(),
			gS = ES(IU);

		function ES(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var yS = bi.ActionTypes = {
			INIT: "@@redux/INIT"
		};

		function _S(e, t, r) {
			var n;
			if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
				if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
				return r(_S)(e, t)
			}
			if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
			var i = e,
				a = t,
				s = [],
				o = s,
				l = !1;

			function f() {
				o === s && (o = s.slice())
			}

			function u() {
				return a
			}

			function c(m) {
				if (typeof m != "function") throw new Error("Expected listener to be a function.");
				var h = !0;
				return f(), o.push(m),
					function() {
						if (h) {
							h = !1, f();
							var y = o.indexOf(m);
							o.splice(y, 1)
						}
					}
			}

			function v(m) {
				if (!(0, TU.default)(m)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
				if (typeof m.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
				if (l) throw new Error("Reducers may not dispatch actions.");
				try {
					l = !0, a = i(a, m)
				} finally {
					l = !1
				}
				for (var h = s = o, g = 0; g < h.length; g++) h[g]();
				return m
			}

			function d(m) {
				if (typeof m != "function") throw new Error("Expected the nextReducer to be a function.");
				i = m, v({
					type: yS.INIT
				})
			}

			function p() {
				var m, h = c;
				return m = {
					subscribe: function(y) {
						if (typeof y != "object") throw new TypeError("Expected the observer to be an object.");

						function _() {
							y.next && y.next(u())
						}
						_();
						var b = h(_);
						return {
							unsubscribe: b
						}
					}
				}, m[gS.default] = function() {
					return this
				}, m
			}
			return v({
				type: yS.INIT
			}), n = {
				dispatch: v,
				subscribe: c,
				getState: u,
				replaceReducer: d
			}, n[gS.default] = p, n
		}
	});
	var Xu = E(Uu => {
		"use strict";
		Uu.__esModule = !0;
		Uu.default = xU;

		function xU(e) {
			typeof console < "u" && typeof console.error == "function" && console.error(e);
			try {
				throw new Error(e)
			} catch {}
		}
	});
	var TS = E($u => {
		"use strict";
		$u.__esModule = !0;
		$u.default = OU;
		var bS = Wu(),
			AU = Gu(),
			hle = SS(AU),
			PU = Xu(),
			cle = SS(PU);

		function SS(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function CU(e, t) {
			var r = t && t.type,
				n = r && '"' + r.toString() + '"' || "an action";
			return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
		}

		function wU(e) {
			Object.keys(e).forEach(function(t) {
				var r = e[t],
					n = r(void 0, {
						type: bS.ActionTypes.INIT
					});
				if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
				var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
				if (typeof r(void 0, {
						type: i
					}) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + bS.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
			})
		}

		function OU(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				typeof e[i] == "function" && (r[i] = e[i])
			}
			var a = Object.keys(r);
			if (!1) var s;
			var o;
			try {
				wU(r)
			} catch (l) {
				o = l
			}
			return function() {
				var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					u = arguments[1];
				if (o) throw o;
				if (!1) var c;
				for (var v = !1, d = {}, p = 0; p < a.length; p++) {
					var m = a[p],
						h = r[m],
						g = f[m],
						y = h(g, u);
					if (typeof y > "u") {
						var _ = CU(m, u);
						throw new Error(_)
					}
					d[m] = y, v = v || y !== g
				}
				return v ? d : f
			}
		}
	});
	var xS = E(Ku => {
		"use strict";
		Ku.__esModule = !0;
		Ku.default = MU;

		function IS(e, t) {
			return function() {
				return t(e.apply(void 0, arguments))
			}
		}

		function MU(e, t) {
			if (typeof e == "function") return IS(e, t);
			if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
			for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
				var a = r[i],
					s = e[a];
				typeof s == "function" && (n[a] = IS(s, t))
			}
			return n
		}
	});
	var Qu = E(Yu => {
		"use strict";
		Yu.__esModule = !0;
		Yu.default = RU;

		function RU() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			if (t.length === 0) return function(a) {
				return a
			};
			if (t.length === 1) return t[0];
			var n = t[t.length - 1],
				i = t.slice(0, -1);
			return function() {
				return i.reduceRight(function(a, s) {
					return s(a)
				}, n.apply(void 0, arguments))
			}
		}
	});
	var AS = E(Zu => {
		"use strict";
		Zu.__esModule = !0;
		var DU = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		};
		Zu.default = kU;
		var FU = Qu(),
			qU = LU(FU);

		function LU(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function kU() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			return function(n) {
				return function(i, a, s) {
					var o = n(i, a, s),
						l = o.dispatch,
						f = [],
						u = {
							getState: o.getState,
							dispatch: function(v) {
								return l(v)
							}
						};
					return f = t.map(function(c) {
						return c(u)
					}), l = qU.default.apply(void 0, f)(o.dispatch), DU({}, o, {
						dispatch: l
					})
				}
			}
		}
	});
	var Ju = E(vt => {
		"use strict";
		vt.__esModule = !0;
		vt.compose = vt.applyMiddleware = vt.bindActionCreators = vt.combineReducers = vt.createStore = void 0;
		var NU = Wu(),
			BU = mn(NU),
			VU = TS(),
			GU = mn(VU),
			zU = xS(),
			HU = mn(zU),
			jU = AS(),
			WU = mn(jU),
			UU = Qu(),
			XU = mn(UU),
			$U = Xu(),
			vle = mn($U);

		function mn(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		vt.createStore = BU.default;
		vt.combineReducers = GU.default;
		vt.bindActionCreators = HU.default;
		vt.applyMiddleware = WU.default;
		vt.compose = XU.default
	});
	var PS = E(Ge => {
		"use strict";
		Object.defineProperty(Ge, "__esModule", {
			value: !0
		});
		Ge.QuickEffectIds = Ge.QuickEffectDirectionConsts = Ge.EventTypeConsts = Ge.EventLimitAffectedElements = Ge.EventContinuousMouseAxes = Ge.EventBasedOn = Ge.EventAppliesTo = void 0;
		var KU = {
			NAVBAR_OPEN: "NAVBAR_OPEN",
			NAVBAR_CLOSE: "NAVBAR_CLOSE",
			TAB_ACTIVE: "TAB_ACTIVE",
			TAB_INACTIVE: "TAB_INACTIVE",
			SLIDER_ACTIVE: "SLIDER_ACTIVE",
			SLIDER_INACTIVE: "SLIDER_INACTIVE",
			DROPDOWN_OPEN: "DROPDOWN_OPEN",
			DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
			MOUSE_CLICK: "MOUSE_CLICK",
			MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
			MOUSE_DOWN: "MOUSE_DOWN",
			MOUSE_UP: "MOUSE_UP",
			MOUSE_OVER: "MOUSE_OVER",
			MOUSE_OUT: "MOUSE_OUT",
			MOUSE_MOVE: "MOUSE_MOVE",
			MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
			SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
			SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
			SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
			ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
			ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
			PAGE_START: "PAGE_START",
			PAGE_FINISH: "PAGE_FINISH",
			PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
			PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
			PAGE_SCROLL: "PAGE_SCROLL"
		};
		Ge.EventTypeConsts = KU;
		var YU = {
			ELEMENT: "ELEMENT",
			CLASS: "CLASS",
			PAGE: "PAGE"
		};
		Ge.EventAppliesTo = YU;
		var QU = {
			ELEMENT: "ELEMENT",
			VIEWPORT: "VIEWPORT"
		};
		Ge.EventBasedOn = QU;
		var ZU = {
			X_AXIS: "X_AXIS",
			Y_AXIS: "Y_AXIS"
		};
		Ge.EventContinuousMouseAxes = ZU;
		var JU = {
			CHILDREN: "CHILDREN",
			SIBLINGS: "SIBLINGS",
			IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
		};
		Ge.EventLimitAffectedElements = JU;
		var eX = {
			FADE_EFFECT: "FADE_EFFECT",
			SLIDE_EFFECT: "SLIDE_EFFECT",
			GROW_EFFECT: "GROW_EFFECT",
			SHRINK_EFFECT: "SHRINK_EFFECT",
			SPIN_EFFECT: "SPIN_EFFECT",
			FLY_EFFECT: "FLY_EFFECT",
			POP_EFFECT: "POP_EFFECT",
			FLIP_EFFECT: "FLIP_EFFECT",
			JIGGLE_EFFECT: "JIGGLE_EFFECT",
			PULSE_EFFECT: "PULSE_EFFECT",
			DROP_EFFECT: "DROP_EFFECT",
			BLINK_EFFECT: "BLINK_EFFECT",
			BOUNCE_EFFECT: "BOUNCE_EFFECT",
			FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
			FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
			RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
			JELLO_EFFECT: "JELLO_EFFECT",
			GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
			SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
			PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
		};
		Ge.QuickEffectIds = eX;
		var tX = {
			LEFT: "LEFT",
			RIGHT: "RIGHT",
			BOTTOM: "BOTTOM",
			TOP: "TOP",
			BOTTOM_LEFT: "BOTTOM_LEFT",
			BOTTOM_RIGHT: "BOTTOM_RIGHT",
			TOP_RIGHT: "TOP_RIGHT",
			TOP_LEFT: "TOP_LEFT",
			CLOCKWISE: "CLOCKWISE",
			COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
		};
		Ge.QuickEffectDirectionConsts = tX
	});
	var eh = E(vn => {
		"use strict";
		Object.defineProperty(vn, "__esModule", {
			value: !0
		});
		vn.ActionTypeConsts = vn.ActionAppliesTo = void 0;
		var rX = {
			TRANSFORM_MOVE: "TRANSFORM_MOVE",
			TRANSFORM_SCALE: "TRANSFORM_SCALE",
			TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
			TRANSFORM_SKEW: "TRANSFORM_SKEW",
			STYLE_OPACITY: "STYLE_OPACITY",
			STYLE_SIZE: "STYLE_SIZE",
			STYLE_FILTER: "STYLE_FILTER",
			STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
			STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
			STYLE_BORDER: "STYLE_BORDER",
			STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
			OBJECT_VALUE: "OBJECT_VALUE",
			PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
			PLUGIN_SPLINE: "PLUGIN_SPLINE",
			GENERAL_DISPLAY: "GENERAL_DISPLAY",
			GENERAL_START_ACTION: "GENERAL_START_ACTION",
			GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
			GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
			GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
			GENERAL_LOOP: "GENERAL_LOOP",
			STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
		};
		vn.ActionTypeConsts = rX;
		var nX = {
			ELEMENT: "ELEMENT",
			ELEMENT_CLASS: "ELEMENT_CLASS",
			TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
		};
		vn.ActionAppliesTo = nX
	});
	var CS = E(is => {
		"use strict";
		Object.defineProperty(is, "__esModule", {
			value: !0
		});
		is.InteractionTypeConsts = void 0;
		var iX = {
			MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
			MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
			MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
			SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
			SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
			MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
			PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
			PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
			PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
			NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
			DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
			ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
			TAB_INTERACTION: "TAB_INTERACTION",
			SLIDER_INTERACTION: "SLIDER_INTERACTION"
		};
		is.InteractionTypeConsts = iX
	});
	var wS = E(as => {
		"use strict";
		Object.defineProperty(as, "__esModule", {
			value: !0
		});
		as.ReducedMotionTypes = void 0;
		var aX = eh(),
			{
				TRANSFORM_MOVE: sX,
				TRANSFORM_SCALE: oX,
				TRANSFORM_ROTATE: lX,
				TRANSFORM_SKEW: uX,
				STYLE_SIZE: hX,
				STYLE_FILTER: cX,
				STYLE_FONT_VARIATION: fX
			} = aX.ActionTypeConsts,
			pX = {
				[sX]: !0,
				[oX]: !0,
				[lX]: !0,
				[uX]: !0,
				[hX]: !0,
				[cX]: !0,
				[fX]: !0
			};
		as.ReducedMotionTypes = pX
	});
	var OS = E(he => {
		"use strict";
		Object.defineProperty(he, "__esModule", {
			value: !0
		});
		he.IX2_VIEWPORT_WIDTH_CHANGED = he.IX2_TEST_FRAME_RENDERED = he.IX2_STOP_REQUESTED = he.IX2_SESSION_STOPPED = he.IX2_SESSION_STARTED = he.IX2_SESSION_INITIALIZED = he.IX2_RAW_DATA_IMPORTED = he.IX2_PREVIEW_REQUESTED = he.IX2_PLAYBACK_REQUESTED = he.IX2_PARAMETER_CHANGED = he.IX2_MEDIA_QUERIES_DEFINED = he.IX2_INSTANCE_STARTED = he.IX2_INSTANCE_REMOVED = he.IX2_INSTANCE_ADDED = he.IX2_EVENT_STATE_CHANGED = he.IX2_EVENT_LISTENER_ADDED = he.IX2_ELEMENT_STATE_CHANGED = he.IX2_CLEAR_REQUESTED = he.IX2_ANIMATION_FRAME_CHANGED = he.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
		var dX = "IX2_RAW_DATA_IMPORTED";
		he.IX2_RAW_DATA_IMPORTED = dX;
		var mX = "IX2_SESSION_INITIALIZED";
		he.IX2_SESSION_INITIALIZED = mX;
		var vX = "IX2_SESSION_STARTED";
		he.IX2_SESSION_STARTED = vX;
		var gX = "IX2_SESSION_STOPPED";
		he.IX2_SESSION_STOPPED = gX;
		var yX = "IX2_PREVIEW_REQUESTED";
		he.IX2_PREVIEW_REQUESTED = yX;
		var EX = "IX2_PLAYBACK_REQUESTED";
		he.IX2_PLAYBACK_REQUESTED = EX;
		var _X = "IX2_STOP_REQUESTED";
		he.IX2_STOP_REQUESTED = _X;
		var bX = "IX2_CLEAR_REQUESTED";
		he.IX2_CLEAR_REQUESTED = bX;
		var SX = "IX2_EVENT_LISTENER_ADDED";
		he.IX2_EVENT_LISTENER_ADDED = SX;
		var TX = "IX2_EVENT_STATE_CHANGED";
		he.IX2_EVENT_STATE_CHANGED = TX;
		var IX = "IX2_ANIMATION_FRAME_CHANGED";
		he.IX2_ANIMATION_FRAME_CHANGED = IX;
		var xX = "IX2_PARAMETER_CHANGED";
		he.IX2_PARAMETER_CHANGED = xX;
		var AX = "IX2_INSTANCE_ADDED";
		he.IX2_INSTANCE_ADDED = AX;
		var PX = "IX2_INSTANCE_STARTED";
		he.IX2_INSTANCE_STARTED = PX;
		var CX = "IX2_INSTANCE_REMOVED";
		he.IX2_INSTANCE_REMOVED = CX;
		var wX = "IX2_ELEMENT_STATE_CHANGED";
		he.IX2_ELEMENT_STATE_CHANGED = wX;
		var OX = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
		he.IX2_ACTION_LIST_PLAYBACK_CHANGED = OX;
		var MX = "IX2_VIEWPORT_WIDTH_CHANGED";
		he.IX2_VIEWPORT_WIDTH_CHANGED = MX;
		var RX = "IX2_MEDIA_QUERIES_DEFINED";
		he.IX2_MEDIA_QUERIES_DEFINED = RX;
		var DX = "IX2_TEST_FRAME_RENDERED";
		he.IX2_TEST_FRAME_RENDERED = DX
	});
	var MS = E(W => {
		"use strict";
		Object.defineProperty(W, "__esModule", {
			value: !0
		});
		W.W_MOD_JS = W.W_MOD_IX = W.WILL_CHANGE = W.WIDTH = W.WF_PAGE = W.TRANSLATE_Z = W.TRANSLATE_Y = W.TRANSLATE_X = W.TRANSLATE_3D = W.TRANSFORM = W.SKEW_Y = W.SKEW_X = W.SKEW = W.SIBLINGS = W.SCALE_Z = W.SCALE_Y = W.SCALE_X = W.SCALE_3D = W.ROTATE_Z = W.ROTATE_Y = W.ROTATE_X = W.RENDER_TRANSFORM = W.RENDER_STYLE = W.RENDER_PLUGIN = W.RENDER_GENERAL = W.PRESERVE_3D = W.PLAIN_OBJECT = W.PARENT = W.OPACITY = W.IX2_ID_DELIMITER = W.IMMEDIATE_CHILDREN = W.HTML_ELEMENT = W.HEIGHT = W.FONT_VARIATION_SETTINGS = W.FLEX = W.FILTER = W.DISPLAY = W.CONFIG_Z_VALUE = W.CONFIG_Z_UNIT = W.CONFIG_Y_VALUE = W.CONFIG_Y_UNIT = W.CONFIG_X_VALUE = W.CONFIG_X_UNIT = W.CONFIG_VALUE = W.CONFIG_UNIT = W.COMMA_DELIMITER = W.COLOR = W.COLON_DELIMITER = W.CHILDREN = W.BOUNDARY_SELECTOR = W.BORDER_COLOR = W.BAR_DELIMITER = W.BACKGROUND_COLOR = W.BACKGROUND = W.AUTO = W.ABSTRACT_NODE = void 0;
		var FX = "|";
		W.IX2_ID_DELIMITER = FX;
		var qX = "data-wf-page";
		W.WF_PAGE = qX;
		var LX = "w-mod-js";
		W.W_MOD_JS = LX;
		var kX = "w-mod-ix";
		W.W_MOD_IX = kX;
		var NX = ".w-dyn-item";
		W.BOUNDARY_SELECTOR = NX;
		var BX = "xValue";
		W.CONFIG_X_VALUE = BX;
		var VX = "yValue";
		W.CONFIG_Y_VALUE = VX;
		var GX = "zValue";
		W.CONFIG_Z_VALUE = GX;
		var zX = "value";
		W.CONFIG_VALUE = zX;
		var HX = "xUnit";
		W.CONFIG_X_UNIT = HX;
		var jX = "yUnit";
		W.CONFIG_Y_UNIT = jX;
		var WX = "zUnit";
		W.CONFIG_Z_UNIT = WX;
		var UX = "unit";
		W.CONFIG_UNIT = UX;
		var XX = "transform";
		W.TRANSFORM = XX;
		var $X = "translateX";
		W.TRANSLATE_X = $X;
		var KX = "translateY";
		W.TRANSLATE_Y = KX;
		var YX = "translateZ";
		W.TRANSLATE_Z = YX;
		var QX = "translate3d";
		W.TRANSLATE_3D = QX;
		var ZX = "scaleX";
		W.SCALE_X = ZX;
		var JX = "scaleY";
		W.SCALE_Y = JX;
		var e4 = "scaleZ";
		W.SCALE_Z = e4;
		var t4 = "scale3d";
		W.SCALE_3D = t4;
		var r4 = "rotateX";
		W.ROTATE_X = r4;
		var n4 = "rotateY";
		W.ROTATE_Y = n4;
		var i4 = "rotateZ";
		W.ROTATE_Z = i4;
		var a4 = "skew";
		W.SKEW = a4;
		var s4 = "skewX";
		W.SKEW_X = s4;
		var o4 = "skewY";
		W.SKEW_Y = o4;
		var l4 = "opacity";
		W.OPACITY = l4;
		var u4 = "filter";
		W.FILTER = u4;
		var h4 = "font-variation-settings";
		W.FONT_VARIATION_SETTINGS = h4;
		var c4 = "width";
		W.WIDTH = c4;
		var f4 = "height";
		W.HEIGHT = f4;
		var p4 = "backgroundColor";
		W.BACKGROUND_COLOR = p4;
		var d4 = "background";
		W.BACKGROUND = d4;
		var m4 = "borderColor";
		W.BORDER_COLOR = m4;
		var v4 = "color";
		W.COLOR = v4;
		var g4 = "display";
		W.DISPLAY = g4;
		var y4 = "flex";
		W.FLEX = y4;
		var E4 = "willChange";
		W.WILL_CHANGE = E4;
		var _4 = "AUTO";
		W.AUTO = _4;
		var b4 = ",";
		W.COMMA_DELIMITER = b4;
		var S4 = ":";
		W.COLON_DELIMITER = S4;
		var T4 = "|";
		W.BAR_DELIMITER = T4;
		var I4 = "CHILDREN";
		W.CHILDREN = I4;
		var x4 = "IMMEDIATE_CHILDREN";
		W.IMMEDIATE_CHILDREN = x4;
		var A4 = "SIBLINGS";
		W.SIBLINGS = A4;
		var P4 = "PARENT";
		W.PARENT = P4;
		var C4 = "preserve-3d";
		W.PRESERVE_3D = C4;
		var w4 = "HTML_ELEMENT";
		W.HTML_ELEMENT = w4;
		var O4 = "PLAIN_OBJECT";
		W.PLAIN_OBJECT = O4;
		var M4 = "ABSTRACT_NODE";
		W.ABSTRACT_NODE = M4;
		var R4 = "RENDER_TRANSFORM";
		W.RENDER_TRANSFORM = R4;
		var D4 = "RENDER_GENERAL";
		W.RENDER_GENERAL = D4;
		var F4 = "RENDER_STYLE";
		W.RENDER_STYLE = F4;
		var q4 = "RENDER_PLUGIN";
		W.RENDER_PLUGIN = q4
	});
	var it = E(qe => {
		"use strict";
		var RS = qr().default;
		Object.defineProperty(qe, "__esModule", {
			value: !0
		});
		var ss = {
			IX2EngineActionTypes: !0,
			IX2EngineConstants: !0
		};
		qe.IX2EngineConstants = qe.IX2EngineActionTypes = void 0;
		var th = PS();
		Object.keys(th).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(ss, e) || e in qe && qe[e] === th[e] || Object.defineProperty(qe, e, {
				enumerable: !0,
				get: function() {
					return th[e]
				}
			})
		});
		var rh = eh();
		Object.keys(rh).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(ss, e) || e in qe && qe[e] === rh[e] || Object.defineProperty(qe, e, {
				enumerable: !0,
				get: function() {
					return rh[e]
				}
			})
		});
		var nh = CS();
		Object.keys(nh).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(ss, e) || e in qe && qe[e] === nh[e] || Object.defineProperty(qe, e, {
				enumerable: !0,
				get: function() {
					return nh[e]
				}
			})
		});
		var ih = wS();
		Object.keys(ih).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(ss, e) || e in qe && qe[e] === ih[e] || Object.defineProperty(qe, e, {
				enumerable: !0,
				get: function() {
					return ih[e]
				}
			})
		});
		var L4 = RS(OS());
		qe.IX2EngineActionTypes = L4;
		var k4 = RS(MS());
		qe.IX2EngineConstants = k4
	});
	var DS = E(os => {
		"use strict";
		Object.defineProperty(os, "__esModule", {
			value: !0
		});
		os.ixData = void 0;
		var N4 = it(),
			{
				IX2_RAW_DATA_IMPORTED: B4
			} = N4.IX2EngineActionTypes,
			V4 = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case B4:
						return t.payload.ixData || Object.freeze({});
					default:
						return e
				}
			};
		os.ixData = V4
	});
	var gn = E(Oe => {
		"use strict";
		Object.defineProperty(Oe, "__esModule", {
			value: !0
		});
		var G4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		Oe.clone = us;
		Oe.addLast = LS;
		Oe.addFirst = kS;
		Oe.removeLast = NS;
		Oe.removeFirst = BS;
		Oe.insert = VS;
		Oe.removeAt = GS;
		Oe.replaceAt = zS;
		Oe.getIn = hs;
		Oe.set = cs;
		Oe.setIn = fs;
		Oe.update = jS;
		Oe.updateIn = WS;
		Oe.merge = US;
		Oe.mergeDeep = XS;
		Oe.mergeIn = $S;
		Oe.omit = KS;
		Oe.addDefaults = YS;
		var FS = "INVALID_ARGS";

		function qS(e) {
			throw new Error(e)
		}

		function ah(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
		}
		var z4 = {}.hasOwnProperty;

		function us(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = ah(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				r[i] = e[i]
			}
			return r
		}

		function at(e, t, r) {
			var n = r;
			n == null && qS(FS);
			for (var i = !1, a = arguments.length, s = Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++) s[o - 3] = arguments[o];
			for (var l = 0; l < s.length; l++) {
				var f = s[l];
				if (f != null) {
					var u = ah(f);
					if (u.length)
						for (var c = 0; c <= u.length; c++) {
							var v = u[c];
							if (!(e && n[v] !== void 0)) {
								var d = f[v];
								t && ls(n[v]) && ls(d) && (d = at(e, t, n[v], d)), !(d === void 0 || d === n[v]) && (i || (i = !0, n = us(n)), n[v] = d)
							}
						}
				}
			}
			return n
		}

		function ls(e) {
			var t = typeof e > "u" ? "undefined" : G4(e);
			return e != null && (t === "object" || t === "function")
		}

		function LS(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t])
		}

		function kS(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e)
		}

		function NS(e) {
			return e.length ? e.slice(0, e.length - 1) : e
		}

		function BS(e) {
			return e.length ? e.slice(1) : e
		}

		function VS(e, t, r) {
			return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
		}

		function GS(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
		}

		function zS(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, i = Array(n), a = 0; a < n; a++) i[a] = e[a];
			return i[t] = r, i
		}

		function hs(e, t) {
			if (!Array.isArray(t) && qS(FS), e != null) {
				for (var r = e, n = 0; n < t.length; n++) {
					var i = t[n];
					if (r = r?.[i], r === void 0) return r
				}
				return r
			}
		}

		function cs(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				i = e ?? n;
			if (i[t] === r) return i;
			var a = us(i);
			return a[t] = r, a
		}

		function HS(e, t, r, n) {
			var i = void 0,
				a = t[n];
			if (n === t.length - 1) i = r;
			else {
				var s = ls(e) && ls(e[a]) ? e[a] : typeof t[n + 1] == "number" ? [] : {};
				i = HS(s, t, r, n + 1)
			}
			return cs(e, a, i)
		}

		function fs(e, t, r) {
			return t.length ? HS(e, t, r, 0) : r
		}

		function jS(e, t, r) {
			var n = e?.[t],
				i = r(n);
			return cs(e, t, i)
		}

		function WS(e, t, r) {
			var n = hs(e, t),
				i = r(n);
			return fs(e, t, i)
		}

		function US(e, t, r, n, i, a) {
			for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
			return o.length ? at.call.apply(at, [null, !1, !1, e, t, r, n, i, a].concat(o)) : at(!1, !1, e, t, r, n, i, a)
		}

		function XS(e, t, r, n, i, a) {
			for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
			return o.length ? at.call.apply(at, [null, !1, !0, e, t, r, n, i, a].concat(o)) : at(!1, !0, e, t, r, n, i, a)
		}

		function $S(e, t, r, n, i, a, s) {
			var o = hs(e, t);
			o == null && (o = {});
			for (var l = void 0, f = arguments.length, u = Array(f > 7 ? f - 7 : 0), c = 7; c < f; c++) u[c - 7] = arguments[c];
			return u.length ? l = at.call.apply(at, [null, !1, !1, o, r, n, i, a, s].concat(u)) : l = at(!1, !1, o, r, n, i, a, s), fs(e, t, l)
		}

		function KS(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
				if (z4.call(e, r[i])) {
					n = !0;
					break
				} if (!n) return e;
			for (var a = {}, s = ah(e), o = 0; o < s.length; o++) {
				var l = s[o];
				r.indexOf(l) >= 0 || (a[l] = e[l])
			}
			return a
		}

		function YS(e, t, r, n, i, a) {
			for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
			return o.length ? at.call.apply(at, [null, !0, !1, e, t, r, n, i, a].concat(o)) : at(!0, !1, e, t, r, n, i, a)
		}
		var H4 = {
			clone: us,
			addLast: LS,
			addFirst: kS,
			removeLast: NS,
			removeFirst: BS,
			insert: VS,
			removeAt: GS,
			replaceAt: zS,
			getIn: hs,
			set: cs,
			setIn: fs,
			update: jS,
			updateIn: WS,
			merge: US,
			mergeDeep: XS,
			mergeIn: $S,
			omit: KS,
			addDefaults: YS
		};
		Oe.default = H4
	});
	var ZS = E(ps => {
		"use strict";
		var j4 = lt().default;
		Object.defineProperty(ps, "__esModule", {
			value: !0
		});
		ps.ixRequest = void 0;
		var W4 = j4(Sr()),
			U4 = it(),
			X4 = gn(),
			{
				IX2_PREVIEW_REQUESTED: $4,
				IX2_PLAYBACK_REQUESTED: K4,
				IX2_STOP_REQUESTED: Y4,
				IX2_CLEAR_REQUESTED: Q4
			} = U4.IX2EngineActionTypes,
			Z4 = {
				preview: {},
				playback: {},
				stop: {},
				clear: {}
			},
			QS = Object.create(null, {
				[$4]: {
					value: "preview"
				},
				[K4]: {
					value: "playback"
				},
				[Y4]: {
					value: "stop"
				},
				[Q4]: {
					value: "clear"
				}
			}),
			J4 = (e = Z4, t) => {
				if (t.type in QS) {
					let r = [QS[t.type]];
					return (0, X4.setIn)(e, [r], (0, W4.default)({}, t.payload))
				}
				return e
			};
		ps.ixRequest = J4
	});
	var eT = E(ds => {
		"use strict";
		Object.defineProperty(ds, "__esModule", {
			value: !0
		});
		ds.ixSession = void 0;
		var e$ = it(),
			Nt = gn(),
			{
				IX2_SESSION_INITIALIZED: t$,
				IX2_SESSION_STARTED: r$,
				IX2_TEST_FRAME_RENDERED: n$,
				IX2_SESSION_STOPPED: i$,
				IX2_EVENT_LISTENER_ADDED: a$,
				IX2_EVENT_STATE_CHANGED: s$,
				IX2_ANIMATION_FRAME_CHANGED: o$,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: l$,
				IX2_VIEWPORT_WIDTH_CHANGED: u$,
				IX2_MEDIA_QUERIES_DEFINED: h$
			} = e$.IX2EngineActionTypes,
			JS = {
				active: !1,
				tick: 0,
				eventListeners: [],
				eventState: {},
				playbackState: {},
				viewportWidth: 0,
				mediaQueryKey: null,
				hasBoundaryNodes: !1,
				hasDefinedMediaQueries: !1,
				reducedMotion: !1
			},
			c$ = 20,
			f$ = (e = JS, t) => {
				switch (t.type) {
					case t$: {
						let {
							hasBoundaryNodes: r,
							reducedMotion: n
						} = t.payload;
						return (0, Nt.merge)(e, {
							hasBoundaryNodes: r,
							reducedMotion: n
						})
					}
					case r$:
						return (0, Nt.set)(e, "active", !0);
					case n$: {
						let {
							payload: {
								step: r = c$
							}
						} = t;
						return (0, Nt.set)(e, "tick", e.tick + r)
					}
					case i$:
						return JS;
					case o$: {
						let {
							payload: {
								now: r
							}
						} = t;
						return (0, Nt.set)(e, "tick", r)
					}
					case a$: {
						let r = (0, Nt.addLast)(e.eventListeners, t.payload);
						return (0, Nt.set)(e, "eventListeners", r)
					}
					case s$: {
						let {
							stateKey: r,
							newState: n
						} = t.payload;
						return (0, Nt.setIn)(e, ["eventState", r], n)
					}
					case l$: {
						let {
							actionListId: r,
							isPlaying: n
						} = t.payload;
						return (0, Nt.setIn)(e, ["playbackState", r], n)
					}
					case u$: {
						let {
							width: r,
							mediaQueries: n
						} = t.payload, i = n.length, a = null;
						for (let s = 0; s < i; s++) {
							let {
								key: o,
								min: l,
								max: f
							} = n[s];
							if (r >= l && r <= f) {
								a = o;
								break
							}
						}
						return (0, Nt.merge)(e, {
							viewportWidth: r,
							mediaQueryKey: a
						})
					}
					case h$:
						return (0, Nt.set)(e, "hasDefinedMediaQueries", !0);
					default:
						return e
				}
			};
		ds.ixSession = f$
	});
	var sh = E((wle, tT) => {
		var p$ = ir(),
			d$ = Tr(),
			m$ = zn();

		function v$(e) {
			return function(t, r, n) {
				var i = Object(t);
				if (!d$(t)) {
					var a = p$(r, 3);
					t = m$(t), r = function(o) {
						return a(i[o], o, i)
					}
				}
				var s = e(t, r, n);
				return s > -1 ? i[a ? t[s] : s] : void 0
			}
		}
		tT.exports = v$
	});
	var oh = E((Ole, rT) => {
		var g$ = sh(),
			y$ = Fo(),
			E$ = g$(y$);
		rT.exports = E$
	});
	var vs = E(Je => {
		"use strict";
		var _$ = lt().default;
		Object.defineProperty(Je, "__esModule", {
			value: !0
		});
		Je.withBrowser = Je.TRANSFORM_STYLE_PREFIXED = Je.TRANSFORM_PREFIXED = Je.IS_BROWSER_ENV = Je.FLEX_PREFIXED = Je.ELEMENT_MATCHES = void 0;
		var b$ = _$(oh()),
			iT = typeof window < "u";
		Je.IS_BROWSER_ENV = iT;
		var ms = (e, t) => iT ? e() : t;
		Je.withBrowser = ms;
		var S$ = ms(() => (0, b$.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
		Je.ELEMENT_MATCHES = S$;
		var T$ = ms(() => {
			let e = document.createElement("i"),
				t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
				r = "";
			try {
				let {
					length: n
				} = t;
				for (let i = 0; i < n; i++) {
					let a = t[i];
					if (e.style.display = a, e.style.display === a) return a
				}
				return r
			} catch {
				return r
			}
		}, "flex");
		Je.FLEX_PREFIXED = T$;
		var aT = ms(() => {
			let e = document.createElement("i");
			if (e.style.transform == null) {
				let t = ["Webkit", "Moz", "ms"],
					r = "Transform",
					{
						length: n
					} = t;
				for (let i = 0; i < n; i++) {
					let a = t[i] + r;
					if (e.style[a] !== void 0) return a
				}
			}
			return "transform"
		}, "transform");
		Je.TRANSFORM_PREFIXED = aT;
		var nT = aT.split("transform")[0],
			I$ = nT ? nT + "TransformStyle" : "transformStyle";
		Je.TRANSFORM_STYLE_PREFIXED = I$
	});
	var lh = E((Rle, hT) => {
		var x$ = 4,
			A$ = .001,
			P$ = 1e-7,
			C$ = 10,
			Si = 11,
			gs = 1 / (Si - 1),
			w$ = typeof Float32Array == "function";

		function sT(e, t) {
			return 1 - 3 * t + 3 * e
		}

		function oT(e, t) {
			return 3 * t - 6 * e
		}

		function lT(e) {
			return 3 * e
		}

		function ys(e, t, r) {
			return ((sT(t, r) * e + oT(t, r)) * e + lT(t)) * e
		}

		function uT(e, t, r) {
			return 3 * sT(t, r) * e * e + 2 * oT(t, r) * e + lT(t)
		}

		function O$(e, t, r, n, i) {
			var a, s, o = 0;
			do s = t + (r - t) / 2, a = ys(s, n, i) - e, a > 0 ? r = s : t = s; while (Math.abs(a) > P$ && ++o < C$);
			return s
		}

		function M$(e, t, r, n) {
			for (var i = 0; i < x$; ++i) {
				var a = uT(t, r, n);
				if (a === 0) return t;
				var s = ys(t, r, n) - e;
				t -= s / a
			}
			return t
		}
		hT.exports = function(t, r, n, i) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
			var a = w$ ? new Float32Array(Si) : new Array(Si);
			if (t !== r || n !== i)
				for (var s = 0; s < Si; ++s) a[s] = ys(s * gs, t, n);

			function o(l) {
				for (var f = 0, u = 1, c = Si - 1; u !== c && a[u] <= l; ++u) f += gs;
				--u;
				var v = (l - a[u]) / (a[u + 1] - a[u]),
					d = f + v * gs,
					p = uT(d, t, n);
				return p >= A$ ? M$(l, d, t, n) : p === 0 ? d : O$(l, f, f + gs, t, n)
			}
			return function(f) {
				return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : ys(o(f), r, i)
			}
		}
	});
	var uh = E(ue => {
		"use strict";
		var R$ = lt().default;
		Object.defineProperty(ue, "__esModule", {
			value: !0
		});
		ue.bounce = d6;
		ue.bouncePast = m6;
		ue.easeOut = ue.easeInOut = ue.easeIn = ue.ease = void 0;
		ue.inBack = a6;
		ue.inCirc = t6;
		ue.inCubic = V$;
		ue.inElastic = l6;
		ue.inExpo = Z$;
		ue.inOutBack = o6;
		ue.inOutCirc = n6;
		ue.inOutCubic = z$;
		ue.inOutElastic = h6;
		ue.inOutExpo = e6;
		ue.inOutQuad = B$;
		ue.inOutQuart = W$;
		ue.inOutQuint = $$;
		ue.inOutSine = Q$;
		ue.inQuad = k$;
		ue.inQuart = H$;
		ue.inQuint = U$;
		ue.inSine = K$;
		ue.outBack = s6;
		ue.outBounce = i6;
		ue.outCirc = r6;
		ue.outCubic = G$;
		ue.outElastic = u6;
		ue.outExpo = J$;
		ue.outQuad = N$;
		ue.outQuart = j$;
		ue.outQuint = X$;
		ue.outSine = Y$;
		ue.swingFrom = f6;
		ue.swingFromTo = c6;
		ue.swingTo = p6;
		var Es = R$(lh()),
			Jt = 1.70158,
			D$ = (0, Es.default)(.25, .1, .25, 1);
		ue.ease = D$;
		var F$ = (0, Es.default)(.42, 0, 1, 1);
		ue.easeIn = F$;
		var q$ = (0, Es.default)(0, 0, .58, 1);
		ue.easeOut = q$;
		var L$ = (0, Es.default)(.42, 0, .58, 1);
		ue.easeInOut = L$;

		function k$(e) {
			return Math.pow(e, 2)
		}

		function N$(e) {
			return -(Math.pow(e - 1, 2) - 1)
		}

		function B$(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
		}

		function V$(e) {
			return Math.pow(e, 3)
		}

		function G$(e) {
			return Math.pow(e - 1, 3) + 1
		}

		function z$(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
		}

		function H$(e) {
			return Math.pow(e, 4)
		}

		function j$(e) {
			return -(Math.pow(e - 1, 4) - 1)
		}

		function W$(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
		}

		function U$(e) {
			return Math.pow(e, 5)
		}

		function X$(e) {
			return Math.pow(e - 1, 5) + 1
		}

		function $$(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
		}

		function K$(e) {
			return -Math.cos(e * (Math.PI / 2)) + 1
		}

		function Y$(e) {
			return Math.sin(e * (Math.PI / 2))
		}

		function Q$(e) {
			return -.5 * (Math.cos(Math.PI * e) - 1)
		}

		function Z$(e) {
			return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
		}

		function J$(e) {
			return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
		}

		function e6(e) {
			return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
		}

		function t6(e) {
			return -(Math.sqrt(1 - e * e) - 1)
		}

		function r6(e) {
			return Math.sqrt(1 - Math.pow(e - 1, 2))
		}

		function n6(e) {
			return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
		}

		function i6(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}

		function a6(e) {
			let t = Jt;
			return e * e * ((t + 1) * e - t)
		}

		function s6(e) {
			let t = Jt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1
		}

		function o6(e) {
			let t = Jt;
			return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
		}

		function l6(e) {
			let t = Jt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
		}

		function u6(e) {
			let t = Jt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
		}

		function h6(e) {
			let t = Jt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
		}

		function c6(e) {
			let t = Jt;
			return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
		}

		function f6(e) {
			let t = Jt;
			return e * e * ((t + 1) * e - t)
		}

		function p6(e) {
			let t = Jt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1
		}

		function d6(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}

		function m6(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
		}
	});
	var ch = E(Ti => {
		"use strict";
		var v6 = lt().default,
			g6 = qr().default;
		Object.defineProperty(Ti, "__esModule", {
			value: !0
		});
		Ti.applyEasing = _6;
		Ti.createBezierEasing = E6;
		Ti.optimizeFloat = hh;
		var cT = g6(uh()),
			y6 = v6(lh());

		function hh(e, t = 5, r = 10) {
			let n = Math.pow(r, t),
				i = Number(Math.round(e * n) / n);
			return Math.abs(i) > 1e-4 ? i : 0
		}

		function E6(e) {
			return (0, y6.default)(...e)
		}

		function _6(e, t, r) {
			return t === 0 ? 0 : t === 1 ? 1 : hh(r ? t > 0 ? r(t) : t : t > 0 && e && cT[e] ? cT[e](t) : t)
		}
	});
	var mT = E(yn => {
		"use strict";
		Object.defineProperty(yn, "__esModule", {
			value: !0
		});
		yn.createElementState = dT;
		yn.ixElements = void 0;
		yn.mergeActionState = fh;
		var _s = gn(),
			pT = it(),
			{
				HTML_ELEMENT: qle,
				PLAIN_OBJECT: b6,
				ABSTRACT_NODE: Lle,
				CONFIG_X_VALUE: S6,
				CONFIG_Y_VALUE: T6,
				CONFIG_Z_VALUE: I6,
				CONFIG_VALUE: x6,
				CONFIG_X_UNIT: A6,
				CONFIG_Y_UNIT: P6,
				CONFIG_Z_UNIT: C6,
				CONFIG_UNIT: w6
			} = pT.IX2EngineConstants,
			{
				IX2_SESSION_STOPPED: O6,
				IX2_INSTANCE_ADDED: M6,
				IX2_ELEMENT_STATE_CHANGED: R6
			} = pT.IX2EngineActionTypes,
			fT = {},
			D6 = "refState",
			F6 = (e = fT, t = {}) => {
				switch (t.type) {
					case O6:
						return fT;
					case M6: {
						let {
							elementId: r,
							element: n,
							origin: i,
							actionItem: a,
							refType: s
						} = t.payload, {
							actionTypeId: o
						} = a, l = e;
						return (0, _s.getIn)(l, [r, n]) !== n && (l = dT(l, n, s, r, a)), fh(l, r, o, i, a)
					}
					case R6: {
						let {
							elementId: r,
							actionTypeId: n,
							current: i,
							actionItem: a
						} = t.payload;
						return fh(e, r, n, i, a)
					}
					default:
						return e
				}
			};
		yn.ixElements = F6;

		function dT(e, t, r, n, i) {
			let a = r === b6 ? (0, _s.getIn)(i, ["config", "target", "objectId"]) : null;
			return (0, _s.mergeIn)(e, [n], {
				id: n,
				ref: t,
				refId: a,
				refType: r
			})
		}

		function fh(e, t, r, n, i) {
			let a = L6(i),
				s = [t, D6, r];
			return (0, _s.mergeIn)(e, s, n, a)
		}
		var q6 = [
			[S6, A6],
			[T6, P6],
			[I6, C6],
			[x6, w6]
		];

		function L6(e) {
			let {
				config: t
			} = e;
			return q6.reduce((r, n) => {
				let i = n[0],
					a = n[1],
					s = t[i],
					o = t[a];
				return s != null && o != null && (r[a] = o), r
			}, {})
		}
	});
	var vT = E(ze => {
		"use strict";
		Object.defineProperty(ze, "__esModule", {
			value: !0
		});
		ze.renderPlugin = ze.getPluginOrigin = ze.getPluginDuration = ze.getPluginDestination = ze.getPluginConfig = ze.createPluginInstance = ze.clearPlugin = void 0;
		var k6 = e => e.value;
		ze.getPluginConfig = k6;
		var N6 = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
		};
		ze.getPluginDuration = N6;
		var B6 = e => e || {
			value: 0
		};
		ze.getPluginOrigin = B6;
		var V6 = e => ({
			value: e.value
		});
		ze.getPluginDestination = V6;
		var G6 = e => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t
		};
		ze.createPluginInstance = G6;
		var z6 = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n)
		};
		ze.renderPlugin = z6;
		var H6 = e => {
			window.Webflow.require("lottie").createInstance(e).stop()
		};
		ze.clearPlugin = H6
	});
	var yT = E(He => {
		"use strict";
		Object.defineProperty(He, "__esModule", {
			value: !0
		});
		He.renderPlugin = He.getPluginOrigin = He.getPluginDuration = He.getPluginDestination = He.getPluginConfig = He.createPluginInstance = He.clearPlugin = void 0;
		var j6 = e => document.querySelector(`[data-w-id="${e}"]`),
			W6 = () => window.Webflow.require("spline"),
			U6 = (e, t) => e.filter(r => !t.includes(r)),
			X6 = (e, t) => e.value[t];
		He.getPluginConfig = X6;
		var $6 = () => null;
		He.getPluginDuration = $6;
		var gT = Object.freeze({
				positionX: 0,
				positionY: 0,
				positionZ: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1
			}),
			K6 = (e, t) => {
				let r = t.config.value,
					n = Object.keys(r);
				if (e) {
					let a = Object.keys(e),
						s = U6(n, a);
					return s.length ? s.reduce((l, f) => (l[f] = gT[f], l), e) : e
				}
				return n.reduce((a, s) => (a[s] = gT[s], a), {})
			};
		He.getPluginOrigin = K6;
		var Y6 = e => e.value;
		He.getPluginDestination = Y6;
		var Q6 = (e, t) => {
			var r, n;
			let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
			return i ? j6(i) : null
		};
		He.createPluginInstance = Q6;
		var Z6 = (e, t, r) => {
			let n = W6().getInstance(e),
				i = r.config.target.objectId;
			if (!n || !i) return;
			let a = n.spline.findObjectById(i);
			if (!a) return;
			let {
				PLUGIN_SPLINE: s
			} = t;
			s.positionX != null && (a.position.x = s.positionX), s.positionY != null && (a.position.y = s.positionY), s.positionZ != null && (a.position.z = s.positionZ), s.rotationX != null && (a.rotation.x = s.rotationX), s.rotationY != null && (a.rotation.y = s.rotationY), s.rotationZ != null && (a.rotation.z = s.rotationZ), s.scaleX != null && (a.scale.x = s.scaleX), s.scaleY != null && (a.scale.y = s.scaleY), s.scaleZ != null && (a.scale.z = s.scaleZ)
		};
		He.renderPlugin = Z6;
		var J6 = () => null;
		He.clearPlugin = J6
	});
	var ST = E(bs => {
		"use strict";
		var bT = qr().default,
			eK = lt().default;
		Object.defineProperty(bs, "__esModule", {
			value: !0
		});
		bs.pluginMethodMap = void 0;
		var ET = eK(Sr()),
			_T = it(),
			tK = bT(vT()),
			rK = bT(yT()),
			nK = new Map([
				[_T.ActionTypeConsts.PLUGIN_LOTTIE, (0, ET.default)({}, tK)],
				[_T.ActionTypeConsts.PLUGIN_SPLINE, (0, ET.default)({}, rK)]
			]);
		bs.pluginMethodMap = nK
	});
	var ph = E(Be => {
		"use strict";
		Object.defineProperty(Be, "__esModule", {
			value: !0
		});
		Be.getPluginOrigin = Be.getPluginDuration = Be.getPluginDestination = Be.getPluginConfig = Be.createPluginInstance = Be.clearPlugin = void 0;
		Be.isPluginType = aK;
		Be.renderPlugin = void 0;
		var iK = vs(),
			TT = ST();

		function aK(e) {
			return TT.pluginMethodMap.has(e)
		}
		var Lr = e => t => {
				if (!iK.IS_BROWSER_ENV) return () => null;
				let r = TT.pluginMethodMap.get(t);
				if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
				let n = r[e];
				if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
				return n
			},
			sK = Lr("getPluginConfig");
		Be.getPluginConfig = sK;
		var oK = Lr("getPluginOrigin");
		Be.getPluginOrigin = oK;
		var lK = Lr("getPluginDuration");
		Be.getPluginDuration = lK;
		var uK = Lr("getPluginDestination");
		Be.getPluginDestination = uK;
		var hK = Lr("createPluginInstance");
		Be.createPluginInstance = hK;
		var cK = Lr("renderPlugin");
		Be.renderPlugin = cK;
		var fK = Lr("clearPlugin");
		Be.clearPlugin = fK
	});
	var xT = E((zle, IT) => {
		function pK(e, t) {
			return e == null || e !== e ? t : e
		}
		IT.exports = pK
	});
	var PT = E((Hle, AT) => {
		function dK(e, t, r, n) {
			var i = -1,
				a = e == null ? 0 : e.length;
			for (n && a && (r = e[++i]); ++i < a;) r = t(r, e[i], i, e);
			return r
		}
		AT.exports = dK
	});
	var wT = E((jle, CT) => {
		function mK(e) {
			return function(t, r, n) {
				for (var i = -1, a = Object(t), s = n(t), o = s.length; o--;) {
					var l = s[e ? o : ++i];
					if (r(a[l], l, a) === !1) break
				}
				return t
			}
		}
		CT.exports = mK
	});
	var MT = E((Wle, OT) => {
		var vK = wT(),
			gK = vK();
		OT.exports = gK
	});
	var dh = E((Ule, RT) => {
		var yK = MT(),
			EK = zn();

		function _K(e, t) {
			return e && yK(e, t, EK)
		}
		RT.exports = _K
	});
	var FT = E((Xle, DT) => {
		var bK = Tr();

		function SK(e, t) {
			return function(r, n) {
				if (r == null) return r;
				if (!bK(r)) return e(r, n);
				for (var i = r.length, a = t ? i : -1, s = Object(r);
					(t ? a-- : ++a < i) && n(s[a], a, s) !== !1;);
				return r
			}
		}
		DT.exports = SK
	});
	var mh = E(($le, qT) => {
		var TK = dh(),
			IK = FT(),
			xK = IK(TK);
		qT.exports = xK
	});
	var kT = E((Kle, LT) => {
		function AK(e, t, r, n, i) {
			return i(e, function(a, s, o) {
				r = n ? (n = !1, a) : t(r, a, s, o)
			}), r
		}
		LT.exports = AK
	});
	var BT = E((Yle, NT) => {
		var PK = PT(),
			CK = mh(),
			wK = ir(),
			OK = kT(),
			MK = Ve();

		function RK(e, t, r) {
			var n = MK(e) ? PK : OK,
				i = arguments.length < 3;
			return n(e, wK(t, 4), r, i, CK)
		}
		NT.exports = RK
	});
	var GT = E((Qle, VT) => {
		var DK = ao(),
			FK = ir(),
			qK = Do(),
			LK = Math.max,
			kK = Math.min;

		function NK(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = n - 1;
			return r !== void 0 && (i = qK(r), i = r < 0 ? LK(n + i, 0) : kK(i, n - 1)), DK(e, FK(t, 3), i, !0)
		}
		VT.exports = NK
	});
	var HT = E((Zle, zT) => {
		var BK = sh(),
			VK = GT(),
			GK = BK(VK);
		zT.exports = GK
	});
	var WT = E(Ss => {
		"use strict";
		Object.defineProperty(Ss, "__esModule", {
			value: !0
		});
		Ss.default = void 0;
		var zK = Object.prototype.hasOwnProperty;

		function jT(e, t) {
			return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
		}

		function HK(e, t) {
			if (jT(e, t)) return !0;
			if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
			let r = Object.keys(e),
				n = Object.keys(t);
			if (r.length !== n.length) return !1;
			for (let i = 0; i < r.length; i++)
				if (!zK.call(t, r[i]) || !jT(e[r[i]], t[r[i]])) return !1;
			return !0
		}
		var jK = HK;
		Ss.default = jK
	});
	var hI = E(_e => {
		"use strict";
		var As = lt().default;
		Object.defineProperty(_e, "__esModule", {
			value: !0
		});
		_e.cleanupHTMLElement = z8;
		_e.clearAllStyles = G8;
		_e.clearObjectCache = l8;
		_e.getActionListProgress = j8;
		_e.getAffectedElements = Sh;
		_e.getComputedStyle = v8;
		_e.getDestinationValues = T8;
		_e.getElementId = f8;
		_e.getInstanceId = h8;
		_e.getInstanceOrigin = E8;
		_e.getItemConfigByKey = void 0;
		_e.getMaxDurationItemIndex = uI;
		_e.getNamespacedParameterId = X8;
		_e.getRenderType = sI;
		_e.getStyleProp = I8;
		_e.mediaQueriesEqual = K8;
		_e.observeStore = m8;
		_e.reduceListToGroup = W8;
		_e.reifyState = p8;
		_e.renderHTMLElement = x8;
		Object.defineProperty(_e, "shallowEqual", {
			enumerable: !0,
			get: function() {
				return JT.default
			}
		});
		_e.shouldAllowMediaQuery = $8;
		_e.shouldNamespaceEventParameter = U8;
		_e.stringifyTarget = Y8;
		var vr = As(xT()),
			yh = As(BT()),
			gh = As(HT()),
			UT = gn(),
			kr = it(),
			JT = As(WT()),
			WK = ch(),
			Gt = ph(),
			et = vs(),
			{
				BACKGROUND: UK,
				TRANSFORM: XK,
				TRANSLATE_3D: $K,
				SCALE_3D: KK,
				ROTATE_X: YK,
				ROTATE_Y: QK,
				ROTATE_Z: ZK,
				SKEW: JK,
				PRESERVE_3D: e8,
				FLEX: t8,
				OPACITY: Is,
				FILTER: Ii,
				FONT_VARIATION_SETTINGS: xi,
				WIDTH: Bt,
				HEIGHT: Vt,
				BACKGROUND_COLOR: eI,
				BORDER_COLOR: r8,
				COLOR: n8,
				CHILDREN: XT,
				IMMEDIATE_CHILDREN: i8,
				SIBLINGS: $T,
				PARENT: a8,
				DISPLAY: xs,
				WILL_CHANGE: En,
				AUTO: gr,
				COMMA_DELIMITER: Ai,
				COLON_DELIMITER: s8,
				BAR_DELIMITER: vh,
				RENDER_TRANSFORM: tI,
				RENDER_GENERAL: Eh,
				RENDER_STYLE: _h,
				RENDER_PLUGIN: rI
			} = kr.IX2EngineConstants,
			{
				TRANSFORM_MOVE: _n,
				TRANSFORM_SCALE: bn,
				TRANSFORM_ROTATE: Sn,
				TRANSFORM_SKEW: Pi,
				STYLE_OPACITY: nI,
				STYLE_FILTER: Ci,
				STYLE_FONT_VARIATION: wi,
				STYLE_SIZE: Tn,
				STYLE_BACKGROUND_COLOR: In,
				STYLE_BORDER: xn,
				STYLE_TEXT_COLOR: An,
				GENERAL_DISPLAY: Ps,
				OBJECT_VALUE: o8
			} = kr.ActionTypeConsts,
			iI = e => e.trim(),
			bh = Object.freeze({
				[In]: eI,
				[xn]: r8,
				[An]: n8
			}),
			aI = Object.freeze({
				[et.TRANSFORM_PREFIXED]: XK,
				[eI]: UK,
				[Is]: Is,
				[Ii]: Ii,
				[Bt]: Bt,
				[Vt]: Vt,
				[xi]: xi
			}),
			Ts = new Map;

		function l8() {
			Ts.clear()
		}
		var u8 = 1;

		function h8() {
			return "i" + u8++
		}
		var c8 = 1;

		function f8(e, t) {
			for (let r in e) {
				let n = e[r];
				if (n && n.ref === t) return n.id
			}
			return "e" + c8++
		}

		function p8({
			events: e,
			actionLists: t,
			site: r
		} = {}) {
			let n = (0, yh.default)(e, (s, o) => {
					let {
						eventTypeId: l
					} = o;
					return s[l] || (s[l] = {}), s[l][o.id] = o, s
				}, {}),
				i = r && r.mediaQueries,
				a = [];
			return i ? a = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
				ixData: {
					events: e,
					actionLists: t,
					eventTypeMap: n,
					mediaQueries: i,
					mediaQueryKeys: a
				}
			}
		}
		var d8 = (e, t) => e === t;

		function m8({
			store: e,
			select: t,
			onChange: r,
			comparator: n = d8
		}) {
			let {
				getState: i,
				subscribe: a
			} = e, s = a(l), o = t(i());

			function l() {
				let f = t(i());
				if (f == null) {
					s();
					return
				}
				n(f, o) || (o = f, r(o, e))
			}
			return s
		}

		function KT(e) {
			let t = typeof e;
			if (t === "string") return {
				id: e
			};
			if (e != null && t === "object") {
				let {
					id: r,
					objectId: n,
					selector: i,
					selectorGuids: a,
					appliesTo: s,
					useEventTarget: o
				} = e;
				return {
					id: r,
					objectId: n,
					selector: i,
					selectorGuids: a,
					appliesTo: s,
					useEventTarget: o
				}
			}
			return {}
		}

		function Sh({
			config: e,
			event: t,
			eventTarget: r,
			elementRoot: n,
			elementApi: i
		}) {
			var a, s, o;
			if (!i) throw new Error("IX2 missing elementApi");
			let {
				targets: l
			} = e;
			if (Array.isArray(l) && l.length > 0) return l.reduce((L, H) => L.concat(Sh({
				config: {
					target: H
				},
				event: t,
				eventTarget: r,
				elementRoot: n,
				elementApi: i
			})), []);
			let {
				getValidDocument: f,
				getQuerySelector: u,
				queryDocument: c,
				getChildElements: v,
				getSiblingElements: d,
				matchSelector: p,
				elementContains: m,
				isSiblingNode: h
			} = i, {
				target: g
			} = e;
			if (!g) return [];
			let {
				id: y,
				objectId: _,
				selector: b,
				selectorGuids: S,
				appliesTo: x,
				useEventTarget: T
			} = KT(g);
			if (_) return [Ts.has(_) ? Ts.get(_) : Ts.set(_, {}).get(_)];
			if (x === kr.EventAppliesTo.PAGE) {
				let L = f(y);
				return L ? [L] : []
			}
			let D = ((a = t == null || (s = t.action) === null || s === void 0 || (o = s.config) === null || o === void 0 ? void 0 : o.affectedElements) !== null && a !== void 0 ? a : {})[y || b] || {},
				w = !!(D.id || D.selector),
				C, F, O, R = t && u(KT(t.target));
			if (w ? (C = D.limitAffectedElements, F = R, O = u(D)) : F = O = u({
					id: y,
					selector: b,
					selectorGuids: S
				}), t && T) {
				let L = r && (O || T === !0) ? [r] : c(R);
				if (O) {
					if (T === a8) return c(O).filter(H => L.some(Y => m(H, Y)));
					if (T === XT) return c(O).filter(H => L.some(Y => m(Y, H)));
					if (T === $T) return c(O).filter(H => L.some(Y => h(Y, H)))
				}
				return L
			}
			return F == null || O == null ? [] : et.IS_BROWSER_ENV && n ? c(O).filter(L => n.contains(L)) : C === XT ? c(F, O) : C === i8 ? v(c(F)).filter(p(O)) : C === $T ? d(c(F)).filter(p(O)) : c(O)
		}

		function v8({
			element: e,
			actionItem: t
		}) {
			if (!et.IS_BROWSER_ENV) return {};
			let {
				actionTypeId: r
			} = t;
			switch (r) {
				case Tn:
				case In:
				case xn:
				case An:
				case Ps:
					return window.getComputedStyle(e);
				default:
					return {}
			}
		}
		var YT = /px/,
			g8 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = A8[n.type]), r), e || {}),
			y8 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = P8[n.type] || n.defaultValue || 0), r), e || {});

		function E8(e, t = {}, r = {}, n, i) {
			let {
				getStyle: a
			} = i, {
				actionTypeId: s
			} = n;
			if ((0, Gt.isPluginType)(s)) return (0, Gt.getPluginOrigin)(s)(t[s], n);
			switch (n.actionTypeId) {
				case _n:
				case bn:
				case Sn:
				case Pi:
					return t[n.actionTypeId] || Th[n.actionTypeId];
				case Ci:
					return g8(t[n.actionTypeId], n.config.filters);
				case wi:
					return y8(t[n.actionTypeId], n.config.fontVariations);
				case nI:
					return {
						value: (0, vr.default)(parseFloat(a(e, Is)), 1)
					};
				case Tn: {
					let o = a(e, Bt),
						l = a(e, Vt),
						f, u;
					return n.config.widthUnit === gr ? f = YT.test(o) ? parseFloat(o) : parseFloat(r.width) : f = (0, vr.default)(parseFloat(o), parseFloat(r.width)), n.config.heightUnit === gr ? u = YT.test(l) ? parseFloat(l) : parseFloat(r.height) : u = (0, vr.default)(parseFloat(l), parseFloat(r.height)), {
						widthValue: f,
						heightValue: u
					}
				}
				case In:
				case xn:
				case An:
					return N8({
						element: e,
						actionTypeId: n.actionTypeId,
						computedStyle: r,
						getStyle: a
					});
				case Ps:
					return {
						value: (0, vr.default)(a(e, xs), r.display)
					};
				case o8:
					return t[n.actionTypeId] || {
						value: 0
					};
				default:
					return
			}
		}
		var _8 = (e, t) => (t && (e[t.type] = t.value || 0), e),
			b8 = (e, t) => (t && (e[t.type] = t.value || 0), e),
			S8 = (e, t, r) => {
				if ((0, Gt.isPluginType)(e)) return (0, Gt.getPluginConfig)(e)(r, t);
				switch (e) {
					case Ci: {
						let n = (0, gh.default)(r.filters, ({
							type: i
						}) => i === t);
						return n ? n.value : 0
					}
					case wi: {
						let n = (0, gh.default)(r.fontVariations, ({
							type: i
						}) => i === t);
						return n ? n.value : 0
					}
					default:
						return r[t]
				}
			};
		_e.getItemConfigByKey = S8;

		function T8({
			element: e,
			actionItem: t,
			elementApi: r
		}) {
			if ((0, Gt.isPluginType)(t.actionTypeId)) return (0, Gt.getPluginDestination)(t.actionTypeId)(t.config);
			switch (t.actionTypeId) {
				case _n:
				case bn:
				case Sn:
				case Pi: {
					let {
						xValue: n,
						yValue: i,
						zValue: a
					} = t.config;
					return {
						xValue: n,
						yValue: i,
						zValue: a
					}
				}
				case Tn: {
					let {
						getStyle: n,
						setStyle: i,
						getProperty: a
					} = r, {
						widthUnit: s,
						heightUnit: o
					} = t.config, {
						widthValue: l,
						heightValue: f
					} = t.config;
					if (!et.IS_BROWSER_ENV) return {
						widthValue: l,
						heightValue: f
					};
					if (s === gr) {
						let u = n(e, Bt);
						i(e, Bt, ""), l = a(e, "offsetWidth"), i(e, Bt, u)
					}
					if (o === gr) {
						let u = n(e, Vt);
						i(e, Vt, ""), f = a(e, "offsetHeight"), i(e, Vt, u)
					}
					return {
						widthValue: l,
						heightValue: f
					}
				}
				case In:
				case xn:
				case An: {
					let {
						rValue: n,
						gValue: i,
						bValue: a,
						aValue: s
					} = t.config;
					return {
						rValue: n,
						gValue: i,
						bValue: a,
						aValue: s
					}
				}
				case Ci:
					return t.config.filters.reduce(_8, {});
				case wi:
					return t.config.fontVariations.reduce(b8, {});
				default: {
					let {
						value: n
					} = t.config;
					return {
						value: n
					}
				}
			}
		}

		function sI(e) {
			if (/^TRANSFORM_/.test(e)) return tI;
			if (/^STYLE_/.test(e)) return _h;
			if (/^GENERAL_/.test(e)) return Eh;
			if (/^PLUGIN_/.test(e)) return rI
		}

		function I8(e, t) {
			return e === _h ? t.replace("STYLE_", "").toLowerCase() : null
		}

		function x8(e, t, r, n, i, a, s, o, l) {
			switch (o) {
				case tI:
					return O8(e, t, r, i, s);
				case _h:
					return B8(e, t, r, i, a, s);
				case Eh:
					return V8(e, i, s);
				case rI: {
					let {
						actionTypeId: f
					} = i;
					if ((0, Gt.isPluginType)(f)) return (0, Gt.renderPlugin)(f)(l, t, i)
				}
			}
		}
		var Th = {
				[_n]: Object.freeze({
					xValue: 0,
					yValue: 0,
					zValue: 0
				}),
				[bn]: Object.freeze({
					xValue: 1,
					yValue: 1,
					zValue: 1
				}),
				[Sn]: Object.freeze({
					xValue: 0,
					yValue: 0,
					zValue: 0
				}),
				[Pi]: Object.freeze({
					xValue: 0,
					yValue: 0
				})
			},
			A8 = Object.freeze({
				blur: 0,
				"hue-rotate": 0,
				invert: 0,
				grayscale: 0,
				saturate: 100,
				sepia: 0,
				contrast: 100,
				brightness: 100
			}),
			P8 = Object.freeze({
				wght: 0,
				opsz: 0,
				wdth: 0,
				slnt: 0
			}),
			C8 = (e, t) => {
				let r = (0, gh.default)(t.filters, ({
					type: n
				}) => n === e);
				if (r && r.unit) return r.unit;
				switch (e) {
					case "blur":
						return "px";
					case "hue-rotate":
						return "deg";
					default:
						return "%"
				}
			},
			w8 = Object.keys(Th);

		function O8(e, t, r, n, i) {
			let a = w8.map(o => {
					let l = Th[o],
						{
							xValue: f = l.xValue,
							yValue: u = l.yValue,
							zValue: c = l.zValue,
							xUnit: v = "",
							yUnit: d = "",
							zUnit: p = ""
						} = t[o] || {};
					switch (o) {
						case _n:
							return `${$K}(${f}${v}, ${u}${d}, ${c}${p})`;
						case bn:
							return `${KK}(${f}${v}, ${u}${d}, ${c}${p})`;
						case Sn:
							return `${YK}(${f}${v}) ${QK}(${u}${d}) ${ZK}(${c}${p})`;
						case Pi:
							return `${JK}(${f}${v}, ${u}${d})`;
						default:
							return ""
					}
				}).join(" "),
				{
					setStyle: s
				} = i;
			Nr(e, et.TRANSFORM_PREFIXED, i), s(e, et.TRANSFORM_PREFIXED, a), D8(n, r) && s(e, et.TRANSFORM_STYLE_PREFIXED, e8)
		}

		function M8(e, t, r, n) {
			let i = (0, yh.default)(t, (s, o, l) => `${s} ${l}(${o}${C8(l,r)})`, ""),
				{
					setStyle: a
				} = n;
			Nr(e, Ii, n), a(e, Ii, i)
		}

		function R8(e, t, r, n) {
			let i = (0, yh.default)(t, (s, o, l) => (s.push(`"${l}" ${o}`), s), []).join(", "),
				{
					setStyle: a
				} = n;
			Nr(e, xi, n), a(e, xi, i)
		}

		function D8({
			actionTypeId: e
		}, {
			xValue: t,
			yValue: r,
			zValue: n
		}) {
			return e === _n && n !== void 0 || e === bn && n !== void 0 || e === Sn && (t !== void 0 || r !== void 0)
		}
		var F8 = "\\(([^)]+)\\)",
			q8 = /^rgb/,
			L8 = RegExp(`rgba?${F8}`);

		function k8(e, t) {
			let r = e.exec(t);
			return r ? r[1] : ""
		}

		function N8({
			element: e,
			actionTypeId: t,
			computedStyle: r,
			getStyle: n
		}) {
			let i = bh[t],
				a = n(e, i),
				s = q8.test(a) ? a : r[i],
				o = k8(L8, s).split(Ai);
			return {
				rValue: (0, vr.default)(parseInt(o[0], 10), 255),
				gValue: (0, vr.default)(parseInt(o[1], 10), 255),
				bValue: (0, vr.default)(parseInt(o[2], 10), 255),
				aValue: (0, vr.default)(parseFloat(o[3]), 1)
			}
		}

		function B8(e, t, r, n, i, a) {
			let {
				setStyle: s
			} = a;
			switch (n.actionTypeId) {
				case Tn: {
					let {
						widthUnit: o = "",
						heightUnit: l = ""
					} = n.config, {
						widthValue: f,
						heightValue: u
					} = r;
					f !== void 0 && (o === gr && (o = "px"), Nr(e, Bt, a), s(e, Bt, f + o)), u !== void 0 && (l === gr && (l = "px"), Nr(e, Vt, a), s(e, Vt, u + l));
					break
				}
				case Ci: {
					M8(e, r, n.config, a);
					break
				}
				case wi: {
					R8(e, r, n.config, a);
					break
				}
				case In:
				case xn:
				case An: {
					let o = bh[n.actionTypeId],
						l = Math.round(r.rValue),
						f = Math.round(r.gValue),
						u = Math.round(r.bValue),
						c = r.aValue;
					Nr(e, o, a), s(e, o, c >= 1 ? `rgb(${l},${f},${u})` : `rgba(${l},${f},${u},${c})`);
					break
				}
				default: {
					let {
						unit: o = ""
					} = n.config;
					Nr(e, i, a), s(e, i, r.value + o);
					break
				}
			}
		}

		function V8(e, t, r) {
			let {
				setStyle: n
			} = r;
			switch (t.actionTypeId) {
				case Ps: {
					let {
						value: i
					} = t.config;
					i === t8 && et.IS_BROWSER_ENV ? n(e, xs, et.FLEX_PREFIXED) : n(e, xs, i);
					return
				}
			}
		}

		function Nr(e, t, r) {
			if (!et.IS_BROWSER_ENV) return;
			let n = aI[t];
			if (!n) return;
			let {
				getStyle: i,
				setStyle: a
			} = r, s = i(e, En);
			if (!s) {
				a(e, En, n);
				return
			}
			let o = s.split(Ai).map(iI);
			o.indexOf(n) === -1 && a(e, En, o.concat(n).join(Ai))
		}

		function oI(e, t, r) {
			if (!et.IS_BROWSER_ENV) return;
			let n = aI[t];
			if (!n) return;
			let {
				getStyle: i,
				setStyle: a
			} = r, s = i(e, En);
			!s || s.indexOf(n) === -1 || a(e, En, s.split(Ai).map(iI).filter(o => o !== n).join(Ai))
		}

		function G8({
			store: e,
			elementApi: t
		}) {
			let {
				ixData: r
			} = e.getState(), {
				events: n = {},
				actionLists: i = {}
			} = r;
			Object.keys(n).forEach(a => {
				let s = n[a],
					{
						config: o
					} = s.action,
					{
						actionListId: l
					} = o,
					f = i[l];
				f && QT({
					actionList: f,
					event: s,
					elementApi: t
				})
			}), Object.keys(i).forEach(a => {
				QT({
					actionList: i[a],
					elementApi: t
				})
			})
		}

		function QT({
			actionList: e = {},
			event: t,
			elementApi: r
		}) {
			let {
				actionItemGroups: n,
				continuousParameterGroups: i
			} = e;
			n && n.forEach(a => {
				ZT({
					actionGroup: a,
					event: t,
					elementApi: r
				})
			}), i && i.forEach(a => {
				let {
					continuousActionGroups: s
				} = a;
				s.forEach(o => {
					ZT({
						actionGroup: o,
						event: t,
						elementApi: r
					})
				})
			})
		}

		function ZT({
			actionGroup: e,
			event: t,
			elementApi: r
		}) {
			let {
				actionItems: n
			} = e;
			n.forEach(({
				actionTypeId: i,
				config: a
			}) => {
				let s;
				(0, Gt.isPluginType)(i) ? s = (0, Gt.clearPlugin)(i): s = lI({
					effect: H8,
					actionTypeId: i,
					elementApi: r
				}), Sh({
					config: a,
					event: t,
					elementApi: r
				}).forEach(s)
			})
		}

		function z8(e, t, r) {
			let {
				setStyle: n,
				getStyle: i
			} = r, {
				actionTypeId: a
			} = t;
			if (a === Tn) {
				let {
					config: s
				} = t;
				s.widthUnit === gr && n(e, Bt, ""), s.heightUnit === gr && n(e, Vt, "")
			}
			i(e, En) && lI({
				effect: oI,
				actionTypeId: a,
				elementApi: r
			})(e)
		}
		var lI = ({
			effect: e,
			actionTypeId: t,
			elementApi: r
		}) => n => {
			switch (t) {
				case _n:
				case bn:
				case Sn:
				case Pi:
					e(n, et.TRANSFORM_PREFIXED, r);
					break;
				case Ci:
					e(n, Ii, r);
					break;
				case wi:
					e(n, xi, r);
					break;
				case nI:
					e(n, Is, r);
					break;
				case Tn:
					e(n, Bt, r), e(n, Vt, r);
					break;
				case In:
				case xn:
				case An:
					e(n, bh[t], r);
					break;
				case Ps:
					e(n, xs, r);
					break
			}
		};

		function H8(e, t, r) {
			let {
				setStyle: n
			} = r;
			oI(e, t, r), n(e, t, ""), t === et.TRANSFORM_PREFIXED && n(e, et.TRANSFORM_STYLE_PREFIXED, "")
		}

		function uI(e) {
			let t = 0,
				r = 0;
			return e.forEach((n, i) => {
				let {
					config: a
				} = n, s = a.delay + a.duration;
				s >= t && (t = s, r = i)
			}), r
		}

		function j8(e, t) {
			let {
				actionItemGroups: r,
				useFirstGroupAsInitialState: n
			} = e, {
				actionItem: i,
				verboseTimeElapsed: a = 0
			} = t, s = 0, o = 0;
			return r.forEach((l, f) => {
				if (n && f === 0) return;
				let {
					actionItems: u
				} = l, c = u[uI(u)], {
					config: v,
					actionTypeId: d
				} = c;
				i.id === c.id && (o = s + a);
				let p = sI(d) === Eh ? 0 : v.duration;
				s += v.delay + p
			}), s > 0 ? (0, WK.optimizeFloat)(o / s) : 0
		}

		function W8({
			actionList: e,
			actionItemId: t,
			rawData: r
		}) {
			let {
				actionItemGroups: n,
				continuousParameterGroups: i
			} = e, a = [], s = o => (a.push((0, UT.mergeIn)(o, ["config"], {
				delay: 0,
				duration: 0
			})), o.id === t);
			return n && n.some(({
				actionItems: o
			}) => o.some(s)), i && i.some(o => {
				let {
					continuousActionGroups: l
				} = o;
				return l.some(({
					actionItems: f
				}) => f.some(s))
			}), (0, UT.setIn)(r, ["actionLists"], {
				[e.id]: {
					id: e.id,
					actionItemGroups: [{
						actionItems: a
					}]
				}
			})
		}

		function U8(e, {
			basedOn: t
		}) {
			return e === kr.EventTypeConsts.SCROLLING_IN_VIEW && (t === kr.EventBasedOn.ELEMENT || t == null) || e === kr.EventTypeConsts.MOUSE_MOVE && t === kr.EventBasedOn.ELEMENT
		}

		function X8(e, t) {
			return e + s8 + t
		}

		function $8(e, t) {
			return t == null ? !0 : e.indexOf(t) !== -1
		}

		function K8(e, t) {
			return (0, JT.default)(e && e.sort(), t && t.sort())
		}

		function Y8(e) {
			if (typeof e == "string") return e;
			if (e.pluginElement && e.objectId) return e.pluginElement + vh + e.objectId;
			let {
				id: t = "",
				selector: r = "",
				useEventTarget: n = ""
			} = e;
			return t + vh + r + vh + n
		}
	});
	var Br = E(tt => {
		"use strict";
		var Pn = qr().default;
		Object.defineProperty(tt, "__esModule", {
			value: !0
		});
		tt.IX2VanillaUtils = tt.IX2VanillaPlugins = tt.IX2ElementsReducer = tt.IX2Easings = tt.IX2EasingUtils = tt.IX2BrowserSupport = void 0;
		var Q8 = Pn(vs());
		tt.IX2BrowserSupport = Q8;
		var Z8 = Pn(uh());
		tt.IX2Easings = Z8;
		var J8 = Pn(ch());
		tt.IX2EasingUtils = J8;
		var e9 = Pn(mT());
		tt.IX2ElementsReducer = e9;
		var t9 = Pn(ph());
		tt.IX2VanillaPlugins = t9;
		var r9 = Pn(hI());
		tt.IX2VanillaUtils = r9
	});
	var dI = E(ws => {
		"use strict";
		Object.defineProperty(ws, "__esModule", {
			value: !0
		});
		ws.ixInstances = void 0;
		var cI = it(),
			fI = Br(),
			Cn = gn(),
			{
				IX2_RAW_DATA_IMPORTED: n9,
				IX2_SESSION_STOPPED: i9,
				IX2_INSTANCE_ADDED: a9,
				IX2_INSTANCE_STARTED: s9,
				IX2_INSTANCE_REMOVED: o9,
				IX2_ANIMATION_FRAME_CHANGED: l9
			} = cI.IX2EngineActionTypes,
			{
				optimizeFloat: Cs,
				applyEasing: pI,
				createBezierEasing: u9
			} = fI.IX2EasingUtils,
			{
				RENDER_GENERAL: h9
			} = cI.IX2EngineConstants,
			{
				getItemConfigByKey: Ih,
				getRenderType: c9,
				getStyleProp: f9
			} = fI.IX2VanillaUtils,
			p9 = (e, t) => {
				let {
					position: r,
					parameterId: n,
					actionGroups: i,
					destinationKeys: a,
					smoothing: s,
					restingValue: o,
					actionTypeId: l,
					customEasingFn: f,
					skipMotion: u,
					skipToValue: c
				} = e, {
					parameters: v
				} = t.payload, d = Math.max(1 - s, .01), p = v[n];
				p == null && (d = 1, p = o);
				let m = Math.max(p, 0) || 0,
					h = Cs(m - r),
					g = u ? c : Cs(r + h * d),
					y = g * 100;
				if (g === r && e.current) return e;
				let _, b, S, x;
				for (let P = 0, {
						length: D
					} = i; P < D; P++) {
					let {
						keyframe: w,
						actionItems: C
					} = i[P];
					if (P === 0 && (_ = C[0]), y >= w) {
						_ = C[0];
						let F = i[P + 1],
							O = F && y !== w;
						b = O ? F.actionItems[0] : null, O && (S = w / 100, x = (F.keyframe - w) / 100)
					}
				}
				let T = {};
				if (_ && !b)
					for (let P = 0, {
							length: D
						} = a; P < D; P++) {
						let w = a[P];
						T[w] = Ih(l, w, _.config)
					} else if (_ && b && S !== void 0 && x !== void 0) {
						let P = (g - S) / x,
							D = _.config.easing,
							w = pI(D, P, f);
						for (let C = 0, {
								length: F
							} = a; C < F; C++) {
							let O = a[C],
								R = Ih(l, O, _.config),
								Y = (Ih(l, O, b.config) - R) * w + R;
							T[O] = Y
						}
					} return (0, Cn.merge)(e, {
					position: g,
					current: T
				})
			},
			d9 = (e, t) => {
				let {
					active: r,
					origin: n,
					start: i,
					immediate: a,
					renderType: s,
					verbose: o,
					actionItem: l,
					destination: f,
					destinationKeys: u,
					pluginDuration: c,
					instanceDelay: v,
					customEasingFn: d,
					skipMotion: p
				} = e, m = l.config.easing, {
					duration: h,
					delay: g
				} = l.config;
				c != null && (h = c), g = v ?? g, s === h9 ? h = 0 : (a || p) && (h = g = 0);
				let {
					now: y
				} = t.payload;
				if (r && n) {
					let _ = y - (i + g);
					if (o) {
						let P = y - i,
							D = h + g,
							w = Cs(Math.min(Math.max(0, P / D), 1));
						e = (0, Cn.set)(e, "verboseTimeElapsed", D * w)
					}
					if (_ < 0) return e;
					let b = Cs(Math.min(Math.max(0, _ / h), 1)),
						S = pI(m, b, d),
						x = {},
						T = null;
					return u.length && (T = u.reduce((P, D) => {
						let w = f[D],
							C = parseFloat(n[D]) || 0,
							O = (parseFloat(w) - C) * S + C;
						return P[D] = O, P
					}, {})), x.current = T, x.position = b, b === 1 && (x.active = !1, x.complete = !0), (0, Cn.merge)(e, x)
				}
				return e
			},
			m9 = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case n9:
						return t.payload.ixInstances || Object.freeze({});
					case i9:
						return Object.freeze({});
					case a9: {
						let {
							instanceId: r,
							elementId: n,
							actionItem: i,
							eventId: a,
							eventTarget: s,
							eventStateKey: o,
							actionListId: l,
							groupIndex: f,
							isCarrier: u,
							origin: c,
							destination: v,
							immediate: d,
							verbose: p,
							continuous: m,
							parameterId: h,
							actionGroups: g,
							smoothing: y,
							restingValue: _,
							pluginInstance: b,
							pluginDuration: S,
							instanceDelay: x,
							skipMotion: T,
							skipToValue: P
						} = t.payload, {
							actionTypeId: D
						} = i, w = c9(D), C = f9(w, D), F = Object.keys(v).filter(R => v[R] != null), {
							easing: O
						} = i.config;
						return (0, Cn.set)(e, r, {
							id: r,
							elementId: n,
							active: !1,
							position: 0,
							start: 0,
							origin: c,
							destination: v,
							destinationKeys: F,
							immediate: d,
							verbose: p,
							current: null,
							actionItem: i,
							actionTypeId: D,
							eventId: a,
							eventTarget: s,
							eventStateKey: o,
							actionListId: l,
							groupIndex: f,
							renderType: w,
							isCarrier: u,
							styleProp: C,
							continuous: m,
							parameterId: h,
							actionGroups: g,
							smoothing: y,
							restingValue: _,
							pluginInstance: b,
							pluginDuration: S,
							instanceDelay: x,
							skipMotion: T,
							skipToValue: P,
							customEasingFn: Array.isArray(O) && O.length === 4 ? u9(O) : void 0
						})
					}
					case s9: {
						let {
							instanceId: r,
							time: n
						} = t.payload;
						return (0, Cn.mergeIn)(e, [r], {
							active: !0,
							complete: !1,
							start: n
						})
					}
					case o9: {
						let {
							instanceId: r
						} = t.payload;
						if (!e[r]) return e;
						let n = {},
							i = Object.keys(e),
							{
								length: a
							} = i;
						for (let s = 0; s < a; s++) {
							let o = i[s];
							o !== r && (n[o] = e[o])
						}
						return n
					}
					case l9: {
						let r = e,
							n = Object.keys(e),
							{
								length: i
							} = n;
						for (let a = 0; a < i; a++) {
							let s = n[a],
								o = e[s],
								l = o.continuous ? p9 : d9;
							r = (0, Cn.set)(r, s, l(o, t))
						}
						return r
					}
					default:
						return e
				}
			};
		ws.ixInstances = m9
	});
	var mI = E(Os => {
		"use strict";
		Object.defineProperty(Os, "__esModule", {
			value: !0
		});
		Os.ixParameters = void 0;
		var v9 = it(),
			{
				IX2_RAW_DATA_IMPORTED: g9,
				IX2_SESSION_STOPPED: y9,
				IX2_PARAMETER_CHANGED: E9
			} = v9.IX2EngineActionTypes,
			_9 = (e = {}, t) => {
				switch (t.type) {
					case g9:
						return t.payload.ixParameters || {};
					case y9:
						return {};
					case E9: {
						let {
							key: r,
							value: n
						} = t.payload;
						return e[r] = n, e
					}
					default:
						return e
				}
			};
		Os.ixParameters = _9
	});
	var vI = E(Ms => {
		"use strict";
		Object.defineProperty(Ms, "__esModule", {
			value: !0
		});
		Ms.default = void 0;
		var b9 = Ju(),
			S9 = DS(),
			T9 = ZS(),
			I9 = eT(),
			x9 = Br(),
			A9 = dI(),
			P9 = mI(),
			{
				ixElements: C9
			} = x9.IX2ElementsReducer,
			w9 = (0, b9.combineReducers)({
				ixData: S9.ixData,
				ixRequest: T9.ixRequest,
				ixSession: I9.ixSession,
				ixElements: C9,
				ixInstances: A9.ixInstances,
				ixParameters: P9.ixParameters
			});
		Ms.default = w9
	});
	var gI = E((aue, Oi) => {
		function O9(e, t) {
			if (e == null) return {};
			var r = {},
				n = Object.keys(e),
				i, a;
			for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
			return r
		}
		Oi.exports = O9, Oi.exports.__esModule = !0, Oi.exports.default = Oi.exports
	});
	var EI = E((sue, yI) => {
		var M9 = rr(),
			R9 = Ve(),
			D9 = jt(),
			F9 = "[object String]";

		function q9(e) {
			return typeof e == "string" || !R9(e) && D9(e) && M9(e) == F9
		}
		yI.exports = q9
	});
	var bI = E((oue, _I) => {
		var L9 = Ro(),
			k9 = L9("length");
		_I.exports = k9
	});
	var TI = E((lue, SI) => {
		var N9 = "\\ud800-\\udfff",
			B9 = "\\u0300-\\u036f",
			V9 = "\\ufe20-\\ufe2f",
			G9 = "\\u20d0-\\u20ff",
			z9 = B9 + V9 + G9,
			H9 = "\\ufe0e\\ufe0f",
			j9 = "\\u200d",
			W9 = RegExp("[" + j9 + N9 + z9 + H9 + "]");

		function U9(e) {
			return W9.test(e)
		}
		SI.exports = U9
	});
	var RI = E((uue, MI) => {
		var xI = "\\ud800-\\udfff",
			X9 = "\\u0300-\\u036f",
			$9 = "\\ufe20-\\ufe2f",
			K9 = "\\u20d0-\\u20ff",
			Y9 = X9 + $9 + K9,
			Q9 = "\\ufe0e\\ufe0f",
			Z9 = "[" + xI + "]",
			xh = "[" + Y9 + "]",
			Ah = "\\ud83c[\\udffb-\\udfff]",
			J9 = "(?:" + xh + "|" + Ah + ")",
			AI = "[^" + xI + "]",
			PI = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			CI = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			e7 = "\\u200d",
			wI = J9 + "?",
			OI = "[" + Q9 + "]?",
			t7 = "(?:" + e7 + "(?:" + [AI, PI, CI].join("|") + ")" + OI + wI + ")*",
			r7 = OI + wI + t7,
			n7 = "(?:" + [AI + xh + "?", xh, PI, CI, Z9].join("|") + ")",
			II = RegExp(Ah + "(?=" + Ah + ")|" + n7 + r7, "g");

		function i7(e) {
			for (var t = II.lastIndex = 0; II.test(e);) ++t;
			return t
		}
		MI.exports = i7
	});
	var FI = E((hue, DI) => {
		var a7 = bI(),
			s7 = TI(),
			o7 = RI();

		function l7(e) {
			return s7(e) ? o7(e) : a7(e)
		}
		DI.exports = l7
	});
	var LI = E((cue, qI) => {
		var u7 = Ki(),
			h7 = Yi(),
			c7 = Tr(),
			f7 = EI(),
			p7 = FI(),
			d7 = "[object Map]",
			m7 = "[object Set]";

		function v7(e) {
			if (e == null) return 0;
			if (c7(e)) return f7(e) ? p7(e) : e.length;
			var t = h7(e);
			return t == d7 || t == m7 ? e.size : u7(e).length
		}
		qI.exports = v7
	});
	var NI = E((fue, kI) => {
		var g7 = "Expected a function";

		function y7(e) {
			if (typeof e != "function") throw new TypeError(g7);
			return function() {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		kI.exports = y7
	});
	var Ph = E((pue, BI) => {
		var E7 = nr(),
			_7 = function() {
				try {
					var e = E7(Object, "defineProperty");
					return e({}, "", {}), e
				} catch {}
			}();
		BI.exports = _7
	});
	var Ch = E((due, GI) => {
		var VI = Ph();

		function b7(e, t, r) {
			t == "__proto__" && VI ? VI(e, t, {
				configurable: !0,
				enumerable: !0,
				value: r,
				writable: !0
			}) : e[t] = r
		}
		GI.exports = b7
	});
	var HI = E((mue, zI) => {
		var S7 = Ch(),
			T7 = Bi(),
			I7 = Object.prototype,
			x7 = I7.hasOwnProperty;

		function A7(e, t, r) {
			var n = e[t];
			(!(x7.call(e, t) && T7(n, r)) || r === void 0 && !(t in e)) && S7(e, t, r)
		}
		zI.exports = A7
	});
	var UI = E((vue, WI) => {
		var P7 = HI(),
			C7 = jn(),
			w7 = Wi(),
			jI = Rt(),
			O7 = Zr();

		function M7(e, t, r, n) {
			if (!jI(e)) return e;
			t = C7(t, e);
			for (var i = -1, a = t.length, s = a - 1, o = e; o != null && ++i < a;) {
				var l = O7(t[i]),
					f = r;
				if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
				if (i != s) {
					var u = o[l];
					f = n ? n(u, l, o) : void 0, f === void 0 && (f = jI(u) ? u : w7(t[i + 1]) ? [] : {})
				}
				P7(o, l, f), o = o[l]
			}
			return e
		}
		WI.exports = M7
	});
	var $I = E((gue, XI) => {
		var R7 = Ji(),
			D7 = UI(),
			F7 = jn();

		function q7(e, t, r) {
			for (var n = -1, i = t.length, a = {}; ++n < i;) {
				var s = t[n],
					o = R7(e, s);
				r(o, s) && D7(a, F7(s, e), o)
			}
			return a
		}
		XI.exports = q7
	});
	var YI = E((yue, KI) => {
		var L7 = Hi(),
			k7 = Vu(),
			N7 = vo(),
			B7 = mo(),
			V7 = Object.getOwnPropertySymbols,
			G7 = V7 ? function(e) {
				for (var t = []; e;) L7(t, N7(e)), e = k7(e);
				return t
			} : B7;
		KI.exports = G7
	});
	var ZI = E((Eue, QI) => {
		function z7(e) {
			var t = [];
			if (e != null)
				for (var r in Object(e)) t.push(r);
			return t
		}
		QI.exports = z7
	});
	var ex = E((_ue, JI) => {
		var H7 = Rt(),
			j7 = $i(),
			W7 = ZI(),
			U7 = Object.prototype,
			X7 = U7.hasOwnProperty;

		function $7(e) {
			if (!H7(e)) return W7(e);
			var t = j7(e),
				r = [];
			for (var n in e) n == "constructor" && (t || !X7.call(e, n)) || r.push(n);
			return r
		}
		JI.exports = $7
	});
	var rx = E((bue, tx) => {
		var K7 = yo(),
			Y7 = ex(),
			Q7 = Tr();

		function Z7(e) {
			return Q7(e) ? K7(e, !0) : Y7(e)
		}
		tx.exports = Z7
	});
	var ix = E((Sue, nx) => {
		var J7 = po(),
			eY = YI(),
			tY = rx();

		function rY(e) {
			return J7(e, tY, eY)
		}
		nx.exports = rY
	});
	var sx = E((Tue, ax) => {
		var nY = Mo(),
			iY = ir(),
			aY = $I(),
			sY = ix();

		function oY(e, t) {
			if (e == null) return {};
			var r = nY(sY(e), function(n) {
				return [n]
			});
			return t = iY(t), aY(e, r, function(n, i) {
				return t(n, i[0])
			})
		}
		ax.exports = oY
	});
	var lx = E((Iue, ox) => {
		var lY = ir(),
			uY = NI(),
			hY = sx();

		function cY(e, t) {
			return hY(e, uY(lY(t)))
		}
		ox.exports = cY
	});
	var hx = E((xue, ux) => {
		var fY = Ki(),
			pY = Yi(),
			dY = Nn(),
			mY = Ve(),
			vY = Tr(),
			gY = ji(),
			yY = $i(),
			EY = Xi(),
			_Y = "[object Map]",
			bY = "[object Set]",
			SY = Object.prototype,
			TY = SY.hasOwnProperty;

		function IY(e) {
			if (e == null) return !0;
			if (vY(e) && (mY(e) || typeof e == "string" || typeof e.splice == "function" || gY(e) || EY(e) || dY(e))) return !e.length;
			var t = pY(e);
			if (t == _Y || t == bY) return !e.size;
			if (yY(e)) return !fY(e).length;
			for (var r in e)
				if (TY.call(e, r)) return !1;
			return !0
		}
		ux.exports = IY
	});
	var fx = E((Aue, cx) => {
		var xY = Ch(),
			AY = dh(),
			PY = ir();

		function CY(e, t) {
			var r = {};
			return t = PY(t, 3), AY(e, function(n, i, a) {
				xY(r, i, t(n, i, a))
			}), r
		}
		cx.exports = CY
	});
	var dx = E((Pue, px) => {
		function wY(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
			return e
		}
		px.exports = wY
	});
	var vx = E((Cue, mx) => {
		var OY = ta();

		function MY(e) {
			return typeof e == "function" ? e : OY
		}
		mx.exports = MY
	});
	var yx = E((wue, gx) => {
		var RY = dx(),
			DY = mh(),
			FY = vx(),
			qY = Ve();

		function LY(e, t) {
			var r = qY(e) ? RY : DY;
			return r(e, FY(t))
		}
		gx.exports = LY
	});
	var _x = E((Oue, Ex) => {
		var kY = St(),
			NY = function() {
				return kY.Date.now()
			};
		Ex.exports = NY
	});
	var Tx = E((Mue, Sx) => {
		var BY = Rt(),
			wh = _x(),
			bx = ra(),
			VY = "Expected a function",
			GY = Math.max,
			zY = Math.min;

		function HY(e, t, r) {
			var n, i, a, s, o, l, f = 0,
				u = !1,
				c = !1,
				v = !0;
			if (typeof e != "function") throw new TypeError(VY);
			t = bx(t) || 0, BY(r) && (u = !!r.leading, c = "maxWait" in r, a = c ? GY(bx(r.maxWait) || 0, t) : a, v = "trailing" in r ? !!r.trailing : v);

			function d(x) {
				var T = n,
					P = i;
				return n = i = void 0, f = x, s = e.apply(P, T), s
			}

			function p(x) {
				return f = x, o = setTimeout(g, t), u ? d(x) : s
			}

			function m(x) {
				var T = x - l,
					P = x - f,
					D = t - T;
				return c ? zY(D, a - P) : D
			}

			function h(x) {
				var T = x - l,
					P = x - f;
				return l === void 0 || T >= t || T < 0 || c && P >= a
			}

			function g() {
				var x = wh();
				if (h(x)) return y(x);
				o = setTimeout(g, m(x))
			}

			function y(x) {
				return o = void 0, v && n ? d(x) : (n = i = void 0, s)
			}

			function _() {
				o !== void 0 && clearTimeout(o), f = 0, n = l = i = o = void 0
			}

			function b() {
				return o === void 0 ? s : y(wh())
			}

			function S() {
				var x = wh(),
					T = h(x);
				if (n = arguments, i = this, l = x, T) {
					if (o === void 0) return p(l);
					if (c) return clearTimeout(o), o = setTimeout(g, t), d(l)
				}
				return o === void 0 && (o = setTimeout(g, t)), s
			}
			return S.cancel = _, S.flush = b, S
		}
		Sx.exports = HY
	});
	var xx = E((Rue, Ix) => {
		var jY = Tx(),
			WY = Rt(),
			UY = "Expected a function";

		function XY(e, t, r) {
			var n = !0,
				i = !0;
			if (typeof e != "function") throw new TypeError(UY);
			return WY(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), jY(e, t, {
				leading: n,
				maxWait: t,
				trailing: i
			})
		}
		Ix.exports = XY
	});
	var Rs = E(ce => {
		"use strict";
		var $Y = lt().default;
		Object.defineProperty(ce, "__esModule", {
			value: !0
		});
		ce.viewportWidthChanged = ce.testFrameRendered = ce.stopRequested = ce.sessionStopped = ce.sessionStarted = ce.sessionInitialized = ce.rawDataImported = ce.previewRequested = ce.playbackRequested = ce.parameterChanged = ce.mediaQueriesDefined = ce.instanceStarted = ce.instanceRemoved = ce.instanceAdded = ce.eventStateChanged = ce.eventListenerAdded = ce.elementStateChanged = ce.clearRequested = ce.animationFrameChanged = ce.actionListPlaybackChanged = void 0;
		var Ax = $Y(Sr()),
			Px = it(),
			KY = Br(),
			{
				IX2_RAW_DATA_IMPORTED: YY,
				IX2_SESSION_INITIALIZED: QY,
				IX2_SESSION_STARTED: ZY,
				IX2_SESSION_STOPPED: JY,
				IX2_PREVIEW_REQUESTED: eQ,
				IX2_PLAYBACK_REQUESTED: tQ,
				IX2_STOP_REQUESTED: rQ,
				IX2_CLEAR_REQUESTED: nQ,
				IX2_EVENT_LISTENER_ADDED: iQ,
				IX2_TEST_FRAME_RENDERED: aQ,
				IX2_EVENT_STATE_CHANGED: sQ,
				IX2_ANIMATION_FRAME_CHANGED: oQ,
				IX2_PARAMETER_CHANGED: lQ,
				IX2_INSTANCE_ADDED: uQ,
				IX2_INSTANCE_STARTED: hQ,
				IX2_INSTANCE_REMOVED: cQ,
				IX2_ELEMENT_STATE_CHANGED: fQ,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: pQ,
				IX2_VIEWPORT_WIDTH_CHANGED: dQ,
				IX2_MEDIA_QUERIES_DEFINED: mQ
			} = Px.IX2EngineActionTypes,
			{
				reifyState: vQ
			} = KY.IX2VanillaUtils,
			gQ = e => ({
				type: YY,
				payload: (0, Ax.default)({}, vQ(e))
			});
		ce.rawDataImported = gQ;
		var yQ = ({
			hasBoundaryNodes: e,
			reducedMotion: t
		}) => ({
			type: QY,
			payload: {
				hasBoundaryNodes: e,
				reducedMotion: t
			}
		});
		ce.sessionInitialized = yQ;
		var EQ = () => ({
			type: ZY
		});
		ce.sessionStarted = EQ;
		var _Q = () => ({
			type: JY
		});
		ce.sessionStopped = _Q;
		var bQ = ({
			rawData: e,
			defer: t
		}) => ({
			type: eQ,
			payload: {
				defer: t,
				rawData: e
			}
		});
		ce.previewRequested = bQ;
		var SQ = ({
			actionTypeId: e = Px.ActionTypeConsts.GENERAL_START_ACTION,
			actionListId: t,
			actionItemId: r,
			eventId: n,
			allowEvents: i,
			immediate: a,
			testManual: s,
			verbose: o,
			rawData: l
		}) => ({
			type: tQ,
			payload: {
				actionTypeId: e,
				actionListId: t,
				actionItemId: r,
				testManual: s,
				eventId: n,
				allowEvents: i,
				immediate: a,
				verbose: o,
				rawData: l
			}
		});
		ce.playbackRequested = SQ;
		var TQ = e => ({
			type: rQ,
			payload: {
				actionListId: e
			}
		});
		ce.stopRequested = TQ;
		var IQ = () => ({
			type: nQ
		});
		ce.clearRequested = IQ;
		var xQ = (e, t) => ({
			type: iQ,
			payload: {
				target: e,
				listenerParams: t
			}
		});
		ce.eventListenerAdded = xQ;
		var AQ = (e = 1) => ({
			type: aQ,
			payload: {
				step: e
			}
		});
		ce.testFrameRendered = AQ;
		var PQ = (e, t) => ({
			type: sQ,
			payload: {
				stateKey: e,
				newState: t
			}
		});
		ce.eventStateChanged = PQ;
		var CQ = (e, t) => ({
			type: oQ,
			payload: {
				now: e,
				parameters: t
			}
		});
		ce.animationFrameChanged = CQ;
		var wQ = (e, t) => ({
			type: lQ,
			payload: {
				key: e,
				value: t
			}
		});
		ce.parameterChanged = wQ;
		var OQ = e => ({
			type: uQ,
			payload: (0, Ax.default)({}, e)
		});
		ce.instanceAdded = OQ;
		var MQ = (e, t) => ({
			type: hQ,
			payload: {
				instanceId: e,
				time: t
			}
		});
		ce.instanceStarted = MQ;
		var RQ = e => ({
			type: cQ,
			payload: {
				instanceId: e
			}
		});
		ce.instanceRemoved = RQ;
		var DQ = (e, t, r, n) => ({
			type: fQ,
			payload: {
				elementId: e,
				actionTypeId: t,
				current: r,
				actionItem: n
			}
		});
		ce.elementStateChanged = DQ;
		var FQ = ({
			actionListId: e,
			isPlaying: t
		}) => ({
			type: pQ,
			payload: {
				actionListId: e,
				isPlaying: t
			}
		});
		ce.actionListPlaybackChanged = FQ;
		var qQ = ({
			width: e,
			mediaQueries: t
		}) => ({
			type: dQ,
			payload: {
				width: e,
				mediaQueries: t
			}
		});
		ce.viewportWidthChanged = qQ;
		var LQ = () => ({
			type: mQ
		});
		ce.mediaQueriesDefined = LQ
	});
	var Ox = E(je => {
		"use strict";
		Object.defineProperty(je, "__esModule", {
			value: !0
		});
		je.elementContains = $Q;
		je.getChildElements = YQ;
		je.getClosestElement = void 0;
		je.getProperty = HQ;
		je.getQuerySelector = WQ;
		je.getRefType = JQ;
		je.getSiblingElements = QQ;
		je.getStyle = zQ;
		je.getValidDocument = UQ;
		je.isSiblingNode = KQ;
		je.matchSelector = jQ;
		je.queryDocument = XQ;
		je.setStyle = GQ;
		var kQ = Br(),
			NQ = it(),
			{
				ELEMENT_MATCHES: Oh
			} = kQ.IX2BrowserSupport,
			{
				IX2_ID_DELIMITER: Cx,
				HTML_ELEMENT: BQ,
				PLAIN_OBJECT: VQ,
				WF_PAGE: wx
			} = NQ.IX2EngineConstants;

		function GQ(e, t, r) {
			e.style[t] = r
		}

		function zQ(e, t) {
			return e.style[t]
		}

		function HQ(e, t) {
			return e[t]
		}

		function jQ(e) {
			return t => t[Oh](e)
		}

		function WQ({
			id: e,
			selector: t
		}) {
			if (e) {
				let r = e;
				if (e.indexOf(Cx) !== -1) {
					let n = e.split(Cx),
						i = n[0];
					if (r = n[1], i !== document.documentElement.getAttribute(wx)) return null
				}
				return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
			}
			return t
		}

		function UQ(e) {
			return e == null || e === document.documentElement.getAttribute(wx) ? document : null
		}

		function XQ(e, t) {
			return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
		}

		function $Q(e, t) {
			return e.contains(t)
		}

		function KQ(e, t) {
			return e !== t && e.parentNode === t.parentNode
		}

		function YQ(e) {
			let t = [];
			for (let r = 0, {
					length: n
				} = e || []; r < n; r++) {
				let {
					children: i
				} = e[r], {
					length: a
				} = i;
				if (a)
					for (let s = 0; s < a; s++) t.push(i[s])
			}
			return t
		}

		function QQ(e = []) {
			let t = [],
				r = [];
			for (let n = 0, {
					length: i
				} = e; n < i; n++) {
				let {
					parentNode: a
				} = e[n];
				if (!a || !a.children || !a.children.length || r.indexOf(a) !== -1) continue;
				r.push(a);
				let s = a.firstElementChild;
				for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
			}
			return t
		}
		var ZQ = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
			if (!document.documentElement.contains(e)) return null;
			let r = e;
			do {
				if (r[Oh] && r[Oh](t)) return r;
				r = r.parentNode
			} while (r != null);
			return null
		};
		je.getClosestElement = ZQ;

		function JQ(e) {
			return e != null && typeof e == "object" ? e instanceof Element ? BQ : VQ : null
		}
	});
	var Mh = E((que, Rx) => {
		var eZ = Rt(),
			Mx = Object.create,
			tZ = function() {
				function e() {}
				return function(t) {
					if (!eZ(t)) return {};
					if (Mx) return Mx(t);
					e.prototype = t;
					var r = new e;
					return e.prototype = void 0, r
				}
			}();
		Rx.exports = tZ
	});
	var Ds = E((Lue, Dx) => {
		function rZ() {}
		Dx.exports = rZ
	});
	var qs = E((kue, Fx) => {
		var nZ = Mh(),
			iZ = Ds();

		function Fs(e, t) {
			this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
		}
		Fs.prototype = nZ(iZ.prototype);
		Fs.prototype.constructor = Fs;
		Fx.exports = Fs
	});
	var Nx = E((Nue, kx) => {
		var qx = Wr(),
			aZ = Nn(),
			sZ = Ve(),
			Lx = qx ? qx.isConcatSpreadable : void 0;

		function oZ(e) {
			return sZ(e) || aZ(e) || !!(Lx && e && e[Lx])
		}
		kx.exports = oZ
	});
	var Gx = E((Bue, Vx) => {
		var lZ = Hi(),
			uZ = Nx();

		function Bx(e, t, r, n, i) {
			var a = -1,
				s = e.length;
			for (r || (r = uZ), i || (i = []); ++a < s;) {
				var o = e[a];
				t > 0 && r(o) ? t > 1 ? Bx(o, t - 1, r, n, i) : lZ(i, o) : n || (i[i.length] = o)
			}
			return i
		}
		Vx.exports = Bx
	});
	var Hx = E((Vue, zx) => {
		var hZ = Gx();

		function cZ(e) {
			var t = e == null ? 0 : e.length;
			return t ? hZ(e, 1) : []
		}
		zx.exports = cZ
	});
	var Wx = E((Gue, jx) => {
		function fZ(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		jx.exports = fZ
	});
	var $x = E((zue, Xx) => {
		var pZ = Wx(),
			Ux = Math.max;

		function dZ(e, t, r) {
			return t = Ux(t === void 0 ? e.length - 1 : t, 0),
				function() {
					for (var n = arguments, i = -1, a = Ux(n.length - t, 0), s = Array(a); ++i < a;) s[i] = n[t + i];
					i = -1;
					for (var o = Array(t + 1); ++i < t;) o[i] = n[i];
					return o[t] = r(s), pZ(e, this, o)
				}
		}
		Xx.exports = dZ
	});
	var Yx = E((Hue, Kx) => {
		function mZ(e) {
			return function() {
				return e
			}
		}
		Kx.exports = mZ
	});
	var Jx = E((jue, Zx) => {
		var vZ = Yx(),
			Qx = Ph(),
			gZ = ta(),
			yZ = Qx ? function(e, t) {
				return Qx(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: vZ(t),
					writable: !0
				})
			} : gZ;
		Zx.exports = yZ
	});
	var tA = E((Wue, eA) => {
		var EZ = 800,
			_Z = 16,
			bZ = Date.now;

		function SZ(e) {
			var t = 0,
				r = 0;
			return function() {
				var n = bZ(),
					i = _Z - (n - r);
				if (r = n, i > 0) {
					if (++t >= EZ) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
		eA.exports = SZ
	});
	var nA = E((Uue, rA) => {
		var TZ = Jx(),
			IZ = tA(),
			xZ = IZ(TZ);
		rA.exports = xZ
	});
	var aA = E((Xue, iA) => {
		var AZ = Hx(),
			PZ = $x(),
			CZ = nA();

		function wZ(e) {
			return CZ(PZ(e, void 0, AZ), e + "")
		}
		iA.exports = wZ
	});
	var lA = E(($ue, oA) => {
		var sA = _o(),
			OZ = sA && new sA;
		oA.exports = OZ
	});
	var hA = E((Kue, uA) => {
		function MZ() {}
		uA.exports = MZ
	});
	var Rh = E((Yue, fA) => {
		var cA = lA(),
			RZ = hA(),
			DZ = cA ? function(e) {
				return cA.get(e)
			} : RZ;
		fA.exports = DZ
	});
	var dA = E((Que, pA) => {
		var FZ = {};
		pA.exports = FZ
	});
	var Dh = E((Zue, vA) => {
		var mA = dA(),
			qZ = Object.prototype,
			LZ = qZ.hasOwnProperty;

		function kZ(e) {
			for (var t = e.name + "", r = mA[t], n = LZ.call(mA, t) ? r.length : 0; n--;) {
				var i = r[n],
					a = i.func;
				if (a == null || a == e) return i.name
			}
			return t
		}
		vA.exports = kZ
	});
	var ks = E((Jue, gA) => {
		var NZ = Mh(),
			BZ = Ds(),
			VZ = 4294967295;

		function Ls(e) {
			this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = VZ, this.__views__ = []
		}
		Ls.prototype = NZ(BZ.prototype);
		Ls.prototype.constructor = Ls;
		gA.exports = Ls
	});
	var EA = E((ehe, yA) => {
		function GZ(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
			return t
		}
		yA.exports = GZ
	});
	var bA = E((the, _A) => {
		var zZ = ks(),
			HZ = qs(),
			jZ = EA();

		function WZ(e) {
			if (e instanceof zZ) return e.clone();
			var t = new HZ(e.__wrapped__, e.__chain__);
			return t.__actions__ = jZ(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
		}
		_A.exports = WZ
	});
	var IA = E((rhe, TA) => {
		var UZ = ks(),
			SA = qs(),
			XZ = Ds(),
			$Z = Ve(),
			KZ = jt(),
			YZ = bA(),
			QZ = Object.prototype,
			ZZ = QZ.hasOwnProperty;

		function Ns(e) {
			if (KZ(e) && !$Z(e) && !(e instanceof UZ)) {
				if (e instanceof SA) return e;
				if (ZZ.call(e, "__wrapped__")) return YZ(e)
			}
			return new SA(e)
		}
		Ns.prototype = XZ.prototype;
		Ns.prototype.constructor = Ns;
		TA.exports = Ns
	});
	var AA = E((nhe, xA) => {
		var JZ = ks(),
			eJ = Rh(),
			tJ = Dh(),
			rJ = IA();

		function nJ(e) {
			var t = tJ(e),
				r = rJ[t];
			if (typeof r != "function" || !(t in JZ.prototype)) return !1;
			if (e === r) return !0;
			var n = eJ(r);
			return !!n && e === n[0]
		}
		xA.exports = nJ
	});
	var OA = E((ihe, wA) => {
		var PA = qs(),
			iJ = aA(),
			aJ = Rh(),
			Fh = Dh(),
			sJ = Ve(),
			CA = AA(),
			oJ = "Expected a function",
			lJ = 8,
			uJ = 32,
			hJ = 128,
			cJ = 256;

		function fJ(e) {
			return iJ(function(t) {
				var r = t.length,
					n = r,
					i = PA.prototype.thru;
				for (e && t.reverse(); n--;) {
					var a = t[n];
					if (typeof a != "function") throw new TypeError(oJ);
					if (i && !s && Fh(a) == "wrapper") var s = new PA([], !0)
				}
				for (n = s ? n : r; ++n < r;) {
					a = t[n];
					var o = Fh(a),
						l = o == "wrapper" ? aJ(a) : void 0;
					l && CA(l[0]) && l[1] == (hJ | lJ | uJ | cJ) && !l[4].length && l[9] == 1 ? s = s[Fh(l[0])].apply(s, l[3]) : s = a.length == 1 && CA(a) ? s[o]() : s.thru(a)
				}
				return function() {
					var f = arguments,
						u = f[0];
					if (s && f.length == 1 && sJ(u)) return s.plant(u).value();
					for (var c = 0, v = r ? t[c].apply(this, f) : u; ++c < r;) v = t[c].call(this, v);
					return v
				}
			})
		}
		wA.exports = fJ
	});
	var RA = E((ahe, MA) => {
		var pJ = OA(),
			dJ = pJ();
		MA.exports = dJ
	});
	var FA = E((she, DA) => {
		function mJ(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
		}
		DA.exports = mJ
	});
	var LA = E((ohe, qA) => {
		var vJ = FA(),
			qh = ra();

		function gJ(e, t, r) {
			return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = qh(r), r = r === r ? r : 0), t !== void 0 && (t = qh(t), t = t === t ? t : 0), vJ(qh(e), t, r)
		}
		qA.exports = gJ
	});
	var eP = E(Hs => {
		"use strict";
		var zs = lt().default;
		Object.defineProperty(Hs, "__esModule", {
			value: !0
		});
		Hs.default = void 0;
		var gt = zs(Sr()),
			yJ = zs(RA()),
			EJ = zs(ea()),
			_J = zs(LA()),
			Vr = it(),
			Lh = Vh(),
			Bs = Rs(),
			bJ = Br(),
			{
				MOUSE_CLICK: SJ,
				MOUSE_SECOND_CLICK: TJ,
				MOUSE_DOWN: IJ,
				MOUSE_UP: xJ,
				MOUSE_OVER: AJ,
				MOUSE_OUT: PJ,
				DROPDOWN_CLOSE: CJ,
				DROPDOWN_OPEN: wJ,
				SLIDER_ACTIVE: OJ,
				SLIDER_INACTIVE: MJ,
				TAB_ACTIVE: RJ,
				TAB_INACTIVE: DJ,
				NAVBAR_CLOSE: FJ,
				NAVBAR_OPEN: qJ,
				MOUSE_MOVE: LJ,
				PAGE_SCROLL_DOWN: WA,
				SCROLL_INTO_VIEW: UA,
				SCROLL_OUT_OF_VIEW: kJ,
				PAGE_SCROLL_UP: NJ,
				SCROLLING_IN_VIEW: BJ,
				PAGE_FINISH: XA,
				ECOMMERCE_CART_CLOSE: VJ,
				ECOMMERCE_CART_OPEN: GJ,
				PAGE_START: $A,
				PAGE_SCROLL: zJ
			} = Vr.EventTypeConsts,
			kh = "COMPONENT_ACTIVE",
			KA = "COMPONENT_INACTIVE",
			{
				COLON_DELIMITER: kA
			} = Vr.IX2EngineConstants,
			{
				getNamespacedParameterId: NA
			} = bJ.IX2VanillaUtils,
			YA = e => t => typeof t == "object" && e(t) ? !0 : t,
			Ri = YA(({
				element: e,
				nativeEvent: t
			}) => e === t.target),
			HJ = YA(({
				element: e,
				nativeEvent: t
			}) => e.contains(t.target)),
			zt = (0, yJ.default)([Ri, HJ]),
			QA = (e, t) => {
				if (t) {
					let {
						ixData: r
					} = e.getState(), {
						events: n
					} = r, i = n[t];
					if (i && !WJ[i.eventTypeId]) return i
				}
				return null
			},
			jJ = ({
				store: e,
				event: t
			}) => {
				let {
					action: r
				} = t, {
					autoStopEventId: n
				} = r.config;
				return !!QA(e, n)
			},
			st = ({
				store: e,
				event: t,
				element: r,
				eventStateKey: n
			}, i) => {
				let {
					action: a,
					id: s
				} = t, {
					actionListId: o,
					autoStopEventId: l
				} = a.config, f = QA(e, l);
				return f && (0, Lh.stopActionGroup)({
					store: e,
					eventId: l,
					eventTarget: r,
					eventStateKey: l + kA + n.split(kA)[1],
					actionListId: (0, EJ.default)(f, "action.config.actionListId")
				}), (0, Lh.stopActionGroup)({
					store: e,
					eventId: s,
					eventTarget: r,
					eventStateKey: n,
					actionListId: o
				}), (0, Lh.startActionGroup)({
					store: e,
					eventId: s,
					eventTarget: r,
					eventStateKey: n,
					actionListId: o
				}), i
			},
			Pt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
			Di = {
				handler: Pt(zt, st)
			},
			ZA = (0, gt.default)({}, Di, {
				types: [kh, KA].join(" ")
			}),
			Nh = [{
				target: window,
				types: "resize orientationchange",
				throttle: !0
			}, {
				target: document,
				types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
				throttle: !0
			}],
			BA = "mouseover mouseout",
			Bh = {
				types: Nh
			},
			WJ = {
				PAGE_START: $A,
				PAGE_FINISH: XA
			},
			Mi = (() => {
				let e = window.pageXOffset !== void 0,
					r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
				return () => ({
					scrollLeft: e ? window.pageXOffset : r.scrollLeft,
					scrollTop: e ? window.pageYOffset : r.scrollTop,
					stiffScrollTop: (0, _J.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
					scrollWidth: r.scrollWidth,
					scrollHeight: r.scrollHeight,
					clientWidth: r.clientWidth,
					clientHeight: r.clientHeight,
					innerWidth: window.innerWidth,
					innerHeight: window.innerHeight
				})
			})(),
			UJ = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
			XJ = ({
				element: e,
				nativeEvent: t
			}) => {
				let {
					type: r,
					target: n,
					relatedTarget: i
				} = t, a = e.contains(n);
				if (r === "mouseover" && a) return !0;
				let s = e.contains(i);
				return !!(r === "mouseout" && a && s)
			},
			$J = e => {
				let {
					element: t,
					event: {
						config: r
					}
				} = e, {
					clientWidth: n,
					clientHeight: i
				} = Mi(), a = r.scrollOffsetValue, l = r.scrollOffsetUnit === "PX" ? a : i * (a || 0) / 100;
				return UJ(t.getBoundingClientRect(), {
					left: 0,
					top: l,
					right: n,
					bottom: i - l
				})
			},
			JA = e => (t, r) => {
				let {
					type: n
				} = t.nativeEvent, i = [kh, KA].indexOf(n) !== -1 ? n === kh : r.isActive, a = (0, gt.default)({}, r, {
					isActive: i
				});
				return (!r || a.isActive !== r.isActive) && e(t, a) || a
			},
			VA = e => (t, r) => {
				let n = {
					elementHovered: XJ(t)
				};
				return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
			},
			KJ = e => (t, r) => {
				let n = (0, gt.default)({}, r, {
					elementVisible: $J(t)
				});
				return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
			},
			GA = e => (t, r = {}) => {
				let {
					stiffScrollTop: n,
					scrollHeight: i,
					innerHeight: a
				} = Mi(), {
					event: {
						config: s,
						eventTypeId: o
					}
				} = t, {
					scrollOffsetValue: l,
					scrollOffsetUnit: f
				} = s, u = f === "PX", c = i - a, v = Number((n / c).toFixed(2));
				if (r && r.percentTop === v) return r;
				let d = (u ? l : a * (l || 0) / 100) / c,
					p, m, h = 0;
				r && (p = v > r.percentTop, m = r.scrollingDown !== p, h = m ? v : r.anchorTop);
				let g = o === WA ? v >= h + d : v <= h - d,
					y = (0, gt.default)({}, r, {
						percentTop: v,
						inBounds: g,
						anchorTop: h,
						scrollingDown: p
					});
				return r && g && (m || y.inBounds !== r.inBounds) && e(t, y) || y
			},
			YJ = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
			QJ = e => (t, r) => {
				let n = {
					finished: document.readyState === "complete"
				};
				return n.finished && !(r && r.finshed) && e(t), n
			},
			ZJ = e => (t, r) => {
				let n = {
					started: !0
				};
				return r || e(t), n
			},
			zA = e => (t, r = {
				clickCount: 0
			}) => {
				let n = {
					clickCount: r.clickCount % 2 + 1
				};
				return n.clickCount !== r.clickCount && e(t, n) || n
			},
			Vs = (e = !0) => (0, gt.default)({}, ZA, {
				handler: Pt(e ? zt : Ri, JA((t, r) => r.isActive ? Di.handler(t, r) : r))
			}),
			Gs = (e = !0) => (0, gt.default)({}, ZA, {
				handler: Pt(e ? zt : Ri, JA((t, r) => r.isActive ? r : Di.handler(t, r)))
			}),
			HA = (0, gt.default)({}, Bh, {
				handler: KJ((e, t) => {
					let {
						elementVisible: r
					} = t, {
						event: n,
						store: i
					} = e, {
						ixData: a
					} = i.getState(), {
						events: s
					} = a;
					return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === UA === r ? (st(e), (0, gt.default)({}, t, {
						triggered: !0
					})) : t
				})
			}),
			jA = .05,
			JJ = {
				[OJ]: Vs(),
				[MJ]: Gs(),
				[wJ]: Vs(),
				[CJ]: Gs(),
				[qJ]: Vs(!1),
				[FJ]: Gs(!1),
				[RJ]: Vs(),
				[DJ]: Gs(),
				[GJ]: {
					types: "ecommerce-cart-open",
					handler: Pt(zt, st)
				},
				[VJ]: {
					types: "ecommerce-cart-close",
					handler: Pt(zt, st)
				},
				[SJ]: {
					types: "click",
					handler: Pt(zt, zA((e, {
						clickCount: t
					}) => {
						jJ(e) ? t === 1 && st(e) : st(e)
					}))
				},
				[TJ]: {
					types: "click",
					handler: Pt(zt, zA((e, {
						clickCount: t
					}) => {
						t === 2 && st(e)
					}))
				},
				[IJ]: (0, gt.default)({}, Di, {
					types: "mousedown"
				}),
				[xJ]: (0, gt.default)({}, Di, {
					types: "mouseup"
				}),
				[AJ]: {
					types: BA,
					handler: Pt(zt, VA((e, t) => {
						t.elementHovered && st(e)
					}))
				},
				[PJ]: {
					types: BA,
					handler: Pt(zt, VA((e, t) => {
						t.elementHovered || st(e)
					}))
				},
				[LJ]: {
					types: "mousemove mouseout scroll",
					handler: ({
						store: e,
						element: t,
						eventConfig: r,
						nativeEvent: n,
						eventStateKey: i
					}, a = {
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0
					}) => {
						let {
							basedOn: s,
							selectedAxis: o,
							continuousParameterGroupId: l,
							reverse: f,
							restingState: u = 0
						} = r, {
							clientX: c = a.clientX,
							clientY: v = a.clientY,
							pageX: d = a.pageX,
							pageY: p = a.pageY
						} = n, m = o === "X_AXIS", h = n.type === "mouseout", g = u / 100, y = l, _ = !1;
						switch (s) {
							case Vr.EventBasedOn.VIEWPORT: {
								g = m ? Math.min(c, window.innerWidth) / window.innerWidth : Math.min(v, window.innerHeight) / window.innerHeight;
								break
							}
							case Vr.EventBasedOn.PAGE: {
								let {
									scrollLeft: b,
									scrollTop: S,
									scrollWidth: x,
									scrollHeight: T
								} = Mi();
								g = m ? Math.min(b + d, x) / x : Math.min(S + p, T) / T;
								break
							}
							case Vr.EventBasedOn.ELEMENT:
							default: {
								y = NA(i, l);
								let b = n.type.indexOf("mouse") === 0;
								if (b && zt({
										element: t,
										nativeEvent: n
									}) !== !0) break;
								let S = t.getBoundingClientRect(),
									{
										left: x,
										top: T,
										width: P,
										height: D
									} = S;
								if (!b && !YJ({
										left: c,
										top: v
									}, S)) break;
								_ = !0, g = m ? (c - x) / P : (v - T) / D;
								break
							}
						}
						return h && (g > 1 - jA || g < jA) && (g = Math.round(g)), (s !== Vr.EventBasedOn.ELEMENT || _ || _ !== a.elementHovered) && (g = f ? 1 - g : g, e.dispatch((0, Bs.parameterChanged)(y, g))), {
							elementHovered: _,
							clientX: c,
							clientY: v,
							pageX: d,
							pageY: p
						}
					}
				},
				[zJ]: {
					types: Nh,
					handler: ({
						store: e,
						eventConfig: t
					}) => {
						let {
							continuousParameterGroupId: r,
							reverse: n
						} = t, {
							scrollTop: i,
							scrollHeight: a,
							clientHeight: s
						} = Mi(), o = i / (a - s);
						o = n ? 1 - o : o, e.dispatch((0, Bs.parameterChanged)(r, o))
					}
				},
				[BJ]: {
					types: Nh,
					handler: ({
						element: e,
						store: t,
						eventConfig: r,
						eventStateKey: n
					}, i = {
						scrollPercent: 0
					}) => {
						let {
							scrollLeft: a,
							scrollTop: s,
							scrollWidth: o,
							scrollHeight: l,
							clientHeight: f
						} = Mi(), {
							basedOn: u,
							selectedAxis: c,
							continuousParameterGroupId: v,
							startsEntering: d,
							startsExiting: p,
							addEndOffset: m,
							addStartOffset: h,
							addOffsetValue: g = 0,
							endOffsetValue: y = 0
						} = r, _ = c === "X_AXIS";
						if (u === Vr.EventBasedOn.VIEWPORT) {
							let b = _ ? a / o : s / l;
							return b !== i.scrollPercent && t.dispatch((0, Bs.parameterChanged)(v, b)), {
								scrollPercent: b
							}
						} else {
							let b = NA(n, v),
								S = e.getBoundingClientRect(),
								x = (h ? g : 0) / 100,
								T = (m ? y : 0) / 100;
							x = d ? x : 1 - x, T = p ? T : 1 - T;
							let P = S.top + Math.min(S.height * x, f),
								w = S.top + S.height * T - P,
								C = Math.min(f + w, l),
								O = Math.min(Math.max(0, f - P), C) / C;
							return O !== i.scrollPercent && t.dispatch((0, Bs.parameterChanged)(b, O)), {
								scrollPercent: O
							}
						}
					}
				},
				[UA]: HA,
				[kJ]: HA,
				[WA]: (0, gt.default)({}, Bh, {
					handler: GA((e, t) => {
						t.scrollingDown && st(e)
					})
				}),
				[NJ]: (0, gt.default)({}, Bh, {
					handler: GA((e, t) => {
						t.scrollingDown || st(e)
					})
				}),
				[XA]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: Pt(Ri, QJ(st))
				},
				[$A]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: Pt(Ri, ZJ(st))
				}
			};
		Hs.default = JJ
	});
	var Vh = E(Er => {
		"use strict";
		var wt = lt().default,
			eee = qr().default;
		Object.defineProperty(Er, "__esModule", {
			value: !0
		});
		Er.observeRequests = Oee;
		Er.startActionGroup = Uh;
		Er.startEngine = $s;
		Er.stopActionGroup = Wh;
		Er.stopAllActionGroups = uP;
		Er.stopEngine = Ks;
		var tee = wt(Sr()),
			ree = wt(gI()),
			nee = wt(oh()),
			yr = wt(ea()),
			iee = wt(LI()),
			aee = wt(lx()),
			see = wt(hx()),
			oee = wt(fx()),
			Fi = wt(yx()),
			lee = wt(xx()),
			Ct = it(),
			nP = Br(),
			Re = Rs(),
			Le = eee(Ox()),
			uee = wt(eP()),
			hee = ["store", "computedStyle"],
			cee = Object.keys(Ct.QuickEffectIds),
			Gh = e => cee.includes(e),
			{
				COLON_DELIMITER: zh,
				BOUNDARY_SELECTOR: js,
				HTML_ELEMENT: iP,
				RENDER_GENERAL: fee,
				W_MOD_IX: tP
			} = Ct.IX2EngineConstants,
			{
				getAffectedElements: Ws,
				getElementId: pee,
				getDestinationValues: Hh,
				observeStore: Gr,
				getInstanceId: dee,
				renderHTMLElement: mee,
				clearAllStyles: aP,
				getMaxDurationItemIndex: vee,
				getComputedStyle: gee,
				getInstanceOrigin: yee,
				reduceListToGroup: Eee,
				shouldNamespaceEventParameter: _ee,
				getNamespacedParameterId: bee,
				shouldAllowMediaQuery: Us,
				cleanupHTMLElement: See,
				clearObjectCache: Tee,
				stringifyTarget: Iee,
				mediaQueriesEqual: xee,
				shallowEqual: Aee
			} = nP.IX2VanillaUtils,
			{
				isPluginType: Xs,
				createPluginInstance: jh,
				getPluginDuration: Pee
			} = nP.IX2VanillaPlugins,
			rP = navigator.userAgent,
			Cee = rP.match(/iPad/i) || rP.match(/iPhone/),
			wee = 12;

		function Oee(e) {
			Gr({
				store: e,
				select: ({
					ixRequest: t
				}) => t.preview,
				onChange: Dee
			}), Gr({
				store: e,
				select: ({
					ixRequest: t
				}) => t.playback,
				onChange: Fee
			}), Gr({
				store: e,
				select: ({
					ixRequest: t
				}) => t.stop,
				onChange: qee
			}), Gr({
				store: e,
				select: ({
					ixRequest: t
				}) => t.clear,
				onChange: Lee
			})
		}

		function Mee(e) {
			Gr({
				store: e,
				select: ({
					ixSession: t
				}) => t.mediaQueryKey,
				onChange: () => {
					Ks(e), aP({
						store: e,
						elementApi: Le
					}), $s({
						store: e,
						allowEvents: !0
					}), sP()
				}
			})
		}

		function Ree(e, t) {
			let r = Gr({
				store: e,
				select: ({
					ixSession: n
				}) => n.tick,
				onChange: n => {
					t(n), r()
				}
			})
		}

		function Dee({
			rawData: e,
			defer: t
		}, r) {
			let n = () => {
				$s({
					store: r,
					rawData: e,
					allowEvents: !0
				}), sP()
			};
			t ? setTimeout(n, 0) : n()
		}

		function sP() {
			document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
		}

		function Fee(e, t) {
			let {
				actionTypeId: r,
				actionListId: n,
				actionItemId: i,
				eventId: a,
				allowEvents: s,
				immediate: o,
				testManual: l,
				verbose: f = !0
			} = e, {
				rawData: u
			} = e;
			if (n && i && u && o) {
				let c = u.actionLists[n];
				c && (u = Eee({
					actionList: c,
					actionItemId: i,
					rawData: u
				}))
			}
			if ($s({
					store: t,
					rawData: u,
					allowEvents: s,
					testManual: l
				}), n && r === Ct.ActionTypeConsts.GENERAL_START_ACTION || Gh(r)) {
				Wh({
					store: t,
					actionListId: n
				}), lP({
					store: t,
					actionListId: n,
					eventId: a
				});
				let c = Uh({
					store: t,
					eventId: a,
					actionListId: n,
					immediate: o,
					verbose: f
				});
				f && c && t.dispatch((0, Re.actionListPlaybackChanged)({
					actionListId: n,
					isPlaying: !o
				}))
			}
		}

		function qee({
			actionListId: e
		}, t) {
			e ? Wh({
				store: t,
				actionListId: e
			}) : uP({
				store: t
			}), Ks(t)
		}

		function Lee(e, t) {
			Ks(t), aP({
				store: t,
				elementApi: Le
			})
		}

		function $s({
			store: e,
			rawData: t,
			allowEvents: r,
			testManual: n
		}) {
			let {
				ixSession: i
			} = e.getState();
			t && e.dispatch((0, Re.rawDataImported)(t)), i.active || (e.dispatch((0, Re.sessionInitialized)({
				hasBoundaryNodes: !!document.querySelector(js),
				reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
			})), r && (zee(e), kee(), e.getState().ixSession.hasDefinedMediaQueries && Mee(e)), e.dispatch((0, Re.sessionStarted)()), Nee(e, n))
		}

		function kee() {
			let {
				documentElement: e
			} = document;
			e.className.indexOf(tP) === -1 && (e.className += ` ${tP}`)
		}

		function Nee(e, t) {
			let r = n => {
				let {
					ixSession: i,
					ixParameters: a
				} = e.getState();
				i.active && (e.dispatch((0, Re.animationFrameChanged)(n, a)), t ? Ree(e, r) : requestAnimationFrame(r))
			};
			r(window.performance.now())
		}

		function Ks(e) {
			let {
				ixSession: t
			} = e.getState();
			if (t.active) {
				let {
					eventListeners: r
				} = t;
				r.forEach(Bee), Tee(), e.dispatch((0, Re.sessionStopped)())
			}
		}

		function Bee({
			target: e,
			listenerParams: t
		}) {
			e.removeEventListener.apply(e, t)
		}

		function Vee({
			store: e,
			eventStateKey: t,
			eventTarget: r,
			eventId: n,
			eventConfig: i,
			actionListId: a,
			parameterGroup: s,
			smoothing: o,
			restingValue: l
		}) {
			let {
				ixData: f,
				ixSession: u
			} = e.getState(), {
				events: c
			} = f, v = c[n], {
				eventTypeId: d
			} = v, p = {}, m = {}, h = [], {
				continuousActionGroups: g
			} = s, {
				id: y
			} = s;
			_ee(d, i) && (y = bee(t, y));
			let _ = u.hasBoundaryNodes && r ? Le.getClosestElement(r, js) : null;
			g.forEach(b => {
				let {
					keyframe: S,
					actionItems: x
				} = b;
				x.forEach(T => {
					let {
						actionTypeId: P
					} = T, {
						target: D
					} = T.config;
					if (!D) return;
					let w = D.boundaryMode ? _ : null,
						C = Iee(D) + zh + P;
					if (m[C] = Gee(m[C], S, T), !p[C]) {
						p[C] = !0;
						let {
							config: F
						} = T;
						Ws({
							config: F,
							event: v,
							eventTarget: r,
							elementRoot: w,
							elementApi: Le
						}).forEach(O => {
							h.push({
								element: O,
								key: C
							})
						})
					}
				})
			}), h.forEach(({
				element: b,
				key: S
			}) => {
				let x = m[S],
					T = (0, yr.default)(x, "[0].actionItems[0]", {}),
					{
						actionTypeId: P
					} = T,
					D = Xs(P) ? jh(P)(b, T) : null,
					w = Hh({
						element: b,
						actionItem: T,
						elementApi: Le
					}, D);
				Xh({
					store: e,
					element: b,
					eventId: n,
					actionListId: a,
					actionItem: T,
					destination: w,
					continuous: !0,
					parameterId: y,
					actionGroups: x,
					smoothing: o,
					restingValue: l,
					pluginInstance: D
				})
			})
		}

		function Gee(e = [], t, r) {
			let n = [...e],
				i;
			return n.some((a, s) => a.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
				keyframe: t,
				actionItems: []
			})), n[i].actionItems.push(r), n
		}

		function zee(e) {
			let {
				ixData: t
			} = e.getState(), {
				eventTypeMap: r
			} = t;
			oP(e), (0, Fi.default)(r, (i, a) => {
				let s = uee.default[a];
				if (!s) {
					console.warn(`IX2 event type not configured: ${a}`);
					return
				}
				$ee({
					logic: s,
					store: e,
					events: i
				})
			});
			let {
				ixSession: n
			} = e.getState();
			n.eventListeners.length && jee(e)
		}
		var Hee = ["resize", "orientationchange"];

		function jee(e) {
			let t = () => {
				oP(e)
			};
			Hee.forEach(r => {
				window.addEventListener(r, t), e.dispatch((0, Re.eventListenerAdded)(window, [r, t]))
			}), t()
		}

		function oP(e) {
			let {
				ixSession: t,
				ixData: r
			} = e.getState(), n = window.innerWidth;
			if (n !== t.viewportWidth) {
				let {
					mediaQueries: i
				} = r;
				e.dispatch((0, Re.viewportWidthChanged)({
					width: n,
					mediaQueries: i
				}))
			}
		}
		var Wee = (e, t) => (0, aee.default)((0, oee.default)(e, t), see.default),
			Uee = (e, t) => {
				(0, Fi.default)(e, (r, n) => {
					r.forEach((i, a) => {
						let s = n + zh + a;
						t(i, n, s)
					})
				})
			},
			Xee = e => {
				let t = {
					target: e.target,
					targets: e.targets
				};
				return Ws({
					config: t,
					elementApi: Le
				})
			};

		function $ee({
			logic: e,
			store: t,
			events: r
		}) {
			Kee(r);
			let {
				types: n,
				handler: i
			} = e, {
				ixData: a
			} = t.getState(), {
				actionLists: s
			} = a, o = Wee(r, Xee);
			if (!(0, iee.default)(o)) return;
			(0, Fi.default)(o, (c, v) => {
				let d = r[v],
					{
						action: p,
						id: m,
						mediaQueries: h = a.mediaQueryKeys
					} = d,
					{
						actionListId: g
					} = p.config;
				xee(h, a.mediaQueryKeys) || t.dispatch((0, Re.mediaQueriesDefined)()), p.actionTypeId === Ct.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(d.config) ? d.config : [d.config]).forEach(_ => {
					let {
						continuousParameterGroupId: b
					} = _, S = (0, yr.default)(s, `${g}.continuousParameterGroups`, []), x = (0, nee.default)(S, ({
						id: D
					}) => D === b), T = (_.smoothing || 0) / 100, P = (_.restingState || 0) / 100;
					x && c.forEach((D, w) => {
						let C = m + zh + w;
						Vee({
							store: t,
							eventStateKey: C,
							eventTarget: D,
							eventId: m,
							eventConfig: _,
							actionListId: g,
							parameterGroup: x,
							smoothing: T,
							restingValue: P
						})
					})
				}), (p.actionTypeId === Ct.ActionTypeConsts.GENERAL_START_ACTION || Gh(p.actionTypeId)) && lP({
					store: t,
					actionListId: g,
					eventId: m
				})
			});
			let l = c => {
					let {
						ixSession: v
					} = t.getState();
					Uee(o, (d, p, m) => {
						let h = r[p],
							g = v.eventState[m],
							{
								action: y,
								mediaQueries: _ = a.mediaQueryKeys
							} = h;
						if (!Us(_, v.mediaQueryKey)) return;
						let b = (S = {}) => {
							let x = i({
								store: t,
								element: d,
								event: h,
								eventConfig: S,
								nativeEvent: c,
								eventStateKey: m
							}, g);
							Aee(x, g) || t.dispatch((0, Re.eventStateChanged)(m, x))
						};
						y.actionTypeId === Ct.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(h.config) ? h.config : [h.config]).forEach(b) : b()
					})
				},
				f = (0, lee.default)(l, wee),
				u = ({
					target: c = document,
					types: v,
					throttle: d
				}) => {
					v.split(" ").filter(Boolean).forEach(p => {
						let m = d ? f : l;
						c.addEventListener(p, m), t.dispatch((0, Re.eventListenerAdded)(c, [p, m]))
					})
				};
			Array.isArray(n) ? n.forEach(u) : typeof n == "string" && u(e)
		}

		function Kee(e) {
			if (!Cee) return;
			let t = {},
				r = "";
			for (let n in e) {
				let {
					eventTypeId: i,
					target: a
				} = e[n], s = Le.getQuerySelector(a);
				t[s] || (i === Ct.EventTypeConsts.MOUSE_CLICK || i === Ct.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
			}
			if (r) {
				let n = document.createElement("style");
				n.textContent = r, document.body.appendChild(n)
			}
		}

		function lP({
			store: e,
			actionListId: t,
			eventId: r
		}) {
			let {
				ixData: n,
				ixSession: i
			} = e.getState(), {
				actionLists: a,
				events: s
			} = n, o = s[r], l = a[t];
			if (l && l.useFirstGroupAsInitialState) {
				let f = (0, yr.default)(l, "actionItemGroups[0].actionItems", []),
					u = (0, yr.default)(o, "mediaQueries", n.mediaQueryKeys);
				if (!Us(u, i.mediaQueryKey)) return;
				f.forEach(c => {
					var v;
					let {
						config: d,
						actionTypeId: p
					} = c, m = (d == null || (v = d.target) === null || v === void 0 ? void 0 : v.useEventTarget) === !0 ? {
						target: o.target,
						targets: o.targets
					} : d, h = Ws({
						config: m,
						event: o,
						elementApi: Le
					}), g = Xs(p);
					h.forEach(y => {
						let _ = g ? jh(p)(y, c) : null;
						Xh({
							destination: Hh({
								element: y,
								actionItem: c,
								elementApi: Le
							}, _),
							immediate: !0,
							store: e,
							element: y,
							eventId: r,
							actionItem: c,
							actionListId: t,
							pluginInstance: _
						})
					})
				})
			}
		}

		function uP({
			store: e
		}) {
			let {
				ixInstances: t
			} = e.getState();
			(0, Fi.default)(t, r => {
				if (!r.continuous) {
					let {
						actionListId: n,
						verbose: i
					} = r;
					$h(r, e), i && e.dispatch((0, Re.actionListPlaybackChanged)({
						actionListId: n,
						isPlaying: !1
					}))
				}
			})
		}

		function Wh({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: i
		}) {
			let {
				ixInstances: a,
				ixSession: s
			} = e.getState(), o = s.hasBoundaryNodes && r ? Le.getClosestElement(r, js) : null;
			(0, Fi.default)(a, l => {
				let f = (0, yr.default)(l, "actionItem.config.target.boundaryMode"),
					u = n ? l.eventStateKey === n : !0;
				if (l.actionListId === i && l.eventId === t && u) {
					if (o && f && !Le.elementContains(o, l.element)) return;
					$h(l, e), l.verbose && e.dispatch((0, Re.actionListPlaybackChanged)({
						actionListId: i,
						isPlaying: !1
					}))
				}
			})
		}

		function Uh({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: i,
			groupIndex: a = 0,
			immediate: s,
			verbose: o
		}) {
			var l;
			let {
				ixData: f,
				ixSession: u
			} = e.getState(), {
				events: c
			} = f, v = c[t] || {}, {
				mediaQueries: d = f.mediaQueryKeys
			} = v, p = (0, yr.default)(f, `actionLists.${i}`, {}), {
				actionItemGroups: m,
				useFirstGroupAsInitialState: h
			} = p;
			if (!m || !m.length) return !1;
			a >= m.length && (0, yr.default)(v, "config.loop") && (a = 0), a === 0 && h && a++;
			let y = (a === 0 || a === 1 && h) && Gh((l = v.action) === null || l === void 0 ? void 0 : l.actionTypeId) ? v.config.delay : void 0,
				_ = (0, yr.default)(m, [a, "actionItems"], []);
			if (!_.length || !Us(d, u.mediaQueryKey)) return !1;
			let b = u.hasBoundaryNodes && r ? Le.getClosestElement(r, js) : null,
				S = vee(_),
				x = !1;
			return _.forEach((T, P) => {
				let {
					config: D,
					actionTypeId: w
				} = T, C = Xs(w), {
					target: F
				} = D;
				if (!F) return;
				let O = F.boundaryMode ? b : null;
				Ws({
					config: D,
					event: v,
					eventTarget: r,
					elementRoot: O,
					elementApi: Le
				}).forEach((L, H) => {
					let Y = C ? jh(w)(L, T) : null,
						A = C ? Pee(w)(L, T) : null;
					x = !0;
					let M = S === P && H === 0,
						N = gee({
							element: L,
							actionItem: T
						}),
						U = Hh({
							element: L,
							actionItem: T,
							elementApi: Le
						}, Y);
					Xh({
						store: e,
						element: L,
						actionItem: T,
						eventId: t,
						eventTarget: r,
						eventStateKey: n,
						actionListId: i,
						groupIndex: a,
						isCarrier: M,
						computedStyle: N,
						destination: U,
						immediate: s,
						verbose: o,
						pluginInstance: Y,
						pluginDuration: A,
						instanceDelay: y
					})
				})
			}), x
		}

		function Xh(e) {
			var t;
			let {
				store: r,
				computedStyle: n
			} = e, i = (0, ree.default)(e, hee), {
				element: a,
				actionItem: s,
				immediate: o,
				pluginInstance: l,
				continuous: f,
				restingValue: u,
				eventId: c
			} = i, v = !f, d = dee(), {
				ixElements: p,
				ixSession: m,
				ixData: h
			} = r.getState(), g = pee(p, a), {
				refState: y
			} = p[g] || {}, _ = Le.getRefType(a), b = m.reducedMotion && Ct.ReducedMotionTypes[s.actionTypeId], S;
			if (b && f) switch ((t = h.events[c]) === null || t === void 0 ? void 0 : t.eventTypeId) {
				case Ct.EventTypeConsts.MOUSE_MOVE:
				case Ct.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
					S = u;
					break;
				default:
					S = .5;
					break
			}
			let x = yee(a, y, n, s, Le, l);
			if (r.dispatch((0, Re.instanceAdded)((0, tee.default)({
					instanceId: d,
					elementId: g,
					origin: x,
					refType: _,
					skipMotion: b,
					skipToValue: S
				}, i))), hP(document.body, "ix2-animation-started", d), o) {
				Yee(r, d);
				return
			}
			Gr({
				store: r,
				select: ({
					ixInstances: T
				}) => T[d],
				onChange: cP
			}), v && r.dispatch((0, Re.instanceStarted)(d, m.tick))
		}

		function $h(e, t) {
			hP(document.body, "ix2-animation-stopping", {
				instanceId: e.id,
				state: t.getState()
			});
			let {
				elementId: r,
				actionItem: n
			} = e, {
				ixElements: i
			} = t.getState(), {
				ref: a,
				refType: s
			} = i[r] || {};
			s === iP && See(a, n, Le), t.dispatch((0, Re.instanceRemoved)(e.id))
		}

		function hP(e, t, r) {
			let n = document.createEvent("CustomEvent");
			n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
		}

		function Yee(e, t) {
			let {
				ixParameters: r
			} = e.getState();
			e.dispatch((0, Re.instanceStarted)(t, 0)), e.dispatch((0, Re.animationFrameChanged)(performance.now(), r));
			let {
				ixInstances: n
			} = e.getState();
			cP(n[t], e)
		}

		function cP(e, t) {
			let {
				active: r,
				continuous: n,
				complete: i,
				elementId: a,
				actionItem: s,
				actionTypeId: o,
				renderType: l,
				current: f,
				groupIndex: u,
				eventId: c,
				eventTarget: v,
				eventStateKey: d,
				actionListId: p,
				isCarrier: m,
				styleProp: h,
				verbose: g,
				pluginInstance: y
			} = e, {
				ixData: _,
				ixSession: b
			} = t.getState(), {
				events: S
			} = _, x = S[c] || {}, {
				mediaQueries: T = _.mediaQueryKeys
			} = x;
			if (Us(T, b.mediaQueryKey) && (n || r || i)) {
				if (f || l === fee && i) {
					t.dispatch((0, Re.elementStateChanged)(a, o, f, s));
					let {
						ixElements: P
					} = t.getState(), {
						ref: D,
						refType: w,
						refState: C
					} = P[a] || {}, F = C && C[o];
					(w === iP || Xs(o)) && mee(D, C, F, c, s, h, Le, l, y)
				}
				if (i) {
					if (m) {
						let P = Uh({
							store: t,
							eventId: c,
							eventTarget: v,
							eventStateKey: d,
							actionListId: p,
							groupIndex: u + 1,
							verbose: g
						});
						g && !P && t.dispatch((0, Re.actionListPlaybackChanged)({
							actionListId: p,
							isPlaying: !1
						}))
					}
					$h(e, t)
				}
			}
		}
	});
	var pP = E(er => {
		"use strict";
		var Qee = qr().default,
			Zee = lt().default;
		Object.defineProperty(er, "__esModule", {
			value: !0
		});
		er.actions = void 0;
		er.destroy = fP;
		er.init = nte;
		er.setEnv = rte;
		er.store = void 0;
		cS();
		var Jee = Ju(),
			ete = Zee(vI()),
			Kh = Vh(),
			tte = Qee(Rs());
		er.actions = tte;
		var Ys = (0, Jee.createStore)(ete.default);
		er.store = Ys;

		function rte(e) {
			e() && (0, Kh.observeRequests)(Ys)
		}

		function nte(e) {
			fP(), (0, Kh.startEngine)({
				store: Ys,
				rawData: e,
				allowEvents: !0
			})
		}

		function fP() {
			(0, Kh.stopEngine)(Ys)
		}
	});
	var gP = E((che, vP) => {
		var dP = ot(),
			mP = pP();
		mP.setEnv(dP.env);
		dP.define("ix2", vP.exports = function() {
			return mP
		})
	});
	var EP = E((fhe, yP) => {
		var wn = ot();
		wn.define("links", yP.exports = function(e, t) {
			var r = {},
				n = e(window),
				i, a = wn.env(),
				s = window.location,
				o = document.createElement("a"),
				l = "w--current",
				f = /index\.(html|php)$/,
				u = /\/$/,
				c, v;
			r.ready = r.design = r.preview = d;

			function d() {
				i = a && wn.env("design"), v = wn.env("slug") || s.pathname || "", wn.scroll.off(m), c = [];
				for (var g = document.links, y = 0; y < g.length; ++y) p(g[y]);
				c.length && (wn.scroll.on(m), m())
			}

			function p(g) {
				var y = i && g.getAttribute("href-disabled") || g.getAttribute("href");
				if (o.href = y, !(y.indexOf(":") >= 0)) {
					var _ = e(g);
					if (o.hash.length > 1 && o.host + o.pathname === s.host + s.pathname) {
						if (!/^#[a-zA-Z0-9\-\_]+$/.test(o.hash)) return;
						var b = e(o.hash);
						b.length && c.push({
							link: _,
							sec: b,
							active: !1
						});
						return
					}
					if (!(y === "#" || y === "")) {
						var S = o.href === s.href || y === v || f.test(y) && u.test(v);
						h(_, l, S)
					}
				}
			}

			function m() {
				var g = n.scrollTop(),
					y = n.height();
				t.each(c, function(_) {
					var b = _.link,
						S = _.sec,
						x = S.offset().top,
						T = S.outerHeight(),
						P = y * .5,
						D = S.is(":visible") && x + T - P >= g && x + P <= g + y;
					_.active !== D && (_.active = D, h(b, l, D))
				})
			}

			function h(g, y, _) {
				var b = g.hasClass(y);
				_ && b || !_ && !b || (_ ? g.addClass(y) : g.removeClass(y))
			}
			return r
		})
	});
	var bP = E((phe, _P) => {
		var Qs = ot();
		Qs.define("scroll", _P.exports = function(e) {
			var t = {
					WF_CLICK_EMPTY: "click.wf-empty-link",
					WF_CLICK_SCROLL: "click.wf-scroll"
				},
				r = window.location,
				n = p() ? null : window.history,
				i = e(window),
				a = e(document),
				s = e(document.body),
				o = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(F) {
					window.setTimeout(F, 15)
				},
				l = Qs.env("editor") ? ".w-editor-body" : "body",
				f = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
				u = 'a[href="#"]',
				c = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
				v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
				d = document.createElement("style");
			d.appendChild(document.createTextNode(v));

			function p() {
				try {
					return !!window.frameElement
				} catch {
					return !0
				}
			}
			var m = /^#[a-zA-Z0-9][\w:.-]*$/;

			function h(F) {
				return m.test(F.hash) && F.host + F.pathname === r.host + r.pathname
			}
			let g = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

			function y() {
				return document.body.getAttribute("data-wf-scroll-motion") === "none" || g.matches
			}

			function _(F, O) {
				var R;
				switch (O) {
					case "add":
						R = F.attr("tabindex"), R ? F.attr("data-wf-tabindex-swap", R) : F.attr("tabindex", "-1");
						break;
					case "remove":
						R = F.attr("data-wf-tabindex-swap"), R ? (F.attr("tabindex", R), F.removeAttr("data-wf-tabindex-swap")) : F.removeAttr("tabindex");
						break
				}
				F.toggleClass("wf-force-outline-none", O === "add")
			}

			function b(F) {
				var O = F.currentTarget;
				if (!(Qs.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))) {
					var R = h(O) ? O.hash : "";
					if (R !== "") {
						var L = e(R);
						L.length && (F && (F.preventDefault(), F.stopPropagation()), S(R, F), window.setTimeout(function() {
							x(L, function() {
								_(L, "add"), L.get(0).focus({
									preventScroll: !0
								}), _(L, "remove")
							})
						}, F ? 0 : 300))
					}
				}
			}

			function S(F) {
				if (r.hash !== F && n && n.pushState && !(Qs.env.chrome && r.protocol === "file:")) {
					var O = n.state && n.state.hash;
					O !== F && n.pushState({
						hash: F
					}, "", F)
				}
			}

			function x(F, O) {
				var R = i.scrollTop(),
					L = T(F);
				if (R !== L) {
					var H = P(F, R, L),
						Y = Date.now(),
						A = function() {
							var M = Date.now() - Y;
							window.scroll(0, D(R, L, M, H)), M <= H ? o(A) : typeof O == "function" && O()
						};
					o(A)
				}
			}

			function T(F) {
				var O = e(f),
					R = O.css("position") === "fixed" ? O.outerHeight() : 0,
					L = F.offset().top - R;
				if (F.data("scroll") === "mid") {
					var H = i.height() - R,
						Y = F.outerHeight();
					Y < H && (L -= Math.round((H - Y) / 2))
				}
				return L
			}

			function P(F, O, R) {
				if (y()) return 0;
				var L = 1;
				return s.add(F).each(function(H, Y) {
					var A = parseFloat(Y.getAttribute("data-scroll-time"));
					!isNaN(A) && A >= 0 && (L = A)
				}), (472.143 * Math.log(Math.abs(O - R) + 125) - 2e3) * L
			}

			function D(F, O, R, L) {
				return R > L ? O : F + (O - F) * w(R / L)
			}

			function w(F) {
				return F < .5 ? 4 * F * F * F : (F - 1) * (2 * F - 2) * (2 * F - 2) + 1
			}

			function C() {
				var {
					WF_CLICK_EMPTY: F,
					WF_CLICK_SCROLL: O
				} = t;
				a.on(O, c, b), a.on(F, u, function(R) {
					R.preventDefault()
				}), document.head.insertBefore(d, document.head.firstChild)
			}
			return {
				ready: C
			}
		})
	});
	var TP = E((dhe, SP) => {
		var ite = ot();
		ite.define("touch", SP.exports = function(e) {
			var t = {},
				r = window.getSelection;
			e.event.special.tap = {
				bindType: "click",
				delegateType: "click"
			}, t.init = function(a) {
				return a = typeof a == "string" ? e(a).get(0) : a, a ? new n(a) : null
			};

			function n(a) {
				var s = !1,
					o = !1,
					l = Math.min(Math.round(window.innerWidth * .04), 40),
					f, u;
				a.addEventListener("touchstart", c, !1), a.addEventListener("touchmove", v, !1), a.addEventListener("touchend", d, !1), a.addEventListener("touchcancel", p, !1), a.addEventListener("mousedown", c, !1), a.addEventListener("mousemove", v, !1), a.addEventListener("mouseup", d, !1), a.addEventListener("mouseout", p, !1);

				function c(h) {
					var g = h.touches;
					g && g.length > 1 || (s = !0, g ? (o = !0, f = g[0].clientX) : f = h.clientX, u = f)
				}

				function v(h) {
					if (s) {
						if (o && h.type === "mousemove") {
							h.preventDefault(), h.stopPropagation();
							return
						}
						var g = h.touches,
							y = g ? g[0].clientX : h.clientX,
							_ = y - u;
						u = y, Math.abs(_) > l && r && String(r()) === "" && (i("swipe", h, {
							direction: _ > 0 ? "right" : "left"
						}), p())
					}
				}

				function d(h) {
					if (s && (s = !1, o && h.type === "mouseup")) {
						h.preventDefault(), h.stopPropagation(), o = !1;
						return
					}
				}

				function p() {
					s = !1
				}

				function m() {
					a.removeEventListener("touchstart", c, !1), a.removeEventListener("touchmove", v, !1), a.removeEventListener("touchend", d, !1), a.removeEventListener("touchcancel", p, !1), a.removeEventListener("mousedown", c, !1), a.removeEventListener("mousemove", v, !1), a.removeEventListener("mouseup", d, !1), a.removeEventListener("mouseout", p, !1), a = null
				}
				this.destroy = m
			}

			function i(a, s, o) {
				var l = e.Event(a, {
					originalEvent: s
				});
				e(s.target).trigger(l, o)
			}
			return t.instance = t.init(document), t
		})
	});
	var IP = E(Yh => {
		"use strict";
		Object.defineProperty(Yh, "__esModule", {
			value: !0
		});
		Yh.default = ate;

		function ate(e, t, r, n, i, a, s, o, l, f, u, c, v) {
			return function(d) {
				e(d);
				var p = d.form,
					m = {
						name: p.attr("data-name") || p.attr("name") || "Untitled Form",
						pageId: p.attr("data-wf-page-id") || "",
						elementId: p.attr("data-wf-element-id") || "",
						source: t.href,
						test: r.env(),
						fields: {},
						fileUploads: {},
						dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(p.html()),
						trackingCookies: n()
					};
				let h = p.attr("data-wf-flow");
				h && (m.wfFlow = h), i(d);
				var g = a(p, m.fields);
				if (g) return s(g);
				if (m.fileUploads = o(p), l(d), !f) {
					u(d);
					return
				}
				c.ajax({
					url: v,
					type: "POST",
					data: m,
					dataType: "json",
					crossDomain: !0
				}).done(function(y) {
					y && y.code === 200 && (d.success = !0), u(d)
				}).fail(function() {
					u(d)
				})
			}
		}
	});
	var AP = E((vhe, xP) => {
		var Zs = ot();
		Zs.define("forms", xP.exports = function(e, t) {
			var r = {},
				n = e(document),
				i, a = window.location,
				s = window.XDomainRequest && !window.atob,
				o = ".w-form",
				l, f = /e(-)?mail/i,
				u = /^\S+@\S+$/,
				c = window.alert,
				v = Zs.env(),
				d, p, m, h = /list-manage[1-9]?.com/i,
				g = t.debounce(function() {
					c("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
				}, 100);
			r.ready = r.design = r.preview = function() {
				y(), !v && !d && b()
			};

			function y() {
				l = e("html").attr("data-wf-site"), p = "https://webflow.com/api/v1/form/" + l, s && p.indexOf("https://webflow.com") >= 0 && (p = p.replace("https://webflow.com", "https://formdata.webflow.com")), m = `${p}/signFile`, i = e(o + " form"), i.length && i.each(_)
			}

			function _(M, N) {
				var U = e(N),
					$ = e.data(N, o);
				$ || ($ = e.data(N, o, {
					form: U
				})), S($);
				var X = U.closest("div.w-form");
				$.done = X.find("> .w-form-done"), $.fail = X.find("> .w-form-fail"), $.fileUploads = X.find(".w-file-upload"), $.fileUploads.each(function(ie) {
					H(ie, $)
				});
				var ee = $.form.attr("aria-label") || $.form.attr("data-name") || "Form";
				$.done.attr("aria-label") || $.form.attr("aria-label", ee), $.done.attr("tabindex", "-1"), $.done.attr("role", "region"), $.done.attr("aria-label") || $.done.attr("aria-label", ee + " success"), $.fail.attr("tabindex", "-1"), $.fail.attr("role", "region"), $.fail.attr("aria-label") || $.fail.attr("aria-label", ee + " failure");
				var re = $.action = U.attr("action");
				if ($.handler = null, $.redirect = U.attr("data-redirect"), h.test(re)) {
					$.handler = O;
					return
				}
				if (!re) {
					if (l) {
						$.handler = (() => {
							let ie = IP().default;
							return ie(S, a, Zs, w, L, T, c, P, x, l, R, e, p)
						})();
						return
					}
					g()
				}
			}

			function b() {
				d = !0, n.on("submit", o + " form", function(ie) {
					var Q = e.data(this, o);
					Q.handler && (Q.evt = ie, Q.handler(Q))
				});
				let M = ".w-checkbox-input",
					N = ".w-radio-input",
					U = "w--redirected-checked",
					$ = "w--redirected-focus",
					X = "w--redirected-focus-visible",
					ee = ":focus-visible, [data-wf-focus-visible]",
					re = [
						["checkbox", M],
						["radio", N]
					];
				n.on("change", o + ' form input[type="checkbox"]:not(' + M + ")", ie => {
					e(ie.target).siblings(M).toggleClass(U)
				}), n.on("change", o + ' form input[type="radio"]', ie => {
					e(`input[name="${ie.target.name}"]:not(${M})`).map((ae, xe) => e(xe).siblings(N).removeClass(U));
					let Q = e(ie.target);
					Q.hasClass("w-radio-input") || Q.siblings(N).addClass(U)
				}), re.forEach(([ie, Q]) => {
					n.on("focus", o + ` form input[type="${ie}"]:not(` + Q + ")", ae => {
						e(ae.target).siblings(Q).addClass($), e(ae.target).filter(ee).siblings(Q).addClass(X)
					}), n.on("blur", o + ` form input[type="${ie}"]:not(` + Q + ")", ae => {
						e(ae.target).siblings(Q).removeClass(`${$} ${X}`)
					})
				})
			}

			function S(M) {
				var N = M.btn = M.form.find(':input[type="submit"]');
				M.wait = M.btn.attr("data-wait") || null, M.success = !1, N.prop("disabled", !1), M.label && N.val(M.label)
			}

			function x(M) {
				var N = M.btn,
					U = M.wait;
				N.prop("disabled", !0), U && (M.label = N.val(), N.val(U))
			}

			function T(M, N) {
				var U = null;
				return N = N || {}, M.find(':input:not([type="submit"]):not([type="file"])').each(function($, X) {
					var ee = e(X),
						re = ee.attr("type"),
						ie = ee.attr("data-name") || ee.attr("name") || "Field " + ($ + 1),
						Q = ee.val();
					if (re === "checkbox") Q = ee.is(":checked");
					else if (re === "radio") {
						if (N[ie] === null || typeof N[ie] == "string") return;
						Q = M.find('input[name="' + ee.attr("name") + '"]:checked').val() || null
					}
					typeof Q == "string" && (Q = e.trim(Q)), N[ie] = Q, U = U || C(ee, re, ie, Q)
				}), U
			}

			function P(M) {
				var N = {};
				return M.find(':input[type="file"]').each(function(U, $) {
					var X = e($),
						ee = X.attr("data-name") || X.attr("name") || "File " + (U + 1),
						re = X.attr("data-value");
					typeof re == "string" && (re = e.trim(re)), N[ee] = re
				}), N
			}
			let D = {
				_mkto_trk: "marketo"
			};

			function w() {
				return document.cookie.split("; ").reduce(function(N, U) {
					let $ = U.split("="),
						X = $[0];
					if (X in D) {
						let ee = D[X],
							re = $.slice(1).join("=");
						N[ee] = re
					}
					return N
				}, {})
			}

			function C(M, N, U, $) {
				var X = null;
				return N === "password" ? X = "Passwords cannot be submitted." : M.attr("required") ? $ ? f.test(M.attr("type")) && (u.test($) || (X = "Please enter a valid email address for: " + U)) : X = "Please fill out the required field: " + U : U === "g-recaptcha-response" && !$ && (X = "Please confirm you\u2019re not a robot."), X
			}

			function F(M) {
				L(M), R(M)
			}

			function O(M) {
				S(M);
				var N = M.form,
					U = {};
				if (/^https/.test(a.href) && !/^https/.test(M.action)) {
					N.attr("method", "post");
					return
				}
				L(M);
				var $ = T(N, U);
				if ($) return c($);
				x(M);
				var X;
				t.each(U, function(Q, ae) {
					f.test(ae) && (U.EMAIL = Q), /^((full[ _-]?)?name)$/i.test(ae) && (X = Q), /^(first[ _-]?name)$/i.test(ae) && (U.FNAME = Q), /^(last[ _-]?name)$/i.test(ae) && (U.LNAME = Q)
				}), X && !U.FNAME && (X = X.split(" "), U.FNAME = X[0], U.LNAME = U.LNAME || X[1]);
				var ee = M.action.replace("/post?", "/post-json?") + "&c=?",
					re = ee.indexOf("u=") + 2;
				re = ee.substring(re, ee.indexOf("&", re));
				var ie = ee.indexOf("id=") + 3;
				ie = ee.substring(ie, ee.indexOf("&", ie)), U["b_" + re + "_" + ie] = "", e.ajax({
					url: ee,
					data: U,
					dataType: "jsonp"
				}).done(function(Q) {
					M.success = Q.result === "success" || /already/.test(Q.msg), M.success || console.info("MailChimp error: " + Q.msg), R(M)
				}).fail(function() {
					R(M)
				})
			}

			function R(M) {
				var N = M.form,
					U = M.redirect,
					$ = M.success;
				if ($ && U) {
					Zs.location(U);
					return
				}
				M.done.toggle($), M.fail.toggle(!$), $ ? M.done.focus() : M.fail.focus(), N.toggle(!$), S(M)
			}

			function L(M) {
				M.evt && M.evt.preventDefault(), M.evt = null
			}

			function H(M, N) {
				if (!N.fileUploads || !N.fileUploads[M]) return;
				var U, $ = e(N.fileUploads[M]),
					X = $.find("> .w-file-upload-default"),
					ee = $.find("> .w-file-upload-uploading"),
					re = $.find("> .w-file-upload-success"),
					ie = $.find("> .w-file-upload-error"),
					Q = X.find(".w-file-upload-input"),
					ae = X.find(".w-file-upload-label"),
					xe = ae.children(),
					fe = ie.find(".w-file-upload-error-msg"),
					q = re.find(".w-file-upload-file"),
					K = re.find(".w-file-remove-link"),
					J = q.find(".w-file-upload-file-name"),
					j = fe.attr("data-w-size-error"),
					ve = fe.attr("data-w-type-error"),
					Xe = fe.attr("data-w-generic-error");
				if (v || ae.on("click keydown", function(V) {
						V.type === "keydown" && V.which !== 13 && V.which !== 32 || (V.preventDefault(), Q.click())
					}), ae.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), K.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), v) Q.on("click", function(V) {
					V.preventDefault()
				}), ae.on("click", function(V) {
					V.preventDefault()
				}), xe.on("click", function(V) {
					V.preventDefault()
				});
				else {
					K.on("click keydown", function(V) {
						if (V.type === "keydown") {
							if (V.which !== 13 && V.which !== 32) return;
							V.preventDefault()
						}
						Q.removeAttr("data-value"), Q.val(""), J.html(""), X.toggle(!0), re.toggle(!1), ae.focus()
					}), Q.on("change", function(V) {
						U = V.target && V.target.files && V.target.files[0], U && (X.toggle(!1), ie.toggle(!1), ee.toggle(!0), ee.focus(), J.text(U.name), z() || x(N), N.fileUploads[M].uploading = !0, Y(U, k))
					});
					var ke = ae.outerHeight();
					Q.height(ke), Q.width(1)
				}

				function I(V) {
					var G = V.responseJSON && V.responseJSON.msg,
						te = Xe;
					typeof G == "string" && G.indexOf("InvalidFileTypeError") === 0 ? te = ve : typeof G == "string" && G.indexOf("MaxFileSizeError") === 0 && (te = j), fe.text(te), Q.removeAttr("data-value"), Q.val(""), ee.toggle(!1), X.toggle(!0), ie.toggle(!0), ie.focus(), N.fileUploads[M].uploading = !1, z() || S(N)
				}

				function k(V, G) {
					if (V) return I(V);
					var te = G.fileName,
						ne = G.postData,
						me = G.fileId,
						Z = G.s3Url;
					Q.attr("data-value", me), A(Z, ne, U, te, B)
				}

				function B(V) {
					if (V) return I(V);
					ee.toggle(!1), re.css("display", "inline-block"), re.focus(), N.fileUploads[M].uploading = !1, z() || S(N)
				}

				function z() {
					var V = N.fileUploads && N.fileUploads.toArray() || [];
					return V.some(function(G) {
						return G.uploading
					})
				}
			}

			function Y(M, N) {
				var U = new URLSearchParams({
					name: M.name,
					size: M.size
				});
				e.ajax({
					type: "GET",
					url: `${m}?${U}`,
					crossDomain: !0
				}).done(function($) {
					N(null, $)
				}).fail(function($) {
					N($)
				})
			}

			function A(M, N, U, $, X) {
				var ee = new FormData;
				for (var re in N) ee.append(re, N[re]);
				ee.append("file", U, $), e.ajax({
					type: "POST",
					url: M,
					data: ee,
					processData: !1,
					contentType: !1
				}).done(function() {
					X(null)
				}).fail(function(ie) {
					X(ie)
				})
			}
			return r
		})
	});
	var CP = E((ghe, PP) => {
		var _r = ot(),
			ste = Nu(),
			We = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			};
		_r.define("navbar", PP.exports = function(e, t) {
			var r = {},
				n = e.tram,
				i = e(window),
				a = e(document),
				s = t.debounce,
				o, l, f, u, c = _r.env(),
				v = '<div class="w-nav-overlay" data-wf-ignore />',
				d = ".w-nav",
				p = "w--open",
				m = "w--nav-dropdown-open",
				h = "w--nav-dropdown-toggle-open",
				g = "w--nav-dropdown-list-open",
				y = "w--nav-link-open",
				_ = ste.triggers,
				b = e();
			r.ready = r.design = r.preview = S, r.destroy = function() {
				b = e(), x(), l && l.length && l.each(w)
			};

			function S() {
				f = c && _r.env("design"), u = _r.env("editor"), o = e(document.body), l = a.find(d), l.length && (l.each(D), x(), T())
			}

			function x() {
				_r.resize.off(P)
			}

			function T() {
				_r.resize.on(P)
			}

			function P() {
				l.each(X)
			}

			function D(q, K) {
				var J = e(K),
					j = e.data(K, d);
				j || (j = e.data(K, d, {
					open: !1,
					el: J,
					config: {},
					selectedIdx: -1
				})), j.menu = J.find(".w-nav-menu"), j.links = j.menu.find(".w-nav-link"), j.dropdowns = j.menu.find(".w-dropdown"), j.dropdownToggle = j.menu.find(".w-dropdown-toggle"), j.dropdownList = j.menu.find(".w-dropdown-list"), j.button = J.find(".w-nav-button"), j.container = J.find(".w-container"), j.overlayContainerId = "w-nav-overlay-" + q, j.outside = U(j);
				var ve = J.find(".w-nav-brand");
				ve && ve.attr("href") === "/" && ve.attr("aria-label") == null && ve.attr("aria-label", "home"), j.button.attr("style", "-webkit-user-select: text;"), j.button.attr("aria-label") == null && j.button.attr("aria-label", "menu"), j.button.attr("role", "button"), j.button.attr("tabindex", "0"), j.button.attr("aria-controls", j.overlayContainerId), j.button.attr("aria-haspopup", "menu"), j.button.attr("aria-expanded", "false"), j.el.off(d), j.button.off(d), j.menu.off(d), O(j), f ? (C(j), j.el.on("setting" + d, R(j))) : (F(j), j.button.on("click" + d, M(j)), j.menu.on("click" + d, "a", N(j)), j.button.on("keydown" + d, L(j)), j.el.on("keydown" + d, H(j))), X(q, K)
			}

			function w(q, K) {
				var J = e.data(K, d);
				J && (C(J), e.removeData(K, d))
			}

			function C(q) {
				q.overlay && (fe(q, !0), q.overlay.remove(), q.overlay = null)
			}

			function F(q) {
				q.overlay || (q.overlay = e(v).appendTo(q.el), q.overlay.attr("id", q.overlayContainerId), q.parent = q.menu.parent(), fe(q, !0))
			}

			function O(q) {
				var K = {},
					J = q.config || {},
					j = K.animation = q.el.attr("data-animation") || "default";
				K.animOver = /^over/.test(j), K.animDirect = /left$/.test(j) ? -1 : 1, J.animation !== j && q.open && t.defer(A, q), K.easing = q.el.attr("data-easing") || "ease", K.easing2 = q.el.attr("data-easing2") || "ease";
				var ve = q.el.attr("data-duration");
				K.duration = ve != null ? Number(ve) : 400, K.docHeight = q.el.attr("data-doc-height"), q.config = K
			}

			function R(q) {
				return function(K, J) {
					J = J || {};
					var j = i.width();
					O(q), J.open === !0 && ae(q, !0), J.open === !1 && fe(q, !0), q.open && t.defer(function() {
						j !== i.width() && A(q)
					})
				}
			}

			function L(q) {
				return function(K) {
					switch (K.keyCode) {
						case We.SPACE:
						case We.ENTER:
							return M(q)(), K.preventDefault(), K.stopPropagation();
						case We.ESCAPE:
							return fe(q), K.preventDefault(), K.stopPropagation();
						case We.ARROW_RIGHT:
						case We.ARROW_DOWN:
						case We.HOME:
						case We.END:
							return q.open ? (K.keyCode === We.END ? q.selectedIdx = q.links.length - 1 : q.selectedIdx = 0, Y(q), K.preventDefault(), K.stopPropagation()) : (K.preventDefault(), K.stopPropagation())
					}
				}
			}

			function H(q) {
				return function(K) {
					if (q.open) switch (q.selectedIdx = q.links.index(document.activeElement), K.keyCode) {
						case We.HOME:
						case We.END:
							return K.keyCode === We.END ? q.selectedIdx = q.links.length - 1 : q.selectedIdx = 0, Y(q), K.preventDefault(), K.stopPropagation();
						case We.ESCAPE:
							return fe(q), q.button.focus(), K.preventDefault(), K.stopPropagation();
						case We.ARROW_LEFT:
						case We.ARROW_UP:
							return q.selectedIdx = Math.max(-1, q.selectedIdx - 1), Y(q), K.preventDefault(), K.stopPropagation();
						case We.ARROW_RIGHT:
						case We.ARROW_DOWN:
							return q.selectedIdx = Math.min(q.links.length - 1, q.selectedIdx + 1), Y(q), K.preventDefault(), K.stopPropagation()
					}
				}
			}

			function Y(q) {
				if (q.links[q.selectedIdx]) {
					var K = q.links[q.selectedIdx];
					K.focus(), N(K)
				}
			}

			function A(q) {
				q.open && (fe(q, !0), ae(q, !0))
			}

			function M(q) {
				return s(function() {
					q.open ? fe(q) : ae(q)
				})
			}

			function N(q) {
				return function(K) {
					var J = e(this),
						j = J.attr("href");
					if (!_r.validClick(K.currentTarget)) {
						K.preventDefault();
						return
					}
					j && j.indexOf("#") === 0 && q.open && fe(q)
				}
			}

			function U(q) {
				return q.outside && a.off("click" + d, q.outside),
					function(K) {
						var J = e(K.target);
						u && J.closest(".w-editor-bem-EditorOverlay").length || $(q, J)
					}
			}
			var $ = s(function(q, K) {
				if (q.open) {
					var J = K.closest(".w-nav-menu");
					q.menu.is(J) || fe(q)
				}
			});

			function X(q, K) {
				var J = e.data(K, d),
					j = J.collapsed = J.button.css("display") !== "none";
				if (J.open && !j && !f && fe(J, !0), J.container.length) {
					var ve = re(J);
					J.links.each(ve), J.dropdowns.each(ve)
				}
				J.open && xe(J)
			}
			var ee = "max-width";

			function re(q) {
				var K = q.container.css(ee);
				return K === "none" && (K = ""),
					function(J, j) {
						j = e(j), j.css(ee, ""), j.css(ee) === "none" && j.css(ee, K)
					}
			}

			function ie(q, K) {
				K.setAttribute("data-nav-menu-open", "")
			}

			function Q(q, K) {
				K.removeAttribute("data-nav-menu-open")
			}

			function ae(q, K) {
				if (q.open) return;
				q.open = !0, q.menu.each(ie), q.links.addClass(y), q.dropdowns.addClass(m), q.dropdownToggle.addClass(h), q.dropdownList.addClass(g), q.button.addClass(p);
				var J = q.config,
					j = J.animation;
				(j === "none" || !n.support.transform || J.duration <= 0) && (K = !0);
				var ve = xe(q),
					Xe = q.menu.outerHeight(!0),
					ke = q.menu.outerWidth(!0),
					I = q.el.height(),
					k = q.el[0];
				if (X(0, k), _.intro(0, k), _r.redraw.up(), f || a.on("click" + d, q.outside), K) {
					V();
					return
				}
				var B = "transform " + J.duration + "ms " + J.easing;
				if (q.overlay && (b = q.menu.prev(), q.overlay.show().append(q.menu)), J.animOver) {
					n(q.menu).add(B).set({
						x: J.animDirect * ke,
						height: ve
					}).start({
						x: 0
					}).then(V), q.overlay && q.overlay.width(ke);
					return
				}
				var z = I + Xe;
				n(q.menu).add(B).set({
					y: -z
				}).start({
					y: 0
				}).then(V);

				function V() {
					q.button.attr("aria-expanded", "true")
				}
			}

			function xe(q) {
				var K = q.config,
					J = K.docHeight ? a.height() : o.height();
				return K.animOver ? q.menu.height(J) : q.el.css("position") !== "fixed" && (J -= q.el.outerHeight(!0)), q.overlay && q.overlay.height(J), J
			}

			function fe(q, K) {
				if (!q.open) return;
				q.open = !1, q.button.removeClass(p);
				var J = q.config;
				if ((J.animation === "none" || !n.support.transform || J.duration <= 0) && (K = !0), _.outro(0, q.el[0]), a.off("click" + d, q.outside), K) {
					n(q.menu).stop(), k();
					return
				}
				var j = "transform " + J.duration + "ms " + J.easing2,
					ve = q.menu.outerHeight(!0),
					Xe = q.menu.outerWidth(!0),
					ke = q.el.height();
				if (J.animOver) {
					n(q.menu).add(j).start({
						x: Xe * J.animDirect
					}).then(k);
					return
				}
				var I = ke + ve;
				n(q.menu).add(j).start({
					y: -I
				}).then(k);

				function k() {
					q.menu.height(""), n(q.menu).set({
						x: 0,
						y: 0
					}), q.menu.each(Q), q.links.removeClass(y), q.dropdowns.removeClass(m), q.dropdownToggle.removeClass(h), q.dropdownList.removeClass(g), q.overlay && q.overlay.children().length && (b.length ? q.menu.insertAfter(b) : q.menu.prependTo(q.parent), q.overlay.attr("style", "").hide()), q.el.triggerHandler("w-close"), q.button.attr("aria-expanded", "false")
				}
			}
			return r
		})
	});
	Bb();
	zb();
	jb();
	Ub();
	Kb();
	Nu();
	gP();
	EP();
	bP();
	TP();
	AP();
	CP();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
	"events": {
		"e-2": {
			"id": "e-2",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-2",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-3"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|00e12253-fa74-5b63-d282-503cef6a298e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|00e12253-fa74-5b63-d282-503cef6a298e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1691531626389
		},
		"e-3": {
			"id": "e-3",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-2"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|00e12253-fa74-5b63-d282-503cef6a298e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|00e12253-fa74-5b63-d282-503cef6a298e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1691531626389
		},
		"e-4": {
			"id": "e-4",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-4",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|e18f8bad-431b-21a4-7fb8-34d157ebfbb4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|e18f8bad-431b-21a4-7fb8-34d157ebfbb4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-4-p",
				"smoothing": 90,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1691534815038
		},
		"e-7": {
			"id": "e-7",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-5",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d811d5b928cf4cb9f2b0c5|e2be0bfc-a1f4-1f0b-363e-6b5efbaf4355",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d811d5b928cf4cb9f2b0c5|e2be0bfc-a1f4-1f0b-363e-6b5efbaf4355",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-5-p",
				"smoothing": 90,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1691882549950
		},
		"e-11": {
			"id": "e-11",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-6",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d823c98d23ae4c75f41deb|e2be0bfc-a1f4-1f0b-363e-6b5efbaf4355",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d823c98d23ae4c75f41deb|e2be0bfc-a1f4-1f0b-363e-6b5efbaf4355",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-6-p",
				"smoothing": 90,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1691887455816
		},
		"e-13": {
			"id": "e-13",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-13",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|b40ced9e-c91d-9e4f-d733-1c87424dbd97",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|b40ced9e-c91d-9e4f-d733-1c87424dbd97",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-13-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": true,
				"addOffsetValue": 10,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1692215931485
		},
		"e-14": {
			"id": "e-14",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-14",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|89bed25d-816b-7a99-2306-d52338c2a1ed",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|89bed25d-816b-7a99-2306-d52338c2a1ed",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-14-p",
				"smoothing": 90,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1692219720286
		},
		"e-15": {
			"id": "e-15",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|80d2d5aa-9299-a786-4bc1-ee0ffdb19e6c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|80d2d5aa-9299-a786-4bc1-ee0ffdb19e6c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1692223308075
		},
		"e-16": {
			"id": "e-16",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-17"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692223601900
		},
		"e-19": {
			"id": "e-19",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d2e04514eb62594879d14c|b8713271-f3f9-a54b-1792-3a1634afaed3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d2e04514eb62594879d14c|b8713271-f3f9-a54b-1792-3a1634afaed3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1692224353565
		},
		"e-20": {
			"id": "e-20",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-21"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d2e04514eb62594879d14c",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d2e04514eb62594879d14c",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692228682065
		},
		"e-22": {
			"id": "e-22",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-17",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-23"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "fbb7e496-855f-fb5a-8c1f-04a9486dcec6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "fbb7e496-855f-fb5a-8c1f-04a9486dcec6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692238130395
		},
		"e-23": {
			"id": "e-23",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-22"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "fbb7e496-855f-fb5a-8c1f-04a9486dcec6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "fbb7e496-855f-fb5a-8c1f-04a9486dcec6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692238130395
		},
		"e-24": {
			"id": "e-24",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-19",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|8eecd661-66a1-a3a5-73ea-957aa1daba5d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|8eecd661-66a1-a3a5-73ea-957aa1daba5d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-19-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 90,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-19-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 90,
				"restingState": 50
			}],
			"createdOn": 1692238296459
		},
		"e-25": {
			"id": "e-25",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-26"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "fbb7e496-855f-fb5a-8c1f-04a9486dcec4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "fbb7e496-855f-fb5a-8c1f-04a9486dcec4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692238449336
		},
		"e-26": {
			"id": "e-26",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-25"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "fbb7e496-855f-fb5a-8c1f-04a9486dcec4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "fbb7e496-855f-fb5a-8c1f-04a9486dcec4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692238449337
		},
		"e-27": {
			"id": "e-27",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-22",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "fbb7e496-855f-fb5a-8c1f-04a9486dcec6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "fbb7e496-855f-fb5a-8c1f-04a9486dcec6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-22-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 85,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-22-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 85,
				"restingState": 50
			}],
			"createdOn": 1692238643316
		},
		"e-31": {
			"id": "e-31",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-32"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".navbar-link",
				"originalId": "5f99e680-9381-3bcd-8a27-6de0754b6c81",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".navbar-link",
				"originalId": "5f99e680-9381-3bcd-8a27-6de0754b6c81",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692297555993
		},
		"e-32": {
			"id": "e-32",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-24",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-31"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".navbar-link",
				"originalId": "5f99e680-9381-3bcd-8a27-6de0754b6c81",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".navbar-link",
				"originalId": "5f99e680-9381-3bcd-8a27-6de0754b6c81",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692297555994
		},
		"e-33": {
			"id": "e-33",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-34"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".button",
				"originalId": "64d1a3f882efd7fa3c72659a|ab7b33a3-0465-4586-9a86-ca3026e53603",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".button",
				"originalId": "64d1a3f882efd7fa3c72659a|ab7b33a3-0465-4586-9a86-ca3026e53603",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692299005499
		},
		"e-34": {
			"id": "e-34",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-24",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-33"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".button",
				"originalId": "64d1a3f882efd7fa3c72659a|ab7b33a3-0465-4586-9a86-ca3026e53603",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".button",
				"originalId": "64d1a3f882efd7fa3c72659a|ab7b33a3-0465-4586-9a86-ca3026e53603",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692299005499
		},
		"e-36": {
			"id": "e-36",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-25",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-35"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692299518632
		},
		"e-38": {
			"id": "e-38",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-37"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692299779860
		},
		"e-39": {
			"id": "e-39",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-27",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-40"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|7143fffd-633c-07f2-3a65-b20243998169",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|7143fffd-633c-07f2-3a65-b20243998169",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692303247633
		},
		"e-40": {
			"id": "e-40",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-28",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-39"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|7143fffd-633c-07f2-3a65-b20243998169",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|7143fffd-633c-07f2-3a65-b20243998169",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692303247633
		},
		"e-42": {
			"id": "e-42",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-25",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-41"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d2e04514eb62594879d14c",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d2e04514eb62594879d14c",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692303868976
		},
		"e-44": {
			"id": "e-44",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-25",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-43"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d811d5b928cf4cb9f2b0c5",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d811d5b928cf4cb9f2b0c5",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692303903196
		},
		"e-46": {
			"id": "e-46",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-25",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-45"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d823c98d23ae4c75f41deb",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d823c98d23ae4c75f41deb",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692303922779
		},
		"e-48": {
			"id": "e-48",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-25",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-47"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d29305de51453823f98ced",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d29305de51453823f98ced",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692303943943
		},
		"e-49": {
			"id": "e-49",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-50"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".footer-link",
				"originalId": "cf95b69d-f29d-0a9c-b665-872ba4efc23a",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".footer-link",
				"originalId": "cf95b69d-f29d-0a9c-b665-872ba4efc23a",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692304440170
		},
		"e-50": {
			"id": "e-50",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-24",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-49"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".footer-link",
				"originalId": "cf95b69d-f29d-0a9c-b665-872ba4efc23a",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".footer-link",
				"originalId": "cf95b69d-f29d-0a9c-b665-872ba4efc23a",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692304440171
		},
		"e-52": {
			"id": "e-52",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-29",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-51"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d2e04514eb62594879d14c",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d2e04514eb62594879d14c",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692306853862
		},
		"e-54": {
			"id": "e-54",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-30",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-53"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d811d5b928cf4cb9f2b0c5",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d811d5b928cf4cb9f2b0c5",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692307214093
		},
		"e-56": {
			"id": "e-56",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-31",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-55"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d823c98d23ae4c75f41deb",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d823c98d23ae4c75f41deb",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692307346711
		},
		"e-58": {
			"id": "e-58",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-32",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-57"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d29305de51453823f98ced",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d29305de51453823f98ced",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692311472732
		},
		"e-60": {
			"id": "e-60",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d2e04514eb62594879d14c|693ad8d6-6d10-22dd-11d8-f320d6c89b84",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d2e04514eb62594879d14c|693ad8d6-6d10-22dd-11d8-f320d6c89b84",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1692407868751
		},
		"e-61": {
			"id": "e-61",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-62"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "dbe51792-9a8c-3d6b-314f-07510389fef0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "dbe51792-9a8c-3d6b-314f-07510389fef0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692558053156
		},
		"e-62": {
			"id": "e-62",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-24",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-61"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "dbe51792-9a8c-3d6b-314f-07510389fef0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "dbe51792-9a8c-3d6b-314f-07510389fef0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692558053157
		},
		"e-63": {
			"id": "e-63",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-64"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".social-icon",
				"originalId": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".social-icon",
				"originalId": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692558670357
		},
		"e-64": {
			"id": "e-64",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-24",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-63"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".social-icon",
				"originalId": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".social-icon",
				"originalId": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692558670359
		},
		"e-68": {
			"id": "e-68",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-33",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d2e04514eb62594879d14c|6f4de11e-aa5f-fee6-8bbb-b0a07133458d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d2e04514eb62594879d14c|6f4de11e-aa5f-fee6-8bbb-b0a07133458d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-33-p",
				"smoothing": 85,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1692752154534
		},
		"e-85": {
			"id": "e-85",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-34",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-84"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d29305de51453823f98ced",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d29305de51453823f98ced",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692816018433
		},
		"e-86": {
			"id": "e-86",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-35",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-87"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d29305de51453823f98ced|48270707-6435-f41b-8109-f25d88237e8c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d29305de51453823f98ced|48270707-6435-f41b-8109-f25d88237e8c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692816276103
		},
		"e-87": {
			"id": "e-87",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-36",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-86"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d29305de51453823f98ced|48270707-6435-f41b-8109-f25d88237e8c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d29305de51453823f98ced|48270707-6435-f41b-8109-f25d88237e8c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692816276105
		},
		"e-88": {
			"id": "e-88",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-89"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".button",
				"originalId": "64d2f5647e7caa45bc7d155d|9a663309-c919-7e20-8401-73f5d03c559e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".button",
				"originalId": "64d2f5647e7caa45bc7d155d|9a663309-c919-7e20-8401-73f5d03c559e",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692817128170
		},
		"e-89": {
			"id": "e-89",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-88"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".button",
				"originalId": "64d2f5647e7caa45bc7d155d|9a663309-c919-7e20-8401-73f5d03c559e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".button",
				"originalId": "64d2f5647e7caa45bc7d155d|9a663309-c919-7e20-8401-73f5d03c559e",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692817128172
		},
		"e-90": {
			"id": "e-90",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-91"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|7143fffd-633c-07f2-3a65-b20243998169",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|7143fffd-633c-07f2-3a65-b20243998169",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692817848861
		},
		"e-91": {
			"id": "e-91",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-24",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-90"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d1a3f882efd7fa3c72659a|7143fffd-633c-07f2-3a65-b20243998169",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d1a3f882efd7fa3c72659a|7143fffd-633c-07f2-3a65-b20243998169",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692817848863
		},
		"e-92": {
			"id": "e-92",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d29305de51453823f98ced|a29b9dc4-7220-0910-104f-3549756ba975",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d29305de51453823f98ced|a29b9dc4-7220-0910-104f-3549756ba975",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1692818886633
		},
		"e-93": {
			"id": "e-93",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-2",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-94"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "64d811d5b928cf4cb9f2b0c5|36ffce52-2ba7-b7da-fe67-1a78a875a78d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d811d5b928cf4cb9f2b0c5|36ffce52-2ba7-b7da-fe67-1a78a875a78d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692913580801
		},
		"e-94": {
			"id": "e-94",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-93"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "64d811d5b928cf4cb9f2b0c5|36ffce52-2ba7-b7da-fe67-1a78a875a78d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d811d5b928cf4cb9f2b0c5|36ffce52-2ba7-b7da-fe67-1a78a875a78d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692913580801
		},
		"e-95": {
			"id": "e-95",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-13",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64d811d5b928cf4cb9f2b0c5|36ffce52-2ba7-b7da-fe67-1a78a875a7ab",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64d811d5b928cf4cb9f2b0c5|36ffce52-2ba7-b7da-fe67-1a78a875a7ab",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-13-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": true,
				"addOffsetValue": 10,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1692913580801
		},
		"e-96": {
			"id": "e-96",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-97"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".social-icon",
				"originalId": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".social-icon",
				"originalId": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692913737840
		},
		"e-97": {
			"id": "e-97",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-96"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".social-icon",
				"originalId": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".social-icon",
				"originalId": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692913737841
		},
		"e-98": {
			"id": "e-98",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-99"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".hyperlink",
				"originalId": "55231d37-80bc-b424-5627-d07e359d584e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".hyperlink",
				"originalId": "55231d37-80bc-b424-5627-d07e359d584e",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692921528563
		},
		"e-99": {
			"id": "e-99",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-24",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-98"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".hyperlink",
				"originalId": "55231d37-80bc-b424-5627-d07e359d584e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".hyperlink",
				"originalId": "55231d37-80bc-b424-5627-d07e359d584e",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692921528565
		},
		"e-100": {
			"id": "e-100",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-101"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "5df91fee-11a5-3f67-d012-3a15536e092f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "5df91fee-11a5-3f67-d012-3a15536e092f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692921619446
		},
		"e-101": {
			"id": "e-101",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-24",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-100"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "5df91fee-11a5-3f67-d012-3a15536e092f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "5df91fee-11a5-3f67-d012-3a15536e092f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692921619448
		},
		"e-102": {
			"id": "e-102",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "NAVBAR_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-39",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-103"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "dbe51792-9a8c-3d6b-314f-07510389fed9",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "dbe51792-9a8c-3d6b-314f-07510389fed9",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692991662277
		},
		"e-103": {
			"id": "e-103",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "NAVBAR_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-40",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-102"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "dbe51792-9a8c-3d6b-314f-07510389fed9",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "dbe51792-9a8c-3d6b-314f-07510389fed9",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1692991662278
		}
	},
	"actionLists": {
		"a-2": {
			"id": "a-2",
			"title": "Work item on hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-2-n-15",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon-item",
							"selectorGuids": ["0aab0966-092e-8040-10ed-f100f74af2ca"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".outline-shade",
							"selectorGuids": ["522d7fbd-b0c7-83f8-6898-137132466962"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-11",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".outline-shade",
							"selectorGuids": ["522d7fbd-b0c7-83f8-6898-137132466962"]
						},
						"xValue": 0.85,
						"yValue": 0.85,
						"locked": true
					}
				}, {
					"id": "a-2-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".button-text",
							"selectorGuids": ["4617e358-4420-a7bd-f95a-96012edf1a8e"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-2-n-10",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".button-text",
							"selectorGuids": ["4617e358-4420-a7bd-f95a-96012edf1a8e"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-13",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".outline-shade",
							"selectorGuids": ["522d7fbd-b0c7-83f8-6898-137132466962"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-14",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".outline-shade",
							"selectorGuids": ["522d7fbd-b0c7-83f8-6898-137132466962"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-2-n-16",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon-item",
							"selectorGuids": ["0aab0966-092e-8040-10ed-f100f74af2ca"]
						},
						"xValue": 100,
						"yValue": -100,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1691531629349
		},
		"a-3": {
			"id": "a-3",
			"title": "Work item out hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-3-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".button-text",
							"selectorGuids": ["4617e358-4420-a7bd-f95a-96012edf1a8e"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-3-n-14",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".outline-shade",
							"selectorGuids": ["522d7fbd-b0c7-83f8-6898-137132466962"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-3-n-15",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".outline-shade",
							"selectorGuids": ["522d7fbd-b0c7-83f8-6898-137132466962"]
						},
						"xValue": 0.85,
						"yValue": 0.85,
						"locked": true
					}
				}, {
					"id": "a-3-n-16",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon-item",
							"selectorGuids": ["0aab0966-092e-8040-10ed-f100f74af2ca"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1691531629349
		},
		"a-4": {
			"id": "a-4",
			"title": "Home hero images scrolling",
			"continuousParameterGroups": [{
				"id": "a-4-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-4-n",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.one",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "a762dc80-8e61-3ed8-8d39-a20a1fa7752d"]
							},
							"zValue": -10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-4-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.one",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "a762dc80-8e61-3ed8-8d39-a20a1fa7752d"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-4-n-5",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.two",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "2f796cea-8aac-5f3c-956d-eea40ae9d1bf"]
							},
							"zValue": -10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-4-n-7",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.two",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "2f796cea-8aac-5f3c-956d-eea40ae9d1bf"]
							},
							"xValue": -50,
							"yValue": 0,
							"xUnit": "%",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-4-n-9",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.three",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "f558d538-5d32-0152-2c4c-aefe2f8d0118"]
							},
							"zValue": -10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-4-n-11",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.three",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "f558d538-5d32-0152-2c4c-aefe2f8d0118"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-4-n-13",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "SIBLINGS",
								"selector": ".home-hero-content",
								"selectorGuids": ["0d49f647-4c42-0603-3653-a2b3888ee880"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-4-n-2",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.one",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "a762dc80-8e61-3ed8-8d39-a20a1fa7752d"]
							},
							"zValue": -25,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-4-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.one",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "a762dc80-8e61-3ed8-8d39-a20a1fa7752d"]
							},
							"yValue": -50,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-4-n-6",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.two",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "2f796cea-8aac-5f3c-956d-eea40ae9d1bf"]
							},
							"zValue": -30,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-4-n-8",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.two",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "2f796cea-8aac-5f3c-956d-eea40ae9d1bf"]
							},
							"xValue": -50,
							"yValue": 100,
							"xUnit": "%",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-4-n-10",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.three",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "f558d538-5d32-0152-2c4c-aefe2f8d0118"]
							},
							"zValue": -25,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-4-n-12",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-image.three",
								"selectorGuids": ["f60466fa-5b3c-0769-e55b-8bdba94e09a2", "f558d538-5d32-0152-2c4c-aefe2f8d0118"]
							},
							"yValue": -65,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-4-n-14",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "SIBLINGS",
								"selector": ".home-hero-content",
								"selectorGuids": ["0d49f647-4c42-0603-3653-a2b3888ee880"]
							},
							"value": 0.25,
							"unit": ""
						}
					}]
				}]
			}],
			"createdOn": 1691534819225
		},
		"a-5": {
			"id": "a-5",
			"title": "Work hero parallax",
			"continuousParameterGroups": [{
				"id": "a-5-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-5-n",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.three",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "b1da1860-c3c2-0adb-40f9-faedb2037c4d"]
							},
							"zValue": -10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-5-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.three",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "b1da1860-c3c2-0adb-40f9-faedb2037c4d"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-5-n-5",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.one",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "8ba1a2d1-1705-1622-1d2a-680a8792d566"]
							},
							"zValue": 10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-5-n-7",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.one",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "8ba1a2d1-1705-1622-1d2a-680a8792d566"]
							},
							"xValue": 0,
							"yValue": 0,
							"xUnit": "%",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-5-n-9",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.two",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "e552f57b-806b-7321-08f5-f4c343fbaea5"]
							},
							"zValue": -10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-5-n-10",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.two",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "e552f57b-806b-7321-08f5-f4c343fbaea5"]
							},
							"xValue": 0,
							"yValue": 0,
							"xUnit": "%",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-5-n-13",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "SIBLINGS",
								"selector": ".work-studio-content",
								"selectorGuids": ["3a31cd77-ff17-25df-20a6-87ea56da87c5"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-5-n-2",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.three",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "b1da1860-c3c2-0adb-40f9-faedb2037c4d"]
							},
							"zValue": -20,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-5-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.three",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "b1da1860-c3c2-0adb-40f9-faedb2037c4d"]
							},
							"yValue": 50,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-5-n-6",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.one",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "8ba1a2d1-1705-1622-1d2a-680a8792d566"]
							},
							"zValue": 20,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-5-n-8",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.one",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "8ba1a2d1-1705-1622-1d2a-680a8792d566"]
							},
							"xValue": 20,
							"yValue": 50,
							"xUnit": "%",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-5-n-11",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.two",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "e552f57b-806b-7321-08f5-f4c343fbaea5"]
							},
							"zValue": -20,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-5-n-12",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-studio-image.two",
								"selectorGuids": ["b7879e0e-5edc-8762-21c5-be4745c29f9d", "e552f57b-806b-7321-08f5-f4c343fbaea5"]
							},
							"xValue": -20,
							"yValue": 50,
							"xUnit": "%",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-5-n-14",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "SIBLINGS",
								"selector": ".work-studio-content",
								"selectorGuids": ["3a31cd77-ff17-25df-20a6-87ea56da87c5"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}]
			}],
			"createdOn": 1691882553358
		},
		"a-6": {
			"id": "a-6",
			"title": "Contact hero parallax",
			"continuousParameterGroups": [{
				"id": "a-6-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-6-n",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.one",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "60fd8d58-e109-ad79-ecbb-22a900ee2287"]
							},
							"zValue": 5,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-6-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.one",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "60fd8d58-e109-ad79-ecbb-22a900ee2287"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-6-n-5",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.two",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "99987ef2-396a-59e0-bced-e5eab7afc70b"]
							},
							"zValue": 10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-6-n-7",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.two",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "99987ef2-396a-59e0-bced-e5eab7afc70b"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-6-n-9",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.three",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "2afabd48-68ac-d684-d88a-1a4dc59c8c69"]
							},
							"zValue": -10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-6-n-10",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.three",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "2afabd48-68ac-d684-d88a-1a4dc59c8c69"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-6-n-13",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "SIBLINGS",
								"selector": ".work-studio-content",
								"selectorGuids": ["3a31cd77-ff17-25df-20a6-87ea56da87c5"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-6-n-2",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.one",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "60fd8d58-e109-ad79-ecbb-22a900ee2287"]
							},
							"zValue": 10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-6-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.one",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "60fd8d58-e109-ad79-ecbb-22a900ee2287"]
							},
							"yValue": 25,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-6-n-6",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.two",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "99987ef2-396a-59e0-bced-e5eab7afc70b"]
							},
							"zValue": 20,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-6-n-8",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.two",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "99987ef2-396a-59e0-bced-e5eab7afc70b"]
							},
							"yValue": 50,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-6-n-11",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.three",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "2afabd48-68ac-d684-d88a-1a4dc59c8c69"]
							},
							"zValue": -20,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-6-n-12",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".work-agency-image.three",
								"selectorGuids": ["3dc3a170-ff17-21c0-54ae-4c0e3b1f560b", "2afabd48-68ac-d684-d88a-1a4dc59c8c69"]
							},
							"yValue": 50,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-6-n-14",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "SIBLINGS",
								"selector": ".work-studio-content",
								"selectorGuids": ["3a31cd77-ff17-25df-20a6-87ea56da87c5"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}]
			}],
			"createdOn": 1691887458624
		},
		"a-13": {
			"id": "a-13",
			"title": "Work items move down",
			"continuousParameterGroups": [{
				"id": "a-13-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-13-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "SIBLINGS",
								"selector": ".work-large",
								"selectorGuids": ["d7d3ab0d-d1a2-7f4f-ea73-19c3d2edae42"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 25,
					"actionItems": [{
						"id": "a-13-n-3",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "SIBLINGS",
								"selector": ".work-large",
								"selectorGuids": ["d7d3ab0d-d1a2-7f4f-ea73-19c3d2edae42"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-13-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "SIBLINGS",
								"selector": ".work-large",
								"selectorGuids": ["d7d3ab0d-d1a2-7f4f-ea73-19c3d2edae42"]
							},
							"yValue": 40,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-13-n-4",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "SIBLINGS",
								"selector": ".work-large",
								"selectorGuids": ["d7d3ab0d-d1a2-7f4f-ea73-19c3d2edae42"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}]
			}],
			"createdOn": 1692215934790
		},
		"a-14": {
			"id": "a-14",
			"title": "Three images parallax",
			"continuousParameterGroups": [{
				"id": "a-14-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-14-n",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.one",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "e20cf8c3-8101-2576-077c-5de793a95e9a"]
							},
							"zValue": 0,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-14-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.one",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "e20cf8c3-8101-2576-077c-5de793a95e9a"]
							},
							"yValue": -10,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-14-n-9",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.two",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "8eafee52-d7b9-78e2-2205-c0e84715b388"]
							},
							"zValue": -5,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-14-n-11",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.two",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "8eafee52-d7b9-78e2-2205-c0e84715b388"]
							},
							"xValue": 0,
							"yValue": -25,
							"xUnit": "%",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-14-n-13",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.three",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "83d8b25f-5812-3ec9-2592-05cc774dc144"]
							},
							"zValue": 5,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-14-n-15",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.three",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "83d8b25f-5812-3ec9-2592-05cc774dc144"]
							},
							"xValue": 0,
							"yValue": -25,
							"xUnit": "%",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-14-n-2",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.one",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "e20cf8c3-8101-2576-077c-5de793a95e9a"]
							},
							"zValue": 5,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-14-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.one",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "e20cf8c3-8101-2576-077c-5de793a95e9a"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-14-n-10",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.two",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "8eafee52-d7b9-78e2-2205-c0e84715b388"]
							},
							"zValue": -10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-14-n-12",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.two",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "8eafee52-d7b9-78e2-2205-c0e84715b388"]
							},
							"xValue": -10,
							"yValue": 15,
							"xUnit": "%",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-14-n-14",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.three",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "83d8b25f-5812-3ec9-2592-05cc774dc144"]
							},
							"zValue": 10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-14-n-16",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".home-story-image.three",
								"selectorGuids": ["a547c7a1-d1f7-ec9d-1f72-e66447f8f0a9", "83d8b25f-5812-3ec9-2592-05cc774dc144"]
							},
							"xValue": 10,
							"yValue": 15,
							"xUnit": "%",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1692219723183
		},
		"a-15": {
			"id": "a-15",
			"title": "Regular banner parallax",
			"continuousParameterGroups": [{
				"id": "a-15-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-15-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image-cover",
								"selectorGuids": ["3a604b81-303b-8a79-503b-cb14b2a15dad"]
							},
							"yValue": -15,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-15-n-3",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image-cover",
								"selectorGuids": ["3a604b81-303b-8a79-503b-cb14b2a15dad"]
							},
							"xValue": 1.1,
							"yValue": 1.1,
							"locked": true
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-15-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image-cover",
								"selectorGuids": ["3a604b81-303b-8a79-503b-cb14b2a15dad"]
							},
							"yValue": 15,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-15-n-4",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".image-cover",
								"selectorGuids": ["3a604b81-303b-8a79-503b-cb14b2a15dad"]
							},
							"xValue": 1.1,
							"yValue": 1.1,
							"locked": true
						}
					}]
				}]
			}],
			"createdOn": 1692223312520
		},
		"a-16": {
			"id": "a-16",
			"title": "Looping text on load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-16-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 30000,
						"target": {
							"selector": ".banner-loop-strip",
							"selectorGuids": ["d9b1a9ea-eac2-fd6d-b42b-36c59d0714e8"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-16-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".banner-loop-strip",
							"selectorGuids": ["d9b1a9ea-eac2-fd6d-b42b-36c59d0714e8"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1692223606678
		},
		"a-17": {
			"id": "a-17",
			"title": "Service item on hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-17-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".image-cover",
							"selectorGuids": ["3a604b81-303b-8a79-503b-cb14b2a15dad"]
						},
						"xValue": 1.1,
						"yValue": 1.1,
						"locked": true
					}
				}, {
					"id": "a-17-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-image",
							"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-17-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-image",
							"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-17-n-7",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 200,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-image",
							"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-17-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".image-cover",
							"selectorGuids": ["3a604b81-303b-8a79-503b-cb14b2a15dad"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-17-n-6",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-image",
							"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-17-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-image",
							"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692238133187
		},
		"a-18": {
			"id": "a-18",
			"title": "Service item out hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-18-n-5",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".image-cover",
							"selectorGuids": ["3a604b81-303b-8a79-503b-cb14b2a15dad"]
						},
						"xValue": 1.1,
						"yValue": 1.1,
						"locked": true
					}
				}, {
					"id": "a-18-n-6",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-image",
							"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-18-n-7",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-image",
							"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1692238133187
		},
		"a-19": {
			"id": "a-19",
			"title": "Service item rotate images",
			"continuousParameterGroups": [{
				"id": "a-19-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-19-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".service-image",
								"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
							},
							"xValue": -150,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}, {
						"id": "a-19-n-3",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".service-image",
								"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
							},
							"zValue": -15,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-19-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".service-image",
								"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
							},
							"xValue": 0,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}, {
						"id": "a-19-n-4",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".service-image",
								"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
							},
							"zValue": 15,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}]
				}]
			}, {
				"id": "a-19-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": []
			}],
			"createdOn": 1692238298963
		},
		"a-20": {
			"id": "a-20",
			"title": "Service item open",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-20-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".services-bottom",
							"selectorGuids": ["397c0509-dab0-dd9a-8d0a-cd487a4148b5"]
						},
						"widthValue": 100,
						"heightValue": 0,
						"widthUnit": "%",
						"heightUnit": "px",
						"locked": false
					}
				}, {
					"id": "a-20-n-9",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon-small",
							"selectorGuids": ["f94c490e-e9e6-c667-a1f1-abedec551549"]
						},
						"zValue": 135,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-20-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hover-text",
							"selectorGuids": ["a5cb759a-73bd-3962-2a8c-8ce7b465bfca"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-20-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-content",
							"selectorGuids": ["51afc212-276d-d26a-9fa5-0f598b29dc5e"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-20-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-content",
							"selectorGuids": ["51afc212-276d-d26a-9fa5-0f598b29dc5e"]
						},
						"yValue": 2,
						"xUnit": "PX",
						"yUnit": "rem",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-20-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".services-bottom",
							"selectorGuids": ["397c0509-dab0-dd9a-8d0a-cd487a4148b5"]
						},
						"widthValue": 100,
						"widthUnit": "%",
						"heightUnit": "AUTO",
						"locked": false
					}
				}, {
					"id": "a-20-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-content",
							"selectorGuids": ["51afc212-276d-d26a-9fa5-0f598b29dc5e"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-20-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-content",
							"selectorGuids": ["51afc212-276d-d26a-9fa5-0f598b29dc5e"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "rem",
						"zUnit": "PX"
					}
				}, {
					"id": "a-20-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hover-text",
							"selectorGuids": ["a5cb759a-73bd-3962-2a8c-8ce7b465bfca"]
						},
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-20-n-10",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon-small",
							"selectorGuids": ["f94c490e-e9e6-c667-a1f1-abedec551549"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692238378765
		},
		"a-21": {
			"id": "a-21",
			"title": "Service item close",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-21-n-4",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".services-bottom",
							"selectorGuids": ["397c0509-dab0-dd9a-8d0a-cd487a4148b5"]
						},
						"widthValue": 100,
						"heightValue": 0,
						"widthUnit": "%",
						"heightUnit": "px",
						"locked": false
					}
				}, {
					"id": "a-21-n-8",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon-small",
							"selectorGuids": ["f94c490e-e9e6-c667-a1f1-abedec551549"]
						},
						"zValue": 135,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-21-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hover-text",
							"selectorGuids": ["a5cb759a-73bd-3962-2a8c-8ce7b465bfca"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-21-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-content",
							"selectorGuids": ["51afc212-276d-d26a-9fa5-0f598b29dc5e"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-21-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".service-content",
							"selectorGuids": ["51afc212-276d-d26a-9fa5-0f598b29dc5e"]
						},
						"yValue": 2,
						"xUnit": "PX",
						"yUnit": "rem",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1692238378765
		},
		"a-22": {
			"id": "a-22",
			"title": "Service images move vertical",
			"continuousParameterGroups": [{
				"id": "a-22-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": []
			}, {
				"id": "a-22-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-22-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".service-image",
								"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
							},
							"yValue": -40,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-22-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".service-image",
								"selectorGuids": ["e55cc7c9-0ce8-9873-0738-da4ec31dc1fe"]
							},
							"yValue": 40,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1692238647304
		},
		"a-23": {
			"id": "a-23",
			"title": "Rotate text on hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-23-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hover-text",
							"selectorGuids": ["a5cb759a-73bd-3962-2a8c-8ce7b465bfca"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-23-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hover-text",
							"selectorGuids": ["a5cb759a-73bd-3962-2a8c-8ce7b465bfca"]
						},
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692297561995
		},
		"a-24": {
			"id": "a-24",
			"title": "Rotate text out hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-24-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hover-text",
							"selectorGuids": ["a5cb759a-73bd-3962-2a8c-8ce7b465bfca"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1692297561995
		},
		"a-25": {
			"id": "a-25",
			"title": "Preloader",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-25-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".preloader",
							"selectorGuids": ["277f3713-0921-a4f5-c673-e8f9e119c9c6"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-25-n-5",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".preloader",
							"selectorGuids": ["277f3713-0921-a4f5-c673-e8f9e119c9c6"]
						},
						"value": "flex"
					}
				}, {
					"id": "a-25-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".preloader-logo",
							"selectorGuids": ["6ccc451a-4d7d-4a65-af89-8217ada6fc28"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-25-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "outQuint",
						"duration": 1000,
						"target": {
							"selector": ".preloader-logo",
							"selectorGuids": ["6ccc451a-4d7d-4a65-af89-8217ada6fc28"]
						},
						"yValue": 52,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-25-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "outQuint",
						"duration": 1000,
						"target": {
							"selector": ".preloader",
							"selectorGuids": ["277f3713-0921-a4f5-c673-e8f9e119c9c6"]
						},
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-25-n-6",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".preloader",
							"selectorGuids": ["277f3713-0921-a4f5-c673-e8f9e119c9c6"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692299522749
		},
		"a-26": {
			"id": "a-26",
			"title": "Home page load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-26-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-word-two",
							"selectorGuids": ["3a29ab70-fe37-1739-4a7e-c066c9321335"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-26-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-26-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-26-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-26-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 100,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-word-two",
							"selectorGuids": ["3a29ab70-fe37-1739-4a7e-c066c9321335"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692299784077
		},
		"a-27": {
			"id": "a-27",
			"title": "Arrow on hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-27-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hover-arrow",
							"selectorGuids": ["fe8b4f53-1355-f7ab-c4e1-17831e514610"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-27-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hover-arrow",
							"selectorGuids": ["fe8b4f53-1355-f7ab-c4e1-17831e514610"]
						},
						"xValue": 100,
						"yValue": -100,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692303250536
		},
		"a-28": {
			"id": "a-28",
			"title": "Arrow out hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-28-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hover-arrow",
							"selectorGuids": ["fe8b4f53-1355-f7ab-c4e1-17831e514610"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1692303250536
		},
		"a-29": {
			"id": "a-29",
			"title": "About page load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-29-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-word-two",
							"selectorGuids": ["3a29ab70-fe37-1739-4a7e-c066c9321335"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-29-n-11",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-hero-image",
							"selectorGuids": ["220a31dc-d972-7009-b711-6ccbcaab4336"]
						},
						"zValue": 20,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-29-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-hero-image",
							"selectorGuids": ["220a31dc-d972-7009-b711-6ccbcaab4336"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-29-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-word-three",
							"selectorGuids": ["1f430e42-e64e-2a36-088d-af24c647474f"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-29-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-29-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-29-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-29-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 100,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-word-two",
							"selectorGuids": ["3a29ab70-fe37-1739-4a7e-c066c9321335"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-29-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 200,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-word-three",
							"selectorGuids": ["1f430e42-e64e-2a36-088d-af24c647474f"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-29-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-hero-image",
							"selectorGuids": ["220a31dc-d972-7009-b711-6ccbcaab4336"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-29-n-10",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 300,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-hero-image",
							"selectorGuids": ["220a31dc-d972-7009-b711-6ccbcaab4336"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692299784077
		},
		"a-30": {
			"id": "a-30",
			"title": "Work page load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-30-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-word-two",
							"selectorGuids": ["3a29ab70-fe37-1739-4a7e-c066c9321335"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-30-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-30-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 100,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-word-two",
							"selectorGuids": ["3a29ab70-fe37-1739-4a7e-c066c9321335"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692299784077
		},
		"a-31": {
			"id": "a-31",
			"title": "Contact page load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-31-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-word-two",
							"selectorGuids": ["3a29ab70-fe37-1739-4a7e-c066c9321335"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-31-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-31-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-31-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-word-one",
							"selectorGuids": ["c6a2eea4-09f6-c211-359e-005876b665d0"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-31-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 100,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".load-word-two",
							"selectorGuids": ["3a29ab70-fe37-1739-4a7e-c066c9321335"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692299784077
		},
		"a-32": {
			"id": "a-32",
			"title": "Project title loop",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-32-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 37000,
						"target": {
							"selector": ".project-hero-strip",
							"selectorGuids": ["602f1376-fc57-cf25-7749-529f166a67c9"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-32-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".project-hero-strip",
							"selectorGuids": ["602f1376-fc57-cf25-7749-529f166a67c9"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1692311475559
		},
		"a-33": {
			"id": "a-33",
			"title": "About banner parallax",
			"continuousParameterGroups": [{
				"id": "a-33-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-33-n",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.two",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "4f33b2a1-c266-da58-b45d-04e857e585dd"]
							},
							"zValue": 10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-33-n-3",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.one",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "eda5301a-310b-5add-fdd9-57591cbbd1c0"]
							},
							"zValue": -20,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-33-n-5",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.three",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "6541da2e-0a17-a548-3653-d86c57f66265"]
							},
							"zValue": -10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-33-n-7",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.three",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "6541da2e-0a17-a548-3653-d86c57f66265"]
							},
							"yValue": -30,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-33-n-9",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.one",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "eda5301a-310b-5add-fdd9-57591cbbd1c0"]
							},
							"yValue": -20,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-33-n-11",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.two",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "4f33b2a1-c266-da58-b45d-04e857e585dd"]
							},
							"yValue": -20,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-33-n-2",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.two",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "4f33b2a1-c266-da58-b45d-04e857e585dd"]
							},
							"zValue": 15,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-33-n-4",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.one",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "eda5301a-310b-5add-fdd9-57591cbbd1c0"]
							},
							"zValue": -25,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-33-n-6",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.three",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "6541da2e-0a17-a548-3653-d86c57f66265"]
							},
							"zValue": -15,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "deg"
						}
					}, {
						"id": "a-33-n-8",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.three",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "6541da2e-0a17-a548-3653-d86c57f66265"]
							},
							"yValue": 10,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-33-n-10",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.one",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "eda5301a-310b-5add-fdd9-57591cbbd1c0"]
							},
							"yValue": 10,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-33-n-12",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".about-banner-image.two",
								"selectorGuids": ["c1d15ee7-ea2c-ad37-eb33-deb64b32d99e", "4f33b2a1-c266-da58-b45d-04e857e585dd"]
							},
							"yValue": 40,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1692407040991
		},
		"a-34": {
			"id": "a-34",
			"title": "Project page load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-34-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-hero-strip",
							"selectorGuids": ["602f1376-fc57-cf25-7749-529f166a67c9"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-34-n-7",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-hero-image",
							"selectorGuids": ["d69837e2-f9c2-e430-9631-ee519e9f3ef0"]
						},
						"zValue": 10,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-34-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-hero-image",
							"selectorGuids": ["d69837e2-f9c2-e430-9631-ee519e9f3ef0"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-34-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".project-hero-strip",
							"selectorGuids": ["602f1376-fc57-cf25-7749-529f166a67c9"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-34-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"selector": ".project-hero-strip",
							"selectorGuids": ["602f1376-fc57-cf25-7749-529f166a67c9"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-34-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 100,
						"easing": "outExpo",
						"duration": 1100,
						"target": {
							"selector": ".project-hero-image",
							"selectorGuids": ["d69837e2-f9c2-e430-9631-ee519e9f3ef0"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-34-n-8",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 100,
						"easing": "outExpo",
						"duration": 1100,
						"target": {
							"selector": ".project-hero-image",
							"selectorGuids": ["d69837e2-f9c2-e430-9631-ee519e9f3ef0"]
						},
						"zValue": -10,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692299784077
		},
		"a-35": {
			"id": "a-35",
			"title": "Next project on hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-35-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-hero-image",
							"selectorGuids": ["d69837e2-f9c2-e430-9631-ee519e9f3ef0"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-35-n-4",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-hero-image",
							"selectorGuids": ["d69837e2-f9c2-e430-9631-ee519e9f3ef0"]
						},
						"zValue": -10,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-35-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-hero-image",
							"selectorGuids": ["d69837e2-f9c2-e430-9631-ee519e9f3ef0"]
						},
						"yValue": -20,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-35-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-hero-image",
							"selectorGuids": ["d69837e2-f9c2-e430-9631-ee519e9f3ef0"]
						},
						"zValue": -5,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692816282534
		},
		"a-36": {
			"id": "a-36",
			"title": "Next project out hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-36-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-hero-image",
							"selectorGuids": ["d69837e2-f9c2-e430-9631-ee519e9f3ef0"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-36-n-4",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-hero-image",
							"selectorGuids": ["d69837e2-f9c2-e430-9631-ee519e9f3ef0"]
						},
						"zValue": -10,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1692816282534
		},
		"a-37": {
			"id": "a-37",
			"title": "Button border color on hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-37-n",
					"actionTypeId": "STYLE_BORDER",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed"
						},
						"globalSwatchId": "1c3864ca",
						"rValue": 255,
						"bValue": 255,
						"gValue": 255,
						"aValue": 0.1
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-37-n-2",
					"actionTypeId": "STYLE_BORDER",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 400,
						"target": {
							"useEventTarget": true,
							"id": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed"
						},
						"globalSwatchId": "",
						"rValue": 255,
						"bValue": 255,
						"gValue": 255,
						"aValue": 0.65
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692817130705
		},
		"a-38": {
			"id": "a-38",
			"title": "Button border color out hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-38-n-2",
					"actionTypeId": "STYLE_BORDER",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 300,
						"target": {
							"useEventTarget": true,
							"id": "ed09f3b0-86dd-2e8d-9b46-8b790373f2ed"
						},
						"globalSwatchId": "1c3864ca",
						"rValue": 255,
						"bValue": 255,
						"gValue": 255,
						"aValue": 0.1
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1692817130705
		},
		"a-39": {
			"id": "a-39",
			"title": "Navbar menu opens",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-39-n",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".lottie-animation",
							"selectorGuids": ["92f10ed8-2278-02b9-685e-f9e5ebc2f386"]
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-39-n-2",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".lottie-animation",
							"selectorGuids": ["92f10ed8-2278-02b9-685e-f9e5ebc2f386"]
						},
						"value": 45
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1692991664715
		},
		"a-40": {
			"id": "a-40",
			"title": "Navbar menu close",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-40-n-2",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".lottie-animation",
							"selectorGuids": ["92f10ed8-2278-02b9-685e-f9e5ebc2f386"]
						},
						"value": 0
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1692991664715
		}
	},
	"site": {
		"mediaQueries": [{
			"key": "main",
			"min": 992,
			"max": 10000
		}, {
			"key": "medium",
			"min": 768,
			"max": 991
		}, {
			"key": "small",
			"min": 480,
			"max": 767
		}, {
			"key": "tiny",
			"min": 0,
			"max": 479
		}]
	}
});