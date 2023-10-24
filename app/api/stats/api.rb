module Stats
  class API < Grape::API
    version 'v1', using: :path
    prefix "api"
    format :json

    resource :stats do
      # Route for highest-rated movies by genre and parental rating
      get :highest_rated_movies do
        highest_rated_movies = HighestRatedMovie.all
        present highest_rated_movies
      end

      # Route for year with the most movies
      get :year_with_most_movies do
        year_with_most_movies = YearWithMostMovie.all
        present year_with_most_movies
      end

      # Route for moving average of ratings over the past two months
      get :moving_average_ratings do
        moving_average_ratings = MovingAverageRating.all
        present moving_average_ratings
      end

      # Route for total number of movies by genre
      get :total_movies_by_genre do
        total_movies_by_genre = TotalMoviesByGenre.all
        present total_movies_by_genre
      end

      # Route for average rating by year
      get :average_rating_by_year do
        average_rating_by_year = AverageRatingByYear.all
        present average_rating_by_year
      end

    end
  end
end
