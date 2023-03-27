import React from 'react'
import Image from 'next/image'

//styled
import styled from '@emotion/styled'

//png
import bannerImg from 'public/images/sec4-img.png'

//
export default function Sec4() {
  return (
    <View>
      <strong data-aos="fade">{'당신의 상상력을\n만들어봐요!'}</strong>
      <p data-aos="fade" data-aos-delay="100">
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
      </p>
      <Image
        src={bannerImg}
        alt="banner"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
    </View>
  )
}

const View = styled.div`
  width: 100%;
  max-width: 1040px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding: 140px 0 0;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 0 0 0;
    align-items: flex-start;
  }

  img {
    margin-top: 20px;
    width: 100%;
    max-height: 420px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 1080px) {
      max-height: 360px;
      border-radius: 0;
      margin: 0;
    }

    @media (max-width: 600px) {
      max-height: 260px;
      border-radius: 0;
      margin-bottom: 10px;
    }
  }

  strong {
    font-size: 32px;
    text-align: center;
    line-height: 1.4;

    @media (max-width: 1080px) {
      width: 100%;
      text-align: start;
      padding: 10px 30px 0;
      font-size: 26px;
      order: 2;
    }

    @media (max-width: 600px) {
      font-size: 24px;
      white-space: pre-line;
    }
  }

  p {
    width: 100%;
    max-width: 640px;
    font-size: 15px;
    color: #797979;
    text-align: center;

    @media (max-width: 1080px) {
      text-align: start;
      padding: 0 30px 0;
      order: 3;
    }

    @media (max-width: 600px) {
      font-size: 14px;
      white-space: pre-line;
      padding: 0 30px;
    }
  }
`
