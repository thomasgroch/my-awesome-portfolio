---
title: stack
sidebar: false
techs:
- title: codeigniter
  link: https://codeigniter.com/
---

<BaseStack />


# Technology stack

## Stack de tecnologia no lado do cliente

Single Web page application:

- [Vue](https://Vue/) or [Angular](https://angular.io/) or [React](https://reactjs.org/)
- Responsive Web Design with [Bulma](https://bulma.io/)
- [HTML5 Boilerplate](http://html5boilerplate.com/)
- Compatible with modern browsers (Chrome, FireFox, Microsoft Edge…)
- Full internationalization support
- Optional [Sass](https://www.npmjs.com/package/node-sass) support for CSS design
- Optional WebSocket support with Spring Websocket

With the great development workflow:

- Easy installation of new JavaScript libraries with [NPM](https://www.npmjs.com/get-npm)
- Build, optimization and live reload with [Webpack](https://webpack.js.org/)
- Testing with [Jest](https://facebook.github.io/jest/) and [Protractor](http://www.protractortest.org/)

And what if a single Web page application isn’t enough for your needs?

- Support for the [Thymeleaf](http://www.thymeleaf.org/) template engine, to generate Web pages on the server side


## Stack de tecnologia no lado do servidor

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

## JAMstack

The way these systems work is by pulling content either from a filesystem or API endpoint and running a build task to generate an entire site in *static* HTML. The end result = wildly fast websites which have no back end and can be deployed just about anywhere.


A maneira como esses sistemas funcionam é extrair conteúdo de um sistema de arquivos ou de um ponto de extremidade da API e executar uma tarefa de construção para gerar um site inteiro em HTML estático. O resultado final = sites extremamente rápidos, sem back-end e que podem ser implantados em qualquer lugar.

PWA, SPA, SSR, SSGs e todos os outros componentes

mailgun
netlify
faunadb
forestry

####  Web Apps tradicionais

Developer hosts app and data, user controls device.

![Traditional web app](https://remotestorage.io/img/explainer-1-traditional-webapp-scoured.svg)

**Traditional hosted web stack, for example LAMP/.Net/RoR/Django/etc.**


#### [No-Backend](http://nobackend.org/) Web Apps

Developer provides app and data,user controls device.

![Traditional web app](https://remotestorage.io/img/explainer-2-no-backend-scoured.svg)

**100% client-side app plus CouchDB, Hoodie, Firebase, Parse, Kinto, etc.**


#### [Unhosted](https://unhosted.org/) Web Apps

Developer provides app only, user controls device and data.

![Traditional web app](https://remotestorage.io/img/explainer-3-unhosted-scoured.svg)

**100% client-side app plus remoteStorage, Google Drive, Dropbox, etc.**


## Stack de tecnologia para microsserviços


Os microsserviços são opcionais

- HTTP routing using [Netflix Zuul](https://github.com/Netflix/zuul) or [Traefik](https://traefik.io/)
- Service discovery using [Netflix Eureka](https://github.com/Netflix/eureka) or [HashiCorp Consul](https://www.consul.io/)

## Pronto para entrar em produção:

- Monitoring and automation
- Caching 
- Optimized static resources (gzip filter, HTTP cache headers)
- Log management configurable at runtime
- Full Docker and Docker Compose
- Suporte para todos os principais provedores de nuvem: AWS, Cloud Foundry, Heroku, Kubernetes, OpenShift, Azure, Docker…


