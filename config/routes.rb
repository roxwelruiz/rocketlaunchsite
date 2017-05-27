Rails.application.routes.draw do
  #devise_for :users

  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout' }

  resources :users

  # nesting the messages resource within the rooms resource
  resources :rooms do
    resources :messages
  end

  root 'main_page#index'

  mount ActionCable.server => '/cable'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
