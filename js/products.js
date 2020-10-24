$(document).ready(function(){
  localStorage['productId'] = "";
  let username = localStorage["username"];
  request = $.ajax({
    url: "http://localhost:8080/products",
    method: "get",
    data: {username: username},
    dataType: 'json'
  });
  request.done(function(response, textStatus, jxHQR){
    console.log(response);
    $.map(response, function(product, i){
      console.log(product.name);
      $('#product-list').append("<tr>" +
        "<td>" + product.name + "</td>" +
        "<td>" + product.price + "/-</td>" +
        "<td>" + product.profitPercentage + "%</td>" +
        "<td>" + product.productType + "</td>" +
        "<td><form id='edit-product" + product.id +"'>" +
          "<button type='submit'>" +
          "<i class='fas fa-edit' style='font-size:24px'></i>" +
          "</button></form></td>" +
        "<td><form id='delete-product" + product.id + "'>" +
        "<button type='submit'>" +
        "<i class='fas fa-trash' style='font-size:24px'>" +
        "</i></button></form></td></tr>");
        $('#edit-product' + product.id).submit(function(e){
          e.preventDefault();
          localStorage.setItem("productId", product.id);
          window.location.replace('update.html');
        });
        $('#delete-product' + product.id).submit(function(e){
          e.preventDefault();
          deleteRequest = $.ajax({
            url: "http://localhost:8080/products",
            method: "delete",
            data: {id: product.id}
          });
          deleteRequest.done(function(response, textStatus, jxHQR){
            if(response) window.location.replace('products.html');
          });
        });
    });
  });
});
