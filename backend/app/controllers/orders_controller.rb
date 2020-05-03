class OrdersController < ApplicationController
    before_action :authorized, only: [:create
    
    def create
        @new_order = Order.create(user: @user)
    
        params[:drink_ids].each do |drink_id|
            DrinkOrder.create(drink_id: drink_id, order: @new_order, topping: "Tapoica" , size: "Medium")
        end
    
        render json: @new_order
    end

end
