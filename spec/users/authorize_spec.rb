# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Users::Authorize do
  let(:subject) { described_class.new(token: token).call }
  let(:user)    { create(:user) }

  context 'when user is authorized' do
    let(:token) { JsonWebToken.encode(user_id: user.id) }

    it 'returns success' do
      expect(subject.success?).to eq true
    end

    it 'returns user' do
      expect(subject.value).to eq user
    end
  end

  context 'when user is unauthorized' do
    let(:token) { 'wrong token' }

    it 'returns false' do
      expect(subject.success?).to eq false
    end

    it 'returns error message' do
      expect(subject.value).to eq I18n.t('user.unauthorized')
    end
  end
end
