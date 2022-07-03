console.log('main file')
let tur='x'
function alto(a){
    if (tur=='x'){
        console.log('you are in x');
        document.getElementById(a).innerHTML='x'
        tur='o'
    }
    else if (tur=='o'){
        console.log('you are in o');
        document.getElementById(a).innerHTML='o'
        tur='x'
    }
    else{
        alert('Game End')
        window.location.reload()
        console.log('something  wrong');
    }
winc()
}
// check win
function winc() {
    arr=[
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ] 
    arr.forEach(e => {
        zr=e[0]
        xr=e[1]
        cr=e[2]
        ct=document.getElementById(zr).innerHTML
        ct2=document.getElementById(xr).innerHTML
        ct3=document.getElementById(cr).innerHTML
        if (ct2==ct&&ct3==ct) {
            console.log('win',ct)
            console.log(ct,ct2,ct3);
            ans=ct
            // if (ct=='x'){
            //     document.getElementById('wier_0').style.fontsize = '20px';
            // }
            // else if(ct=='o'){
            //     document.getElementById('wier_x').style.fontsize='20px'
            // }
            patter=document.getElementById('img_done')
            patter.style.width='200px';
            // patter.innerHTML=ans
            winnerb=ans.concat( ' is winner')
            tt=document.querySelector('#done_massage')
            tt.style.display='inline'
            tt.innerHTML=winnerb
            tur='e'
            return ans
        }
    });
}
