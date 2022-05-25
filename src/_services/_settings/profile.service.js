import config from "../../config/config.json";
import { authHeader } from "../../_helpers";
import swal from "sweetalert";

export const profileService = {
    uploadProfilePic,
    basicInfo,
    changePassword,
    getProfileData,
    getBlockedUsers,
    IntroVideo,
    getImages,
    getVideo,
    deleteVideo,
    uploadImages,
    BlockUser,
    PersonalSocialCommunity,
    InteractionsRange,
    HideShowPeopleInRange,
    PrivateAccount,
    ShowActivityStatus,
    updatePersonalInformation,
};

async function basicInfo(userData, history) {

    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}basicInfo`,
        headersWithAuth("PATCH", userData, headers)
    );
    const data = await response.json();
    let getResponse = handleResponse(data);
    if (getResponse === true) {
        history(`/profile-basic-information`);
    }
}

async function changePassword(userData, history) {

    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}changePassword`,
        headersWithAuth("PATCH", userData, headers)
    );
    const data = await response.json();
    let getResponse = handleResponse(data);
    if (getResponse === true) {
        history(`/account-setting`);
    }
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

async function getImages() {
    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}profile/getimages`,
        headersWithAuthWithoutBody("GET", headers)
    );
    const data = await response.json();
    return data;
}

async function getVideo() {
    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}profile/getvideo`,
        headersWithAuthWithoutBody("GET", headers)
    );
    const data = await response.json();
    return data;
}

async function deleteVideo() {
    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}profile/video/delete`,
        headersWithAuthWithoutBody("DELETE", headers)
    );
    const data = await response.json();
    return data;
}

async function getBlockedUsers() {
    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}getblockedUsers`,
        headersWithAuthWithoutBody("GET", headers)
    );
    const data = await response.json();
    return data;
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
        history(`/profile-basic-information`);
    }
}

async function BlockUser(userData, history) {

    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}blockUser`,
        headersWithAuth("POST", userData, headers)
    );
    const data = await response.json();
    let getResponse = await handleResponse(data);
    if (getResponse === true) {
        history(`/privacy-policy`);
    }
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
  }

async function PersonalSocialCommunity(userData, history) {

    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}updateSocialMedia`,
        headersWithAuth("PUT", userData, headers)
    );
    const data = await response.json();
    let getResponse = await handleResponse(data);
    if (getResponse === true) {
        history(`/account-setting`);
    }
}

async function InteractionsRange(userData, history) {

    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}interactions/range`,
        headersWithAuth("PUT", userData, headers)
    );
    const data = await response.json();
    handleResponse(data);
}

async function HideShowPeopleInRange(userData) {
    
    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}interactions/isShowPeopleInRange`,
        headersWithAuth("PUT", userData, headers)
    );
    const data = await response.json();
    handleResponse(data);
}

async function ShowActivityStatus(userData) {
    
    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}isShowActivityStatus`,
        headersWithAuth("PUT", userData, headers)
    );
    const data = await response.json();
    handleResponse(data);
}

async function PrivateAccount(userData) {
    
    let headerSet = authHeader();
    const headers = {
        authorization: headerSet.Authorization,
        "content-type": "application/json",
    };
    const response = await fetch(
        `${config.API_URL}privateAccount`,
        headersWithAuth("PATCH", userData, headers)
    );
    const data = await response.json();
    handleResponse(data);
}

async function IntroVideo(userData){
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

function alert(message, message2, statusCode) {
    swal(message, message2, statusCode);
    return false;
}

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