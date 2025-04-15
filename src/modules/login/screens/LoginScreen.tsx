import Input from '../../../shared/inputs/input/input';
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
      <ContainerLogin>
        <LimiteContainer>
          <LogoImage src="./logo.png" />
          <Input title="USUÁRIO" />
          <Input title="SENHA" />
        </LimiteContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
