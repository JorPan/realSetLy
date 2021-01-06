class Song < ApplicationRecord
    has_many :tracks
    has_many :artists, through: :tracks
    has_many :setlists
    has_many :shows, through: :setlists
end
