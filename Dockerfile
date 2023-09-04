# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件到容器中
COPY package*.json ./

# 安装项目依赖
RUN npm install --only=production && npm install serve -g

# 将项目文件复制到容器中
COPY . .

RUN npm run build
RUN rm -rf ./src
# 暴露应用运行的端口
EXPOSE 3000

# 启动应用
CMD ["npx", "serve", "-s", "build"]



