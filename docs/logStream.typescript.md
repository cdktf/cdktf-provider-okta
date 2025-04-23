# `logStream` Submodule <a name="`logStream` Submodule" id="@cdktf/provider-okta.logStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogStream <a name="LogStream" id="@cdktf/provider-okta.logStream.LogStream"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream okta_log_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.logStream.LogStream.Initializer"></a>

```typescript
import { logStream } from '@cdktf/provider-okta'

new logStream.LogStream(scope: Construct, id: string, config: LogStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig">LogStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.logStream.LogStreamConfig">LogStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.logStream.LogStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.logStream.LogStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.logStream.LogStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.logStream.LogStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.logStream.LogStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.logStream.LogStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.logStream.LogStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.logStream.LogStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.logStream.LogStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.logStream.LogStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.logStream.LogStream.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.logStream.LogStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.logStream.LogStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.logStream.LogStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.logStream.LogStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.logStream.LogStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.logStream.LogStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.logStream.LogStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.logStream.LogStream.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.logStream.LogStream.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.logStream.LogStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.logStream.LogStream.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.logStream.LogStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.logStream.LogStream.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.logStream.LogStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.logStream.LogStream.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.logStream.LogStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.logStream.LogStream.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.logStream.LogStream.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.logStream.LogStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-okta.logStream.LogStream.putSettings"></a>

```typescript
public putSettings(value: LogStreamSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.logStream.LogStream.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a>

---

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-okta.logStream.LogStream.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.logStream.LogStream.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogStream resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.logStream.LogStream.isConstruct"></a>

```typescript
import { logStream } from '@cdktf/provider-okta'

logStream.LogStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.logStream.LogStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.logStream.LogStream.isTerraformElement"></a>

```typescript
import { logStream } from '@cdktf/provider-okta'

logStream.LogStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.logStream.LogStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.logStream.LogStream.isTerraformResource"></a>

```typescript
import { logStream } from '@cdktf/provider-okta'

logStream.LogStream.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.logStream.LogStream.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.logStream.LogStream.generateConfigForImport"></a>

```typescript
import { logStream } from '@cdktf/provider-okta'

logStream.LogStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogStream resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.logStream.LogStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.logStream.LogStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.logStream.LogStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.logStream.LogStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference">LogStreamSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.settingsInput">settingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.logStream.LogStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.logStream.LogStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.logStream.LogStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.logStream.LogStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.logStream.LogStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.logStream.LogStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.logStream.LogStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.logStream.LogStream.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.logStream.LogStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.logStream.LogStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.logStream.LogStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.logStream.LogStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.logStream.LogStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.logStream.LogStream.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.logStream.LogStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-okta.logStream.LogStream.property.settings"></a>

```typescript
public readonly settings: LogStreamSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference">LogStreamSettingsOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.logStream.LogStream.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-okta.logStream.LogStream.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | LogStreamSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.logStream.LogStream.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.logStream.LogStream.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.logStream.LogStream.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.logStream.LogStream.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.logStream.LogStream.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.logStream.LogStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogStreamConfig <a name="LogStreamConfig" id="@cdktf/provider-okta.logStream.LogStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.logStream.LogStreamConfig.Initializer"></a>

```typescript
import { logStream } from '@cdktf/provider-okta'

const logStreamConfig: logStream.LogStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.name">name</a></code> | <code>string</code> | Unique name for the Log Stream object. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.type">type</a></code> | <code>string</code> | Streaming provider used - 'aws_eventbridge' or 'splunk_cloud_logstreaming'. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.status">status</a></code> | <code>string</code> | Stream status. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the Log Stream object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#name LogStream#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Streaming provider used - 'aws_eventbridge' or 'splunk_cloud_logstreaming'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#type LogStream#type}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.settings"></a>

```typescript
public readonly settings: LogStreamSettings;
```

- *Type:* <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#settings LogStream#settings}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Stream status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#status LogStream#status}

---

### LogStreamSettings <a name="LogStreamSettings" id="@cdktf/provider-okta.logStream.LogStreamSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.logStream.LogStreamSettings.Initializer"></a>

```typescript
import { logStream } from '@cdktf/provider-okta'

const logStreamSettings: logStream.LogStreamSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.accountId">accountId</a></code> | <code>string</code> | AWS account ID. Required only for 'aws_eventbridge' type. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.edition">edition</a></code> | <code>string</code> | Edition of the Splunk Cloud instance. Could be one of: 'aws', 'aws_govcloud', 'gcp'. Required only for 'splunk_cloud_logstreaming' type. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.eventSourceName">eventSourceName</a></code> | <code>string</code> | An alphanumeric name (no spaces) to identify this event source in AWS EventBridge. Required only for 'aws_eventbridge' type. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.host">host</a></code> | <code>string</code> | The domain name for Splunk Cloud instance. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.region">region</a></code> | <code>string</code> | The destination AWS region where event source is located. Required only for 'aws_eventbridge' type. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.token">token</a></code> | <code>string</code> | The HEC token for your Splunk Cloud HTTP Event Collector. Required only for 'splunk_cloud_logstreaming' type. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

AWS account ID. Required only for 'aws_eventbridge' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#account_id LogStream#account_id}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

Edition of the Splunk Cloud instance. Could be one of: 'aws', 'aws_govcloud', 'gcp'. Required only for 'splunk_cloud_logstreaming' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#edition LogStream#edition}

---

##### `eventSourceName`<sup>Optional</sup> <a name="eventSourceName" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.eventSourceName"></a>

```typescript
public readonly eventSourceName: string;
```

- *Type:* string

An alphanumeric name (no spaces) to identify this event source in AWS EventBridge. Required only for 'aws_eventbridge' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#event_source_name LogStream#event_source_name}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The domain name for Splunk Cloud instance.

Don't include http or https in the string. For example: 'acme.splunkcloud.com'. Required only for 'splunk_cloud_logstreaming' type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#host LogStream#host}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The destination AWS region where event source is located. Required only for 'aws_eventbridge' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#region LogStream#region}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The HEC token for your Splunk Cloud HTTP Event Collector. Required only for 'splunk_cloud_logstreaming' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/resources/log_stream#token LogStream#token}

---

## Classes <a name="Classes" id="Classes"></a>

### LogStreamSettingsOutputReference <a name="LogStreamSettingsOutputReference" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.Initializer"></a>

```typescript
import { logStream } from '@cdktf/provider-okta'

new logStream.LogStreamSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetEventSourceName">resetEventSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetEventSourceName` <a name="resetEventSourceName" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetEventSourceName"></a>

```typescript
public resetEventSourceName(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.eventSourceNameInput">eventSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.eventSourceName">eventSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `eventSourceNameInput`<sup>Optional</sup> <a name="eventSourceNameInput" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.eventSourceNameInput"></a>

```typescript
public readonly eventSourceNameInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `eventSourceName`<sup>Required</sup> <a name="eventSourceName" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.eventSourceName"></a>

```typescript
public readonly eventSourceName: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogStreamSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a>

---



