//hotel registration ---- store in an object
let test = {
    hotelname: "Marriot",
    roomno: 101,
    roomtype: "Single",
    noguest: 1,
    checkin: "2021-02-01",
    checkout: "2021-02-03",
    display: function () {
        return this.hotelname + " " + this.roomno + " " + this.roomtype + " " + this.noguest + " " + this.checkin + " " + this.checkout;
    }
};

//Access the properties of the object - change the properties
console.log(test.hotelname);
test.roomno = 102;
console.log(test.roomno);
console.log(test.roomtype);
console.log(test.noguest);
console.log(test.checkin);
console.log(test.checkout);
