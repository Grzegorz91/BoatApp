# frozen_string_literal: true

class BaseService
  private

  def success(value = 'ok')
    Result.new(success: true, value: value)
  end

  def failed(value = 'failed')
    Result.new(success: false, value: value)
  end
end
