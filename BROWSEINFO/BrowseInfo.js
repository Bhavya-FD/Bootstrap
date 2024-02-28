let scroll =document.getElementById('cardId');
document.getElementById('cardId').classList.remove("scale-up-center")
scroll.addEventListener("scroll", () => {
    // let scroll = document.querySelectorAll('#cardId');
    document.getElementById('cardId').classList.add("scale-up-center")
});