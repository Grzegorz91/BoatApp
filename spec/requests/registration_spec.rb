# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'registration', type: :request do
  let(:subject) { post api_v1_signup_path, params: params }
  let(:user)    { create(:user) }

  context 'when params are correct' do
    let(:params) do
      {
        user: {
          email:    'test@example.com',
          password: 'samplepassword'
        }
      }
    end

    it 'returns success status' do
      subject

      expect(response.status).to eq 201
    end

    it 'creates User record' do
      expect do
        subject
      end.to change { User.count }.by 1

      expect(response.status).to eq 201
    end

    it 'returns token in cookie' do
      subject

      expect(response.cookies['jwt']).to be_present
    end
  end

  context 'when params are invalid' do
    let(:params) do
      {
        user: {
          email:    '',
          password: 'samplepassword'
        }
      }
    end

    it 'returns 422 status' do
      subject

      expect(response.status).to eq 422
    end

    it 'returns validation error message' do
      subject

      expect(json_body['error']).to be_present
    end
  end
end
