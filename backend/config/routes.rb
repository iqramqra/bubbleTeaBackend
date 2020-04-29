Rails.application.routes.draw do
  resources :drinks, only: [:index]
  resources :users, only: [:index, :create]
  resources :orders
  resources :drink_orders
  post '/login', to: 'users#login'
  get '/persist', to: 'users#persist'
end