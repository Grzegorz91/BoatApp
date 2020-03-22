# frozen_string_literal: true

require 'rails_helper'

RSpec.shared_examples 'unauthorized' do
  it 'returns unauthorized' do
    cookies[:jwt] = ''

    subject

    expect(response.status).to eq 401
  end
end

RSpec.describe 'boats', type: :request do
  let(:user)  { create(:user) }
  let(:token) { JsonWebToken.encode(user_id: user.id) }
  let(:boat)  { create(:boat) }

  context 'POST /boats' do
    context 'when user is signed in' do
      let(:subject) { post api_v1_boats_path, params: params }

      before { cookies[:jwt] = token }

      context 'when params are valid' do
        let(:params) do
          {
            boat: {
              name:        'example name',
              description: 'beautiful boat'
            }
          }
        end

        it 'creates a boat successfully' do
          expect do
            subject
          end.to change { Boat.count }.by 1

          expect(response.status).to eq 201
        end
      end

      context 'when params are invalid' do
        let(:params) do
          {
            boat: {
              name:        '',
              description: 'beautiful boat'
            }
          }
        end

        it 'does not create a boat' do
          expect do
            subject
          end.to_not change { Boat.count }
        end

        it 'returns errors message and 422 status' do
          subject

          expect(response.status).to    eq 422
          expect(json_body['error']).to be_present
        end
      end
    end

    context 'when user is not signed in' do
      let(:subject) { post api_v1_boats_path }

      it_behaves_like 'unauthorized'
    end
  end

  context 'GET /boats' do
    let(:subject) { get api_v1_boats_path }

    context 'when user is signed in' do
      before { cookies[:jwt] = token }

      it 'returns boats list' do
        create_list(:boat, 4)

        subject

        expect(response.status).to          eq 200
        expect(json_body['boats'].count).to eq 4
      end
    end

    context 'when user is not signed in' do
      it_behaves_like 'unauthorized'
    end
  end

  context 'SHOW /boats/:id' do
    let(:subject) { get api_v1_boat_path(boat) }

    context 'when user is signed in' do
      before { cookies[:jwt] = token }

      it 'returns boat' do
        subject

        expect(json_body['id']).to eq boat.id
      end

      context 'when trying to access non existing boat' do
        it 'returns not found status' do
          get api_v1_boat_path(-1)

          expect(response.status).to eq 404
        end
      end
    end

    context 'when user is not signed in' do
      it_behaves_like 'unauthorized'
    end
  end

  context 'DELETE /boats/:id' do
    let(:subject) { delete api_v1_boat_path(boat) }

    context 'when user is signed in' do
      before { cookies[:jwt] = token }

      it 'deletes a boat record' do
        boat

        expect do
          subject
        end.to change { Boat.count }.by(-1)
        expect(response.status).to eq 204
      end

      context 'when trying to delete non existing boat' do
        it 'returns not found status' do
          delete api_v1_boat_path(-1)

          expect(response.status).to eq 404
        end
      end
    end

    context 'when user is not signed in' do
      it_behaves_like 'unauthorized'
    end
  end

  context 'PATCH /boats/:id' do
    let(:subject) { patch api_v1_boat_path(boat), params: params }
    let(:boat)    { create(:boat) }

    context 'when user is signed in' do
      before { cookies[:jwt] = token }

      context 'when params are valid' do
        let(:params) do
          {
            boat: {
              name: 'changed name'
            }
          }
        end

        it 'updates a boat record' do
          expect do
            subject
          end.to change { boat.reload.name }.to 'changed name'
        end
      end

      context 'when params are invalid' do
        let(:params) do
          {
            boat: {
              name: ''
            }
          }
        end

        it 'does not update a boat' do
          expect do
            subject
          end.to_not change { boat.reload.name }
        end

        it 'returns errors message and 422 status' do
          subject

          expect(response.status).to    eq 422
          expect(json_body['error']).to be_present
        end
      end
    end
  end
end
