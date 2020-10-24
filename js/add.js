$(document).ready(function() {
  localStorage['productId'] = "";
  $('#add-product').submit(function(e){
    e.preventDefault();
    let username = localStorage["username"];
    let productName = $('.product-name').val();
    let price = $('.price').val();
    let profitPercentage = $('.profit').val();
    let productType = $("input[type='radio'][name='type']:checked").val();
    // console.log(username);
    // console.log(productName);
    // console.log(typeof parseFloat(price));
    // console.log(typeof parseFloat(profitPercentage));
    // console.log(productType);
    addProductMap = {username: username,
      name: productName,
      price: price,
      profitPercentage: profitPercentage,
      productType: productType
    };
    console.log(typeof addProductMap);
    request = $.ajax({
      url: "http://localhost:8080/products",
      type: "post",
      data: addProductMap
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
