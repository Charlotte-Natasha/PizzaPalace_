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
});


})

