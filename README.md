### Whiteboard

## Prerequisites

- aws user
- get aws-cli configs from AWS admin
- install amplify cli `npm install -g @aws-amplify/cli`

## Project Setup

**Clone the repo**

`git clone ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/whiteboard`

**Checkout your developer branch**

`git checkout --track origin/<aws_username>`

**Checkout your amplify environment**

`amplify env checkout <aws_username>`

**Install the dependencies**

`yarn install`

**Build && run amplify environment**

`amplify publish && amplify serve`
