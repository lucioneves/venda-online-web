import { useState } from 'react';
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimiteContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} style={{ color: '#006397' }}>
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleUsername} value={username} />
          <Input type="password" title="SENHA" margin="32px 0px 0px" onChange={handlePassword} />
          <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimiteContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
