class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title
      t.text :message
      t.string :tag

      t.timestamps null: false
    end
  end
end
