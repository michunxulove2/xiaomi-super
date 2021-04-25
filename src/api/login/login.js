
import axios from "axios";

export function login(params) {
    axios.post("http://localhost:8080/aa/login", params);
}