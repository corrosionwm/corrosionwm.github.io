function main(){
    let sidebar = Array.from(document.getElementById("sidebar-content").children)
    for(let x in sidebar){
        sidebar[x].onmouseover = () =>{
            sidebar[x].onmouseout = () =>{
                sidebar[x].style.backgroundColor="rgba(0,0,0,0)"
                for(let z of sidebar[x].children){
                    if(z.className=="sidebar-item-bar"){
                        z.remove()
                    }
                }
            }
            console.log(sidebar[x])
            sidebar[x].style.backgroundColor="var(--highlight-1-rgba)"
            sidebar[x].innerHTML = '<div style="height:'+sidebar[x].clientHeight+';margin-top:-3px;" class="sidebar-item-bar"></div>'
                + sidebar[x].innerHTML
        }
    }
}

function menu_open(){
    document.getElementById("sidebar").style.display = "block"
    document.getElementById("sidebar").style.left = document.getElementById("sidebar").clientWidth*-1
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
    let curve = 0
    let int = setInterval(()=>{
        if(i<=ww){
            document.getElementById("sidebar").style.left = ww
            document.getElementById("sidebar").style.display = "none"
            clearInterval(int)
            return
        }
        document.getElementById("sidebar").style.left = i
        i-=curve
        if(curve<=11)
            curve+=.6
    },1)
}
