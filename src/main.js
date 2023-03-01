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

function menu_close(){
    document.getElementById("sidebar").style.display = "block"
    let i = -200
    let curve = 11
    let int = setInterval(()=>{
        if(i<=-260){
            document.getElementById("sidebar").style.left = -260
            clearInterval(int)
            return
        }
        document.getElementById("sidebar").style.left = i
        i-=curve
        if(curve>=0)
            curve-=.6
    },1)
}