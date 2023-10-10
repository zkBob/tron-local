#!/bin/bash

set -e

pushd ./scripts/nginx &>/dev/null
    docker-compose up -d
popd &>/dev/null