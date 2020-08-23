import React , {useState} from 'react';

import './app.css'

import Menu from './menu/menu'
import Main from './main/index'

import Email from './email/index'
 
import CreateEmail from './createEmail/index'
import MoreOptions from './more-options';

const App: React.FC = (props) => {
  const [emailItem, setEmailItem] = useState();
  const [emailData, setEmailDate] = useState([
    {
        avatar: 'https://avatars3.githubusercontent.com/u/60788150?s=460&u=2dca3b2df4fba74e309b1f306334da0dd915a23d&v=4',
        remetente: 'Vinicius Delmondes',
        assunto: 'Layout Outlook',
        corpotexto: 'Enviado de Email para Windows 10',
        horario: '23:10',
        email: 'viniciusdelmo@hotmail.com',
        datahora: '08/21/2020 23:10',
        corpoarea: 'Link para o Layout do projeto: http://teste.com.br',
        corpoarea2: 'Enviado de Email para Windows 10',
    },
    {
        avatar: 'https://user-images.githubusercontent.com/60788150/90219131-c4598980-dddb-11ea-9960-f28557995a86.JPG',
        remetente: 'Microsoft',
        assunto: 'Atualização termo de uso',
        corpotexto: 'Olá, você está recebendo este email..',
        horario: '22:36',
        email: 'viniciusdelmo@hotmail.com',
        datahora: '08/20/2020 22:36',
        corpoarea: 'Olá Você está recebendo este email porque estamos atualizando o Contrato de Serviços Microsoft, que se aplica a um ou mais produtos ou serviços da Microsoft que você utiliza. Estamos fazendo essas atualizações para esclarecer nossos termos e garantir que eles continuem transparentes para você, e também para cobrir novos produtos, serviços e recursos da Microsoft. O Contrato de Serviços Microsoft é um acordo firmado entre você e a Microsoft (ou uma de suas afiliadas) que rege o seu uso de produtos e serviços online para o consumidor da Microsoft. Você pode ler o Contrato de Serviços Microsoft integralmente aqui. Você também pode saber mais sobre essas atualizações em nossa página de perguntas frequentes, que inclui um resumo das alterações mais importantes, aqui. As atualizações no Contrato de Serviços Microsoft entrarão em vigor em 1º de outubro de 2020. Se você continuar usando nossos produtos e serviços a partir de 1º de outubro de 2020, estará de acordo com os termos do Contrato de Serviços Microsoft atualizado. Caso não concorde, você poderá optar por descontinuar o uso dos produtos e serviços e encerrar a conta da Microsoft antes que esses termos entrem em vigor. Caso seja pai ou tutor de um menor que usa produtos e serviços da Microsoft, você é responsável por esse uso, inclusive pelas compras. Obrigado por usar os produtos e serviços Microsoft.',
        corpoarea2: 'Equipe Microsoft'
    },
    {
        avatar: 'https://user-images.githubusercontent.com/60788150/90219045-9aa06280-dddb-11ea-9f4f-ad7da73a4142.JPG',
        remetente: 'Google',
        assunto: 'Atualização configuração de voz',
        corpotexto: 'Olá Vinicius! Recentemente atualiza...',
        horario: '09:50',
        email: 'viniciusdelmo@hotmail.com',
        datahora: '08/20/2020 09:50',
        corpoarea: 'Olá vinicius, Recentemente atualizamos a configuração de gravações de voz e áudio na sua Conta do Google e incluímos mais detalhes sobre como usamos gravações de áudio para melhorar os produtos e tecnologias do Google que você usa. A configuração atualizada permite que o Google salve gravações de áudio na sua Conta do Google com segurança. As gravações de áudio salvas ajudam a melhorar nossas tecnologias de reconhecimento de áudio, para que produtos como o Google Assistente possam entender melhor o idioma no futuro. Para que você possa ter controle, desativamos a configuração de gravações de áudio até que você possa ler as informações atualizadas. Se quiser, acesse sua Conta do Google para ler e ativar a configuração de gravações de áudio.',
        corpoarea2: 'Equipe Google'
    },
    {
        avatar: 'https://avatars2.githubusercontent.com/u/52277432?s=460&u=2250da1c8a8723320a3a60915f505cbda6ab6466&v=4',
        remetente: 'Johnny Peixoto',
        assunto: 'Layout do Projeto',
        corpotexto: 'Segue o documento contendo o lay...',
        horario: '08:56',
        email: 'johnny.peixoto@cognix.com.br',
        datahora: '08/17/2020 08:56',
        corpoarea: 'Olá Vinicius, Tudo bem? Segue o descritivo abaixo do projeto: http://figma.com.br',
        corpoarea2: 'Johnny Peixoto'
    },
    {
        avatar: 'https://user-images.githubusercontent.com/60788150/90306150-a9048200-dea0-11ea-9671-cbb26bca9205.png',
        remetente: 'LinkedIn',
        assunto: 'Mateus Nascimento está te seguindo',
        corpotexto: 'Veja sua nova conexão no Link...',
        horario: '07:20',
        email: 'viniciusdelmo@hotmail.com',
        datahora: '08/17/2020 07:20',
        corpoarea: 'Veja sua nova conexão no LinkedIn. Mateus é agora sua nova conexão. https://www.linkedin.com/in/vinicius-delmondes/',
    },
    {
        avatar: 'https://user-images.githubusercontent.com/60788150/90966361-02c00a00-e4a8-11ea-9340-65edbec9dd97.png',
        remetente: 'Github',
        assunto: 'A third-party Auth application',
        corpotexto: 'Hey ViniciusDelmondes! A third-part...',
        horario: '05:15',
        email: 'viniciusdelmo@hotmail.com',
        datahora: '08/17/2020 05:15',
        corpoarea: 'Hey ViniciusDelmondes! A third-party OAuth application (Heroku Dashboard) with repo scope was recently authorized to access your account. Visit https://github.com/settings/connections/applications/2bde25e3844dcbccc16d for more information. To see this and other security events for your account, visit https://github.com/settings/security If you run into problems, please contact support by visiting https://github.com/contact',
        corpoarea2: 'Thanks, The GitHub Team'
    }

]);
  return (
    <div className="App"> 
      <Menu />
      <Main 
        emailData={emailData}
        emailItem={emailItem}
        setEmailItem={setEmailItem}/>
      <CreateEmail />
      <MoreOptions />
      <Email 
        emailItem={emailItem}
        setEmailItem={setEmailItem}/>
    </div> 
  );
}

export default App;
