# frozen_string_literal: true

module Users
  class Authorize < ::BaseService
    def initialize(token:)
      @token = token
    end

    def call
      return failed(I18n.t('user.unauthorized')) unless decoded_auth_token

      success(user)
    end

    private

    attr_reader :token

    def user
      User.find(decoded_auth_token[:user_id])
    end

    def decoded_auth_token
      @decoded_auth_token ||= JsonWebToken.decode(token: token)
    end
  end
end
