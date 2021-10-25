
const userSearch = document.querySelector('.user-input');
const searchButton = document.querySelector('.search-button');

// Things we are going to update

let fullName = document.querySelector('.full-name');
let userName = document.querySelector('.user-name');
let dateJoined = document.querySelector('.date');
let userBio = document.querySelector('.user-bio');

searchButton.addEventListener('click', async function (e) {
    e.preventDefault();
    console.log(userSearch)

    // const res = await axios.get(`https://api.github.com/users/${userSearch.value}`)
    // userName.innerText = `@${res.data.login}`
    
})