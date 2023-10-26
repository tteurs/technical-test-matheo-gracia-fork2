puts "… Seeding production data …"

movies_data = [
  {
    "title": "The lord of the Rings: The felowship of the ring",
    "release_date": "Fri, 12 Dec 2022",
    "runtime": "2 hours",
    "genre": "Action",
    "parental_rating": "PG-13",
    "plot": "An exciting action movie."
  },
  {
    "title": "The lord of the Rings: The two towers",
    "release_date": "Sun, 13 Nov 2022",
    "runtime": "1 hour 50 minutes",
    "genre": "Horror",
    "parental_rating": "R",
    "plot": "A spine-chilling horror flick."
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "release_date": "Fri, 12 Dec 2021",
    "runtime": "2 hours 30 minutes",
    "genre": "Sci-Fi",
    "parental_rating": "PG-13",
    "plot": "A mind-bending science fiction adventure."
  },
  {
    "title": "Back to the Future",
    "release_date": "Fri, 12 Dec 1985",
    "runtime": "1 hour 45 minutes",
    "genre": "Comedy",
    "parental_rating": "PG",
    "plot": "A hilarious comedy for all ages."
  },
  {
    "title": "The Matrix",
    "release_date": "Fri, 12 Dec 1999",
    "runtime": "2 hours 15 minutes",
    "genre": "Drama",
    "parental_rating": "R",
    "plot": "A gripping drama with intense performances."
  }
]

# Seed the movies table
movies_data.each do |data|
  Movie.create(data)
end


#add Ratings to the movies
Movie.all.each do |movie|
  5.times { Rating.create(movie_id: movie.id, grade: rand(1..5)) }
end
