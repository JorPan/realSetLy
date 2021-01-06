# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "pry"

song1 = Song.create(title: "Swagger Wagon", key: "D minor", tempo: 85, released: true, album: "Swagger Wagon", year: 2018)
song2 = Song.create(title: "Tequila Flip", key: "F minor", tempo: 85, released: false, album: "N/A", year: 2019)

artist1 = Artist.create(name: "Pandasaywhat?!", style: "Funky Electronic", location:"Denver, CO")

track1 = Track.create(artist: artist1, song: song1)

binding.pry