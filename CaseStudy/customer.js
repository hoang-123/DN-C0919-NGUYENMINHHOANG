let Customer = function(){
    this.setNameCustomer = function (nameCustomer) {
        this.nameCustomer = nameCustomer;
    };
    this.getNameCustomer = function () {
        return this.nameCustomer;
    };
    this.setIdCard = function (idCard) {
        this.idCard = idCard;
    };
    this.getIdCard = function () {
        return this.idCard;
    };
    this.setBirthdayCustomer = function (birthdayCustomer) {
        this.birthdayCustomer = birthdayCustomer;
    };
    this.getBirthdayCustomer = function () {
        return this.birthdayCustomer;
    };
    this.setEmailCustomer = function (emailCustomer) {
        this.emailCustomer = emailCustomer;
    };
    this.getEmailCustomer = function () {
        return this.emailCustomer;
    };
    this.setAddressCustomer = function (addressCustomer) {
        this.addressCustomer = addressCustomer;
    };
    this.getAddressCustomer = function () {
        return this.addressCustomer;
    };
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    };
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    };
    this.setDisscount = function (disscount) {
        this.disscount = disscount;
    };
    this.getDisscount = function () {
        return this.disscount;
    };
    this.setNumberOfAccompaying = function (numberOfAccompaying) {
        this.numberOfAccompaying = numberOfAccompaying;
    };
    this.getNumberOfAccompaying = function () {
        return this.numberOfAccompaying;
    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };
    this.getTypeRoom = function () {
        return this.typeRoom;
    };
    this.setRentDays = function (rentDays) {
        this.rentDays = rentDays;
    };
    this.getRentDays = function () {
        return this.rentDays;
    };
    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    };
    this.getTypeService = function () {
        return this.typeService;
    };
    this.totalPays = function () {
        let moneyPerDays = 0;
        if(this.getTypeService() === "villa"){
            moneyPerDays = 500;
        }else if(this.getTypeService() === "villa"){
            moneyPerDays = 300;
        }else{
            moneyPerDays = 300;
        }
        return moneyPerDays*parseFloat(this.getRentDays()*(1-parseFloat(this.getDisscount()))/100);
    }

};