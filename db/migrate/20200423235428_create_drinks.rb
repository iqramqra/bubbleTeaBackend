class CreateDrinks < ActiveRecord::Migration[6.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.string :image
      t.float :price
      t.string :types

      t.timestamps
    end
  end
end
