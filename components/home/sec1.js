import React from 'react'

//style
import styled from '@emotion/styled'

//png,svg
import Logo from 'public/images/logo.svg'
import bannerImg from 'public/images/banner.png'
import Image from 'next/image'
import PlayStoreIcon from 'public/icons/play-store-icon.svg'
import AppStoreIcon from 'public/icons/app-store-icon.svg'

//
export default function Sec1() {
  return (
    <View>
      <Image src={bannerImg} alt="배너" />

      <Typo>
        <Logo
          width="98px"
          fill="#fff"
          data-aos="zoom-in"
          data-aos-delay="300"
        />
        <h1 data-aos="zoom-in">
          나를 가장 돋보이게
          <br />
          <span>만드는 패키지 DEEP</span>
        </h1>

        <p data-aos="zoom-in" data-aos-delay="100">
          {'서비스에 딱!\n 맞는 어플리케이션 소개페이지를 만들어봐요'}
        </p>

        <Tabs data-aos="zoom-in" data-aos-delay="200">
          <button type="button">
            <PlayStoreIcon />
          </button>

          <button type="button">
            <AppStoreIcon />
          </button>
        </Tabs>
      </Typo>
    </View>
  )
}

//styled
const View = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    height: 100vh;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    height: 100%;
    object-fit: cover;
  }
`

const Typo = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 0 30px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  @media (max-width: 1080px) {
    row-gap: 30px;
    padding: 0 30px 50px;
  }

  h1 {
    font-size: 46px;
    color: #fff;
    white-space: pre-line;

    @media (max-width: 1080px) {
      font-size: 36px;
    }

    @media (max-width: 600px) {
      font-size: 30px;
    }

    span {
      font-weight: 400;
      color: #fff;
    }
  }

  p {
    font-size: 16px;
    color: #e0e0e0;
  }
`

const Tabs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-top: 20px;

  button {
    width: 160px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid #fff;
    border-radius: 100px;
    color: #666;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 1080px) {
      font-size: 15px;
    }
  }
`
