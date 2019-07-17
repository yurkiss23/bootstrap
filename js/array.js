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
    let listBtnSuccess=document.querySelectorAll("[data-success]");
    let listBtnClose=document.querySelectorAll("[data-close]");
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
    
    function updateRow(){
        let newName=document.getElementById("inputName");
        let newPhn=document.getElementById("inputPhn");
        
        let parent=this.parentNode;
        while(parent.nodeName!=="TR"){
            parent=parent.parentNode;
        }
        var oldImg=parent.children[1].querySelector("img");
        newImg.setAttribute("src", oldImg.getAttribute("src"));
        
        newName.value=parent.children[2].innerHTML;
        newPhn.value=parent.children[3].innerHTML;
        
        updRow.classList.remove("hide");
        document.getElementById("inputPht").onchange=function(){
            //let newImg=curImg.cloneNode(true);
            
            newImg.setAttribute("src", window.URL.createObjectURL(this.files[0]));
            alert(newImg);

        }
        
        const cropper=new Cropper(newImg,{
            aspectRatio: 1/1,
        });
        cropper.getCroppedCanvas();

        cropper.getCroppedCanvas({
            width: 160,
            height: 90,
            minWidth: 256,
            minHeight: 256,
            maxWidth: 4096,
            maxHeight: 4096,
            fillColor: '#fff',
            imageSmoothingEnabled: false,
            imageSmoothingQuality: 'high',
        });
        // document.getElementById("addImg").appendChild(
        //     cropper.getCroppedCanvas({
        //         width: 20,
        //         imageSmoothingEnabled: true,
        //         imageSmoothingQuality: 'high',
        //     })
        // );
        cropper.getCroppedCanvas().toDataURL("data:image/webp");
        
        for(let i=0;i<listBtnSuccess.length;i++){
            listBtnSuccess[i].onclick=function(){
                let flag=true;
                if(newImg.getAttribute("src")==oldImg.getAttribute("src")
                    &&newName.value==parent.children[2].innerHTML
                    &&newPhn.value==parent.children[3].innerHTML){
                    flag=false;
                }
                oldImg.setAttribute("src", newImg.getAttribute("src"));
                parent.children[2].innerHTML=newName.value;
                parent.children[3].innerHTML=newPhn.value;
                updRow.classList.add("hide");
                dlgPrgs.classList.remove("hide");
                setTimeout(function(){
                    dlgPrgs.classList.add("hide");
                    if(!flag){
                        notifyWrg.classList.remove("hide");
                    }else{
                        notify.classList.remove("hide");
                    }
                },3000);
                if(!flag){
                    setTimeout(function(){notify.classList.add("hide")},4500);
                }else{
                    setTimeout(function(){notify.classList.add("hide")},4500);
                }
            }
        }
        for(let i=0;i<listBtnClose.length;i++){
            listBtnClose[i].onclick=function(){
                updRow.classList.add("hide");
            }
        }
    }
    function deleteRow(){
        let parent=this.parentNode;
        while(parent.nodeName!=="TR"){
            parent=parent.parentNode;
        }

        delRow.classList.remove("hide");

        for(let i=0;i<listBtnSuccess.length;i++){
            listBtnSuccess[i].onclick=function(){
                delRow.classList.add("hide");
                dlgPrgs.classList.remove("hide");
                setTimeout(function(){
                    dlgPrgs.classList.add("hide");
                    parent.remove();
                    notify.classList.remove("hide");
                },1000);
                setTimeout(function(){notify.classList.add("hide")},2500);
            }
        }

        for(let i=0;i<listBtnClose.length;i++){
            listBtnClose[i].onclick=function(){
                delRow.classList.add("hide");
            }
        }
    }
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