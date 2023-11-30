# `userSchemaProperty` Submodule <a name="`userSchemaProperty` Submodule" id="@cdktf/provider-okta.userSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserSchemaProperty <a name="UserSchemaProperty" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property okta_user_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

new userSchemaProperty.UserSchemaProperty(scope: Construct, id: string, config: UserSchemaPropertyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig">UserSchemaPropertyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig">UserSchemaPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf">putArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority">putMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf">putOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayEnum">resetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayOneOf">resetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayType">resetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalName">resetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalNamespace">resetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaster">resetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMasterOverridePriority">resetMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOneOf">resetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUnique">resetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putArrayOneOf` <a name="putArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf"></a>

```typescript
public putArrayOneOf(value: IResolvable | UserSchemaPropertyArrayOneOf[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>[]

---

##### `putMasterOverridePriority` <a name="putMasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority"></a>

```typescript
public putMasterOverridePriority(value: IResolvable | UserSchemaPropertyMasterOverridePriority[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>[]

---

##### `putOneOf` <a name="putOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf"></a>

```typescript
public putOneOf(value: IResolvable | UserSchemaPropertyOneOf[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>[]

---

##### `resetArrayEnum` <a name="resetArrayEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayEnum"></a>

```typescript
public resetArrayEnum(): void
```

##### `resetArrayOneOf` <a name="resetArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayOneOf"></a>

```typescript
public resetArrayOneOf(): void
```

##### `resetArrayType` <a name="resetArrayType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayType"></a>

```typescript
public resetArrayType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnum` <a name="resetEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetEnum"></a>

```typescript
public resetEnum(): void
```

##### `resetExternalName` <a name="resetExternalName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalName"></a>

```typescript
public resetExternalName(): void
```

##### `resetExternalNamespace` <a name="resetExternalNamespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalNamespace"></a>

```typescript
public resetExternalNamespace(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaster` <a name="resetMaster" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaster"></a>

```typescript
public resetMaster(): void
```

##### `resetMasterOverridePriority` <a name="resetMasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMasterOverridePriority"></a>

```typescript
public resetMasterOverridePriority(): void
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaxLength"></a>

```typescript
public resetMaxLength(): void
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMinLength"></a>

```typescript
public resetMinLength(): void
```

##### `resetOneOf` <a name="resetOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOneOf"></a>

```typescript
public resetOneOf(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetUnique` <a name="resetUnique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUnique"></a>

```typescript
public resetUnique(): void
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUserType"></a>

```typescript
public resetUserType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UserSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

userSchemaProperty.UserSchemaProperty.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

userSchemaProperty.UserSchemaProperty.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

userSchemaProperty.UserSchemaProperty.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

userSchemaProperty.UserSchemaProperty.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a UserSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserSchemaProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOf">arrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList">UserSchemaPropertyArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriority">masterOverridePriority</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList">UserSchemaPropertyMasterOverridePriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOf">oneOf</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList">UserSchemaPropertyOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnumInput">arrayEnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOfInput">arrayOneOfInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayTypeInput">arrayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enumInput">enumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNameInput">externalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespaceInput">externalNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterInput">masterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriorityInput">masterOverridePriorityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLengthInput">maxLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLengthInput">minLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOfInput">oneOfInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.uniqueInput">uniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userTypeInput">userTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnum">arrayEnum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayType">arrayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enum">enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalName">externalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespace">externalNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.master">master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.unique">unique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userType">userType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arrayOneOf`<sup>Required</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOf"></a>

```typescript
public readonly arrayOneOf: UserSchemaPropertyArrayOneOfList;
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList">UserSchemaPropertyArrayOneOfList</a>

---

##### `masterOverridePriority`<sup>Required</sup> <a name="masterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriority"></a>

```typescript
public readonly masterOverridePriority: UserSchemaPropertyMasterOverridePriorityList;
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList">UserSchemaPropertyMasterOverridePriorityList</a>

---

##### `oneOf`<sup>Required</sup> <a name="oneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOf"></a>

```typescript
public readonly oneOf: UserSchemaPropertyOneOfList;
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList">UserSchemaPropertyOneOfList</a>

---

##### `arrayEnumInput`<sup>Optional</sup> <a name="arrayEnumInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnumInput"></a>

```typescript
public readonly arrayEnumInput: string[];
```

- *Type:* string[]

---

##### `arrayOneOfInput`<sup>Optional</sup> <a name="arrayOneOfInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOfInput"></a>

```typescript
public readonly arrayOneOfInput: IResolvable | UserSchemaPropertyArrayOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>[]

---

##### `arrayTypeInput`<sup>Optional</sup> <a name="arrayTypeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayTypeInput"></a>

```typescript
public readonly arrayTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enumInput"></a>

```typescript
public readonly enumInput: string[];
```

- *Type:* string[]

---

##### `externalNameInput`<sup>Optional</sup> <a name="externalNameInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNameInput"></a>

```typescript
public readonly externalNameInput: string;
```

- *Type:* string

---

##### `externalNamespaceInput`<sup>Optional</sup> <a name="externalNamespaceInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespaceInput"></a>

```typescript
public readonly externalNamespaceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `masterInput`<sup>Optional</sup> <a name="masterInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterInput"></a>

```typescript
public readonly masterInput: string;
```

- *Type:* string

---

##### `masterOverridePriorityInput`<sup>Optional</sup> <a name="masterOverridePriorityInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriorityInput"></a>

```typescript
public readonly masterOverridePriorityInput: IResolvable | UserSchemaPropertyMasterOverridePriority[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>[]

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLengthInput"></a>

```typescript
public readonly maxLengthInput: number;
```

- *Type:* number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: number;
```

- *Type:* number

---

##### `oneOfInput`<sup>Optional</sup> <a name="oneOfInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOfInput"></a>

```typescript
public readonly oneOfInput: IResolvable | UserSchemaPropertyOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>[]

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.uniqueInput"></a>

```typescript
public readonly uniqueInput: string;
```

- *Type:* string

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* string

---

##### `arrayEnum`<sup>Required</sup> <a name="arrayEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnum"></a>

```typescript
public readonly arrayEnum: string[];
```

- *Type:* string[]

---

##### `arrayType`<sup>Required</sup> <a name="arrayType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayType"></a>

```typescript
public readonly arrayType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

---

##### `externalName`<sup>Required</sup> <a name="externalName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalName"></a>

```typescript
public readonly externalName: string;
```

- *Type:* string

---

##### `externalNamespace`<sup>Required</sup> <a name="externalNamespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespace"></a>

```typescript
public readonly externalNamespace: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.unique"></a>

```typescript
public readonly unique: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserSchemaPropertyArrayOneOf <a name="UserSchemaPropertyArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

const userSchemaPropertyArrayOneOf: userSchemaProperty.UserSchemaPropertyArrayOneOf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.const">const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.title">title</a></code> | <code>string</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#const UserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

### UserSchemaPropertyConfig <a name="UserSchemaPropertyConfig" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

const userSchemaPropertyConfig: userSchemaProperty.UserSchemaPropertyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.index">index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.title">title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.type">type</a></code> | <code>string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayEnum">arrayEnum</a></code> | <code>string[]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayOneOf">arrayOneOf</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>[]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayType">arrayType</a></code> | <code>string</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.description">description</a></code> | <code>string</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.enum">enum</a></code> | <code>string[]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalName">externalName</a></code> | <code>string</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalNamespace">externalNamespace</a></code> | <code>string</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#id UserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.master">master</a></code> | <code>string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.masterOverridePriority">masterOverridePriority</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>[]</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.maxLength">maxLength</a></code> | <code>number</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.minLength">minLength</a></code> | <code>number</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.oneOf">oneOf</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>[]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.pattern">pattern</a></code> | <code>string</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#scope UserSchemaProperty#scope}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.unique">unique</a></code> | <code>string</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.userType">userType</a></code> | <code>string</code> | Custom subschema user type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#index UserSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#type UserSchemaProperty#type}

---

##### `arrayEnum`<sup>Optional</sup> <a name="arrayEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayEnum"></a>

```typescript
public readonly arrayEnum: string[];
```

- *Type:* string[]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#array_enum UserSchemaProperty#array_enum}

---

##### `arrayOneOf`<sup>Optional</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayOneOf"></a>

```typescript
public readonly arrayOneOf: IResolvable | UserSchemaPropertyArrayOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>[]

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#array_one_of UserSchemaProperty#array_one_of}

---

##### `arrayType`<sup>Optional</sup> <a name="arrayType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayType"></a>

```typescript
public readonly arrayType: string;
```

- *Type:* string

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#array_type UserSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Custom Subschema description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#description UserSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#enum UserSchemaProperty#enum}

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalName"></a>

```typescript
public readonly externalName: string;
```

- *Type:* string

Subschema external name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#external_name UserSchemaProperty#external_name}

---

##### `externalNamespace`<sup>Optional</sup> <a name="externalNamespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalNamespace"></a>

```typescript
public readonly externalNamespace: string;
```

- *Type:* string

Subschema external namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#external_namespace UserSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#id UserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#master UserSchemaProperty#master}

---

##### `masterOverridePriority`<sup>Optional</sup> <a name="masterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.masterOverridePriority"></a>

```typescript
public readonly masterOverridePriority: IResolvable | UserSchemaPropertyMasterOverridePriority[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>[]

master_override_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#master_override_priority UserSchemaProperty#master_override_priority}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#max_length UserSchemaProperty#max_length}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#min_length UserSchemaProperty#min_length}

---

##### `oneOf`<sup>Optional</sup> <a name="oneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.oneOf"></a>

```typescript
public readonly oneOf: IResolvable | UserSchemaPropertyOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>[]

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#one_of UserSchemaProperty#one_of}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#pattern UserSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#permissions UserSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#required UserSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#scope UserSchemaProperty#scope}.

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.unique"></a>

```typescript
public readonly unique: string;
```

- *Type:* string

Subschema unique restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#unique UserSchemaProperty#unique}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

Custom subschema user type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#user_type UserSchemaProperty#user_type}

---

### UserSchemaPropertyMasterOverridePriority <a name="UserSchemaPropertyMasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

const userSchemaPropertyMasterOverridePriority: userSchemaProperty.UserSchemaPropertyMasterOverridePriority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#value UserSchemaProperty#value}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#type UserSchemaProperty#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#value UserSchemaProperty#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#type UserSchemaProperty#type}.

---

### UserSchemaPropertyOneOf <a name="UserSchemaPropertyOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

const userSchemaPropertyOneOf: userSchemaProperty.UserSchemaPropertyOneOf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.const">const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.title">title</a></code> | <code>string</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#const UserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

## Classes <a name="Classes" id="Classes"></a>

### UserSchemaPropertyArrayOneOfList <a name="UserSchemaPropertyArrayOneOfList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

new userSchemaProperty.UserSchemaPropertyArrayOneOfList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get"></a>

```typescript
public get(index: number): UserSchemaPropertyArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserSchemaPropertyArrayOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>[]

---


### UserSchemaPropertyArrayOneOfOutputReference <a name="UserSchemaPropertyArrayOneOfOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

new userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.constInput">constInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.const">const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constInput`<sup>Optional</sup> <a name="constInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.constInput"></a>

```typescript
public readonly constInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserSchemaPropertyArrayOneOf;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>

---


### UserSchemaPropertyMasterOverridePriorityList <a name="UserSchemaPropertyMasterOverridePriorityList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

new userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get"></a>

```typescript
public get(index: number): UserSchemaPropertyMasterOverridePriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserSchemaPropertyMasterOverridePriority[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>[]

---


### UserSchemaPropertyMasterOverridePriorityOutputReference <a name="UserSchemaPropertyMasterOverridePriorityOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

new userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserSchemaPropertyMasterOverridePriority;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>

---


### UserSchemaPropertyOneOfList <a name="UserSchemaPropertyOneOfList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

new userSchemaProperty.UserSchemaPropertyOneOfList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get"></a>

```typescript
public get(index: number): UserSchemaPropertyOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserSchemaPropertyOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>[]

---


### UserSchemaPropertyOneOfOutputReference <a name="UserSchemaPropertyOneOfOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer"></a>

```typescript
import { userSchemaProperty } from '@cdktf/provider-okta'

new userSchemaProperty.UserSchemaPropertyOneOfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.constInput">constInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.const">const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constInput`<sup>Optional</sup> <a name="constInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.constInput"></a>

```typescript
public readonly constInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserSchemaPropertyOneOf;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>

---



