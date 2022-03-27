$(document).ready(function(){
    let orderBtn = $('.orderBtn')
    orderBtn.click (function(){
      let heading =  $(this).closest('.card-footer').find ('p').text();
      $('.modal-header h5').text(heading)
        
        
    })
})

