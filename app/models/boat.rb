# frozen_string_literal: true

class Boat < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
end
