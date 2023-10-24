class CreateHighestRatedMoviesView < ActiveRecord::Migration[6.1]
  def up
    execute <<-SQL
      CREATE VIEW highest_rated_movies AS
      SELECT genre, parental_rating, MAX(r.grade) AS max_rating
      FROM movies m
      JOIN ratings r ON m.id = r.movie_id
      GROUP BY genre, parental_rating;
    SQL
  end

  def down
    execute 'DROP VIEW IF EXISTS highest_rated_movies;'
  end
end
