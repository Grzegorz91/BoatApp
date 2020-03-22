# frozen_string_literal: true

class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::MimeResponds

  def authorize_user
    result = Users::Authorize.new(
      token: cookies[:jwt]
    ).call

    render json: { error: result.value }, status: :unauthorized unless result.success?
  end

  def fallback_index_html
    respond_to do |format|
      format.html { render body: Rails.root.join('public/index.html').read }
    end
  end

  private

  def set_cookie(token)
    response.set_cookie(
      :jwt,
      {
        value:    token,
        secure:   true,
        httponly: true,
        expires:  1.hour.from_now,
        path:     '/'
      }
    )
  end

  def encode_token
    Users::Authenticate.new(
      email:    params[:user][:email],
      password: params[:user][:password]
    ).call
  end
end
