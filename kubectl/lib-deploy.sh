#!/bin/bash
set -e

image="opensource-rspack-lib"

path=$(realpath "${BASH_SOURCE:-$0}")
DIR_PATH=$(dirname $path)
APP_DIR_PATH=$(realpath "$path/../..")

echo "APP PATH:$APP_DIR_PATH"

yarn install
yarn build:lib

docker build --no-cache --platform linux/amd64 -t="$image" -f "$DIR_PATH/lib-Dockerfile" "$APP_DIR_PATH"

docker tag $image registry.digitalocean.com/fillet-dev/$image

docker push registry.digitalocean.com/fillet-dev/$image

kubectl apply -f "$DIR_PATH/lib-service.yaml"
# kubectl delete -f "$DIR_PATH/lib-deployment.yaml"
kubectl apply -f "$DIR_PATH/lib-deployment.yaml"
