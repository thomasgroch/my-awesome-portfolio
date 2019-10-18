---
title: stack
sidebar: false
mono:
- name: WordPress
  href: https://www.wordpress.com
front:
- name: HTML
  href: https://www.w3schools.com
- name: CSS
  href: https://www.w3schools.com
- name: SASS
  href: https://sass-lang.com
- name: Tailwind
  href: https://tailwindcss.com
- name: Vuejs
  href: https://vuejs.org
- name: jQuery
  href: https://jquery.com
back:
- name: Docker
  href: https://docker.com
- name: RestfulAPI
  href: https://restfulapi.net/
- name: Laravel
  href: https://laravel.com
- name: MariaDB
  href: https://mariadb.com
- name: SequelPro
  href: https://sequelpro.com
- name: Postman
  href: https://getpostman.com/
- name: Parceljs
  href: https://parceljs.org/
- name: DigitalOcean
  href: https://digitalocean.com/
- name: Yarn
  href: https://yarnpkg.com
- name: Zsh
  href: https://ohmyz.sh/
- name: WebStormIDE
  href: https://www.jetbrains.com/webstorm
- name: VSCodeIDE
  href: https://www.code.visualstudio.com/
micro:
- name: Heroku
  href: https://heroku.com/
jam:
- name: Netlify
  href: https://netlify.com
---
# Stack de tecnologia

Com o avanço nos estudos na area de desenvolvimento web, tive contato com diversas ferramentas e serviços. Dessa forma, elaborei uma Stack moderna na qual contempla os mesmos valores em diferentes cenários de desenvolvimento web. Segue abaixo toda (ou quase toda) a minha Stack.

####  Web Apps Monolitico

<BaseStack group="mono" />

![Traditional web app](https://remotestorage.io/img/explainer-1-traditional-webapp-scoured.svg)

```
O desenvolvedor hospeda aplicativos e dados, 
o usuário controla o dispositivo.
```

** por exemplo, LAMP / .Net / RoR / Django / etc. **

## Stack de tecnologia no lado do servidor

<BaseStack group="back" />

A complete [Spring application](https://spring.io/):

{PHP, Node.JS}
Laravel, Nuxt.js, lambda
- [Spring Boot](https://projects.spring.io/spring-boot/) for easy application configuration
- [Maven](https://maven.apache.org/) or [Gradle](http://www.gradle.org/) configuration for building, testing and running the application
- [“development” and “production” profiles](https://www.jhipster.tech/profiles/) (both for Maven and Gradle)
- [Spring Security](https://docs.spring.io/spring-security/site/index.html)
- [Spring MVC REST](https://spring.io/guides/gs/rest-service/) + [Jackson](https://github.com/FasterXML/jackson)
- Optional WebSocket support with Spring Websocket
- [Spring Data JPA](https://projects.spring.io/spring-data-jpa/) + Bean Validation
- Database updates with [Liquibase](http://www.liquibase.org/)
- [Elasticsearch](https://github.com/elastic/elasticsearch) support if you want to have search capabilities on top of your database
- [MongoDB](https://www.mongodb.org/) and [Couchbase](https://www.couchbase.com/) support if you’d rather use a document-oriented NoSQL database instead of JPA
- [Cassandra](https://cassandra.apache.org/) support if you’d rather use a column-oriented NoSQL database instead of JPA
- [Kafka](https://kafka.apache.org/) support if you want to use a publish-subscribe messaging system

## Stack de tecnologia para microsserviços

<BaseStack group="micro" />

Os microsserviços são opcionais
- HTTP routing using [Netflix Zuul](https://github.com/Netflix/zuul) or [Traefik](https://traefik.io/)
- Service discovery using [Netflix Eureka](https://github.com/Netflix/eureka) or [HashiCorp Consul](https://www.consul.io/)


## Stack de tecnologia no lado do cliente

<BaseStack group="front" />

Aplicativo de página única da Web (SPA):

- [Vue](https://Vue/) or [Angular](https://angular.io/) or [React](https://reactjs.org/)
- Responsive Web Design with [Bulma](https://bulma.io/)
- Compatível com navegadores modernos (Chrome, FireFox, Microsoft Edge…)
- Suporte à internacionalização
- Realtime WebSocket

Com o excelente fluxo de trabalho de desenvolvimento:

- Easy installation of new JavaScript libraries with [NPM](https://www.npmjs.com/get-npm)
- Build, optimization and live reload with [Webpack](https://webpack.js.org/)
- Testing with [Jest](https://facebook.github.io/jest/) and [Protractor](http://www.protractortest.org/)

## JAMstack

<BaseStack group="jam" />

E se um aplicação SPA não for suficiente para suas necessidades?

A renderização no lado do servidor (SSR), "Pre-Rendering" e o Static Site Generators (SSG) são técnicas para renderizar o conteúdo gerado por JavaScript em HTML. Tornando o conteúdo visível para os rastreadores e melhorando o desempenho.


Server-Side Rendering (SSR), Pre-Rendering, and Static Site Generators (SSG) are techniques to render JavaScript-generated-content to HTML. Making the content visible to crawlers and improving performance.

The way these systems work is by pulling content either from a filesystem or API endpoint and running a build task to generate an entire site in *static* HTML. The end result = wildly fast websites which have no back end and can be deployed just about anywhere.


Existe maneira como esses sistemas funcionam é extrair conteúdo de um sistema de arquivos ou de um ponto de extremidade da API e executar uma tarefa de construção para gerar um site inteiro em HTML estático. O resultado final = sites extremamente rápidos, sem back-end e que podem ser implantados em qualquer lugar.

Server-Side Rendering (SSR)
Static Site Generators (SSG)
Pre-Rendering

mailgun
netlify
faunadb
forestry


#### [No-Backend](http://nobackend.org/) Web Apps

![Traditional web app](https://remotestorage.io/img/explainer-2-no-backend-scoured.svg)

```
O desenvolvedor fornece aplicativos e dados, 
o usuário controla o dispositivo.
```

**100% client-side app plus CouchDB, Hoodie, Firebase, Parse, Kinto, etc.**

#### [Unhosted](https://unhosted.org/) Web Apps

![Traditional web app](https://remotestorage.io/img/explainer-3-unhosted-scoured.svg)

```
O desenvolvedor fornece apenas o aplicativo, 
o usuário controla o dispositivo e os dados.
```

**100% client-side app plus remoteStorage, Google Drive, Dropbox, etc.**

## Pronto para entrar em produção:

- Monitoring and automation
- Caching 
- Optimized static resources (gzip filter, HTTP cache headers)
- Log management configurable at runtime
- Full Docker and Docker Compose
- Suporte para todos os principais provedores de nuvem: AWS, Cloud Foundry, Heroku, Kubernetes, OpenShift, Azure, Docker…

⭐️ 🎯📌💻🚀❓❗☕
