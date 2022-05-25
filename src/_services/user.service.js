import config from "../config/config.json";
import { authHeader } from "../_helpers";
import swal from "sweetalert";

export const userService = {
  login,
  logout,
  register,
  checkUsername,
  uploadProfilePic,
  uploadImages,
  uploadVideo,
  updateBasicInformation,
  updatePersonalInformation,
  updatePreferences,
  getProfileData
};

async function login(email, password, history) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };
  const response = await fetch(`${config.API_URL}auth/login`, requestOptions);
  const data = await response.json();
  let finalData = await handleResponse(data);
  if (finalData === true) {
    localStorage.setItem("user", JSON.stringify(data));
    history("/user/profile/" + data.userData.username);
  }
}

async function updateBasicInformation(userData, history) {

  let headerSet = authHeader();
  const headers = {
    authorization: headerSet.Authorization,
    "content-type": "application/json",
  };
  const response = await fetch(
    `${config.API_URL}profile/updateBasicInformation`,
    headersWithAuth("POST", userData, headers)
  );
  const data = await response.json();
  let dataa = await handleResponse(data);
  if (dataa === true) {
    history(`/personalinformation`);
  }
}

async function updatePersonalInformation(userData, history) {

  let headerSet = authHeader();
  const headers = {
    authorization: headerSet.Authorization,
    "content-type": "application/json",
  };
  const response = await fetch(
    `${config.API_URL}profile/updatePersonalInformation`,
    headersWithAuth("POST", userData, headers)
  );
  const data = await response.json();
  let getResponse = await handleResponse(data);
  if (getResponse === true) {
    history(`/preference`);
  }
}


async function updatePreferences(userData, history) {

  let headerSet = authHeader();
  const headers = {
    authorization: headerSet.Authorization,
    "content-type": "application/json",
  };
  const response = await fetch(
    `${config.API_URL}profile/updatePreferences`,
    headersWithAuth("POST", userData, headers)
  );
  const data = await response.json();
  let getResponse = handleResponse(data);
  if (getResponse === true) {
    history(`/shareQR`);
  }
}


async function checkUsername(username, history) {
  const response = await fetch(
    `${config.API_URL}auth/checkUser`,
    headers("POST", {username:username})
  );
  const data = await response.json();
  return data;
  // await handleResponse(data);
}

async function getProfileData() {
  let headerSet = authHeader();
  const headers = {
    authorization: headerSet.Authorization,
    "content-type": "application/json",
  };
  const response = await fetch(
    `${config.API_URL}userProfile`,
    headersWithAuthWithoutBody("GET",headers)
  );
  const data = await response.json();
  return data;
}

function logout() {
  localStorage.removeItem("user");
}

async function uploadImages(userData, history){
  let headersData = authHeader();
  const headers = {
    authorization: headersData.Authorization,
    Accept: "application/json",
  };
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: userData,
    redirect: "follow",
  };
  const response = await fetch(
    `${config.API_URL}uploadImages`,
    requestOptions
  );
  const data = await response.json();
 handleResponse(data);
  // if (finalData === true) {
  //   history("/user/profile/upload/video");
  // }
}

async function uploadVideo(userData, history){
  let headersData = authHeader();
  const headers = {
    authorization: headersData.Authorization,
    Accept: "application/json",
  };
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: userData,
    redirect: "follow",
  };
  const response = await fetch(
    `${config.API_URL}profile/video/upload`,
    requestOptions
  );
  const data = await response.json();
  handleResponse(data);
}

async function uploadProfilePic(userData, history) {
  let headersData = authHeader();
  const headers = {
    authorization: headersData.Authorization,
    Accept: "application/json",
  };
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: userData,
    redirect: "follow",
  };
  const response = await fetch(
    `${config.API_URL}profile-image`,
    requestOptions
  );
  const data = await response.json();
  let finalData = await handleResponse(data);
  if (finalData === true) {
    history("/auth/basic-information");
  }
}

async function register(userData, history) {
  const response = await fetch(
    `${config.API_URL}auth/register`,
    headers("POST", userData)
  );
  const data = await response.json();
  let finalData = await handleResponse(data);
  if (finalData === true) {
    localStorage.setItem("user", JSON.stringify(data));
    history("/user/profile/images/upload");
  }
}

function headers(method, userData) {
  return {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  };
}

function headersWithAuth(method, userData, auth) {
  return {
    method: method,
    headers: auth,
    body: JSON.stringify(userData),
  };
}
function headersWithAuthWithoutBody(method, auth) {
  return {
    method: method,
    headers: auth,
  };
}

function handleResponse(response) {
  return response.statusCode === 200
    ? successAlert(response.customMessage, response.customMessage, "success")
    : alert(response.customMessage, "Please try again later..!", "error");
}

function alert(message, message2, statusCode) {
   swal(message, message2, statusCode);
   return false;
}

function successAlert(message, message2, statusCode) {
   swal(message, message2, statusCode);
   return true;
}