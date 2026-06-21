function setupReveal(el, options = {}) {
  const {
    delay = 0,
    stagger = false,
    interval = 100,
    threshold = 0.08,
    rootMargin = '0px 0px -20px 0px',
    direction = 'up',
  } = options || {}

  const cls = direction === 'right' ? 'reveal-from-right' : 'reveal'

  if (stagger) {
    Array.from(el.children).forEach((child, i) => {
      child.classList.add(cls)
      child.style.transitionDelay = (delay + i * interval) + 'ms'
    })
  } else {
    el.classList.add(cls)
    if (delay) el.style.transitionDelay = delay + 'ms'
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      if (stagger) {
        Array.from(entry.target.children).forEach(c => c.classList.add('is-visible'))
      } else {
        entry.target.classList.add('is-visible')
      }
      observer.unobserve(entry.target)
    })
  }, { threshold, rootMargin })

  observer.observe(el)
}

export const vReveal = {
  mounted(el, binding) {
    setupReveal(el, binding.value)
  },
}
