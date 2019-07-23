$(function(){
    const addImg=$("#addImg");
    const dlgCrop=$("#dlgCrop");
    let galleryArr=null;
    
    addImg.on("click",function(){
        $("#fileSelect").click();
    });
    $("[data-close]").on("click",function(){
        dlgCrop.hide();
    });
})