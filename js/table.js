window.onload=function(){
    var checkAll=false;
    var listBtnUpdate=document.getElementsByClassName("updateRow");
    var listBtnDelete=document.getElementsByClassName("deleteRow");
    var listCheckBox=document.getElementsByClassName("checkRow");

    for(let i=0;i<listBtnUpdate.length;i++){
        listBtnUpdate[i].onclick=updateRow;
    }
    for(let i=0;i<listBtnDelete.length;i++){
        listBtnDelete[i].onclick=deleteRow;
    }
    select_all.onclick=selectAll;
    add_row.onclick=addRow;
    delete_select.onclick=deleteSelect;
    
    function updateRow(){
        alert("update");
        let parent=this.parentNode;
        while(parent.nodeName!=="TR"){
            parent=parent.nodeName;
        }
        prompt("new photo",parent);
        prompt("new name","no name");
        prompt("new phone","no phone");
    }
    function deleteRow(){
        let parent=this.parentNode;
        while(parent.nodeName!=="TR"){
            parent=parent.parentNode;
        }
        parent.remove();
    }
    function addRow(){
        var addNewRow=document.createElement("tr");
        addNewRow.innerHTML=
        `<td>
            <input class="form-control checkRow" type="checkbox">
        </td>
        <td>
            <img class="thumbnail" src="${document.getElementById("photo").value}" alt="">
        </td>
        <td>${document.getElementById("addName").value}</td>
        <td>${document.getElementById("phone").value}</td>
        <td>
            <button class="btn btn-warning updateRow">Update</button>
            <button class="btn btn-danger deleteRow">Delete</button>
        </td>`;
        photo.value=null;
        addName.value=null;
        phone.value=null;
        data.insertBefore(addNewRow,data.firstChild);
        for(let i=0;i<listBtnUpdate.length;i++){
            listBtnUpdate[i].onclick=updateRow;
        }
        for(let i=0;i<listBtnDelete.length;i++){
            listBtnDelete[i].onclick=deleteRow;
        }
        alert("add row");
    }
    function selectAll(){
        if(checkAll==false){
            alert("select all");
            for(let i=0;i<listCheckBox.length;i++){
                listCheckBox[i].checked=true;
            }
            checkAll=true;
        }
        else{
            alert("de-select all");
            for(let i=0;i<listCheckBox.length;i++){
                listCheckBox[i].checked=false;
            }
            checkAll=false;
        }
    }
    function deleteSelect(){
        for(let i=0; i<listCheckBox.length;i++){
            while(listCheckBox[i].checked==true){
                let parent=listCheckBox[i].parentNode;
                while(parent.nodeName!=="TR"){
                    parent=parent.parentNode;
                }
                parent.remove();
            }
        }
        alert("delete selected");
    }
}