# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:subject) { described_class.new(params) }
  let(:params) do
    {
      email:    email,
      password: password
    }
  end
  let(:email)    { 'example.com' }
  let(:password) { 'testpassword' }

  context 'validations' do
    context 'format' do
      context 'with incorrect format' do
        let(:email) { 'incorrect.com' }

        it 'is invalid' do
          expect(subject).to                         be_invalid
          expect(subject.errors.messages[:email]).to be_present
        end
      end
    end

    context 'uniq' do
      context 'when there is already user with that email' do
        let(:email) { create(:user).email }

        it 'is invalid' do
          expect(subject).to                         be_invalid
          expect(subject.errors.messages[:email]).to be_present
        end
      end
    end

    context 'password' do
      context 'with length shorter that 6 letters' do
        let(:password) { '12345' }

        it 'is invalid' do
          expect(subject).to                         be_invalid
          expect(subject.errors.messages[:password]).to be_present
        end
      end
    end
  end
end
