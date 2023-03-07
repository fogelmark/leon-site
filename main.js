const hiddenIcons = document.querySelectorAll('.fa-brands')
const hiddenElements = document.querySelectorAll('.heading-3')
const scrolled = document.querySelectorAll('.scrolled')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
  console.log(entries);
}, { threshold: 1})

const buttonObserver = new IntersectionObserver(entries => {
  console.log(entries);
})

hiddenIcons.forEach(element => {
  observer.observe(element)
})

hiddenElements.forEach(element => {
  observer.observe(element)
})

scrolled.forEach(element => {
  observer.observe(element)
})