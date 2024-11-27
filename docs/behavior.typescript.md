# `behavior` Submodule <a name="`behavior` Submodule" id="@cdktf/provider-okta.behavior"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Behavior <a name="Behavior" id="@cdktf/provider-okta.behavior.Behavior"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior okta_behavior}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.behavior.Behavior.Initializer"></a>

```typescript
import { behavior } from '@cdktf/provider-okta'

new behavior.Behavior(scope: Construct, id: string, config: BehaviorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig">BehaviorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.behavior.BehaviorConfig">BehaviorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetLocationGranularityType">resetLocationGranularityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetNumberOfAuthentications">resetNumberOfAuthentications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetRadiusFromLocation">resetRadiusFromLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetVelocity">resetVelocity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.behavior.Behavior.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.behavior.Behavior.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.behavior.Behavior.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.behavior.Behavior.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.behavior.Behavior.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.behavior.Behavior.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.behavior.Behavior.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.behavior.Behavior.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.behavior.Behavior.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.behavior.Behavior.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.behavior.Behavior.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.behavior.Behavior.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.behavior.Behavior.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.behavior.Behavior.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.behavior.Behavior.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.behavior.Behavior.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.behavior.Behavior.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.behavior.Behavior.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.behavior.Behavior.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.behavior.Behavior.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.behavior.Behavior.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.behavior.Behavior.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationGranularityType` <a name="resetLocationGranularityType" id="@cdktf/provider-okta.behavior.Behavior.resetLocationGranularityType"></a>

```typescript
public resetLocationGranularityType(): void
```

##### `resetNumberOfAuthentications` <a name="resetNumberOfAuthentications" id="@cdktf/provider-okta.behavior.Behavior.resetNumberOfAuthentications"></a>

```typescript
public resetNumberOfAuthentications(): void
```

##### `resetRadiusFromLocation` <a name="resetRadiusFromLocation" id="@cdktf/provider-okta.behavior.Behavior.resetRadiusFromLocation"></a>

```typescript
public resetRadiusFromLocation(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.behavior.Behavior.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetVelocity` <a name="resetVelocity" id="@cdktf/provider-okta.behavior.Behavior.resetVelocity"></a>

```typescript
public resetVelocity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Behavior resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.behavior.Behavior.isConstruct"></a>

```typescript
import { behavior } from '@cdktf/provider-okta'

behavior.Behavior.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.behavior.Behavior.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.behavior.Behavior.isTerraformElement"></a>

```typescript
import { behavior } from '@cdktf/provider-okta'

behavior.Behavior.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.behavior.Behavior.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.behavior.Behavior.isTerraformResource"></a>

```typescript
import { behavior } from '@cdktf/provider-okta'

behavior.Behavior.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.behavior.Behavior.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.behavior.Behavior.generateConfigForImport"></a>

```typescript
import { behavior } from '@cdktf/provider-okta'

behavior.Behavior.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Behavior resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.behavior.Behavior.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.behavior.Behavior.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Behavior to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.behavior.Behavior.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Behavior that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.behavior.Behavior.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Behavior to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.locationGranularityTypeInput">locationGranularityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthenticationsInput">numberOfAuthenticationsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocationInput">radiusFromLocationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.velocityInput">velocityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.locationGranularityType">locationGranularityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthentications">numberOfAuthentications</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocation">radiusFromLocation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.velocity">velocity</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.behavior.Behavior.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.behavior.Behavior.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.behavior.Behavior.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.behavior.Behavior.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.behavior.Behavior.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.behavior.Behavior.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.behavior.Behavior.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.behavior.Behavior.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.behavior.Behavior.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.behavior.Behavior.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.behavior.Behavior.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.behavior.Behavior.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.behavior.Behavior.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.behavior.Behavior.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.behavior.Behavior.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationGranularityTypeInput`<sup>Optional</sup> <a name="locationGranularityTypeInput" id="@cdktf/provider-okta.behavior.Behavior.property.locationGranularityTypeInput"></a>

```typescript
public readonly locationGranularityTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.behavior.Behavior.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numberOfAuthenticationsInput`<sup>Optional</sup> <a name="numberOfAuthenticationsInput" id="@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthenticationsInput"></a>

```typescript
public readonly numberOfAuthenticationsInput: number;
```

- *Type:* number

---

##### `radiusFromLocationInput`<sup>Optional</sup> <a name="radiusFromLocationInput" id="@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocationInput"></a>

```typescript
public readonly radiusFromLocationInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.behavior.Behavior.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.behavior.Behavior.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `velocityInput`<sup>Optional</sup> <a name="velocityInput" id="@cdktf/provider-okta.behavior.Behavior.property.velocityInput"></a>

```typescript
public readonly velocityInput: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationGranularityType`<sup>Required</sup> <a name="locationGranularityType" id="@cdktf/provider-okta.behavior.Behavior.property.locationGranularityType"></a>

```typescript
public readonly locationGranularityType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.behavior.Behavior.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numberOfAuthentications`<sup>Required</sup> <a name="numberOfAuthentications" id="@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthentications"></a>

```typescript
public readonly numberOfAuthentications: number;
```

- *Type:* number

---

##### `radiusFromLocation`<sup>Required</sup> <a name="radiusFromLocation" id="@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocation"></a>

```typescript
public readonly radiusFromLocation: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.behavior.Behavior.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.behavior.Behavior.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `velocity`<sup>Required</sup> <a name="velocity" id="@cdktf/provider-okta.behavior.Behavior.property.velocity"></a>

```typescript
public readonly velocity: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.behavior.Behavior.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BehaviorConfig <a name="BehaviorConfig" id="@cdktf/provider-okta.behavior.BehaviorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.behavior.BehaviorConfig.Initializer"></a>

```typescript
import { behavior } from '@cdktf/provider-okta'

const behaviorConfig: behavior.BehaviorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.name">name</a></code> | <code>string</code> | Name of the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.type">type</a></code> | <code>string</code> | Type of the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior#id Behavior#id}. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.locationGranularityType">locationGranularityType</a></code> | <code>string</code> | Determines the method and level of detail used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.numberOfAuthentications">numberOfAuthentications</a></code> | <code>number</code> | The number of recent authentications used to evaluate the behavior. Required for `ANOMALOUS_LOCATION`, `ANOMALOUS_DEVICE` and `ANOMALOUS_IP` behavior types. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.radiusFromLocation">radiusFromLocation</a></code> | <code>number</code> | Radius from location (in kilometers). Should be at least 5. Required when `location_granularity_type` is set to `LAT_LONG`. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.status">status</a></code> | <code>string</code> | Behavior status: ACTIVE or INACTIVE. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.velocity">velocity</a></code> | <code>number</code> | Velocity (in kilometers per hour). Should be at least 1. Required for `VELOCITY` behavior. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior#name Behavior#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the behavior.

Can be set to `ANOMALOUS_LOCATION`, `ANOMALOUS_DEVICE`, `ANOMALOUS_IP` or `VELOCITY`. Resource will be recreated when the type changes.e

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior#type Behavior#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior#id Behavior#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationGranularityType`<sup>Optional</sup> <a name="locationGranularityType" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.locationGranularityType"></a>

```typescript
public readonly locationGranularityType: string;
```

- *Type:* string

Determines the method and level of detail used to evaluate the behavior.

Required for `ANOMALOUS_LOCATION` behavior type. Can be set to `LAT_LONG`, `CITY`, `COUNTRY` or `SUBDIVISION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior#location_granularity_type Behavior#location_granularity_type}

---

##### `numberOfAuthentications`<sup>Optional</sup> <a name="numberOfAuthentications" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.numberOfAuthentications"></a>

```typescript
public readonly numberOfAuthentications: number;
```

- *Type:* number

The number of recent authentications used to evaluate the behavior. Required for `ANOMALOUS_LOCATION`, `ANOMALOUS_DEVICE` and `ANOMALOUS_IP` behavior types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior#number_of_authentications Behavior#number_of_authentications}

---

##### `radiusFromLocation`<sup>Optional</sup> <a name="radiusFromLocation" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.radiusFromLocation"></a>

```typescript
public readonly radiusFromLocation: number;
```

- *Type:* number

Radius from location (in kilometers). Should be at least 5. Required when `location_granularity_type` is set to `LAT_LONG`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior#radius_from_location Behavior#radius_from_location}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Behavior status: ACTIVE or INACTIVE. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior#status Behavior#status}

---

##### `velocity`<sup>Optional</sup> <a name="velocity" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.velocity"></a>

```typescript
public readonly velocity: number;
```

- *Type:* number

Velocity (in kilometers per hour). Should be at least 1. Required for `VELOCITY` behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/behavior#velocity Behavior#velocity}

---



