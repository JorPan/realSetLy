class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :style
      t.string :location

      t.timestamps
    end
  end
end
