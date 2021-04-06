#!/bin/bash

# Example for the Docker Hub V2 API
# Returns all imagas and tags associated with a Docker Hub user account.
# Requires 'jq': https://stedolan.github.io/jq/

# set username and password
UNAME="vultarget"
UPASS="Hellotest!123"
UREPO="vulfocus"
#UREPO="vultarget"

# -------

#set -e
echo

# aquire token
TOKEN=$(curl -s -H "Content-Type: application/json" -X POST -d '{"username": "'${UNAME}'", "password": "'${UPASS}'"}' https://hub.docker.com/v2/users/login/ | jq -r .token)

# get list of repositories for the user account
REPO_LIST=$(curl -s -H "Authorization: JWT ${TOKEN}" https://hub.docker.com/v2/repositories/${UREPO}/?page_size=104 | jq -r '.results|.[]|.name')

# build a list of all images & tags
for i in ${REPO_LIST}
do
  # get tags for repo
  IMAGE_TAGS=$(curl -s -H "Authorization: JWT ${TOKEN}" https://hub.docker.com/v2/repositories/${UREPO}/${i}/tags/?page_size=100 | jq -r '.results|.[]|.name')

  # build a list of images from tags
  for j in ${IMAGE_TAGS}
  do
    # add each tag to list
    FULL_IMAGE_LIST="${FULL_IMAGE_LIST} ${UREPO}/${i}:${j}"
  done
done

# output
for i in ${FULL_IMAGE_LIST}
do
  echo ${i};
  if [[ ${i} != "vulfocus/vulfocus"* ]];then
    while [ 0 -eq 0 ]
    do
      docker pull ${i};
      if [ $? -eq 0 ]; then
        break;
      fi
    done
    docker image tag ${i} ${i/vulfocus/vultarget};
    docker push ${i/vulfocus/vultarget};
    docker rmi ${i};
  fi
done
