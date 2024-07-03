Descrição
Este projeto é um aplicativo React Native que exibe a localização das escolas municipais do Recife em um mapa. O aplicativo permite ao usuário visualizar as escolas e sua própria localização em um mapa interativo. Ele usa a biblioteca React Navigation para navegação entre telas e a biblioteca Expo Location para acessar a localização do usuário.

Estrutura do Projeto
A estrutura do projeto é a seguinte:

go
Copiar código
.
├── App.js
├── screens
│   ├── HomeScreen.js
│   └── MapScreen.js
├── package.json
└── README.md
App.js: Arquivo principal do aplicativo que configura a navegação entre as telas.
screens/: Pasta contendo as telas do aplicativo.
HomeScreen.js: Tela inicial do aplicativo, com um botão para navegar para a tela do mapa.
MapScreen.js: Tela que exibe um mapa com marcadores para as escolas e a localização do usuário.
package.json: Arquivo de configuração do npm, contendo dependências e scripts do projeto.
README.md: Arquivo de documentação do projeto.
Configuração e Execução
Pré-requisitos
Certifique-se de ter os seguintes softwares instalados em sua máquina:

Node.js
npm ou yarn
Expo CLI (npm install -g expo-cli)
Passos para Configuração
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

Se estiver usando npm:

bash
Copiar código
npm install
Se estiver usando yarn:

bash
Copiar código
yarn install
Execute o aplicativo:

Se estiver usando npm:

bash
Copiar código
npm start
Se estiver usando yarn:

bash
Copiar código
yarn start
Isso iniciará o servidor de desenvolvimento do Expo. Use o aplicativo Expo Go em seu dispositivo móvel para escanear o código QR exibido no terminal ou no navegador.

Informações Adicionais
API de Dados das Escolas
O aplicativo busca os dados das escolas municipais do Recife a partir da seguinte API pública:

bash
Copiar código
http://dados.recife.pe.gov.br/api/3/action/datastore_search?resource_id=7c613836-9edd-4c0f-bc72-495008dd29c3&limit=20
Permissões de Localização
Para acessar a localização do usuário, o aplicativo usa a biblioteca expo-location. Certifique-se de que as permissões de localização estão configuradas corretamente em seu dispositivo.

Estilização
O aplicativo utiliza StyleSheet do React Native para estilizar os componentes. As definições de estilo estão localizadas diretamente nos arquivos de cada tela (HomeScreen.js e MapScreen.js).

Dependências Principais
react-navigation: Biblioteca para navegação entre telas.
react-native-maps: Biblioteca para integração com mapas.
expo-location: Biblioteca do Expo para acesso à localização do usuário.
Contato
Para mais informações, entre em contato:

Nome: Jonatha Manoel do Nascimento Santos
Email: jonatha69pe@gmail.com
GitHub: JonathaSantosADS 
