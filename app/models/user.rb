class User < ApplicationRecord
  validates_presence_of :name
  validates_format_of(
    :email,
    with: /\A[^@]+@[^@]+\z/,
    allow_nil: false
  )
end
