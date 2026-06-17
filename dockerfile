# Use official nginx image
FROM nginx:alpine

# Copy your shopping site files to nginx folder
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY app.js /usr/share/nginx/html/app.js

# Expose port 80
EXPOSE 80

# nginx runs by default (no CMD needed)