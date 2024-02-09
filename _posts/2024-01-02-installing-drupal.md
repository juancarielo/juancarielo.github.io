---
title: Installing Drupal
tags: [Drupal, CMS, Open-source, Docker, Lando, Acquia]
# image: assets/dist/img/drupal_acquia.png
published: false
---

In this article I will share a good way to run a local environment for Drupal using Docker and Lando.

To run Drupal locally, we will use Docker, Lando and of course Git (to clone the repo). <br>
[How to install here](https://docs.lando.dev/getting-started/installation.html), I recommend reading it if you want to use it.

In the past I used `Dockerfile` and `docker-compose.yml`, however it started to get a little complex. <br>
Now I write a YAML file that Lando manipulates and runs in Docker under the hood, [here is an explanation](https://docs.lando.dev/getting-started/what-it-do.html) about that.

[We have a repo](https://github.com/juancarielo/drupal10-tutorial) where you can clone and run our tutorial, please follow the `README.md`.

<!-- ```sh
mkdir ~/Projects/drupal10-tutorial;
cd ~/Projects/drupal10-tutorial;
git clone git@github.com:juancarielo/drupal10-tutorial.git .
``` -->

This is our `.lando.yml`, we only need these lines to run the project.

```yaml
# See: https://docs.lando.dev/drupal/config.html

name: drupal10-tutorial
recipe: drupal10
config:
  php: '8.2'
  composer_version: '2'
  via: 'nginx:1.17'
  webroot: web
  database: 'mysql:5.7'
  drush: true
  xdebug: false
```
> `.lando.yml`

```sh
lando composer create-project acquia/drupal-recommended-project --no-install
```

<!-- To start the project execute this line:

```sh
lando start
```

To stop, execute this line:

```sh
lando stop
```

To delete, execute this line:

```sh
lando destroy -y
``` -->

My setup info:
- macOS Sonoma version 14.2.1
- Docker version 20.10.22, build 3a2c30b
- Docker Compose version v2.15.1
- Lando version v3.19.5

<!-- Lando version v3.19.5
Docker version 20.10.22, build 3a2c30b
Docker Compose version v2.15.1 -->

<!-- ```ruby
require 'redcarpet'

markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
> file.py


```javascript
function sayHello(name) {
  if (!name) {
    console.log('Hello World');
  } else {
    console.log(`Hello ${name}`);
  }
}
```
> file.js -->
