import React, { useEffect, useState } from 'react'
import Link from 'next/link'

//png,svg
import Logo from 'public/images/logo.svg'

//styles
import styled from '@emotion/styled'

//
export default function Header() {
  // 헤더 고정
  const [isFixed, setIsFixed] = useState(false)
  const scrollActive = () => {
    if (window.scrollY >= 100) {
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollActive)
  }, [])

  return (
    <>
      <HeaderBar>
        <NavBar isActive={isFixed}>
          <h1 aria-hidden="true">서비스명</h1>

          <NavView>
            <Link href="/" className="logo">
              <Logo alt="서비스명" fill={isFixed ? '#333' : '#fff'} />
            </Link>

            <Tabs>
              <Button type="button" isActive={isFixed}>
                구글 스토어
              </Button>

              <Button type="button" isActive={isFixed}>
                앱 스토어
              </Button>
            </Tabs>
          </NavView>
        </NavBar>
      </HeaderBar>
    </>
  )
}

// styled
const HeaderBar = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;

  h1 {
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
  }
`

const NavBar = styled.nav`
  z-index: 9000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 66px;
  min-height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};
  border-bottom: ${({ isActive }) => (isActive ? '1px solid #e2e2e2' : 'none')};

  @media (max-width: 1080px) {
    height: 58px;
    min-height: 58px;
  }
`

const NavView = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: auto;

  .logo {
    width: 80px;
    display: flex;

    @media (max-width: 1080px) {
      width: 76px;
    }

    svg {
      width: 100%;
    }
  }
`
const Tabs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`

const Button = styled.button`
  font-size: 15px;
  padding: 11px 20px;
  background-color: ${({ isActive }) =>
    isActive ? '#fff' : 'rgba(255, 255, 255, 0.3)'};
  border: ${({ isActive }) =>
    isActive ? '1px solid #ccc' : ' 1px solid #fff;'};
  border-radius: 100px;
  color: ${({ isActive }) => (isActive ? '#444' : ' #fff;')};

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? '#f9f9f9' : 'rgba(255, 255, 255, 0.4)'};
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 14px;
  }

  @media (max-width: 400px) {
    font-size: 13px;
  }
`
