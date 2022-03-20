var clothing = $("#clothing-section")
var accessories = $("#accessories-section")
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function(response) {
    function renderproducts(response) {
        var productcard = $("<div>")
        productcard.addClass("product-cards")
        var ImageElement = $("<img>")
        ImageElement.attr('src', response.preview)
        ImageElement.addClass("product-image")
        productcard.append(ImageElement)
        var productmeta = $("<div>")
        productmeta.addClass("product-meta")
        var productname = $("<h4>").text(response.name)
        var brandname = $("<h5>").text(response.brand)
        var priceElement = $("<p>").text("Rs" + response.price)
        productmeta.append(productname, brandname, priceElement)
        productcard.append(productmeta)
        if (response.isAccessory == true) {
            accessories.append(productcard)
        } else {
            clothing.append(productcard)
        }
    }
    for (i = 0; i <= response.length; i++) {
        renderproducts(response[i])
    }
})