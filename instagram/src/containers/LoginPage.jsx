import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Bar from '../components/Bar'
import ShapeIcon from "../assets/icons/Shape.svg"
import InstagramIcon from "../assets/icons/Instagram Logo.svg"

export default function LoginPage() {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Bar />
            <img src={ShapeIcon} className="shape" onClick={() => navigate(-1)} alt="" />
            <img src="" alt="" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 14px 16px 0;
    width: 100%;
    height: 100%;

    .shape {
        cursor: pointer;
    }
`
