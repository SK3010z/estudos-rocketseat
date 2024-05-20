function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")
    
    // pegar a tag img 
    const profile = document.querySelector("#profile img")

    // substituir a imagem 
    if(html.classList.contains("light")){
        // se tiver light mode, adicionar a imagem light
        profile.setAttribute("src","./assets/avatar-light.png")
        profile.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos escutos, casaco e blusa preta e fundo roxo e azul")
    } else{
        // se tiver sem light mode, adicionar a imagem normal
        profile.setAttribute("src","./assets/avatar.png")
        profile.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos, casaco e blusa preta e fundo roxo e azul")
    }

}