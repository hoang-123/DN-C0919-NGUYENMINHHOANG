let listCustomer = [];
let checkDeleteCustomer = false;
let checkEditCustomer = false;
let checkDisplayTotalPay = false;
let validateBirthday = /^((0)[1-9]|[1-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/;
let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function dislayMainManu(){
    let choose = prompt(
        "1.Add new customer." +
        "\n2.Display information customer." +
        "\n3.Display Total Pay of customer." +
        "\n4.Edit information customer."+
        "\n5.Delete customer."+
        "\n6.Exit."
    );
    switch(choose){
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomer();
            break;
        case "3":
            chooseDisplayTotalPay();
            break;
        case "4":
            chooseCustomerEdit();
            break;
        case "5":
            chooseDeleteCustomer();
            break;
        case "6":
            return;
        default:
            alert("Fail !!!");
            break;
    }
};

function addNewCustomer() {
    let checkBirthday = false;
    let checkEmail = false;
    let cus = new Customer();
    cus.setNameCustomer(prompt("Enter name customer:"));
    cus.setIdCard(prompt("Enter id card customer"));
    do {
        cus.setBirthdayCustomer(prompt("Enter Birthday Customer (dd/MM/YYY):"));
        if (validateBirthday.test(cus.getBirthdayCustomer())) {
            checkBirthday = true;
        } else {
            alert("Birthday is invalid. Please try again");
        }
    } while (!checkBirthday);
    do {
        cus.setEmailCustomer(prompt("Enter Email Customer:"));
        if(validateEmail.test(cus.getEmailCustomer())){
            checkEmail = true;
        }else {
            alert("Email is invalid. Please try again");
        }
    }while (!checkEmail);
    cus.setAddressCustomer(prompt("Enter Address Customer"));
    cus.setTypeCustomer(prompt("Enter Type Customer:"));
    cus.setDisscount(prompt("Enter Disscount:"));
    cus.setNumberOfAccompaying(prompt("Enter Number Of Accompanying:"));
    cus.setTypeRoom(prompt("Enter Type Room:"));
    cus.setRentDays(prompt("Enter Rent Days:"));
    cus.setTypeService(prompt("Enter Type Service:"));
    listCustomer.push(cus);
    dislayMainManu();
}


function displayCustomer() {
    let result = "";
    for(var i=0; i< listCustomer.length;i++){
        result += "\n" + (i+1) + "." + "Name: " + listCustomer[i].getNameCustomer() +
            "; Id Card:" + listCustomer[i].getIdCard();
    }
    result += "\n" + (listCustomer.length + 1) + ".Back to menu";
    let chooseDisplayInfor = prompt(result);
    if(chooseDisplayInfor.toString() !== (listCustomer.length+1).toString()){
        if(!checkDeleteCustomer && !checkDisplayTotalPay) {
            displayInformationCustomer(Number.parseInt(chooseDisplayInfor) - 1);
        }else if(checkDeleteCustomer) {
            deleteCustomer(Number.parseInt(chooseDisplayInfor) - 1);
        }else {
            displayTotalPay(Number.parseInt(chooseDisplayInfor)-1);
        }

    }else {
        checkDisplayTotalPay = false;
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        dislayMainManu();
    }
}
function displayInformationCustomer(index) {
    if (checkEditCustomer) {
        let chooseInforEdit = prompt(
            "1.Name: " + listCustomer[index].getNameCustomer() +
            "\n2.Id Card: " + listCustomer[index].getIdCard() +
            "\n3.Birthday: " + listCustomer[index].getBirthdayCustomer() +
            "\n4.Email: " + listCustomer[index].getEmailCustomer() +
            "\n5.Address: " + listCustomer[index].getAddressCustomer() +
            "\n6.Type Customer: " + listCustomer[index].getTypeCustomer() +
            "\n7.Discount: " + listCustomer[index].getDisscount() +
            "\n8.Accompanying: " + listCustomer[index].getNumberOfAccompaying() +
            "\n9.Type Room: " + listCustomer[index].getTypeRoom() +
            "\n10.Rent Days: " + listCustomer[index].getRentDays() +
            "\n11.Type Service: " + listCustomer[index].getTypeService() +
            "\n12.Back "
        );
        if(chooseInforEdit.toString() !== "12"){
            editInformationCustomer(Number.parseInt(chooseInforEdit)-1);
        }else{
            checkEditCustomer = false;
            displayCustomer();
        }


    } else {
        alert("Information of customer:\n" +
            "Name: " + listCustomer[index].getNameCustomer() +
            "\nId Card: " + listCustomer[index].getIdCard() +
            "\nBirthday: " + listCustomer[index].getBirthdayCustomer() +
            "\nEmail: " + listCustomer[index].getEmailCustomer() +
            "\nAddress: " + listCustomer[index].getAddressCustomer() +
            "\nType Customer: " + listCustomer[index].getTypeCustomer() +
            "\nDiscount: " + listCustomer[index].getDisscount() +
            "\nAccompanying: " + listCustomer[index].getNumberOfAccompaying() +
            "\nType Room: " + listCustomer[index].getTypeRoom() +
            "\nRent Days: " + listCustomer[index].getRentDays() +
            "\nType Service: " + listCustomer[index].getTypeService()
        );
        dislayMainManu();
    }
}
function chooseDisplayTotalPay() {
    checkDisplayTotalPay = true;
    displayCustomer();
}
function displayTotalPay(index) {
    alert(listCustomer[index].totalPays());
    checkDisplayTotalPay = false;
    dislayMainManu();
}
function chooseCustomerEdit() {
    checkEditCustomer = true;
    displayCustomer();
}
function editInformationCustomer(index) {
    let editInfor = prompt("Enter Infor you want change:");
    switch (index) {
        case 0:
            listCustomer[index].setNameCustomer(editInfor);
            break;
        case 1:
            listCustomer[index].setIdCard(editInfor);
            break;
        case 2:
            listCustomer[index].setBirthdayCustomer(editInfor);
            break;
        case 3:
            listCustomer[index].setEmailCustomer(editInfor);
            break;
        case 4:
            listCustomer[index].setAddressCustomer(editInfor);
            break;
        case 5:
            listCustomer[index].setTypeCustomer(editInfor);
            break;
        case 6:
            listCustomer[index].setDisscount(editInfor);
            break;
        case 7:
            listCustomer[index].setNumberOfAccompaying(editInfor);
            break;
        case 8:
            listCustomer[index].setTypeRoom(editInfor);
            break;
        case 9:
            listCustomer[index].setRentDays(editInfor);
            break;
        case 10:
            listCustomer[index].setTypeService(editInfor);
            break;
        default:
            alert("Fail !!!");
            return;
    }
    checkEditCustomer = false;
    dislayMainManu();
}
function chooseDeleteCustomer() {
    checkDeleteCustomer = true;
    displayCustomer();
}

function deleteCustomer(index) {
    let chooseConfirm = prompt(
        "Are you sure delete Customer: Name: "
        + listCustomer[index].getNameCustomer() +
        "Id Card:" + listCustomer[index].getIdCard()+
        "\n1. Yes \n2. No");
    if(chooseConfirm === "1"){
        listCustomer.splice(index,1);
        alert("Delete Complete !!!");
    }
    checkDeleteCustomer = false;
    dislayMainManu();
}

dislayMainManu();
