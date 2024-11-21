import { createContext, useState } from "react";

export const AuthContext = createContext(
    {
        token: '',
        isAuthenticated: false,
        name: '',
        authenticate: () => {},
        logout: () => {}
    }
);

function AuthContextProvider({children}) {

    const [authToken, setAuthToken]=useState();
    const [name, setAuthName] = useState();
    function authenticate(token, name){
        setAuthName(name);
        setAuthToken(token);
    }
    function logout(){
        setAuthToken(null);
        setAuthName(null);
    }
    const value  = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        name: name,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}
export default AuthContextProvider;