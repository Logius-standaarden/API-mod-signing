# Normative Design Rules

## Summary

<div id="design-rule-summary"></div>

## Cryptographic Algorithms

<div class="rule" id="/signing/algorithm" data-type="technical">
   <p class="rulelab">Support the RSASSA-PSS Algorithm</p>
   <dl>
   <dt>Statement</dt>
   <dd>
   The RSASSA-PSS Algorithm MUST be supported, with a key length of at least 256 bits. The value `PS256` for the `alg` parameter MUST be used as defined in [[RFC7518]].
   </dd>
</dl>
</div>

## Payload signing

<div class="rule" id="/signing/payload" data-type="technical">
   <p class="rulelab">Apply JAdES detached signatures for payload signing</p>
   <dl>
   <dt>Statement</dt>
   <dd>
Payload signing ensures the integrity and authenticity of the payload part of the message.  When payload signing is considered, the Detached JSON Web Signatures following the JAdES specification [[JAdES]] MUST be applied with the following restrictions:

* The JWS content (Data to be Signed) MUST be detached from the signatures as defined in [[RFC7515]] Appendix F.
* The signed SigD parameter object MUST be present in the JWS headers, denoting the use of the JAdES detached header profile.
* The value of the `mId` parameter MUST be set to `http://uri.etsi.org/19182/HttpHeaders`.
* The `pars` array of the SigD MUST contain only the element `digest`, denoting that for the calculation of the signature only the digest of the HTTP payload must be taken into account, according to [[RFC3230]].
* The `alg` parameter MUST be set to the correct value depending on the algorithm used (see [[[#cryptographic-algorithms]]]).

The JWS structure shall be carried in HTTP header field named `Payload-Signature`. The header field can be used in both requests and responses. The header field MUST not appear more than once in a message; if a message contains multiple `Payload-Signature` header fields, the receiver MUST consider the signature invalid.
   </dd>
</dl>
</div>

## Message signing

The Introduction section of [[RFC9421]] details why message integrity and authenticity are critical to the secure operation of many HTTP/REST applications.

<div class="rule" id="/signing/message" data-type="technical">
   <p class="rulelab">Apply JAdES HttpHeaders Mechanism for message-level security</p>
   <dl>
   <dt>Statement</dt>
   <dd>
When Message-Level Security is considered, the HttpHeaders Mechanism of the JAdES Specification [[JAdES]] MUST be used, with the following restrictions applied.

* The JWS content (Data to be Signed) MUST be detached from the signatures as defined in [[RFC7515]] Appendix F.
* The signed SigD parameter object MUST be present in the JWS headers, denoting the use of the JAdES detached header profile.
* The value of the mId parameter MUST be set to `http://uri.etsi.org/19182/HttpHeaders`.
* The pars array of the SigD MUST contain at least the following elements:
  * the element `(request-target)`, for containing the HTTP Request URI
  * the element `host`, for containing the host the message was submitted to, if present
  * the element `origin`, for containing the scheme, hostname, and port from which the request was initiated, if present
  * the element `content-encoding`, if present
  * the element `content-type`, if present
  * the element `content-length`, if present
  * the element `digest`, for taking into account the Digest header that contains the hash value of the HTTP payload.
* The alg parameter MUST be set to the correct value depending on the algorithm used (see above).

Implementations that make use of the HTTP Header fields for data representation SHOULD also include these header fields in the pars array. The JWS structure MUST be carried in HTTP header field named `Message-Signature`. The header field can be used in both requests and responses. The header field MUST not appear more than once in a message; if a message contains multiple `Message-Signature` header fields, the receiver MUST consider the signature invalid.
   </dd>
</dl>
</div>
