class AddPositionToSetlist < ActiveRecord::Migration[6.0]
  def change
    add_column :setlists, :position, :integer
  end
end
