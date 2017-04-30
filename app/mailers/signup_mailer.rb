class SignupMailer < ApplicationMailer
  default from: 'membership@getpurpletag.com'

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Ready to skip the baggage claim?')
  end
end
