Rails.application.routes.draw do
  get 'pages/index'
  post '/signup', to: 'pages#signup'


  root 'pages#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
