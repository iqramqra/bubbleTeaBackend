class DrinkOrder < ApplicationRecord
  belongs_to :drink
  belongs_to :order

  def user
    self.order.user.username
  end

end
