// order constructor -backend
function pizzaOrder(size, crust, toppings, total) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}



$(document).ready(function () {
  // hide table
  // $(".order-table").hide()
  // $(".amount").hide()
  // $(".order-again").hide()

  $("form#place-order").submit(function (event) {
    //prevent default action
    event.preventDefault();

   

    // // show table after clicking placec order
    //  $(".order-table").show()

    var selectedPizzaSize = $("#pizza-size option:selected").val();
    var selectedPizzaCrust = $("#pizza-crust option:selected").val();
    var selectedPizzaTopping = $("#pizza-topping option:selected").val();
    
    console.log(selectedPizzaCrust);
    console.log(selectedPizzaSize);
    console.log(selectedPizzaTopping);
    // $("order-table").show()

    var newOrderDetails = new pizzaOrder(
      selectedPizzaSize,
      selectedPizzaCrust,
      selectedPizzaTopping
    );
    $("td.size").append(newOrderDetails.pizzaSize);
    $("td.crust").append(newOrderDetails.pizzaCrust);
    $("td.top").append(newOrderDetails.pizzaToppings);

    // $("button#place-order")
    // // .last()
    // .click(function () {
    //   $(".order-table").show();
    $(".size").html($("#pizza-size:selected").text(newOrderDetails.pizzaSize));
    $(".crust").html(
      $("pizza-crust:selected").text(newOrderDetails.pizzaCrust)
    );
    $(".top").text(
      $("pizza-topping:selected").text(newOrderDetails.pizzaToppings)
    );
  });
});
