
let navbar = document.getElementById('nav-bar');
document.getElementById('icon').addEventListener('click', () => {
    navbar.classList.toggle("menu");
    if (serchbox.classList.toggle("searchbox") == true) {
        serchbox.classList.toggle("searchbox") = false;
    }
    // window.alert('Hello World');
    // console.log('hii')
})

let serchbox = document.getElementById('search-box');
document.getElementById('search').addEventListener('click', () => {
    serchbox.classList.toggle("searchbox");
    if (navbar.classList.toggle("menu") == true) {
        navbar.classList.toggle("menu") = false;
    }
    // window.alert('Hello World');
    // console.log('hii')
})


navbar.addEventListener('click', () => {

})

// if(navbar.style.right == '0px'){
//     console.log('Zero');
// }
// else{
//     console.log('Not zero');
// }