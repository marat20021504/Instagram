import styled from "styled-components"
import Bar from "../components/Bar"
import Camera from "../assets/icons/Camera Icon.svg"
import Instagramlogo from "../assets/icons/Instagram Logo (1).svg"
import Igtv from "../assets/icons/igtv.svg"
import massenger from "../assets/icons/Messanger.svg"
import profil from "../assets/images/Profile Image.png"
import YouImg from "../assets/images/Oval.png"
import YouStar from "../assets/icons/Shape.svg"
import YouStars from "../assets/icons/Shape-1.svg"
import Image from "../assets/images/Rectangle.png"
import like from "../assets/icons/Like.svg"
import pogination from "../assets/icons/Pagination.svg"
import massege from "../assets/icons/Messanger.svg"
import comment from "../assets/icons/Comment.svg"
import save from "../assets/icons/Save.svg"
import liked from "../assets/icons/Oval.png"
import { Footer } from "../components/footer"

export const Home = () => {

    const subscribers = [
        {img: profil, paragraph: "Your Story"},
        {img: profil, paragraph: "Your Story"},
        {img: profil, paragraph: "Your Story"},
        {img: profil, paragraph: "Your Story"},
        {img: profil, paragraph: "Your Story"},
        {img: profil, paragraph: "Your Story"}
    ]

    const container = [
        {img: YouImg, bold: "joshua_l", paragraph: "Tokyo, Japan", image: YouStars, icon: Image, LIke: like, Comment: comment, Massage: massege, }
    ]

    return (
        <Wrapper>
            <Headers>
                <div className="header-icon">
                    <img src={Camera} alt="camera" />
                    <img src={Instagramlogo} alt="camera" />
                    <div className="IGTV-mas">
                        <img src={Igtv} alt="igtv" />
                        <img src={massenger} alt="camera" />
                    </div>
                </div>
            </Headers>

            <Following>
                {
                    subscribers.map((data) => {
                        return (
                            <div className="subscribers">
                                <img src={data.img} alt="image" />
                                <p>{data.paragraph}</p>
                            </div>
                        )
                    })
                }
            </Following>

            <InfoContainer>

                {
                    container.map((data) => {
                        return (
                            <div className="Container">
                                <div className="info">

                                <div className="you">
                                    <img src={data.img} alt="you" />
                                    <div className="your-text">
                                        <div className="paragraph-icon">
                                            <b>{data.bold}</b>
                                            <img src={YouStar} alt="YouStar" />
                                        </div>
                                        <p>{data.paragraph}</p>
                                    </div>
                                </div>

                                <img src={data.image} />

                                </div>

                                <img src={data.icon} alt="icon" />

                                <div className="like-comment">

                                <div className="icons">

                                    <div className="first-icon">
                                        <img src={data.LIke} alt="like" />
                                        <img src={data.Comment} alt="comment" />
                                        <img src={data.Massage} alt="massege" />
                                    </div>

                                    <img src={pogination} alt="pogination" />
                                    <img src={save} alt="save" />
                                </div>

                                <div className="icon-text">
                                    <img src={liked} alt="liked" />
                                    <p>Liked by <b>craig_love</b> and <b>44,686 others</b></p>
                                </div>

                                <p className="text"><b>joshua_l</b> The game in Japan was amazing and I want to <br /> share some photos</p>
                                </div>

                            </div>
                        )
                    })
                }

                
                <div className="Container">
                    <div className="info">

                    <div className="you">
                        <img src={YouImg} alt="you" />
                        <div className="your-text">
                            <div className="paragraph-icon">
                                <b>joshua_l</b>
                                <img src={YouStar} alt="YouStar" />
                            </div>
                            <p>Tokyo, Japan</p>
                        </div>
                    </div>

                    <img src={YouStars} />

                    </div>

                    <img src={Image} alt="" />

                    <div className="like-comment">

                    <div className="icons">

                        <div className="first-icon">
                            <img src={like} alt="like" />
                            <img src={comment} alt="comment" />
                            <img src={massege} alt="massege" />
                        </div>

                        <img src={pogination} alt="pogination" />
                        <img src={save} alt="save" />
                    </div>

                    <div className="icon-text">
                        <img src={liked} alt="liked" />
                        <p>Liked by <b>craig_love</b> and <b>44,686 others</b></p>
                    </div>

                    <p className="text"><b>joshua_l</b> The game in Japan was amazing and I want to <br /> share some photos</p>
                    </div>

                </div>
                <div className="Container">
                    <div className="info">

                    <div className="you">
                        <img src={YouImg} alt="you" />
                        <div className="your-text">
                            <div className="paragraph-icon">
                                <b>joshua_l</b>
                                <img src={YouStar} alt="YouStar" />
                            </div>
                            <p>Tokyo, Japan</p>
                        </div>
                    </div>

                    <img src={YouStars} />

                    </div>

                    <img src={Image} alt="" />

                    <div className="like-comment">

                    <div className="icons">

                        <div className="first-icon">
                            <img src={like} alt="like" />
                            <img src={comment} alt="comment" />
                            <img src={massege} alt="massege" />
                        </div>

                        <img src={pogination} alt="pogination" />
                        <img src={save} alt="save" />
                    </div>

                    <div className="icon-text">
                        <img src={liked} alt="liked" />
                        <p>Liked by <b>craig_love</b> and <b>44,686 others</b></p>
                    </div>

                    <p className="text"><b>joshua_l</b> The game in Japan was amazing and I want to <br /> share some photos</p>
                    </div>

                </div>

                <div className="Container">
                    <div className="info">

                    <div className="you">
                        <img src={YouImg} alt="you" />
                        <div className="your-text">
                            <div className="paragraph-icon">
                                <b>joshua_l</b>
                                <img src={YouStar} alt="YouStar" />
                            </div>
                            <p>Tokyo, Japan</p>
                        </div>
                    </div>

                    <img src={YouStars} />

                    </div>

                    <img src={Image} alt="" />

                    <div className="like-comment">

                    <div className="icons">

                        <div className="first-icon">
                            <img src={like} alt="like" />
                            <img src={comment} alt="comment" />
                            <img src={massege} alt="massege" />
                        </div>

                        <img src={pogination} alt="pogination" />
                        <img src={save} alt="save" />
                    </div>

                    <div className="icon-text">
                        <img src={liked} alt="liked" />
                        <p>Liked by <b>craig_love</b> and <b>44,686 others</b></p>
                    </div>

                    <p className="text"><b>joshua_l</b> The game in Japan was amazing and I want to <br /> share some photos</p>
                    </div>

                </div>
                
            </InfoContainer>

            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: red;
`
const Headers = styled.div`
    width: 100%;
    height: auto;
    background: #FAFAFA;
    box-shadow: 0px 0.33px 0px #A6A6AA;

    top: 0;
    left: 0;

    .header-icon {
        padding: 13.5px 13.5px 13.5px 13.5px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .IGTV-mas {
            display: flex;
            gap: 18px;
        }
    }
`
const Following = styled.div`
    overflow-x: scroll;
    height: 100px;
    padding: 9px 10px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid grey;
    background-color: white;

    &::-webkit-scrollbar {
        display: none;
    }

    .subscribers {
        p {
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            letter-spacing: -0.01px;
            color: #262626;
        }
    }
`

const InfoContainer = styled.div`
    overflow-y: scroll;
    background-color: white;
    &::-webkit-scrollbar {
        display: none;
    }
    .info {
        display: flex;
        align-items: center;
        padding: 11px 10px;
        justify-content: space-between;

        .you{
            height: 55px;
            display: flex;
            align-items: center;
            gap: 10px;

            .your-text {
                .paragraph-icon{
                    display: flex;
                    align-items: center;
                    gap: 4px;
        
                    b {
                        font-weight: 600;
                        font-size: 13px;
                        line-height: 18px;
                        letter-spacing: -0.1px;
                        color: #262626;
                    }
                }

                p {
                    font-weight: 400;
                    font-size: 11px;
                    line-height: 13px;
                    letter-spacing: 0.07px;
                    color: #262626;
                }
            }
            
        }
    }

    .like-comment {
        padding: 14px;

        .icons {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .first-icon {
                display: flex;
                gap: 17px;
            }
        }

        .icon-text {
            margin-top: 10px;
            display: flex;
            align-items: center;
            gap: 6px;

            p {
                font-weight: 400;
                font-size: 13px;
                line-height: 18px;
                letter-spacing: -0.07px;
                color: #262626;
            }
        }

        .text {
            font-weight: 600;
            font-size: 13px;
            line-height: 18px;
            letter-spacing: -0.1px;
            color: #262626;
        }
    }
`