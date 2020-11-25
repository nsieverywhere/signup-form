$(".fwarning").hide();
$(".lwarning").hide();
$(".ewarning").hide();
$(".pwarning").hide();

$(".firstname, .lastname, .password, .email").click(function () {
    $(".fwarning").hide();
    $(".lwarning").hide();
    $(".ewarning").hide();
    $(".pwarning").hide();
})

function validationform() {
    firstname = document.forms["signup"]["fname"].value;
    lastname = document.forms["signup"]["lname"].value;
    email = document.forms["signup"]["email"].value;
    password = document.forms["signup"]["password"].value;

    if(firstname ==""){
        $(".fwarning").show();

        event.preventDefault();
    }else{
        $(".fwarning").hide();
    }

    if(lastname ==""){
        $(".lwarning").show();

        event.preventDefault();
    }else{
        $(".lwarning").hide();
    }

    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false){
        $(".ewarning").show();

        event.preventDefault();
    }else{
        $(".ewarning").hide();
    }

     if(password ==""){
        $(".pwarning").show();

        event.preventDefault();
    }else{
        $(".pwarning").hide();
    }

    



}