class SetlistsController < ApplicationController
    def index
        @setlists = Setlist.all
        render json: @setlists
    end

    def show 
        @setlist = Setlist.find(params[:id])
        render json: @setlist, include: :song
    end

    
end
