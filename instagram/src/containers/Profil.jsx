import styled from "styled-components"
import { Footer } from "../components/footer"
import securityIcon from "../assets/icons/Shapesecurity.svg"
import Icon from "../assets/icons/Shape (1).svg"
import Menu from "../assets/icons/Menu.svg"
import ProfilImage from "../assets/images/Photo.png"
import addNew1 from "../assets/images/Add New Story (1).png"
import addNew2 from "../assets/images/Add New Story (2).png"
import addNew3 from "../assets/images/Add New Story (3).png"
import addNew4 from "../assets/images/Add New Story (4).png"
import icon1 from "../assets/icons/Shapekub.svg"
import icon2 from "../assets/icons/Shape-icon.svg"
import post1 from "../assets/images/Rectangle1.png"
import post2 from "../assets/images/Rectangle2.png"
import post3 from "../assets/images/Rectangle3.png"


export const Profil = () => {
    
    return (
        <Wrapper>
            <header>
                <div className="name">
                    <img src={securityIcon} alt="securityIcon" />
                    <p>jacob_w</p>
                    <img src={Icon} alt="Icon" />
                </div>
                <img src={Menu} alt="Menu" />
            </header>
            
            <Profile>
                <div className="Profile">
                    <img src={ProfilImage} alt="ProfilImage" />

                    <div className="stats">
                        <b>54</b>
                        <p>Posts</p>
                    </div>

                    <div className="stats">
                        <b>834</b>
                        <p>Followers</p>
                    </div>

                    <div className="stats">
                        <b>162</b>
                        <p>Following</p>
                    </div>

                </div>

                <div className="texts">
                    <b className="text">Jacob West</b>
                    <p className="text">
                        Digital goodies designer <span>@pixsellz</span> <br /> 
                        Everything is designed.
                    </p>
                </div>

                <button>Edit Profile</button>

                <div className="images">
                    <img src={addNew1} />
                    <img src={addNew2} />
                    <img src={addNew3} />
                    <img src={addNew4} />
                </div>

                <div className="Icons">
                    <img src={icon1} alt="icon1" />
                    <img src={icon2} alt="icon2" />
                </div>
            </Profile>

            <Posts>
                <img src={post1} />
                <img src={post3} />
                <img src={post2} />
                <img src={post1} />
                <img src={post2} />
                <img src={post1} />
                <img src={post3} />
                <img src={post1} />
                <img src={post3} />
                <img src={post2} />
                <img src={post3} />
                <img src={post2} />
            </Posts>

            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;


    header {
        width: 100%;
        padding: 13px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        background: #F2F2F2;


        .name {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }

    `

const Profile = styled.div`
    padding: 13px;
    margin-bottom: 12px;
    height: auto;
    
    .Profile {
        margin-top: 47px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        .stats {
            display: flex;
            align-items: center;
            flex-direction: column;
    
            b {
                font-weight: 600;
                font-size: 16px;
                line-height: 21px;
                letter-spacing: -0.3px;
                color: #262626;
            }
    
            p {
                font-weight: 400;
                font-size: 13px;
                line-height: 16px;
                letter-spacing: -0.1px;
                color: #262626;
            }
        }
    }

    .texts {
        padding-left: 3px;

        .text {
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            color: #262626;
            
            span {
                color: blue;
            }
        }
    }

    button {
        width: 100%;
        height: 30px;
        color: #262626;
        margin-top: 20px;
        background: #FFFFFF;
        border: 1px solid rgba(60, 60, 67, 0.18);
        box-sizing: border-box;
        border-radius: 6px;
    }

    .images {
        display: flex;
        gap: 18px;
        padding: 15px 0;
        border-bottom: 1px solid rgba(60, 60, 67, 0.18);
    }

    .Icons {
        padding: 10px;
        display: flex;
        justify-content: space-around;
    }

`
const Posts = styled.div`
    
`