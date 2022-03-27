$(document).ready(function(){
    let orderBtn = $('.orderBtn')
    orderBtn.click (function(){
      let heading =  $(this).closest('.card-footer').find ('p').text();
      $('.modal-header h5').text(heading) 
    })
//Getting data 
let submitBtn= $('#modalSubmit')
submitBtn.click(function(){
    let size = $('input[name = size]').val();
    let crust = $('input[name = crust]').val();
    let toppings = $('input[name = toppings]').val();
    let quantity = $('#pizzaQuantity').val();
    let deliveryFalse = $('#deliveryFalse').val();
    let deliveryTrue = $('#deliveryTrue').val();
    console.log(size, crust, toppings, quantity, deliveryFalse, deliveryTrue);

    //generate price
    let headingTwo =  $('.modal-header').find ('h5').text();

    let tableData = `
<tr>
<td>${headingTwo}
</td>
<td>${crust}</td>
<td>${toppings}</td>
<td>${size}</td>
<td>${quantity}</td>


</tr>

`
    let tableBody = $('tbody');
    tableBody[0].innerHTML += tableData;
});


})

