# Sử dụng image Node.js để build ứng dụng React
FROM node:18-alpine

WORKDIR /app

# Copy cấu hình package
COPY package*.json ./

# Cài đặt thư viện
RUN npm install

# Copy mã nguồn
COPY . .

# Expose port (React mặc định chạy 3000 hoặc 8081 tùy cấu hình)
EXPOSE 8081

# Lệnh chạy frontend
CMD ["npm", "start"]