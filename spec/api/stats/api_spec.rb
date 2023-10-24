require 'rails_helper'

RSpec.describe Stats::API do

  describe 'GET /api/v1/stats/highest_rated_movies' do
    it 'returns the highest rated movies by genre and parental rating' do
      get "/api/v1/stats/highest_rated_movies"
      expect(response.status).to eq(200)
    end
  end

  describe 'GET /api/v1/stats/year_with_most_movies' do
    it 'returns the year with the most movies' do
      get "/api/v1/stats/year_with_most_movies"
      expect(response.status).to eq(200)
    end
  end

  describe 'GET /api/v1/stats/moving_average_ratings' do
    it 'returns the moving average of ratings over the past two months' do
      get "/api/v1/stats/moving_average_ratings"
      expect(response.status).to eq(200)
    end
  end

  describe 'GET /api/v1/stats/total_movies_by_genre' do
    it 'returns the total number of movies by genre' do
      get "/api/v1/stats/total_movies_by_genre"
      expect(response.status).to eq(200)
    end
  end

  describe 'GET /api/v1/stats/average_rating_by_year' do
    it 'returns the average rating by year' do
      get "/api/v1/stats/average_rating_by_year"
      expect(response.status).to eq(200)
    end
  end
end
