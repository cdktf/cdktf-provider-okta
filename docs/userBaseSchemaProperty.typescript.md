# `userBaseSchemaProperty` Submodule <a name="`userBaseSchemaProperty` Submodule" id="@cdktf/provider-okta.userBaseSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserBaseSchemaProperty <a name="UserBaseSchemaProperty" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property okta_user_base_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer"></a>

```typescript
import { userBaseSchemaProperty } from '@cdktf/provider-okta'

new userBaseSchemaProperty.UserBaseSchemaProperty(scope: Construct, id: string, config: UserBaseSchemaPropertyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig">UserBaseSchemaPropertyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig">UserBaseSchemaPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetMaster">resetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaster` <a name="resetMaster" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetMaster"></a>

```typescript
public resetMaster(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetUserType"></a>

```typescript
public resetUserType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UserBaseSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isConstruct"></a>

```typescript
import { userBaseSchemaProperty } from '@cdktf/provider-okta'

userBaseSchemaProperty.UserBaseSchemaProperty.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformElement"></a>

```typescript
import { userBaseSchemaProperty } from '@cdktf/provider-okta'

userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformResource"></a>

```typescript
import { userBaseSchemaProperty } from '@cdktf/provider-okta'

userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.generateConfigForImport"></a>

```typescript
import { userBaseSchemaProperty } from '@cdktf/provider-okta'

userBaseSchemaProperty.UserBaseSchemaProperty.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a UserBaseSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserBaseSchemaProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserBaseSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserBaseSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.masterInput">masterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userTypeInput">userTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.master">master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userType">userType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `masterInput`<sup>Optional</sup> <a name="masterInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.masterInput"></a>

```typescript
public readonly masterInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserBaseSchemaPropertyConfig <a name="UserBaseSchemaPropertyConfig" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.Initializer"></a>

```typescript
import { userBaseSchemaProperty } from '@cdktf/provider-okta'

const userBaseSchemaPropertyConfig: userBaseSchemaProperty.UserBaseSchemaPropertyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.index">index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.title">title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.type">type</a></code> | <code>string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#id UserBaseSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.master">master</a></code> | <code>string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.pattern">pattern</a></code> | <code>string</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.userType">userType</a></code> | <code>string</code> | Custom subschema user type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#index UserBaseSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#title UserBaseSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#type UserBaseSchemaProperty#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#id UserBaseSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#master UserBaseSchemaProperty#master}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#pattern UserBaseSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#permissions UserBaseSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#required UserBaseSchemaProperty#required}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

Custom subschema user type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_base_schema_property#user_type UserBaseSchemaProperty#user_type}

---



