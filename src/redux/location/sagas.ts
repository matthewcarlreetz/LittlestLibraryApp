import Permissions from "react-native-permissions";
import { delay } from "redux-saga";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { AskPermissionAction, LocationKeys, RequestLocationAction } from "./types";
import { fetchLibraries } from "../../api/libraryApi";

// Request Location Permission
function* requestLocationPermission(action: AskPermissionAction) {
    const perm = yield Permissions.request("location");
    yield put({ type: LocationKeys.PERMISSION_RESPONSE, payload: perm === "authorized" });
}

function* watchRequestLocationPermission() {
    yield takeEvery(LocationKeys.ASK_PERMISSION, requestLocationPermission);
}

// Request Location
function* requestLocation(action: RequestLocationAction) {
    const loc = yield new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(location => {
            resolve(location);
        }, error => reject(error),
            { enableHighAccuracy: true });
    });

    yield put({ type: LocationKeys.LOCATION_FOUND, payload: loc });
}

function* watchRequestLocation() {
    yield takeEvery(LocationKeys.REQUEST_LOCATION, requestLocation);
}

// Combine watchers
export default function* rootSaga() {
    yield all([watchRequestLocationPermission(), watchRequestLocation()]);
}
