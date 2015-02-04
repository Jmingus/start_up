json.array!(@answers) do |answer|
  json.extract! answer, :id, :answer_text, :correct
  json.url answer_url(answer, format: :json)
end
