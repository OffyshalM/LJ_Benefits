const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})



function readMore() {
    const readMoreText = document.querySelector(".read-more");
    const readMoreBtn = document.querySelector("#readmore-btn");

    if (readMoreText.style.maxHeight === "0px" || !readMoreText.style.maxHeight) {
        readMoreText.style.maxHeight = readMoreText.scrollHeight + "px";
        readMoreBtn.innerHTML = "Read Less";
    } else {
        readMoreText.style.maxHeight = "0px";
        readMoreBtn.innerHTML = "Read More";
    }

}


// function click_nav(section) {
//     var target = document.getElementById("section");
//     target.scrollIntoView({ behavior: "smooth" })
// }


// document.getElementById("homeBtn").addEventListener("click", e => {
//     e.preventDefault();
//     click_nav("home_container")
// })

// document.getElementById("serviceBtn").addEventListener("click", e => {
//     e.preventDefault();
//     click_nav("service_container")
// })

// document.getElementById("contactBtn").addEventListener("click", e => {
//     e.preventDefault();
//     click_nav("contact_container")
// })

// document.getElementById("aboutBtn").addEventListener("click", e => {
//     e.preventDefault();
//     click_nav("about_container")
// })




function click_nav(section) {
    var target = document.getElementById(section);
    target.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("homeBtn").addEventListener("click", e => {
    e.preventDefault();
    click_nav("home_container");
});

document.getElementById("serviceBtn").addEventListener("click", e => {
    e.preventDefault();
    click_nav("service_container");
});

document.getElementById("contactBtn").addEventListener("click", e => {
    e.preventDefault();
    click_nav("contact_container");
});

document.getElementById("aboutBtn").addEventListener("click", e => {
    e.preventDefault();
    click_nav("about_container");
});
