# 🐞 Debug Report - MCP Server JSONPlaceholder Tool

## 📄 Log Hasil Debugging

### 📌 Log dari `send_log_message()`:

```json
{
  "type": "server_log",
  "level": "error",
  "message": {},
  "data": {
    "status": 404
  },
  "timestamp": "2025-06-29T16:59:34.573Z"
}
```
Screenshot :
SUCCESS
![Screenshot 2025-06-30 001441](https://github.com/user-attachments/assets/e7fdcffb-1926-4b5a-ae29-5501fcb25f8c)

ERROR
![Screenshot 2025-06-30 001252](https://github.com/user-attachments/assets/58e9a43f-29da-45aa-b2ae-659e1a87cb54)


### 📌 Catatan:
1. Bagaimana cara setup MCP Server, merasa sedikit kesusahan untuk melakukan setup server MCP, tetapi cukup terbantu dengan bantuan AI. Menggunakan template MCP menurut saya lebih mudah
2. Blocking ketika melakukan koneksi MCP Server, tidak bisa konek MCP Server, tapi setelah diteliti, kurang untuk menambahkan Proxy Session Token
3. Membuat function send_log_message(), saat scripting, sedikit kewalahan untuk menampilkan hasil log. Namun bisa diselesaikan dengan bantuan AI.
