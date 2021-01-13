/** @format */

let form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = form["username"].value;
  let password = form["password"].value;

// this fetch is function to make ajax call to the server 
// that is ===>>  /data
// where in server.js we had already set up the  

/*


app.post("/data",(req,res)=> {
    console.log(req.body)
    // because of body parser we will get the actual value we are sending from the fron end
    res.json({
        status:"ok"
    })
    // here res means response --- 
    // res.json ({ json content })
    // is used to send res for the request comming 

})

*/
// this function which will accept the post call 
 fetch("/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
