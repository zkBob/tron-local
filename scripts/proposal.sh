#!/bin/bash

set -e

cd ./proposal
yarn
yarn execute-proposal
cd ..
