# frozen_string_literal: true

class Result
  attr_reader :success, :value

  def initialize(success:, value: 'ok')
    @success = success
    @value   = value
  end

  def success?
    success
  end
end
