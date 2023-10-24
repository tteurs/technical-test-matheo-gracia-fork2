# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "… Seeding data …"
# Create 5 movies to add to DB
5.times { Movie.create(title: Faker::Movie.title,
                        release_date: Faker::Date.between(from: 2.years.ago, to: Date.today),
                        genre: Faker::Gender.type ,
                        runtime: '2hours' ,
                        parental_rating: 'PG13',
                        plot: Faker::Lorem.sentence
) }

#add Ratings to the movies
Movie.all.each do |movie|
  5.times { Rating.create(movie_id: movie.id, grade: Faker::Number.between(from: 1, to: 5)) }
end
