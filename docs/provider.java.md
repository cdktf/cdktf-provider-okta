# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-okta.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaProvider <a name="OktaProvider" id="@cdktf/provider-okta.provider.OktaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs okta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.provider.OktaProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.provider.OktaProvider;

OktaProvider.Builder.create(Construct scope, java.lang.String id)
//  .accessToken(java.lang.String)
//  .alias(java.lang.String)
//  .apiToken(java.lang.String)
//  .backoff(java.lang.Boolean|IResolvable)
//  .baseUrl(java.lang.String)
//  .clientId(java.lang.String)
//  .httpProxy(java.lang.String)
//  .logLevel(java.lang.Number)
//  .maxApiCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .maxWaitSeconds(java.lang.Number)
//  .minWaitSeconds(java.lang.Number)
//  .orgName(java.lang.String)
//  .parallelism(java.lang.Number)
//  .privateKey(java.lang.String)
//  .privateKeyId(java.lang.String)
//  .requestTimeout(java.lang.Number)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Bearer token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.apiToken">apiToken</a></code> | <code>java.lang.String</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.backoff">backoff</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use exponential back off strategy for rate limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The Okta url. (Use 'oktapreview.com' for Okta testing). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.logLevel">logLevel</a></code> | <code>java.lang.Number</code> | providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxApiCapacity">maxApiCapacity</a></code> | <code>java.lang.Number</code> | Sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | maximum number of retries to attempt before erroring out. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxWaitSeconds">maxWaitSeconds</a></code> | <code>java.lang.Number</code> | maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.minWaitSeconds">minWaitSeconds</a></code> | <code>java.lang.Number</code> | minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.orgName">orgName</a></code> | <code>java.lang.String</code> | The organization to manage in Okta. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.parallelism">parallelism</a></code> | <code>java.lang.Number</code> | Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | API Token Id granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | API Token granting privileges to Okta API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.accessToken"></a>

- *Type:* java.lang.String

Bearer token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#access_token OktaProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#alias OktaProvider#alias}

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.apiToken"></a>

- *Type:* java.lang.String

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#api_token OktaProvider#api_token}

---

##### `backoff`<sup>Optional</sup> <a name="backoff" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.backoff"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use exponential back off strategy for rate limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#backoff OktaProvider#backoff}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.baseUrl"></a>

- *Type:* java.lang.String

The Okta url. (Use 'oktapreview.com' for Okta testing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#base_url OktaProvider#base_url}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#client_id OktaProvider#client_id}

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.httpProxy"></a>

- *Type:* java.lang.String

Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#http_proxy OktaProvider#http_proxy}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.logLevel"></a>

- *Type:* java.lang.Number

providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#log_level OktaProvider#log_level}

---

##### `maxApiCapacity`<sup>Optional</sup> <a name="maxApiCapacity" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxApiCapacity"></a>

- *Type:* java.lang.Number

Sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints.

Okta API operates in one minute buckets. See Okta Management API Rate Limits: https://developer.okta.com/docs/reference/rl-global-mgmt/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#max_api_capacity OktaProvider#max_api_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

maximum number of retries to attempt before erroring out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#max_retries OktaProvider#max_retries}

---

##### `maxWaitSeconds`<sup>Optional</sup> <a name="maxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.maxWaitSeconds"></a>

- *Type:* java.lang.Number

maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#max_wait_seconds OktaProvider#max_wait_seconds}

---

##### `minWaitSeconds`<sup>Optional</sup> <a name="minWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.minWaitSeconds"></a>

- *Type:* java.lang.Number

minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#min_wait_seconds OktaProvider#min_wait_seconds}

---

##### `orgName`<sup>Optional</sup> <a name="orgName" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.orgName"></a>

- *Type:* java.lang.String

The organization to manage in Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#org_name OktaProvider#org_name}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.parallelism"></a>

- *Type:* java.lang.Number

Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#parallelism OktaProvider#parallelism}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#private_key OktaProvider#private_key}

---

##### `privateKeyId`<sup>Optional</sup> <a name="privateKeyId" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.privateKeyId"></a>

- *Type:* java.lang.String

API Token Id granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#private_key_id OktaProvider#private_key_id}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.requestTimeout"></a>

- *Type:* java.lang.Number

Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set).

The maximum value can be `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#request_timeout OktaProvider#request_timeout}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#scopes OktaProvider#scopes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetBackoff">resetBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetHttpProxy">resetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMaxApiCapacity">resetMaxApiCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMaxWaitSeconds">resetMaxWaitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMinWaitSeconds">resetMinWaitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetOrgName">resetOrgName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetParallelism">resetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetPrivateKeyId">resetPrivateKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.provider.OktaProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.provider.OktaProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.provider.OktaProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.provider.OktaProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.provider.OktaProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.provider.OktaProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.provider.OktaProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-okta.provider.OktaProvider.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-okta.provider.OktaProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetApiToken` <a name="resetApiToken" id="@cdktf/provider-okta.provider.OktaProvider.resetApiToken"></a>

```java
public void resetApiToken()
```

##### `resetBackoff` <a name="resetBackoff" id="@cdktf/provider-okta.provider.OktaProvider.resetBackoff"></a>

```java
public void resetBackoff()
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-okta.provider.OktaProvider.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-okta.provider.OktaProvider.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetHttpProxy` <a name="resetHttpProxy" id="@cdktf/provider-okta.provider.OktaProvider.resetHttpProxy"></a>

```java
public void resetHttpProxy()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-okta.provider.OktaProvider.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMaxApiCapacity` <a name="resetMaxApiCapacity" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxApiCapacity"></a>

```java
public void resetMaxApiCapacity()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetMaxWaitSeconds` <a name="resetMaxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxWaitSeconds"></a>

```java
public void resetMaxWaitSeconds()
```

##### `resetMinWaitSeconds` <a name="resetMinWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.resetMinWaitSeconds"></a>

```java
public void resetMinWaitSeconds()
```

##### `resetOrgName` <a name="resetOrgName" id="@cdktf/provider-okta.provider.OktaProvider.resetOrgName"></a>

```java
public void resetOrgName()
```

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-okta.provider.OktaProvider.resetParallelism"></a>

```java
public void resetParallelism()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-okta.provider.OktaProvider.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetPrivateKeyId` <a name="resetPrivateKeyId" id="@cdktf/provider-okta.provider.OktaProvider.resetPrivateKeyId"></a>

```java
public void resetPrivateKeyId()
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-okta.provider.OktaProvider.resetRequestTimeout"></a>

```java
public void resetRequestTimeout()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-okta.provider.OktaProvider.resetScopes"></a>

```java
public void resetScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OktaProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.provider.OktaProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.provider.OktaProvider;

OktaProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.provider.OktaProvider;

OktaProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.okta.provider.OktaProvider;

OktaProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.provider.OktaProvider;

OktaProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OktaProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OktaProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OktaProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OktaProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OktaProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.apiTokenInput">apiTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.backoffInput">backoffInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.httpProxyInput">httpProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacityInput">maxApiCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSecondsInput">maxWaitSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.minWaitSecondsInput">minWaitSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.orgNameInput">orgNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.parallelismInput">parallelismInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.backoff">backoff</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.logLevel">logLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacity">maxApiCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSeconds">maxWaitSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.minWaitSeconds">minWaitSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.orgName">orgName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.parallelism">parallelism</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.provider.OktaProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.provider.OktaProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.provider.OktaProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.provider.OktaProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-okta.provider.OktaProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-okta.provider.OktaProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-okta.provider.OktaProvider.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-okta.provider.OktaProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-okta.provider.OktaProvider.property.apiTokenInput"></a>

```java
public java.lang.String getApiTokenInput();
```

- *Type:* java.lang.String

---

##### `backoffInput`<sup>Optional</sup> <a name="backoffInput" id="@cdktf/provider-okta.provider.OktaProvider.property.backoffInput"></a>

```java
public java.lang.Boolean|IResolvable getBackoffInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-okta.provider.OktaProvider.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.provider.OktaProvider.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `httpProxyInput`<sup>Optional</sup> <a name="httpProxyInput" id="@cdktf/provider-okta.provider.OktaProvider.property.httpProxyInput"></a>

```java
public java.lang.String getHttpProxyInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-okta.provider.OktaProvider.property.logLevelInput"></a>

```java
public java.lang.Number getLogLevelInput();
```

- *Type:* java.lang.Number

---

##### `maxApiCapacityInput`<sup>Optional</sup> <a name="maxApiCapacityInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacityInput"></a>

```java
public java.lang.Number getMaxApiCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `maxWaitSecondsInput`<sup>Optional</sup> <a name="maxWaitSecondsInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSecondsInput"></a>

```java
public java.lang.Number getMaxWaitSecondsInput();
```

- *Type:* java.lang.Number

---

##### `minWaitSecondsInput`<sup>Optional</sup> <a name="minWaitSecondsInput" id="@cdktf/provider-okta.provider.OktaProvider.property.minWaitSecondsInput"></a>

```java
public java.lang.Number getMinWaitSecondsInput();
```

- *Type:* java.lang.Number

---

##### `orgNameInput`<sup>Optional</sup> <a name="orgNameInput" id="@cdktf/provider-okta.provider.OktaProvider.property.orgNameInput"></a>

```java
public java.lang.String getOrgNameInput();
```

- *Type:* java.lang.String

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-okta.provider.OktaProvider.property.parallelismInput"></a>

```java
public java.lang.Number getParallelismInput();
```

- *Type:* java.lang.Number

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyIdInput"></a>

```java
public java.lang.String getPrivateKeyIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-okta.provider.OktaProvider.property.requestTimeoutInput"></a>

```java
public java.lang.Number getRequestTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.provider.OktaProvider.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-okta.provider.OktaProvider.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-okta.provider.OktaProvider.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

---

##### `backoff`<sup>Optional</sup> <a name="backoff" id="@cdktf/provider-okta.provider.OktaProvider.property.backoff"></a>

```java
public java.lang.Boolean|IResolvable getBackoff();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-okta.provider.OktaProvider.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.provider.OktaProvider.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/provider-okta.provider.OktaProvider.property.httpProxy"></a>

```java
public java.lang.String getHttpProxy();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-okta.provider.OktaProvider.property.logLevel"></a>

```java
public java.lang.Number getLogLevel();
```

- *Type:* java.lang.Number

---

##### `maxApiCapacity`<sup>Optional</sup> <a name="maxApiCapacity" id="@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacity"></a>

```java
public java.lang.Number getMaxApiCapacity();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-okta.provider.OktaProvider.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `maxWaitSeconds`<sup>Optional</sup> <a name="maxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSeconds"></a>

```java
public java.lang.Number getMaxWaitSeconds();
```

- *Type:* java.lang.Number

---

##### `minWaitSeconds`<sup>Optional</sup> <a name="minWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.property.minWaitSeconds"></a>

```java
public java.lang.Number getMinWaitSeconds();
```

- *Type:* java.lang.Number

---

##### `orgName`<sup>Optional</sup> <a name="orgName" id="@cdktf/provider-okta.provider.OktaProvider.property.orgName"></a>

```java
public java.lang.String getOrgName();
```

- *Type:* java.lang.String

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-okta.provider.OktaProvider.property.parallelism"></a>

```java
public java.lang.Number getParallelism();
```

- *Type:* java.lang.Number

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyId`<sup>Optional</sup> <a name="privateKeyId" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-okta.provider.OktaProvider.property.requestTimeout"></a>

```java
public java.lang.Number getRequestTimeout();
```

- *Type:* java.lang.Number

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.provider.OktaProvider.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.provider.OktaProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OktaProviderConfig <a name="OktaProviderConfig" id="@cdktf/provider-okta.provider.OktaProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.provider.OktaProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.provider.OktaProviderConfig;

OktaProviderConfig.builder()
//  .accessToken(java.lang.String)
//  .alias(java.lang.String)
//  .apiToken(java.lang.String)
//  .backoff(java.lang.Boolean|IResolvable)
//  .baseUrl(java.lang.String)
//  .clientId(java.lang.String)
//  .httpProxy(java.lang.String)
//  .logLevel(java.lang.Number)
//  .maxApiCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .maxWaitSeconds(java.lang.Number)
//  .minWaitSeconds(java.lang.Number)
//  .orgName(java.lang.String)
//  .parallelism(java.lang.Number)
//  .privateKey(java.lang.String)
//  .privateKeyId(java.lang.String)
//  .requestTimeout(java.lang.Number)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Bearer token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.backoff">backoff</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use exponential back off strategy for rate limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The Okta url. (Use 'oktapreview.com' for Okta testing). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.logLevel">logLevel</a></code> | <code>java.lang.Number</code> | providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxApiCapacity">maxApiCapacity</a></code> | <code>java.lang.Number</code> | Sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | maximum number of retries to attempt before erroring out. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxWaitSeconds">maxWaitSeconds</a></code> | <code>java.lang.Number</code> | maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.minWaitSeconds">minWaitSeconds</a></code> | <code>java.lang.Number</code> | minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.orgName">orgName</a></code> | <code>java.lang.String</code> | The organization to manage in Okta. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.parallelism">parallelism</a></code> | <code>java.lang.Number</code> | Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | API Token Id granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | API Token granting privileges to Okta API. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Bearer token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#access_token OktaProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#alias OktaProvider#alias}

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#api_token OktaProvider#api_token}

---

##### `backoff`<sup>Optional</sup> <a name="backoff" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.backoff"></a>

```java
public java.lang.Boolean|IResolvable getBackoff();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use exponential back off strategy for rate limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#backoff OktaProvider#backoff}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

The Okta url. (Use 'oktapreview.com' for Okta testing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#base_url OktaProvider#base_url}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#client_id OktaProvider#client_id}

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.httpProxy"></a>

```java
public java.lang.String getHttpProxy();
```

- *Type:* java.lang.String

Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#http_proxy OktaProvider#http_proxy}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.logLevel"></a>

```java
public java.lang.Number getLogLevel();
```

- *Type:* java.lang.Number

providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#log_level OktaProvider#log_level}

---

##### `maxApiCapacity`<sup>Optional</sup> <a name="maxApiCapacity" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxApiCapacity"></a>

```java
public java.lang.Number getMaxApiCapacity();
```

- *Type:* java.lang.Number

Sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints.

Okta API operates in one minute buckets. See Okta Management API Rate Limits: https://developer.okta.com/docs/reference/rl-global-mgmt/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#max_api_capacity OktaProvider#max_api_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

maximum number of retries to attempt before erroring out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#max_retries OktaProvider#max_retries}

---

##### `maxWaitSeconds`<sup>Optional</sup> <a name="maxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxWaitSeconds"></a>

```java
public java.lang.Number getMaxWaitSeconds();
```

- *Type:* java.lang.Number

maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#max_wait_seconds OktaProvider#max_wait_seconds}

---

##### `minWaitSeconds`<sup>Optional</sup> <a name="minWaitSeconds" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.minWaitSeconds"></a>

```java
public java.lang.Number getMinWaitSeconds();
```

- *Type:* java.lang.Number

minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#min_wait_seconds OktaProvider#min_wait_seconds}

---

##### `orgName`<sup>Optional</sup> <a name="orgName" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.orgName"></a>

```java
public java.lang.String getOrgName();
```

- *Type:* java.lang.String

The organization to manage in Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#org_name OktaProvider#org_name}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.parallelism"></a>

```java
public java.lang.Number getParallelism();
```

- *Type:* java.lang.Number

Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#parallelism OktaProvider#parallelism}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#private_key OktaProvider#private_key}

---

##### `privateKeyId`<sup>Optional</sup> <a name="privateKeyId" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

API Token Id granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#private_key_id OktaProvider#private_key_id}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.requestTimeout"></a>

```java
public java.lang.Number getRequestTimeout();
```

- *Type:* java.lang.Number

Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set).

The maximum value can be `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#request_timeout OktaProvider#request_timeout}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs#scopes OktaProvider#scopes}

---



