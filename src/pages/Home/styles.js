import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px 95px auto;
  grid-template-areas:
    'header'
    'subheader'
    'content';

  > main {
    display: flex;
    flex-direction: column;

    max-width: 1500px;
    margin: 30px auto;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }
`

export const SubHeader = styled.div`
  grid-area: subheader;
  width: 1500px;
  height: 48px;
  margin: 30px auto;

  .sub-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 0;

      width: 207px;
    }
  }
`

export const Content = styled.div`
  grid-area: content;

  > .movies {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-right: 8px;

    h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
