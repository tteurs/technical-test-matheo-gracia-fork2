class CreateTotalMoviesByGenreView < ActiveRecord::Migration[6.1]
  def up
    execute <<-SQL
      CREATE VIEW total_movies_by_genre AS
      SELECT genre, COUNT(*) AS movie_count
      FROM movies
      GROUP BY genre;
    SQL
  end

  def down
    execute 'DROP VIEW IF EXISTS total_movies_by_genre;'
  end
end
