let btn = document.querySelector('.btn')
let sidebar = document.querySelector('.sidebar')

btn.addEventListener('click', () => {
sidebar.classList.add('active');
})


let cross = document.querySelector('.bi')

function closed (event) {    
    if
    (   event.target.classList.contains('sidebar') ||
        event.target.classList.contains("bi") 
    ) {
        sidebar.classList.remove("active");
    }
}

cross.addEventListener('click', closed)
sidebar.addEventListener('click', closed)