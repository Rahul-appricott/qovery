import config from "../../config/config.json";
import { authHeader } from "../../_helpers";
import swal from "sweetalert";

export const publicProfileService = {
    getProfileData,
    getPublicProfileData,
    updateRating
};

async function getPublicProfileData(username) {
    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}information/${username}`,
        headersWithAuthWithoutBody("GET", headers)
    );
    const data = await response.json();
    return data;
}

async function updateRating(userData) {
    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}profile/submitVideoRating`,
        headersWithAuth("POST", userData, headers)
    );
    const data = await response.json();
    handleResponse(data);
}

async function getProfileData() {
    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}userProfile`,
        headersWithAuthWithoutBody("GET", headers)
    );
    const data = await response.json();
    return data;
}


// function headers(method, userData) {
//     return {
//         method: method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(userData),
//     };
// }

function headersWithAuth(method, userData, auth) {
    return {
        method: method,
        headers: auth,
        body: JSON.stringify(userData),
    };
}

function handleResponse(response) {
    return response.statusCode === 200
        ? successAlert(response.customMessage, response.customMessage, "success")
        : alert(response.customMessage, "Please try again later..!", "error");
}

// function alert(message, message2, statusCode) {
//     swal(message, message2, statusCode);
//     return false;
// }

function successAlert(message, message2, statusCode) {
    swal(message, message2, statusCode);
    return true;
}

function headersWithAuthWithoutBody(method, auth) {
    return {
        method: method,
        headers: auth,
    };
}