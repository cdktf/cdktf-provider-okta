# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-okta.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaProvider <a name="OktaProvider" id="@cdktf/provider-okta.provider.OktaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs okta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.provider.OktaProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/provider"

provider.NewOktaProvider(scope Construct, id *string, config OktaProviderConfig) OktaProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig">OktaProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.provider.OktaProviderConfig">OktaProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetBackoff">ResetBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetHttpProxy">ResetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMaxApiCapacity">ResetMaxApiCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMaxWaitSeconds">ResetMaxWaitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetMinWaitSeconds">ResetMinWaitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetOrgName">ResetOrgName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetParallelism">ResetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetPrivateKeyId">ResetPrivateKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.provider.OktaProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.provider.OktaProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.provider.OktaProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.provider.OktaProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.provider.OktaProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.provider.OktaProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.provider.OktaProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-okta.provider.OktaProvider.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-okta.provider.OktaProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-okta.provider.OktaProvider.resetApiToken"></a>

```go
func ResetApiToken()
```

##### `ResetBackoff` <a name="ResetBackoff" id="@cdktf/provider-okta.provider.OktaProvider.resetBackoff"></a>

```go
func ResetBackoff()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-okta.provider.OktaProvider.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-okta.provider.OktaProvider.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetHttpProxy` <a name="ResetHttpProxy" id="@cdktf/provider-okta.provider.OktaProvider.resetHttpProxy"></a>

```go
func ResetHttpProxy()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-okta.provider.OktaProvider.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetMaxApiCapacity` <a name="ResetMaxApiCapacity" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxApiCapacity"></a>

```go
func ResetMaxApiCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetMaxWaitSeconds` <a name="ResetMaxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxWaitSeconds"></a>

```go
func ResetMaxWaitSeconds()
```

##### `ResetMinWaitSeconds` <a name="ResetMinWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.resetMinWaitSeconds"></a>

```go
func ResetMinWaitSeconds()
```

##### `ResetOrgName` <a name="ResetOrgName" id="@cdktf/provider-okta.provider.OktaProvider.resetOrgName"></a>

```go
func ResetOrgName()
```

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-okta.provider.OktaProvider.resetParallelism"></a>

```go
func ResetParallelism()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-okta.provider.OktaProvider.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetPrivateKeyId` <a name="ResetPrivateKeyId" id="@cdktf/provider-okta.provider.OktaProvider.resetPrivateKeyId"></a>

```go
func ResetPrivateKeyId()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-okta.provider.OktaProvider.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-okta.provider.OktaProvider.resetScopes"></a>

```go
func ResetScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OktaProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.provider.OktaProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/provider"

provider.OktaProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/provider"

provider.OktaProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/provider"

provider.OktaProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/provider"

provider.OktaProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OktaProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OktaProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OktaProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OktaProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.backoffInput">BackoffInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.httpProxyInput">HttpProxyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.logLevelInput">LogLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacityInput">MaxApiCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSecondsInput">MaxWaitSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.minWaitSecondsInput">MinWaitSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.orgNameInput">OrgNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.parallelismInput">ParallelismInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.backoff">Backoff</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.httpProxy">HttpProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.logLevel">LogLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacity">MaxApiCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSeconds">MaxWaitSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.minWaitSeconds">MinWaitSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.orgName">OrgName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.parallelism">Parallelism</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.provider.OktaProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.provider.OktaProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.provider.OktaProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.provider.OktaProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-okta.provider.OktaProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-okta.provider.OktaProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-okta.provider.OktaProvider.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-okta.provider.OktaProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-okta.provider.OktaProvider.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `BackoffInput`<sup>Optional</sup> <a name="BackoffInput" id="@cdktf/provider-okta.provider.OktaProvider.property.backoffInput"></a>

```go
func BackoffInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-okta.provider.OktaProvider.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.provider.OktaProvider.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `HttpProxyInput`<sup>Optional</sup> <a name="HttpProxyInput" id="@cdktf/provider-okta.provider.OktaProvider.property.httpProxyInput"></a>

```go
func HttpProxyInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-okta.provider.OktaProvider.property.logLevelInput"></a>

```go
func LogLevelInput() *f64
```

- *Type:* *f64

---

##### `MaxApiCapacityInput`<sup>Optional</sup> <a name="MaxApiCapacityInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacityInput"></a>

```go
func MaxApiCapacityInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `MaxWaitSecondsInput`<sup>Optional</sup> <a name="MaxWaitSecondsInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSecondsInput"></a>

```go
func MaxWaitSecondsInput() *f64
```

- *Type:* *f64

---

##### `MinWaitSecondsInput`<sup>Optional</sup> <a name="MinWaitSecondsInput" id="@cdktf/provider-okta.provider.OktaProvider.property.minWaitSecondsInput"></a>

```go
func MinWaitSecondsInput() *f64
```

- *Type:* *f64

---

##### `OrgNameInput`<sup>Optional</sup> <a name="OrgNameInput" id="@cdktf/provider-okta.provider.OktaProvider.property.orgNameInput"></a>

```go
func OrgNameInput() *string
```

- *Type:* *string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-okta.provider.OktaProvider.property.parallelismInput"></a>

```go
func ParallelismInput() *f64
```

- *Type:* *f64

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyIdInput"></a>

```go
func PrivateKeyIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-okta.provider.OktaProvider.property.requestTimeoutInput"></a>

```go
func RequestTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-okta.provider.OktaProvider.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-okta.provider.OktaProvider.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-okta.provider.OktaProvider.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `Backoff`<sup>Optional</sup> <a name="Backoff" id="@cdktf/provider-okta.provider.OktaProvider.property.backoff"></a>

```go
func Backoff() interface{}
```

- *Type:* interface{}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-okta.provider.OktaProvider.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.provider.OktaProvider.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `HttpProxy`<sup>Optional</sup> <a name="HttpProxy" id="@cdktf/provider-okta.provider.OktaProvider.property.httpProxy"></a>

```go
func HttpProxy() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-okta.provider.OktaProvider.property.logLevel"></a>

```go
func LogLevel() *f64
```

- *Type:* *f64

---

##### `MaxApiCapacity`<sup>Optional</sup> <a name="MaxApiCapacity" id="@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacity"></a>

```go
func MaxApiCapacity() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-okta.provider.OktaProvider.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `MaxWaitSeconds`<sup>Optional</sup> <a name="MaxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSeconds"></a>

```go
func MaxWaitSeconds() *f64
```

- *Type:* *f64

---

##### `MinWaitSeconds`<sup>Optional</sup> <a name="MinWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.property.minWaitSeconds"></a>

```go
func MinWaitSeconds() *f64
```

- *Type:* *f64

---

##### `OrgName`<sup>Optional</sup> <a name="OrgName" id="@cdktf/provider-okta.provider.OktaProvider.property.orgName"></a>

```go
func OrgName() *string
```

- *Type:* *string

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-okta.provider.OktaProvider.property.parallelism"></a>

```go
func Parallelism() *f64
```

- *Type:* *f64

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyId`<sup>Optional</sup> <a name="PrivateKeyId" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyId"></a>

```go
func PrivateKeyId() *string
```

- *Type:* *string

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-okta.provider.OktaProvider.property.requestTimeout"></a>

```go
func RequestTimeout() *f64
```

- *Type:* *f64

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-okta.provider.OktaProvider.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.provider.OktaProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OktaProviderConfig <a name="OktaProviderConfig" id="@cdktf/provider-okta.provider.OktaProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.provider.OktaProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/provider"

&provider.OktaProviderConfig {
	AccessToken: *string,
	Alias: *string,
	ApiToken: *string,
	Backoff: interface{},
	BaseUrl: *string,
	ClientId: *string,
	HttpProxy: *string,
	LogLevel: *f64,
	MaxApiCapacity: *f64,
	MaxRetries: *f64,
	MaxWaitSeconds: *f64,
	MinWaitSeconds: *f64,
	OrgName: *string,
	Parallelism: *f64,
	PrivateKey: *string,
	PrivateKeyId: *string,
	RequestTimeout: *f64,
	Scopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.accessToken">AccessToken</a></code> | <code>*string</code> | Bearer token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.apiToken">ApiToken</a></code> | <code>*string</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.backoff">Backoff</a></code> | <code>interface{}</code> | Use exponential back off strategy for rate limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | The Okta url. (Use 'oktapreview.com' for Okta testing). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.clientId">ClientId</a></code> | <code>*string</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.httpProxy">HttpProxy</a></code> | <code>*string</code> | Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.logLevel">LogLevel</a></code> | <code>*f64</code> | providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxApiCapacity">MaxApiCapacity</a></code> | <code>*f64</code> | Sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | maximum number of retries to attempt before erroring out. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxWaitSeconds">MaxWaitSeconds</a></code> | <code>*f64</code> | maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.minWaitSeconds">MinWaitSeconds</a></code> | <code>*f64</code> | minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.orgName">OrgName</a></code> | <code>*string</code> | The organization to manage in Okta. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.parallelism">Parallelism</a></code> | <code>*f64</code> | Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | API Token Id granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | API Token granting privileges to Okta API. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Bearer token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#access_token OktaProvider#access_token}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#alias OktaProvider#alias}

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#api_token OktaProvider#api_token}

---

##### `Backoff`<sup>Optional</sup> <a name="Backoff" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.backoff"></a>

```go
Backoff interface{}
```

- *Type:* interface{}

Use exponential back off strategy for rate limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#backoff OktaProvider#backoff}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

The Okta url. (Use 'oktapreview.com' for Okta testing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#base_url OktaProvider#base_url}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#client_id OktaProvider#client_id}

---

##### `HttpProxy`<sup>Optional</sup> <a name="HttpProxy" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.httpProxy"></a>

```go
HttpProxy *string
```

- *Type:* *string

Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#http_proxy OktaProvider#http_proxy}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.logLevel"></a>

```go
LogLevel *f64
```

- *Type:* *f64

providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#log_level OktaProvider#log_level}

---

##### `MaxApiCapacity`<sup>Optional</sup> <a name="MaxApiCapacity" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxApiCapacity"></a>

```go
MaxApiCapacity *f64
```

- *Type:* *f64

Sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints.

Okta API operates in one minute buckets. See Okta Management API Rate Limits: https://developer.okta.com/docs/reference/rl-global-mgmt/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#max_api_capacity OktaProvider#max_api_capacity}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

maximum number of retries to attempt before erroring out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#max_retries OktaProvider#max_retries}

---

##### `MaxWaitSeconds`<sup>Optional</sup> <a name="MaxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxWaitSeconds"></a>

```go
MaxWaitSeconds *f64
```

- *Type:* *f64

maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#max_wait_seconds OktaProvider#max_wait_seconds}

---

##### `MinWaitSeconds`<sup>Optional</sup> <a name="MinWaitSeconds" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.minWaitSeconds"></a>

```go
MinWaitSeconds *f64
```

- *Type:* *f64

minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#min_wait_seconds OktaProvider#min_wait_seconds}

---

##### `OrgName`<sup>Optional</sup> <a name="OrgName" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.orgName"></a>

```go
OrgName *string
```

- *Type:* *string

The organization to manage in Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#org_name OktaProvider#org_name}

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.parallelism"></a>

```go
Parallelism *f64
```

- *Type:* *f64

Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#parallelism OktaProvider#parallelism}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#private_key OktaProvider#private_key}

---

##### `PrivateKeyId`<sup>Optional</sup> <a name="PrivateKeyId" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKeyId"></a>

```go
PrivateKeyId *string
```

- *Type:* *string

API Token Id granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#private_key_id OktaProvider#private_key_id}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.requestTimeout"></a>

```go
RequestTimeout *f64
```

- *Type:* *f64

Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set).

The maximum value can be `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#request_timeout OktaProvider#request_timeout}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs#scopes OktaProvider#scopes}

---



