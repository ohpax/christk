Rails.application.routes.draw do
  
  resources :posts

  root 'statics#index'
end
