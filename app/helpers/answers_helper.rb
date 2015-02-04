module AnswersHelper
  def question_collection
    Question.select('id', 'title')
  end
end
