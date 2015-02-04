json.array!(@questions) do |question|
  json.extract! question, :id, :title, :message, :tag
  json.url question_url(question, format: :json)
end
