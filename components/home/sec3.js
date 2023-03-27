import React from 'react'

//style
import styled from '@emotion/styled'

//png
import mockImg1 from 'public/images/sec3-mockup1.png'
import mockImg2 from 'public/images/sec3-mockup2.png'

//modules
import Image from 'next/image'
import ScrollContainer from 'react-indiana-drag-scroll'

//
export default function Sec3({ handleFocus }) {
  return (
    <View>
      <Box>
        <Contant>
          <Title data-aos="fade">
            {'디자인은 깔끔하게\n사이트는 꼼꼼하게\n템플릿은 다양하게'}
          </Title>

          <Image
            src={mockImg1}
            alt="좌"
            data-aos="fade-right"
            data-aos-delay="100"
          />
        </Contant>

        <Contant>
          <Image
            src={mockImg2}
            alt="우"
            data-aos="fade-left"
            data-aos-delay="200"
          />

          <Text data-aos="fade">
            {
              '딥팩토리에서 다양한 템플릿을 경험하고\n나에게 딱 맞는 앱 소개 페이지를\n만들어보세요! '
            }
          </Text>
        </Contant>

        <ContantMobile>
          <Title data-aos="fade">
            {'디자인은 깔끔하게\n사이트는 꼼꼼하게\n템플릿은 다양하게'}
          </Title>

          <ScrollContainer
            className="imgs"
            data-aos="fade"
            data-aos-delay="100"
          >
            <Image src={mockImg1} alt="좌" />
            <Image src={mockImg2} alt="좌" />
          </ScrollContainer>

          <Text data-aos="fade" data-aos-delay="200">
            {
              '딥팩토리에서 다양한 템플릿을 경험하고\n나에게 딱 맞는 앱 소개 페이지를\n만들어보세요! '
            }
          </Text>
        </ContantMobile>
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
  background-color: #f6f9fc;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    background-color: #fff;
  }
`

const Box = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  column-gap: 40px;
  column-gap: 80px;
  padding: 220px 30px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    padding: 160px 0px;
  }

  @media (max-width: 600px) {
    padding: 120px 0px;
    row-gap: 60px;
  }

  img {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 30px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`

const Contant = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 90px;

  @media (max-width: 1080px) {
    display: none;
  }
`

const ContantMobile = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }
  @media (max-width: 600px) {
    row-gap: 10px;
  }

  .imgs {
    display: flex;
    column-gap: 40px;
    overflow-x: auto;
    padding: 40px 30px 50px 30px;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 1080px) {
      img {
        max-width: 360px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.14);
      }
    }
    @media (max-width: 600px) {
      column-gap: 34px;
      img {
        max-width: 280px;
      }
    }
  }
`

const Title = styled.strong`
  font-size: 40px;
  white-space: pre-line;
  font-weight: 600;

  @media (max-width: 1080px) {
    font-size: 30px;
    text-align: center;
    padding: 0 30px;
  }

  @media (max-width: 600px) {
    font-size: 26px;
    text-align: start;
  }
`

const Text = styled.p`
  font-size: 24px;
  color: #797979;
  line-height: 1.4;
  white-space: pre-line;

  @media (max-width: 1080px) {
    font-size: 20px;
    padding: 0 30px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`
