class CreateYearWithMostMoviesView < ActiveRecord::Migration[6.1]
  def up
    execute <<-SQL
      CREATE VIEW year_with_most_movies AS
      SELECT CAST(EXTRACT(YEAR FROM release_date) AS INTEGER) AS release_year, COUNT(*) AS movie_count
      FROM movies
      GROUP BY release_year
      ORDER BY movie_count DESC
      LIMIT 1;
    SQL
  end

  def down
    execute 'DROP VIEW IF EXISTS year_with_most_movies;'
  end
end
