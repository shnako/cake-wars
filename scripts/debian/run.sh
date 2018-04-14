#!/bin/sh
cd ../../cake-wars
yarn install
yarn build
serve -s build