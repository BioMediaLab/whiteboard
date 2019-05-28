This documnet is to give an insight and a basic understanding of the AWS services that are being used across the application.

The document is subject to change as we proceed on the development of the project. We will be adding more details to the existing services and  also new ones if any added.

For detailed knowledge of these services you can visit https://docs.aws.amazon.com/index.html

**DynamoDB** - DynamoDB is a fully managed NoSQL database service provided by AWS.
There are three basic step for the setup:
[x] Sign up for AWS
[x] Get an AWS access key (used to access DynamoDB programmatically)
[x] Configure the credentials (used to access DynamoDB programmatically)
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.DynamoWebService.html

**AppSync** - AWS AppSync provides API actions for creating and interacting with data sources using GraphQL from the application.
AWS Amplify auto  generates a file called aws-exports.js  which has the API call for the  AWS AppSync GraphQL Endpoint.

**Cognito** - AWS Congnito provides authentication, authorization and user management. User can login using the username/password or by any third party like Google, Facebook, Amazon. 

It has two main components:
[x] Identity Pool - With identity pool user can obtain  access to other AWS services like  S3, DynamoDB etc.
[x] User Pool - It's a user directory used to sign in to the application.
The aws-exports.js has the details for both the pools.

**CloudWatch** - The CloudWatch  monitors the AWS services being used by the application and also the applications that we run on AWS, in real time. It helps in keeping a track of the resource utilization and  validates  if there is a threshold breach.

**S3** - S3 stands for Simple Storage Service, it can be used to store and retrieve any amount of data from anywhere on the web. Buckets are the container for data storage and they can be created using the console. Each user can have his own bucket and the same can be accessed using the AWS Console.

**Lambda** -  Lambda is a serverless compute service that runs the code in response to events and automatically manages the underlying compute resources for us. The basic advantage of this technology is that we only pay for the time the function executes and the resources it needs to execute. 

**CloudFront** - CloudFront speeds up the distribution of our static and dynamic web content. It routes each user request through the AWS  backbone network to the edge location that can best serve the content.

**CloudFormation** - AWS CloudFormation helps us to create a template that describes all the AWS resources that we need to consume. The CloudFormation then takes care of the provisioning and configuring those resources for us.

**CodeCommit** - CodeCommit is a version control service hosted by AWS. It's a secure, scalable and managed source control service that can host private Git repositories.
