#!/bin/bash

set -e 

count=1
while [ $count -le 360 ]; do
  pid=`ps -ef |grep  $FullNode.jar | grep java | grep -v grep |awk '{print $2}'`
  if [ -n "$pid" ]; then
    kill -15 $pid
    echo "kill -15 java-tron, counter $count"
    sleep 5
  else
    echo "Network killed"
    break
  fi
  count=$[$count+1]
  if [ $count -ge 360 ]; then
    echo "deploy failure because of kill process fails!"
    exit 1
  fi
done

pushd ./scripts/nginx &>/dev/null
    docker-compose stop
popd &>/dev/null