import {ServerError} from "../models/serverError";
import {makeAutoObservable} from "mobx";

export default class CommonStore {
    error: ServerError | null = null;
    token: string | null = null;
    appLoaded = false;

    constructor() {
        makeAutoObservable(this);
    }

    setServerError(error: ServerError){
        this.error = error;
    }

    setToken = (token: string | null) => {
        if (token) localStorage.setItem('jwt', token);
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }
}