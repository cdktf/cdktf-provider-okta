# `appGroupAssignments` Submodule <a name="`appGroupAssignments` Submodule" id="@cdktf/provider-okta.appGroupAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppGroupAssignments <a name="AppGroupAssignments" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments okta_app_group_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

new appGroupAssignments.AppGroupAssignments(scope: Construct, id: string, config: AppGroupAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig">AppGroupAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig">AppGroupAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroup` <a name="putGroup" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putGroup"></a>

```typescript
public putGroup(value: IResolvable | AppGroupAssignmentsGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup">AppGroupAssignmentsGroup</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putTimeouts"></a>

```typescript
public putTimeouts(value: AppGroupAssignmentsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts">AppGroupAssignmentsTimeouts</a>

---

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppGroupAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isConstruct"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

appGroupAssignments.AppGroupAssignments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformElement"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

appGroupAssignments.AppGroupAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformResource"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

appGroupAssignments.AppGroupAssignments.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

appGroupAssignments.AppGroupAssignments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppGroupAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppGroupAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppGroupAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppGroupAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.group">group</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList">AppGroupAssignmentsGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference">AppGroupAssignmentsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.groupInput">groupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup">AppGroupAssignmentsGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts">AppGroupAssignmentsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.group"></a>

```typescript
public readonly group: AppGroupAssignmentsGroupList;
```

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList">AppGroupAssignmentsGroupList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.timeouts"></a>

```typescript
public readonly timeouts: AppGroupAssignmentsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference">AppGroupAssignmentsTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.groupInput"></a>

```typescript
public readonly groupInput: IResolvable | AppGroupAssignmentsGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup">AppGroupAssignmentsGroup</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppGroupAssignmentsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts">AppGroupAssignmentsTimeouts</a>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppGroupAssignmentsConfig <a name="AppGroupAssignmentsConfig" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.Initializer"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

const appGroupAssignmentsConfig: appGroupAssignments.AppGroupAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.appId">appId</a></code> | <code>string</code> | The ID of the application to assign a group to. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.group">group</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup">AppGroupAssignmentsGroup</a>[]</code> | group block. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#id AppGroupAssignments#id}. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts">AppGroupAssignmentsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The ID of the application to assign a group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#app_id AppGroupAssignments#app_id}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.group"></a>

```typescript
public readonly group: IResolvable | AppGroupAssignmentsGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup">AppGroupAssignmentsGroup</a>[]

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#group AppGroupAssignments#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#id AppGroupAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppGroupAssignmentsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts">AppGroupAssignmentsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#timeouts AppGroupAssignments#timeouts}

---

### AppGroupAssignmentsGroup <a name="AppGroupAssignmentsGroup" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.Initializer"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

const appGroupAssignmentsGroup: appGroupAssignments.AppGroupAssignmentsGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.id">id</a></code> | <code>string</code> | A group to associate with the application. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.priority">priority</a></code> | <code>number</code> | Priority of group assignment. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.profile">profile</a></code> | <code>string</code> | JSON document containing [application profile](https://developer.okta.com/docs/reference/api/apps/#profile-object). |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A group to associate with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#id AppGroupAssignments#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority of group assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#priority AppGroupAssignments#priority}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

JSON document containing [application profile](https://developer.okta.com/docs/reference/api/apps/#profile-object).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#profile AppGroupAssignments#profile}

---

### AppGroupAssignmentsTimeouts <a name="AppGroupAssignmentsTimeouts" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.Initializer"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

const appGroupAssignmentsTimeouts: appGroupAssignments.AppGroupAssignmentsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#create AppGroupAssignments#create}. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#read AppGroupAssignments#read}. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#update AppGroupAssignments#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#create AppGroupAssignments#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#read AppGroupAssignments#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/app_group_assignments#update AppGroupAssignments#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppGroupAssignmentsGroupList <a name="AppGroupAssignmentsGroupList" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

new appGroupAssignments.AppGroupAssignmentsGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.get"></a>

```typescript
public get(index: number): AppGroupAssignmentsGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup">AppGroupAssignmentsGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppGroupAssignmentsGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup">AppGroupAssignmentsGroup</a>[]

---


### AppGroupAssignmentsGroupOutputReference <a name="AppGroupAssignmentsGroupOutputReference" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

new appGroupAssignments.AppGroupAssignmentsGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resetProfile">resetProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.resetProfile"></a>

```typescript
public resetProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup">AppGroupAssignmentsGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppGroupAssignmentsGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsGroup">AppGroupAssignmentsGroup</a>

---


### AppGroupAssignmentsTimeoutsOutputReference <a name="AppGroupAssignmentsTimeoutsOutputReference" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.Initializer"></a>

```typescript
import { appGroupAssignments } from '@cdktf/provider-okta'

new appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts">AppGroupAssignmentsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppGroupAssignmentsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appGroupAssignments.AppGroupAssignmentsTimeouts">AppGroupAssignmentsTimeouts</a>

---



