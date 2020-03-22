# README

Simple Boat App

I've deployed it on heroku so you can use production version: https://boat-app-greg.herokuapp.com

If you would like to run it locally:

Server:

* install ruby (i used 2.6.5)

* `git clone git@github.com:Grzegorz91/BoatApp.git`

* install bundler: `gem install bundler`

* install gems: `bundle install`

* install mysql or any other DB engine

* edit database.yml to adjust to your local settings

* create databases: `rake db:create`

* run migrations: `rake db:migrate`

* start server: `rails s -p 3001`


Client:

* move to client directory `cd client`

* install packages: `yarn install`

* `yarn start`