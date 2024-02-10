# `dataOktaUser` Submodule <a name="`dataOktaUser` Submodule" id="@cdktf/provider-okta.dataOktaUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaUser <a name="DataOktaUser" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user okta_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer"></a>

```typescript
import { dataOktaUser } from '@cdktf/provider-okta'

new dataOktaUser.DataOktaUser(scope: Construct, id: string, config?: DataOktaUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig">DataOktaUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig">DataOktaUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch">putSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetCompoundSearchOperator">resetCompoundSearchOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetDelayReadSeconds">resetDelayReadSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipRoles">resetSkipRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSearch` <a name="putSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch"></a>

```typescript
public putSearch(value: IResolvable | DataOktaUserSearch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>[]

---

##### `resetCompoundSearchOperator` <a name="resetCompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetCompoundSearchOperator"></a>

```typescript
public resetCompoundSearchOperator(): void
```

##### `resetDelayReadSeconds` <a name="resetDelayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetDelayReadSeconds"></a>

```typescript
public resetDelayReadSeconds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipGroups"></a>

```typescript
public resetSkipGroups(): void
```

##### `resetSkipRoles` <a name="resetSkipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipRoles"></a>

```typescript
public resetSkipRoles(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetUserId"></a>

```typescript
public resetUserId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct"></a>

```typescript
import { dataOktaUser } from '@cdktf/provider-okta'

dataOktaUser.DataOktaUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement"></a>

```typescript
import { dataOktaUser } from '@cdktf/provider-okta'

dataOktaUser.DataOktaUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource"></a>

```typescript
import { dataOktaUser } from '@cdktf/provider-okta'

dataOktaUser.DataOktaUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport"></a>

```typescript
import { dataOktaUser } from '@cdktf/provider-okta'

dataOktaUser.DataOktaUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOktaUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.adminRoles">adminRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.costCenter">costCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.customProfileAttributes">customProfileAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.department">department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.division">division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.employeeNumber">employeeNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.groupMemberships">groupMemberships</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificPrefix">honorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificSuffix">honorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.manager">manager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.managerId">managerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.nickName">nickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.postalAddress">postalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.primaryPhone">primaryPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.profileUrl">profileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.search">search</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList">DataOktaUserSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.secondEmail">secondEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userType">userType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperatorInput">compoundSearchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSecondsInput">delayReadSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.searchInput">searchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroupsInput">skipGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRolesInput">skipRolesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperator">compoundSearchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSeconds">delayReadSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRoles">skipRoles</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `adminRoles`<sup>Required</sup> <a name="adminRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.adminRoles"></a>

```typescript
public readonly adminRoles: string[];
```

- *Type:* string[]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.costCenter"></a>

```typescript
public readonly costCenter: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `customProfileAttributes`<sup>Required</sup> <a name="customProfileAttributes" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.customProfileAttributes"></a>

```typescript
public readonly customProfileAttributes: string;
```

- *Type:* string

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `employeeNumber`<sup>Required</sup> <a name="employeeNumber" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.employeeNumber"></a>

```typescript
public readonly employeeNumber: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `groupMemberships`<sup>Required</sup> <a name="groupMemberships" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.groupMemberships"></a>

```typescript
public readonly groupMemberships: string[];
```

- *Type:* string[]

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificPrefix"></a>

```typescript
public readonly honorificPrefix: string;
```

- *Type:* string

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificSuffix"></a>

```typescript
public readonly honorificSuffix: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `manager`<sup>Required</sup> <a name="manager" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.manager"></a>

```typescript
public readonly manager: string;
```

- *Type:* string

---

##### `managerId`<sup>Required</sup> <a name="managerId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.managerId"></a>

```typescript
public readonly managerId: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

---

##### `nickName`<sup>Required</sup> <a name="nickName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.nickName"></a>

```typescript
public readonly nickName: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.postalAddress"></a>

```typescript
public readonly postalAddress: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `primaryPhone`<sup>Required</sup> <a name="primaryPhone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.primaryPhone"></a>

```typescript
public readonly primaryPhone: string;
```

- *Type:* string

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.search"></a>

```typescript
public readonly search: DataOktaUserSearchList;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList">DataOktaUserSearchList</a>

---

##### `secondEmail`<sup>Required</sup> <a name="secondEmail" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.secondEmail"></a>

```typescript
public readonly secondEmail: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

##### `compoundSearchOperatorInput`<sup>Optional</sup> <a name="compoundSearchOperatorInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperatorInput"></a>

```typescript
public readonly compoundSearchOperatorInput: string;
```

- *Type:* string

---

##### `delayReadSecondsInput`<sup>Optional</sup> <a name="delayReadSecondsInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSecondsInput"></a>

```typescript
public readonly delayReadSecondsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.searchInput"></a>

```typescript
public readonly searchInput: IResolvable | DataOktaUserSearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>[]

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroupsInput"></a>

```typescript
public readonly skipGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipRolesInput`<sup>Optional</sup> <a name="skipRolesInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRolesInput"></a>

```typescript
public readonly skipRolesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `compoundSearchOperator`<sup>Required</sup> <a name="compoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperator"></a>

```typescript
public readonly compoundSearchOperator: string;
```

- *Type:* string

---

##### `delayReadSeconds`<sup>Required</sup> <a name="delayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSeconds"></a>

```typescript
public readonly delayReadSeconds: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipRoles`<sup>Required</sup> <a name="skipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRoles"></a>

```typescript
public readonly skipRoles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaUserConfig <a name="DataOktaUserConfig" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.Initializer"></a>

```typescript
import { dataOktaUser } from '@cdktf/provider-okta'

const dataOktaUserConfig: dataOktaUser.DataOktaUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.compoundSearchOperator">compoundSearchOperator</a></code> | <code>string</code> | Search operator used when joining mulitple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.delayReadSeconds">delayReadSeconds</a></code> | <code>string</code> | Force delay of the user read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#id DataOktaUser#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.search">search</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>[]</code> | search block. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not populate user groups information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipRoles">skipRoles</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.userId">userId</a></code> | <code>string</code> | Retrieve a single user based on their id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compoundSearchOperator`<sup>Optional</sup> <a name="compoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.compoundSearchOperator"></a>

```typescript
public readonly compoundSearchOperator: string;
```

- *Type:* string

Search operator used when joining mulitple search clauses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#compound_search_operator DataOktaUser#compound_search_operator}

---

##### `delayReadSeconds`<sup>Optional</sup> <a name="delayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.delayReadSeconds"></a>

```typescript
public readonly delayReadSeconds: string;
```

- *Type:* string

Force delay of the user read by N seconds.

Useful when eventual consistency of user information needs to be allowed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#delay_read_seconds DataOktaUser#delay_read_seconds}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#id DataOktaUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.search"></a>

```typescript
public readonly search: IResolvable | DataOktaUserSearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>[]

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#search DataOktaUser#search}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not populate user groups information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#skip_groups DataOktaUser#skip_groups}

---

##### `skipRoles`<sup>Optional</sup> <a name="skipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipRoles"></a>

```typescript
public readonly skipRoles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#skip_roles DataOktaUser#skip_roles}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Retrieve a single user based on their id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#user_id DataOktaUser#user_id}

---

### DataOktaUserSearch <a name="DataOktaUserSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.Initializer"></a>

```typescript
import { dataOktaUser } from '@cdktf/provider-okta'

const dataOktaUserSearch: dataOktaUser.DataOktaUserSearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.comparison">comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#comparison DataOktaUser#comparison}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.expression">expression</a></code> | <code>string</code> | A raw search expression string. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.name">name</a></code> | <code>string</code> | Property name to search for. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#value DataOktaUser#value}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#comparison DataOktaUser#comparison}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

A raw search expression string.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#expression DataOktaUser#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Property name to search for.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#name DataOktaUser#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/data-sources/user#value DataOktaUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaUserSearchList <a name="DataOktaUserSearchList" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer"></a>

```typescript
import { dataOktaUser } from '@cdktf/provider-okta'

new dataOktaUser.DataOktaUserSearchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get"></a>

```typescript
public get(index: number): DataOktaUserSearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOktaUserSearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>[]

---


### DataOktaUserSearchOutputReference <a name="DataOktaUserSearchOutputReference" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer"></a>

```typescript
import { dataOktaUser } from '@cdktf/provider-okta'

new dataOktaUser.DataOktaUserSearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOktaUserSearch;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>

---



