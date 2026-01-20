function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/nefor family в TikTok-fotor-20260118192910.png",
    )
  } else {
    img.setAttribute(
      "src",
      "./assets/WhatsApp Image 2026-01-15 at 23.14.02-fotor-20260115231728.png",
    )
  }

  // e tiver light, trocar a imagem
  // se nao tiver, manter a imagem padrao
}
