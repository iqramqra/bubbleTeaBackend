class OrderSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :drink_orders
end