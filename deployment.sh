#!/bin/bash

if docker network inspect transcription_challenge_network &>/dev/null; then
  echo "Network transcription_challenge_network already exists."
else
  docker network create transcription_challenge_network
  echo "Network transcription_challenge_network created."
fi

docker-compose -f docker-compose.yml up -d --build

echo "Containers started successfully."

if docker ps --filter "network=transcription_challenge_network" | grep -q "api"; then
  echo "Container is running and connected to the network."
else
  echo "Container is not running or not connected to the network."
fi