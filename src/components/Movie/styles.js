import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-width: 1484px;
  border-radius: 16px;

  padding: 32px;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRADIENT};

  cursor: pointer;

  h1 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  svg {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .stars {
    display: flex;
    font-size: 11px;
    gap: 6px;
  }

  .tags {
    display: flex;
    gap: 8px;

    span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`
