import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
const config = {
  databaseURL:
    "https://jeud-wacoal-e308e-default-rtdb.asia-southeast1.firebasedatabase.app",
};

function getDefaultFirebaseApp() {
  if (getApps()[0]) {
    return getApps()[0];
  }

  return initializeApp(config);
}

export const db = getDatabase(getDefaultFirebaseApp());
