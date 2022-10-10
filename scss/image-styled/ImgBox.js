import styled from 'styled-components'

// 이미지 박스
export const ImgBox = styled.div`
  position: relative;
  //
  width: ${({ width }) => (width ? width : '100%')};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  //
  border-radius: ${({ borderRadius }) => borderRadius};
  //
  display: flex;
  align-items: center;
  justify-content: center;
  //
  margin-top: ${({ marginT }) => marginT};
  margin-bottom: ${({ marginB }) => marginB};
  margin-right: ${({ marginR }) => marginR};
  margin-left: ${({ marginL }) => marginL};
  //

  span {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    //
    border-radius: ${({ borderRadius }) => borderRadius};
    //
    object-fit: ${({ objectFit }) => objectFit};
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ m_width }) => m_width};
    max-width: ${({ m_maxWidth }) => m_maxWidth};
    height: ${({ m_height }) => m_height};
    //
    border-radius: ${({ m_borderRadius }) => m_borderRadius};
    //
    margin-top: ${({ m_marginT }) => m_marginT};
    margin-bottom: ${({ m_marginB }) => m_marginB};
    margin-right: ${({ m_marginR }) => m_marginR};
    margin-left: ${({ m_marginL }) => m_marginL};
  }
`
