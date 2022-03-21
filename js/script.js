$(document).ready(function(){
    // hide table
    $(".order-table").hide()
    $(".amount").hide()
    $(".order-again").hide()
    
    //show table after placing order 
    $("form#place-order").submit(function(event){
        event.preventDefault()
    })
    
})