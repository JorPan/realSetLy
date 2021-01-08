class SetlistsController < ApplicationController
    def index
        @setlists = Setlist.all
        render json: @setlists, include: :song
    end

    def show 
        @setlist = Setlist.find(params[:id])
        render json: @setlist, include: :song
    end

    def create
        @setlist = Setlist.create(
            song_id: params[:song_id],
            show_id: params[:show_id],
            position: params[:position]
        )
        render json: @setlist
    end

    def update
        @setlist = Setlist.find(params[:id])
        @setlist.update(
            position: params[:position]
        )
    end

    
end
