import config from "../../config/config.json";
// import { authHeader } from "../../_helpers";
// import swal from "sweetalert";

export const _publicProfileService = {
  getProfileData,
};

async function getProfileData(username) {
  const headers = {
    "content-type": "application/json",
  };
  const response = await fetch(
    `${config.API_URL}userProfile/${username}`,
    headersWithAuthWithoutBody("GET", headers)
  );
  const data = await response.json();
  return data;
}

// function headersWithAuth(method, userData, auth) {
//   return {
//     method: method,
//     headers: auth,
//     body: JSON.stringify(userData),
//   };
// }

// function handleResponse(response) {
//   return response.statusCode === 200
//     ? successAlert(response.customMessage, response.customMessage, "success")
//     : alert(response.customMessage, "Please try again later..!", "error");
// }

// function alert(message, message2, statusCode) {
//   swal(message, message2, statusCode);
//   return false;
// }

// function successAlert(message, message2, statusCode) {
//   swal(message, message2, statusCode);
//   return true;
// }

function headersWithAuthWithoutBody(method, auth) {
  return {
    method: method,
    headers: auth,
  };
}
