
const toggleBtn = document.querySelector(".hub")
const toggleBtnIcon = document.querySelector(".hub i")
const dropdownMenu = document.querySelector(".dropdown_menu")


        toggleBtn.onclick = () => {
            dropdownMenu.classList.toggle("open")
            const isOpen = dropdownMenu.classList.contains("open")


            toggleBtnIcon.classList = isOpen
            ? 'fa-sharp fa-solid fa-xmark'
            : 'fa-sharp fa-solid fa-bars'
        }