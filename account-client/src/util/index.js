import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { ref, onMounted } from 'vue';

// doRequest is a helper function for
// handling axios responses - reqOptions follow axios req config
export const doRequest = async (reqOptions) => {
    let error;
    let data;

    try {
        const response = await axios.request(reqOptions);
        data = response.data;
    } catch (e) {
        if (e.response) {
            error = e.response.data.error;
        } else if (e.request) {
            error = e.request;
        } else {
            error = e;
        }
    }

    if (error) {
        console.error(error);
    }

    return {
        data,
        error,
    };
};

// request function to wrap the doRequest util method
// this basically allows us to also add some state
export const useRequest = (reqOptions, options) => {
    const { execOnMounted } = options || {};
    const error = ref(null);
    const data = ref(null);
    const loading = ref(false);

    // optional data param to merge into request options
    const exec = async (reqData) => {
        data.value = null;
        loading.value = true;
        error.value = null;

        if (reqData) {
            reqOptions = {
                ...reqOptions,
                data: reqData,
            };
        }

        const resp = await doRequest(reqOptions);

        data.value = resp.data;
        error.value = resp.error;
        loading.value = false;
    };

    onMounted(() => {
        if (execOnMounted) {
            exec();
        }
    });

    return {
        exec,
        error,
        data,
        loading,
    };
};

const idTokenKey = '_gamesiteId';
const refreshTokenKey = 'refreshTokenKey';
const emailKey = 'email';
const usernameKey = 'username';
const recordKey = 'record';
const scoreKey = 'score';

// storeTokens utility for storing idAndRefreshToken
export const storeTokens = (idToken, refreshToken, email, username) => {
    localStorage.setItem(idTokenKey, idToken);
    localStorage.setItem(refreshTokenKey, refreshToken);
    localStorage.setItem(emailKey, email);
    localStorage.setItem(usernameKey, username);
};

export const removeTokens = () => {
    localStorage.removeItem(idTokenKey);
    localStorage.removeItem(refreshTokenKey);
    localStorage.removeItem(emailKey);
    localStorage.removeItem(usernameKey);
    localStorage.removeItem(recordKey);
    localStorage.removeItem(scoreKey);
};

export const getTokens = () => {
    return [
        localStorage.getItem(idTokenKey),
        localStorage.getItem(refreshTokenKey),
        localStorage.getItem(emailKey),
        localStorage.getItem(usernameKey)
    ];
};

// gets the token's payload, and returns null
// if invalid
export const getTokenPayload = (token) => {
    if (!token) {
        return null;
    }

    const tokenClaims = jwt_decode(token);

    if (Date.now() / 1000 >= tokenClaims.exp) {
        return null;
    }

    return tokenClaims;
};