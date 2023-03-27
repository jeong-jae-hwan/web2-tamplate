import React from 'react'

//style
import styled from '@emotion/styled'

//png
import bannerImg from 'public/images/sec5-img1.png'
import bannerImg2 from 'public/images/sec5-img2.png'
import Image from 'next/image'
import { css } from '@emotion/react'

//
export default function Sec5() {
  return (
    <View>
      <Wrap>
        <Image src={bannerImg} alt="sec5" data-aos="fade" />
        <Box data-aos="fade" data-aos-delay="110">
          <strong>{'테플릿을 무료로\n 이용하세요!'}</strong>
          <p>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt,
          </p>
        </Box>
      </Wrap>

      <Wrap>
        <Box data-aos="fade" data-aos-delay="200">
          <strong>{'테플릿을 무료로\n 이용하세요!'}</strong>
          <p>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt,
          </p>
        </Box>

        <Image
          src={bannerImg2}
          alt="sec5"
          data-aos="fade"
          data-aos-delay="300"
        />
      </Wrap>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 100px 0 140px;
  transition: 0.3s ease-in-out;
  row-gap: 20px;
  column-gap: 20px;

  @media (max-width: 1080px) {
    padding: 80px 30px 100px;
  }
`

const Wrap = styled.div`
  width: 100%;
  max-width: 510px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (max-width: 1180px) {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: 290px;
    border-radius: 6px;
    object-fit: cover;
  }
`

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  padding: 40px;
  border-radius: 6px;
  background-color: #f9f9f9;

  @media (max-width: 1180px) {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    padding: 40px 30px;
  }

  strong {
    font-size: 30px;
    font-weight: 600;
    white-space: pre-line;
    line-height: 1.4;

    @media (max-width: 1080px) {
      font-size: 26px;
    }

    @media (max-width: 600px) {
      font-size: 22px;
    }
  }

  p {
    font-size: 15px;
    color: #888;
    line-height: 1.4;
    margin-top: 20px;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 50px;

    img {
      width: 338px;
      height: 260px;

      @media (max-width: 600px) {
        width: 300px;
        height: auto;
      }

      @media (max-width: 400px) {
        width: 240px;
        height: auto;
      }
    }
  }
`
