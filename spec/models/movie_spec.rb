require 'rails_helper'

RSpec.describe Movie, type: :model do
  it { is_expected.to have_many :ratings }

  it 'title cannot be blank' do
    movie = FactoryBot.build(:movie, title: '')
    expect(movie.valid?).to eq false
  end

  it 'release_date cannot be blank' do
    movie = FactoryBot.build(:movie, release_date: '')
    expect(movie.valid?).to eq false
  end
end
