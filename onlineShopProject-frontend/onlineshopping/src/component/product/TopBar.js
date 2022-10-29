import React, {useEffect, useState} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBBadge,


} from 'mdb-react-ui-kit';

import {useNavigate} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faHome, faUser} from "@fortawesome/free-solid-svg-icons";


export default function TopBar({onProductSearch, data}) {
    const [showBasic, setShowBasic] = useState(false);
    const [searchString, setSearchString] = useState("");
    const onSearch = (e) => {
        setSearchString(e.target.value);
    }
    const onSearchClicked = function (e) {
        e.preventDefault();
        const newData=data.filter(prod => prod.name.toUpperCase().includes(searchString.toUpperCase()));
        onProductSearch(newData);}

    const navigate = useNavigate();
    const onShoppingCartClicked = function () {
        navigate("/shoppingCart");
    }
    const [username, setUsername] = useState("");
   function getUser() {
       setUsername(sessionStorage.getItem("username"));


   }
    // console.log("user --"+username);
   useEffect(() => {
       getUser();
   },[]);

    // const firstName = username.split(".")[0];
    // useEffect( () => {
    //     onSearchClicked();
    // },[searchString])

    /*const onSearchClicked = function (e) {
        e.preventDefault();
        (async function getData() {
            try {
                const result = await axios.post("http://localhost:8084/product/search", {searchString: searchString})
                console.log(searchString);
                onProductSearch(result.data);
            } catch (error) {
                console.log(error);
                alert(" user not found");
            }

        })();
    }*/



    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' style={{
                    color: 'white',
                    backgroundColor: 'black',
                    fontSize: "20px",
                    padding: "0.5%"
                }}>Ex</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            {/*<MDBNavbarLink href='#'>Link</MDBNavbarLink>*/}
                        </MDBNavbarItem>


                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link'>
                                    Dropdown
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            {/*<MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>*/}
                            {/*    Disabled*/}
                            {/*</MDBNavbarLink>*/}
                        </MDBNavbarItem>
                        <h1 style={{marginLeft: "40%", fontWeight: 'bold'}}>Express</h1>

                    </MDBNavbarNav>


                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search'
                               onChange={onSearch}/>
                        <MDBBtn color='dark' onClick={onSearchClicked}>Search</MDBBtn>
                        <div style={{marginLeft: "5px"}}><MDBBtn color='dark'
                                                                 onClick={onShoppingCartClicked}><FontAwesomeIcon
                            icon={faCartShopping}/></MDBBtn></div>
                        <div style={{marginLeft: "5px", padding: "0.375rem"}}>
                            <MDBDropdown>
                                <MDBDropdownToggle color='dark' tag='a' className='nav-link'>
                                    <FontAwesomeIcon icon={faUser}/>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Hello {username?.split(".")[0]}</MDBDropdownItem>
                                    <MDBDropdownItem link>Sign out</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </div>

                    </form>

                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}