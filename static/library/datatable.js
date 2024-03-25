/*! DataTables 2.0.3
 * © SpryMedia Ltd - datatables.net/license
 */
!(function (n) {
  "use strict";
  var a;
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return n(e, window, document);
      })
    : "object" == typeof exports
    ? ((a = require("jquery")),
      "undefined" == typeof window
        ? (module.exports = function (e, t) {
            return (e = e || window), (t = t || a(e)), n(t, e, e.document);
          })
        : (module.exports = n(a, window, window.document)))
    : (window.DataTable = n(jQuery, window, document));
})(function (B, q, _) {
  "use strict";
  function g(e) {
    var t = parseInt(e, 10);
    return !isNaN(t) && isFinite(e) ? t : null;
  }
  function o(e, t, n) {
    var a = typeof e,
      r = "string" == a;
    return (
      "number" == a ||
      "bigint" == a ||
      !!y(e) ||
      (t && r && (e = P(e, t)),
      n && r && (e = e.replace(j, "")),
      !isNaN(parseFloat(e)) && isFinite(e))
    );
  }
  function l(e, t, n) {
    var a;
    return (
      !!y(e) ||
      (("string" != typeof e || !e.match(/<(input|select)/i)) &&
        (y((a = e)) || "string" == typeof a) &&
        !!o(I(e), t, n)) ||
      null
    );
  }
  function v(e, t, n, a) {
    var r = [],
      o = 0,
      i = t.length;
    if (void 0 !== a) for (; o < i; o++) e[t[o]][n] && r.push(e[t[o]][n][a]);
    else for (; o < i; o++) e[t[o]] && r.push(e[t[o]][n]);
    return r;
  }
  function h(e, t) {
    var n,
      a = [];
    void 0 === t ? ((t = 0), (n = e)) : ((n = t), (t = e));
    for (var r = t; r < n; r++) a.push(r);
    return a;
  }
  function b(e) {
    for (var t = [], n = 0, a = e.length; n < a; n++) e[n] && t.push(e[n]);
    return t;
  }
  var C,
    U,
    t,
    e,
    $ = function (e, H) {
      var W, X, V;
      return $.factory(e, H)
        ? $
        : this instanceof $
        ? B(e).DataTable(H)
        : ((X = void 0 === (H = e)),
          (V = (W = this).length),
          X && (H = {}),
          (this.api = function () {
            return new U(this);
          }),
          this.each(function () {
            var n = 1 < V ? Je({}, H, !0) : H,
              a = 0,
              e = this.getAttribute("id"),
              r = !1,
              t = $.defaults,
              o = B(this);
            if ("table" != this.nodeName.toLowerCase())
              Z(
                null,
                0,
                "Non-table node initialisation (" + this.nodeName + ")",
                2
              );
            else {
              B(this).trigger("options.dt", n),
                ne(t),
                ae(t.column),
                z(t, t, !0),
                z(t.column, t.column, !0),
                z(t, B.extend(n, o.data()), !0);
              for (var i = $.settings, a = 0, l = i.length; a < l; a++) {
                var s = i[a];
                if (
                  s.nTable == this ||
                  (s.nTHead && s.nTHead.parentNode == this) ||
                  (s.nTFoot && s.nTFoot.parentNode == this)
                ) {
                  var k = (void 0 !== n.bRetrieve ? n : t).bRetrieve,
                    E = (void 0 !== n.bDestroy ? n : t).bDestroy;
                  if (X || k) return s.oInstance;
                  if (E) {
                    new $.Api(s).destroy();
                    break;
                  }
                  return void Z(s, 0, "Cannot reinitialise DataTable", 3);
                }
                if (s.sTableId == this.id) {
                  i.splice(a, 1);
                  break;
                }
              }
              (null !== e && "" !== e) ||
                ((e = "DataTables_Table_" + $.ext._unique++), (this.id = e));
              var u = B.extend(!0, {}, $.models.oSettings, {
                  sDestroyWidth: o[0].style.width,
                  sInstance: e,
                  sTableId: e,
                  colgroup: B("<colgroup>").prependTo(this),
                  fastData: function (e, t, n) {
                    return G(u, e, t, n);
                  },
                }),
                e =
                  ((u.nTable = this),
                  (u.oInit = n),
                  i.push(u),
                  (u.api = new U(u)),
                  (u.oInstance = 1 === W.length ? W : o.dataTable()),
                  ne(n),
                  n.aLengthMenu &&
                    !n.iDisplayLength &&
                    (n.iDisplayLength = Array.isArray(n.aLengthMenu[0])
                      ? n.aLengthMenu[0][0]
                      : B.isPlainObject(n.aLengthMenu[0])
                      ? n.aLengthMenu[0].value
                      : n.aLengthMenu[0]),
                  (n = Je(B.extend(!0, {}, t), n)),
                  Q(u.oFeatures, n, [
                    "bPaginate",
                    "bLengthChange",
                    "bFilter",
                    "bSort",
                    "bSortMulti",
                    "bInfo",
                    "bProcessing",
                    "bAutoWidth",
                    "bSortClasses",
                    "bServerSide",
                    "bDeferRender",
                  ]),
                  Q(u, n, [
                    "ajax",
                    "fnFormatNumber",
                    "sServerMethod",
                    "aaSorting",
                    "aaSortingFixed",
                    "aLengthMenu",
                    "sPaginationType",
                    "iStateDuration",
                    "bSortCellsTop",
                    "iTabIndex",
                    "sDom",
                    "fnStateLoadCallback",
                    "fnStateSaveCallback",
                    "renderer",
                    "searchDelay",
                    "rowId",
                    "caption",
                    "layout",
                    ["iCookieDuration", "iStateDuration"],
                    ["oSearch", "oPreviousSearch"],
                    ["aoSearchCols", "aoPreSearchCols"],
                    ["iDisplayLength", "_iDisplayLength"],
                  ]),
                  Q(u.oScroll, n, [
                    ["sScrollX", "sX"],
                    ["sScrollXInner", "sXInner"],
                    ["sScrollY", "sY"],
                    ["bScrollCollapse", "bCollapse"],
                  ]),
                  Q(u.oLanguage, n, "fnInfoCallback"),
                  K(u, "aoDrawCallback", n.fnDrawCallback),
                  K(u, "aoStateSaveParams", n.fnStateSaveParams),
                  K(u, "aoStateLoadParams", n.fnStateLoadParams),
                  K(u, "aoStateLoaded", n.fnStateLoaded),
                  K(u, "aoRowCallback", n.fnRowCallback),
                  K(u, "aoRowCreatedCallback", n.fnCreatedRow),
                  K(u, "aoHeaderCallback", n.fnHeaderCallback),
                  K(u, "aoFooterCallback", n.fnFooterCallback),
                  K(u, "aoInitComplete", n.fnInitComplete),
                  K(u, "aoPreDrawCallback", n.fnPreDrawCallback),
                  (u.rowIdFn = J(n.rowId)),
                  u),
                c =
                  ($.__browser ||
                    ((P = {}),
                    ($.__browser = P),
                    (j = B("<div/>")
                      .css({
                        position: "fixed",
                        top: 0,
                        left: -1 * q.pageXOffset,
                        height: 1,
                        width: 1,
                        overflow: "hidden",
                      })
                      .append(
                        B("<div/>")
                          .css({
                            position: "absolute",
                            top: 1,
                            left: 1,
                            width: 100,
                            overflow: "scroll",
                          })
                          .append(
                            B("<div/>").css({ width: "100%", height: 10 })
                          )
                      )
                      .appendTo("body")),
                    (p = j.children()),
                    (O = p.children()),
                    (P.barWidth = p[0].offsetWidth - p[0].clientWidth),
                    (P.bScrollbarLeft = 1 !== Math.round(O.offset().left)),
                    j.remove()),
                  B.extend(e.oBrowser, $.__browser),
                  (e.oScroll.iBarWidth = $.__browser.barWidth),
                  u.oClasses),
                d =
                  (B.extend(c, $.ext.classes, n.oClasses),
                  o.addClass(c.table),
                  u.oFeatures.bPaginate || (n.iDisplayStart = 0),
                  void 0 === u.iInitDisplayStart &&
                    ((u.iInitDisplayStart = n.iDisplayStart),
                    (u._iDisplayStart = n.iDisplayStart)),
                  u.oLanguage),
                f =
                  (B.extend(!0, d, n.oLanguage),
                  d.sUrl
                    ? (B.ajax({
                        dataType: "json",
                        url: d.sUrl,
                        success: function (e) {
                          z(t.oLanguage, e),
                            B.extend(!0, d, e, u.oInit.oLanguage),
                            ee(u, null, "i18n", [u], !0),
                            Oe(u);
                        },
                        error: function () {
                          Z(u, 0, "i18n file loading error", 21), Oe(u);
                        },
                      }),
                      (r = !0))
                    : ee(u, null, "i18n", [u]),
                  []),
                h = this.getElementsByTagName("thead"),
                p = Ce(u, h[0]);
              if (n.aoColumns) f = n.aoColumns;
              else if (p.length)
                for (l = p[(a = 0)].length; a < l; a++) f.push(null);
              for (a = 0, l = f.length; a < l; a++) re(u);
              var g,
                m,
                v,
                b,
                y,
                D,
                x,
                S = u,
                T = n.aoColumnDefs,
                w = f,
                M = p,
                _ = function (e, t) {
                  oe(u, e, t);
                },
                C = S.aoColumns;
              if (w)
                for (g = 0, m = w.length; g < m; g++)
                  w[g] && w[g].name && (C[g].sName = w[g].name);
              if (T)
                for (g = T.length - 1; 0 <= g; g--) {
                  var I =
                    void 0 !== (x = T[g]).target
                      ? x.target
                      : void 0 !== x.targets
                      ? x.targets
                      : x.aTargets;
                  for (
                    Array.isArray(I) || (I = [I]), v = 0, b = I.length;
                    v < b;
                    v++
                  ) {
                    var A = I[v];
                    if ("number" == typeof A && 0 <= A) {
                      for (; C.length <= A; ) re(S);
                      _(A, x);
                    } else if ("number" == typeof A && A < 0)
                      _(C.length + A, x);
                    else if ("string" == typeof A)
                      for (y = 0, D = C.length; y < D; y++)
                        "_all" === A
                          ? _(y, x)
                          : -1 !== A.indexOf(":name")
                          ? C[y].sName === A.replace(":name", "") && _(y, x)
                          : M.forEach(function (e) {
                              e[y] &&
                                ((e = B(e[y].cell)),
                                A.match(/^[a-z][\w-]*$/i) && (A = "." + A),
                                e.is(A)) &&
                                _(y, x);
                            });
                  }
                }
              if (w) for (g = 0, m = w.length; g < m; g++) _(g, w[g]);
              var F,
                L,
                N,
                j,
                P = o.children("tbody").find("tr").eq(0),
                R =
                  (P.length &&
                    ((F = function (e, t) {
                      return null !== e.getAttribute("data-" + t) ? t : null;
                    }),
                    B(P[0])
                      .children("th, td")
                      .each(function (e, t) {
                        var n,
                          a = u.aoColumns[e];
                        a || Z(u, 0, "Incorrect column count", 18),
                          a.mData === e &&
                            ((n = F(t, "sort") || F(t, "order")),
                            (t = F(t, "filter") || F(t, "search")),
                            (null === n && null === t) ||
                              ((a.mData = {
                                _: e + ".display",
                                sort: null !== n ? e + ".@data-" + n : void 0,
                                type: null !== n ? e + ".@data-" + n : void 0,
                                filter: null !== t ? e + ".@data-" + t : void 0,
                              }),
                              (a._isArrayHost = !0),
                              oe(u, e)));
                      })),
                  u.oFeatures),
                O = function () {
                  if (void 0 === n.aaSorting) {
                    var e = u.aaSorting;
                    for (a = 0, l = e.length; a < l; a++)
                      e[a][1] = u.aoColumns[a].asSorting[0];
                  }
                  ze(u),
                    K(u, "aoDrawCallback", function () {
                      (u.bSorted || "ssp" === te(u) || R.bDeferRender) && ze(u);
                    });
                  var t = o.children("caption"),
                    t =
                      (u.caption &&
                        (t =
                          0 === t.length
                            ? B("<caption/>").appendTo(o)
                            : t).html(u.caption),
                      t.length &&
                        ((t[0]._captionSide = t.css("caption-side")),
                        (u.captionNode = t[0])),
                      0 === h.length && (h = B("<thead/>").appendTo(o)),
                      (u.nTHead = h[0]),
                      B("tr", h).addClass(c.thead.row),
                      o.children("tbody")),
                    t =
                      (0 === t.length && (t = B("<tbody/>").insertAfter(h)),
                      (u.nTBody = t[0]),
                      o.children("tfoot"));
                  if (
                    (0 === t.length && (t = B("<tfoot/>").appendTo(o)),
                    (u.nTFoot = t[0]),
                    B("tr", t).addClass(c.tfoot.row),
                    n.aaData)
                  )
                    for (a = 0; a < n.aaData.length; a++) Y(u, n.aaData[a]);
                  else "dom" == te(u) && se(u, B(u.nTBody).children("tr"));
                  (u.aiDisplay = u.aiDisplayMaster.slice()),
                    !(u.bInitialised = !0) === r && Oe(u);
                };
              K(u, "aoDrawCallback", Ye),
                n.bStateSave
                  ? ((R.bStateSave = !0),
                    (N = O),
                    (L = u).oFeatures.bStateSave
                      ? void 0 !==
                          (j = L.fnStateLoadCallback.call(
                            L.oInstance,
                            L,
                            function (e) {
                              Ge(L, e, N);
                            }
                          )) && Ge(L, j, N)
                      : N())
                  : O();
            }
          }),
          (W = null),
          this);
    },
    c =
      (($.ext = C =
        {
          buttons: {},
          classes: {},
          builder: "-source-",
          errMode: "alert",
          feature: [],
          features: {},
          search: [],
          selector: { cell: [], column: [], row: [] },
          legacy: { ajax: null },
          pager: {},
          renderer: { pageButton: {}, header: {} },
          order: {},
          type: {
            className: {},
            detect: [],
            render: {},
            search: {},
            order: {},
          },
          _unique: 0,
          fnVersionCheck: $.fnVersionCheck,
          iApiIndex: 0,
          sVersion: $.version,
        }),
      B.extend(C, {
        afnFiltering: C.search,
        aTypes: C.type.detect,
        ofnSearch: C.type.search,
        oSort: C.type.order,
        afnSortData: C.order,
        aoFeatures: C.feature,
        oStdClasses: C.classes,
        oPagination: C.pager,
      }),
      B.extend($.ext.classes, {
        container: "dt-container",
        empty: { row: "dt-empty" },
        info: { container: "dt-info" },
        length: { container: "dt-length", select: "dt-input" },
        order: {
          canAsc: "dt-orderable-asc",
          canDesc: "dt-orderable-desc",
          isAsc: "dt-ordering-asc",
          isDesc: "dt-ordering-desc",
          none: "dt-orderable-none",
          position: "sorting_",
        },
        processing: { container: "dt-processing" },
        scrolling: {
          body: "dt-scroll-body",
          container: "dt-scroll",
          footer: { self: "dt-scroll-foot", inner: "dt-scroll-footInner" },
          header: { self: "dt-scroll-head", inner: "dt-scroll-headInner" },
        },
        search: { container: "dt-search", input: "dt-input" },
        table: "dataTable",
        tbody: { cell: "", row: "" },
        thead: { cell: "", row: "" },
        tfoot: { cell: "", row: "" },
        paging: {
          active: "current",
          button: "dt-paging-button",
          container: "dt-paging",
          disabled: "disabled",
        },
      }),
      {}),
    d = /[\r\n\u2028]/g,
    F = /<.*?>/g,
    L =
      /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/,
    N = new RegExp(
      "(\\" +
        [
          "/",
          ".",
          "*",
          "+",
          "?",
          "|",
          "(",
          ")",
          "[",
          "]",
          "{",
          "}",
          "\\",
          "$",
          "^",
          "-",
        ].join("|\\") +
        ")",
      "g"
    ),
    j = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
    y = function (e) {
      return !e || !0 === e || "-" === e;
    },
    P = function (e, t) {
      return (
        c[t] || (c[t] = new RegExp(je(t), "g")),
        "string" == typeof e && "." !== t
          ? e.replace(/\./g, "").replace(c[t], ".")
          : e
      );
    },
    f = function (e, t, n) {
      var a = [],
        r = 0,
        o = e.length;
      if (void 0 !== n)
        for (; r < o; r++) e[r] && e[r][t] && a.push(e[r][t][n]);
      else for (; r < o; r++) e[r] && a.push(e[r][t]);
      return a;
    },
    I = function (e) {
      return e.replace(F, "").replace(/<script/i, "");
    },
    u = function (e) {
      return "string" == typeof (e = Array.isArray(e) ? e.join(",") : e)
        ? e
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
        : e;
    },
    R = function (e, t) {
      var n;
      return "string" != typeof e
        ? e
        : (n = e.normalize("NFD")).length !== e.length
        ? (!0 === t ? e + " " : "") + n.replace(/[\u0300-\u036f]/g, "")
        : n;
    },
    x = function (e) {
      if (Array.from && Set) return Array.from(new Set(e));
      if (
        (function (e) {
          if (!(e.length < 2))
            for (
              var t = e.slice().sort(), n = t[0], a = 1, r = t.length;
              a < r;
              a++
            ) {
              if (t[a] === n) return !1;
              n = t[a];
            }
          return !0;
        })(e)
      )
        return e.slice();
      var t,
        n,
        a,
        r = [],
        o = e.length,
        i = 0;
      e: for (n = 0; n < o; n++) {
        for (t = e[n], a = 0; a < i; a++) if (r[a] === t) continue e;
        r.push(t), i++;
      }
      return r;
    },
    O = function (e, t) {
      if (Array.isArray(t)) for (var n = 0; n < t.length; n++) O(e, t[n]);
      else e.push(t);
      return e;
    };
  function D(t, e) {
    e &&
      e.split(" ").forEach(function (e) {
        e && t.classList.add(e);
      });
  }
  function k(t) {
    var n,
      a,
      r = {};
    B.each(t, function (e) {
      (n = e.match(/^([^A-Z]+?)([A-Z])/)) &&
        -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") &&
        ((a = e.replace(n[0], n[2].toLowerCase())), (r[a] = e), "o" === n[1]) &&
        k(t[e]);
    }),
      (t._hungarianMap = r);
  }
  function z(t, n, a) {
    var r;
    t._hungarianMap || k(t),
      B.each(n, function (e) {
        void 0 === (r = t._hungarianMap[e]) ||
          (!a && void 0 !== n[r]) ||
          ("o" === r.charAt(0)
            ? (n[r] || (n[r] = {}), B.extend(!0, n[r], n[e]), z(t[r], n[r], a))
            : (n[r] = n[e]));
      });
  }
  $.util = {
    diacritics: function (e, t) {
      if ("function" != typeof e) return R(e, t);
      R = e;
    },
    debounce: function (n, a) {
      var r;
      return function () {
        var e = this,
          t = arguments;
        clearTimeout(r),
          (r = setTimeout(function () {
            n.apply(e, t);
          }, a || 250));
      };
    },
    throttle: function (a, e) {
      var r,
        o,
        i = void 0 !== e ? e : 200;
      return function () {
        var e = this,
          t = +new Date(),
          n = arguments;
        r && t < r + i
          ? (clearTimeout(o),
            (o = setTimeout(function () {
              (r = void 0), a.apply(e, n);
            }, i)))
          : ((r = t), a.apply(e, n));
      };
    },
    escapeRegex: function (e) {
      return e.replace(N, "\\$1");
    },
    set: function (a) {
      var f;
      return B.isPlainObject(a)
        ? $.util.set(a._)
        : null === a
        ? function () {}
        : "function" == typeof a
        ? function (e, t, n) {
            a(e, "set", t, n);
          }
        : "string" != typeof a ||
          (-1 === a.indexOf(".") &&
            -1 === a.indexOf("[") &&
            -1 === a.indexOf("("))
        ? function (e, t) {
            e[a] = t;
          }
        : ((f = function (e, t, n) {
            for (
              var a,
                r,
                o,
                i,
                l = de(n),
                n = l[l.length - 1],
                s = 0,
                u = l.length - 1;
              s < u;
              s++
            ) {
              if ("__proto__" === l[s] || "constructor" === l[s])
                throw new Error("Cannot set prototype values");
              if (((a = l[s].match(ce)), (r = l[s].match(p)), a)) {
                if (
                  ((l[s] = l[s].replace(ce, "")),
                  (e[l[s]] = []),
                  (a = l.slice()).splice(0, s + 1),
                  (i = a.join(".")),
                  Array.isArray(t))
                )
                  for (var c = 0, d = t.length; c < d; c++)
                    f((o = {}), t[c], i), e[l[s]].push(o);
                else e[l[s]] = t;
                return;
              }
              r && ((l[s] = l[s].replace(p, "")), (e = e[l[s]](t))),
                (null !== e[l[s]] && void 0 !== e[l[s]]) || (e[l[s]] = {}),
                (e = e[l[s]]);
            }
            n.match(p) ? e[n.replace(p, "")](t) : (e[n.replace(ce, "")] = t);
          }),
          function (e, t) {
            return f(e, t, a);
          });
    },
    get: function (r) {
      var o, f;
      return B.isPlainObject(r)
        ? ((o = {}),
          B.each(r, function (e, t) {
            t && (o[e] = $.util.get(t));
          }),
          function (e, t, n, a) {
            var r = o[t] || o._;
            return void 0 !== r ? r(e, t, n, a) : e;
          })
        : null === r
        ? function (e) {
            return e;
          }
        : "function" == typeof r
        ? function (e, t, n, a) {
            return r(e, t, n, a);
          }
        : "string" != typeof r ||
          (-1 === r.indexOf(".") &&
            -1 === r.indexOf("[") &&
            -1 === r.indexOf("("))
        ? function (e) {
            return e[r];
          }
        : ((f = function (e, t, n) {
            var a, r, o;
            if ("" !== n)
              for (var i = de(n), l = 0, s = i.length; l < s; l++) {
                if (((d = i[l].match(ce)), (a = i[l].match(p)), d)) {
                  if (
                    ((i[l] = i[l].replace(ce, "")),
                    "" !== i[l] && (e = e[i[l]]),
                    (r = []),
                    i.splice(0, l + 1),
                    (o = i.join(".")),
                    Array.isArray(e))
                  )
                    for (var u = 0, c = e.length; u < c; u++)
                      r.push(f(e[u], t, o));
                  var d = d[0].substring(1, d[0].length - 1);
                  e = "" === d ? r : r.join(d);
                  break;
                }
                if (a) (i[l] = i[l].replace(p, "")), (e = e[i[l]]());
                else {
                  if (null === e || null === e[i[l]]) return null;
                  if (void 0 === e || void 0 === e[i[l]]) return;
                  e = e[i[l]];
                }
              }
            return e;
          }),
          function (e, t) {
            return f(e, t, r);
          });
    },
    stripHtml: function (e) {
      var t = typeof e;
      if ("function" != t) return "string" == t ? I(e) : e;
      I = e;
    },
    escapeHtml: function (e) {
      var t = typeof e;
      if ("function" != t) return "string" == t || Array.isArray(e) ? u(e) : e;
      u = e;
    },
    unique: x,
  };
  var r = function (e, t, n) {
    void 0 !== e[t] && (e[n] = e[t]);
  };
  function ne(e) {
    r(e, "ordering", "bSort"),
      r(e, "orderMulti", "bSortMulti"),
      r(e, "orderClasses", "bSortClasses"),
      r(e, "orderCellsTop", "bSortCellsTop"),
      r(e, "order", "aaSorting"),
      r(e, "orderFixed", "aaSortingFixed"),
      r(e, "paging", "bPaginate"),
      r(e, "pagingType", "sPaginationType"),
      r(e, "pageLength", "iDisplayLength"),
      r(e, "searching", "bFilter"),
      "boolean" == typeof e.sScrollX && (e.sScrollX = e.sScrollX ? "100%" : ""),
      "boolean" == typeof e.scrollX && (e.scrollX = e.scrollX ? "100%" : "");
    var t = e.aoSearchCols;
    if (t)
      for (var n = 0, a = t.length; n < a; n++)
        t[n] && z($.models.oSearch, t[n]);
    e.serverSide && !e.searchDelay && (e.searchDelay = 400);
  }
  function ae(e) {
    r(e, "orderable", "bSortable"),
      r(e, "orderData", "aDataSort"),
      r(e, "orderSequence", "asSorting"),
      r(e, "orderDataType", "sortDataType");
    var t = e.aDataSort;
    "number" != typeof t || Array.isArray(t) || (e.aDataSort = [t]);
  }
  function re(e) {
    var t = $.defaults.column,
      n = e.aoColumns.length,
      t = B.extend({}, $.models.oColumn, t, {
        aDataSort: t.aDataSort || [n],
        mData: t.mData || n,
        idx: n,
        searchFixed: {},
        colEl: B("<col>"),
      }),
      t = (e.aoColumns.push(t), e.aoPreSearchCols);
    t[n] = B.extend({}, $.models.oSearch, t[n]);
  }
  function oe(e, t, n) {
    function a(e) {
      return "string" == typeof e && -1 !== e.indexOf("@");
    }
    var r = e.aoColumns[t],
      o =
        (null != n &&
          (ae(n),
          z($.defaults.column, n, !0),
          void 0 === n.mDataProp || n.mData || (n.mData = n.mDataProp),
          n.sType && (r._sManualType = n.sType),
          n.className && !n.sClass && (n.sClass = n.className),
          (t = r.sClass),
          B.extend(r, n),
          Q(r, n, "sWidth", "sWidthOrig"),
          t !== r.sClass && (r.sClass = t + " " + r.sClass),
          void 0 !== n.iDataSort && (r.aDataSort = [n.iDataSort]),
          Q(r, n, "aDataSort")),
        r.mData),
      i = J(o);
    r.mRender &&
      Array.isArray(r.mRender) &&
      ((n = (t = r.mRender.slice()).shift()),
      (r.mRender = $.render[n].apply(q, t))),
      (r._render = r.mRender ? J(r.mRender) : null);
    (r._bAttrSrc =
      B.isPlainObject(o) && (a(o.sort) || a(o.type) || a(o.filter))),
      (r._setter = null),
      (r.fnGetData = function (e, t, n) {
        var a = i(e, t, void 0, n);
        return r._render && t ? r._render(a, t, e, n) : a;
      }),
      (r.fnSetData = function (e, t, n) {
        return m(o)(e, t, n);
      }),
      "number" == typeof o || r._isArrayHost || (e._rowReadObject = !0),
      e.oFeatures.bSort || (r.bSortable = !1);
  }
  function E(e) {
    var t = e;
    if (t.oFeatures.bAutoWidth) {
      var n,
        a,
        r = t.nTable,
        o = t.aoColumns,
        i = t.oScroll,
        l = i.sY,
        s = i.sX,
        i = i.sXInner,
        u = W(t, "bVisible"),
        c = r.getAttribute("width"),
        d = r.parentNode,
        f = r.style.width,
        f =
          (f && -1 !== f.indexOf("%") && (c = f),
          ee(t, null, "column-calc", { visible: u }, !1),
          B(r.cloneNode()).css("visibility", "hidden").removeAttr("id")),
        h = (f.append("<tbody>"), B("<tr/>").appendTo(f.find("tbody")));
      for (
        f.append(B(t.nTHead).clone()).append(B(t.nTFoot).clone()),
          f.find("tfoot th, tfoot td").css("width", ""),
          f.find("thead th, thead td").each(function () {
            var e = ie(t, this, !0, !1);
            e
              ? ((this.style.width = e),
                s &&
                  B(this).append(
                    B("<div/>").css({
                      width: e,
                      margin: 0,
                      padding: 0,
                      border: 0,
                      height: 1,
                    })
                  ))
              : (this.style.width = "");
          }),
          n = 0;
        n < u.length;
        n++
      ) {
        (p = u[n]), (a = o[p]);
        var p = (function (e, t) {
            var n = e.aoColumns[t];
            if (!n.maxLenString) {
              for (
                var a, r = "", o = -1, i = 0, l = e.aiDisplayMaster.length;
                i < l;
                i++
              ) {
                var s = e.aiDisplayMaster[i],
                  s = me(e, s)[t],
                  s =
                    s && "object" == typeof s && s.nodeType
                      ? s.innerHTML
                      : s + "";
                (s = s.replace(/id=".*?"/g, "").replace(/name=".*?"/g, "")),
                  (a = I(s).replace(/&nbsp;/g, " ")).length > o &&
                    ((r = s), (o = a.length));
              }
              n.maxLenString = r;
            }
            return n.maxLenString;
          })(t, p),
          g = C.type.className[a.sType],
          m = p + a.sContentPadding,
          p = -1 === p.indexOf("<") ? _.createTextNode(m) : m;
        B("<td/>").addClass(g).addClass(a.sClass).append(p).appendTo(h);
      }
      B("[name]", f).removeAttr("name");
      var v = B("<div/>")
          .css(
            s || l
              ? {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: 1,
                  right: 0,
                  overflow: "hidden",
                }
              : {}
          )
          .append(f)
          .appendTo(d),
        b =
          (s && i
            ? f.width(i)
            : s
            ? (f.css("width", "auto"),
              f.removeAttr("width"),
              f.width() < d.clientWidth && c && f.width(d.clientWidth))
            : l
            ? f.width(d.clientWidth)
            : c && f.width(c),
          0),
        y = f.find("tbody tr").eq(0).children();
      for (n = 0; n < u.length; n++) {
        var D = y[n].getBoundingClientRect().width;
        (b += D), (o[u[n]].sWidth = A(D));
      }
      (r.style.width = A(b)),
        v.remove(),
        c && (r.style.width = A(c)),
        (!c && !s) ||
          t._reszEvt ||
          (B(q).on(
            "resize.DT-" + t.sInstance,
            $.util.throttle(function () {
              t.bDestroying || E(t);
            })
          ),
          (t._reszEvt = !0));
    }
    for (var x = e, S = x.aoColumns, T = 0; T < S.length; T++) {
      var w = ie(x, [T], !1, !1);
      S[T].colEl.css("width", w);
    }
    i = e.oScroll;
    ("" === i.sY && "" === i.sX) || We(e), ee(e, null, "column-sizing", [e]);
  }
  function M(e, t) {
    e = W(e, "bVisible");
    return "number" == typeof e[t] ? e[t] : null;
  }
  function T(e, t) {
    e = W(e, "bVisible").indexOf(t);
    return -1 !== e ? e : null;
  }
  function H(e) {
    var t = e.aoHeader,
      n = e.aoColumns,
      a = 0;
    if (t.length)
      for (var r = 0, o = t[0].length; r < o; r++)
        n[r].bVisible && "none" !== B(t[0][r].cell).css("display") && a++;
    return a;
  }
  function W(e, n) {
    var a = [];
    return (
      e.aoColumns.map(function (e, t) {
        e[n] && a.push(t);
      }),
      a
    );
  }
  function X(e) {
    for (
      var t,
        n,
        a,
        r,
        o,
        i,
        l,
        s = e.aoColumns,
        u = e.aoData,
        c = $.ext.type.detect,
        d = 0,
        f = s.length;
      d < f;
      d++
    ) {
      if (((l = []), !(o = s[d]).sType && o._sManualType))
        o.sType = o._sManualType;
      else if (!o.sType) {
        for (t = 0, n = c.length; t < n; t++) {
          for (a = 0, r = u.length; a < r; a++)
            if (u[a]) {
              if (
                (void 0 === l[a] && (l[a] = G(e, a, d, "type")),
                !(i = c[t](l[a], e)) && t !== c.length - 2)
              )
                break;
              if ("html" === i && !y(l[a])) break;
            }
          if (i) {
            o.sType = i;
            break;
          }
        }
        o.sType || (o.sType = "string");
      }
      var h = C.type.className[o.sType],
        h =
          (h && (V(e.aoHeader, d, h), V(e.aoFooter, d, h)),
          C.type.render[o.sType]);
      if (h && !o._render) {
        (o._render = $.util.get(h)), (p = b = v = m = g = void 0);
        for (var p, g = e, m = d, v = g.aoData, b = 0; b < v.length; b++)
          v[b].nTr &&
            ((p = G(g, b, m, "display")),
            (v[b].displayData[m] = p),
            ue(v[b].anCells[m], p));
      }
    }
  }
  function V(e, t, n) {
    e.forEach(function (e) {
      e[t] && e[t].unique && D(e[t].cell, n);
    });
  }
  function ie(e, t, n, a) {
    Array.isArray(t) || (t = le(t));
    for (var r, o = 0, i = e.aoColumns, l = 0, s = t.length; l < s; l++) {
      var u = i[t[l]],
        c = n ? u.sWidthOrig : u.sWidth;
      if (a || !1 !== u.bVisible) {
        if (null == c) return null;
        "number" == typeof c
          ? ((r = "px"), (o += c))
          : (u = c.match(/([\d\.]+)([^\d]*)/)) &&
            ((o += +u[1]), (r = 3 === u.length ? u[2] : "px"));
      }
    }
    return o + r;
  }
  function le(e) {
    e = B(e).closest("[data-dt-column]").attr("data-dt-column");
    return e
      ? e.split(",").map(function (e) {
          return +e;
        })
      : [];
  }
  function Y(e, t, n, a) {
    for (
      var r = e.aoData.length,
        o = B.extend(!0, {}, $.models.oRow, {
          src: n ? "dom" : "data",
          idx: r,
        }),
        i = ((o._aData = t), e.aoData.push(o), e.aoColumns),
        l = 0,
        s = i.length;
      l < s;
      l++
    )
      i[l].sType = null;
    e.aiDisplayMaster.push(r);
    t = e.rowIdFn(t);
    return (
      void 0 !== t && (e.aIds[t] = o),
      (!n && e.oFeatures.bDeferRender) || ve(e, r, n, a),
      r
    );
  }
  function se(n, e) {
    var a;
    return (e = e instanceof B ? e : B(e)).map(function (e, t) {
      return (a = ge(n, t)), Y(n, a.data, t, a.cells);
    });
  }
  function G(e, t, n, a) {
    "search" === a ? (a = "filter") : "order" === a && (a = "sort");
    var r = e.iDraw,
      o = e.aoColumns[n],
      i = e.aoData[t]._aData,
      l = o.sDefaultContent,
      s = o.fnGetData(i, a, { settings: e, row: t, col: n });
    if (
      void 0 ===
      (s =
        "display" !== a && s && "object" == typeof s && s.nodeName
          ? s.innerHTML
          : s)
    )
      return (
        e.iDrawError != r &&
          null === l &&
          (Z(
            e,
            0,
            "Requested unknown parameter " +
              ("function" == typeof o.mData
                ? "{function}"
                : "'" + o.mData + "'") +
              " for row " +
              t +
              ", column " +
              n,
            4
          ),
          (e.iDrawError = r)),
        l
      );
    if ((s !== i && null !== s) || null === l || void 0 === a) {
      if ("function" == typeof s) return s.call(i);
    } else s = l;
    return null === s && "display" === a
      ? ""
      : "filter" === a && (t = $.ext.type.search)[o.sType]
      ? t[o.sType](s)
      : s;
  }
  function ue(e, t) {
    t && "object" == typeof t && t.nodeName
      ? B(e).empty().append(t)
      : (e.innerHTML = t);
  }
  var ce = /\[.*?\]$/,
    p = /\(\)$/;
  function de(e) {
    return (e.match(/(\\.|[^.])+/g) || [""]).map(function (e) {
      return e.replace(/\\\./g, ".");
    });
  }
  var J = $.util.get,
    m = $.util.set;
  function fe(e) {
    return f(e.aoData, "_aData");
  }
  function he(e) {
    (e.aoData.length = 0),
      (e.aiDisplayMaster.length = 0),
      (e.aiDisplay.length = 0),
      (e.aIds = {});
  }
  function pe(e, t, n, a) {
    var r,
      o,
      i = e.aoData[t];
    if (
      ((i._aSortData = null),
      (i._aFilterData = null),
      (i.displayData = null),
      "dom" !== n && ((n && "auto" !== n) || "dom" !== i.src))
    ) {
      var l = i.anCells,
        s = me(e, t);
      if (l)
        if (void 0 !== a) ue(l[a], s[a]);
        else for (r = 0, o = l.length; r < o; r++) ue(l[r], s[r]);
    } else i._aData = ge(e, i, a, void 0 === a ? void 0 : i._aData).data;
    var u = e.aoColumns;
    if (void 0 !== a) (u[a].sType = null), (u[a].maxLenString = null);
    else {
      for (r = 0, o = u.length; r < o; r++)
        (u[r].sType = null), (u[r].maxLenString = null);
      be(e, i);
    }
  }
  function ge(e, t, n, a) {
    function r(e, t) {
      var n;
      "string" == typeof e &&
        -1 !== (n = e.indexOf("@")) &&
        ((n = e.substring(n + 1)), m(e)(a, t.getAttribute(n)));
    }
    function o(e) {
      (void 0 !== n && n !== d) ||
        ((l = f[d]),
        (s = e.innerHTML.trim()),
        l && l._bAttrSrc
          ? (m(l.mData._)(a, s),
            r(l.mData.sort, e),
            r(l.mData.type, e),
            r(l.mData.filter, e))
          : h
          ? (l._setter || (l._setter = m(l.mData)), l._setter(a, s))
          : (a[d] = s)),
        d++;
    }
    var i,
      l,
      s,
      u = [],
      c = t.firstChild,
      d = 0,
      f = e.aoColumns,
      h = e._rowReadObject;
    a = void 0 !== a ? a : h ? {} : [];
    if (c)
      for (; c; )
        ("TD" != (i = c.nodeName.toUpperCase()) && "TH" != i) ||
          (o(c), u.push(c)),
          (c = c.nextSibling);
    else for (var p = 0, g = (u = t.anCells).length; p < g; p++) o(u[p]);
    var t = t.firstChild ? t : t.nTr;
    return (
      t && (t = t.getAttribute("id")) && m(e.rowId)(a, t), { data: a, cells: u }
    );
  }
  function me(e, t) {
    var n = e.aoData[t],
      a = e.aoColumns;
    if (!n.displayData) {
      n.displayData = [];
      for (var r = 0, o = a.length; r < o; r++)
        n.displayData.push(G(e, t, r, "display"));
    }
    return n.displayData;
  }
  function ve(e, t, n, a) {
    var r,
      o,
      i,
      l,
      s,
      u,
      c = e.aoData[t],
      d = c._aData,
      f = [],
      h = e.oClasses.tbody.row;
    if (null === c.nTr) {
      for (
        r = n || _.createElement("tr"),
          c.nTr = r,
          c.anCells = f,
          D(r, h),
          r._DT_RowIndex = t,
          be(e, c),
          l = 0,
          s = e.aoColumns.length;
        l < s;
        l++
      ) {
        (i = e.aoColumns[l]),
          (o = (u = !n || !a[l]) ? _.createElement(i.sCellType) : a[l]) ||
            Z(e, 0, "Incorrect column count", 18),
          (o._DT_CellIndex = { row: t, column: l }),
          f.push(o);
        var p = me(e, t);
        (!u &&
          ((!i.mRender && i.mData === l) ||
            (B.isPlainObject(i.mData) && i.mData._ === l + ".display"))) ||
          ue(o, p[l]),
          i.bVisible && u
            ? r.appendChild(o)
            : i.bVisible || u || o.parentNode.removeChild(o),
          i.fnCreatedCell &&
            i.fnCreatedCell.call(e.oInstance, o, G(e, t, l), d, t, l);
      }
      ee(e, "aoRowCreatedCallback", "row-created", [r, d, t, f]);
    } else D(c.nTr, h);
  }
  function be(e, t) {
    var n = t.nTr,
      a = t._aData;
    n &&
      ((e = e.rowIdFn(a)) && (n.id = e),
      a.DT_RowClass &&
        ((e = a.DT_RowClass.split(" ")),
        (t.__rowc = t.__rowc ? x(t.__rowc.concat(e)) : e),
        B(n).removeClass(t.__rowc.join(" ")).addClass(a.DT_RowClass)),
      a.DT_RowAttr && B(n).attr(a.DT_RowAttr),
      a.DT_RowData) &&
      B(n).data(a.DT_RowData);
  }
  function ye(e, t) {
    var n,
      a = e.oClasses,
      r = e.aoColumns,
      o = "header" === t ? e.nTHead : e.nTFoot,
      i = "header" === t ? "sTitle" : t;
    if (o) {
      if (
        ("header" === t || f(e.aoColumns, i).join("")) &&
        1 === (n = (n = B("tr", o)).length ? n : B("<tr/>").appendTo(o)).length
      )
        for (var l = B("td, th", n).length, s = r.length; l < s; l++)
          B("<th/>")
            .html(r[l][i] || "")
            .appendTo(n);
      var u = Ce(e, o, !0);
      "header" === t ? (e.aoHeader = u) : (e.aoFooter = u),
        B(o).children("tr").attr("role", "row"),
        B(o)
          .children("tr")
          .children("th, td")
          .each(function () {
            Ke(e, t)(e, B(this), a);
          });
    }
  }
  function De(e, t, n) {
    var a,
      r,
      o,
      i,
      l,
      s = [],
      u = [],
      c = e.aoColumns,
      e = c.length;
    if (t) {
      for (
        n =
          n ||
          h(e).filter(function (e) {
            return c[e].bVisible;
          }),
          a = 0;
        a < t.length;
        a++
      )
        (s[a] = t[a].slice().filter(function (e, t) {
          return n.includes(t);
        })),
          u.push([]);
      for (a = 0; a < s.length; a++)
        for (r = 0; r < s[a].length; r++)
          if (((l = i = 1), void 0 === u[a][r])) {
            for (
              o = s[a][r].cell;
              void 0 !== s[a + i] && s[a][r].cell == s[a + i][r].cell;

            )
              (u[a + i][r] = null), i++;
            for (
              ;
              void 0 !== s[a][r + l] && s[a][r].cell == s[a][r + l].cell;

            ) {
              for (var d = 0; d < i; d++) u[a + d][r + l] = null;
              l++;
            }
            var f = B("span.dt-column-title", o);
            u[a][r] = {
              cell: o,
              colspan: l,
              rowspan: i,
              title: (f.length ? f : B(o)).html(),
            };
          }
      return u;
    }
  }
  function xe(e, t) {
    for (var n, a, r = De(e, t), o = 0; o < t.length; o++) {
      if ((n = t[o].row)) for (; (a = n.firstChild); ) n.removeChild(a);
      for (var i = 0; i < r[o].length; i++) {
        var l = r[o][i];
        l &&
          B(l.cell)
            .appendTo(n)
            .attr("rowspan", l.rowspan)
            .attr("colspan", l.colspan);
      }
    }
  }
  function S(e, t) {
    if (
      ((r = "ssp" == te((s = e))),
      void 0 !== (i = s.iInitDisplayStart) &&
        -1 !== i &&
        ((s._iDisplayStart = !r && i >= s.fnRecordsDisplay() ? 0 : i),
        (s.iInitDisplayStart = -1)),
      -1 !== ee(e, "aoPreDrawCallback", "preDraw", [e]).indexOf(!1))
    )
      w(e, !1);
    else {
      var l,
        n = [],
        a = 0,
        r = "ssp" == te(e),
        o = e.aiDisplay,
        i = e._iDisplayStart,
        s = e.fnDisplayEnd(),
        u = e.aoColumns,
        c = B(e.nTBody);
      if (((e.bDrawing = !0), r)) {
        if (!e.bDestroying && !t)
          return (
            0 === e.iDraw && c.empty().append(Se(e)),
            (l = e).iDraw++,
            w(l, !0),
            void Ie(
              l,
              (function (t) {
                function n(e, t) {
                  return "function" == typeof a[e][t] ? "function" : a[e][t];
                }
                var a = t.aoColumns,
                  e = t.oFeatures,
                  r = t.oPreviousSearch,
                  o = t.aoPreSearchCols;
                return {
                  draw: t.iDraw,
                  columns: a.map(function (t, e) {
                    return {
                      data: n(e, "mData"),
                      name: t.sName,
                      searchable: t.bSearchable,
                      orderable: t.bSortable,
                      search: {
                        value: o[e].search,
                        regex: o[e].regex,
                        fixed: Object.keys(t.searchFixed).map(function (e) {
                          return { name: e, term: t.searchFixed[e].toString() };
                        }),
                      },
                    };
                  }),
                  order: Ue(t).map(function (e) {
                    return {
                      column: e.col,
                      dir: e.dir,
                      name: n(e.col, "sName"),
                    };
                  }),
                  start: t._iDisplayStart,
                  length: e.bPaginate ? t._iDisplayLength : -1,
                  search: {
                    value: r.search,
                    regex: r.regex,
                    fixed: Object.keys(t.searchFixed).map(function (e) {
                      return { name: e, term: t.searchFixed[e].toString() };
                    }),
                  },
                };
              })(l),
              function (e) {
                var t = l,
                  n = Ae(t, (e = e)),
                  a = Fe(t, "draw", e),
                  r = Fe(t, "recordsTotal", e),
                  e = Fe(t, "recordsFiltered", e);
                if (void 0 !== a) {
                  if (+a < t.iDraw) return;
                  t.iDraw = +a;
                }
                (n = n || []),
                  he(t),
                  (t._iRecordsTotal = parseInt(r, 10)),
                  (t._iRecordsDisplay = parseInt(e, 10));
                for (var o = 0, i = n.length; o < i; o++) Y(t, n[o]);
                (t.aiDisplay = t.aiDisplayMaster.slice()),
                  S(t, !0),
                  ke(t),
                  w(t, !1);
              }
            )
          );
      } else e.iDraw++;
      if (0 !== o.length)
        for (var d = r ? e.aoData.length : s, f = r ? 0 : i; f < d; f++) {
          for (
            var h = o[f],
              p = e.aoData[h],
              g = (null === p.nTr && ve(e, h), p.nTr),
              m = 0;
            m < u.length;
            m++
          ) {
            var v = u[m],
              b = p.anCells[m];
            D(b, C.type.className[v.sType]),
              D(b, v.sClass),
              D(b, e.oClasses.tbody.cell);
          }
          ee(e, "aoRowCallback", null, [g, p._aData, a, f, h]), n.push(g), a++;
        }
      else n[0] = Se(e);
      ee(e, "aoHeaderCallback", "header", [
        B(e.nTHead).children("tr")[0],
        fe(e),
        i,
        s,
        o,
      ]),
        ee(e, "aoFooterCallback", "footer", [
          B(e.nTFoot).children("tr")[0],
          fe(e),
          i,
          s,
          o,
        ]),
        c[0].replaceChildren
          ? c[0].replaceChildren.apply(c[0], n)
          : (c.children().detach(), c.append(B(n))),
        B(e.nTableWrapper).toggleClass(
          "dt-empty-footer",
          0 === B("tr", e.nTFoot).length
        ),
        ee(e, "aoDrawCallback", "draw", [e], !0),
        (e.bSorted = !1),
        (e.bFiltered = !1),
        (e.bDrawing = !1);
    }
  }
  function s(e, t, n) {
    var a = e.oFeatures,
      r = a.bSort,
      a = a.bFilter;
    (void 0 !== n && !0 !== n) ||
      (r && $e(e),
      a ? Le(e, e.oPreviousSearch) : (e.aiDisplay = e.aiDisplayMaster.slice())),
      !0 !== t && (e._iDisplayStart = 0),
      (e._drawHold = t),
      S(e),
      (e._drawHold = !1);
  }
  function Se(e) {
    var t = e.oLanguage,
      n = t.sZeroRecords,
      a = te(e);
    return (
      (e.iDraw < 1 && "ssp" === a) || (e.iDraw <= 1 && "ajax" === a)
        ? (n = t.sLoadingRecords)
        : t.sEmptyTable && 0 === e.fnRecordsTotal() && (n = t.sEmptyTable),
      B("<tr/>").append(
        B("<td />", { colSpan: H(e), class: e.oClasses.empty.row }).html(n)
      )[0]
    );
  }
  function Te(e, t, n) {
    for (
      var i = {},
        a =
          (B.each(t, function (e, t) {
            if (null !== t) {
              var e = e.replace(/([A-Z])/g, " $1").split(" "),
                n =
                  (i[e[0]] || (i[e[0]] = {}),
                  1 === e.length ? "full" : e[1].toLowerCase()),
                a = i[e[0]],
                r = function (t, n) {
                  B.isPlainObject(n)
                    ? Object.keys(n).map(function (e) {
                        t.push({ feature: e, opts: n[e] });
                      })
                    : t.push(n);
                };
              if (
                ((a[n] && a[n].contents) || (a[n] = { contents: [] }),
                Array.isArray(t))
              )
                for (var o = 0; o < t.length; o++) r(a[n].contents, t[o]);
              else r(a[n].contents, t);
              Array.isArray(a[n].contents) || (a[n].contents = [a[n].contents]);
            }
          }),
          Object.keys(i)
            .map(function (e) {
              return 0 !== e.indexOf(n) ? null : { name: e, val: i[e] };
            })
            .filter(function (e) {
              return null !== e;
            })),
        r =
          (a.sort(function (e, t) {
            e = +e.name.replace(/[^0-9]/g, "");
            return +t.name.replace(/[^0-9]/g, "") - e;
          }),
          "bottom" === n && a.reverse(),
          []),
        o = 0,
        l = a.length;
      o < l;
      o++
    )
      a[o].val.full &&
        (r.push({ full: a[o].val.full }),
        we(e, r[r.length - 1]),
        delete a[o].val.full),
        Object.keys(a[o].val).length &&
          (r.push(a[o].val), we(e, r[r.length - 1]));
    return r;
  }
  function we(o, i) {
    function l(e, t) {
      return (
        C.features[e] || Z(o, 0, "Unknown feature: " + e),
        C.features[e].apply(this, [o, t])
      );
    }
    B.each(i, function (e) {
      for (var t, n = i[e].contents, a = 0, r = n.length; a < r; a++)
        n[a] &&
          ("string" == typeof n[a]
            ? (n[a] = l(n[a], null))
            : B.isPlainObject(n[a])
            ? (n[a] = l(n[a].feature, n[a].opts))
            : "function" == typeof n[a].node
            ? (n[a] = n[a].node(o))
            : "function" == typeof n[a] &&
              ((t = n[a](o)),
              (n[a] = "function" == typeof t.node ? t.node() : t)));
    });
  }
  function _e(t) {
    var a,
      e = t.oClasses,
      n = B(t.nTable),
      r = B("<div/>")
        .attr({ id: t.sTableId + "_wrapper", class: e.container })
        .insertBefore(n);
    if (((t.nTableWrapper = r[0]), t.sDom))
      for (
        var o,
          i,
          l,
          s,
          u,
          c,
          d = t,
          e = t.sDom,
          f = r,
          h = e.match(/(".*?")|('.*?')|./g),
          p = 0;
        p < h.length;
        p++
      )
        (o = null),
          "<" == (i = h[p])
            ? ((l = B("<div/>")),
              ("'" != (s = h[p + 1])[0] && '"' != s[0]) ||
                ((s = s.replace(/['"]/g, "")),
                (u = ""),
                -1 != s.indexOf(".")
                  ? ((c = s.split(".")), (u = c[0]), (c = c[1]))
                  : "#" == s[0]
                  ? (u = s)
                  : (c = s),
                l.attr("id", u.substring(1)).addClass(c),
                p++),
              f.append(l),
              (f = l))
            : ">" == i
            ? (f = f.parent())
            : "t" == i
            ? (o = He(d))
            : $.ext.feature.forEach(function (e) {
                i == e.cFeature && (o = e.fnInit(d));
              }),
          o && f.append(o);
    else {
      var n = Te(t, t.layout, "top"),
        e = Te(t, t.layout, "bottom"),
        g = Ke(t, "layout");
      n.forEach(function (e) {
        g(t, r, e);
      }),
        g(t, r, { full: { table: !0, contents: [He(t)] } }),
        e.forEach(function (e) {
          g(t, r, e);
        });
    }
    (n = t), (e = n.nTable);
    n.oFeatures.bProcessing &&
      ((a = B("<div/>", {
        id: n.sTableId + "_processing",
        class: n.oClasses.processing.container,
        role: "status",
      })
        .html(n.oLanguage.sProcessing)
        .append("<div><div></div><div></div><div></div><div></div></div>")
        .insertBefore(e)),
      B(e).on("processing.dt.DT", function (e, t, n) {
        a.css("display", n ? "block" : "none");
      }));
  }
  function Ce(e, t, n) {
    for (
      var a,
        r,
        o,
        i,
        l,
        s,
        u = e.aoColumns,
        c = B(t).children("tr"),
        d = t && "thead" === t.nodeName.toLowerCase(),
        f = [],
        h = 0,
        p = c.length;
      h < p;
      h++
    )
      f.push([]);
    for (h = 0, p = c.length; h < p; h++)
      for (r = (a = c[h]).firstChild; r; ) {
        if (
          "TD" == r.nodeName.toUpperCase() ||
          "TH" == r.nodeName.toUpperCase()
        ) {
          var g,
            m,
            v,
            b,
            y,
            D = [];
          for (
            b = (b = +r.getAttribute("colspan")) && 0 != b && 1 != b ? b : 1,
              y = (y = +r.getAttribute("rowspan")) && 0 != y && 1 != y ? y : 1,
              l = (function (e, t, n) {
                for (var a = e[t]; a[n]; ) n++;
                return n;
              })(f, h, 0),
              s = 1 == b,
              n &&
                (s &&
                  (oe(e, l, B(r).data()),
                  (g = u[l]),
                  (m = r.getAttribute("width") || null),
                  (v = r.style.width.match(/width:\s*(\d+[pxem%]+)/)) &&
                    (m = v[1]),
                  (g.sWidthOrig = g.sWidth || m),
                  d
                    ? (null === g.sTitle ||
                        g.autoTitle ||
                        (r.innerHTML = g.sTitle),
                      !g.sTitle &&
                        s &&
                        ((g.sTitle = r.innerHTML.replace(/<.*?>/g, "")),
                        (g.autoTitle = !0)))
                    : g.footer && (r.innerHTML = g.footer),
                  g.ariaTitle ||
                    (g.ariaTitle = B(r).attr("aria-label") || g.sTitle),
                  g.className) &&
                  B(r).addClass(g.className),
                0 === B("span.dt-column-title", r).length &&
                  B("<span>")
                    .addClass("dt-column-title")
                    .append(r.childNodes)
                    .appendTo(r),
                d) &&
                0 === B("span.dt-column-order", r).length &&
                B("<span>").addClass("dt-column-order").appendTo(r),
              i = 0;
            i < b;
            i++
          ) {
            for (o = 0; o < y; o++)
              (f[h + o][l + i] = { cell: r, unique: s }), (f[h + o].row = a);
            D.push(l + i);
          }
          r.setAttribute("data-dt-column", x(D).join(","));
        }
        r = r.nextSibling;
      }
    return f;
  }
  function Ie(n, e, a) {
    function t(e) {
      var t = n.jqXHR ? n.jqXHR.status : null;
      (null === e || ("number" == typeof t && 204 == t)) && Ae(n, (e = {}), []),
        (t = e.error || e.sError) && Z(n, 0, t),
        (n.json = e),
        ee(n, null, "xhr", [n, e, n.jqXHR], !0),
        a(e);
    }
    var r,
      o = n.ajax,
      i = n.oInstance,
      l =
        (B.isPlainObject(o) &&
          o.data &&
          ((l = "function" == typeof (r = o.data) ? r(e, n) : r),
          (e = "function" == typeof r && l ? l : B.extend(!0, e, l)),
          delete o.data),
        {
          url: "string" == typeof o ? o : "",
          data: e,
          success: t,
          dataType: "json",
          cache: !1,
          type: n.sServerMethod,
          error: function (e, t) {
            -1 === ee(n, null, "xhr", [n, null, n.jqXHR], !0).indexOf(!0) &&
              ("parsererror" == t
                ? Z(n, 0, "Invalid JSON response", 1)
                : 4 === e.readyState && Z(n, 0, "Ajax error", 7)),
              w(n, !1);
          },
        });
    B.isPlainObject(o) && B.extend(l, o),
      (n.oAjaxData = e),
      ee(n, null, "preXhr", [n, e, l], !0),
      "function" == typeof o
        ? (n.jqXHR = o.call(i, e, t, n))
        : "" === o.url
        ? ((i = {}), $.util.set(o.dataSrc)(i, []), t(i))
        : ((n.jqXHR = B.ajax(l)), r && (o.data = r));
  }
  function Ae(e, t, n) {
    var a = "data";
    if (
      (B.isPlainObject(e.ajax) &&
        void 0 !== e.ajax.dataSrc &&
        ("string" == typeof (e = e.ajax.dataSrc) || "function" == typeof e
          ? (a = e)
          : void 0 !== e.data && (a = e.data)),
      !n)
    )
      return "data" === a ? t.aaData || t[a] : "" !== a ? J(a)(t) : t;
    m(a)(t, n);
  }
  function Fe(e, t, n) {
    var e = B.isPlainObject(e.ajax) ? e.ajax.dataSrc : null;
    return e && e[t]
      ? J(e[t])(n)
      : ((e = ""),
        "draw" === t
          ? (e = "sEcho")
          : "recordsTotal" === t
          ? (e = "iTotalRecords")
          : "recordsFiltered" === t && (e = "iTotalDisplayRecords"),
        void 0 !== n[e] ? n[e] : n[t]);
  }
  function Le(n, e) {
    var t = n.aoPreSearchCols;
    if ((X(n), "ssp" != te(n))) {
      for (
        var a, r, o, i, l, s = n, u = s.aoColumns, c = s.aoData, d = 0;
        d < c.length;
        d++
      )
        if (c[d] && !(l = c[d])._aFilterData) {
          for (o = [], a = 0, r = u.length; a < r; a++)
            u[a].bSearchable
              ? "string" !=
                  typeof (i = null === (i = G(s, d, a, "filter")) ? "" : i) &&
                i.toString &&
                (i = i.toString())
              : (i = ""),
              i.indexOf &&
                -1 !== i.indexOf("&") &&
                ((Pe.innerHTML = i), (i = Re ? Pe.textContent : Pe.innerText)),
              i.replace && (i = i.replace(/[\r\n\u2028]/g, "")),
              o.push(i);
          (l._aFilterData = o), (l._sFilterRow = o.join("  ")), 0;
        }
      (n.aiDisplay = n.aiDisplayMaster.slice()),
        Ne(n.aiDisplay, n, e.search, e),
        B.each(n.searchFixed, function (e, t) {
          Ne(n.aiDisplay, n, t, {});
        });
      for (var f = 0; f < t.length; f++) {
        var h = t[f];
        Ne(n.aiDisplay, n, h.search, h, f),
          B.each(n.aoColumns[f].searchFixed, function (e, t) {
            Ne(n.aiDisplay, n, t, {}, f);
          });
      }
      for (
        var p, g, m = n, v = $.ext.search, b = m.aiDisplay, y = 0, D = v.length;
        y < D;
        y++
      ) {
        for (var x = [], S = 0, T = b.length; S < T; S++)
          (g = b[S]),
            (p = m.aoData[g]),
            v[y](m, p._aFilterData, g, p._aData, S) && x.push(g);
        (b.length = 0), b.push.apply(b, x);
      }
    }
    (n.bFiltered = !0), ee(n, null, "search", [n]);
  }
  function Ne(e, t, n, a, r) {
    if ("" !== n)
      for (
        var o = 0,
          i = "function" == typeof n ? n : null,
          l =
            n instanceof RegExp
              ? n
              : i
              ? null
              : (function (e, t) {
                  var a = [],
                    t = B.extend(
                      {},
                      {
                        boundary: !1,
                        caseInsensitive: !0,
                        exact: !1,
                        regex: !1,
                        smart: !0,
                      },
                      t
                    );
                  "string" != typeof e && (e = e.toString());
                  if (((e = R(e)), t.exact))
                    return new RegExp(
                      "^" + je(e) + "$",
                      t.caseInsensitive ? "i" : ""
                    );
                  {
                    var n, r, o;
                    (e = t.regex ? e : je(e)),
                      t.smart &&
                        ((n = (
                          e.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [
                            "",
                          ]
                        ).map(function (e) {
                          var t,
                            n = !1;
                          return (
                            "!" === e.charAt(0) &&
                              ((n = !0), (e = e.substring(1))),
                            '"' === e.charAt(0)
                              ? (e = (t = e.match(/^"(.*)"$/)) ? t[1] : e)
                              : "“" === e.charAt(0) &&
                                (e = (t = e.match(/^\u201C(.*)\u201D$/))
                                  ? t[1]
                                  : e),
                            n &&
                              (1 < e.length && a.push("(?!" + e + ")"),
                              (e = "")),
                            e.replace('"', "")
                          );
                        })),
                        (r = a.length ? a.join("") : ""),
                        (o = t.boundary ? "\\b" : ""),
                        (e =
                          "^(?=.*?" +
                          o +
                          n.join(")(?=.*?" + o) +
                          ")(" +
                          r +
                          ".)*$"));
                  }
                  return new RegExp(e, t.caseInsensitive ? "i" : "");
                })(n, a);
        o < e.length;

      ) {
        var s = t.aoData[e[o]],
          u = void 0 === r ? s._sFilterRow : s._aFilterData[r];
        ((i && !i(u, s._aData, e[o], r)) || (l && !l.test(u))) &&
          (e.splice(o, 1), o--),
          o++;
      }
  }
  var je = $.util.escapeRegex,
    Pe = B("<div>")[0],
    Re = void 0 !== Pe.textContent;
  function Oe(n) {
    var a,
      e,
      t,
      r,
      o,
      i,
      l = n.iInitDisplayStart;
    n.bInitialised
      ? (ye(n, "header"),
        ye(n, "footer"),
        xe(n, n.aoHeader),
        xe(n, n.aoFooter),
        _e(n),
        (t = (e = n).nTHead),
        (i = t.querySelectorAll("tr")),
        (r = e.bSortCellsTop),
        (o =
          ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])'),
        !0 === r ? (t = i[0]) : !1 === r && (t = i[i.length - 1]),
        Ve(
          e,
          t,
          t === e.nTHead
            ? "tr" + o + " th" + o + ", tr" + o + " td" + o
            : "th" + o + ", td" + o
        ),
        qe(e, (r = []), e.aaSorting),
        (e.aaSorting = r),
        Xe(n),
        w(n, !0),
        ee(n, null, "preInit", [n], !0),
        s(n),
        "ssp" != (i = te(n)) &&
          ("ajax" == i
            ? Ie(n, {}, function (e) {
                var t = Ae(n, e);
                for (a = 0; a < t.length; a++) Y(n, t[a]);
                (n.iInitDisplayStart = l), s(n), w(n, !1), ke(n);
              })
            : (ke(n), w(n, !1))))
      : setTimeout(function () {
          Oe(n);
        }, 200);
  }
  function ke(e) {
    var t;
    e._bInitComplete ||
      ((t = [e, e.json]),
      (e._bInitComplete = !0),
      E(e),
      ee(e, null, "plugin-init", t, !0),
      ee(e, "aoInitComplete", "init", t, !0));
  }
  function Ee(e, t) {
    t = parseInt(t, 10);
    (e._iDisplayLength = t), Qe(e), ee(e, null, "length", [e, t]);
  }
  function Me(e, t, n) {
    var a = e._iDisplayStart,
      r = e._iDisplayLength,
      o = e.fnRecordsDisplay();
    if (0 === o || -1 === r) a = 0;
    else if ("number" == typeof t) o < (a = t * r) && (a = 0);
    else if ("first" == t) a = 0;
    else if ("previous" == t) (a = 0 <= r ? a - r : 0) < 0 && (a = 0);
    else if ("next" == t) a + r < o && (a += r);
    else if ("last" == t) a = Math.floor((o - 1) / r) * r;
    else {
      if ("ellipsis" === t) return;
      Z(e, 0, "Unknown paging action: " + t, 5);
    }
    o = e._iDisplayStart !== a;
    (e._iDisplayStart = a),
      ee(e, null, o ? "page" : "page-nc", [e]),
      o && n && S(e);
  }
  function w(e, t) {
    ee(e, null, "processing", [e, t]);
  }
  function He(e) {
    var t,
      n,
      a,
      r,
      o,
      i,
      l,
      s,
      u,
      c,
      d,
      f,
      h,
      p = B(e.nTable),
      g = e.oScroll;
    return "" === g.sX && "" === g.sY
      ? e.nTable
      : ((t = g.sX),
        (n = g.sY),
        (a = e.oClasses.scrolling),
        (o = (r = e.captionNode) ? r._captionSide : null),
        (u = B(p[0].cloneNode(!1))),
        (i = B(p[0].cloneNode(!1))),
        (c = function (e) {
          return e ? A(e) : null;
        }),
        (l = p.children("tfoot")).length || (l = null),
        (u = B((s = "<div/>"), { class: a.container })
          .append(
            B(s, { class: a.header.self })
              .css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: t ? c(t) : "100%",
              })
              .append(
                B(s, { class: a.header.inner })
                  .css({
                    "box-sizing": "content-box",
                    width: g.sXInner || "100%",
                  })
                  .append(
                    u
                      .removeAttr("id")
                      .css("margin-left", 0)
                      .append("top" === o ? r : null)
                      .append(p.children("thead"))
                  )
              )
          )
          .append(
            B(s, { class: a.body })
              .css({ position: "relative", overflow: "auto", width: c(t) })
              .append(p)
          )),
        l &&
          u.append(
            B(s, { class: a.footer.self })
              .css({ overflow: "hidden", border: 0, width: t ? c(t) : "100%" })
              .append(
                B(s, { class: a.footer.inner }).append(
                  i
                    .removeAttr("id")
                    .css("margin-left", 0)
                    .append("bottom" === o ? r : null)
                    .append(p.children("tfoot"))
                )
              )
          ),
        (c = u.children()),
        (d = c[0]),
        (f = c[1]),
        (h = l ? c[2] : null),
        B(f).on("scroll.DT", function () {
          var e = this.scrollLeft;
          (d.scrollLeft = e), l && (h.scrollLeft = e);
        }),
        B("th, td", d).on("focus", function () {
          var e = d.scrollLeft;
          (f.scrollLeft = e), l && (f.scrollLeft = e);
        }),
        B(f).css("max-height", n),
        g.bCollapse || B(f).css("height", n),
        (e.nScrollHead = d),
        (e.nScrollBody = f),
        (e.nScrollFoot = h),
        e.aoDrawCallback.push(We),
        u[0]);
  }
  function We(e) {
    var t,
      n,
      a = e.oScroll.iBarWidth,
      r = B(e.nScrollHead).children("div"),
      o = r.children("table"),
      i = e.nScrollBody,
      l = B(i),
      s = B(e.nScrollFoot).children("div"),
      u = s.children("table"),
      c = B(e.nTHead),
      d = B(e.nTable),
      f = e.nTFoot && B("th, td", e.nTFoot).length ? B(e.nTFoot) : null,
      h = e.oBrowser,
      p = i.scrollHeight > i.clientHeight;
    e.scrollBarVis !== p && void 0 !== e.scrollBarVis
      ? ((e.scrollBarVis = p), E(e))
      : ((e.scrollBarVis = p),
        d.children("thead, tfoot").remove(),
        (p = c.clone().prependTo(d)).find("th, td").removeAttr("tabindex"),
        p.find("[id]").removeAttr("id"),
        f && (n = f.clone().prependTo(d)).find("[id]").removeAttr("id"),
        e.aiDisplay.length &&
          ((t = d
            .find("tbody tr")
            .eq(0)
            .find("th, td")
            .map(function () {
              return B(this).outerWidth();
            })),
          B("col", e.colgroup).each(function (e) {
            this.style.width.replace("px", "") !== t[e] &&
              (this.style.width = t[e] + "px");
          })),
        o.find("colgroup").remove(),
        o.append(e.colgroup.clone()),
        f && (u.find("colgroup").remove(), u.append(e.colgroup.clone())),
        B("th, td", p).each(function () {
          B(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
        }),
        f &&
          B("th, td", n).each(function () {
            B(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
          }),
        (c =
          Math.floor(d.height()) > i.clientHeight ||
          "scroll" == l.css("overflow-y")),
        (p = "padding" + (h.bScrollbarLeft ? "Left" : "Right")),
        (n = d.outerWidth()),
        o.css("width", A(n)),
        r.css("width", A(n)).css(p, c ? a + "px" : "0px"),
        f &&
          (u.css("width", A(n)),
          s.css("width", A(n)).css(p, c ? a + "px" : "0px")),
        d.children("colgroup").prependTo(d),
        l.trigger("scroll"),
        (!e.bSorted && !e.bFiltered) || e._drawHold || (i.scrollTop = 0));
  }
  function A(e) {
    return null === e
      ? "0px"
      : "number" == typeof e
      ? e < 0
        ? "0px"
        : e + "px"
      : e.match(/\d$/)
      ? e + "px"
      : e;
  }
  function Xe(e) {
    var t = e.aoColumns;
    for (e.colgroup.empty(), a = 0; a < t.length; a++)
      t[a].bVisible && e.colgroup.append(t[a].colEl);
  }
  function Ve(o, e, t, i, l) {
    Ze(e, t, function (e) {
      var t = !1,
        n = void 0 === i ? le(e.target) : [i];
      if (n.length) {
        for (var a = 0, r = n.length; a < r; a++)
          if (
            (!1 !==
              (function (e, t, n, a) {
                function r(e, t) {
                  var n = e._idx;
                  return (n = void 0 === n ? s.indexOf(e[1]) : n) + 1 < s.length
                    ? n + 1
                    : t
                    ? null
                    : 0;
                }
                var o,
                  i = e.aoColumns[t],
                  l = e.aaSorting,
                  s = i.asSorting;
                if (!i.bSortable) return !1;
                "number" == typeof l[0] && (l = e.aaSorting = [l]);
                (a || n) && e.oFeatures.bSortMulti
                  ? -1 !== (i = f(l, "0").indexOf(t))
                    ? null ===
                      (o = null === (o = r(l[i], !0)) && 1 === l.length ? 0 : o)
                      ? l.splice(i, 1)
                      : ((l[i][1] = s[o]), (l[i]._idx = o))
                    : (a ? l.push([t, s[0], 0]) : l.push([t, l[0][1], 0]),
                      (l[l.length - 1]._idx = 0))
                  : l.length && l[0][0] == t
                  ? ((o = r(l[0])),
                    (l.length = 1),
                    (l[0][1] = s[o]),
                    (l[0]._idx = o))
                  : ((l.length = 0), l.push([t, s[0]]), (l[0]._idx = 0));
              })(o, n[a], a, e.shiftKey) && (t = !0),
            1 === o.aaSorting.length && "" === o.aaSorting[0][1])
          )
            break;
        t &&
          (w(o, !0),
          setTimeout(function () {
            $e(o), Be(o, o.aiDisplay), w(o, !1), s(o, !1, !1), l && l();
          }, 0));
      }
    });
  }
  function Be(e, t) {
    for (var n = e.aiDisplayMaster, a = {}, r = {}, o = 0; o < n.length; o++)
      a[n[o]] = o;
    for (o = 0; o < t.length; o++) r[t[o]] = a[t[o]];
    t.sort(function (e, t) {
      return r[e] - r[t];
    });
  }
  function qe(n, a, e) {
    function t(e) {
      var t;
      B.isPlainObject(e)
        ? void 0 !== e.idx
          ? a.push([e.idx, e.dir])
          : e.name &&
            -1 !== (t = f(n.aoColumns, "sName").indexOf(e.name)) &&
            a.push([t, e.dir])
        : a.push(e);
    }
    if (B.isPlainObject(e)) t(e);
    else if (e.length && "number" == typeof e[0]) t(e);
    else if (e.length) for (var r = 0; r < e.length; r++) t(e[r]);
  }
  function Ue(e) {
    var t,
      n,
      a,
      r,
      o,
      i,
      l,
      s = [],
      u = $.ext.type.order,
      c = e.aoColumns,
      d = e.aaSortingFixed,
      f = B.isPlainObject(d),
      h = [];
    if (e.oFeatures.bSort)
      for (
        Array.isArray(d) && qe(e, h, d),
          f && d.pre && qe(e, h, d.pre),
          qe(e, h, e.aaSorting),
          f && d.post && qe(e, h, d.post),
          t = 0;
        t < h.length;
        t++
      )
        if (c[(l = h[t][0])])
          for (n = 0, a = (r = c[l].aDataSort).length; n < a; n++)
            (i = c[(o = r[n])].sType || "string"),
              void 0 === h[t]._idx &&
                (h[t]._idx = c[o].asSorting.indexOf(h[t][1])),
              h[t][1] &&
                s.push({
                  src: l,
                  col: o,
                  dir: h[t][1],
                  index: h[t]._idx,
                  type: i,
                  formatter: u[i + "-pre"],
                  sorter: u[i + "-" + h[t][1]],
                });
    return s;
  }
  function $e(e, t, n) {
    var a,
      r,
      o,
      i,
      l,
      c,
      d = [],
      s = $.ext.type.order,
      f = e.aoData,
      u = e.aiDisplayMaster;
    for (
      X(e),
        void 0 !== t
          ? ((l = e.aoColumns[t]),
            (c = [
              {
                src: t,
                col: t,
                dir: n,
                index: 0,
                type: l.sType,
                formatter: s[l.sType + "-pre"],
                sorter: s[l.sType + "-" + n],
              },
            ]),
            (u = u.slice()))
          : (c = Ue(e)),
        a = 0,
        r = c.length;
      a < r;
      a++
    ) {
      (i = c[a]), (S = x = D = g = p = h = y = b = v = m = void 0);
      var h,
        p,
        g,
        m = e,
        v = i.col,
        b = m.aoColumns[v],
        y = $.ext.order[b.sSortDataType];
      y && (h = y.call(m.oInstance, m, v, T(m, v)));
      for (
        var D = $.ext.type.order[b.sType + "-pre"], x = m.aoData, S = 0;
        S < x.length;
        S++
      )
        x[S] &&
          ((p = x[S])._aSortData || (p._aSortData = []),
          (p._aSortData[v] && !y) ||
            ((g = y ? h[S] : G(m, S, v, "sort")),
            (p._aSortData[v] = D ? D(g, m) : g)));
    }
    if ("ssp" != te(e) && 0 !== c.length) {
      for (a = 0, o = u.length; a < o; a++) d[a] = a;
      c.length && "desc" === c[0].dir && d.reverse(),
        u.sort(function (e, t) {
          for (
            var n,
              a,
              r,
              o,
              i = c.length,
              l = f[e]._aSortData,
              s = f[t]._aSortData,
              u = 0;
            u < i;
            u++
          )
            if (((n = l[(o = c[u]).col]), (a = s[o.col]), o.sorter)) {
              if (0 !== (r = o.sorter(n, a))) return r;
            } else if (0 !== (r = n < a ? -1 : a < n ? 1 : 0))
              return "asc" === o.dir ? r : -r;
          return (n = d[e]) < (a = d[t]) ? -1 : a < n ? 1 : 0;
        });
    } else
      0 === c.length &&
        u.sort(function (e, t) {
          return e < t ? -1 : t < e ? 1 : 0;
        });
    return void 0 === t && ((e.bSorted = !0), ee(e, null, "order", [e, c])), u;
  }
  function ze(e) {
    var t,
      n,
      a,
      r = e.aLastSort,
      o = e.oClasses.order.position,
      i = Ue(e),
      l = e.oFeatures;
    if (l.bSort && l.bSortClasses) {
      for (t = 0, n = r.length; t < n; t++)
        (a = r[t].src),
          B(f(e.aoData, "anCells", a)).removeClass(o + (t < 2 ? t + 1 : 3));
      for (t = 0, n = i.length; t < n; t++)
        (a = i[t].src),
          B(f(e.aoData, "anCells", a)).addClass(o + (t < 2 ? t + 1 : 3));
    }
    e.aLastSort = i;
  }
  function Ye(n) {
    var e;
    n._bLoadingState ||
      ((e = {
        time: +new Date(),
        start: n._iDisplayStart,
        length: n._iDisplayLength,
        order: B.extend(!0, [], n.aaSorting),
        search: B.extend({}, n.oPreviousSearch),
        columns: n.aoColumns.map(function (e, t) {
          return {
            visible: e.bVisible,
            search: B.extend({}, n.aoPreSearchCols[t]),
          };
        }),
      }),
      (n.oSavedState = e),
      ee(n, "aoStateSaveParams", "stateSaveParams", [n, e]),
      n.oFeatures.bStateSave &&
        !n.bDestroying &&
        n.fnStateSaveCallback.call(n.oInstance, n, e));
  }
  function Ge(n, e, t) {
    var a,
      r,
      o = n.aoColumns,
      i = ((n._bLoadingState = !0), n._bInitComplete ? new $.Api(n) : null);
    if (e && e.time) {
      var l = n.iStateDuration;
      if (0 < l && e.time < +new Date() - 1e3 * l) n._bLoadingState = !1;
      else if (
        -1 !== ee(n, "aoStateLoadParams", "stateLoadParams", [n, e]).indexOf(!1)
      )
        n._bLoadingState = !1;
      else if (e.columns && o.length !== e.columns.length)
        n._bLoadingState = !1;
      else {
        if (
          ((n.oLoadedState = B.extend(!0, {}, e)),
          ee(n, null, "stateLoadInit", [n, e], !0),
          void 0 !== e.length &&
            (i ? i.page.len(e.length) : (n._iDisplayLength = e.length)),
          void 0 !== e.start &&
            (null === i
              ? ((n._iDisplayStart = e.start), (n.iInitDisplayStart = e.start))
              : Me(n, e.start / n._iDisplayLength)),
          void 0 !== e.order &&
            ((n.aaSorting = []),
            B.each(e.order, function (e, t) {
              n.aaSorting.push(t[0] >= o.length ? [0, t[1]] : t);
            })),
          void 0 !== e.search && B.extend(n.oPreviousSearch, e.search),
          e.columns)
        ) {
          for (a = 0, r = e.columns.length; a < r; a++) {
            var s = e.columns[a];
            void 0 !== s.visible &&
              (i
                ? i.column(a).visible(s.visible, !1)
                : (o[a].bVisible = s.visible)),
              void 0 !== s.search && B.extend(n.aoPreSearchCols[a], s.search);
          }
          i && i.columns.adjust();
        }
        (n._bLoadingState = !1), ee(n, "aoStateLoaded", "stateLoaded", [n, e]);
      }
    } else n._bLoadingState = !1;
    t();
  }
  function Z(e, t, n, a) {
    if (
      ((n =
        "DataTables warning: " +
        (e ? "table id=" + e.sTableId + " - " : "") +
        n),
      a &&
        (n +=
          ". For more information about this error, please see https://datatables.net/tn/" +
          a),
      t)
    )
      q.console && console.log && console.log(n);
    else {
      (t = $.ext), (t = t.sErrMode || t.errMode);
      if ((e && ee(e, null, "dt-error", [e, a, n], !0), "alert" == t)) alert(n);
      else {
        if ("throw" == t) throw new Error(n);
        "function" == typeof t && t(e, a, n);
      }
    }
  }
  function Q(n, a, e, t) {
    Array.isArray(e)
      ? B.each(e, function (e, t) {
          Array.isArray(t) ? Q(n, a, t[0], t[1]) : Q(n, a, t);
        })
      : (void 0 === t && (t = e), void 0 !== a[e] && (n[t] = a[e]));
  }
  function Je(e, t, n) {
    var a, r;
    for (r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        ((a = t[r]),
        B.isPlainObject(a)
          ? (B.isPlainObject(e[r]) || (e[r] = {}), B.extend(!0, e[r], a))
          : n && "data" !== r && "aaData" !== r && Array.isArray(a)
          ? (e[r] = a.slice())
          : (e[r] = a));
    return e;
  }
  function Ze(e, t, n) {
    B(e)
      .on("click.DT", t, function (e) {
        n(e);
      })
      .on("keypress.DT", t, function (e) {
        13 === e.which && (e.preventDefault(), n(e));
      })
      .on("selectstart.DT", t, function () {
        return !1;
      });
  }
  function K(e, t, n) {
    n && e[t].push(n);
  }
  function ee(t, e, n, a, r) {
    var o = [];
    return (
      e &&
        (o = t[e]
          .slice()
          .reverse()
          .map(function (e) {
            return e.apply(t.oInstance, a);
          })),
      null !== n &&
        ((e = B.Event(n + ".dt")),
        (n = B(t.nTable)),
        (e.dt = t.api),
        n[r ? "trigger" : "triggerHandler"](e, a),
        r && 0 === n.parents("body").length && B("body").trigger(e, a),
        o.push(e.result)),
      o
    );
  }
  function Qe(e) {
    var t = e._iDisplayStart,
      n = e.fnDisplayEnd(),
      a = e._iDisplayLength;
    n <= t && (t = n - a),
      (t -= t % a),
      (e._iDisplayStart = t = -1 === a || t < 0 ? 0 : t);
  }
  function Ke(e, t) {
    var e = e.renderer,
      n = $.ext.renderer[t];
    return B.isPlainObject(e) && e[t]
      ? n[e[t]] || n._
      : ("string" == typeof e && n[e]) || n._;
  }
  function te(e) {
    return e.oFeatures.bServerSide ? "ssp" : e.ajax ? "ajax" : "dom";
  }
  function et(e, t, n) {
    var a = e.fnFormatNumber,
      r = e._iDisplayStart + 1,
      o = e._iDisplayLength,
      i = e.fnRecordsDisplay(),
      l = e.fnRecordsTotal(),
      s = -1 === o;
    return t
      .replace(/_START_/g, a.call(e, r))
      .replace(/_END_/g, a.call(e, e.fnDisplayEnd()))
      .replace(/_MAX_/g, a.call(e, l))
      .replace(/_TOTAL_/g, a.call(e, i))
      .replace(/_PAGE_/g, a.call(e, s ? 1 : Math.ceil(r / o)))
      .replace(/_PAGES_/g, a.call(e, s ? 1 : Math.ceil(i / o)))
      .replace(/_ENTRIES_/g, e.api.i18n("entries", "", n))
      .replace(/_ENTRIES-MAX_/g, e.api.i18n("entries", "", l))
      .replace(/_ENTRIES-TOTAL_/g, e.api.i18n("entries", "", i));
  }
  var tt = [],
    n = Array.prototype;
  (U = function (e, t) {
    if (!(this instanceof U)) return new U(e, t);
    function n(e) {
      (e = e), (t = $.settings), (a = f(t, "nTable"));
      var n,
        t,
        a,
        r = e
          ? e.nTable && e.oFeatures
            ? [e]
            : e.nodeName && "table" === e.nodeName.toLowerCase()
            ? -1 !== (r = a.indexOf(e))
              ? [t[r]]
              : null
            : e && "function" == typeof e.settings
            ? e.settings().toArray()
            : ("string" == typeof e
                ? (n = B(e).get())
                : e instanceof B && (n = e.get()),
              n
                ? t.filter(function (e, t) {
                    return n.includes(a[t]);
                  })
                : void 0)
          : [];
      r && o.push.apply(o, r);
    }
    var o = [];
    if (Array.isArray(e)) for (var a = 0, r = e.length; a < r; a++) n(e[a]);
    else n(e);
    (this.context = 1 < o.length ? x(o) : o),
      t && this.push.apply(this, t),
      (this.selector = { rows: null, cols: null, opts: null }),
      U.extend(this, this, tt);
  }),
    ($.Api = U),
    B.extend(U.prototype, {
      any: function () {
        return 0 !== this.count();
      },
      context: [],
      count: function () {
        return this.flatten().length;
      },
      each: function (e) {
        for (var t = 0, n = this.length; t < n; t++)
          e.call(this, this[t], t, this);
        return this;
      },
      eq: function (e) {
        var t = this.context;
        return t.length > e ? new U(t[e], this[e]) : null;
      },
      filter: function (e) {
        e = n.filter.call(this, e, this);
        return new U(this.context, e);
      },
      flatten: function () {
        var e = [];
        return new U(this.context, e.concat.apply(e, this.toArray()));
      },
      get: function (e) {
        return this[e];
      },
      join: n.join,
      includes: function (e) {
        return -1 !== this.indexOf(e);
      },
      indexOf: n.indexOf,
      iterator: function (e, t, n, a) {
        var r,
          o,
          i,
          l,
          s,
          u,
          c,
          d,
          f = [],
          h = this.context,
          p = this.selector;
        for (
          "string" == typeof e && ((a = n), (n = t), (t = e), (e = !1)),
            o = 0,
            i = h.length;
          o < i;
          o++
        ) {
          var g = new U(h[o]);
          if ("table" === t) void 0 !== (r = n.call(g, h[o], o)) && f.push(r);
          else if ("columns" === t || "rows" === t)
            void 0 !== (r = n.call(g, h[o], this[o], o)) && f.push(r);
          else if (
            "every" === t ||
            "column" === t ||
            "column-rows" === t ||
            "row" === t ||
            "cell" === t
          )
            for (
              c = this[o],
                "column-rows" === t && (u = dt(h[o], p.opts)),
                l = 0,
                s = c.length;
              l < s;
              l++
            )
              (d = c[l]),
                void 0 !==
                  (r =
                    "cell" === t
                      ? n.call(g, h[o], d.row, d.column, o, l)
                      : n.call(g, h[o], d, o, l, u)) && f.push(r);
        }
        return f.length || a
          ? (((e = (a = new U(h, e ? f.concat.apply([], f) : f))
              .selector).rows = p.rows),
            (e.cols = p.cols),
            (e.opts = p.opts),
            a)
          : this;
      },
      lastIndexOf: n.lastIndexOf,
      length: 0,
      map: function (e) {
        e = n.map.call(this, e, this);
        return new U(this.context, e);
      },
      pluck: function (e) {
        var t = $.util.get(e);
        return this.map(function (e) {
          return t(e);
        });
      },
      pop: n.pop,
      push: n.push,
      reduce: n.reduce,
      reduceRight: n.reduceRight,
      reverse: n.reverse,
      selector: null,
      shift: n.shift,
      slice: function () {
        return new U(this.context, this);
      },
      sort: n.sort,
      splice: n.splice,
      toArray: function () {
        return n.slice.call(this);
      },
      to$: function () {
        return B(this);
      },
      toJQuery: function () {
        return B(this);
      },
      unique: function () {
        return new U(this.context, x(this.toArray()));
      },
      unshift: n.unshift,
    }),
    (q.__apiStruct = tt),
    (U.extend = function (e, t, n) {
      if (n.length && t && (t instanceof U || t.__dt_wrapper))
        for (var a, r = 0, o = n.length; r < o; r++)
          (t[(a = n[r]).name] =
            "function" === a.type
              ? (function (t, n, a) {
                  return function () {
                    var e = n.apply(t || this, arguments);
                    return U.extend(e, e, a.methodExt), e;
                  };
                })(e, a.val, a)
              : "object" === a.type
              ? {}
              : a.val),
            (t[a.name].__dt_wrapper = !0),
            U.extend(e, t[a.name], a.propExt);
    }),
    (U.register = t =
      function (e, t) {
        if (Array.isArray(e))
          for (var n = 0, a = e.length; n < a; n++) U.register(e[n], t);
        else
          for (var r = e.split("."), o = tt, i = 0, l = r.length; i < l; i++) {
            var s,
              u,
              c = (function (e, t) {
                for (var n = 0, a = e.length; n < a; n++)
                  if (e[n].name === t) return e[n];
                return null;
              })(
                o,
                (u = (s = -1 !== r[i].indexOf("()"))
                  ? r[i].replace("()", "")
                  : r[i])
              );
            c ||
              o.push(
                (c = {
                  name: u,
                  val: {},
                  methodExt: [],
                  propExt: [],
                  type: "object",
                })
              ),
              i === l - 1
                ? ((c.val = t),
                  (c.type =
                    "function" == typeof t
                      ? "function"
                      : B.isPlainObject(t)
                      ? "object"
                      : "other"))
                : (o = s ? c.methodExt : c.propExt);
          }
      }),
    (U.registerPlural = e =
      function (e, t, n) {
        U.register(e, n),
          U.register(t, function () {
            var e = n.apply(this, arguments);
            return e === this
              ? this
              : e instanceof U
              ? e.length
                ? Array.isArray(e[0])
                  ? new U(e.context, e[0])
                  : e[0]
                : void 0
              : e;
          });
      });
  function nt(e, t) {
    var n, a;
    return Array.isArray(e)
      ? ((n = []),
        e.forEach(function (e) {
          e = nt(e, t);
          n.push.apply(n, e);
        }),
        n.filter(function (e) {
          return e;
        }))
      : "number" == typeof e
      ? [t[e]]
      : ((a = t.map(function (e) {
          return e.nTable;
        })),
        B(a)
          .filter(e)
          .map(function () {
            var e = a.indexOf(this);
            return t[e];
          })
          .toArray());
  }
  function at(r, o, e) {
    var t, n;
    e &&
      (t = new U(r)).one("draw", function () {
        e(t.ajax.json());
      }),
      "ssp" == te(r)
        ? s(r, o)
        : (w(r, !0),
          (n = r.jqXHR) && 4 !== n.readyState && n.abort(),
          Ie(r, {}, function (e) {
            he(r);
            for (var t = Ae(r, e), n = 0, a = t.length; n < a; n++) Y(r, t[n]);
            s(r, o), ke(r), w(r, !1);
          }));
  }
  function rt(e, t, n, a, r) {
    for (
      var o,
        i,
        l,
        s,
        u = [],
        c = typeof t,
        d = 0,
        f = (t =
          t && "string" != c && "function" != c && void 0 !== t.length
            ? t
            : [t]).length;
      d < f;
      d++
    )
      for (
        l = 0,
          s = (i =
            t[d] && t[d].split && !t[d].match(/[[(:]/)
              ? t[d].split(",")
              : [t[d]]).length;
        l < s;
        l++
      )
        (o = (o = n("string" == typeof i[l] ? i[l].trim() : i[l])).filter(
          function (e) {
            return null != e;
          }
        )) &&
          o.length &&
          (u = u.concat(o));
    var h = C.selector[e];
    if (h.length) for (d = 0, f = h.length; d < f; d++) u = h[d](a, r, u);
    return x(u);
  }
  function ot(e) {
    return (
      (e = e || {}).filter && void 0 === e.search && (e.search = e.filter),
      B.extend({ search: "none", order: "current", page: "all" }, e)
    );
  }
  function it(e) {
    var t = new U(e.context[0]);
    return (
      e.length && t.push(e[0]),
      (t.selector = e.selector),
      t.length && 1 < t[0].length && t[0].splice(1),
      t
    );
  }
  t("tables()", function (e) {
    return null != e ? new U(nt(e, this.context)) : this;
  }),
    t("table()", function (e) {
      var e = this.tables(e),
        t = e.context;
      return t.length ? new U(t[0]) : e;
    }),
    [
      ["nodes", "node", "nTable"],
      ["body", "body", "nTBody"],
      ["header", "header", "nTHead"],
      ["footer", "footer", "nTFoot"],
    ].forEach(function (t) {
      e("tables()." + t[0] + "()", "table()." + t[1] + "()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e[t[2]];
          },
          1
        );
      });
    }),
    [
      ["header", "aoHeader"],
      ["footer", "aoFooter"],
    ].forEach(function (n) {
      t("table()." + n[0] + ".structure()", function (e) {
        var e = this.columns(e).indexes().flatten(),
          t = this.context[0];
        return De(t, t[n[1]], e);
      });
    }),
    e("tables().containers()", "table().container()", function () {
      return this.iterator(
        "table",
        function (e) {
          return e.nTableWrapper;
        },
        1
      );
    }),
    t("tables().every()", function (n) {
      var a = this;
      return this.iterator("table", function (e, t) {
        n.call(a.table(t), t);
      });
    }),
    t("caption()", function (r, o) {
      var e,
        t = this.context;
      return void 0 === r
        ? (e = t[0].captionNode) && t.length
          ? e.innerHTML
          : null
        : this.iterator(
            "table",
            function (e) {
              var t = B(e.nTable),
                n = B(e.captionNode),
                a = B(e.nTableWrapper);
              n.length ||
                ((n = B("<caption/>").html(r)), (e.captionNode = n[0]), o) ||
                (t.prepend(n), (o = n.css("caption-side"))),
                n.html(r),
                o && (n.css("caption-side", o), (n[0]._captionSide = o)),
                (a.find("div.dataTables_scroll").length
                  ? ((e = "top" === o ? "Head" : "Foot"),
                    a.find("div.dataTables_scroll" + e + " table"))
                  : t
                ).prepend(n);
            },
            1
          );
    }),
    t("caption.node()", function () {
      var e = this.context;
      return e.length ? e[0].captionNode : null;
    }),
    t("draw()", function (t) {
      return this.iterator("table", function (e) {
        "page" === t
          ? S(e)
          : s(e, !1 === (t = "string" == typeof t ? "full-hold" !== t : t));
      });
    }),
    t("page()", function (t) {
      return void 0 === t
        ? this.page.info().page
        : this.iterator("table", function (e) {
            Me(e, t);
          });
    }),
    t("page.info()", function () {
      var e, t, n, a, r;
      if (0 !== this.context.length)
        return (
          (t = (e = this.context[0])._iDisplayStart),
          (n = e.oFeatures.bPaginate ? e._iDisplayLength : -1),
          (a = e.fnRecordsDisplay()),
          {
            page: (r = -1 === n) ? 0 : Math.floor(t / n),
            pages: r ? 1 : Math.ceil(a / n),
            start: t,
            end: e.fnDisplayEnd(),
            length: n,
            recordsTotal: e.fnRecordsTotal(),
            recordsDisplay: a,
            serverSide: "ssp" === te(e),
          }
        );
    }),
    t("page.len()", function (t) {
      return void 0 === t
        ? 0 !== this.context.length
          ? this.context[0]._iDisplayLength
          : void 0
        : this.iterator("table", function (e) {
            Ee(e, t);
          });
    }),
    t("ajax.json()", function () {
      var e = this.context;
      if (0 < e.length) return e[0].json;
    }),
    t("ajax.params()", function () {
      var e = this.context;
      if (0 < e.length) return e[0].oAjaxData;
    }),
    t("ajax.reload()", function (t, n) {
      return this.iterator("table", function (e) {
        at(e, !1 === n, t);
      });
    }),
    t("ajax.url()", function (t) {
      var e = this.context;
      return void 0 === t
        ? 0 === e.length
          ? void 0
          : ((e = e[0]), B.isPlainObject(e.ajax) ? e.ajax.url : e.ajax)
        : this.iterator("table", function (e) {
            B.isPlainObject(e.ajax) ? (e.ajax.url = t) : (e.ajax = t);
          });
    }),
    t("ajax.url().load()", function (t, n) {
      return this.iterator("table", function (e) {
        at(e, !1 === n, t);
      });
    });
  function lt(o, i, e, t) {
    function l(e, t) {
      var n;
      if (Array.isArray(e) || e instanceof B)
        for (var a = 0, r = e.length; a < r; a++) l(e[a], t);
      else
        e.nodeName && "tr" === e.nodeName.toLowerCase()
          ? (e.setAttribute("data-dt-row", i.idx), s.push(e))
          : ((n = B("<tr><td></td></tr>")
              .attr("data-dt-row", i.idx)
              .addClass(t)),
            (B("td", n).addClass(t).html(e)[0].colSpan = H(o)),
            s.push(n[0]));
    }
    var s = [];
    l(e, t),
      i._details && i._details.detach(),
      (i._details = B(s)),
      i._detailsShow && i._details.insertAfter(i.nTr);
  }
  function st(e, t) {
    var n = e.context;
    if (n.length && e.length) {
      var a = n[0].aoData[e[0]];
      if (a._details) {
        (a._detailsShow = t)
          ? (a._details.insertAfter(a.nTr), B(a.nTr).addClass("dt-hasChild"))
          : (a._details.detach(), B(a.nTr).removeClass("dt-hasChild")),
          ee(n[0], null, "childRow", [t, e.row(e[0])]);
        var i = n[0],
          r = new U(i),
          a = ".dt.DT_details",
          t = "draw" + a,
          e = "column-sizing" + a,
          a = "destroy" + a,
          l = i.aoData;
        if ((r.off(t + " " + e + " " + a), f(l, "_details").length > 0)) {
          r.on(t, function (e, t) {
            if (i !== t) return;
            r.rows({ page: "current" })
              .eq(0)
              .each(function (e) {
                var t = l[e];
                if (t._detailsShow) t._details.insertAfter(t.nTr);
              });
          });
          r.on(e, function (e, t) {
            if (i !== t) return;
            var n,
              a = H(t);
            for (var r = 0, o = l.length; r < o; r++) {
              n = l[r];
              if (n && n._details)
                n._details.each(function () {
                  var e = B(this).children("td");
                  if (e.length == 1) e.attr("colspan", a);
                });
            }
          });
          r.on(a, function (e, t) {
            if (i !== t) return;
            for (var n = 0, a = l.length; n < a; n++)
              if (l[n] && l[n]._details) pt(r, n);
          });
        }
        ht(n);
      }
    }
  }
  function ut(e, t, n, a, r, o) {
    for (var i = [], l = 0, s = r.length; l < s; l++) i.push(G(e, r[l], t, o));
    return i;
  }
  function ct(t, n) {
    return function (e) {
      return (
        y(e) ||
          "string" != typeof e ||
          ((e = e.replace(d, " ")), t && (e = I(e)), n && (e = R(e, !1))),
        e
      );
    };
  }
  var dt = function (e, t) {
      var n,
        a = [],
        r = e.aiDisplay,
        o = e.aiDisplayMaster,
        i = t.search,
        l = t.order,
        t = t.page;
      if ("ssp" == te(e)) return "removed" === i ? [] : h(0, o.length);
      if ("current" == t)
        for (u = e._iDisplayStart, c = e.fnDisplayEnd(); u < c; u++)
          a.push(r[u]);
      else if ("current" == l || "applied" == l) {
        if ("none" == i) a = o.slice();
        else if ("applied" == i) a = r.slice();
        else if ("removed" == i) {
          for (var s = {}, u = 0, c = r.length; u < c; u++) s[r[u]] = null;
          o.forEach(function (e) {
            Object.prototype.hasOwnProperty.call(s, e) || a.push(e);
          });
        }
      } else if ("index" == l || "original" == l)
        for (u = 0, c = e.aoData.length; u < c; u++)
          e.aoData[u] &&
            ("none" == i ||
              (-1 === (n = r.indexOf(u)) && "removed" == i) ||
              (0 <= n && "applied" == i)) &&
            a.push(u);
      else if ("number" == typeof l) {
        var d = $e(e, l, "asc");
        if ("none" === i) a = d;
        else
          for (u = 0; u < d.length; u++)
            ((-1 === (n = r.indexOf(d[u])) && "removed" == i) ||
              (0 <= n && "applied" == i)) &&
              a.push(d[u]);
      }
      return a;
    },
    ft =
      (t("rows()", function (n, a) {
        void 0 === n ? (n = "") : B.isPlainObject(n) && ((a = n), (n = "")),
          (a = ot(a));
        var e = this.iterator(
          "table",
          function (e) {
            return (
              (t = rt(
                "row",
                (t = n),
                function (n) {
                  var e = g(n),
                    a = r.aoData;
                  if (null !== e && !o) return [e];
                  if (((i = i || dt(r, o)), null !== e && -1 !== i.indexOf(e)))
                    return [e];
                  if (null == n || "" === n) return i;
                  if ("function" == typeof n)
                    return i.map(function (e) {
                      var t = a[e];
                      return n(e, t._aData, t.nTr) ? e : null;
                    });
                  if (n.nodeName)
                    return (
                      (e = n._DT_RowIndex),
                      (t = n._DT_CellIndex),
                      void 0 !== e
                        ? a[e] && a[e].nTr === n
                          ? [e]
                          : []
                        : t
                        ? a[t.row] && a[t.row].nTr === n.parentNode
                          ? [t.row]
                          : []
                        : (e = B(n).closest("*[data-dt-row]")).length
                        ? [e.data("dt-row")]
                        : []
                    );
                  if ("string" == typeof n && "#" === n.charAt(0)) {
                    var t = r.aIds[n.replace(/^#/, "")];
                    if (void 0 !== t) return [t.idx];
                  }
                  e = b(v(r.aoData, i, "nTr"));
                  return B(e)
                    .filter(n)
                    .map(function () {
                      return this._DT_RowIndex;
                    })
                    .toArray();
                },
                (r = e),
                (o = a)
              )),
              ("current" !== o.order && "applied" !== o.order) || Be(r, t),
              t
            );
            var r, t, o, i;
          },
          1
        );
        return (e.selector.rows = n), (e.selector.opts = a), e;
      }),
      t("rows().nodes()", function () {
        return this.iterator(
          "row",
          function (e, t) {
            return e.aoData[t].nTr || void 0;
          },
          1
        );
      }),
      t("rows().data()", function () {
        return this.iterator(
          !0,
          "rows",
          function (e, t) {
            return v(e.aoData, t, "_aData");
          },
          1
        );
      }),
      e("rows().cache()", "row().cache()", function (n) {
        return this.iterator(
          "row",
          function (e, t) {
            e = e.aoData[t];
            return "search" === n ? e._aFilterData : e._aSortData;
          },
          1
        );
      }),
      e("rows().invalidate()", "row().invalidate()", function (n) {
        return this.iterator("row", function (e, t) {
          pe(e, t, n);
        });
      }),
      e("rows().indexes()", "row().index()", function () {
        return this.iterator(
          "row",
          function (e, t) {
            return t;
          },
          1
        );
      }),
      e("rows().ids()", "row().id()", function (e) {
        for (var t = [], n = this.context, a = 0, r = n.length; a < r; a++)
          for (var o = 0, i = this[a].length; o < i; o++) {
            var l = n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);
            t.push((!0 === e ? "#" : "") + l);
          }
        return new U(n, t);
      }),
      e("rows().remove()", "row().remove()", function () {
        return (
          this.iterator("row", function (e, t) {
            var n = e.aoData,
              a = n[t],
              r = e.aiDisplayMaster.indexOf(t),
              r =
                (-1 !== r && e.aiDisplayMaster.splice(r, 1),
                -1 !== (r = e.aiDisplay.indexOf(t)) && e.aiDisplay.splice(r, 1),
                0 < e._iRecordsDisplay && e._iRecordsDisplay--,
                Qe(e),
                e.rowIdFn(a._aData));
            void 0 !== r && delete e.aIds[r], (n[t] = null);
          }),
          this
        );
      }),
      t("rows.add()", function (o) {
        var e = this.iterator(
            "table",
            function (e) {
              for (var t, n = [], a = 0, r = o.length; a < r; a++)
                (t = o[a]).nodeName && "TR" === t.nodeName.toUpperCase()
                  ? n.push(se(e, t)[0])
                  : n.push(Y(e, t));
              return n;
            },
            1
          ),
          t = this.rows(-1);
        return t.pop(), t.push.apply(t, e), t;
      }),
      t("row()", function (e, t) {
        return it(this.rows(e, t));
      }),
      t("row().data()", function (e) {
        var t,
          n = this.context;
        return void 0 === e
          ? n.length && this.length && this[0].length
            ? n[0].aoData[this[0]]._aData
            : void 0
          : (((t = n[0].aoData[this[0]])._aData = e),
            Array.isArray(e) && t.nTr && t.nTr.id && m(n[0].rowId)(e, t.nTr.id),
            pe(n[0], this[0], "data"),
            this);
      }),
      t("row().node()", function () {
        var e = this.context;
        return (
          (e.length &&
            this.length &&
            this[0].length &&
            e[0].aoData[this[0]].nTr) ||
          null
        );
      }),
      t("row.add()", function (t) {
        t instanceof B && t.length && (t = t[0]);
        var e = this.iterator("table", function (e) {
          return t.nodeName && "TR" === t.nodeName.toUpperCase()
            ? se(e, t)[0]
            : Y(e, t);
        });
        return this.row(e[0]);
      }),
      B(_).on("plugin-init.dt", function (e, t) {
        var a = new U(t);
        a.on("stateSaveParams.DT", function (e, t, n) {
          for (
            var a = t.rowIdFn, r = t.aiDisplayMaster, o = [], i = 0;
            i < r.length;
            i++
          ) {
            var l = r[i],
              l = t.aoData[l];
            l._detailsShow && o.push("#" + a(l._aData));
          }
          n.childRows = o;
        }),
          a.on("stateLoaded.DT", function (e, t, n) {
            ft(a, n);
          }),
          ft(a, a.state.loaded());
      }),
      function (e, t) {
        t &&
          t.childRows &&
          e
            .rows(
              t.childRows.map(function (e) {
                return e.replace(/:/g, "\\:");
              })
            )
            .every(function () {
              ee(e.settings()[0], null, "requestChild", [this]);
            });
      }),
    ht = $.util.throttle(function (e) {
      Ye(e[0]);
    }, 500),
    pt = function (e, t) {
      var n = e.context;
      n.length &&
        (t = n[0].aoData[void 0 !== t ? t : e[0]]) &&
        t._details &&
        (t._details.remove(),
        (t._detailsShow = void 0),
        (t._details = void 0),
        B(t.nTr).removeClass("dt-hasChild"),
        ht(n));
    },
    gt = "row().child",
    mt = gt + "()",
    vt =
      (t(mt, function (e, t) {
        var n = this.context;
        return void 0 === e
          ? n.length && this.length && n[0].aoData[this[0]]
            ? n[0].aoData[this[0]]._details
            : void 0
          : (!0 === e
              ? this.child.show()
              : !1 === e
              ? pt(this)
              : n.length && this.length && lt(n[0], n[0].aoData[this[0]], e, t),
            this);
      }),
      t([gt + ".show()", mt + ".show()"], function () {
        return st(this, !0), this;
      }),
      t([gt + ".hide()", mt + ".hide()"], function () {
        return st(this, !1), this;
      }),
      t([gt + ".remove()", mt + ".remove()"], function () {
        return pt(this), this;
      }),
      t(gt + ".isShown()", function () {
        var e = this.context;
        return (
          (e.length && this.length && e[0].aoData[this[0]]._detailsShow) || !1
        );
      }),
      /^([^:]+):(name|title|visIdx|visible)$/),
    mt =
      (t("columns()", function (n, a) {
        void 0 === n ? (n = "") : B.isPlainObject(n) && ((a = n), (n = "")),
          (a = ot(a));
        var e = this.iterator(
          "table",
          function (e) {
            return (
              (t = n),
              (l = a),
              (s = (i = e).aoColumns),
              (u = f(s, "sName")),
              (c = f(s, "sTitle")),
              (e = $.util.get("[].[].cell")(i.aoHeader)),
              (d = x(O([], e))),
              rt(
                "column",
                t,
                function (n) {
                  var a,
                    e = g(n);
                  if ("" === n) return h(s.length);
                  if (null !== e) return [0 <= e ? e : s.length + e];
                  if ("function" == typeof n)
                    return (
                      (a = dt(i, l)),
                      s.map(function (e, t) {
                        return n(t, ut(i, t, 0, 0, a)) ? t : null;
                      })
                    );
                  var r = "string" == typeof n ? n.match(vt) : "";
                  if (r)
                    switch (r[2]) {
                      case "visIdx":
                      case "visible":
                        var t,
                          o = parseInt(r[1], 10);
                        return o < 0
                          ? [
                              (t = s.map(function (e, t) {
                                return e.bVisible ? t : null;
                              }))[t.length + o],
                            ]
                          : [M(i, o)];
                      case "name":
                        return u.map(function (e, t) {
                          return e === r[1] ? t : null;
                        });
                      case "title":
                        return c.map(function (e, t) {
                          return e === r[1] ? t : null;
                        });
                      default:
                        return [];
                    }
                  return n.nodeName && n._DT_CellIndex
                    ? [n._DT_CellIndex.column]
                    : (e = B(d)
                        .filter(n)
                        .map(function () {
                          return le(this);
                        })
                        .toArray()).length || !n.nodeName
                    ? e
                    : (e = B(n).closest("*[data-dt-column]")).length
                    ? [e.data("dt-column")]
                    : [];
                },
                i,
                l
              )
            );
            var i, t, l, s, u, c, d;
          },
          1
        );
        return (e.selector.cols = n), (e.selector.opts = a), e;
      }),
      e("columns().header()", "column().header()", function (a) {
        return this.iterator(
          "column",
          function (e, t) {
            var n = e.aoHeader;
            return n[void 0 !== a ? a : e.bSortCellsTop ? 0 : n.length - 1][t]
              .cell;
          },
          1
        );
      }),
      e("columns().footer()", "column().footer()", function (n) {
        return this.iterator(
          "column",
          function (e, t) {
            return e.aoFooter.length
              ? e.aoFooter[void 0 !== n ? n : 0][t].cell
              : null;
          },
          1
        );
      }),
      e("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", ut, 1);
      }),
      e("columns().render()", "column().render()", function (o) {
        return this.iterator(
          "column-rows",
          function (e, t, n, a, r) {
            return ut(e, t, 0, 0, r, o);
          },
          1
        );
      }),
      e("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator(
          "column",
          function (e, t) {
            return e.aoColumns[t].mData;
          },
          1
        );
      }),
      e("columns().cache()", "column().cache()", function (o) {
        return this.iterator(
          "column-rows",
          function (e, t, n, a, r) {
            return v(
              e.aoData,
              r,
              "search" === o ? "_aFilterData" : "_aSortData",
              t
            );
          },
          1
        );
      }),
      e("columns().init()", "column().init()", function () {
        return this.iterator(
          "column",
          function (e, t) {
            return e.aoColumns[t];
          },
          1
        );
      }),
      e("columns().nodes()", "column().nodes()", function () {
        return this.iterator(
          "column-rows",
          function (e, t, n, a, r) {
            return v(e.aoData, r, "anCells", t);
          },
          1
        );
      }),
      e("columns().titles()", "column().title()", function (n, a) {
        return this.iterator(
          "column",
          function (e, t) {
            "number" == typeof n && ((a = n), (n = void 0));
            t = B("span.dt-column-title", this.column(t).header(a));
            return void 0 !== n ? (t.html(n), this) : t.html();
          },
          1
        );
      }),
      e("columns().types()", "column().type()", function () {
        return this.iterator(
          "column",
          function (e, t) {
            t = e.aoColumns[t].sType;
            return t || X(e), t;
          },
          1
        );
      }),
      e("columns().visible()", "column().visible()", function (n, a) {
        var t = this,
          r = [],
          e = this.iterator("column", function (e, t) {
            if (void 0 === n) return e.aoColumns[t].bVisible;
            !(function (e, t, n) {
              var a,
                r,
                o = e.aoColumns,
                i = o[t],
                l = e.aoData;
              if (void 0 === n) return i.bVisible;
              if (i.bVisible === n) return !1;
              if (n)
                for (
                  var s = f(o, "bVisible").indexOf(!0, t + 1),
                    u = 0,
                    c = l.length;
                  u < c;
                  u++
                )
                  l[u] &&
                    ((r = l[u].nTr), (a = l[u].anCells), r) &&
                    r.insertBefore(a[t], a[s] || null);
              else B(f(e.aoData, "anCells", t)).detach();
              return (i.bVisible = n), Xe(e), !0;
            })(e, t, n) || r.push(t);
          });
        return (
          void 0 !== n &&
            this.iterator("table", function (e) {
              xe(e, e.aoHeader),
                xe(e, e.aoFooter),
                e.aiDisplay.length ||
                  B(e.nTBody).find("td[colspan]").attr("colspan", H(e)),
                Ye(e),
                t.iterator("column", function (e, t) {
                  r.includes(t) &&
                    ee(e, null, "column-visibility", [e, t, n, a]);
                }),
                r.length && (void 0 === a || a) && t.columns.adjust();
            }),
          e
        );
      }),
      e("columns().widths()", "column().width()", function () {
        var e = this.columns(":visible").count(),
          e = B("<tr>").html("<td>" + Array(e).join("</td><td>") + "</td>"),
          n =
            (B(this.table().body()).append(e),
            e.children().map(function () {
              return B(this).outerWidth();
            }));
        return (
          e.remove(),
          this.iterator(
            "column",
            function (e, t) {
              e = T(e, t);
              return null !== e ? n[e] : 0;
            },
            1
          )
        );
      }),
      e("columns().indexes()", "column().index()", function (n) {
        return this.iterator(
          "column",
          function (e, t) {
            return "visible" === n ? T(e, t) : t;
          },
          1
        );
      }),
      t("columns.adjust()", function () {
        return this.iterator(
          "table",
          function (e) {
            E(e);
          },
          1
        );
      }),
      t("column.index()", function (e, t) {
        var n;
        if (0 !== this.context.length)
          return (
            (n = this.context[0]),
            "fromVisible" === e || "toData" === e
              ? M(n, t)
              : "fromData" === e || "toVisible" === e
              ? T(n, t)
              : void 0
          );
      }),
      t("column()", function (e, t) {
        return it(this.columns(e, t));
      }),
      t("cells()", function (g, e, m) {
        var a, r, o, i, l, s, t;
        return (
          B.isPlainObject(g) &&
            (void 0 === g.row ? ((m = g), (g = null)) : ((m = e), (e = null))),
          B.isPlainObject(e) && ((m = e), (e = null)),
          null == e
            ? this.iterator("table", function (e) {
                return (
                  (a = e),
                  (e = g),
                  (t = ot(m)),
                  (d = a.aoData),
                  (f = dt(a, t)),
                  (n = b(v(d, f, "anCells"))),
                  (h = B(O([], n))),
                  (p = a.aoColumns.length),
                  rt(
                    "cell",
                    e,
                    function (e) {
                      var t,
                        n = "function" == typeof e;
                      if (null == e || n) {
                        for (o = [], i = 0, l = f.length; i < l; i++)
                          for (r = f[i], s = 0; s < p; s++)
                            (u = { row: r, column: s }),
                              (!n ||
                                ((c = d[r]),
                                e(
                                  u,
                                  G(a, r, s),
                                  c.anCells ? c.anCells[s] : null
                                ))) &&
                                o.push(u);
                        return o;
                      }
                      return B.isPlainObject(e)
                        ? void 0 !== e.column &&
                          void 0 !== e.row &&
                          -1 !== f.indexOf(e.row)
                          ? [e]
                          : []
                        : (t = h
                            .filter(e)
                            .map(function (e, t) {
                              return {
                                row: t._DT_CellIndex.row,
                                column: t._DT_CellIndex.column,
                              };
                            })
                            .toArray()).length || !e.nodeName
                        ? t
                        : (c = B(e).closest("*[data-dt-row]")).length
                        ? [
                            {
                              row: c.data("dt-row"),
                              column: c.data("dt-column"),
                            },
                          ]
                        : [];
                    },
                    a,
                    t
                  )
                );
                var a, t, r, o, i, l, s, u, c, d, f, n, h, p;
              })
            : ((t = m
                ? { page: m.page, order: m.order, search: m.search }
                : {}),
              (a = this.columns(e, t)),
              (r = this.rows(g, t)),
              (t = this.iterator(
                "table",
                function (e, t) {
                  var n = [];
                  for (o = 0, i = r[t].length; o < i; o++)
                    for (l = 0, s = a[t].length; l < s; l++)
                      n.push({ row: r[t][o], column: a[t][l] });
                  return n;
                },
                1
              )),
              (t = m && m.selected ? this.cells(t, m) : t),
              B.extend(t.selector, { cols: e, rows: g, opts: m }),
              t)
        );
      }),
      e("cells().nodes()", "cell().node()", function () {
        return this.iterator(
          "cell",
          function (e, t, n) {
            e = e.aoData[t];
            return e && e.anCells ? e.anCells[n] : void 0;
          },
          1
        );
      }),
      t("cells().data()", function () {
        return this.iterator(
          "cell",
          function (e, t, n) {
            return G(e, t, n);
          },
          1
        );
      }),
      e("cells().cache()", "cell().cache()", function (a) {
        return (
          (a = "search" === a ? "_aFilterData" : "_aSortData"),
          this.iterator(
            "cell",
            function (e, t, n) {
              return e.aoData[t][a][n];
            },
            1
          )
        );
      }),
      e("cells().render()", "cell().render()", function (a) {
        return this.iterator(
          "cell",
          function (e, t, n) {
            return G(e, t, n, a);
          },
          1
        );
      }),
      e("cells().indexes()", "cell().index()", function () {
        return this.iterator(
          "cell",
          function (e, t, n) {
            return { row: t, column: n, columnVisible: T(e, n) };
          },
          1
        );
      }),
      e("cells().invalidate()", "cell().invalidate()", function (a) {
        return this.iterator("cell", function (e, t, n) {
          pe(e, t, a, n);
        });
      }),
      t("cell()", function (e, t, n) {
        return it(this.cells(e, t, n));
      }),
      t("cell().data()", function (e) {
        var t,
          n,
          a,
          r,
          o,
          i = this.context,
          l = this[0];
        return void 0 === e
          ? i.length && l.length
            ? G(i[0], l[0].row, l[0].column)
            : void 0
          : ((t = i[0]),
            (n = l[0].row),
            (a = l[0].column),
            (r = t.aoColumns[a]),
            (o = t.aoData[n]._aData),
            r.fnSetData(o, e, { settings: t, row: n, col: a }),
            pe(i[0], l[0].row, "data", l[0].column),
            this);
      }),
      t("order()", function (t, e) {
        var n = this.context,
          a = Array.prototype.slice.call(arguments);
        return void 0 === t
          ? 0 !== n.length
            ? n[0].aaSorting
            : void 0
          : ("number" == typeof t ? (t = [[t, e]]) : 1 < a.length && (t = a),
            this.iterator("table", function (e) {
              e.aaSorting = Array.isArray(t) ? t.slice() : t;
            }));
      }),
      t("order.listener()", function (t, n, a) {
        return this.iterator("table", function (e) {
          Ve(e, t, {}, n, a);
        });
      }),
      t("order.fixed()", function (t) {
        var e;
        return t
          ? this.iterator("table", function (e) {
              e.aaSortingFixed = B.extend(!0, {}, t);
            })
          : ((e = (e = this.context).length ? e[0].aaSortingFixed : void 0),
            Array.isArray(e) ? { pre: e } : e);
      }),
      t(["columns().order()", "column().order()"], function (n) {
        var a = this;
        return n
          ? this.iterator("table", function (e, t) {
              e.aaSorting = a[t].map(function (e) {
                return [e, n];
              });
            })
          : this.iterator(
              "column",
              function (e, t) {
                for (var n = Ue(e), a = 0, r = n.length; a < r; a++)
                  if (n[a].col === t) return n[a].dir;
                return null;
              },
              1
            );
      }),
      e("columns().orderable()", "column().orderable()", function (n) {
        return this.iterator(
          "column",
          function (e, t) {
            e = e.aoColumns[t];
            return n ? e.asSorting : e.bSortable;
          },
          1
        );
      }),
      t("processing()", function (t) {
        return this.iterator("table", function (e) {
          w(e, t);
        });
      }),
      t("search()", function (t, n, a, r) {
        var e = this.context;
        return void 0 === t
          ? 0 !== e.length
            ? e[0].oPreviousSearch.search
            : void 0
          : this.iterator("table", function (e) {
              e.oFeatures.bFilter &&
                Le(
                  e,
                  "object" == typeof n
                    ? B.extend(e.oPreviousSearch, n, { search: t })
                    : B.extend(e.oPreviousSearch, {
                        search: t,
                        regex: null !== n && n,
                        smart: null === a || a,
                        caseInsensitive: null === r || r,
                      })
                );
            });
      }),
      t("search.fixed()", function (t, n) {
        var e = this.iterator(!0, "table", function (e) {
          e = e.searchFixed;
          return t
            ? void 0 === n
              ? e[t]
              : (null === n ? delete e[t] : (e[t] = n), this)
            : Object.keys(e);
        });
        return void 0 !== t && void 0 === n ? e[0] : e;
      }),
      e("columns().search()", "column().search()", function (a, r, o, i) {
        return this.iterator("column", function (e, t) {
          var n = e.aoPreSearchCols;
          if (void 0 === a) return n[t].search;
          e.oFeatures.bFilter &&
            ("object" == typeof r
              ? B.extend(n[t], r, { search: a })
              : B.extend(n[t], {
                  search: a,
                  regex: null !== r && r,
                  smart: null === o || o,
                  caseInsensitive: null === i || i,
                }),
            Le(e, e.oPreviousSearch));
        });
      }),
      t(
        ["columns().search.fixed()", "column().search.fixed()"],
        function (n, a) {
          var e = this.iterator(!0, "column", function (e, t) {
            e = e.aoColumns[t].searchFixed;
            return n
              ? void 0 === a
                ? e[n]
                : (null === a ? delete e[n] : (e[n] = a), this)
              : Object.keys(e);
          });
          return void 0 !== n && void 0 === a ? e[0] : e;
        }
      ),
      t("state()", function (e, t) {
        var n;
        return e
          ? ((n = B.extend(!0, {}, e)),
            this.iterator("table", function (e) {
              !1 !== t && (n.time = +new Date() + 100),
                Ge(e, n, function () {});
            }))
          : this.context.length
          ? this.context[0].oSavedState
          : null;
      }),
      t("state.clear()", function () {
        return this.iterator("table", function (e) {
          e.fnStateSaveCallback.call(e.oInstance, e, {});
        });
      }),
      t("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null;
      }),
      t("state.save()", function () {
        return this.iterator("table", function (e) {
          Ye(e);
        });
      }),
      ($.use = function (e, t) {
        "lib" === t || e.fn
          ? (B = e)
          : "win" == t || e.document
          ? (_ = (q = e).document)
          : ("datetime" !== t && "DateTime" !== e.type) || ($.DateTime = e);
      }),
      ($.factory = function (e, t) {
        var n = !1;
        return (
          e && e.document && (_ = (q = e).document),
          t && t.fn && t.fn.jquery && ((B = t), (n = !0)),
          n
        );
      }),
      ($.versionCheck = function (e, t) {
        for (
          var n,
            a,
            r = (t || $.version).split("."),
            o = e.split("."),
            i = 0,
            l = o.length;
          i < l;
          i++
        )
          if ((n = parseInt(r[i], 10) || 0) !== (a = parseInt(o[i], 10) || 0))
            return a < n;
        return !0;
      }),
      ($.isDataTable = function (e) {
        var r = B(e).get(0),
          o = !1;
        return (
          e instanceof $.Api ||
          (B.each($.settings, function (e, t) {
            var n = t.nScrollHead ? B("table", t.nScrollHead)[0] : null,
              a = t.nScrollFoot ? B("table", t.nScrollFoot)[0] : null;
            (t.nTable !== r && n !== r && a !== r) || (o = !0);
          }),
          o)
        );
      }),
      ($.tables = function (t) {
        var e = !1,
          n =
            (B.isPlainObject(t) && ((e = t.api), (t = t.visible)),
            $.settings
              .filter(function (e) {
                return !(t && !B(e.nTable).is(":visible"));
              })
              .map(function (e) {
                return e.nTable;
              }));
        return e ? new U(n) : n;
      }),
      ($.camelToHungarian = z),
      t("$()", function (e, t) {
        (t = this.rows(t).nodes()), (t = B(t));
        return B([].concat(t.filter(e).toArray(), t.find(e).toArray()));
      }),
      B.each(["on", "one", "off"], function (e, n) {
        t(n + "()", function () {
          var e = Array.prototype.slice.call(arguments),
            t =
              ((e[0] = e[0]
                .split(/\s/)
                .map(function (e) {
                  return e.match(/\.dt\b/) ? e : e + ".dt";
                })
                .join(" ")),
              B(this.tables().nodes()));
          return t[n].apply(t, e), this;
        });
      }),
      t("clear()", function () {
        return this.iterator("table", function (e) {
          he(e);
        });
      }),
      t("error()", function (t) {
        return this.iterator("table", function (e) {
          Z(e, 0, t);
        });
      }),
      t("settings()", function () {
        return new U(this.context, this.context);
      }),
      t("init()", function () {
        var e = this.context;
        return e.length ? e[0].oInit : null;
      }),
      t("data()", function () {
        return this.iterator("table", function (e) {
          return f(e.aoData, "_aData");
        }).flatten();
      }),
      t("trigger()", function (t, n, a) {
        return this.iterator("table", function (e) {
          return ee(e, null, t, n, a);
        }).flatten();
      }),
      t("ready()", function (e) {
        var t = this.context;
        return e
          ? this.tables().every(function () {
              this.context[0]._bInitComplete
                ? e.call(this)
                : this.on("init", function () {
                    e.call(this);
                  });
            })
          : t.length
          ? t[0]._bInitComplete || !1
          : null;
      }),
      t("destroy()", function (c) {
        return (
          (c = c || !1),
          this.iterator("table", function (e) {
            var t = e.oClasses,
              n = e.nTable,
              a = e.nTBody,
              r = e.nTHead,
              o = e.nTFoot,
              i = B(n),
              a = B(a),
              l = B(e.nTableWrapper),
              s = e.aoData.map(function (e) {
                return e ? e.nTr : null;
              }),
              u = t.order,
              o =
                ((e.bDestroying = !0),
                ee(e, "aoDestroyCallback", "destroy", [e], !0),
                c || new U(e).columns().visible(!0),
                l.off(".DT").find(":not(tbody *)").off(".DT"),
                B(q).off(".DT-" + e.sInstance),
                n != r.parentNode &&
                  (i.children("thead").detach(), i.append(r)),
                o &&
                  n != o.parentNode &&
                  (i.children("tfoot").detach(), i.append(o)),
                e.colgroup.remove(),
                (e.aaSorting = []),
                (e.aaSortingFixed = []),
                ze(e),
                B("th, td", r)
                  .removeClass(
                    u.canAsc + " " + u.canDesc + " " + u.isAsc + " " + u.isDesc
                  )
                  .css("width", ""),
                a.children().detach(),
                a.append(s),
                e.nTableWrapper.parentNode),
              r = e.nTableWrapper.nextSibling,
              u = c ? "remove" : "detach",
              a =
                (i[u](),
                l[u](),
                !c &&
                  o &&
                  (o.insertBefore(n, r),
                  i.css("width", e.sDestroyWidth).removeClass(t.table)),
                $.settings.indexOf(e));
            -1 !== a && $.settings.splice(a, 1);
          })
        );
      }),
      B.each(["column", "row", "cell"], function (e, s) {
        t(s + "s().every()", function (a) {
          var r,
            o = this.selector.opts,
            i = this,
            l = 0;
          return this.iterator("every", function (e, t, n) {
            (r = i[s](t, o)),
              "cell" === s
                ? a.call(r, r[0][0].row, r[0][0].column, n, l)
                : a.call(r, t, n, l),
              l++;
          });
        });
      }),
      t("i18n()", function (e, t, n) {
        var a = this.context[0],
          e = J(e)(a.oLanguage);
        return "string" ==
          typeof (e = B.isPlainObject((e = void 0 === e ? t : e))
            ? void 0 !== n && void 0 !== e[n]
              ? e[n]
              : e._
            : e)
          ? e.replace("%d", n)
          : e;
      }),
      ($.version = "2.0.3"),
      ($.settings = []),
      ($.models = {}),
      ($.models.oSearch = {
        caseInsensitive: !0,
        search: "",
        regex: !1,
        smart: !0,
        return: !1,
      }),
      ($.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        src: null,
        idx: -1,
        displayData: null,
      }),
      ($.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null,
        maxLenString: null,
        searchFixed: null,
      }),
      ($.defaults = {
        aaData: null,
        aaSorting: [[0, "asc"]],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        bAutoWidth: !0,
        bDeferRender: !0,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: null,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (e) {
          return e
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnStateLoadCallback: function (e) {
          try {
            return JSON.parse(
              (-1 === e.iStateDuration ? sessionStorage : localStorage).getItem(
                "DataTables_" + e.sInstance + "_" + location.pathname
              )
            );
          } catch (e) {
            return {};
          }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (e, t) {
          try {
            (-1 === e.iStateDuration ? sessionStorage : localStorage).setItem(
              "DataTables_" + e.sInstance + "_" + location.pathname,
              JSON.stringify(t)
            );
          } catch (e) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
          oAria: {
            orderable: ": Activate to sort",
            orderableReverse: ": Activate to invert sorting",
            orderableRemove: ": Activate to remove sorting",
            paginate: {
              first: "First",
              last: "Last",
              next: "Next",
              previous: "Previous",
            },
          },
          oPaginate: { sFirst: "«", sLast: "»", sNext: "›", sPrevious: "‹" },
          entries: { _: "entries", 1: "entry" },
          sEmptyTable: "No data available in table",
          sInfo: "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
          sInfoEmpty: "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
          sInfoFiltered: "(filtered from _MAX_ total _ENTRIES-MAX_)",
          sInfoPostFix: "",
          sDecimal: "",
          sThousands: ",",
          sLengthMenu: "_MENU_ _ENTRIES_ per page",
          sLoadingRecords: "Loading...",
          sProcessing: "",
          sSearch: "Search:",
          sSearchPlaceholder: "",
          sUrl: "",
          sZeroRecords: "No matching records found",
        },
        oSearch: B.extend({}, $.models.oSearch),
        layout: {
          topStart: "pageLength",
          topEnd: "search",
          bottomStart: "info",
          bottomEnd: "paging",
        },
        sDom: null,
        searchDelay: null,
        sPaginationType: "full_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId",
        caption: null,
      }),
      k($.defaults),
      ($.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        ariaTitle: "",
        asSorting: ["asc", "desc", ""],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null,
      }),
      k($.defaults.column),
      ($.models.oSettings = {
        oFeatures: {
          bAutoWidth: null,
          bDeferRender: null,
          bFilter: null,
          bInfo: !0,
          bLengthChange: !0,
          bPaginate: null,
          bProcessing: null,
          bServerSide: null,
          bSort: null,
          bSortMulti: null,
          bSortClasses: null,
          bStateSave: null,
        },
        oScroll: {
          bCollapse: null,
          iBarWidth: 0,
          sX: null,
          sXInner: null,
          sY: null,
        },
        oLanguage: { fnInfoCallback: null },
        oBrowser: { bScrollbarLeft: !1, barWidth: 0 },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        searchFixed: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        pagingControls: 0,
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: void 0,
        oAjaxData: void 0,
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
          return "ssp" == te(this)
            ? +this._iRecordsTotal
            : this.aiDisplayMaster.length;
        },
        fnRecordsDisplay: function () {
          return "ssp" == te(this)
            ? +this._iRecordsDisplay
            : this.aiDisplay.length;
        },
        fnDisplayEnd: function () {
          var e = this._iDisplayLength,
            t = this._iDisplayStart,
            n = t + e,
            a = this.aiDisplay.length,
            r = this.oFeatures,
            o = r.bPaginate;
          return r.bServerSide
            ? !1 === o || -1 === e
              ? t + a
              : Math.min(t + e, this._iRecordsDisplay)
            : !o || a < n || -1 === e
            ? a
            : n;
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null,
        caption: "",
        captionNode: null,
        colgroup: null,
      }),
      ($.ext = C =
        {
          buttons: {},
          classes: {},
          builder: "-source-",
          errMode: "alert",
          feature: [],
          features: {},
          search: [],
          selector: { cell: [], column: [], row: [] },
          legacy: { ajax: null },
          pager: {},
          renderer: { pageButton: {}, header: {} },
          order: {},
          type: {
            className: {},
            detect: [],
            render: {},
            search: {},
            order: {},
          },
          _unique: 0,
          fnVersionCheck: $.fnVersionCheck,
          iApiIndex: 0,
          sVersion: $.version,
        }),
      B.extend(C, {
        afnFiltering: C.search,
        aTypes: C.type.detect,
        ofnSearch: C.type.search,
        oSort: C.type.order,
        afnSortData: C.order,
        aoFeatures: C.feature,
        oStdClasses: C.classes,
        oPagination: C.pager,
      }),
      B.extend($.ext.classes, {
        container: "dt-container",
        empty: { row: "dt-empty" },
        info: { container: "dt-info" },
        length: { container: "dt-length", select: "dt-input" },
        order: {
          canAsc: "dt-orderable-asc",
          canDesc: "dt-orderable-desc",
          isAsc: "dt-ordering-asc",
          isDesc: "dt-ordering-desc",
          none: "dt-orderable-none",
          position: "sorting_",
        },
        processing: { container: "dt-processing" },
        scrolling: {
          body: "dt-scroll-body",
          container: "dt-scroll",
          footer: { self: "dt-scroll-foot", inner: "dt-scroll-footInner" },
          header: { self: "dt-scroll-head", inner: "dt-scroll-headInner" },
        },
        search: { container: "dt-search", input: "dt-input" },
        table: "dataTable",
        tbody: { cell: "", row: "" },
        thead: { cell: "", row: "" },
        tfoot: { cell: "", row: "" },
        paging: {
          active: "current",
          button: "dt-paging-button",
          container: "dt-paging",
          disabled: "disabled",
        },
      }),
      $.ext.pager);
  B.extend(mt, {
    simple: function () {
      return ["previous", "next"];
    },
    full: function () {
      return ["first", "previous", "next", "last"];
    },
    numbers: function () {
      return ["numbers"];
    },
    simple_numbers: function () {
      return ["previous", "numbers", "next"];
    },
    full_numbers: function () {
      return ["first", "previous", "numbers", "next", "last"];
    },
    first_last: function () {
      return ["first", "last"];
    },
    first_last_numbers: function () {
      return ["first", "numbers", "last"];
    },
    _numbers: Ft,
    numbers_length: 7,
  }),
    B.extend(!0, $.ext.renderer, {
      pagingButton: {
        _: function (e, t, n, a, r) {
          var e = e.oClasses.paging,
            o = [e.button];
          return (
            a && o.push(e.active),
            r && o.push(e.disabled),
            {
              display: (a =
                "ellipsis" === t
                  ? B('<span class="ellipsis"></span>').html(n)[0]
                  : B("<button>", {
                      class: o.join(" "),
                      role: "link",
                      type: "button",
                    }).html(n)),
              clicker: a,
            }
          );
        },
      },
      pagingContainer: {
        _: function (e, t) {
          return t;
        },
      },
    });
  function bt(e) {
    return e.replace(/[\W]/g, "_");
  }
  function yt(e, t, n, a, r) {
    return q.moment ? e[t](r) : q.luxon ? e[n](r) : a ? e[a](r) : e;
  }
  var Dt = !1;
  function xt(e, t, n) {
    var a;
    if (q.moment) {
      if (!(a = q.moment.utc(e, t, n, !0)).isValid()) return null;
    } else if (q.luxon) {
      if (
        !(a =
          t && "string" == typeof e
            ? q.luxon.DateTime.fromFormat(e, t)
            : q.luxon.DateTime.fromISO(e)).isValid
      )
        return null;
      a.setLocale(n);
    } else
      t
        ? (Dt ||
            alert(
              "DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"
            ),
          (Dt = !0))
        : (a = new Date(e));
    return a;
  }
  function St(s) {
    return function (a, r, o, i) {
      0 === arguments.length
        ? ((o = "en"), (a = r = null))
        : 1 === arguments.length
        ? ((o = "en"), (r = a), (a = null))
        : 2 === arguments.length && ((o = r), (r = a), (a = null));
      var l = "datetime" + (r ? "-" + bt(r) : "");
      return (
        $.ext.type.order[l] ||
          $.type(l, {
            detect: function (e) {
              return e === l && l;
            },
            order: {
              pre: function (e) {
                return e.valueOf();
              },
            },
            className: "dt-right",
          }),
        function (e, t) {
          var n;
          return (
            null == e &&
              (e =
                "--now" === i
                  ? ((n = new Date()),
                    new Date(
                      Date.UTC(
                        n.getFullYear(),
                        n.getMonth(),
                        n.getDate(),
                        n.getHours(),
                        n.getMinutes(),
                        n.getSeconds()
                      )
                    ))
                  : ""),
            "type" === t
              ? l
              : "" === e
              ? "sort" !== t
                ? ""
                : xt("0000-01-01 00:00:00", null, o)
              : !(
                  null === r ||
                  a !== r ||
                  "sort" === t ||
                  "type" === t ||
                  e instanceof Date
                ) || null === (n = xt(e, a, o))
              ? e
              : "sort" === t
              ? n
              : ((e =
                  null === r
                    ? yt(n, "toDate", "toJSDate", "")[s]()
                    : yt(n, "format", "toFormat", "toISOString", r)),
                "display" === t ? u(e) : e)
          );
        }
      );
    };
  }
  var Tt = ",",
    wt = ".";
  if (void 0 !== q.Intl)
    try {
      for (
        var _t = new Intl.NumberFormat().formatToParts(100000.1), a = 0;
        a < _t.length;
        a++
      )
        "group" === _t[a].type
          ? (Tt = _t[a].value)
          : "decimal" === _t[a].type && (wt = _t[a].value);
    } catch (e) {}
  ($.datetime = function (n, a) {
    var r = "datetime-detect-" + bt(n);
    (a = a || "en"),
      $.ext.type.order[r] ||
        $.type(r, {
          detect: function (e) {
            var t = xt(e, n, a);
            return !("" !== e && !t) && r;
          },
          order: {
            pre: function (e) {
              return xt(e, n, a) || 0;
            },
          },
          className: "dt-right",
        });
  }),
    ($.render = {
      date: St("toLocaleDateString"),
      datetime: St("toLocaleString"),
      time: St("toLocaleTimeString"),
      number: function (r, o, i, l, s) {
        return (
          null == r && (r = Tt),
          null == o && (o = wt),
          {
            display: function (e) {
              if ("number" != typeof e && "string" != typeof e) return e;
              if ("" === e || null === e) return e;
              var t = e < 0 ? "-" : "",
                n = parseFloat(e),
                a = Math.abs(n);
              if (1e11 <= a || (a < 1e-4 && 0 !== a))
                return (
                  (a = n.toExponential(i).split(/e\+?/))[0] +
                  " x 10<sup>" +
                  a[1] +
                  "</sup>"
                );
              if (isNaN(n)) return u(e);
              (n = n.toFixed(i)), (e = Math.abs(n));
              (a = parseInt(e, 10)),
                (n = i ? o + (e - a).toFixed(i).substring(2) : "");
              return (
                (t = 0 === a && 0 === parseFloat(n) ? "" : t) +
                (l || "") +
                a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, r) +
                n +
                (s || "")
              );
            },
          }
        );
      },
      text: function () {
        return { display: u, filter: u };
      },
    });
  var i = $.ext.type,
    Ct =
      (($.type = function (a, e, t) {
        if (!e)
          return {
            className: i.className[a],
            detect: i.detect.find(function (e) {
              return e.name === a;
            }),
            order: {
              pre: i.order[a + "-pre"],
              asc: i.order[a + "-asc"],
              desc: i.order[a + "-desc"],
            },
            render: i.render[a],
            search: i.search[a],
          };
        function n(e, t) {
          i[e][a] = t;
        }
        function r(n) {
          function e(e, t) {
            return !0 === (e = n(e, t)) ? a : e;
          }
          Object.defineProperty(e, "name", { value: a });
          var t = i.detect.findIndex(function (e) {
            return e.name === a;
          });
          -1 === t ? i.detect.unshift(e) : i.detect.splice(t, 1, e);
        }
        function o(e) {
          (i.order[a + "-pre"] = e.pre),
            (i.order[a + "-asc"] = e.asc),
            (i.order[a + "-desc"] = e.desc);
        }
        void 0 === t && ((t = e), (e = null)),
          "className" === e
            ? n("className", t)
            : "detect" === e
            ? r(t)
            : "order" === e
            ? o(t)
            : "render" === e
            ? n("render", t)
            : "search" === e
            ? n("search", t)
            : e ||
              (t.className && n("className", t.className),
              void 0 !== t.detect && r(t.detect),
              t.order && o(t.order),
              void 0 !== t.render && n("render", t.render),
              void 0 !== t.search && n("search", t.search));
      }),
      ($.types = function () {
        return i.detect.map(function (e) {
          return e.name;
        });
      }),
      $.type("string", {
        detect: function () {
          return "string";
        },
        order: {
          pre: function (e) {
            return y(e)
              ? ""
              : "string" == typeof e
              ? e.toLowerCase()
              : e.toString
              ? e.toString()
              : "";
          },
        },
        search: ct(!1, !0),
      }),
      $.type("html", {
        detect: function (e) {
          return y(e) || ("string" == typeof e && -1 !== e.indexOf("<"))
            ? "html"
            : null;
        },
        order: {
          pre: function (e) {
            return y(e) ? "" : e.replace ? I(e).trim().toLowerCase() : e + "";
          },
        },
        search: ct(!0, !0),
      }),
      $.type("date", {
        className: "dt-type-date",
        detect: function (e) {
          var t;
          return (!e || e instanceof Date || L.test(e)) &&
            ((null !== (t = Date.parse(e)) && !isNaN(t)) || y(e))
            ? "date"
            : null;
        },
        order: {
          pre: function (e) {
            e = Date.parse(e);
            return isNaN(e) ? -1 / 0 : e;
          },
        },
      }),
      $.type("html-num-fmt", {
        className: "dt-type-numeric",
        detect: function (e, t) {
          t = t.oLanguage.sDecimal;
          return l(e, t, !0) ? "html-num-fmt" : null;
        },
        order: {
          pre: function (e, t) {
            t = t.oLanguage.sDecimal;
            return Ct(e, t, F, j);
          },
        },
        search: ct(!0, !0),
      }),
      $.type("html-num", {
        className: "dt-type-numeric",
        detect: function (e, t) {
          t = t.oLanguage.sDecimal;
          return l(e, t) ? "html-num" : null;
        },
        order: {
          pre: function (e, t) {
            t = t.oLanguage.sDecimal;
            return Ct(e, t, F);
          },
        },
        search: ct(!0, !0),
      }),
      $.type("num-fmt", {
        className: "dt-type-numeric",
        detect: function (e, t) {
          t = t.oLanguage.sDecimal;
          return o(e, t, !0) ? "num-fmt" : null;
        },
        order: {
          pre: function (e, t) {
            t = t.oLanguage.sDecimal;
            return Ct(e, t, j);
          },
        },
      }),
      $.type("num", {
        className: "dt-type-numeric",
        detect: function (e, t) {
          t = t.oLanguage.sDecimal;
          return o(e, t) ? "num" : null;
        },
        order: {
          pre: function (e, t) {
            t = t.oLanguage.sDecimal;
            return Ct(e, t);
          },
        },
      }),
      function (e, t, n, a) {
        var r;
        return 0 === e || (e && "-" !== e)
          ? "number" == (r = typeof e) || "bigint" == r
            ? e
            : +(e =
                (e = t ? P(e, t) : e).replace &&
                (n && (e = e.replace(n, "")), a)
                  ? e.replace(a, "")
                  : e)
          : -1 / 0;
      });
  B.extend(!0, $.ext.renderer, {
    footer: {
      _: function (e, t, n) {
        t.addClass(n.tfoot.cell);
      },
    },
    header: {
      _: function (d, f, h) {
        f.addClass(h.thead.cell), d.oFeatures.bSort || f.addClass(h.order.none);
        var e = d.bSortCellsTop,
          t = f.closest("thead").find("tr"),
          n = f.parent().index();
        "disable" === f.attr("data-dt-order") ||
          "disable" === f.parent().attr("data-dt-order") ||
          (!0 === e && 0 !== n) ||
          (!1 === e && n !== t.length - 1) ||
          B(d.nTable).on("order.dt.DT", function (e, t, n) {
            var a, r, o, i, l, s, u, c;
            d === t &&
              ((a = h.order),
              (c = t.api.columns(f)),
              (r = d.aoColumns[c.flatten()[0]]),
              (o = c.orderable().includes(!0)),
              (i = ""),
              (u = c.indexes()),
              (l = c.orderable(!0).flatten()),
              (s =
                "," +
                n
                  .map(function (e) {
                    return e.col;
                  })
                  .join(",") +
                ","),
              f
                .removeClass(a.isAsc + " " + a.isDesc)
                .toggleClass(a.none, !o)
                .toggleClass(a.canAsc, o && l.includes("asc"))
                .toggleClass(a.canDesc, o && l.includes("desc")),
              -1 !== (l = s.indexOf("," + u.toArray().join(",") + ",")) &&
                ((s = c.order()),
                f.addClass(
                  s.includes("asc")
                    ? a.isAsc
                    : "" + s.includes("desc")
                    ? a.isDesc
                    : ""
                )),
              0 === l
                ? ((u = n[0]),
                  (c = r.asSorting),
                  f.attr(
                    "aria-sort",
                    "asc" === u.dir ? "ascending" : "descending"
                  ),
                  (i = c[u.index + 1] ? "Reverse" : "Remove"))
                : f.removeAttr("aria-sort"),
              f.attr(
                "aria-label",
                o
                  ? r.ariaTitle + t.api.i18n("oAria.orderable" + i)
                  : r.ariaTitle
              ),
              o) &&
              (f.find(".dt-column-title").attr("role", "button"),
              f.attr("tabindex", 0));
          });
      },
    },
    layout: {
      _: function (e, t, n) {
        var a = B("<div/>").addClass("dt-layout-row").appendTo(t);
        B.each(n, function (e, t) {
          e = t.table ? "" : "dt-" + e + " ";
          t.table && a.addClass("dt-layout-table"),
            B("<div/>")
              .attr({
                id: t.id || null,
                class: "dt-layout-cell " + e + (t.className || ""),
              })
              .append(t.contents)
              .appendTo(a);
        });
      },
    },
  }),
    ($.feature = {}),
    ($.feature.register = function (e, t, n) {
      ($.ext.features[e] = t), n && C.feature.push({ cFeature: n, fnInit: t });
    }),
    $.feature.register(
      "info",
      function (e, s) {
        var t, n, u;
        return e.oFeatures.bInfo
          ? ((t = e.oLanguage),
            (n = e.sTableId),
            (u = B("<div/>", { class: e.oClasses.info.container })),
            (s = B.extend(
              {
                callback: t.fnInfoCallback,
                empty: t.sInfoEmpty,
                postfix: t.sInfoPostFix,
                search: t.sInfoFiltered,
                text: t.sInfo,
              },
              s
            )),
            e.aoDrawCallback.push(function (e) {
              var t = s,
                n = u,
                a = e._iDisplayStart + 1,
                r = e.fnDisplayEnd(),
                o = e.fnRecordsTotal(),
                i = e.fnRecordsDisplay(),
                l = i ? t.text : t.empty;
              i !== o && (l += " " + t.search),
                (l += t.postfix),
                (l = et(e, l)),
                t.callback &&
                  (l = t.callback.call(e.oInstance, e, a, r, o, i, l)),
                n.html(l),
                ee(e, null, "info", [e, n[0], l]);
            }),
            B("#" + n + "_info", e.nWrapper).length ||
              (u.attr({
                "aria-live": "polite",
                id: n + "_info",
                role: "status",
              }),
              B(e.nTable).attr("aria-describedby", n + "_info")),
            u)
          : null;
      },
      "i"
    );
  var It = 0;
  function At(e, t, n, a) {
    var r = e.oLanguage.oPaginate,
      o = { display: "", active: !1, disabled: !1 };
    switch (t) {
      case "ellipsis":
        (o.display = "&#x2026;"), (o.disabled = !0);
        break;
      case "first":
        (o.display = r.sFirst), 0 === n && (o.disabled = !0);
        break;
      case "previous":
        (o.display = r.sPrevious), 0 === n && (o.disabled = !0);
        break;
      case "next":
        (o.display = r.sNext), (0 !== a && n !== a - 1) || (o.disabled = !0);
        break;
      case "last":
        (o.display = r.sLast), (0 !== a && n !== a - 1) || (o.disabled = !0);
        break;
      default:
        "number" == typeof t &&
          ((o.display = e.fnFormatNumber(t + 1)), n === t) &&
          (o.active = !0);
    }
    return o;
  }
  function Ft(e, t, n) {
    var a = [],
      r = Math.floor(n / 2);
    return (
      t <= n
        ? (a = h(0, t))
        : 1 === n
        ? (a = [e])
        : 3 === n
        ? e <= 1
          ? (a = [0, 1, "ellipsis"])
          : t - 2 <= e
          ? (a = h(t - 2, t)).unshift("ellipsis")
          : (a = ["ellipsis", e, "ellipsis"])
        : e <= r
        ? (a = h(0, n - 2)).push("ellipsis", t - 1)
        : (t - 1 - r <= e
            ? (a = h(t - (n - 2), t))
            : ((a = h(e - r + 2, e + r - 1)).push("ellipsis", t - 1), a)
          ).unshift(0, "ellipsis"),
      a
    );
  }
  $.feature.register(
    "search",
    function (n, e) {
      var t, a, r, o, i, l, s, u, c, d;
      return n.oFeatures.bFilter
        ? ((t = n.oClasses.search),
          (a = n.sTableId),
          (c = n.oLanguage),
          (r = n.oPreviousSearch),
          (o = '<input type="search" class="' + t.input + '"/>'),
          -1 ===
            (e = B.extend(
              { placeholder: c.sSearchPlaceholder, text: c.sSearch },
              e
            )).text.indexOf("_INPUT_") && (e.text += "_INPUT_"),
          (e.text = et(n, e.text)),
          (c = e.text.match(/_INPUT_$/)),
          (s = e.text.match(/^_INPUT_/)),
          (i = e.text.replace(/_INPUT_/, "")),
          (l = "<label>" + e.text + "</label>"),
          s
            ? (l = "_INPUT_<label>" + i + "</label>")
            : c && (l = "<label>" + i + "</label>_INPUT_"),
          (s = B("<div>")
            .addClass(t.container)
            .append(l.replace(/_INPUT_/, o)))
            .find("label")
            .attr("for", "dt-search-" + It),
          s.find("input").attr("id", "dt-search-" + It),
          It++,
          (u = function (e) {
            var t = this.value;
            (r.return && "Enter" !== e.key) ||
              (t != r.search &&
                ((r.search = t), Le(n, r), (n._iDisplayStart = 0), S(n)));
          }),
          (c = null !== n.searchDelay ? n.searchDelay : 0),
          (d = B("input", s)
            .val(r.search)
            .attr("placeholder", e.placeholder)
            .on(
              "keyup.DT search.DT input.DT paste.DT cut.DT",
              c ? $.util.debounce(u, c) : u
            )
            .on("mouseup.DT", function (e) {
              setTimeout(function () {
                u.call(d[0], e);
              }, 10);
            })
            .on("keypress.DT", function (e) {
              if (13 == e.keyCode) return !1;
            })
            .attr("aria-controls", a)),
          B(n.nTable).on("search.dt.DT", function (e, t) {
            n === t &&
              d[0] !== _.activeElement &&
              d.val("function" != typeof r.search ? r.search : "");
          }),
          s)
        : null;
    },
    "f"
  ),
    $.feature.register(
      "paging",
      function (e, t) {
        if (!e.oFeatures.bPaginate) return null;
        t = B.extend(
          { numbers: $.ext.pager.numbers_length, type: e.sPaginationType },
          t
        );
        function n() {
          !(function e(t, n, a) {
            if (!t._bInitComplete) return;
            var r = $.ext.pager[a.type],
              o = t.oLanguage.oAria.paginate || {},
              i = t._iDisplayStart,
              l = t._iDisplayLength,
              s = t.fnRecordsDisplay(),
              u = -1 === l,
              c = u ? 0 : Math.ceil(i / l),
              d = u ? 1 : Math.ceil(s / l),
              f = r()
                .map(function (e) {
                  return "numbers" === e ? Ft(c, d, a.numbers) : e;
                })
                .flat();
            var h = [];
            for (var p = 0; p < f.length; p++) {
              var g = f[p],
                m = At(t, g, c, d),
                v = Ke(t, "pagingButton")(
                  t,
                  g,
                  m.display,
                  m.active,
                  m.disabled
                );
              B(v.clicker).attr({
                "aria-controls": t.sTableId,
                "aria-disabled": m.disabled ? "true" : null,
                "aria-current": m.active ? "page" : null,
                "aria-label": o[g],
                "data-dt-idx": g,
                tabIndex: m.disabled ? -1 : t.iTabIndex,
              }),
                "number" != typeof g && B(v.clicker).addClass(g),
                Ze(v.clicker, { action: g }, function (e) {
                  e.preventDefault(), Me(t, e.data.action, !0);
                }),
                h.push(v.display);
            }
            i = Ke(t, "pagingContainer")(t, h);
            u = n.find(_.activeElement).data("dt-idx");
            n.empty().append(i);
            void 0 !== u && n.find("[data-dt-idx=" + u + "]").trigger("focus");
            h.length &&
              1 < a.numbers &&
              B(n).height() >= 2 * B(h[0]).outerHeight() - 10 &&
              e(t, n, B.extend({}, a, { numbers: a.numbers - 2 }));
          })(e, a, t);
        }
        var a = B("<div/>").addClass(
          e.oClasses.paging.container + " paging_" + t.type
        );
        return (
          e.aoDrawCallback.push(n), B(e.nTable).on("column-sizing.dt.DT", n), a
        );
      },
      "p"
    );
  var Lt = 0;
  return (
    $.feature.register(
      "pageLength",
      function (a, e) {
        var t = a.oFeatures;
        if (!t.bPaginate || !t.bLengthChange) return null;
        e = B.extend({ menu: a.aLengthMenu, text: a.oLanguage.sLengthMenu }, e);
        var t = a.oClasses.length,
          n = a.sTableId,
          r = e.menu,
          o = [],
          i = [];
        if (Array.isArray(r[0])) (o = r[0]), (i = r[1]);
        else
          for (p = 0; p < r.length; p++)
            B.isPlainObject(r[p])
              ? (o.push(r[p].value), i.push(r[p].label))
              : (o.push(r[p]), i.push(r[p]));
        for (
          var l = e.text.match(/_MENU_$/),
            s = e.text.match(/^_MENU_/),
            u = e.text.replace(/_MENU_/, ""),
            e = "<label>" + e.text + "</label>",
            c =
              (s
                ? (e = "_MENU_<label>" + u + "</label>")
                : l && (e = "<label>" + u + "</label>_MENU_"),
              B("<div/>")
                .addClass(t.container)
                .append(e.replace("_MENU_", "<span></span>"))),
            d = [],
            f =
              (c.find("label")[0].childNodes.forEach(function (e) {
                e.nodeType === Node.TEXT_NODE &&
                  d.push({ el: e, text: e.textContent });
              }),
              function (t) {
                d.forEach(function (e) {
                  e.el.textContent = et(a, e.text, t);
                });
              }),
            h = B("<select/>", {
              name: n + "_length",
              "aria-controls": n,
              class: t.select,
            }),
            p = 0;
          p < o.length;
          p++
        )
          h[0][p] = new Option(
            "number" == typeof i[p] ? a.fnFormatNumber(i[p]) : i[p],
            o[p]
          );
        return (
          c.find("label").attr("for", "dt-length-" + Lt),
          h.attr("id", "dt-length-" + Lt),
          Lt++,
          c.find("span").replaceWith(h),
          B("select", c)
            .val(a._iDisplayLength)
            .on("change.DT", function () {
              Ee(a, B(this).val()), S(a);
            }),
          B(a.nTable).on("length.dt.DT", function (e, t, n) {
            a === t && (B("select", c).val(n), f(n));
          }),
          f(a._iDisplayLength),
          c
        );
      },
      "l"
    ),
    (((B.fn.dataTable = $).$ = B).fn.dataTableSettings = $.settings),
    (B.fn.dataTableExt = $.ext),
    (B.fn.DataTable = function (e) {
      return B(this).dataTable(e).api();
    }),
    B.each($, function (e, t) {
      B.fn.DataTable[e] = t;
    }),
    $
  );
});
