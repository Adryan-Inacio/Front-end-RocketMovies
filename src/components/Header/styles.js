import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 24px auto;

    max-width: 1500px;

    h1 {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    input {
      width: 800px;
      height: 56px;

      padding: 19px 24px;

      border: none;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      color: ${({ theme }) => theme.COLORS.GRAY_300};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > .image img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 9px;

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
