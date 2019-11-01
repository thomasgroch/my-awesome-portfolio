---
title: Stack de tecnologias
sidebar: false
mono:
- name: bedrock
  href: https://roots.io/bedrock/
- name: RoR
  href: https://www.rubyonrails.org
- name: Laravel
  href: https://laravel.com
- name: Nuxt.js
  href: https://nuxtjs.org/
- name: Spring application
  href: https://spring.io/
front:
- name: Tailwind
  href: https://tailwindcss.com
- name: Vue.js
  href: https://vuejs.org
- name: bulma
  href: https://bulma.io/
- name: Yarn
  href: https://yarnpkg.com/lang/en/
  photo: https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-circle.png
- name: Parcel.js
  href: https://parceljs.org/
- name: Webpack.js
  href: https://webpack.js.org/
- name: jQuery
  href: https://jquery.com
- name: HTML
  href: https://www.w3schools.com
- name: SASS
  href: https://sass-lang.com
back:
- name: Node.js
  href: https://nodejs.org/
- name: PHP
  href: https://php.net/
- name: RestfulAPI
  href: https://restfulapi.net/
- name: MariaDB
  href: https://mariadb.com
- name: MongoDB
  href: https://www.mongodb.org/
  photo: https://smyl.es/wurdp/assets/mongodb.png
- name: ElasticSearch
  href: https://www.elastic.co/products/elasticsearch
  photo: https://raw.githubusercontent.com/elastic/elasticsearch-net/master/build/nuget-icon.png
- name: PostgreSQL
  href: https://www.postgresql.org
- name: DigitalOcean
  href: https://digitalocean.com/
test:
- name: jest.js
  href: https://jestjs.io/
- name: phpunit
  href: https://phpunit.de/
micro:
- name: Docker
  href: https://docker.com
- name: Portainer
  href: https://portainer.io/
- name: Heroku
  href: https://heroku.com/
- name: sentry
  href: https://sentry.io/welcome/
  photo: https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1424297929/rhfze61a1pxtxuxny98x.png
jam:
- name: GraphQL
  href: https://graphql.org/
- name: faunadb
  href: https://faunadb.com/
- name: mailgun
  href: https://mailgun.com/
- name: Netlify
  href: https://netlify.com/
  photo: https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png
- name: twilio
  href: http://twilio.com/
  photo: https://yt3.ggpht.com/a-/AAuE7mC_egia2982ysq8Tm9TUwwMOKXgW_xsHTqiXg=s900-mo-c-c0xffffffff-rj-k-no
- name: forestry
  href: https://forestry.io/
- name: vuepress
  href: https://vuepress.vuejs.org/
- name: lambda
  href: https://aws.amazon.com/lambda/
tools:
- name: Zsh
  href: https://ohmyz.sh/
- name: WebStorm
  href: https://www.jetbrains.com/webstorm/
- name: VSCode
  href: https://www.code.visualstudio.com/
- name: SequelPro
  href: https://sequelpro.com/
- name: Postico
  href: https://eggerapps.at/postico/
  photo: https://dl2.macupdate.com/images/icons256/53411.png
- name: Postman
  href: https://getpostman.com/
uml:
- name: nobackend
  href: http://nobackend.org/
- name: free-for-dev
  href: https://free-for.dev/
  photo: https://cdn2.iconfinder.com/data/icons/enterprise-architecture-togaf-colored/512/Data_architecture-512.png
- name: Visual Paradigm
  href: https:/www.visual-paradigm.com/
  photo: https://logo.clearbit.com/https:/www.visual-paradigm.com/
---
Com o avanço nos estudos na area de desenvolvimento web, tive contato com diversas ferramentas e serviços. Dessa forma, elaborei uma Stack moderna na qual contempla os mesmos valores em diferentes fluxos de trabalho e desenvolvimento. Segue abaixo toda (ou quase toda) a minha Stack.</br>
</br>

### Web Apps Monoliticos

<BaseStack group="mono" />

### Micro Serviços

Trabalho com orquestragem de micro serviços auxiliares ao seu sistema ou arquitura completa.

*(Ex.: Descoberta de serviço, Roteamento HTTP)*

<BaseStack group="micro" />

## Lado do cliente 👨‍💻

Aplicativo de página única da Web (SPA):

- Componentes Reativos e Compatíveis com outros frameworks ([Angular](https://angular.io/) ou [React](https://reactjs.org/)).
- Web design responsivo
- Suporte à internacionalização
- WebSocket em tempo real

<BaseStack group="front" />

## Lado do servidor 💻

<BaseStack group="back" />

## JAM stack 🎯

E se um aplicação SPA não for suficiente para suas necessidades?

A renderização no lado do servidor (SSR), "Pre-Rendering" e o Static Site Generators (SSG) são técnicas para renderizar conteúdos. 
 Existe maneiras como esses sistemas funcionam é extrair conteúdo de um sistema de arquivos ou de um ponto de extremidade da API e executar uma tarefa de construção para gerar um site inteiro em HTML estático. O resultado final = sites extremamente rápidos, sem back-end e que podem ser implantados em qualquer lugar.

<BaseStack group="jam" />

## Ferramentas prontas para entrar em produção 🚀

- Monitoramento e automação.
- Caching em todas areas de maior processamento. 
- Recursos estáticos otimizados (cabeçalhos de cache HTTP).
- Gerenciamento de log configurável em tempo de execução.
- Docker completo e Docker Compose
- Nuvem agnostico Suporte para todos os principais provedores de nuvem: AWS, Cloud Foundry, Heroku, Kubernetes, OpenShift, Azure, Docker…

<BaseStack group="prod" />

## Workstation de desenvolvedor ‍💻

Você pode dar uma olhada nas ferramentas por trás do meu processo de desenvolvimento e nos serviços que executam este site em [meu setup](stack).

Faço [dotfiles](https://github.com/thomasgroch/dotfiles) também. 😉

<BaseStack group="tools" />

## Security 🔒, Patterns ⭐, UML 

Boas ferramentas SaaS, PaaS, IaaS para desenvolvimento automatizado da sua aplicação.

<BaseStack group="uml" />


🚧 ⭐️ 🎯📌💻🚀❓❗☕ 📨
