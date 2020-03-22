# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Users::Authenticate do
  let(:subject) { described_class.new(email: user.email, password: password).call }
  let(:user)    { create(:user) }

  context 'when credentials are correct' do
    let(:password) { user.password }

    it 'returns success' do
      expect(subject.success?).to eq true
    end

    it 'returns token' do
      expect(subject.value).to be_present
    end
  end

  context 'when credentials are incorrect' do
    let(:password) { 'wrong password' }

    it 'returns false' do
      expect(subject.success?).to eq false
    end

    it 'returns error message' do
      expect(subject.value).to eq I18n.t('user.invalid_credentials')
    end
  end
end
