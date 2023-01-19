import {GoogleLogin} from "react-google-login";

const clientId = ""

export default function GLogin() {
    const onSuccess = async (res) => {
        const googleToken = res.accessToken
        res.send(googleToken);
    };

    const onFailure = (res) => {
        console.log("Login failed", res.profileObj);
    }

    return (
        <div id="signInButton">
            <GoogleLogin
            />
        </div>
    )
}