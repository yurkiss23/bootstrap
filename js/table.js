window.onload=function(){
    var listBtnUpdate=document.getElementsByClassName("updateRow");
    var listBtnDelete=document.getElementsByClassName("deleteRow");

    for(let i=0;i<listBtnUpdate.length;i++){
        listBtnUpdate[i].onclick=updateRow;
    }
    for(let i=0;i<listBtnDelete.length;i++){
        listBtnDelete[i].onclick=deleteRow;
    }
    add_row.onclick=addRow;
    select_all.onclick=selectAll;
    delete_select.onclick=deleteSelect;

    function updateRow(){
        alert("update");
    }
    function deleteRow(){
        alert("delete");
    }
    function addRow(){
        alert("add");
    }
    function selectAll(){
        alert("all");
    }
    function deleteSelect(){
        alert("delete selected");
    }
}