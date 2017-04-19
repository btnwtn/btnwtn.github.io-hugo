const codeBlocks = document.querySelectorAll('pre code')

if (codeBlocks.length) {
  const script = document.createElement('script')
  script.src = '/js/vendor/prism.js'
  script.defer = true
  script.async = true
  document.head.appendChild(script)

  const css = document.createElement('link')
  css.rel = 'stylesheet'
  css.href = '/css/vendor/prism.css'
  document.head.appendChild(css)
}
