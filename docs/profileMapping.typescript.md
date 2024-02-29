# `profileMapping` Submodule <a name="`profileMapping` Submodule" id="@cdktf/provider-okta.profileMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProfileMapping <a name="ProfileMapping" id="@cdktf/provider-okta.profileMapping.ProfileMapping"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping okta_profile_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer"></a>

```typescript
import { profileMapping } from '@cdktf/provider-okta'

new profileMapping.ProfileMapping(scope: Construct, id: string, config: ProfileMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig">ProfileMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig">ProfileMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings">putMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetAlwaysApply">resetAlwaysApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetDeleteWhenAbsent">resetDeleteWhenAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetMappings">resetMappings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.profileMapping.ProfileMapping.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.profileMapping.ProfileMapping.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.profileMapping.ProfileMapping.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.profileMapping.ProfileMapping.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.profileMapping.ProfileMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.profileMapping.ProfileMapping.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMappings` <a name="putMappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings"></a>

```typescript
public putMappings(value: IResolvable | ProfileMappingMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>[]

---

##### `resetAlwaysApply` <a name="resetAlwaysApply" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetAlwaysApply"></a>

```typescript
public resetAlwaysApply(): void
```

##### `resetDeleteWhenAbsent` <a name="resetDeleteWhenAbsent" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetDeleteWhenAbsent"></a>

```typescript
public resetDeleteWhenAbsent(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMappings` <a name="resetMappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetMappings"></a>

```typescript
public resetMappings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProfileMapping resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct"></a>

```typescript
import { profileMapping } from '@cdktf/provider-okta'

profileMapping.ProfileMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement"></a>

```typescript
import { profileMapping } from '@cdktf/provider-okta'

profileMapping.ProfileMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource"></a>

```typescript
import { profileMapping } from '@cdktf/provider-okta'

profileMapping.ProfileMapping.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.profileMapping.ProfileMapping.generateConfigForImport"></a>

```typescript
import { profileMapping } from '@cdktf/provider-okta'

profileMapping.ProfileMapping.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProfileMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.profileMapping.ProfileMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProfileMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProfileMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.profileMapping.ProfileMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProfileMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappings">mappings</a></code> | <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList">ProfileMappingMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetName">targetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApplyInput">alwaysApplyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsentInput">deleteWhenAbsentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappingsInput">mappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceIdInput">sourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApply">alwaysApply</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsent">deleteWhenAbsent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappings"></a>

```typescript
public readonly mappings: ProfileMappingMappingsList;
```

- *Type:* <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList">ProfileMappingMappingsList</a>

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `alwaysApplyInput`<sup>Optional</sup> <a name="alwaysApplyInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApplyInput"></a>

```typescript
public readonly alwaysApplyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteWhenAbsentInput`<sup>Optional</sup> <a name="deleteWhenAbsentInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsentInput"></a>

```typescript
public readonly deleteWhenAbsentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mappingsInput`<sup>Optional</sup> <a name="mappingsInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappingsInput"></a>

```typescript
public readonly mappingsInput: IResolvable | ProfileMappingMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>[]

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `alwaysApply`<sup>Required</sup> <a name="alwaysApply" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApply"></a>

```typescript
public readonly alwaysApply: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteWhenAbsent`<sup>Required</sup> <a name="deleteWhenAbsent" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsent"></a>

```typescript
public readonly deleteWhenAbsent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProfileMappingConfig <a name="ProfileMappingConfig" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.Initializer"></a>

```typescript
import { profileMapping } from '@cdktf/provider-okta'

const profileMappingConfig: profileMapping.ProfileMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.sourceId">sourceId</a></code> | <code>string</code> | The source id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.targetId">targetId</a></code> | <code>string</code> | The target id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.alwaysApply">alwaysApply</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether apply the changes to all users with this profile after updating or creating the these mappings. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.deleteWhenAbsent">deleteWhenAbsent</a></code> | <code>boolean \| cdktf.IResolvable</code> | When turned on this flag will trigger the provider to delete mapping properties that are not defined in config. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#id ProfileMapping#id}. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.mappings">mappings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>[]</code> | mappings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

The source id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#source_id ProfileMapping#source_id}

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

The target id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#target_id ProfileMapping#target_id}

---

##### `alwaysApply`<sup>Optional</sup> <a name="alwaysApply" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.alwaysApply"></a>

```typescript
public readonly alwaysApply: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether apply the changes to all users with this profile after updating or creating the these mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#always_apply ProfileMapping#always_apply}

---

##### `deleteWhenAbsent`<sup>Optional</sup> <a name="deleteWhenAbsent" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.deleteWhenAbsent"></a>

```typescript
public readonly deleteWhenAbsent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When turned on this flag will trigger the provider to delete mapping properties that are not defined in config.

By default, we do not delete missing properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#delete_when_absent ProfileMapping#delete_when_absent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#id ProfileMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappings`<sup>Optional</sup> <a name="mappings" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.mappings"></a>

```typescript
public readonly mappings: IResolvable | ProfileMappingMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>[]

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#mappings ProfileMapping#mappings}

---

### ProfileMappingMappings <a name="ProfileMappingMappings" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.Initializer"></a>

```typescript
import { profileMapping } from '@cdktf/provider-okta'

const profileMappingMappings: profileMapping.ProfileMappingMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#expression ProfileMapping#expression}. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.id">id</a></code> | <code>string</code> | The mapping property key. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.pushStatus">pushStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#push_status ProfileMapping#push_status}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#expression ProfileMapping#expression}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The mapping property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#id ProfileMapping#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pushStatus`<sup>Optional</sup> <a name="pushStatus" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.pushStatus"></a>

```typescript
public readonly pushStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.0/docs/resources/profile_mapping#push_status ProfileMapping#push_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProfileMappingMappingsList <a name="ProfileMappingMappingsList" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer"></a>

```typescript
import { profileMapping } from '@cdktf/provider-okta'

new profileMapping.ProfileMappingMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get"></a>

```typescript
public get(index: number): ProfileMappingMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProfileMappingMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>[]

---


### ProfileMappingMappingsOutputReference <a name="ProfileMappingMappingsOutputReference" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer"></a>

```typescript
import { profileMapping } from '@cdktf/provider-okta'

new profileMapping.ProfileMappingMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resetPushStatus">resetPushStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPushStatus` <a name="resetPushStatus" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resetPushStatus"></a>

```typescript
public resetPushStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatusInput">pushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatus">pushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pushStatusInput`<sup>Optional</sup> <a name="pushStatusInput" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatusInput"></a>

```typescript
public readonly pushStatusInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pushStatus`<sup>Required</sup> <a name="pushStatus" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatus"></a>

```typescript
public readonly pushStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProfileMappingMappings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>

---



