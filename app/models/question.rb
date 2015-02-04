class Question < ActiveRecord::Base
  has_many :answers, foreign_key: 'id'
end
