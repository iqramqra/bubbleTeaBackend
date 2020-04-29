class CreateDrinkOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :drink_orders do |t|
      t.string :topping
      t.string :size
      t.belongs_to :drink, null: false, foreign_key: true
      t.belongs_to :order, null: false, foreign_key: true

      t.timestamps
    end
  end
end