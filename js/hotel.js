//hotel registration ---- store in an object
let test = {
    guestname: "John Smith",
    roomtype: "Single",
    noguest: 1,
    checkin: "2023-11-13",
    checkout: "2023-11-15",
    display: function () {
        return this.guestname + " " + this.roomtype + " " + this.noguest + " " + this.checkin + " " + this.checkout;
    }
};

//Access the properties of the object - change the properties
console.log(test.guestname);
console.log(test.roomtype);
console.log(test.noguest);
console.log(test.checkin);
console.log(test.checkout);

//Start the Hotel Registration
let guestgroup = [];
function reservation(){
    //Get the values from the form, and put it in the object
    //Practice -- complete the object
    let guest ={
        guestname: $("#name").val(),
        roomtype: $("#room").val(),
        noguest: $("#num").val(),
        checkin: $("#checkin").val(),
        checkout: $("#checkout").val(),
    };
    //push the object into array
    guestgroup.push(guest);
    //check the array
    console.log(guestgroup);
    alert("Thank you for your reservation");
    }

function displayList(){
    $("#list").html("");
    $("#guestlist").append("<table>");
    for(let i in guestgroup){
        $("#guestlist").append("<tr><td>" + guestgroup[i].guestname + "</td>");
        $("#guestlist").append("<td>" + guestgroup[i].roomtype + "</td>");
        $("#guestlist").append("<td>" + guestgroup[i].noguest + "</td>");
        $("#guestlist").append("<td>" + guestgroup[i].checkin + "</td>");
        $("#guestlist").append("<td>" + guestgroup[i].checkout + "</td></tr>");
    }
    $("#guestlist").append("</table>");
}

//Register the event handler
$("#submit").click(reservation);
$("#lists").click(displayList);