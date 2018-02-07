# The FROM instruction sets the Base Image for subsequent instructions.
# Using Nginx as Base Image
FROM nginx
LABEL maintainer="devman@foxmail.com"
RUN mkdir /www
ADD . /www
WORKDIR /www
# The EXPOSE instruction informs Docker that the container listens on the specified network ports at runtime
EXPOSE 80

VOLUME ["/www"]
# # The CMD instruction provides default execution command for an container
# Start Nginx and keep it from running background
CMD ["nginx", "-c", "/www/nginx.conf", "-g", "daemon off;"]