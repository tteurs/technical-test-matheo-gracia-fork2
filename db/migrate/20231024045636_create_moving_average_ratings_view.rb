class CreateMovingAverageRatingsView < ActiveRecord::Migration[6.1]
  def up
    execute <<-SQL
      CREATE VIEW moving_average_ratings AS
      SELECT
        r.movie_id,
        DATE_TRUNC('month', r.created_at) AS month,
        AVG(r.grade) AS moving_average
      FROM ratings r
      WHERE r.created_at >= CURRENT_DATE - INTERVAL '2 months'
      GROUP BY r.movie_id, month;
    SQL
  end

  def down
    execute 'DROP VIEW IF EXISTS moving_average_ratings;'
  end
end
