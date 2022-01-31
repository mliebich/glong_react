class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :firstname
      t.string :image
      t.string :class
      t.string :maturayear
      t.string :usernodes, array: true
      t.boolean :active

      t.timestamps
    end
  end
end
