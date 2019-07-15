window.addEventListener('load',function(){
    
    let arr=new Array(3);
    for(let i=0;i<arr.length;i++){
        arr[i]={
            name:"qwe "+i,
            age:1,
            image:'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg',
            phone:'123'
        }
    }

    var listBtnUpdate=document.getElementsByClassName("updateRow");
    var listBtnDelete=document.getElementsByClassName("deleteRow");
    //var listCheckBox=document.getElementsByClassName("checkRow");

    //let Show=document.getElementById("btnShow");
    let bodyTable=document.getElementById("data");
    
    let showData=function(){
    //Show.onclick=function(){
        for(let i=0;i<arr.length;i++){
            let row=document.createElement("tr");
            row.innerHTML=
            //let tr=
            `<td>
                    <input class="form-control checkRow" type="checkbox">
            </td>
            <td>
                <img class="thumbnail"
                src="${arr[i].image}" alt="">
            </td>
            <td>${arr[i].name}</td>
            <td>${arr[i].phone}</td>
            <td>
                <button class="btn btn-warning updateRow">Update</button>
                <button class="btn btn-danger deleteRow">Delete</button>
            </td>`;
            bodyTable.appendChild(row);

        }
        for(let i=0;i<listBtnUpdate.length;i++){
            listBtnUpdate[i].onclick=updateRow;
        }
        for(let i=0;i<listBtnDelete.length;i++){
            listBtnDelete[i].onclick=deleteRow;
        }
    }

    for(let i=0;i<listBtnUpdate.length;i++){
        listBtnUpdate[i].onclick=updateRow;
    }
    for(let i=0;i<listBtnDelete.length;i++){
        listBtnDelete[i].onclick=deleteRow;
    }
    //select_all.onclick=selectAll;
    //add_row.onclick=addRow;
    
    function updateRow(){
        let qwe=updRow.getElementById("inputName");
        // alert(qwe);
        updRow.classList.remove("hide");

        let listBtnSuccess=document.querySelectorAll("[data-success]");
        let listBtnClose=document.querySelectorAll("[data-close]");

        for(let i=0;i<listBtnSuccess.length;i++){
            listBtnSuccess[i].onclick=function upd(){
                updRow.classList.add("hide");
                dlgPrgs.classList.remove("hide");
                setTimeout(function(){
                    dlgPrgs.classList.add("hide");
                    notify.classList.remove("hide");
                },3000);
                setTimeout(function(){notify.classList.add("hide")},4000);
            }
        }
        for(let i=0;i<listBtnClose.length;i++){
            listBtnClose[i].onclick=function(){
                updRow.classList.add("hide");
            }
        }

        let parent=this.parentNode;
        while(parent.nodeName!=="TR"){
            parent=parent.parentNode;
        }
        var oldImg=parent.children[1].querySelector("img");
         //oldImg.setAttribute("src", prompt("new photo",oldImg.getAttribute("src")));
        // parent.children[2].innerHTML=prompt("new name",parent.children[2].innerHTML);
        // parent.children[3].innerHTML=prompt("new phone",parent.children[3].innerHTML);

        
    }
    function deleteRow(){
        let parent=this.parentNode;
        while(parent.nodeName!=="TR"){
            parent=parent.parentNode;
        }
        parent.remove();
    }
    // function addRow(){
    //     var addNewRow=document.createElement("tr");
    //     addNewRow.innerHTML=
    //     `<td>
    //     <input class="form-control checkRow" type="checkbox">
    //     </td>
    //     <td>
    //     <img class="thumbnail"
    //     src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" alt="">
    //     </td>
    //     <td>qwe</td>
    //     <td>123</td>
    //     <td>
    //     <button class="btn btn-warning updateRow">Update</button>
    //     <button class="btn btn-danger deleteRow">Delete</button>
    //     </td>`;
    //     // photo.value=null;
    //     // addName.value=null;
    //     // phone.value=null;
    //     data.appendChild(addNewRow);
    //     for(let i=0;i<listBtnUpdate.length;i++){
    //         listBtnUpdate[i].onclick=updateRow;
    //     }
    //     for(let i=0;i<listBtnDelete.length;i++){
    //         listBtnDelete[i].onclick=deleteRow;
    //     }
    //     alert("add row");
    // }

    btnShow.onclick=function(){
        dlgPrgs.classList.remove("hide");
        setTimeout(function(){
            dlgPrgs.classList.add("hide");
            showData();
            notify.classList.remove("hide");
        },2000);
        setTimeout(function(){notify.classList.add("hide")},3500);
    }
});