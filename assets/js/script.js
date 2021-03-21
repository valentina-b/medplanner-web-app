document.addEventListener('DOMContentLoaded', function(event) {

    let navlinkArr = document.querySelectorAll(".navlink");
    let navlinkBorderDecorationArr = document.querySelectorAll(".navlink-div > .border-decoration");

    for (let i = 0; i < navlinkArr.length; i++) {
        const navlink = navlinkArr[i];
        navlink.addEventListener('mouseenter', () => {
            navlinkBorderDecorationArr[i].classList.add("border-decoration-hovered")
        });
        navlink.addEventListener('mouseleave', () => {
            navlinkBorderDecorationArr[i].classList.remove("border-decoration-hovered")
        })
        
    }

    let menuToggleButton = document.querySelector(".menu-show-hide-div");
    let menuToggleButtonImage = document.querySelector(".menu-show-hide-div > img");
    let menu = document.querySelector(".menu")
    let logo = document.querySelector(".logo-div")
    let menuDivContent = document.querySelector(".menu-div-content")
    let doctorName = document.querySelector(".doctor-name-p")
    let navlinkTextArr = document.querySelectorAll(".navlink-div");
    let navlinkIconArr = document.querySelectorAll(".navlink-icon")
    let navlinkGroupArr = document.querySelectorAll(".navlink-group")
    let main = document.querySelector("main")

    menuToggleButton.addEventListener('click', () => {
        menu.classList.toggle("menu-hide");
        logo.classList.toggle("menu-hide");
        menuToggleButtonImage.classList.toggle("rotate-180");
        doctorName.classList.toggle("doctor-name-p-collapsed");
        menuDivContent.classList.toggle("menu-div-content-collapsed");
        main.classList.toggle("main-collapsed")

        for (const navlinkText of navlinkTextArr) {
            navlinkText.classList.toggle("hide");
        }

        for (const navlinkIcon of navlinkIconArr) {
            navlinkIcon.classList.toggle("navlink-icon-collapsed");
        }

        for (const navlinkGroup of navlinkGroupArr) {
            navlinkGroup.classList.toggle("navlink-group-collapsed")
        }
        
    })


  })