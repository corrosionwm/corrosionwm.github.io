function menu_open(){
    document.getElementById("sidebar").style.display = "block"
    let i = document.getElementById("sidebar").clientWidth*-1
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
    let ww = document.getElementById("sidebar").clientWidth*-1
    let i = 0
    let curve = 11
    let int = setInterval(()=>{
        if(i<=ww){
            document.getElementById("sidebar").style.left = ww
            document.getElementById("sidebar").style.display = "none"
            clearInterval(int)
            return
        }
        document.getElementById("sidebar").style.left = i
        i-=curve
        if(curve>=7)
            curve-=.6
    },1)
}
