const username = document.querySelector('.user-name');
const repoDesc = document.querySelector('.repo-desc');
const spotifyAppName = document.querySelector('.spotify-webapp-name')
const spotifyAppDesc = document.querySelector('.spotify-webapp-desc')
const airbnbAppName = document.querySelector('.airbnb-clone');
const homeBtn = document.querySelector('.home-button');
const homeTabText = document.querySelector('.home-tab');
const projectsBtn = document.querySelector('.projects-button');
const projectsTabText = document.querySelector('.projects-tab');
const techBtn = document.querySelector('.tech-button');
const techTabText = document.querySelector('.tech-tab');
const contactBtn = document.querySelector('.contact-button');
const contactTabText = document.querySelector('.contact-tab');

async function getInfo() {
    const API_LINK = 'https://api.github.com/users';

    const response = await fetch(`${API_LINK}/suXXVI`);
    const data = await response.json();
    const name = data.login
    console.log(name)

    localStorage.setItem('name', name)
    return data
};

async function getRepos() {
    const API_REPOS = 'https://api.github.com/users/suXXVI/repos'

    const response = await fetch(API_REPOS);
    const data = await response.json();
    // console.log(data)
    return data
};

async function displayInfo() {
    const storedName = localStorage.getItem('name');

    const repos = await getRepos();
    const spotifyWebApp = repos[3]
    // console.log(spotifyWebApp)
    
    username.textContent = storedName
    spotifyAppName.textContent = spotifyWebApp.name
    spotifyAppDesc.textContent = spotifyWebApp.description
        
};

window.addEventListener('load', () => {
    displayInfo()
    getInfo()
})