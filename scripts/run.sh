#!/bin/bash

set -e

#sdk use java 8.0.382-amzn

echo "Copy FullNode.jar"
cp bin/FullNode.jar ./SR
cp bin/FullNode.jar ./FullNode

cd ./SR
echo "Start super node"
java -Xmx6g -XX:+HeapDumpOnOutOfMemoryError -jar FullNode.jar -p da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0 --witness -c supernode.conf &
cd ..

cd ./FullNode
echo "Start full node"
java -Xmx6g -XX:+HeapDumpOnOutOfMemoryError -jar FullNode.jar -c fullnode.conf &
cd ..