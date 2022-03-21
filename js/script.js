// order constructor -backend
function pizzaOrder(size, crust, toppings, total) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}

$(document).ready(function () {
  // hide table
  $(".order-table").hide()
  // $(".amount").hide()
  // $(".order-again").hide()

  $("form#place-order").submit(function (event) {
    //prevent default action
    event.preventDefault();

    // // show table after clicking placec order
     $(".order-table").show()
     $("button#place").hide()

    var selectedPizzaSize = $("#pizza-size option:selected").val();
    var sizeName = $("#pizza-size option:selected").text();

    var selectedPizzaCrust = $("#pizza-crust option:selected").val();
    var crustName = $("#pizza-crust option:selected").text();

    var selectedPizzaTopping = $("#pizza-topping option:selected").val();
    var topName = $("#pizza-topping option:selected").text();

    var total = parseInt(selectedPizzaSize) + parseInt(selectedPizzaCrust) + parseInt(selectedPizzaTopping);

    // $("order-table").show()

    var newPizzaOrder = new pizzaOrder(
      selectedPizzaSize,
      selectedPizzaCrust,
      selectedPizzaTopping,
      total
    );

    // insert new row
    var newRow = '<tr><td>' + sizeName + " " + newPizzaOrder.size + '</td><td>' + crustName + " " + newPizzaOrder.crust+ '</td><td>' + topName + " " + newPizzaOrder.toppings + '</td><td>' + newPizzaOrder.total + '</td></tr>'

      $("#pizzatable").append(newRow);

    

  });
});
