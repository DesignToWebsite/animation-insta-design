import styled from "styled-components";
import logo from "../assets/logo.png"


const Nav = ()=>{
    return(
        <NavStyle>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav">
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">All collection</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div className="btn">
                Shop Now
            </div>
        </NavStyle>
    )
}
const NavStyle = styled.div`
    position: fixed;
    width : 100%;
    padding : 1em 3em;
    background-color : #032427;
    display : flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom: 20px;
    .nav{
        ul{
            display:flex;
            li{
                margin-right : 10px;
                opacity: 50%;
                &.active, &:hover{
                    opacity : 90%;
                }
            }
        }
    }
`
export default Nav;