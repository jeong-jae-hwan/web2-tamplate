import React from 'react'

//style
import styled from '@emotion/styled'

//png
import MockImg from 'public/images/sec2-mockup.png'
import Image from 'next/image'

//
export default function Sec2() {
  return (
    <View>
      <Box>
        <Info>
          <h2 data-aos="fade">
            나만의 스타일로
            <br /> 만드는 페이지
          </h2>

          <p data-aos="fade" data-aos-delay="150">
            {
              'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt'
            }
          </p>
        </Info>

        <Image
          src={MockImg}
          alt="목업1"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
      </Box>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebf0f4;
  transition: 0.3s ease-in-out;
`

const Box = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  column-gap: 40px;
  row-gap: 80px;
  padding: 140px 30px 0;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 600px) {
    padding: 80px 30px 0;
    row-gap: 60px;
  }

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    border-radius: 50px 50px 0 0;

    @media (max-width: 1080px) {
      max-width: 360px;
      border-radius: 40px 40px 0 0;
    }

    @media (max-width: 600px) {
      max-width: 260px;
      border-radius: 30px 30px 0 0;
    }
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 60px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    row-gap: 16px;
  }

  h2 {
    font-size: 36px;

    @media (max-width: 1080px) {
      font-size: 30px;
      text-align: center;
    }

    @media (max-width: 600px) {
      font-size: 26px;
      text-align: start;
    }
  }

  p {
    max-width: 400px;
    font-size: 16px;
    color: #797979;
    white-space: pre-line;
    line-height: 1.5;

    @media (max-width: 1080px) {
      font-size: 15px;
      text-align: center;
    }

    @media (max-width: 600px) {
      font-size: 14px;
      text-align: start;
    }
  }
`
