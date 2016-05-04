Rails.application.routes.draw do
	resources :projects  
  resources :posts

  root 'statics#index'
end
