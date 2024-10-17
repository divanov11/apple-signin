import "./style.css";
import { account } from "./appwrite";
import { OAuthProvider } from "appwrite";

const app = document.getElementById("app");
const loginBtn = document.getElementById("btn-siwa");

const loginSIWA = async () => {

    await account.createOAuth2Session(
        OAuthProvider.Apple,
        "http://localhost:5173/#success",
        "http://localhost:5173/#fail"
    );

};



const init = async () => {
    try {
        const user = await account.get();
        app.innerHTML = `<h3>Hi ${user.name || user.email} 👋</h3>`;
    } catch (error) {
        console.error(error);
    }
};

init();

loginBtn.addEventListener("click", loginSIWA);
