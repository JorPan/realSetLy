# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_06_194014) do

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "style"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "setlists", force: :cascade do |t|
    t.integer "song_id", null: false
    t.integer "show_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["show_id"], name: "index_setlists_on_show_id"
    t.index ["song_id"], name: "index_setlists_on_song_id"
  end

  create_table "shows", force: :cascade do |t|
    t.date "date"
    t.string "venue"
    t.string "location"
    t.integer "price"
    t.integer "tixsold"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "songs", force: :cascade do |t|
    t.string "title"
    t.string "key"
    t.integer "tempo"
    t.boolean "released"
    t.string "album"
    t.integer "year"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tracks", force: :cascade do |t|
    t.integer "artist_id", null: false
    t.integer "song_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_tracks_on_artist_id"
    t.index ["song_id"], name: "index_tracks_on_song_id"
  end

  add_foreign_key "setlists", "shows"
  add_foreign_key "setlists", "songs"
  add_foreign_key "tracks", "artists"
  add_foreign_key "tracks", "songs"
end
