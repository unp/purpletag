class PagesController < ApplicationController
  def index
    @airports = [
      ['CMH', 'Columbus'],
      ['BOS', 'Boston']
    ]
  end

  def signup
    @user = User.new(signup_params)
    if @user.save
      SignupMailer.welcome_email(@user).deliver_later
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  private

  def signup_params
    params.require(:user).permit(:name, :email, :default_airport)
  end
end
