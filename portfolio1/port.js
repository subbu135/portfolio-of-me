document.querySelector(".cross").style.display = "none"; 
document.querySelector(".symbol").addEventListener("click", ()=>{
    document.querySelector(".one").classList.toggle("oneGo");
    if(document.querySelector(".one").classList.contains("oneGo")){
        document.querySelector(".threeline").style.display = "inline"
        document.querySelector(".cross").style.display = "none"
    }
    else{
        document.querySelector(".threeline").style.display = "none"
        setTimeout(()=>{
            document.querySelector(".cross").style.display = "inline"
        },555)
    }

}); 
