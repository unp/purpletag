class AddDefaultAirportToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :default_airport, :string
  end
end
