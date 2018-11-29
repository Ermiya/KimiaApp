import React, { Component } from 'react';
import * as Common from './Common';
import * as axios from 'axios';

const BASE_URL = 'http://5.160.65.115/api/';
const VERIFICATION_URL = BASE_URL + 'verify/VerifyMobileNo';
const AUTHENTICATE_URL = BASE_URL + 'Authenticate';
const REGISTER_URL = BASE_URL + 'user/register';

// ---- KAVIMO -----
const BASE_KAVIMO_URL = 'https://kavimo.com/api/v1/';
const AUTHENTICATE_KAVIMO_URL = BASE_KAVIMO_URL + 'auth/?access-token=' + Common.KAVIMO_ACCESS_TOKEN;
const MEDIA_KAVIMO_URL = BASE_KAVIMO_URL + 'medias/?access-token=' + Common.KAVIMO_ACCESS_TOKEN;
//-----------------

//---------
export const getVerifyCode = async (anonymousToken, mobileNo) => {
  // try {
  //   console.log('verify address : ' + VERIFICATION_URL + paramStr);
  //   const response = await fetch(VERIFICATION_URL + paramStr,{ timeout: Common.API_TIMEOUT });
  //   const json = await response.json();
  //   console.log('verify json : ');
  //   console.log(json);

  //   return json;
  // } catch (error) {
  //   console.log('OHApi_Component catch getVerifyCode method : ');
  //   console.log(error);
  //   throw error;
  // }
  // //------------------------------------
  try {
    const response = await fetch(VERIFICATION_URL, {
      timeout: Common.API_TIMEOUT,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization':anonymousToken
      },
      body: JSON.stringify({
        // key: Common.APPLICATION_KEY,
        MobileNo: mobileNo,
      }),
    });

    const json = await response.json();
    console.log('verify json : ');
    console.log(json);

    return json;
  } catch (error) {
    console.log('OHApi_Component catch getVerifyCode method : : ');
    console.log(error);
    throw error;
  }
}
//---------
export const getAuthenticateAnonymousToken = async (mobileNo) => {
  try {
    const response = await fetch(AUTHENTICATE_URL, {
      timeout: Common.API_TIMEOUT,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: Common.APPLICATION_KEY,
        MobileNo: mobileNo,
      }),
    });

    const json = await response.json();
    console.log('anonymous authenticate json : ');
    console.log(json);

    return json;
  } catch (error) {
    console.log('OHApi_Component catch getAuthenticateAnonymousToken method : ');
    console.log(error);
    throw error;
  }
}
//---------
export const getAuthenticateToken = async (anonymousToken, mobileNo) => {
  try {
    const response = await fetch(REGISTER_URL, {
      timeout: Common.API_TIMEOUT,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // key: Common.APPLICATION_KEY,
        // Token: anonymousToken,
        MobileNo: mobileNo,
      }),
    });

    const json = await response.json();
    console.log('main authenticate json : ');
    console.log(json);

    return json;
  } catch (error) {
    console.log('OHApi_Component catch getAuthenticateToken method : ');
    console.log(error);
    throw error;
  }
}
//---------
export const getKavimoAuthenticate = async () => {
  try {
    console.log('kavimo authenticate : ' + AUTHENTICATE_KAVIMO_URL);
    const response = await fetch(AUTHENTICATE_KAVIMO_URL, {
      timeout: Common.API_TIMEOUT,
    });
    const json = await response.json();
    console.log('kavimo auth json : ');
    console.log(json);

    return json;
  } catch (error) {
    console.log('OHApi_Component catch getKavimoAuthenticate method : ');
    console.log(error);
    throw error;
  }
}
//----------
export const getKavimoMedia = async (media_id) => {
  try {
    const response = await fetch(MEDIA_KAVIMO_URL, {
      timeout: Common.API_TIMEOUT,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referer': 'http://www.ostadhamrah.com',
        'User-Agent': 'MY-UA-STRING',
        'Accept-Language': 'en-US',
      },
      body: JSON.stringify({
        media_id: media_id,
      }),
    });

    const json = await response.json();
    console.log('getKavimoMedia json : ');
    console.log(json);

    return json;
  } catch (error) {
    console.log('OHApi_Component catch getAuthenticateToken method : ');
    console.log(error);
    throw error;
  }


  // axios.post  (MEDIA_KAVIMO_URL, {
  //   media_id: media_id,
  //  },
  //  {
  //  headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'HTTP_REFERER': 'http://www.ostadhamrah.com',
  //     'HTTP_USER_AGENT': 'MY-UA-STRING',
  //     'HTTP_ACCEPT_LANGUAGE': 'fa-ir',
  //  }
  //  })
  // .then((response) => {
  //    console.log('getKavimoMedia json : ');
  //    console.log(response);
  //    return response;
  // })
  // .catch((error) => {
  //    console.log('OHApi_Component catch getAuthenticateToken method : ');
  //    console.log(error);
  //    throw error;
  // });
}
//----------
export const getFavoriteList = async () => {
  try {
    let response = await fetch(BASE_URL + 'favorite');
    let json = await response.json();
    console.log('getFavoriteList json : ');
    console.log(json);
    return responseJson.movies;
  } catch (error) {
    console.log('OHApi_Component catch getFavoriteList method : ');
    console.log(error);
  }
}

