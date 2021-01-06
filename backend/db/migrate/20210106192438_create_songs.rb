class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :key
      t.integer :tempo
      t.boolean :released
      t.string :album
      t.integer :year

      t.timestamps
    end
  end
end
