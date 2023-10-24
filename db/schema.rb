# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_10_24_054203) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "movies", force: :cascade do |t|
    t.string "title", null: false
    t.date "release_date", null: false
    t.string "runtime"
    t.string "genre"
    t.string "parental_rating"
    t.text "plot"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "rating"
  end

  create_table "ratings", force: :cascade do |t|
    t.bigint "movie_id", null: false
    t.integer "grade"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["movie_id"], name: "index_ratings_on_movie_id"
  end

  add_foreign_key "ratings", "movies"

  create_view "highest_rated_movies", sql_definition: <<-SQL
      SELECT m.genre,
      m.parental_rating,
      max(r.grade) AS max_rating
     FROM (movies m
       JOIN ratings r ON ((m.id = r.movie_id)))
    GROUP BY m.genre, m.parental_rating;
  SQL
  create_view "year_with_most_movies", sql_definition: <<-SQL
      SELECT EXTRACT(year FROM movies.release_date) AS release_year,
      count(*) AS movie_count
     FROM movies
    GROUP BY (EXTRACT(year FROM movies.release_date))
    ORDER BY (count(*)) DESC
   LIMIT 1;
  SQL
  create_view "moving_average_ratings", sql_definition: <<-SQL
      SELECT r.movie_id,
      date_trunc('month'::text, r.created_at) AS month,
      avg(r.grade) AS moving_average
     FROM ratings r
    WHERE (r.created_at >= (CURRENT_DATE - 'P2M'::interval))
    GROUP BY r.movie_id, (date_trunc('month'::text, r.created_at));
  SQL
  create_view "total_movies_by_genre", sql_definition: <<-SQL
      SELECT movies.genre,
      count(*) AS movie_count
     FROM movies
    GROUP BY movies.genre;
  SQL
  create_view "average_rating_by_year", sql_definition: <<-SQL
      SELECT EXTRACT(year FROM m.release_date) AS release_year,
      avg(r.grade) AS avg_rating
     FROM (movies m
       JOIN ratings r ON ((m.id = r.movie_id)))
    GROUP BY (EXTRACT(year FROM m.release_date))
    ORDER BY (EXTRACT(year FROM m.release_date));
  SQL
end
