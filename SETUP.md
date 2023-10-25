# Setup


- API written in Ruby on Rails and All endpoints return JSON
- UI written in React
  ther is a verios os the runin on this link:


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

after this just run the following to star the APi and the Frontend application.

$ foreman start


### GET /movies
List all movies on a reverse chronological order.

Data from the movie that should be shown:
- title
- release_date
- genre
- runtime
- parental_rating
- plot
- average user ratings (from 1 to 5)

### GET /movies/:id
Return information about a particular movie.

### GET /movies/search?title=
Search all movies on the database given a searched term.

### POST /movies
Add a new movie.

### DELETE /movies/:id
Remove a movie.

### POST /ratings/:movie_id
Rate a movie.

WARNING: This is a fictional piece of work. No real codebases were harmed on the production of this test.
