# Introduction

This module specifies the use of JAdES signatures for HTTP message and payload siging. The module is directly based on the _ISA² IPS REST API Profile v1.0_ (which was a result of the [REST API Pilot project for eDelivery](https://joinup.ec.europa.eu/collection/api4dt/document/isa2-ips-rest-api-profile))

## Use Cases

This module is applicable when there is a need for assurance of end to end message integrity and authenticity between client application and server application.
In the context of HTTP messages signing header elements (for example HTTP operation (GET/POST/UPDATE/DELETE) and resource path / parameters, or timestamps) together with payload provides an extra level of protection against manipulation of the message.

In a complex IT landscape the path between client and server can go over several intermediary components/systems in which case end to end integrity and authenticity can be especially relevant. (In this case TLS is terminated in each step on the path and does not protect the http-message in transport fully end to end).

## JWS detached signatures

This module enforces the use of JWS detached signatures following the HTTP Headers Mechanism of the ETSI ESI JAdES specification [[JAdES]].

This structure is enforced for the following reasons:

* JWS, being a simple JSON Structure, can be supported by clients in a light context, while specifications like the ETSI ESI ASIC containers are more difficult to do.
* JWS in detached form does not change the payload structure, meaning that a client not supporting the validation of signature can continue to operate as if there was no signature applied.
* JWS Detached can be transported using an HTTP header, making its presence unintrusive and easily transportable.
