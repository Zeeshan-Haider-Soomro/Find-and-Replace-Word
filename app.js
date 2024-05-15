function replaceWord(){
    let paragraph = document.querySelector("#paragraph")
    let find = document.querySelector("#find")
    let replace = document.querySelector("#replace")
    let update = document.querySelector("#update")
    let userpara = document.querySelector("#userpara")
    let replacedValued = paragraph.value.replaceAll(find.value, replace.value )
    userpara.innerText = paragraph.value
    update.innerText = replacedValued
}

