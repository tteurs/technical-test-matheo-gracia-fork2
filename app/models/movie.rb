class Movie < ApplicationRecord
  has_many :ratings

  validates_presence_of :title, :release_date
end
