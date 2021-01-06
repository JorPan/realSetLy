class Artist < ApplicationRecord
    has_many :tracks
    has_many :songs, through: :tracks
    has_many :setlists, through: :songs
    has_many :shows, through: :setlists
end
