puts "… Seeding development data …"

movies_data = [
  {
    "title": Faker::Movie.title,
    "release_date": Faker::Date.between(from: 2.years.ago, to: Date.today),
    "runtime": "2 hours",
    "genre": "Action",
    "parental_rating": "PG-13",
    "plot": "An exciting action movie."
  },
  {
    "title": Faker::Movie.title,
    "release_date": Faker::Date.between(from: 2.years.ago, to: Date.today),
    "runtime": "1 hour 45 minutes",
    "genre": "Comedy",
    "parental_rating": "PG",
    "plot": "A hilarious comedy for all ages."
  },
  {
    "title": Faker::Movie.title,
    "release_date": Faker::Date.between(from: 2.years.ago, to: Date.today),
    "runtime": "2 hours 15 minutes",
    "genre": "Drama",
    "parental_rating": "R",
    "plot": "A gripping drama with intense performances."
  },
  {
    "title": Faker::Movie.title,
    "release_date": Faker::Date.between(from: 2.years.ago, to: Date.today),
    "runtime": "2 hours 30 minutes",
    "genre": "Sci-Fi",
    "parental_rating": "PG-13",
    "plot": "A mind-bending science fiction adventure."
  },
  {
    "title": Faker::Movie.title,
    "release_date": Faker::Date.between(from: 2.years.ago, to: Date.today),
    "runtime": "1 hour 50 minutes",
    "genre": "Horror",
    "parental_rating": "R",
    "plot": "A spine-chilling horror flick."
  },
  {
    "title": Faker::Movie.title,
    "release_date": Faker::Date.between(from: 2.years.ago, to: Date.today),
    "runtime": "2 hours 10 minutes",
    "genre": "Romance",
    "parental_rating": "PG",
    "plot": "A heartwarming romantic story."
  },
  {
    "title": Faker::Movie.title,
    "release_date": Faker::Date.between(from: 2.years.ago, to: Date.today),
    "runtime": "2 hours",
    "genre": "Adventure",
    "parental_rating": "PG-13",
    "plot": "An epic adventure for all ages."
  },
  {
    "title": Faker::Movie.title,
    "release_date": Faker::Date.between(from: 2.years.ago, to: Date.today),
    "runtime": "1 hour 45 minutes",
    "genre": "Animation",
    "parental_rating": "G",
    "plot": "A fun animated film for kids."
  },
  {
    "title": Faker::Movie.title,
    "release_date": Faker::Date.between(from: 2.years.ago, to: Date.today),
    "runtime": "2 hours 20 minutes",
    "genre": "Mystery",
    "parental_rating": "PG-13",
    "plot": "A thrilling mystery with unexpected twists."
  },
  {
    "title": Faker::Movie.title,
    "release_date": Faker::Date.between(from: 2.years.ago, to: Date.today),
    "runtime": "2 hours 15 minutes",
    "genre": "Fantasy",
    "parental_rating": "PG",
    "plot": "A fantastical journey into a magical world."
  }
]

# Seed the movies table
movies_data.each do |data|
  Movie.create(data)
end


#add Ratings to the movies
Movie.all.each do |movie|
  5.times { Rating.create(movie_id: movie.id, grade: Faker::Number.between(from: 1, to: 5)) }
end
