#!/bin/bash
docker build -t roster:dev .
docker run -it -p 3000:3000 roster:dev