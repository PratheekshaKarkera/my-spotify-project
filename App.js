// Inside your App component
const [token, setToken] = useState(null);

// 1. Logic to grab token from URL after login
useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
        window.location.hash = "";
        window.localStorage.setItem("token", token);
    }
    setToken(token);
}, []);

