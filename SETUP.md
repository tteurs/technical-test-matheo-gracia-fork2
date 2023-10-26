# Setup


- API written in Ruby on Rails and All endpoints return JSON
- UI written in React


## Rails API

install Ruby 2.7.1 using RVM or ASDF

#### you also need to have postgresql installed

### add gem Bundle

$ gem install bundler

then

$ bundles install

after the bundle has installed all dependencies you need to setup your DB

$ rails db:setup

if you want to run tests you wil need to run the following

$ rails db:test:prepare
$ RAILS_ENV=test rails db:migrate

after this just run the following to star the API and the Frontend application.

$ bundle exec foreman start

to run tests you need to run the following

$ rspec spec

## running on docker

you can run it with the following command

$ docker-compose up -d

$ docker-compose run api rails db:migrate
