# The FROM instruction sets the Base Image for subsequent instructions.
# Using Nginx as Base Image
FROM nginx
LABEL maintainer="devman@foxmail.com"
COPY . /www
WORKDIR /www
# The RUN instruction will execute any commands
# Adding HelloWorld page into Nginx server
RUN ln -s /www/www.conf /usr/local/nginx/conf/www.conf

# The EXPOSE instruction informs Docker that the container listens on the specified network ports at runtime
EXPOSE 80

VOLUME /www
# The CMD instruction provides default execution command for an container
# Start Nginx and keep it from running background
CMD ["nginx", "-g", "daemon off;"]