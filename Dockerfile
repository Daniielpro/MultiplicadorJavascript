# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia los archivos del proyecto al directorio de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 81
EXPOSE 81
