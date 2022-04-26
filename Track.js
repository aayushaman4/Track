function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

function doGet(){
    var currentdate = new Date(); 
    var datetime = "Time_Now: " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
    console.log("Pid= " + String(uuidv4()));
    console.log(datetime);
    var response = fetch("https://d64a-27-58-205-175.in.ngrok.io/listener");
    console.log(response.json());
  }
  doGet();
