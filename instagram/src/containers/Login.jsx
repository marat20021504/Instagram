import React from 'react'
import styled from 'styled-components'
import Bar from '../components/Bar'
import instagramLogo from "../assets/icons/Instagram Logo.svg"
import Jacob from "../assets/images/Oval.png"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
      <Wrapper>
        <Bar />
		<div className='Container'>
			
			<img src={instagramLogo} alt="instagram" />

			<div className='your-image'>
				<img src={Jacob} alt="jacob" />
				<span>jacob_w</span>
				<Link to={"/login"}>
					<button>Log in</button>
				</Link>
			</div>

			<p>Switch accounts</p>

			<div className='sign-up'>
				<p className='parag'>Don’t have an account? <span>Sign up.</span></p>
			</div>

		</div>
      </Wrapper>
  )
}

const Wrapper = styled.div`
	width: 375px;
	height: 812px;
	background-color: white;
	position: relative;

	.Container {
		margin-top: 150px;

		img {
			display: block;
			margin: auto;
		}

		.your-image {
			display: flex;
			align-items: center;
			flex-direction: column;
			margin: 70px 0 30px 0;
			gap: 13px;

			span {
				font-weight: 600;
				font-size: 14px;
				line-height: 17px;
				text-align: center;
				letter-spacing: -0.15px;
				color: #262626;
			}

			button {
				width: 300px;
				height: 45px;
				background: #3797EF;
				border-radius: 5px;
				border: none;
				font-weight: 600;
				font-size: 14px;
				line-height: 17px;
				text-align: center;
				letter-spacing: -0.15px;
				color: #FFFFFF;
			}
		}

		p {
			font-weight: 600;
			font-size: 14px;
			line-height: 17px;
			text-align: center;
			letter-spacing: -0.15px;
			color: #3797EF;
		}

		.sign-up {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 84px;
			border-top: 1px solid grey;	

			.parag {
				margin-top: 18px;
				font-weight: 400;
				font-size: 12px;
				line-height: 14px;
				text-align: center;
				letter-spacing: -0.01px;
				color: rgba(0, 0, 0, 0.4);

				span {
					color: #262626;
					letter-spacing: -0.005px;
				}
			}

		}
	}
`