FROM node:14.15.0 AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build --prod

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

#docker build -t frontend .
#docker run --name frontend-container -d -p 4200:80 frontend