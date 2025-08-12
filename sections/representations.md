# Signature Representations

```
openapi: 3.1.0
info:
    title: JAdES Signatures
    summary: An example showcasing JAdES signatures
    description: An example showcasing JAdES signatures as JWS detached signatures for securing a sample REST endpoint (/certificate)
    termsOfService: https://domain.server.io/terms-of-service
    license:
        name: EUPL-1.2 or later
        url: https://eupl.eu/1.2/en/
    version: 1.0.0
externalDocs:
   description: The ISA² IPS REST API Core Profile
   url: https://joinup.ec.europa.eu/collection/api4dt/document/isa2-ips-rest-api-profile
servers:
- url: https://domain.server.io/v2
tags:
- name: DetachedPayloadSignature
  description: Operations using payload security
- name: DetachedMessageSignature
  description: Operations using message-level security
paths:
    /openapi:
        get:
            summary: Returns the OpenAPI Document for the API
        ...
        responses:
        200:
            description: ...
            content: {
               $ref: 'https://spec.openapis.org/oas/3.1/schema/2021-05-20'
               ...
            }
    /certificate:
    get:
      tags:
      - DetachedMessageSignature
      summary: Get a Certificate
      securitySchemes:
        OAuth2:
           type: oauth2
        flows:
           authorizationCode:
              authorizationUrl: https://example.com/api/oauth/dialog
              scopes:
                 send:message: send a message
       ...
      responses:
      200:
         headers:
            nlgov-adr-message-sig:
               $ref: '#/components/headers/nlgov-adr-message-sig'
          description: List of Certificates
          content: { ... }
components:
   headers:
      nlgov-adr-payload-sig:
         schema:
             $ref: '#/components/schemas/JwsCompactDetached'
      nlgov-adr-message-sig:
         schema:
             $ref: '#/components/schemas/JwsCompactDetached'
   schemas:
      JwsCompactDetached:
         title: The format for the message-level and payload signature
         description: Defines the string pattern as a regular expression that
         MUST be followed to represent detached JWS compact tokens
        "$id": https://raw.githubusercontent.com/isa2-api4ips/rest-api-profile/main/api-core-profile/components/schemas/jws-compact-detached.json
        "$schema": https://json-schema.org/draft/2020-12/schema
         type: string
         format: jws-compact-detached
         pattern: ^[A-Za-z0-9_-]+(?:(\\.\\.)[A-Za-z0-9_-]+){1}

```