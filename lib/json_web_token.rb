# frozen_string_literal: true

class JsonWebToken
  class << self
    def encode(user_id:, exp: 24.hours.from_now)
      payload = {
        user_id: user_id,
        exp:     exp.to_i
      }

      JWT.encode(payload, ENV['SECRET_KEY'])
    end

    def decode(token:)
      body = JWT.decode(token, ENV['SECRET_KEY'])[0]

      HashWithIndifferentAccess.new body
    rescue StandardError
      nil
    end
  end
end
