# Message signing

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
   Implementations that make use of the HTTP Header fields for data representation SHOULD also include these header fields in the pars array. The JWS structure MUST be carried in HTTP header field named `nlgov-adr-message-sig`. The header field can be used in both requests and responses. The header field MUST not appear more than once in a message; if a message contains multiple nlgov-adr-message-sig header fields, the receiver MUST consider the signature invalid.
   </dd>
</dl>
</div>
