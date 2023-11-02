# `okta_factor_totp`

Refer to the Terraform Registory for docs: [`okta_factor_totp`](https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp).

# `factorTotp` Submodule <a name="`factorTotp` Submodule" id="@cdktf/provider-okta.factorTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FactorTotp <a name="FactorTotp" id="@cdktf/provider-okta.factorTotp.FactorTotp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp okta_factor_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer"></a>

```typescript
import { factorTotp } from '@cdktf/provider-okta'

new factorTotp.FactorTotp(scope: Construct, id: string, config: FactorTotpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig">FactorTotpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig">FactorTotpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetClockDriftInterval">resetClockDriftInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetHmacAlgorithm">resetHmacAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetOtpLength">resetOtpLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetSharedSecretEncoding">resetSharedSecretEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetTimeStep">resetTimeStep</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.factorTotp.FactorTotp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.factorTotp.FactorTotp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.factorTotp.FactorTotp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.factorTotp.FactorTotp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.factorTotp.FactorTotp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.factorTotp.FactorTotp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.factorTotp.FactorTotp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.factorTotp.FactorTotp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.factorTotp.FactorTotp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.factorTotp.FactorTotp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetClockDriftInterval` <a name="resetClockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetClockDriftInterval"></a>

```typescript
public resetClockDriftInterval(): void
```

##### `resetHmacAlgorithm` <a name="resetHmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetHmacAlgorithm"></a>

```typescript
public resetHmacAlgorithm(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOtpLength` <a name="resetOtpLength" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetOtpLength"></a>

```typescript
public resetOtpLength(): void
```

##### `resetSharedSecretEncoding` <a name="resetSharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetSharedSecretEncoding"></a>

```typescript
public resetSharedSecretEncoding(): void
```

##### `resetTimeStep` <a name="resetTimeStep" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetTimeStep"></a>

```typescript
public resetTimeStep(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FactorTotp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct"></a>

```typescript
import { factorTotp } from '@cdktf/provider-okta'

factorTotp.FactorTotp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement"></a>

```typescript
import { factorTotp } from '@cdktf/provider-okta'

factorTotp.FactorTotp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource"></a>

```typescript
import { factorTotp } from '@cdktf/provider-okta'

factorTotp.FactorTotp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport"></a>

```typescript
import { factorTotp } from '@cdktf/provider-okta'

factorTotp.FactorTotp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FactorTotp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FactorTotp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FactorTotp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.factorTotp.FactorTotp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FactorTotp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftIntervalInput">clockDriftIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithmInput">hmacAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLengthInput">otpLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncodingInput">sharedSecretEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStepInput">timeStepInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftInterval">clockDriftInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithm">hmacAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLength">otpLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncoding">sharedSecretEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStep">timeStep</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clockDriftIntervalInput`<sup>Optional</sup> <a name="clockDriftIntervalInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftIntervalInput"></a>

```typescript
public readonly clockDriftIntervalInput: number;
```

- *Type:* number

---

##### `hmacAlgorithmInput`<sup>Optional</sup> <a name="hmacAlgorithmInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithmInput"></a>

```typescript
public readonly hmacAlgorithmInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `otpLengthInput`<sup>Optional</sup> <a name="otpLengthInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLengthInput"></a>

```typescript
public readonly otpLengthInput: number;
```

- *Type:* number

---

##### `sharedSecretEncodingInput`<sup>Optional</sup> <a name="sharedSecretEncodingInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncodingInput"></a>

```typescript
public readonly sharedSecretEncodingInput: string;
```

- *Type:* string

---

##### `timeStepInput`<sup>Optional</sup> <a name="timeStepInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStepInput"></a>

```typescript
public readonly timeStepInput: number;
```

- *Type:* number

---

##### `clockDriftInterval`<sup>Required</sup> <a name="clockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftInterval"></a>

```typescript
public readonly clockDriftInterval: number;
```

- *Type:* number

---

##### `hmacAlgorithm`<sup>Required</sup> <a name="hmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithm"></a>

```typescript
public readonly hmacAlgorithm: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `otpLength`<sup>Required</sup> <a name="otpLength" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLength"></a>

```typescript
public readonly otpLength: number;
```

- *Type:* number

---

##### `sharedSecretEncoding`<sup>Required</sup> <a name="sharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncoding"></a>

```typescript
public readonly sharedSecretEncoding: string;
```

- *Type:* string

---

##### `timeStep`<sup>Required</sup> <a name="timeStep" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStep"></a>

```typescript
public readonly timeStep: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FactorTotpConfig <a name="FactorTotpConfig" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.Initializer"></a>

```typescript
import { factorTotp } from '@cdktf/provider-okta'

const factorTotpConfig: factorTotp.FactorTotpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.name">name</a></code> | <code>string</code> | The TOTP name. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.clockDriftInterval">clockDriftInterval</a></code> | <code>number</code> | Clock drift interval. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.hmacAlgorithm">hmacAlgorithm</a></code> | <code>string</code> | Hash-based message authentication code algorithm. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp#id FactorTotp#id}. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.otpLength">otpLength</a></code> | <code>number</code> | Length of the password. Default is `6`. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.sharedSecretEncoding">sharedSecretEncoding</a></code> | <code>string</code> | Shared secret encoding. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.timeStep">timeStep</a></code> | <code>number</code> | Time step in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The TOTP name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp#name FactorTotp#name}

---

##### `clockDriftInterval`<sup>Optional</sup> <a name="clockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.clockDriftInterval"></a>

```typescript
public readonly clockDriftInterval: number;
```

- *Type:* number

Clock drift interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp#clock_drift_interval FactorTotp#clock_drift_interval}

---

##### `hmacAlgorithm`<sup>Optional</sup> <a name="hmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.hmacAlgorithm"></a>

```typescript
public readonly hmacAlgorithm: string;
```

- *Type:* string

Hash-based message authentication code algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp#hmac_algorithm FactorTotp#hmac_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp#id FactorTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `otpLength`<sup>Optional</sup> <a name="otpLength" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.otpLength"></a>

```typescript
public readonly otpLength: number;
```

- *Type:* number

Length of the password. Default is `6`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp#otp_length FactorTotp#otp_length}

---

##### `sharedSecretEncoding`<sup>Optional</sup> <a name="sharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.sharedSecretEncoding"></a>

```typescript
public readonly sharedSecretEncoding: string;
```

- *Type:* string

Shared secret encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp#shared_secret_encoding FactorTotp#shared_secret_encoding}

---

##### `timeStep`<sup>Optional</sup> <a name="timeStep" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.timeStep"></a>

```typescript
public readonly timeStep: number;
```

- *Type:* number

Time step in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/factor_totp#time_step FactorTotp#time_step}

---



