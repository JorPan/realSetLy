class ShowsController < ApplicationController
    def index
        @shows = Show.all
        render json: @shows, include: :songs
    end

    def show
        @show = Show.find(params[:id])
        render json: @show, include: :songs
    end
end
