const btn = document.querySelector('.btn');
const dashboard = document.querySelector('.dashboard');

btn.addEventListener('click', () => {
    dashboard.classList.toggle("show-dashboard");
})

