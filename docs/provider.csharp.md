# `provider`

Refer to the Terraform Registory for docs: [`okta`](https://registry.terraform.io/providers/okta/okta/4.3.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-okta.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaProvider <a name="OktaProvider" id="@cdktf/provider-okta.provider.OktaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs okta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.provider.OktaProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OktaProvider(Construct Scope, string Id, OktaProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig">OktaProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.provider.OktaProviderConfig">OktaProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.provider.OktaProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.provider.OktaProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.provider.OktaProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.provider.OktaProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.provider.OktaProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-okta.provider.OktaProvider.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-okta.provider.OktaProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-okta.provider.OktaProvider.resetApiToken"></a>

```csharp
private void ResetApiToken()
```

##### `ResetBackoff` <a name="ResetBackoff" id="@cdktf/provider-okta.provider.OktaProvider.resetBackoff"></a>

```csharp
private void ResetBackoff()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-okta.provider.OktaProvider.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-okta.provider.OktaProvider.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetHttpProxy` <a name="ResetHttpProxy" id="@cdktf/provider-okta.provider.OktaProvider.resetHttpProxy"></a>

```csharp
private void ResetHttpProxy()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-okta.provider.OktaProvider.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```

##### `ResetMaxApiCapacity` <a name="ResetMaxApiCapacity" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxApiCapacity"></a>

```csharp
private void ResetMaxApiCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetMaxWaitSeconds` <a name="ResetMaxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxWaitSeconds"></a>

```csharp
private void ResetMaxWaitSeconds()
```

##### `ResetMinWaitSeconds` <a name="ResetMinWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.resetMinWaitSeconds"></a>

```csharp
private void ResetMinWaitSeconds()
```

##### `ResetOrgName` <a name="ResetOrgName" id="@cdktf/provider-okta.provider.OktaProvider.resetOrgName"></a>

```csharp
private void ResetOrgName()
```

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-okta.provider.OktaProvider.resetParallelism"></a>

```csharp
private void ResetParallelism()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-okta.provider.OktaProvider.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetPrivateKeyId` <a name="ResetPrivateKeyId" id="@cdktf/provider-okta.provider.OktaProvider.resetPrivateKeyId"></a>

```csharp
private void ResetPrivateKeyId()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-okta.provider.OktaProvider.resetRequestTimeout"></a>

```csharp
private void ResetRequestTimeout()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-okta.provider.OktaProvider.resetScopes"></a>

```csharp
private void ResetScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.provider.OktaProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

OktaProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.provider.OktaProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

OktaProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

OktaProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.backoffInput">BackoffInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.httpProxyInput">HttpProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.logLevelInput">LogLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacityInput">MaxApiCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSecondsInput">MaxWaitSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.minWaitSecondsInput">MinWaitSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.orgNameInput">OrgNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.parallelismInput">ParallelismInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.backoff">Backoff</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.httpProxy">HttpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.logLevel">LogLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacity">MaxApiCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSeconds">MaxWaitSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.minWaitSeconds">MinWaitSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.orgName">OrgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.parallelism">Parallelism</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.provider.OktaProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.provider.OktaProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.provider.OktaProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.provider.OktaProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-okta.provider.OktaProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-okta.provider.OktaProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-okta.provider.OktaProvider.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-okta.provider.OktaProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-okta.provider.OktaProvider.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `BackoffInput`<sup>Optional</sup> <a name="BackoffInput" id="@cdktf/provider-okta.provider.OktaProvider.property.backoffInput"></a>

```csharp
public object BackoffInput { get; }
```

- *Type:* object

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-okta.provider.OktaProvider.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.provider.OktaProvider.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `HttpProxyInput`<sup>Optional</sup> <a name="HttpProxyInput" id="@cdktf/provider-okta.provider.OktaProvider.property.httpProxyInput"></a>

```csharp
public string HttpProxyInput { get; }
```

- *Type:* string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-okta.provider.OktaProvider.property.logLevelInput"></a>

```csharp
public double LogLevelInput { get; }
```

- *Type:* double

---

##### `MaxApiCapacityInput`<sup>Optional</sup> <a name="MaxApiCapacityInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacityInput"></a>

```csharp
public double MaxApiCapacityInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `MaxWaitSecondsInput`<sup>Optional</sup> <a name="MaxWaitSecondsInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSecondsInput"></a>

```csharp
public double MaxWaitSecondsInput { get; }
```

- *Type:* double

---

##### `MinWaitSecondsInput`<sup>Optional</sup> <a name="MinWaitSecondsInput" id="@cdktf/provider-okta.provider.OktaProvider.property.minWaitSecondsInput"></a>

```csharp
public double MinWaitSecondsInput { get; }
```

- *Type:* double

---

##### `OrgNameInput`<sup>Optional</sup> <a name="OrgNameInput" id="@cdktf/provider-okta.provider.OktaProvider.property.orgNameInput"></a>

```csharp
public string OrgNameInput { get; }
```

- *Type:* string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-okta.provider.OktaProvider.property.parallelismInput"></a>

```csharp
public double ParallelismInput { get; }
```

- *Type:* double

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyIdInput"></a>

```csharp
public string PrivateKeyIdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-okta.provider.OktaProvider.property.requestTimeoutInput"></a>

```csharp
public double RequestTimeoutInput { get; }
```

- *Type:* double

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-okta.provider.OktaProvider.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-okta.provider.OktaProvider.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-okta.provider.OktaProvider.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `Backoff`<sup>Optional</sup> <a name="Backoff" id="@cdktf/provider-okta.provider.OktaProvider.property.backoff"></a>

```csharp
public object Backoff { get; }
```

- *Type:* object

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-okta.provider.OktaProvider.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.provider.OktaProvider.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `HttpProxy`<sup>Optional</sup> <a name="HttpProxy" id="@cdktf/provider-okta.provider.OktaProvider.property.httpProxy"></a>

```csharp
public string HttpProxy { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-okta.provider.OktaProvider.property.logLevel"></a>

```csharp
public double LogLevel { get; }
```

- *Type:* double

---

##### `MaxApiCapacity`<sup>Optional</sup> <a name="MaxApiCapacity" id="@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacity"></a>

```csharp
public double MaxApiCapacity { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-okta.provider.OktaProvider.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `MaxWaitSeconds`<sup>Optional</sup> <a name="MaxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSeconds"></a>

```csharp
public double MaxWaitSeconds { get; }
```

- *Type:* double

---

##### `MinWaitSeconds`<sup>Optional</sup> <a name="MinWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.property.minWaitSeconds"></a>

```csharp
public double MinWaitSeconds { get; }
```

- *Type:* double

---

##### `OrgName`<sup>Optional</sup> <a name="OrgName" id="@cdktf/provider-okta.provider.OktaProvider.property.orgName"></a>

```csharp
public string OrgName { get; }
```

- *Type:* string

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-okta.provider.OktaProvider.property.parallelism"></a>

```csharp
public double Parallelism { get; }
```

- *Type:* double

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyId`<sup>Optional</sup> <a name="PrivateKeyId" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; }
```

- *Type:* string

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-okta.provider.OktaProvider.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; }
```

- *Type:* double

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-okta.provider.OktaProvider.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.provider.OktaProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OktaProviderConfig <a name="OktaProviderConfig" id="@cdktf/provider-okta.provider.OktaProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.provider.OktaProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new OktaProviderConfig {
    string AccessToken = null,
    string Alias = null,
    string ApiToken = null,
    object Backoff = null,
    string BaseUrl = null,
    string ClientId = null,
    string HttpProxy = null,
    double LogLevel = null,
    double MaxApiCapacity = null,
    double MaxRetries = null,
    double MaxWaitSeconds = null,
    double MinWaitSeconds = null,
    string OrgName = null,
    double Parallelism = null,
    string PrivateKey = null,
    string PrivateKeyId = null,
    double RequestTimeout = null,
    string[] Scopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.accessToken">AccessToken</a></code> | <code>string</code> | Bearer token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.apiToken">ApiToken</a></code> | <code>string</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.backoff">Backoff</a></code> | <code>object</code> | Use exponential back off strategy for rate limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.baseUrl">BaseUrl</a></code> | <code>string</code> | The Okta url. (Use 'oktapreview.com' for Okta testing). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.httpProxy">HttpProxy</a></code> | <code>string</code> | Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.logLevel">LogLevel</a></code> | <code>double</code> | providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxApiCapacity">MaxApiCapacity</a></code> | <code>double</code> | (Experimental) sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | maximum number of retries to attempt before erroring out. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxWaitSeconds">MaxWaitSeconds</a></code> | <code>double</code> | maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.minWaitSeconds">MinWaitSeconds</a></code> | <code>double</code> | minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.orgName">OrgName</a></code> | <code>string</code> | The organization to manage in Okta. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.parallelism">Parallelism</a></code> | <code>double</code> | Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | API Token Id granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | API Token granting privileges to Okta API. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Bearer token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#access_token OktaProvider#access_token}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#alias OktaProvider#alias}

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#api_token OktaProvider#api_token}

---

##### `Backoff`<sup>Optional</sup> <a name="Backoff" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.backoff"></a>

```csharp
public object Backoff { get; set; }
```

- *Type:* object

Use exponential back off strategy for rate limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#backoff OktaProvider#backoff}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

The Okta url. (Use 'oktapreview.com' for Okta testing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#base_url OktaProvider#base_url}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#client_id OktaProvider#client_id}

---

##### `HttpProxy`<sup>Optional</sup> <a name="HttpProxy" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.httpProxy"></a>

```csharp
public string HttpProxy { get; set; }
```

- *Type:* string

Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#http_proxy OktaProvider#http_proxy}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.logLevel"></a>

```csharp
public double LogLevel { get; set; }
```

- *Type:* double

providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#log_level OktaProvider#log_level}

---

##### `MaxApiCapacity`<sup>Optional</sup> <a name="MaxApiCapacity" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxApiCapacity"></a>

```csharp
public double MaxApiCapacity { get; set; }
```

- *Type:* double

(Experimental) sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints.

Okta API operates in one minute buckets. See Okta Management API Rate Limits: https://developer.okta.com/docs/reference/rl-global-mgmt/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#max_api_capacity OktaProvider#max_api_capacity}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

maximum number of retries to attempt before erroring out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#max_retries OktaProvider#max_retries}

---

##### `MaxWaitSeconds`<sup>Optional</sup> <a name="MaxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxWaitSeconds"></a>

```csharp
public double MaxWaitSeconds { get; set; }
```

- *Type:* double

maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#max_wait_seconds OktaProvider#max_wait_seconds}

---

##### `MinWaitSeconds`<sup>Optional</sup> <a name="MinWaitSeconds" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.minWaitSeconds"></a>

```csharp
public double MinWaitSeconds { get; set; }
```

- *Type:* double

minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#min_wait_seconds OktaProvider#min_wait_seconds}

---

##### `OrgName`<sup>Optional</sup> <a name="OrgName" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.orgName"></a>

```csharp
public string OrgName { get; set; }
```

- *Type:* string

The organization to manage in Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#org_name OktaProvider#org_name}

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.parallelism"></a>

```csharp
public double Parallelism { get; set; }
```

- *Type:* double

Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#parallelism OktaProvider#parallelism}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#private_key OktaProvider#private_key}

---

##### `PrivateKeyId`<sup>Optional</sup> <a name="PrivateKeyId" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; set; }
```

- *Type:* string

API Token Id granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#private_key_id OktaProvider#private_key_id}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; set; }
```

- *Type:* double

Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set).

The maximum value can be `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#request_timeout OktaProvider#request_timeout}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs#scopes OktaProvider#scopes}

---



