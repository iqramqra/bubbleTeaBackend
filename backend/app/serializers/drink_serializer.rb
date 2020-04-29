class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price
end