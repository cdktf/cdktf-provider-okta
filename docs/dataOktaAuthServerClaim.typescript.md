# `dataOktaAuthServerClaim` Submodule <a name="`dataOktaAuthServerClaim` Submodule" id="@cdktf/provider-okta.dataOktaAuthServerClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaAuthServerClaim <a name="DataOktaAuthServerClaim" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim okta_auth_server_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer"></a>

```typescript
import { dataOktaAuthServerClaim } from '@cdktf/provider-okta'

new dataOktaAuthServerClaim.DataOktaAuthServerClaim(scope: Construct, id: string, config: DataOktaAuthServerClaimConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig">DataOktaAuthServerClaimConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig">DataOktaAuthServerClaimConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isConstruct"></a>

```typescript
import { dataOktaAuthServerClaim } from '@cdktf/provider-okta'

dataOktaAuthServerClaim.DataOktaAuthServerClaim.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformElement"></a>

```typescript
import { dataOktaAuthServerClaim } from '@cdktf/provider-okta'

dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformDataSource"></a>

```typescript
import { dataOktaAuthServerClaim } from '@cdktf/provider-okta'

dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.alwaysIncludeInToken">alwaysIncludeInToken</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.claimType">claimType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.authServerIdInput">authServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.authServerId">authServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `alwaysIncludeInToken`<sup>Required</sup> <a name="alwaysIncludeInToken" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.alwaysIncludeInToken"></a>

```typescript
public readonly alwaysIncludeInToken: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `claimType`<sup>Required</sup> <a name="claimType" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.claimType"></a>

```typescript
public readonly claimType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `authServerIdInput`<sup>Optional</sup> <a name="authServerIdInput" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.authServerIdInput"></a>

```typescript
public readonly authServerIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.authServerId"></a>

```typescript
public readonly authServerId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaAuthServerClaimConfig <a name="DataOktaAuthServerClaimConfig" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.Initializer"></a>

```typescript
import { dataOktaAuthServerClaim } from '@cdktf/provider-okta'

const dataOktaAuthServerClaimConfig: dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.authServerId">authServerId</a></code> | <code>string</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#id DataOktaAuthServerClaim#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#name DataOktaAuthServerClaim#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.authServerId"></a>

```typescript
public readonly authServerId: string;
```

- *Type:* string

Auth server ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#auth_server_id DataOktaAuthServerClaim#auth_server_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#id DataOktaAuthServerClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#name DataOktaAuthServerClaim#name}.

---



