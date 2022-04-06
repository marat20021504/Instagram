import React from 'react'
import styled from 'styled-components'

export default function VideosImages({data}) {
    let myIds = [1, 4, 5]

    // myIds.push(data.id)
    console.log(myIds.includes(1))
  return (
    <Wrapper myId={data.id} key={data.index} src={data.image} alt=''  />
  )
}

const Wrapper = styled.img`
    grid-column: ${({myId}) => myId === 2 ? "span 2" : "span 1" };
    grid-row: ${({myId}) => myId === 2 ? "span 2" : "span 1" };
    width: 100%;
    height: 100%;
`
