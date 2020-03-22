# frozen_string_literal: true

module Api
  module V1
    class SessionsController < ApplicationController
      def create
        token = encode_token

        if token.success?
          set_cookie(token.value)

          render json: { messaged: I18n.t('user.signed_in') }
        else
          render json: { error: token.value }, status: :unauthorized
        end
      end
    end
  end
end
