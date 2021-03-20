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


  })