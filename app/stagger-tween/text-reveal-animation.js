const section = document.querySelector('section')

let tagShow = gsap.to('span', {
  opacity: 1,
  stagger: .2,
  duration: .3,
  paused: true
})

let tagReveal = gsap.to('.reveal', {
  scaleX: 1,
  stagger: .1,
  duration: .3,
  paused: true,
  transformOrigin: 'left',
  onComplete: () => {
    gsap.to('.reveal', {
      scaleX: 0,
      stagger: .1,
      duration: .3,
      ease: "power4.out",
      transformOrigin: 'right'
    })
  }
})

section.addEventListener('mouseenter', () => {
  tagShow.play()
  tagReveal.play()
})

section.addEventListener('mouseleave', () => {
  tagShow.reverse()
  tagReveal.reverse()
})