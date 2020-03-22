# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :boats, as: :boats

      post 'login',   to: 'sessions#create'
      post '/signup', to: 'registrations#create'
    end
  end

  get '*path', to: 'application#fallback_index_html', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
