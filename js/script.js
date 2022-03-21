$(document).ready(function(){
    // hide table
    $("#table1").hide()
    $(".amount").hide()
    $(".order-again").hide()
    
    //show table after placing order 
    $("button#place-order").click(function(){
        $("#table1").show()
    })
})