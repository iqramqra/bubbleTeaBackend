class OrdersController < ApplicationController
    before_action :authorized, only: [:create]

    def index
        @orders = Order.all
        render json: @orders
    end
    
    def create
        @new_order = Order.create(user: @user)
    
        params[:drink_ids].each do |drink_id|
            DrinkOrder.create(drink_id: drink_id, order: @new_order, topping: "Tapoica" , size: "Medium")
        end
    
        render json: @new_order
    end

    def destroy
        # @delete_order = Order.find()
        # @delete_order.destroy

    end
end
