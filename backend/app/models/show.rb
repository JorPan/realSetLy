class Show < ApplicationRecord
    has_many :setlists
    has_many :songs, through: :setlists
    has_many :tracks, through: :songs
    has_many :artists, through: :tracks
end
