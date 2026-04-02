# Sử dụng image Node.js phiên bản 18
FROM node:18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json vào trước để cài đặt thư viện
COPY package*.json ./

# Cài đặt các thư viện (chỉ cài dependencies cần thiết cho production)
RUN npm install

# Copy toàn bộ mã nguồn còn lại vào container
COPY . .

# Mở port 8080
EXPOSE 8080

# Lệnh chạy ứng dụng khi container khởi động
CMD ["node", "server.js"]