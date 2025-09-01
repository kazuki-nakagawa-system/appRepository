import { Button } from "@mui/material";

const Login = () => {

    const handleClick = async () => {

        fetch("http://localhost:8080/users")
        alert('API実行');
    }

    return (
        <>
            <h1>test</h1>
            <button onClick={() => handleClick()}>
                API実行
            </button>
            <Button variant="text">Text</Button>
        </>
    )
}

export default Login;