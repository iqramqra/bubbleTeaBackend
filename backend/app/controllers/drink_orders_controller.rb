class DrinkOrdersController < ApplicationController

    def index
        @drink_orders = DrinkOrder.all
        render json: @drink_orders
    end
    
end
