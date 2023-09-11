/* ========================== theme light and dark mode =========================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
/* ========================== init dark mode and my colors! =========================== */
window.onload = function() {
    document.body.classList.toggle("dark");
    setActiveStyle('color-3');
    // while (true){
    //     for (let i = 0; i < 5; i++){
    //         await delay(5000);
    //         let victim = 'color-' + i; 
    //         setActiveStyle(victim);
    //     }  
    // }
}