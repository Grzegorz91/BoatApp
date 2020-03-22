# frozen_string_literal: true

module Api
  module V1
    class RegistrationsController < ApplicationController
      include ErrorHandler

      def create
        User.create!(user_params)

        token = encode_token

        set_cookie(token.value)

        render json: { message: I18n.t('user.signed_up') }, status: :created
      end

      private

      def user_params
        params.require(:user).permit(:email, :password)
      end
    end
  end
end
