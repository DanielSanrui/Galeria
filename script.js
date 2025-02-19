document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("caption");
    const closeModal = document.querySelector(".close");

    modal.style.display = "none";
    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.getAttribute("data-full");
            caption.innerText = this.alt;
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});