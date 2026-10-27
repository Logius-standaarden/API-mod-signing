# Signature Representations

```yaml
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
      responses:
        200:
            description: ...
            content: {
               $ref: 'https://spec.openapis.org/oas/3.1/schema/2021-05-20'
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
      responses:
        200:
          headers:
            Message-Signature:
               $ref: '#/components/headers/Message-Signature'
            description: List of Certificates
components:
  headers:
    Payload-Signature:
      schema:
        $ref: '#/components/schemas/JwsCompactDetached'
    Message-Signature:
      schema:
        $ref: '#/components/schemas/JwsCompactDetached'
schemas:
  JwsCompactDetached:
    title: The format for the message-level and payload signature
    description: Defines the string pattern as a regular expression that
      MUST be followed to represent detached JWS compact tokens
    type: string
    format: jws-compact-detached
    pattern: ^[A-Za-z0-9_-]+(?:(\\.\\.)[A-Za-z0-9_-]+){1}
```
