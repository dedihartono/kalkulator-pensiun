# Gunakan image dasar untuk Node.js Alpine 18
FROM node:18-alpine

# Atur direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin sisa kode aplikasi
COPY . .

# Ekspos port yang akan digunakan oleh aplikasi
EXPOSE 6000

# Jalankan aplikasi
CMD [ "node", "src/server.js" ]
