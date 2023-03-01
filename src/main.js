function menu_open(){
    document.getElementById("sidebar").style.display = "block"
    let i = -260
    let curve = 0
    let int = setInterval(()=>{
        if(i>=0){
            document.getElementById("sidebar").style.left = 0
            clearInterval(int)
            return
        }
        document.getElementById("sidebar").style.left = i
        i+=curve
        if(curve<=11)
            curve+=.6
    },1)
}