import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

//components
import { Drawer } from './Drawer'

//custom-style
import DrawerTab from 'custom/tabs/DrawerTab'

//png,svg
import Logo from 'public/images/logo.svg'

//atoms
import { useRecoilState } from 'recoil'
import { drawerAtom } from 'atoms/layout-atom'

//styles
import { css } from '@emotion/react'
import styled from '@emotion/styled'

//
export default function Header() {
  const router = useRouter()
  // 헤더 고정
  const [isFixed, setIsFixed] = useState(false)
  const scrollActive = () => {
    if (window.scrollY >= 50) {
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollActive)
  }, [])

  // 메뉴 토글
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom)
  const drawerActive = () => {
    setIsDrawer(!isDrawer)
  }

  return (
    <>
      <Box>
        <header>
          <h1 aria-hidden="true">딥팩토리</h1>

          <nav>
            <Link href="/" css={logoStyled}>
              <Logo alt="로고" />
            </Link>

            <DrawerTab onClick={drawerActive} />
          </nav>
        </header>
      </Box>

      {/* 드로어 메뉴 */}
      <Drawer />
    </>
  )
}

//styled
const Box = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;

  header {
    z-index: 999;
    //
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    //
    width: 100%;
    height: 70px;
    //
    display: flex;
    justify-content: center;
    align-items: center;
    //
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
    //
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

    nav {
      width: 100%;
      height: 100%;
      padding: 0 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      transition: 0.3s ease-in-out;
      cursor: auto;
    }

    @media (max-width: 1080px) {
      height: 58px;

      nav {
        padding: 0 20px;
      }
    }
  }

  @media (max-width: 1080px) {
    height: 58px;
  }
`

const logoStyled = css`
  width: 34px;
  height: 34px;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    width: 100%;
  }

  svg {
    width: 100%;
    width: 100%;
  }

  @media (max-width: 1080px) {
    width: 28px;
    height: 28px;
  }
`
