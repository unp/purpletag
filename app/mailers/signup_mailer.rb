class SignupMailer < ApplicationMailer
  default from: 'PurpleTag Membership <membership@getpurpletag.com>'

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Ready to skip the baggage claim?')
  end

  def signup_notification(user)
    @user = user
    mail(to: @user.email, subject: 'New user!')
  end
end
