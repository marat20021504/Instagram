import styled from "styled-components"
import icon2 from "../assets/icons/Icon (2).svg"
import icon3 from "../assets/icons/Icon (3).svg"
import icon4 from "../assets/icons/Icon (4).svg"
import icon5 from "../assets/icons/Icon (5).svg"
import Profil from "../assets/images/Oval-profil.png"
import {NavLink} from "react-router-dom"


export const Footer = () => {
    return (
        <Wrapper>
            <NavLink to={"/home"}>
                <img src={icon2} alt="icon2" />
            </NavLink>
            <img src={icon3} alt="icon3" />
            <img src={icon4} alt="icon4" />
            <NavLink to={"/you"}>
                <img src={icon5} alt="icon5" />
            </NavLink>

            <NavLink to={"/profile"}>
                <img src={Profil} alt="Profil" />
            </NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    position: fixed;
    bottom: 0;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FAFAFA;
    box-shadow: 0px -0.33px 0px #A6A6AA;
    border-top: 1px solid grey;

    
`