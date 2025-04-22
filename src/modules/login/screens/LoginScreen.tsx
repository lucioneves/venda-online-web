import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimiteContainer,
  LogoImage,
  TitleLogin,
} from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimiteContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} style={{ color: '#006397' }}>
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" />
          <Input title="SENHA" />
          <Button type="primary" margin="64px 0px 16px 0px">
            ENTRAR
          </Button>
        </LimiteContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
