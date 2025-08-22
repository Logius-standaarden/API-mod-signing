# JWS detached signatures

This module enforces the use of JWS detached signatures following the HTTP Headers Mechanism of the ETSI ESI JAdES specification [[JAdES]].

This structure is enforced for the following reasons:
* JWS, being a simple JSON Structure, can be supported by clients in a light context, while specifications like the ETSI ESI ASIC containers are more difficult to do.
* JWS in detached form does not change the payload structure, meaning that a client not supporting the validation of signature can continue to operate as if there was no signature applied.
* JWS Detached can be transported using an HTTP header, making its presence unintrusive and easily transportable.