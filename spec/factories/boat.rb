# frozen_string_literal: true

FactoryBot.define do
  factory :boat do
    sequence(:name) { |n| "Example name #{n}" }
    description     { 'test description' }
  end
end
