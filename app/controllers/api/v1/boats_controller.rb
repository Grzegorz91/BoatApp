# frozen_string_literal: true

module Api
  module V1
    class BoatsController < ::ApplicationController
      include ErrorHandler

      before_action :authorize_user
      before_action :set_boat, only: %i[show update destroy]

      def index
        boats = Boat.all

        render json: { boats: boats }, status: :ok
      end

      def show
        render json: @boat, status: :ok
      end

      def create
        boat = Boat.create!(boat_params)

        render json: boat, status: :created
      end

      def update
        @boat.update!(boat_params)

        head :no_content
      end

      def destroy
        @boat.destroy!

        head :no_content
      end

      private

      def boat_params
        params.require(:boat).permit(:name, :description)
      end

      def set_boat
        @boat = Boat.find(params[:id])
      end
    end
  end
end
