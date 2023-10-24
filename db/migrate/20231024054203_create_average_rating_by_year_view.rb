class CreateAverageRatingByYearView < ActiveRecord::Migration[6.1]
  def up
    execute <<-SQL
      CREATE VIEW average_rating_by_year AS
      SELECT EXTRACT(YEAR FROM release_date) AS release_year, AVG(r.grade) AS avg_rating
      FROM movies m
      JOIN ratings r ON m.id = r.movie_id
      GROUP BY release_year
      ORDER BY release_year;
    SQL
  end

  def down
    execute 'DROP VIEW IF EXISTS average_rating_by_year;'
  end
end
