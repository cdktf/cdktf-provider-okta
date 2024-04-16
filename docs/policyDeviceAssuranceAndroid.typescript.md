# `policyDeviceAssuranceAndroid` Submodule <a name="`policyDeviceAssuranceAndroid` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceAndroid <a name="PolicyDeviceAssuranceAndroid" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/policy_device_assurance_android okta_policy_device_assurance_android}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer"></a>

```typescript
import { policyDeviceAssuranceAndroid } from '@cdktf/provider-okta'

new policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid(scope: Construct, id: string, config: PolicyDeviceAssuranceAndroidConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig">PolicyDeviceAssuranceAndroidConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig">PolicyDeviceAssuranceAndroidConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetDiskEncryptionType">resetDiskEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetJailbreak">resetJailbreak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOsVersion">resetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetScreenlockType">resetScreenlockType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetSecureHardwarePresent">resetSecureHardwarePresent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDiskEncryptionType` <a name="resetDiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetDiskEncryptionType"></a>

```typescript
public resetDiskEncryptionType(): void
```

##### `resetJailbreak` <a name="resetJailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetJailbreak"></a>

```typescript
public resetJailbreak(): void
```

##### `resetOsVersion` <a name="resetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOsVersion"></a>

```typescript
public resetOsVersion(): void
```

##### `resetScreenlockType` <a name="resetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetScreenlockType"></a>

```typescript
public resetScreenlockType(): void
```

##### `resetSecureHardwarePresent` <a name="resetSecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetSecureHardwarePresent"></a>

```typescript
public resetSecureHardwarePresent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceAndroid resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isConstruct"></a>

```typescript
import { policyDeviceAssuranceAndroid } from '@cdktf/provider-okta'

policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformElement"></a>

```typescript
import { policyDeviceAssuranceAndroid } from '@cdktf/provider-okta'

policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformResource"></a>

```typescript
import { policyDeviceAssuranceAndroid } from '@cdktf/provider-okta'

policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport"></a>

```typescript
import { policyDeviceAssuranceAndroid } from '@cdktf/provider-okta'

policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyDeviceAssuranceAndroid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyDeviceAssuranceAndroid to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyDeviceAssuranceAndroid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/policy_device_assurance_android#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceAndroid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdate">lastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionTypeInput">diskEncryptionTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreakInput">jailbreakInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersionInput">osVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockTypeInput">screenlockTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresentInput">secureHardwarePresentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionType">diskEncryptionType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreak">jailbreak</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersion">osVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockType">screenlockType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdate`<sup>Required</sup> <a name="lastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdate"></a>

```typescript
public readonly lastUpdate: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `diskEncryptionTypeInput`<sup>Optional</sup> <a name="diskEncryptionTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionTypeInput"></a>

```typescript
public readonly diskEncryptionTypeInput: string[];
```

- *Type:* string[]

---

##### `jailbreakInput`<sup>Optional</sup> <a name="jailbreakInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreakInput"></a>

```typescript
public readonly jailbreakInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osVersionInput`<sup>Optional</sup> <a name="osVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersionInput"></a>

```typescript
public readonly osVersionInput: string;
```

- *Type:* string

---

##### `screenlockTypeInput`<sup>Optional</sup> <a name="screenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockTypeInput"></a>

```typescript
public readonly screenlockTypeInput: string[];
```

- *Type:* string[]

---

##### `secureHardwarePresentInput`<sup>Optional</sup> <a name="secureHardwarePresentInput" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresentInput"></a>

```typescript
public readonly secureHardwarePresentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskEncryptionType`<sup>Required</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionType"></a>

```typescript
public readonly diskEncryptionType: string[];
```

- *Type:* string[]

---

##### `jailbreak`<sup>Required</sup> <a name="jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreak"></a>

```typescript
public readonly jailbreak: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

---

##### `screenlockType`<sup>Required</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockType"></a>

```typescript
public readonly screenlockType: string[];
```

- *Type:* string[]

---

##### `secureHardwarePresent`<sup>Required</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresent"></a>

```typescript
public readonly secureHardwarePresent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceAndroidConfig <a name="PolicyDeviceAssuranceAndroidConfig" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.Initializer"></a>

```typescript
import { policyDeviceAssuranceAndroid } from '@cdktf/provider-okta'

const policyDeviceAssuranceAndroidConfig: policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.name">name</a></code> | <code>string</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.diskEncryptionType">diskEncryptionType</a></code> | <code>string[]</code> | List of disk encryption type, can be `FULL`, `USER`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.jailbreak">jailbreak</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the device jailbroken in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.osVersion">osVersion</a></code> | <code>string</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.screenlockType">screenlockType</a></code> | <code>string[]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the device contains a secure hardware functionality. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/policy_device_assurance_android#name PolicyDeviceAssuranceAndroid#name}

---

##### `diskEncryptionType`<sup>Optional</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.diskEncryptionType"></a>

```typescript
public readonly diskEncryptionType: string[];
```

- *Type:* string[]

List of disk encryption type, can be `FULL`, `USER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/policy_device_assurance_android#disk_encryption_type PolicyDeviceAssuranceAndroid#disk_encryption_type}

---

##### `jailbreak`<sup>Optional</sup> <a name="jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.jailbreak"></a>

```typescript
public readonly jailbreak: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the device jailbroken in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/policy_device_assurance_android#jailbreak PolicyDeviceAssuranceAndroid#jailbreak}

---

##### `osVersion`<sup>Optional</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/policy_device_assurance_android#os_version PolicyDeviceAssuranceAndroid#os_version}

---

##### `screenlockType`<sup>Optional</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.screenlockType"></a>

```typescript
public readonly screenlockType: string[];
```

- *Type:* string[]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/policy_device_assurance_android#screenlock_type PolicyDeviceAssuranceAndroid#screenlock_type}

---

##### `secureHardwarePresent`<sup>Optional</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.secureHardwarePresent"></a>

```typescript
public readonly secureHardwarePresent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the device contains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/policy_device_assurance_android#secure_hardware_present PolicyDeviceAssuranceAndroid#secure_hardware_present}

---



