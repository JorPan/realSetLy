# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "pry"

song1 = Song.create(title: "Swagger Wagon", key: "D minor", tempo: 85, released: true, album: "Swagger Wagon", year: 2018)
song2 = Song.create(title: "Tequila Flip", key: "F minor", tempo: 85, released: false, album: "N/A", year: 2020)
song3 = Song.create(title: "I Need U", key: "E minor", tempo: 150, released: false, album: "N/A", year: 2019)
song4 = Song.create(title: "Hybrid Hover Craft", key: "E minor", tempo: 80, released: true, album: "Hybrid Hover Craft", year: 2020)
song5 = Song.create(title: "Look What You've Done", key: "G minor", tempo: 87, released: false, album: "N/A", year: 2020)
song6 = Song.create(title: "Area Codes Flip", key: "A minor", tempo: 100, released: false, album: "N/A", year: 2019)
song7 = Song.create(title: "Hey Arnold Flip", key: "C minor", tempo: 75, released: false, album: "N/A", year: 2020)
song8 = Song.create(title: "Scenic Route", key: "D minor", tempo: 114, released: false, album: "N/A", year: 2020)
song9 = Song.create(title: "Take It Slow Flip", key: "D minor", tempo: 114, released: false, album: "N/A", year: 2020)
song10 = Song.create(title: "Sherman St. Shuffle", key: "E minor", tempo: 83, released: false, album: "N/A", year: 2020)

artist1 = Artist.create(name: "Pandasaywhat?!", style: "Funky Electronic", location:"Denver, CO")

track1 = Track.create(artist: artist1, song: song1)
track2 = Track.create(artist: artist1, song: song2)

show1 = Show.create(date: "May 8, 2020", venue: "Rocky Mountain Virtual", location: "Online stream", price: 0, tixsold: 0)
show2 = Show.create(date: "Dec 31, 2017", venue: "Your Mom's House", location: "Denver, CO", price: 20, tixsold: 120)

setlist1 = Setlist.create(song: song1, show: show1), Setlist.create(song: song2, show: show1)


binding.pry