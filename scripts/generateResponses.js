'use strict';
const client = require('apollo-client');
const path = require('path');
const fromSchema = require('@gql2ts/from-schema');
const fs = require('fs');

var HOST_URL = 'http://localhost:4000/';

const graphqlClient = require('graphql-client')({
    url: HOST_URL,
});

graphqlClient.query(
    `
    query IntrospectionQuery {
        __schema {
          queryType { name }
          mutationType { name }
          subscriptionType { name }
          types {
            ...FullType
          }
          directives {
            name
            locations
            args {
              ...InputValue
            }
          }
        }
      }
      fragment FullType on __Type {
        kind
        name
        fields(includeDeprecated: true) {
          name
          args {
            ...InputValue
          }
          type {
            ...TypeRef
          }
          isDeprecated
          deprecationReason
        }
        inputFields {
          ...InputValue
        }
        interfaces {
          ...TypeRef
        }
        enumValues(includeDeprecated: true) {
          name
          isDeprecated
          deprecationReason
        }
        possibleTypes {
          ...TypeRef
        }
      }
      fragment InputValue on __InputValue {
        name
        type { ...TypeRef }
        defaultValue
      }
      fragment TypeRef on __Type {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }  
    `, {}, () => { }
)
    .then((body) => {
        const myNamespace = fromSchema.generateNamespace('GQL', body);     
        fs.writeFile('mySchema.d.ts', myNamespace);
    });