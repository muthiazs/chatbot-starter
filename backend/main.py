import os
import google.generativeai as genai
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# 1. Load Environment Variables
load_dotenv()

# --- TODO 1: SETUP GEMINI API (Dikerjakan Bareng) ---
# api_key = os.getenv("GEMINI_API_KEY")
# ...
# ----------------------------------------------------

app = FastAPI()

# 2. Setup CORS (Biar Next.js bisa akses)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def health_check():
    return {"status": "Backend is running!", "service": "FSM Academic Chatbot"}

# --- TODO 2: BUAT ENDPOINT CHAT (Dikerjakan Bareng) ---
@app.post("/chat")
async def chat_endpoint(req: ChatRequest):
    # Simulasi jawaban sebelum AI connect
    return {"reply": f"Echo dari server: {req.message} (AI belum aktif)"}
# -----------------------------------------------------

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)