# `brand` Submodule <a name="`brand` Submodule" id="@cdktf/provider-okta.brand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Brand <a name="Brand" id="@cdktf/provider-okta.brand.Brand"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/brand okta_brand}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.brand.Brand.Initializer"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

new brand.Brand(scope: Construct, id: string, config?: BrandConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.brand.BrandConfig">BrandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.brand.BrandConfig">BrandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetAgreeToCustomPrivacyPolicy">resetAgreeToCustomPrivacyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetBrandId">resetBrandId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetCustomPrivacyPolicyUrl">resetCustomPrivacyPolicyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetRemovePoweredByOkta">resetRemovePoweredByOkta</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.brand.Brand.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.brand.Brand.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.brand.Brand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.brand.Brand.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.brand.Brand.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.brand.Brand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.brand.Brand.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.brand.Brand.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.brand.Brand.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.brand.Brand.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.brand.Brand.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.brand.Brand.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.brand.Brand.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.brand.Brand.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAgreeToCustomPrivacyPolicy` <a name="resetAgreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.Brand.resetAgreeToCustomPrivacyPolicy"></a>

```typescript
public resetAgreeToCustomPrivacyPolicy(): void
```

##### `resetBrandId` <a name="resetBrandId" id="@cdktf/provider-okta.brand.Brand.resetBrandId"></a>

```typescript
public resetBrandId(): void
```

##### `resetCustomPrivacyPolicyUrl` <a name="resetCustomPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.Brand.resetCustomPrivacyPolicyUrl"></a>

```typescript
public resetCustomPrivacyPolicyUrl(): void
```

##### `resetRemovePoweredByOkta` <a name="resetRemovePoweredByOkta" id="@cdktf/provider-okta.brand.Brand.resetRemovePoweredByOkta"></a>

```typescript
public resetRemovePoweredByOkta(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.brand.Brand.isConstruct"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

brand.Brand.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.brand.Brand.isTerraformElement"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

brand.Brand.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.brand.Brand.isTerraformResource"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

brand.Brand.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.links">links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicyInput">agreeToCustomPrivacyPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.brandIdInput">brandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrlInput">customPrivacyPolicyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.removePoweredByOktaInput">removePoweredByOktaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicy">agreeToCustomPrivacyPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.brandId">brandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrl">customPrivacyPolicyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.removePoweredByOkta">removePoweredByOkta</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.brand.Brand.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.brand.Brand.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.brand.Brand.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.brand.Brand.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.brand.Brand.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.brand.Brand.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.brand.Brand.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.brand.Brand.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.brand.Brand.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.brand.Brand.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.brand.Brand.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.brand.Brand.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.Brand.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.brand.Brand.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.brand.Brand.property.links"></a>

```typescript
public readonly links: string;
```

- *Type:* string

---

##### `agreeToCustomPrivacyPolicyInput`<sup>Optional</sup> <a name="agreeToCustomPrivacyPolicyInput" id="@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicyInput"></a>

```typescript
public readonly agreeToCustomPrivacyPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `brandIdInput`<sup>Optional</sup> <a name="brandIdInput" id="@cdktf/provider-okta.brand.Brand.property.brandIdInput"></a>

```typescript
public readonly brandIdInput: string;
```

- *Type:* string

---

##### `customPrivacyPolicyUrlInput`<sup>Optional</sup> <a name="customPrivacyPolicyUrlInput" id="@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrlInput"></a>

```typescript
public readonly customPrivacyPolicyUrlInput: string;
```

- *Type:* string

---

##### `removePoweredByOktaInput`<sup>Optional</sup> <a name="removePoweredByOktaInput" id="@cdktf/provider-okta.brand.Brand.property.removePoweredByOktaInput"></a>

```typescript
public readonly removePoweredByOktaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `agreeToCustomPrivacyPolicy`<sup>Required</sup> <a name="agreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicy"></a>

```typescript
public readonly agreeToCustomPrivacyPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.brand.Brand.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

---

##### `customPrivacyPolicyUrl`<sup>Required</sup> <a name="customPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrl"></a>

```typescript
public readonly customPrivacyPolicyUrl: string;
```

- *Type:* string

---

##### `removePoweredByOkta`<sup>Required</sup> <a name="removePoweredByOkta" id="@cdktf/provider-okta.brand.Brand.property.removePoweredByOkta"></a>

```typescript
public readonly removePoweredByOkta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.brand.Brand.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BrandConfig <a name="BrandConfig" id="@cdktf/provider-okta.brand.BrandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.brand.BrandConfig.Initializer"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

const brandConfig: brand.BrandConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.agreeToCustomPrivacyPolicy">agreeToCustomPrivacyPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Consent for updating the custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.brandId">brandId</a></code> | <code>string</code> | Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.customPrivacyPolicyUrl">customPrivacyPolicyUrl</a></code> | <code>string</code> | Custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.removePoweredByOkta">removePoweredByOkta</a></code> | <code>boolean \| cdktf.IResolvable</code> | Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.brand.BrandConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.brand.BrandConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.brand.BrandConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.brand.BrandConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.brand.BrandConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.BrandConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.brand.BrandConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agreeToCustomPrivacyPolicy`<sup>Optional</sup> <a name="agreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.BrandConfig.property.agreeToCustomPrivacyPolicy"></a>

```typescript
public readonly agreeToCustomPrivacyPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Consent for updating the custom privacy policy URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#agree_to_custom_privacy_policy Brand#agree_to_custom_privacy_policy}

---

##### `brandId`<sup>Optional</sup> <a name="brandId" id="@cdktf/provider-okta.brand.BrandConfig.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source.

Do this by setting brand_id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#brand_id Brand#brand_id}

---

##### `customPrivacyPolicyUrl`<sup>Optional</sup> <a name="customPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.BrandConfig.property.customPrivacyPolicyUrl"></a>

```typescript
public readonly customPrivacyPolicyUrl: string;
```

- *Type:* string

Custom privacy policy URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#custom_privacy_policy_url Brand#custom_privacy_policy_url}

---

##### `removePoweredByOkta`<sup>Optional</sup> <a name="removePoweredByOkta" id="@cdktf/provider-okta.brand.BrandConfig.property.removePoweredByOkta"></a>

```typescript
public readonly removePoweredByOkta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#remove_powered_by_okta Brand#remove_powered_by_okta}

---


