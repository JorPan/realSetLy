class Song < ApplicationRecord
    has_many :artists, through: :tracks
    has_many :tracks
end
