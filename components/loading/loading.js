import styled from "styled-components";

const Loading = styled.div`
  width: 100%;
  height: 77.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
`;

const Spinner = styled.img`
  width: 15em;
  height: auto;
  animation: App-logo-spin infinite 20s linear;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingComponent = () => (
  <Loading>
    <Spinner src="/images/spinner.svg" alt="loading-spinner" />
  </Loading>
);

export default LoadingComponent;
