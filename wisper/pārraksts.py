import whisper

model = whisper.load_model("medium")
result = model.transcribe("0507.MP3", language="latvian")
print(result["text"])