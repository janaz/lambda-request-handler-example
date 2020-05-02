## Lambda Request Handler Demo

This is a demo app that's using [`lambda-request-handler`](https://github.com/janaz/lambda-request-handler) adapter for deploying Express web applications to AWS Lambda and using API Gateway as the https endpoint. The tool supports many other NodeJS frameworks.

### Endpoints

The example app in this repo is deployed as a single Lambda function which is integrated with the following endpoints

* [AWS API Gateway REST API](https://e9x33odhxl.execute-api.ap-southeast-2.amazonaws.com/app/inspect)
* [AWS API Gateway HTTP API](https://op1vayx4e3.execute-api.ap-southeast-2.amazonaws.com/inspect) with payload version `1.0`
* [AWS API Gateway HTTP API](https://m3ud41apvf.execute-api.ap-southeast-2.amazonaws.com/inspect) with payload version `2.0`
