# frozen_string_literal: true

class CreateBoats < ActiveRecord::Migration[5.2]
  def change
    create_table :boats do |t|
      t.string     :name
      t.text       :description
      t.timestamps null: false
    end
  end
end
