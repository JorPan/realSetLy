class ArtistsController < ApplicationController
    def create
        @artist = Artist.create(
            name: params[:name],
            style: params[:style],
            location: params[:location]
        )
        render json: @artist
    end

    def index
        @artists = Artist.all
        render json: @artists
    end

    def show 
        @artist = Artist.find(params[:id])
        render json: @artist
    end
end
