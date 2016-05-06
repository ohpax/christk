Rails.application.routes.draw do
  devise_for :users
	resources :projects  
  resources :posts
  resources :contacts, only: [:new, :create]
  root 'statics#index'

  get '*path' => redirect('/')

end
