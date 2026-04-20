const CLARITY_PROJECT_ID = "wdc0n9r5tf"

function initializeClarity() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return
  }

  if (window.__clarityInitialized) {
    return
  }

  ;(function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        ;(c[a].q = c[a].q || []).push(arguments)
      }
    t = l.createElement(r)
    t.async = 1
    t.src = "https://www.clarity.ms/tag/" + i
    y = l.getElementsByTagName(r)[0]
    y.parentNode.insertBefore(t, y)
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID)

  window.__clarityInitialized = true
}

initializeClarity()

export {}
