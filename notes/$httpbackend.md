## $httpbackend

用于模拟提供前端服务器数据

有两个主要用途:

- `$httpBackend.expect`
- `$httpBackend.when`

type | Request expectations | Backend definitions
---- | ---- |----
Syntax | .expect(...).respond(...) | .when(...).respond(...)
Typical | usage strict unit tests | loose (black-box) unit testing
Fulfills | multiple requests  NO |  YES
Order of requests matters | YES | NO
Request required  | YES | NO
Response required | optional  (see below) |  YES

