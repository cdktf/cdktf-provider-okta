# `policyDeviceAssuranceIos` Submodule <a name="`policyDeviceAssuranceIos` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceIos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceIos <a name="PolicyDeviceAssuranceIos" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_ios okta_policy_device_assurance_ios}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer"></a>

```typescript
import { policyDeviceAssuranceIos } from '@cdktf/provider-okta'

new policyDeviceAssuranceIos.PolicyDeviceAssuranceIos(scope: Construct, id: string, config: PolicyDeviceAssuranceIosConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig">PolicyDeviceAssuranceIosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig">PolicyDeviceAssuranceIosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetJailbreak">resetJailbreak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetOsVersion">resetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetScreenlockType">resetScreenlockType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetJailbreak` <a name="resetJailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetJailbreak"></a>

```typescript
public resetJailbreak(): void
```

##### `resetOsVersion` <a name="resetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetOsVersion"></a>

```typescript
public resetOsVersion(): void
```

##### `resetScreenlockType` <a name="resetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.resetScreenlockType"></a>

```typescript
public resetScreenlockType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceIos resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isConstruct"></a>

```typescript
import { policyDeviceAssuranceIos } from '@cdktf/provider-okta'

policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformElement"></a>

```typescript
import { policyDeviceAssuranceIos } from '@cdktf/provider-okta'

policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformResource"></a>

```typescript
import { policyDeviceAssuranceIos } from '@cdktf/provider-okta'

policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport"></a>

```typescript
import { policyDeviceAssuranceIos } from '@cdktf/provider-okta'

policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyDeviceAssuranceIos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyDeviceAssuranceIos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyDeviceAssuranceIos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_ios#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceIos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lastUpdate">lastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.jailbreakInput">jailbreakInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.osVersionInput">osVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.screenlockTypeInput">screenlockTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.jailbreak">jailbreak</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.osVersion">osVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.screenlockType">screenlockType</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdate`<sup>Required</sup> <a name="lastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lastUpdate"></a>

```typescript
public readonly lastUpdate: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `jailbreakInput`<sup>Optional</sup> <a name="jailbreakInput" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.jailbreakInput"></a>

```typescript
public readonly jailbreakInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osVersionInput`<sup>Optional</sup> <a name="osVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.osVersionInput"></a>

```typescript
public readonly osVersionInput: string;
```

- *Type:* string

---

##### `screenlockTypeInput`<sup>Optional</sup> <a name="screenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.screenlockTypeInput"></a>

```typescript
public readonly screenlockTypeInput: string[];
```

- *Type:* string[]

---

##### `jailbreak`<sup>Required</sup> <a name="jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.jailbreak"></a>

```typescript
public readonly jailbreak: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

---

##### `screenlockType`<sup>Required</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.screenlockType"></a>

```typescript
public readonly screenlockType: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIos.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceIosConfig <a name="PolicyDeviceAssuranceIosConfig" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.Initializer"></a>

```typescript
import { policyDeviceAssuranceIos } from '@cdktf/provider-okta'

const policyDeviceAssuranceIosConfig: policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.name">name</a></code> | <code>string</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.jailbreak">jailbreak</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the device jailbroken in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.osVersion">osVersion</a></code> | <code>string</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.screenlockType">screenlockType</a></code> | <code>string[]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_ios#name PolicyDeviceAssuranceIos#name}

---

##### `jailbreak`<sup>Optional</sup> <a name="jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.jailbreak"></a>

```typescript
public readonly jailbreak: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the device jailbroken in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_ios#jailbreak PolicyDeviceAssuranceIos#jailbreak}

---

##### `osVersion`<sup>Optional</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_ios#os_version PolicyDeviceAssuranceIos#os_version}

---

##### `screenlockType`<sup>Optional</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceIos.PolicyDeviceAssuranceIosConfig.property.screenlockType"></a>

```typescript
public readonly screenlockType: string[];
```

- *Type:* string[]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_ios#screenlock_type PolicyDeviceAssuranceIos#screenlock_type}

---



