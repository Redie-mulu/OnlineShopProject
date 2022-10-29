import React, {useState} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function App() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const onChangeUsername = (e) =>{
        setUsername(e.target.value);

    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    const navigate = useNavigate();
    const onLoginClicked = () => {
        (async function getData() {
            const result = await axios.post("http://localhost:8084/login", {username: username, password:password}).catch(error => {
                console.log(error);
                alert(" incorrect user/password!")
            });
            console.log("this user with name is logged in "+result.data.user.username);
            sessionStorage.setItem("username",result.data.user.username);
            axios.defaults.headers.common['Authorization'] = "Bearer "+result.data.jwt;
            //TODO
            navigate("/product");
        })();
        // console.log("log in");

    }

    return (
        <MDBContainer className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>

                            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                            <MDBInput wrapperClass='mb-4' label='Username address' id='formControlLg' type='email' size="lg" onChange={onChangeUsername }/>
                            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={onChangePassword} />

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={onLoginClicked}>Login</MDBBtn>
                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

                            <div className='d-flex flex-row justify-content-start'>
                                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}

export default App;