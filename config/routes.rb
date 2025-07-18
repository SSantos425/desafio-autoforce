Rails.application.routes.draw do
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "home#index"

  get 'seminovos', to: 'home#seminovos', as: 'seminovos'
  get 'quemsomos', to: 'home#quemsomos', as: 'quemsomos'
  get 'faleconosco', to: 'home#faleconosco', as: 'faleconosco'
  get 'corolla', to: 'home#corolla', as: 'corolla'

end
