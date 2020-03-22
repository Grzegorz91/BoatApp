# frozen_string_literal: true

module Users
  class Authenticate < ::BaseService
    def initialize(email:, password:)
      @email    = email
      @password = password
    end

    def call
      return failed(I18n.t('user.invalid_credentials')) unless authenticated_user

      token = JsonWebToken.encode(user_id: user.id)

      success(token)
    end

    private

    attr_accessor :email, :password

    def user
      User.find_by(email: email)
    end

    def authenticated_user
      user&.authenticate(password)
    end

    def payload
      {
        user_id: user.id
      }
    end
  end
end
