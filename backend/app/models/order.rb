class Order < ApplicationRecord
  belongs_to :user
  has_many :drink_orders
  has_many :drinks, through: :drink_orders

  def username 
    self.user.username
  end

end
