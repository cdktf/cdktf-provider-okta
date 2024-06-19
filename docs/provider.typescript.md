# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-okta.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaProvider <a name="OktaProvider" id="@cdktf/provider-okta.provider.OktaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs okta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.provider.OktaProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-okta'

new provider.OktaProvider(scope: Construct, id: string, config?: OktaProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig">OktaProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.provider.OktaProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.provider.OktaProviderConfig">OktaProviderConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.provider.OktaProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.provider.OktaProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.provider.OktaProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.provider.OktaProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.provider.OktaProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.provider.OktaProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.provider.OktaProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-okta.provider.OktaProvider.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-okta.provider.OktaProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApiToken` <a name="resetApiToken" id="@cdktf/provider-okta.provider.OktaProvider.resetApiToken"></a>

```typescript
public resetApiToken(): void
```

##### `resetBackoff` <a name="resetBackoff" id="@cdktf/provider-okta.provider.OktaProvider.resetBackoff"></a>

```typescript
public resetBackoff(): void
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-okta.provider.OktaProvider.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-okta.provider.OktaProvider.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetHttpProxy` <a name="resetHttpProxy" id="@cdktf/provider-okta.provider.OktaProvider.resetHttpProxy"></a>

```typescript
public resetHttpProxy(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-okta.provider.OktaProvider.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetMaxApiCapacity` <a name="resetMaxApiCapacity" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxApiCapacity"></a>

```typescript
public resetMaxApiCapacity(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetMaxWaitSeconds` <a name="resetMaxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.resetMaxWaitSeconds"></a>

```typescript
public resetMaxWaitSeconds(): void
```

##### `resetMinWaitSeconds` <a name="resetMinWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.resetMinWaitSeconds"></a>

```typescript
public resetMinWaitSeconds(): void
```

##### `resetOrgName` <a name="resetOrgName" id="@cdktf/provider-okta.provider.OktaProvider.resetOrgName"></a>

```typescript
public resetOrgName(): void
```

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-okta.provider.OktaProvider.resetParallelism"></a>

```typescript
public resetParallelism(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-okta.provider.OktaProvider.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetPrivateKeyId` <a name="resetPrivateKeyId" id="@cdktf/provider-okta.provider.OktaProvider.resetPrivateKeyId"></a>

```typescript
public resetPrivateKeyId(): void
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-okta.provider.OktaProvider.resetRequestTimeout"></a>

```typescript
public resetRequestTimeout(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-okta.provider.OktaProvider.resetScopes"></a>

```typescript
public resetScopes(): void
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

```typescript
import { provider } from '@cdktf/provider-okta'

provider.OktaProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-okta'

provider.OktaProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-okta'

provider.OktaProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.provider.OktaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-okta'

provider.OktaProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OktaProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OktaProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OktaProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.provider.OktaProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OktaProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.apiTokenInput">apiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.backoffInput">backoffInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.httpProxyInput">httpProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.logLevelInput">logLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacityInput">maxApiCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSecondsInput">maxWaitSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.minWaitSecondsInput">minWaitSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.orgNameInput">orgNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.parallelismInput">parallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.backoff">backoff</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.httpProxy">httpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.logLevel">logLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacity">maxApiCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSeconds">maxWaitSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.minWaitSeconds">minWaitSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.orgName">orgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.parallelism">parallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.privateKeyId">privateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.provider.OktaProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.provider.OktaProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.provider.OktaProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.provider.OktaProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-okta.provider.OktaProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-okta.provider.OktaProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-okta.provider.OktaProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-okta.provider.OktaProvider.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-okta.provider.OktaProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-okta.provider.OktaProvider.property.apiTokenInput"></a>

```typescript
public readonly apiTokenInput: string;
```

- *Type:* string

---

##### `backoffInput`<sup>Optional</sup> <a name="backoffInput" id="@cdktf/provider-okta.provider.OktaProvider.property.backoffInput"></a>

```typescript
public readonly backoffInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-okta.provider.OktaProvider.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.provider.OktaProvider.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `httpProxyInput`<sup>Optional</sup> <a name="httpProxyInput" id="@cdktf/provider-okta.provider.OktaProvider.property.httpProxyInput"></a>

```typescript
public readonly httpProxyInput: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-okta.provider.OktaProvider.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: number;
```

- *Type:* number

---

##### `maxApiCapacityInput`<sup>Optional</sup> <a name="maxApiCapacityInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacityInput"></a>

```typescript
public readonly maxApiCapacityInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `maxWaitSecondsInput`<sup>Optional</sup> <a name="maxWaitSecondsInput" id="@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSecondsInput"></a>

```typescript
public readonly maxWaitSecondsInput: number;
```

- *Type:* number

---

##### `minWaitSecondsInput`<sup>Optional</sup> <a name="minWaitSecondsInput" id="@cdktf/provider-okta.provider.OktaProvider.property.minWaitSecondsInput"></a>

```typescript
public readonly minWaitSecondsInput: number;
```

- *Type:* number

---

##### `orgNameInput`<sup>Optional</sup> <a name="orgNameInput" id="@cdktf/provider-okta.provider.OktaProvider.property.orgNameInput"></a>

```typescript
public readonly orgNameInput: string;
```

- *Type:* string

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-okta.provider.OktaProvider.property.parallelismInput"></a>

```typescript
public readonly parallelismInput: number;
```

- *Type:* number

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyIdInput"></a>

```typescript
public readonly privateKeyIdInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-okta.provider.OktaProvider.property.requestTimeoutInput"></a>

```typescript
public readonly requestTimeoutInput: number;
```

- *Type:* number

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.provider.OktaProvider.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-okta.provider.OktaProvider.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-okta.provider.OktaProvider.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `backoff`<sup>Optional</sup> <a name="backoff" id="@cdktf/provider-okta.provider.OktaProvider.property.backoff"></a>

```typescript
public readonly backoff: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-okta.provider.OktaProvider.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.provider.OktaProvider.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/provider-okta.provider.OktaProvider.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-okta.provider.OktaProvider.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

---

##### `maxApiCapacity`<sup>Optional</sup> <a name="maxApiCapacity" id="@cdktf/provider-okta.provider.OktaProvider.property.maxApiCapacity"></a>

```typescript
public readonly maxApiCapacity: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-okta.provider.OktaProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `maxWaitSeconds`<sup>Optional</sup> <a name="maxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.property.maxWaitSeconds"></a>

```typescript
public readonly maxWaitSeconds: number;
```

- *Type:* number

---

##### `minWaitSeconds`<sup>Optional</sup> <a name="minWaitSeconds" id="@cdktf/provider-okta.provider.OktaProvider.property.minWaitSeconds"></a>

```typescript
public readonly minWaitSeconds: number;
```

- *Type:* number

---

##### `orgName`<sup>Optional</sup> <a name="orgName" id="@cdktf/provider-okta.provider.OktaProvider.property.orgName"></a>

```typescript
public readonly orgName: string;
```

- *Type:* string

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-okta.provider.OktaProvider.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyId`<sup>Optional</sup> <a name="privateKeyId" id="@cdktf/provider-okta.provider.OktaProvider.property.privateKeyId"></a>

```typescript
public readonly privateKeyId: string;
```

- *Type:* string

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-okta.provider.OktaProvider.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.provider.OktaProvider.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.provider.OktaProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OktaProviderConfig <a name="OktaProviderConfig" id="@cdktf/provider-okta.provider.OktaProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.provider.OktaProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-okta'

const oktaProviderConfig: provider.OktaProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.accessToken">accessToken</a></code> | <code>string</code> | Bearer token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.apiToken">apiToken</a></code> | <code>string</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.backoff">backoff</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use exponential back off strategy for rate limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.baseUrl">baseUrl</a></code> | <code>string</code> | The Okta url. (Use 'oktapreview.com' for Okta testing). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.clientId">clientId</a></code> | <code>string</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.httpProxy">httpProxy</a></code> | <code>string</code> | Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.logLevel">logLevel</a></code> | <code>number</code> | providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxApiCapacity">maxApiCapacity</a></code> | <code>number</code> | (Experimental) sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | maximum number of retries to attempt before erroring out. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.maxWaitSeconds">maxWaitSeconds</a></code> | <code>number</code> | maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.minWaitSeconds">minWaitSeconds</a></code> | <code>number</code> | minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.orgName">orgName</a></code> | <code>string</code> | The organization to manage in Okta. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.parallelism">parallelism</a></code> | <code>number</code> | Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKey">privateKey</a></code> | <code>string</code> | API Token granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKeyId">privateKeyId</a></code> | <code>string</code> | API Token Id granting privileges to Okta API. |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set). |
| <code><a href="#@cdktf/provider-okta.provider.OktaProviderConfig.property.scopes">scopes</a></code> | <code>string[]</code> | API Token granting privileges to Okta API. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Bearer token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#access_token OktaProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#alias OktaProvider#alias}

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#api_token OktaProvider#api_token}

---

##### `backoff`<sup>Optional</sup> <a name="backoff" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.backoff"></a>

```typescript
public readonly backoff: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use exponential back off strategy for rate limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#backoff OktaProvider#backoff}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

The Okta url. (Use 'oktapreview.com' for Okta testing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#base_url OktaProvider#base_url}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#client_id OktaProvider#client_id}

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#http_proxy OktaProvider#http_proxy}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#log_level OktaProvider#log_level}

---

##### `maxApiCapacity`<sup>Optional</sup> <a name="maxApiCapacity" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxApiCapacity"></a>

```typescript
public readonly maxApiCapacity: number;
```

- *Type:* number

(Experimental) sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints.

Okta API operates in one minute buckets. See Okta Management API Rate Limits: https://developer.okta.com/docs/reference/rl-global-mgmt/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#max_api_capacity OktaProvider#max_api_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

maximum number of retries to attempt before erroring out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#max_retries OktaProvider#max_retries}

---

##### `maxWaitSeconds`<sup>Optional</sup> <a name="maxWaitSeconds" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.maxWaitSeconds"></a>

```typescript
public readonly maxWaitSeconds: number;
```

- *Type:* number

maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#max_wait_seconds OktaProvider#max_wait_seconds}

---

##### `minWaitSeconds`<sup>Optional</sup> <a name="minWaitSeconds" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.minWaitSeconds"></a>

```typescript
public readonly minWaitSeconds: number;
```

- *Type:* number

minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#min_wait_seconds OktaProvider#min_wait_seconds}

---

##### `orgName`<sup>Optional</sup> <a name="orgName" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.orgName"></a>

```typescript
public readonly orgName: string;
```

- *Type:* string

The organization to manage in Okta.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#org_name OktaProvider#org_name}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#parallelism OktaProvider#parallelism}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#private_key OktaProvider#private_key}

---

##### `privateKeyId`<sup>Optional</sup> <a name="privateKeyId" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.privateKeyId"></a>

```typescript
public readonly privateKeyId: string;
```

- *Type:* string

API Token Id granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#private_key_id OktaProvider#private_key_id}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set).

The maximum value can be `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#request_timeout OktaProvider#request_timeout}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.provider.OktaProviderConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

API Token granting privileges to Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs#scopes OktaProvider#scopes}

---



