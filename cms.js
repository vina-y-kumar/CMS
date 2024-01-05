//alert ('connected')

//Global Declartion for PL
var varId = document.getElementById('txtId');
var varName = document.getElementById('txtName');
var varAddress = document.getElementById('txtAddress');
var varMobileNo = document.getElementById('txtMobileNo');
var vardiv = document.getElementById("divCustomer")


//PL code
function addCustomer_Click(){
    var id = varId.value
    id= parseInt(id);
    var name = varName.value
    var address = varAddress.value
    var mobileNo = varMobileNo.value
   
    addCustomer(id,name,address,mobileNo);
    alert("customer added sucessfully")
    var data = getAllCustomerInTableFormat();
    vardiv.innerHTML = data;


}
function searchCustomer_Click(){
    alert("connected")
  
    
}
function deleteCustomer_Click(){
    alert("connected")
   
}
function modifyCustomer_Click(){
    alert("connected")
    
}
//Global Declartion for bll
var cusArr = [];


//BLL code 
function addCustomer(id,name,address,mobileNo){
    var cus = {id:id,name:name,address:address,mobileNo:mobileNo}
    cusArr.push(cus);
}


function getAllCustomerInTableFormat(){
    var data =`  <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Address</th>
      <th>Mobile</th>
      
    </tr>`;
    for(var i=0;i<cusArr.length;i++){
        var e=cusArr[i];
        data+=`<tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.address}</td>
        <td>${e.mobileNo}</td>
    </tr>`

    }


  data+= `</table>`
  return data;
}