# `provider`

Refer to the Terraform Registory for docs: [`okta`](https://registry.terraform.io/providers/okta/okta/4.3.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-okta.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaProvider <a name="OktaProvider" id="@cdktf/provider-okta.provider.OktaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs okta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.provider.OktaProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import provider

provider.OktaProvider(
  scope: Construct,
  id: str,
  access_token: str = None,
  alias: str = None,
  api_token: str = None,
  backoff: typing.Union[bool, IResolvable] = None,
  base_url: str = None,
  client_id: str = None,
  http_proxy: str = None,
  log_level: typing.Union[int, float] = None,
  max_api_capacity: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  max_wait_seconds: typing.Union[int, float] = None,
  min_wait_seconds: typing.Union[int, float] = None,
  org_name: str = None,
  parallelism: typing.Union[int, float] = None,
  private_key: str = None,
  private_key_id: str = None,
  request_timeout: typing.Union[int, float] = None,
  scopes: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.accessToken">access_token</a></code> | <code>str</code> | Bearer token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.apiToken">api_token</a></code> | <code>str</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.backoff">backoff</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use exponential back off strategy for rate limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.baseUrl">base_url</a></code> | <code>str</code> | The Okta url. (Use 'oktapreview.com' for Okta testing). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.httpProxy">http_proxy</a></code> | <code>str</code> | Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.logLevel">log_level</a></code> | <code>typing.Union[int, float]</code> | providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxApiCapacity">max_api_capacity</a></code> | <code>typing.Union[int, float]</code> | (Experimental) sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | maximum number of retries to attempt before erroring out. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxWaitSeconds">max_wait_seconds</a></code> | <code>typing.Union[int, float]</code> | maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.minWaitSeconds">min_wait_seconds</a></code> | <code>typing.Union[int, float]</code> | minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.orgName">org_name</a></code> | <code>str</code> | The organization to manage in Okta. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.privateKeyId">private_key_id</a></code> | <code>str</code> | API Token Id granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | API Token granting privileges to Okta API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.accessToken"></a>

- *Type:* str

Bearer token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#access_token OktaProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#alias OktaProvider#alias}

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.apiToken"></a>

- *Type:* str

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#api_token OktaProvider#api_token}

---

##### `backoff`<sup>Optional</sup> <a name="backoff" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.backoff"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use exponential back off strategy for rate limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#backoff OktaProvider#backoff}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.baseUrl"></a>

- *Type:* str

The Okta url. (Use 'oktapreview.com' for Okta testing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#base_url OktaProvider#base_url}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.clientId"></a>

- *Type:* str

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#client_id OktaProvider#client_id}

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.httpProxy"></a>

- *Type:* str

Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#http_proxy OktaProvider#http_proxy}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.logLevel"></a>

- *Type:* typing.Union[int, float]

providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#log_level OktaProvider#log_level}

---

##### `max_api_capacity`<sup>Optional</sup> <a name="max_api_capacity" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxApiCapacity"></a>

- *Type:* typing.Union[int, float]

(Experimental) sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints.

Okta API operates in one minute buckets. See Okta Management API Rate Limits: https://developer.okta.com/docs/reference/rl-global-mgmt/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#max_api_capacity OktaProvider#max_api_capacity}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

maximum number of retries to attempt before erroring out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#max_retries OktaProvider#max_retries}

---

##### `max_wait_seconds`<sup>Optional</sup> <a name="max_wait_seconds" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxWaitSeconds"></a>

- *Type:* typing.Union[int, float]

maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#max_wait_seconds OktaProvider#max_wait_seconds}

---

##### `min_wait_seconds`<sup>Optional</sup> <a name="min_wait_seconds" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.minWaitSeconds"></a>

- *Type:* typing.Union[int, float]

minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#min_wait_seconds OktaProvider#min_wait_seconds}

---

##### `org_name`<sup>Optional</sup> <a name="org_name" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.orgName"></a>

- *Type:* str

The organization to manage in Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#org_name OktaProvider#org_name}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.parallelism"></a>

- *Type:* typing.Union[int, float]

Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#parallelism OktaProvider#parallelism}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.privateKey"></a>

- *Type:* str

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#private_key OktaProvider#private_key}

---

##### `private_key_id`<sup>Optional</sup> <a name="private_key_id" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.privateKeyId"></a>

- *Type:* str

API Token Id granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#private_key_id OktaProvider#private_key_id}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.requestTimeout"></a>

- *Type:* typing.Union[int, float]

Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set).

The maximum value can be `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#request_timeout OktaProvider#request_timeout}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#scopes OktaProvider#scopes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetApiToken">reset_api_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetBackoff">reset_backoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetHttpProxy">reset_http_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMaxApiCapacity">reset_max_api_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMaxWaitSeconds">reset_max_wait_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMinWaitSeconds">reset_min_wait_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetOrgName">reset_org_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetParallelism">reset_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetPrivateKeyId">reset_private_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetRequestTimeout">reset_request_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.provider.OktaProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.provider.OktaProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.provider.OktaProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.provider.OktaProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.provider.OktaProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.provider.OktaProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.provider.OktaProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-okta.provider.OktaProvider.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-okta.provider.OktaProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_api_token` <a name="reset_api_token" id="@cdktf/provider-okta.provider.OktaProvider.resetApiToken"></a>

```python
def reset_api_token() -> None
```

##### `reset_backoff` <a name="reset_backoff" id="@cdktf/provider-okta.provider.OktaProvider.resetBackoff"></a>

```python
def reset_backoff() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktf/provider-okta.provider.OktaProvider.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-okta.provider.OktaProvider.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_http_proxy` <a name="reset_http_proxy" id="@cdktf/provider-okta.provider.OktaProvider.resetHttpProxy"></a>

```python
def reset_http_proxy() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-okta.provider.OktaProvider.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_max_api_capacity` <a name="reset_max_api_capacity" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxApiCapacity"></a>

```python
def reset_max_api_capacity() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_max_wait_seconds` <a name="reset_max_wait_seconds" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxWaitSeconds"></a>

```python
def reset_max_wait_seconds() -> None
```

##### `reset_min_wait_seconds` <a name="reset_min_wait_seconds" id="@cdktf/provider-okta.provider.OktaProvider.resetMinWaitSeconds"></a>

```python
def reset_min_wait_seconds() -> None
```

##### `reset_org_name` <a name="reset_org_name" id="@cdktf/provider-okta.provider.OktaProvider.resetOrgName"></a>

```python
def reset_org_name() -> None
```

##### `reset_parallelism` <a name="reset_parallelism" id="@cdktf/provider-okta.provider.OktaProvider.resetParallelism"></a>

```python
def reset_parallelism() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-okta.provider.OktaProvider.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_private_key_id` <a name="reset_private_key_id" id="@cdktf/provider-okta.provider.OktaProvider.resetPrivateKeyId"></a>

```python
def reset_private_key_id() -> None
```

##### `reset_request_timeout` <a name="reset_request_timeout" id="@cdktf/provider-okta.provider.OktaProvider.resetRequestTimeout"></a>

```python
def reset_request_timeout() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-okta.provider.OktaProvider.resetScopes"></a>

```python
def reset_scopes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.provider.OktaProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import provider

provider.OktaProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.provider.OktaProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import provider

provider.OktaProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_okta import provider

provider.OktaProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.apiTokenInput">api_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.backoffInput">backoff_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.httpProxyInput">http_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.logLevelInput">log_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacityInput">max_api_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSecondsInput">max_wait_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.minWaitSecondsInput">min_wait_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.orgNameInput">org_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.parallelismInput">parallelism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.requestTimeoutInput">request_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.backoff">backoff</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.httpProxy">http_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.logLevel">log_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacity">max_api_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSeconds">max_wait_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.minWaitSeconds">min_wait_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.orgName">org_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.provider.OktaProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.provider.OktaProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.provider.OktaProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.provider.OktaProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-okta.provider.OktaProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-okta.provider.OktaProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-okta.provider.OktaProvider.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-okta.provider.OktaProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `api_token_input`<sup>Optional</sup> <a name="api_token_input" id="@cdktf/provider-okta.provider.OktaProvider.property.apiTokenInput"></a>

```python
api_token_input: str
```

- *Type:* str

---

##### `backoff_input`<sup>Optional</sup> <a name="backoff_input" id="@cdktf/provider-okta.provider.OktaProvider.property.backoffInput"></a>

```python
backoff_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktf/provider-okta.provider.OktaProvider.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-okta.provider.OktaProvider.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `http_proxy_input`<sup>Optional</sup> <a name="http_proxy_input" id="@cdktf/provider-okta.provider.OktaProvider.property.httpProxyInput"></a>

```python
http_proxy_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-okta.provider.OktaProvider.property.logLevelInput"></a>

```python
log_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_api_capacity_input`<sup>Optional</sup> <a name="max_api_capacity_input" id="@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacityInput"></a>

```python
max_api_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-okta.provider.OktaProvider.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_wait_seconds_input`<sup>Optional</sup> <a name="max_wait_seconds_input" id="@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSecondsInput"></a>

```python
max_wait_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_wait_seconds_input`<sup>Optional</sup> <a name="min_wait_seconds_input" id="@cdktf/provider-okta.provider.OktaProvider.property.minWaitSecondsInput"></a>

```python
min_wait_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `org_name_input`<sup>Optional</sup> <a name="org_name_input" id="@cdktf/provider-okta.provider.OktaProvider.property.orgNameInput"></a>

```python
org_name_input: str
```

- *Type:* str

---

##### `parallelism_input`<sup>Optional</sup> <a name="parallelism_input" id="@cdktf/provider-okta.provider.OktaProvider.property.parallelismInput"></a>

```python
parallelism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `request_timeout_input`<sup>Optional</sup> <a name="request_timeout_input" id="@cdktf/provider-okta.provider.OktaProvider.property.requestTimeoutInput"></a>

```python
request_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-okta.provider.OktaProvider.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-okta.provider.OktaProvider.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="@cdktf/provider-okta.provider.OktaProvider.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `backoff`<sup>Optional</sup> <a name="backoff" id="@cdktf/provider-okta.provider.OktaProvider.property.backoff"></a>

```python
backoff: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-okta.provider.OktaProvider.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-okta.provider.OktaProvider.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktf/provider-okta.provider.OktaProvider.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-okta.provider.OktaProvider.property.logLevel"></a>

```python
log_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_api_capacity`<sup>Optional</sup> <a name="max_api_capacity" id="@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacity"></a>

```python
max_api_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-okta.provider.OktaProvider.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_wait_seconds`<sup>Optional</sup> <a name="max_wait_seconds" id="@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSeconds"></a>

```python
max_wait_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_wait_seconds`<sup>Optional</sup> <a name="min_wait_seconds" id="@cdktf/provider-okta.provider.OktaProvider.property.minWaitSeconds"></a>

```python
min_wait_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `org_name`<sup>Optional</sup> <a name="org_name" id="@cdktf/provider-okta.provider.OktaProvider.property.orgName"></a>

```python
org_name: str
```

- *Type:* str

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-okta.provider.OktaProvider.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_id`<sup>Optional</sup> <a name="private_key_id" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-okta.provider.OktaProvider.property.requestTimeout"></a>

```python
request_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.provider.OktaProvider.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.provider.OktaProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OktaProviderConfig <a name="OktaProviderConfig" id="@cdktf/provider-okta.provider.OktaProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.provider.OktaProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import provider

provider.OktaProviderConfig(
  access_token: str = None,
  alias: str = None,
  api_token: str = None,
  backoff: typing.Union[bool, IResolvable] = None,
  base_url: str = None,
  client_id: str = None,
  http_proxy: str = None,
  log_level: typing.Union[int, float] = None,
  max_api_capacity: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  max_wait_seconds: typing.Union[int, float] = None,
  min_wait_seconds: typing.Union[int, float] = None,
  org_name: str = None,
  parallelism: typing.Union[int, float] = None,
  private_key: str = None,
  private_key_id: str = None,
  request_timeout: typing.Union[int, float] = None,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.accessToken">access_token</a></code> | <code>str</code> | Bearer token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.apiToken">api_token</a></code> | <code>str</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.backoff">backoff</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use exponential back off strategy for rate limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.baseUrl">base_url</a></code> | <code>str</code> | The Okta url. (Use 'oktapreview.com' for Okta testing). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.httpProxy">http_proxy</a></code> | <code>str</code> | Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.logLevel">log_level</a></code> | <code>typing.Union[int, float]</code> | providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxApiCapacity">max_api_capacity</a></code> | <code>typing.Union[int, float]</code> | (Experimental) sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | maximum number of retries to attempt before erroring out. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxWaitSeconds">max_wait_seconds</a></code> | <code>typing.Union[int, float]</code> | maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.minWaitSeconds">min_wait_seconds</a></code> | <code>typing.Union[int, float]</code> | minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.orgName">org_name</a></code> | <code>str</code> | The organization to manage in Okta. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKey">private_key</a></code> | <code>str</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKeyId">private_key_id</a></code> | <code>str</code> | API Token Id granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | API Token granting privileges to Okta API. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Bearer token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#access_token OktaProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#alias OktaProvider#alias}

---

##### `api_token`<sup>Optional</sup> <a name="api_token" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#api_token OktaProvider#api_token}

---

##### `backoff`<sup>Optional</sup> <a name="backoff" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.backoff"></a>

```python
backoff: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use exponential back off strategy for rate limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#backoff OktaProvider#backoff}

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

The Okta url. (Use 'oktapreview.com' for Okta testing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#base_url OktaProvider#base_url}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#client_id OktaProvider#client_id}

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#http_proxy OktaProvider#http_proxy}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.logLevel"></a>

```python
log_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#log_level OktaProvider#log_level}

---

##### `max_api_capacity`<sup>Optional</sup> <a name="max_api_capacity" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxApiCapacity"></a>

```python
max_api_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Experimental) sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints.

Okta API operates in one minute buckets. See Okta Management API Rate Limits: https://developer.okta.com/docs/reference/rl-global-mgmt/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#max_api_capacity OktaProvider#max_api_capacity}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

maximum number of retries to attempt before erroring out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#max_retries OktaProvider#max_retries}

---

##### `max_wait_seconds`<sup>Optional</sup> <a name="max_wait_seconds" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxWaitSeconds"></a>

```python
max_wait_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#max_wait_seconds OktaProvider#max_wait_seconds}

---

##### `min_wait_seconds`<sup>Optional</sup> <a name="min_wait_seconds" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.minWaitSeconds"></a>

```python
min_wait_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#min_wait_seconds OktaProvider#min_wait_seconds}

---

##### `org_name`<sup>Optional</sup> <a name="org_name" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.orgName"></a>

```python
org_name: str
```

- *Type:* str

The organization to manage in Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#org_name OktaProvider#org_name}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#parallelism OktaProvider#parallelism}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#private_key OktaProvider#private_key}

---

##### `private_key_id`<sup>Optional</sup> <a name="private_key_id" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

API Token Id granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#private_key_id OktaProvider#private_key_id}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.requestTimeout"></a>

```python
request_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set).

The maximum value can be `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#request_timeout OktaProvider#request_timeout}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#scopes OktaProvider#scopes}

---



