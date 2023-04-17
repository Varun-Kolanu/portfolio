function MobileButton()
{
    const reset = document.getElementById("reset");
    reset.addEventListener("touchstart",()=>
    {
        reset.classList.remove("bg-transparent","border-white");
        reset.classList.add("bg-pink-500","shadow-red-600", "shadow-lg","border-none");
    })
    reset.addEventListener("touchend",()=>
    {
        setTimeout(()=>
        {
            reset.classList.remove("bg-pink-500","shadow-red-600", "shadow-lg","border-none");
        reset.classList.add("bg-transparent", "border-white");
        },1000)
        
    })
    
}

export default MobileButton