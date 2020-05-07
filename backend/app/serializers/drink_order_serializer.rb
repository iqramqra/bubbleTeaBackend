class DrinkOrderSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :drink
  belongs_to :drink
end
