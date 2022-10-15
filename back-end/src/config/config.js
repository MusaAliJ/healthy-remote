export const config = {
  secrets: {
    jwt: "healthy-remote"
  },
  whatsapp: {
    options: {
      method: "POST",
      hostname: "api.ultramsg.com",
      port: null,
      path: "/instance20195/messages/chat",
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    },
    token: "qt5timsu5vregcia"
  },
  dbUrl:
    "mongodb+srv://musa:admin123@cluster0.ha3f4mc.mongodb.net/?retryWrites=true&w=majority"
}
