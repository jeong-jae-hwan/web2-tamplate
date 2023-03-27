import React from 'react'

//styled
import styled from '@emotion/styled'

//svg
import PlayStoreIcon from 'public/icons/play-store-icon.svg'
import AppStoreIcon from 'public/icons/app-store-icon.svg'

//
export default function Sec6() {
  return (
    <View>
      <strong data-aos="fade">{'지금 DEEP 템플릿과\n 함께해보세요!'}</strong>
      <p data-aos="fade">
        {
          '당신의 웹사이트는 누구보다 뛰어날 수 있습니다\n우리는 다양한 템플릿을 제공하며, 뛰어난 서비스를 만들어가고 있습니다!'
        }
      </p>

      <Tabs data-aos="fade">
        <button type="button">
          <PlayStoreIcon />
        </button>

        <button type="button">
          <AppStoreIcon />
        </button>
      </Tabs>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  background-image: linear-gradient(118deg, #1c75f9 37%, #2897c1 80%);

  @media (max-width: 600px) {
    align-items: flex-start;
    padding: 70px 30px;
  }

  strong {
    font-size: 26px;
    color: #fff;

    @media (max-width: 1080px) {
      font-size: 24px;
    }

    @media (max-width: 600px) {
      font-size: 22px;
      white-space: pre-line;
    }
  }

  p {
    width: 100%;
    font-size: 15px;
    color: #e0e0e0;
    text-align: center;
    white-space: pre-line;

    @media (max-width: 600px) {
      font-size: 14px;
      text-align: start;
    }
  }
`

const Tabs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 20px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }

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

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`
