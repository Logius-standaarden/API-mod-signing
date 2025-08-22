# Payload signing

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

   The JWS structure shall be carried in HTTP header field named `nlgov-adr-payload-sig`. The header field can be used in both requests and responses. The header field MUST not appear more than once in a message; if a message contains multiple nlgov-adr-payload-sig header fields, the receiver MUST consider the signature invalid.
   </dd>
</dl>
</div>
