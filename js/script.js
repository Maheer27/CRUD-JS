var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescripInput = document.getElementById("productDescripInput");
var productArr;
if (JSON.parse(localStorage.getItem("myProducts") == null)) {
    productArr = [];

}
else {
    productArr = JSON.parse(localStorage.getItem("myProducts"));
    showProcut();


}
function addProcut(index) {
    if (validateName()==true) {


        var product =
        {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            descritpion: productDescripInput.value
        }
        if (document.getElementById("mainBtn").innerHTML == "Update") {

            productArr.splice(index, 1, product);


        }
        else {
            productArr.push(product);
        }

        localStorage.setItem("myProducts", JSON.stringify(productArr));
        showProcut();
        clear();
    }
    else {
        document.getElementById("demo").innerHTML = "invalid Input";

    }
}

function addProductbtn() {

}

function showProcut() {
    var cartona = "";
    for (var i = 0; i < productArr.length; i++) {
        cartona += `<tr>` +
            `<td>` + i + `</td>` +
            `<td> ` + productArr[i].name + `</td>`
            + `<td>` + productArr[i].price + `</td>`
            + `<td>` + productArr[i].category + `</td>` +
            `<td>` + productArr[i].descritpion + `</td>` +
            `<td> <button class=" btn btn-outline-danger"  onclick="deleteProduct(` + i + `)"> Delete</button></td>` +
            `<td> <button class=" btn btn-outline-warning" onclick="updateProduct(` + i + `)">Update</button>
        </td>
        `+ `</tr>`
            ;

    }
    document.getElementById("table").innerHTML = cartona;

    // console.log(productArr);
}


function clear() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescripInput.value = "";
    document.getElementById("mainBtn").innerHTML == " Add Product";

}

function deleteProduct(index) {
    productArr.splice(index, 1);
    localStorage.setItem("myProducts", JSON.stringify(productArr));
    showProcut();
}
function updateProduct(index) {
    // showProcut();
    productNameInput.value = productArr[index].name;
    productPriceInput.value = productArr[index].price;
    productCategoryInput.value = productArr[index].category;
    productDescripInput.value = productArr[index].descritpion;
    document.getElementById("mainBtn").innerHTML = "Update";
    addProcut(index);
}
function searchProduct(Word) {
    var cartona = "";
    for (var i = 0; i < productArr.length; i++) {

        if (productArr[i].name.toLowerCase().includes(Word.toLowerCase()) || productArr[i].category.toLowerCase().includes(Word.toLowerCase())) {
            cartona += `<tr>` +
                `<td>` + i + `</td>` +
                `<td> ` + productArr[i].name + `</td>`
                + `<td>` + productArr[i].price + `</td>`
                + `<td>` + productArr[i].category + `</td>` +
                `<td>` + productArr[i].descritpion + `</td>` +
                `<td> <button class=" btn btn-outline-danger"  onclick="deleteProduct(` + i + `)"> Delete</button></td>` +
                `<td> <button class=" btn btn-outline-warning" onclick="updateProduct(` + i + `)">Update</button>
            </td>
            `+ `</tr>`
                ;
        }
    }
    document.getElementById("table").innerHTML = cartona;

}
function validateName() {
    var regex = /^[A-Z][a-z]/;

    if (regex.test(productNameInput.value) == true) {
        return true;

    }
    else {
        return false;
    }



}


/// test 
var h1s=document.querySelectorAll(".text-center");
console.log(h1s);
var demo= document.getElementById("demo");
demo.addEventListener("click",function()
{
    welcome();
})
function welcome()
{
    alert("shimaa")
}



 var test=document.getElementById("test1");


 document.addEventListener("mouseenter",function(){
test.style.width="200px";
test.style.height="200px";
test.style.background="red";

console.log("hello")
 })

 