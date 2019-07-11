window.addEventListener('load', function(){

    let dlg=document.getElementById("dlg");
    let btnDlg=document.getElementById("btnDlg");
    let listBtnClose=document.querySelectorAll("[data-close]");

    for(let i=0;i<listBtnClose.length;i++){
        listBtnClose[i].onclick=function(){
            dlg.classList.add("hide");
        }
    }
    btnDlg.onclick=function(){
        dlg.classList.remove("hide");
    }
})