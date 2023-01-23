function toggleDetail(e){
    const target =$(e.target)

    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active")
    }else{
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
}


function onFormSubmit(e){
    e.preventDefault()
    const email = $("#inp_email")
    const pesan = $("#inp_pesan")

    if(!$(email).val()){
        alert("Email is required")
    } else if(!$(pesan).val()){

    }else{
        alert("form submitted")
        $(email).val("")
        !$(pesan).val("")
    }
}