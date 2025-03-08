# `linkDefinition` Submodule <a name="`linkDefinition` Submodule" id="@cdktf/provider-okta.linkDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinkDefinition <a name="LinkDefinition" id="@cdktf/provider-okta.linkDefinition.LinkDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/link_definition okta_link_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer"></a>

```typescript
import { linkDefinition } from '@cdktf/provider-okta'

new linkDefinition.LinkDefinition(scope: Construct, id: string, config: LinkDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig">LinkDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig">LinkDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LinkDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct"></a>

```typescript
import { linkDefinition } from '@cdktf/provider-okta'

linkDefinition.LinkDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement"></a>

```typescript
import { linkDefinition } from '@cdktf/provider-okta'

linkDefinition.LinkDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource"></a>

```typescript
import { linkDefinition } from '@cdktf/provider-okta'

linkDefinition.LinkDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport"></a>

```typescript
import { linkDefinition } from '@cdktf/provider-okta'

linkDefinition.LinkDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LinkDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LinkDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LinkDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/link_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LinkDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescriptionInput">associatedDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedNameInput">associatedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitleInput">associatedTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescriptionInput">primaryDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryNameInput">primaryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitleInput">primaryTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescription">associatedDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedName">associatedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitle">associatedTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescription">primaryDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryName">primaryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitle">primaryTitle</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associatedDescriptionInput`<sup>Optional</sup> <a name="associatedDescriptionInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescriptionInput"></a>

```typescript
public readonly associatedDescriptionInput: string;
```

- *Type:* string

---

##### `associatedNameInput`<sup>Optional</sup> <a name="associatedNameInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedNameInput"></a>

```typescript
public readonly associatedNameInput: string;
```

- *Type:* string

---

##### `associatedTitleInput`<sup>Optional</sup> <a name="associatedTitleInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitleInput"></a>

```typescript
public readonly associatedTitleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `primaryDescriptionInput`<sup>Optional</sup> <a name="primaryDescriptionInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescriptionInput"></a>

```typescript
public readonly primaryDescriptionInput: string;
```

- *Type:* string

---

##### `primaryNameInput`<sup>Optional</sup> <a name="primaryNameInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryNameInput"></a>

```typescript
public readonly primaryNameInput: string;
```

- *Type:* string

---

##### `primaryTitleInput`<sup>Optional</sup> <a name="primaryTitleInput" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitleInput"></a>

```typescript
public readonly primaryTitleInput: string;
```

- *Type:* string

---

##### `associatedDescription`<sup>Required</sup> <a name="associatedDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedDescription"></a>

```typescript
public readonly associatedDescription: string;
```

- *Type:* string

---

##### `associatedName`<sup>Required</sup> <a name="associatedName" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedName"></a>

```typescript
public readonly associatedName: string;
```

- *Type:* string

---

##### `associatedTitle`<sup>Required</sup> <a name="associatedTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.associatedTitle"></a>

```typescript
public readonly associatedTitle: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `primaryDescription`<sup>Required</sup> <a name="primaryDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryDescription"></a>

```typescript
public readonly primaryDescription: string;
```

- *Type:* string

---

##### `primaryName`<sup>Required</sup> <a name="primaryName" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryName"></a>

```typescript
public readonly primaryName: string;
```

- *Type:* string

---

##### `primaryTitle`<sup>Required</sup> <a name="primaryTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.primaryTitle"></a>

```typescript
public readonly primaryTitle: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.linkDefinition.LinkDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LinkDefinitionConfig <a name="LinkDefinitionConfig" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.Initializer"></a>

```typescript
import { linkDefinition } from '@cdktf/provider-okta'

const linkDefinitionConfig: linkDefinition.LinkDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedDescription">associatedDescription</a></code> | <code>string</code> | Description of the associated relationship. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedName">associatedName</a></code> | <code>string</code> | API name of the associated link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedTitle">associatedTitle</a></code> | <code>string</code> | Display name of the associated link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryDescription">primaryDescription</a></code> | <code>string</code> | Description of the primary relationship. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryName">primaryName</a></code> | <code>string</code> | API name of the primary link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryTitle">primaryTitle</a></code> | <code>string</code> | Display name of the primary link. |
| <code><a href="#@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/link_definition#id LinkDefinition#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associatedDescription`<sup>Required</sup> <a name="associatedDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedDescription"></a>

```typescript
public readonly associatedDescription: string;
```

- *Type:* string

Description of the associated relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/link_definition#associated_description LinkDefinition#associated_description}

---

##### `associatedName`<sup>Required</sup> <a name="associatedName" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedName"></a>

```typescript
public readonly associatedName: string;
```

- *Type:* string

API name of the associated link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/link_definition#associated_name LinkDefinition#associated_name}

---

##### `associatedTitle`<sup>Required</sup> <a name="associatedTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.associatedTitle"></a>

```typescript
public readonly associatedTitle: string;
```

- *Type:* string

Display name of the associated link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/link_definition#associated_title LinkDefinition#associated_title}

---

##### `primaryDescription`<sup>Required</sup> <a name="primaryDescription" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryDescription"></a>

```typescript
public readonly primaryDescription: string;
```

- *Type:* string

Description of the primary relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/link_definition#primary_description LinkDefinition#primary_description}

---

##### `primaryName`<sup>Required</sup> <a name="primaryName" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryName"></a>

```typescript
public readonly primaryName: string;
```

- *Type:* string

API name of the primary link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/link_definition#primary_name LinkDefinition#primary_name}

---

##### `primaryTitle`<sup>Required</sup> <a name="primaryTitle" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.primaryTitle"></a>

```typescript
public readonly primaryTitle: string;
```

- *Type:* string

Display name of the primary link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/link_definition#primary_title LinkDefinition#primary_title}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.linkDefinition.LinkDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/link_definition#id LinkDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



