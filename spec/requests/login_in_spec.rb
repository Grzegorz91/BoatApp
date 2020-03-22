# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'log in', type: :request do
  let(:subject) { post api_v1_login_path, params: params }
  let(:user)    { create(:user) }

  context 'when params are correct' do
    let(:params) do
      {
        user: {
          email:    user.email,
          password: user.password
        }
      }
    end

    it 'returns success status' do
      subject

      expect(response.status).to eq 200
    end

    it 'returns token in cookie' do
      subject

      expect(response.cookies['jwt']).to be_present
    end
  end

  context 'when params are incorrect' do
    let(:params) do
      {
        user: {
          email:    user.email,
          password: 'wrong password'
        }
      }
    end

    it 'returns unauthorized status' do
      subject

      expect(response.status).to eq 401
    end

    it 'returns error message' do
      subject

      expect(json_body['error']).to be_present
    end
  end
end
