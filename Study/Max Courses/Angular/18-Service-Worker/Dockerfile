# Stage 1
FROM node:20.16-alpine as build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

# Stage 2
FROM nginx:stable
COPY --from=build /app/dist/TapTag/ /usr/share/nginx/html
EXPOSE 80


# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=build /app/dist .
# EXPOSE 80
# RUN curl -l http://localhost:80
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
