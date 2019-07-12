window.addEventListener('load', function(){
    //$(".data").load(fillTbl());

    // function setActive(){
    //     let parent=this.parentNode;
    //     alert(parent.nodeName);
    //     while(parent.nodeName!=="UL"){
    //         parent=parent.parentNode;
    //     }
    // }

    let el=this.document.querySelector("tbody");
    //this.alert(el.value);
    let base=['qwe','asd','zxc'];

    alert(1);
    this.fillTbl=function(){
        alert(2);
        let row=document.createElement("tr");
        if(base.length>0){
            for(let i=0;i<base.length;i++){
                row.innerHTML=
                `<td>1</td>
                <td>2</td>
                <td>3</td>`;
            }
        }
        data.appendChild(row);
    }
})