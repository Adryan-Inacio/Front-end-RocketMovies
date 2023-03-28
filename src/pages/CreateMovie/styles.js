import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    width: 1500px;
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    gap: 40px;

    .sub-header {
      h1 {
        font-size: 36px;
        margin-top: 24px;
      }
    }

    .title-note {
      display: flex;
      gap: 40px;
    }

    .tags {
      h2 {
        font-size: 20px;
        margin-bottom: 24px;
      }

      .tags-edit {
        background-color: ${({ theme }) => theme.COLORS.BLACK};

        display: flex;
        gap: 24px;

        padding: 16px;

        input {
          width: 140px;
        }
      }
    }
    .buttons {
      display: flex;
      gap: 40px;

      button:first-child {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`
