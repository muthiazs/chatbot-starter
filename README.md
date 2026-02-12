# Academic Chatbot (Starter Kit) 🤖

starterpack ini dibuat untuk hands on pada matakuliah Topik Khusus di Informatika UNDIP Tahun 2026

Repositori ini adalah *Starter Kit* (kerangka awal) untuk membangun aplikasi Chatbot Akademik  menggunakan **FastAPI** dan **Next.js**.

Dalam kelas ini, kita akan mengubah kerangka kosong ini menjadi chatbot cerdas yang bisa menjawab pertanyaan seputar akademik.

---

## 🛠️ Tech Stack

* **Frontend:** [Next.js](https://nextjs.org/) (React Framework) + Tailwind CSS
* **Backend:** [FastAPI](https://fastapi.tiangolo.com/) (Python)
* **AI Engine:** Google Gemini (via API)

---

## 📋 Prasyarat (Prerequisites)

Sebelum memulai, pastikan laptop kamu sudah terinstall:

1.  **Python 3.9+** ([Download disini](https://www.python.org/downloads/))
2.  **Node.js (LTS Version)** ([Download disini](https://nodejs.org/))
3.  **Git** ([Download disini](https://git-scm.com/downloads))
4.  **VS Code** (Text Editor)
5.  **Google Gemini API Key** (Dapatkan di [Google AI Studio](https://aistudio.google.com/))

---

## 🚀 Cara Install & Setup

Ikuti langkah-langkah ini satu per satu. Jangan ada yang terlewat ya!

### 1. Clone Repository
Buka terminal/CMD, lalu jalankan perintah ini untuk mengunduh kode ke laptopmu:

```bash
git clone [https://github.com/muthiazs/chatbot-starter.git](https://github.com/muthiazs/chatbot-starter.git)
cd chatbot-starter
```
### 2. Setup Backend (Python & FastAPI)
1. Masuk ke folder backend:
```bash
cd backend
```
2. Buat Virtual Environment:
Windows:
```bash
python -m venv venv
.\venv\Scripts\activate
```
```bash
python3 -m venv venv
source venv/bin/activate
```
3. Install Library:
```bash
pip install -r requirements.txt
```
4. Setup API Key di file .env:
```bash
GEMINI_API_KEY="paste_api_key_kamu_disini"
```
4. Jalankan server backend:
```bash
python main.py
```
### 3. Setup Frontend (Next.js)
1. Buka terminal baru
2. Masuk ke folder frontend:
```bash
cd frontend
```
3. Install dependencies:
```bash
npm install
```
4. Jalankan frontend:
```bash
npm run dev
```
Akses di browser:
http://localhost:3000
