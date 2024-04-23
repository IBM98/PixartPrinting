FROM php:8.1-apache

# Copy your index.html and other PHP files
COPY .. /var/www/html/

# Expose port 80 (web traffic)
EXPOSE 8081

# Start Apache in the foreground (adjust for production)
CMD ["apache2", "-D", "FOREGROUND"]
