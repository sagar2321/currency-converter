import axios from 'axios';

import {
    put,
    call
} from 'redux-saga/effects';

import {
    getCurrencyList
} from '../actions/currencyconverter';


//set exchangeratesapi Base URL
const API_Base_URL = 'https://currency-converter-redux.herokuapp.com';




export default function* fetchCurrencyList() {

    try {

        //the call() function does not run axios directly. As generators work, it only returns the object for which you will run next() on.
        const getList = yield call(
            axios.get,
            `${API_Base_URL}/api/currency`

        );
        console.log("WORKING >>>>>", getList);
        //getLatest.data is the response from the AXIOS call. From there onwards, you can parse the response from the API itself
        var result = getList.data.data;

        yield put(getCurrencyList(result));

    } catch (error) {

        //put is Saga's middleware function for dispatching actions to the redux store

        console.log(error);

    }

}
