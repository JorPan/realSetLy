class SongsController < ApplicationController
    def create
        @song = Song.create(
            title: params[:title],
            key: params[:key],
            tempo: params[:tempo],
            released: params[:released],
            album: params[:album],
            year: params[:year],
            # artist: params[:artist]
        )
        render json: @song
    end

    def index
        @songs = Song.all
        render json: @songs
    end

    def show
        @song = Song.find(params[:id])
        render json: @song
    end

    def destroy
        @song = Song.find(params[:id])
        @song.destroy
        render status: 204
    end
end
