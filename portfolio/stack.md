---
title: Stack de tecnologias
sidebar: false
mono:
- name: WordPress
  href: https://www.wordpress.com
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
- name: faunadb
  href: https://faunadb.com/
- name: mailgun
  href: https://mailgun.com/
- name: twilio
  href: http://twilio.com/
- name: Netlify
  href: https://netlify.com/
  photo: https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png
- name: forestry
  href: https://forestry.io/
- name: Vuepress
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
- name: free-for-dev
  href: https://free-for.dev/
  photo: https://cdn2.iconfinder.com/data/icons/enterprise-architecture-togaf-colored/512/Data_architecture-512.png
- name: Visual Paradigm
  href: https:/www.visual-paradigm.com/
  photo: https://logo.clearbit.com/https:/www.visual-paradigm.com/
---
Com o avanço nos estudos na area de desenvolvimento web, tive contato com diversas ferramentas e serviços. Dessa forma, elaborei uma Stack moderna na qual contempla os mesmos valores em diferentes cenários de desenvolvimento web. Segue abaixo toda (ou quase toda) a minha Stack.</br>
</br>

## Lado do servidor 💻

<BaseStack group="back" />

### Web Apps Monoliticos

<BaseStack group="mono" />

### Micro Serviços

<BaseStack group="micro" />

- HTTP routing using [Netflix Zuul](https://github.com/Netflix/zuul) or [Traefik](https://traefik.io/)
- Service discovery using [Netflix Eureka](https://github.com/Netflix/eureka) or [HashiCorp Consul](https://www.consul.io/)

## Lado do cliente 👨‍💻

<BaseStack group="front" />

Aplicativo de página única da Web (SPA):

- Componentes compatíveis com outros frameworks reativos ([Angular](https://angular.io/) ou [React](https://reactjs.org/)).
- Web design responsivo
- Compatível com todos navegadores
- Suporte à internacionalização
- Realtime WebSocket

Com o excelente fluxo de trabalho de desenvolvimento:

- Easy installation of new JavaScript libraries with [NPM](https://www.npmjs.com/get-npm)
- Build, optimization and live reload with [Webpack](https://webpack.js.org/)
- Testing with [Jest](https://facebook.github.io/jest/) and [Protractor](http://www.protractortest.org/)

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

## Privacy aware web software 🔒

- [No-Backend](http://nobackend.org/) Web App
- [Unhosted](https://unhosted.org/) Web Apps

## Workstation de desenvolvedor ‍💻 ⚙️

Você pode dar uma olhada nas ferramentas por trás do meu processo de desenvolvimento e nos serviços que executam este site em [meu setup](stack).

Faço [dotfiles](https://github.com/thomasgroch/dotfiles) também. 😉

<BaseStack group="tools" />

## Patterns ⭐️
Boas ferramentas SaaS, PaaS, IaaS para desenvolvimento automatizado da sua aplicação.

<BaseStack group="uml" />


🚧 ⭐️ 🎯📌💻🚀❓❗☕ 📨
