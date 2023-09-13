#!/bin/bash

set -ea

source .env

pushd ./verifier &>/dev/null
    rm -rf ./build
    tronbox migrate --network development
popd &>/dev/null
