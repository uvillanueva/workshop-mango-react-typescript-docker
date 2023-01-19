import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() =>
        null
    );
    let [user, setUser] = useState(() =>
        null
    );
    const history = useNavigate();

    const loginUser = async (email, password) => {
    };

    const registerUser = async (email, username, password, gender) => {
    };

    let logoutUser = () => {
    }

    const contextData = {
        user,
        authTokens,
        registerUser,
        loginUser,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};
