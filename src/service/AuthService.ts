import type { RegisterRequest } from "@/types/RegisterRequest";

export async function register(registerRequest: RegisterRequest) {
  let response ;

  /*fetch("http://localhost:8080/api/v1/auth/register", {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(registerRequest),
    cache: 'default'
  }).then(res => {response = res.json()})

  let result;
  try {
    console.log(response ? response: "");
  } catch (err) {
    console.error("Error in register process", err);
  }*/

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Acess-Control-Allow-Origin' ", "*");

  var raw = JSON.stringify({
    "firstname": "theo",
    "lastname": "clere",
    "email": "clere.theo@gmail.com",
    "password": "password",
    "username": "theoAhga"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:8080/api/v1/auth/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



  return null;
}
