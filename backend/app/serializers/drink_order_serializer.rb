class DrinkOrderSerializer < ActiveModel::Serializer
  attributes :id, :drink_id, :order_id, :topping, :size
  belongs_to :drink
end
