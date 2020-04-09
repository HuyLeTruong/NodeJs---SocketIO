var socket = io("http://localhost:3000");
$(document).ready(function () {
//   $("#mrA").click(function () {
//     socket.emit("Client-send-data", $("#inputA").val());
//   });
//   socket.on("Server-send-data", function (data) {
//     console.log(data);
//   });
//   socket.on("Current-send-data", function (data) {
//     console.log(data);
//   });

    

    $("#loginForm").show();
    $("#chatForm").hide();

    socket.on("Server-send-register-data",(data)=>{
        console.log(data);
        console.log(data.status);
        if(data.status=="approved")
        {
           
            document.getElementById("currentUser").innerHTML = data.username;
            $("#loginForm").hide(2000);
            $("#chatForm").show(1000);

            socket.on("server-send-online-user-list",function(users){
                $("# ")
                users.forEach(element => {
                   //show online users here 
                });
                console.log(users);
            });
            
        }
        else{
            console.log("false");
        }
    })

    $("#btnRegister").click(function(){
        socket.emit("Client-send-register",$("#txtUserName").val());
    });

});