# `appUserBaseSchemaProperty` Submodule <a name="`appUserBaseSchemaProperty` Submodule" id="@cdktf/provider-okta.appUserBaseSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserBaseSchemaProperty <a name="AppUserBaseSchemaProperty" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property okta_app_user_base_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer"></a>

```typescript
import { appUserBaseSchemaProperty } from '@cdktf/provider-okta'

new appUserBaseSchemaProperty.AppUserBaseSchemaProperty(scope: Construct, id: string, config: AppUserBaseSchemaPropertyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig">AppUserBaseSchemaPropertyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig">AppUserBaseSchemaPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetMaster">resetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaster` <a name="resetMaster" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetMaster"></a>

```typescript
public resetMaster(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetUserType"></a>

```typescript
public resetUserType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppUserBaseSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isConstruct"></a>

```typescript
import { appUserBaseSchemaProperty } from '@cdktf/provider-okta'

appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformElement"></a>

```typescript
import { appUserBaseSchemaProperty } from '@cdktf/provider-okta'

appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformResource"></a>

```typescript
import { appUserBaseSchemaProperty } from '@cdktf/provider-okta'

appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport"></a>

```typescript
import { appUserBaseSchemaProperty } from '@cdktf/provider-okta'

appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppUserBaseSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppUserBaseSchemaProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppUserBaseSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppUserBaseSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.masterInput">masterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userTypeInput">userTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.master">master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userType">userType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `masterInput`<sup>Optional</sup> <a name="masterInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.masterInput"></a>

```typescript
public readonly masterInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserBaseSchemaPropertyConfig <a name="AppUserBaseSchemaPropertyConfig" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.Initializer"></a>

```typescript
import { appUserBaseSchemaProperty } from '@cdktf/provider-okta'

const appUserBaseSchemaPropertyConfig: appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.appId">appId</a></code> | <code>string</code> | The Application's ID the user schema property should be assigned to. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.index">index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.title">title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.type">type</a></code> | <code>string</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#id AppUserBaseSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.master">master</a></code> | <code>string</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. Default: `PROFILE_MASTER`. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.pattern">pattern</a></code> | <code>string</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>string</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.userType">userType</a></code> | <code>string</code> | User type ID. By default, it is `default`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The Application's ID the user schema property should be assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#app_id AppUserBaseSchemaProperty#app_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#index AppUserBaseSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#title AppUserBaseSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#type AppUserBaseSchemaProperty#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#id AppUserBaseSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. Default: `PROFILE_MASTER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#master AppUserBaseSchemaProperty#master}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#pattern AppUserBaseSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#permissions AppUserBaseSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#required AppUserBaseSchemaProperty#required}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_user_base_schema_property#user_type AppUserBaseSchemaProperty#user_type}

---



