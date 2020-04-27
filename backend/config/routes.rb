Rails.application.routes.draw do

  resources :drink_orders
  resources :drinks, only: [:index]
  resources :orders, only: [:create]
  resources :users, only: [:index, :create]

  post "/users/history", to: "users#history"
  post "/login", to: "users#login"
  get "/persist", to: "users#persist"
  
end
