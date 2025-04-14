import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimiteContainer,
  LogoImage,
} from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimiteContainer>
          <LogoImage src="./logo.png" />
        </LimiteContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
