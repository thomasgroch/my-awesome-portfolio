---
title: stack
sidebar: false
date: 2019-03-13 03:00:00
tags:
- asd
- qwe
---

Participo na formação do produto: trabalho com os clientes para resolver os seus problemas, proporcionando uma excelente e agradável experiência ao usuário.

Tecnologias que uso atualmente: {PHP, Node.JS}, Vue, {Laravel, Nuxt.js, lambda}, SSGs e todos os outros componentes JAMstack

PWA, SPA, SSR, SSG

mailgun
netlify
faunadb
forestry


# Technology stack

## Technology stack on the client side

Single Web page application:

- [Angular](https://angular.io/) or [React](https://reactjs.org/)
- Responsive Web Design with [Twitter Bootstrap](https://getbootstrap.com/)
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

## Technology stack on the server side

A complete [Spring application](https://spring.io/):

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

## Technology stack for microservices

Microservices are optional, and fully supported:

- HTTP routing using [Netflix Zuul](https://github.com/Netflix/zuul) or [Traefik](https://traefik.io/)
- Service discovery using [Netflix Eureka](https://github.com/Netflix/eureka) or [HashiCorp Consul](https://www.consul.io/)

## Ready to go into production:

- Monitoring with [Metrics](http://metrics.dropwizard.io/) and [the ELK Stack](https://www.elastic.co/products)
- Caching with [ehcache](http://ehcache.org/) (local cache), [hazelcast](http://www.hazelcast.com/) or [Infinispan](http://infinispan.org/)
- Optimized static resources (gzip filter, HTTP cache headers)
- Log management with [Logback](http://logback.qos.ch/), configurable at runtime
- Connection pooling with [HikariCP](https://github.com/brettwooldridge/HikariCP) for optimum performance
- Builds a standard WAR file or an executable JAR file
- Full Docker and Docker Compose support
- Support for all major cloud providers: AWS, Cloud Foundry, Heroku, Kubernetes, OpenShift, Azure, Docker…





https://remotestorage.io/

####  Traditional Web Apps

![Traditional web app](https://remotestorage.io/img/explainer-1-traditional-webapp-scoured.svg)Traditional hosted web stack, for example LAMP/.Net/RoR/Django/etc.

Developer hosts app and data,
user controls device.

#### [No-Backend](http://nobackend.org/) Web Apps

![Traditional web app](https://remotestorage.io/img/explainer-2-no-backend-scoured.svg)100% client-side app plus CouchDB, Hoodie, Firebase, Parse, Kinto, etc.

Developer provides app and data,
user controls device.

#### [Unhosted](https://unhosted.org/) Web Apps

![Traditional web app](https://remotestorage.io/img/explainer-3-unhosted-scoured.svg)100% client-side app plus remoteStorage, Google Drive, Dropbox, etc.

Developer provides app only,
user controls device and data.



The way these systems work is by pulling content either from a filesystem or API endpoint and running a build task to generate an entire site in *static* HTML. The end result = wildly fast websites which have no back end and can be deployed just about anywhere.
