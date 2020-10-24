$(document).ready(function() {
  $('#update-product').submit(function(e){
    e.preventDefault();
    let id = localStorage["productId"];
    let productName = $('.product-name').val();
    let price = $('.price').val();
    let profitPercentage = $('.profit').val();
    let productType = $("input[type='radio'][name='type']:checked").val();
    // console.log(id);
    // console.log(productName);
    // console.log(typeof parseFloat(price));
    // console.log(typeof parseFloat(profitPercentage));
    // console.log(productType);
    updateProductMap = {id: id,
      name: productName,
      price: price,
      profitPercentage: profitPercentage,
      productType: productType
    };
    request = $.ajax({
      url: "http://localhost:8080/products",
      type: "put",
      data: updateProductMap
    });
    request.done(function(response, textStatus, jxHQR){
      console.log(response);
      if(response){
        window.location.replace('products.html');
      }
      else $('.errorShow').html("One or more values are empty. Please fill them.");
    });
  });
});
