var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 89,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-K5URGYRI.css";

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.jsx
var import_react2 = require("@remix-run/react");

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navegacion() {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: "Inicio"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 7,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: "Nosotros"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/guitarras",
        className: location.pathname === "/guitarras" ? "active" : "",
        children: "Tienda"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/blog",
        className: location.pathname === "/blog" ? "active" : "",
        children: "blog"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 19,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/carrito",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: carrito_default, alt: "carrito de compras" }, void 0, !1, {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 23,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "logo", src: logo_default, alt: "Imagen logo" }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var header_default = Header;

// app/components/footer.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "copyrigth", children: [
      "Todos los derechos reservados ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { name: "viewport", content: "width=device-width,initial-scale=1" }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function App() {
  let carritoLS = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null, [carrito, setCarrito] = (0, import_react4.useState)(carritoLS);
  return (0, import_react4.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react5.Outlet,
    {
      context: {
        agregarCarrito: (guitarra) => {
          if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
            setCarrito(carritoActualizado);
          } else
            setCarrito([...carrito, guitarra]);
        },
        carrito,
        actualizarCantidad: (guitarra) => {
          let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
          setCarrito(carritoActualizado);
        },
        eliminarGuitarra: (id) => {
          let carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id);
          setCarrito(carritoActualizado);
        }
      }
    },
    void 0,
    !1,
    {
      fileName: "app/root.jsx",
      lineNumber: 97,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { leng: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 113,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 114,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 119,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 120,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 121,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 116,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react5.useRouteError)();
  if ((0, import_react5.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
        error.status,
        " ",
        error.statusText
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 136,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "/", className: "error-enlace", children: "Tal vez quieras volver a la p\xE1gina principal" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 137,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 135,
      columnNumber: 7
    }, this);
}

// app/routes/guitarras.$guitarraUrl.jsx
var guitarras_guitarraUrl_exports = {};
__export(guitarras_guitarraUrl_exports, {
  default: () => guitarras_guitarraUrl_default,
  loader: () => loader,
  meta: () => meta2
});
var import_react6 = require("react"), import_react7 = require("@remix-run/react");

// app/models/guitarras.server.js
async function getGuitarras() {
  return await (await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)).json();
}
async function getGuitarra(url) {
  return await (await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)).json();
}

// app/routes/guitarras.$guitarraUrl.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function loader({ params }) {
  let { guitarraUrl } = params, guitarra = await getGuitarra(guitarraUrl);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No Econtrada"
    });
  return guitarra;
}
function meta2(data) {
  return data ? [
    {
      title: `GuitarLA - ${data.data.data[0].attributes.nombre}`
    },
    {
      description: `Guitarras, venta de guitarras, guitarra ${data.data.data[0].attributes.nombre}`
    }
  ] : [
    {
      title: "Guitarra No econtrada"
    },
    {
      description: "Guitarras, venta de guitarras, guitarra no encontrada"
    }
  ];
}
function Guitarra() {
  let { agregarCarrito } = (0, import_react7.useOutletContext)(), [cantidad, setCantidad] = (0, import_react6.useState)(0), guitarra = (0, import_react7.useLoaderData)(), { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes, handleSubmit = (e) => {
    if (e.preventDefault(), cantidad < 1) {
      alert("Debes elegir una cantidad");
      return;
    }
    let guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    };
    agregarCarrito(guitarraSeleccionada);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: imagen.data.attributes.url, alt: `Imagen de la guitarra ${nombre}`, className: "imagen" }, void 0, !1, {
      fileName: "app/routes/guitarras.$guitarraUrl.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, !1, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, !0, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "form",
        {
          className: "formulario",
          onSubmit: handleSubmit,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "cantidad", children: "Cantidad" }, void 0, !1, {
              fileName: "app/routes/guitarras.$guitarraUrl.jsx",
              lineNumber: 79,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "select",
              {
                id: "cantidad",
                onChange: (e) => {
                  setCantidad(+e.target.value);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "0", children: "-- Seleccione --" }, void 0, !1, {
                    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                    lineNumber: 87,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                    lineNumber: 88,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                    lineNumber: 89,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                    lineNumber: 90,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "4", children: "4" }, void 0, !1, {
                    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                    lineNumber: 91,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "5", children: "5" }, void 0, !1, {
                    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                    lineNumber: 92,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                lineNumber: 81,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "submit", value: "Agregar al carrito" }, void 0, !1, {
              fileName: "app/routes/guitarras.$guitarraUrl.jsx",
              lineNumber: 95,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/guitarras.$guitarraUrl.jsx",
          lineNumber: 75,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/guitarras.$guitarraUrl.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
var guitarras_guitarraUrl_default = Guitarra;

// app/routes/guitarras._index.jsx
var guitarras_index_exports = {};
__export(guitarras_index_exports, {
  default: () => guitarras_index_default,
  loader: () => loader2,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Guitarra2({ guitarra }) {
  let { descripcion, imagen, precio, url, nombre } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: imagen.data.attributes.formats.medium.url, alt: `Imagen guitarra ${nombre}` }, void 0, !1, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 10,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 11,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, !0, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "enlace", to: `/guitarras/${url}`, children: "Ver Producto" }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 13,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/components/listadoGuitarras.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function listadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "heading", children: "Nuestra Colecci\xF3n" }, void 0, !1, {
      fileName: "app/components/listadoGuitarras.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Guitarra2, { guitarra: guitarra == null ? void 0 : guitarra.attributes }, guitarra == null ? void 0 : guitarra.id, !1, {
      fileName: "app/components/listadoGuitarras.jsx",
      lineNumber: 10,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/components/listadoGuitarras.jsx",
      lineNumber: 8,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listadoGuitarras.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/guitarras._index.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader2() {
  return (await getGuitarras()).data;
}
function meta3() {
  return [
    {
      title: "GuitarLA - Tienda de Guitarras"
    },
    {
      description: "GuitarLA - Nuestra colecci\xF3n de guitarras"
    }
  ];
}
function Tienda() {
  let guitarras = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(listadoGuitarras, { guitarras }, void 0, !1, {
    fileName: "app/routes/guitarras._index.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var guitarras_index_default = Tienda;

// app/routes/blog.$postUrl.jsx
var blog_postUrl_exports = {};
__export(blog_postUrl_exports, {
  default: () => Post,
  loader: () => loader3,
  meta: () => meta4
});
var import_react10 = require("@remix-run/react");

// app/models/post.server.js
async function getPosts() {
  return await (await fetch(`${process.env.API_URL}/posts?populate=imagen`)).json();
}
async function getPost(url) {
  return await (await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)).json();
}

// app/utils/helpers.js
function formatearFecha(fecha) {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-Es", opciones);
}

// app/routes/blog.$postUrl.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader3({ params }) {
  let { postUrl } = params, post = await getPost(postUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada"
    });
  return post;
}
function meta4(data) {
  return [
    {
      title: `GuitarLA - ${data.data.data[0].attributes.titulo}`
    },
    {
      description: `Guitarras, venta de guitarras, entrada ${data.data.data[0].attributes.titulo}`
    }
  ];
}
function Post() {
  var _a;
  let post = (0, import_react10.useLoaderData)(), { titulo, contenido, imagen, publishedAt } = (_a = post == null ? void 0 : post.data[0]) == null ? void 0 : _a.attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("article", { className: "post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: imagen.data.attributes.url, className: "imagen", alt: `imagen blog ${titulo}` }, void 0, !1, {
      fileName: "app/routes/blog.$postUrl.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { children: titulo }, void 0, !1, {
        fileName: "app/routes/blog.$postUrl.jsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/routes/blog.$postUrl.jsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/routes/blog.$postUrl.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog.$postUrl.jsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.$postUrl.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/blog._index.jsx
var blog_index_exports = {};
__export(blog_index_exports, {
  default: () => blog_index_default,
  loader: () => loader4,
  meta: () => meta5
});
var import_react_router_dom = require("react-router-dom");

// app/components/post.jsx
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Post2({ post }) {
  let { titulo, contenido, imagen, url, publishedAt } = post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: imagen.data.attributes.formats.small.url, className: "imagen", alt: `imagen blog ${titulo}` }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { children: titulo }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 11,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "resumen", children: contenido }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { className: "enlace", to: `/blog/${url}`, children: "Leer Post" }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/post.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/components/listadoPosts.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function listadoGuitarras2({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "heading", children: "Blog" }, void 0, !1, {
      fileName: "app/components/listadoPosts.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "blog", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Post2, { post: post.attributes }, post.id, !1, {
      fileName: "app/components/listadoPosts.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/listadoPosts.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listadoPosts.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/blog._index.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
async function loader4() {
  return (await getPosts()).data;
}
function meta5() {
  return [
    {
      title: "GuitarLA - Nuestro Blog"
    },
    {
      description: "GuitarLA, Blog de m\xFAsica y venta de guitarras"
    }
  ];
}
function Blog() {
  let posts = (0, import_react_router_dom.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(listadoGuitarras2, { posts }, void 0, !1, {
    fileName: "app/routes/blog._index.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var blog_index_default = Blog;

// app/routes/guitarras.jsx
var guitarras_exports = {};
__export(guitarras_exports, {
  default: () => guitarras_default2,
  links: () => links2
});
var import_react12 = require("@remix-run/react");

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-PP25O3RU.css";

// app/routes/guitarras.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function links2() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
function Tienda2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react12.Outlet, { context: (0, import_react12.useOutletContext)() }, void 0, !1, {
    fileName: "app/routes/guitarras.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/guitarras.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var guitarras_default2 = Tienda2;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links3,
  meta: () => meta6
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-NEKAOWKX.css";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function meta6() {
  return [
    {
      title: "GuitarLA - Sobre Nosotros"
    },
    {
      description: "Venta de Guitarras"
    }
  ];
}
function links3() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "image"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "heading", children: "Nosotros" }, void 0, !1, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { src: nosotros_default, alt: "imagen sobre nosotros" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero saepe animi molestias nemo et maxime itaque consequuntur culpa quis commodi quasi vitae, corrupti quisquam illum accusamus voluptatum, soluta dolor?" }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita possimus voluptate quidem repudiandae perspiciatis veritatis? Facilis asperiores natus earum ipsum, eligendi vel quas, doloribus consectetur ipsam voluptates sit sed." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
var nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => Carrito,
  links: () => links4,
  meta: () => meta7
});
var import_react13 = require("react"), import_react14 = require("@remix-run/react"), import_remix_utils = require("remix-utils");

// app/styles/carrito.css
var carrito_default2 = "/build/_assets/carrito-VBNRNAWH.css";

// app/routes/carrito.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function links4() {
  return [
    {
      rel: "stylesheet",
      href: carrito_default2
    }
  ];
}
function meta7() {
  return [
    {
      title: "GuitarLA - Carrito de Compras",
      description: "Venta de guitarras, m\xFAsica, blog, carrito de compras, tienda"
    }
  ];
}
function Carrito() {
  let [total, setTotal] = (0, import_react13.useState)(0), { carrito, actualizarCantidad, eliminarGuitarra } = (0, import_react14.useOutletContext)();
  return (0, import_react13.useEffect)(() => {
    let calculoTotal = carrito.reduce((total2, producto) => total2 + producto.cantidad * producto.precio, 0);
    setTotal(calculoTotal);
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_remix_utils.ClientOnly, { fallback: "cargando...", children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "heading", children: "Carrito de Compras" }, void 0, !1, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "carrito", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: "Articulos" }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        (carrito == null ? void 0 : carrito.length) === 0 ? "Carrito Vacio" : carrito == null ? void 0 : carrito.map(
          (producto) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "producto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { src: producto.imagen, alt: `Imagen del producto ${producto.nombre}` }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 45,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 44,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "nombre", children: producto.nombre }, void 0, !1, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 48,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
                "Cantidad: ",
                producto.cantidad
              ] }, void 0, !0, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 49,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "select",
                {
                  className: "select",
                  value: producto.cantidad,
                  onChange: (e) => actualizarCantidad({
                    cantidad: +e.target.value,
                    id: producto.id
                  }),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 59,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 60,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 61,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "4", children: "4" }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 62,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "5", children: "5" }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 63,
                      columnNumber: 25
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 51,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "precio", children: [
                "$ ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { children: producto.precio }, void 0, !1, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 66,
                  columnNumber: 47
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 66,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "subtotal", children: [
                "Subtotal: $",
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { children: producto.cantidad * producto.precio }, void 0, !1, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 67,
                  columnNumber: 58
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 67,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "btn-eliminar",
                  onClick: () => {
                    eliminarGuitarra(producto.id);
                  },
                  children: "X"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 69,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 47,
              columnNumber: 21
            }, this)
          ] }, producto.id, !0, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 43,
            columnNumber: 13
          }, this)
        )
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { children: "Resumen del Pedido" }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
          "Total a pagar: $",
          total
        ] }, void 0, !0, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 83,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 81,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 38,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  links: () => links5,
  loader: () => loader5,
  meta: () => meta8
});
var import_react_router_dom2 = require("react-router-dom");

// app/models/curso.server.js
async function getCurso() {
  return await (await fetch(`${process.env.API_URL}/curso?populate=imagen`)).json();
}

// app/components/curso.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Curso({ curso }) {
  let { titulo, imagen, contenido } = curso;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("style", { jsx: "true", children: `
                .curso {
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)),url(${imagen.data.attributes.url});
                }
            ` }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "heading", children: titulo }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 13,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 14,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/curso.jsx",
      lineNumber: 12,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/curso.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/styles/curso.css
var curso_default = "/build/_assets/curso-OIP4QQUT.css";

// app/styles/blog.css
var blog_default = "/build/_assets/blog-OGEHHWA5.css";

// app/routes/_index.jsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function meta8() {
}
function links5() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    },
    {
      rel: "stylesheet",
      href: curso_default
    },
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
async function loader5() {
  let [guitarras, posts, curso] = await Promise.all(
    [
      getGuitarras(),
      getPosts(),
      getCurso()
    ]
  );
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}
function Index() {
  let { guitarras, posts, curso } = (0, import_react_router_dom2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(listadoGuitarras, { guitarras }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Curso, { curso: curso.attributes }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(listadoGuitarras2, { posts }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
var index_default = Index;

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default2,
  links: () => links6
});
var import_react_router_dom3 = require("react-router-dom");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function links6() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function Blog2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react_router_dom3.Outlet, {}, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-JE7GWV2G.js", imports: ["/build/_shared/chunk-UHX6T4TK.js", "/build/_shared/chunk-BKPHCLG2.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-G4SHELUO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-OYNZBW4I.js", imports: ["/build/_shared/chunk-IFX77NIZ.js", "/build/_shared/chunk-SEEDW2QI.js", "/build/_shared/chunk-6D5GWV7I.js", "/build/_shared/chunk-FK4AP6AO.js", "/build/_shared/chunk-P2DKNF6A.js", "/build/_shared/chunk-ZC7YKLEE.js", "/build/_shared/chunk-RHVQNJZN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-ATDGWW2X.js", imports: ["/build/_shared/chunk-IFX77NIZ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog.$postUrl": { id: "routes/blog.$postUrl", parentId: "routes/blog", path: ":postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/blog.$postUrl-YXKEDIWO.js", imports: ["/build/_shared/chunk-FK4AP6AO.js", "/build/_shared/chunk-ZC7YKLEE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog._index": { id: "routes/blog._index", parentId: "routes/blog", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/blog._index-BDBKCHUD.js", imports: ["/build/_shared/chunk-P2DKNF6A.js", "/build/_shared/chunk-ZC7YKLEE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-OOLIG2AR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras": { id: "routes/guitarras", parentId: "root", path: "guitarras", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras-T3KAUIHY.js", imports: ["/build/_shared/chunk-RHVQNJZN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras.$guitarraUrl": { id: "routes/guitarras.$guitarraUrl", parentId: "routes/guitarras", path: ":guitarraUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras.$guitarraUrl-5Y5YTYUN.js", imports: ["/build/_shared/chunk-6D5GWV7I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras._index": { id: "routes/guitarras._index", parentId: "routes/guitarras", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/guitarras._index-4NG7OVUL.js", imports: ["/build/_shared/chunk-SEEDW2QI.js", "/build/_shared/chunk-6D5GWV7I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-5NX5S7BX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "9d746383", hmr: void 0, url: "/build/manifest-9D746383.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras.$guitarraUrl": {
    id: "routes/guitarras.$guitarraUrl",
    parentId: "routes/guitarras",
    path: ":guitarraUrl",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_guitarraUrl_exports
  },
  "routes/guitarras._index": {
    id: "routes/guitarras._index",
    parentId: "routes/guitarras",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: guitarras_index_exports
  },
  "routes/blog.$postUrl": {
    id: "routes/blog.$postUrl",
    parentId: "routes/blog",
    path: ":postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: blog_postUrl_exports
  },
  "routes/blog._index": {
    id: "routes/blog._index",
    parentId: "routes/blog",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: blog_index_exports
  },
  "routes/guitarras": {
    id: "routes/guitarras",
    parentId: "root",
    path: "guitarras",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
