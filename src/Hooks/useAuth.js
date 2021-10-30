import { useContext } from "react"
import { AuthContext } from "./AuthProvaider";

const useAuth = () =>{
    return useContext(AuthContext);
}
export default useAuth;