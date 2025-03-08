#!/bin/bash

# Обновление системы
apt-get update
apt-get upgrade -y

# Установка необходимых пакетов
apt-get install -y nginx

# Настройка Nginx
cat > /etc/nginx/sites-available/carlifespb.ru << 'EOL'
server {
    listen 80;
    server_name carlifespb.ru www.carlifespb.ru;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
        expires max;
        log_not_found off;
    }
}
EOL

# Активация конфигурации
ln -sf /etc/nginx/sites-available/carlifespb.ru /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Проверка конфигурации и перезапуск Nginx
nginx -t && systemctl restart nginx

# Настройка файрвола
apt-get install -y ufw
ufw allow 'Nginx Full'
ufw allow OpenSSH
ufw --force enable

# Создание директории для сайта
mkdir -p /var/www/html
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html 