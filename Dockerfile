FROM node:14.1.0-stretch-slim

RUN apt-get update && \
  apt-get install -y advancecomp && \
  apt-get clean all && rm -rf /var/cache/apt/
