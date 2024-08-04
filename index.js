var Name= document.getElementById("ProductName");
var Price= document.getElementById("ProductPrice");
var Catigory= document.getElementById("ProductCatigory");
var Descriptyion= document.getElementById("ProductDescriptyion");
var MainFormbtn=document.getElementById("mainbtn");
var newUpdate;
var itemList=[];


if (localStorage.getItem("item")!=null) {
    itemList=JSON.parse(localStorage.getItem("item"))
    disply();
}else{
    itemList=[];
}

function add() {
    var item={
        name: ProductName.value,
        price: ProductPrice.value,
        category: ProductCatigory.value,
        description: ProductDescriptyion.value
    }
    if (MainFormbtn.innerText="Update") {
        itemList[newUpdate]=item;
        MainFormbtn.innerText="Add Proudect";
    }else{
        itemList.push(item)
    }
    itemList.push(item)
    disply()
    localStorage.setItem("item",JSON.stringify(itemList));
    clear()
    console.log(itemList);
}
function disply(){
    var cartona='';
    for (var i = 0; i < itemList.length; i++) {
        cartona+=`<tr>
                    <td>${i+1}</td>
                    <td>${itemList[i].name}</td>
                    <td>${itemList[i].price}</td>
                    <td>${itemList[i].category}</td>
                    <td>${itemList[i].description}</td>
                    <td><button type="submit" class="btn btn-outline-light" onclick="Update(${i})">Update</button></td>
                    <td><button type="submit" class="btn btn-outline-light" onclick="deleteitem(${i})">Delete</button></td>
                </tr>`
    }
    document.getElementById('Tbody').innerHTML=cartona;
}
function clear() {
    ProductName.value='';
    ProductPrice.value='';
    ProductCatigory.value='';
    ProductDescriptyion.value='';
}
function deleteitem(inex) {
    itemList.splice(inex,1);
    localStorage.setItem("item",JSON.stringify(itemList));
    disply();
}
function Update(index) {
    console.log(itemList[index]);
    ProductName.value=itemList[index].name;
    ProductPrice.value=itemList[index].price;
    ProductCatigory.value=itemList[index].category;
    ProductDescriptyion.value=itemList[index].description;
    MainFormbtn.innerText="Update";
    newUpdate=index;
}
function searchItems(searchValue) {
    var cartona=``;
    for (var i = 0; i < itemList.length; i++) 
        //console.log(itemList[i].name);
        if (itemList[i].name.toLowerCase().includes(searchValue.toLowerCase())) {
            itemList[i].newName=itemList[i].name.replace(searchValue, `<span class="text-danger fw-bolder">${searchValue}</span>`)
            //console.log("true", itemList[i].name)
            cartona+=`<tr>
                    <td>${i+1}</td>
                    <td>${itemList[i].newName?itemList[i].newName:itemList[i].name}</td>
                    <td>${itemList[i].price}</td>
                    <td>${itemList[i].category}</td>
                    <td>${itemList[i].description}</td>
                    <td><button type="submit" class="btn btn-outline-light" onclick="Update(${i})">Update</button></td>
                    <td><button type="submit" class="btn btn-outline-light" onclick="deleteitem(${i})">Delete</button></td>
                </tr>`
    }
    document.getElementById('Tbody').innerHTML=cartona;
}
function validationpname() {
    var regex= /^[A-Z][a-z]{3,8}$/
    if (regex.test(ProductName.value)) {
        //return true
        document.getElementById("NameError").classList.add("d-none");
    }else{
        //return false
        document.getElementById("NameError").classList.remove("d-none");
    }
}
function validationpprice() {
    var regex= /^[0-9]{2,6}$/
    if (regex.test(ProductPrice.value)) {
        //return true
        document.getElementById("PriceError").classList.add("d-none");
    }else{
        //return false
        document.getElementById("PriceError").classList.remove("d-none");
    }
}